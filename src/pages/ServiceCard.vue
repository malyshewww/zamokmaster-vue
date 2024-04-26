<template lang="pug">
	.page.service-card
		.main__top.top-main
			.container
				Breadcrumbs(pageTitle="Вскрытие автомобилей")
				.top-main__card 
					.top-main__card-image
						picture 
							source(srcset="../assets/images/card/image.jpg")
							img(src="../assets/images/card/image.jpg")
					.top-main__body
						.top-main__title.page-title Вскрытие автомобилей #[span в&nbsp;{{declensionCity()}}]
						a(href="tel:+79958881086").btn-phone.btn
							.btn-phone__text +7 (995) 888-10-86
							.btn-phone__icon
		.page__body 
			.container
				.service-card__body.page-layout
					.service-card__groups.section-groups
						CastleAdvantages
						.service-card__content.content
							p Специалисты «Мастер замков» смогут так же восстановить ключи от вашего авто, в том числе Чип-ключей, даже в случае их полной утери. За что не всегда берутся другие мастера. Причём делаем эту услугу быстро и качественно.
							p Опираясь на многолетний опыт, мы можем предложить наши услуги, указанные в нашем прайсе.
							p Если у вас ещё остались вопросы, или хотите заказать услугу нашего мастера, наберите номер горячей линии, указанный в шапке сайта, или закажите звонок, и наш специалист перезвонит вам в течение нескольких минут
							p ВАЖНО! Все работы по аварийному вскрытию автомобилей производятся при наличии документов, подтверждающих право собственности или договора аренды.
						CastleTypes(path="services", :count="12")
						.service-card__content.content
							p У вас не открывается ваш автомобиль? Вы захлопнули ключ в салоне автомобиля, или того хуже, ключи от вашей машины таинственным образом куда-то исчезли? Ситуаций может быть много, но всегда возникает самый главный вопрос: как быстро и без повреждений открыть ваше авто?
							p Наши мастера смогут помочь вам в решение данной проблемы, и готовы оперативно подъехать, и без повреждений вскрыть ваш автомобиль. Поможем разобраться с сигнализацией, и если причиной вскрытия автомобиля была ее внештатная блокировка, сумеем ее отключить.
							p Мы имеем большой опыт по аварийному вскрытию авто в Москве, также располагаем специальным оборудованием и большой коллекцией спец.инструмента, благодаря которому, способны аккуратно вскрыть замок автомобиля любой марки: от ретро- классики до авто последних моделей. При этом наши мастера готовы гарантировать качество работы, отсутствие любых дефектов, и поломок замка при вскрытии вашего авто. Наши методы вскрытия замков машин так же уникальны, и не имеют аналогов у наших конкурентов.
							p Мы охотно сотрудничаем в Москве со многими автосалонами и транспортными предприятиями города, оказывая профессиональную помощь по вскрытию авто организациям и частным лицам.
						.service-card__content.content
							.heading
								h2.heading__title.title-sm Прайс лист
							table
								thead
									tr
										th Услуга
										th Стоимость
								tbody
									tr(v-for="item in tablePrice.services")
										td {{ item.service }}
										td {{ item.price }}
							.disclamer
								p * Конечную стоимость всегда указывает мастер в зависимости от сложности предоставляемых ему работ
					Sidebar

</template>

<script>
import { cityIn, cityFrom, cityTo } from 'lvovich'
import obj from '../data.js'
import Breadcrumbs from '../components/Breadcrumbs.vue'
import Sidebar from '../components/Sidebar.vue'
import CastleAdvantages from '../components/CastleAdvantages.vue'
import CastleTypes from '../components/CastleTypes.vue'

import wrapTable from '../utils/tableWrap.js'

const { tablePrice } = obj

export default {
  components: {
    Sidebar,
    Breadcrumbs,
    CastleAdvantages,
    CastleTypes
  },
  data() {
    return {
      tablePrice,
      defaultCity: 'Санкт-Петербург'
    }
  },
  methods: {
    getCityStorage() {
      if (localStorage.getItem('city') == '') {
        return this.defaultCity
      } else {
        return localStorage.getItem('city')
      }
    },
    declensionCity() {
      return cityIn(this.getCityStorage())
    }
  },
  mounted() {
    wrapTable(), this.declensionCity()
  }
}
</script>
