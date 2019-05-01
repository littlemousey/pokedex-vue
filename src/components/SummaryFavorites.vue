<template>
  <div>
    <h2>Your chosen favorite Pokémon</h2>
    <p v-if="favoriteListLength < maximumList">
      I can't choose, help me <button @click="startInterval" class="nes-btn is-success">Pick Pokémon</button>
    </p>
    <template>
      <p
        v-for="(pokemonName, index) in stateFavoritePokemonList"
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
    <p v-if="favoriteListLength > 9">
      Do you want to <button @click="emptyFavoritePokemonList" class="nes-btn is-error">Delete</button> the list?
    </p>
    <router-link v-if="favoriteListLength > 0" class="nes-btn" to="/overview">View your favorite Pokémon</router-link>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

    export default {
        name: 'SummaryFavorites',
        data: function() {
            return {
                maximumList: 10
            }
        },
                computed: {
            ...mapState([
            'stateFavoritePokemonList', 'statePokemonDataList'
            ]),
            favoriteListLength() {
                return this.stateFavoritePokemonList.length
            }
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
            const list = this.statePokemonDataList.filter(function(pokemon){
              return !this.stateFavoritePokemonList.includes(pokemon.name)
            }, this)
            
            const number = Math.floor(Math.random() * Math.floor(list.length));
            this.addFavorite(list[number].name)
          },
          emptyFavoritePokemonList() {
            this.eraseFavoritePokemonList()
          },
          ...mapActions([
              'addFavorite', 'eraseFavoritePokemonList'
          ])
        }
    }
</script>

<style scoped>
.chosen-pokemon {
    text-transform: capitalize;
}
</style>