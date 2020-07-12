/*
 * @Description: Store
 * @Author: 李啸竹
 * @Date: 2018-12-04 13:30:10
 */
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import state from "./state";
import getters from "./getters";
import actions from "./actions";
import mutations from "./mutations";
import home from "./modules/home";

export default new Vuex.Store({
  state,
  mutations,
  modules: {
    home
  }
});
