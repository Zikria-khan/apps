import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // This will be the output directory for the production build
    rollupOptions: {
      // The 'external' option is not needed unless you want to externalize certain modules
    },
  },
});
