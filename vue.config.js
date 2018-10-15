
module.exports = {
    // 生产模式
    baseUrl: process.env.NODE_ENV === 'prodcution' ? '/' : './',
    // 输出目录
    outputDir:'dist',
    // js、css、img、fonts静态资源的目录
    assetsDir:'static',
    // 生成的index.html
    // indexPath:'index.html',
    // 生成的静态资源是否使用哈希，默认是true
    filenameHashing:true,
    // 每个page对应一个入口
    // pages: {
    //     index: {
    //       // page 的入口
    //       entry: 'src/main.js',
    //       // 模板来源
    //       template: 'public/index.html',
    //       // 在 dist/index.html 的输出
    //       filename: 'index.html',
    //       // 当使用 title 选项时，
    //       // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
    //       title: '首页',
    //       // 在这个页面中包含的块，默认情况下会包含
    //       // 提取出来的通用 chunk 和 vendor chunk。
    //       chunks: ['chunk-vendors', 'chunk-common', 'index']
    //     },
    //     // 当使用只有入口的字符串格式时，
    //     // 模板会被推导为 `public/subpage.html`
    //     // 并且如果找不到的话，就回退到 `public/index.html`。
    //     // 输出文件名会被推导为 `subpage.html`。
    //     subpage: 'src/subpage/main.js'
    // },
    // eslint-loader 是否在保存的时候检查
    lintOnSave:true,
    // 是否使用包含运行时编译器的Vue核心的构建
    runtimeCompiler: false,
    // 生产环境是否生成 sourceMap 文件
    productionSourceMap:false,
    // 默认情况下 babel-loader 忽略其中的所有文件 node_modules
    transpileDependencies: [],
    // host,post,https
    devServer:{
        port:8085, // 端口号
        host:'localhost',
        https:false, // https:{type:booklen}
        open:true, // 配置自动启动浏览器
        // 不需要可以设置为proxy:null
        // proxy:{
        //     '/api': {
        //         target:'<url>',
        //         ws: true,
        //         changeOrigin: true
        //     },
            // 多页开发入口
            // '/foo': {
            //     target: '<other_url>'
            // }
        // }
    },
    // 构建时开启多进程处理 babel 编译
    parallel: require('os').cpus().length > 1,
    // 支持的loader有css-loader、postcss-loader、sass-loader、less-loader、stylus-loader
    // 配置高于chianWebpack中的关于 css loader的配置
    // css:{
    //     loaderOptions: {
    //         css: {
    //             // 这里的选项会传递给 css-loader
    //             // 是否使用css分离插件 ExtractTextPlugin
    //             extract: true,
    //             // 开启 CSS source maps?
    //             sourceMap: false,
    //             // css预设器配置项
    //             loaderOptions: {},
    //             // 启用 CSS modules for all css / pre-processor files.
    //             modules: false
    //         },
    //         postcss: {
    //             // 这里的选项会传递给 postcss-loader
    //         }
    //     }
    // },
    // webpack 链接 API，用于生成和修改 webapck 配置
    // https://github.com/mozilla-neutrino/webpack-chain
    // chainWebpack: config => {
    //     // 因为是多页面，所以取消 chunks，每个页面只对应一个单独的 JS / CSS
    //     config.optimization.splitChunks({
    //         cacheGrounps:{}
    //     });
    //     // 'src/lib' 目录下为外部库文件，不参与 eslint 检测
    //     config.module.rule('eslint').exclude.add('/Users/maybexia/Downloads/FE/community_built-in/src/lib').end()
    // }
    // cors 相关 https://jakearchibald.com/2017/es-modules-in-browsers/#always-cors
    // corsUseCredentials: false,
    // webpack 配置，键值对象时会合并配置，为方法时会改写配置
    // https://cli.vuejs.org/guide/webpack.html#simple-configuration
    // cofingureWebpack: () => {},
    // vue-loader 配置
    // https://vue-loader.vuejs.org/en/options.html
    // vueLoader: {},
    // 第三方插件配置
    // pluginOptions:{

    // }
}