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
            console.log(item,'item')
        })
        
        // Vue.component('Header', Header)
    }
}

export default reaComp;