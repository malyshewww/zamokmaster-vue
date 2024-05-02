<template lang="pug">
	.widget-call(@click="toggleModal")
	ModalCall(@closeModal="toggleModal" :isOpenModal="isOpenModal")
</template>

<script>
import ModalCall from '../components/Modals/ModalCall.vue'
export default {
  components: {
    ModalCall
  },
  data() {
    return {
      isOpenModal: false
    }
  },
  methods: {
    toggleModal() {
      document.body.classList.toggle('lock')
      this.isOpenModal = !this.isOpenModal
    }
  }
}
</script>
