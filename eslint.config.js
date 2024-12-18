import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import prettier from 'eslint-plugin-prettier';
import eslintConfigPrettier from 'eslint-config-prettier';
import imports from 'eslint-plugin-import';

// Prettier config aligned with Airbnb
const prettierRules = {
  'prettier/prettier': [
    'error',
    {
      semi: true,
      tabWidth: 2,
      printWidth: 100,
      singleQuote: true,
      trailingComma: 'all',
      bracketSpacing: true,
      bracketSameLine: false,
      arrowParens: 'always',
      endOfLine: 'lf',
      jsxSingleQuote: false,
      quoteProps: 'as-needed',
      useTabs: false,
    },
  ],
};

const airbnbRules = {
  // React rules
  'react/jsx-filename-extension': ['error', { extensions: ['.jsx'] }],
  'react/function-component-definition': [
    'error',
    { namedComponents: 'arrow-function', unnamedComponents: 'arrow-function' },
  ],
  'react/jsx-props-no-spreading': 'error',
  'react/react-in-jsx-scope': 'off',
  'react/require-default-props': 'off',
  'react/jsx-no-bind': [
    'error',
    {
      allowArrowFunctions: true,
      allowBind: false,
      ignoreRefs: true,
    },
  ],

  // Import rules
  'import/no-unresolved': 'error',
  'import/extensions': [
    'error',
    'ignorePackages',
    {
      js: 'never',
      jsx: 'never',
    },
  ],
  'import/prefer-default-export': 'error',
  'import/no-extraneous-dependencies': [
    'error',
    {
      devDependencies: [
        'test/**',
        'tests/**',
        'spec/**',
        '**/__tests__/**',
        'test.{js,jsx}',
        'test-*.{js,jsx}',
        '**/*{.,_}{test,spec}.{js,jsx}',
        '**/vite.config.js',
        '**/jest.config.js',
      ],
    },
  ],

  // General JavaScript rules
  'no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: true }],
  'no-console': ['error', { allow: ['warn', 'error'] }],
  'no-param-reassign': ['error', { props: true, ignorePropertyModificationsFor: ['state'] }],
  'prefer-destructuring': ['error', { array: true, object: true }],
  'no-use-before-define': ['error', { functions: false, classes: true, variables: true }],
};

export default [
  { ignores: ['dist', 'node_modules', 'build'] },
  eslintConfigPrettier,
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2024,
      globals: {
        ...globals.browser,
      },
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: {
          jsx: true,
          impliedStrict: true,
        },
        sourceType: 'module',
      },
    },
    settings: {
      react: {
        version: '18.3',
      },
      'import/resolver': {
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
      import: imports,
    },
    rules: {
      // ESLint recommended rules
      ...js.configs.recommended.rules,

      // React recommended rules
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,

      // React Hooks rules
      ...reactHooks.configs.recommended.rules,

      // Airbnb rules
      ...airbnbRules,

      // React Refresh rules
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],

      // Prettier rules (should be last to override other formatting rules)
      ...prettierRules,
    },
  },
];
