/*
 * @Description: 模块化dialogStore
 * @Author: 李啸竹
 */
import { EXAMPLE_SET_DIALOG } from "../mutation-types";

const dialogStore = {
  namespaced: true,
  state: {
    exampleDialogObj: {
      flag: false
    }
  },
  getters: {},
  mutations: {
    EXAMPLE_SET_DIALOG: (state, value) => {
      console.log(value, "value");
      state.exampleDialogObj.flag = value;
    }
  },
  actions: {}
};
export default dialogStore;
