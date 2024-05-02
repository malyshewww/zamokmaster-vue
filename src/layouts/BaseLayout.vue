<template lang="pug">
	.wrapper
		TheHeader(@onChangeCity="getNewCity($event)" :defaultCity="defaultCity")
		main.main
			router-view(:defaultCity="defaultCity")
		TheFooter
		Widget
		.services-mobile
			.services-mobile__body 
				router-link(to="/service-card" v-for="service in services").services-mobile__item
					.services-mobile__image 
						picture
							img(:src=`"../../images/services/mobile/service-mob-"+(service.img)+".png"`, :alt="service.title")
					.services-mobile__title {{ service.title }}
		.phone-mobile 
			.container
				.phone-mobile__body
					a(tel="+79958881086").btn.btn-phone +7 (995) 888-10-86
					FreeMasters
</template>
<script>
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
      defaultCity: 'Санкт-Петербург'
    }
  },
  methods: {
    getNewCity(city) {
      this.defaultCity = city
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
  mounted() {}
}
</script>
