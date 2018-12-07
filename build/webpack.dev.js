
const webpack = require('webpack')
const merge = require('webpack-merge')
const config = require('./common.js')
const mock = require('./mock.js')

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
    contentBase: path.join(__dirname, '../'),
    compress: false,
    open: true,
    hot: true,
    host: '0.0.0.0',    // 局域网也可以访问
    port: 8888,
    before (app) {
      mock(app)
    },
    // index: '', // specify to enable root proxying
    // proxy: {
    //   context: () => true,
    //   target: 'http://localhost:1234'   // 需要代理的服务器地址
    // }
  }
})