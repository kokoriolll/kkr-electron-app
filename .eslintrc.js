module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-essential',
    // 'plugin:import/recommended',
    // 'plugin:import/typescript',
    '@vue/eslint-config-airbnb',
  ],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.js', '.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {},
    },
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'import',
    '@typescript-eslint',
    'vue',
  ],
  rules: {
    // 'import/no-unresolved': 'off',
    // 'import/extensions': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
};
