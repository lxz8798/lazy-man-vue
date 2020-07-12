/* eslint-disable */
import Vue from "vue";
import axios from "axios";
import qs from 'qs';
// 基本配置
//定义公共headers
axios.defaults.timeout = 60000;
axios.defaults.baseURL = process.env.VUE_APP_BASE_URL;
axios.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded;charset=UTF-8";
//设置超时
//设置请求基地址，第三方api，所以开启了反向代理，如有改变请自行更改

// 添加请求拦截器
axios.interceptors.request.use(config => {
    // 如果不需要拦截带参数可以不开启
    if (config.method == "GET") {
        // const getData = {}
        // onfig.params = Object.assign({}, data, { token: 'xxx' })
    } else if (config.method == "POST") {
        // const postData = {}
        // config.data = qs.stringify(Object.assign({}, postData, { token: 'xxx' }))
    }
    // 输出请求体
    // console.log(config.body,"拦截的config");
    //可以通过promise.reject／resolve直接中止请求
    return config;
}, error => {
    return Promise.reject(error);
})

// 添加响应拦截器
axios.interceptors.response.use(response => {
    // 如果需要状态码配置可以自行配置
    // switch (response.data.code) {
    //     case 34:
    //     break;
    // }
    // 将请求结果返回
    return response.data;
 }, error => {
    return Promise.reject(error);
});

//如果需要移除拦截器
// axios.interceptors.request.use(null);
// axios.interceptors.response.use(null,null);

// export axios
export default axios;
