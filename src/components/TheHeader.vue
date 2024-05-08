<template lang="pug">
	header.header(ref="header" @click="onChangeCity")
		.container
			.header__body 
				router-link(to="/" @click="closeMenu").header__logo
					picture 
						source(:srcset="`./images/icons/logo-pc.svg`" media="(min-width: 767.98px)")
						source(:srcset="`./images/icons/logo-mobile.svg`" media="(min-width: 300px)")
						img(:src="`./images/icons/logo-pc.svg`", alt="логотип")
				.header__menu.menu(ref="header_menu" @click="closeMenu")
					.menu__body(@click.stop)
						Navbar
				.header__actions
					HeaderLocation(:isHidden="isHidden" @onChangeCity="newCity($event)" :defaultCity.sync="defaultCity")
					button(type="button" @click="openMenu").header__burger
						span
	.overlay(@click="closeMenu" data-da=".wrapper, 1400, 1")
</template>

<script>
import Navbar from '../components/Navbar.vue'
import HeaderLocation from '../components/HeaderLocation.vue'

import DynamicAdapt from '../utils/dynamic_adapt.js'

export default {
  components: { Navbar, HeaderLocation },
  emits: ['onChangeCity'],
  props: ['defaultCity'],
  data() {
    return {
      isHidden: false,
      currScroll: null,
      da: null
    }
  },
  methods: {
    openMenu() {
      document.body.classList.toggle('menu-open')
      document.body.classList.toggle('lock')
    },
    closeMenu() {
      document.body.classList.contains('menu-open') && document.body.classList.remove('menu-open')
      document.body.classList.contains('lock') && document.body.classList.remove('lock')
    },
    stickyHeader() {
      if (typeof window !== 'undefined') {
        this.currScroll = window.scrollY
        let rect = this.$refs.header.getBoundingClientRect()
        document.addEventListener('scroll', () => {
          if (
            this.currScroll <= window.scrollY &&
            window.scrollY > 0 &&
            window.scrollY > rect.height
          ) {
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
          this.currScroll = window.scrollY
        })
      }
    },
    newCity(city) {
      this.$emit('onChangeCity', city)
    },
    initDynamicAdapt() {
      this.da = new DynamicAdapt('max')
      this.da.init()
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
    this.initDynamicAdapt()
    // this.teleportMenu()
  }
}
</script>
