// Node.js utility
import path from 'node:path'
import fs from 'node:fs'
import { fileURLToPath } from 'node:url'
// Vite
// import { createServer as createViteServer } from 'vite'
import { createServer } from 'vite'
// Express
import express from 'express'

// // eslint-disable-next-line no-undef
const isProd = process.env.NODE_ENV === 'production'
// Helpers
const __dirname = path.dirname(fileURLToPath(import.meta.url))
const resolve = (p) => path.resolve(__dirname, p)

const server = express()

const getIndexHTML = async () => {
  const indexHTML = isProd ? resolve('dist/client/index.html') : resolve('./index.html')
  const html = await fs.promises.readFile(indexHTML, 'utf-8')
  return html
}

async function start() {
  const manifest = isProd
    ? JSON.parse(fs.readFileSync(resolve('dist/client/.vite/ssr-manifest.json'), 'utf-8'))
    : null
  const router = express.Router()

  let vite = null
  if (isProd) {
    server.use(express.static('dist/client', { index: false }))
  } else {
    vite = await createServer({
      root: process.cwd(),
      server: { middlewareMode: true },
      appType: 'custom'
    })
    server.use(vite.middlewares)
  }
  router.get('/*', async (req, res, next) => {
    try {
      const url = req.url
      let template = await getIndexHTML()
      let render = null
      if (isProd) {
        render = (await import('dist/server/entry-server.js')).render
      } else {
        template = await vite.transformIndexHtml(url, template)
        render = (await vite.ssrLoadModule(resolve('src/entry-server.js'))).render
      }
      const [appHtml, preloadLinks] = await render(url, manifest)
      const html = template
        .replace('<!--app-html-->', appHtml)
        .replace('<!--preload-links-->', preloadLinks)
      res.status(200).set({ 'Content-Type': 'text/html' }).end(html)
    } catch (e) {
      vite && vite.ssrFixStacktrace(e)
      next(e)
      res.status(500).end(e.stack)
    }
  })
  // Routes
  server.use('/', router)
  server.listen(5173, () => {
    console.log('Сервер запущен')
  })
}

start()

// // Constants
// const isProduction = process.env.NODE_ENV === 'production'
// const port = process.env.PORT || 5173
// const base = process.env.BASE || '/'

// // Cached production assets
// const templateHtml = isProduction ? await fs.readFile('./dist/client/index.html', 'utf-8') : ''
// const ssrManifest = isProduction
//   ? await fs.readFile('./dist/client/.vite/ssr-manifest.json', 'utf-8')
//   : undefined

// // Create http server
// const app = express()

// // Add Vite or respective production middlewares
// let vite
// if (!isProduction) {
//   const { createServer } = await import('vite')
//   vite = await createServer({
//     server: { middlewareMode: true },
//     appType: 'custom',
//     base
//   })
//   app.use(vite.middlewares)
// } else {
//   const compression = (await import('compression')).default
//   const sirv = (await import('sirv')).default
//   app.use(compression())
//   app.use(base, sirv('./dist/client', { extensions: [] }))
// }

// // Serve HTML
// app.use('*', async (req, res) => {
//   try {
//     const url = req.originalUrl.replace(base, '')

//     let template
//     let render
//     if (!isProduction) {
//       // Always read fresh template in development
//       template = await fs.readFile('./index.html', 'utf-8')
//       template = await vite.transformIndexHtml(url, template)
//       render = (await vite.ssrLoadModule('/src/entry-server.js')).render
//     } else {
//       template = templateHtml
//       render = (await import('./dist/server/entry-server.js')).render
//     }

//     const rendered = await render(url, ssrManifest)

//     const html = template
//       .replace(`<!--app-head-->`, rendered.head ?? '')
//       .replace(`<!--app-html-->`, rendered.html ?? '')

//     res.status(200).set({ 'Content-Type': 'text/html' }).send(html)
//   } catch (e) {
//     vite?.ssrFixStacktrace(e)
//     console.log(e.stack)
//     res.status(500).end(e.stack)
//   }
// })

// // Start http server
// app.listen(port, () => {
//   console.log(`Server started at http://localhost:${port}`)
// })
