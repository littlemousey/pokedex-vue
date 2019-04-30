<template>
  <div>
    <h2>Your chosen favorite Pokémon</h2>
    <p v-if="favoriteListLength < maximumList">
      I can't choose, help me <a @click="startInterval" class="nes-btn">Pick Pokémon</a>
    </p>
    <template>
      <p
        v-for="(pokemonName, index) in favoritePokemonList"
        :key="index"
        class="chosen-pokemon"
      >
        <img
          src="../assets/pokeball.png"
          alt="pokeball"
        >
        {{ pokemonName }}
      </p>
    </template>
    <p v-if="favoriteListLength > 1 && favoriteListLength < maximumList">
      You can add {{ maximumList - favoriteListLength }} more Pokémon
    </p>
    <p v-if="favoriteListLength > 9">
      Your list is full!
    </p>
    <a
      v-if="favoriteListLength > 0"
      class="nes-btn"
    >View your favorite Pokémon</a>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

    export default {
        name: 'SummaryFavorites',
        data: function() {
            return {
                favoritePokemonList: [],
                maximumList: 10
            }
        },
                computed: {
            ...mapState([
            'stateFavoritePokemonList', 'statePokemonDataList'
            ]),
            favoriteListLength() {
                return this.favoritePokemonList.length
            }
        },
        mounted() {
          this.favoritePokemonList = this.stateFavoritePokemonList
        },
        methods: {
          startInterval() {
            const self = this
            const intervalID = window.setInterval(pickRandomPokemonOrClearInterval, 500)
            function pickRandomPokemonOrClearInterval() {
              if(self.favoriteListLength < self.maximumList) {
                self.pickRandomPokemon()
              } else {
                clearInterval(intervalID)
              }
            }

          },
          pickRandomPokemon() {
            const number = Math.floor(Math.random() * Math.floor(151));
            this.addFavorite(this.statePokemonDataList[number].name)
          },
          ...mapActions([
              'addFavorite'
          ])
        }
    }
</script>

<style scoped>
.chosen-pokemon {
    text-transform: capitalize;
}
</style>