<template lang="pug">
	nav(@click="closeMenu($event)")
		ul.menu__list
			li.menu__item
				router-link.route(to="/") Главная
			li.menu__item.menu__item--extended(:class="[isShow ? 'active' : '']")
				a(href="javascript:void();" @click.native="openSubMenu($event)") Услуги
				.menu__sub-list(:style="myStyles" ref="sub_menu")
					ul
						li 
							router-link.route(to="/castle-card") Вскрытие дверей
						li
							router-link.route(to="/castle-card") Вскрытие сейфов
						li
							router-link.route(to="/castle-card") Вскрытие авто
						li
							router-link.route(to="/castle-card") Установка замков
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

<script>
export default {
  data() {
    return {
      maxHeight: 0,
      isShow: false
    }
  },
  methods: {
    openSubMenu(e) {
      if (window.innerWidth < 1400) {
        e.preventDefault()
        this.isShow = !this.isShow
      }
    },
    closeMenu(e) {
      if (e.target.closest('li:not(.menu__item--extended) a')) {
        document.body.classList.remove('menu-open')
        document.body.classList.remove('lock')
      }
    }
  },
  computed: {
    myStyles() {
      return {
        'max-height': `${this.isShow ? this.$refs.sub_menu?.scrollHeight : this.maxHeight}px`
      }
    }
  }
}
</script>

<style lang="scss"></style>
