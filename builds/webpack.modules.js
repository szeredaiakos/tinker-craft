module.exports = {
  rules: [
    {
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader',
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
};