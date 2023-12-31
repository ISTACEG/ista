import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'

// https://vitejs.dev/config/
export default defineConfig( ({mode}) => {
  return {
    plugins: [preact()],
    base: mode == "production" ? "/ista" : ""
  }
})
