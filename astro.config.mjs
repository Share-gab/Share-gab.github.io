// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://portfolio-sharine-gabriella-website.vercel.app',
  integrations: [react()],

  server: {
    port:3000,
    host: true,
  },

  devToolbar:{
    enabled:false,
  },
});