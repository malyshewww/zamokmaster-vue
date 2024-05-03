import { renderToString } from 'vue/server-renderer'
import { createApp } from './main'

const { app } = createApp()

export async function render() {
  const ctx = {}
  const html = await renderToString(app, ctx)
  return { html }
}

const router = app.$router
const meta = app.$meta() // here

export default (context) => {
  router.push(context.url)
  context.meta = meta // and here
  return app
}
