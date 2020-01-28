const path = require('path');
const commom = require('./webpack.common');
const merge = require('webpack-merge');

module.exports = merge(commom, {
    mode: 'production',
    output: {
        filename: 'main.[contentHash].js',
        path: path.resolve(__dirname, 'dist')
    }
});
