<template>
  <div>
    <v-layout
      align-center
      justify-center
      row
      fill-height
    >
      <img
        src="./assets/logo.svg"
        alt="pokémon"
      >
    </v-layout>
    <v-layout
      align-start
      justify-space-around
      row
      fill-height
    >
      <pokemon-list v-if="pokemonData" />
      <summary-favorites v-if="pokemonData" />
    </v-layout>
  </div>
</template>

<script>
import PokemonList from './components/PokemonList'
import SummaryFavorites from './components/SummaryFavorites'
import { mapActions } from 'vuex'

const LOCAL_STORAGE_PKM_NAMES = 'favoritePokemonNames'

export default {
  name: 'App',
  components: {
    PokemonList,
    SummaryFavorites
  },
  data: function() {
    return {
      pokemonData: null
    }
  },
  async created() {
    this.pokemonData = await this.getPokemonData()
    this.setPokemonData(this.pokemonData)
  },
  mounted() {
    this.getDataFromLocalStorage()

  },
  methods: {
    getDataFromLocalStorage() {
      const localStoragePkmNames = JSON.parse(window.localStorage.getItem(LOCAL_STORAGE_PKM_NAMES))

      if (localStoragePkmNames) {
        this.setFavoritePokemonList(localStoragePkmNames)
      }
    },
    async getPokemonData() {
        const data = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
        const json = await data.json()
        return json.results
    },
    ...mapActions([
        'setFavoritePokemonList', 'setPokemonData'
    ])
  }
}
</script>

<style scoped>
body {
  font-family: Arial, Helvetica, sans-serif;
  }
</style>
