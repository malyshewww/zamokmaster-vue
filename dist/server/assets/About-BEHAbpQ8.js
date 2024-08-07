import { computed, reactive, ref, onMounted, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import Swiper from "swiper";
import { FreeMode, Scrollbar, Thumbs } from "swiper/modules";
import { Q as Questions } from "./Questions-CBRBJScZ.js";
import { _ as _sfc_main$1 } from "./Breadcrumbs-BtW0J10y.js";
import { useRoute } from "vue-router";
import { useHead } from "@vueuse/head";
import "../entry-server.js";
import "lvovich";
import "axios";
import "pinia";
const _sfc_main = {
  __name: "About",
  __ssrInlineRender: true,
  props: ["defaultCity", "declensionCity"],
  setup(__props) {
    const route = useRoute();
    const title = computed(() => route.meta.title);
    useHead({
      title: title.value,
      meta: [
        {
          name: "description",
          content: `Описание на странице ${title.value}`
        }
      ]
    });
    const state = reactive({
      menuObserver: null,
      contentSlider: null,
      navSlider: null,
      count: 0
    });
    const nav_about = ref();
    const contentSlider = ref();
    const observeNav = () => {
      if (window.innerWidth > 991.98) {
        let lastTimeout;
        const changeNav = (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.style.opacity = 1;
              if (lastTimeout) clearTimeout(lastTimeout);
              lastTimeout = setTimeout(function() {
                var _a;
                state.count++;
                [...document.querySelectorAll(".nav-about a.active")].forEach((item) => {
                  item.classList.remove("active");
                });
                let id = entry.target.getAttribute("id");
                (_a = document.querySelector(`.nav-about a[data-anchor-link="${id}"]`)) == null ? void 0 : _a.classList.add("active");
              }, 350);
            }
          });
        };
        const menuOptions = {
          threshold: [0.45]
        };
        state.menuObserver = new IntersectionObserver(changeNav, menuOptions);
        const sections = document.querySelectorAll("[data-anchor-section]");
        sections.forEach((section) => {
          state.menuObserver.observe(section);
        });
      }
    };
    const initSlider = () => {
      if (!state.navSlider && !state.contentSlider) {
        state.navSlider = new Swiper(nav_about.value, {
          slideClass: "nav-about__list-item",
          wrapperClass: "nav-about__list",
          speed: 800,
          freeMode: true,
          slidesPerView: "auto",
          spaceBetween: 20
        });
        state.contentSlider = new Swiper(contentSlider.value, {
          modules: [FreeMode, Scrollbar, Thumbs],
          // direction: 'vertical',
          slidesPerView: 1,
          slideClass: "about-section",
          spaceBetween: 100,
          speed: 800,
          autoHeight: true,
          watchActiveIndex: true,
          spaceBetween: 20,
          scrollbar: {
            el: ".swiper-scrollbar",
            dragSize: 74
          },
          thumbs: {
            swiper: state.navSlider
          }
        });
      }
    };
    const destroySlider = () => {
      if (state.navSlider) {
        state.navSlider.destroy();
        state.navSlider = null;
      }
      if (state.contentSlider) {
        state.contentSlider.destroy();
        state.contentSlider = null;
      }
    };
    const checkScreenWidth = () => {
      if (window.matchMedia("(max-width: 991.98px)").matches) {
        initSlider();
      } else {
        destroySlider();
      }
    };
    const setPositionNavAbout = () => {
      const navAbout = document.querySelector(".nav-about");
      if (window.innerWidth > 991.98) {
        window.addEventListener("scroll", () => {
          const header = document.querySelector(".header");
          if (header.classList.contains("hide")) {
            if (navAbout) {
              navAbout.style.top = `0px`;
            }
          } else {
            if (navAbout) {
              navAbout.style.top = `${header.clientHeight + 20}px`;
            }
          }
        });
      } else {
        return false;
      }
    };
    onMounted(() => {
      if (window.scrollY >= 0) {
        observeNav();
      }
      setPositionNavAbout();
      checkScreenWidth();
      window.addEventListener("resize", () => {
        checkScreenWidth();
        setPositionNavAbout();
        observeNav();
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page about" }, _attrs))}><div class="main__top top-main"><div class="container">`);
      _push(ssrRenderComponent(_sfc_main$1, { pageTitle: "О компании" }, null, _parent));
      _push(`<div class="top-main__content"><h1 class="top-main__title page-title">О компании</h1></div></div></div><div class="page__body"><div class="about__data"><div class="container"><div class="about__body"><nav class="about__navigation nav-about"><ul class="nav-about__list"><li class="nav-about__list-item"><a class="nav-about__link active" href="javascript:void(0);" data-anchor-link="year-1994">1994</a></li><li class="nav-about__list-item"><a class="nav-about__link" href="javascript:void(0);" data-anchor-link="year-2005">2005</a></li><li class="nav-about__list-item"><a class="nav-about__link" href="javascript:void(0);" data-anchor-link="year-2013">2013</a></li><li class="nav-about__list-item"><a class="nav-about__link" href="javascript:void(0);" data-anchor-link="year-2014">2014</a></li><li class="nav-about__list-item"><a class="nav-about__link" href="javascript:void(0);" data-anchor-link="year-2024">2024</a></li></ul></nav><div class="about__sections"><div class="swiper"><div class="swiper-wrapper"><section class="about-section about-section--beginning" id="year-1994" data-anchor-section="year-1994"><h2 class="about-section__title">Начало работы компании</h2><div class="about-section__content content"><p>В период с 1994 года мы специализировались на производстве и продаже элитных защитных дверей.</p><p>Мы также являлись официальными дилерами производителей самых надёжных (на тот момент) замков, таких как Ciza, Motura и MUL-T-LOCK. Помимо установки замков и монтажа двери, мы брали на себя обязательства по их гарантийному обслуживанию. </p><p>В рамках гарантийного обслуживания мы регулярно производили ремонт и замену замков, перекодировку ключей. В случае форс мажорных ситуаций наши мастера производили работы по аварийному вскрытию замков. Важно было не повредить дорогостоящие двери и по возможности сохранить сам замок, чтобы в дальнейшем произвести его рекламацию. Таким образом у нас постепенно появлялся практический опыт настоящих мастеров понимающих в замках и принципах их работы/защиты.</p></div><div class="about-section__images"><div class="about-section__image ibg"><picture><source${ssrRenderAttr("srcset", `/images/about/beginning/1.jpg`)}><img${ssrRenderAttr("src", `/images/about/beginning/1.jpg`)} alt="фото" loading="lazy"></picture></div><div class="about-section__image ibg"><picture><source${ssrRenderAttr("srcset", `/images/about/beginning/2.jpg`)}><img${ssrRenderAttr("src", `/images/about/beginning/2.jpg`)} alt="фото"></picture></div></div></section><section class="about-section about-section--scaling" id="year-2005" data-anchor-section="year-2005"><h2 class="about-section__title">Масштабирование компании <span>по вскрытию замков</span></h2><div class="about-section__content content"><p>Наши услуги по вскрытию замков стали востребованы в разных секторах использования замочных механизмов. В итоге наш опыт и знания нашли своё применение во вскрытии автомобильного транспорта. К 2005 году, мы уже сотрудничали со многим официальным и частным автосалонами в рамках договорных гарантийных обязательств.</p></div><div class="about-section__images"><div class="about-section__image ibg"><picture><source${ssrRenderAttr("srcset", `/images/about/scaling/1.jpg`)}><img${ssrRenderAttr("src", `/images/about/scaling/1.jpg`)} alt="фото" loading="lazy"></picture></div></div></section><section class="about-section about-section--progress" id="year-2013" data-anchor-section="year-2013"><h2 class="about-section__title"><span>Развитие направления</span> по продаже, обслуживанию и вскрытию сейфов</h2><div class="about-section__content content"><p>В 2012 открылось первое представительство в городе Уфе компании Промет (крупнейший производитель сейфов и сейфового оборудования в России). К тому моменту мы имели значительный опыт по обслуживанию/вскрытию сейфов и защитных механизмов, в том числе повышенного класса взломостойкости. За 19 лет мы заслужили надёжную репутацию партнёра.</p><p>И в 2013 наша компания приняла предложение стать, одним из первых дилеров Промет. Мы вззяли на себя гарантийное обязательство по обслуживанию и вскрытию (в случае необходимости), производимого компанией сейфового оборудования.</p></div><div class="about-section__learning learning-box"><div class="learning-box__caption">В рамках сотрудничества с «Промет» наши специалисты:</div><div class="learning-box__items"><div class="learning-box__item">Посещали специализированные семинары федерального и международного уровня</div><div class="learning-box__item">Изучали замки и защитные системы, банковских хранилищ, кассовых терминалов, банкоматов.</div><div class="learning-box__item">Сделали аварийное вскрытие, работу спец. инструментом ключевой специализацией.</div></div></div><div class="about-section__images"><div class="about-section__image ibg"><picture><source${ssrRenderAttr("srcset", `/images/about/progress/1.jpg`)}><img${ssrRenderAttr("src", `/images/about/progress/1.jpg`)} alt="фото" loading="lazy"></picture></div><div class="about-section__image ibg"><picture><source${ssrRenderAttr("srcset", `/images/about/progress/2.jpg`)}><img${ssrRenderAttr("src", `/images/about/progress/2.jpg`)} alt="фото" loading="lazy"></picture></div></div></section><section class="about-section about-section--leaders" id="year-2014" data-anchor-section="year-2014"><h2 class="about-section__title">Лидеры по вскрытию замков <span>в нескольких регионах России</span></h2><div class="about-section__content content"><p>С 2014 года мы уже обслуживаем на постоянной тендерной основе, такие организации как Сбербанк, ВТБ, Газпром, Сургутнефтегаз и др., в том числе бюджетные предприятия региона.</p></div><div class="about-section__logos"><div class="about-section__logo"><picture><source${ssrRenderAttr("srcset", `/images/about/leaders/logo-sber.svg`)} media="(min-width: 767.98px)"><source${ssrRenderAttr("srcset", `/images/about/leaders/logo-sber-mob.svg`)} media="(min-width: 300px)"><img${ssrRenderAttr("src", `/images/about/leaders/logo-sber.svg`)} alt="сбербанк" loading="lazy"></picture></div><div class="about-section__logo"><picture><source${ssrRenderAttr("srcset", `/images/about/leaders/logo-vtb.svg`)} media="(min-width: 767.98px)"><source${ssrRenderAttr("srcset", `/images/about/leaders/logo-vtb-mob.svg`)} media="(min-width: 300px)"><img${ssrRenderAttr("src", `/images/about/leaders/logo-vtb.svg`)} alt="втб" loading="lazy"></picture></div><div class="about-section__logo"><picture><source${ssrRenderAttr("srcset", `/images/about/leaders/logo-gazprom.svg`)} media="(min-width: 767.98px)"><source${ssrRenderAttr("srcset", `/images/about/leaders/logo-gazprom-mob.svg`)} media="(min-width: 300px)"><img${ssrRenderAttr("src", `/images/about/leaders/logo-gazprom.svg`)} alt="газпром" loading="lazy"></picture></div><div class="about-section__logo"><picture><source${ssrRenderAttr("srcset", `/images/about/leaders/logo-surgutneft.svg`)} media="(min-width: 767.98px)"><source${ssrRenderAttr("srcset", `/images/about/leaders/logo-surgutneft-mob.svg`)} media="(min-width: 300px)"><img${ssrRenderAttr("src", `/images/about/leaders/logo-surgutneft.svg`)} alt="сургутнефть" loading="lazy"></picture></div></div></section><section class="about-section about-section--expansion" id="year-2024" data-anchor-section="year-2024"><h2 class="about-section__title">Расширение филиальной сети <span>по России</span></h2><div class="about-section__content content"><p>В настоящее время наша компания активно развивается сотрудничая, как с юридическими так и физическими лицами во многих регионах России и ближнего зарубежья. Мы налаживаем честное профессиональное сотрудничество с мастерами разных городов, передаем им наш опыт и знания в рамках обучения. </p></div><div class="about-section__image ibg"><picture><source${ssrRenderAttr("srcset", `/images/about/expansion/map.svg`)}><img${ssrRenderAttr("src", `/images/about/expansion/map.svg`)} alt="карта" loading="lazy"></picture></div></section></div><div class="swiper-scrollbar"></div></div></div></div></div></div>`);
      _push(ssrRenderComponent(Questions, null, null, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/About.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
