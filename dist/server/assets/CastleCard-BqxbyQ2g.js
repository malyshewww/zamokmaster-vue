import { computed, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { S as Sidebar } from "./Sidebar-OR3Vja4K.js";
import { _ as _sfc_main$1 } from "./Breadcrumbs-BtW0J10y.js";
import { _ as _sfc_main$2, a as _sfc_main$3 } from "./CastleTypes-CSdHFa4q.js";
import { useRoute } from "vue-router";
import { useHead } from "@vueuse/head";
import "../entry-server.js";
import "lvovich";
import "scrollreveal";
const _sfc_main = {
  __name: "CastleCard",
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
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page castle-card" }, _attrs))}><div class="main__top top-main"><div class="container">`);
      _push(ssrRenderComponent(_sfc_main$1, { pageTitle: "Карточка замка" }, null, _parent));
      _push(`<div class="top-main__card"><div class="top-main__card-image"><picture><source${ssrRenderAttr("srcset", `/images/card/logo.png`)}><img${ssrRenderAttr("src", `/images/card/logo.png`)} alt="фото" loading="lazy"></picture></div><div class="top-main__body"><div class="top-main__title page-title">Вскрытие замка MSM <span>${ssrInterpolate(__props.declensionCity)}</span></div><a class="btn-phone btn" href="tel:+79958881086"><div class="btn-phone__text">+7 (995) 888-10-86</div><div class="btn-phone__icon"></div></a></div></div></div></div><div class="page__body"><div class="container"><div class="castle-card__body page-layout"><div class="castle-card__groups section-groups"><div class="castle-card__content content"><p>Paxos- это серия безопасных и надёжных замков, которые постоянно самодиагностируют себя, и сообщают пользователю информацию о работоспособности через ЖК-экран.</p><p>В технологии Lock-by-Wire, адаптированная для авиационной промышленности, все данные передаются по проводам на две независимые электронные схемы безопасности в корпусе замка. Они и приводят в движение болт мотора через два мотора, тем самым освобождая дверной засов, чтобы открыть дверь сейфа или хранилища.</p><p>Подсчитано, что система проработает около 15 миллионов часов.</p><p>Как вскрыть замок Paxos?</p><p>Вскрытие можно произвести несколькими способами: профессиональным - это обратиться за помощью к профильному специалисту, который гарантированно откроет вашу собственность без повреждений;</p></div>`);
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$3, {
        path: "card",
        count: 8
      }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(Sidebar, null, null, _parent));
      _push(`</div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/CastleCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
