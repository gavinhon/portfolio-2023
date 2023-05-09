import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import vitePluginString from 'vite-plugin-string';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    chunkSizeWarningLimit: 1000, // Set the desired chunk size limit in kilobytes
  },
  plugins: [react(), vitePluginString()],
});
