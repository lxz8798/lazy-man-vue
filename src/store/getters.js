// 因为数据从 user.js 中获取，所以需要引入该文件
import aModules from './modules/aModules'

const getters = {
    isEvenOrOdd(state){
        // 注意数据是从 aModules.js 中获取的，所以写成 aModules.state.count
        return aModules.state.count % 2 == 0 ? "偶数" : "奇数"
    }
}
// 并导出
export default getters;