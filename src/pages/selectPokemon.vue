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
import { mapState } from 'vuex'

export default {
    components: {
    PokemonList,
    SummaryFavorites
  },
  computed: {
      ...mapState([
        'statePokemonDataList'
    ]),
  }
}
</script>
