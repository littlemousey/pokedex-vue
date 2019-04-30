<template>
  <div class="pokemon-list">
    <h1>Choose your Pokémon</h1>
    <template v-for="(pokemon, index) in pokemonData">
      <p
        :key="pokemon.url"
        class="pokemon-list-item"
      >
        {{ index + 1 + '. ' }}
        <i
          v-if="favoritePokemonSelected.includes(pokemon.name)"
          class="nes-icon is-small heart"
        />
        <i
          v-else
          class="nes-icon is-small heart is-empty"
        />
        {{ pokemon.name }}
        <img
          :key="pokemon.url"
          :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index+1}.png`"
          alt="Pokemon`"
        >
        <a
          v-show="!favoritePokemonSelected.includes(pokemon.name)"
          class="nes-btn" :class="{'is-disabled': favoriteListLength === 10}"
          @click="setFavorites(pokemon.name), playPokemonCry(index+1)"
        >Pick me!</a>
        <button
          v-show="favoritePokemonSelected.includes(pokemon.name)"
          class="nes-btn is-error"
          @click="setFavorites(pokemon.name), playPokemonCry(index+1)"
        >
          Remove
        </button>
      </p>
    </template>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

    export default {
        name: 'PokemonList',
        data: function() {
            return {
              pokemonData: null,
              favoritePokemonSelected: []
                
            }
        },
        computed: {
        ...mapState([
            'stateFavoritePokemonList', 'statePokemonDataList'
        ]),
          favoriteListLength() {
              return this.favoritePokemonSelected.length
          }
        },
        mounted() {
          this.pokemonData = this.statePokemonDataList
          this.favoritePokemonSelected = this.stateFavoritePokemonList
        },
        methods: {
            setFavorites(name) {
                if (this.favoritePokemonSelected.includes(name)) {
                    const indexInArray = this.favoritePokemonSelected.indexOf(name)
                    this.deleteFavorite(indexInArray)
                    return
                }
                if (this.favoriteListLength < 10) {
                    this.addFavorite(name)
                }
            },
            playPokemonCry(pokemonId) {
                const audio = new Audio(`https://pokemoncries.com/cries-old/${pokemonId}.mp3`);
                audio.play();
            },
            ...mapActions([
                'addFavorite', 'deleteFavorite'
            ])
        }
    }
</script>

<style lang="stylus" scoped>
.pokemon-list {
    text-transform: capitalize;
}

.pokemon-list-item {
    display: flex;
    align-items: center;
}
</style>
