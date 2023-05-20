import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Learn-React-With-This-One-Project/",
  plugins: [react()],
})
