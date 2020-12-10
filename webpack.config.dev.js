const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.config.common.js');

module.exports = merge(commonConfig, {
    mode: 'development',
    devServer: {
        contentBase: './dist',
        open: true,
        historyApiFallback: true,
        hot: true,
    },
});
