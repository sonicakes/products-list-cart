import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  test: {
    environment: 'jsdom',
    globals: true, // This allows you to use 'test' and 'expect' without importing them
    // setupFiles: './src/setupTests.js', <-- Comment this out for now!
  },
})
