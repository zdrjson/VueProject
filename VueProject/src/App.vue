<template>
  <div id="app">
    <img src="./assets/logo.png">
    <firstcomponent></firstcomponent>
  </div>
</template>

<script>
import firstcomponent from './components/firstcomponent.vue'

export default {
  data () {
    return {
      msg: 'Hello Vue!'
    }
  },
  components: { firstcomponent }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
