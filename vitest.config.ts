import { resolve } from 'path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  resolve: {
    alias: {
      '@ifsjs/shared': resolve(__dirname, 'packages/shared/index.ts'),
      '@ifsjs/core': resolve(__dirname, 'packages/core/index.ts'),
      '@ifsjs/vue-hooks': resolve(__dirname, 'packages/vue-hooks/index.ts'),
      '@ifsjs/react-hooks': resolve(__dirname, 'packages/react-hooks/index.ts'),
    },
  },
  test: {
    globals: true,
    environment: 'happy-dom', // or 'jsdom', 'node'
    reporters: 'dot',
  },
});
