<template>
<!-- footer 公共组件 -->
<div class="Footer-wrap">
{{title}}
</div>
</template>

<style lang="scss">
@import "../../assets/base/base";
$FooterHeight: 1.5rem;
div.Footer-wrap {
  position: fixed;
  bottom: 0;
  left: 0;

  width: $childBaseWidth;
  height: $FooterHeight;

  display: flex;
  justify-content: center;
  align-items: center;

  border-top: 1px solid #cecece;
}
</style>

<script>
export default {
  name: "Footer",
  data() {
    return {
      title: "这里是公共用的底部!"
    };
  }
};
</script>
