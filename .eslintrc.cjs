module.exports = {
    root: true,

    parserOptions: {
        project: './tsconfig.json',
        parser: '@typescript-eslint/parser',
        tsconfigRootDir: __dirname,
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2022,
    },

    env: {
        node: true,
        es2022: true,
    },

    extends: [
        'plugin:@typescript-eslint/recommended',

        'standard-with-typescript',

        'prettier',
    ],

    plugins: [
        '@typescript-eslint',
    ],

    globals: {
        ga: 'readonly',
        process: 'readonly',
    },

    rules: {
        curly: ['warn', 'all'],
        '@typescript-eslint/consistent-type-assertions': 'off',
        '@typescript-eslint/consistent-type-definitions': 'off',
        '@typescript-eslint/no-unused-vars': ['error', { ignoreRestSiblings: true }],
        '@typescript-eslint/strict-boolean-expressions': 'off',

        // allow debugger during development only
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

        eqeqeq: ['error', 'always'],
        'no-var': 'error',
    },
};