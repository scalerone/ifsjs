import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      '@ifsjs/core': resolve(__dirname, '../../packages/core/index.ts'),
      '@ifsjs/shared': resolve(__dirname, '../../packages/shared/index.ts'),
      '@ifsjs/react-hooks': resolve(__dirname, '../../packages/react-hooks/index.ts'),
    },
  },
})
