<template>
<div class="example-wrap">
  {{msg}}
</div>
</template>

<style lang="scss">
div.example-wrap {
}
</style>

<script>
export default {
  name: "examplePage",
  data() {
    return {
      msg:'这里是例子的页面!'
    };
  },
  created() {
    this.getTestData();
    this.getMockData();
  },
  methods: {
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
    async getMockData () {
      let params, res;
      params = {}
      // res = await this.$http.get(process.env.VUE_APP_MOCKURL + '/test/list','get')
      console.log(process.env.VUE_APP_MOCKURL,'模拟的mock数据')
    }
  }
};
</script>