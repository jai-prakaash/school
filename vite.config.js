import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/git 
export default defineConfig({
  plugins: [react()],
})
