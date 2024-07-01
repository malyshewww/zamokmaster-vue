import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import express from 'express'
import { createServer as createViteServer } from 'vite'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
async function createServer() {
  const app = express()
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'custom'
  })
  app.use(vite.middlewares)
  app.use('*', async (req, res) => {
    const url = req.originalUrl
    console.log(url)
    try {
      let template = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8')
      template = await vite.transformIndexHtml(url, template)
      const { render } = await vite.ssrLoadModule('/src/entry-server.js')
      const appHtml = await render(url)
      console.log(appHtml)
      const html = template.replace(`<!--app-html-->`, appHtml)
      res.status(200).set({ 'Content-Type': 'text/html' }).send(html)
    } catch (e) {
      vite.ssrFixStacktrace(e)
      next(e)
    }
  })
  app.listen(5173, () => {
    console.log(`Server started at http://localhost:${5173}`)
  })
}
createServer()
