import { useMeta } from "vue-meta";
import { Q as Questions } from "./Questions-CeLo0nCs.js";
import { B as Breadcrumbs } from "./Breadcrumbs-iCpvRvxc.js";
import { resolveComponent, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../entry-server.js";
import "node:path";
import "lvovich";
import "vue-router";
function ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Breadcrumbs = resolveComponent("Breadcrumbs");
  const _component_Questions = resolveComponent("Questions");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "page contacts" }, _attrs))}><div class="main__top top-main"><div class="container">`);
  _push(ssrRenderComponent(_component_Breadcrumbs, { pageTitle: "Контакты" }, null, _parent));
  _push(`<div class="top-main__content"><h1 class="top-main__title page-title">Контакты</h1></div></div></div><div class="page__body"><div class="contacts__wrapper"><div class="container"><div class="contacts__body"><div class="contacts__info info-contacts"><div class="info-contacts__item"><div class="info-contacts__caption">Расположение</div><div class="info-contacts__content content"><p>Наши сотрудники работают во всех точках города. К вам приедет самый ближайший</p></div></div><div class="info-contacts__item"><div class="info-contacts__caption">Адрес</div><div class="info-contacts__content content"><p>Россия, Москва, улица Красная Пресня, 23, корп. Б, стр. 1</p></div></div><div class="info-contacts__item"><div class="info-contacts__caption">Контакты</div><ul class="info-contacts__list"><li class="info-contacts__list-item"><a class="info-contacts__link" href="tel:+79958881086">+7 (995) 888-10-86</a></li><li class="info-contacts__list-item"><a class="info-contacts__link" href="mailto:hello@zamokmaster.ru">hello@zamokmaster.ru</a></li></ul></div></div><div class="contacts__map" id="map"></div></div></div></div>`);
  _push(ssrRenderComponent(_component_Questions, null, null, _parent));
  _push(`</div></div>`);
}
const _sfc_main = {
  setup() {
    useMeta({ title: "Контакты" });
  },
  props: ["defaultCity", "declensionCity"],
  components: {
    Questions,
    Breadcrumbs
  },
  data() {
    return {
      // mapElem: null
    };
  },
  methods: {
    initMap() {
      const mapElem = document.getElementById("map");
      var myMap, myPlacemark;
      function mapInit() {
        const map = document.getElementById("map");
        myMap = new ymaps.Map(
          "map",
          {
            center: [55.761462, 37.568129],
            zoom: 16,
            controls: ["zoomControl"]
          },
          {
            searchControlProvider: "yandex#search"
          }
        ), myPlacemark = new ymaps.Placemark(
          myMap.getCenter(),
          {
            balloonContent: "г. Москва, улица Красная Пресня, 23кБс1"
          },
          {
            iconLayout: "default#image",
            iconImageHref: "../../images/icons/map-icon.svg",
            iconImageSize: [26, 30],
            iconImageOffset: [-10, -30]
          }
        );
        myMap.geoObjects.add(myPlacemark);
        if (window.innerWidth < 991.98) {
          myMap.behaviors.disable("drag");
          let version = map.firstChild.getAttribute("class").replace("ymaps-", "").replace("-map", "");
          let pane = document.querySelector(".ymaps-" + version + "-events-pane");
          pane.innerHTML = "Чтобы переместить карту проведите по ней двумя пальцами";
          pane.style.cssText = "height: 100%; width: 100%; position: absolute; top: 0px; left: 0px; z-index: 2500; color: #fff; font-size: 22px; font-family: Arial, sans-serif; display: flex; align-items: center; justify-content: center; text-align: center; background-color: rgba(0,0,0,0.45); opacity: 0; transition: opacity 0.45s; padding: 25px; box-sizing: border-box;";
          map.addEventListener("touchmove", function(e) {
            let touches = e.touches.length;
            if (touches > 1) {
              pane.style.opacity = "0";
            } else {
              pane.style.opacity = "1";
            }
          });
          map.addEventListener("touchend", function() {
            pane.style.opacity = "0";
          });
        }
      }
      if (mapElem) {
        let isLoaded = false;
        const loadMap = () => {
          var script = document.createElement("script");
          script.src = "https://api-maps.yandex.ru/2.1/?apikey=292672c7-fe24-4469-a901-e4fedb380302&lang=ru_RU";
          document.body.appendChild(script);
          isLoaded = true;
          script.onload = function() {
            if (typeof ymaps === "undefined")
              return;
            ymaps.ready(mapInit);
          };
        };
        let observerOptions = {
          // root: по умолчанию window, но можно задать любой элемент-контейнер
          rootMargin: "0px 0px 0px 0px"
        };
        let observer = new IntersectionObserver(([entry]) => {
          const targetInfo = entry.boundingClientRect;
          const rootBoundsInfo = entry.rootBounds;
          if (!isLoaded && targetInfo.top < rootBoundsInfo.bottom || targetInfo.isIntersecting) {
            loadMap();
            observer.unobserve(entry.target);
          }
        }, observerOptions);
        observer.observe(mapElem);
      }
    }
  },
  mounted() {
    this.initMap();
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/Contacts.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Contacts = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", ssrRender]]);
export {
  Contacts as default
};
