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
        // Split heavy 3D / animation libs into their own chunks so the
        // above-the-fold bundle stays small and Lighthouse-friendly.
        manualChunks: {
          three: ['three'],
          r3f: ['@react-three/fiber', '@react-three/drei'],
          motion: ['framer-motion', 'gsap'],
        },
      },
    },
  },
});
