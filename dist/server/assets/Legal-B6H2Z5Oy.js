import { computed, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./Breadcrumbs-BtW0J10y.js";
import { useRoute } from "vue-router";
import { useHead } from "@vueuse/head";
const _sfc_main = {
  __name: "Legal",
  __ssrInlineRender: true,
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
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page legal-page" }, _attrs))}><div class="main__top top-main"><div class="container">`);
      _push(ssrRenderComponent(_sfc_main$1, { pageTitle: "Юридическим лицам" }, null, _parent));
      _push(`<div class="top-main__content"><h1 class="top-main__title page-title">Юридическим лицам</h1></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/Legal.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
