const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");
const indexList = require('./indexList');

const entries = [
  ...indexList,
  path.normalize('../src/index.tsx'),
];

module.exports = {
  entry: entries,
  mode: 'production',
  devtool: false,
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      }, {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      }, {
        test: /\.jsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
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
