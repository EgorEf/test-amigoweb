module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:react/jsx-runtime',
    'plugin:import/recommended',
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
    'no-alert': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/function-component-definition': [2, {
      namedComponents: 'arrow-function',
    }],
    'react/prop-types': 0,
    'react/jsx-props-no-spreading': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'jsx-a11y/label-has-associated-control': 'off',
    'no-param-reassign': ['error', {
      props: true,
      ignorePropertyModificationsFor: ['state'],
    }],
  },
};
