import{r as $,o as _,c as u,a as t,t as k,b as N,d as V,e as v,w as F,_ as T,F as G,f as B,g as ne,n as K,h as X,i as j,j as W,m as ae,B as oe}from"./index-tuqrtQyl.js";import{S as y}from"./scrollreveal.es-DIZ4IBFj.js";import{m as D,c as re,g as R,S as le}from"./create-element-if-not-defined-CpJkOhtE.js";import{Q as ce}from"./Questions-n_I0kDBN.js";const de={class:"services-detail__item"},_e={class:"services-detail__body"},ue={class:"services-detail__content"},pe={class:"services-detail__title"},ve={class:"services-detail__text"},me={key:0},he={class:"services-detail__image-wrap"},ge={class:"services-detail__image ibg"},fe=["srcset"],ye=["src","alt"];function be(f,e,o,d,s,m){const a=$("router-link");return _(),u("div",de,[t("div",_e,[t("div",ue,[t("h2",pe,[t("span",null,k(o.titleGray),1),N(" "+k(o.title),1)]),t("div",ve,[t("p",null,k(o.text1),1),o.text2?(_(),u("p",me,k(o.text2),1)):V("",!0)]),v(a,{class:"services-detail__button btn",to:"/service-card"},{default:F(()=>[N("Подробнее")]),_:1})]),t("div",he,[t("div",ge,[t("picture",null,[t("source",{srcset:"./images/services/service-detail-"+o.img+".jpg"},null,8,fe),t("img",{src:"./images/services/service-detail-"+o.img+".jpg",alt:o.titleGray+o.title,loading:"lazy"},null,8,ye)])])])])])}const xe={props:["titleGray","title","text1","text2","img"],data(){return{}},methods:{animation(){typeof window<"u"&&(y({reset:!1,duration:1500,distance:"50px",mobile:!1}),y().reveal(".services-detail--first .services-detail__box:nth-child(1) .services-detail__content",{origin:"left",opacity:0}),y().reveal(".services-detail--first .services-detail__box:nth-child(1) .services-detail__image-wrap",{origin:"right",opacity:0}),y().reveal(".services-detail--first .services-detail__box:nth-child(2) .services-detail__content",{origin:"right",opacity:0}),y().reveal(".services-detail--first .services-detail__box:nth-child(2) .services-detail__image-wrap",{origin:"left",opacity:0}),y().reveal(".services-detail--second .services-detail__box:nth-child(1) .services-detail__content",{origin:"left",opacity:0}),y().reveal(".services-detail--second .services-detail__box:nth-child(1) .services-detail__image-wrap",{origin:"right",opacity:0}),y().reveal(".services-detail--second .services-detail__box:nth-child(2) .services-detail__content",{origin:"right",opacity:0}),y().reveal(".services-detail--second .services-detail__box:nth-child(2) .services-detail__image-wrap",{origin:"left",opacity:0}),y().reveal(".services-detail--third .services-detail__box:nth-child(1) .services-detail__content",{origin:"left",opacity:0}),y().reveal(".services-detail--third .services-detail__box:nth-child(1) .services-detail__image-wrap",{origin:"right",opacity:0}))}},mounted(){this.animation()}},we=T(xe,[["render",be]]);function $e(f){let{swiper:e,extendParams:o,on:d,emit:s}=f;o({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),e.navigation={nextEl:null,prevEl:null};function m(i){let n;return i&&typeof i=="string"&&e.isElement&&(n=e.el.querySelector(i),n)?n:(i&&(typeof i=="string"&&(n=[...document.querySelectorAll(i)]),e.params.uniqueNavElements&&typeof i=="string"&&n&&n.length>1&&e.el.querySelectorAll(i).length===1?n=e.el.querySelector(i):n&&n.length===1&&(n=n[0])),i&&!n?i:n)}function a(i,n){const c=e.params.navigation;i=D(i),i.forEach(r=>{r&&(r.classList[n?"add":"remove"](...c.disabledClass.split(" ")),r.tagName==="BUTTON"&&(r.disabled=n),e.params.watchOverflow&&e.enabled&&r.classList[e.isLocked?"add":"remove"](c.lockClass))})}function h(){const{nextEl:i,prevEl:n}=e.navigation;if(e.params.loop){a(n,!1),a(i,!1);return}a(n,e.isBeginning&&!e.params.rewind),a(i,e.isEnd&&!e.params.rewind)}function L(i){i.preventDefault(),!(e.isBeginning&&!e.params.loop&&!e.params.rewind)&&(e.slidePrev(),s("navigationPrev"))}function b(i){i.preventDefault(),!(e.isEnd&&!e.params.loop&&!e.params.rewind)&&(e.slideNext(),s("navigationNext"))}function p(){const i=e.params.navigation;if(e.params.navigation=re(e,e.originalParams.navigation,e.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(i.nextEl||i.prevEl))return;let n=m(i.nextEl),c=m(i.prevEl);Object.assign(e.navigation,{nextEl:n,prevEl:c}),n=D(n),c=D(c);const r=(g,C)=>{g&&g.addEventListener("click",C==="next"?b:L),!e.enabled&&g&&g.classList.add(...i.lockClass.split(" "))};n.forEach(g=>r(g,"next")),c.forEach(g=>r(g,"prev"))}function x(){let{nextEl:i,prevEl:n}=e.navigation;i=D(i),n=D(n);const c=(r,g)=>{r.removeEventListener("click",g==="next"?b:L),r.classList.remove(...e.params.navigation.disabledClass.split(" "))};i.forEach(r=>c(r,"next")),n.forEach(r=>c(r,"prev"))}d("init",()=>{e.params.navigation.enabled===!1?S():(p(),h())}),d("toEdge fromEdge lock unlock",()=>{h()}),d("destroy",()=>{x()}),d("enable disable",()=>{let{nextEl:i,prevEl:n}=e.navigation;if(i=D(i),n=D(n),e.enabled){h();return}[...i,...n].filter(c=>!!c).forEach(c=>c.classList.add(e.params.navigation.lockClass))}),d("click",(i,n)=>{let{nextEl:c,prevEl:r}=e.navigation;c=D(c),r=D(r);const g=n.target;if(e.params.navigation.hideOnClick&&!r.includes(g)&&!c.includes(g)){if(e.pagination&&e.params.pagination&&e.params.pagination.clickable&&(e.pagination.el===g||e.pagination.el.contains(g)))return;let C;c.length?C=c[0].classList.contains(e.params.navigation.hiddenClass):r.length&&(C=r[0].classList.contains(e.params.navigation.hiddenClass)),s(C===!0?"navigationShow":"navigationHide"),[...c,...r].filter(q=>!!q).forEach(q=>q.classList.toggle(e.params.navigation.hiddenClass))}});const M=()=>{e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(" ")),p(),h()},S=()=>{e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(" ")),x()};Object.assign(e.navigation,{enable:M,disable:S,update:h,init:p,destroy:x})}function Se(f){let{swiper:e,extendParams:o,on:d,emit:s,params:m}=f;e.autoplay={running:!1,paused:!1,timeLeft:0},o({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let a,h,L=m&&m.autoplay?m.autoplay.delay:3e3,b=m&&m.autoplay?m.autoplay.delay:3e3,p,x=new Date().getTime(),M,S,i,n,c,r,g;function C(l){!e||e.destroyed||!e.wrapperEl||l.target===e.wrapperEl&&(e.wrapperEl.removeEventListener("transitionend",C),!g&&P())}const q=()=>{if(e.destroyed||!e.autoplay.running)return;e.autoplay.paused?M=!0:M&&(b=p,M=!1);const l=e.autoplay.paused?p:x+b-new Date().getTime();e.autoplay.timeLeft=l,s("autoplayTimeLeft",l,l/L),h=requestAnimationFrame(()=>{q()})},Z=()=>{let l;return e.virtual&&e.params.virtual.enabled?l=e.slides.filter(w=>w.classList.contains("swiper-slide-active"))[0]:l=e.slides[e.activeIndex],l?parseInt(l.getAttribute("data-swiper-autoplay"),10):void 0},z=l=>{if(e.destroyed||!e.autoplay.running)return;cancelAnimationFrame(h),q();let E=typeof l>"u"?e.params.autoplay.delay:l;L=e.params.autoplay.delay,b=e.params.autoplay.delay;const w=Z();!Number.isNaN(w)&&w>0&&typeof l>"u"&&(E=w,L=w,b=w),p=E;const I=e.params.speed,J=()=>{!e||e.destroyed||(e.params.autoplay.reverseDirection?!e.isBeginning||e.params.loop||e.params.rewind?(e.slidePrev(I,!0,!0),s("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(e.slides.length-1,I,!0,!0),s("autoplay")):!e.isEnd||e.params.loop||e.params.rewind?(e.slideNext(I,!0,!0),s("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(0,I,!0,!0),s("autoplay")),e.params.cssMode&&(x=new Date().getTime(),requestAnimationFrame(()=>{z()})))};return E>0?(clearTimeout(a),a=setTimeout(()=>{J()},E)):requestAnimationFrame(()=>{J()}),E},H=()=>{x=new Date().getTime(),e.autoplay.running=!0,z(),s("autoplayStart")},A=()=>{e.autoplay.running=!1,clearTimeout(a),cancelAnimationFrame(h),s("autoplayStop")},O=(l,E)=>{if(e.destroyed||!e.autoplay.running)return;clearTimeout(a),l||(r=!0);const w=()=>{s("autoplayPause"),e.params.autoplay.waitForTransition?e.wrapperEl.addEventListener("transitionend",C):P()};if(e.autoplay.paused=!0,E){c&&(p=e.params.autoplay.delay),c=!1,w();return}p=(p||e.params.autoplay.delay)-(new Date().getTime()-x),!(e.isEnd&&p<0&&!e.params.loop)&&(p<0&&(p=0),w())},P=()=>{e.isEnd&&p<0&&!e.params.loop||e.destroyed||!e.autoplay.running||(x=new Date().getTime(),r?(r=!1,z(p)):z(),e.autoplay.paused=!1,s("autoplayResume"))},Q=()=>{if(e.destroyed||!e.autoplay.running)return;const l=R();l.visibilityState==="hidden"&&(r=!0,O(!0)),l.visibilityState==="visible"&&P()},U=l=>{l.pointerType==="mouse"&&(r=!0,g=!0,!(e.animating||e.autoplay.paused)&&O(!0))},Y=l=>{l.pointerType==="mouse"&&(g=!1,e.autoplay.paused&&P())},ee=()=>{e.params.autoplay.pauseOnMouseEnter&&(e.el.addEventListener("pointerenter",U),e.el.addEventListener("pointerleave",Y))},te=()=>{e.el.removeEventListener("pointerenter",U),e.el.removeEventListener("pointerleave",Y)},se=()=>{R().addEventListener("visibilitychange",Q)},ie=()=>{R().removeEventListener("visibilitychange",Q)};d("init",()=>{e.params.autoplay.enabled&&(ee(),se(),H())}),d("destroy",()=>{te(),ie(),e.autoplay.running&&A()}),d("_freeModeStaticRelease",()=>{(i||r)&&P()}),d("_freeModeNoMomentumRelease",()=>{e.params.autoplay.disableOnInteraction?A():O(!0,!0)}),d("beforeTransitionStart",(l,E,w)=>{e.destroyed||!e.autoplay.running||(w||!e.params.autoplay.disableOnInteraction?O(!0,!0):A())}),d("sliderFirstMove",()=>{if(!(e.destroyed||!e.autoplay.running)){if(e.params.autoplay.disableOnInteraction){A();return}S=!0,i=!1,r=!1,n=setTimeout(()=>{r=!0,i=!0,O(!0)},200)}}),d("touchEnd",()=>{if(!(e.destroyed||!e.autoplay.running||!S)){if(clearTimeout(n),clearTimeout(a),e.params.autoplay.disableOnInteraction){i=!1,S=!1;return}i&&e.params.cssMode&&P(),i=!1,S=!1}}),d("slideChange",()=>{e.destroyed||!e.autoplay.running||(c=!0)}),Object.assign(e.autoplay,{start:H,stop:A,pause:O,resume:P})}const Ee={class:"services-slider"},De={class:"services-slider__body swiper",ref:"mySwiper"},ke={class:"services-slider__wrapper swiper-wrapper",ref:"mySwiperWrapper"},Le={class:"services-slider__item swiper-slide"},Ce={class:"services-slider__image"},Te=["srcset"],Me=["src"],Pe={class:"services-slider__item swiper-slide"},Ge={class:"services-slider__image"},qe=["srcset"],Oe=["src"],Ne={class:"slider-controls",ref:"slider_controls"},Be=t("button",{class:"slider-button slider-button-prev"},null,-1),Ae=t("button",{class:"slider-button slider-button-next"},null,-1),Ie=[Be,Ae];function ze(f,e,o,d,s,m){return _(),u("div",Ee,[t("div",De,[t("div",ke,[(_(!0),u(G,null,B(o.count,a=>(_(),u("div",Le,[t("div",Ce,[t("picture",null,[t("source",{srcset:"./images/service-detail/"+o.imagePath+"/logo-"+a+".png"},null,8,Te),t("img",{src:"./images/service-detail/"+o.imagePath+"/logo-"+a+".png",loading:"lazy",alt:"фото"},null,8,Me)])])]))),256)),(_(!0),u(G,null,B(o.count,a=>(_(),u("div",Pe,[t("div",Ge,[t("picture",null,[t("source",{srcset:"./images/service-detail/"+o.imagePath+"/logo-"+a+".png"},null,8,qe),t("img",{src:"./images/service-detail/"+o.imagePath+"/logo-"+a+".png",loading:"lazy",alt:"фото"},null,8,Oe)])])]))),256))],512),t("div",Ne,Ie,512)],512)])}const Fe={props:["count","imagePath"],data(){return{slider:null}},methods:{initSlider(){this.slider=new le(this.$refs.mySwiper,{modules:[$e,Se],speed:1e3,slidesPerView:"auto",loop:!0,autoplay:{delay:1e3,disableOnInteraction:!1},watchOverflow:!0,navigation:{nextEl:".slider-button-next",prevEl:".slider-button-prev"},breakpoints:{300:{spaceBetween:10},767.98:{spaceBetween:22}}})},destroySlider(){if(this.slider!=null){const f=this.slider.slides,e=this.slider.navigation;let o=0;if(window.innerWidth>767.98?o=22:o=10,this.$refs.mySwiperWrapper!=null){const d=this.$refs.mySwiperWrapper.scrollWidth;(f[0].getBoundingClientRect().width+o)*f.length<d?(this.$refs.mySwiper.classList.add("in-active"),e.nextEl.remove(),e.prevEl.remove(),this.$refs.slider_controls.remove()):this.$refs.mySwiper.classList.remove("in-active")}}}},mounted(){this.initSlider(),this.destroySlider(),window.addEventListener("resize",()=>{this.destroySlider()})}},je=T(Fe,[["render",ze]]),Re={class:"main-screen__info"},Ve={class:"main-screen__content"},We=t("p",null,"К вам приедет ближайший из них",-1),He=t("span",{class:"main-screen__info-icon"},null,-1);function Qe(f,e,o,d,s,m){const a=$("FreeMasters");return _(),u("div",Re,[t("div",Ve,[v(a),We]),He])}const Ue={components:{FreeMasters:ne},data(){return{}}},Ye=T(Ue,[["render",Qe]]),Je={class:"main-about"},Ke={class:"container"},Xe={class:"main-about__body"},Ze={class:"main-about__content"},et=t("div",{class:"heading"},[t("h2",{class:"heading__title"},"О компании")],-1),tt={class:"main-about__stats"},st={class:"main-about__item stats-item"},it={class:"stats-item__num"},nt={class:"stats-item__text"},at={class:"content",ref:"content"},ot=t("p",null,"В жизни каждого человека случаются непредвиденные ситуации: захлопнулась дверь, сломался замок, или не открывается ваш автомобиль. А может вы потеряли ключи от сейфа, и теперь не знаете что делать?",-1),rt=t("p",null,"Главное, не поддавайтесь панике, и не пытайтесь, с помощью подручных инструментов, самостоятельно решить данную проблему, разрушая тем самым не только конструкцию замка, но и целостность самой двери.",-1),lt=t("p",null,'Теперь у вас есть надёжный помощник-специалист компании "Замок- В жизни каждого человека случаются непредвиденные ситуации: захлопнулась дверь, сломался замок, или не',-1),ct=t("p",null,"В жизни каждого человека случаются непредвиденные ситуации: захлопнулась дверь, сломался замок, или не открывается ваш автомобиль. А может вы потеряли ключи от сейфа, и теперь не знаете что делать?",-1),dt=t("p",null,"Главное, не поддавайтесь панике, и не пытайтесь, с помощью подручных инструментов, самостоятельно решить данную проблему, разрушая тем самым не только конструкцию замка, но и целостность самой двери.",-1),_t=t("p",null,'Теперь у вас есть надёжный помощник-специалист компании "Замок- В жизни каждого человека случаются непредвиденные ситуации: захлопнулась дверь, сломался замок, или не ',-1),ut=[ot,rt,lt,ct,dt,_t],pt={class:"main-about__image-wrap"},vt={class:"main-about__image ibg"},mt=["srcset"],ht=["src"];function gt(f,e,o,d,s,m){const a=$("router-link");return _(),u("section",Je,[t("div",Ke,[t("div",Xe,[t("div",Ze,[et,t("div",tt,[(_(!0),u(G,null,B(s.stats,h=>(_(),u("div",st,[t("div",it,k(h.num),1),t("div",nt,k(h.text),1)]))),256))]),t("div",{class:K(["text-hidden",[s.textShow?"active":""]]),ref:"hiddenBlock"},[t("div",{class:"text-hidden-content",ref:"hiddenContent",style:X(m.myStyles)},[t("div",at,ut,512),t("div",{class:"text-hidden-content__gradient",onClick:e[0]||(e[0]=h=>s.textShow=!s.textShow)})],4),s.textShow?V("",!0):(_(),u("button",{key:0,class:"main-about__button btn-show",type:"button",onClick:e[1]||(e[1]=h=>s.textShow=!s.textShow)},"Читать полностью"))],2),v(a,{class:"main-about__btn btn",to:"/about"},{default:F(()=>[N("О компании")]),_:1})]),t("div",pt,[t("div",vt,[t("picture",null,[t("source",{srcset:"./images/main-about/master.jpg"},null,8,mt),t("img",{src:"./images/main-about/master.jpg",alt:"Баннер"},null,8,ht)])])])])])])}const{stats:ft}=j,yt={components:{},data(){return{stats:ft,textShow:!1,maxHeight:0}},methods:{},computed:{myStyles(){var f;return{"max-height":`${this.textShow?(f=this.$el.querySelector(".text-hidden-content"))==null?void 0:f.scrollHeight:!1}px`}}},watch:{},mounted(){}},bt=T(yt,[["render",gt]]),xt={class:"geography"},wt={class:"container"},$t=t("div",{class:"heading"},[t("h2",{class:"heading__title"},"География работы")],-1),St={class:"geography__body"},Et={class:"geography__list"},Dt={class:"geography__list-item"},kt=t("span",{class:"geography__gradient"},null,-1);function Lt(f,e,o,d,s,m){return _(),u("section",xt,[t("div",wt,[$t,t("div",{class:K(["geography__wrapper",[s.textShow?"active":""]]),style:X(m.myStyles)},[t("div",St,[(_(!0),u(G,null,B(s.geography,a=>(_(),u("ul",Et,[(_(!0),u(G,null,B(a.list,h=>(_(),u("li",Dt,k(h),1))),256))]))),256))]),kt],6),s.textShow?V("",!0):(_(),u("button",{key:0,class:"geography__button btn-show",type:"button",onClick:e[0]||(e[0]=a=>s.textShow=!s.textShow)},"Показать все"))])])}const{geography:Ct}=j,Tt={data(){return{geography:Ct,textShow:!1}},computed:{myStyles(){return{"max-height":`${this.textShow?this.$el.querySelector(".geography__wrapper").scrollHeight:!1}px`}}}},Mt=T(Tt,[["render",Lt]]),Pt={class:"request"},Gt=W('<div class="container"><div class="request__body"><div class="request__inner"><div class="request__content"><h2 class="request__title">Оставьте заявку</h2><p class="request__sub-title">Оставьте контакты и мы позвоним вам в течении <span>30 секунд</span></p></div><form class="request__form form"><div class="form-item"><input type="tel" placeholder="Введите номер"></div><input class="btn" type="submit" value="Заказать звонок"><div class="form-text">Нажимая на кнопку, вы соглашаетесь политикой конфиденциальности сайта</div></form></div></div></div>',1),qt=[Gt];function Ot(f,e,o,d,s,m){return _(),u("section",Pt,qt)}const Nt={data(){return{}},mounted(){ae()}},Bt=T(Nt,[["render",Ot]]),At={class:"services"},It={class:"container"},zt=t("div",{class:"heading"},[t("h2",{class:"heading__title"},"Услуги")],-1),Ft={class:"services__body"},jt={class:"services__item item-services"},Rt={class:"item-services__content"},Vt={class:"item-services__title"},Wt={class:"item-services__bottom"},Ht={class:"item-services__icon"},Qt=["srcset"],Ut=["srcset"],Yt=["src","alt"];function Jt(f,e,o,d,s,m){return _(),u("section",At,[t("div",It,[zt,t("div",Ft,[(_(!0),u(G,null,B(s.services,(a,h)=>(_(),u("div",jt,[t("div",Rt,[t("div",Vt,k(a.title),1),t("div",Wt,[t("span",Ht,[t("picture",null,[t("source",{srcset:"./images/services/services-"+a.img+".png",media:"(min-width: 767.98px)"},null,8,Qt),t("source",{srcset:"./images/services/services-"+a.img+"-mob.png",media:"(min-width: 300px)"},null,8,Ut),t("img",{src:"./images/services/services-"+a.img+".png",alt:a.title,loading:"lazy"},null,8,Yt)])])])])]))),256))])])])}const{services:Kt}=j,Xt={data(){return{services:Kt}},methods:{animation(){y({reset:!1,duration:1500,distance:"30px",mobile:!1}),y().reveal(".services__item",{origin:"top",opacity:.2,scale:.5,delay:.2})}},mounted(){this.animation()}},Zt=T(Xt,[["render",Jt]]),es={class:"main-screen"},ts={class:"container"},ss={class:"main-screen__heading"},is={class:"main-screen__title"},ns=t("a",{class:"main-screen__phone btn-phone btn",href:"tel:+79958881086"},[t("span",{class:"btn-phone__text"},"+7 (995) 888-10-86"),t("span",{class:"btn-phone__icon"})],-1),as=W('<div class="main-screen__advantages"><div class="main-screen__advantage main-screen__advantage--1">Работаем официально и круглосуточно (24/7)</div><div class="main-screen__advantage main-screen__advantage--2">Срочный выезд мастера (15-20 мин)</div><div class="main-screen__advantage main-screen__advantage--3">Звонок напрямую мастеру (без посредников)</div></div><a class="main-screen__phone-mobile btn-phone btn" href="tel:+79958881086"><span class="btn-phone__text">+7 (995) 888-10-86</span><span class="btn-phone__icon"></span></a>',2),os={class:"main-screen__image-wrap"},rs={class:"main-screen__image ibg"},ls=["srcset"],cs=["src"],ds={class:"services-detail services-detail--first"},_s={class:"services-detail__wrapper"},us={class:"services-detail__box"},ps={class:"container"},vs={class:"services-detail__bottom"},ms={class:"container"},hs={class:"services-detail__box"},gs={class:"container"},fs={class:"services-detail__bottom"},ys={class:"container"},bs={class:"services-detail services-detail--second"},xs={class:"services-detail__wrapper"},ws={class:"services-detail__box"},$s={class:"container"},Ss={class:"services-detail__box"},Es={class:"container"},Ds={class:"services-detail services-detail--third"},ks={class:"services-detail__wrapper"},Ls={class:"services-detail__box"},Cs={class:"container"},Ts=W('<section class="testimonials"><div class="testimonials__wrapper"><div class="container"><div class="testimonials__body"><div class="testimonials__module"><iframe style="width:100%;height:100%;border:1px solid #e6e6e6;border-radius:8px;box-sizing:border-box;" src="https://yandex.ru/maps-reviews-widget/158778930985?comments"></iframe><a href="https://yandex.ru/maps/org/dom_byta/158778930985/" target="_blank" style="box-sizing:border-box;text-decoration:none;color:#b3b3b3;font-size:10px;font-family:YS Text,sans-serif;padding:0 16px;position:absolute;bottom:8px;width:100%;text-align:center;left:0;overflow:hidden;text-overflow:ellipsis;display:block;max-height:14px;white-space:nowrap;">Дом Быта на карте Москвы — Яндекс Карты</a></div><div class="heading"><h2 class="heading__title">Отзывы <span>наших клиентов</span></h2><p class="heading__sub-title">За время работы нашей компании, остались довольными более 15 000 клиентов.</p></div></div></div></div></section>',1);function Ms(f,e,o,d,s,m){const a=$("MainScreenInfo"),h=$("MainServices"),L=$("Request"),b=$("ServiceDetail"),p=$("ServiceSlider"),x=$("router-link"),M=$("Questions"),S=$("MainAbout"),i=$("MainGeography");return _(),u(G,null,[t("div",es,[t("div",ts,[t("div",ss,[t("h1",is,[N("Вскрытие замков "),t("span",null,"в "+k(o.declensionCity),1)]),ns]),as,t("div",os,[t("div",rs,[t("picture",null,[t("source",{srcset:"./images/main-screen/banner.png"},null,8,ls),t("img",{src:"./images/main-screen/banner.png",alt:"Баннер",loading:"lazy"},null,8,cs)])]),v(a)])])]),v(h),v(L),t("section",ds,[t("div",_s,[t("div",us,[t("div",ps,[v(b,{titleGray:s.servicesDetail[0].titleGray,title:s.servicesDetail[0].title,text1:s.servicesDetail[0].text[0],img:"1"},null,8,["titleGray","title","text1"])]),v(p,{count:3,imagePath:"lock"}),t("div",vs,[t("div",ms,[v(x,{class:"services-detail__button btn",to:"/service-card"},{default:F(()=>[N("Подробнее")]),_:1})])])]),t("div",hs,[t("div",gs,[v(b,{titleGray:s.servicesDetail[1].titleGray,title:s.servicesDetail[1].title,text1:s.servicesDetail[1].text[0],text2:s.servicesDetail[1].text[1],img:"2"},null,8,["titleGray","title","text1","text2"])]),v(p,{count:9,imagePath:"doors"}),t("div",fs,[t("div",ys,[v(x,{class:"services-detail__button btn",to:"/service-card"},{default:F(()=>[N("Подробнее")]),_:1})])])])])]),t("section",bs,[t("div",xs,[t("div",ws,[t("div",$s,[v(b,{titleGray:s.servicesDetail[2].titleGray,title:s.servicesDetail[2].title,text1:s.servicesDetail[2].text[0],text2:s.servicesDetail[2].text[1],img:"3"},null,8,["titleGray","title","text1","text2"])]),v(p,{count:9,imagePath:"safe"})]),t("div",Ss,[t("div",Es,[v(b,{titleGray:s.servicesDetail[3].titleGray,title:s.servicesDetail[3].title,text1:s.servicesDetail[3].text[0],text2:s.servicesDetail[3].text[1],img:"4"},null,8,["titleGray","title","text1","text2"])]),v(p,{count:9,imagePath:"car"})])])]),t("section",Ds,[t("div",ks,[t("div",Ls,[t("div",Cs,[v(b,{titleGray:s.servicesDetail[4].titleGray,title:s.servicesDetail[4].title,text1:s.servicesDetail[4].text[0],text2:s.servicesDetail[4].text[1],img:"5"},null,8,["titleGray","title","text1","text2"])]),v(p,{count:9,imagePath:"setlock"})])])]),v(M),v(S),Ts,v(i)],64)}const{servicesDetail:Ps,stats:Gs}=j,qs={setup(){oe({title:"Главная",description:[{name:"description",content:"My page meta description"}]})},props:["defaultCity","declensionCity"],components:{ServiceDetail:we,ServiceSlider:je,Questions:ce,MainScreenInfo:Ye,MainAbout:bt,MainGeography:Mt,Request:Bt,MainServices:Zt},data(){return{servicesDetail:Ps,stats:Gs,localCity:this.defaultCity}},methods:{animation(){typeof window<"u"&&(y({reset:!1,duration:1500,distance:"15px"}),y().reveal(".main-screen__heading",{origin:"top",opacity:0}))}},watch(){},computed:{},mounted(){window.addEventListener("load",()=>{document.body.classList.add("home")})}},Is=T(qs,[["render",Ms]]);export{Is as default};
