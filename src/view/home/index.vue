<template>
  <section :class="name">
    <!-- 公共头部 -->
    <Header :active="active" v-if="$route.meta.showHead"></Header>
    <!-- 第一屏内容 -->
    <section class="first_box_wrap" ref="firstBox">
      <!-- 内容 -->
      <h5>
        为了更高效更方便更快速的开发项目而配置的基础的空白项目骨架，内置了一些常用插件，优化了一些基础配置。
      </h5>
      <p>
        1、使用normalize.css初始化了浏览器样式，默认集成lodash、mockjs、echarts等等。
      </p>
      <p>
        2、项目骨架内使用vw、vh定义宽高、自动转换px为rem适应屏幕，如果有一些没有被转换也可以通过内置方法px2rem，但我更建议使用vscode插件pxtorem可以拉伸屏幕大小看变化。
      </p>
      <p>
        3、内嵌iView采用按需的方式。
      </p>
      <p>
        4、components下的common，以public开头的组件会自动注册。
      </p>
      <p>
        5、api是一个简单的api管理，直接返回一个promise，页面内使用async、await,具体可以查看/example。
      </p>
      <p>
        6、vue.config.js里面默认开启了gzip和其他的一些优化配置，前端开启gzip的同时后端也得支持，详情可看注释自定义配置。
      </p>
      <p>
        7、内置了一些工具方法，可以直接this.xxx使用。
      </p>
      <p>
        8、默认开启iview的loadingBar，如果需要自定义的loading请自行配置。
      </p>
      <p>
        9、全局的模态框管理。
      </p>
      <p>
        10、config.externals是忽略打包，配合cdn里面使用。
      </p>
      <p>
        11、使用cdn的方式分离vendors依赖，分离插件，如果需要使用import
        可以在vue.config.js里面把cdn注释，同时解开main、http、router、vuex/index，store/index里面的相关import。
      </p>
      <p>
        12、更新了压缩图片和打包后删除console。
      </p>
      <p>
        13、新增多环境支持，和打包配置，可以使用build:pro和build:demo打包不同环境，可以使用全局config来配置变量或者使用环境变量。
      </p>
      <p>
        14、全局样式中增加了通用字体和流体布局样式，可以使用@extend使用，辅助前端小伙伴快速完成样式开发。
      </p>
      <p>
        15、增加了全局config，具体可看config/index.js。
      </p>
      <p>
        16、example更新部份使用例子。
      </p>
      <p>
        ......
      </p>
    </section>
    <!-- 公共底部 -->
    <Footer v-if="$route.meta.showFooter"></Footer>
  </section>
</template>
<script>
const name = "home_wrap";
export default {
  name: "home",
  data() {
    return {
      name: name,
      active: 0,
      loading: false
    };
  },
  mounted() {
    this.$Loading.finish();
  },
  methods: {}
};
</script>

<style lang="scss">
.home_wrap {
  width: $childBaseWidth; // 变量的设置可以参考base.scss
  height: $childBaseHeight;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .first_box_wrap {
    padding: 10%;
    width: inherit;
    height: inherit;
    h5,
    p {
      font-size: .375rem;
    }
    h5 {
      font-size: .4375rem;
      padding: 0;
      margin: 0;
      line-height: 160%;
    }
  }
}
</style>
