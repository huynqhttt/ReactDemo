const webpack = require('webpack');
const path = require('path');
const buildPath = path.resolve(__dirname, 'public');
const sassPath = path.resolve(__dirname, 'sass');
const nodeModulesPath = path.resolve(__dirname, 'node_modules');
const NormalModuleReplacementPlugin = webpack.NormalModuleReplacementPlugin;
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractCSS = new ExtractTextPlugin('main.css');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:3001',
    'webpack/hot/only-dev-server',
    path.join(process.cwd(), 'client-render.js'),
  ],
  output: {
    path: buildPath,
    filename: 'build.js',
  },
  plugins: [
    new webpack.NormalModuleReplacementPlugin(/\/iconv-loader$/, 'node-noop'),
    // Enables Hot Modules Replacement
    new webpack.HotModuleReplacementPlugin(),
    // Allows error warnings but does not stop compiling.
    extractCSS,
    new webpack.NoErrorsPlugin(),
    new webpack.ProvidePlugin({
      'Promise': 'es6-promise', // Thanks Aaron (https://gist.github.com/Couto/b29676dd1ab8714a818f#gistcomment-1584602)
      'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
    })
  ],
  module: {
    loaders: [
      { 
        test: /\.json$/, 
        loader: 'json-loader' 
      },
      {
        test: /\.js$/,
        loaders: ['react-hot', 'babel'],
        exclude: [nodeModulesPath],
      },
      {
        test: /\.scss$/,
        loader: extractCSS.extract(['css','sass'])
      },
      {
        test: /\.css$/, 
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader'),
      }
    ]
  },
  sassLoader: {
    includePaths: [sassPath]
  }
}
