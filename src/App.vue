<template>
<div>
  <img src="./assets/logo.svg" alt="pokémon">
  <pokemon-list/>
  <single-pokemon/>
</div>
</template>

<script>
import PokemonList from './components/PokemonList'
import SinglePokemon from './components/SinglePokemon'

export default {
  name: 'App',
  components: {
    PokemonList,
    SinglePokemon
  },
  data () {
    return {
      //
    }
  }
}
</script>

<style scoped>
body {
  font-family: Arial, Helvetica, sans-serif;
  }
</style>
