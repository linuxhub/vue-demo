<template>
  <div id="app">
    <img src="./assets/zeping.jpg">
    <!-- 导航 -->
    <div>
      <router-link to="/">Hello</router-link>
      <router-link to="/Linuxhub">LinuxHub</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>