const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");
const indexList = require('./indexList');
const wpModules = require('./webpack.modules');

const entries = [
  ...indexList,
  path.normalize('../src/index.tsx'),
];

module.exports = {
  entry: entries,
  mode: 'development',
  devtool: false,

  module: wpModules,

  plugins: [
    new CopyPlugin({
      patterns: [
        { from: "./src/index.html", to: "./index.html" },
      ],
    }),
  ],

  resolve: {
    extensions: [ '.tsx', '.ts', '.js', '.jsx', '.css' ],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../dist'),
  },

  watchOptions: {
    aggregateTimeout: 150,
    ignored: '/node_modules/',
  },

  devServer: {
    static: path.resolve(__dirname, '../dist'),
    historyApiFallback: true,
    compress: false,
    port: 8088,
  },




};
