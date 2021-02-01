const path = require('path');
const { merge } = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');
const commonConfig = require('./webpack.config.common.js');

module.exports = merge(commonConfig, {
    mode: 'production',
    entry: { app: './src/index.tsx' },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js',
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                extractComments: false,
            }),
        ],
    },
    // plugins: [
    //     // new CleanWebpackPlugin(['dist/*']) for < v2 versions of CleanWebpackPlugin
    //     // new CleanWebpackPlugin(),
    //     new HtmlWebpackPlugin({
    //         title: 'Caching',
    //     }),
    // ],
});
