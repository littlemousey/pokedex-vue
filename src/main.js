import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import OverviewFavoritePokemon from './pages/overviewFavoritePokemon'
import SelectPokemon from './pages/selectPokemon'

Vue.use(Vuex)
Vue.use(VueRouter)

const routes = [
  { path: '/select', component: SelectPokemon},
  { path: '/overview', component: OverviewFavoritePokemon}
]

const router = new VueRouter({
  routes // short for `routes: routes`
})


const LOCAL_STORAGE_PKM_NAMES = 'favoritePokemonNames'

const store = new Vuex.Store({
  state: {
    statePokemonDataList: [],
    stateFavoritePokemonList: []
  },
  actions: {
    setPokemonData (context, payload){
      context.commit('setPokemonData', payload)
    },
    setFavoritePokemonList (context, payload) {
      context.commit('setFavoritePokemonList', payload)
    },
    addFavorite (context, payload) {
      context.commit('addFavorite', payload)
    },
    deleteFavorite (context, payload) {
      context.commit('deleteFavorite', payload)
    },
    eraseFavoritePokemonList (context) {
      context.commit('eraseFavoritePokemonList')
    }
  },
  mutations: {
    setPokemonData (state, list) {
      state.statePokemonDataList = list
    },
    setFavoritePokemonList (state, list) {
      state.stateFavoritePokemonList = list
    },
    addFavorite (state, name) {
      state.stateFavoritePokemonList.push(name)
      window.localStorage.setItem(LOCAL_STORAGE_PKM_NAMES, JSON.stringify(state.stateFavoritePokemonList))
    },
    deleteFavorite (state, item) {
      state.stateFavoritePokemonList.splice(item, 1)
      window.localStorage.setItem(LOCAL_STORAGE_PKM_NAMES, JSON.stringify(state.stateFavoritePokemonList))
    },
    eraseFavoritePokemonList (state) {
      state.stateFavoritePokemonList = []
      window.localStorage.setItem(LOCAL_STORAGE_PKM_NAMES, JSON.stringify(state.stateFavoritePokemonList))
    }
  }
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
  router,
}).$mount('#app')
