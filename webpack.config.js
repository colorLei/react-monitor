const webpack = require('webpack')
   , merge = require('webpack-merge')
   , path = require('path')
   , ExtractTextPlugin = require('extract-text-webpack-plugin')
   , HtmlWebpackPlugin = require('html-webpack-plugin')
   , { baseConfigs , happyPlugins } = require('./webpack.config.base')

module.exports = merge(baseConfigs, {
  devtool: 'cheap-module-source-map',
  plugins: [
    ...happyPlugins,
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin("[name].[hash].css"),
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
  ],
  devServer: {
    stats: {
      chunks:false,
      timings: true
     },
    contentBase: './dist',
    host: 'localhost',      // 默认是localhost
    port: 3000,             // 端口
    open: true,             // 自动打开浏览器
    hot: true,              // 开启热更新
    clientLogLevel:'none',  //不在控制台输出加载信息
    proxy: {
      '/workbench':{
        target: 'http://workbench.corp.qunar.com/',
        changeOrigin: true,
        logLevel: 'debug',
        pathRewrite: {
          '^/workbench': ''
        },
      },
      '/amountskyruler':{
        target: 'http://10.86.82.186:8080/',
        changeOrigin: true,
        logLevel: 'debug',
        pathRewrite: {
          '^/amountskyruler': 'amountskyruler'
        },
      },
       '/opdr':{
        target: 'http://10.86.82.142:8080/',
        changeOrigin: true,
        logLevel: 'debug',
        pathRewrite: {
          '^/opdr': 'opdr'
        },
      },
  },
  }
})
