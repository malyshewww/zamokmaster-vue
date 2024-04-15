<template lang="pug">
	.wrapper
		header.header 
			.container
				.header__body 
					a(href="#").header__logo
						picture 
							source(srcset="../../images/icons/logo-pc.svg" media="(min-width: 767.98px)")
							source(srcset="../../images/icons/logo-mobile.svg" media="(min-width: 300px)")
							img(src="../../images/icons/logo-pc.svg", alt="логотип")
					.header__menu.menu
						Navbar
					.header__location 
						| Санкт-Петербург
		main.main
			router-view
		footer.footer
			| footer
</template>
<script setup>
import Navbar from '../components/Navbar.vue'
</script>
