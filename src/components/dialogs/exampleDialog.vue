<template>
  <Modal v-model="exampleDialogObjFlag" title="Welcome" :transfer="false" @keyup.esc="EXAMPLE_SET_DIALOG(false)">
    这里是MODAL
  </Modal>
</template>
<script>
const name = 'exampleDialog';
import { mapState, mapMutations } from "vuex";
import { Modal } from "iview";
export default {
  props: {},
  components: {
    Modal
  },
  data() {
    return {
      name: name
    };
  },
  computed: {
    ...mapState({
      exampleDialogObj: state => state.dialogs.exampleDialogObj
    }),
    exampleDialogObjFlag: {
      get: function() {
        return this.exampleDialogObj.flag
      },
      set: function(newVal) {
        this.EXAMPLE_SET_DIALOG(newVal);
      }
    }
  },
  created() {},
  mounted() {},
  watch: {
    exampleDialogObjFlag(newVal, oldVal) {
    }
  },
  methods: {
    ...mapMutations('dialogs', ["EXAMPLE_SET_DIALOG"])
  }
};
</script>