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
  mode: 'production',
  devtool: false,

  module: wpModules,

  optimization: {
    minimize: true,
  },

  plugins: [
    new CopyPlugin({
      patterns: [
        { from: "./src/index.html", to: "./index.html" },
      ],
    }),
  ],


  resolve: {
    extensions: [ '.tsx', '.ts', '.js', '.jsx' ],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../dist'),
  },
};
