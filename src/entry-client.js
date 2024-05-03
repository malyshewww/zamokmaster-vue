import './assets/scss/main.scss'
import { createMetaManager } from 'vue-meta'
import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router.js'

const VueApp = createApp(App).use(router).use(createMetaManager()) // add this line

// await router.isReady()

VueApp.mount('#app')
