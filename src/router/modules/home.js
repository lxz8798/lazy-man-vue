/*
 * @Description: HOME页面模块化
 * @Author: 李啸竹
 */
const homeComponent = name => () =>
  import(/* webpackChunkName: "home" */ `@/view/${name}/`);
export default [
  {
    path: "/home",
    name: "homePage",
    component: homeComponent("home"),
    meta: {
      auth: true,
      showHead: true,
      showFooter: true,
      activeIcon: "home"
    }
  }
];
