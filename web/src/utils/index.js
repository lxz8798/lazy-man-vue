/**
 * 判断当前是单页还是多页开发
 * 接受参数spa、mpa
 * @author 李啸竹
 */
export default {
  install(Vue, options) {
    /*
    *
    * @Description: 随机颜色
    * @Author: 李啸竹
    * @Date: 2019-02-11 17:13:00
    */
    Vue.prototype.getRandomColor = function() {
        var r = Math.floor(Math.random()*230);
              var g = Math.floor(Math.random()*230);
              var b = Math.floor(Math.random()*230);
              var color = '#'+r.toString(16)+g.toString(16)+b.toString(16);
        return color;
    }
    /*
      *
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
    /*
      *
      * @Description: 用于路由的跳转
      * @Author: 李啸竹
    */
    Vue.prototype.$goPath = function (path, query) {
      this.$router.push({
        path: path,
        query: query
      })
    }
    /*
      *
      * @Description: 加密
      * @Author: 李啸竹
      * @params: 
    */
    Vue.prototype.$encry = function (key, token) {
      let encryPassword = this.$crypto.MD5(key, token).toString();
      return encryPassword;
    }
    /*
      *
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
    },
    /*
      *
      * @Description: 格式化时间
      * @Author: 李啸竹
      * @params: str
    */
    Vue.prototype.$dateTime = function(num, unit) {
      let time = Number(num)
      function setTime(val) {
        return val <= 9 ? `0${val}` : val
      }
      let h = setTime(Math.floor(time / 3600))
      let m = setTime(Math.floor((time / 60) % 60))
      let s = setTime(Math.floor(time % 60))
      if (h == "00") {
        if (unit) {
          return `${m}分${s}秒`
        } else {
          return `${m}:${s}`
        }
      }
      if (unit) {
        return `${h}时${m}分${s}秒`
      } else {
        return `${h}:${m}:${s}`
      }
    },
    /*
      * 数字的带符号显示，最多到万位符号
      * @Author: 李啸竹
      * @params: str
      * 
    */
    Vue.prototype.$formatNumber = function(number) {
      if (typeof number !== "number") {
        return number
      }
      if (number < 1000) {
        return number
      } else if (number < 10000) {
        return number / 1000 + "千"
      } else {
        return number / 10000 + "万"
      }
    },
    /*
      * 字符转换
      * @Author: 李啸竹
      * @params: str
      * 
    */
    Vue.prototype.$encodeUTF8 = function encodeUTF8(s) {
      var i,
        r = [],
        c,
        x
      for (i = 0; i < s.length; i++)
        if ((c = s.charCodeAt(i)) < 0x80) r.push(c)
        else if (c < 0x800) r.push(0xc0 + ((c >> 6) & 0x1f), 0x80 + (c & 0x3f))
        else {
          if ((x = c ^ 0xd800) >> 10 == 0)
            //对四字节UTF-16转换为Unicode
            (c = (x << 10) + (s.charCodeAt(++i) ^ 0xdc00) + 0x10000),
              r.push(0xf0 + ((c >> 18) & 0x7), 0x80 + ((c >> 12) & 0x3f))
          else r.push(0xe0 + ((c >> 12) & 0xf))
          r.push(0x80 + ((c >> 6) & 0x3f), 0x80 + (c & 0x3f))
        }
      return r
    }
  }
}
