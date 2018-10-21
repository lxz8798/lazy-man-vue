<template>
<div class="test-wrap">

</div>
</template>

<style lang="scss">
div.test-wrap {
}
</style>

<script>
export default {
  name: "testPage",
  data() {
    return {};
  },
  created() {
    this.getTestData();
  },
  methods: {
    async getTestData() {
      let params, res;

      params = {
        key: "719af00cc3a686d1f23d0e91e698da29",
        dtype: "json"
      };

      res = await this.$http.get("/goodbook/catalog", params);

      console.log(res, "res");
    }
  }
};
</script>