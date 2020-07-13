<template>
  <div class="example-wrap">
    <!-- common/public开头的组件会自动注册到全局 -->
    <public-title :title="msg"></public-title>
    <!-- fake列表 -->
    <ul class="example-ul-wrap">
      <li v-for="(item, index) in dataList" :key="index">
        <span class="l">
          <img :src="item.coverUrl" alt />
        </span>
        <span class="r">
          <ul>
            <li>
              <h3>{{ item.title }}</h3>
            </li>
            <li class="detail-info">
              <span>{{ "作者：" + item.name }}</span>
              <span>{{ "生日：" + item.birthday }}</span>
              <span>{{ "手机：" + item.phone }}</span>
              <span>{{ "地址：" + item.address }}</span>
            </li>
            <li></li>
          </ul>
        </span>
      </li>
    </ul>
    <!-- echarts -->
    <div class="charts" ref="bar"></div>
    <!-- module dialogs -->
    <dialogs></dialogs>
    <!-- upload -->
    <div class="buttons">
      <Upload action="testUpload()">
        <Button icon="ios-cloud-upload-outline">Upload files</Button>
      </Upload>
      <Button icon="checkmark" @click.native="EXAMPLE_SET_DIALOG(true)">点击显示弹窗</Button>
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
  > .example-ul-wrap {
    width: inherit;
    height: 20%;
    display: inline-flex;
    align-items: center;
    padding: 15px;
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
import dialogManage from "@/components/dialogs/";
import exampleApi from "@/api/example";
import { mapState, mapMutations } from "vuex";
export default {
  name: "examplePage",
  components: { dialogs, Modal, Upload, Button, dialogManage },
  data() {
    return {
      msg: "这里是部份骨架使用例子!",
      dataList: {}
    };
  },
  created() {
    // console.log(this.$route.params.id,'params')
    this.getFakeUserList();
  },
  watch: {
    $route(to, from) {
      console.log(to, "route to");
      console.log(from, "route from");
    }
  },
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
    },
    /**
     * 来自mockjs的模拟数据
     * @author 李啸竹
     */
    async getFakeUserList() {
      // 使用jquery方式获得mockjs数据
      const params = {};
      const res = await this.$http.get("http://localhost:8080/fake/v1/users");
      this.dataList = res;
    }
  }
};
</script>