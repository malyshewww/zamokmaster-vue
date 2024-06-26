import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'
import postCssSortMediaQueries from 'postcss-sort-media-queries'
import autoprefixer from 'autoprefixer'
import VitePluginSsh from 'vite-plugin-ssh'
import vuePugPlugin from 'vue-pug-plugin'

import { visualizer } from 'rollup-plugin-visualizer'

import * as nodePath from 'path'
const repositoryName = nodePath.basename(nodePath.resolve())

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    postcss: {
      plugins: [
        postCssSortMediaQueries({ sort: 'desktop-first' }),
        autoprefixer({
          overrideBrowserslist: ['last 3 versions', 'ie >= 10']
        })
      ]
    }
    // preprocessorOptions: {
    //   scss: {
    //     additionalData: `@import "@/assets/scss/vase/variables.scss";`
    //   }
    // }
  },
  plugins: [
    vue(),
    vueJsx(),
    ViteImageOptimizer({
      jpg: {
        quality: 80
      },
      jpeg: {
        quality: 80
      }
    })
    //плагин не умеет создавать на сервере папку проекта - нужно создать папку ручками и указать путь до нее в remotePath
    // VitePluginSsh.default({
    //   host: '94.241.139.120',
    //   port: 22,
    //   username: 'zamokmaster',
    //   password: 'OoCyoAbLU87G4lykE5AG',
    //   localPath: 'dist',
    //   remotePath: `app/zamokmaster/dist`
    // })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  // root: 'src',
  build: {
    rollupOptions: {},
    sourcemap: false,
    emptyOutDir: true,
    cssMinify: true,
    ssrManifest: true
  }
})
