/**
 * 单页开发入口，整合了compass的mixin、使用了normalize作为浏览器默认样式
 * lodash集合处理神器等等
 * 后期通过配置文件把大文件加入cdn，缩小打包体积
 * @author 李啸竹
 */
// import Vue from "vue";
import router from "./router/";
import App from "./App.vue";
import store from "./store/index";
// import _ from "lodash";
import http from "./http";
import utils from "./utils/";
import api from "./api/";
import regCopm from "./utils/regComponents";
import config from "../config/";
import "@/components/autoInject.js";
import "./api/fakeApi";
import "normalize.css/normalize.css";
import "lib-flexible";
// import "./registerServiceWorker";

// Vue.use(_);
Vue.use(api);
Vue.use(utils);
Vue.use(regCopm);

process.env.NODE_ENV === "development";

Vue.config.productionTip = false;

Vue.prototype.$http = http;
Vue.prototype._ = _;
Vue.prototype.$api = api;
Vue.prototype.$echarts = echarts;
Vue.prototype.$config = config;

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
