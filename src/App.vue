<template>
  <div>
    <router-link to="/select">Select pokemon</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import PokemonList from './components/PokemonList'
import SummaryFavorites from './components/SummaryFavorites'
import { mapActions } from 'vuex'

const LOCAL_STORAGE_PKM_NAMES = 'favoritePokemonNames'

export default {
  name: 'App'
}
</script>
