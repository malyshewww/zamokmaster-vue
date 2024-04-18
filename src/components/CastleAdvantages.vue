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

<script>
import obj from '../data.js'
const { castleAdvantages } = obj

export default {
  components: {},
  data() {
    return {
      castleAdvantages
    }
  }
}
</script>
