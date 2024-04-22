<template lang="pug">
	header.header 
		.container
			.header__body 
				router-link(to="/").header__logo
					picture 
						source(srcset="../../images/icons/logo-pc.svg" media="(min-width: 767.98px)")
						source(srcset="../../images/icons/logo-mobile.svg" media="(min-width: 300px)")
						img(src="../../images/icons/logo-pc.svg", alt="логотип")
				.header__menu.menu
					Navbar
				HeaderLocation
</template>

<script>
import Navbar from '../components/Navbar.vue'
import HeaderLocation from '../components/HeaderLocation.vue'

export default {
  components: { Navbar, HeaderLocation },
  data() {
    return {}
  }
}
</script>
