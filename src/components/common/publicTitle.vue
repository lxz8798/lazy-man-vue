<!--
 * @Description: 公用TITLE组件。
 * @Author: 李啸竹
 * @Date: 2019-12-06 01:24:33
 -->
<template>
  <div :class="defaultHeight" :style="defStyles">
    <div :class="[`${titleCls}_layout`]">
      <div :class="[`${titleCls}_l`]">
        <img v-if="icon" :src="icon" alt="" />
        <slot name="icon"></slot>
      </div>
      <div :class="[`${titleCls}_c`]" :style="defSiZe">
        <h4>{{ title }}</h4>
        <slot name="title"></slot>
      </div>
    </div>
    <p :class="[`${titleCls}_r`]" v-if="!!more" @click="$emit('clickFn')">
      <slot name="right">{{ more }}</slot>
    </p>
  </div>
</template>
<script>
const titleCls = "public_title";
export default {
  name: "publicTitle",
  props: {
    icon: {
      type: String // 预留使用字体图标时可以使用
    },
    title: {
      type: [Number, String],
      default: "默认标题"
    },
    height: {
      type: [Number, String],
      default: 40
    },
    size: {
      type: [Number, String],
      default: 16
    },
    more: {
      type: [Number, String]
    }
  },
  data() {
    return {
      titleCls: titleCls
    };
  },
  computed: {
    getHtmlSize() {
      let $dom = document.querySelector("html");
      let size = parseInt($dom.style.fontSize);
      return size;
    },
    defaultHeight() {
      return [
        `${titleCls}`,
        {
          [`${titleCls}_h`]: !!this.height
        }
      ];
    },
    defaultSize() {
      return {
        [`${titleCls}_size`]: !!this.size
      };
    },
    defStyles() {
      let style = {};
      if (this.height) {
        const height = parseInt(this.height);
        style.height = `${height / this.getHtmlSize}rem`;
      }
      return style;
    },
    defSiZe() {
      let style = {};
      if (this.size) {
        const size = parseInt(this.size),
          height = parseInt(this.height);
        style.fontSize = `${size / this.getHtmlSize}rem`;
        style.height = `${height / this.getHtmlSize}rem`;
        style.lineHeight = `${height / this.getHtmlSize}rem`;
      }
      return style;
    }
  },
  created() {},
  mounted() {},
  watch: {},
  methods: {},
  components: {}
};
</script>
<style lang="scss">
div.public_title {
  display: flex;
  align-items: center;
  justify-content: space-between;

  &_layout {
    display: flex;
  }

  & p {
    font-size: px2rem(12px);
    color: hsla(0, 0%, 40%, 1);
  }

  &_l {
    width: px2rem(28px);
    display: flex;
    justify-content: center;
    align-items: center;
    height: inherit;
    line-height: inherit;
  }

  &_c {
    font-size: px2rem(17px);
    margin-left: px2rem(8px);
    max-width: px2rem(145px);
    color: hsla(0, 0%, 14%, 1);
    h4 {
      margin: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }

  &_r {
  }
}
</style>
