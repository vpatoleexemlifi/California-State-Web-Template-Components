// This file should be renamed to vite.config.mjs for ESM support
import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: resolve(process.cwd(), 'src/assets/js/custom.js'),
      output: {
        dir: 'src/assets/dist',
        entryFileNames: 'main.js',
        assetFileNames: '[name][extname]',
      },
    },
    outDir: 'src/assets/dist',
    emptyOutDir: false,
  },
}); 