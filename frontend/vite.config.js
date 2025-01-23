import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Ensure your server is configured to listen on the correct port, especially if you're testing locally.
    port: 3000,
  },
  build: {
    // Vercel serves files from the /dist folder, so this is the default setting for the build output.
    outDir: 'dist',
    // If you need to specify a base path (e.g., for a subfolder), you can adjust it here.
  
  },
})
