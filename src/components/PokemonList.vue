<template>
    <div class="pokemon-list">
        <template v-for="(pokemon, index) in pokemonData">
            <p v-on:click="setFavorites(index), playPokemonCry(index)" class="pokemon-list-item" v-bind:key="pokemon.url">{{ index + 1 + '. '}} {{ pokemon.name}}
            <img v-bind:key="pokemon.url" :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index+1}.png`" alt="Pokemon`"/>

    <v-badge
        v-if="favoritePokemon.includes(index)"
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
    export default {
        name: 'PokemonList',
        data: function() {
            return {
                pokemonData: null,
                favoritePokemon: []
            }
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
            setFavorites(number) {
                if (this.favoritePokemon.includes(number)) {
                    const indexInArray = this.favoritePokemon.indexOf(number)
                    this.favoritePokemon.splice(indexInArray, 1)
                    return
                }
                if (this.favoritePokemon.length < 10) {
                    this.favoritePokemon.push(number)
                }
            },
            playPokemonCry(pokemonId) {
                const audio = new Audio(`https://pokemoncries.com/cries-old/${pokemonId}.mp3`);
                audio.play();
            }
        }
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
