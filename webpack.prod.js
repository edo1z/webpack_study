const merge = require('webpack-merge');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
//const WebpackObfuscator = require('webpack-obfuscator')
const common = require('./webpack.common.js');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = merge(common, {
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        uglifyOptions: {
          compress: {
            drop_console: true
          }
        },
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      // filename: '[name].[hash].css',
      chunkFilename: '[id].[hash].css',
    }),
    // new WebpackObfuscator ({
    //   rotateUnicodeArray: true,
    // })
  ]
});