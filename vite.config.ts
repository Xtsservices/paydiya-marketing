import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react(), tailwindcss()],

  define: {
    global: 'globalThis',
  },

  assetsInclude: ['**/*.svg', '**/*.csv', '**/*.png', '**/*.jpg', '**/*.jpeg'],

  server: {
    host: true, // allow external access
    allowedHosts: ['paydiya.in'], // ✅ FIX
  }
})
