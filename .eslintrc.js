module.exports = {
  extends: [
    'plugin:@docusaurus/recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    node: true,
    browser: true,
    es2022: true,
  },
  settings: {
    typescript: true,
    react: {
      version: 'detect'
    }
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.d.ts'],
      parser: '@typescript-eslint/parser',
      extends: [
        'plugin:@docusaurus/recommended',
      ],
    },
  ],
}; 