module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'simple-import-sort',
    'better-styled-components',
  ],
  rules: {
    'react/jsx-filename-extension': [ 1, { extensions: [ '.tsx', '.ts' ] } ],
    'import/extensions': 'off',
    'no-use-before-define': 'off',
    'max-len': 'off',
    'simple-import-sort/imports': 'error',
    'array-bracket-spacing': [ 'error', 'always' ],
    'object-curly-spacing': [ 'error', 'always' ],
    'better-styled-components/sort-declarations-alphabetically': 2,
    'no-underscore-dangle': 0,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: [ '.js', '.jsx', '.ts', '.tsx' ],
      },
    },
  },
};
