const rules = {
  'no-underscore-dangle': ['off'],
  'no-param-reassign': ['off'],
  'prefer-destructuring': ['off'],
  'prefer-object-spread': ['off'],
  'prefer-ob': ['off'],
  'no-restricted-globals': ['error', 'window', 'document'],
  'import/prefer-default-export': 'off',
  'import/no-extraneous-dependencies': ['off'],
  'import/no-relative-packages': ['off'],
  'no-constructor-return': ['off'],
  'default-param-last': ['off'],
  'import/extensions': [
    'error',
    'never',
    {
      ignorePackages: true,
      pattern: {
        js: 'always',
        json: 'always',
      },
    },
  ],
  'no-nested-ternary': ['off'],
};

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['airbnb-base'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [],
  rules: {},
  overrides: [
    // JavaScript/TypeScript
    {
      files: ['**/*.js', '**/*.ts'],
      extends: [
        'airbnb-base',
        'plugin:prettier/recommended',
      ],
      rules: { ...rules },
    },

    // Angular Kitchen Sink
    {
      files: ['kitchen-sink/angular/**/*.ts', 'kitchen-sink/angular/**/*.js'],
      rules: {
        ...rules,
        'no-console': ['off'],
        'no-restricted-globals': ['off'],
        'no-nested-ternary': ['off'],
        'import/no-unresolved': ['off'],
        'import/no-extraneous-dependencies': ['off'],
      },
    },

    // Angular Source
    {
      files: ['src/angular/**/*.ts'],
      rules: {
        ...rules,
        'import/no-extraneous-dependencies': ['off'],
        'no-dupe-keys': ['off'],
      },
    },
  ],
};
