<template lang="pug">
	.main-screen
		.container 
			.main-screen__heading
				h1.main-screen__title Вскрытие замков #[span {{ declensionCity }}]
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
						source(:srcset="`/images/main-screen/banner.png`")
						img(:src="`/images/main-screen/banner.png`" alt="Баннер" loading="lazy")
				MainScreenInfo
	MainServices
	Request
	section.services-detail.services-detail--first
		.services-detail__wrapper 
			.services-detail__box
				.container
					ServiceDetail(:titleGray="servicesDetail[0].titleGray" :title="servicesDetail[0].title" :text1="servicesDetail[0].text[0]" img="1")
				ServiceSlider(:count="3" imagePath="lock")
				.services-detail__bottom 
					.container
						router-link(to="/service-card").services-detail__button.btn Подробнее
			.services-detail__box
				.container
					ServiceDetail(:titleGray="servicesDetail[1].titleGray" :title="servicesDetail[1].title" :text1="servicesDetail[1].text[0]" :text2="servicesDetail[1].text[1]" img="2")
				ServiceSlider(:count="9" imagePath="doors")
				.services-detail__bottom 
					.container
						router-link(to="/service-card").services-detail__button.btn Подробнее
	section.services-detail.services-detail--second
		.services-detail__wrapper 
			.services-detail__box
				.container
					ServiceDetail(:titleGray="servicesDetail[2].titleGray" :title="servicesDetail[2].title" :text1="servicesDetail[2].text[0]" :text2="servicesDetail[2].text[1]" img="3")
				ServiceSlider(:count="9" imagePath="safe")
				.services-detail__bottom 
					.container
						router-link(to="/service-card").services-detail__button.btn Подробнее 
			.services-detail__box
				.container
					ServiceDetail(:titleGray="servicesDetail[3].titleGray" :title="servicesDetail[3].title" :text1="servicesDetail[3].text[0]" :text2="servicesDetail[3].text[1]" img="4")
				ServiceSlider(:count="9" imagePath="car")
				.services-detail__bottom 
					.container
						router-link(to="/service-card").services-detail__button.btn Подробнее 
	section.services-detail.services-detail--third
		.services-detail__wrapper 
			.services-detail__box
				.container
					ServiceDetail(:titleGray="servicesDetail[4].titleGray" :title="servicesDetail[4].title" :text1="servicesDetail[4].text[0]" :text2="servicesDetail[4].text[1]" img="5")
				ServiceSlider(:count="9" imagePath="setlock")
				.services-detail__bottom 
					.container
						router-link(to="/service-card").services-detail__button.btn Подробнее
	Questions
	MainAbout
	section.testimonials
		.testimonials__wrapper
			.container
				.testimonials__body 
					div(class="testimonials__module")
						iframe(style="width:100%;height:100%;border:1px solid #e6e6e6;border-radius:8px;box-sizing:border-box" src="https://yandex.ru/maps-reviews-widget/158778930985?comments")
						a(href="https://yandex.ru/maps/org/dom_byta/158778930985/" target="_blank" style="box-sizing:border-box;text-decoration:none;color:#b3b3b3;font-size:10px;font-family:YS Text,sans-serif;padding:0 20px;position:absolute;bottom:8px;width:100%;text-align:center;left:0;overflow:hidden;text-overflow:ellipsis;display:block;max-height:14px;white-space:nowrap;padding:0 16px;box-sizing:border-box") Дом Быта на карте Москвы — Яндекс Карты
					.heading 
						h2.heading__title Отзывы #[span наших&nbsp;клиентов]
						p.heading__sub-title За время работы нашей компании, остались довольными более 15&nbsp;000&nbsp;клиентов.
	MainGeography
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'

import obj from '../data.js'
import ServiceDetail from '../components/ServiceDetail.vue'
import ServiceSlider from '../components/ServiceSlider.vue'
import Questions from '../components/Questions.vue'
import MainScreenInfo from '../components/MainScreenInfo.vue'
import MainAbout from '../components/MainAbout.vue'
import MainGeography from '../components/MainGeography.vue'
import Request from '../components/Request.vue'
import MainServices from '../components/MainServices.vue'

import { useRoute } from 'vue-router'
import { useHead } from '@vueuse/head'

const route = useRoute()
const title = computed(() => route.meta.title)

useHead({
  title: title.value,
  meta: [
    {
      name: 'description',
      content: `Описание на странице ${title.value}`
    }
  ],
  bodyAttrs: {
    class: 'home'
  }
})

const props = defineProps(['defaultCity', 'declensionCity'])

const { servicesDetail, stats } = obj

const localCity = ref('')
localCity.value = props.defaultCity
</script>
<style lang="scss"></style>
