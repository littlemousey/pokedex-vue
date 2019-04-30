import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const LOCAL_STORAGE_PKM_NAMES = 'favoritePokemonNames'

const store = new Vuex.Store({
  state: {
    listFavoritePokemon: []
  },
  actions: {
    setFavoritePokemonList (context, payload) {
      context.commit('setFavoritePokemonList', payload)
    },
    addFavorite (context, payload) {
      context.commit('addFavorite', payload)
    },

    deleteFavorite (context, payload) {
      context.commit('deleteFavorite', payload)
    }
  },
  mutations: {
    setFavoritePokemonList (state, list) {
      state.listFavoritePokemon = list
    },
    addFavorite (state, name) {
      state.listFavoritePokemon.push(name)
      window.localStorage.setItem(LOCAL_STORAGE_PKM_NAMES, JSON.stringify(state.listFavoritePokemon))
    },
    deleteFavorite (state, item) {
      state.listFavoritePokemon.splice(item, 1)
      window.localStorage.setItem(LOCAL_STORAGE_PKM_NAMES, JSON.stringify(state.listFavoritePokemon))
    }
  }
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
}).$mount('#app')
