import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3001,
  },
  resolve: {
    alias: {
      '@styles': path.resolve(__dirname, './src/styles'),
      '@components': path.resolve(__dirname, './src/components'),
      '@views': path.resolve(__dirname, './src/views'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@app': path.resolve(__dirname, './src/app'),
      '@api': path.resolve(__dirname, './src/api'),
      '@interfaces': path.resolve(__dirname, './src/interfaces'),
      '@features': path.resolve(__dirname, './src/features'),
      '@helpers': path.resolve(__dirname, './src/helpers'),
    },
  },
})
