// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://algorisme.github.io',
  base: '/cyb-dicc',
  output: 'static',
  trailingSlash: 'always',
});
