<template>
<div class="test-wrap">

</div>
</template>

<style lang="scss">
div.test-wrap {

}
</style>

<script>
export default {
    name:'testPage!',
    data () {
        return {
            testData:{}
        }
    },
    created () {
        this.getTestData();
    },
    methods: {
        getTestData () {
            let params,
                res
            
            params = {
                dtype:'json',
                key:'719af00cc3a686d1f23d0e91e698da29'
            }

            res = this.$fly.get('http://apis.juhe.cn/goodbook/catalog',params)

            console.log(res,'res')
        }
    }
}
</script>