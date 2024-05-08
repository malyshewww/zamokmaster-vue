import { useMeta } from "vue-meta";
import { _ as _export_sfc, d as data } from "../entry-server.js";
import { S as Sidebar } from "./Sidebar-B1JbPP8-.js";
import { B as Breadcrumbs } from "./Breadcrumbs-iCpvRvxc.js";
import { resolveComponent, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr } from "vue/server-renderer";
import "node:path";
import "lvovich";
import "vue-router";
function ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Breadcrumbs = resolveComponent("Breadcrumbs");
  const _component_Sidebar = resolveComponent("Sidebar");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "page castle-list" }, _attrs))}><div class="main__top top-main"><div class="container">`);
  _push(ssrRenderComponent(_component_Breadcrumbs, { pageTitle: "Список замков" }, null, _parent));
  _push(`<div class="top-main__content"><div class="top-main__body"><h1 class="top-main__title page-title">Вскрытие всех видов замков в <span>${ssrInterpolate($props.declensionCity)}</span></h1><p class="top-main__sub-title">Профессиональное вскрытие замков. Официально, предоставляем все документы</p></div><a class="btn-phone btn" href="tel:+79958881086"><div class="btn-phone__text">+7 (995) 888-10-86</div><div class="btn-phone__icon"></div></a></div></div></div><div class="page__body"><div class="container"><div class="castle-list__body page-layout"><div class="castle-list__categories section-groups"><!--[-->`);
  ssrRenderList($data.castleList, (item) => {
    _push(`<section class="castle-list__section category-castle"><div class="heading"><h2 class="heading__title title-sm">${ssrInterpolate(item.title)}</h2></div><div class="category-castle__items"><!--[-->`);
    ssrRenderList(item.children, (child, index) => {
      _push(`<div class="category-castle__item"><div class="category-castle__image"><div class="category-castle__logo"><picture><source${ssrRenderAttr("srcset", "./images/castlelist/" + item.path + "/" + (index + 1) + ".png")} media="(min-width: 767.98px)"><img${ssrRenderAttr("src", "./images/castlelist/" + item.path + "/" + (index + 1) + ".png")}${ssrRenderAttr("alt", child)} loading="lazy"></picture></div></div><div class="category-castle__name">${ssrInterpolate(child)}</div></div>`);
    });
    _push(`<!--]--></div></section>`);
  });
  _push(`<!--]--><div class="castle-list__content content"><p>ABUS — это немецкая компания, которая с 1924 года разрабатывает охранные системы. Марка ABUS позиционирует себя как лидером уникальных изобретений, у которых запатентованные сплавы сверхпрочных металлов.</p><p>Компания входит независимую группу предприятий, работающую по всему миру в области механических и электронных систем безопасности. Замки Абус использоваются как для внутрених так и наружних помещений и всепогодных условий.</p><p>Область приминения замков Абус очень обширна, начиная защиты вашего самоката, велосипеда, мотоцикла, заканчивая защитой вашего гаража, бытовых и промышленных сооружений. Они просты в использовании и при этом очень прочные, эффективно защищают от взлома. Также вся продукция проходит тестирование на заморозку жидким азотом. После заморозки металл не теряет своих свойств и сопротивляется взлому.</p></div></div>`);
  _push(ssrRenderComponent(_component_Sidebar, null, null, _parent));
  _push(`</div></div></div></div>`);
}
const { castleList } = data;
const _sfc_main = {
  setup() {
    useMeta({ title: "Список замков" });
  },
  props: ["defaultCity", "declensionCity"],
  components: {
    Sidebar,
    Breadcrumbs
  },
  data() {
    return {
      castleList
    };
  },
  methods: {},
  mounted() {
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/CastleList.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const CastleList = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", ssrRender]]);
export {
  CastleList as default
};
