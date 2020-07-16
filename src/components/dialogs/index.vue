<template>
  <div :class="name">
    <example-dialog v-if="$route.name == 'examplePage' && exampleDialogObj.flag"></example-dialog>
  </div>
</template>
<script>
const name = 'dialog-manege';
import exampleDialog from "./exampleDialog";
import { mapState, mapMutations } from "vuex";
export default {
  props: {},
  components: {
    exampleDialog
  },
  data() {
    return {
      name: name
    };
  },
  computed: {
    ...mapState({
      exampleDialogObj: state => state.dialogs.exampleDialogObj
    })
  },
  created() {},
  mounted() {},
  watch: {},
  methods: {},
};
</script>
<style lang="scss">
div.dialog-manege {
  width: $childBaseWidth; // 变量的设置可以参考base.scss
  height: $childBaseHeight;
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
}
</style>