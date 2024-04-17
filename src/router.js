import { createRouter, createWebHistory } from 'vue-router'

import Home from './pages/Home.vue'
import About from './pages/About.vue'
import Contacts from './pages/Contacts.vue'
import CastleList from './pages/CastleList.vue'
import CastleCard from './pages/CastleCard.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/contacts', component: Contacts },
  { path: '/castle-list', component: CastleList },
  { path: '/castle-card', component: CastleCard }
]
export const router = createRouter({
  history: createWebHistory(),
  routes
})
