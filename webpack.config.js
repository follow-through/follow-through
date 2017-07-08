const path = require('path');
const webpack = require('webpack');

// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
//   template: './client/index.html',
//   filename: 'index.html',
//   inject: 'body'
// })

module.exports = {
  entry: ['webpack-hot-middleware/client', './src/index.js'],
  output: {
    path: path.resolve('client'),
    filename: 'bundle.js'
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  module: {
    loaders: [
      { test: /\.js$|\.jsx$/, loader: 'babel-loader', query: { presets: ['react', 'es2015'] } },
      { test: /\.css$|\.scss$/, loaders: ['style-loader', 'css-loader', 'sass-loader'] }
    ],
  },
  // plugins: [HtmlWebpackPluginConfig]
};
