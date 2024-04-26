<template lang="pug">
	Modal(class="modal-call" :class="[isOpenModal ? 'open-modal' : '']" id="modal-call" @close="toggleModal")
		.modal__header 
			.modal__title Оставьте заявку
			.modal__sub-title Оставьте заявку и наш мастер перезвонит вам в ближайшее время
		form(action="").modal__form.form 
			.form__items 
				.form-item 
					input(type="text" placeholder="Ваше имя")
				.form-item 
					input(type="tel" placeholder="Номер телефона")
			.form__bottom 
				input(type="submit", value="Заказать звонок").btn.form__button
				.form__agreement Нажимая на кнопку, вы соглашаетесь политикой конфиденциальности сайта
</template>

<script>
import Modal from '../../layouts/Modal.vue'
import maskPhone from '../../utils/maskPhone'
export default {
  components: {
    Modal
  },
  props: ['isOpenModal'],
  data() {
    return {}
  },
  methods: {
    closeModal() {
      this.$emit('close')
    }
  },
  computed() {
    maskPhone()
  }
}
</script>
