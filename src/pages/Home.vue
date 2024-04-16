<template lang="pug">
	.main-screen
		.container 
			.main-screen__heading
				h1.main-screen__title Вскрытие замков #[span в&nbsp;Санкт-Петербурге]
				a(href="tel:+79958881086").main-screen__phone.btn-phone
					span.btn-phone__text +7 (995) 888-10-86
					span.btn-phone__icon
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
	section.services-detail.services-detail--first
		.services-detail__wrapper 
			.services-detail__box
				.container
					ServiceDetail(:titleGray="servicesDetail[0].titleGray" :title="servicesDetail[0].title" :text1="servicesDetail[0].text[0]" img="1")
				ServiceSlider(:count="9" imagePath="lock")
			.services-detail__box
				.container
					ServiceDetail(:titleGray="servicesDetail[1].titleGray" :title="servicesDetail[1].title" :text1="servicesDetail[1].text[0]" :text2="servicesDetail[1].text[1]" img="2")
				ServiceSlider(:count="9" imagePath="doors")
	section.services-detail.services-detail--second
		.services-detail__wrapper 
			.services-detail__box
				.container
					ServiceDetail(:titleGray="servicesDetail[2].titleGray" :title="servicesDetail[2].title" :text1="servicesDetail[2].text[0]" :text2="servicesDetail[2].text[1]" img="3")
				ServiceSlider(:count="9" imagePath="safe") 
			.services-detail__box
				.container
					ServiceDetail(:titleGray="servicesDetail[3].titleGray" :title="servicesDetail[3].title" :text1="servicesDetail[3].text[0]" :text2="servicesDetail[3].text[1]" img="4")
				ServiceSlider(:count="9" imagePath="car") 
	section.services-detail.services-detail--third
		.services-detail__wrapper 
			.services-detail__box
				.container
					ServiceDetail(:titleGray="servicesDetail[4].titleGray" :title="servicesDetail[4].title" :text1="servicesDetail[4].text[0]" :text2="servicesDetail[4].text[1]" img="5")
				ServiceSlider(:count="9" imagePath="setlock")
	section.questions
		.container 
			.questions__body 
				.questions__inner
					.questions__content
						h2.questions__title Остались вопросы?
						p.questions__sub-title Мастер проконсультирует вас&nbsp;по&nbsp;всем вопросам
					a(href="tel:79958881086").questions__phone.btn-phone
						.btn-phone__text +7 (995) 888-10-86
						.btn-phone__icon 
					.questions__info 
						p Выезд мастера #[span в течении 15–20 минут]. #[br] Круглосуточно и без выходных
						span.questions__info-icon
	section.main-about
		.container 
			.main-about__body 
				.main-about__content
					.heading 
						h2.heading__title О компании
					.main-about__stats
						.main-about__item.stats-item(v-for="item in stats")
							.stats-item__num {{ item.num }}
							.stats-item__text {{ item.text }}
					.main-about__content.content 
						p В жизни каждого человека случаются непредвиденные ситуации: захлопнулась дверь, сломался замок, или не открывается ваш автомобиль. А может вы потеряли ключи от сейфа, и теперь не знаете что делать?
						p Главное, не поддавайтесь панике, и не пытайтесь, с помощью подручных инструментов, самостоятельно решить данную проблему, разрушая тем самым не только конструкцию замка, но и целостность самой двери.
						p Теперь у вас есть надёжный помощник-специалист компании "Замок- В жизни каждого человека случаются непредвиденные ситуации: захлопнулась дверь, сломался замок, или не 
						div.main-about__content-gradient
							button(type="button").main-about__button.btn-show Читать полностью
				.main-about__image-wrap 
					.main-about__image.ibg
						picture
							source(srcset="../../images/main-about/master.jpg")
							img(src='../../images/main-about/master.jpg' alt="Баннер")
	section.testimonials
		.testimonials__wrapper
			.container
				.testimonials__body 
					.testimonials__module 
						picture 
							source(srcset="../../images/testimonials/widget.png")
							img(src='../../images/testimonials/widget.зтп' alt="Виджет")
					.heading 
						h2.heading__title Отзывы #[span наших&nbsp;клиентов]
						p.heading__sub-title За время работы нашей компании, остались довольными более 15&nbsp;000&nbsp;клиентов.
	section.geography
		.container 
			.heading 
				h2.heading__title География работы
			.geography__wrapper
				.geography__body 
					ul.geography__list(v-for="item in geography")
						li.geography__list-item(v-for="station in item.list") {{ station }}
				span.geography__gradient
			button(type="button").geography__button.btn-show Показать все


</template>

<script>
// import { defineComponent, onMounted, ref } from 'vue'
import obj from '../data.js'
import ServiceDetail from '../components/ServiceDetail.vue'
import ServiceSlider from '../components/ServiceSlider.vue'

const { services, servicesDetail, stats, geography } = obj

export default {
  components: {
    ServiceDetail,
    ServiceSlider
  },
  data() {
    return {
      services,
      servicesDetail,
      stats,
      geography
    }
  }
}
</script>
