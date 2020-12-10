const { merge } = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');
const commonConfig = require('./webpack.config.common.js');

module.exports = merge(commonConfig, {
    mode: 'production',
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                extractComments: false,
            }),
        ],
    },
});
