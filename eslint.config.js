module.exports = [
  {
    ignores: ['node_modules/**', '.next/**', 'dist/**', 'prisma/**', '*.log'],
    languageOptions: {
      ecmaVersion: 2024,
      sourceType: 'module',
      globals: {
        window: 'readonly',
        document: 'readonly',
        console: 'readonly',
        process: 'readonly',
        module: 'writable',
      },
      parserOptions: { project: './tsconfig.json' },
    },
    plugins: { '@typescript-eslint': require('@typescript-eslint/eslint-plugin') },
    rules: { 'no-unused-vars': 'warn', 'no-undef': 'off' },
  },
];
