import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      
      '@tanstack/react-router': path.resolve(__dirname, './node_modules/@tanstack/react-router/dist/esm/index.js'),
    },
  },
})