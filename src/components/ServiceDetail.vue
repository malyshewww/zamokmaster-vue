<template lang="pug">
	.services-detail__item
		.services-detail__body 
			.services-detail__content 
				.services-detail__title 
					span {{ titleGray }}
					|  {{ title }}
				.services-detail__text 
					p {{ text1 }}
					p(v-if="text2") {{ text2 }}
				router-link(to="/service-card").services-detail__button.btn Подробнее
			.services-detail__image-wrap 
				.services-detail__image.ibg
					picture
						source(:srcset=`'./images/services/service-detail-'+img+'.jpg'` media="(min-width: 767.98px)")
						//- source(:srcset=`'./images/services/service-detail-'+img+'-mob.jpg'` media="(min-width: 300px)")
						img(:src=`'./images/services/service-detail-'+img+'.jpg'`, :alt="titleGray + title")
</template>

<script>
export default {
  props: ['titleGray', 'title', 'text1', 'text2', 'img'],
  data() {
    return {}
  }
}
</script>
