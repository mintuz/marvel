module.exports = ({ config }) => {
    config.module.rules.push({
        test: /\.(ts|tsx|js|jsx)$/,
        use: [
            {
                loader: require.resolve('babel-loader'),
            },
            require.resolve('react-docgen-typescript-loader'),
        ],
    })
    config.resolve.extensions.push('.ts', '.tsx', '.js', '.jsx')
    return config
}
