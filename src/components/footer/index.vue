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
  data() {
    return {
      des: `
				<h3>ABOUT ME</h3>
        <p>实际上08年就开始工作了，但是从事WEB/H5前端开发（不包含UI/UE）只有3年，工作经验的累积让我对很多事情慢慢看开了，对工作以稳重为主，对人和事，公私分明。</p>
				<p>我的自学能力非常强，大多数技术都自主学习得来，所以动手能力强。</p>
				<p>年纪小的时候不爱学习，现在每天都在学习更新自己的知识库，却感觉时间远远不够。</p>
				<p>虽然很早就开始工作了，但也不是一直在IT行业，早期的时候做的是网络工程、计算机维护之类的工作，后来机缘巧合在朋友的带领下进入IT，主要是产品设计，网页设计（UI/UE），后来慢慢发展成WEB/H5前端开发。</p>
				<p>从前程无忧出来还自己创过业，我对未来的发展有明确方向，人生高峰低谷都经历过，现在只希望能稳定的职场上发展。</p>
			`,
      copydes: `<p>&copy 2017-2018 lazy-studio.com</p>`,
      ts: [
        { text: "VUE/VUE-CLI" },
        { text: "AXIOS/FLY" },
        { text: "JAVASCRIPT" },
        { text: "HTML5/CSS3/SCSS" },
        { text: "WEBPACK" },
        { text: "NODEJS" },
        { text: "KOA2/EGGJS" },
        { text: "DESIGN/PS/XD/AE/AI" }
      ],
      temp: [
        { text: "JAVASCRIPT EXAMPLE" },
        { text: "CSS/CSS3 EXAMPLE" },
        { text: "DESIGN/PS/XD... EXAMPLE" },
        { text: "RESTFUL API EXAMPLE" },
        { text: "MARKDOWN EXAMPLE" }
      ],
      ls: [
        { text: "DRIBBBLE.COM" },
        { text: "ARTSTATION.COM" },
        { text: "WIX.COM" },
        { text: "WWW.58PIC.COM" },
        { text: "UI.CN" }
      ],
      ct: [
        { text: "GITHUB.COM" },
        { text: "JSBIN.COM" },
        { text: "ICONFONT.CN" },
        { text: "NOTE.YOUDAO.COM" },
        { text: "COLOR.ADOBE.COM" }
      ]
    };
  }
};
</script>
