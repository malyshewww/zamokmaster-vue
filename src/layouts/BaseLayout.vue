<template lang="pug">
	.wrapper(ref="wrapper" id="wrapper")
		TheHeader(@onChangeCity="getNewCity($event)" :defaultCity="defaultCity")
		main.main
			router-view(:defaultCity="defaultCity" :declensionCity="declensionCity" :mainInfo="dataBase")
		TheFooter
		Widget
		.phone-mobile 
			.container
				.phone-mobile__body
					a(href="tel:79958881086").btn.btn-phone +7 (995) 888-10-86
					FreeMasters
		ModalNotice
</template>
<script setup>
import { ref, onMounted, watchEffect, reactive, computed } from 'vue'
import { cityIn, cityFrom, cityTo } from 'lvovich'

import obj from '../data.js'
import TheHeader from '../components/TheHeader.vue'
import TheFooter from '../components/TheFooter.vue'
import FreeMasters from '../components/FreeMasters.vue'
import Widget from '../components/Widget.vue'
import ModalNotice from '../components/Modals/ModalNotice.vue'

import { useRoute } from 'vue-router'

import ajax from '@/ajax.js'

const route = useRoute()
const { services } = obj
const defaultCity = ref('Санкт-Петербург')
const declensionCity = ref('')

const dataBase = reactive({
  data: {},
  meta: {},
  links: {}
})

const getData = async () => {
  try {
    const axios = await ajax()
    const { data } = await axios.get('/wsapi/packs/maininfo')
    dataBase.data = data.data
    dataBase.meta = data.meta
    dataBase.links = data.links
  } catch (e) {
    console.log('maininfo:' + e)
  }
}

const getNewCity = (city) => {
  defaultCity.value = city
  getStorageCity()
}
const getCityStorage = () => {
  // if (typeof window !== 'undefined') {
  //   if (localStorage.getItem('city') !== null) {
  //     return localStorage.getItem('city')
  //   } else {
  //     return this.defaultCity
  //   }
  // }
  if (typeof window !== 'undefined') {
    let c = getCookie()
    if (c.city) {
      return c.city
    } else {
      return defaultCity.value
    }
  }
}
const setDeclensionCity = () => {
  return cityIn(getCityStorage())
}

const getStorageCity = () => {
  const firstSymbols = getCityStorage().substring(0, 2)
  declensionCity.value =
    firstSymbols.toLowerCase() == 'вл' ? `во ${setDeclensionCity()}` : `в ${setDeclensionCity()}`
}
const getCookie = () => {
  if (typeof window !== 'undefined') {
    return document.cookie.split('; ').reduce((acc, item) => {
      const [name, value] = item.split('=')
      acc[name] = value
      return acc
    }, {})
  }
}
watchEffect(() => {
  if (typeof window !== 'undefined') {
    route.name == 'home'
      ? document.body.classList.add('home')
      : document.body.classList.remove('home')
  }
})
onMounted(() => {
  window.addEventListener('load', () => {
    const pageWrapper = document.querySelectorAll('.wrapper')
    ;[...pageWrapper].forEach((wrapper) => {
      if (wrapper.getAttribute('id')) return
      wrapper.remove()
    })
    getStorageCity()
  })
  getData()
})
</script>
<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.25s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
}
</style>
