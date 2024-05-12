import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  envDir: "./src" // wskazujemy gdzie znajduje się plik .env, z którego import.meta.env będzie zasysać dane
})
