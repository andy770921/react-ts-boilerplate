const path = require('path'); 

module.exports = {
    mode: 'development',
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
        publicPath: 'dist'
    },
    module: {
        rules: [
            {
                test: /\.ts$|\.tsx$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.ts','.tsx','.js','.jsx']
    }
};