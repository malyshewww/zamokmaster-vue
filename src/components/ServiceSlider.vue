<template lang="pug">
	.services-slider
		.services-slider__body.swiper(ref="mySwiper")
			.services-slider__wrapper.swiper-wrapper(ref="mySwiperWrapper")
				.services-slider__item.swiper-slide(v-for="item in count")
					.services-slider__image
						picture
							source(:srcset=`'../../images/service-detail/'+imagePath+'/logo-'+item+'.png'`)
							img(:src=`'../../images/service-detail/'+imagePath+'/logo-'+item+'.png'`)
				.services-slider__item.swiper-slide(v-for="item in count")
					.services-slider__image
						picture
							source(:srcset=`'../../images/service-detail/'+imagePath+'/logo-'+item+'.png'`)
							img(:src=`'../../images/service-detail/'+imagePath+'/logo-'+item+'.png'`)
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
      slider: null
    }
  },
  methods: {
    initSlider() {
      this.slider = new Swiper(this.$refs.mySwiper, {
        modules: [Navigation, Autoplay],
        speed: 1000,
        slidesPerView: 'auto',
        loop: true,
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
        const nav = this.slider.navigation
        let betweenSlider = 0
        if (window.innerWidth > 767.98) {
          betweenSlider = 22
        } else {
          betweenSlider = 10
        }
        const sliderWrapperWidth = this.$refs.mySwiperWrapper.scrollWidth
        const widthSlides =
          (slides[0].getBoundingClientRect().width + betweenSlider) * slides.length
        if (widthSlides < sliderWrapperWidth) {
          this.$refs.mySwiper.classList.add('in-active')
          nav.nextEl.remove()
          nav.prevEl.remove()
          this.$refs.slider_controls.remove()
        } else {
          this.$refs.mySwiper.classList.remove('in-active')
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
