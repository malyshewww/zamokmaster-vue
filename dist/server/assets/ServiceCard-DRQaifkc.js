import { useMeta } from "vue-meta";
import { _ as _export_sfc, d as data } from "../entry-server.js";
import { B as Breadcrumbs } from "./Breadcrumbs-iCpvRvxc.js";
import { S as Sidebar } from "./Sidebar-B1JbPP8-.js";
import { C as CastleAdvantages, a as CastleTypes } from "./CastleTypes-6jlH_0ap.js";
import { resolveComponent, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import "node:path";
import "lvovich";
import "vue-router";
import "scrollreveal";
function ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Breadcrumbs = resolveComponent("Breadcrumbs");
  const _component_CastleAdvantages = resolveComponent("CastleAdvantages");
  const _component_CastleTypes = resolveComponent("CastleTypes");
  const _component_Sidebar = resolveComponent("Sidebar");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "page service-card" }, _attrs))}><div class="main__top top-main"><div class="container">`);
  _push(ssrRenderComponent(_component_Breadcrumbs, { pageTitle: "Вскрытие автомобилей" }, null, _parent));
  _push(`<div class="top-main__card"><div class="top-main__card-image"><picture><source${ssrRenderAttr("srcset", `./images/card/image.jpg`)}><img${ssrRenderAttr("src", `./images/card/image.jpg`)} alt="фото" loading="lazy"></picture></div><div class="top-main__body"><div class="top-main__title page-title">Вскрытие автомобилей <span>в ${ssrInterpolate($props.declensionCity)}</span></div><a class="btn-phone btn" href="tel:+79958881086"><div class="btn-phone__text">+7 (995) 888-10-86</div><div class="btn-phone__icon"></div></a></div></div></div></div><div class="page__body"><div class="container"><div class="service-card__body page-layout"><div class="service-card__groups section-groups">`);
  _push(ssrRenderComponent(_component_CastleAdvantages, null, null, _parent));
  _push(`<div class="service-card__content content"><p>Специалисты «Мастер замков» смогут так же восстановить ключи от вашего авто, в том числе Чип-ключей, даже в случае их полной утери. За что не всегда берутся другие мастера. Причём делаем эту услугу быстро и качественно.</p><p>Опираясь на многолетний опыт, мы можем предложить наши услуги, указанные в нашем прайсе.</p><p>Если у вас ещё остались вопросы, или хотите заказать услугу нашего мастера, наберите номер горячей линии, указанный в шапке сайта, или закажите звонок, и наш специалист перезвонит вам в течение нескольких минут</p><p>ВАЖНО! Все работы по аварийному вскрытию автомобилей производятся при наличии документов, подтверждающих право собственности или договора аренды.</p></div>`);
  _push(ssrRenderComponent(_component_CastleTypes, {
    path: "services",
    count: 12
  }, null, _parent));
  _push(`<div class="service-card__content content"><p>У вас не открывается ваш автомобиль? Вы захлопнули ключ в салоне автомобиля, или того хуже, ключи от вашей машины таинственным образом куда-то исчезли? Ситуаций может быть много, но всегда возникает самый главный вопрос: как быстро и без повреждений открыть ваше авто?</p><p>Наши мастера смогут помочь вам в решение данной проблемы, и готовы оперативно подъехать, и без повреждений вскрыть ваш автомобиль. Поможем разобраться с сигнализацией, и если причиной вскрытия автомобиля была ее внештатная блокировка, сумеем ее отключить.</p><p>Мы имеем большой опыт по аварийному вскрытию авто в Москве, также располагаем специальным оборудованием и большой коллекцией спец.инструмента, благодаря которому, способны аккуратно вскрыть замок автомобиля любой марки: от ретро- классики до авто последних моделей. При этом наши мастера готовы гарантировать качество работы, отсутствие любых дефектов, и поломок замка при вскрытии вашего авто. Наши методы вскрытия замков машин так же уникальны, и не имеют аналогов у наших конкурентов.</p><p>Мы охотно сотрудничаем в Москве со многими автосалонами и транспортными предприятиями города, оказывая профессиональную помощь по вскрытию авто организациям и частным лицам.</p></div><div class="service-card__content content"><div class="heading"><h2 class="heading__title title-sm">Прайс лист</h2></div><table><thead><tr><th>Услуга</th><th>Стоимость</th></tr></thead><tbody><!--[-->`);
  ssrRenderList($data.tablePrice.services, (item) => {
    _push(`<tr><td>${ssrInterpolate(item.service)}</td><td>${ssrInterpolate(item.price)}</td></tr>`);
  });
  _push(`<!--]--></tbody></table><div class="disclamer"><p>* Конечную стоимость всегда указывает мастер в зависимости от сложности предоставляемых ему работ</p></div></div></div>`);
  _push(ssrRenderComponent(_component_Sidebar, null, null, _parent));
  _push(`</div></div></div></div>`);
}
const { tablePrice } = data;
const _sfc_main = {
  setup() {
    useMeta({ title: "Карточка услуги" });
  },
  props: ["defaultCity", "declensionCity"],
  components: {
    Sidebar,
    Breadcrumbs,
    CastleAdvantages,
    CastleTypes
  },
  data() {
    return {
      tablePrice
    };
  },
  methods: {
    wrapTable() {
      if (window.innerWidth < 767.98) {
        let tableWrap = document.createElement("div");
        tableWrap.setAttribute("class", "table-wrap");
        this.$refs.table.parentNode.insertBefore(tableWrap, this.$refs.table);
        tableWrap.appendChild(this.$refs.table);
      }
    }
  },
  mounted() {
    window.addEventListener("load", () => {
      this.wrapTable();
    });
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/ServiceCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ServiceCard = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", ssrRender]]);
export {
  ServiceCard as default
};
