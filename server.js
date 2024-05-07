// Node.js utility
import path from 'path'
import fs from 'fs'
import { fileURLToPath } from 'url'
// Vite
// import { createServer as createViteServer } from 'vite'
import { createServer } from 'vite'
// Express
import express from 'express'
// eslint-disable-next-line no-undef
const isProd = process.env.NODE_ENV === 'production'

// Helpers
const __dirname = path.dirname(fileURLToPath(import.meta.url))
const resolve = (p) => path.resolve(__dirname, p)

const getIndexHTML = async () => {
  const indexHTML = isProd ? resolve('../dist/client/index.html') : resolve('/index.html')
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
        render = (await vite.ssrLoadModule(resolve('../src/main-server.js'))).render
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

// async function createServer() {
//   const manifest = isProd
//     ? JSON.parse(fs.readFileSync(resolve('../dist/client/.vite/ssr-manifest.json'), 'utf-8'))
//     : null
//   const app = express()
//   // Create Vite server in middleware mode and configure the app type as
//   // 'custom', disabling Vite's own HTML serving logic so parent server
//   // can take control
//   const vite = await createViteServer({
//     server: { middlewareMode: true },
//     appType: 'custom'
//   })
//   // Use vite's connect instance as middleware. If you use your own
//   // express router (express.Router()), you should use router.use
//   // When the server restarts (for example after the user modifies
//   // vite.config.js), `vite.middlewares` is still going to be the same
//   // reference (with a new internal stack of Vite and plugin-injected
//   // middlewares). The following is valid even after restarts.
//   app.use(vite.middlewares)
//   app.use('*', async (req, res, next) => {
//     const url = req.originalUrl
//     try {
//       // 1. Read index.html
//       let template = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8')
//       // 2. Apply Vite HTML transforms. This injects the Vite HMR client,
//       //    and also applies HTML transforms from Vite plugins, e.g. global
//       //    preambles from @vitejs/plugin-react
//       template = await vite.transformIndexHtml(url, template)
//       // 3. Load the server entry. ssrLoadModule automatically transforms
//       //    ESM source code to be usable in Node.js! There is no bundling
//       //    required, and provides efficient invalidation similar to HMR.
//       const { render } = await vite.ssrLoadModule('/src/entry-server.js')
//       // 4. render the app HTML. This assumes entry-server.js's exported
//       //     `render` function calls appropriate framework SSR APIs,
//       //    e.g. ReactDOMServer.renderToString()
//       const [appHtml, preloadLinks] = await render(url)
//       // 5. Inject the app-rendered HTML into the template.
//       const html = template
//         .replace(`<!--preload-links-->`, preloadLinks)
//         .replace('<!--app-html-->', appHtml)
//       // 6. Send the rendered HTML back.
//       res.status(200).set({ 'Content-Type': 'text/html' }).end(html)
//     } catch (e) {
//       // If an error is caught, let Vite fix the stack trace so it maps back
//       // to your actual source code.
//       vite.ssrFixStacktrace(e)
//       next(e)
//     }
//   })
//   app.listen(5173, () => {
//     console.log('Сервер запущен')
//   })
// }

// createServer()
