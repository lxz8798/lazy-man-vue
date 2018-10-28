/**
 * 简化API操作的封闭
 * @url 接口名称，也可以带上query
 * @params 参数
 * @type 类型，默认是get、post可选，也可以传入其他类型的请求方式如all、request
 * 也支持node增强方式，如download、upload
 * 详情请参考https://www.jianshu.com/p/99915695267a
 * 李啸竹
 */
import fly from "flyio";
import Qs from "qs";

export default {
    getApiData(url, params, type) {
        let res;
        type == "get" || type == undefined ? type = "get" : type = type;
        // catalog_id=257&pn=1&rn=10&dtype=&key=719af00cc3a686d1f23d0e91e698da29
        switch (type) {
            case "get":
                res = fly.get(url, params);
                return res;
            case "post":
                res = fly.post(url, params);
                return res;
            case "request":
                res = fly.request(url, params);
                return res;
            case "all":
                res = fly.all(url, params);
                return res;
            default:
                res = fly.type(url, params);
                break;
        };
    }
};