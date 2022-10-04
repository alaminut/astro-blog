module.exports = {
  plugins: ['prettier', 'astro'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    extraFileExtensions: ['.astro'],
  },
  overrides: [
    {
      files: ['*.astro'],
      extends: ['plugin:astro/recommended', 'prettier'],
      parser: 'astro-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaFeatures: {
          jsx: false,
        },
      },
      rules: {
        'prettier/prettier': 'off',
      },
    },
    {
      files: ['!*.astro'],
      extends: ['plugin:react/recommended', 'prettier'],
      rules: {
        'prettier/prettier': 'error',
        'react/jsx-uses-react': 'off',
        'react/react-in-jsx-scope': 'off',
      },
    },
  ],
};
