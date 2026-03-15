import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['lucide-react', 'framer-motion']
  },
  build: {
    target: 'esnext',
    minify: 'terser',
    cssCodeSplit: true
  }
})