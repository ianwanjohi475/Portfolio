import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Serve the embedded Converta app's index.html for the bare "/converta/" URL
// in dev + preview (Vite's SPA fallback would otherwise return the portfolio).
// On the real host (Apache/cPanel) DirectoryIndex already does this.
function serveConverta() {
  const rewrite = (req, _res, next) => {
    if (req.url === '/converta' || req.url === '/converta/') {
      req.url = '/converta/index.html';
    }
    next();
  };
  return {
    name: 'serve-converta-index',
    configureServer(server) {
      server.middlewares.use(rewrite);
    },
    configurePreviewServer(server) {
      server.middlewares.use(rewrite);
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  // Relative base so the build works uploaded to a domain root OR a
  // subfolder (e.g. public_html/portfolio) on Safaricom / cPanel hosting.
  base: './',
  plugins: [serveConverta(), react()],
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
