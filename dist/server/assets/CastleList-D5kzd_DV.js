import { computed, resolveComponent, mergeProps, unref, withCtx, createVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr } from "vue/server-renderer";
import { d as data } from "../entry-server.js";
import { S as Sidebar } from "./Sidebar-OR3Vja4K.js";
import { _ as _sfc_main$1 } from "./Breadcrumbs-BtW0J10y.js";
import { useRoute } from "vue-router";
import { useHead } from "@vueuse/head";
import "lvovich";
const _sfc_main = {
  __name: "CastleList",
  __ssrInlineRender: true,
  props: ["defaultCity", "declensionCity"],
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
    const { castleList } = data;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page castle-list" }, _attrs))}><div class="main__top top-main"><div class="container">`);
      _push(ssrRenderComponent(_sfc_main$1, { pageTitle: "Список замков" }, null, _parent));
      _push(`<div class="top-main__content"><div class="top-main__body"><h1 class="top-main__title page-title">Вскрытие всех видов замков <span>${ssrInterpolate(__props.declensionCity)}</span></h1><p class="top-main__sub-title">Профессиональное вскрытие замков. Официально, предоставляем все документы</p></div><a class="btn-phone btn" href="tel:+79958881086"><div class="btn-phone__text">+7 (995) 888-10-86</div><div class="btn-phone__icon"></div></a></div></div></div><div class="page__body"><div class="container"><div class="castle-list__body page-layout"><div class="castle-list__categories section-groups"><!--[-->`);
      ssrRenderList(unref(castleList), (item) => {
        _push(`<section class="castle-list__section category-castle"><div class="heading"><h2 class="heading__title title-sm">${ssrInterpolate(item.title)}</h2></div><div class="category-castle__items"><!--[-->`);
        ssrRenderList(item.children, (child, index) => {
          _push(ssrRenderComponent(_component_router_link, {
            class: "category-castle__item",
            to: `/castle-list/${index}`
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="category-castle__image"${_scopeId}><div class="category-castle__logo"${_scopeId}><picture${_scopeId}><source${ssrRenderAttr("srcset", "/images/castlelist/" + item.path + "/" + (index + 1) + ".png")}${_scopeId}><img${ssrRenderAttr("src", "/images/castlelist/" + item.path + "/" + (index + 1) + ".png")}${ssrRenderAttr("alt", child)} loading="lazy"${_scopeId}></picture></div></div><div class="category-castle__name"${_scopeId}>${ssrInterpolate(child)}</div>`);
              } else {
                return [
                  createVNode("div", { class: "category-castle__image" }, [
                    createVNode("div", { class: "category-castle__logo" }, [
                      createVNode("picture", null, [
                        createVNode("source", {
                          srcset: "/images/castlelist/" + item.path + "/" + (index + 1) + ".png"
                        }, null, 8, ["srcset"]),
                        createVNode("img", {
                          src: "/images/castlelist/" + item.path + "/" + (index + 1) + ".png",
                          alt: child,
                          loading: "lazy"
                        }, null, 8, ["src", "alt"])
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "category-castle__name" }, toDisplayString(child), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></div></section>`);
      });
      _push(`<!--]--><div class="castle-list__content content"><p>ABUS — это немецкая компания, которая с 1924 года разрабатывает охранные системы. Марка ABUS позиционирует себя как лидером уникальных изобретений, у которых запатентованные сплавы сверхпрочных металлов.</p><p>Компания входит независимую группу предприятий, работающую по всему миру в области механических и электронных систем безопасности. Замки Абус использоваются как для внутрених так и наружних помещений и всепогодных условий.</p><p>Область приминения замков Абус очень обширна, начиная защиты вашего самоката, велосипеда, мотоцикла, заканчивая защитой вашего гаража, бытовых и промышленных сооружений. Они просты в использовании и при этом очень прочные, эффективно защищают от взлома. Также вся продукция проходит тестирование на заморозку жидким азотом. После заморозки металл не теряет своих свойств и сопротивляется взлому.</p></div></div>`);
      _push(ssrRenderComponent(Sidebar, null, null, _parent));
      _push(`</div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/CastleList.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
