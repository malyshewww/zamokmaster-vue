<template lang="pug">
  Layout
</template>
<script setup>
import ajax from './ajax.js'
import '@/assets/scss/main.scss'
import { reactive, computed, onMounted } from 'vue'
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

const getData = async () => {
  fetch('http://zamokmaster.localhost/wsapi/packs/maininfo')
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
    })
  try {
    const axios = await ajax()
    const response = await axios.get('/wsapi/packs/maininfo')
    console.log(response)
  } catch (e) {
    console.log('MainInfo Error: ' + e)
  }
}

onMounted(() => {
  getData()
})
</script>
