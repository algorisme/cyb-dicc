// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { remarkAutolinkTermes } from './src/lib/remark-autolink-termes.ts';

// https://astro.build/config
export default defineConfig({
  site: 'https://algorisme.github.io',
  base: '/cyb-dicc',
  output: 'static',
  trailingSlash: 'always',
  integrations: [sitemap()],
  markdown: {
    remarkPlugins: [remarkAutolinkTermes],
  },
});
