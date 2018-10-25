import Vue from "vue";
import VueRouter from "vue-router";
// import example from "./views/example/example.vue";

Vue.use(VueRouter);

const getComponent = name => () => import(`./views/${name}/${name}.vue`);

const router = new VueRouter({
  // mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component:getComponent("home"),
      meta: {
        auth: false,
        keepAlive:false // 是否缓存
      }
    },
    {
      path:"/example",
      name:'example',
      // component:example,
      component:getComponent("example"),
      meta: {
        auth: true,
        keepAlive:false // 是否缓存
      }
    }
  ]
});

/**
 * 路由前置检查
 */
router.beforeEach((to, from, next) => {
    // 合法性校验
    if (to.meta.auth) {
        console.log('如果需要可自行配置');
        next();
    }
    next();
});
export default router;