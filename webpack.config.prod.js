const webpack = require('webpack'),
  merge = require('webpack-merge'),
  ExtractTextPlugin = require('extract-text-webpack-plugin'),
  path = require('path'),
  { baseConfigs , happyPlugins } = require('./webpack.config.base'),
  HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = merge(baseConfigs, {
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'js/[name].[chunkhash].js',
    publicPath: '/',
  },
  plugins: [
    ...happyPlugins,
    new ExtractTextPlugin("css/[name].[hash].css"),
    new HtmlWebpackPlugin({
      template: './index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      },
      hash: true
    }),
  ],
  optimization: {
    runtimeChunk: {
      name: 'manifest'
    },
    splitChunks: {
      cacheGroups: {
        vendor: { // 抽离第三方插件
          test: /node_modules/, // 指定是node_modules下的第三方包
          chunks: 'initial',
          name: 'vendor', // 打包后的文件名，任意命名
          // 设置优先级，防止和自定义的公共代码提取时被覆盖，不进行打包
          priority: 10
        },
        utils: { // 抽离自己写的公共代码，utils这个名字可以随意起
          chunks: 'initial',
          name: 'utils', // 任意命名
          minSize: 0 // 只要超出0字节就生成一个新包
        }
      }
    }
  }
})
