<template lang="pug">
	section.geography
		.container 
			.heading 
				h2.heading__title География работы
			.geography__wrapper(ref="geographyWrapper" :class="[textShow ? 'active': '']" :style="myStyles")
				.geography__body 
					ul.geography__list(v-for="item in geography")
						li.geography__list-item(v-for="station in item.list") {{ station }}
				span.geography__gradient
			button(type="button" @click="textShow = !textShow" v-if="!textShow").geography__button.btn-show Показать все
</template>

<script setup>
import { ref, computed } from 'vue'
import obj from '../data.js'

const { geography } = obj
const textShow = ref(false)
const geographyWrapper = ref()

const myStyles = computed(() => {
  return {
    'max-height': `${textShow.value ? geographyWrapper.value?.scrollHeight : false}px`
  }
})
</script>
