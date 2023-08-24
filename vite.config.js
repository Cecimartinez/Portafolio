import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'

export default defineConfig({
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, './src') }]
  },
  plugins: [react()],

  define: {
    'process.env.REACT_APP_GITHUB_TOKEN': JSON.stringify('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'),
  },
})
