<template lang="pug">
	.main-screen
		.container 
			.main-screen__heading
				h1.main-screen__title Вскрытие замков #[span в&nbsp;Санкт-Петербурге]
				a(href="tel:+79958881086").main-screen__phone.btn-phone.btn
					span.btn-phone__text +7 (995) 888-10-86
					span.btn-phone__icon
			.main-screen__advantages
				.main-screen__advantage.main-screen__advantage--1 Работаем официально и круглосуточно (24/7)
				.main-screen__advantage.main-screen__advantage--2 Срочный выезд мастера (15-20 мин)
				.main-screen__advantage.main-screen__advantage--3 Звонок напрямую мастеру (без посредников)
			a(href="tel:+79958881086").main-screen__phone-mobile.btn-phone.btn
				span.btn-phone__text +7 (995) 888-10-86
				span.btn-phone__icon
			.main-screen__image-wrap
				.main-screen__image.ibg
					picture
						source(srcset="../../images/main-screen/banner.png")
						img(src='../../images/main-screen/banner.png' alt="Баннер")
				MainScreenInfo
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
						input(type="submit", value="Заказать звонок").btn
						.form-text Нажимая на кнопку, вы соглашаетесь политикой конфиденциальности сайта
	//- section.services-detail.services-detail--first
	//- 	.services-detail__wrapper 
	//- 		.services-detail__box
	//- 			.container
	//- 				ServiceDetail(:titleGray="servicesDetail[0].titleGray" :title="servicesDetail[0].title" :text1="servicesDetail[0].text[0]" img="1")
	//- 			ServiceSlider(:count="9" imagePath="lock")
	//- 		.services-detail__box
	//- 			.container
	//- 				ServiceDetail(:titleGray="servicesDetail[1].titleGray" :title="servicesDetail[1].title" :text1="servicesDetail[1].text[0]" :text2="servicesDetail[1].text[1]" img="2")
	//- 			ServiceSlider(:count="9" imagePath="doors")
	//- section.services-detail.services-detail--second
	//- 	.services-detail__wrapper 
	//- 		.services-detail__box
	//- 			.container
	//- 				ServiceDetail(:titleGray="servicesDetail[2].titleGray" :title="servicesDetail[2].title" :text1="servicesDetail[2].text[0]" :text2="servicesDetail[2].text[1]" img="3")
	//- 			ServiceSlider(:count="9" imagePath="safe") 
	//- 		.services-detail__box
	//- 			.container
	//- 				ServiceDetail(:titleGray="servicesDetail[3].titleGray" :title="servicesDetail[3].title" :text1="servicesDetail[3].text[0]" :text2="servicesDetail[3].text[1]" img="4")
	//- 			ServiceSlider(:count="9" imagePath="car") 
	//- section.services-detail.services-detail--third
	//- 	.services-detail__wrapper 
	//- 		.services-detail__box
	//- 			.container
	//- 				ServiceDetail(:titleGray="servicesDetail[4].titleGray" :title="servicesDetail[4].title" :text1="servicesDetail[4].text[0]" :text2="servicesDetail[4].text[1]" img="5")
	//- 			ServiceSlider(:count="9" imagePath="setlock")
	//- Questions
	//- MainAbout
	//- section.testimonials
	//- 	.testimonials__wrapper
	//- 		.container
	//- 			.testimonials__body 
	//- 				div(class="testimonials__module" style="width:560px;height:700px;overflow:hidden;position:relative;")
	//- 					iframe(style="width:100%;height:100%;border:1px solid #e6e6e6;border-radius:8px;box-sizing:border-box" src="https://yandex.ru/maps-reviews-widget/158778930985?comments")
	//- 					a(href="https://yandex.ru/maps/org/dom_byta/158778930985/" target="_blank" style="box-sizing:border-box;text-decoration:none;color:#b3b3b3;font-size:10px;font-family:YS Text,sans-serif;padding:0 20px;position:absolute;bottom:8px;width:100%;text-align:center;left:0;overflow:hidden;text-overflow:ellipsis;display:block;max-height:14px;white-space:nowrap;padding:0 16px;box-sizing:border-box") Дом Быта на карте Москвы — Яндекс Карты
	//- 				.heading 
	//- 					h2.heading__title Отзывы #[span наших&nbsp;клиентов]
	//- 					p.heading__sub-title За время работы нашей компании, остались довольными более 15&nbsp;000&nbsp;клиентов.
	//- MainGeography
	.modal.modal-notice#modal-notice
		.modal__wrapper 
			.modal__content
				button(type="button").modal__close
				.modal__title Заявка успешно отправлена
</template>

<script>
import obj from '../data.js'
import ServiceDetail from '../components/ServiceDetail.vue'
import ServiceSlider from '../components/ServiceSlider.vue'
import Questions from '../components/Questions.vue'
import MainScreenInfo from '../components/MainScreenInfo.vue'
import MainAbout from '../components/MainAbout.vue'
import MainGeography from '../components/MainGeography.vue'

import ScrollReveal from 'scrollreveal'

const { services, servicesDetail, stats } = obj

export default {
  components: {
    ServiceDetail,
    ServiceSlider,
    Questions,
    MainScreenInfo,
    MainAbout,
    MainGeography
  },
  data() {
    return {
      services,
      servicesDetail,
      stats
    }
  },
  methods: {
    animation() {
      //   ScrollReveal({
      //     reset: true,
      //     duration: 2500
      //   })
      //   ScrollReveal().reveal('.main-screen__heading', { origin: 'bottom' })
      //   ScrollReveal().reveal('.main-screen__advantage--1', {
      //     opacity: 1,
      //     duration: 1000,
      //     origin: 'top'
      //   })
    }
  },
  computed: {},
  mounted() {
    this.animation()
  }
}
</script>
