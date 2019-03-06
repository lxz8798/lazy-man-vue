/* eslint-disable */
/**
 * 路由，引入路由懒加载，如果有需要的话可以解开注释
 * @author 李啸竹
 */
import Vue from "vue";
import VueRouter from "vue-router";
import { LoadingBar } from "iview";

Vue.use(VueRouter);
Vue.use(LoadingBar);

Vue.prototype.$Loading = LoadingBar;

const homeComponent = name => () => import(/* webpackChunkName: "home" */ `./view/${name}/`);
const getComponent = name => () => import(/* webpackChunkName: "example" */ `./view/${name}/`);

const router = new VueRouter({
  // mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: homeComponent("home"),
      meta: {
        auth: true,
        keepAlive: false // 是否缓存
      }
    },
    {
      path: "/example",
      name: 'example',
      component: getComponent("example"),
      meta: {
        auth: true,
        keepAlive: false // 是否缓存
      }
    },
  ]
});

/**
 * 路由前置检查
 */
router.beforeEach((to, from, next) => {
  // 合法性校验
  if (to.meta.auth) {
    LoadingBar.start();
    next();
  };
});
// router.afterEach(route => {
//   LoadingBar.finish();
// });
export default router;