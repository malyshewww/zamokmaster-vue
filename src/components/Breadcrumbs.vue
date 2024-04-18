<template lang="pug">
	.breadcrumbs
		nav.breadcrumbs__navigation
			ul.breadcrumbs__list 
				li.breadcrumbs__item
					router-link(to="/home").breadcrumbs__link Главная
				li.breadcrumbs__item {{ pageTitle }}
</template>

<script>
export default {
  props: ['pageTitle']
}
</script>
