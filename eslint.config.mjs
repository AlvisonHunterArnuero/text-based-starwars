import { dirname } from 'path';
import { fileURLToPath } from 'url';

import { FlatCompat } from '@eslint/eslintrc';
import eslintPluginImport from 'eslint-plugin-import';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    plugins: {
      import: eslintPluginImport,
    },
    rules: {
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      "import/order": ["error", {
        "groups": [
          "builtin",    // Built-in types (if using TypeScript)
          "external",   // External dependencies (react, next, etc.)
          "internal",   // Internal imports (aliases, relative paths)
          "parent", "sibling", "index",
          "object",    // Object imports (e.g., styles)
          "type",      // Type imports (TypeScript)
        ],
        "newlines-between": "always", // New line between groups
        "alphabetize": {
          order: 'asc', // Sort in ascending order (a -> z)
          caseInsensitive: true
        },
        pathGroups: [
          {
            pattern: "@/**", // If you're using path aliases (e.g., `@/components`)
            group: "internal",
          },
          {
            pattern: "./*.module.css", // CSS modules
            group: "object",
            position: "after",
          },
        ],
      }],
    },
  },
];

export default eslintConfig;
