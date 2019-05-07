<template>
  <div>
    <v-layout
      align-center
      justify-center
      row
      fill-height
    >
      <img
        src="./../assets/logo.svg"
        alt="pokémon"
      >
    </v-layout>
    <v-layout
      align-start
      justify-space-around
      row
      fill-height
    >
      <pokemon-list v-if="statePokemonDataList" />
      <summary-favorites v-if="statePokemonDataList" />
    </v-layout>
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
