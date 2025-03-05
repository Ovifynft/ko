import { defineConfig } from 'astro/config';

import svelte from '@astrojs/svelte';

import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  integrations: [svelte(), react()],

  vite: {
    plugins: [tailwindcss()]
  },

  adapter: vercel()
});