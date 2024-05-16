<template lang="pug">
	header.header(ref="header" @click="onChangeCity")
		.container
			.header__body 
				router-link(to="/" @click="closeMenu").header__logo
					picture 
						source(:srcset="`./images/icons/logo-pc.svg`" media="(min-width: 767.98px)")
						source(:srcset="`./images/icons/logo-mobile.svg`" media="(min-width: 300px)")
						img(:src="`./images/icons/logo-pc.svg`", alt="логотип")
				.header__menu.menu(@click="closeMenu")
					.menu__body(@click.stop)
						Navbar
				.header__actions
					HeaderLocation(:isHidden="isHidden" @onChangeCity="newCity($event)" :defaultCity.sync="defaultCity")
					button(type="button" @click="openMenu").header__burger
						span
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Navbar from '../components/Navbar.vue'
import HeaderLocation from '../components/HeaderLocation.vue'

const props = defineProps(['defaultCity'])
const emit = defineEmits(['onChangeCity'])

const isHidden = ref(false)
const currScroll = ref(null)
const da = ref(null)
const header = ref()

const openMenu = () => {
  document.body.classList.toggle('menu-open')
  document.body.classList.toggle('lock')
}
const closeMenu = () => {
  document.body.classList.contains('menu-open') && document.body.classList.remove('menu-open')
  document.body.classList.contains('lock') && document.body.classList.remove('lock')
}
const stickyHeader = () => {
  if (typeof window !== 'undefined') {
    currScroll.value = window.scrollY
    let rect = header.value.getBoundingClientRect()
    document.addEventListener('scroll', () => {
      if (
        currScroll.value <= window.scrollY &&
        window.scrollY > 0 &&
        window.scrollY > rect.height
      ) {
        if (!isHidden.value) {
          header.value.classList.add('hide')
          isHidden.value = true
        }
      } else {
        if (isHidden.value) {
          header.value.classList.remove('hide')
          isHidden.value = false
        }
      }
      currScroll.value = window.scrollY
    })
  }
}
const newCity = (city) => {
  emit('onChangeCity', city)
}
onMounted(() => {
  stickyHeader()
})
</script>
