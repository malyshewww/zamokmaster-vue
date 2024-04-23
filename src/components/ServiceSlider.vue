<template lang="pug">
	.services-slider
		.services-slider__body.swiper(ref="mySwiper")
			.services-slider__wrapper.swiper-wrapper
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
			.slider-controls
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
      images: 9
    }
  },
  mounted() {
    this.slider = new Swiper(this.$refs.mySwiper, {
      modules: [Navigation, Autoplay],
      speed: 1000,
      slidesPerView: 'auto',
      loop: true,
      autoplay: {
        delay: 1000,
        disableOnInteraction: false
      },
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
}
</script>
