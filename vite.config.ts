import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/chipify/projects/4039aba9-078c-4174-90fa-6ac4639a9493/preview',
  plugins: [react()],
  css: {
    // Ensure CSS is processed and injected correctly
    devSourcemap: true,
  },
  server: {
    port: 5236,
    host: true,
    strictPort: true,
    hmr: {
      // HMR will be proxied through our backend
      port: 5236,
    },
  },
})
