<template>
  <div
    v-if="pokemonData && pokemonDescription"
    class="pokemon-card nes-container is-rounded"
  >
    <div class="pokemon-card__image">
      <img
        :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonData.id}.png`"
        :alt="pokemonData.name"
      >
    </div>
    <div class="pokemon-card__text">
      <p>Name: {{ pokemonData.name }}</p>
      <p>No. {{ pokemonData.id }}</p>
      <p>
        Type: <span
          v-for="(typesOfPokemon, index) in pokemonData.types"
          :key="`type${index}`"
        >
          {{ typesOfPokemon.type.name }}
        </span>
      </p>
      <!-- <p v-for="(property, index) in pokemonData.stats" :key="`property${index}`">
        {{ property.stat.name }}: {{ property.base_stat }}
      </p> -->
      <p>{{ pokemonDescription[0].flavor_text }}</p>
    </div>
  </div>
</template>

<script>
    export default {
      name: 'PokemonCard',
      props: {
        pokemonName: {
          type: String,
          default: ''
        }
      },
      data: function () {
        return {
          pokemonData: null,
          pokemonDescription: null
        }
      },
      async created () {
        if (this.pokemonName) {
          this.pokemonData = await this.getDataSpecificPokemon(this.pokemonName)
          this.pokemonDescription = await this.getPokemonDescription(this.pokemonData)
      }
    },
      methods: {
        async getDataSpecificPokemon(name) {
          const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`)
          const json = await data.json()
          return json
        },
        async getPokemonDescription(pokemonData) {
          const data = await fetch(`${pokemonData.species.url}`)
          const json = await data.json()
          return json.flavor_text_entries.filter(function(element) {
            return element.language.name === 'en'
          })
        }
      }
        
    }
</script>

<style scoped>
.pokemon-card {
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 10px;
}
</style>