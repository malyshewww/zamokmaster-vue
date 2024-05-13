import { _ as _export_sfc, d as data } from "../entry-server.js";
import ScrollReveal from "scrollreveal";
import { mergeProps, useSSRContext, resolveComponent, withCtx, createVNode, createTextVNode } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
function ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "castle-advantages" }, _attrs))}><div class="heading"><h2 class="heading__title title-sm">Преимущества</h2></div><div class="castle-advantages__items"><!--[-->`);
  ssrRenderList($data.castleAdvantages, (item, index) => {
    _push(`<div class="${ssrRenderClass(["castle-advantages__item--" + (index + 1), "castle-advantages__item"])}"><span class="castle-advantages__icon"></span><div class="castle-advantages__content"><div class="castle-advantages__caption">${ssrInterpolate(item.caption)}</div><div class="castle-advantages__description">${ssrInterpolate(item.descr)}</div></div></div>`);
  });
  _push(`<!--]--></div></div>`);
}
const { castleAdvantages } = data;
const _sfc_main$1 = {
  components: {},
  data() {
    return {
      castleAdvantages
    };
  },
  methods: {
    animation() {
      if (typeof window !== "undefined") {
        ScrollReveal({
          reset: false,
          duration: 1500,
          distance: "15px",
          mobile: false
        });
        ScrollReveal().reveal(".castle-advantages__item", { origin: "top", opacity: 0 });
      }
    }
  },
  mounted() {
    this.animation();
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/CastleAdvantages.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const CastleAdvantages = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", ssrRender$1]]);
function ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_router_link = resolveComponent("router-link");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "castle-types" }, _attrs))}><div class="heading"><h2 class="heading__title title-sm">Открываем все виды замков</h2></div><div class="castle-types__body"><!--[-->`);
  ssrRenderList($props.count, (item, index) => {
    _push(ssrRenderComponent(_component_router_link, {
      class: "castle-item",
      to: "/castle-card"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<div class="castle-item__image"${_scopeId}><div class="castle-item__logo"${_scopeId}><picture${_scopeId}><source${ssrRenderAttr("srcset", "./images/castle-types/" + $props.path + "/type-" + (index + 1) + ".png")}${_scopeId}><img${ssrRenderAttr("src", "./images/castle-types/card/type-" + (index + 1) + ".png")} alt="" loading="lazy"${_scopeId}></picture></div></div>`);
        } else {
          return [
            createVNode("div", { class: "castle-item__image" }, [
              createVNode("div", { class: "castle-item__logo" }, [
                createVNode("picture", null, [
                  createVNode("source", {
                    srcset: "./images/castle-types/" + $props.path + "/type-" + (index + 1) + ".png"
                  }, null, 8, ["srcset"]),
                  createVNode("img", {
                    src: "./images/castle-types/card/type-" + (index + 1) + ".png",
                    alt: "",
                    loading: "lazy"
                  }, null, 8, ["src"])
                ])
              ])
            ])
          ];
        }
      }),
      _: 2
    }, _parent));
  });
  _push(`<!--]--></div>`);
  _push(ssrRenderComponent(_component_router_link, {
    class: "castle-types__button btn",
    to: "/castle-list"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Все замки`);
      } else {
        return [
          createTextVNode("Все замки")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_main = {
  props: ["path", "count"],
  components: {},
  data() {
    return {};
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/CastleTypes.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const CastleTypes = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", ssrRender]]);
export {
  CastleAdvantages as C,
  CastleTypes as a
};
