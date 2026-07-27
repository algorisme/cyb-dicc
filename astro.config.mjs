// @ts-check
import { defineConfig } from 'astro/config';
import { remarkAutolinkTermes } from './src/lib/remark-autolink-termes.ts';

// https://astro.build/config
export default defineConfig({
  site: 'https://algorisme.github.io',
  base: '/cyb-dicc',
  output: 'static',
  trailingSlash: 'always',
  markdown: {
    remarkPlugins: [remarkAutolinkTermes],
  },
});
