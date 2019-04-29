import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    listFavoritePokemonNo: [],
    listFavoritePokemonNames: []
  },
  actions: {
    addFavorite (context, payload) {
      context.commit('addFavorite', payload)
    },

    deleteFavorite (context, payload) {
      context.commit('deleteFavorite', payload)
    }
  },
  mutations: {
      addFavorite (state, {number, name}) {
        state.listFavoritePokemonNo.push(number)
        state.listFavoritePokemonNames.push(name)
      },
      deleteFavorite (state, item) {
        state.listFavoritePokemonNo.splice(item, 1)
        state.listFavoritePokemonNames.splice(item, 1)
      }
  }
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
}).$mount('#app')
