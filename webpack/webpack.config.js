const modoDev = process.env.NODE_ENV !== 'production';
// this import is not required
// const webpack = require('webpack');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CSSMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
  mode: modoDev ? 'development' : 'production',
  entry: './src/principal.js',
  output: {
    filename: 'principal.js',
    path: `${__dirname}/public`,
  },
  plugins: [
    new MiniCSSExtractPlugin({
      filename: 'estilo.css',
    }),
    new TerserPlugin({
      parallel: true,
      terserOptions: {
        ecma: 6,
      },
    }),
  ],
  optimization: {
    minimizer: [new CSSMinimizerPlugin({})],
  },
  module: {
    rules: [
      {
        test: /\.s?[ac]ss$/,
        use: [
          MiniCSSExtractPlugin.loader,
          // 'style-loader', // Adiciona CSS à DOM injetando a tag <style>
          'css-loader', // interpreta @import, url()...
          'sass-loader',
        ],
      },
    ],
  },
};
