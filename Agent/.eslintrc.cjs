/**
 * ESLint Configuration
 *
 * Enforces code quality and consistency across the project
 */

module.exports = {
  env: {
    browser: true,
    es2022: true,
    node: true,
  },

  extends: [
    'eslint:recommended',
    'prettier', // Must be last to override other configs
  ],

  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
  },

  ignorePatterns: [
    'node_modules/',
    'dist/',
    'coverage/',
    'playwright-report/',
    'test-results/',
    '*.config.js',
  ],

  rules: {
    // Possible Errors
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'no-debugger': 'warn',
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],

    // Best Practices
    'eqeqeq': ['error', 'always'],
    'no-eval': 'error',
    'no-implied-eval': 'error',
    'no-var': 'error',
    'prefer-const': 'error',
    'prefer-arrow-callback': 'error',
    'no-param-reassign': ['error', { props: false }],

    // ES6
    'arrow-spacing': ['error', { before: true, after: true }],
    'no-duplicate-imports': 'error',
    'prefer-template': 'error',
    'template-curly-spacing': ['error', 'never'],

    // Code Style (handled by Prettier, but some logical rules)
    'max-len': [
      'warn',
      {
        code: 100,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreComments: true,
      },
    ],
    'max-lines-per-function': ['warn', { max: 50, skipBlankLines: true }],
    'complexity': ['warn', 10],

    // Import organization
    'import/order': [
      'error',
      {
        'groups': [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
        'newlines-between': 'always',
        'alphabetize': { order: 'asc' },
      },
    ],
  },

  overrides: [
    {
      // Test files
      files: ['tests/**/*.js', '**/*.test.js', '**/*.spec.js'],
      env: {
        'vitest/env': true,
      },
      rules: {
        'max-lines-per-function': 'off', // Tests can be longer
        'no-console': 'off', // Allow console in tests
      },
    },
  ],
};
