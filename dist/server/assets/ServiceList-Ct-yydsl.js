import { computed, resolveComponent, mergeProps, unref, withCtx, createVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr } from "vue/server-renderer";
import { d as data } from "../entry-server.js";
import { _ as _sfc_main$1 } from "./Breadcrumbs-BtW0J10y.js";
import { useRoute } from "vue-router";
import { useHead } from "@vueuse/head";
import "lvovich";
import "@vue/server-renderer";
const _sfc_main = {
  __name: "ServiceList",
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
    const { servicesList } = data;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page service-list" }, _attrs))}><div class="main__top top-main"><div class="container">`);
      _push(ssrRenderComponent(_sfc_main$1, { pageTitle: "Услуги" }, null, _parent));
      _push(`<div class="top-main__content"><div class="top-main__body"><h1 class="top-main__title page-title">Услуги Замокмастер <span>${ssrInterpolate(__props.declensionCity)}</span></h1><p class="top-main__sub-title">Поможем открыть любой замок без повреждений двери. Срочный выезд за 15–20 минут</p></div><a class="btn-phone btn" href="tel:+79958881086"><div class="btn-phone__text">+7 (995) 888-10-86</div><div class="btn-phone__icon"></div></a></div></div></div><div class="page__body"><div class="container"><div class="service-list__wrapper section-groups"><div class="service-list__body"><!--[-->`);
      ssrRenderList(unref(servicesList), (service, index) => {
        _push(ssrRenderComponent(_component_router_link, {
          class: "services__item item-services",
          to: `/service-list/${index}`
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="item-services__content"${_scopeId}><div class="item-services__title"${_scopeId}>${ssrInterpolate(service)}</div><div class="item-services__bottom"${_scopeId}><span class="item-services__icon"${_scopeId}><picture${_scopeId}><source${ssrRenderAttr("srcset", "/images/service-list/icon-" + (index + 1) + ".png")} media="(min-width: 767.98px)"${_scopeId}><source${ssrRenderAttr("srcset", "/images/service-list/icon-" + (index + 1) + "-mob.png")} media="(min-width: 300px)"${_scopeId}><img${ssrRenderAttr("src", "/images/service-list/icon-" + (index + 1) + ".png")}${ssrRenderAttr("alt", service)} loading="lazy"${_scopeId}></picture></span></div></div>`);
            } else {
              return [
                createVNode("div", { class: "item-services__content" }, [
                  createVNode("div", { class: "item-services__title" }, toDisplayString(service), 1),
                  createVNode("div", { class: "item-services__bottom" }, [
                    createVNode("span", { class: "item-services__icon" }, [
                      createVNode("picture", null, [
                        createVNode("source", {
                          srcset: "/images/service-list/icon-" + (index + 1) + ".png",
                          media: "(min-width: 767.98px)"
                        }, null, 8, ["srcset"]),
                        createVNode("source", {
                          srcset: "/images/service-list/icon-" + (index + 1) + "-mob.png",
                          media: "(min-width: 300px)"
                        }, null, 8, ["srcset"]),
                        createVNode("img", {
                          src: "/images/service-list/icon-" + (index + 1) + ".png",
                          alt: service,
                          loading: "lazy"
                        }, null, 8, ["src", "alt"])
                      ])
                    ])
                  ])
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div><div class="service-list__content content"><p>В жизни каждого человека случаются непредвиденные ситуации: захлопнулась дверь, сломался замок, или не открывается ваш автомобиль. А может вы потеряли ключи от сейфа, и теперь не знаете что делать?</p><p>Главное, не поддавайтесь панике, и не пытайтесь, с помощью подручных инструментов, самостоятельно решить данную проблему, разрушая тем самым не только конструкцию замка, но и целостность самой двери.</p><p>Теперь у вас есть надёжный помощник-специалист компании &quot;Замок- В жизни каждого человека случаются непредвиденные ситуации: захлопнулась дверь, сломался замок, или не </p></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/ServiceList.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
