const path = require('path'),
  ExtractTextPlugin = require('extract-text-webpack-plugin')
const HappyPack = require('happypack')
const os = require('os');
const threadPool = HappyPack.ThreadPool({ size: os.cpus().length  })

const isDev = process.env.NODE_ENV !== 'production' // IMPROVE use webpack mode instead of NODE_ENV

const rule = {
  js: {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    loaders: ['babel-loader']
  },
  style_css: {
    test: /\.css$/,
    loaders: [
      'style-loader',
      'css-loader',
      'postcss-loader'
    ]
  },
  style_stylus: {
    test: /\.styl$/,
    loaders: [
      'style-loader',
      'css-loader?modules=true&localIdentName=[path][name]__[local]--[hash:base64:4]',
      'postcss-loader',
      'stylus-loader'
    ],
    exclude: {
      or: [/node_modules/, /global/]
    }
  },
  style_stylus_global: {
    test: /\.styl$/,
    loaders: [
      'style-loader',
      'css-loader',
      'postcss-loader',
      'stylus-loader'
    ],
    include: [path.join(__dirname, './src/assets/styles/global')]
  },
  style_less: {
    test: /\.scss/,
    loaders: [
      'style-loader',
      'css-loader',
      'postcss-loader',
      'sass-loader'
    ]
  }
}


const happyPlugins = Object
        .entries(rule)
        .map(([ id, { loaders } ]) => {
            return new HappyPack({
                id,
                threadPool,
                loaders
            })
        })
const rules = isDev ?
  Object.entries(rule).map(([id, {
    loaders,
    ...cfg
  }]) => {
    return {
      ...cfg,
      use: loaders
    }
  }) :
  Object.entries(rule).map(([id, {
    loaders,
    ...cfg
  }]) => {
    const use = id.startsWith('style') ?
      ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: loaders.slice(1)
      }) :
      loaders
    return {
      ...cfg,
      use
    }
  })
exports.baseConfigs = {
  context: path.join(__dirname, 'src'),
  entry: {
    index: './index.js'
  },
  module: {
    //加载器配置
    rules: [
      ...rules,
    {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: '[name]_[hash:6].[ext]'
          }
        }]
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: '[name]_[hash:6].[ext]'
          }
        }]
      },
      {
        test: /\.yml/,
        use: ['json-loader', 'yaml-loader']
      },
    ]
  },
  resolve: {
    modules: [
      path.join(__dirname, './src'),
      path.join(__dirname, './node_modules')
    ],
    alias: {
      common: path.join('common'),
      constant: path.join('constants'),
      container: path.join('containers'),
      component: path.join('components'),
      style: path.join('assets/styles'),
      image: path.join('assets/images'),
      mock: path.join('mock')
    },
    extensions: ['.js', '.jsx','.styl']
  }
}
exports.happyPlugins = happyPlugins ;
