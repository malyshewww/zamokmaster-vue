<template lang="pug">
	.wrapper
		TheHeader
		main.main
			router-view
		TheFooter
		.widget-call
</template>
<script>
import TheHeader from '../components/TheHeader.vue'
import TheFooter from '../components/TheFooter.vue'

export default {
  components: { TheHeader, TheFooter },
  data() {
    return {}
  }
}
</script>
