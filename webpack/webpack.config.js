// this import is not required
// const webpack = require('webpack');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: './src/principal.js',
  output: {
    filename: 'principal.js',
    path: `${__dirname}/public`,
  },
  plugins: [
    new MiniCSSExtractPlugin({
      filename: 'estilo.css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCSSExtractPlugin.loader,
          // 'style-loader', // Adiciona CSS à DOM injetando a tag <style>
          'css-loader', // interpreta @import, url()...
        ],
      },
    ],
  },
};
