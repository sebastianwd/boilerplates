var path = require('path')

module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: '.',
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  ignorePatterns: ['/*.*'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: [
    'airbnb-typescript',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  plugins: [
    '@typescript-eslint',
    'jsx-a11y',
    'react-hooks',
    'react',
    'graphql',
  ],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/naming-convention': 'off',
    '@typescript-eslint/dot-notation': 0,
    'react/prop-types': 0,
    'react/jsx-one-expression-per-line': 0,
    'import/extensions': 0,
    'import/prefer-default-export': 0,
    'import/no-dynamic-require': 0,
    'react/require-default-props': 0,
    'global-require': 0,
    'react/jsx-props-no-spreading': 0,
    '@typescript-eslint/lines-between-class-members': 0,
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.jsx', '.tsx', 'ts'],
      },
    ],
    'graphql/template-strings': [
      'error',
      {
        env: 'relay',
        tagName: 'graphql',
        schemaJsonFilepath: path.resolve(__dirname, 'graphql.schema.json'),
      },
    ],
  },
}
