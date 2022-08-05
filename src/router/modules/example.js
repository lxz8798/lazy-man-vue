const exampleComponent = name => () =>
  import(/* webpackChunkName: "example" */ `@/view/${name}/`);
export default [
  {
    path: "/example",
    name: "examplePage",
    component: exampleComponent("example"),
    meta: {
      auth: true,
      showHead: false,
      showFooter: false,
      activeIcon: "example"
    }
  }
];
