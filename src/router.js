import { createRouter, createWebHistory } from 'vue-router'

import Home from './pages/Home.vue'
import About from './pages/About.vue'
import Contacts from './pages/Contacts.vue'
import CastleList from './pages/CastleList.vue'
import CastleCard from './pages/CastleCard.vue'
import ServiceCard from './pages/ServiceCard.vue'
import ServiceList from './pages/ServiceList.vue'
import TextPage from './pages/TextPage.vue'

const routes = [
  { path: '/', component: Home, meta: { title: 'Главная' }, name: 'home' },
  { path: '/about', component: About, meta: { title: 'О компании' }, name: 'about' },
  { path: '/contacts', component: Contacts, meta: { title: 'Контакты' }, name: 'contacts' },
  {
    path: '/castle-list',
    component: CastleList,
    meta: { title: 'Список замков' },
    name: 'castle-list'
  },
  {
    path: '/castle-card',
    component: CastleCard,
    meta: { title: 'Карточка замка' },
    name: 'castle-card'
  },
  {
    path: '/service-card',
    component: ServiceCard,
    meta: { title: 'Карточка услуги' },
    name: 'service-card'
  },
  {
    path: '/service-list',
    component: ServiceList,
    meta: { title: 'Список услуг' },
    name: 'service-list'
  },
  {
    path: '/text-page',
    component: TextPage,
    meta: { title: 'Текстовая страница' },
    name: 'text-page'
  }
]
const router = createRouter({
  history: createWebHistory(),
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
  }
})

router.beforeEach((to, from, next) => {
  // console.log(to)
  document.title = to.meta.title
  next()
})

export { router }
