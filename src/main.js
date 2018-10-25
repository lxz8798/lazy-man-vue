/**
 * 单页开发入口，整合了compass的mixin、使用了normalize作为浏览器默认样式
 * lodash集合处理神器等等
 * 后期通过配置文件把大文件加入cdn，缩小打包体积
 * 李啸竹
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import _ from "lodash";
import http from "./http"; /* eslint-disable */
import normalize from "normalize.css";
import api from "./api/api";

Vue.use(_);
Vue.use(normalize);
Vue.use(api);

Vue.config.productionTip = false;

Vue.prototype._ = _;

new Vue({
  router,
  http,
  store,
  render: h => h(App)
}).$mount("#app");