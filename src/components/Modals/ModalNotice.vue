<template lang="pug">
	Teleport(to="body")
		Modal(class="modal-notice" @closeModal="closeModal")
			.modal__title Заявка успешно отправлена
</template>

<script>
import Modal from '../../layouts/Modal.vue'
export default {
  props: ['isOpenModal'],
  emits: ['closeModal'],
  components: {
    Modal
  },
  data() {
    return {}
  },
  methods: {
    closeModal() {
      this.$emit('closeModal')
    }
  }
}
</script>
