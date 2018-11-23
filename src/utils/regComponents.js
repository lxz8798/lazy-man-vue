/* eslint-disable */
/*
 * @Description: 
 * @Author: 李啸竹
 * @Date: 2018-11-22 09:16:41
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