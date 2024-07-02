import App from './App.vue'
import { createSSRApp, createApp as createVueApp } from 'vue'
import { createRouter } from './router'
import { createHead } from '@vueuse/head'
import { createPinia } from 'pinia'

export function createApp() {
  const isSSR = typeof window === 'undefined'
  const app = isSSR ? createSSRApp(App) : createVueApp(App)
  const router = createRouter()
  const head = createHead()
  const pinia = createPinia()
  return { app, router, head, pinia }
}
