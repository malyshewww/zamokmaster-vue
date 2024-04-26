<template lang="pug">
	.modal(:class="{modalClass} [isOpenModal ? 'open-modal' : '']" :id="{modalId}" @click="closeModal")
		.modal__wrapper 
			.modal__content(@click.stop)
				button(type="button" @click="closeModal").modal__close
				slot
</template>

<script>
export default {
  props: ['modalId', 'modalClass', 'isOpenModal'],
  name: 'Modal',
  data() {
    return {
      isOpenModal: false
    }
  },
  methods: {
    noCloseModal(e) {
      e.stopPropagation()
    },
    closeModal() {
      this.$emit('close')
    }
  }
}
</script>
