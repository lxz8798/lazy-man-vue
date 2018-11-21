<template>
  <div id="app">
    <!-- 避免重复渲染DOM -->
    <keep-alive>
      <Header></Header>
    </keep-alive>
    <keep-alive>
      <router-view/>
    </keep-alive>
    <keep-alive>
      <Footer></Footer>
    </keep-alive>
  </div>
</template>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif, "MSYH";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
