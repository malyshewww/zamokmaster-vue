import { ssrRenderComponent, ssrRenderClass, ssrRenderStyle, ssrRenderAttrs, ssrRenderSlot, ssrInterpolate, ssrRenderTeleport, ssrRenderAttr, ssrRenderList, renderToString } from "vue/server-renderer";
import { resolveComponent, withCtx, createTextVNode, useSSRContext, mergeProps, createVNode, withDirectives, vModelText, openBlock, createBlock, Fragment, renderList, toDisplayString, createSSRApp } from "vue";
import { cityIn } from "lvovich";
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
          path: "/"
        },
        {
          title: "Вскрытие дверей",
          path: "/"
        },
        {
          title: "Вскрытие авто",
          path: "/"
        },
        {
          title: "Вскрытие сейфов",
          path: "/"
        },
        {
          title: "Установка замков"
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
function ssrRender$a(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
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
  _push(`</li><li class="${ssrRenderClass([[$data.isShow ? "active" : ""], "menu__item menu__item--extended"])}"><a href="javascript:void();">Услуги</a><div class="menu__sub-list" style="${ssrRenderStyle($options.myStyles)}"><ul><li>`);
  _push(ssrRenderComponent(_component_router_link, {
    class: "route",
    to: "/castle-card"
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
    to: "/castle-card"
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
    to: "/castle-card"
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
    to: "/castle-card"
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
}
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$a = {
  data() {
    return {
      maxHeight: 0,
      isShow: false
    };
  },
  methods: {
    openSubMenu(e) {
      if (window.innerWidth < 1400) {
        e.preventDefault();
        this.isShow = !this.isShow;
      }
    },
    closeMenu(e) {
      if (e.target.closest("li:not(.menu__item--extended) a")) {
        document.body.classList.remove("menu-open");
        document.body.classList.remove("lock");
      }
    }
  },
  computed: {
    myStyles() {
      var _a;
      return {
        "max-height": `${this.isShow ? (_a = this.$refs.sub_menu) == null ? void 0 : _a.scrollHeight : this.maxHeight}px`
      };
    }
  }
};
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Navbar.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const Navbar = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["ssrRender", ssrRender$a]]);
function ssrRender$9(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: ["modal", { modalClass: $props.modalClass }],
    id: { modalId: $props.modalId }
  }, _attrs))}><div class="modal__wrapper"><div class="modal__content"><button class="modal__close" type="button"></button>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div></div></div>`);
}
const _sfc_main$9 = {
  props: ["modalId", "modalClass"],
  name: "Modal",
  data() {
    return {
      isOpenModal: false
    };
  },
  methods: {
    closeModal() {
      this.$emit("closeModal");
    }
  }
};
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/layouts/Modal.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const Modal = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", ssrRender$9]]);
function ssrRender$8(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Modal = resolveComponent("Modal");
  _push(`<!--[--><div class="header__location location-header"><div class="location-header__current">${ssrInterpolate($options.setCityStorage())}</div><div class="${ssrRenderClass([[$data.isShowLocation && !$props.isHidden ? "active" : ""], "location-header__choice"])}"><div class="location-header__header">Ваш город <span>${ssrInterpolate($options.setCityStorage())}?</span></div><div class="location-header__buttons"><button class="location-header__button btn" type="button">Верно</button><button class="location-header__button btn btn-border" type="button">Выбрать другой</button></div></div></div>`);
  ssrRenderTeleport(_push, (_push2) => {
    _push2(ssrRenderComponent(_component_Modal, {
      class: ["modal-search", [$data.isOpenModal ? "open-modal" : ""]],
      id: "modal-call",
      onCloseModal: $options.toggleModal
    }, {
      default: withCtx((_, _push3, _parent2, _scopeId) => {
        if (_push3) {
          _push3(`<div class="modal__header"${_scopeId}><div class="modal__title"${_scopeId}>Выберите город</div></div><form class="modal__form form" action="#"${_scopeId}><div class="form-item"${_scopeId}><input type="text" name="city" placeholder="Введите название города"${ssrRenderAttr("value", $data.search)}${_scopeId}>`);
          if ($data.showBtnSearch) {
            _push3(`<button class="form-item__btn btn-search" type="button"${_scopeId}></button>`);
          } else {
            _push3(`<button class="form-item__btn btn-delete" type="button"${_scopeId}></button>`);
          }
          _push3(`</div><div class="form-result"${_scopeId}><ul class="form-result__list"${_scopeId}><!--[-->`);
          ssrRenderList($options.filteredCities, (city, index) => {
            _push3(`<li${_scopeId}>${ssrInterpolate(city)}</li>`);
          });
          _push3(`<!--]--></ul></div></form>`);
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
                  onInput: $options.onSearchInput,
                  name: "city",
                  placeholder: "Введите название города",
                  "onUpdate:modelValue": ($event) => $data.search = $event
                }, null, 40, ["onInput", "onUpdate:modelValue"]), [
                  [vModelText, $data.search]
                ]),
                $data.showBtnSearch ? (openBlock(), createBlock("button", {
                  key: 0,
                  class: "form-item__btn btn-search",
                  type: "button",
                  ref: "btn_search"
                }, null, 512)) : (openBlock(), createBlock("button", {
                  key: 1,
                  class: "form-item__btn btn-delete",
                  type: "button",
                  ref: "btn_delete",
                  onClick: $options.deleteSearch
                }, null, 8, ["onClick"]))
              ]),
              createVNode("div", { class: "form-result" }, [
                createVNode("ul", { class: "form-result__list" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList($options.filteredCities, (city, index) => {
                    return openBlock(), createBlock("li", { onClick: $options.selectCity }, toDisplayString(city), 9, ["onClick"]);
                  }), 256))
                ])
              ])
            ])
          ];
        }
      }),
      _: 1
    }, _parent));
  }, "body", false, _parent);
  _push(`<!--]-->`);
}
const _sfc_main$8 = {
  props: ["isHidden", "defaultCity"],
  emits: ["onChangeCity"],
  components: {
    Modal
  },
  data() {
    return {
      localCity: this.defaultCity,
      isOpenModal: false,
      isShowLocation: false,
      showModal: false,
      showBtnSearch: true,
      search: "",
      cities: [
        "Москва",
        "Санкт-Петербург",
        "Нижний Новгород",
        "Казань",
        "Екатеринбург",
        "Владивосток",
        "Мурманск",
        "Воронеж",
        "Владимир"
      ]
    };
  },
  methods: {
    toggleModal() {
      document.body.classList.toggle("lock");
      this.isOpenModal = !this.isOpenModal;
      this.isShowLocation = false;
    },
    closeLocation() {
      this.isShowLocation = false;
    },
    onSearchInput(e) {
      this.showBtnSearch = this.search == "" ? false : true;
    },
    selectCity(e) {
      this.search = e.target.innerText;
      this.showBtnSearch = false;
      this.replaceCityStorage(this.search);
    },
    deleteSearch() {
      this.search = "";
      this.showBtnSearch = true;
    },
    setCityStorage() {
      if (typeof window !== "undefined") {
        let c = this.getCookie();
        if (c.city) {
          return this.getCityStorage();
        } else {
          return this.localCity;
        }
      }
    },
    replaceCityStorage(city) {
      if (typeof window !== "undefined") {
        this.localCity = city;
        let cookie_date = /* @__PURE__ */ new Date();
        cookie_date.setMonth(cookie_date.getMonth() + 1);
        document.cookie = `city=${city};expires=` + cookie_date.toUTCString();
        this.onChangeCity(this.localCity);
      }
    },
    getCityStorage() {
      let c = this.getCookie();
      return c.city;
    },
    onChangeCity(city) {
      this.$emit("onChangeCity", city);
    },
    getCookie() {
      if (typeof window !== "undefined") {
        return document.cookie.split("; ").reduce((acc, item) => {
          const [name, value] = item.split("=");
          acc[name] = value;
          return acc;
        }, {});
      }
    }
  },
  computed: {
    filteredCities() {
      return this.cities.filter(
        (item) => item.toLowerCase().indexOf(this.search.toLowerCase()) !== -1
      );
    }
    // localCity: {
    //   get() {
    //     return this.defaultCity
    //   },
    //   set(localCity) {
    //     this.$emit('update:onChangeCity', localCity)
    //   }
    // }
  },
  watch() {
  },
  mounted() {
    window.addEventListener("load", () => {
      this.setCityStorage();
      this.isShowLocation = true;
      let c = this.getCookie();
      console.log(c.city);
    });
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/HeaderLocation.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const HeaderLocation = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", ssrRender$8]]);
function ssrRender$7(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_router_link = resolveComponent("router-link");
  const _component_Navbar = resolveComponent("Navbar");
  const _component_HeaderLocation = resolveComponent("HeaderLocation");
  _push(`<!--[--><header class="header"><div class="container"><div class="header__body">`);
  _push(ssrRenderComponent(_component_router_link, {
    class: "header__logo",
    to: "/"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<picture${_scopeId}><source${ssrRenderAttr("srcset", `./images/icons/logo-pc.svg`)} media="(min-width: 767.98px)"${_scopeId}><source${ssrRenderAttr("srcset", `./images/icons/logo-mobile.svg`)} media="(min-width: 300px)"${_scopeId}><img${ssrRenderAttr("src", `./images/icons/logo-pc.svg`)} alt="логотип"${_scopeId}></picture>`);
      } else {
        return [
          createVNode("picture", null, [
            createVNode("source", {
              srcset: `./images/icons/logo-pc.svg`,
              media: "(min-width: 767.98px)"
            }, null, 8, ["srcset"]),
            createVNode("source", {
              srcset: `./images/icons/logo-mobile.svg`,
              media: "(min-width: 300px)"
            }, null, 8, ["srcset"]),
            createVNode("img", {
              src: `./images/icons/logo-pc.svg`,
              alt: "логотип"
            }, null, 8, ["src"])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="header__menu menu"><div class="menu__body">`);
  _push(ssrRenderComponent(_component_Navbar, null, null, _parent));
  _push(`</div></div><div class="header__actions">`);
  _push(ssrRenderComponent(_component_HeaderLocation, {
    isHidden: $data.isHidden,
    onOnChangeCity: ($event) => $options.newCity($event),
    defaultCity: $props.defaultCity
  }, null, _parent));
  _push(`<button class="header__burger" type="button"><span></span></button></div></div></div></header><div class="overlay"></div><!--]-->`);
}
const _sfc_main$7 = {
  components: { Navbar, HeaderLocation },
  emits: ["onChangeCity"],
  props: ["defaultCity"],
  data() {
    return {
      isHidden: false,
      currScroll: null
    };
  },
  methods: {
    openMenu() {
      document.body.classList.toggle("menu-open");
      document.body.classList.toggle("lock");
    },
    closeMenu() {
      document.body.classList.remove("menu-open");
      document.body.classList.remove("lock");
    },
    stickyHeader() {
      if (typeof window !== "undefined") {
        this.currScroll = window.scrollY;
        let rect = this.$refs.header.getBoundingClientRect();
        document.addEventListener("scroll", () => {
          if (this.currScroll <= window.scrollY && window.scrollY > 0 && window.scrollY > rect.height) {
            if (!this.isHidden) {
              this.$refs.header.classList.add("hide");
              this.isHidden = true;
            }
          } else {
            if (this.isHidden) {
              this.$refs.header.classList.remove("hide");
              this.isHidden = false;
            }
          }
          this.currScroll = window.scrollY;
        });
      }
    },
    newCity(city) {
      this.$emit("onChangeCity", city);
    }
  },
  computed: {
    // localCity: {
    //   get() {
    //     return this.defaultCity
    //   },
    //   set(localCity) {
    //     this.$emit('update:onChangeCity', localCity)
    //   }
    // }
  },
  mounted() {
    this.stickyHeader();
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/TheHeader.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const TheHeader = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", ssrRender$7]]);
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
          if (i == 10)
            break;
          res += val[i];
        }
        phone.value = res;
      });
      phone.addEventListener("blur", function() {
        let val = phone.value.replace(find, "");
        val = val.trim();
        if (!val)
          phone.value = null;
      });
    });
  }
}
function ssrRender$6(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Modal = resolveComponent("Modal");
  ssrRenderTeleport(_push, (_push2) => {
    _push2(ssrRenderComponent(_component_Modal, {
      class: ["modal-call", [$props.isOpenModal ? "open-modal" : ""]],
      id: "modal-call",
      onCloseModal: $options.closeModal
    }, {
      default: withCtx((_, _push3, _parent2, _scopeId) => {
        if (_push3) {
          _push3(`<div class="modal__header"${_scopeId}><div class="modal__title"${_scopeId}>Оставьте заявку</div><div class="modal__sub-title"${_scopeId}>Оставьте заявку и наш мастер перезвонит вам в ближайшее время</div></div><form class="modal__form form" action="#"${_scopeId}><div class="form__items"${_scopeId}><div class="form-item"${_scopeId}><input type="text" name="name" placeholder="Ваше имя"${_scopeId}></div><div class="form-item form-item--error"${_scopeId}><input type="tel" name="phone" placeholder="Номер телефона"${_scopeId}><div class="form-item--error-message"${_scopeId}> Поле «Введите номер» обязательно для заполнения</div></div></div><div class="form__bottom"${_scopeId}><input class="btn form__button" type="submit" value="Заказать звонок"${_scopeId}><div class="form__agreement"${_scopeId}>Нажимая на кнопку, вы соглашаетесь политикой конфиденциальности сайта</div></div></form>`);
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
                createVNode("div", { class: "form__agreement" }, "Нажимая на кнопку, вы соглашаетесь политикой конфиденциальности сайта")
              ])
            ])
          ];
        }
      }),
      _: 1
    }, _parent));
  }, "body", false, _parent);
}
const _sfc_main$6 = {
  props: ["isOpenModal"],
  emits: ["closeModal"],
  components: {
    Modal
  },
  data() {
    return {};
  },
  methods: {
    closeModal() {
      this.$emit("closeModal");
    }
  },
  computed() {
    maskPhone();
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Modals/ModalCall.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const ModalCall = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", ssrRender$6]]);
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
function ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_router_link = resolveComponent("router-link");
  const _component_ModalCall = resolveComponent("ModalCall");
  _push(`<!--[--><footer class="footer"><div class="footer__main main-footer"><div class="container"><div class="main-footer__body"><div class="menu-footer__actions">`);
  _push(ssrRenderComponent(_component_router_link, {
    class: "menu-footer__logo",
    to: "/"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<picture${_scopeId}><source${ssrRenderAttr("srcset", `./images/icons/footer-logo.svg`)} media="(min-width: 767.98px)"${_scopeId}><source${ssrRenderAttr("srcset", `./images/icons/footer-logo-mob.svg`)} media="(min-width: 300px)"${_scopeId}><img${ssrRenderAttr("src", `./images/icons/logo-pc.svg`)} alt="логотип"${_scopeId}></picture>`);
      } else {
        return [
          createVNode("picture", null, [
            createVNode("source", {
              srcset: `./images/icons/footer-logo.svg`,
              media: "(min-width: 767.98px)"
            }, null, 8, ["srcset"]),
            createVNode("source", {
              srcset: `./images/icons/footer-logo-mob.svg`,
              media: "(min-width: 300px)"
            }, null, 8, ["srcset"]),
            createVNode("img", {
              src: `./images/icons/logo-pc.svg`,
              alt: "логотип"
            }, null, 8, ["src"])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<button class="btn" type="button"><span>Заказать звонок</span></button></div><div class="main-footer__menu menu-footer" data-spollers><!--[-->`);
  ssrRenderList($data.menuFooter, (item) => {
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
  _push(`<div class="footer__company"><div class="footer__company-caption">Разработка сайта</div><a class="footer__company-logo" href="https://webshop.ru/" target="_blank"><picture><source${ssrRenderAttr("srcset", `./images/icons/company-logo.svg`)}><img${ssrRenderAttr("src", `./images/icons/company-logo.svg`)} alt="логотип компании" loading="lazy"></picture></a></div></div></div></div></footer>`);
  _push(ssrRenderComponent(_component_ModalCall, {
    onCloseModal: $options.toggleModal,
    isOpenModal: $data.isOpenModal
  }, null, _parent));
  _push(`<!--]-->`);
}
const { menuFooter } = data;
const _sfc_main$5 = {
  components: {
    ModalCall
  },
  data() {
    return {
      menuFooter,
      isOpenModal: false
    };
  },
  methods: {
    toggleModal() {
      document.body.classList.toggle("lock");
      this.isOpenModal = !this.isOpenModal;
    },
    initSpollers() {
      if (window.matchMedia("(max-width: 767.98px)").matches) {
        spollers();
      } else {
        return false;
      }
    },
    resizeSpollers() {
      window.addEventListener("resize", () => {
        this.initSpollers();
      });
    }
  },
  mounted() {
    this.initSpollers();
    this.resizeSpollers();
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/TheFooter.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const TheFooter = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", ssrRender$5]]);
function ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<p${ssrRenderAttrs(_attrs)}>Сейчас свободны <span>${ssrInterpolate($options.randomIntFrom)} из ${ssrInterpolate($options.randomIntTo)} мастеров</span></p>`);
}
const _sfc_main$4 = {
  data() {
    return {
      randomFrom: null,
      randomTo: null
    };
  },
  methods: {
    randomInteger(min, max) {
      const randomNumbers = Math.floor(Math.random() * (max - min) + min);
      return randomNumbers;
    }
  },
  computed: {
    randomIntFrom() {
      return this.randomFrom = this.randomInteger(10, 16);
    },
    randomIntTo() {
      return this.randomTo = this.randomInteger(18, 25);
    }
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/FreeMasters.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const FreeMasters = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", ssrRender$4]]);
function ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ModalCall = resolveComponent("ModalCall");
  _push(`<!--[--><div class="widget-call"></div>`);
  _push(ssrRenderComponent(_component_ModalCall, {
    onCloseModal: $options.toggleModal,
    isOpenModal: $data.isOpenModal
  }, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_main$3 = {
  components: {
    ModalCall
  },
  data() {
    return {
      isOpenModal: false
    };
  },
  methods: {
    toggleModal() {
      document.body.classList.toggle("lock");
      this.isOpenModal = !this.isOpenModal;
    }
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Widget.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const Widget = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", ssrRender$3]]);
function ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Modal = resolveComponent("Modal");
  ssrRenderTeleport(_push, (_push2) => {
    _push2(ssrRenderComponent(_component_Modal, {
      class: "modal-notice",
      onCloseModal: $options.closeModal
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
}
const _sfc_main$2 = {
  props: ["isOpenModal"],
  emits: ["closeModal"],
  components: {
    Modal
  },
  data() {
    return {};
  },
  methods: {
    closeModal() {
      this.$emit("closeModal");
    }
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Modals/ModalNotice.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const ModalNotice = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", ssrRender$2]]);
function ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_metainfo = resolveComponent("metainfo");
  const _component_TheHeader = resolveComponent("TheHeader");
  const _component_RouterView = resolveComponent("RouterView");
  const _component_TheFooter = resolveComponent("TheFooter");
  const _component_Widget = resolveComponent("Widget");
  const _component_router_link = resolveComponent("router-link");
  const _component_FreeMasters = resolveComponent("FreeMasters");
  const _component_ModalNotice = resolveComponent("ModalNotice");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_metainfo, null, {
    title: withCtx(({ content }, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(content ? `${content} | Замокмастер` : `Замокмастер`)}`);
      } else {
        return [
          createTextVNode(toDisplayString(content ? `${content} | Замокмастер` : `Замокмастер`), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="wrapper">`);
  _push(ssrRenderComponent(_component_TheHeader, {
    onOnChangeCity: ($event) => $options.getNewCity($event),
    defaultCity: $data.defaultCity
  }, null, _parent));
  _push(`<main class="main">`);
  _push(ssrRenderComponent(_component_RouterView, {
    defaultCity: $data.defaultCity,
    declensionCity: $data.declensionCity
  }, null, _parent));
  _push(`</main>`);
  _push(ssrRenderComponent(_component_TheFooter, null, null, _parent));
  _push(ssrRenderComponent(_component_Widget, null, null, _parent));
  _push(`<div class="services-mobile"><div class="services-mobile__body"><!--[-->`);
  ssrRenderList($data.services, (service) => {
    _push(ssrRenderComponent(_component_router_link, {
      class: "services-mobile__item",
      to: "/service-card"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<div class="services-mobile__image"${_scopeId}><picture${_scopeId}><img${ssrRenderAttr("src", "./images/services/mobile/service-mob-" + service.img + ".png")}${ssrRenderAttr("alt", service.title)} loading="lazy"${_scopeId}></picture></div><div class="services-mobile__title"${_scopeId}>${ssrInterpolate(service.title)}</div>`);
        } else {
          return [
            createVNode("div", { class: "services-mobile__image" }, [
              createVNode("picture", null, [
                createVNode("img", {
                  src: "./images/services/mobile/service-mob-" + service.img + ".png",
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
  _push(`<!--]--></div></div><div class="phone-mobile"><div class="container"><div class="phone-mobile__body"><a class="btn btn-phone" href="tel=+79958881086">+7 (995) 888-10-86</a>`);
  _push(ssrRenderComponent(_component_FreeMasters, null, null, _parent));
  _push(`</div></div></div>`);
  _push(ssrRenderComponent(_component_ModalNotice, null, null, _parent));
  _push(`</div><!--]-->`);
}
const { services } = data;
const _sfc_main$1 = {
  components: { TheHeader, TheFooter, FreeMasters, Widget, ModalNotice },
  data() {
    return {
      services,
      defaultCity: "Санкт-Петербург",
      declensionCity: ""
    };
  },
  methods: {
    getNewCity(city) {
      this.defaultCity = city;
      this.getStorageCity();
    },
    getCityStorage() {
      if (typeof window !== "undefined") {
        let c = this.getCookie();
        if (c.city) {
          return c.city;
        } else {
          return this.defaultCity;
        }
      }
    },
    setDeclensionCity() {
      return cityIn(this.getCityStorage());
    },
    getStorageCity() {
      this.declensionCity = this.setDeclensionCity();
    },
    getCookie() {
      if (typeof window !== "undefined") {
        return document.cookie.split("; ").reduce((acc, item) => {
          const [name, value] = item.split("=");
          acc[name] = value;
          return acc;
        }, {});
      }
    }
  },
  watch: {
    "$route.name"() {
      if (this.$route.name == "home") {
        document.body.classList.add("home");
      } else {
        document.body.classList.remove("home");
      }
    }
  },
  updated() {
  },
  mounted() {
    window.addEventListener("load", () => {
      this.getStorageCity();
    });
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/layouts/BaseLayout.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Layout = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", ssrRender$1]]);
function ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Layout = resolveComponent("Layout");
  _push(ssrRenderComponent(_component_Layout, _attrs, null, _parent));
}
const _sfc_main = {
  // setup() {
  //   useMeta({
  //     title: '',
  //     htmlAttrs: { lang: 'ru', amp: true }
  //   })
  // },
  components: {
    Layout
  },
  data() {
    return {};
  },
  methods: {},
  watch() {
  },
  mounted() {
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/App.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", ssrRender]]);
function createApp() {
  const app = createSSRApp(App);
  return { app };
}
async function render() {
  const { app } = createApp();
  const ctx = {};
  const html = await renderToString(app, ctx);
  return { html };
}
export {
  render
};
