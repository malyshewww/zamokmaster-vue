<template lang="pug">
	.modal(@click="closeModal")
		.modal__wrapper 
			.modal__content(@click.stop)
				button(type="button" @click="closeModal").modal__close
				slot
</template>

<script>
export default {
  name: 'Modal',
  data() {
    return {
      isOpenModal: false
    }
  },
  methods: {
    closeModal() {
      this.$emit('closeModal')
    }
  }
}
</script>
