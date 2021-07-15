module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:react-hooks/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/prop-types': 0,
    'import/prefer-default-export': 0,
    'react/destructuring-assignment': 0,
    'react/jsx-props-no-spreading': 0,
    'no-underscore-dangle': 0,
    'no-case-declarations': 0,
  },
};
