import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Enable minification
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    // Optimize chunk splitting
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          icons: ['react-icons'],
        },
      },
    },
    // Enable source maps for production debugging
    sourcemap: false,
    // Optimize asset handling
    assetsInlineLimit: 4096,
  },
  // Enable compression
  server: {
    headers: {
      'Cache-Control': 'public, max-age=31536000',
    },
  },
});
