import{o as s,c as a,a as t,F as r,f as p,n as f,t as l,_ as m,i as $,r as y,l as x,w as _,e as C,b}from"./index-tuqrtQyl.js";import{S as d}from"./scrollreveal.es-DIZ4IBFj.js";const k={class:"castle-advantages"},w=t("div",{class:"heading"},[t("h2",{class:"heading__title title-sm"},"Преимущества")],-1),B={class:"castle-advantages__items"},A=t("span",{class:"castle-advantages__icon"},null,-1),N={class:"castle-advantages__content"},S={class:"castle-advantages__caption"},V={class:"castle-advantages__description"};function z(u,g,n,h,c,v){return s(),a("div",k,[w,t("div",B,[(s(!0),a(r,null,p(c.castleAdvantages,(e,o)=>(s(),a("div",{class:f(["castle-advantages__item","castle-advantages__item--"+(o+1)])},[A,t("div",N,[t("div",S,l(e.caption),1),t("div",V,l(e.descr),1)])],2))),256))])])}const{castleAdvantages:F}=$,T={components:{},data(){return{castleAdvantages:F}},methods:{animation(){typeof window<"u"&&(d({reset:!1,duration:1500,distance:"15px",mobile:!1}),d().reveal(".castle-advantages__item",{origin:"top",opacity:0}))}},mounted(){this.animation()}},M=m(T,[["render",z]]),D={class:"castle-types"},E=t("div",{class:"heading"},[t("h2",{class:"heading__title title-sm"},"Открываем все виды замков")],-1),L={class:"castle-types__body"},R={class:"castle-item__image"},j={class:"castle-item__logo"},q=["srcset"],G=["src"];function H(u,g,n,h,c,v){const e=y("router-link");return s(),a("div",D,[E,t("div",L,[(s(!0),a(r,null,p(n.count,(o,i)=>(s(),x(e,{class:"castle-item",to:"/castle-card"},{default:_(()=>[t("div",R,[t("div",j,[t("picture",null,[t("source",{srcset:"./images/castle-types/"+n.path+"/type-"+(i+1)+".png"},null,8,q),t("img",{src:"./images/castle-types/card/type-"+(i+1)+".png",alt:"",loading:"lazy"},null,8,G)])])])]),_:2},1024))),256))]),C(e,{class:"castle-types__button btn",to:"/castle-list"},{default:_(()=>[b("Все замки")]),_:1})])}const I={props:["path","count"],components:{},data(){return{}}},O=m(I,[["render",H]]);export{M as C,O as a};