<template lang="pug">
	.modal(@click="closeModal")
		.modal__wrapper 
			.modal__content(@click.stop)
				button(type="button" @click="closeModal").modal__close
				slot
</template>

<script setup>
const emit = defineEmits(['closeModal'])
const closeModal = () => {
  emit('closeModal')
}
</script>
