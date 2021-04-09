module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb-typescript',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/prettier',
    'prettier/react',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['react', '@typescript-eslint', 'eslint-plugin-import-helpers', 'react-hooks'],
  rules: {
    'react/react-in-jsx-scope': 0,
    'react/jsx-no-duplicate-props': [0, { ignoreCase: true }],
    'import/prefer-default-export': 0,
    'react/jsx-props-no-spreading': [0],
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.tsx', '.js', '.jsx'],
      },
    ],
    'import/extensions': ['warn', 'never'],
    'import-helpers/order-imports': [
      'error',
      {
        newlinesBetween: 'always',
        groups: [['/^react$/', '/^react/'], '/^@portal-types/', '/^@/', 'module', ['parent', 'sibling', 'index']],
        alphabetize: { order: 'asc', ignoreCase: true },
      },
    ],
    'import/no-extraneous-dependencies': 0,
    'react/prop-types': 0,
    'no-param-reassign': 0,
    'react/jsx-wrap-multilines': [
      2,
      {
        declaration: 'parens',
        assignment: 'parens',
        return: 'parens',
        arrow: 'parens',
        condition: 'ignore',
        logical: 'ignore',
        prop: 'ignore',
      },
    ],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.js', '.ts', '.tsx'],
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
};
