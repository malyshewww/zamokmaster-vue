<template lang="pug">
	.page.castle-card
		.main__top.top-main
			.container
				Breadcrumbs(pageTitle="Карточка замка")
				.top-main__card 
					.top-main__card-image
						picture 
							source(:srcset="`./images/card/logo.png`")
							img(:src="`./images/card/logo.png`")
					.top-main__body
						.top-main__title.page-title Вскрытие замка MSM #[span в&nbsp;{{ declensionCity() }}]
						a(href="tel:+79958881086").btn-phone.btn
							.btn-phone__text +7 (995) 888-10-86
							.btn-phone__icon
		.page__body 
			.container
				.castle-card__body.page-layout
					.castle-card__groups.section-groups
						.castle-card__content.content
							p Paxos- это серия безопасных и надёжных замков, которые постоянно самодиагностируют себя, и сообщают пользователю информацию о работоспособности через ЖК-экран.
							p В технологии Lock-by-Wire, адаптированная для авиационной промышленности,  все данные передаются по проводам на две независимые электронные схемы безопасности в корпусе замка. Они и приводят в движение болт мотора через два мотора, тем самым освобождая дверной засов, чтобы открыть дверь сейфа или хранилища.
							p Подсчитано, что система проработает около 15 миллионов часов.
							p Как вскрыть замок Paxos?
							p Вскрытие можно произвести несколькими способами: профессиональным - это обратиться за помощью к профильному специалисту, который гарантированно откроет вашу собственность без повреждений;
						CastleAdvantages
						CastleTypes(path="card", :count="8")
					Sidebar

</template>

<script>
import { cityIn, cityFrom, cityTo } from 'lvovich'
import Sidebar from '../components/Sidebar.vue'
import Breadcrumbs from '../components/Breadcrumbs.vue'
import CastleAdvantages from '../components/CastleAdvantages.vue'
import CastleTypes from '../components/CastleTypes.vue'

export default {
  props: ['defaultCity'],
  components: {
    Sidebar,
    Breadcrumbs,
    CastleAdvantages,
    CastleTypes
  },
  data() {
    return {
      localCity: this.defaultCity
    }
  },
  methods: {
    getCityStorage() {
      if (localStorage.getItem('city') !== null) {
        return localStorage.getItem('city')
      } else {
        return this.localCity
      }
    },
    declensionCity() {
      return cityIn(this.getCityStorage())
    }
  },
  mounted() {
    window.addEventListener('load', () => {
      this.declensionCity()
    })
  }
}
</script>
