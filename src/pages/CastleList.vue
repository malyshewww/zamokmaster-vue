<template lang="pug">
	.page.castle-list
		.main__top.top-main
			.container
				Breadcrumbs(pageTitle="Список замков")
				.top-main__content 
					.top-main__body 
						h1.top-main__title.page-title Вскрытие всех видов замков в #[span {{ declensionCity }}]
						p.top-main__sub-title Профессиональное вскрытие замков. Официально, предоставляем все документы
					a(href="tel:+79958881086").btn-phone.btn
						.btn-phone__text +7 (995) 888-10-86
						.btn-phone__icon
		.page__body
			.container
				.castle-list__body.page-layout
					.castle-list__categories.section-groups 
						section.castle-list__section.category-castle(v-for="item in castleList")
							.heading
								h2.heading__title.title-sm {{ item.title }}
							.category-castle__items 
								router-link(to="/castle-card" v-for="(child, index) in item.children").category-castle__item
									.category-castle__image
										.category-castle__logo
											picture 
												source(:srcset=`"./images/castlelist/"+item.path+'/'+(index+1)+'.png'` media="(min-width: 767.98px)")
												//- source(:srcset=`"../../images/castlelist/"+item.path+'/'+(index+1)+'-mob.png'` media="(min-width: 300px)")
												img(:src=`"./images/castlelist/"+item.path+'/'+(index+1)+'.png'`, :alt="child" loading="lazy")
									.category-castle__name {{child}}
						.castle-list__content.content 
							p ABUS — это немецкая компания, которая с 1924 года разрабатывает охранные системы. Марка ABUS позиционирует себя как лидером уникальных изобретений, у которых запатентованные сплавы сверхпрочных металлов.
							p Компания входит независимую группу предприятий, работающую по всему миру в области механических и электронных систем безопасности. Замки Абус использоваются как для внутрених так и наружних помещений и всепогодных условий.
							p Область приминения замков Абус очень обширна, начиная защиты вашего самоката, велосипеда, мотоцикла, заканчивая защитой вашего гаража, бытовых и промышленных сооружений. Они просты в использовании и при этом очень прочные, эффективно защищают от взлома. Также вся продукция проходит тестирование на заморозку жидким азотом. После заморозки металл не теряет своих свойств и сопротивляется взлому.
					Sidebar
</template>

<script>
import { useMeta } from 'vue-meta'
import obj from '../data.js'
import Sidebar from '../components/Sidebar.vue'
import Breadcrumbs from '../components/Breadcrumbs.vue'

const { castleList } = obj
export default {
  setup() {
    useMeta({ title: 'Список замков' })
  },
  props: ['defaultCity', 'declensionCity'],
  components: {
    Sidebar,
    Breadcrumbs
  },
  data() {
    return {
      castleList
    }
  },
  methods: {},
  mounted() {}
}
</script>
