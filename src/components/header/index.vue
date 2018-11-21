<template>
<!-- header 公共组件 -->
<div class="Header-wrap">
{{title}}
</div>
</template>

<style lang="scss">
</style>

<script>
export default {
  name: "header",
  data() {
    return {
      title: "这里是公共用的头部!"
    };
  }
};
</script>