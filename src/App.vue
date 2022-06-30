<template>
  <div id="app">
    <TheHeader/>
    <TheMain/>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue'
import TheMain from './components/TheMain.vue'

export default {
  name: 'App',
  components: {
    TheHeader, TheMain
  },

  data() {
    return {

    }
  },

  computed: {

  }
}
</script>

<style lang="scss">
@import "assets/scss/main.scss";

</style>
