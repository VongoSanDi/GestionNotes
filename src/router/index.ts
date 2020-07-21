import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Accueil from '../views/Accueil.vue'

Vue.use(VueRouter)

  const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Accueil',
    component: Accueil,
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

/*console.log("test1",router)
let isAuthenticated = false;

router.beforeEach((to, from, next) => {
  if(isAuthenticated === false && to.fullPath !== '/login')
  {
    router.replace({name: 'Login'})
    isAuthenticated = true;
    next();
  }
})*/


export default router
