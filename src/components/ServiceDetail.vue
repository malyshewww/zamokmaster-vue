<template lang="pug">
	.services-detail__item
		.services-detail__body 
			.services-detail__content 
				h2.services-detail__title 
					span {{ titleGray }}
					|  {{ title }}
				.services-detail__text 
					p {{ text1 }}
					p(v-if="text2") {{ text2 }}
				router-link(to="/service-card").services-detail__button.btn Подробнее
			.services-detail__image-wrap 
				.services-detail__image.ibg
					picture
						source(:srcset=`'./images/services/service-detail-'+img+'.jpg'`)
						//- source(:srcset=`'./images/services/service-detail-'+img+'-mob.jpg'` media="(min-width: 300px)")
						img(:src=`'./images/services/service-detail-'+img+'.jpg'`, :alt="titleGray + title" loading="lazy")
</template>

<script>
import ScrollReveal from 'scrollreveal'

export default {
  props: ['titleGray', 'title', 'text1', 'text2', 'img'],
  data() {
    return {}
  },
  methods: {
    animation() {
      if (typeof window !== 'undefined') {
        ScrollReveal({
          reset: false,
          duration: 1500,
          distance: '50px',
          mobile: false
        })
        ScrollReveal().reveal(
          '.services-detail--first .services-detail__box:nth-child(1) .services-detail__content',
          { origin: 'left', opacity: 0 }
        )
        ScrollReveal().reveal(
          '.services-detail--first .services-detail__box:nth-child(1) .services-detail__image-wrap',
          { origin: 'right', opacity: 0 }
        )
        ScrollReveal().reveal(
          '.services-detail--first .services-detail__box:nth-child(2) .services-detail__content',
          { origin: 'right', opacity: 0 }
        )
        ScrollReveal().reveal(
          '.services-detail--first .services-detail__box:nth-child(2) .services-detail__image-wrap',
          { origin: 'left', opacity: 0 }
        )
        ScrollReveal().reveal(
          '.services-detail--second .services-detail__box:nth-child(1) .services-detail__content',
          { origin: 'left', opacity: 0 }
        )
        ScrollReveal().reveal(
          '.services-detail--second .services-detail__box:nth-child(1) .services-detail__image-wrap',
          { origin: 'right', opacity: 0 }
        )
        ScrollReveal().reveal(
          '.services-detail--second .services-detail__box:nth-child(2) .services-detail__content',
          { origin: 'right', opacity: 0 }
        )
        ScrollReveal().reveal(
          '.services-detail--second .services-detail__box:nth-child(2) .services-detail__image-wrap',
          { origin: 'left', opacity: 0 }
        )
        ScrollReveal().reveal(
          '.services-detail--third .services-detail__box:nth-child(1) .services-detail__content',
          { origin: 'left', opacity: 0 }
        )
        ScrollReveal().reveal(
          '.services-detail--third .services-detail__box:nth-child(1) .services-detail__image-wrap',
          { origin: 'right', opacity: 0 }
        )
      }
    }
  },
  mounted() {
    this.animation()
  }
}
</script>
