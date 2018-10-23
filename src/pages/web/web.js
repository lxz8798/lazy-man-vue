import Vue from "vue";
import Web from "./web.vue";
import router from "../../router";
import store from "../../store/index";
import _ from "lodash";
import fly from "../../http"; /* eslint-disable */
import normalize from "normalize.css";
import iView from 'iview'; /* eslint-disable */

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
  render: h => h(Web)
}).$mount("#web");
