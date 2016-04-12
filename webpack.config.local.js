'use strict';

var webpack = require('webpack');
var HtmlWepbackPlugin = require('html-webpack-plugin');

module.exports = {
  context: __dirname,
  entry: {
    main: './src/main.js'
  },
  output: {
    path: 'dist/dev',
    filename: '[name].js'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  resolve: {
    modulesDirectories: ['node_modules'],
    extensions: ['', '.min.js', '.js']
  },
  plugins: [
    new HtmlWepbackPlugin({
      filename: 'index.html',
      template: './src/index.html',
      inject: 'body',
      version: require('./package.json').version
    }),
    new webpack.DefinePlugin({
      QA_MODE: true
    })
  ]
};