import { defineConfig } from 'vite';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  root: resolve(__dirname, 'public'),
  publicDir: resolve(__dirname, 'public'),

  build: {
    outDir: resolve(__dirname, 'dist'),
    emptyOutDir: true,
    minify: 'terser',
    sourcemap: true,

    rollupOptions: {
      input: {
        main: resolve(__dirname, 'public/index.html'),
      },
      output: {
        assetFileNames: 'assets/[name].[hash][extname]',
        chunkFileNames: 'assets/[name].[hash].js',
        entryFileNames: 'assets/[name].[hash].js',
      },
    },

    // Performance optimizations
    target: 'esnext',
    cssCodeSplit: true,

    // Chunk size warnings
    chunkSizeWarningLimit: 500,
  },

  server: {
    port: 3000,
    open: true,
    host: true,
    cors: true,

    // Hot Module Replacement
    hmr: {
      overlay: true,
    },
  },

  preview: {
    port: 4173,
    open: true,
  },

  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@components': resolve(__dirname, 'src/components'),
      '@services': resolve(__dirname, 'src/services'),
      '@utils': resolve(__dirname, 'src/utils'),
      '@styles': resolve(__dirname, 'src/styles'),
    },
  },

  // Optimization options
  optimizeDeps: {
    include: [],
  },

  // Build options for production
  esbuild: {
    drop: ['console', 'debugger'],
  },
});
