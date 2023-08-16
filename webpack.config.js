const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    header: './src/header.js',
    content: './src/content.js',
    dropdown: './src/dropdown.js',
    storage: './src/storage.js',
    index: './src/index.js',
    UI: './src/UI.js'
  },
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
  },
  plugins: [
    new HtmlWebpackPlugin({
        title: 'Have To Do',
        filename: 'index.html', 
        templateParameters: {
          googleFontLink: '<link href="https://fonts.googleapis.com/icon?family=Material+Icons+Round" rel="stylesheet">',
        },
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  optimization: {
    runtimeChunk: 'single',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
};
