<template>
  <div class="nes-container is-rounded">
    <p>This is a Pokemon card</p>
    <p>{{pokemonData.abilities}}</p>
  </div>
</template>

<script>
    export default {
      name: 'PokemonCard',
      data: function () {
        return {
          pokemonData: null
        }
      },
      props: {
        pokemonName: {
          type: String,
          default: ''
        }
      },
      methods: {
        async getDataSpecificPokemon(name) {
          const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`)
          const json = await data.json()
          console.log(json)
          return json
        }
      },
      async created() {
        if (this.pokemonName) {
          this.pokemonData = await this.getDataSpecificPokemon(this.pokemonName)
          debugger
      }
    }
        
    }
</script>

<style scoped>

</style>