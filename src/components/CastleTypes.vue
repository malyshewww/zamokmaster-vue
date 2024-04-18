<template lang="pug">
	.castle-types
		.heading
			h2.heading__title.title-sm Открываем все виды замков
		.castle-types__body
			.castle-item(v-for="(item, index) in count")
				.castle-item__image
					picture 
						source(:srcset=`'../../images/castle-types/'+path+'/type-'+(index+1)+'.png'`)
						img(:src=`"../../images/castle-types/card/type-"+(index+1)+'.png'`, alt="")
		a(href="#").castle-types__button.btn Все замки
</template>

<script>
export default {
  props: ['path', 'count'],
  components: {},
  data() {
    return {}
  }
}
</script>
