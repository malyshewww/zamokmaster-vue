<template lang="pug">
	.wrapper
		TheHeader
		main.main
			router-view
		TheFooter
		.widget-call
		.services-mobile
			.services-mobile__body 
				.services-mobile__item(v-for="service in services")
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

const { services } = obj

export default {
  components: { TheHeader, TheFooter, FreeMasters },
  data() {
    return {
      services,
      showServices: false,
      showPhone: false
    }
  },
  methods: {
    randomInteger(min, max) {
      // случайное число от min до (max+1)
      const randomNumbers = Math.floor(Math.random() * (max - min) + min)
      //   this.freeMasterStart = min + Math.random() * (max + 1 - min)
      //   Math.floor(Math.random() * (max - min + 1)) + min
      return randomNumbers
    },
    getRoute() {
      console.log(this.$route)
    }
  },
  mounted() {
    this.getRoute()
  },
  watch: {
    '$route.name'() {
      if (this.$route.name == 'home') {
        document.body.classList.add('home')
      } else {
        document.body.classList.remove('home')
      }
    }
  }
}
</script>
