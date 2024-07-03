import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { b as _export_sfc } from "../entry-server.js";
function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<aside${ssrRenderAttrs(mergeProps({ class: "aside" }, _attrs))}><div class="castle-list__questions questions-castle"><div class="questions-castle__title">Остались вопросы?</div><div class="questions-castle__sub-title">Мастер проконсультирует вас по всем вопросам</div><a class="questions-castle__button btn-blue" href="tel:+79958881086"><span>+7 (995) 888-10-86</span></a></div><div class="aside__module"><iframe style="${ssrRenderStyle({ "width": "100%", "height": "100%", "border": "1px solid #e6e6e6", "border-radius": "8px", "box-sizing": "border-box" })}" src="https://yandex.ru/maps-reviews-widget/158778930985?comments"></iframe><a href="https://yandex.ru/maps/org/dom_byta/158778930985/" target="_blank" style="${ssrRenderStyle({ "box-sizing": "border-box", "text-decoration": "none", "color": "#b3b3b3", "font-size": "10px", "font-family": "YS Text,sans-serif", "padding": "0 16px", "position": "absolute", "bottom": "8px", "width": "100%", "text-align": "center", "left": "0", "overflow": "hidden", "text-overflow": "ellipsis", "display": "block", "max-height": "14px", "white-space": "nowrap" })}">Дом Быта на карте Москвы — Яндекс Карты</a></div></aside>`);
}
const _sfc_main = {};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Sidebar.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Sidebar = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", ssrRender]]);
export {
  Sidebar as S
};
