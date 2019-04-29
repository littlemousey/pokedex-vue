<template>
    <div class="pokemon-list">
        <h1>Choose your Pokémon</h1>
        <template v-for="(pokemon, index) in pokemonData">
            <p v-on:click="setFavorites(index, pokemon.name), playPokemonCry(index+1)" class="pokemon-list-item" v-bind:key="pokemon.url">{{ index + 1 + '. '}} {{ pokemon.name}}
            <img v-bind:key="pokemon.url" :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index+1}.png`" alt="Pokemon`"/>

    <v-badge
        v-if="listLikedPokemon.includes(index)"
      color="red"
      right
      overlap
    >
    <template v-slot:badge>
        <v-icon
          dark
          small
        >
          favorite
        </v-icon>
      </template>
            </v-badge>

            </p>
        </template>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

    export default {
        name: 'PokemonList',
        data: function() {
            return {
                pokemonData: null,
                listLikedPokemon: [],
                favoritePokemonNames: []
                
            }
        },
        mounted() {
            this.listLikedPokemon = this.listFavoritePokemonNo
            this.favoritePokemonNames = this.listFavoritePokemonNames
        },
        async created() {
            const data = await this.getPokemonData()
            this.pokemonData = data
        },
        methods: {
            async getPokemonData() {
                const data = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
                const json = await data.json()
                return json.results
            },
            setFavorites(number, name) {
                if (this.listLikedPokemon.includes(number)) {
                    const indexInArray = this.listLikedPokemon.indexOf(number)
                    this.deleteFavorite(indexInArray)
                    return
                }
                if (this.listLikedPokemon.length < 10) {
                    this.addFavorite({number, name})
                }
            },
            playPokemonCry(pokemonId) {
                const audio = new Audio(`https://pokemoncries.com/cries-old/${pokemonId}.mp3`);
                audio.play();
            },
            ...mapActions([
                'addFavorite', 'deleteFavorite'
            ])
        },
        computed: mapState([
            'listFavoritePokemonNo',
            'listFavoritePokemonNames'
        ])
    }
</script>

<style lang="stylus" scoped>
.pokemon-list {
    text-transform: capitalize;
}

.pokemon-list-item {
    display: flex;
    align-items: center;
}
</style>
