<template>
  <img alt="App logo" src="./assets/logo.png">
  <HelloWorld msg="Simple open weather API call"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
body {
  background: #212121;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #f0f2f2;
  margin-top: 60px;
}
</style>
