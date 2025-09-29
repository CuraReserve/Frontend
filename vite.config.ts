import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      // Proxy requests from /api to your Node.js backend
      '/api': {
        target: 'http://localhost:3000', // Your backend URL
        changeOrigin: true, // Needed for virtual hosted sites
        secure: false,      // If your backend is not https
      },
    },
  },
});