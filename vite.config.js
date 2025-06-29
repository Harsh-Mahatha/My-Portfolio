import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    historyApiFallback: true,
  },
  build: {
    // For static hosts, fallback to index.html for SPA routing
    rollupOptions: {
      output: {
        // No special config needed for most static hosts, but see below for Netlify/Vercel
      }
    }
  }
})
