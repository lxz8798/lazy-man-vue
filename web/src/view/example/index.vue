<template>
  <div class="example-wrap">
    <h1 @click="visible = true">{{ msg }}</h1>
    <ul class="example-ul-wrap">
      <li v-for="(item, index) in dataList" :key="index">
        <span class="l">
          <img :src="item.coverUrl" alt="" />
        </span>
        <span class="r">
          <ul>
            <li>
              <h3>{{ item.title }}</h3>
            </li>
            <li class="detail-info">
              <span>{{ "作者：" + item.name }}</span>
              <span>{{ "生日：" + item.birthday }}</span>
              <span>{{ "城市：" + item.city }}</span>
              <span>{{ "count:" + count }}</span>
            </li>
            <li></li>
          </ul>
        </span>
      </li>
    </ul>
    <Modal v-model="visible" title="Welcome">Welcome to iView</Modal>
    <Upload action="testUpload()">
      <Button icon="ios-cloud-upload-outline">Upload files</Button>
    </Upload>
  </div>
</template>

<style lang="scss">
div.example-wrap {
  width: $childBaseWidth;
  height: $childBaseHeight - 20vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #cecece;
  margin: 0 auto;
  transform: translateY(20%);
  ul.example-ul-wrap {
    width: inherit;
    display: flex;
    flex-direction: column;
    padding: 15px;
    li {
      width: $childBaseWidth;
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
</style>

<script>
/* eslint-disable */
import { Modal, Upload, Button } from "iview";
import dialogManage from "@/components/dialogs/"
import exampleApi from "@/api/example";
import { mapState, mapActions, mapGetters } from "vuex";
export default {
  name: "examplePage",
  components: { Modal, Upload, Button, dialogManage },
  data() {
    return {
      msg: "点击我打开iview弹窗!",
      visible: false,
      dataList: {}
    };
  },
  created() {
    // console.log(this.$route.params.id,'params')
    this.getMockData();
  },
  watch: {
    '$route'(to, from) {
      console.log(to,'route to');
      console.log(from,'route from');
    }
  },
  /**
   * @Description: 监听动态路由变化
   * @Author: 李啸竹
   * @param {type} [object Object]
   * @Date: 2019-05-12 22:24:35
   */
  beforeRouteUpdata(to, from, next){
    console.log(to,'to');
    console.log(from,'from');
    console.log(next,'next');
  },
  mounted() {
    this.$Loading.finish();
  },
  computed: {
    ...mapGetters(["count"]),
    ...mapState({
      count: state => state.home.count
    })
  },
  methods: {
    ...mapActions(["increment", "decrement", "incrementAsync"]),
    /**
     * 来自mockjs的模拟数据
     * @author 李啸竹
     */
    async getMockData() {
      // 使用jquery方式获得mockjs数据
      const params = {}
      const res = await this.$http.get('/fake/v1/users');
      console.log(res, 'res')
    }
  }
};
</script>