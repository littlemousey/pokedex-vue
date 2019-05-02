import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import OverviewFavoritePokemon from './pages/overviewFavoritePokemon'
import SelectPokemon from './pages/selectPokemon'
import Login from './pages/login'

Vue.use(Vuex)
Vue.use(VueRouter)

const routes = [
  { path: '/select', component: SelectPokemon},
  { path: '/overview', component: OverviewFavoritePokemon},
  { path: '/login', component: Login }
]

const router = new VueRouter({
  mode: 'history',
  routes // short for `routes: routes`
})

router.beforeEach((to, from, next) => {
  if (!store.state.loggedIn && to.path !== '/login') {
    next('/login');
  } else {
    next();
  }
})

const LOCAL_STORAGE_PKM_NAMES = 'favoritePokemonNames'
const LOCAL_STORAGE_USER = 'userLoggedIn'

const store = new Vuex.Store({
  state: {
    statePokemonDataList: [],
    stateFavoritePokemonList: [],
    loggedIn: false
  },
  actions: {
    setUserLoggedIn (context) {
      context.commit('setUserLoggedIn')
    },
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
    setUserLoggedIn (state) {
      state.loggedIn = true
      window.localStorage.setItem(LOCAL_STORAGE_USER, JSON.stringify(state.loggedIn))
    },
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
