import{r as q,o as c,c as v,a as t,b as E,t as L,d as _,w as S,u as b,e as de,f as A,g as R,h as T,F as O,i as M,j as Y,_ as _e,k as Q,n as J,l as ie,m as K,p as ae,q as ue,s as ve,v as pe,x as me,y as he}from"./index-C-JXT1hX.js";import{S as k}from"./scrollreveal.es-DIZ4IBFj.js";import{m as G,c as ge,g as U,S as fe}from"./create-element-if-not-defined-CpJkOhtE.js";import{Q as ye}from"./Questions-DRAz5kOU.js";const be={class:"services-detail__box"},xe={class:"container"},$e={class:"services-detail__item"},we={class:"services-detail__body"},Ee={class:"services-detail__content"},ke={class:"services-detail__title"},Se=t("span",null,null,-1),Ce=t("div",{class:"services-detail__text"},null,-1),Le=t("div",{class:"services-detail__image-wrap"},[t("div",{class:"services-detail__image ibg"},[t("picture")])],-1),Te={class:"services-slider"},De={class:"services-slider__body swiper",ref:"mySwiper"},Pe={class:"services-slider__wrapper swiper-wrapper",ref:"mySwiperWrapper"},Ge={class:"slider-controls",ref:"sliderControls"},Oe=t("button",{class:"slider-button slider-button-prev"},null,-1),Be=t("button",{class:"slider-button slider-button-next"},null,-1),Me=[Oe,Be],Ne={class:"services-detail__bottom"},qe={class:"container"},Ae={__name:"ServiceDetailBox",props:["service","locks"],setup(o){return console.log(o.service),(u,i)=>{const d=q("router-link");return c(),v("div",be,[t("div",xe,[t("div",$e,[t("div",we,[t("div",Ee,[t("h2",ke,[E(L(o.service.title),1),Se]),Ce,_(d,{class:"services-detail__button btn",to:`${b(de).url}${o.service.url}`},{default:S(()=>[E("Подробнее")]),_:1},8,["to"])]),Le])])]),t("div",Te,[t("div",De,[t("div",Pe,null,512),t("div",Ge,Me,512)],512)]),t("div",Ne,[t("div",qe,[_(d,{class:"services-detail__button btn",to:"/service-card"},{default:S(()=>[E("Подробнее")]),_:1})])])])}}},ze={class:"services-detail__item"},Ie={class:"services-detail__body"},je={class:"services-detail__content"},We={class:"services-detail__title"},Fe={class:"services-detail__text"},He={key:0},Re={class:"services-detail__image-wrap"},Ve={class:"services-detail__image ibg"},Qe=["srcset"],Ue=["src","alt"],F={__name:"ServiceDetail",props:["titleGray","title","text1","text2","img"],setup(o){const e=()=>{typeof window<"u"&&(k({reset:!1,duration:1500,distance:"50px",mobile:!1}),k().reveal(".services-detail--first .services-detail__box:nth-child(1) .services-detail__content",{origin:"left",opacity:0}),k().reveal(".services-detail--first .services-detail__box:nth-child(1) .services-detail__image-wrap",{origin:"right",opacity:0}),k().reveal(".services-detail--first .services-detail__box:nth-child(2) .services-detail__content",{origin:"right",opacity:0}),k().reveal(".services-detail--first .services-detail__box:nth-child(2) .services-detail__image-wrap",{origin:"left",opacity:0}),k().reveal(".services-detail--second .services-detail__box:nth-child(1) .services-detail__content",{origin:"left",opacity:0}),k().reveal(".services-detail--second .services-detail__box:nth-child(1) .services-detail__image-wrap",{origin:"right",opacity:0}),k().reveal(".services-detail--second .services-detail__box:nth-child(2) .services-detail__content",{origin:"right",opacity:0}),k().reveal(".services-detail--second .services-detail__box:nth-child(2) .services-detail__image-wrap",{origin:"left",opacity:0}),k().reveal(".services-detail--third .services-detail__box:nth-child(1) .services-detail__content",{origin:"left",opacity:0}),k().reveal(".services-detail--third .services-detail__box:nth-child(1) .services-detail__image-wrap",{origin:"right",opacity:0}))};return A(()=>{e()}),(u,i)=>{const d=q("router-link");return c(),v("div",ze,[t("div",Ie,[t("div",je,[t("h2",We,[t("span",null,L(o.titleGray),1),E(" "+L(o.title),1)]),t("div",Fe,[t("p",null,L(o.text1),1),o.text2?(c(),v("p",He,L(o.text2),1)):R("",!0)]),_(d,{class:"services-detail__button btn",to:"/service-card"},{default:S(()=>[E("Подробнее")]),_:1})]),t("div",Re,[t("div",Ve,[t("picture",null,[t("source",{srcset:"/images/services/service-detail-"+o.img+".jpg"},null,8,Qe),t("img",{src:"/images/services/service-detail-"+o.img+".jpg",alt:o.titleGray+o.title,loading:"lazy"},null,8,Ue)])])])])])}}};function Ye(o){let{swiper:e,extendParams:u,on:i,emit:d}=o;u({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),e.navigation={nextEl:null,prevEl:null};function y(a){let n;return a&&typeof a=="string"&&e.isElement&&(n=e.el.querySelector(a),n)?n:(a&&(typeof a=="string"&&(n=[...document.querySelectorAll(a)]),e.params.uniqueNavElements&&typeof a=="string"&&n&&n.length>1&&e.el.querySelectorAll(a).length===1?n=e.el.querySelector(a):n&&n.length===1&&(n=n[0])),a&&!n?a:n)}function s(a,n){const f=e.params.navigation;a=G(a),a.forEach(r=>{r&&(r.classList[n?"add":"remove"](...f.disabledClass.split(" ")),r.tagName==="BUTTON"&&(r.disabled=n),e.params.watchOverflow&&e.enabled&&r.classList[e.isLocked?"add":"remove"](f.lockClass))})}function p(){const{nextEl:a,prevEl:n}=e.navigation;if(e.params.loop){s(n,!1),s(a,!1);return}s(n,e.isBeginning&&!e.params.rewind),s(a,e.isEnd&&!e.params.rewind)}function m(a){a.preventDefault(),!(e.isBeginning&&!e.params.loop&&!e.params.rewind)&&(e.slidePrev(),d("navigationPrev"))}function x(a){a.preventDefault(),!(e.isEnd&&!e.params.loop&&!e.params.rewind)&&(e.slideNext(),d("navigationNext"))}function l(){const a=e.params.navigation;if(e.params.navigation=ge(e,e.originalParams.navigation,e.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(a.nextEl||a.prevEl))return;let n=y(a.nextEl),f=y(a.prevEl);Object.assign(e.navigation,{nextEl:n,prevEl:f}),n=G(n),f=G(f);const r=($,B)=>{$&&$.addEventListener("click",B==="next"?x:m),!e.enabled&&$&&$.classList.add(...a.lockClass.split(" "))};n.forEach($=>r($,"next")),f.forEach($=>r($,"prev"))}function g(){let{nextEl:a,prevEl:n}=e.navigation;a=G(a),n=G(n);const f=(r,$)=>{r.removeEventListener("click",$==="next"?x:m),r.classList.remove(...e.params.navigation.disabledClass.split(" "))};a.forEach(r=>f(r,"next")),n.forEach(r=>f(r,"prev"))}i("init",()=>{e.params.navigation.enabled===!1?D():(l(),p())}),i("toEdge fromEdge lock unlock",()=>{p()}),i("destroy",()=>{g()}),i("enable disable",()=>{let{nextEl:a,prevEl:n}=e.navigation;if(a=G(a),n=G(n),e.enabled){p();return}[...a,...n].filter(f=>!!f).forEach(f=>f.classList.add(e.params.navigation.lockClass))}),i("click",(a,n)=>{let{nextEl:f,prevEl:r}=e.navigation;f=G(f),r=G(r);const $=n.target;if(e.params.navigation.hideOnClick&&!r.includes($)&&!f.includes($)){if(e.pagination&&e.params.pagination&&e.params.pagination.clickable&&(e.pagination.el===$||e.pagination.el.contains($)))return;let B;f.length?B=f[0].classList.contains(e.params.navigation.hiddenClass):r.length&&(B=r[0].classList.contains(e.params.navigation.hiddenClass)),d(B===!0?"navigationShow":"navigationHide"),[...f,...r].filter(z=>!!z).forEach(z=>z.classList.toggle(e.params.navigation.hiddenClass))}});const w=()=>{e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(" ")),l(),p()},D=()=>{e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(" ")),g()};Object.assign(e.navigation,{enable:w,disable:D,update:p,init:l,destroy:g})}function Je(o){let{swiper:e,extendParams:u,on:i,emit:d,params:y}=o;e.autoplay={running:!1,paused:!1,timeLeft:0},u({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let s,p,m=y&&y.autoplay?y.autoplay.delay:3e3,x=y&&y.autoplay?y.autoplay.delay:3e3,l,g=new Date().getTime(),w,D,a,n,f,r,$;function B(h){!e||e.destroyed||!e.wrapperEl||h.target===e.wrapperEl&&(e.wrapperEl.removeEventListener("transitionend",B),!$&&N())}const z=()=>{if(e.destroyed||!e.autoplay.running)return;e.autoplay.paused?w=!0:w&&(x=l,w=!1);const h=e.autoplay.paused?l:g+x-new Date().getTime();e.autoplay.timeLeft=h,d("autoplayTimeLeft",h,h/m),p=requestAnimationFrame(()=>{z()})},ne=()=>{let h;return e.virtual&&e.params.virtual.enabled?h=e.slides.filter(C=>C.classList.contains("swiper-slide-active"))[0]:h=e.slides[e.activeIndex],h?parseInt(h.getAttribute("data-swiper-autoplay"),10):void 0},V=h=>{if(e.destroyed||!e.autoplay.running)return;cancelAnimationFrame(p),z();let P=typeof h>"u"?e.params.autoplay.delay:h;m=e.params.autoplay.delay,x=e.params.autoplay.delay;const C=ne();!Number.isNaN(C)&&C>0&&typeof h>"u"&&(P=C,m=C,x=C),l=P;const W=e.params.speed,se=()=>{!e||e.destroyed||(e.params.autoplay.reverseDirection?!e.isBeginning||e.params.loop||e.params.rewind?(e.slidePrev(W,!0,!0),d("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(e.slides.length-1,W,!0,!0),d("autoplay")):!e.isEnd||e.params.loop||e.params.rewind?(e.slideNext(W,!0,!0),d("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(0,W,!0,!0),d("autoplay")),e.params.cssMode&&(g=new Date().getTime(),requestAnimationFrame(()=>{V()})))};return P>0?(clearTimeout(s),s=setTimeout(()=>{se()},P)):requestAnimationFrame(()=>{se()}),P},X=()=>{g=new Date().getTime(),e.autoplay.running=!0,V(),d("autoplayStart")},j=()=>{e.autoplay.running=!1,clearTimeout(s),cancelAnimationFrame(p),d("autoplayStop")},I=(h,P)=>{if(e.destroyed||!e.autoplay.running)return;clearTimeout(s),h||(r=!0);const C=()=>{d("autoplayPause"),e.params.autoplay.waitForTransition?e.wrapperEl.addEventListener("transitionend",B):N()};if(e.autoplay.paused=!0,P){f&&(l=e.params.autoplay.delay),f=!1,C();return}l=(l||e.params.autoplay.delay)-(new Date().getTime()-g),!(e.isEnd&&l<0&&!e.params.loop)&&(l<0&&(l=0),C())},N=()=>{e.isEnd&&l<0&&!e.params.loop||e.destroyed||!e.autoplay.running||(g=new Date().getTime(),r?(r=!1,V(l)):V(),e.autoplay.paused=!1,d("autoplayResume"))},Z=()=>{if(e.destroyed||!e.autoplay.running)return;const h=U();h.visibilityState==="hidden"&&(r=!0,I(!0)),h.visibilityState==="visible"&&N()},ee=h=>{h.pointerType==="mouse"&&(r=!0,$=!0,!(e.animating||e.autoplay.paused)&&I(!0))},te=h=>{h.pointerType==="mouse"&&($=!1,e.autoplay.paused&&N())},oe=()=>{e.params.autoplay.pauseOnMouseEnter&&(e.el.addEventListener("pointerenter",ee),e.el.addEventListener("pointerleave",te))},le=()=>{e.el.removeEventListener("pointerenter",ee),e.el.removeEventListener("pointerleave",te)},re=()=>{U().addEventListener("visibilitychange",Z)},ce=()=>{U().removeEventListener("visibilitychange",Z)};i("init",()=>{e.params.autoplay.enabled&&(oe(),re(),X())}),i("destroy",()=>{le(),ce(),e.autoplay.running&&j()}),i("_freeModeStaticRelease",()=>{(a||r)&&N()}),i("_freeModeNoMomentumRelease",()=>{e.params.autoplay.disableOnInteraction?j():I(!0,!0)}),i("beforeTransitionStart",(h,P,C)=>{e.destroyed||!e.autoplay.running||(C||!e.params.autoplay.disableOnInteraction?I(!0,!0):j())}),i("sliderFirstMove",()=>{if(!(e.destroyed||!e.autoplay.running)){if(e.params.autoplay.disableOnInteraction){j();return}D=!0,a=!1,r=!1,n=setTimeout(()=>{r=!0,a=!0,I(!0)},200)}}),i("touchEnd",()=>{if(!(e.destroyed||!e.autoplay.running||!D)){if(clearTimeout(n),clearTimeout(s),e.params.autoplay.disableOnInteraction){a=!1,D=!1;return}a&&e.params.cssMode&&N(),a=!1,D=!1}}),i("slideChange",()=>{e.destroyed||!e.autoplay.running||(f=!0)}),Object.assign(e.autoplay,{start:X,stop:j,pause:I,resume:N})}const Ke={class:"services-slider"},Xe={class:"services-slider__image"},Ze=["srcset"],et=["src"],tt={class:"services-slider__image"},st=["srcset"],it=["src"],at=t("button",{class:"slider-button slider-button-prev"},null,-1),nt=t("button",{class:"slider-button slider-button-next"},null,-1),ot=[at,nt],H={__name:"ServiceSlider",props:["count","imagePath"],setup(o){const e=T(null),u=T(!1),i=T(),d=T(),y=T(),s=()=>{e.value=new fe(i.value,{modules:[Ye,Je],speed:1e3,loop:!u.value,slidesPerView:"auto",autoplay:{delay:1e3,disableOnInteraction:!1},watchOverflow:!0,navigation:{nextEl:".slider-button-next",prevEl:".slider-button-prev"},breakpoints:{300:{spaceBetween:10},767.98:{spaceBetween:22}}})},p=()=>{if(e.value!=null){const m=e.value.slides,x=e.value.navigation;let l=0;if(window.innerWidth>767.98?l=22:l=10,y.value!=null){const g=y.value.scrollWidth;(m[0].getBoundingClientRect().width+l)*m.length<g?(i.value.classList.add("in-active"),x.nextEl.remove(),x.prevEl.remove(),d.value.remove(),u.value=!1):(i.value.classList.remove("in-active"),u.value=!0)}}};return A(()=>{s(),p(),window.addEventListener("resize",()=>{p()})}),(m,x)=>{const l=q("router-link");return c(),v("div",Ke,[t("div",{class:"services-slider__body swiper",ref_key:"mySwiper",ref:i},[t("div",{class:"services-slider__wrapper swiper-wrapper",ref_key:"mySwiperWrapper",ref:y},[(c(!0),v(O,null,M(o.count,(g,w)=>(c(),Y(l,{class:"services-slider__item swiper-slide",to:`/castle-list/${w}`},{default:S(()=>[t("div",Xe,[t("picture",null,[t("source",{srcset:"/images/service-detail/"+o.imagePath+"/logo-"+g+".png"},null,8,Ze),t("img",{src:"/images/service-detail/"+o.imagePath+"/logo-"+g+".png",loading:"lazy",alt:"фото"},null,8,et)])])]),_:2},1032,["to"]))),256)),(c(!0),v(O,null,M(o.count,(g,w)=>(c(),Y(l,{class:"services-slider__item swiper-slide",to:`/castle-list/${w}`},{default:S(()=>[t("div",tt,[t("picture",null,[t("source",{srcset:"/images/service-detail/"+o.imagePath+"/logo-"+g+".png"},null,8,st),t("img",{src:"/images/service-detail/"+o.imagePath+"/logo-"+g+".png",loading:"lazy",alt:"фото"},null,8,it)])])]),_:2},1032,["to"]))),256))],512),t("div",{class:"slider-controls",ref_key:"sliderControls",ref:d},ot,512)],512)])}}},lt={class:"main-screen__info"},rt={class:"main-screen__content"},ct=t("p",null,"К вам приедет ближайший из них",-1),dt=t("span",{class:"main-screen__info-icon"},null,-1),_t={__name:"MainScreenInfo",setup(o){return(e,u)=>(c(),v("div",lt,[t("div",rt,[_(_e),ct]),dt]))}},ut={class:"main-about"},vt={class:"container"},pt={class:"main-about__body"},mt={class:"main-about__content"},ht=t("div",{class:"heading"},[t("h2",{class:"heading__title"},"О компании")],-1),gt={class:"main-about__stats"},ft={class:"main-about__item stats-item"},yt={class:"stats-item__num"},bt={class:"stats-item__text"},xt=["innerHTML"],$t={class:"main-about__image-wrap"},wt={class:"main-about__image ibg"},Et=["srcset"],kt=["src"],St={__name:"MainAbout",props:{data:{type:String}},setup(o){const{stats:e}=K,u=T(!1),i=T(),d=Q(()=>{var y;return{"max-height":`${u.value?(y=i.value)==null?void 0:y.scrollHeight:!1}px`}});return A(()=>{}),(y,s)=>{const p=q("router-link");return c(),v("section",ut,[t("div",vt,[t("div",pt,[t("div",mt,[ht,t("div",gt,[(c(!0),v(O,null,M(b(e),m=>(c(),v("div",ft,[t("div",yt,L(m.num),1),t("div",bt,L(m.text),1)]))),256))]),t("div",{class:J(["text-hidden",[u.value?"active":""]])},[t("div",{class:"text-hidden-content",ref_key:"hiddenContent",ref:i,style:ie(d.value)},[t("div",{class:"content",innerHTML:o.data},null,8,xt),t("div",{class:"text-hidden-content__gradient",onClick:s[0]||(s[0]=m=>u.value=!u.value)})],4),u.value?R("",!0):(c(),v("button",{key:0,class:"main-about__button btn-show",type:"button",onClick:s[1]||(s[1]=m=>u.value=!u.value)},"Читать полностью"))],2),_(p,{class:"main-about__btn btn",to:"/about"},{default:S(()=>[E("О компании")]),_:1})]),t("div",$t,[t("div",wt,[t("picture",null,[t("source",{srcset:"/images/main-about/master.jpg"},null,8,Et),t("img",{src:"/images/main-about/master.jpg",alt:"Баннер"},null,8,kt)])])])])])])}}},Ct={class:"geography"},Lt={class:"container"},Tt=t("div",{class:"heading"},[t("h2",{class:"heading__title"},"География работы")],-1),Dt={class:"geography__body"},Pt={class:"geography__list-item"},Gt={key:0,class:"geography__gradient"},Ot={key:0},Bt={__name:"MainGeography",props:["geo"],setup(o){const e=T(!1),u=T(),i=o,d=Q(()=>{var p;return{"max-height":`${e.value?(p=u.value)==null?void 0:p.scrollHeight:!1}px`}}),y=ae({geo:[]}),s=Q(()=>{let p=1;for(let m=0;m<Math.ceil(i.geo.length/p);m++)y.geo[m]=i.geo.slice(m*p,m*p+p);return y.geo});return A(()=>{}),(p,m)=>(c(),v("section",Ct,[t("div",Lt,[Tt,t("div",{class:J(["geography__wrapper",[e.value?"active":""]]),ref_key:"geographyWrapper",ref:u,style:ie(d.value)},[t("div",Dt,[(c(!0),v(O,null,M(s.value,(x,l)=>(c(),v("ul",{class:"geography__list",key:l},[(c(!0),v(O,null,M(x,g=>(c(),v("li",Pt,L(g),1))),256))]))),128))]),o.geo.length>5?(c(),v("span",Gt)):R("",!0)],6),o.geo.length>5?(c(),v("div",Ot,[e.value?R("",!0):(c(),v("button",{key:0,class:"geography__button btn-show",type:"button",onClick:m[0]||(m[0]=x=>e.value=!e.value)},"Показать все"))])):R("",!0)])]))}},Mt={class:"request"},Nt={class:"container"},qt={class:"request__body"},At={class:"request__inner"},zt=t("div",{class:"request__content"},[t("h2",{class:"request__title"},"Оставьте заявку"),t("p",{class:"request__sub-title"},[E("Оставьте контакты и мы позвоним вам в течении "),t("span",null,"30 секунд")])],-1),It={class:"request__form form"},jt=t("div",{class:"form-item"},[t("input",{type:"tel",placeholder:"Введите номер"})],-1),Wt=t("input",{class:"btn",type:"submit",value:"Заказать звонок"},null,-1),Ft={class:"form-text"},Ht={__name:"Request",setup(o){return A(()=>{ue()}),(e,u)=>{const i=q("router-link");return c(),v("section",Mt,[t("div",Nt,[t("div",qt,[t("div",At,[zt,t("form",It,[jt,Wt,t("div",Ft,[E("Нажимая на кнопку, вы соглашаетесь "),_(i,{to:"/text-page"},{default:S(()=>[E("политикой конфиденциальности")]),_:1}),E(" сайта")])])])])])])}}},Rt={class:"services"},Vt={class:"container"},Qt=t("div",{class:"heading"},[t("h2",{class:"heading__title"},"Услуги")],-1),Ut={class:"services__body"},Yt={class:"item-services__content"},Jt={class:"item-services__title"},Kt={class:"item-services__bottom"},Xt={class:"item-services__icon"},Zt=["srcset"],es=["srcset"],ts=["src","alt"],ss={__name:"MainServices",setup(o){const{services:e}=K,u=()=>{k({reset:!1,duration:1500,distance:"30px",mobile:!1}),k().reveal(".services__item",{origin:"top",opacity:.2,scale:.5,delay:.2})};return A(()=>{u()}),(i,d)=>{const y=q("router-link");return c(),v("section",Rt,[t("div",Vt,[Qt,t("div",Ut,[(c(!0),v(O,null,M(b(e),(s,p)=>(c(),Y(y,{class:"services__item item-services",to:`/service-list/${p}`},{default:S(()=>[t("div",Yt,[t("div",Jt,L(s.title),1),t("div",Kt,[t("span",Xt,[t("picture",null,[t("source",{srcset:"/images/services/services-"+s.img+".png",media:"(min-width: 767.98px)"},null,8,Zt),t("source",{srcset:"/images/services/services-"+s.img+"-mob.png",media:"(min-width: 300px)"},null,8,es),t("img",{src:"/images/services/services-"+s.img+".png",alt:s.title,loading:"lazy"},null,8,ts)])])])])]),_:2},1032,["to"]))),256))])])])}}},is={class:"main-screen"},as={class:"container"},ns={class:"main-screen__heading"},os={class:"main-screen__title"},ls=t("a",{class:"main-screen__phone btn-phone btn",href:"tel:+79958881086"},[t("span",{class:"btn-phone__text"},"+7 (995) 888-10-86"),t("span",{class:"btn-phone__icon"})],-1),rs={class:"main-screen__advantages"},cs=t("a",{class:"main-screen__phone-mobile btn-phone btn",href:"tel:+79958881086"},[t("span",{class:"btn-phone__text"},"+7 (995) 888-10-86"),t("span",{class:"btn-phone__icon"})],-1),ds={class:"main-screen__image-wrap"},_s={class:"main-screen__image ibg"},us=["srcset"],vs=["src"],ps={class:"services-detail services-detail--first"},ms={class:"services-detail__wrapper"},hs={class:"services-detail__box"},gs={class:"container"},fs={class:"services-detail__bottom"},ys={class:"container"},bs={class:"services-detail__box"},xs={class:"container"},$s={class:"services-detail__bottom"},ws={class:"container"},Es={class:"services-detail services-detail--second"},ks={class:"services-detail__wrapper"},Ss={class:"services-detail__box"},Cs={class:"container"},Ls={class:"services-detail__bottom"},Ts={class:"container"},Ds={class:"services-detail__box"},Ps={class:"container"},Gs={class:"services-detail__bottom"},Os={class:"container"},Bs={class:"services-detail services-detail--third"},Ms={class:"services-detail__wrapper"},Ns={class:"services-detail__box"},qs={class:"container"},As={class:"services-detail__bottom"},zs={class:"container"},Is=me('<section class="testimonials"><div class="testimonials__wrapper"><div class="container"><div class="testimonials__body"><div class="testimonials__module"><iframe style="width:100%;height:100%;border:1px solid #e6e6e6;border-radius:8px;box-sizing:border-box;" src="https://yandex.ru/maps-reviews-widget/158778930985?comments"></iframe><a href="https://yandex.ru/maps/org/dom_byta/158778930985/" target="_blank" style="box-sizing:border-box;text-decoration:none;color:#b3b3b3;font-size:10px;font-family:YS Text,sans-serif;padding:0 16px;position:absolute;bottom:8px;width:100%;text-align:center;left:0;overflow:hidden;text-overflow:ellipsis;display:block;max-height:14px;white-space:nowrap;">Дом Быта на карте Москвы — Яндекс Карты</a></div><div class="heading"><h2 class="heading__title">Отзывы <span>наших клиентов</span></h2><p class="heading__sub-title">За время работы нашей компании, остались довольными более 15 000 клиентов.</p></div></div></div></div></section>',1),js=["src","width","height"],Vs={__name:"Home",props:["defaultCity","declensionCity","mainInfo"],setup(o){const e=ve(),u=Q(()=>e.meta.title),i=ae({about:"",services:{items:"",locks:""},advantages:"",geo:"",locks:""}),d=async()=>{try{const x=await he(),{data:l}=await x.get("/wsapi/packs/front");i.about=l.data.info_front[0].field_about,i.advantages=l.data.info_front[0].field_advantages,i.geo=l.data.info_front[0].field_geography,i.services.locks=l.data.services.locks,i.services.items=l.data.services,console.log(i.services.items)}catch(x){console.log("maininfo:"+x)}};pe({title:u.value,meta:[{name:"description",content:`Описание на странице ${u.value}`}],bodyAttrs:{class:"home"}});const y=o,{servicesDetail:s,stats:p}=K,m=T("");return m.value=y.defaultCity,A(()=>{d()}),(x,l)=>{const g=q("router-link");return c(),v(O,null,[t("div",is,[t("div",as,[t("div",ns,[t("h1",os,[E("Вскрытие замков "),t("span",null,L(o.declensionCity),1)]),ls]),t("div",rs,[(c(!0),v(O,null,M(i.advantages,(w,D)=>(c(),v("div",{class:J(["main-screen__advantage",`main-screen__advantage--${D+1}`]),key:w.id},L(w.field_title[0]),3))),128))]),cs,t("div",ds,[t("div",_s,[t("picture",null,[t("source",{srcset:"/images/main-screen/banner.png"},null,8,us),t("img",{src:"/images/main-screen/banner.png",alt:"Баннер",loading:"lazy"},null,8,vs)])]),_(_t)])])]),_(ss,{services:i.services},null,8,["services"]),_(Ht),t("section",ps,[t("div",ms,[_(Ae,{service:i.services.items[0],locks:i.services.locks},null,8,["service","locks"]),t("div",hs,[t("div",gs,[_(F,{titleGray:b(s)[0].titleGray,title:b(s)[0].title,text1:b(s)[0].text[0],img:"1"},null,8,["titleGray","title","text1"])]),_(H,{count:3,imagePath:"lock"}),t("div",fs,[t("div",ys,[_(g,{class:"services-detail__button btn",to:"/service-card"},{default:S(()=>[E("Подробнее")]),_:1})])])]),t("div",bs,[t("div",xs,[_(F,{titleGray:b(s)[1].titleGray,title:b(s)[1].title,text1:b(s)[1].text[0],text2:b(s)[1].text[1],img:"2"},null,8,["titleGray","title","text1","text2"])]),_(H,{count:9,imagePath:"doors"}),t("div",$s,[t("div",ws,[_(g,{class:"services-detail__button btn",to:"/service-card"},{default:S(()=>[E("Подробнее")]),_:1})])])])])]),t("section",Es,[t("div",ks,[t("div",Ss,[t("div",Cs,[_(F,{titleGray:b(s)[2].titleGray,title:b(s)[2].title,text1:b(s)[2].text[0],text2:b(s)[2].text[1],img:"3"},null,8,["titleGray","title","text1","text2"])]),_(H,{count:9,imagePath:"safe"}),t("div",Ls,[t("div",Ts,[_(g,{class:"services-detail__button btn",to:"/service-card"},{default:S(()=>[E("Подробнее ")]),_:1})])])]),t("div",Ds,[t("div",Ps,[_(F,{titleGray:b(s)[3].titleGray,title:b(s)[3].title,text1:b(s)[3].text[0],text2:b(s)[3].text[1],img:"4"},null,8,["titleGray","title","text1","text2"])]),_(H,{count:9,imagePath:"car"}),t("div",Gs,[t("div",Os,[_(g,{class:"services-detail__button btn",to:"/service-card"},{default:S(()=>[E("Подробнее ")]),_:1})])])])])]),t("section",Bs,[t("div",Ms,[t("div",Ns,[t("div",qs,[_(F,{titleGray:b(s)[4].titleGray,title:b(s)[4].title,text1:b(s)[4].text[0],text2:b(s)[4].text[1],img:"5"},null,8,["titleGray","title","text1","text2"])]),_(H,{count:9,imagePath:"setlock"}),t("div",As,[t("div",zs,[_(g,{class:"services-detail__button btn",to:"/service-card"},{default:S(()=>[E("Подробнее")]),_:1})])])])])]),_(ye),_(St,{data:i.about},null,8,["data"]),Is,_(Bt,{geo:i.geo},null,8,["geo"]),(c(!0),v(O,null,M(i.locks,w=>(c(),v("div",null,[t("img",{src:"http://zamokmaster.localhost/sites/default/files/2024-06/service-detail-1.jpg",alt:"",width:w.field_logo[0].width,height:w.field_logo[0].height},null,8,js)]))),256))],64)}}};export{Vs as default};