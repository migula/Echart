<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <echart msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import echart from './components/echart.vue'

export default {
  name: 'app',
  components: {
    echart
  }
}
</script>

<style>      

</style>
