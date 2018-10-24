/**
 * 组装actions.js、getters.js、modeles/XX.js 统一导出
 * 每个模块里面都有例子，可以结合使用
 * 李啸竹
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import getters from './getters'
import actions from './actions'
import aModules from './modules/aModules'
// 导出 store 对象
export default new Vuex.Store({
    getters,
    actions,
    modules:{
        aModules
    }
})