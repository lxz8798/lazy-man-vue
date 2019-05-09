
/**
 * vue-cli3.0 的自定义配置
 * 引入了多页开发、多代码入口、多环境入口、优化插件等
 * @author 李啸竹
 */
const path = require("path");
const glob = require('glob');
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const productionGzipExtensions = ['js', 'css'];
const isProduction = process.env.NODE_ENV === 'production';
module.exports = {
  // 输出目录
  // outputDir: 'dist',
  // js、css、img、fonts静态资源的目录
  // assetsDir:'',
  // 生成的index.html
  // indexPath: 'index.html',
  // 生成的静态资源是否使用哈希，默认是true
  filenameHashing: true,

  // 入口文件的配置项
  // 每个page对应一个入口
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: '基于cli3.0的项目基础骨架',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    }
  },

  // 是否使用包含运行时编译器的Vue核心的构建，热重启
  runtimeCompiler: true,

  // 生产环境是否生成 sourceMap 文件
  productionSourceMap: false,

  // 设置生成的 HTML 中 <link rel="stylesheet"> 和 <script> 标签的 crossorigin 属性（注：仅影响构建时注入的标签）
  crossorigin: '',

  // 在生成的 HTML 中的 <link rel="stylesheet"> 和 <script> 标签上启用 Subresource Integrity (SRI)
  integrity: false,

  // 默认情况下 babel-loader 忽略其中的所有文件 node_modules
  transpileDependencies: [],

  // host,post,https
  devServer: {
    // port:8085, // 端口号
    // host: '0.0.0.0',
    // https:false, // https:{type:booklen}
    // open:true, // 配置自动启动浏览器
    // proxy:null,
    // 不需要可以设置为proxy:null
    proxy: {
      '/api': {
        target: process.env.VUE_APP_BASE_URL,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    },
    // https: true
  },

  // 支持的loader有css-loader、postcss-loader、sass-loader、less-loader、stylus-loader
  // 配置高于chianWebpack中的关于 css loader的配置
  css: {
    modules: true,
    loaderOptions: {
      sass: {
        includePaths: [
          'F:\\project\\gardenTime\\node_modules\\compass-mixins\\lib'
        ]
      }
    }
  },

  configureWebpack: config => {
    if (isProduction) {
      config.plugins.push(new CompressionWebpackPlugin({
          algorithm: 'gzip',
          test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
          threshold: 10240,
          minRatio: 0.8
        })
      )
    }
  },

  // 对内部的 webpack 配置（比如修改、增加Loader选项）(链式操作)
  // https://github.com/mozilla-neutrino/webpack-chain
  chainWebpack: config => {
    if (isProduction) {
      // 为生产环境修改配置...
    } else {
      // 为开发环境修改配置...
      config.module
        .rule('iview')
        .test(/iview.src.*?js$/)
        .use('babel')
        .loader('babel-loader')
        .end()
    }
  }
}