/* eslint-disable */
/**
 * 全局组件集中管理
 * 李啸竹
 */
import Header from "../components/header";
// import Footer from "../components/footer";

// const Header = require("../components/header");

const reaComp = {
    install: function (Vue) {
        Vue.component('Header', Header)
    }
}

export default reaComp;