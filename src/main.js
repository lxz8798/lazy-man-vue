import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import fly from "./http";

Vue.use(fly);

Vue.config.productionTip = false;

Vue.prototype.$http = fly;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
