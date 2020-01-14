<template>
  <div id="app">
    <Header />
    <MapPane @onGetData="reloadData"/>
    <AnkenList v-if="ankens.length > 0" :ankens="ankens" />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import MapPane from './components/MapPane.vue'
import AnkenList from './components/AnkenList.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'app',
  components: {
    Header,
    MapPane,
    AnkenList,
    Footer
  },
  data() {
    return {
      ankens:[]
    }
  },
  methods: {
    reloadData: function(ankens) {
      this.ankens = ankens
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
