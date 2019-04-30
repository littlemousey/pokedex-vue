<template>
    <div>
        <h2>Your chosen favorite Pokémon</h2>
        <p v-if="favoriteListLength < 10">I can't choose, help me <a class="nes-btn">Pick Pokémon</a></p>
        <template>
            <p v-for="(pokemonName, index) in favoritePokemonNames" v-bind:key="index" class="chosen-pokemon">
                <img src="../assets/pokeball.png" alt="pokeball"/>
                {{ pokemonName }}
            </p>
        </template>
        <a class="nes-btn" v-if="favoriteListLength > 0">View your favorite Pokémon</a>
        <p v-if="favoriteListLength > 9">Your list is full!</p>
    </div>
</template>

<script>
import { mapState } from 'vuex'

    export default {
        name: 'SummaryFavorites',
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