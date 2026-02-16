# Lead Flow North Website

Production marketing site for Lead Flow North built with Astro 5 + Tailwind 4.

## Stack

- Astro (static build)
- Tailwind CSS
- TypeScript
- Astro integrations: sitemap, rss

## Local Development

```bash
npm install
npm run dev
```

The dev server runs at `http://localhost:4321` by default.

## Quality Checks

```bash
npm run check
npm run build
npm run ci
```

## Environment Variables

Create `.env` from `.env.example` and set public IDs/endpoints used in client-side forms and analytics.

- `PUBLIC_GA_MEASUREMENT_ID`
- `PUBLIC_CHAT_PROVIDER` (`hubspot` or `botpress`)
- `PUBLIC_CAL_LINK`
- `PUBLIC_BOTPRESS_INJECT_URL`
- `PUBLIC_BOTPRESS_CONFIG_URL`
- `PUBLIC_BOTPRESS_BOT_ID`
- `PUBLIC_BOTPRESS_CLIENT_ID`
- `PUBLIC_HUBSPOT_CONTACT_FORM_ENDPOINT`
- `PUBLIC_HUBSPOT_AUDIT_FORM_ENDPOINT`
- `PUBLIC_HUBSPOT_ROI_FORM_ENDPOINT`

## Project Structure

- `src/layouts` shared page shells and metadata
- `src/pages` routed pages
- `src/components` reusable UI blocks
- `src/data` static data used by dynamic routes
- `public` static assets

## Notes

- Demo/sample routes are intentionally marked `noindex`.
- `/book-call` is the centralized booking route so scheduling links can be changed in one place.
