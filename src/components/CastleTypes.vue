<template lang="pug">
	.castle-types
		.heading
			h2.heading__title.title-sm Открываем все виды замков
		.castle-types__body
			router-link.castle-item(:to="`/castle-list/${index}`" v-for="(item, index) in count")
				.castle-item__image
					.castle-item__logo
						picture 
							source(:srcset=`'/images/castle-types/'+path+'/type-'+(index+1)+'.png'`)
							img(:src=`"/images/castle-types/card/type-"+(index+1)+'.png'`, alt="" loading="lazy")
		router-link(to="/castle-list").castle-types__button.btn Все замки
</template>

<script setup>
const props = defineProps(['path', 'count'])
</script>
