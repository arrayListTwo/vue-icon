import Vue from 'vue'
import VueRouter from 'vue-router'
import Symbol from '../views/symbol.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'symbol',
    component: Symbol
  },
  {
    path: '/fontClass',
    name: 'fontClass',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/font-class.vue')
  },
  {
    path: '/icoMoon',
    name: 'icoMoon',
    component: () => import('../views/ico-moon.vue')
  },
  {
    path: '/packageCom',
    name: 'packageCom',
    component: () => import('../views/package-com.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
