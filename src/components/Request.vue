<template lang="pug">
	section.request
		.container 
			.request__body
				.request__inner
					.request__content 
						h2.request__title Оставьте заявку
						p.request__sub-title Оставьте контакты и мы позвоним вам&nbsp;в&nbsp;течении #[span 30 секунд]
					form.request__form.form
						.form-item 
							input(type="tel" placeholder="Введите номер")
						input(type="submit", value="Заказать звонок").btn
						.form-text Нажимая на кнопку, вы соглашаетесь #[router-link(to="/text-page") политикой конфиденциальности] сайта
</template>
<script setup>
import { onMounted } from 'vue'
import maskPhone from '../utils/maskPhone.js'

onMounted(() => {
  maskPhone()
})
</script>
