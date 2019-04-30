<template>
    <div class="pokemon-list">
        <h1>Choose your Pokémon</h1>
        <template v-for="(pokemon, index) in pokemonData">
            <p class="pokemon-list-item" v-bind:key="pokemon.url">
                {{ index + 1 + '. '}}
                <i v-if="favoritePokemonNames.includes(pokemon.name)" class="nes-icon is-small heart"></i>
                <i v-else class="nes-icon is-small heart is-empty"></i>
                {{ pokemon.name}}
            <img v-bind:key="pokemon.url" :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index+1}.png`" alt="Pokemon`"/>
            <a v-show="!favoritePokemonNames.includes(pokemon.name)" class="nes-btn" v-on:click="setFavorites(pokemon.name), playPokemonCry(index+1)">Pick me!</a>
            <button v-show="favoritePokemonNames.includes(pokemon.name)" class="nes-btn is-error" v-on:click="setFavorites(pokemon.name), playPokemonCry(index+1)">Remove</button>
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
                favoritePokemonNames: []
                
            }
        },
        mounted() {
            this.favoritePokemonNames = this.listFavoritePokemon
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
            setFavorites(name) {
                if (this.favoritePokemonNames.includes(name)) {
                    const indexInArray = this.favoritePokemonNames.indexOf(name)
                    this.deleteFavorite(indexInArray)
                    return
                }
                if (this.favoritePokemonNames.length < 10) {
                    this.addFavorite(name)
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
            'listFavoritePokemon'
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
