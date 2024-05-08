import { createMetaManager } from 'vue-meta'
// import { createApp } from './main'
import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router.js'

const VueApp = createApp(App).use(router).use(createMetaManager())

// await router.isReady()

VueApp.mount('#app')

// const { app, router } = createApp()

// router.isReady().then(() => {
//   app.mount('#app')
// })
