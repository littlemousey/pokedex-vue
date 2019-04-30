<template>
  <div>
    <v-layout align-center justify-center row fill-height><img src="./assets/logo.svg" alt="pokémon"/></v-layout>
    <v-layout align-start justify-space-around row fill-height>
      <pokemon-list/>
      <overview-favorites/>
    </v-layout>
  </div>
</template>

<script>
import PokemonList from './components/PokemonList'
import OverviewFavorites from './components/OverviewFavorites'
import { mapActions } from 'vuex'

const LOCAL_STORAGE_PKM_NAMES = 'favoritePokemonNames'

export default {
  name: 'App',
  components: {
    PokemonList,
    OverviewFavorites
  },
  methods: {
    getDataFromLocalStorage() {
      const localStoragePkmNames = JSON.parse(window.localStorage.getItem(LOCAL_STORAGE_PKM_NAMES))

      if (localStoragePkmNames) {
        this.setFavoritePokemonList(localStoragePkmNames)
      }
    },
    ...mapActions([
        'setFavoritePokemonList'
    ])
  },
  created() {
    this.getDataFromLocalStorage()
  }
}
</script>

<style scoped>
body {
  font-family: Arial, Helvetica, sans-serif;
  }
</style>
