// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://freestyler-rmg.github.io',
  base: 'landing-nyan-cat',
  vite: {
    plugins: [tailwindcss()]
  }
});