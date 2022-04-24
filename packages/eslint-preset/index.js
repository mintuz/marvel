module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'airbnb',
        'airbnb/hooks',
        'prettier',
    ],
    plugins: ['@typescript-eslint', 'react', 'jsx-a11y'],
    rules: {
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-explicit-any': 'error',
        '@typescript-eslint/no-unused-vars': 'error',
        '@typescript-eslint/prefer-interface': 'off',
        '@typescript-eslint/no-empty-function': [
            1,
            { allow: ['arrowFunctions'] },
        ],
        '@typescript-eslint/no-use-before-define': ['error'],
        '@typescript-eslint/no-shadow': 'error',

        'react/function-component-definition': 'off',
        'react/jsx-curly-newline': 'off',
        'react/jsx-props-no-spreading': 'off',
        'react/prop-types': 'off',
        'react/no-unused-prop-types': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'error',
        'react/jsx-curly-brace-presence': 'off',
        'react/jsx-key': 'off',
        'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
        'react/jsx-one-expression-per-line': 'off',
        'react/require-default-props': 'off',

        'import/extensions': [0],
        'import/no-default-export': 'error',
        'import/prefer-default-export': 'off',
        'import/no-unresolved': 'off',

        'no-use-before-define': 'off',
    },
    env: {
        node: true,
        browser: true,
    },
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
            },
        },
        react: {
            version: 'detect',
        },
    },
}
