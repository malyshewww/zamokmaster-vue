<template lang="pug">
	.page.castle-card
		.main__top.top-main
			.container
				.breadcrumbs
					nav.breadcrumbs__navigation
						ul.breadcrumbs__list 
							li.breadcrumbs__item
								a(href="/home").breadcrumbs__link Главная
							li.breadcrumbs__item Название замка
				.top-main__card 
					.top-main__card-image
						picture 
							source(srcset="../../images/card/logo.png")
							img(src="../../images/card/logo.png")
					.top-main__body
						.top-main__title.page-title Вскрытие замка MSM #[span в&nbsp;Санкт-Петербурге]
						a(href="tel:+79958881086").btn-phone
							.btn-phone__text +7 (995) 888-10-86
							.btn-phone__icon
		.page__body 
			.container
				.castle-card__body 
					.castle-card__groups 
						.castle-card__group 
							.castle-card__content.content
								p Paxos- это серия безопасных и надёжных замков, которые постоянно самодиагностируют себя, и сообщают пользователю информацию о работоспособности через ЖК-экран.
								p В технологии Lock-by-Wire, адаптированная для авиационной промышленности,  все данные передаются по проводам на две независимые электронные схемы безопасности в корпусе замка. Они и приводят в движение болт мотора через два мотора, тем самым освобождая дверной засов, чтобы открыть дверь сейфа или хранилища.
								p Подсчитано, что система проработает около 15 миллионов часов.
								p Как вскрыть замок Paxos?
								p Вскрытие можно произвести несколькими способами: профессиональным - это обратиться за помощью к профильному специалисту, который гарантированно откроет вашу собственность без повреждений;
						.castle-card__group 
							.castle-advantages
								.heading 
									h2.heading__title.title-sm Преимущества
								.castle-advantages__items
									.castle-advantages__item(v-for="(item, index) in castleAdvantages" :class=`'castle-advantages__item--'+(index+1)`)
										span.castle-advantages__icon
										.castle-advantages__content
											.castle-advantages__caption {{ item.caption }}
											.castle-advantages__description {{ item.descr }}
						.castle-card__group 
							.castle-types
								.heading
									h2.heading__title.title-sm Открываем все виды замков
								.castle-types__body
									.castle-item(v-for="(item, index) in 8")
										.castle-item__image
											picture 
												source(:srcset=`"../../images/castle-types/card/type-"+(index+1)+'.png'`)
												img(:src=`"../../images/castle-types/card/type-"+(index+1)+'.png'`, alt="")
								a(href="#").castle-types__button.btn Все замки
					Sidebar

</template>

<script>
import obj from '../data.js'
import Sidebar from '../components/Sidebar.vue'
const { castleAdvantages } = obj
export default {
  components: {
    Sidebar
  },
  data() {
    return {
      castleAdvantages
    }
  }
}
</script>
