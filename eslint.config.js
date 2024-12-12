import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import prettier from 'eslint-plugin-prettier';
import eslintConfigPrettier from 'eslint-config-prettier';

// Prettier config
const prettierRules = {
  'prettier/prettier': [
    'error',
    {
      semi: true,
      tabWidth: 2,
      printWidth: 100,
      singleQuote: true,
      trailingComma: 'es5',
      bracketSpacing: true,
      bracketSameLine: false,
      arrowParens: 'always',
      endOfLine: 'auto',
      jsxSingleQuote: false,
      quoteProps: 'as-needed',
      useTabs: false,
    },
  ],
};

const quoteRules = {
  quotes: ['error', 'single', { avoidEscape: true, allowTemplateLiterals: true }],
  'jsx-quotes': ['error', 'prefer-double'],
};

export default [
  { ignores: ['dist', 'node_modules', 'build'] }, // Add more common ignore patterns
  eslintConfigPrettier,
  {
    files: ['**/*.{js,jsx,ts,tsx}'], // Add TypeScript support if needed
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.browser,
        ...globals.node, // Add Node.js globals if needed
      },
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: {
          jsx: true,
          impliedStrict: true, // Add implied strict mode
        },
        sourceType: 'module',
      },
    },
    settings: {
      react: {
        version: '18.3',
      },
      'import/resolver': {
        // Add import resolver if you use eslint-plugin-import
        node: {
          extensions: ['.js', '.jsx'],
        },
      },
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      prettier,
    },
    rules: {
      // ESLint recommended rules
      ...js.configs.recommended.rules,

      // React recommended rules
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,

      // React Hooks rules
      ...reactHooks.configs.recommended.rules,

      // Custom rules
      'react/jsx-one-expression-per-line': 'off',
      'react/jsx-no-target-blank': 'off',
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],

      // Additional recommended rules
      'no-console': 'warn',
      'no-unused-vars': 'warn',
      'prefer-const': 'error',
      'no-var': 'error',

      // Quote rules
      quotes: ['error', 'single'],
      'jsx-quotes': ['error', 'prefer-double'],

      'react/prop-types': 'off',

      // Prettier rules
      ...prettierRules,

      // Prettier rules - these should come last
      ...quoteRules,
    },
  },
];
