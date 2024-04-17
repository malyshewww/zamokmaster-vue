<template lang="pug">
	.page.about
		.main__top.top-main
			.container
				.breadcrumbs
					nav.breadcrumbs__navigation
						ul.breadcrumbs__list 
							li.breadcrumbs__item
								a(href="/home").breadcrumbs__link Главная
							li.breadcrumbs__item О компании
				.top-main__content 
					h1.top-main__title.page-title О компании
		.page__body
			.about__data
				.container 
					.about__body 
						nav.about__navigation.nav-about
							ul.nav-about__list 
								li.nav-about__item.active 1994
								li.nav-about__item 2005
								li.nav-about__item 2013
								li.nav-about__item 2014
								li.nav-about__item 2024
						.about__sections 
							section.about-section.about-section--beginning
								h2.about-section__title Начало работы компании
								.about-section__content.content 
									p В период с 1994 года мы&nbsp;специализировались на&nbsp;производстве и&nbsp;продаже элитных защитных дверей.
									p Мы также являлись официальными дилерами производителей самых надёжных (на тот момент) замков, таких как Ciza, Motura и MUL-T-LOCK. Помимо установки замков и монтажа двери, мы брали на себя обязательства по их гарантийному обслуживанию. 
									p В рамках гарантийного обслуживания мы регулярно производили ремонт и замену замков, перекодировку ключей. В случае форс мажорных ситуаций наши мастера производили работы по аварийному вскрытию замков. Важно было не повредить дорогостоящие двери и по возможности сохранить сам замок, чтобы в дальнейшем произвести его рекламацию. Таким образом у нас постепенно появлялся практический опыт настоящих мастеров понимающих в замках и принципах их работы/защиты.
								.about-section__images 
									.about-section__image.ibg
										picture 
											source(srcset="../../images/about/beginning/1.jpg")
											img(src="../../images/about/beginning/1.jpg", alt="фото")
									.about-section__image.ibg
										picture 
											source(srcset="../../images/about/beginning/2.jpg")
											img(src="../../images/about/beginning/2.jpg", alt="фото")
							section.about-section.about-section--scaling
								h2.about-section__title Масштабирование компании #[span по&nbsp;вскрытию&nbsp;замков]
								.about-section__content.content 
									p Наши услуги по вскрытию замков стали востребованы в разных секторах использования замочных механизмов. В итоге наш опыт и знания нашли своё применение во вскрытии автомобильного транспорта. К 2005 году, мы уже сотрудничали со многим официальным и частным автосалонами в рамках договорных гарантийных обязательств.
								.about-section__images 
									.about-section__image.ibg
										picture 
											source(srcset="../../images/about/scaling/1.jpg")
											img(src="../../images/about/scaling/1.jpg", alt="фото")
							section.about-section.about-section--progress
								h2.about-section__title Развитие направления #[span по продаже, обслуживанию и вскрытию сейфов]
								.about-section__content.content 
									p В 2012 открылось первое представительство в городе Уфе компании Промет (крупнейший производитель сейфов и сейфового оборудования в России). К тому моменту мы имели значительный опыт по обслуживанию/вскрытию сейфов и защитных механизмов, в том числе повышенного класса взломостойкости. За 19 лет мы заслужили надёжную репутацию партнёра.
									p И в 2013 наша компания приняла предложение стать, одним из первых дилеров Промет. Мы вззяли на себя гарантийное обязательство по обслуживанию и вскрытию (в случае необходимости), производимого компанией сейфового оборудования.
								.about-section__learning.learning-box
									.learning-box__caption В рамках сотрудничества с «Промет» наши специалисты:
									.learning-box__items 
										.learning-box__item Посещали специализированные семинары федерального и международного уровня
										.learning-box__item Изучали замки и защитные системы, банковских хранилищ, кассовых терминалов, банкоматов.
										.learning-box__item Сделали аварийное вскрытие, работу спец. инструментом ключевой специализацией.
								.about-section__images 
									.about-section__image.ibg
										picture 
											source(srcset="../../images/about/progress/1.jpg")
											img(src="../../images/about/progress/1.jpg", alt="фото")
									.about-section__image.ibg
										picture 
											source(srcset="../../images/about/progress/2.jpg")
											img(src="../../images/about/progress/2.jpg", alt="фото")
							section.about-section.about-section--leaders
								h2.about-section__title Лидеры по вскрытию замков #[span в&nbsp;нескольких&nbsp;регионах России]
								.about-section__content.content 
									p С 2014 года мы уже обслуживаем на постоянной тендерной основе, такие организации как Сбербанк, ВТБ, Газпром, Сургутнефтегаз и др., в том числе бюджетные предприятия региона.
								.about-section__logos
									.about-section__logo 
										picture 
											source(srcset="../../images/about/leaders/logo-sber.svg" media="(min-width: 767.98px)")
											source(srcset="../../images/about/leaders/logo-sber-mob.svg" media="(min-width: 300px)")
											img(src="../../images/about/leaders/logo-sber.svg", alt="сбербанк")
									.about-section__logo 
										picture 
											source(srcset="../../images/about/leaders/logo-vtb.svg" media="(min-width: 767.98px)")
											source(srcset="../../images/about/leaders/logo-vtb-mob.svg" media="(min-width: 300px)")
											img(src="../../images/about/leaders/logo-vtb.svg", alt="втб")
									.about-section__logo
										picture 
											source(srcset="../../images/about/leaders/logo-gazprom.svg" media="(min-width: 767.98px)")
											source(srcset="../../images/about/leaders/logo-gazprom-mob.svg" media="(min-width: 300px)")
											img(src="../../images/about/leaders/logo-gazprom.svg", alt="газпром")
									.about-section__logo 
										picture 
											source(srcset="../../images/about/leaders/logo-surgutneft.svg" media="(min-width: 767.98px)")
											source(srcset="../../images/about/leaders/logo-surgutneft-mob.svg" media="(min-width: 300px)")
											img(src="../../images/about/leaders/logo-surgutneft.svg", alt="сургутнефть")
							section.about-section.about-section--expansion
								h2.about-section__title Расширение филиальной сети #[span по России]
								.about-section__content.content 
									p В настоящее время наша компания активно развивается сотрудничая, как с юридическими так и физическими лицами во многих регионах России и ближнего зарубежья. Мы налаживаем честное профессиональное сотрудничество с мастерами разных городов, передаем им наш опыт и знания в рамках обучения. 
								.about-section__image.ibg
									picture
										source(srcset="../../images/about/expansion/map.svg")
										img(src="../../images/about/expansion/map.svg", alt="карта")
			Questions
</template>

<script>
import Questions from '../components/Questions.vue'
export default {
  components: {
    Questions
  },
  data() {
    return {}
  }
}
</script>
