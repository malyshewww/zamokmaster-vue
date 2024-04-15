<template lang="pug">
	nav 
		ul.menu__list
			li.menu__item
				router-link.route(to="/") Главная
			li.menu__item.menu__item--extended
				router-link.route(to="/services") Услуги
				.menu__sub-list
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

<script setup></script>

<style lang="scss"></style>
