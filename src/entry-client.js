import { createMetaManager } from 'vue-meta'
import { createApp } from './main.js'
import { createHead } from '@vueuse/head'

const { app, router } = createApp()

const head = createHead()

app.use(head).use(router).use(createMetaManager())

// await router.isReady()

app.mount('#app')

// router.isReady().then(() => {
//   app.mount('#app')
// })
