import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['./packages/codora/**/*.{test,spec}.{ts}'],
    watch: true,
  },
});
