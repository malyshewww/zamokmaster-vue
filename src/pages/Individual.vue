<template lang="pug">
	.page.about
		.main__top.top-main
			.container
				Breadcrumbs(pageTitle="Физическим лицам")
				.top-main__content 
					h1.top-main__title.page-title Физическим лицам
</template>
<script setup>
import { computed } from 'vue'
import Breadcrumbs from '../components/Breadcrumbs.vue'

import { useRoute } from 'vue-router'
import { useHead } from '@vueuse/head'

const route = useRoute()
const title = computed(() => route.meta.title)

useHead({
  title: title.value,
  meta: [
    {
      name: 'description',
      content: `Описание на странице ${title.value}`
    }
  ]
})
</script>
