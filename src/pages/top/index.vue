<template>
<view class="top-wrap">
  <scroll-view id="tab-bar" class="swiper-tab" scroll-x:scroll-left="scrollLeft">
    <view v-for="(tab,index) in tabBars" :key="tab.id" :class="['swiper-tab-list',tabIndex==index ? 'active' : '']"></view>
  </scroll-view>
</view>
</template>

<style lang="scss">
.top-wrap {
  .swiper-tab {

  }
}
</style>

<script>
export default {
  data() {
    return {
      tabIndex: 0,
      tabBars: [{
          name: '关注',
          id: 'guanzhu'
      }, {
          name: '推荐',
          id: 'tuijian'
      }, {
          name: '体育',
          id: 'tiyu'
      }, {
          name: '热点',
          id: 'redian'
      }, {
          name: '财经',
          id: 'caijing'
      }, {
          name: '娱乐',
          id: 'yule'
      }, {
          name: '军事',
          id: 'junshi'
      }, {
          name: '历史',
          id: 'lishi'
      }, {
          name: '本地',
          id: 'bendi'
      }]
    };
  },
  methods: {
    
  }
};
</script>
