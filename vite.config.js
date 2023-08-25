import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'

export default defineConfig({
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, './src') }
    ]
  },
  plugins: [react()],

  define: {
    'process.env.REACT_APP_GITHUB_TOKEN': JSON.stringify('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'),
  },
})
