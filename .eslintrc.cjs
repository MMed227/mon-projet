module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2024,
    sourceType: "module",
    ecmaFeatures: { jsx: true },
    project: "./tsconfig.json"
  },
  plugins: ["@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "next/core-web-vitals"
  ],
  rules: {
    "no-unused-vars": "warn",
    "@typescript-eslint/no-unused-vars": ["warn", { "argsIgnorePattern": "^_" }],
    "no-undef": "off"
  },
  ignorePatterns: ["node_modules/", ".next/", "dist/", "prisma/", "*.log"]
};
