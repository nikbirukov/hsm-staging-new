import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Root by default (custom domain, Netlify, Vercel). CI sets VITE_BASE to
  // '/<repo>/' for GitHub Pages project sites, which serve from a sub-path.
  base: process.env.VITE_BASE || '/',
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        pricing: resolve(import.meta.dirname, 'pricing/index.html'),
        checklists: resolve(import.meta.dirname, 'checklists/index.html'),
        freeTrial: resolve(import.meta.dirname, 'free-trial/index.html'),
        bookDemo: resolve(import.meta.dirname, 'book-platform-demo/index.html'),
        v2: resolve(import.meta.dirname, 'v2/index.html'),
      },
    },
  },
})
