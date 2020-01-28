const path = require('path');
const commom = require('./webpack.common');
const merge = require('webpack-merge');

module.exports = merge(commom, {
    mode: 'development',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
});
