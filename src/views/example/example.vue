<template>
<div class="example-wrap">
  <h1 @click="visible = true">{{msg}}</h1>
  <ul class="example-ul-wrap">
    <li v-for="(item,index) in dataList" :key="index">
      <span class="l">
        <img :src="item.coverUrl" alt="">
      </span>
      <span class="r">
        <ul>
          <li>
            <h3>{{item.title}}</h3>
          </li>
          <li class="detail-info">
            <span>{{'作者：'+item.name}}</span>
            <span>{{'生日：'+item.birthday}}</span>
            <span>{{'城市：'+item.city}}</span>
          </li>
          <li></li>
        </ul>
      </span>
    </li>
  </ul>
  <Modal v-model="visible" title="Welcome">Welcome to iView</Modal>
</div>
</template>

<style lang="scss">
@import "compass/css3";
@import "./../../assets/base/base.scss";
@import "./../../assets/base/fn.scss";

div.example-wrap {
  width: $boxWidth;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #666;
  margin: 0 auto;
  transform: translateY(20%);
  @include border-radius(5px);
  ul.example-ul-wrap {
    width: inherit;
    display: flex;
    flex-direction: column;
    padding: 15px;
    li {
      width: 470px;
      line-height: 150%;
      list-style-type: none;
      display: flex;
      flex-direction: row;
      padding-right: 15px;
      margin-bottom: 5px;
      span {
        @include inline-block;
      }
      span.l {
        width: 100px;
        height: 130px;
        @include opacity(0.8); /*对ie兼容的透明度*/
        img {
          width: inherit;
          height: inherit;
        }
      }
      span.r {
        @include inline-block;
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

// 需要模拟数据的地方需要引入mock.js
import { Modal } from "iview";
export default {
  name: "examplePage",
  components: { Modal },
  data() {
    return {
      msg: "点击打开iview弹窗!",
      visible: false,
      dataList: {}
    };
  },
  created() {
    // this.getTestData();
    this.getMockData();
    this.testPromiseAll();
  },
  methods: {
    show() {
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
    async getMockData() {
      let params, res;
      // 真实请求
      // res = await this.$http.get('http://1.json/list');

      // 使用jquery方式获得mockjs数据
      res = await $.ajax({ url: "http://1.json/list", dataType: "json" });

      this.dataList = res.data;
      // console.log(this.dataList);
    },
    testPromiseAll() {
      let p1 = new Promise((resolve, reject) => {
        resolve("成功了");
      });

      let p2 = new Promise((resolve, reject) => {
        resolve("success");
      });

      // let p3 = Promise.reject("失败");

      this.$All([p1,p2,p3]);
    }
  }
};
</script>