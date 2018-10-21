const path = require("path");
const glob = require("glob");

//配置pages多页面获取当前文件夹下的html和js
function getEntry(globPath) {
	let entries = {},
		basename, tmp, pathname, appname;

	glob.sync(globPath).forEach(function(entry) {
		basename = path.basename(entry, path.extname(entry));
		// console.log(entry)
		tmp = entry.split('/').splice(-3);
		console.log(tmp)
		pathname = basename; // 正确输出js和html的路径

		// console.log(pathname)
		entries[pathname] = {
			entry: 'src/' + tmp[0] + '/' + tmp[1] + '/' + tmp[1] + '.js',
			template: 'src/' + tmp[0] + '/' + tmp[1] + '/' + tmp[2],
			title:  tmp[2],
			filename: tmp[2]
		};
	});
	return entries;
}

let pages = getEntry('./src/pages/**?/*.html');
console.log(pages)
//配置end

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
    // 入口文件的配置项
    // 每个page对应一个入口
    pages: {
        index: {
          // page 的入口
          entry: 'src/main.js',
          // 模板来源
          template: 'public/index.html',
          // 在 dist/index.html 的输出
          filename: 'index.html',
          // 当使用 title 选项时，
          // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
          title: '首页',
          // 在这个页面中包含的块，默认情况下会包含
          // 提取出来的通用 chunk 和 vendor chunk。
          chunks: ['chunk-vendors', 'chunk-common', 'index']
        },
    //     // 当使用只有入口的字符串格式时，
    //     // 模板会被推导为 `public/subpage.html`
    //     // 并且如果找不到的话，就回退到 `public/index.html`。
    //     // 输出文件名会被推导为 `subpage.html`。
    //     subpage: 'src/subpage/main.js'
    },
    
    // eslint-loader 是否在保存的时候检查
    lintOnSave:true,
    // 是否使用包含运行时编译器的Vue核心的构建，热重启
    runtimeCompiler: true,
    // 生产环境是否生成 sourceMap 文件
    productionSourceMap:false,
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
        // 多页开发入口
        // '/foo': {
        //     target: '<other_url>'
        // }
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
        loaderOptions: { // css预设器配置项
            css: {
                localIdentName: '[name]-[hash]',
                camelCase: 'only'
            },
            stylus: {}
        }
    },
    // webpack 链接 API，用于生成和修改 webapck 配置
    // https://github.com/mozilla-neutrino/webpack-chain
    chainWebpack: config => {
        // 去除console.log
        if (process.env.NODE_ENV === 'production') {
            config.module.rule('js').include.add(/some-module-to-transpile/), // 要处理的模块
            config.module
            .rule('scss')
            .use('sass-loader')
            .tap(options =>
                merge(options, {
                includePaths: [path.resolve(dirname, 'node_modules')],
                })
            ),
            config
            .plugin('html')
            .tap(args => {
                return [/* new args to pass to html-webpack-plugin's constructor */]
            }),
            config
              .plugin('uglify')
              .tap(([options]) =>{
                // 去除 console.log
                return [Object.assign(options, {
                  uglifyOptions: { compress: {
                    drop_console : true,
                    pure_funcs: ['console.log']
                  }}
                })]
            })
        }
	},
    configureWebpack: config => {
        if (process.env.NODE_ENV === 'production') {
          // 为生产环境修改配置...
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