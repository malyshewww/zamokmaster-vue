<template lang="pug">
	.main-screen
		.container 
			.main-screen__heading
				h1.main-screen__title Вскрытие замков #[span {{ declensionCity }}]
				a(href="tel:+79958881086").main-screen__phone.btn-phone.btn
					span.btn-phone__text +7 (995) 888-10-86
					span.btn-phone__icon
			.main-screen__advantages
				.main-screen__advantage(v-for="(item, index) in dataBase.advantages" :key="item.id" :class="`main-screen__advantage--${index+1}`") 
					| {{ item.field_title[0] }}
				//- .main-screen__advantage.main-screen__advantage--2 Срочный выезд мастера (15-20 мин)
				//- .main-screen__advantage.main-screen__advantage--3 Звонок напрямую мастеру (без посредников)
			a(href="tel:+79958881086").main-screen__phone-mobile.btn-phone.btn
				span.btn-phone__text +7 (995) 888-10-86
				span.btn-phone__icon
			.main-screen__image-wrap
				.main-screen__image.ibg
					picture
						source(:srcset="`/images/main-screen/banner.png`")
						img(:src="`/images/main-screen/banner.png`" alt="Баннер" loading="lazy")
				MainScreenInfo
	MainServices(:services="dataBase.services.items")
	Request
	section.services-detail.services-detail--first
		//- div(v-for="item in dataBase.services.items")
		//- 	| {{ item.title }}
		.services-detail__wrapper 
			ServiceDetailBox(v-if="dataBase.services.items[0]" :service="dataBase.services.items[0]" :locks="dataBase.services.locks")
			ServiceDetailBox(v-if="dataBase.services.items[1]" :service="dataBase.services.items[1]" :locks="dataBase.services.locks")
	section.services-detail.services-detail--second
		.services-detail__wrapper
			ServiceDetailBox(v-if="dataBase.services.items[2]" :service="dataBase.services.items[2]" :locks="dataBase.services.locks")
			ServiceDetailBox(v-if="dataBase.services.items[3]" :service="dataBase.services.items[3]" :locks="dataBase.services.locks")
	section.services-detail.services-detail--third
		.services-detail__wrapper 
			ServiceDetailBox(v-if="dataBase.services.items[4]" :service="dataBase.services.items[4]" :locks="dataBase.services.locks")
	Questions
	MainAbout(:data="dataBase.about")
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
	MainGeography(:geo="dataBase.geo")
	MainServicesMobile(:services="dataBase.services.items")
</template>

<script setup>
import { ref, reactive, onMounted, computed } from 'vue'

import obj from '../data.js'
import ServiceDetailBox from '@/components/ServiceDetailBox.vue'
import ServiceDetail from '@/components/ServiceDetail.vue'
import ServiceSlider from '@/components/ServiceSlider.vue'
import Questions from '@/components/Questions.vue'
import MainScreenInfo from '@/components/MainScreenInfo.vue'
import MainAbout from '@/components/MainAbout.vue'
import MainGeography from '@/components/MainGeography.vue'
import Request from '@/components/Request.vue'
import MainServices from '@/components/MainServices.vue'
import MainServicesMobile from '@/components/MainServicesMobile.vue'

import ajax from '@/ajax.js'

import { useRoute } from 'vue-router'
import { useHead } from '@vueuse/head'

const route = useRoute()
const title = computed(() => route.meta.title)

const dataBase = reactive({
  about: '',
  //   services: {},
  services: {
    items: '',
    locks: ''
  },
  advantages: '',
  geo: ''
})

const getData = async () => {
  try {
    const axios = await ajax()
    const { data } = await axios.get('/wsapi/packs/front')
    dataBase.about = data.data.info_front[0].field_about
    dataBase.advantages = data.data.info_front[0].field_advantages
    dataBase.geo = data.data.info_front[0].field_geography
    dataBase.services.locks = data.data.locks
    dataBase.services.items = data.data.services
    console.log(data)
    // dataBase.data = data.data
    // dataBase.meta = data.meta
    // dataBase.links = data.links
  } catch (e) {
    console.log('maininfo:' + e)
  }
}

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

const props = defineProps(['defaultCity', 'declensionCity', 'mainInfo'])

const { servicesDetail, stats } = obj

const localCity = ref('')
localCity.value = props.defaultCity

onMounted(() => {
  getData()
})
</script>
<style lang="scss"></style>
