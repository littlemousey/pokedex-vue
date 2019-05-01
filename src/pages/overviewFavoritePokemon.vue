<template>
  <div>
      {{stateFavoritePokemonList}}
      <pokemon-card v-for="(pokemon, index) in stateFavoritePokemonList" v-bind:key="index" :pokemon-name="pokemon"/>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import PokemonCard from '@/components/PokemonCard'

    export default {
        components: {
            PokemonCard
        },
        computed: {
            ...mapState([
            'stateFavoritePokemonList'
            ])
        }
    }
</script>