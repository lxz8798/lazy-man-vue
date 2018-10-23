const path = require("path");
// 单页或多页入口
const utils = require("./utils/utils.js");
// 去console插件
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
// 压缩格式
const productionGzipExtensions = ['js', 'css'];
// gzip压缩插件
const CompressionWebpackPlugin = require('compression-webpack-plugin');

module.exports = {
    // baseUrl
    baseUrl: process.env.NODE_ENV === 'prodcution' ? '/' : './',
    // 输出目录
    outputDir:'dist',
    // js、css、img、fonts静态资源的目录
    assetsDir:'static',
    // 生成的index.html
    indexPath:'index.html',
    // 生成的静态资源是否使用哈希，默认是true
    filenameHashing:true,
    // 入口文件的配置项
    // 每个page对应一个入口
    pages: utils.getPages('spa'),
    // 是否在开发环境下通过 eslint-loader 在每次保存时 lint 代码 (在生产构建时禁用 eslint-loader)
    lintOnSave: process.env.NODE_ENV !== 'production',
    // 是否使用包含运行时编译器的Vue核心的构建，热重启
    runtimeCompiler: true,
    // 生产环境是否生成 sourceMap 文件
    productionSourceMap:false,
    // 设置生成的 HTML 中 <link rel="stylesheet"> 和 <script> 标签的 crossorigin 属性（注：仅影响构建时注入的标签）
    crossorigin: '',
    // 在生成的 HTML 中的 <link rel="stylesheet"> 和 <script> 标签上启用 Subresource Integrity (SRI)
    integrity: false,
    // 默认情况下 babel-loader 忽略其中的所有文件 node_modules
    transpileDependencies: [],
    // host,post,https
    devServer:{
        port:8085, // 端口号
        host: '0.0.0.0',
        https:false, // https:{type:booklen}
        open:true, // 配置自动启动浏览器
        // 不需要可以设置为proxy:null
        proxy:{
            '/api': {
                target:'http://apis.juhe.cn',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            },
        //   '/wa/': {
        //        target: 'http://api.match.hexun.com/',
        //        changeOrigin: true,
        //        pathRewrite: {
        //           '^/wa': ''
        //        }
        //    }
        }
    },
    // 构建时开启多进程处理 babel 编译
    parallel: require('os').cpus().length > 1,
    // 支持的loader有css-loader、postcss-loader、sass-loader、less-loader、stylus-loader
    // 配置高于chianWebpack中的关于 css loader的配置
    css: { // 配置高于chainWebpack中关于css loader的配置
        modules: true, // 是否开启支持‘foo.module.css’样式
        extract: true, // 是否使用css分离插件 ExtractTextPlugin，采用独立样式文件载入，不采用<style>方式内联至html文件中
        sourceMap: false, // 是否在构建样式地图，false将提高构建速度
        loaderOptions: {  //向 CSS 相关的 loader 传递选项(支持 css-loader postcss-loader sass-loader less-loader stylus-loader)
            css: {
                localIdentName: '[name]-[hash]',
                camelCase: 'only'
            },
            sass: {
                includePaths: [path.resolve(__dirname, './node_modules/compass-mixins/lib')]
            }
        }
    },
    // 对内部的 webpack 配置（比如修改、增加Loader选项）(链式操作)
    // https://github.com/mozilla-neutrino/webpack-chain
    chainWebpack: config => {
        // 去除console.log
        if (process.env.NODE_ENV === 'production') {
            // 为生产环境修改配置...
        } else {
            // 为开发环境修改配置...
            config.resolve.alias.set('@', resolve('src')).set('assets',resolve('src/assets')).set('components',resolve('src/components'));
        }
	},
    configureWebpack: config => {
        let plugins = [
            new UglifyJsPlugin({
              uglifyOptions: {
                compress: {
                  warnings: false,
                  drop_debugger: true,
                  drop_console: true,
                },
              },
              sourceMap: false,
              parallel: true,
            }),
            new CompressionWebpackPlugin({
                algorithm: 'gzip',
                test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
                threshold: 10240,
                minRatio: 0.8
            })
        ]
        if (process.env.NODE_ENV === 'production') {
          // 为生产环境修改配置...
          config.plugins = [...config.plugins, ...plugins]
        } else {
          // 为开发环境修改配置...
        }
    },
    // cors 相关 https://jakearchibald.com/2017/es-modules-in-browsers/#always-cors
    // corsUseCredentials: false,
    // webpack 配置，键值对象时会合并配置，为方法时会改写配置
    // https://cli.vuejs.org/guide/webpack.html#simple-configuration
    // vue-loader 配置
    // https://vue-loader.vuejs.org/en/options.html
    // vueLoader: {},
    // 第三方插件配置
    // pluginOptions:{
        
    // }
}