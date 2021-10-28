import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {
      title: 'Список дел'
    },
    component: () => import('@/App.vue')
  },
  {
    path: '/infopage',
    name: 'InfoPage',
    meta: {
      title: 'Информация'
    },
    component: () => import('@/components/pages/InfoPage.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router