import { createMemoryHistory, createRouter, createWebHistory } from 'vue-router'

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
    path: '/castle-list/:id',
    component: () => import('@/pages/CastleCard.vue'),
    meta: { title: 'Карточка замка' },
    name: 'castle-detail',
    props: true
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
    path: '/service-list/:id',
    component: () => import('@/pages/ServiceCard.vue'),
    meta: { title: 'Карточка услуги' },
    name: 'service-detail',
    props: true
  },
  {
    path: '/text-page',
    component: () => import('@/pages/TextPage.vue'),
    meta: { title: 'Текстовая страница' },
    name: 'text-page'
  },
  {
    path: '/legal',
    component: () => import('@/pages/Legal.vue'),
    meta: { title: 'Юридическим лицам' },
    name: 'legal'
  },
  {
    path: '/individual',
    component: () => import('@/pages/Individual.vue'),
    meta: { title: 'Физическим лицам' },
    name: 'individual'
  },
  {
    // path: '/:pathMatch(.*)*',
    path: '/:catchAll(.*)*',
    redirect: { name: 'home' }
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
  // beforeEach: function (to, from, next) {
  //   document.title = to.meta.title
  //   next()
  // }
})

router.beforeEach((to, from, next) => {
  document.title = to.meta?.title ?? 'Замокмастер'
  next()
})

export default router
