/**
 * Minimal ESLint flat config to avoid "config file not found" errors.
 * Extend and tune rules as needed.
 */
module.exports = [
  {
    ignores: ['node_modules/**', 'dist/**', '*.log'],
    languageOptions: {
      ecmaVersion: 2024,
      sourceType: 'module'
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-undef': 'error',
      'no-console': 'off'
    }
  }
];
