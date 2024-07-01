import { createMetaManager } from 'vue-meta'
import { createApp } from './main.js'
import { createHead } from '@vueuse/head'

const { app, router } = createApp()

const head = createHead()

// const allowCrossDomain = function (req, res, next) {
//   res.header('Access-Control-Allow-Origin', '*')
//   res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
//   res.header('Access-Control-Allow-Headers', 'Content-Type')
//   next()
// }

app.use(head).use(router).use(createMetaManager())
router.isReady().then(() => {
  app.mount('#app')
  console.log('hydrated')
})
// await router.isReady()

// router.isReady().then(() => {
//   app.mount('#app')
// })
