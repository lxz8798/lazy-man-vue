<!--
 * @Description: 
 * @Author: 李啸竹
 * @Date: 2018-10-24 23:29:57
 -->
<template>
  <!-- footer 公共组件 -->
  <footer class="Footer_wrap"></footer>
</template>

<style lang="scss">
@import "../../assets/base/base";
footer.Footer_wrap {
  width: $childBaseWidth;
  margin-top: $distanceHeader + $spancin;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: $spancin;
}
</style>

<script>
export default {
  name: "Footer",
  props: ["active"],
  data() {
    return {};
  }
};
</script>
