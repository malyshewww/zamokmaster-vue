<template lang="pug">
	.page.about
		.main__top.top-main
			.container
				Breadcrumbs(pageTitle="О компании")
				.top-main__content 
					h1.top-main__title.page-title О компании
		.page__body
			.about__data(ref="about_data")
				.container 
					.about__body(ref="about_body")
						nav.about__navigation.nav-about(ref="nav_about" @click="manualSmoothScroll($event)")
							ul.nav-about__list
								li.nav-about__list-item
									a(href="javascript:void(0);" data-anchor-link="year-1994").nav-about__link.active 1994
								li.nav-about__list-item
									a(href="javascript:void(0);" data-anchor-link="year-2005").nav-about__link 2005
								li.nav-about__list-item
									a(href="javascript:void(0);" data-anchor-link="year-2013").nav-about__link 2013
								li.nav-about__list-item
									a(href="javascript:void(0);" data-anchor-link="year-2014").nav-about__link 2014
								li.nav-about__list-item
									a(href="javascript:void(0);" data-anchor-link="year-2024").nav-about__link 2024
						.about__sections 
							.swiper(ref="contentSlider")
								.swiper-wrapper
									section.about-section.about-section--beginning(id="year-1994" data-anchor-section="year-1994")
										h2.about-section__title Начало работы компании
										.about-section__content.content 
											p В период с 1994 года мы&nbsp;специализировались на&nbsp;производстве и&nbsp;продаже элитных защитных дверей.
											p Мы также являлись официальными дилерами производителей самых надёжных (на тот момент) замков, таких как Ciza, Motura и MUL-T-LOCK. Помимо установки замков и монтажа двери, мы брали на себя обязательства по их гарантийному обслуживанию. 
											p В рамках гарантийного обслуживания мы регулярно производили ремонт и замену замков, перекодировку ключей. В случае форс мажорных ситуаций наши мастера производили работы по аварийному вскрытию замков. Важно было не повредить дорогостоящие двери и по возможности сохранить сам замок, чтобы в дальнейшем произвести его рекламацию. Таким образом у нас постепенно появлялся практический опыт настоящих мастеров понимающих в замках и принципах их работы/защиты.
										.about-section__images 
											.about-section__image.ibg
												picture 
													source(:srcset="`/images/about/beginning/1.jpg`")
													img(:src="`/images/about/beginning/1.jpg`", alt="фото" loading="lazy")
											.about-section__image.ibg
												picture 
													source(:srcset="`/images/about/beginning/2.jpg`")
													img(:src="`/images/about/beginning/2.jpg`", alt="фото")
									section.about-section.about-section--scaling(id="year-2005" data-anchor-section="year-2005")
										h2.about-section__title Масштабирование компании #[span по&nbsp;вскрытию&nbsp;замков]
										.about-section__content.content 
											p Наши услуги по вскрытию замков стали востребованы в разных секторах использования замочных механизмов. В итоге наш опыт и знания нашли своё применение во вскрытии автомобильного транспорта. К 2005 году, мы уже сотрудничали со многим официальным и частным автосалонами в рамках договорных гарантийных обязательств.
										.about-section__images 
											.about-section__image.ibg
												picture 
													source(:srcset="`/images/about/scaling/1.jpg`")
													img(:src="`/images/about/scaling/1.jpg`", alt="фото" loading="lazy")
									section.about-section.about-section--progress(id="year-2013" data-anchor-section="year-2013")
										h2.about-section__title #[span Развитие направления] по продаже, обслуживанию и вскрытию сейфов
										.about-section__content.content 
											p В 2012 открылось первое представительство в городе Уфе компании Промет (крупнейший производитель сейфов и сейфового оборудования в России). К тому моменту мы имели значительный опыт по обслуживанию/вскрытию сейфов и защитных механизмов, в том числе повышенного класса взломостойкости. За 19 лет мы заслужили надёжную репутацию партнёра.
											p И в 2013 наша компания приняла предложение стать, одним из первых дилеров Промет. Мы вззяли на себя гарантийное обязательство по обслуживанию и вскрытию (в случае необходимости), производимого компанией сейфового оборудования.
										.about-section__learning.learning-box
											.learning-box__caption В рамках сотрудничества с&nbsp;«Промет» наши специалисты:
											.learning-box__items 
												.learning-box__item Посещали специализированные семинары федерального и международного уровня
												.learning-box__item Изучали замки и защитные системы, банковских хранилищ, кассовых терминалов, банкоматов.
												.learning-box__item Сделали аварийное вскрытие, работу спец. инструментом ключевой специализацией.
										.about-section__images 
											.about-section__image.ibg
												picture 
													source(:srcset="`/images/about/progress/1.jpg`")
													img(:src="`/images/about/progress/1.jpg`", alt="фото" loading="lazy")
											.about-section__image.ibg
												picture 
													source(:srcset="`/images/about/progress/2.jpg`")
													img(:src="`/images/about/progress/2.jpg`", alt="фото" loading="lazy")
									section.about-section.about-section--leaders(id="year-2014" data-anchor-section="year-2014")
										h2.about-section__title Лидеры по вскрытию замков #[span в&nbsp;нескольких регионах России]
										.about-section__content.content 
											p С 2014 года мы уже обслуживаем на постоянной тендерной основе, такие организации как Сбербанк, ВТБ, Газпром, Сургутнефтегаз и др., в том числе бюджетные предприятия региона.
										.about-section__logos
											.about-section__logo 
												picture 
													source(:srcset="`/images/about/leaders/logo-sber.svg`" media="(min-width: 767.98px)")
													source(:srcset="`/images/about/leaders/logo-sber-mob.svg`" media="(min-width: 300px)")
													img(:src="`/images/about/leaders/logo-sber.svg`", alt="сбербанк" loading="lazy")
											.about-section__logo 
												picture 
													source(:srcset="`/images/about/leaders/logo-vtb.svg`" media="(min-width: 767.98px)")
													source(:srcset="`/images/about/leaders/logo-vtb-mob.svg`" media="(min-width: 300px)")
													img(:src="`/images/about/leaders/logo-vtb.svg`", alt="втб" loading="lazy")
											.about-section__logo
												picture 
													source(:srcset="`/images/about/leaders/logo-gazprom.svg`" media="(min-width: 767.98px)")
													source(:srcset="`/images/about/leaders/logo-gazprom-mob.svg`" media="(min-width: 300px)")
													img(:src="`/images/about/leaders/logo-gazprom.svg`", alt="газпром" loading="lazy")
											.about-section__logo 
												picture 
													source(:srcset="`/images/about/leaders/logo-surgutneft.svg`" media="(min-width: 767.98px)")
													source(:srcset="`/images/about/leaders/logo-surgutneft-mob.svg`" media="(min-width: 300px)")
													img(:src="`/images/about/leaders/logo-surgutneft.svg`", alt="сургутнефть" loading="lazy")
									section.about-section.about-section--expansion(id="year-2024" data-anchor-section="year-2024")
										h2.about-section__title Расширение филиальной сети #[span по России]
										.about-section__content.content 
											p В настоящее время наша компания активно развивается сотрудничая, как с юридическими так и физическими лицами во многих регионах России и ближнего зарубежья. Мы налаживаем честное профессиональное сотрудничество с мастерами разных городов, передаем им наш опыт и знания в рамках обучения. 
										.about-section__image.ibg
											picture
												source(:srcset="`/images/about/expansion/map.svg`")
												img(:src="`/images/about/expansion/map.svg`", alt="карта" loading="lazy")
								.swiper-scrollbar
			Questions
