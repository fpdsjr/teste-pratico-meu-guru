module.exports = {
    env: {
      browser: true,
      es2021: true,
      node: true,
      jest: true,
    },
    extends: ['plugin:react/recommended', 'airbnb', 'plugin:import/typescript', 'plugin:prettier/recommended'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 12,
      sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint', 'prettier'],
    rules: {
      'space-before-function-paren': 'off',
      'react/prop-types': 'off',
      'import/no-unresolved': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/jsx-props-no-spreading': 'off',
      'import/prefer-default-export': 'off',
      'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
      'camelcase': 'off',
      'no-undef': 'off',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      'import/no-extraneous-dependencies': ['error', { devDependencies: ['**/*.test.ts', '**/*.spec.ts', '**/*.stories.tsx'] }],
      'import/extensions': "off"
    },
    settings: {
      react: {
        pragma: 'React',
        version: 'detect',
      },
    },
  };  
