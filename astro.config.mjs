// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://artin-studio.pl',
  integrations: [
    tailwind(),
    sitemap({
      // Polish (root) is the highest-priority canonical version.
      // Hreflang alternates are emitted from the HTML <head> in Layout.astro.
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      // /card/ is a private print-preview page — keep it out of the sitemap.
      filter: (page) => !page.includes('/card'),
      serialize(item) {
        if (item.url === 'https://artin-studio.pl/') {
          item.priority = 1.0;
          item.changefreq = 'weekly';
        }
        return item;
      },
    }),
  ],
});
