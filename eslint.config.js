/**
 * eslint.config.js - flat config compatible ESLint v9+ with TypeScript parser object
 * This file provides languageOptions.parser as the actual parser module (object),
 * which avoids the "Expected object with parse() or parseForESLint()" error.
 */
const tsParser = require("@typescript-eslint/parser");
const tsPlugin = require("@typescript-eslint/eslint-plugin");

module.exports = [
  {
    ignores: ["node_modules/**", ".next/**", "dist/**", "prisma/**", "*.log"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2024,
        sourceType: "module",
        ecmaFeatures: { jsx: true },
        project: './tsconfig.eslint.json'
      },
      globals: {
        window: "readonly",
        document: "readonly",
        console: "readonly",
        process: "readonly",
        module: "writable"
      }
    },
    plugins: {
      "@typescript-eslint": tsPlugin
    },
    rules: {
      "no-unused-vars": "warn",
      "@typescript-eslint/no-unused-vars": ["warn", { "argsIgnorePattern": "^_" }],
      "no-undef": "off"
    }
  }
];

