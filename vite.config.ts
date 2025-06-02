import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@shared': path.resolve(__dirname, './shared')
    }
  },
  build: {
    outDir: 'dist'
  },
  define: {
    'process.env.VITE_API_URL': JSON.stringify('https://render1-wo70.onrender.com')
  }
})