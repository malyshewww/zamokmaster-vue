<template lang="pug">
	.services-mobile
		.services-mobile__body
			router-link( v-for="service in services" :to="`${service.url}`" :key="service.id").services-mobile__item
				.services-mobile__image 
					picture
						img(:src="`${config.url}${service.field_logo[0].markup}`", :alt="service.title" loading="lazy")
				.services-mobile__title {{ service.title }}
</template>

<script setup>
import config from '@/config'

defineProps({
  services: {}
})
</script>
