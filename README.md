# 这里是基于vue-cli3.0封装的基础项目骨架
默认安装了很多实用插件,如：lodash、normalize.css<br/>
项目骨架内使用vw、vh定义宽高、使用rem为基础单位<br/>
使用normalize.css初始化了浏览器样式<br/>
iview采用按需的方式<br/>
regCopm为公共组件注册方法，直接使用即可<br/>
使用fly代码了axios，当然，如果你想使用axios也可以<br/>
api是一个简单的api管理，直接返回一个promise，页面内使用async、await,具体可以查看/example<br/>
vue.config.js里面默认开启了gzip和其他的一些优化配置，详情可看注释自定义配置<br/>
预留了一个global方法作为全局方法输出<br/>
默认开启iview的loadingBar，如果需要自定义的loading请自行配置<br/>
针对移动端也做了很多优化，当然，如果想要完全适配肯定是需要自己做个勤劳的码农的<br/>
还有很多隐藏功能，可以自行研究<br/>
使用方法：<br />

```
git clone git@github.com:lxz8798/myBasicProjectFramework.git
```
```
cd myBasicProjectFramework
```
```
npm i
```
```
npm run serve
```

<p></p>
<a href="http://develop.kingchannels.cn:50013">众知 | </a>
<a href="http://develop.kingchannels.cn:50039"
  >版权知识加工标准系统 |
</a>
<a href="http://v3.lazy-studio.com">我的个人主页3.0</a>