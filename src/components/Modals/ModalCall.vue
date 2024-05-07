<template lang="pug">
	Teleport(to="body")
		Modal(class="modal-call" :class="[isOpenModal ? 'open-modal' : '']" @closeModal="closeModal")
			.modal__header 
				.modal__title Оставьте заявку
				.modal__sub-title Оставьте заявку и наш мастер перезвонит вам в ближайшее время
			form(action="#").modal__form.form 
				.form__items 
					.form-item
						input(type="text" name="name" placeholder="Ваше имя")
					.form-item.form-item--error
						input(type="tel" name="phone" placeholder="Номер телефона")
						.form-item--error-message  Поле «Введите номер» обязательно для заполнения
				.form__bottom 
					input(type="submit", value="Заказать звонок").btn.form__button
					.form__agreement Нажимая на кнопку, вы соглашаетесь политикой конфиденциальности сайта
</template>

<script>
import Modal from '../../layouts/Modal.vue'
import maskPhone from '../../utils/maskPhone'
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
  },
  computed() {
    maskPhone()
  }
}
</script>
