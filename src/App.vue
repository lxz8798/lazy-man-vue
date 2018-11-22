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
@import "./assets/base/base";
@media screen and (min-width: 560px){
  html {
    font-size: $FontSize560;
  }
}
@media screen and (max-width: 750px) {
  html {
    font-size: $FontSize750;
  }
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif, "MSYH";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
