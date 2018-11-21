/* eslint-disable */
/**
 * 路由，引入路由懒加载，如果有需要的话可以解开注释
 * 李啸竹
 */
import Vue from "vue";
import VueRouter from "vue-router";

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
      component:getComponent("example"),
      meta: {
        auth: true,
        keepAlive:false // 是否缓存
      }
    },
    {
      path:"/web",
      beforeEnter(to, from, next) {
        window.location = "/web.html"
      }
    },
    {
      path:"/home",
      beforeEnter(to, from, next) {
        window.location = "/home.html"
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
        next();
    }
    next();
});
export default router;