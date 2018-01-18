
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseWebpack = require('./webpack.base')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const { styleLoaders, htmlPage } = require('./tools')
module.exports = merge(baseWebpack, {
  // cheap-module-eval-source-map быстрее для разработки
  watch: true,
  module: {
    rules: styleLoaders({ sourceMap: false })
  },
  devtool: '#cheap-module-eval-source-map',
  plugins: [
    htmlPage('home', 'app', ['tab']),
    htmlPage('popup', 'popup', ['popup']),
    htmlPage('panel', 'panel', ['panel']),
    htmlPage('devtools', 'devtools', ['devtools']),
    htmlPage('options', 'options', ['options']),
    htmlPage('background', 'background', ['background']),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"development"'
    }),
    new FriendlyErrorsPlugin()
  ]
})
