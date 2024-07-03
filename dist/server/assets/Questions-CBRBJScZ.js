import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
import { b as _export_sfc } from "../entry-server.js";
function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "questions" }, _attrs))}><div class="container"><div class="questions__wrapper"><div class="questions__body"><div class="questions__inner"><div class="questions__content"><h2 class="questions__title">Остались вопросы?</h2><p class="questions__sub-title">Мастер проконсультирует вас по всем вопросам</p></div><a class="questions__phone btn-phone btn-blue" href="tel:79958881086"><div class="btn-phone__text">+7 (995) 888-10-86</div><div class="btn-phone__icon"></div></a></div></div><div class="questions__info"><p>Выезд мастера <span>в течении 15–20 минут</span>. <br> Круглосуточно и без выходных</p><span class="questions__info-icon"></span></div></div></div></section>`);
}
const _sfc_main = {};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Questions.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Questions = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", ssrRender]]);
export {
  Questions as Q
};
