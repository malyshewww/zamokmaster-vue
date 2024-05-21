<template lang="pug">
	nav(@click="closeMenu($event)")
		ul.menu__list
			li.menu__item
				router-link.route(to="/") Главная
			li.menu__item.menu__item--extended(:class="{active: isShow}")
				router-link(to="/service-list" @mouseenter="openSubMenu($event)" @mouseleave="closeSubMenu($event)").link-pc Услуги
				a(href="javascript:void(0);" @click.prevent="openSubMenuMobile($event)" ).link-touch Услуги
				.menu__sub-list(:style="myStyles" ref="subMenu")
					ul
						li 
							router-link.route(to="/service-list/0") Вскрытие дверей
						li
							router-link.route(to="/service-list/1") Вскрытие сейфов
						li
							router-link.route(to="/service-list/2") Вскрытие авто
						li
							router-link.route(to="/service-list/3") Установка замков
			li.menu__item
				router-link.route(to="/about") О компании
			li.menu__item
				router-link.route(to="/castle-list") Список замков
			li.menu__item
				router-link.route(to="/legal") Юридическим лицам
			li.menu__item
				router-link.route(to="/individual") Физическим лицам
			li.menu__item
				router-link.route(to="/contacts") Контакты
	.header__contacts.contacts-header
		a(href="tel:+79958881086").contacts-header__link.contacts-header__link--phone +7 (995) 888-10-86
		a(href="mailto:hello@zamokmaster.ru").contacts-header__link.contacts-header__link--email hello@zamokmaster.ru
</template>

<script setup>
import { ref, computed } from 'vue'

const maxHeight = ref(0)
const isShow = ref(false)
const subMenu = ref()
const openSubMenuMobile = (e) => {
  e.preventDefault()
  isShow.value = !isShow.value
}
const openSubMenu = (e) => {
  if (window.innerWidth < 1400 && window.innerWidth > 1024) {
    isShow.value = !isShow.value
  }
}
const closeSubMenu = (e) => {
  if (window.innerWidth < 1400 && window.innerWidth > 1024) {
    isShow.value = !isShow.value
  }
}
const closeMenu = (e) => {
  if (e.target.closest('li:not(.menu__item--extended) a')) {
    document.body.classList.remove('menu-open')
    document.body.classList.remove('lock')
  }
}
const myStyles = computed(() => {
  return {
    'max-height': `${isShow.value ? subMenu.value?.scrollHeight : maxHeight.value}px`
  }
})
</script>
