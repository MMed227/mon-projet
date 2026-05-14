/**
 * Minimal ESLint flat config with Node globals declared.
 * This file intentionally declares Node globals so ESLint won't error on 'module' or 'console'.
 */
module.exports = [
  {
    ignores: ["node_modules/**", "dist/**", "*.log", ".prettierignore"],
    languageOptions: {
      ecmaVersion: 2024,
      sourceType: "module",
      globals: {
        console: "readonly",
        module: "writable",
        process: "readonly",
        __dirname: "readonly",
        __filename: "readonly",
      },
    },
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "error",
      "no-console": "off",
    },
  },
];
