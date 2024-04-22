<template lang="pug">
	section.geography
		.container 
			.heading 
				h2.heading__title География работы
			.geography__wrapper(:class="[textShow ? 'active': '']" :style="myStyles")
				.geography__body 
					ul.geography__list(v-for="item in geography")
						li.geography__list-item(v-for="station in item.list") {{ station }}
				span.geography__gradient
			button(type="button" @click="textShow = !textShow" v-if="!textShow").geography__button.btn-show Показать все
</template>

<script>
import obj from '../data.js'
const { geography } = obj

export default {
  data() {
    return {
      geography,
      textShow: false
    }
  },
  computed: {
    myStyles() {
      return {
        // `height: ${this.show ? this.$el.scrollHeight : 0}px`
        'max-height': `${this.textShow ? this.$el.querySelector('.geography__wrapper').scrollHeight : false}px`
      }
    }
  }
}
</script>
