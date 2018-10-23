import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import _ from "lodash";
import fly from "./http"; /* eslint-disable */
import normalize from "normalize.css";
import iView from 'iview'; /* eslint-disable */

require('./mock/mock.js') /* 引入mock */
require('./config.js') /* baseUrl设置 */

Vue.use(fly);
Vue.use(_);
Vue.use(iView);
Vue.use(normalize);

Vue.config.productionTip = false;

Vue.prototype.$http = fly;
Vue.prototype._ = _;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");