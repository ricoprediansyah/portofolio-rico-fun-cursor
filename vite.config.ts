import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // './' supaya hasil build bisa dibuka dari subfolder (mis. GitHub Pages).
  base: './',
});
