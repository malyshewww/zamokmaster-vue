import '@/assets/scss/main.scss'
import { createApp } from './main'

const { app, router, head, pinia } = createApp()

app.use(head)
app.use(router)
app.use(pinia)

router.isReady().then(() => {
  app.mount('#app')
})
