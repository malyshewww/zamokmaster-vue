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
					.text-hidden(ref="hiddenBlock" :class="[textShow ? 'active': '']")
						.text-hidden-content(ref="hiddenContent" :style="myStyles")
							.content(ref="content")
								p В жизни каждого человека случаются непредвиденные ситуации: захлопнулась дверь, сломался замок, или не открывается ваш автомобиль. А может вы потеряли ключи от сейфа, и теперь не знаете что делать?
								p Главное, не поддавайтесь панике, и не пытайтесь, с помощью подручных инструментов, самостоятельно решить данную проблему, разрушая тем самым не только конструкцию замка, но и целостность самой двери.
								p Теперь у вас есть надёжный помощник-специалист компании "Замок- В жизни каждого человека случаются непредвиденные ситуации: захлопнулась дверь, сломался замок, или не
								p В жизни каждого человека случаются непредвиденные ситуации: захлопнулась дверь, сломался замок, или не открывается ваш автомобиль. А может вы потеряли ключи от сейфа, и теперь не знаете что делать?
								p Главное, не поддавайтесь панике, и не пытайтесь, с помощью подручных инструментов, самостоятельно решить данную проблему, разрушая тем самым не только конструкцию замка, но и целостность самой двери.
								p Теперь у вас есть надёжный помощник-специалист компании "Замок- В жизни каждого человека случаются непредвиденные ситуации: захлопнулась дверь, сломался замок, или не 
							div.text-hidden-content__gradient(@click='textShow = !textShow')
					button(type="button" @click='textShow = !textShow' v-if="!textShow").main-about__button.btn-show Читать полностью
					//- button(type="button" @click="showText" v-else).main-about__button.btn-show Читать полностью
				.main-about__image-wrap 
					.main-about__image.ibg
						picture
							source(srcset="../../images/main-about/master.jpg")
							img(src='../../images/main-about/master.jpg' alt="Баннер")
</template>

<script>
import obj from '../data.js'
// import { textHidden, textHide } from '../assets/scripts/modules/textHidden.js'
const { stats } = obj

export default {
  components: {},
  data() {
    return {
      stats,
      textShow: false,
      maxHeight: 0
    }
  },
  methods: {},
  computed: {
    myStyles() {
      return {
        // `height: ${this.show ? this.$el.scrollHeight : 0}px`
        'max-height': `${this.textShow ? this.$el.querySelector('.text-hidden-content')?.scrollHeight : false}px`
      }
    }
  },
  watch: {},
  mounted() {}
}
</script>
