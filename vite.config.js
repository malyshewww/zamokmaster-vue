import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'
import postCssSortMediaQueries from 'postcss-sort-media-queries'
import autoprefixer from 'autoprefixer'
import VitePluginSsh from 'vite-plugin-ssh'
import vuePugPlugin from 'vue-pug-plugin'

import * as nodePath from 'path'
const repositoryName = nodePath.basename(nodePath.resolve())

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        preprocessOptions: {
          // 'preprocessOptions' is passed through to the pug compiler
          plugins: [vuePugPlugin]
        }
      }
    }),
    vueJsx(),
    ViteImageOptimizer({
      jpg: {
        quality: 80
      },
      jpeg: {
        quality: 80
      }
    }),
    //плагин не умеет создавать на сервере папку проекта - нужно создать папку ручками и указать путь до нее в remotePath
    VitePluginSsh.default({
      host: 'html.webshop.ru',
      // port: 22,
      username: 'htmlshop',
      password: 'L540YD9y',
      localPath: 'dist',
      remotePath: `public_html/zamokmaster`
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    postcss: {
      plugins: [
        postCssSortMediaQueries({ sort: 'desktop-first' }),
        autoprefixer({
          overrideBrowserslist: ['last 3 versions', 'ie >= 10']
        })
      ]
    }
  }
})
