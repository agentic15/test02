import { defineConfig } from 'vitest/config';
import { resolve } from 'path';

export default defineConfig({
  test: {
    // Test environment
    environment: 'happy-dom', // Fast DOM implementation for testing

    // Global test APIs (describe, it, expect, etc.)
    globals: true,

    // Setup files
    setupFiles: ['./tests/setup.js'],

    // Test file patterns
    include: ['tests/**/*.test.js', 'tests/**/*.spec.js'],
    exclude: ['node_modules', 'dist', 'tests/e2e/**'],

    // Coverage configuration
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html', 'json', 'lcov'],
      reportsDirectory: './coverage',

      // Include all source files
      all: true,
      include: ['src/**/*.js'],
      exclude: [
        'src/main.js', // Entry point, tested via E2E
        '**/*.config.js',
        '**/*.test.js',
        '**/*.spec.js',
        '**/node_modules/**',
        '**/dist/**',
        '**/tests/**',
      ],

      // Coverage thresholds
      statements: 100,
      branches: 100,
      functions: 100,
      lines: 100,

      // Fail if coverage drops below threshold
      thresholds: {
        statements: 100,
        branches: 100,
        functions: 100,
        lines: 100,
      },
    },

    // Test execution
    testTimeout: 10000,
    hookTimeout: 10000,

    // Parallel execution
    threads: true,
    isolate: true,

    // Reporter options
    reporters: ['verbose'],

    // Watch mode options
    watch: false,
    watchExclude: ['**/node_modules/**', '**/dist/**'],

    // Mock options
    mockReset: true,
    clearMocks: true,
    restoreMocks: true,

    // UI options (for vitest --ui)
    ui: true,
  },

  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@components': resolve(__dirname, 'src/components'),
      '@services': resolve(__dirname, 'src/services'),
      '@utils': resolve(__dirname, 'src/utils'),
      '@styles': resolve(__dirname, 'src/styles'),
    },
  },
});
