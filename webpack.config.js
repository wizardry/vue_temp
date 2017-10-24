'use strict';
var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './js/main.js',
  output: {
    filename: 'bundle.js',
    // path: path.join(__dirname, 'js'),
    path: '/app/js/',
    publicPath: '/app/js/'
  },
  devtool: 'source-map',
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015']
      }
    },{
      test: /\.vue$/,
      loader: 'vue'
    }]
  },
  devServer: {
    port: 8080,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}