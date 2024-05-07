import{c as F,a as s,e as H,k as G,b as q,j as Q,r as N,o as U,_ as X,B as Y}from"./index-tuqrtQyl.js";import{g as W,m as K,a as I,c as J,b as Z,n as ee,e as se,i as te,d as ae,f as V,h as $,S as R}from"./create-element-if-not-defined-CpJkOhtE.js";import{Q as ie}from"./Questions-n_I0kDBN.js";import{B as oe}from"./Breadcrumbs-CoOpr87F.js";function le(b){return b===void 0&&(b=""),`.${b.trim().replace(/([\.:!+\/])/g,"\\$1").replace(/ /g,".")}`}function re(b){let{swiper:e,extendParams:M,on:h,emit:x}=b;const _=W();let C=!1,S=null,r=null,i,t,d,f;M({scrollbar:{el:null,dragSize:"auto",hide:!1,draggable:!1,snapOnRelease:!0,lockClass:"swiper-scrollbar-lock",dragClass:"swiper-scrollbar-drag",scrollbarDisabledClass:"swiper-scrollbar-disabled",horizontalClass:"swiper-scrollbar-horizontal",verticalClass:"swiper-scrollbar-vertical"}}),e.scrollbar={el:null,dragEl:null};function u(){if(!e.params.scrollbar.el||!e.scrollbar.el)return;const{scrollbar:a,rtlTranslate:c}=e,{dragEl:o,el:l}=a,p=e.params.scrollbar,k=e.params.loop?e.progressLoop:e.progress;let z=t,v=(d-t)*k;c?(v=-v,v>0?(z=t-v,v=0):-v+t>d&&(z=d+v)):v<0?(z=t+v,v=0):v+t>d&&(z=d-v),e.isHorizontal()?(o.style.transform=`translate3d(${v}px, 0, 0)`,o.style.width=`${z}px`):(o.style.transform=`translate3d(0px, ${v}px, 0)`,o.style.height=`${z}px`),p.hide&&(clearTimeout(S),l.style.opacity=1,S=setTimeout(()=>{l.style.opacity=0,l.style.transitionDuration="400ms"},1e3))}function w(a){!e.params.scrollbar.el||!e.scrollbar.el||(e.scrollbar.dragEl.style.transitionDuration=`${a}ms`)}function E(){if(!e.params.scrollbar.el||!e.scrollbar.el)return;const{scrollbar:a}=e,{dragEl:c,el:o}=a;c.style.width="",c.style.height="",d=e.isHorizontal()?o.offsetWidth:o.offsetHeight,f=e.size/(e.virtualSize+e.params.slidesOffsetBefore-(e.params.centeredSlides?e.snapGrid[0]:0)),e.params.scrollbar.dragSize==="auto"?t=d*f:t=parseInt(e.params.scrollbar.dragSize,10),e.isHorizontal()?c.style.width=`${t}px`:c.style.height=`${t}px`,f>=1?o.style.display="none":o.style.display="",e.params.scrollbar.hide&&(o.style.opacity=0),e.params.watchOverflow&&e.enabled&&a.el.classList[e.isLocked?"add":"remove"](e.params.scrollbar.lockClass)}function g(a){return e.isHorizontal()?a.clientX:a.clientY}function m(a){const{scrollbar:c,rtlTranslate:o}=e,{el:l}=c;let p;p=(g(a)-se(l)[e.isHorizontal()?"left":"top"]-(i!==null?i:t/2))/(d-t),p=Math.max(Math.min(p,1),0),o&&(p=1-p);const k=e.minTranslate()+(e.maxTranslate()-e.minTranslate())*p;e.updateProgress(k),e.setTranslate(k),e.updateActiveIndex(),e.updateSlidesClasses()}function D(a){const c=e.params.scrollbar,{scrollbar:o,wrapperEl:l}=e,{el:p,dragEl:k}=o;C=!0,i=a.target===k?g(a)-a.target.getBoundingClientRect()[e.isHorizontal()?"left":"top"]:null,a.preventDefault(),a.stopPropagation(),l.style.transitionDuration="100ms",k.style.transitionDuration="100ms",m(a),clearTimeout(r),p.style.transitionDuration="0ms",c.hide&&(p.style.opacity=1),e.params.cssMode&&(e.wrapperEl.style["scroll-snap-type"]="none"),x("scrollbarDragStart",a)}function n(a){const{scrollbar:c,wrapperEl:o}=e,{el:l,dragEl:p}=c;C&&(a.preventDefault&&a.cancelable?a.preventDefault():a.returnValue=!1,m(a),o.style.transitionDuration="0ms",l.style.transitionDuration="0ms",p.style.transitionDuration="0ms",x("scrollbarDragMove",a))}function P(a){const c=e.params.scrollbar,{scrollbar:o,wrapperEl:l}=e,{el:p}=o;C&&(C=!1,e.params.cssMode&&(e.wrapperEl.style["scroll-snap-type"]="",l.style.transitionDuration=""),c.hide&&(clearTimeout(r),r=ee(()=>{p.style.opacity=0,p.style.transitionDuration="400ms"},1e3)),x("scrollbarDragEnd",a),c.snapOnRelease&&e.slideToClosest())}function L(a){const{scrollbar:c,params:o}=e,l=c.el;if(!l)return;const p=l,k=o.passiveListeners?{passive:!1,capture:!1}:!1,z=o.passiveListeners?{passive:!0,capture:!1}:!1;if(!p)return;const v=a==="on"?"addEventListener":"removeEventListener";p[v]("pointerdown",D,k),_[v]("pointermove",n,k),_[v]("pointerup",P,z)}function A(){!e.params.scrollbar.el||!e.scrollbar.el||L("on")}function j(){!e.params.scrollbar.el||!e.scrollbar.el||L("off")}function y(){const{scrollbar:a,el:c}=e;e.params.scrollbar=J(e,e.originalParams.scrollbar,e.params.scrollbar,{el:"swiper-scrollbar"});const o=e.params.scrollbar;if(!o.el)return;let l;if(typeof o.el=="string"&&e.isElement&&(l=e.el.querySelector(o.el)),!l&&typeof o.el=="string"){if(l=_.querySelectorAll(o.el),!l.length)return}else l||(l=o.el);e.params.uniqueNavElements&&typeof o.el=="string"&&l.length>1&&c.querySelectorAll(o.el).length===1&&(l=c.querySelector(o.el)),l.length>0&&(l=l[0]),l.classList.add(e.isHorizontal()?o.horizontalClass:o.verticalClass);let p;l&&(p=l.querySelector(le(e.params.scrollbar.dragClass)),p||(p=Z("div",e.params.scrollbar.dragClass),l.append(p))),Object.assign(a,{el:l,dragEl:p}),o.draggable&&A(),l&&l.classList[e.enabled?"remove":"add"](...I(e.params.scrollbar.lockClass))}function T(){const a=e.params.scrollbar,c=e.scrollbar.el;c&&c.classList.remove(...I(e.isHorizontal()?a.horizontalClass:a.verticalClass)),j()}h("changeDirection",()=>{if(!e.scrollbar||!e.scrollbar.el)return;const a=e.params.scrollbar;let{el:c}=e.scrollbar;c=K(c),c.forEach(o=>{o.classList.remove(a.horizontalClass,a.verticalClass),o.classList.add(e.isHorizontal()?a.horizontalClass:a.verticalClass)})}),h("init",()=>{e.params.scrollbar.enabled===!1?O():(y(),E(),u())}),h("update resize observerUpdate lock unlock changeDirection",()=>{E()}),h("setTranslate",()=>{u()}),h("setTransition",(a,c)=>{w(c)}),h("enable disable",()=>{const{el:a}=e.scrollbar;a&&a.classList[e.enabled?"remove":"add"](...I(e.params.scrollbar.lockClass))}),h("destroy",()=>{T()});const B=()=>{e.el.classList.remove(...I(e.params.scrollbar.scrollbarDisabledClass)),e.scrollbar.el&&e.scrollbar.el.classList.remove(...I(e.params.scrollbar.scrollbarDisabledClass)),y(),E(),u()},O=()=>{e.el.classList.add(...I(e.params.scrollbar.scrollbarDisabledClass)),e.scrollbar.el&&e.scrollbar.el.classList.add(...I(e.params.scrollbar.scrollbarDisabledClass)),T()};Object.assign(e.scrollbar,{enable:B,disable:O,updateSize:E,setTranslate:u,init:y,destroy:T})}function ne(b){let{swiper:e,extendParams:M,on:h}=b;M({thumbs:{swiper:null,multipleActiveThumbs:!0,autoScrollOffset:0,slideThumbActiveClass:"swiper-slide-thumb-active",thumbsContainerClass:"swiper-thumbs"}});let x=!1,_=!1;e.thumbs={swiper:null};function C(){const i=e.thumbs.swiper;if(!i||i.destroyed)return;const t=i.clickedIndex,d=i.clickedSlide;if(d&&d.classList.contains(e.params.thumbs.slideThumbActiveClass)||typeof t>"u"||t===null)return;let f;i.params.loop?f=parseInt(i.clickedSlide.getAttribute("data-swiper-slide-index"),10):f=t,e.params.loop?e.slideToLoop(f):e.slideTo(f)}function S(){const{thumbs:i}=e.params;if(x)return!1;x=!0;const t=e.constructor;if(i.swiper instanceof t)e.thumbs.swiper=i.swiper,Object.assign(e.thumbs.swiper.originalParams,{watchSlidesProgress:!0,slideToClickedSlide:!1}),Object.assign(e.thumbs.swiper.params,{watchSlidesProgress:!0,slideToClickedSlide:!1}),e.thumbs.swiper.update();else if(te(i.swiper)){const d=Object.assign({},i.swiper);Object.assign(d,{watchSlidesProgress:!0,slideToClickedSlide:!1}),e.thumbs.swiper=new t(d),_=!0}return e.thumbs.swiper.el.classList.add(e.params.thumbs.thumbsContainerClass),e.thumbs.swiper.on("tap",C),!0}function r(i){const t=e.thumbs.swiper;if(!t||t.destroyed)return;const d=t.params.slidesPerView==="auto"?t.slidesPerViewDynamic():t.params.slidesPerView;let f=1;const u=e.params.thumbs.slideThumbActiveClass;if(e.params.slidesPerView>1&&!e.params.centeredSlides&&(f=e.params.slidesPerView),e.params.thumbs.multipleActiveThumbs||(f=1),f=Math.floor(f),t.slides.forEach(g=>g.classList.remove(u)),t.params.loop||t.params.virtual&&t.params.virtual.enabled)for(let g=0;g<f;g+=1)ae(t.slidesEl,`[data-swiper-slide-index="${e.realIndex+g}"]`).forEach(m=>{m.classList.add(u)});else for(let g=0;g<f;g+=1)t.slides[e.realIndex+g]&&t.slides[e.realIndex+g].classList.add(u);const w=e.params.thumbs.autoScrollOffset,E=w&&!t.params.loop;if(e.realIndex!==t.realIndex||E){const g=t.activeIndex;let m,D;if(t.params.loop){const n=t.slides.filter(P=>P.getAttribute("data-swiper-slide-index")===`${e.realIndex}`)[0];m=t.slides.indexOf(n),D=e.activeIndex>e.previousIndex?"next":"prev"}else m=e.realIndex,D=m>e.previousIndex?"next":"prev";E&&(m+=D==="next"?w:-1*w),t.visibleSlidesIndexes&&t.visibleSlidesIndexes.indexOf(m)<0&&(t.params.centeredSlides?m>g?m=m-Math.floor(d/2)+1:m=m+Math.floor(d/2)-1:m>g&&t.params.slidesPerGroup,t.slideTo(m,i?0:void 0))}}h("beforeInit",()=>{const{thumbs:i}=e.params;if(!(!i||!i.swiper))if(typeof i.swiper=="string"||i.swiper instanceof HTMLElement){const t=W(),d=()=>{const u=typeof i.swiper=="string"?t.querySelector(i.swiper):i.swiper;if(u&&u.swiper)i.swiper=u.swiper,S(),r(!0);else if(u){const w=E=>{i.swiper=E.detail[0],u.removeEventListener("init",w),S(),r(!0),i.swiper.update(),e.update()};u.addEventListener("init",w)}return u},f=()=>{if(e.destroyed)return;d()||requestAnimationFrame(f)};requestAnimationFrame(f)}else S(),r(!0)}),h("slideChange update resize observerUpdate",()=>{r()}),h("setTransition",(i,t)=>{const d=e.thumbs.swiper;!d||d.destroyed||d.setTransition(t)}),h("beforeDestroy",()=>{const i=e.thumbs.swiper;!i||i.destroyed||_&&i.destroy()}),Object.assign(e.thumbs,{init:S,update:r})}function ce(b){let{swiper:e,extendParams:M,emit:h,once:x}=b;M({freeMode:{enabled:!1,momentum:!0,momentumRatio:1,momentumBounce:!0,momentumBounceRatio:1,momentumVelocityRatio:1,sticky:!1,minimumVelocity:.02}});function _(){if(e.params.cssMode)return;const r=e.getTranslate();e.setTranslate(r),e.setTransition(0),e.touchEventsData.velocities.length=0,e.freeMode.onTouchEnd({currentPos:e.rtl?e.translate:-e.translate})}function C(){if(e.params.cssMode)return;const{touchEventsData:r,touches:i}=e;r.velocities.length===0&&r.velocities.push({position:i[e.isHorizontal()?"startX":"startY"],time:r.touchStartTime}),r.velocities.push({position:i[e.isHorizontal()?"currentX":"currentY"],time:V()})}function S(r){let{currentPos:i}=r;if(e.params.cssMode)return;const{params:t,wrapperEl:d,rtlTranslate:f,snapGrid:u,touchEventsData:w}=e,g=V()-w.touchStartTime;if(i<-e.minTranslate()){e.slideTo(e.activeIndex);return}if(i>-e.maxTranslate()){e.slides.length<u.length?e.slideTo(u.length-1):e.slideTo(e.slides.length-1);return}if(t.freeMode.momentum){if(w.velocities.length>1){const y=w.velocities.pop(),T=w.velocities.pop(),B=y.position-T.position,O=y.time-T.time;e.velocity=B/O,e.velocity/=2,Math.abs(e.velocity)<t.freeMode.minimumVelocity&&(e.velocity=0),(O>150||V()-y.time>300)&&(e.velocity=0)}else e.velocity=0;e.velocity*=t.freeMode.momentumVelocityRatio,w.velocities.length=0;let m=1e3*t.freeMode.momentumRatio;const D=e.velocity*m;let n=e.translate+D;f&&(n=-n);let P=!1,L;const A=Math.abs(e.velocity)*20*t.freeMode.momentumBounceRatio;let j;if(n<e.maxTranslate())t.freeMode.momentumBounce?(n+e.maxTranslate()<-A&&(n=e.maxTranslate()-A),L=e.maxTranslate(),P=!0,w.allowMomentumBounce=!0):n=e.maxTranslate(),t.loop&&t.centeredSlides&&(j=!0);else if(n>e.minTranslate())t.freeMode.momentumBounce?(n-e.minTranslate()>A&&(n=e.minTranslate()+A),L=e.minTranslate(),P=!0,w.allowMomentumBounce=!0):n=e.minTranslate(),t.loop&&t.centeredSlides&&(j=!0);else if(t.freeMode.sticky){let y;for(let T=0;T<u.length;T+=1)if(u[T]>-n){y=T;break}Math.abs(u[y]-n)<Math.abs(u[y-1]-n)||e.swipeDirection==="next"?n=u[y]:n=u[y-1],n=-n}if(j&&x("transitionEnd",()=>{e.loopFix()}),e.velocity!==0){if(f?m=Math.abs((-n-e.translate)/e.velocity):m=Math.abs((n-e.translate)/e.velocity),t.freeMode.sticky){const y=Math.abs((f?-n:n)-e.translate),T=e.slidesSizesGrid[e.activeIndex];y<T?m=t.speed:y<2*T?m=t.speed*1.5:m=t.speed*2.5}}else if(t.freeMode.sticky){e.slideToClosest();return}t.freeMode.momentumBounce&&P?(e.updateProgress(L),e.setTransition(m),e.setTranslate(n),e.transitionStart(!0,e.swipeDirection),e.animating=!0,$(d,()=>{!e||e.destroyed||!w.allowMomentumBounce||(h("momentumBounce"),e.setTransition(t.speed),setTimeout(()=>{e.setTranslate(L),$(d,()=>{!e||e.destroyed||e.transitionEnd()})},0))})):e.velocity?(h("_freeModeNoMomentumRelease"),e.updateProgress(n),e.setTransition(m),e.setTranslate(n),e.transitionStart(!0,e.swipeDirection),e.animating||(e.animating=!0,$(d,()=>{!e||e.destroyed||e.transitionEnd()}))):e.updateProgress(n),e.updateActiveIndex(),e.updateSlidesClasses()}else if(t.freeMode.sticky){e.slideToClosest();return}else t.freeMode&&h("_freeModeNoMomentumRelease");(!t.freeMode.momentum||g>=t.longSwipesMs)&&(h("_freeModeStaticRelease"),e.updateProgress(),e.updateActiveIndex(),e.updateSlidesClasses())}Object.assign(e,{freeMode:{onTouchStart:_,onTouchMove:C,onTouchEnd:S}})}const de={class:"main__top top-main"},ue={class:"container"},me=s("div",{class:"top-main__content"},[s("h1",{class:"top-main__title page-title"},"О компании")],-1),pe={class:"page__body"},be={class:"about__data",ref:"about_data"},he={class:"container"},fe={class:"about__body"},_e={class:"about__navigation nav-about",ref:"nav_about"},ge={class:"nav-about__list"},ve={class:"nav-about__list-item"},we={class:"nav-about__list-item"},ye={class:"nav-about__list-item"},Se={class:"nav-about__list-item"},Te={class:"nav-about__list-item"},xe={class:"about__sections"},Ce={class:"swiper",ref:"contentSlider"},Me={class:"swiper-wrapper"},Ee={class:"about-section about-section--beginning",id:"year-1994","data-anchor-section":"year-1994"},ke=s("h2",{class:"about-section__title"},"Начало работы компании",-1),ze=s("div",{class:"about-section__content content"},[s("p",null,"В период с 1994 года мы специализировались на производстве и продаже элитных защитных дверей."),s("p",null,"Мы также являлись официальными дилерами производителей самых надёжных (на тот момент) замков, таких как Ciza, Motura и MUL-T-LOCK. Помимо установки замков и монтажа двери, мы брали на себя обязательства по их гарантийному обслуживанию. "),s("p",null,"В рамках гарантийного обслуживания мы регулярно производили ремонт и замену замков, перекодировку ключей. В случае форс мажорных ситуаций наши мастера производили работы по аварийному вскрытию замков. Важно было не повредить дорогостоящие двери и по возможности сохранить сам замок, чтобы в дальнейшем произвести его рекламацию. Таким образом у нас постепенно появлялся практический опыт настоящих мастеров понимающих в замках и принципах их работы/защиты.")],-1),De={class:"about-section__images"},Pe={class:"about-section__image ibg"},Le=["srcset"],Ie=["src"],Ae={class:"about-section__image ibg"},je=["srcset"],Oe=["src"],Be={class:"about-section about-section--scaling",id:"year-2005","data-anchor-section":"year-2005"},Ve=s("h2",{class:"about-section__title"},[q("Масштабирование компании "),s("span",null,"по вскрытию замков")],-1),$e=s("div",{class:"about-section__content content"},[s("p",null,"Наши услуги по вскрытию замков стали востребованы в разных секторах использования замочных механизмов. В итоге наш опыт и знания нашли своё применение во вскрытии автомобильного транспорта. К 2005 году, мы уже сотрудничали со многим официальным и частным автосалонами в рамках договорных гарантийных обязательств.")],-1),qe={class:"about-section__images"},He={class:"about-section__image ibg"},Ne=["srcset"],Re=["src"],We={class:"about-section about-section--progress",id:"year-2013","data-anchor-section":"year-2013"},Fe=Q('<h2 class="about-section__title"><span>Развитие направления</span> по продаже, обслуживанию и вскрытию сейфов</h2><div class="about-section__content content"><p>В 2012 открылось первое представительство в городе Уфе компании Промет (крупнейший производитель сейфов и сейфового оборудования в России). К тому моменту мы имели значительный опыт по обслуживанию/вскрытию сейфов и защитных механизмов, в том числе повышенного класса взломостойкости. За 19 лет мы заслужили надёжную репутацию партнёра.</p><p>И в 2013 наша компания приняла предложение стать, одним из первых дилеров Промет. Мы вззяли на себя гарантийное обязательство по обслуживанию и вскрытию (в случае необходимости), производимого компанией сейфового оборудования.</p></div><div class="about-section__learning learning-box"><div class="learning-box__caption">В рамках сотрудничества с «Промет» наши специалисты:</div><div class="learning-box__items"><div class="learning-box__item">Посещали специализированные семинары федерального и международного уровня</div><div class="learning-box__item">Изучали замки и защитные системы, банковских хранилищ, кассовых терминалов, банкоматов.</div><div class="learning-box__item">Сделали аварийное вскрытие, работу спец. инструментом ключевой специализацией.</div></div></div>',3),Ge={class:"about-section__images"},Qe={class:"about-section__image ibg"},Ue=["srcset"],Xe=["src"],Ye={class:"about-section__image ibg"},Ke=["srcset"],Je=["src"],Ze={class:"about-section about-section--leaders",id:"year-2014","data-anchor-section":"year-2014"},es=s("h2",{class:"about-section__title"},[q("Лидеры по вскрытию замков "),s("span",null,"в нескольких регионах России")],-1),ss=s("div",{class:"about-section__content content"},[s("p",null,"С 2014 года мы уже обслуживаем на постоянной тендерной основе, такие организации как Сбербанк, ВТБ, Газпром, Сургутнефтегаз и др., в том числе бюджетные предприятия региона.")],-1),ts={class:"about-section__logos"},as={class:"about-section__logo"},is=["srcset"],os=["srcset"],ls=["src"],rs={class:"about-section__logo"},ns=["srcset"],cs=["srcset"],ds=["src"],us={class:"about-section__logo"},ms=["srcset"],ps=["srcset"],bs=["src"],hs={class:"about-section__logo"},fs=["srcset"],_s=["srcset"],gs=["src"],vs={class:"about-section about-section--expansion",id:"year-2024","data-anchor-section":"year-2024"},ws=s("h2",{class:"about-section__title"},[q("Расширение филиальной сети "),s("span",null,"по России")],-1),ys=s("div",{class:"about-section__content content"},[s("p",null,"В настоящее время наша компания активно развивается сотрудничая, как с юридическими так и физическими лицами во многих регионах России и ближнего зарубежья. Мы налаживаем честное профессиональное сотрудничество с мастерами разных городов, передаем им наш опыт и знания в рамках обучения. ")],-1),Ss={class:"about-section__image ibg"},Ts=["srcset"],xs=["src"],Cs=s("div",{class:"swiper-scrollbar"},null,-1);function Ms(b,e,M,h,x,_){const C=N("Breadcrumbs"),S=N("Questions");return U(),F("div",G({class:"page about"},b.$attrs),[s("div",de,[s("div",ue,[H(C,{pageTitle:"О компании"}),me])]),s("div",pe,[s("div",be,[s("div",he,[s("div",fe,[s("nav",_e,[s("ul",ge,[s("li",ve,[s("a",{class:"nav-about__link active",href:"javascript:void(0);","data-anchor-link":"year-1994",onClick:e[0]||(e[0]=r=>_.manualSmoothScroll(r))},"1994")]),s("li",we,[s("a",{class:"nav-about__link",href:"javascript:void(0);","data-anchor-link":"year-2005",onClick:e[1]||(e[1]=r=>_.manualSmoothScroll(r))},"2005")]),s("li",ye,[s("a",{class:"nav-about__link",href:"javascript:void(0);","data-anchor-link":"year-2013",onClick:e[2]||(e[2]=r=>_.manualSmoothScroll(r))},"2013")]),s("li",Se,[s("a",{class:"nav-about__link",href:"javascript:void(0);","data-anchor-link":"year-2014",onClick:e[3]||(e[3]=r=>_.manualSmoothScroll(r))},"2014")]),s("li",Te,[s("a",{class:"nav-about__link",href:"javascript:void(0);","data-anchor-link":"year-2024",onClick:e[4]||(e[4]=r=>_.manualSmoothScroll(r))},"2024")])])],512),s("div",xe,[s("div",Ce,[s("div",Me,[s("section",Ee,[ke,ze,s("div",De,[s("div",Pe,[s("picture",null,[s("source",{srcset:"./images/about/beginning/1.jpg"},null,8,Le),s("img",{src:"./images/about/beginning/1.jpg",alt:"фото",loading:"lazy"},null,8,Ie)])]),s("div",Ae,[s("picture",null,[s("source",{srcset:"./images/about/beginning/2.jpg"},null,8,je),s("img",{src:"./images/about/beginning/2.jpg",alt:"фото"},null,8,Oe)])])])]),s("section",Be,[Ve,$e,s("div",qe,[s("div",He,[s("picture",null,[s("source",{srcset:"./images/about/scaling/1.jpg"},null,8,Ne),s("img",{src:"./images/about/scaling/1.jpg",alt:"фото",loading:"lazy"},null,8,Re)])])])]),s("section",We,[Fe,s("div",Ge,[s("div",Qe,[s("picture",null,[s("source",{srcset:"./images/about/progress/1.jpg"},null,8,Ue),s("img",{src:"./images/about/progress/1.jpg",alt:"фото",loading:"lazy"},null,8,Xe)])]),s("div",Ye,[s("picture",null,[s("source",{srcset:"./images/about/progress/2.jpg"},null,8,Ke),s("img",{src:"./images/about/progress/2.jpg",alt:"фото",loading:"lazy"},null,8,Je)])])])]),s("section",Ze,[es,ss,s("div",ts,[s("div",as,[s("picture",null,[s("source",{srcset:"./images/about/leaders/logo-sber.svg",media:"(min-width: 767.98px)"},null,8,is),s("source",{srcset:"./images/about/leaders/logo-sber-mob.svg",media:"(min-width: 300px)"},null,8,os),s("img",{src:"./images/about/leaders/logo-sber.svg",alt:"сбербанк",loading:"lazy"},null,8,ls)])]),s("div",rs,[s("picture",null,[s("source",{srcset:"./images/about/leaders/logo-vtb.svg",media:"(min-width: 767.98px)"},null,8,ns),s("source",{srcset:"./images/about/leaders/logo-vtb-mob.svg",media:"(min-width: 300px)"},null,8,cs),s("img",{src:"./images/about/leaders/logo-vtb.svg",alt:"втб",loading:"lazy"},null,8,ds)])]),s("div",us,[s("picture",null,[s("source",{srcset:"./images/about/leaders/logo-gazprom.svg",media:"(min-width: 767.98px)"},null,8,ms),s("source",{srcset:"./images/about/leaders/logo-gazprom-mob.svg",media:"(min-width: 300px)"},null,8,ps),s("img",{src:"./images/about/leaders/logo-gazprom.svg",alt:"газпром",loading:"lazy"},null,8,bs)])]),s("div",hs,[s("picture",null,[s("source",{srcset:"./images/about/leaders/logo-surgutneft.svg",media:"(min-width: 767.98px)"},null,8,fs),s("source",{srcset:"./images/about/leaders/logo-surgutneft-mob.svg",media:"(min-width: 300px)"},null,8,_s),s("img",{src:"./images/about/leaders/logo-surgutneft.svg",alt:"сургутнефть",loading:"lazy"},null,8,gs)])])])]),s("section",vs,[ws,ys,s("div",Ss,[s("picture",null,[s("source",{srcset:"./images/about/expansion/map.svg"},null,8,Ts),s("img",{src:"./images/about/expansion/map.svg",alt:"карта",loading:"lazy"},null,8,xs)])])])]),Cs],512)])])])],512),H(S)])],16)}const Es={setup(){Y({title:"О компании"})},props:["defaultCity","declensionCity"],components:{Questions:ie,Breadcrumbs:oe},data(){return{menuObserver:null,contentSlider:null,navSlider:null,count:0}},methods:{manualSmoothScroll(b){var e;if(window.innerWidth>991.98){const M=(e=b.target.closest(".nav-about a"))==null?void 0:e.getAttribute("data-anchor-link");if(!M)return;const h=document.querySelector(`[data-anchor-section="${M}"]`);if(!h)return;b.preventDefault(),h.scrollIntoView({behavior:"smooth"})}},observeNav(){if(window.innerWidth>991.98){let b;const e=x=>{x.forEach(_=>{_.isIntersecting&&_.intersectionRatio>=.1&&(_.target.style.opacity=1,b&&clearTimeout(b),b=setTimeout(function(){var S;this.count++,[...document.querySelectorAll(".nav-about a.active")].forEach(r=>{r.classList.remove("active")});let C=_.target.getAttribute("id");(S=document.querySelector(`.nav-about a[data-anchor-link="${C}"]`))==null||S.classList.add("active")},350))})},M={threshold:[.1]};this.menuObserver=new IntersectionObserver(e,M),document.querySelectorAll("[data-anchor-section]").forEach(x=>{this.menuObserver.observe(x)})}},initSlider(){!this.navSlider&&!this.contentSlider&&(this.navSlider=new R(this.$refs.nav_about,{slideClass:"nav-about__list-item",wrapperClass:"nav-about__list",speed:800,freeMode:!0,slidesPerView:"auto",spaceBetween:20}),this.contentSlider=new R(this.$refs.contentSlider,{modules:[ce,re,ne],slidesPerView:1,slideClass:"about-section",spaceBetween:100,speed:800,autoHeight:!0,watchActiveIndex:!0,spaceBetween:20,scrollbar:{el:".swiper-scrollbar",dragSize:74},thumbs:{swiper:this.navSlider},on:{slideChange:function(b){console.log("change")}}}))},destroySlider(){this.navSlider&&(this.navSlider.destroy(),this.navSlider=null),this.contentSlider&&(this.contentSlider.destroy(),this.contentSlider=null)},checkScreenWidth(){window.matchMedia("(max-width: 991.98px)").matches?this.initSlider():this.destroySlider()},setPositionNavAbout(){if(window.innerWidth>991.98)window.addEventListener("scroll",()=>{const b=document.querySelector(".header");b.classList.contains("hide")?this.$el.querySelector(".nav-about").style.top="0px":this.$el.querySelector(".nav-about").style.top=`${b.clientHeight+20}px`});else return!1},watch(){}},mounted(){this.setPositionNavAbout(),this.observeNav(),this.checkScreenWidth(),window.addEventListener("resize",()=>{this.checkScreenWidth(),this.setPositionNavAbout(),this.observeNav()})}},Ls=X(Es,[["render",Ms]]);export{Ls as default};