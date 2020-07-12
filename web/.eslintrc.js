module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "@vue/prettier"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    // 生成器函数*的前后空格
    "generator-star-spacing":"off",
    // 开发模式可以使用debugger，生产模式使用debugger报错
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    // 忽略没有使用的变量 
    "no-unused-vars":"off",
    // 忽略单引号和双引号
    "quotes":"off",
    // 对象或数组字面量项尾不能有逗号
    "comma-dangle":[2, "never"]
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};
