<template>
  <div id="app">
    <Header />
    <MapPane :ankens="ankens"/>
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
      ankens:[],
    }
  },
  created() {
            let vm = this
            fetch("/markers")
            .then(response => {
                return response.json()
            })
            .then(data => {
                vm.ankens = data.ankenList.sort(function (a, b) {
                    if (a.no < b.no) {
                        return 1
                    }
                    if (a.no > b.no) {
                        return -1
                    }
                    return 0 
                }).sort(function (a, b) {
                    if (a.year < b.year) {
                        return 1
                    }
                    if (a.year > b.year) {
                        return -1
                    }
                    return 0 
                })
            })
            .catch(error => {
                console.log(error)
                alert("エラーが発生しました。")
            });
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
