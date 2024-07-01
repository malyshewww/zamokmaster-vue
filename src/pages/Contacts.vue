<template lang="pug">
	.page.contacts
		.main__top.top-main
			.container
				Breadcrumbs(pageTitle="Контакты")
				.top-main__content 
					h1.top-main__title.page-title Контакты
		.page__body
			.contacts__wrapper
				.container
					.contacts__body
						.contacts__info.info-contacts
							.info-contacts__item
								.info-contacts__caption Расположение
								.info-contacts__content.content 
									p Наши сотрудники работают во&nbsp;всех точках города. К&nbsp;вам&nbsp;приедет самый ближайший
							.info-contacts__item
								.info-contacts__caption Адрес
								.info-contacts__content.content 
									p Россия, Москва, улица Красная Пресня, 23, корп.&nbsp;Б, стр.&nbsp;1
							.info-contacts__item
								.info-contacts__caption Контакты
								ul.info-contacts__list
									li.info-contacts__list-item
										a(href="tel:+79958881086").info-contacts__link +7 (995) 888-10-86
									li.info-contacts__list-item
										a(href="mailto:hello@zamokmaster.ru").info-contacts__link hello@zamokmaster.ru
						.contacts__map(id="map" ref="mapElem")
			Questions
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import Questions from '../components/Questions.vue'
import Breadcrumbs from '../components/Breadcrumbs.vue'

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
  ]
})

const props = defineProps(['defaultCity', 'declensionCity'])

const mapElem = ref()

const initMap = () => {
  // Яндекс карта
  var myMap, myPlacemark
  function mapInit() {
    const map = document.getElementById('map')
    ;(myMap = new ymaps.Map(
      'map',
      {
        center: [55.761462, 37.568129],
        zoom: 16,
        controls: ['zoomControl']
      },
      {
        searchControlProvider: 'yandex#search'
      }
    )),
      (myPlacemark = new ymaps.Placemark(
        myMap.getCenter(),
        {
          balloonContent: 'г. Москва, улица Красная Пресня, 23кБс1'
        },
        {
          iconLayout: 'default#image',
          iconImageHref: '../../images/icons/map-icon.svg',
          iconImageSize: [26, 30],
          iconImageOffset: [-10, -30]
        }
      ))
    myMap.geoObjects.add(myPlacemark)
    if (window.innerWidth < 991.98) {
      myMap.behaviors.disable('drag')
      let version = map.firstChild.getAttribute('class').replace('ymaps-', '').replace('-map', '')
      let pane = document.querySelector('.ymaps-' + version + '-events-pane')
      pane.innerHTML = 'Чтобы переместить карту проведите по ней двумя пальцами'
      pane.style.cssText =
        'height: 100%; width: 100%; position: absolute; top: 0px; left: 0px; z-index: 2500; color: #fff; font-size: 22px; font-family: Arial, sans-serif; display: flex; align-items: center; justify-content: center; text-align: center; background-color: rgba(0,0,0,0.45); opacity: 0; transition: opacity 0.45s; padding: 25px; box-sizing: border-box;'
      map.addEventListener('touchmove', function (e) {
        let touches = e.touches.length
        if (touches > 1) {
          pane.style.opacity = '0'
        } else {
          pane.style.opacity = '1'
        }
      })
      // Скрыть надпись
      map.addEventListener('touchend', function () {
        pane.style.opacity = '0'
      })
    }
  }
  if (mapElem.value) {
    let isLoaded = false
    const loadMap = () => {
      // создаем и вставляем апи карт
      var script = document.createElement('script')
      script.src =
        'https://api-maps.yandex.ru/2.1/?apikey=5f83ec22-85a8-4723-a3ac-503a77f91a74&lang=ru_RU'
      document.body.appendChild(script)
      isLoaded = true
      //инициализируем карту
      script.onload = function () {
        if (typeof ymaps === 'undefined') return
        ymaps.ready(mapInit)
      }
    }
    // if (mapElem.getBoundingClientRect().top < window.innerHeight && !isLoaded) {
    //   loadMap()
    // }
    let observerOptions = {
      // root: по умолчанию window, но можно задать любой элемент-контейнер
      rootMargin: '0px 0px 0px 0px'
    }
    let observer = new IntersectionObserver(([entry]) => {
      const targetInfo = entry.boundingClientRect
      const rootBoundsInfo = entry.rootBounds
      if ((!isLoaded && targetInfo.top < rootBoundsInfo.bottom) || targetInfo.isIntersecting) {
        loadMap()
        observer.unobserve(entry.target)
      }
    }, observerOptions)
    observer.observe(mapElem.value)
  }
}
onMounted(() => {
  initMap()
})
</script>
