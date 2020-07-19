# lazy-man-vue
[![Build Status](https://travis-ci.com/lxz8798/lazy-man-vue.svg?branch=master)](https://travis-ci.com/lxz8798/lazy-man-vue)  [![Coverage Status](https://coveralls.io/repos/github/lxz8798/lazy-man-vue/badge.svg)](https://coveralls.io/github/lxz8798/lazy-man-vue)  ![npm](https://img.shields.io/npm/v/node?label=node)  ![npm](https://img.shields.io/npm/v/vue?label=vue)

### 为了更高效、方便、快速、便捷的开发更种VUE应用而诞生的空白项目骨架，内置了一些常用插件优化了一些打包配置等等。
01. 使用normalize.css初始化了浏览器样式，默认集成lodash、mockjs、echarts等等。
02. 项目骨架内使用vw、vh定义宽高、自动转换px为rem适应屏幕，可以拉伸屏幕大小看变化。
03. 内嵌iView采用按需的方式。
04. components下的common，以public开头的组件会自动注册。
05. api是一个简单的api管理，直接返回一个promise，页面内使用async、await,具体可以查看/example。
06. vue.config.js里面默认开启了gzip和其他的一些优化配置，前端开启gzip的同时后端也得支持，详情可看注释自定义配置。
07. 内置了一些工具方法，可以直接this.xxx使用。
08. 默认开启iview的loadingBar，如果需要自定义的loading请自行配置。
09. 全局的模态框管理。
10. example更新部份使用例子。
11. config.externals是忽略打包，配合cdn里面使用。
12. 使用cdn的方式分离vendors依赖，分离插件，如果需要使用import 可以在vue.config.js里面把cdn注释，同时解开main、http、router、vuex/index，store/index里
    面的相关import。
13. 更新了压缩图片和打包后删除console。
14. 新增多环境支持，和打包配置，可以使用build:pro和build:demo打包不同环境，可以使用全局config来配置变量或者使用环境变量。
15. 增加了全局config，具体可看config/index.js。

#### 还有更多操作请自行发掘
#### 骨架会不定期更新更多优化内容
......

```
git clone git@github.com:lxz8798/lazy-man-vue.git
```
```
cd lazy-man-vue
```
```
npm i or yarn
```
```
npm run serve
```