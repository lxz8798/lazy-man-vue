/* eslint-disable */
/*
 * 通过install可以全局注入4种方式
 * Vue.mixin、Vue.prototype、Vue.filter、Vue.directive
 * 参考 https://cn.vuejs.org/v2/guide/plugins.html
 * @Author: 李啸竹
 * @Date: 2018-10-28 01:10:12
 */
export default {
  install(Vue, options) {
    /**
     * Promise.all 的好处是所有的promise实例都变为resolve的时候，该方法才会返回
     * 并将所有结果传递results数组中。promise数组中任何一个promise为reject的话
     * 则整个Promise.all调用会立即终止，并返回一个reject的新的promise对象
     * 比如用在结果都返回之前只显示loading的时候
     * @author 李啸竹
     */
    Vue.prototype.$All = function (obj) {
      Promise.all([...obj]).then(result => {
        console.log(result);
      })
        .catch(error => {
          console.error(error);
        });
    }
    /**
     * @Description: 用于路由的跳转
     * @Author: 李啸竹
     */
    Vue.prototype.$goPath = function (path, query) {
      this.$router.push({
        path: path,
        query: query
      })
    }
    /**
     * @Description: 加密
     * @Author: 李啸竹
     * @params: 
     */
    Vue.prototype.$encry = function (key, token) {
      let encryPassword = this.$crypto.MD5(key, token).toString();
      return encryPassword;
    }
    /**
     * @Description: 存入session
     * @Author: 李啸竹
     * @params: str
     */
    Vue.prototype.$setSesstion = function (key, str) {
      if (!sessionStorage.key) {
        sessionStorage.setItem(key, str);
      } else {
        sessionStorage.removeItem(key);
        sessionStorage.setItem(key, str);
      }
    }
  }
};
