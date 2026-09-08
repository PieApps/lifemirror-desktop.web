import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/lifemirror-desktop.web/',
  plugins: [react(), tailwindcss()],
  server: {
    port: 3000,
    open: false
  }
})

