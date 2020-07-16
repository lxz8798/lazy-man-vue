/*
 * @Description: Store
 * @Author: 李啸竹
 * @Date: 2018-12-04 13:30:10
 */
// import Vue from "vue";
// import Vuex from "vuex";

// Vue.use(Vuex);

import state from "./state";
import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";
import homeStore from "./modules/home";
import dialogs from "./modules/dialogStore";

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules: {
    homeStore,
    dialogs
  }
});
