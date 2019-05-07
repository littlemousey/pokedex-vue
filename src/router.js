
import Vue from 'vue'
import VueRouter from 'vue-router'
import Favorites from './pages/favorites'
import Home from './pages/home'
import Login from './pages/login'
import store from './store'

Vue.use(VueRouter)

const routes = [
  { path: '/home', component: Home, meta: { requiresAuth: true }},
  { path: '/favorites', component: Favorites, meta: { requiresAuth: true }},
  { path: '/login', component: Login, meta: { requiresAuth: false } }
]

const router = new VueRouter({
  mode: 'history',
  routes // short for `routes: routes`
})

router.beforeEach((to, from, next) => {
  if (!store.state.loggedIn && to.meta.requiresAuth) {
    next('/login');
  } else {
    next();
  }
})

export default router