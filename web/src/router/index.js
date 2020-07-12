/* eslint-disable */
/**
 * 路由，引入路由懒加载，如果有需要的话可以解开注释
 * @author 李啸竹
 */
import Vue from "vue";
import VueRouter from "vue-router";
import { LoadingBar } from "iview";
import home from "./modules/home";
import example from "./modules/example";

Vue.use(VueRouter);
Vue.use(LoadingBar);

Vue.prototype.$Loading = LoadingBar;

const router = new VueRouter({
  // mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      redirect: "/home"
    },
    ...home,
    ...example
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