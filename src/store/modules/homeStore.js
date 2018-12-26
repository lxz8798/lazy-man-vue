/*
 * @Description: 模块化首页Store
 * @Author: 李啸竹
 * @Date: 2018-12-04 14:00:03
 */
import homeActions from '../actions/homeActions';
import homeGetters from '../getters/homeGetters';
import homeMutations from '../mutations/homeMutations';

const home = {
  state: {
    openId: 1,
    count: 1
  },
  actions: homeActions,
  getters: homeGetters,
  mutations: homeMutations
}

export default home;