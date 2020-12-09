/*eslint-disable */
const commonConfig = require('./webpack.common-config.js');
const { merge } = require('webpack-merge');
const TerserPlugin = require("terser-webpack-plugin");

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