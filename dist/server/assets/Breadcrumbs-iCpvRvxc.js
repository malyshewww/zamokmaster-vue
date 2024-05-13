import { resolveComponent, mergeProps, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "../entry-server.js";
function ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_router_link = resolveComponent("router-link");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "breadcrumbs" }, _attrs))}><nav class="breadcrumbs__navigation"><ul class="breadcrumbs__list"><li class="breadcrumbs__item">`);
  _push(ssrRenderComponent(_component_router_link, {
    class: "breadcrumbs__link",
    to: "/"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Главная`);
      } else {
        return [
          createTextVNode("Главная")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="breadcrumbs__item">${ssrInterpolate($props.pageTitle)}</li></ul></nav></div>`);
}
const _sfc_main = {
  props: ["pageTitle"]
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Breadcrumbs.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Breadcrumbs = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", ssrRender]]);
export {
  Breadcrumbs as B
};
