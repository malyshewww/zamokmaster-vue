<template lang="pug">
	Teleport(to="body")
		Modal(class="modal-notice" :class="[isOpenModal ? 'open-modal' : '']" id="modal-notice" @closeModal="closeModal")
			.modal__title Заявка успешно отправлена
</template>

<script setup>
import Modal from '../../layouts/Modal.vue'

const props = defineProps(['isOpenModal'])
const emit = defineEmits(['closeModal'])

const closeModal = () => {
  emit('closeModal')
}
</script>
