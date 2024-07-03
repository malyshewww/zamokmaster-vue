<template lang="pug">
	.services-detail__box
		.container
			.services-detail__item
				.services-detail__body 
					.services-detail__content 
						h2.services-detail__title {{ service.title }}
							span(v-if="service.field_subtitle_front") {{ service.field_subtitle_front }}
						.services-detail__text(v-html="service.field_description_front")
						router-link(:to="`/services/${service.id}`").services-detail__button.btn Подробнее
					.services-detail__image-wrap 
						.services-detail__image.ibg
							picture
								source(:srcset="`${config.url}${service.field_image[0].markup}`")
								//- source(:srcset=`'/images/services/service-detail-'+img+'-mob.jpg'` media="(min-width: 300px)")
								img(:src="`${config.url}${service.field_image[0].markup}`", :alt="service.title" loading="lazy")
		.services-slider(v-if="filterLocks.length > 0")
			.services-slider__body.swiper(ref="mySwiper")
				.services-slider__wrapper.swiper-wrapper(ref="mySwiperWrapper")
					router-link(:to="`${service.url}`" v-for="(lock, index) in filterLocks").services-slider__item.swiper-slide
						.services-slider__image
							picture
								source(:srcset="`${config.url}${lock.field_logo[0].markup}`")
								img(:src="`${config.url}${lock.field_logo[0].markup}`" loading="lazy" alt="логотип" :width="lock.field_logo[0].width" :height="lock.field_logo[0].height")
				.slider-controls(ref="sliderControls")
					button.slider-button.slider-button-prev
					button.slider-button.slider-button-next
		.services-detail__bottom
			.container
				router-link(to="/service-card").services-detail__button.btn Подробнее
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import Swiper from 'swiper'
import { Navigation, Autoplay } from 'swiper/modules'
import config from '@/config.js'

const props = defineProps(['service', 'locks'])

const slider = ref(null)
const isLoopingSlider = ref(false)
const mySwiper = ref()
const sliderControls = ref()
const mySwiperWrapper = ref()

const filterLocks = computed(() => {
  return props.locks.filter((lock) => lock.field_service == props.service.id)
})

const initSlider = () => {
  slider.value = new Swiper(mySwiper.value, {
    modules: [Navigation, Autoplay],
    speed: 1000,
    loop: !isLoopingSlider.value,
    slidesPerView: 'auto',
    autoplay: {
      delay: 1000,
      disableOnInteraction: false
      // stopOnLastSlide: true
    },
    watchOverflow: true,
    navigation: {
      nextEl: '.slider-button-next',
      prevEl: '.slider-button-prev'
    },
    breakpoints: {
      300: {
        spaceBetween: 10
      },
      767.98: {
        spaceBetween: 22
      }
    },
    on: {
      afterInit: function (swiper) {
        const slides = swiper.slides
      }
    }
  })
}
const destroySlider = () => {
  if (slider.value != null) {
    const slides = slider.value.slides
    const nav = slider.value.navigation
    let betweenSlider = 0
    if (window.innerWidth > 767.98) {
      betweenSlider = 22
    } else {
      betweenSlider = 10
    }
    if (mySwiperWrapper.value != null) {
      const sliderWrapperWidth = mySwiperWrapper.value.scrollWidth
      if (slides.length) {
        const widthSlides =
          (slides[0].getBoundingClientRect().width + betweenSlider) * slides.length
        if (widthSlides < sliderWrapperWidth) {
          mySwiper.value.classList.add('in-active')
          nav.nextEl.remove()
          nav.prevEl.remove()
          sliderControls.value.remove()
          isLoopingSlider.value = false
        } else {
          mySwiper.value.classList.remove('in-active')
          isLoopingSlider.value = true
        }
      }
    }
  }
}
onMounted(() => {
  initSlider()
  destroySlider()
  window.addEventListener('resize', () => {
    destroySlider()
  })
})
</script>
