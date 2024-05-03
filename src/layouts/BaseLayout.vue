<template lang="pug">
	.wrapper
		TheHeader(@onChangeCity="getNewCity($event)" :defaultCity="defaultCity")
		main.main
			router-view(:defaultCity="defaultCity" :declensionCity="declensionCity")
		TheFooter
		Widget
		.services-mobile
			.services-mobile__body 
				router-link(to="/service-card" v-for="service in services").services-mobile__item
					.services-mobile__image 
						picture
							img(:src=`"./images/services/mobile/service-mob-"+(service.img)+".png"`, :alt="service.title" loading="lazy")
					.services-mobile__title {{ service.title }}
		.phone-mobile 
			.container
				.phone-mobile__body
					a(tel="+79958881086").btn.btn-phone +7 (995) 888-10-86
					FreeMasters
</template>
<script>
import { cityIn, cityFrom, cityTo } from 'lvovich'

import obj from '../data.js'
import TheHeader from '../components/TheHeader.vue'
import TheFooter from '../components/TheFooter.vue'
import FreeMasters from '../components/FreeMasters.vue'
import Widget from '../components/Widget.vue'

const { services } = obj

export default {
  components: { TheHeader, TheFooter, FreeMasters, Widget },
  data() {
    return {
      services,
      defaultCity: 'Санкт-Петербург',
      declensionCity: ''
    }
  },
  methods: {
    getNewCity(city) {
      this.defaultCity = city
      this.getStorageCity()
    },
    getCityStorage() {
      // if (typeof window !== 'undefined') {
      //   if (localStorage.getItem('city') !== null) {
      //     return localStorage.getItem('city')
      //   } else {
      //     return this.defaultCity
      //   }
      // }
      let c = this.getCookie()
      if (c.city) {
        return c.city
      } else {
        return this.defaultCity
      }
    },
    setDeclensionCity() {
      return cityIn(this.getCityStorage())
    },
    getStorageCity() {
      this.declensionCity = this.setDeclensionCity()
    },
    getCookie() {
      return document.cookie.split('; ').reduce((acc, item) => {
        const [name, value] = item.split('=')
        acc[name] = value
        return acc
      }, {})
    }
  },
  watch: {
    '$route.name'() {
      if (this.$route.name == 'home') {
        document.body.classList.add('home')
      } else {
        document.body.classList.remove('home')
      }
    }
  },
  updated() {},
  mounted() {
    window.addEventListener('load', () => {
      this.getStorageCity()
    })
  }
}
</script>
