/* eslint-disable */
/**
 * 使用axios二次封装的http请求方案flyio，http.js是基础拦截器
 * 参考：https://juejin.im/post/59ed8813f265da430b7a66cc
 * 李啸竹
 */
import Vue from "vue";
import fly from "flyio";
import baseUrl from "./../build/setBserUrl";
// 基本配置
//定义公共headers
fly.config.headers = { "Content-Type": "application/x-www-form-urlencoded" };
//设置超时
fly.config.timeout = 10000;
//设置请求基地址，第三方api，所以开启了反向代理，如有改变请自行更改
fly.config.baseURL = process.env.NODE_ENV == 'development' ? '/api' : process.env.VUE_APP_BASE_URL;

// 添加请求拦截器
fly.interceptors.request.use((request, promise) => {
    // 如果不需要拦截带参数可以不开启
    // let params = [
    //     {
    //         name: '小明',
    //         age: '30',
    //         sex: '男'
    //     },
    //     {
    //         name: '幺妹',
    //         age: '18',
    //         sex: '女'
    //     }
    // ]
    // let [{ name: name, age: age, sex: sex }, { name: name2, age: age2, sex: sex2 }] = params

    // if (request.method == "GET") {
    //     request.params = { name, age, sex }
    // } else if (request.method == "POST") {
    //     request.body = Object.assign(request.body, { name2, age2, sex2 })
    // }
    // 输出请求体
    // console.log(request.body,"拦截的request");
    //可以通过promise.reject／resolve直接中止请求
    return request;
}, error => {
    return Promise.reject(error);
})

// 添加响应拦截器
fly.interceptors.response.use((response, promise) => {
    // 将请求结果返回
    return response.data;
 }, error => {
    return Promise.reject(error);
});

//如果需要移除拦截器
// fly.interceptors.request.use(null);
// fly.interceptors.response.use(null,null);

// export fly
export default fly;
