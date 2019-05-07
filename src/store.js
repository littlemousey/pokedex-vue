import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const LOCAL_STORAGE_PKM_NAMES = 'favoritePokemonNames'
const LOCAL_STORAGE_USER = 'userLoggedIn'

const store = new Vuex.Store({
    plugins: [createPersistedState({
        key: 'pokedex'
    })],
    state: {
        statePokemonDataList: [],
        stateFavoritePokemonList: [],
        loggedIn: false,
    },
    actions: {
        setUserLoggedIn(context) {
            context.commit('setUserLoggedIn')
        },
        setPokemonData(context, payload) {
            context.commit('setPokemonData', payload)
        },
        setFavoritePokemonList(context, payload) {
            context.commit('setFavoritePokemonList', payload)
        },
        addFavorite(context, payload) {
            context.commit('addFavorite', payload)
        },
        deleteFavorite(context, payload) {
            context.commit('deleteFavorite', payload)
        },
        eraseFavoritePokemonList(context) {
            context.commit('eraseFavoritePokemonList')
        },
    },
    mutations: {
        setUserLoggedIn(state) {
            state.loggedIn = true
        },
        setPokemonData(state, list) {
            state.statePokemonDataList = list
        },
        setFavoritePokemonList(state, list) {
            state.stateFavoritePokemonList = list
        },
        addFavorite(state, name) {
            state.stateFavoritePokemonList.push(name)
        },
        deleteFavorite(state, item) {
            state.stateFavoritePokemonList.splice(item, 1)
        },
        eraseFavoritePokemonList(state) {
            state.stateFavoritePokemonList = []
        },
    },
})

export default store
