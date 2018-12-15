
const webpack = require('webpack')
const merge = require('webpack-merge')
const config = require('./webpack.common.js')
const request = require('../request')

module.exports = merge(config, {
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: [
          'file-loader'
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    historyApiFallback: true,   // 单页应用可以刷新路由
    open: true,   // 是否自动打开浏览器
    hot: true,    // 热更新
    port: 8899,
    proxy: {
      // api开头的请求将会转发到localhost:3000
      '/api': {
        target: 'http://localhost:3000',
        pathRewrite: {'^/api' : ''},
        changeOrigin: true,
        secure: false
      }
    },
    after (app) {
      request(app)    // 如果使用proxy，这里要设置成after，或者条件判断跳过
    }
  }
})