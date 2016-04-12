'use strict';

var webpack = require('webpack');
var HtmlWepbackPlugin = require('html-webpack-plugin');
var WebpackCleanupPlugin = require('webpack-cleanup-plugin');

module.exports = {
  context: __dirname,
  entry: {
    main: './src/main.js'
  },
  output: {
    path: 'dist/prod',
    filename: '[hash].js'
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /qa-helper/,
        loader: 'null-loader'
      }
    ]
  },
  resolve: {
    modulesDirectories: ['node_modules'],
    extensions: ['', '.min.js', '.js']
  },
  plugins: [
    new WebpackCleanupPlugin(),
    new HtmlWepbackPlugin({
      filename: 'index.html',
      template: './src/index.html',
      inject: 'body',
      version: require('./package.json').version
    }),
    new webpack.DefinePlugin({
      QA_MODE: false
    })
  ]
};