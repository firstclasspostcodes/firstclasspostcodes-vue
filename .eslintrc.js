module.exports = {
  root: true,
  env: {
    node: true,
  },
  globals: {
    Cypress: true,
    cy: true,
  },
  extends: ['plugin:vue/essential', 'eslint:recommended', '@vue/prettier'],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  },
  overrides: [
    {
      files: ['jest.setup.js', '**/src/**/*.{integration,test}.js'],
      env: {
        jest: true,
      },
    },
  ],
};
