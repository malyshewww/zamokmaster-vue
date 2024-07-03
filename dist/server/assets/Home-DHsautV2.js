import { resolveComponent, mergeProps, unref, withCtx, createTextVNode, useSSRContext, onMounted, ref, createVNode, computed, reactive, toDisplayString } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrRenderClass, ssrRenderStyle } from "vue/server-renderer";
import { c as config, _ as _sfc_main$9, d as data, m as maskPhone, a as ajax } from "../entry-server.js";
import ScrollReveal from "scrollreveal";
import Swiper from "swiper";
import { Navigation, Autoplay } from "swiper/modules";
import { Q as Questions } from "./Questions-CBRBJScZ.js";
import { useRoute } from "vue-router";
import { useHead } from "@vueuse/head";
import "lvovich";
import "axios";
import "pinia";
const _sfc_main$8 = {
  __name: "ServiceDetailBox",
  __ssrInlineRender: true,
  props: ["service", "locks"],
  setup(__props) {
    const props = __props;
    console.log(props.service);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "services-detail__box" }, _attrs))}><div class="container"><div class="services-detail__item"><div class="services-detail__body"><div class="services-detail__content"><h2 class="services-detail__title">${ssrInterpolate(__props.service.title)}<span></span></h2><div class="services-detail__text"></div>`);
      _push(ssrRenderComponent(_component_router_link, {
        class: "services-detail__button btn",
        to: `${unref(config).url}${__props.service.url}`
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Подробнее`);
          } else {
            return [
              createTextVNode("Подробнее")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="services-detail__image-wrap"><div class="services-detail__image ibg"><picture></picture></div></div></div></div></div><div class="services-slider"><div class="services-slider__body swiper"><div class="services-slider__wrapper swiper-wrapper"></div><div class="slider-controls"><button class="slider-button slider-button-prev"></button><button class="slider-button slider-button-next"></button></div></div></div><div class="services-detail__bottom"><div class="container">`);
      _push(ssrRenderComponent(_component_router_link, {
        class: "services-detail__button btn",
        to: "/service-card"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Подробнее`);
          } else {
            return [
              createTextVNode("Подробнее")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ServiceDetailBox.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = {
  __name: "ServiceDetail",
  __ssrInlineRender: true,
  props: ["titleGray", "title", "text1", "text2", "img"],
  setup(__props) {
    const animation = () => {
      if (typeof window !== "undefined") {
        ScrollReveal({
          reset: false,
          duration: 1500,
          distance: "50px",
          mobile: false
        });
        ScrollReveal().reveal(
          ".services-detail--first .services-detail__box:nth-child(1) .services-detail__content",
          { origin: "left", opacity: 0 }
        );
        ScrollReveal().reveal(
          ".services-detail--first .services-detail__box:nth-child(1) .services-detail__image-wrap",
          { origin: "right", opacity: 0 }
        );
        ScrollReveal().reveal(
          ".services-detail--first .services-detail__box:nth-child(2) .services-detail__content",
          { origin: "right", opacity: 0 }
        );
        ScrollReveal().reveal(
          ".services-detail--first .services-detail__box:nth-child(2) .services-detail__image-wrap",
          { origin: "left", opacity: 0 }
        );
        ScrollReveal().reveal(
          ".services-detail--second .services-detail__box:nth-child(1) .services-detail__content",
          { origin: "left", opacity: 0 }
        );
        ScrollReveal().reveal(
          ".services-detail--second .services-detail__box:nth-child(1) .services-detail__image-wrap",
          { origin: "right", opacity: 0 }
        );
        ScrollReveal().reveal(
          ".services-detail--second .services-detail__box:nth-child(2) .services-detail__content",
          { origin: "right", opacity: 0 }
        );
        ScrollReveal().reveal(
          ".services-detail--second .services-detail__box:nth-child(2) .services-detail__image-wrap",
          { origin: "left", opacity: 0 }
        );
        ScrollReveal().reveal(
          ".services-detail--third .services-detail__box:nth-child(1) .services-detail__content",
          { origin: "left", opacity: 0 }
        );
        ScrollReveal().reveal(
          ".services-detail--third .services-detail__box:nth-child(1) .services-detail__image-wrap",
          { origin: "right", opacity: 0 }
        );
      }
    };
    onMounted(() => {
      animation();
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "services-detail__item" }, _attrs))}><div class="services-detail__body"><div class="services-detail__content"><h2 class="services-detail__title"><span>${ssrInterpolate(__props.titleGray)}</span> ${ssrInterpolate(__props.title)}</h2><div class="services-detail__text"><p>${ssrInterpolate(__props.text1)}</p>`);
      if (__props.text2) {
        _push(`<p>${ssrInterpolate(__props.text2)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      _push(ssrRenderComponent(_component_router_link, {
        class: "services-detail__button btn",
        to: "/service-card"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Подробнее`);
          } else {
            return [
              createTextVNode("Подробнее")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="services-detail__image-wrap"><div class="services-detail__image ibg"><picture><source${ssrRenderAttr("srcset", "/images/services/service-detail-" + __props.img + ".jpg")}><img${ssrRenderAttr("src", "/images/services/service-detail-" + __props.img + ".jpg")}${ssrRenderAttr("alt", __props.titleGray + __props.title)} loading="lazy"></picture></div></div></div></div>`);
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ServiceDetail.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = {
  __name: "ServiceSlider",
  __ssrInlineRender: true,
  props: ["count", "imagePath"],
  setup(__props) {
    const slider = ref(null);
    const isLoopingSlider = ref(false);
    const mySwiper = ref();
    const sliderControls = ref();
    const mySwiperWrapper = ref();
    const initSlider = () => {
      slider.value = new Swiper(mySwiper.value, {
        modules: [Navigation, Autoplay],
        speed: 1e3,
        loop: !isLoopingSlider.value,
        slidesPerView: "auto",
        autoplay: {
          delay: 1e3,
          disableOnInteraction: false
          // stopOnLastSlide: true
        },
        watchOverflow: true,
        navigation: {
          nextEl: ".slider-button-next",
          prevEl: ".slider-button-prev"
        },
        breakpoints: {
          300: {
            spaceBetween: 10
          },
          767.98: {
            spaceBetween: 22
          }
        }
      });
    };
    const destroySlider = () => {
      if (slider.value != null) {
        const slides = slider.value.slides;
        const nav = slider.value.navigation;
        let betweenSlider = 0;
        if (window.innerWidth > 767.98) {
          betweenSlider = 22;
        } else {
          betweenSlider = 10;
        }
        if (mySwiperWrapper.value != null) {
          const sliderWrapperWidth = mySwiperWrapper.value.scrollWidth;
          const widthSlides = (slides[0].getBoundingClientRect().width + betweenSlider) * slides.length;
          if (widthSlides < sliderWrapperWidth) {
            mySwiper.value.classList.add("in-active");
            nav.nextEl.remove();
            nav.prevEl.remove();
            sliderControls.value.remove();
            isLoopingSlider.value = false;
          } else {
            mySwiper.value.classList.remove("in-active");
            isLoopingSlider.value = true;
          }
        }
      }
    };
    onMounted(() => {
      initSlider();
      destroySlider();
      window.addEventListener("resize", () => {
        destroySlider();
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "services-slider" }, _attrs))}><div class="services-slider__body swiper"><div class="services-slider__wrapper swiper-wrapper"><!--[-->`);
      ssrRenderList(__props.count, (item, index) => {
        _push(ssrRenderComponent(_component_router_link, {
          class: "services-slider__item swiper-slide",
          to: `/castle-list/${index}`
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="services-slider__image"${_scopeId}><picture${_scopeId}><source${ssrRenderAttr("srcset", "/images/service-detail/" + __props.imagePath + "/logo-" + item + ".png")}${_scopeId}><img${ssrRenderAttr("src", "/images/service-detail/" + __props.imagePath + "/logo-" + item + ".png")} loading="lazy" alt="фото"${_scopeId}></picture></div>`);
            } else {
              return [
                createVNode("div", { class: "services-slider__image" }, [
                  createVNode("picture", null, [
                    createVNode("source", {
                      srcset: "/images/service-detail/" + __props.imagePath + "/logo-" + item + ".png"
                    }, null, 8, ["srcset"]),
                    createVNode("img", {
                      src: "/images/service-detail/" + __props.imagePath + "/logo-" + item + ".png",
                      loading: "lazy",
                      alt: "фото"
                    }, null, 8, ["src"])
                  ])
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--><!--[-->`);
      ssrRenderList(__props.count, (item, index) => {
        _push(ssrRenderComponent(_component_router_link, {
          class: "services-slider__item swiper-slide",
          to: `/castle-list/${index}`
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="services-slider__image"${_scopeId}><picture${_scopeId}><source${ssrRenderAttr("srcset", "/images/service-detail/" + __props.imagePath + "/logo-" + item + ".png")}${_scopeId}><img${ssrRenderAttr("src", "/images/service-detail/" + __props.imagePath + "/logo-" + item + ".png")} loading="lazy" alt="фото"${_scopeId}></picture></div>`);
            } else {
              return [
                createVNode("div", { class: "services-slider__image" }, [
                  createVNode("picture", null, [
                    createVNode("source", {
                      srcset: "/images/service-detail/" + __props.imagePath + "/logo-" + item + ".png"
                    }, null, 8, ["srcset"]),
                    createVNode("img", {
                      src: "/images/service-detail/" + __props.imagePath + "/logo-" + item + ".png",
                      loading: "lazy",
                      alt: "фото"
                    }, null, 8, ["src"])
                  ])
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div><div class="slider-controls"><button class="slider-button slider-button-prev"></button><button class="slider-button slider-button-next"></button></div></div></div>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ServiceSlider.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = {
  __name: "MainScreenInfo",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "main-screen__info" }, _attrs))}><div class="main-screen__content">`);
      _push(ssrRenderComponent(_sfc_main$9, null, null, _parent));
      _push(`<p>К вам приедет ближайший из них</p></div><span class="main-screen__info-icon"></span></div>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/MainScreenInfo.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {
  __name: "MainAbout",
  __ssrInlineRender: true,
  props: {
    data: {
      type: String
    }
  },
  setup(__props) {
    const { stats } = data;
    const textShow = ref(false);
    const hiddenContent = ref();
    const myStyles = computed(() => {
      var _a;
      return {
        "max-height": `${textShow.value ? (_a = hiddenContent.value) == null ? void 0 : _a.scrollHeight : false}px`
      };
    });
    onMounted(() => {
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "main-about" }, _attrs))}><div class="container"><div class="main-about__body"><div class="main-about__content"><div class="heading"><h2 class="heading__title">О компании</h2></div><div class="main-about__stats"><!--[-->`);
      ssrRenderList(unref(stats), (item) => {
        _push(`<div class="main-about__item stats-item"><div class="stats-item__num">${ssrInterpolate(item.num)}</div><div class="stats-item__text">${ssrInterpolate(item.text)}</div></div>`);
      });
      _push(`<!--]--></div><div class="${ssrRenderClass([[textShow.value ? "active" : ""], "text-hidden"])}"><div class="text-hidden-content" style="${ssrRenderStyle(myStyles.value)}"><div class="content">${__props.data}</div><div class="text-hidden-content__gradient"></div></div>`);
      if (!textShow.value) {
        _push(`<button class="main-about__button btn-show" type="button">Читать полностью</button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      _push(ssrRenderComponent(_component_router_link, {
        class: "main-about__btn btn",
        to: "/about"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`О компании`);
          } else {
            return [
              createTextVNode("О компании")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="main-about__image-wrap"><div class="main-about__image ibg"><picture><source${ssrRenderAttr("srcset", `/images/main-about/master.jpg`)}><img${ssrRenderAttr("src", `/images/main-about/master.jpg`)} alt="Баннер"></picture></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/MainAbout.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {
  __name: "MainGeography",
  __ssrInlineRender: true,
  props: ["geo"],
  setup(__props) {
    const textShow = ref(false);
    const geographyWrapper = ref();
    const props = __props;
    const myStyles = computed(() => {
      var _a;
      return {
        "max-height": `${textShow.value ? (_a = geographyWrapper.value) == null ? void 0 : _a.scrollHeight : false}px`
      };
    });
    const newArray = reactive({
      geo: []
    });
    const separationArray = computed(() => {
      let size = 1;
      for (let i = 0; i < Math.ceil(props.geo.length / size); i++) {
        newArray.geo[i] = props.geo.slice(i * size, i * size + size);
      }
      return newArray.geo;
    });
    onMounted(() => {
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "geography" }, _attrs))}><div class="container"><div class="heading"><h2 class="heading__title">География работы</h2></div><div class="${ssrRenderClass([[textShow.value ? "active" : ""], "geography__wrapper"])}" style="${ssrRenderStyle(myStyles.value)}"><div class="geography__body"><!--[-->`);
      ssrRenderList(separationArray.value, (item, key) => {
        _push(`<ul class="geography__list"><!--[-->`);
        ssrRenderList(item, (station) => {
          _push(`<li class="geography__list-item">${ssrInterpolate(station)}</li>`);
        });
        _push(`<!--]--></ul>`);
      });
      _push(`<!--]--></div>`);
      if (__props.geo.length > 5) {
        _push(`<span class="geography__gradient"></span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (__props.geo.length > 5) {
        _push(`<div>`);
        if (!textShow.value) {
          _push(`<button class="geography__button btn-show" type="button">Показать все</button>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></section>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/MainGeography.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "Request",
  __ssrInlineRender: true,
  setup(__props) {
    onMounted(() => {
      maskPhone();
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "request" }, _attrs))}><div class="container"><div class="request__body"><div class="request__inner"><div class="request__content"><h2 class="request__title">Оставьте заявку</h2><p class="request__sub-title">Оставьте контакты и мы позвоним вам в течении <span>30 секунд</span></p></div><form class="request__form form"><div class="form-item"><input type="tel" placeholder="Введите номер"></div><input class="btn" type="submit" value="Заказать звонок"><div class="form-text">Нажимая на кнопку, вы соглашаетесь `);
      _push(ssrRenderComponent(_component_router_link, { to: "/text-page" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`политикой конфиденциальности`);
          } else {
            return [
              createTextVNode("политикой конфиденциальности")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(` сайта</div></form></div></div></div></section>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Request.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "MainServices",
  __ssrInlineRender: true,
  setup(__props) {
    const { services } = data;
    const animation = () => {
      ScrollReveal({
        reset: false,
        duration: 1500,
        distance: "30px",
        mobile: false
      });
      ScrollReveal().reveal(".services__item", {
        origin: "top",
        opacity: 0.2,
        scale: 0.5,
        delay: 0.2
      });
    };
    onMounted(() => {
      animation();
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "services" }, _attrs))}><div class="container"><div class="heading"><h2 class="heading__title">Услуги</h2></div><div class="services__body"><!--[-->`);
      ssrRenderList(unref(services), (service, index) => {
        _push(ssrRenderComponent(_component_router_link, {
          class: "services__item item-services",
          to: `/service-list/${index}`
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="item-services__content"${_scopeId}><div class="item-services__title"${_scopeId}>${ssrInterpolate(service.title)}</div><div class="item-services__bottom"${_scopeId}><span class="item-services__icon"${_scopeId}><picture${_scopeId}><source${ssrRenderAttr("srcset", "/images/services/services-" + service.img + ".png")} media="(min-width: 767.98px)"${_scopeId}><source${ssrRenderAttr("srcset", "/images/services/services-" + service.img + "-mob.png")} media="(min-width: 300px)"${_scopeId}><img${ssrRenderAttr("src", "/images/services/services-" + service.img + ".png")}${ssrRenderAttr("alt", service.title)} loading="lazy"${_scopeId}></picture></span></div></div>`);
            } else {
              return [
                createVNode("div", { class: "item-services__content" }, [
                  createVNode("div", { class: "item-services__title" }, toDisplayString(service.title), 1),
                  createVNode("div", { class: "item-services__bottom" }, [
                    createVNode("span", { class: "item-services__icon" }, [
                      createVNode("picture", null, [
                        createVNode("source", {
                          srcset: "/images/services/services-" + service.img + ".png",
                          media: "(min-width: 767.98px)"
                        }, null, 8, ["srcset"]),
                        createVNode("source", {
                          srcset: "/images/services/services-" + service.img + "-mob.png",
                          media: "(min-width: 300px)"
                        }, null, 8, ["srcset"]),
                        createVNode("img", {
                          src: "/images/services/services-" + service.img + ".png",
                          alt: service.title,
                          loading: "lazy"
                        }, null, 8, ["src", "alt"])
                      ])
                    ])
                  ])
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/MainServices.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "Home",
  __ssrInlineRender: true,
  props: ["defaultCity", "declensionCity", "mainInfo"],
  setup(__props) {
    const route = useRoute();
    const title = computed(() => route.meta.title);
    const dataBase = reactive({
      about: "",
      services: {
        items: "",
        locks: ""
      },
      advantages: "",
      geo: "",
      locks: ""
    });
    const getData = async () => {
      try {
        const axios = await ajax();
        const { data: data2 } = await axios.get("/wsapi/packs/front");
        dataBase.about = data2.data.info_front[0].field_about;
        dataBase.advantages = data2.data.info_front[0].field_advantages;
        dataBase.geo = data2.data.info_front[0].field_geography;
        dataBase.services.locks = data2.data.services.locks;
        dataBase.services.items = data2.data.services;
        console.log(dataBase.services.items);
      } catch (e) {
        console.log("maininfo:" + e);
      }
    };
    useHead({
      title: title.value,
      meta: [
        {
          name: "description",
          content: `Описание на странице ${title.value}`
        }
      ],
      bodyAttrs: {
        class: "home"
      }
    });
    const props = __props;
    const { servicesDetail, stats } = data;
    const localCity = ref("");
    localCity.value = props.defaultCity;
    onMounted(() => {
      getData();
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      _push(`<!--[--><div class="main-screen"><div class="container"><div class="main-screen__heading"><h1 class="main-screen__title">Вскрытие замков <span>${ssrInterpolate(__props.declensionCity)}</span></h1><a class="main-screen__phone btn-phone btn" href="tel:+79958881086"><span class="btn-phone__text">+7 (995) 888-10-86</span><span class="btn-phone__icon"></span></a></div><div class="main-screen__advantages"><!--[-->`);
      ssrRenderList(dataBase.advantages, (item, index) => {
        _push(`<div class="${ssrRenderClass([`main-screen__advantage--${index + 1}`, "main-screen__advantage"])}">${ssrInterpolate(item.field_title[0])}</div>`);
      });
      _push(`<!--]--></div><a class="main-screen__phone-mobile btn-phone btn" href="tel:+79958881086"><span class="btn-phone__text">+7 (995) 888-10-86</span><span class="btn-phone__icon"></span></a><div class="main-screen__image-wrap"><div class="main-screen__image ibg"><picture><source${ssrRenderAttr("srcset", `/images/main-screen/banner.png`)}><img${ssrRenderAttr("src", `/images/main-screen/banner.png`)} alt="Баннер" loading="lazy"></picture></div>`);
      _push(ssrRenderComponent(_sfc_main$5, null, null, _parent));
      _push(`</div></div></div>`);
      _push(ssrRenderComponent(_sfc_main$1, {
        services: dataBase.services
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(`<section class="services-detail services-detail--first"><div class="services-detail__wrapper">`);
      _push(ssrRenderComponent(_sfc_main$8, {
        service: dataBase.services.items[0],
        locks: dataBase.services.locks
      }, null, _parent));
      _push(`<div class="services-detail__box"><div class="container">`);
      _push(ssrRenderComponent(_sfc_main$7, {
        titleGray: unref(servicesDetail)[0].titleGray,
        title: unref(servicesDetail)[0].title,
        text1: unref(servicesDetail)[0].text[0],
        img: "1"
      }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_sfc_main$6, {
        count: 3,
        imagePath: "lock"
      }, null, _parent));
      _push(`<div class="services-detail__bottom"><div class="container">`);
      _push(ssrRenderComponent(_component_router_link, {
        class: "services-detail__button btn",
        to: "/service-card"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Подробнее`);
          } else {
            return [
              createTextVNode("Подробнее")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><div class="services-detail__box"><div class="container">`);
      _push(ssrRenderComponent(_sfc_main$7, {
        titleGray: unref(servicesDetail)[1].titleGray,
        title: unref(servicesDetail)[1].title,
        text1: unref(servicesDetail)[1].text[0],
        text2: unref(servicesDetail)[1].text[1],
        img: "2"
      }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_sfc_main$6, {
        count: 9,
        imagePath: "doors"
      }, null, _parent));
      _push(`<div class="services-detail__bottom"><div class="container">`);
      _push(ssrRenderComponent(_component_router_link, {
        class: "services-detail__button btn",
        to: "/service-card"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Подробнее`);
          } else {
            return [
              createTextVNode("Подробнее")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div></section><section class="services-detail services-detail--second"><div class="services-detail__wrapper"><div class="services-detail__box"><div class="container">`);
      _push(ssrRenderComponent(_sfc_main$7, {
        titleGray: unref(servicesDetail)[2].titleGray,
        title: unref(servicesDetail)[2].title,
        text1: unref(servicesDetail)[2].text[0],
        text2: unref(servicesDetail)[2].text[1],
        img: "3"
      }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_sfc_main$6, {
        count: 9,
        imagePath: "safe"
      }, null, _parent));
      _push(`<div class="services-detail__bottom"><div class="container">`);
      _push(ssrRenderComponent(_component_router_link, {
        class: "services-detail__button btn",
        to: "/service-card"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Подробнее `);
          } else {
            return [
              createTextVNode("Подробнее ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><div class="services-detail__box"><div class="container">`);
      _push(ssrRenderComponent(_sfc_main$7, {
        titleGray: unref(servicesDetail)[3].titleGray,
        title: unref(servicesDetail)[3].title,
        text1: unref(servicesDetail)[3].text[0],
        text2: unref(servicesDetail)[3].text[1],
        img: "4"
      }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_sfc_main$6, {
        count: 9,
        imagePath: "car"
      }, null, _parent));
      _push(`<div class="services-detail__bottom"><div class="container">`);
      _push(ssrRenderComponent(_component_router_link, {
        class: "services-detail__button btn",
        to: "/service-card"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Подробнее `);
          } else {
            return [
              createTextVNode("Подробнее ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div></section><section class="services-detail services-detail--third"><div class="services-detail__wrapper"><div class="services-detail__box"><div class="container">`);
      _push(ssrRenderComponent(_sfc_main$7, {
        titleGray: unref(servicesDetail)[4].titleGray,
        title: unref(servicesDetail)[4].title,
        text1: unref(servicesDetail)[4].text[0],
        text2: unref(servicesDetail)[4].text[1],
        img: "5"
      }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_sfc_main$6, {
        count: 9,
        imagePath: "setlock"
      }, null, _parent));
      _push(`<div class="services-detail__bottom"><div class="container">`);
      _push(ssrRenderComponent(_component_router_link, {
        class: "services-detail__button btn",
        to: "/service-card"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Подробнее`);
          } else {
            return [
              createTextVNode("Подробнее")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div></section>`);
      _push(ssrRenderComponent(Questions, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$4, {
        data: dataBase.about
      }, null, _parent));
      _push(`<section class="testimonials"><div class="testimonials__wrapper"><div class="container"><div class="testimonials__body"><div class="testimonials__module"><iframe style="${ssrRenderStyle({ "width": "100%", "height": "100%", "border": "1px solid #e6e6e6", "border-radius": "8px", "box-sizing": "border-box" })}" src="https://yandex.ru/maps-reviews-widget/158778930985?comments"></iframe><a href="https://yandex.ru/maps/org/dom_byta/158778930985/" target="_blank" style="${ssrRenderStyle({ "box-sizing": "border-box", "text-decoration": "none", "color": "#b3b3b3", "font-size": "10px", "font-family": "YS Text,sans-serif", "padding": "0 16px", "position": "absolute", "bottom": "8px", "width": "100%", "text-align": "center", "left": "0", "overflow": "hidden", "text-overflow": "ellipsis", "display": "block", "max-height": "14px", "white-space": "nowrap" })}">Дом Быта на карте Москвы — Яндекс Карты</a></div><div class="heading"><h2 class="heading__title">Отзывы <span>наших клиентов</span></h2><p class="heading__sub-title">За время работы нашей компании, остались довольными более 15 000 клиентов.</p></div></div></div></div></section>`);
      _push(ssrRenderComponent(_sfc_main$3, {
        geo: dataBase.geo
      }, null, _parent));
      _push(`<!--[-->`);
      ssrRenderList(dataBase.locks, (lock) => {
        _push(`<div><img${ssrRenderAttr("src", `http://zamokmaster.localhost/sites/default/files/2024-06/service-detail-1.jpg`)} alt=""${ssrRenderAttr("width", lock.field_logo[0].width)}${ssrRenderAttr("height", lock.field_logo[0].height)}></div>`);
      });
      _push(`<!--]--><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/Home.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
