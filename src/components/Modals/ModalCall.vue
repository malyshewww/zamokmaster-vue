<template lang="pug">
	Teleport(to="body")
		Modal(class="modal-call" id="modal-call" :class="[isOpenModal ? 'open-modal' : '']" @closeModal="closeModal")
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
  props: ['isOpenModal'],
  components: {
    Modal
  },
  data() {
    return {}
  },
  methods: {
    closeModal() {
      this.$emit('closeModal')
    },
    openModal() {
      this.$emit('openModal')
    }
  },
  computed() {
    maskPhone()
  }
}
</script>
