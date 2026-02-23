import js from '@eslint/js';
import globals from 'globals';
import tsParser from '@typescript-eslint/parser';
import tseslint from 'typescript-eslint';
import importPlugin from 'eslint-plugin-import';
import prettier from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

export default [
  {
    ignores: [
      'node_modules/',
      'dist/',
      'build/',
      '.git/',
      '**/*.min.js',
      'ajax/js/jquery.js',
      'ajax/js/axios.js', // axios minificado com requerimentos do curso
      'bootstrap/**',
    ],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  importPlugin.flatConfigs.recommended,
  prettierConfig,
  {
    files: ['**/*.js', '**/*.jsx'],
    languageOptions: {
      parser: undefined,
      globals: {
        ...globals.browser,
        ...globals.commonjs,
        ...globals.node,
      },
    },
    plugins: {
      prettier,
    },
    rules: {
      // Import
      'import/no-extraneous-dependencies': [
        'error',
        {
          devDependencies: true,
        },
      ],
      'import/prefer-default-export': 'off',
      'import/extensions': 'off',
      'import/no-unresolved': 'off',

      // Code style
      radix: ['error', 'as-needed'],
      'func-names': 'off', // Permitir funções anônimas (muito comum em callbacks)
      'no-console': 'off',
      'no-plusplus': 'off', // Permitir ++ e --
      'no-underscore-dangle': 'off', // Projeto usa _id, __dirname, etc

      // Prettier
      'prettier/prettier': 'warn',
    },
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      prettier,
    },
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      globals: {
        ...globals.browser,
        ...globals.commonjs,
        ...globals.node,
      },
    },
    rules: {
      // TypeScript
      '@typescript-eslint/no-var-requires': 'off',
      '@typescript-eslint/no-require-imports': 'off', // Node.js precisa de require() - CommonJS é válido
      '@typescript-eslint/no-unused-expressions': 'warn', // Reduzir de erro para warning
      '@typescript-eslint/no-this-alias': 'warn', // Reduzir de erro para warning
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],

      // Import
      'import/no-extraneous-dependencies': [
        'error',
        {
          devDependencies: true,
        },
      ],
      'import/prefer-default-export': 'off',
      'import/extensions': 'off',
      'import/no-unresolved': 'off',

      // Code style
      radix: ['error', 'as-needed'],
      'func-names': 'off', // Permitir funções anônimas (muito comum em callbacks)
      'no-console': 'off',
      'no-plusplus': 'off', // Permitir ++ e --
      'no-underscore-dangle': 'off', // Projeto usa _id, __dirname, etc

      // Prettier
      'prettier/prettier': 'warn',
    },
  },
];
