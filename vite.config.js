import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: 'all' // allows all hosts during dev
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src') // '@' points to ./src
    },
    extensions: ['.mjs', '.js', '.jsx', '.ts', '.tsx', '.json']
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx' // ensures JS files with JSX are handled correctly
      }
    }
  },
  build: {
    target: 'esnext', // optional, ensures modern JS output
    outDir: 'dist',   // default output folder
  }
})
