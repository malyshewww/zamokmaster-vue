import { useMeta } from "vue-meta";
import { S as Sidebar } from "./Sidebar-B1JbPP8-.js";
import { B as Breadcrumbs } from "./Breadcrumbs-iCpvRvxc.js";
import { C as CastleAdvantages, a as CastleTypes } from "./CastleTypes-6jlH_0ap.js";
import { resolveComponent, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "../entry-server.js";
import "scrollreveal";
import "node:path";
import "lvovich";
import "vue-router";
function ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Breadcrumbs = resolveComponent("Breadcrumbs");
  const _component_CastleAdvantages = resolveComponent("CastleAdvantages");
  const _component_CastleTypes = resolveComponent("CastleTypes");
  const _component_Sidebar = resolveComponent("Sidebar");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "page castle-card" }, _attrs))}><div class="main__top top-main"><div class="container">`);
  _push(ssrRenderComponent(_component_Breadcrumbs, { pageTitle: "Карточка замка" }, null, _parent));
  _push(`<div class="top-main__card"><div class="top-main__card-image"><picture><source${ssrRenderAttr("srcset", `./images/card/logo.png`)}><img${ssrRenderAttr("src", `./images/card/logo.png`)} alt="фото" loading="lazy"></picture></div><div class="top-main__body"><div class="top-main__title page-title">Вскрытие замка MSM <span>в ${ssrInterpolate($props.declensionCity)}</span></div><a class="btn-phone btn" href="tel:+79958881086"><div class="btn-phone__text">+7 (995) 888-10-86</div><div class="btn-phone__icon"></div></a></div></div></div></div><div class="page__body"><div class="container"><div class="castle-card__body page-layout"><div class="castle-card__groups section-groups"><div class="castle-card__content content"><p>Paxos- это серия безопасных и надёжных замков, которые постоянно самодиагностируют себя, и сообщают пользователю информацию о работоспособности через ЖК-экран.</p><p>В технологии Lock-by-Wire, адаптированная для авиационной промышленности, все данные передаются по проводам на две независимые электронные схемы безопасности в корпусе замка. Они и приводят в движение болт мотора через два мотора, тем самым освобождая дверной засов, чтобы открыть дверь сейфа или хранилища.</p><p>Подсчитано, что система проработает около 15 миллионов часов.</p><p>Как вскрыть замок Paxos?</p><p>Вскрытие можно произвести несколькими способами: профессиональным - это обратиться за помощью к профильному специалисту, который гарантированно откроет вашу собственность без повреждений;</p></div>`);
  _push(ssrRenderComponent(_component_CastleAdvantages, null, null, _parent));
  _push(ssrRenderComponent(_component_CastleTypes, {
    path: "card",
    count: 8
  }, null, _parent));
  _push(`</div>`);
  _push(ssrRenderComponent(_component_Sidebar, null, null, _parent));
  _push(`</div></div></div></div>`);
}
const _sfc_main = {
  setup() {
    useMeta({ title: "Карточка замка" });
  },
  props: ["defaultCity", "declensionCity"],
  components: {
    Sidebar,
    Breadcrumbs,
    CastleAdvantages,
    CastleTypes
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/CastleCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const CastleCard = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", ssrRender]]);
export {
  CastleCard as default
};
