import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";
import _ from "lodash";
import fly from "./http";
import iView from 'iview'

Vue.use(fly);
Vue.use(_);
Vue.use(iView)

Vue.config.productionTip = false;

Vue.prototype.$http = fly;
Vue.prototype._ = _;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
