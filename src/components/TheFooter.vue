<template lang="pug">
	footer.footer 
		.footer__main.main-footer
			.container 
				.main-footer__body
					.menu-footer__actions 
						.menu-footer__logo
							picture 
								source(srcset="../../images/icons/footer-logo.svg" media="(min-width: 767.98px)")
								source(srcset="../../images/icons/footer-logo-mob.svg" media="(min-width: 300px)")
								img(src="../../images/icons/logo-pc.svg", alt="логотип")
						FooterCall
					.main-footer__menu.menu-footer
						.menu-footer__column(v-for="item in menuFooter")
							.menu-footer__caption {{ item.caption }}
							ul.menu-footer__list
								li(v-for="el in item.list")
									router-link(:to="`${el.path}`") {{ el.title }}
						.menu-footer__column.menu-footer-contacts
							.menu-footer__caption Контакты
							ul.menu-footer__list
								li 
									a(href="tel:+79958881086").menu-footer__phone +7 (995) 888-10-86
								li 
									a(href="mailto:hello@zamokmaster.ru").menu-footer__email hello@zamokmaster.ru
		.footer__bottom.bottom-footer
			.container 
				.bottom-footer__body 
					.footer__copy ©Замокмастер 2024
					a(href="/politika").footer__politic Политика конфиденциальности
					.footer__company
						.footer__company-caption Разработка сайта
						a(href="https://webshop.ru/" target="_blank").footer__company-logo 
							picture 
								source(srcset="../../images/icons/company-logo.svg")
								img(src="../../images/icons/company-logo.svg", alt="логотип компании")
</template>

<script>
import obj from '../data.js'
import FooterCall from './FooterCall.vue'

const { menuFooter } = obj

export default {
  components: {
    FooterCall
  },
  data() {
    return {
      menuFooter
    }
  }
}
</script>
