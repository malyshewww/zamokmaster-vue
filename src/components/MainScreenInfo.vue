<template lang="pug">
	.main-screen__info
		.main-screen__content
			p Сейчас свободны #[span #{randomInteger(10, 16)} из #{randomInteger(18, 25)} мастеров]
			p К вам приедет ближайший из них
		span.main-screen__info-icon 
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    randomInteger(min, max) {
      // случайное число от min до (max+1)
      const randomNumbers = Math.floor(Math.random() * (max - min) + min)
      //   this.freeMasterStart = min + Math.random() * (max + 1 - min)
      //   Math.floor(Math.random() * (max - min + 1)) + min
      return randomNumbers
    }
  }
}
</script>
