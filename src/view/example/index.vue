<template>
  <div class="example-wrap">
    <!-- common/public开头的组件会自动注册到全局 -->
    <public-title :title="msg"></public-title>
    <!-- fake列表 -->
    <div class="fakeList">
      <fake-list></fake-list>
    </div>
    <!-- echarts -->
    <div class="charts" ref="bar"></div>
    <!-- module dialogs -->
    <dialogs></dialogs>
    <!-- upload -->
    <div class="buttons">
      <Upload action="testUpload()">
        <Button icon="ios-cloud-upload-outline">Upload files</Button>
      </Upload>
      <Button icon="checkmark" @click.native="EXAMPLE_SET_DIALOG(true)"
        >点击显示弹窗</Button
      >
    </div>
  </div>
</template>

<style lang="scss">
div.example-wrap {
  width: $childBaseWidth;
  height: $childBaseHeight;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #cecece;
  margin: 0 auto;
  > .fakeList {
    width: inherit;
    height: 20%;
    padding: 15px;
    ul {
      display: inline-flex;
      align-items: center;
      li {
        flex: 1 1 20%;
        line-height: 150%;
        list-style-type: none;
        display: flex;
        flex-direction: row;
        padding-right: 15px;
        margin-bottom: 5px;
        span.l {
          width: 1rem;
          height: 1.3rem;
          img {
            width: inherit;
            height: inherit;
          }
        }
        span.r {
          display: flex;
          justify-content: center;
          align-items: center;
          padding-left: 15px;
          ul {
            li.detail-info {
              display: flex;
              flex-direction: column;
            }
          }
        }
      }
    }
  }
  > .charts {
    width: 200px;
    height: 200px;
  }
  > .buttons {
    display: flex;
    align-items: center;
  }
}
</style>

<script>
/* eslint-disable */
import dialogs from "@/components/dialogs";
import { Modal, Upload, Button } from "iview";
import fakeList from "@/components/list/fakeList"
import dialogManage from "@/components/dialogs/";
import exampleApi from "@/api/example";
import { mapState, mapMutations } from "vuex";
export default {
  name: "examplePage",
  components: { dialogs, Modal, Upload, Button, fakeList, dialogManage },
  data() {
    return {
      msg: "这里是部份骨架使用例子!",
    };
  },
  created() {},
  watch: {},
  /**
   * @Description: 监听动态路由变化
   * @Author: 李啸竹
   * @param {type} [object Object]
   * @Date: 2019-05-12 22:24:35
   */
  beforeRouteUpdata(to, from, next) {
    console.log(to, "to");
    console.log(from, "from");
    console.log(next, "next");
  },
  mounted() {
    this.$Loading.finish();
    this.initBar();
  },
  computed: {},
  methods: {
    ...mapMutations("dialogs", ["EXAMPLE_SET_DIALOG"]),
    initBar() {
      const $dom = this.$refs.bar;
      const myChart = this.$echarts.init($dom);
      let option = {
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            data: [120, 200, 150, 80, 70, 110, 130],
            type: "bar",
            showBackground: true,
            backgroundStyle: {
              color: "rgba(220, 220, 220, 0.8)"
            }
          }
        ]
      };
      if (option && typeof option === "object") {
        myChart.setOption(option, true);
      }
    }
  }
};
</script>