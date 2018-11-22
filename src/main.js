/**
 * 单页开发入口，整合了compass的mixin、使用了normalize作为浏览器默认样式
 * lodash集合处理神器等等
 * 后期通过配置文件把大文件加入cdn，缩小打包体积
 * @author 李啸竹
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";
import _ from "lodash";
import fly from "./http"; /* eslint-disable */
import normalize from "normalize.css";
import global from "./utils/global";
import api from "./api/api";
import regCopm from "./utils/regComponents";

Vue.use(_);
Vue.use(normalize);
Vue.use(global);
Vue.use(api);
Vue.use(fly);
Vue.use(regCopm);

process.env.NODE_ENV === 'development' && require('@/mock/mock.js');

Vue.config.productionTip = false;

Vue.prototype.$http = fly;
Vue.prototype._ = _;
Vue.prototype.$api = api;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");