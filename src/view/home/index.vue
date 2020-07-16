<template>
  <section :class="name">
    <!-- 公共头部 -->
    <Header :active="active" v-if="$route.meta.showHead"></Header>
    <!-- 第一屏内容 -->
    <section class="first_box_wrap" ref="firstBox">
      <!-- 内容 -->
      <h5>为了更高效更方便更快速的开发项目而配置的基础的空白项目骨架，内置了一些常用插件，优化了一些基础配置。{{this.$config.baseUrl}}</h5>
      <p>
        1、使用normalize.css初始化了浏览器样式，默认集成lodash、mockjs、echarts等等
      </p>
      <p>
        2、项目骨架内使用vw、vh定义宽高、使用rem/px为基础单位，使用rem可以适配屏幕，px则不会。
      </p>
      <p>
        3、内嵌iView采用按需的方式
      </p>
      <p>
        4、components下的common，以public开头的组件会自动注册
      </p>
      <p>
        5、api是一个简单的api管理，直接返回一个promise，页面内使用async、await,具体可以查看/example
      </p>
      <p>
        6、vue.config.js里面默认开启了gzip和其他的一些优化配置，详情可看注释自定义配置
      </p>
      <p>
        7、内置了一些工具方法，可以直接this.fn使用
      </p>
      <p>
        8、默认开启iview的loadingBar，如果需要自定义的loading请自行配置
      </p>
      <p>
        还有更多操作请自行发掘
      </p>
      <p>
        骨架会不定期更新更多优化内容
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
import { Modal } from "iview";
export default {
  components: { Modal },
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
    width: 75%;
    height: 50%;
    h5,
    p {
      font-size: 12px;
    }
    h5 {
      font-size: 14px;
      padding: 0;
      margin: 0;
      line-height: 160%;
    }
  }
}
</style>
