// 引入mockjs，好用的模拟数据，比如占位图，随机颜色，数组等等，使用方法：http://mockjs.com/0.1/#%E7%94%A8%E6%B3%95
const Mock = require('mockjs');
//这里的url地址其实可以换成一个字段，比如msg,下边请求时候对应就可以
Mock.mock(process.env.VUE_APP_MOCKURL + '/test/list', {
  'name': '@cname',
  'age|1-10': 10
});
//这里的url地址其实可以换成一个字段，比如msg,下边请求时候对应就可以
Mock.mock(process.env.VUE_APP_MOCKURL,'post', {
  'data|1-2':[{
    'title':'@title',
    'article':'@csentence'
    }]
});