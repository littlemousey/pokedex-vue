<template>
  <div class="pokemon-list">
    <h2>Choose your Pokémon</h2>
    <p
      v-for="(pokemon, index) in pokemonList"
      :key="pokemon.url"
      class="pokemon-list-item"
    >
      {{ index + 1 + '. ' }}
      <i
        v-if="favorites.includes(pokemon.name)"
        class="nes-icon is-small heart"
      />
      <i
        v-else
        class="nes-icon is-small heart is-empty"
      />
      {{ pokemon.name }}
      <img
        :key="pokemon.url"
        :src="
          `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index +
            1}.png`
        "
        alt="Pokemon`"
      >
      <a
        v-show="!favorites.includes(pokemon.name)"
        class="nes-btn"
        :class="{ 'is-disabled': favoriteListLength === 10 }"
        @click="setFavorites(pokemon.name), playPokemonCry(index + 1)"
      >Pick me!</a>
      <button
        v-show="favorites.includes(pokemon.name)"
        class="nes-btn is-error"
        @click="setFavorites(pokemon.name), playPokemonCry(index + 1)"
      >
        Remove
      </button>
    </p>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: 'PokemonList',
    props: {
        pokemonList: {
            type: Array,
            required: true,
        },
        favorites: {
            type: Array,
            required: true,
        },
    },
    computed: {
        favoriteListLength() {
            return this.favorites.length
        },
    },
    methods: {
        setFavorites(name) {
            if (this.favorites.includes(name)) {
                const indexInArray = this.favorites.indexOf(name)
                this.deleteFavorite(indexInArray)
                return
            }
            if (this.favoriteListLength < 10) {
                this.addFavorite(name)
            }
        },
        playPokemonCry(pokemonId) {
            const audio = new Audio(
                `https://pokemoncries.com/cries-old/${pokemonId}.mp3`
            )
            audio.play()
        },
        ...mapActions(['addFavorite', 'deleteFavorite']),
    },
}
</script>

<style scoped>
.pokemon-list {
    text-transform: capitalize;
}

.pokemon-list-item {
    display: flex;
    align-items: center;
}
</style>
