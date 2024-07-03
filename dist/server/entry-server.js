import { ssrRenderComponent, ssrRenderClass, ssrRenderStyle, ssrRenderAttrs, ssrRenderSlot, ssrInterpolate, ssrRenderTeleport, ssrRenderAttr, ssrRenderList, renderToString } from "vue/server-renderer";
import { ref, computed, resolveComponent, withCtx, createTextVNode, useSSRContext, mergeProps, reactive, onMounted, createVNode, withDirectives, vModelText, openBlock, createBlock, Fragment, renderList, toDisplayString, createCommentVNode, unref, watchEffect, createSSRApp, createApp as createApp$1 } from "vue";
import { useHead, createHead } from "@vueuse/head";
import { cityIn } from "lvovich";
import { useRoute, createMemoryHistory, createRouter as createRouter$1 } from "vue-router";
import axios from "axios";
import { createPinia } from "pinia";
const data = {
  services: [
    {
      title: "Вскрытие дверей",
      img: 1
    },
    {
      title: "Вскрытие сейфов",
      img: 2
    },
    {
      title: "Вскрытие авто",
      img: 3
    },
    {
      title: "Установка замков",
      img: 4
    }
  ],
  servicesDetail: [
    {
      titleGray: "Вскрытие замков.",
      title: "Опыт работы более 15 лет",
      text: [
        "Существуют различные ситуации, по которым невозможно открыть замок: случайно захлопнулась дверь, сломался замок, потерялись ключи, и много других причин, требующих аварийного вскрытия замка."
      ]
    },
    {
      titleGray: "Вскрытие дверей.",
      title: "Без поврежденний",
      text: [
        "Не пытайтесь самостоятельно, с помощью подручного инструмента вскрыть замок двери.",
        "Как показывает практика решить данную проблему таким способом не получится, потому как современные — замки имеют надёжную защиту от взлома, такие методы вскрытия двери усугубляют сложившуюся ситуацию, разрушают окончательно функциональность замка, нарушая его конструкцию, а так же целостность, и внешний вид самой двери."
      ]
    },
    {
      titleGray: "Вскрытие сейфов.",
      title: "Профессиональным методом",
      text: [
        "Вот уже много лет человечество озабочено проблемой надёжности и сохранности своих ценностей. Именно поэтому конструкторы старательно разрабатывают всё новые и новые методы совершенствования защиты сейфов и сейфового оборудования.",
        "В настоящее время рынок сейфов предлагает целый ряд разнообразных моделей, разделяющихся по классам защиты, взломостойкости, и огнестойкости."
      ]
    },
    {
      titleGray: "Вскрытие авто.",
      title: "Без царапин и поврежденний",
      text: [
        "У вас не открывается ваш автомобиль? Вы захлопнули ключ в салоне автомобиля, или того хуже, ключи от вашей машины таинственным образом куда‑то исчезли? Ситуаций может быть много, но всегда возникает самый главный вопрос: как быстро и без повреждений открыть ваше авто?",
        "Наши мастера смогут помочь вам в решение данной проблемы, и готовы оперативно подъехать, и без повреждений вскрыть ваш автомобиль."
      ]
    },
    {
      titleGray: "Установка замков.",
      title: "Помощь в выборе и доставке замка",
      text: [
        "Надёжные замки — верный помощник в обеспечении безопасности вашего имущества. Поэтому такая проблема, как подбор и установка замка остаётся приоритетной во все времена.",
        "Открываете ли вы новый офис в Москве, переезжаете на новую квартиру, или просто желаете сменить свой замок на более надёжную и современную конструкцию — вопрос подбора замка, наиболее подходящего по функционалу работы и качества его установки, становится актуальным как никакой другой."
      ]
    }
  ],
  stats: [
    {
      num: "30",
      text: "лет опыта"
    },
    {
      num: "15 000",
      text: "довольных клиентов"
    },
    {
      num: "100 %",
      text: "открытых замков"
    }
  ],
  geography: [
    {
      list: [
        "Бульвар Рокоссовского",
        "Черкизовская",
        "Преображенская площадь",
        "Сокольники",
        "Красносельская",
        "Комсомольская",
        "Красные Ворота",
        "Чистые пруды",
        "Лубянка",
        "Охотный Ряд"
      ]
    },
    {
      list: [
        "Кутузовская",
        "Студенческая",
        "Международная",
        "Выставочная",
        "Киевская",
        "Филёвская линия Смоленская",
        "Арбатская",
        "Александровский сад",
        "Парк культуры",
        "Октябрьская"
      ]
    },
    {
      list: [
        "Парк Победы",
        "Деловой центр",
        "Третьяковская",
        "Марксистская",
        "Площадь Ильича",
        "Авиамоторная",
        "Шоссе Энтузиастов",
        "Перово",
        "Новогиреево",
        "Новокосино"
      ]
    },
    {
      list: [
        "Нижегородская",
        "Стахановская",
        "Окская",
        "Юго-Восточная",
        "Косино",
        "Улица Дмитриевского",
        "Лухмановская",
        "Некрасовка",
        "Тимирязевская",
        "Улица Милашенкова"
      ]
    }
  ],
  menuFooter: [
    {
      caption: "Меню",
      list: [
        {
          title: "Главная",
          path: "/"
        },
        {
          title: "О компании",
          path: "/about"
        },
        {
          title: "Юридическим лицам",
          path: "/legal"
        },
        {
          title: "Физическим лицам",
          path: "/individual"
        },
        {
          title: "Контакты",
          path: "/contacts"
        },
        {
          title: "Список замков",
          path: "/castle-list"
        }
      ]
    },
    {
      caption: "Услуги",
      list: [
        {
          title: "Вскрытие замков",
          path: "/service-list/0"
        },
        {
          title: "Вскрытие дверей",
          path: "/service-list/1"
        },
        {
          title: "Вскрытие авто",
          path: "/service-list/2"
        },
        {
          title: "Вскрытие сейфов",
          path: "/service-list/3"
        },
        {
          title: "Установка замков",
          path: "/service-list/5"
        }
      ]
    }
  ],
  castleList: [
    {
      path: "opencastle",
      title: "Вскрытие замков",
      children: ["Abloy", "Mottura", "Mul-t-lock", "Эльбор", "Liberty", "Sargent and greenleaf"]
    },
    {
      path: "opendoors",
      title: "Вскрытие дверей",
      children: [
        "Mottura",
        "Abloy",
        "Abloy",
        "Abloy",
        "Archie",
        "Эльбор",
        "Завод Новатор",
        "Контур",
        "Просам",
        "msm"
      ]
    },
    {
      path: "opensafe",
      title: "Вскрытие сейфов",
      children: [
        "Mottura",
        "SMP",
        "Mottura",
        "Stahlkraft",
        "Abloy",
        "Контур",
        "Завод новатор",
        "Glory"
      ]
    },
    {
      path: "setcastle",
      title: "Установка замков",
      children: ["Paxos", "Abloy", "Archie", "Abloy", "Mottura", "msm", "Контур", "Просам"]
    }
  ],
  castleAdvantages: [
    {
      caption: "Работаем 24/7",
      descr: "Круглосуточно и без выходных"
    },
    {
      caption: "Официально",
      descr: "Предоставляем все документы"
    },
    {
      caption: "Быстро",
      descr: "Выезд мастера в течение 15 минут"
    },
    {
      caption: "Без предоплат",
      descr: "Оплата после выполнения"
    },
    {
      caption: "Аккуратно",
      descr: "Без повреждений и царапин двери"
    },
    {
      caption: "Без посредников",
      descr: "Звонок напрямую мастеру"
    }
  ],
  tablePrice: {
    services: [
      {
        service: "Вскрытие легковых отечественных автомобилей",
        price: "от 1000 ₽"
      },
      {
        service: "Вскрытие отечественных внедорожников",
        price: "от 1300 ₽"
      },
      {
        service: "Вскрытие микроавтобусов",
        price: "от 1500 ₽"
      },
      {
        service: "Вскрытие грузовых машин",
        price: "от 2500 ₽"
      },
      {
        service: "Вскрытие иностранного авто",
        price: "от 1500 ₽"
      },
      {
        service: "Вскрытие авто с двойной блокировкой",
        price: "от 1800 ₽"
      },
      {
        service: "Вскрытие авто премиум класса",
        price: "от 2000₽"
      },
      {
        service: "Вскрытие багажника, капота автомобиля",
        price: "от 1500 ₽"
      },
      {
        service: "Вскрытие бензобака, бардачка, автобокса.",
        price: "от 1200 ₽"
      },
      {
        service: "Вскрытие противоугонных устройств, блокировок КПП",
        price: "от 2000 ₽"
      },
      {
        service: "Изготовление ключей по замку, Чип- ключей",
        price: "от 2000 ₽"
      },
      {
        service: "Отключение сигнализации",
        price: "от 700 ₽"
      }
    ]
  },
  servicesList: [
    "Вскрытие замков",
    "Вскрытие дверей",
    "Вскрытие авто",
    "Вскрытие сейфов",
    "Установка замков"
  ]
};
const _sfc_main$a = {
  __name: "Navbar",
  __ssrInlineRender: true,
  setup(__props) {
    const maxHeight = ref(0);
    const isShow = ref(false);
    const subMenu = ref();
    const openSubMenu = (e) => {
      if (window.innerWidth < 1400 && window.innerWidth > 1024) {
        isShow.value = !isShow.value;
      }
    };
    const closeSubMenu = (e) => {
      if (window.innerWidth < 1400 && window.innerWidth > 1024) {
        isShow.value = !isShow.value;
      }
    };
    const myStyles = computed(() => {
      var _a;
      return {
        "max-height": `${isShow.value ? (_a = subMenu.value) == null ? void 0 : _a.scrollHeight : maxHeight.value}px`
      };
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      _push(`<!--[--><nav><ul class="menu__list"><li class="menu__item">`);
      _push(ssrRenderComponent(_component_router_link, {
        class: "route",
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
      _push(`</li><li class="${ssrRenderClass([{ active: isShow.value }, "menu__item menu__item--extended"])}">`);
      _push(ssrRenderComponent(_component_router_link, {
        class: "link-pc",
        to: "/service-list",
        onMouseenter: ($event) => openSubMenu(),
        onMouseleave: ($event) => closeSubMenu()
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Услуги`);
          } else {
            return [
              createTextVNode("Услуги")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<a class="link-touch" href="javascript:void(0);">Услуги</a><div class="menu__sub-list" style="${ssrRenderStyle(myStyles.value)}"><ul><li>`);
      _push(ssrRenderComponent(_component_router_link, {
        class: "route",
        to: "/service-list/0"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Вскрытие дверей`);
          } else {
            return [
              createTextVNode("Вскрытие дверей")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_router_link, {
        class: "route",
        to: "/service-list/1"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Вскрытие сейфов`);
          } else {
            return [
              createTextVNode("Вскрытие сейфов")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_router_link, {
        class: "route",
        to: "/service-list/2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Вскрытие авто`);
          } else {
            return [
              createTextVNode("Вскрытие авто")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_router_link, {
        class: "route",
        to: "/service-list/3"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Установка замков`);
          } else {
            return [
              createTextVNode("Установка замков")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></div></li><li class="menu__item">`);
      _push(ssrRenderComponent(_component_router_link, {
        class: "route",
        to: "/about"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`О компании`);
          } else {
            return [
              createTextVNode("О компании")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="menu__item">`);
      _push(ssrRenderComponent(_component_router_link, {
        class: "route",
        to: "/castle-list"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Список замков`);
          } else {
            return [
              createTextVNode("Список замков")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="menu__item">`);
      _push(ssrRenderComponent(_component_router_link, {
        class: "route",
        to: "/legal"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Юридическим лицам`);
          } else {
            return [
              createTextVNode("Юридическим лицам")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="menu__item">`);
      _push(ssrRenderComponent(_component_router_link, {
        class: "route",
        to: "/individual"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Физическим лицам`);
          } else {
            return [
              createTextVNode("Физическим лицам")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="menu__item">`);
      _push(ssrRenderComponent(_component_router_link, {
        class: "route",
        to: "/contacts"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Контакты`);
          } else {
            return [
              createTextVNode("Контакты")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></nav><div class="header__contacts contacts-header"><a class="contacts-header__link contacts-header__link--phone" href="tel:+79958881086">+7 (995) 888-10-86</a><a class="contacts-header__link contacts-header__link--email" href="mailto:hello@zamokmaster.ru">hello@zamokmaster.ru</a></div><!--]-->`);
    };
  }
};
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Navbar.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const _sfc_main$9 = {
  __name: "Modal",
  __ssrInlineRender: true,
  emits: ["closeModal"],
  setup(__props, { emit: __emit }) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "modal" }, _attrs))}><div class="modal__wrapper"><div class="modal__content"><button class="modal__close" type="button"></button>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/layouts/Modal.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = {
  __name: "HeaderLocation",
  __ssrInlineRender: true,
  props: ["isHidden", "defaultCity"],
  emits: ["onChangeCity"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const state = reactive({
      isOpenModal: false,
      isShowLocation: false,
      showModal: false,
      showBtnSearch: true,
      search: "",
      cities: [],
      localCity: props.defaultCity,
      token: "5ce8d1aaf3083ef146c27a68ecf9a5c065802258"
    });
    function toggleModal() {
      document.body.classList.toggle("lock");
      state.isOpenModal = !state.isOpenModal;
      state.isShowLocation = false;
      uploadCities();
    }
    function onSearchInput(e) {
      state.showBtnSearch = state.search == "" ? true : false;
    }
    function selectCity(e) {
      state.search = e.target.innerText;
      replaceCityStorage(state.search);
      document.body.classList.toggle("lock");
      state.isOpenModal = !state.isOpenModal;
      state.cities = [];
      state.showBtnSearch = state.search !== "" ? false : true;
    }
    function deleteSearch() {
      state.search = "";
      state.showBtnSearch = !state.showBtnSearch;
    }
    function setCityStorage() {
      if (typeof window !== "undefined") {
        let c = getCookie();
        if (c.city) {
          return getCityStorage();
        } else {
          return state.localCity;
        }
      }
    }
    function replaceCityStorage(city) {
      if (typeof window !== "undefined") {
        state.localCity = city;
        let cookie_date = /* @__PURE__ */ new Date();
        cookie_date.setMonth(cookie_date.getMonth() + 1);
        document.cookie = `city=${city};expires=` + cookie_date.toUTCString();
        onChangeCity(state.localCity);
      }
    }
    function getCityStorage() {
      let c = getCookie();
      return c.city;
    }
    function onChangeCity(city) {
      emit("onChangeCity", city);
    }
    function getCookie() {
      if (typeof window !== "undefined") {
        return document.cookie.split("; ").reduce((acc, item) => {
          const [name, value] = item.split("=");
          acc[name] = value;
          return acc;
        }, {});
      }
    }
    function getApiCities() {
      try {
        fetch("https://apimarket.parserdata.ru/regions/", {
          method: "GET",
          mode: "cors",
          headers: {
            Authorization: `Token ${state.token}`
          }
        }).then((res) => res.json()).then((data2) => {
          state.cities = [...data2];
        });
      } catch (error) {
        console.log("Ошибка", error);
      }
    }
    function uploadCities() {
      return state.isOpenModal ? getApiCities() : state.cities = [];
    }
    const filteredCities = computed(() => {
      return state.cities.map((el) => el.name).filter((item) => item.toLowerCase().indexOf(state.search.toLowerCase()) !== -1);
    });
    onMounted(() => {
      window.addEventListener("load", () => {
        setCityStorage();
        state.isShowLocation = true;
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="header__location location-header"><div class="location-header__current">${ssrInterpolate(setCityStorage())}</div><div class="${ssrRenderClass([[state.isShowLocation && !__props.isHidden ? "active" : ""], "location-header__choice"])}"><div class="location-header__header">Ваш город <span>${ssrInterpolate(setCityStorage())}?</span></div><div class="location-header__buttons"><button class="location-header__button btn" type="button">Верно</button><button class="location-header__button btn btn-border" type="button">Выбрать другой</button></div></div></div>`);
      ssrRenderTeleport(_push, (_push2) => {
        _push2(ssrRenderComponent(_sfc_main$9, {
          class: ["modal-search", [state.isOpenModal ? "open-modal" : ""]],
          onCloseModal: toggleModal
        }, {
          default: withCtx((_, _push3, _parent2, _scopeId) => {
            if (_push3) {
              _push3(`<div class="modal__header"${_scopeId}><div class="modal__title"${_scopeId}>Выберите город</div></div><form class="modal__form form" action="#"${_scopeId}><div class="form-item"${_scopeId}><input type="text" name="city" placeholder="Введите название города"${ssrRenderAttr("value", state.search)}${_scopeId}>`);
              if (state.showBtnSearch) {
                _push3(`<button class="form-item__btn btn-search" type="button"${_scopeId}></button>`);
              } else {
                _push3(`<button class="form-item__btn btn-delete" type="button"${_scopeId}></button>`);
              }
              _push3(`</div>`);
              if (state.isOpenModal) {
                _push3(`<div class="form-result"${_scopeId}><ul class="form-result__list"${_scopeId}><!--[-->`);
                ssrRenderList(filteredCities.value, (city, index) => {
                  _push3(`<li${_scopeId}>${ssrInterpolate(city)}</li>`);
                });
                _push3(`<!--]--></ul></div>`);
              } else {
                _push3(`<!---->`);
              }
              _push3(`</form>`);
            } else {
              return [
                createVNode("div", { class: "modal__header" }, [
                  createVNode("div", { class: "modal__title" }, "Выберите город")
                ]),
                createVNode("form", {
                  class: "modal__form form",
                  action: "#"
                }, [
                  createVNode("div", { class: "form-item" }, [
                    withDirectives(createVNode("input", {
                      type: "text",
                      onInput: onSearchInput,
                      name: "city",
                      placeholder: "Введите название города",
                      "onUpdate:modelValue": ($event) => state.search = $event
                    }, null, 40, ["onUpdate:modelValue"]), [
                      [vModelText, state.search]
                    ]),
                    state.showBtnSearch ? (openBlock(), createBlock("button", {
                      key: 0,
                      class: "form-item__btn btn-search",
                      type: "button",
                      ref: "btn_search"
                    }, null, 512)) : (openBlock(), createBlock("button", {
                      key: 1,
                      class: "form-item__btn btn-delete",
                      type: "button",
                      ref: "btn_delete",
                      onClick: deleteSearch
                    }, null, 512))
                  ]),
                  state.isOpenModal ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "form-result"
                  }, [
                    createVNode("ul", { class: "form-result__list" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(filteredCities.value, (city, index) => {
                        return openBlock(), createBlock("li", { onClick: selectCity }, toDisplayString(city), 1);
                      }), 256))
                    ])
                  ])) : createCommentVNode("", true)
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
      }, "body", false, _parent);
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/HeaderLocation.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = {
  __name: "TheHeader",
  __ssrInlineRender: true,
  props: ["defaultCity"],
  emits: ["onChangeCity"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const isHidden = ref(false);
    const currScroll = ref(null);
    ref(null);
    const header = ref();
    const closeMenu = () => {
      document.body.classList.contains("menu-open") && document.body.classList.remove("menu-open");
      document.body.classList.contains("lock") && document.body.classList.remove("lock");
    };
    const stickyHeader = () => {
      if (typeof window !== "undefined") {
        currScroll.value = window.scrollY;
        let rect = header.value.getBoundingClientRect();
        document.addEventListener("scroll", () => {
          if (currScroll.value <= window.scrollY && window.scrollY > 0 && window.scrollY > rect.height) {
            if (!isHidden.value) {
              header.value.classList.add("hide");
              isHidden.value = true;
            }
          } else {
            if (isHidden.value) {
              header.value.classList.remove("hide");
              isHidden.value = false;
            }
          }
          currScroll.value = window.scrollY;
        });
      }
    };
    const newCity = (city) => {
      emit("onChangeCity", city);
    };
    onMounted(() => {
      stickyHeader();
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      _push(`<header${ssrRenderAttrs(mergeProps({
        class: "header",
        ref_key: "header",
        ref: header
      }, _attrs))}><div class="container"><div class="header__body">`);
      _push(ssrRenderComponent(_component_router_link, {
        class: "header__logo",
        to: "/",
        onClick: closeMenu
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<picture${_scopeId}><source${ssrRenderAttr("srcset", `/images/icons/logo-pc.svg`)} media="(min-width: 767.98px)"${_scopeId}><source${ssrRenderAttr("srcset", `/images/icons/logo-mobile.svg`)} media="(min-width: 300px)"${_scopeId}><img${ssrRenderAttr("src", `/images/icons/logo-pc.svg`)} alt="логотип"${_scopeId}></picture>`);
          } else {
            return [
              createVNode("picture", null, [
                createVNode("source", {
                  srcset: `/images/icons/logo-pc.svg`,
                  media: "(min-width: 767.98px)"
                }, null, 8, ["srcset"]),
                createVNode("source", {
                  srcset: `/images/icons/logo-mobile.svg`,
                  media: "(min-width: 300px)"
                }, null, 8, ["srcset"]),
                createVNode("img", {
                  src: `/images/icons/logo-pc.svg`,
                  alt: "логотип"
                }, null, 8, ["src"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="header__menu menu"><div class="menu__body">`);
      _push(ssrRenderComponent(_sfc_main$a, null, null, _parent));
      _push(`</div></div><div class="header__actions">`);
      _push(ssrRenderComponent(_sfc_main$8, {
        isHidden: isHidden.value,
        onOnChangeCity: ($event) => newCity($event),
        defaultCity: __props.defaultCity
      }, null, _parent));
      _push(`<button class="header__burger" type="button"><span></span></button></div></div></div></header>`);
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/TheHeader.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
function maskPhone(elem = document) {
  let inputs = elem.querySelectorAll('input[type="tel"]');
  if (inputs.length) {
    inputs.forEach((phone) => {
      let code = "+7", find = /\+7/;
      code = "+7";
      find = /\+7/;
      phone.addEventListener("focus", function() {
        phone.value = code + " " + phone.value.replace(code + " ", "");
      });
      phone.addEventListener("input", function() {
        let val = phone.value.replace(find, ""), res = code + " ";
        val = val.replace(/[^0-9]/g, "");
        for (let i = 0; i < val.length; i++) {
          res += i === 0 ? " (" : "";
          res += i == 3 ? ") " : "";
          res += i == 6 || i == 8 ? "-" : "";
          if (i == 10) break;
          res += val[i];
        }
        phone.value = res;
      });
      phone.addEventListener("blur", function() {
        let val = phone.value.replace(find, "");
        val = val.trim();
        if (!val) phone.value = null;
      });
    });
  }
}
const _sfc_main$6 = {
  __name: "ModalCall",
  __ssrInlineRender: true,
  props: ["isOpenModal"],
  emits: ["closeModal"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const closeModal = () => {
      emit("closeModal");
    };
    onMounted(() => {
      maskPhone();
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      ssrRenderTeleport(_push, (_push2) => {
        _push2(ssrRenderComponent(_sfc_main$9, {
          class: ["modal-call", [__props.isOpenModal ? "open-modal" : ""]],
          onCloseModal: closeModal
        }, {
          default: withCtx((_, _push3, _parent2, _scopeId) => {
            if (_push3) {
              _push3(`<div class="modal__header"${_scopeId}><div class="modal__title"${_scopeId}>Оставьте заявку</div><div class="modal__sub-title"${_scopeId}>Оставьте заявку и наш мастер перезвонит вам в ближайшее время</div></div><form class="modal__form form" action="#"${_scopeId}><div class="form__items"${_scopeId}><div class="form-item"${_scopeId}><input type="text" name="name" placeholder="Ваше имя"${_scopeId}></div><div class="form-item form-item--error"${_scopeId}><input type="tel" name="phone" placeholder="Номер телефона"${_scopeId}><div class="form-item--error-message"${_scopeId}> Поле «Введите номер» обязательно для заполнения</div></div></div><div class="form__bottom"${_scopeId}><input class="btn form__button" type="submit" value="Заказать звонок"${_scopeId}><div class="form__agreement"${_scopeId}>Нажимая на кнопку, вы соглашаетесь `);
              _push3(ssrRenderComponent(_component_router_link, {
                to: "/text-page",
                onClick: closeModal
              }, {
                default: withCtx((_2, _push4, _parent3, _scopeId2) => {
                  if (_push4) {
                    _push4(`политикой конфиденциальности`);
                  } else {
                    return [
                      createTextVNode("политикой конфиденциальности")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push3(` сайта</div></div></form>`);
            } else {
              return [
                createVNode("div", { class: "modal__header" }, [
                  createVNode("div", { class: "modal__title" }, "Оставьте заявку"),
                  createVNode("div", { class: "modal__sub-title" }, "Оставьте заявку и наш мастер перезвонит вам в ближайшее время")
                ]),
                createVNode("form", {
                  class: "modal__form form",
                  action: "#"
                }, [
                  createVNode("div", { class: "form__items" }, [
                    createVNode("div", { class: "form-item" }, [
                      createVNode("input", {
                        type: "text",
                        name: "name",
                        placeholder: "Ваше имя"
                      })
                    ]),
                    createVNode("div", { class: "form-item form-item--error" }, [
                      createVNode("input", {
                        type: "tel",
                        name: "phone",
                        placeholder: "Номер телефона"
                      }),
                      createVNode("div", { class: "form-item--error-message" }, " Поле «Введите номер» обязательно для заполнения")
                    ])
                  ]),
                  createVNode("div", { class: "form__bottom" }, [
                    createVNode("input", {
                      class: "btn form__button",
                      type: "submit",
                      value: "Заказать звонок"
                    }),
                    createVNode("div", { class: "form__agreement" }, [
                      createTextVNode("Нажимая на кнопку, вы соглашаетесь "),
                      createVNode(_component_router_link, {
                        to: "/text-page",
                        onClick: closeModal
                      }, {
                        default: withCtx(() => [
                          createTextVNode("политикой конфиденциальности")
                        ]),
                        _: 1
                      }),
                      createTextVNode(" сайта")
                    ])
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
      }, "body", false, _parent);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Modals/ModalCall.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
function spollers() {
  const spollersArray = document.querySelectorAll("[data-spollers]");
  if (spollersArray.length > 0) {
    let initSpollers = function(spollersArray2, matchMedia = false) {
      spollersArray2.forEach((spollersBlock) => {
        spollersBlock = matchMedia ? spollersBlock.item : spollersBlock;
        if (matchMedia.matches || !matchMedia) {
          spollersBlock.classList.add("_init");
          initSpollerBody(spollersBlock);
          spollersBlock.addEventListener("click", setSpollerAction);
        } else {
          spollersBlock.classList.remove("_init");
          initSpollerBody(spollersBlock, false);
          spollersBlock.removeEventListener("click", setSpollerAction);
        }
      });
    }, initSpollerBody = function(spollersBlock, hideSpollerBody = true) {
      const spollerTitles = spollersBlock.querySelectorAll("[data-spoller]");
      if (spollerTitles.length > 0) {
        spollerTitles.forEach((spollerTitle) => {
          if (hideSpollerBody) {
            spollerTitle.removeAttribute("tabindex");
            if (!spollerTitle.classList.contains("_active")) {
              spollerTitle.nextElementSibling.hidden = true;
            }
          } else {
            spollerTitle.setAttribute("tabindex", "-1");
            spollerTitle.nextElementSibling.hidden = false;
          }
        });
      }
    }, setSpollerAction = function(e) {
      const el = e.target;
      if (el.hasAttribute("data-spoller") || el.closest("[data-spoller]")) {
        const spollerTitle = el.hasAttribute("data-spoller") ? el : el.closest("[data-spoller]");
        const spollersBlock = spollerTitle.closest("[data-spollers]");
        const oneSpoller = spollersBlock.hasAttribute("data-one-spoller") ? true : false;
        if (!spollersBlock.querySelectorAll("._slide").length) {
          if (oneSpoller && !spollerTitle.classList.contains("_active")) {
            hideSpollersBody(spollersBlock);
          }
          spollerTitle.classList.toggle("_active");
          spollerTitle.parentNode.classList.add("_active");
          _slideToggle(spollerTitle.nextElementSibling, 300);
        }
        e.preventDefault();
      }
    }, hideSpollersBody = function(spollersBlock) {
      const spollerActiveTitle = spollersBlock.querySelector("[data-spoller]._active");
      if (spollerActiveTitle) {
        spollerActiveTitle.classList.remove("_active");
        spollerActiveTitle.nextElementSibling.toggle("_active");
        _slideUp(spollerActiveTitle.nextElementSibling, 300);
      }
    };
    const spollersRegular = Array.from(spollersArray).filter(function(item, index, self) {
      return !item.dataset.spollers.split(",")[0];
    });
    if (spollersRegular.length > 0) {
      initSpollers(spollersRegular);
    }
    const spollersMedia = Array.from(spollersArray).filter(function(item, index, self) {
      return item.dataset.spollers.split(",")[0];
    });
    if (spollersMedia.length > 0) {
      const breakpointsArray = [];
      spollersMedia.forEach((item) => {
        const params = item.dataset.spollers;
        const breakpoint = {};
        const paramsArray = params.split(",");
        breakpoint.value = paramsArray[0];
        breakpoint.type = paramsArray[1] ? paramsArray[1].trim() : "max";
        breakpoint.item = item;
        breakpointsArray.push(breakpoint);
      });
      let mediaQueries = breakpointsArray.map(function(item) {
        return "(" + item.type + "-width: " + item.value + "px)," + item.value + "," + item.type;
      });
      mediaQueries = mediaQueries.filter(function(item, index, self) {
        return self.indexOf(item) === index;
      });
      mediaQueries.forEach((breakpoint) => {
        const paramsArray = breakpoint.split(",");
        const mediaBreakpoint = paramsArray[1];
        const mediaType = paramsArray[2];
        const matchMedia = window.matchMedia(paramsArray[0]);
        const spollersArray2 = breakpointsArray.filter(function(item) {
          if (item.value === mediaBreakpoint && item.type === mediaType) {
            return true;
          }
        });
        matchMedia.addListener(function() {
          initSpollers(spollersArray2, matchMedia);
        });
        initSpollers(spollersArray2, matchMedia);
      });
    }
  }
}
let _slideUp = (target, duration = 500) => {
  if (!target.classList.contains("_slide")) {
    target.classList.add("_slide");
    target.style.transitionProperty = "height, margin, padding";
    target.style.transitionDuration = duration + "ms";
    target.style.height = target.offsetHeight + "px";
    target.offsetHeight;
    target.style.overflow = "hidden";
    target.style.height = 0;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    window.setTimeout(() => {
      target.hidden = true;
      target.style.removeProperty("height");
      target.style.removeProperty("padding-top");
      target.style.removeProperty("padding-bottom");
      target.style.removeProperty("margin-top");
      target.style.removeProperty("margin-bottom");
      target.style.removeProperty("overflow");
      target.style.removeProperty("transition-duration");
      target.style.removeProperty("transition-property");
      target.classList.remove("_slide");
    }, duration);
  }
};
let _slideDown = (target, duration = 500) => {
  if (!target.classList.contains("_slide")) {
    target.classList.add("_slide");
    if (target.hidden) {
      target.hidden = false;
    }
    let height = target.offsetHeight;
    target.style.overflow = "hidden";
    target.style.height = 0;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    target.offsetHeight;
    target.style.transitionProperty = "height, margin, padding";
    target.style.transitionDuration = duration + "ms";
    target.style.height = height + "px";
    target.style.removeProperty("padding-top");
    target.style.removeProperty("padding-bottom");
    target.style.removeProperty("margin-top");
    target.style.removeProperty("margin-bottom");
    window.setTimeout(() => {
      target.style.removeProperty("height");
      target.style.removeProperty("overflow");
      target.style.removeProperty("transition-duration");
      target.style.removeProperty("transition-property");
      target.classList.remove("_slide");
    }, duration);
  }
};
let _slideToggle = (target, duration = 600) => {
  if (target.hidden) {
    return _slideDown(target, duration);
  } else {
    return _slideUp(target, duration);
  }
};
const _sfc_main$5 = {
  __name: "TheFooter",
  __ssrInlineRender: true,
  setup(__props) {
    const { menuFooter } = data;
    const isOpenModal = ref(false);
    const toggleModal = () => {
      document.body.classList.toggle("lock");
      isOpenModal.value = !isOpenModal.value;
    };
    const initSpollers = () => {
      if (window.matchMedia("(max-width: 767.98px)").matches) {
        spollers();
      } else {
        return false;
      }
    };
    const resizeSpollers = () => {
      window.addEventListener("resize", () => {
        initSpollers();
      });
    };
    onMounted(() => {
      initSpollers();
      resizeSpollers();
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      _push(`<!--[--><footer class="footer"><div class="footer__main main-footer"><div class="container"><div class="main-footer__body"><div class="menu-footer__actions">`);
      _push(ssrRenderComponent(_component_router_link, {
        class: "menu-footer__logo",
        to: "/"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<picture${_scopeId}><source${ssrRenderAttr("srcset", `/images/icons/footer-logo.svg`)} media="(min-width: 767.98px)"${_scopeId}><source${ssrRenderAttr("srcset", `/images/icons/footer-logo-mob.svg`)} media="(min-width: 300px)"${_scopeId}><img${ssrRenderAttr("src", `/images/icons/logo-pc.svg`)} alt="логотип"${_scopeId}></picture>`);
          } else {
            return [
              createVNode("picture", null, [
                createVNode("source", {
                  srcset: `/images/icons/footer-logo.svg`,
                  media: "(min-width: 767.98px)"
                }, null, 8, ["srcset"]),
                createVNode("source", {
                  srcset: `/images/icons/footer-logo-mob.svg`,
                  media: "(min-width: 300px)"
                }, null, 8, ["srcset"]),
                createVNode("img", {
                  src: `/images/icons/logo-pc.svg`,
                  alt: "логотип"
                }, null, 8, ["src"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<button class="btn" type="button"><span>Заказать звонок</span></button></div><div class="main-footer__menu menu-footer" data-spollers><!--[-->`);
      ssrRenderList(unref(menuFooter), (item) => {
        _push(`<div class="menu-footer__column"><div class="menu-footer__caption" data-spoller>${ssrInterpolate(item.caption)}</div><div class="menu-footer__content"><ul class="menu-footer__list"><!--[-->`);
        ssrRenderList(item.list, (el) => {
          _push(`<li>`);
          _push(ssrRenderComponent(_component_router_link, {
            to: `${el.path}`
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(el.title)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(el.title), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</li>`);
        });
        _push(`<!--]--></ul></div></div>`);
      });
      _push(`<!--]--><div class="menu-footer__column menu-footer-contacts"><div class="menu-footer__caption" data-spoller>Контакты</div><div class="menu-footer__content"><ul class="menu-footer__list"><li><a class="menu-footer__phone" href="tel:+79958881086">+7 (995) 888-10-86</a></li><li><a class="menu-footer__email" href="mailto:hello@zamokmaster.ru">hello@zamokmaster.ru</a></li></ul></div></div></div></div></div></div><div class="footer__bottom bottom-footer"><div class="container"><div class="bottom-footer__body"><div class="footer__copy">©Замокмастер 2024</div>`);
      _push(ssrRenderComponent(_component_router_link, {
        class: "footer__politic",
        to: "/text-page",
        target: "_blank"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Политика конфиденциальности`);
          } else {
            return [
              createTextVNode("Политика конфиденциальности")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="footer__company"><div class="footer__company-caption">Разработка сайта</div><a class="footer__company-logo" href="https://webshop.ru/" target="_blank"><picture><source${ssrRenderAttr("srcset", `/images/icons/company-logo.svg`)}><img${ssrRenderAttr("src", `/images/icons/company-logo.svg`)} alt="логотип компании" loading="lazy"></picture></a></div></div></div></div></footer>`);
      _push(ssrRenderComponent(_sfc_main$6, {
        onCloseModal: toggleModal,
        isOpenModal: isOpenModal.value
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/TheFooter.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {
  __name: "FreeMasters",
  __ssrInlineRender: true,
  setup(__props) {
    const randomFrom = ref(null);
    const randomTo = ref(null);
    const randomInteger = (min, max) => {
      const randomNumbers = Math.floor(Math.random() * (max - min) + min);
      return randomNumbers;
    };
    const randomIntFrom = computed(() => {
      return randomFrom.value = randomInteger(10, 16);
    });
    const randomIntTo = computed(() => {
      return randomTo.value = randomInteger(18, 25);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<p${ssrRenderAttrs(_attrs)}>Сейчас свободны <span>${ssrInterpolate(randomIntFrom.value)} из ${ssrInterpolate(randomIntTo.value)} мастеров</span></p>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/FreeMasters.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {
  __name: "Widget",
  __ssrInlineRender: true,
  setup(__props) {
    const isOpenModal = ref(false);
    const toggleModal = () => {
      document.body.classList.toggle("lock");
      isOpenModal.value = !isOpenModal.value;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="widget-call"></div>`);
      _push(ssrRenderComponent(_sfc_main$6, {
        onCloseModal: toggleModal,
        isOpenModal: isOpenModal.value
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Widget.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "ModalNotice",
  __ssrInlineRender: true,
  props: ["isOpenModal"],
  emits: ["closeModal"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const closeModal = () => {
      emit("closeModal");
    };
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderTeleport(_push, (_push2) => {
        _push2(ssrRenderComponent(_sfc_main$9, {
          class: ["modal-notice", [__props.isOpenModal ? "open-modal" : ""]],
          id: "modal-notice",
          onCloseModal: closeModal
        }, {
          default: withCtx((_, _push3, _parent2, _scopeId) => {
            if (_push3) {
              _push3(`<div class="modal__title"${_scopeId}>Заявка успешно отправлена</div>`);
            } else {
              return [
                createVNode("div", { class: "modal__title" }, "Заявка успешно отправлена")
              ];
            }
          }),
          _: 1
        }, _parent));
      }, "body", false, _parent);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Modals/ModalNotice.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const config = {
  // copy this file to config.js and edit the settings to match yours
  url: "http://zamokmaster.localhost"
};
let singleton = null;
const ajax = async () => {
  if (!singleton) {
    const tokenURL = `${config.url}/session/token?_format_json`;
    try {
      const response = await axios.get(tokenURL, {
        // mode: 'no-cors',
        withCredentials: true
        // required to send auth cookie
      });
      const csrf_token = response.data;
      singleton = axios.create({
        // mode: 'no-cors',
        baseURL: `${config.url}`,
        // every request is relative to this URL
        withCredentials: true,
        // include auth cookie in every request
        headers: {
          "X-CSRF-Token": csrf_token,
          "Content-Type": "application/json"
        }
        // params: { _format: 'json' }, // add these query params to every request
      });
    } catch (error) {
      console.log("ajax error");
    }
  }
  return singleton;
};
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$1 = {
  __name: "BaseLayout",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const { services } = data;
    const defaultCity = ref("Санкт-Петербург");
    const declensionCity = ref("");
    const dataBase = reactive({
      data: {},
      meta: {},
      links: {}
    });
    const getData = async () => {
      try {
        const axios2 = await ajax();
        const { data: data2 } = await axios2.get("/wsapi/packs/maininfo");
        dataBase.data = data2.data;
        dataBase.meta = data2.meta;
        dataBase.links = data2.links;
      } catch (e) {
        console.log("maininfo:" + e);
      }
    };
    const getNewCity = (city) => {
      defaultCity.value = city;
      getStorageCity();
    };
    const getCityStorage = () => {
      if (typeof window !== "undefined") {
        let c = getCookie();
        if (c.city) {
          return c.city;
        } else {
          return defaultCity.value;
        }
      }
    };
    const setDeclensionCity = () => {
      return cityIn(getCityStorage());
    };
    const getStorageCity = () => {
      const firstSymbols = getCityStorage().substring(0, 2);
      declensionCity.value = firstSymbols.toLowerCase() == "вл" ? `во ${setDeclensionCity()}` : `в ${setDeclensionCity()}`;
    };
    const getCookie = () => {
      if (typeof window !== "undefined") {
        return document.cookie.split("; ").reduce((acc, item) => {
          const [name, value] = item.split("=");
          acc[name] = value;
          return acc;
        }, {});
      }
    };
    watchEffect(() => {
      if (typeof window !== "undefined") {
        route.name == "home" ? document.body.classList.add("home") : document.body.classList.remove("home");
      }
    });
    onMounted(() => {
      window.addEventListener("load", () => {
        const pageWrapper = document.querySelectorAll(".wrapper");
        [...pageWrapper].forEach((wrapper) => {
          if (wrapper.getAttribute("id")) return;
          wrapper.remove();
        });
        getStorageCity();
      });
      getData();
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_view = resolveComponent("router-view");
      const _component_router_link = resolveComponent("router-link");
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "wrapper",
        ref: "wrapper",
        id: "wrapper"
      }, _attrs))} data-v-f2693bca>`);
      _push(ssrRenderComponent(_sfc_main$7, {
        onOnChangeCity: ($event) => getNewCity($event),
        defaultCity: defaultCity.value
      }, null, _parent));
      _push(`<main class="main" data-v-f2693bca>`);
      _push(ssrRenderComponent(_component_router_view, {
        defaultCity: defaultCity.value,
        declensionCity: declensionCity.value,
        mainInfo: dataBase
      }, null, _parent));
      _push(`</main>`);
      _push(ssrRenderComponent(_sfc_main$5, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$3, null, null, _parent));
      _push(`<div class="services-mobile" data-v-f2693bca><div class="services-mobile__body" data-v-f2693bca><!--[-->`);
      ssrRenderList(unref(services), (service) => {
        _push(ssrRenderComponent(_component_router_link, {
          class: "services-mobile__item",
          to: "/service-card"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="services-mobile__image" data-v-f2693bca${_scopeId}><picture data-v-f2693bca${_scopeId}><img${ssrRenderAttr("src", "/images/services/mobile/service-mob-" + service.img + ".png")}${ssrRenderAttr("alt", service.title)} loading="lazy" data-v-f2693bca${_scopeId}></picture></div><div class="services-mobile__title" data-v-f2693bca${_scopeId}>${ssrInterpolate(service.title)}</div>`);
            } else {
              return [
                createVNode("div", { class: "services-mobile__image" }, [
                  createVNode("picture", null, [
                    createVNode("img", {
                      src: "/images/services/mobile/service-mob-" + service.img + ".png",
                      alt: service.title,
                      loading: "lazy"
                    }, null, 8, ["src", "alt"])
                  ])
                ]),
                createVNode("div", { class: "services-mobile__title" }, toDisplayString(service.title), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div><div class="phone-mobile" data-v-f2693bca><div class="container" data-v-f2693bca><div class="phone-mobile__body" data-v-f2693bca><a class="btn btn-phone" href="tel:79958881086" data-v-f2693bca>+7 (995) 888-10-86</a>`);
      _push(ssrRenderComponent(_sfc_main$4, null, null, _parent));
      _push(`</div></div></div>`);
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/layouts/BaseLayout.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Layout = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-f2693bca"]]);
const _sfc_main = {
  __name: "App",
  __ssrInlineRender: true,
  setup(__props) {
    const siteData = reactive({
      title: "Замокмастер",
      description: "Описание Замокмастер",
      keywords: "ключевые слова"
    });
    useHead({
      title: computed(() => siteData.title),
      meta: [
        {
          name: "description",
          content: computed(() => siteData.description)
        },
        {
          name: "keywords",
          content: computed(() => siteData.keywords)
        }
      ]
    });
    onMounted(() => {
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(Layout, mergeProps({ mainInfo: _ctx.dataBase }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/App.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const baseUrl = "/";
const history = createMemoryHistory();
const routes = [
  {
    path: "/",
    component: () => import("./assets/Home-DHsautV2.js"),
    meta: { title: "Главная" },
    name: "home"
  },
  {
    path: "/about",
    component: () => import("./assets/About-BEHAbpQ8.js"),
    meta: { title: "О компании" },
    name: "about"
  },
  {
    path: "/contacts",
    component: () => import("./assets/Contacts-DCLWoyTq.js"),
    meta: { title: "Контакты" },
    name: "contacts"
  },
  {
    path: "/castle-list",
    component: () => import("./assets/CastleList-Dp428p7y.js"),
    meta: { title: "Список замков" },
    name: "castle-list"
  },
  {
    path: "/castle-card",
    component: () => import("./assets/CastleCard-CCoTth6m.js"),
    meta: { title: "Карточка замка" },
    name: "castle-card"
  },
  {
    path: "/castle-list/:id",
    component: () => import("./assets/CastleCard-CCoTth6m.js"),
    meta: { title: "Карточка замка" },
    name: "castle-detail",
    props: true
  },
  {
    path: "/service-card",
    component: () => import("./assets/ServiceCard-DIA_lNSb.js"),
    meta: { title: "Карточка услуги" },
    name: "service-card"
  },
  {
    path: "/service-list",
    component: () => import("./assets/ServiceList-C2teugyb.js"),
    meta: { title: "Список услуг" },
    name: "service-list"
  },
  {
    path: "/service-list/:id",
    component: () => import("./assets/ServiceCard-DIA_lNSb.js"),
    meta: { title: "Карточка услуги" },
    name: "service-detail",
    props: true
  },
  {
    path: "/text-page",
    component: () => import("./assets/TextPage-CGBjqe20.js"),
    meta: { title: "Текстовая страница" },
    name: "text-page"
  },
  {
    path: "/legal",
    component: () => import("./assets/Legal-B6H2Z5Oy.js"),
    meta: { title: "Юридическим лицам" },
    name: "legal"
  },
  {
    path: "/individual",
    component: () => import("./assets/Individual-BIS3F7pN.js"),
    meta: { title: "Физическим лицам" },
    name: "individual"
  },
  {
    // path: '/:pathMatch(.*)*',
    path: "/:catchAll(.*)*",
    redirect: { name: "home" }
  }
];
function createRouter() {
  return createRouter$1({
    history,
    routes,
    base: baseUrl,
    scrollBehavior: function(to, _from, savedPosition) {
      if (savedPosition) {
        return savedPosition;
      }
      if (to.hash) {
        return { el: to.hash, behavior: "smooth" };
      } else {
        setTimeout(() => {
          window.scrollTo(0, 0);
        }, 100);
      }
    }
  });
}
function createApp() {
  const isSSR = typeof window === "undefined";
  const app = isSSR ? createSSRApp(_sfc_main) : createApp$1(_sfc_main);
  const router = createRouter();
  const head = createHead();
  const pinia = createPinia();
  return { app, router, head, pinia };
}
async function render() {
  const { app } = createApp();
  const ctx = {};
  const html = await renderToString(app, ctx);
  return { html };
}
export {
  _sfc_main$4 as _,
  ajax as a,
  _export_sfc as b,
  config as c,
  data as d,
  maskPhone as m,
  render
};
