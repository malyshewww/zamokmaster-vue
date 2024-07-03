<template lang="pug">
	section.geography
		.container 
			.heading 
				h2.heading__title География работы
			.geography__wrapper(ref="geographyWrapper" :class="[textShow ? 'active': '']" :style="myStyles")
				.geography__body 
					ul.geography__list(v-for="(item, key) in separationArray" :key="key")
						li.geography__list-item(v-for="station in item") {{ station }}
				span.geography__gradient(v-if="geo.length > 5")
			div(v-if="geo.length > 5")
				button(type="button" @click="textShow = !textShow" v-if="!textShow").geography__button.btn-show Показать все
</template>

<script setup>
import { ref, reactive, computed, onMounted } from 'vue'

const textShow = ref(false)
const geographyWrapper = ref()

const props = defineProps(['geo'])

const myStyles = computed(() => {
  return {
    'max-height': `${textShow.value ? geographyWrapper.value?.scrollHeight : false}px`
  }
})

const newArray = reactive({
  geo: []
})

const separationArray = computed(() => {
  let size = 1
  for (let i = 0; i < Math.ceil(props.geo.length / size); i++) {
    newArray.geo[i] = props.geo.slice(i * size, i * size + size)
  }
  return newArray.geo
})
onMounted(() => {})
</script>
