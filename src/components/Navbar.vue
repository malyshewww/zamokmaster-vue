<template lang="pug">
	nav 
		ul.menu__list
			li.menu__item
				router-link.route(to="/") Главная
			li.menu__item.menu__item--extended(:class="[isShow ? 'active' : '']")
				router-link(to="/service-list" @click.native="openSubMenu($event)") Услуги
				.menu__sub-list(:style="myStyles")
					ul
						li 
							router-link.route(to="#") Вскрытие дверей
						li
							router-link.route(to="#") Вскрытие сейфов
						li
							router-link.route(to="#") Вскрытие авто
						li
							router-link.route(to="#") Установка замков
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
    }
  },
  computed: {
    myStyles() {
      return {
        'max-height': `${this.isShow ? this.$el.querySelector('.menu__sub-list')?.scrollHeight : this.maxHeight}px`
      }
    }
  }
}
</script>

<style lang="scss"></style>
