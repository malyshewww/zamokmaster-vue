import{c as f,a as e,e as p,k as u,r as _,o as v,_ as h,B as y}from"./index-Xaz-zfBn.js";import{Q as g}from"./Questions-YGcEJADF.js";import{B as b}from"./Breadcrumbs-DknyUpCb.js";const x={class:"page contacts"},B={class:"main__top top-main"},k={class:"container"},C=e("div",{class:"top-main__content"},[e("h1",{class:"top-main__title page-title"},"Контакты")],-1),I={class:"page__body"},z={class:"contacts__wrapper"},w={class:"container"},E={class:"contacts__body"},M=u('<div class="contacts__info info-contacts"><div class="info-contacts__item"><div class="info-contacts__caption">Расположение</div><div class="info-contacts__content content"><p>Наши сотрудники работают во всех точках города. К вам приедет самый ближайший</p></div></div><div class="info-contacts__item"><div class="info-contacts__caption">Адрес</div><div class="info-contacts__content content"><p>Россия, Москва, улица Красная Пресня, 23, корп. Б, стр. 1</p></div></div><div class="info-contacts__item"><div class="info-contacts__caption">Контакты</div><ul class="info-contacts__list"><li class="info-contacts__list-item"><a class="info-contacts__link" href="tel:+79958881086">+7 (995) 888-10-86</a></li><li class="info-contacts__list-item"><a class="info-contacts__link" href="mailto:hello@zamokmaster.ru">hello@zamokmaster.ru</a></li></ul></div></div>',1),L={class:"contacts__map",id:"map",ref:"map"};function O(c,a,r,l,s,i){const t=_("Breadcrumbs"),n=_("Questions");return v(),f("div",x,[e("div",B,[e("div",k,[p(t,{pageTitle:"Контакты"}),C])]),e("div",I,[e("div",z,[e("div",w,[e("div",E,[M,e("div",L,null,512)])])]),p(n)])])}const Q={setup(){y({title:"Контакты"})},props:["defaultCity","declensionCity"],components:{Questions:g,Breadcrumbs:b},data(){return{}},methods:{initMap(){const c=document.getElementById("map");var a,r;function l(){const s=document.getElementById("map");if(a=new ymaps.Map("map",{center:[55.761462,37.568129],zoom:16,controls:["zoomControl"]},{searchControlProvider:"yandex#search"}),r=new ymaps.Placemark(a.getCenter(),{balloonContent:"г. Москва, улица Красная Пресня, 23кБс1"},{iconLayout:"default#image",iconImageHref:"../../images/icons/map-icon.svg",iconImageSize:[26,30],iconImageOffset:[-10,-30]}),a.geoObjects.add(r),window.innerWidth<991.98){a.behaviors.disable("drag");let i=s.firstChild.getAttribute("class").replace("ymaps-","").replace("-map",""),t=document.querySelector(".ymaps-"+i+"-events-pane");t.innerHTML="Чтобы переместить карту проведите по ней двумя пальцами",t.style.cssText="height: 100%; width: 100%; position: absolute; top: 0px; left: 0px; z-index: 2500; color: #fff; font-size: 22px; font-family: Arial, sans-serif; display: flex; align-items: center; justify-content: center; text-align: center; background-color: rgba(0,0,0,0.45); opacity: 0; transition: opacity 0.45s; padding: 25px; box-sizing: border-box;",s.addEventListener("touchmove",function(n){n.touches.length>1?t.style.opacity="0":t.style.opacity="1"}),s.addEventListener("touchend",function(){t.style.opacity="0"})}}if(c){let s=!1;const i=()=>{var o=document.createElement("script");o.src="https://api-maps.yandex.ru/2.1/?apikey=292672c7-fe24-4469-a901-e4fedb380302&lang=ru_RU",document.body.appendChild(o),s=!0,o.onload=function(){typeof ymaps>"u"||ymaps.ready(l)}};let t={rootMargin:"0px 0px 0px 0px"},n=new IntersectionObserver(([o])=>{const d=o.boundingClientRect,m=o.rootBounds;(!s&&d.top<m.bottom||d.isIntersecting)&&(i(),n.unobserve(o.target))},t);n.observe(c)}}},mounted(){this.initMap()}},S=h(Q,[["render",O]]);export{S as default};
