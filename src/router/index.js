import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import KittensIndex from '../views/KittensIndex.vue'
import KittensNew from '../views/KittensNew.vue'
import KittensShow from '../views/KittensShow.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/kittens',
    name: 'KittensIndex',
    component: KittensIndex
  },
  {
    path: '/kittens/new',
    name: 'KittensNew',
    component: KittensNew
  },
  {
    path: '/kittens/:id/edit',
    name: 'KittensShow',
    component: KittensShow
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
