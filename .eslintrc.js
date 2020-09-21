module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:jest/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['simple-import-sort'],
  rules: {
    curly: 'warn',
    camelcase: 'off',
    'import/extensions': ['error', 'never', { json: 'always' }],
    'import/named': 'off',
    'import/namespace': 'off',
    'import/no-cycle': 'error',
    'import/no-unresolved': 'error',
    'import/no-extraneous-dependencies': 'error',
    'import/order': 'off',
    'linebreak-style': ['error', 'unix'],
    'newline-before-return': 'error',
    'no-console': 'error',
    'simple-import-sort/sort': 'error',
    'sort-imports': 'off',
    strict: ['error', 'global'],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js'],
      },
    },
  },
};
