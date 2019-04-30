<template>
    <div>
        <h2>Your chosen favorite Pokémon</h2>
        <p v-if="favoriteListLength < 10">I can't choose, help me <v-btn>Pick Pokémon</v-btn></p>
        <template>
            <p v-for="(pokemonName, index) in favoritePokemonNames" v-bind:key="index" class="chosen-pokemon">
                <img src="../assets/pokeball.png" alt="pokeball"/>
                {{ pokemonName }}
            </p>
        </template>
        <v-btn v-if="favoriteListLength > 0">View your favorite Pokémon</v-btn>
        <p v-if="favoriteListLength > 9">Your list is full!</p>
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
            this.favoritePokemonNames = this.listFavoritePokemon
        },
        computed: {
            ...mapState([
            'listFavoritePokemon'
            ]),
            favoriteListLength() {
                return this.listFavoritePokemon.length
            }
        }
    }
</script>

<style scoped>
.chosen-pokemon {
    text-transform: capitalize;
}
</style>