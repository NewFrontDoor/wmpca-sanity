import react from 'eslint-plugin-react';
import globals from 'globals';
import studio from '@sanity/eslint-config-studio';
import { version } from 'styled-components';

export default [
  ...studio,
  {
    files: ['**/*.{js,jsx,mjs,cjs,ts,tsx}'],
    plugins: {
      react,
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
      },
    },
    rules: {
      'react/jsx-uses-react': 'error',
      'react/jsx-uses-vars': 'error',
     },
     settings: {
      react: { version: '19' },
     }
  },
]