</template>

<script setup>
import { ref, reactive, onMounted, computed } from 'vue'
import Swiper from 'swiper'
import { Scrollbar, FreeMode, Thumbs } from 'swiper/modules'
import Questions from '../components/Questions.vue'
import Breadcrumbs from '../components/Breadcrumbs.vue'

import { useRoute } from 'vue-router'
import { useHead } from '@vueuse/head'

const route = useRoute()
const title = computed(() => route.meta.title)

useHead({
  title: title.value,
  meta: [
    {
      name: 'description',
      content: `Описание на странице ${title.value}`
    }
  ]
})

const props = defineProps(['defaultCity', 'declensionCity'])

const state = reactive({
  menuObserver: null,
  contentSlider: null,
  navSlider: null,
  count: 0
})

const nav_about = ref()
const contentSlider = ref()

const manualSmoothScroll = (event) => {
  if (window.innerWidth > 991.98) {
    const id = event.target.closest('.nav-about a')?.getAttribute('data-anchor-link')
    if (!id) return
    const target = document.querySelector(`[data-anchor-section="${id}"]`)
    if (!target) return
    event.preventDefault()
    target.scrollIntoView({
      behavior: 'smooth',
      block: `${id == 'year-2014' ? 'center' : 'start'}`
    })
  }
}
const observeNav = () => {
  if (window.innerWidth > 991.98) {
    let lastTimeout
    // Отслеживание пересечения секции и добавление класса для навигации
    const changeNav = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1
          if (lastTimeout) clearTimeout(lastTimeout)
          lastTimeout = setTimeout(function () {
            state.count++
            ;[...document.querySelectorAll('.nav-about a.active')].forEach((item) => {
              item.classList.remove('active')
            })
            let id = entry.target.getAttribute('id')
            document
              .querySelector(`.nav-about a[data-anchor-link="${id}"]`)
              ?.classList.add('active')
          }, 350)
        }
      })
    }
    const menuOptions = {
      threshold: [0.45]
    }
    state.menuObserver = new IntersectionObserver(changeNav, menuOptions)
    const sections = document.querySelectorAll('[data-anchor-section]')
    sections.forEach((section) => {
      state.menuObserver.observe(section)
    })
  }
}
const initSlider = () => {
  if (!state.navSlider && !state.contentSlider) {
    state.navSlider = new Swiper(nav_about.value, {
      slideClass: 'nav-about__list-item',
      wrapperClass: 'nav-about__list',
      speed: 800,
      freeMode: true,
      slidesPerView: 'auto',
      spaceBetween: 20
    })
    state.contentSlider = new Swiper(contentSlider.value, {
      modules: [FreeMode, Scrollbar, Thumbs],
      // direction: 'vertical',
      slidesPerView: 1,
      slideClass: 'about-section',
      spaceBetween: 100,
      speed: 800,
      autoHeight: true,
      watchActiveIndex: true,
      spaceBetween: 20,
      scrollbar: {
        el: '.swiper-scrollbar',
        dragSize: 74
      },
      thumbs: {
        swiper: state.navSlider
      }
    })
  }
}
const destroySlider = () => {
  if (state.navSlider) {
    state.navSlider.destroy()
    state.navSlider = null
  }
  if (state.contentSlider) {
    state.contentSlider.destroy()
    state.contentSlider = null
  }
}
const checkScreenWidth = () => {
  if (window.matchMedia('(max-width: 991.98px)').matches) {
    initSlider()
  } else {
    destroySlider()
  }
}
const setPositionNavAbout = () => {
  if (window.innerWidth > 991.98) {
    window.addEventListener('scroll', () => {
      const header = document.querySelector('.header')
      if (header.classList.contains('hide')) {
        nav_about.value.style.top = `0px`
      } else {
        nav_about.value.style.top = `${header.clientHeight + 20}px`
      }
    })
  } else {
    return false
  }
}

onMounted(() => {
  if (window.scrollY >= 0) {
    observeNav()
  }
  setPositionNavAbout()
  checkScreenWidth()
  window.addEventListener('resize', () => {
    checkScreenWidth()
    setPositionNavAbout()
    observeNav()
  })
})
</script>
