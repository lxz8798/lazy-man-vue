<template>
<div class="example-wrap">
  <h1 @click="visible = true">{{msg}}</h1>
  <ul class="example-ul-wrap">
    <li v-for="(item,index) in dataList" :key="index">
      <span class="cover-wrap"></span>
      <span class="detail-wrap"></span>
    </li>
  </ul>
  <Modal v-model="visible" title="Welcome">Welcome to iView</Modal>
</div>
</template>

<style lang="scss">
@import 'compass/css3';
div.example-wrap {
  width:600px;
  height:120px;
  display: flex;
  flex-direction: column;
  border:1px solid #666;
  @include border-radius(5px);
  ul.example-ul-wrap {
    width:inherit;
    height:inherit;
    display:flex;
    justify-content: center;
    align-items:center;
    padding:0;
    li {
      width:100px;
      list-style-type: none;
      display:flex;
      flex-direction: row;
      span {
        @include inline-block;
      }
    }
  }
}
</style>

<script>
/* eslint-disable */ 
// 需要模拟数据的地方需要引入mock.js
import '@/mock/mock.js'
import { Modal } from 'iview'
export default {
  name: "examplePage",
  components:{Modal},
  data() {
    return {
      msg:'点击打开iview弹窗!',
      visible: false,
      dataList:{}
    };
  },
  created() {
    // this.getTestData();
    this.getMockData();
  },
  methods: {
    show () {
        this.visible = true;
    },
    /**
     * 来自聚合数据的真实请求
     */
    async getTestData() {
      let params, res;

      params = {
        key: "719af00cc3a686d1f23d0e91e698da29",
        dtype: "json"
      };

      res = await this.$http.get("/goodbook/catalog", params);

      console.log(res, "返回的结果");
    },
    /**
     * 来自mockjs的模拟数据
     */
    async getMockData () {
      let params, res;
      params = {};
      res = await this.$http.get(process.env.VUE_APP_MOCKURL + '/test/list');
      this.dataList = JSON.parse(res);
    }
  }
};
</script>