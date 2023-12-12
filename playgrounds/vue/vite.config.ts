import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],

  resolve: {
    alias: {
      '@ifsjs/core': resolve(__dirname, '../../packages/core/index.ts'),
      '@ifsjs/shared': resolve(__dirname, '../../packages/shared/index.ts'),
      '@ifsjs/vue-hooks': resolve(__dirname, '../../packages/vue-hooks/index.ts'),
    },
  },
})
