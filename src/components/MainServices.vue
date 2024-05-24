<template lang="pug">
	section.services 
		.container
			.heading 
				h2.heading__title Услуги
			.services__body 
				router-link(:to="`/service-list/${index}`" v-for="(service, index) in services").services__item.item-services
					.item-services__content
						.item-services__title {{ service.title }}
						.item-services__bottom
							span.item-services__icon 
								picture
									source(:srcset=`'/images/services/services-'+service.img+'.png'` media="(min-width: 767.98px)")
									source(:srcset=`'/images/services/services-'+service.img+'-mob.png'` media="(min-width: 300px)")
									img(:src=`'/images/services/services-'+service.img+'.png'`, :alt="service.title" loading="lazy")
</template>

<script setup>
import { onMounted } from 'vue'
import ScrollReveal from 'scrollreveal'
import obj from '../data.js'

const { services } = obj

const animation = () => {
  ScrollReveal({
    reset: false,
    duration: 1500,
    distance: '30px',
    mobile: false
  })
  ScrollReveal().reveal('.services__item', {
    origin: 'top',
    opacity: 0.2,
    scale: 0.5,
    delay: 0.2
  })
}
onMounted(() => {
  animation()
})
</script>
