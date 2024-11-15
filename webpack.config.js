const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'public', 'images'), // Absolute path to the public folder
          to: '/images',
        },
        {
          from: path.resolve(__dirname, 'public', 'fonts'), // Absolute path to the public folder
          to: '/fonts', // Folder name in the dist directory
        },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|svg|gif)$/,
        type: 'asset/resource',
        generator: {
          filename: 'public/[name][ext]', // Ensures assets are copied to the correct folder
        },
      },
    ],
  },
};
