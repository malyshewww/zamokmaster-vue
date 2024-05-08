import { createMetaManager } from 'vue-meta'
import { createApp } from './main'

const { app, router } = createApp()

app.use(router).use(createMetaManager())

// await router.isReady()

app.mount('#app')

// router.isReady().then(() => {
//   app.mount('#app')
// })
