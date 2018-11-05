import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/credits',
      name: 'credits',
      // route level code-splitting
      // this generates a separate chunk (credits.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "credits" */ './views/Credits.vue')
    },
    {
      path: '/:value*',
      name: 'home',
      component: Home
    }
  ]
})
