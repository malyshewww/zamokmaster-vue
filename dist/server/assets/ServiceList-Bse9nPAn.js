import { useMeta } from "vue-meta";
import { _ as _export_sfc, d as data } from "../entry-server.js";
import { B as Breadcrumbs } from "./Breadcrumbs-iCpvRvxc.js";
import { resolveComponent, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr } from "vue/server-renderer";
import "node:path";
import "lvovich";
import "vue-router";
function ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Breadcrumbs = resolveComponent("Breadcrumbs");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "page service-list" }, _attrs))}><div class="main__top top-main"><div class="container">`);
  _push(ssrRenderComponent(_component_Breadcrumbs, { pageTitle: "Услуги" }, null, _parent));
  _push(`<div class="top-main__content"><div class="top-main__body"><h1 class="top-main__title page-title">Услуги Замокмастер <span>${ssrInterpolate($props.declensionCity)}</span></h1><p class="top-main__sub-title">Поможем открыть любой замок без повреждений двери. Срочный выезд за 15–20 минут</p></div><a class="btn-phone btn" href="tel:+79958881086"><div class="btn-phone__text">+7 (995) 888-10-86</div><div class="btn-phone__icon"></div></a></div></div></div><div class="page__body"><div class="container"><div class="service-list__wrapper section-groups"><div class="service-list__body"><!--[-->`);
  ssrRenderList($data.servicesList, (service, index) => {
    _push(`<div class="services__item item-services"><div class="item-services__content"><div class="item-services__title">${ssrInterpolate(service)}</div><div class="item-services__bottom"><span class="item-services__icon"><picture><source${ssrRenderAttr("srcset", "./images/service-list/icon-" + (index + 1) + ".png")} media="(min-width: 767.98px)"><source${ssrRenderAttr("srcset", "./images/service-list/icon-" + (index + 1) + "-mob.png")} media="(min-width: 300px)"><img${ssrRenderAttr("src", "./images/service-list/icon-" + (index + 1) + ".png")}${ssrRenderAttr("alt", service)} loading="lazy"></picture></span></div></div></div>`);
  });
  _push(`<!--]--></div><div class="service-list__content content"><p>В жизни каждого человека случаются непредвиденные ситуации: захлопнулась дверь, сломался замок, или не открывается ваш автомобиль. А может вы потеряли ключи от сейфа, и теперь не знаете что делать?</p><p>Главное, не поддавайтесь панике, и не пытайтесь, с помощью подручных инструментов, самостоятельно решить данную проблему, разрушая тем самым не только конструкцию замка, но и целостность самой двери.</p><p>Теперь у вас есть надёжный помощник-специалист компании &quot;Замок- В жизни каждого человека случаются непредвиденные ситуации: захлопнулась дверь, сломался замок, или не </p></div></div></div></div></div>`);
}
const { servicesList } = data;
const _sfc_main = {
  setup() {
    useMeta({ title: "Список услуг" });
  },
  props: ["defaultCity", "declensionCity"],
  components: {
    Breadcrumbs
  },
  data() {
    return {
      servicesList
    };
  },
  methods: {},
  mounted() {
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/ServiceList.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ServiceList = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", ssrRender]]);
export {
  ServiceList as default
};
