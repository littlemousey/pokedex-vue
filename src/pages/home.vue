<template>
  <div class="select-pokemon-page">
    <img
      src="./../assets/logo.svg"
      alt="pokémon"
    >
    <div class="select-pokemon-content">
      <pokemon-list v-if="statePokemonDataList" />
      <summary-favorites v-if="statePokemonDataList" />
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
        ...mapState(['statePokemonDataList']),
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
        ...mapActions(['setPokemonData']),
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

