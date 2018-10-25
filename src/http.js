/**
 * 使用axios二次封装的http请求方案flyio，http.js是基础拦截器
 * 参考：https://juejin.im/post/59ed8813f265da430b7a66cc
 * 李啸竹
 */
import Vue from "vue";
import fly from "flyio";

Vue.use(fly);
Vue.prototype.$http = fly;
// 基本配置
//定义公共headers
fly.config.headers = {"Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"};
//设置超时
fly.config.timeout = 10000;
//设置请求基地址，第三方api，所以开启了反向代理，如有改变请自行更改
// fly.config.baseURL = "/api"
fly.config.baseURL = process.env.NODE_ENV !== 'production' ? '/api' : process.env.VUE_APP_DEVELOP;

// 单次请求
// fly.request("/test",null,{timeout:5000})

// 添加请求拦截器
fly.interceptors.request.use((request, promise) => {
    // 输出请求体
    console.log(request.body,"拦截的request");
    //可以通过promise.reject／resolve直接中止请求
    //promise.resolve("fake data")
    return request;
},error => {
    return Promise.reject(error);
})

// 添加响应拦截器
fly.interceptors.response.use((response, promise) => {
    // 将请求结果返回
    return response.data;
},error => {
    return Promise.reject(error);
})

//如果需要移除拦截器
// fly.interceptors.request.use(null);
// fly.interceptors.response.use(null,null);

// export fly
export default fly