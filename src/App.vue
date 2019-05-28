<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <echart msg="Welcome to Your Vue.js App"/>
    <table-element></table-element>
  </div>
</template>

<script>
import echart from './components/echart.vue'
import tableElement from './components/tableElement.vue'



export default {
  name: 'app',
  components: {
    echart,
    tableElement
  }
}
</script>

<style>      

</style>
