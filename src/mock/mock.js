/**
 * 引入mockjs，好用的模拟数据，比如占位图，随机颜色，数组等等，使用方法：http://mockjs.com/0.1/#%E7%94%A8%E6%B3%95
 * 使用例子请看/example
 * 更多案例：https://github.com/ToNiQian/mockjs
 * @author 李啸竹
 */
/* eslint-disable */ 
import Mock from 'mockjs'
/* eslint-disable */ 
const obj = {'aa':'11', 'bb':'22', 'cc':'33', 'dd':'44'};
/* eslint-disable */ 
const Random = Mock.Random;
// 配置 Mock 路径
Mock.setup({
    timeout: 800, // 设置延迟响应，模拟向后端请求数据
});
/* eslint-disable */ 
Mock.mock('http://1.json/list',/post|get/i, {
    "data|1-3": [{   // 随机生成1到10个数组元素
        'name': Random.cname(), // Random.cname() 随机生成一个常见的中文姓名
        'id|+1': 88,    // 属性值自动加 1，初始值为88
        'title': Random.csentence(40, 60), //  Random.csentence( min, max )
        'coverUrl': Random.dataImage('100x130', '100x130'), // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
        'age|18-28': 0,   // 18至28以内随机整数, 0只是用来确定类型
        'birthday': '@date("yyyy-MM-dd")',  // 日期
        'city': '@city(true)',   // 中国城市
        'color': '@color',  // 16进制颜色
        'isMale|1': true,  // 布尔值
        'isFat|1-2': true,  // true的概率是1/3
        'fromObj|2': obj,  // 从obj对象中随机获取2个属性
        'fromObj2|1-3': obj,  // 从obj对象中随机获取1至3个属性
        'brother|1': ['jack', 'jim'], // 随机选取 1 个元素
        'sister|+1': ['jack', 'jim', 'lily'], // array中顺序选取元素作为结果
        'friends|2': ['jack', 'jim'] // 重复2次属性值生成一个新数组
    }]
});
