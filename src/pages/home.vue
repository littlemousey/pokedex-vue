<template>
  <div class="select-pokemon-page">
    <img
      src="./../assets/logo-pixel.gif"
      alt="pokémon"
    >
    <div class="select-pokemon-content">
      <pokemon-list
        :pokemon-list="statePokemonDataList"
        :favorites="stateFavoritePokemonList"
        @deleteFavorite="deleteFavorite"
        @addFavorite="addFavorite"
      />
      <summary-favorites
        :pokemon-list="statePokemonDataList"
        :favorites="stateFavoritePokemonList"
        @addFavorite="addFavorite"
        @eraseFavoritePokemonList="eraseFavoritePokemonList"
      />
    </div>
  </div>
</template>

<script>
import PokemonList from '@/components/PokemonList'
import SummaryFavorites from '@/components/SummaryFavorites'
import { mapState, mapActions } from 'vuex'

export default {
    components: {
        PokemonList,
        SummaryFavorites,
    },
    computed: {
        ...mapState(['statePokemonDataList', 'stateFavoritePokemonList']),
    },
    async created() {
        const pokemonData = await this.getPokemonData()
        this.setPokemonData(pokemonData)
    },
    methods: {
        async getPokemonData() {
            const data = await fetch(
                'https://pokeapi.co/api/v2/pokemon?limit=151'
            )
            const json = await data.json()
            return json.results
        },
        ...mapActions(['setPokemonData', 'addFavorite', 'deleteFavorite', 'eraseFavoritePokemonList']),
    },
}
</script>

<style scoped>
.select-pokemon-page {
    text-align: center;
}

.select-pokemon-content {
    text-align: left;
    display: flex;
    justify-content: space-evenly;
}
</style>

