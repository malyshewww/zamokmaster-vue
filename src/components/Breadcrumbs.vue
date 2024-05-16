<template lang="pug">
	.breadcrumbs
		nav.breadcrumbs__navigation
			ul.breadcrumbs__list 
				li.breadcrumbs__item
					router-link(to="/").breadcrumbs__link Главная
				li.breadcrumbs__item {{ pageTitle }}
</template>

<script setup>
const props = defineProps(['pageTitle'])
</script>
