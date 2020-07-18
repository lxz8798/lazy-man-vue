<template>
	<ul>
		<li v-for="(item, index) in dataList" :key="index">
			<span class="l">
				<img :src="item.coverUrl" alt />
			</span>
			<span class="r">
				<ul>
					<li>
						<h3>{{ item.title }}</h3>
					</li>
					<li class="detail-info">
						<span>{{ "作者：" + item.name }}</span>
						<span>{{ "生日：" + item.birthday }}</span>
						<span>{{ "手机：" + item.phone }}</span>
						<span>{{ "地址：" + item.address }}</span>
					</li>
					<li></li>
				</ul>
			</span>
		</li>
	</ul>
</template>
<script>
const name = 'fakeList';
export default {
  props: {},
    data() {
      return {
        name: name,
        dataList: []
      };
    },
    computed: {},
    created() {
			this.getFakeUserList();
    },
    mounted() {},
    watch: {},
    methods: {
			/**
			 * 来自mockjs的模拟数据
			 * @author 李啸竹
			*/
			async getFakeUserList() {
			// 使用jquery方式获得mockjs数据
			const params = {};
			const res = await this.$http.get("http://localhost:8080/fake/v1/users");
			this.dataList = res;
			}
	}
};
</script>
<style lang="scss">
div.fakeList {}
</style>