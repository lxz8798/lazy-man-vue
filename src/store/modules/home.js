/*
 * @Description: 模块化首页Store，
 * 有二种书写方法，一种是按VUE规范，把常量写进types，一种是直接在模块文件定义，
 * 下面exampleStore和homeSotre是二种方式的盒子
 * @Author: 李啸竹
 * @Date: 2018-12-04 14:00:03
 */
//

const FAKE_MUTATIONS = 'FAKE_MUTATIONS';

const homeStore = {
  state: {
    fakeFlag: false
  },
  getters: {},
  mutations: {
    FAKE_MUTATIONS: (state, value) => {
      state.fakeFlag = value;
    }
  },
  actions: {},
}
export default homeStore