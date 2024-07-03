<template lang="pug">
	section.services 
		.container
			.heading 
				h2.heading__title Услуги
			.services__body 
				router-link(ref="serviceItem" v-for="(service, index) in services" :key="service.id" :to="`${service.url}`" ).services__item.item-services
					.item-services__content
						.item-services__title {{ service.title }}
						.item-services__bottom
							span.item-services__icon 
								picture
									source(:srcset="`${config.url}${service.field_logo[0].markup}`" media="(min-width: 767.98px)")
									source(:srcset="`${config.url}${service.field_logo[0].markup}`" media="(min-width: 300px)")
									img(:src="`${config.url}${service.field_logo[0].markup}`", :alt="service.title" loading="lazy" :width="service.field_logo[0].width" :height="service.field_logo[0].height")
</template>

<script setup>
import { ref, onMounted } from 'vue'
import ScrollReveal from 'scrollreveal'
import config from '@/config'

const serviceItem = ref('')

defineProps({
  services: {}
})

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
