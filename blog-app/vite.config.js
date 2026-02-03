// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    // This tells Vite to trust any host while you're developing
    // Perfect for environments like CodeSandbox or StackBlitz
    allowedHosts: true, 
    
    // Also, let's ensure the port is consistent
    port: 5173,
  }
})