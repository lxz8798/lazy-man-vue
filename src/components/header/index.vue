<template>
<!-- header 公共组件 -->
<div class="Header-wrap">
{{title}}
</div>
</template>

<style lang="scss">
@import "../../assets/base/base";
$HeaderHeight: .8rem;
div.Header-wrap {
  width: $childBaseWidth;
  height: $HeaderHeight;

  display: flex;
  justify-content: center;
  align-items: center;

  border-bottom: 1px solid #cecece;
}
</style>

<script>
export default {
  name: "Header",
  data() {
    return {
      title: "这里是公共用的头部!"
    };
  }
};
</script>
