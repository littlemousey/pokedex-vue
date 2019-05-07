import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './pages/home'
import Login from './pages/login'
import store from './store'

// lazy load route
const Favorites = () => import('./pages/favorites')

Vue.use(VueRouter)

const routes = [
    { path: '/favorites', component: Favorites, meta: { requiresAuth: true } },
    { path: '/login', component: Login, meta: { requiresAuth: false } },
    { path: '*', component: Home, meta: { requiresAuth: true } },
]

const router = new VueRouter({
    mode: 'history',
    routes, // short for `routes: routes`
})

router.beforeEach((to, from, next) => {
    if (!store.state.loggedIn && to.meta.requiresAuth) {
        next('/login')
    } else if (store.state.loggedIn && !to.meta.requiresAuth) {
        next('/')
    } else {
        next()
    }
})

export default router
