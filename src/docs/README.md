### 使用手记
1. 根目标.env开头的文件配置环境变量，如果要在项目中使用需要使用VUE_APP开头命名。
2. STORE拆分得太过细节，如果觉得麻烦可以把外层state、getters、mutations、actions合并。
3. mutations-types用作管理，觉得没必要可以直接把变量写在store/index中。
4. uitls/index.js 下预留了一些常用方法，全局方法可以写在此处。
5. regComponents.js是手动注册组件，common/pulic开头的会自动注册。
6. px会自动转换成rem，在移动端是37.5,设计图采用使用750px设计，图片都以2x大小为标准，实际取像素值请调整到375px。