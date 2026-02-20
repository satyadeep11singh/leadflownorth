import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { generalPosts, industryContent } from '../data/blog-posts';

// Map industry short labels to RSS categories
const industryCategories: Record<string, string> = {
  'Home Services': 'Home Services',
  'Legal': 'Legal',
  'Medical': 'Healthcare',
  'Fitness': 'Fitness & Wellness',
  'Auto': 'Automotive',
  'Salons': 'Beauty & Wellness',
  'Retail': 'E-commerce & Retail',
  'Professional': 'Professional Services',
  'Nonprofit': 'Nonprofits',
  'Daycare': 'Daycare & Childcare',
  'Contractors': 'Contractors & Trades'
};

export function GET(context: APIContext) {
  // Build items from general posts
  const generalItems = generalPosts.map((post, i) => ({
    title: post.title,
    description: post.excerpt,
    link: `/blog/${post.slug}`,
    pubDate: new Date(`2026-01-${String(15 - i).padStart(2, '0')}`),
    categories: [post.category]
  }));

  // Build items from industry content (guides and case studies)
  const industryItems = industryContent.map((post, i) => ({
    title: post.title,
    description: `${post.type === 'Guide' ? 'Marketing automation guide' : 'Real-world success story'} for ${post.industry.toLowerCase()} businesses in Canada.`,
    link: `/blog/${post.slug}`,
    pubDate: new Date(`2025-12-${String(31 - (i % 28)).padStart(2, '0')}`),
    categories: [industryCategories[post.industry] || post.industry, post.type]
  }));

  return rss({
    title: 'Lead Flow North Blog',
    description: 'Marketing guides, case studies, and growth strategies for Canadian small businesses. Learn how to get more leads and customers.',
    site: context.site || 'https://leadflownorth.com',
    items: [...generalItems, ...industryItems].map((item) => ({
      ...item,
      author: 'hello@leadflownorth.com (Lead Flow North)'
    })),
    customData: `
      <language>en-CA</language>
      <copyright>&copy; ${new Date().getFullYear()} Lead Flow North. All rights reserved.</copyright>
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
    trailingSlash: false,
  });
}
