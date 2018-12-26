/*
 * @Description: 定义mutations常量
 * @Author: 李啸竹
 * @Date: 2018-12-04 13:38:56
 */
// module.exports = keyMirror({

//   GLOBAL_LOGIN: null, // 登录
//   GLOBAL_LOGOUT: null, // 登出
//   GLOBAL_SET_OPENID: null //设置openId

// });

// function keyMirror(obj) {
//   if (obj instanceof Object) {
//     let _obj = Object.assign({}, obj);
//     let _keyArray = Object.keys(obj);

//     _keyArray.forEach(key => _obj[key] = key);

//     return _obj;
//   }
// }

keyMirror({
  GLOBAL_LOGIN: null, // 登录
  GLOBAL_LOGOUT: null, // 登出
  GLOBAL_SET_OPENID: null //设置openId
})

export default function keyMirror(obj) {
  if (obj instanceof Object) {
    let _obj = Object.assign({}, obj);
    let _keyArray = Object.keys(obj);

    _keyArray.forEach(key => _obj[key] = key);
    
    return _obj;
  }
}