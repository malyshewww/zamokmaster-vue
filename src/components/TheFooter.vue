<template lang="pug">
	footer.footer 
		.footer__main.main-footer
			.container 
				.main-footer__body
					.menu-footer__actions 
						router-link(to="/").menu-footer__logo
							picture 
								source(:srcset="`/images/icons/footer-logo.svg`" media="(min-width: 767.98px)")
								source(:srcset="`/images/icons/footer-logo-mob.svg`" media="(min-width: 300px)")
								img(:src="`/images/icons/logo-pc.svg`", alt="логотип")
						button(type="button" @click="toggleModal").btn #[span Заказать звонок]
					.main-footer__menu.menu-footer(data-spollers)
						.menu-footer__column(v-for="item in menuFooter")
							.menu-footer__caption(data-spoller) {{ item.caption }}
							.menu-footer__content
								ul.menu-footer__list(ref="menu_list")
									li(v-for="el in item.list")
										router-link(:to="`${el.path}`") {{ el.title }}
						.menu-footer__column.menu-footer-contacts
							.menu-footer__caption(data-spoller) Контакты
							.menu-footer__content
								ul.menu-footer__list
									li 
										a(href="tel:+79958881086").menu-footer__phone +7 (995) 888-10-86
									li 
										a(href="mailto:hello@zamokmaster.ru").menu-footer__email hello@zamokmaster.ru
		.footer__bottom.bottom-footer
			.container 
				.bottom-footer__body 
					.footer__copy ©Замокмастер 2024
					router-link(to="/text-page" target="_blank").footer__politic Политика конфиденциальности
					.footer__company
						.footer__company-caption Разработка сайта
						a(href="https://webshop.ru/" target="_blank").footer__company-logo 
							picture 
								source(:srcset="`/images/icons/company-logo.svg`")
								img(:src="`/images/icons/company-logo.svg`", alt="логотип компании" loading="lazy")
	ModalCall(@closeModal="toggleModal" :isOpenModal="isOpenModal")
</template>

<script setup>
import { ref, onMounted } from 'vue'
import obj from '../data.js'
import ModalCall from '../components/Modals/ModalCall.vue'
import spollers from '../utils/spollers.js'

const { menuFooter } = obj
const isOpenModal = ref(false)

const toggleModal = () => {
  document.body.classList.toggle('lock')
  isOpenModal.value = !isOpenModal.value
}
const initSpollers = () => {
  if (window.matchMedia('(max-width: 767.98px)').matches) {
    spollers()
  } else {
    return false
  }
}
const resizeSpollers = () => {
  window.addEventListener('resize', () => {
    initSpollers()
  })
}
onMounted(() => {
  initSpollers()
  resizeSpollers()
})
</script>
