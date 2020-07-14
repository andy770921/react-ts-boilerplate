/*eslint-disable */
const commonConfig = require('./webpack.common-config.js');
const { merge } = require('webpack-merge');

module.exports = merge(commonConfig, {
    mode: 'development',
    devServer: {
        contentBase: "./dist",
    },
});