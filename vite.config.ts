import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		port: 3001,
	},
	resolve: {
		alias: {
			'@styles': path.resolve(__dirname, './src/styles'),
			'@components': path.resolve(__dirname, './src/components'),
			'@assets': path.resolve(__dirname, './src/assets'),
			'@app': path.resolve(__dirname, './src/app'),
			'@features': path.resolve(__dirname, './src/features'),
			'@helpers': path.resolve(__dirname, './src/helpers'),
		},
	},
})
