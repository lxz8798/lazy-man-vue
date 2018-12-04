/*
 * @Description: Store
 * @Author: 李啸竹
 * @Date: 2018-12-04 13:30:10
 */
import Vue from "vue";
import Vuex from "vuex";
import homeStore from "./modules";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    home: homeStore
  }
});

export default store;
