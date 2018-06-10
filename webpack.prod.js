const merge = require('webpack-merge');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
//const WebpackObfuscator = require('webpack-obfuscator')
const common = require('./webpack.common.js');

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
    ]
  }
});
