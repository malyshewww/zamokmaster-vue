<template lang="pug">
	.widget-call(@click="toggleModal")
	ModalCall(@closeModal="toggleModal" :isOpenModal="isOpenModal")
</template>

<script setup>
import { ref } from 'vue'
import ModalCall from '../components/Modals/ModalCall.vue'

const isOpenModal = ref(false)

const toggleModal = () => {
  document.body.classList.toggle('lock')
  isOpenModal.value = !isOpenModal.value
}
</script>
