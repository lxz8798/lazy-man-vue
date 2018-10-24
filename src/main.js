import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import _ from "lodash";
import http from "./http"; /* eslint-disable */
import normalize from "normalize.css";

// require('./config.js') /* baseUrl设置 */

Vue.use(_);
Vue.use(normalize);

Vue.config.productionTip = false;

Vue.prototype._ = _;

new Vue({
  router,
  http,
  store,
  render: h => h(App)
}).$mount("#app");