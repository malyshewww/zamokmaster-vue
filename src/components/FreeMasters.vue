<template lang="pug">
	p Сейчас свободны #[span #{randomIntFrom} из #{randomIntTo} мастеров]
</template>

<script>
export default {
  data() {
    return {
      randomFrom: null,
      randomTo: null
    }
  },
  methods: {
    randomInteger(min, max) {
      // случайное число от min до (max+1)
      const randomNumbers = Math.floor(Math.random() * (max - min) + min)
      //   this.freeMasterStart = min + Math.random() * (max + 1 - min)
      //   Math.floor(Math.random() * (max - min + 1)) + min
      return randomNumbers
    }
  },
  computed: {
    randomIntFrom() {
      return (this.randomFrom = this.randomInteger(10, 16))
    },
    randomIntTo() {
      return (this.randomTo = this.randomInteger(18, 25))
    }
  }
}
</script>
