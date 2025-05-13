import { defineConfig } from 'astro/config';

import svelte from '@astrojs/svelte';

import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

import vercel from '@astrojs/vercel';

import alpinejs from '@astrojs/alpinejs';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://kamiloseni.com',
  integrations: [svelte(), react(), alpinejs(), sitemap()],

  vite: {
    plugins: [tailwindcss()]
  },

  adapter: vercel()
});