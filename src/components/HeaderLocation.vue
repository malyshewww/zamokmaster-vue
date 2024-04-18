<template lang="pug">
	.header__location.location-header
		.location-header__current Санкт-Петербург
		.location-header__choice 
			.location-header__header Ваш город #[span Санкт-Петербург?]
			.location-header__buttons 
				button(type="button").location-header__button.btn #[span Верно]
				button(type="button").location-header__button.btn.btn-border #[span Выбрать другой]
</template>

<script>
export default {
  data() {
    return {
      top: '',
      left: ''
    }
  },
  methods: {
    hoverButton(e) {
      console.log('hover')
      this.top = e.target.offsetTop
      this.left = e.target.offsetLeft
      this.$refs.btn_circle.style.left = `${this.left}px`
      this.$refs.btn_circle.style.top = `${this.top}px`
      this.$refs.btn_circle.classList.remove('desplode-circle')
      this.$refs.btn_circle.classList.add('explode-circle')
    },
    leaveButton(e) {
      this.top = e.target.offsetTop
      this.left = e.target.offsetLeft
      this.$refs.btn_circle.style.left = `${this.left}px`
      this.$refs.btn_circle.style.top = `${this.top}px`
      this.$refs.btn_circle.classList.remove('explode-circle')
      this.$refs.btn_circle.classList.add('desplode-circle')
    }
  },
  update() {
    hoverButton(), leaveButton()
  },
  mounted() {}
}
</script>
