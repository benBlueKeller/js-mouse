const webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
    entry:  __dirname + '/static/src/index.js',
    output: {
        path: __dirname + '/static/dist',
        filename: 'bundle.js',
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css']
    },
    module: {
      rules: [
        {
          test: /\.jsx?/,
          exclude: /node_modules/,
          use: 'babel-loader'
        },
        {
          test: /\.css$/,
          use: ExtractTextPlugin.extract({
              fallback: 'style-loader',
              use: 'css-loader',
          })
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: 'file-loader'
        }
      ]
    },
    plugins: [
      new ExtractTextPlugin('styles.css'),
    ]
};
module.exports = config;
