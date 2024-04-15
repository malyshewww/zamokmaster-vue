<template lang="pug">
	.main-screen
		.container 
			.main-screen__heading
				h1.main-screen__title Вскрытие замков #[span в&nbsp;Санкт-Петербурге]
				a(href="tel:+79958881086").main-screen__phone
					span.main-screen__phone-text +7 (995) 888-10-86
					span.main-screen__phone-icon
			.main-screen__advantages
				.main-screen__advantage.main-screen__advantage--1 Работаем официально и круглосуточно (24/7)
				.main-screen__advantage.main-screen__advantage--2 Срочный выезд мастера (15-20 мин)
				.main-screen__advantage.main-screen__advantage--3 Звонок напрямую мастеру (без посредников)
			.main-screen__image-wrap
				.main-screen__image.ibg
					picture
						source(srcset="../../images/main-screen/banner.png")
						img(src='../../images/main-screen/banner.png' alt="Баннер")
				.main-screen__info
					p Сейчас свободны #[span 13 из 19 мастеров]
					p К вам приедет ближайший из них
					span.main-screen__info-icon 
	section.services 
		.container
			.heading 
				h2.heading__title Услуги
			.services__body 
				.services__item.item-services(v-for="(service, index) in services")
					.item-services__content
						.item-services__title= service.title
						.item-services__bottom
							span.item-services__icon 
								picture
									source(:srcset=`'../images/services/services-'+service.img+'.png'` media="(min-width: 767.98px)")
									source(:srcset=`'../images/services/services-'+service.img+'-mob.png'` media="(min-width: 300px)")
									img(:src=`'../images/services/services-'+service.img+'.png'`, :alt="service.title")
	section.request
		.container 
			.request__body
				.request__inner
					.request__content 
						h2.request__title Оставьте заявку
						p.request__sub-title Оставьте контакты и мы позвоним вам&nbsp;в&nbsp;течении #[span 30 секунд]
					form.request__form.form
						.form-item 
							input(type="text" placeholder="Введите номер")
						input(type="submit", value="Заказать звонок" class="btn")
						.form-text Нажимая на кнопку, вы соглашаетесь политикой конфиденциальности сайта
	.services__sections
		section.services-detail.services-detail--first
			.container
				.services-detail__wrapper 
					.services-detail__box
						ServiceDetail(:titleGray="servicesDetail[0].titleGray" :title="servicesDetail[0].title" :text1="servicesDetail[0].text[0]" img="1")
						| slider 
					.services-detail__box
						ServiceDetail(:titleGray="servicesDetail[1].titleGray" :title="servicesDetail[1].title" :text1="servicesDetail[1].text[0]" :text2="servicesDetail[1].text[1]" img="2")
						| slider 
		section.services-detail.services-detail--second
			.container
				.services-detail__wrapper 
					.services-detail__box
						ServiceDetail(:titleGray="servicesDetail[2].titleGray" :title="servicesDetail[2].title" :text1="servicesDetail[2].text[0]" :text2="servicesDetail[2].text[1]" img="3")
						| slider 
					.services-detail__box
						ServiceDetail(:titleGray="servicesDetail[3].titleGray" :title="servicesDetail[3].title" :text1="servicesDetail[3].text[0]" :text2="servicesDetail[3].text[1]" img="4")
						| slider 
		section.services-detail.services-detail--third
			.container
				.services-detail__wrapper 
					.services-detail__box
						ServiceDetail(:titleGray="servicesDetail[4].titleGray" :title="servicesDetail[4].title" :text1="servicesDetail[4].text[0]" :text2="servicesDetail[4].text[1]" img="4")
						| slider 
</template>

<script>
// import { defineComponent, onMounted, ref } from 'vue'
import obj from '../data.js'
import ServiceDetail from '../components/ServiceDetail.vue'

const { services, servicesDetail } = obj

export default {
  components: {
    ServiceDetail
  },
  data() {
    return {
      services,
      servicesDetail
    }
  }
}
</script>
