<template lang="pug">
	.services-slider
		.services-slider__body.swiper(ref="swiper")
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
    this.slider = new Swiper(this.$refs.swiper, {
      modules: [Navigation, Autoplay],
      speed: 1000,
      slidesPerView: 'auto',
      spaceBetween: 22,
      loop: true,
      autoplay: {
        delay: 1000,
        disableOnInteraction: false
      },
      navigation: {
        nextEl: '.slider-button-next',
        prevEl: '.slider-button-prev'
      }
    })
  }
}
</script>
