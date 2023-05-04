const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'production',
  entry: { bundle: path.resolve(__dirname, './src/index.js') },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name][contenthash].js',
  },
  module: {

    rules: [

      {

        test: /\.css$/i,

        use: ['style-loader', 'css-loader'],

      },

    ],

  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Web pack',
      filename: 'index.html',
      template: './src/template.html',
    }),
  ],
};