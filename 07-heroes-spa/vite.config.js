import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@auth', replacement: path.resolve(__dirname, 'src/auth') },
      { find: '@heroes', replacement: path.resolve(__dirname, 'src/heroes') },
      { find: '@hooks', replacement: path.resolve(__dirname, 'src/hooks') },
      { find: '@router', replacement: path.resolve(__dirname, 'src/router') },
      { find: '@ui', replacement: path.resolve(__dirname, 'src/ui') },
    ]
  }
})
