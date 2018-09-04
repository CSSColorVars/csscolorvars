<template>
  <div id="app">
    <HelloWorld></HelloWorld>
    <h1>CpInput</h1>
    <cp-input></cp-input>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import CpInput from './components/CpInput.vue'
export default {
  name: 'app',
  components: {
    HelloWorld,
    CpInput
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
