import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Alias for slick-carousel to ensure correct resolution
      'slick-carousel': path.resolve(__dirname, 'node_modules/slick-carousel/slick')
    }
  },
  css: {
    // Ensure CSS files are processed correctly
    preprocessorOptions: {
      scss: {
        additionalData: `@import "slick-carousel/slick/slick.css"; @import "slick-carousel/slick/slick-theme.css";`
      }
    }
  }
});