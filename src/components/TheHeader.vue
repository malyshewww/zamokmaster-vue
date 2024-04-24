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
					.menu__body
						Navbar
				.header__actions
					HeaderLocation(:isShowMenu="isShowMenu")
					button(type="button" @click="openMenu").header__burger
						span
	.overlay(@click="closeMenu")
</template>

<script>
import Navbar from '../components/Navbar.vue'
import HeaderLocation from '../components/HeaderLocation.vue'

export default {
  components: { Navbar, HeaderLocation },
  data() {
    return {}
  },
  methods: {
    openMenu() {
      document.body.classList.toggle('menu-open')
      document.body.classList.toggle('lock')
    },
    closeMenu() {
      document.body.classList.remove('menu-open')
      document.body.classList.remove('lock')
    }
  }
}
</script>
