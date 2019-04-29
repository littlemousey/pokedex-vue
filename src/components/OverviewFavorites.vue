<template>
    <div>
        <h2>Your chosen favorite Pokémon</h2>
        <ul class="chosen-pokemon-list">
            <li v-for="(pokemonName, index) in favoritePokemonNames" v-bind:key="index">
                {{ pokemonName }}
            </li>
        </ul>
        <v-btn>View your favorite Pokémon</v-btn>
    </div>
</template>

<script>
import { mapState } from 'vuex'

    export default {
        name: 'OverviewFavorites',
        data: function() {
            return {
                favoritePokemonNames: []
            }
        },
        mounted() {
            this.favoritePokemonNames = this.listFavoritePokemonNames
        },
        computed: mapState([
            'listFavoritePokemonNames'
        ])
        
    }
</script>

<style scoped>
.chosen-pokemon-list {
    text-transform: capitalize;
}
</style>