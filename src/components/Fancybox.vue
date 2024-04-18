<script setup>
import { Fancybox as NativeFancybox } from '@fancyapps/ui'
// import '@fancyapps/ui/dist/fancybox.css'
import { onMounted } from 'vue'

const props = defineProps({
  options: Object
})

onMounted(() => {
  const opts = props.options || {}
  NativeFancybox.bind('[data-fancybox="gallery"]', opts)
  return () => {
    NativeFancybox.destroy()
  }
})
</script>

<template lang="pug">
	slot
</template>
