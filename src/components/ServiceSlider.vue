<template lang="pug">
	.services-slider
		.services-slider__body.swiper(ref="mySwiper")
			.services-slider__wrapper.swiper-wrapper(ref="mySwiperWrapper")
				router-link(to="/castle-card" v-for="item in count").services-slider__item.swiper-slide
					.services-slider__image
						picture
							source(:srcset=`'./images/service-detail/'+imagePath+'/logo-'+item+'.png'`)
							img(:src=`'./images/service-detail/'+imagePath+'/logo-'+item+'.png'` loading="lazy" alt="фото")
				router-link(to="/castle-card" v-for="item in count").services-slider__item.swiper-slide
					.services-slider__image
						picture
							source(:srcset=`'./images/service-detail/'+imagePath+'/logo-'+item+'.png'`)
							img(:src=`'./images/service-detail/'+imagePath+'/logo-'+item+'.png'` loading="lazy" alt="фото")
			.slider-controls(ref="sliderControls")
				button.slider-button.slider-button-prev
				button.slider-button.slider-button-next
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Swiper from 'swiper'
import { Navigation, Autoplay } from 'swiper/modules'

const props = defineProps(['count', 'imagePath'])

const slider = ref(null)
const isLoopingSlider = ref(false)
const mySwiper = ref()
const sliderControls = ref()
const mySwiperWrapper = ref()

const initSlider = () => {
  slider.value = new Swiper(mySwiper.value, {
    modules: [Navigation, Autoplay],
    speed: 1000,
    slidesPerView: 'auto',
    loop: isLoopingSlider.value,
    autoplay: {
      delay: 1000,
      disableOnInteraction: false
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
      const widthSlides = (slides[0].getBoundingClientRect().width + betweenSlider) * slides.length
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
onMounted(() => {
  initSlider()
  destroySlider()
  window.addEventListener('resize', () => {
    destroySlider()
  })
})
</script>
