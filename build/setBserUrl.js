/**
 * 多环境配置
 * @process.env.NODE_ENV 判断当前环境对baseUrl进行赋值
 * @.env.test是test的环境变量
 * @.env.demo是demo的环境变量
 * @author 李啸竹
 */
let baseUrl = "";

switch (process.env.NODE_ENV) {
    case 'development':
    baseUrl = "/api"
    break;
    case 'test':
    baseUrl = "http://test.development.com";
    break;
    case 'demo':
    baseUrl = "http://demo.development.com";
    break;
}

export default baseUrl