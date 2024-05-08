import { useMeta } from "vue-meta";
import ScrollReveal from "scrollreveal";
import { _ as _export_sfc, F as FreeMasters, d as data, m as maskPhone } from "../entry-server.js";
import { resolveComponent, mergeProps, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrRenderClass, ssrRenderStyle } from "vue/server-renderer";
import Swiper from "swiper";
import { Navigation, Autoplay } from "swiper/modules";
import { Q as Questions } from "./Questions-CeLo0nCs.js";
import "node:path";
import "lvovich";
import "vue-router";
function ssrRender$7(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_router_link = resolveComponent("router-link");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "services-detail__item" }, _attrs))}><div class="services-detail__body"><div class="services-detail__content"><h2 class="services-detail__title"><span>${ssrInterpolate($props.titleGray)}</span> ${ssrInterpolate($props.title)}</h2><div class="services-detail__text"><p>${ssrInterpolate($props.text1)}</p>`);
  if ($props.text2) {
    _push(`<p>${ssrInterpolate($props.text2)}</p>`);
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
  _push(`</div><div class="services-detail__image-wrap"><div class="services-detail__image ibg"><picture><source${ssrRenderAttr("srcset", "./images/services/service-detail-" + $props.img + ".jpg")}><img${ssrRenderAttr("src", "./images/services/service-detail-" + $props.img + ".jpg")}${ssrRenderAttr("alt", $props.titleGray + $props.title)} loading="lazy"></picture></div></div></div></div>`);
}
const _sfc_main$7 = {
  props: ["titleGray", "title", "text1", "text2", "img"],
  data() {
    return {};
  },
  methods: {
    animation() {
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
    }
  },
  mounted() {
    this.animation();
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ServiceDetail.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const ServiceDetail = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", ssrRender$7]]);
function ssrRender$6(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "services-slider" }, _attrs))}><div class="services-slider__body swiper"><div class="services-slider__wrapper swiper-wrapper"><!--[-->`);
  ssrRenderList($props.count, (item) => {
    _push(`<div class="services-slider__item swiper-slide"><div class="services-slider__image"><picture><source${ssrRenderAttr("srcset", "./images/service-detail/" + $props.imagePath + "/logo-" + item + ".png")}><img${ssrRenderAttr("src", "./images/service-detail/" + $props.imagePath + "/logo-" + item + ".png")} loading="lazy" alt="фото"></picture></div></div>`);
  });
  _push(`<!--]--><!--[-->`);
  ssrRenderList($props.count, (item) => {
    _push(`<div class="services-slider__item swiper-slide"><div class="services-slider__image"><picture><source${ssrRenderAttr("srcset", "./images/service-detail/" + $props.imagePath + "/logo-" + item + ".png")}><img${ssrRenderAttr("src", "./images/service-detail/" + $props.imagePath + "/logo-" + item + ".png")} loading="lazy" alt="фото"></picture></div></div>`);
  });
  _push(`<!--]--></div><div class="slider-controls"><button class="slider-button slider-button-prev"></button><button class="slider-button slider-button-next"></button></div></div></div>`);
}
const _sfc_main$6 = {
  props: ["count", "imagePath"],
  data() {
    return {
      slider: null
    };
  },
  methods: {
    initSlider() {
      this.slider = new Swiper(this.$refs.mySwiper, {
        modules: [Navigation, Autoplay],
        speed: 1e3,
        slidesPerView: "auto",
        loop: true,
        autoplay: {
          delay: 1e3,
          disableOnInteraction: false
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
    },
    destroySlider() {
      if (this.slider != null) {
        const slides = this.slider.slides;
        const nav = this.slider.navigation;
        let betweenSlider = 0;
        if (window.innerWidth > 767.98) {
          betweenSlider = 22;
        } else {
          betweenSlider = 10;
        }
        if (this.$refs.mySwiperWrapper != null) {
          const sliderWrapperWidth = this.$refs.mySwiperWrapper.scrollWidth;
          const widthSlides = (slides[0].getBoundingClientRect().width + betweenSlider) * slides.length;
          if (widthSlides < sliderWrapperWidth) {
            this.$refs.mySwiper.classList.add("in-active");
            nav.nextEl.remove();
            nav.prevEl.remove();
            this.$refs.slider_controls.remove();
          } else {
            this.$refs.mySwiper.classList.remove("in-active");
          }
        }
      }
    }
  },
  mounted() {
    this.initSlider();
    this.destroySlider();
    window.addEventListener("resize", () => {
      this.destroySlider();
    });
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ServiceSlider.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const ServiceSlider = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", ssrRender$6]]);
function ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_FreeMasters = resolveComponent("FreeMasters");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "main-screen__info" }, _attrs))}><div class="main-screen__content">`);
  _push(ssrRenderComponent(_component_FreeMasters, null, null, _parent));
  _push(`<p>К вам приедет ближайший из них</p></div><span class="main-screen__info-icon"></span></div>`);
}
const _sfc_main$5 = {
  components: { FreeMasters },
  data() {
    return {};
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/MainScreenInfo.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const MainScreenInfo = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", ssrRender$5]]);
function ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_router_link = resolveComponent("router-link");
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "main-about" }, _attrs))}><div class="container"><div class="main-about__body"><div class="main-about__content"><div class="heading"><h2 class="heading__title">О компании</h2></div><div class="main-about__stats"><!--[-->`);
  ssrRenderList($data.stats, (item) => {
    _push(`<div class="main-about__item stats-item"><div class="stats-item__num">${ssrInterpolate(item.num)}</div><div class="stats-item__text">${ssrInterpolate(item.text)}</div></div>`);
  });
  _push(`<!--]--></div><div class="${ssrRenderClass([[$data.textShow ? "active" : ""], "text-hidden"])}"><div class="text-hidden-content" style="${ssrRenderStyle($options.myStyles)}"><div class="content"><p>В жизни каждого человека случаются непредвиденные ситуации: захлопнулась дверь, сломался замок, или не открывается ваш автомобиль. А может вы потеряли ключи от сейфа, и теперь не знаете что делать?</p><p>Главное, не поддавайтесь панике, и не пытайтесь, с помощью подручных инструментов, самостоятельно решить данную проблему, разрушая тем самым не только конструкцию замка, но и целостность самой двери.</p><p>Теперь у вас есть надёжный помощник-специалист компании &quot;Замок- В жизни каждого человека случаются непредвиденные ситуации: захлопнулась дверь, сломался замок, или не</p><p>В жизни каждого человека случаются непредвиденные ситуации: захлопнулась дверь, сломался замок, или не открывается ваш автомобиль. А может вы потеряли ключи от сейфа, и теперь не знаете что делать?</p><p>Главное, не поддавайтесь панике, и не пытайтесь, с помощью подручных инструментов, самостоятельно решить данную проблему, разрушая тем самым не только конструкцию замка, но и целостность самой двери.</p><p>Теперь у вас есть надёжный помощник-специалист компании &quot;Замок- В жизни каждого человека случаются непредвиденные ситуации: захлопнулась дверь, сломался замок, или не </p></div><div class="text-hidden-content__gradient"></div></div>`);
  if (!$data.textShow) {
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
  _push(`</div><div class="main-about__image-wrap"><div class="main-about__image ibg"><picture><source${ssrRenderAttr("srcset", `./images/main-about/master.jpg`)}><img${ssrRenderAttr("src", `./images/main-about/master.jpg`)} alt="Баннер"></picture></div></div></div></div></section>`);
}
const { stats: stats$1 } = data;
const _sfc_main$4 = {
  components: {},
  data() {
    return {
      stats: stats$1,
      textShow: false,
      maxHeight: 0
    };
  },
  methods: {},
  computed: {
    myStyles() {
      var _a;
      return {
        // `height: ${this.show ? this.$el.scrollHeight : 0}px`
        "max-height": `${this.textShow ? (_a = this.$el.querySelector(".text-hidden-content")) == null ? void 0 : _a.scrollHeight : false}px`
      };
    }
  },
  watch: {},
  mounted() {
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/MainAbout.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const MainAbout = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", ssrRender$4]]);
function ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "geography" }, _attrs))}><div class="container"><div class="heading"><h2 class="heading__title">География работы</h2></div><div class="${ssrRenderClass([[$data.textShow ? "active" : ""], "geography__wrapper"])}" style="${ssrRenderStyle($options.myStyles)}"><div class="geography__body"><!--[-->`);
  ssrRenderList($data.geography, (item) => {
    _push(`<ul class="geography__list"><!--[-->`);
    ssrRenderList(item.list, (station) => {
      _push(`<li class="geography__list-item">${ssrInterpolate(station)}</li>`);
    });
    _push(`<!--]--></ul>`);
  });
  _push(`<!--]--></div><span class="geography__gradient"></span></div>`);
  if (!$data.textShow) {
    _push(`<button class="geography__button btn-show" type="button">Показать все</button>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></section>`);
}
const { geography } = data;
const _sfc_main$3 = {
  data() {
    return {
      geography,
      textShow: false
    };
  },
  computed: {
    myStyles() {
      return {
        // `height: ${this.show ? this.$el.scrollHeight : 0}px`
        "max-height": `${this.textShow ? this.$el.querySelector(".geography__wrapper").scrollHeight : false}px`
      };
    }
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/MainGeography.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const MainGeography = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", ssrRender$3]]);
function ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "request" }, _attrs))}><div class="container"><div class="request__body"><div class="request__inner"><div class="request__content"><h2 class="request__title">Оставьте заявку</h2><p class="request__sub-title">Оставьте контакты и мы позвоним вам в течении <span>30 секунд</span></p></div><form class="request__form form"><div class="form-item"><input type="tel" placeholder="Введите номер"></div><input class="btn" type="submit" value="Заказать звонок"><div class="form-text">Нажимая на кнопку, вы соглашаетесь политикой конфиденциальности сайта</div></form></div></div></div></section>`);
}
const _sfc_main$2 = {
  data() {
    return {};
  },
  mounted() {
    maskPhone();
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Request.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Request = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", ssrRender$2]]);
function ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "services" }, _attrs))}><div class="container"><div class="heading"><h2 class="heading__title">Услуги</h2></div><div class="services__body"><!--[-->`);
  ssrRenderList($data.services, (service, index) => {
    _push(`<div class="services__item item-services"><div class="item-services__content"><div class="item-services__title">${ssrInterpolate(service.title)}</div><div class="item-services__bottom"><span class="item-services__icon"><picture><source${ssrRenderAttr("srcset", "./images/services/services-" + service.img + ".png")} media="(min-width: 767.98px)"><source${ssrRenderAttr("srcset", "./images/services/services-" + service.img + "-mob.png")} media="(min-width: 300px)"><img${ssrRenderAttr("src", "./images/services/services-" + service.img + ".png")}${ssrRenderAttr("alt", service.title)} loading="lazy"></picture></span></div></div></div>`);
  });
  _push(`<!--]--></div></div></section>`);
}
const { services } = data;
const _sfc_main$1 = {
  data() {
    return {
      services
    };
  },
  methods: {
    animation() {
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
    }
  },
  mounted() {
    this.animation();
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/MainServices.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const MainServices = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", ssrRender$1]]);
function ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_MainScreenInfo = resolveComponent("MainScreenInfo");
  const _component_MainServices = resolveComponent("MainServices");
  const _component_Request = resolveComponent("Request");
  const _component_ServiceDetail = resolveComponent("ServiceDetail");
  const _component_ServiceSlider = resolveComponent("ServiceSlider");
  const _component_router_link = resolveComponent("router-link");
  const _component_Questions = resolveComponent("Questions");
  const _component_MainAbout = resolveComponent("MainAbout");
  const _component_MainGeography = resolveComponent("MainGeography");
  _push(`<!--[--><div class="main-screen"><div class="container"><div class="main-screen__heading"><h1 class="main-screen__title">Вскрытие замков <span>в ${ssrInterpolate($props.declensionCity)}</span></h1><a class="main-screen__phone btn-phone btn" href="tel:+79958881086"><span class="btn-phone__text">+7 (995) 888-10-86</span><span class="btn-phone__icon"></span></a></div><div class="main-screen__advantages"><div class="main-screen__advantage main-screen__advantage--1">Работаем официально и круглосуточно (24/7)</div><div class="main-screen__advantage main-screen__advantage--2">Срочный выезд мастера (15-20 мин)</div><div class="main-screen__advantage main-screen__advantage--3">Звонок напрямую мастеру (без посредников)</div></div><a class="main-screen__phone-mobile btn-phone btn" href="tel:+79958881086"><span class="btn-phone__text">+7 (995) 888-10-86</span><span class="btn-phone__icon"></span></a><div class="main-screen__image-wrap"><div class="main-screen__image ibg"><picture><source${ssrRenderAttr("srcset", `./images/main-screen/banner.png`)}><img${ssrRenderAttr("src", `./images/main-screen/banner.png`)} alt="Баннер" loading="lazy"></picture></div>`);
  _push(ssrRenderComponent(_component_MainScreenInfo, null, null, _parent));
  _push(`</div></div></div>`);
  _push(ssrRenderComponent(_component_MainServices, null, null, _parent));
  _push(ssrRenderComponent(_component_Request, null, null, _parent));
  _push(`<section class="services-detail services-detail--first"><div class="services-detail__wrapper"><div class="services-detail__box"><div class="container">`);
  _push(ssrRenderComponent(_component_ServiceDetail, {
    titleGray: $data.servicesDetail[0].titleGray,
    title: $data.servicesDetail[0].title,
    text1: $data.servicesDetail[0].text[0],
    img: "1"
  }, null, _parent));
  _push(`</div>`);
  _push(ssrRenderComponent(_component_ServiceSlider, {
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
  _push(ssrRenderComponent(_component_ServiceDetail, {
    titleGray: $data.servicesDetail[1].titleGray,
    title: $data.servicesDetail[1].title,
    text1: $data.servicesDetail[1].text[0],
    text2: $data.servicesDetail[1].text[1],
    img: "2"
  }, null, _parent));
  _push(`</div>`);
  _push(ssrRenderComponent(_component_ServiceSlider, {
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
  _push(ssrRenderComponent(_component_ServiceDetail, {
    titleGray: $data.servicesDetail[2].titleGray,
    title: $data.servicesDetail[2].title,
    text1: $data.servicesDetail[2].text[0],
    text2: $data.servicesDetail[2].text[1],
    img: "3"
  }, null, _parent));
  _push(`</div>`);
  _push(ssrRenderComponent(_component_ServiceSlider, {
    count: 9,
    imagePath: "safe"
  }, null, _parent));
  _push(`</div><div class="services-detail__box"><div class="container">`);
  _push(ssrRenderComponent(_component_ServiceDetail, {
    titleGray: $data.servicesDetail[3].titleGray,
    title: $data.servicesDetail[3].title,
    text1: $data.servicesDetail[3].text[0],
    text2: $data.servicesDetail[3].text[1],
    img: "4"
  }, null, _parent));
  _push(`</div>`);
  _push(ssrRenderComponent(_component_ServiceSlider, {
    count: 9,
    imagePath: "car"
  }, null, _parent));
  _push(`</div></div></section><section class="services-detail services-detail--third"><div class="services-detail__wrapper"><div class="services-detail__box"><div class="container">`);
  _push(ssrRenderComponent(_component_ServiceDetail, {
    titleGray: $data.servicesDetail[4].titleGray,
    title: $data.servicesDetail[4].title,
    text1: $data.servicesDetail[4].text[0],
    text2: $data.servicesDetail[4].text[1],
    img: "5"
  }, null, _parent));
  _push(`</div>`);
  _push(ssrRenderComponent(_component_ServiceSlider, {
    count: 9,
    imagePath: "setlock"
  }, null, _parent));
  _push(`</div></div></section>`);
  _push(ssrRenderComponent(_component_Questions, null, null, _parent));
  _push(ssrRenderComponent(_component_MainAbout, null, null, _parent));
  _push(`<section class="testimonials"><div class="testimonials__wrapper"><div class="container"><div class="testimonials__body"><div class="testimonials__module"><iframe style="${ssrRenderStyle({ "width": "100%", "height": "100%", "border": "1px solid #e6e6e6", "border-radius": "8px", "box-sizing": "border-box" })}" src="https://yandex.ru/maps-reviews-widget/158778930985?comments"></iframe><a href="https://yandex.ru/maps/org/dom_byta/158778930985/" target="_blank" style="${ssrRenderStyle({ "box-sizing": "border-box", "text-decoration": "none", "color": "#b3b3b3", "font-size": "10px", "font-family": "YS Text,sans-serif", "padding": "0 16px", "position": "absolute", "bottom": "8px", "width": "100%", "text-align": "center", "left": "0", "overflow": "hidden", "text-overflow": "ellipsis", "display": "block", "max-height": "14px", "white-space": "nowrap" })}">Дом Быта на карте Москвы — Яндекс Карты</a></div><div class="heading"><h2 class="heading__title">Отзывы <span>наших клиентов</span></h2><p class="heading__sub-title">За время работы нашей компании, остались довольными более 15 000 клиентов.</p></div></div></div></div></section>`);
  _push(ssrRenderComponent(_component_MainGeography, null, null, _parent));
  _push(`<!--]-->`);
}
const { servicesDetail, stats } = data;
const _sfc_main = {
  setup() {
    useMeta({
      title: "Главная",
      description: [{ name: "description", content: `My page meta description` }]
    });
  },
  props: ["defaultCity", "declensionCity"],
  components: {
    ServiceDetail,
    ServiceSlider,
    Questions,
    MainScreenInfo,
    MainAbout,
    MainGeography,
    Request,
    MainServices
  },
  data() {
    return {
      servicesDetail,
      stats,
      localCity: this.defaultCity
    };
  },
  methods: {
    animation() {
      if (typeof window !== "undefined") {
        ScrollReveal({
          reset: false,
          duration: 1500,
          distance: "15px"
        });
        ScrollReveal().reveal(".main-screen__heading", { origin: "top", opacity: 0 });
      }
    }
  },
  watch() {
  },
  computed: {},
  mounted() {
    window.addEventListener("load", () => {
      document.body.classList.add("home");
    });
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/Home.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Home = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", ssrRender]]);
export {
  Home as default
};
