import { defineConfig } from 'astro/config';

import svelte from '@astrojs/svelte';

import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

import vercel from '@astrojs/vercel';

import alpinejs from '@astrojs/alpinejs';

// https://astro.build/config
export default defineConfig({
  integrations: [svelte(), react(), alpinejs()],

  vite: {
    plugins: [tailwindcss()]
  },

  adapter: vercel()
});