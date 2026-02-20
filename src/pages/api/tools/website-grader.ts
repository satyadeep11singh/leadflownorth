import type { APIRoute } from 'astro';

type CheckStatus = 'pass' | 'warn' | 'fail';
type CheckCategory = 'performance' | 'seo' | 'mobile' | 'trust';

interface GradeCheck {
  id: string;
  category: CheckCategory;
  label: string;
  status: CheckStatus;
  detail: string;
  recommendation: string;
  weight: number;
}

const PRIVATE_HOST_PATTERNS = [
  /^localhost$/i,
  /^127\./,
  /^10\./,
  /^192\.168\./,
  /^169\.254\./,
  /^172\.(1[6-9]|2\d|3[01])\./,
  /^::1$/,
  /\.local$/i,
];

function isPrivateHost(hostname: string): boolean {
  return PRIVATE_HOST_PATTERNS.some((pattern) => pattern.test(hostname));
}

function normalizeTargetUrl(input: string): URL | null {
  const raw = input.trim();
  if (!raw) return null;

  try {
    return new URL(raw);
  } catch (_error) {
    try {
      return new URL(`https://${raw}`);
    } catch (_secondError) {
      return null;
    }
  }
}

function normalizeWhitespace(value: string): string {
  return value.replace(/\s+/g, ' ').trim();
}

function extractTitle(html: string): string {
  const match = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  if (!match) return '';
  return normalizeWhitespace(match[1].replace(/<[^>]*>/g, ''));
}

function extractMetaContent(html: string, name: string): string {
  const metaTags = html.match(/<meta\b[^>]*>/gi) ?? [];
  const targetName = name.toLowerCase();

  for (const tag of metaTags) {
    const nameMatch = tag.match(/\bname\s*=\s*["']([^"']+)["']/i);
    if (!nameMatch || nameMatch[1].toLowerCase() !== targetName) continue;
    const contentMatch = tag.match(/\bcontent\s*=\s*["']([^"']*)["']/i);
    if (contentMatch) return normalizeWhitespace(contentMatch[1]);
  }

  return '';
}

function extractCanonical(html: string): string {
  const linkTags = html.match(/<link\b[^>]*>/gi) ?? [];
  for (const tag of linkTags) {
    const relMatch = tag.match(/\brel\s*=\s*["']([^"']+)["']/i);
    if (!relMatch) continue;
    const rels = relMatch[1].toLowerCase().split(/\s+/);
    if (!rels.includes('canonical')) continue;
    const hrefMatch = tag.match(/\bhref\s*=\s*["']([^"']+)["']/i);
    if (hrefMatch) return hrefMatch[1].trim();
  }
  return '';
}

function countMatches(input: string, pattern: RegExp): number {
  const matches = input.match(pattern);
  return matches ? matches.length : 0;
}

function classifyThreshold(value: number, passMax: number, warnMax: number): CheckStatus {
  if (value <= passMax) return 'pass';
  if (value <= warnMax) return 'warn';
  return 'fail';
}

function classifyReverseThreshold(value: number, passMin: number, warnMin: number): CheckStatus {
  if (value >= passMin) return 'pass';
  if (value >= warnMin) return 'warn';
  return 'fail';
}

function scoreMultiplier(status: CheckStatus): number {
  if (status === 'pass') return 1;
  if (status === 'warn') return 0.5;
  return 0;
}

function scoreCategory(checks: GradeCheck[], category: CheckCategory): number {
  const filtered = checks.filter((check) => check.category === category);
  const max = filtered.reduce((sum, check) => sum + check.weight, 0);
  if (max === 0) return 0;
  const raw = filtered.reduce((sum, check) => sum + check.weight * scoreMultiplier(check.status), 0);
  return Math.round((raw / max) * 100);
}

function gradeLabel(overall: number): string {
  if (overall >= 90) return 'A';
  if (overall >= 80) return 'B';
  if (overall >= 70) return 'C';
  if (overall >= 60) return 'D';
  return 'F';
}

