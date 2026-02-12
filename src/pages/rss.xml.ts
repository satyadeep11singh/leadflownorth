import rss from '@astrojs/rss';
import type { APIContext } from 'astro';

// Blog post data - in a real scenario, this would come from a CMS or content collection
const blogPosts = [
  {
    title: 'Complete Guide to Plumbing Marketing in Canada',
    description: 'Capture emergency calls, convert more quotes, and build a referral engine with automated sequences.',
    link: '/blog/plumbing-marketing-guide-canada',
    pubDate: new Date('2025-01-15'),
    category: 'Home Services'
  },
  {
    title: 'Complete Guide to Childcare Program Marketing in Canada',
    description: 'Fill your before/after school, summer camps, and enrichment programs with smart registration and parent engagement.',
    link: '/blog/childcare-programs-marketing-guide-canada',
    pubDate: new Date('2025-01-14'),
    category: 'Daycare & Childcare'
  },
  {
    title: 'Complete Guide to HVAC Marketing in Canada',
    description: 'Win more seasonal service contracts and emergency calls with targeted HVAC marketing automation.',
    link: '/blog/hvac-marketing-guide-canada',
    pubDate: new Date('2025-01-13'),
    category: 'Home Services'
  },
  {
    title: 'Complete Guide to Dental Practice Marketing in Canada',
    description: 'Fill your hygiene chairs and attract high-value cases with patient-focused marketing strategies.',
    link: '/blog/dental-marketing-guide-canada',
    pubDate: new Date('2025-01-12'),
    category: 'Healthcare'
  },
  {
    title: 'Complete Guide to Real Estate Marketing in Canada',
    description: 'Generate seller leads and build your referral network with real estate marketing automation.',
    link: '/blog/real-estate-marketing-guide-canada',
    pubDate: new Date('2025-01-11'),
    category: 'Real Estate'
  },
  {
    title: 'Complete Guide to Restaurant Marketing in Canada',
    description: 'Fill tables during slow periods and build customer loyalty with restaurant marketing automation.',
    link: '/blog/restaurant-marketing-guide-canada',
    pubDate: new Date('2025-01-10'),
    category: 'Food & Hospitality'
  },
  {
    title: 'Complete Guide to Fitness Studio Marketing in Canada',
    description: 'Convert trial members into loyal clients and reduce churn with gym and fitness marketing.',
    link: '/blog/fitness-marketing-guide-canada',
    pubDate: new Date('2025-01-09'),
    category: 'Fitness & Wellness'
  },
  {
    title: 'Complete Guide to Legal Marketing in Canada',
    description: 'Attract more qualified clients and build authority in your practice area with legal marketing.',
    link: '/blog/legal-marketing-guide-canada',
    pubDate: new Date('2025-01-08'),
    category: 'Legal'
  },
  {
    title: 'Complete Guide to Auto Repair Marketing in Canada',
    description: 'Build a steady stream of maintenance customers and win more repair jobs with auto shop marketing.',
    link: '/blog/auto-repair-marketing-guide-canada',
    pubDate: new Date('2025-01-07'),
    category: 'Automotive'
  },
  {
    title: 'Complete Guide to Accounting Firm Marketing in Canada',
    description: 'Attract year-round clients beyond tax season with accounting and bookkeeping marketing.',
    link: '/blog/accountants-marketing-guide-canada',
    pubDate: new Date('2025-01-06'),
    category: 'Professional Services'
  }
];

export function GET(context: APIContext) {
  return rss({
    // Channel metadata
    title: 'Lead Flow North Blog',
    description: 'Marketing guides, case studies, and growth strategies for Canadian small businesses. Learn how to get more leads and customers.',
    site: context.site || 'https://leadflownorth.com',
    
    // RSS items
    items: blogPosts.map(post => ({
      title: post.title,
      description: post.description,
      link: post.link,
      pubDate: post.pubDate,
      categories: [post.category],
      author: 'hello@leadflownorth.com (Lead Flow North)'
    })),
    
    // Custom XML for additional channel info
    customData: `
      <language>en-CA</language>
      <copyright>© ${new Date().getFullYear()} Lead Flow North. All rights reserved.</copyright>
      <managingEditor>hello@leadflownorth.com (Satyadeep Singh)</managingEditor>
      <webMaster>hello@leadflownorth.com (Lead Flow North)</webMaster>
      <category>Business</category>
      <category>Marketing</category>
      <category>Small Business</category>
      <ttl>60</ttl>
      <image>
        <url>https://leadflownorth.com/logos/lfn-light-200.png</url>
        <title>Lead Flow North Blog</title>
        <link>https://leadflownorth.com</link>
      </image>
    `,
    
    // Use pretty XML formatting
    trailingSlash: false,
  });
}
