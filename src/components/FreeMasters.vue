<template lang="pug">
	p Сейчас свободны #[span #{randomIntFrom} из #{randomIntTo} мастеров]
</template>

<script setup>
import { ref, computed } from 'vue'

const randomFrom = ref(null)
const randomTo = ref(null)

const randomInteger = (min, max) => {
  // случайное число от min до (max+1)
  const randomNumbers = Math.floor(Math.random() * (max - min) + min)
  //   this.freeMasterStart = min + Math.random() * (max + 1 - min)
  //   Math.floor(Math.random() * (max - min + 1)) + min
  return randomNumbers
}
const randomIntFrom = computed(() => {
  return (randomFrom.value = randomInteger(10, 16))
})
const randomIntTo = computed(() => {
  return (randomTo.value = randomInteger(18, 25))
})
</script>
