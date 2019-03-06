<template>
  <section class="home_screen_wrap">
    <!-- 公共头部 -->
    <Header :active="active"></Header>
    <!-- 第一屏内容 -->
    <section class="first_box_wrap" ref="firstBox">
      <!-- 内容 -->
      <h5>这里是基于vue-cli3.0封装的基础项目骨架</h5>
      <p>默认安装了很多实用插件,如：lodash、normalize.css</p>
      <p>项目骨架内使用vw、vh定义宽高、使用rem为基础单位</p>
      <p>使用normalize.css初始化了浏览器样式</p>
      <p>iview采用按需的方式</p>
      <p>regCopm为公共组件注册方法，直接使用即可</p>
      <p>使用fly代码了axios，当然，如果你想使用axios也可以</p>
      <p>
        api是一个简单的api管理，直接返回一个promise，页面内使用async、await,具体可以查看/example
      </p>
      <p>
        vue.config.js里面默认开启了gzip和其他的一些优化配置，详情可看注释自定义配置
      </p>
      <p>预留了一个global方法作为全局方法输出</p>
      <p>默认开启iview的loadingBar，如果需要自定义的loading请自行配置</p>
      <p>
        针对移动端也做了很多优化，当然，如果想要完全适配肯定是需要自己做个勤劳的码农的
      </p>
      <p>还有很多隐藏功能，可以自行研究</p>
      <p>基于该骨架开发项目已经有</p>
      <div class="link">
        <a href="http://develop.kingchannels.cn:50013">众知 | </a>
        <a href="http://develop.kingchannels.cn:50039"
          >版权知识加工标准系统 |
        </a>
        <a href="http://v3.lazy-studio.com">我的个人主页3.0</a>
      </div>
    </section>
    <!-- 公共底部 -->
    <Footer></Footer>
    <!-- 模态框 -->
    <Modal v-model="loading"></Modal>
  </section>
</template>
<script>
import { Modal } from "iview";
export default {
  components: { Modal },
  name: "home",
  data() {
    return {
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
.first_box_wrap {
  width: 90vw;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h5,
  p {
    font-size: 0.16rem;
  }
  h5 {
    font-size: 0.4rem;
    padding: 0;
    margin: 0;
    line-height: 160%;
  }
}
</style>
