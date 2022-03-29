<template>
  <div id="app">
    <CatFactRandomizer />
  </div>
</template>

<script>
import CatFactRandomizer from '@/components/CatFactRandomizer.vue';

export default {
  components: {
    CatFactRandomizer
  }
}
</script>

<style lang="scss">
html {
  font-size: 62.5%;
}

body {
  font-size: 1.6rem;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
