const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  mode: 'development',

  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },

  devtool: 'none',
  devServer: {
    contentBase: './dist',
  },

  module: {
    rules: [{test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'}],
  },

  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      inject: false,
      template: require('html-webpack-template'),
      title: 'Get-Together',
      appMountId: 'app',
      lang: 'en',
    }),
  ],
}
