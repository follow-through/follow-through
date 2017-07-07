const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './client/index.html',
  filename: 'index.html',
  inject: 'body'
})

module.exports = {
  entry: './client/index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'index_bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$|\.jsx$/, loader: 'babel-loader', query: { presets: ['react', 'es2015'] } },
      // { test: /\.css$|\.scss$/, loaders: ['style-loader', 'css-loader', 'sass-loader'] }
    ],
  },
  plugins: [HtmlWebpackPluginConfig]
};
