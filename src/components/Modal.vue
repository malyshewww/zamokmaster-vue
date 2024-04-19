<template lang="pug">
	.modal(class=modalClass id=modalId @click="$emit('openModal')")
		.modal__wrapper 
			.modal__content(@click="noCloseModal") 
				button(type="button" @click="closeModal").modal__close
				slot
</template>

<script>
export default {
  props: ['modalId', 'modalClass'],
  methods: {
    noCloseModal(e) {
      e.stopPropagation()
    },
    closeModal(e) {
      this.$refs.modal.classList.remove('open-modal')
      document.body.classList.remove('lock')
    }
  }
}
</script>
