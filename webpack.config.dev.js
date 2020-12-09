const commonConfig = require('./webpack.config.common.js');
const { merge } = require('webpack-merge');

module.exports = merge(commonConfig, {
    mode: 'development',
    devServer: {
        contentBase: "./dist",
        open: true
    },
});