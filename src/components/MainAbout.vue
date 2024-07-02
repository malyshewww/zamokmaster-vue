<template lang="pug">
	section.main-about
		.container 
			.main-about__body 
				.main-about__content
					.heading 
						h2.heading__title О компании
					.main-about__stats
						.main-about__item.stats-item(v-for="item in stats")
							.stats-item__num {{ item.num }}
							.stats-item__text {{ item.text }}
					.text-hidden(:class="[textShow ? 'active': '']")
						.text-hidden-content(ref="hiddenContent" :style="myStyles")
							.content(v-html="data")
							div.text-hidden-content__gradient(@click='textShow = !textShow')
						button(type="button" @click='textShow = !textShow' v-if="!textShow").main-about__button.btn-show Читать полностью
					router-link(to="/about").main-about__btn.btn О компании
				.main-about__image-wrap 
					.main-about__image.ibg
						picture
							source(:srcset="`/images/main-about/master.jpg`")
							img(:src='`/images/main-about/master.jpg`' alt="Баннер")
</template>

<script setup>
import { ref, reactive, computed, onMounted } from 'vue'
import obj from '../data.js'
const { stats } = obj
const textShow = ref(false)
const hiddenContent = ref()

defineProps({
  data: {
    type: String
  }
})
// const parseContent = () => {
//   return JSON.parse(content.value)
// }
// const parseData = computed(() => {
//   return JSON.parse(props.data)
// })
const myStyles = computed(() => {
  return {
    'max-height': `${textShow.value ? hiddenContent.value?.scrollHeight : false}px`
  }
})
onMounted(() => {
  //   parseContent()
})
</script>
