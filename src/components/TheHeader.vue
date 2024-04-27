<template lang="pug">
	header.header(ref="header" @click="onChangeCity")
		.container
			.header__body 
				router-link(to="/").header__logo
					picture 
						source(srcset="../assets/images/icons/logo-pc.svg" media="(min-width: 767.98px)")
						source(srcset="../assets/images/icons/logo-mobile.svg" media="(min-width: 300px)")
						img(src="../assets/images/icons/logo-pc.svg", alt="логотип")
				.header__menu.menu
					.menu__body
						Navbar
				.header__actions
					HeaderLocation(:isHidden="isHidden" @onChangeCity="newCity($event)" :defaultCity.sync="defaultCity")
					button(type="button" @click="openMenu").header__burger
						span
	.overlay(@click="closeMenu")
</template>

<script>
import Navbar from '../components/Navbar.vue'
import HeaderLocation from '../components/HeaderLocation.vue'

export default {
  components: { Navbar, HeaderLocation },
  emits: ['onChangeCity'],
  props: ['defaultCity'],
  data() {
    return {
      isHidden: false
    }
  },
  methods: {
    openMenu() {
      document.body.classList.toggle('menu-open')
      document.body.classList.toggle('lock')
    },
    closeMenu() {
      document.body.classList.remove('menu-open')
      document.body.classList.remove('lock')
    },
    stickyHeader() {
      let currScroll = window.scrollY
      document.addEventListener('scroll', () => {
        if (currScroll <= window.scrollY && window.scrollY > 0) {
          if (!this.isHidden) {
            this.$refs.header.classList.add('hide')
            this.isHidden = true
          }
        } else {
          if (this.isHidden) {
            this.$refs.header.classList.remove('hide')
            this.isHidden = false
          }
        }
        currScroll = window.scrollY
      })
    },
    newCity(city) {
      this.$emit('onChangeCity', city)
    }
  },
  computed: {
    // localCity: {
    //   get() {
    //     return this.defaultCity
    //   },
    //   set(localCity) {
    //     this.$emit('update:onChangeCity', localCity)
    //   }
    // }
  },
  mounted() {
    this.stickyHeader()
  }
}
</script>
