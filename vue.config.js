
/**
 * vue-cli3.0 的自定义配置
 * 引入了多页开发、多代码入口、多环境入口、优化插件等
 * @author 李啸竹
 */
'use strict';

const path = require("path");
const glob = require('glob');
const webpack = require('webpack');
const PAGES_PATH = path.resolve(__dirname, './src/pages');
// gzip压缩
const CompressionWebpackPlugin = require('compression-webpack-plugin');

const productionGzipExtensions = ['js', 'css'];
const isProduction = process.env.NODE_ENV !== 'development';

const cdn = {
  css: [
    'https://cdn.staticfile.org/iview/3.2.2-rc.1/styles/iview.css'
  ],
  js: [
      'https://s2.pstatp.com/cdn/expire-1-M/vue/2.6.10/vue.min.js',
      'https://s2.pstatp.com/cdn/expire-1-M/vuex/3.1.0/vuex.min.js',
      'https://s2.pstatp.com/cdn/expire-1-M/axios/0.19.0-beta.1/axios.min.js',
      'https://s1.pstatp.com/cdn/expire-1-M/moment.js/2.24.0/moment.min.js',
      'https://s2.pstatp.com/cdn/expire-1-M/lodash.js/4.17.12-pre/lodash.min.js',
      'https://s0.pstatp.com/cdn/expire-1-M/echarts/4.2.1-rc.3/echarts.min.js'
  ]
}

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
      title: '此骨架为了快速构建空白的VUE项目而诞生',
      // chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    // index2: {
    //   entry: 'src/main.js',
    //   template: 'public/index.html',
    //   filename: 'index.html',
    //   title: '基于cli3.0的项目基础骨架',
    //   chunks: ['chunk-vendors', 'chunk-common', 'index']
    // },
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
    compress: false, // 开启压缩
    // proxy:null,
    // 不需要可以设置为proxy:null
    // proxy: {
    //   '/api': {
    //     target: process.env.VUE_APP_BASE_URL,
    //     changeOrigin: true,
    //     pathRewrite: {
    //       '^http://localhost:8080': ''
    //     }
    //   }
    // },
    // overlay: {
    //   warnings: false,
    //   errors: false
    // },
    // https: true
  },
  lintOnSave: true, // 如果需要关闭eslint 把lintOnsave改成false即可。
  // 支持的loader有css-loader、postcss-loader、sass-loader、less-loader、stylus-loader
  // 配置高于chianWebpack中的关于 css loader的配置
  css: {
    modules: true,
    sourceMap: false,
    loaderOptions: {
      sass: {
        data: `@import "@/assets/base/_base.scss";`
      }
    }
  },

  configureWebpack: config => {
    // 生产环境相关配置
    if (isProduction) {
      config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true;
      // 忽略项，如果开启下面的三项，则不打包vue、vue-router、momoent，需要从CDN之类的外站引入，需要线上支持
      config.externals = {
        'vue': 'Vue',
        'vuex': 'Vuex',
        'axios': 'axios',
        'echarts': 'echarts',
        'lodash': 'lodash'
      }
      // gzip配置
      config.plugins.push(
        new CompressionWebpackPlugin({
          filename: '[path].gz[query]',
          algorithm: 'gzip',
          test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
          threshold: 10240,
          minRatio: 0.8,
          deleteOriginalAssets: false, // 删除原文件
        }),
        new webpack.BannerPlugin({
          entryOnly: true,
          banner: () => {
          return `Copyright @ 2020`
          + `\n`
          + `Author: lixiaozhu`
          + `\n`
          + `Documentation: build vue project quick`
          + `\n`
          + `Date: ${new Date()}`
          }
        }),
      );
    }
  },

  // 对内部的 webpack 配置（比如修改、增加Loader选项）(链式操作)
  // https://github.com/mozilla-neutrino/webpack-chain
  chainWebpack: config => {
    // 为html注入cdn
    config.plugin("html-index").tap(args => {
      args[0].cdn = cdn
      return args;
    })
    // 移除 preload
    glob.sync(PAGES_PATH + '/*/main.js').forEach(filePath => {
      const pageName = path.basename(path.dirname(filePath))
      config.plugins.delete(`preload-${pageName}`)
      config.plugins.delete(`prefetch-${pageName}`)
    })
    // 为开发环境修改配置...
    config.module.rule('iview').test(/iview.src.*?js$/).use('babel').loader('babel-loader').end();
    // 压缩图片
    config.module.rule('images').use('image-webpack-loader').loader('image-webpack-loader').options({ bypassOnDebug: true }).end();
  }
}