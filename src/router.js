import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./views/home/Home.vue";
import Example from "./views/example/index.vue";

Vue.use(VueRouter);

export default new VueRouter({
  // mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: {
        keepAlive:false // 是否缓存
      }
    },
    {
      path:"/example",
      name:'example',
      component:Example,
      meta: {
        keepAlive:false // 是否缓存
      }
    }
    // 路由懒加载，按需加载例子
    // {
    //   path: "/about",
    //   name: "about",
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () =>
    //     import(/* webpackChunkName: "about" */ "./views/About.vue")
    // }
  ]
});