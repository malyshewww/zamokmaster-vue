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
							div.text-hidden-content__gradient
					button(type="button" @click="hideText" v-if="textShow").main-about__button.btn-show.text-hidden__btn Скрыть
					button(type="button" @click="showText" v-else).main-about__button.btn-show.text-hidden__btn Читать полностью
				.main-about__image-wrap 
					.main-about__image.ibg
						picture
							source(srcset="../../images/main-about/master.jpg")
							img(src='../../images/main-about/master.jpg' alt="Баннер")
</template>

<script>
import obj from '../data.js'
const { stats } = obj

export default {
  data() {
    return {
      stats,
      textShow: false,
      maxHeight: ''
    }
  },
  methods: {
    showText() {
      this.textShow = !this.textShow
      this.maxHeight = this.$refs.content.clientHeight
      console.log(this.maxHeight, this.$el)
    },
    hideText() {
      this.textShow = false
      this.maxHeight = this.$refs.hiddenContent.clientHeight
      console.log(this.$refs.hiddenContent.clientHeight)
      console.log(this.maxHeight)
    }
  },
  computed: {
    myStyles() {
      return {
        'max-height': `${this.maxHeight}px`
      }
    }
  },
  mounted() {}
}
</script>
