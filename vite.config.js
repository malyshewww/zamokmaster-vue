import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'
import postCssSortMediaQueries from 'postcss-sort-media-queries'
import autoprefixer from 'autoprefixer'
import VitePluginSsh from 'vite-plugin-ssh'
import vuePugPlugin from 'vue-pug-plugin'

import { visualizer } from 'rollup-plugin-visualizer'

import * as nodePath from 'path'
const repositoryName = nodePath.basename(nodePath.resolve())

export default defineConfig({
  server: {
    port: 3001,
    host: 'http://zamokmaster.localhost'
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
    // preprocessorOptions: {
    //   scss: {
    //     additionalData: `@import "@/assets/scss/vase/variables.scss";`
    //   }
    // }
  },
  plugins: [
    vue(),
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
  define: {
    'process.env': process.env
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
