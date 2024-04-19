<template lang="pug">
	button(type="button" @click="openModal").btn #[span Заказать звонок]
	.modal(class="modal-request" id="modal-request" :class="[showModal ? 'open-modal' : '']" @click="closeModal")
		.modal__wrapper 
			.modal__content(@click="noCloseModal") 
				button(type="button" @click="closeModal").modal__close
				.modal__header 
					.modal__title Оставьте заявку
					.modal__sub-title Оставьте заявку и наш мастер перезвонит вам в ближайшее время
				form(action="").modal__form.form 
					.form__items 
						.form-item 
							input(type="text" placeholder="Ваше имя")
						.form-item 
							input(type="text" placeholder="Номер телефона")
					.form__bottom 
						input(type="submit", value="Заказать звонок").btn.form__button
						.form__agreement Нажимая на кнопку, вы соглашаетесь политикой конфиденциальности сайта
</template>

<script>
export default {
  data() {
    return {
      showModal: false
    }
  },
  methods: {
    openModal(e, modalId) {
      this.showModal = true
    },
    closeModal(e) {
      this.showModal = false
    },
    noCloseModal(e) {
      e.stopPropagation()
    }
  }
}
</script>
