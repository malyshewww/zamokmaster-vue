import { createSSRApp } from 'vue'
import App from './App.vue'
export function createApp() {
  const app = createSSRApp(App)
  return { app }
}

// import './assets/scss/main.scss'

// import { createApp } from 'vue'
// import App from './App.vue'
// import { router } from './router.js'

// const VueApp = createApp(App)

// VueApp.use(router)

// VueApp.mount('#app')
