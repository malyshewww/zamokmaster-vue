<template lang="pug">
	.page.service-list
		.main__top.top-main
			.container
				Breadcrumbs(pageTitle="Услуги")
				.top-main__content 
					.top-main__body 
						h1.top-main__title.page-title Услуги Замокмастер #[span {{ declensionCity }}]
						p.top-main__sub-title Поможем открыть любой замок без повреждений двери. Срочный выезд за 15–20 минут
					a(href="tel:+79958881086").btn-phone.btn
						.btn-phone__text +7 (995) 888-10-86
						.btn-phone__icon
		.page__body
			.container 
				.service-list__wrapper.section-groups
					.service-list__body
						.services__item.item-services(v-for="(service, index) in servicesList")
							.item-services__content
								.item-services__title {{ service }}
								.item-services__bottom
									span.item-services__icon 
										picture
											source(:srcset=`'./images/service-list/icon-'+(index+1)+'.png'` media="(min-width: 767.98px)")
											source(:srcset=`'./images/service-list/icon-'+(index+1)+'-mob.png'` media="(min-width: 300px)")
											img(:src=`'./images/service-list/icon-'+(index+1)+'.png'`, :alt="service" loading="lazy")
					.service-list__content.content 
						p В жизни каждого человека случаются непредвиденные ситуации: захлопнулась дверь, сломался замок, или не открывается ваш автомобиль. А может вы потеряли ключи от сейфа, и теперь не знаете что делать?
						p Главное, не поддавайтесь панике, и не пытайтесь, с помощью подручных инструментов, самостоятельно решить данную проблему, разрушая тем самым не только конструкцию замка, но и целостность самой двери.
						p Теперь у вас есть надёжный помощник-специалист компании "Замок- В жизни каждого человека случаются непредвиденные ситуации: захлопнулась дверь, сломался замок, или не 
</template>

<script setup>
import { defineComponent } from 'vue'
import { useMeta } from 'vue-meta'
import obj from '../data.js'
import Breadcrumbs from '../components/Breadcrumbs.vue'

const { servicesList } = obj

const props = defineProps(['defaultCity', 'declensionCity'])

defineComponent({
  head: {},
  setup() {
    const { title } = useMeta()
    title.value = 'Список услуг'
  }
})
</script>
