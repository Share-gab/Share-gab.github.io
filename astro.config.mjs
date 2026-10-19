// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://share-gab.github.io',
  integrations: [react()],

  server: {
    port:3000,
    host: true,
  },

  devToolbar:{
    enabled:false,
  },
});