import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/Alexs-3D-Website/",
  plugins: [react()],
  build: {chunkSizeWarningLimit: 1600,}
 
})
