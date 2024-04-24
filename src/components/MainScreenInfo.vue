<template lang="pug">
	.main-screen__info
		.main-screen__content
			FreeMasters
			//- p Сейчас свободны #[span #{randomInteger(10, 16)} из #{randomInteger(18, 25)} мастеров]
			p К вам приедет ближайший из них
		span.main-screen__info-icon 
</template>

<script>
import FreeMasters from './FreeMasters.vue'

export default {
  components: { FreeMasters },
  data() {
    return {}
  }
}
</script>
