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
			.slider-controls(ref="slider_controls")
				button.slider-button.slider-button-prev
				button.slider-button.slider-button-next
</template>

<script>
import Swiper from 'swiper'
import { Navigation, Autoplay } from 'swiper/modules'
export default {
  props: ['count', 'imagePath'],
  data() {
    return {
      slider: null,
      isLoopingSlider: false
    }
  },
  methods: {
    initSlider() {
      this.slider = new Swiper(this.$refs.mySwiper, {
        modules: [Navigation, Autoplay],
        speed: 1000,
        slidesPerView: 'auto',
        loop: this.isLoopingSlider,
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
    },
    destroySlider() {
      if (this.slider != null) {
        const slides = this.slider.slides
        this.countSlides = slides
        const nav = this.slider.navigation
        let betweenSlider = 0
        if (window.innerWidth > 767.98) {
          betweenSlider = 22
        } else {
          betweenSlider = 10
        }
        if (this.$refs.mySwiperWrapper != null) {
          const sliderWrapperWidth = this.$refs.mySwiperWrapper.scrollWidth
          const widthSlides =
            (slides[0].getBoundingClientRect().width + betweenSlider) * slides.length
          if (widthSlides < sliderWrapperWidth) {
            this.$refs.mySwiper.classList.add('in-active')
            nav.nextEl.remove()
            nav.prevEl.remove()
            this.$refs.slider_controls.remove()
            this.isLoopingSlider = false
          } else {
            this.$refs.mySwiper.classList.remove('in-active')
            this.isLoopingSlider = true
          }
        }
      }
    }
  },
  mounted() {
    this.initSlider()
    this.destroySlider()
    window.addEventListener('resize', () => {
      this.destroySlider()
    })
  }
}
</script>
