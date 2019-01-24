<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
export default {
  methods:{
    aa(){
      this.$router.push('/home')
    }
  }
}
</script>
<style lang="scss">
html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  -webkit-overflow-scrolling: touch;
  box-sizing: border-box;
}
#app {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'PingFangSC-Medium';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
a {
  text-decoration: none !important;
}
p,
h1,
h2,
h3 {
  margin-block-start: 0;
  margin-block-end: 0;
}
.vux-header {
  // position: fixed !important;
  // left: 0;
  // top: 0;
  // margin-bottom: 50px;
  // width: 100%;
  // overflow: hidden;
}
</style>
