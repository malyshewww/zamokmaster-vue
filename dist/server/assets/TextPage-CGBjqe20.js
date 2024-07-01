import { computed, ref, onMounted, onUpdated, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./Breadcrumbs-BtW0J10y.js";
import { Fancybox } from "@fancyapps/ui";
import { useRoute } from "vue-router";
import { useHead } from "@vueuse/head";
const _sfc_main = {
  __name: "TextPage",
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
    const fancyboxOptions = {
      Hash: false
    };
    const table = ref();
    const wrapTable = () => {
      if (window.innerWidth < 767.98) {
        let tableWrap = document.createElement("div");
        tableWrap.setAttribute("class", "table-wrap");
        table.value.parentNode.insertBefore(tableWrap, table.value);
        tableWrap.appendChild(table.value);
      }
    };
    onMounted(() => {
      Fancybox.bind(`[data-fancybox="gallery"]`, fancyboxOptions);
      wrapTable();
    });
    onUpdated(() => {
      Fancybox.bind(`[data-fancybox="gallery"]`, fancyboxOptions);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "text-page" }, _attrs))}><div class="container"><div class="text-page__top">`);
      _push(ssrRenderComponent(_sfc_main$1, { pageTitle: "Политика конфиденциальности" }, null, _parent));
      _push(`</div><div class="text-page__content content"><h1>H1 Заголовок</h1><h2>H2 заголовок</h2><h3>H3 заголовок</h3><p>В жизни каждого человека случаются непредвиденные ситуации: захлопнулась дверь, сломался замок, или не открывается ваш автомобиль. А может вы потеряли ключи от сейфа, и теперь не знаете что делать?</p><p>Главное, не поддавайтесь панике, и не пытайтесь, с помощью подручных инструментов, самостоятельно решить данную проблему, разрушая тем самым не только конструкцию замка, но и целостность самой двери.</p><p>Теперь у вас есть надёжный помощник-специалист компании &quot;Замок-Мастер&quot;, который сможет оперативно подъехать, и без повреждения двери вскрыть замок любой сложности, а при необходимости, и произвести ремонт замка или замену на аналог, или установить замок повышенной защиты.</p><p>ВАЖНО! Все работы по аварийному вскрытию замков производятся при наличии документов, подтверждающих <a href="/">право собственности или договора аренды.</a></p><ul><li>Вскрытие дверей</li><li>Вскрытие замков</li><li>Вскрытие авто</li><li>Установка замков</li></ul><h3>Изображения в тексте</h3><p>Так же одно из наших преимуществ является то, что наша организация рассчитывает на работу со своими клиентами на долгосрочной основе, предполагая взаимовыгодное сотрудничество на долгие годы. предполагая взаимовыгодное сотрудничество на долгие годы.</p><picture><source${ssrRenderAttr("srcset", `/images/text-page/image-1.jpg`)}><img class="align-left"${ssrRenderAttr("src", `/images/text-page/image-1.jpg`)} alt="фото" width="420" height="254" loading="lazy"></picture><p>В жизни каждого человека случаются непредвиденные ситуации: захлопнулась дверь, сломался замок, или не открывается ваш автомобиль. А может вы потеряли ключи от сейфа, и теперь не знаете что делать?</p><p>Главное, не поддавайтесь панике, и не пытайтесь, с помощью подручных инструментов, самостоятельно решить данную проблему, разрушая тем самым не только конструкцию замка, но и целостность самой двери.</p><p>Теперь у вас есть надёжный помощник-специалист компании &quot;Замок-Мастер&quot;, который сможет оперативно </p><p>В жизни каждого человека случаются непредвиденные ситуации: захлопнулась дверь, сломался замок, или не открывается ваш автомобиль. А может вы потеряли ключи от сейфа, и теперь не знаете что делать? Главное, не поддавайтесь панике, и не пытайтесь, с помощью подручных инструментов, й </p><picture><source${ssrRenderAttr("srcset", `/images/text-page/image-2.jpg`)}><img class="align-right"${ssrRenderAttr("src", `/images/text-page/image-2.jpg`)} alt="фото" width="310" height="399" loading="lazy"></picture><p>В жизни каждого человека случаются непредвиденные ситуации: захлопнулась дверь, сломался замок, или не открывается ваш автомобиль. А может вы потеряли ключи от сейфа, и теперь не знаете что делать?</p><p>Главное, не поддавайтесь панике, и не пытайтесь, с помощью подручных инструментов, самостоятельно решить данную проблему, разрушая тем самым не только конструкцию замка, но и целостность самой двери.</p><p>Теперь у вас есть надёжный помощник-специалист компании &quot;Замок-Мастер&quot;, который сможет оперативно В жизни каждого человека случаются непредвиденные ситуации: захлопнулась дверь, сломался замок, или не открывается ваш автомобиль. А может вы потеряли ключи от сейфа, и теперь не знаете что делать?</p><p>Главное, не поддавайтесь панике, и не пытайтесь, с помощью подручных инструментов, самостоятельно решить данную проблему, разрушая тем самым не только конструкцию замка, но и целостность самой двери.</p><p>В жизни каждого человека случаются непредвиденные ситуации: захлопнулась дверь, сломался замок, или не открывается ваш автомобиль. А может вы потеряли ключи от сейфа, и теперь не знаете что делать?</p><table><thead><tr><th>Услуга</th><th>Стоимость</th></tr></thead><tbody><!--[-->`);
      ssrRenderList(6, (item) => {
        _push(`<tr><td>Вскрытие дверей</td><td>от 5 000 ₽</td></tr>`);
      });
      _push(`<!--]--></tbody></table></div><div class="text-page__gallery"><h3>Фотогалерея</h3><div class="text-page__gallery-body"><!--[-->`);
      ssrRenderList(8, (item, index) => {
        _push(`<a class="gallery-item" data-fancybox="gallery"${ssrRenderAttr("href", "/images/text-page/gallery-" + (index + 1) + ".jpg")}><div class="gallery-item__image ibg"><picture><source${ssrRenderAttr("srcset", "/images/text-page/gallery-" + (index + 1) + ".jpg")}><img${ssrRenderAttr("src", "/images/text-page/gallery-" + (index + 1) + ".jpg")} alt="фото" loading="lazy"></picture></div></a>`);
      });
      _push(`<!--]--></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/TextPage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
