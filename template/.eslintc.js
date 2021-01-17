module.exports = {
    env: {
      browser: true,
      es6: true,
      node: true
    },
    extends: [
      '@sc/eslint-config-sensorsdata-react', '@sc/eslint-config-sensorsdata-typescript/react'
    ],
    globals: {
      Atomics: 'readonly',
      SharedArrayBuffer: 'readonly'
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaFeatures: {
        jsx: true
      },
      ecmaVersion: 2020,
      sourceType: 'module',
      project: ['./tsconfig.json']
    },
    plugins: [
      'react',
      '@typescript-eslint',
      'react-hooks'
    ],
    rules: {},
    overrides: [{
      files: ['*.ts', '*.tsx']
    }]
  };
  