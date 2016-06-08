const webpack = require('webpack');
const path = require('path');
const buildPath = path.resolve(__dirname, 'public');
const nodeModulesPath = path.resolve(__dirname, 'node_modules');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:3001',
    'webpack/hot/only-dev-server',
    'webpack-hot-middleware/client',
    path.join(process.cwd(), 'client-render.js'),
  ],
  output: {
    path: buildPath,
    filename: 'build.js',
    publicPath: '/public/'
  },
  resolve: {
    extensions: ['', '.jsx', '.scss', '.js', '.json'],  // along the way, subsequent file(s) to be consumed by webpack
    modulesDirectories: [
      'node_modules',
      nodeModulesPath
    ]
  },
  module: {
    loaders: [
      { 
        test: /\.json$/, 
        loader: 'json-loader' 
      },
      {
        test: /(\.js|\.jsx)$/,
        loaders: ['react-hot', 'babel'],
        exclude: [nodeModulesPath]
      },
      {
        test: /(\.scss|\.css)$/,
        loader: ExtractTextPlugin.extract('style', 'css?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss!sass?sourceMap'),
        include: [nodeModulesPath], // this also includes flexboxgrid
        
      }
    ]
  },
  postcss: [autoprefixer],
  plugins: [
    new webpack.NormalModuleReplacementPlugin(/\/iconv-loader$/, 'node-noop'),
    new ExtractTextPlugin('main.css', { allChunks: true }),
    // Enables Hot Modules Replacement
    new webpack.HotModuleReplacementPlugin(),
    // Allows error warnings but does not stop compiling.
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ],
}
