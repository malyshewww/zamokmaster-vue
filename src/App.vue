<template lang="pug">
  Layout
</template>
<script setup>
import '@/assets/scss/main.scss'
import { reactive, computed } from 'vue'
import { useHead } from '@vueuse/head'
import Layout from './layouts/BaseLayout.vue'

const siteData = reactive({
  title: 'Замокмастер',
  description: 'Описание Замокмастер',
  keywords: 'ключевые слова'
})
useHead({
  title: computed(() => siteData.title),
  meta: [
    {
      name: 'description',
      content: computed(() => siteData.description)
    },
    {
      name: 'keywords',
      content: computed(() => siteData.keywords)
    }
  ]
})
</script>