export const GET: APIRoute = async ({ request }) => {
  const reqUrl = new URL(request.url);
  const targetRaw = reqUrl.searchParams.get('url') ?? '';
  const parsedUrl = normalizeTargetUrl(targetRaw);

  if (!parsedUrl) {
    return new Response(
      JSON.stringify({ error: 'Invalid URL. Enter a valid website domain or URL.' }),
      { status: 400, headers: { 'content-type': 'application/json' } }
    );
  }

  if (!['http:', 'https:'].includes(parsedUrl.protocol)) {
    return new Response(
      JSON.stringify({ error: 'Only HTTP and HTTPS URLs are supported.' }),
      { status: 400, headers: { 'content-type': 'application/json' } }
    );
  }

  if (isPrivateHost(parsedUrl.hostname)) {
    return new Response(
      JSON.stringify({ error: 'Private or local network hosts are not supported.' }),
      { status: 400, headers: { 'content-type': 'application/json' } }
    );
  }

  const timeout = 12000;
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeout);
  const startedAt = Date.now();

  let response: Response;
  try {
    response = await fetch(parsedUrl.toString(), {
      method: 'GET',
      redirect: 'follow',
      signal: controller.signal,
      headers: {
        'user-agent': 'LeadFlowNorth Website Grader/1.0',
        'accept': 'text/html,application/xhtml+xml'
      }
    });
  } catch (error) {
    clearTimeout(timer);
    const message = error instanceof Error && error.name === 'AbortError'
      ? 'Timed out while trying to reach the website.'
      : 'Could not fetch this website. Please confirm the URL is public.';
    return new Response(JSON.stringify({ error: message }), {
      status: 502,
      headers: { 'content-type': 'application/json' }
    });
  }

  clearTimeout(timer);
  const responseTimeMs = Date.now() - startedAt;

  const contentType = response.headers.get('content-type') ?? '';
  const html = await response.text();
  const htmlSizeBytes = new TextEncoder().encode(html).length;

  if (!contentType.toLowerCase().includes('text/html') && !html.includes('<html')) {
    return new Response(
      JSON.stringify({ error: 'This URL does not appear to return an HTML page.' }),
      { status: 400, headers: { 'content-type': 'application/json' } }
    );
  }

  const title = extractTitle(html);
  const titleLength = title.length;
  const metaDescription = extractMetaContent(html, 'description');
  const metaDescriptionLength = metaDescription.length;
  const robots = extractMetaContent(html, 'robots').toLowerCase();
  const canonical = extractCanonical(html);

  const h1Count = countMatches(html, /<h1\b[^>]*>/gi);
  const viewportTag = /<meta\b[^>]*name\s*=\s*["']viewport["'][^>]*>/i.test(html);
  const viewportDeviceWidth = /<meta\b[^>]*name\s*=\s*["']viewport["'][^>]*content\s*=\s*["'][^"']*width=device-width/i.test(html);
  const hasLang = /<html\b[^>]*\blang\s*=\s*["'][^"']+["']/i.test(html);

  const imageTags = html.match(/<img\b[^>]*>/gi) ?? [];
  const imageCount = imageTags.length;
  const imagesMissingAlt = imageTags.filter((tag) => {
    const altMatch = tag.match(/\balt\s*=\s*["']([^"']*)["']/i);
    return !altMatch || altMatch[1].trim().length === 0;
  }).length;
  const altCoverage = imageCount > 0 ? ((imageCount - imagesMissingAlt) / imageCount) * 100 : 100;

  const links = [...html.matchAll(/<a\b[^>]*\bhref\s*=\s*["']([^"']+)["'][^>]*>/gi)].map((match) => match[1]);
  const internalLinks = links.filter((href) => href.startsWith('/') || href.includes(parsedUrl.hostname)).length;
  const externalLinks = links.filter((href) => /^https?:\/\//i.test(href) && !href.includes(parsedUrl.hostname)).length;
  const hasPrivacyLink = /href\s*=\s*["'][^"']*(privacy|terms|legal)/i.test(html);
  const hasDirectContactLink = /href\s*=\s*["'](mailto:|tel:)/i.test(html);

  const encoding = (response.headers.get('content-encoding') ?? '').toLowerCase();
  const hasCompression = encoding.includes('gzip') || encoding.includes('br') || encoding.includes('deflate');
  const hsts = response.headers.get('strict-transport-security');
  const csp = response.headers.get('content-security-policy');
  const xFrame = response.headers.get('x-frame-options');

  const checks: GradeCheck[] = [];
  const statusCode = response.status;
  const isHttps = response.url.startsWith('https://');

  checks.push({
    id: 'status-code',
    category: 'trust',
    label: 'Server responded successfully',
    status: statusCode < 400 ? 'pass' : 'fail',
    detail: `HTTP status ${statusCode}`,
    recommendation: 'Resolve server errors and broken redirects.',
    weight: 10,
  });

  const responseStatus = classifyThreshold(responseTimeMs, 1500, 3000);
  checks.push({
    id: 'response-time',
    category: 'performance',
    label: 'Initial response time',
    status: responseStatus,
    detail: `${responseTimeMs} ms`,
    recommendation: 'Improve hosting, caching, and reduce server processing time.',
    weight: 30,
  });

  const htmlSizeStatus = classifyThreshold(htmlSizeBytes, 300_000, 600_000);
  checks.push({
    id: 'html-size',
    category: 'performance',
    label: 'HTML payload size',
    status: htmlSizeStatus,
    detail: `${Math.round(htmlSizeBytes / 1024)} KB`,
    recommendation: 'Reduce large inline scripts/styles and remove unused markup.',
    weight: 20,
  });

  checks.push({
    id: 'compression',
    category: 'performance',
    label: 'Compression enabled',
    status: hasCompression ? 'pass' : 'warn',
    detail: hasCompression ? `Enabled (${encoding || 'compressed'})` : 'No compression header detected',
    recommendation: 'Enable Brotli or GZIP compression to reduce transfer size.',
    weight: 15,
  });

  checks.push({
    id: 'title-exists',
    category: 'seo',
    label: 'Title tag present',
    status: title ? 'pass' : 'fail',
    detail: title ? `Found (${titleLength} chars)` : 'Missing title tag',
    recommendation: 'Add a clear unique title tag for every page.',
    weight: 20,
  });

  const titleLenStatus = title
    ? (titleLength >= 30 && titleLength <= 60 ? 'pass' : 'warn')
    : 'fail';
  checks.push({
    id: 'title-length',
    category: 'seo',
    label: 'Title length quality',
    status: titleLenStatus,
    detail: `${titleLength} characters`,
    recommendation: 'Target 30-60 characters for stronger search snippets.',
    weight: 10,
  });

  checks.push({
    id: 'meta-description',
    category: 'seo',
    label: 'Meta description present',
    status: metaDescription ? 'pass' : 'fail',
    detail: metaDescription ? `Found (${metaDescriptionLength} chars)` : 'Missing meta description',
    recommendation: 'Add a compelling meta description for better click-through rate.',
    weight: 20,
  });

  const descriptionStatus = metaDescription
    ? (metaDescriptionLength >= 120 && metaDescriptionLength <= 160 ? 'pass' : 'warn')
    : 'fail';
  checks.push({
    id: 'meta-description-length',
    category: 'seo',
    label: 'Meta description length',
    status: descriptionStatus,
    detail: `${metaDescriptionLength} characters`,
    recommendation: 'Target 120-160 characters for full search snippet visibility.',
    weight: 10,
  });

  let h1Status: CheckStatus = 'fail';
  if (h1Count === 1) h1Status = 'pass';
  if (h1Count > 1) h1Status = 'warn';
  checks.push({
    id: 'h1-structure',
    category: 'seo',
    label: 'H1 heading structure',
    status: h1Status,
    detail: `${h1Count} H1 tag${h1Count === 1 ? '' : 's'}`,
    recommendation: 'Use exactly one clear H1 heading describing the page topic.',
    weight: 15,
  });

  checks.push({
    id: 'canonical',
    category: 'seo',
    label: 'Canonical tag present',
    status: canonical ? 'pass' : 'warn',
    detail: canonical ? `Found (${canonical})` : 'Canonical tag not found',
    recommendation: 'Add a canonical URL to prevent duplicate-indexing issues.',
    weight: 10,
  });

  checks.push({
    id: 'robots-noindex',
    category: 'seo',
    label: 'Indexing not blocked',
    status: robots.includes('noindex') ? 'fail' : 'pass',
    detail: robots ? `robots="${robots}"` : 'No restrictive robots meta found',
    recommendation: 'Remove noindex for pages that should rank in search.',
    weight: 15,
  });

  const altStatus = classifyReverseThreshold(altCoverage, 90, 70);
  checks.push({
    id: 'image-alt-coverage',
    category: 'seo',
    label: 'Image alt text coverage',
    status: altStatus,
    detail: `${Math.round(altCoverage)}% (${imagesMissingAlt}/${imageCount} missing alt)`,
    recommendation: 'Add descriptive alt text to improve accessibility and image SEO.',
    weight: 10,
  });

  checks.push({
    id: 'viewport-meta',
    category: 'mobile',
    label: 'Viewport meta tag',
    status: viewportTag ? 'pass' : 'fail',
    detail: viewportTag ? 'Viewport meta found' : 'Viewport meta missing',
    recommendation: 'Include a viewport meta tag for proper mobile rendering.',
    weight: 40,
  });

  checks.push({
    id: 'viewport-width',
    category: 'mobile',
    label: 'Responsive viewport settings',
    status: viewportDeviceWidth ? 'pass' : (viewportTag ? 'warn' : 'fail'),
    detail: viewportDeviceWidth ? 'width=device-width detected' : 'Missing width=device-width',
    recommendation: 'Use width=device-width in viewport settings.',
    weight: 20,
  });

  checks.push({
    id: 'lang-attribute',
    category: 'mobile',
    label: 'HTML language declared',
    status: hasLang ? 'pass' : 'warn',
    detail: hasLang ? 'lang attribute present' : 'lang attribute missing',
    recommendation: 'Set lang on the html element for accessibility and browser behavior.',
    weight: 20,
  });

  const responsiveAssets = countMatches(html, /\bsrcset\s*=/gi) + countMatches(html, /<picture\b/gi);
  checks.push({
    id: 'responsive-images',
    category: 'mobile',
    label: 'Responsive image hints',
    status: responsiveAssets > 0 ? 'pass' : (imageCount > 0 ? 'warn' : 'pass'),
    detail: responsiveAssets > 0 ? `${responsiveAssets} responsive image hint(s) found` : 'No srcset/picture hints found',
    recommendation: 'Use srcset or picture for better mobile image performance.',
    weight: 20,
  });

  checks.push({
    id: 'https',
    category: 'trust',
    label: 'Secure HTTPS URL',
    status: isHttps ? 'pass' : 'fail',
    detail: isHttps ? 'HTTPS enabled' : 'Not using HTTPS',
    recommendation: 'Serve the site over HTTPS and redirect HTTP to HTTPS.',
    weight: 20,
  });

  checks.push({
    id: 'hsts-header',
    category: 'trust',
    label: 'HSTS security header',
    status: hsts ? 'pass' : 'warn',
    detail: hsts ? 'HSTS header present' : 'HSTS header not found',
    recommendation: 'Add Strict-Transport-Security to enforce HTTPS in browsers.',
    weight: 15,
  });

  checks.push({
    id: 'csp-header',
    category: 'trust',
    label: 'Content-Security-Policy header',
    status: csp ? 'pass' : 'warn',
    detail: csp ? 'CSP header present' : 'CSP header not found',
    recommendation: 'Add a CSP header to reduce injection and script risks.',
    weight: 15,
  });

  checks.push({
    id: 'frame-protection',
    category: 'trust',
    label: 'Frame embedding protection',
    status: xFrame || (csp && csp.includes('frame-ancestors')) ? 'pass' : 'warn',
    detail: xFrame ? `X-Frame-Options: ${xFrame}` : 'No frame protection detected',
    recommendation: 'Set X-Frame-Options or frame-ancestors policy to reduce clickjacking risk.',
    weight: 10,
  });

  checks.push({
    id: 'privacy-link',
    category: 'trust',
    label: 'Privacy/legal link found',
    status: hasPrivacyLink ? 'pass' : 'warn',
    detail: hasPrivacyLink ? 'Privacy or terms link detected' : 'No privacy/legal link detected',
    recommendation: 'Add visible privacy and terms links in footer or navigation.',
    weight: 20,
  });

  checks.push({
    id: 'direct-contact-link',
    category: 'trust',
    label: 'Direct contact link available',
    status: hasDirectContactLink ? 'pass' : 'warn',
    detail: hasDirectContactLink ? 'mailto/tel link detected' : 'No mailto/tel link detected',
    recommendation: 'Add direct contact actions (call/email) for faster lead conversion.',
    weight: 10,
  });

  const scores = {
    performance: scoreCategory(checks, 'performance'),
    seo: scoreCategory(checks, 'seo'),
    mobile: scoreCategory(checks, 'mobile'),
    trust: scoreCategory(checks, 'trust'),
  };
  const overall = Math.round((scores.performance + scores.seo + scores.mobile + scores.trust) / 4);

  const payload = {
    url: targetRaw,
    normalizedUrl: parsedUrl.toString(),
    finalUrl: response.url,
    generatedAt: new Date().toISOString(),
    statusCode,
    responseTimeMs,
    htmlSizeBytes,
    grade: gradeLabel(overall),
    scores: {
      ...scores,
      overall,
    },
    summary: {
      title,
      titleLength,
      metaDescriptionLength,
      h1Count,
      imageCount,
      imagesMissingAlt,
      internalLinks,
      externalLinks,
    },
    checks,
  };

  return new Response(JSON.stringify(payload), {
    status: 200,
    headers: {
      'content-type': 'application/json',
      'cache-control': 'no-store'
    }
  });
};
