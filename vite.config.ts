import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({

  // base: '/valex-ts/preview/', use while make it live give a valid base path instade of the dummy path.
  
  plugins: [react()],
  define: {
    'process.env': {}
  },

  build: {
    chunkSizeWarningLimit: 5000,
  },
  server: {
    host: true,
  },

})

