/**
 * 判断当前是单页还是多页开发
 * 接受参数spa、mpa
 * 李啸竹
 */
const glob = require("glob");
const PAGE_PATH = './src/pages';  // 注意是./ 而不是../ 这可能和commen.js的加载有关系

module.exports = {
    getPages: (v) => {
        if (v == 'spa') {
           
            index = {
                // page 的入口
                entry: 'src/main.js',
                // entry:{
                //     main:'src/main.js',
                //     // test: './src/script/test.js',
                //     // demo: './src/script/demo.js'
                // },
                // 模板来源
                template: 'public/index.html',
                // 在 dist/index.html 的输出
                filename: 'index.html',
                // 当使用 title 选项时，
                // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
                title: 'spa 单页开发',
                // 在这个页面中包含的块，默认情况下会包含
                // 提取出来的通用 chunk 和 vendor chunk。
                chunks: ['chunk-vendors', 'chunk-common', 'index']
            }
            // 当使用只有入口的字符串格式时，
            // 模板会被推导为 `public/subpage.html`
            // 并且如果找不到的话，就回退到 `public/index.html`。
            // 输出文件名会被推导为 `subpage.html`。
            // subpage: 'src/subpage/main.js'
        } else {
            //  首先得到包含pages文件夹里面符合条件的路径数组
            let entryHtml = glob.sync(PAGE_PATH + '/*/*.html');

            //  pages就是vue.config.js里面pages选项的值，是一个对象
            let pages = {};

            //  遍历得到的路径数组，从字符串中分割出需要的页面名字
            entryHtml.forEach((filePath) => {
                let fileName = filePath.substring(filePath.lastIndexOf('/') + 1, filePath.lastIndexOf('.'));

            //  组建pages需要的值
                pages[fileName] = {
                    entry: `src/pages/${fileName}/${fileName}.js`,
                    template: `src/pages/${fileName}/${fileName}.html`,
                    filename: `${fileName}.html`
                }
            });
            return pages;
        }
    }
};