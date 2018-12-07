
const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  mode: process.env.NODE_ENV,
  entry: './src/app.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        use: {
          loader: 'babel-loader'
        },
        exclude: /node_modules/
      },
      {
        test: /\.(css|less)$/,
        use: [
          isProd ? MiniCssExtractPlugin.loader : 'style-loader',
          'css-loader',
          'postcss-loader',
          'less-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlwebpackPlugin({
      title: '标题',
      template: './src/template.html'
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.less']
  }
}