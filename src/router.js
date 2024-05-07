import { createRouter, createWebHistory, createMemoryHistory } from 'vue-router'

import Home from './pages/Home.vue'
import About from './pages/About.vue'
import Contacts from './pages/Contacts.vue'
import CastleList from './pages/CastleList.vue'
import CastleCard from './pages/CastleCard.vue'
import ServiceCard from './pages/ServiceCard.vue'
import ServiceList from './pages/ServiceList.vue'
import TextPage from './pages/TextPage.vue'

const baseUrl = import.meta.env.BASE_URL
const history = import.meta.env.SSR ? createMemoryHistory(baseUrl) : createWebHistory(baseUrl)

const routes = [
  {
    path: '/',
    component: () => import('@/pages/Home.vue'),
    meta: { title: 'Главная' },
    name: 'home'
  },
  {
    path: '/about',
    component: () => import('@/pages/About.vue'),
    meta: { title: 'О компании' },
    name: 'about'
  },
  {
    path: '/contacts',
    component: () => import('@/pages/Contacts.vue'),
    meta: { title: 'Контакты' },
    name: 'contacts'
  },
  {
    path: '/castle-list',
    component: () => import('@/pages/CastleList.vue'),
    meta: { title: 'Список замков' },
    name: 'castle-list'
  },
  {
    path: '/castle-card',
    component: () => import('@/pages/CastleCard.vue'),
    meta: { title: 'Карточка замка' },
    name: 'castle-card'
  },
  {
    path: '/service-card',
    component: () => import('@/pages/ServiceCard.vue'),
    meta: { title: 'Карточка услуги' },
    name: 'service-card'
  },
  {
    path: '/service-list',
    component: () => import('@/pages/ServiceList.vue'),
    meta: { title: 'Список услуг' },
    name: 'service-list'
  },
  {
    path: '/text-page',
    component: () => import('@/pages/TextPage.vue'),
    meta: { title: 'Текстовая страница' },
    name: 'text-page'
  },
  {
    path: '/legal',
    component: Home,
    meta: { title: 'Главная' },
    name: 'legal'
  },
  {
    path: '/individual',
    component: Home,
    meta: { title: 'Главная' },
    name: 'individual'
  }
]
const router = createRouter({
  history,
  routes,
  scrollBehavior: function (to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    } else {
      setTimeout(() => {
        window.scrollTo(0, 0)
      }, 100)
    }
  },
  base: baseUrl
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

export { router }
