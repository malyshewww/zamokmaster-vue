<template lang="pug">
	.castle-advantages
		.heading 
			h2.heading__title.title-sm Преимущества
		.castle-advantages__items
			.castle-advantages__item(v-for="(item, index) in castleAdvantages" :class=`'castle-advantages__item--'+(index+1)`)
				span.castle-advantages__icon
				.castle-advantages__content
					.castle-advantages__caption {{ item.caption }}
					.castle-advantages__description {{ item.descr }}
</template>

<script setup>
import { onMounted, ref } from 'vue'
import obj from '../data.js'
import ScrollReveal from 'scrollreveal'

const { castleAdvantages } = obj

function animation() {
  if (typeof window !== 'undefined') {
    ScrollReveal({
      reset: false,
      duration: 1500,
      distance: '15px',
      mobile: false
    })
    ScrollReveal().reveal('.castle-advantages__item', { origin: 'top', opacity: 0 })
  }
}
onMounted(() => {
  animation()
})
</script>
