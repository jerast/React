import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
			"@Auth": path.resolve(__dirname, "./src/apps/auth"),
			"@Calendar": path.resolve(__dirname, "./src/apps/calendar"),
			"@test": path.resolve(__dirname, "./test"),
		},
	}
})
