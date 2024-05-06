// Node.js utility
import path from 'path'
import fs from 'fs'
import { fileURLToPath } from 'url'

// Vite
import { createServer } from 'vite'

// Express
import express from 'express'

// eslint-disable-next-line no-undef
const isProd = process.env.NODE_ENV === 'production'

// Helpers
const __dirname = path.dirname(fileURLToPath(import.meta.url))
const resolve = (p) => path.resolve(__dirname, p)

const getIndexHTML = async () => {
  const indexHTML = isProd ? resolve('../dist/client/index.html') : resolve('../index.html')
  const html = await fs.promises.readFile(indexHTML, 'utf-8')
  return html
}

async function start() {
  const manifest = isProd
    ? JSON.parse(fs.readFileSync(resolve('../dist/client/.vite/ssr-manifest.json'), 'utf-8'))
    : null

  const app = express()
  const router = express.Router()

  let vite = null
  if (isProd) {
    app.use(express.static('dist/client', { index: false }))
  } else {
    vite = await createServer({
      // eslint-disable-next-line no-undef
      root: process.cwd(),
      server: { middlewareMode: true },
      appType: 'custom'
    })

    app.use(vite.middlewares)
  }

  // Ловим все запросы, а вообще можно продублировать тут
  // логику из src/router.js
  router.get('/*', async (req, res, next) => {
    try {
      const url = req.url
      let template = await getIndexHTML()

      let render = null
      if (isProd) {
        render = (await import('../dist/server/main-server.js')).render
      } else {
        template = await vite.transformIndexHtml(url, template)
        render = (await vite.ssrLoadModule(resolve('./main-server.js'))).render
      }

      const [appHtml, preloadLinks] = await render(url, manifest)
      const html = template
        .replace(`<!--preload-links-->`, preloadLinks)
        .replace('<!--app-html-->', appHtml)

      res.status(200).set({ 'Content-Type': 'text/html' }).end(html)
    } catch (e) {
      if (vite) {
        vite.ssrFixStacktrace(e)
      }
      next(e)
    }
  })

  // Routes
  app.use('/', router)

  app.listen(3000, () => {
    console.log('Сервер запущен')
  })
}

start()

// import fs from 'node:fs/promises'
// import express from 'express'

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
//       .replace(`<!--preload-links-->`, rendered.head ?? '')
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

// app.get('*', (req, res) => {
//   const context = { url: req.url }
//   const renderStream = renderer.renderToStream(context)
//   renderStream.once('data', () => {
//     const { title, htmlAttrs, headAttrs, bodyAttrs, link, style, script, noscript, meta } =
//       context.meta.inject()
//     res.write(`
//       <!doctype html>
//       <html data-vue-meta-server-rendered ${htmlAttrs.text()}>
//         <head ${headAttrs.text()}>
//           ${meta.text()}
//           ${title.text()}
//           ${link.text()}
//           ${style.text()}
//           ${script.text()}
//           ${noscript.text()}
//         </head>
//         <body ${bodyAttrs.text()}>
//     `)
//   })
//   renderStream.on('data', (chunk) => {
//     res.write(chunk)
//   })
//   renderStream.on('end', () => {
//     res.end(`
//           <script src="/assets/vendor.bundle.js"></script>
//           <script src="/assets/client.bundle.js"></script>
//           ${script.text({ body: true })}
//         </body>
//       </html>
//     `)
//   })
//   renderStream.on('error', (error) => {
//     res.status(500).end(`<pre>${error.stack}</pre>`)
//   })
// })
