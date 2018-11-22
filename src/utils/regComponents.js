/* eslint-disable */
/**
 * 全局组件集中管理
 * 李啸竹
 */
import Header from "../components/header";
import Footer from "../components/footer";

const compArray = [Header,Footer];
const reaComp = {
    install: function (Vue) {
        compArray.forEach(item => {
            Vue.component(item.name, item)
        })
    }
}

export default reaComp;