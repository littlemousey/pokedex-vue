<template>
  <div>
    <router-view />
  </div>
</template>

<script>
import { mapActions } from 'vuex'

const LOCAL_STORAGE_PKM_NAMES = 'favoritePokemonNames'
const LOCAL_STORAGE_USER = 'userLoggedIn'

export default {
  name: 'App',
  async created() {
    const pokemonData = await this.getPokemonData()
    this.setPokemonData(pokemonData)
  },
  mounted() {
    this.getDataFromLocalStorage()
    this.$router.push('select')

  },
  methods: {
    getDataFromLocalStorage() {
      const localStoragePkmNames = JSON.parse(window.localStorage.getItem(LOCAL_STORAGE_PKM_NAMES))
      const localStorageUser = JSON.parse(window.localStorage.getItem(LOCAL_STORAGE_USER))

      if (localStoragePkmNames) {
        this.setFavoritePokemonList(localStoragePkmNames)
      }

      if (localStorageUser) {
        this.setUserLoggedIn()
      }

    },
    async getPokemonData() {
        const data = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
        const json = await data.json()
        return json.results
    },
    ...mapActions([
        'setFavoritePokemonList', 'setPokemonData', 'setUserLoggedIn'
    ])
  }
}
</script>
