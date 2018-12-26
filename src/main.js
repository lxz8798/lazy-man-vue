import Vue from 'vue';
import App from './App';
import store from './store';
import _ from "lodash";
import fly from "./http";

Vue.use(_);
Vue.use(fly);

Vue.config.productionTip = false;

App.mpType = 'app';

Vue.prototype.$store = store;
Vue.prototype.$http = fly;
Vue.prototype._ = _;

const app = new Vue({
  store,
  ...App
})
app.$mount();
