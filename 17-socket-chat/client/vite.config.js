import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
		alias: {
			'@app': resolve(__dirname, './src/app'),
			'@auth': resolve(__dirname, './src/auth'),
			'@chat': resolve(__dirname, './src/chat'),
			// '@': resolve(__dirname, './src'),
		},
	},
})
