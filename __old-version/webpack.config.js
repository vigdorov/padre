const path = require('path'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/date-worker.js',
  output: {
    path: path.join(__dirname + '/build'),
    filename: './script.js',
  },
  devServer: {
    compress: true,
    port: 3005,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      publicPath: './build',
      filename: 'dateWorker.js.html',
    }),
    new MiniCssExtractPlugin({
      filename: './style.css',
    }),
  ],
};
