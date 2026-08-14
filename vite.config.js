import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  // Relative base so the build works uploaded to a domain root OR a
  // subfolder (e.g. public_html/portfolio) on Safaricom / cPanel hosting.
  base: './',
  plugins: [react()],
  build: {
    target: 'es2020',
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        // Keep GSAP in its own chunk so the app shell stays small.
        manualChunks: {
          gsap: ['gsap'],
        },
      },
    },
  },
});
