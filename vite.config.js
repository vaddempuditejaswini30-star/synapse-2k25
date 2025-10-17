import { defineConfig } from 'vite'

export default defineConfig({
  base: './',  // This fixes the path issues
  build: {
    outDir: 'dist'
  }
})