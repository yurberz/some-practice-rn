module.exports = {
  root: true,
  extends: '@react-native-community',
  'jsx-runtime': {
    plugins: ['react'],
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
    },
    rules: {
      'react/react-in-jsx-scope': 0,
      'react/jsx-uses-react': 0,
    },
  },
};
