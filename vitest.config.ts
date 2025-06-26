import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        globals: true,
        environment: 'happy-dom', // or 'jsdom'
        setupFiles: './vitest.setup.ts',
        coverage: {
            provider: 'v8',
            reporter: ['text', 'json', 'html'],
        },
        // Optional: Add Next.js-specific aliases if needed
        alias: {
            '@/': new URL('./', import.meta.url).pathname,
        },
    },
});