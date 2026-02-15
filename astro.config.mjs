// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

const sitemapExcludePaths = new Set([
  '/book-call/',
  '/thank-you/'
]);

const sitemapExcludePrefixes = ['/demos/', '/samples/'];

// https://astro.build/config
export default defineConfig({
  site: 'https://leadflownorth.com',
  integrations: [
    sitemap({
      filter: (page) => {
        const pathname = new URL(page).pathname;
        if (sitemapExcludePaths.has(pathname)) return false;
        if (sitemapExcludePrefixes.some((prefix) => pathname === prefix.slice(0, -1) || pathname.startsWith(prefix))) return false;
        return true;
      }
    })
  ],
  prefetch: {
    // Avoid mass prefetching across 200+ routes.
    prefetchAll: false,
    defaultStrategy: 'hover'
  },
  vite: {
    plugins: [tailwindcss()],
    build: {
      cssMinify: 'lightningcss',
      rollupOptions: {
        output: {
          manualChunks: undefined
        }
      }
    }
  },
  compressHTML: true,
  build: {
    // Let CSS be cached between page visits.
    inlineStylesheets: 'auto',
    // Inline small scripts to reduce request chains
    assets: '_astro'
  }
});
