import{p as m,j as g,q as v,a as s,c as a,b as t,f as n,d as y,t as c,F as _,h as d,u as f,r as b,i as B,w as C,l as k}from"./index-C9Fe3rxz.js";import{S}from"./Sidebar-B6WcEjFJ.js";import{_ as x}from"./Breadcrumbs-BNexY1ub.js";const L={class:"page castle-list"},N={class:"main__top top-main"},V={class:"container"},$={class:"top-main__content"},w={class:"top-main__body"},A={class:"top-main__title page-title"},F=t("p",{class:"top-main__sub-title"},"Профессиональное вскрытие замков. Официально, предоставляем все документы",-1),T=t("a",{class:"btn-phone btn",href:"tel:+79958881086"},[t("div",{class:"btn-phone__text"},"+7 (995) 888-10-86"),t("div",{class:"btn-phone__icon"})],-1),U={class:"page__body"},j={class:"container"},q={class:"castle-list__body page-layout"},z={class:"castle-list__categories section-groups"},D={class:"castle-list__section category-castle"},E={class:"heading"},H={class:"heading__title title-sm"},R={class:"category-castle__items"},G={class:"category-castle__image"},I={class:"category-castle__logo"},J=["srcset"],K=["src","alt"],M={class:"category-castle__name"},O=t("div",{class:"castle-list__content content"},[t("p",null,"ABUS — это немецкая компания, которая с 1924 года разрабатывает охранные системы. Марка ABUS позиционирует себя как лидером уникальных изобретений, у которых запатентованные сплавы сверхпрочных металлов."),t("p",null,"Компания входит независимую группу предприятий, работающую по всему миру в области механических и электронных систем безопасности. Замки Абус использоваются как для внутрених так и наружних помещений и всепогодных условий."),t("p",null,"Область приминения замков Абус очень обширна, начиная защиты вашего самоката, велосипеда, мотоцикла, заканчивая защитой вашего гаража, бытовых и промышленных сооружений. Они просты в использовании и при этом очень прочные, эффективно защищают от взлома. Также вся продукция проходит тестирование на заморозку жидким азотом. После заморозки металл не теряет своих свойств и сопротивляется взлому.")],-1),Z={__name:"CastleList",props:["defaultCity","declensionCity"],setup(r){const p=m(),l=g(()=>p.meta.title);v({title:l.value,meta:[{name:"description",content:`Описание на странице ${l.value}`}]});const{castleList:h}=k;return(P,Q)=>{const u=b("router-link");return s(),a("div",L,[t("div",N,[t("div",V,[n(x,{pageTitle:"Список замков"}),t("div",$,[t("div",w,[t("h1",A,[y("Вскрытие всех видов замков "),t("span",null,c(r.declensionCity),1)]),F]),T])])]),t("div",U,[t("div",j,[t("div",q,[t("div",z,[(s(!0),a(_,null,d(f(h),e=>(s(),a("section",D,[t("div",E,[t("h2",H,c(e.title),1)]),t("div",R,[(s(!0),a(_,null,d(e.children,(i,o)=>(s(),B(u,{class:"category-castle__item",to:`/castle-list/${o}`},{default:C(()=>[t("div",G,[t("div",I,[t("picture",null,[t("source",{srcset:"/images/castlelist/"+e.path+"/"+(o+1)+".png"},null,8,J),t("img",{src:"/images/castlelist/"+e.path+"/"+(o+1)+".png",alt:i,loading:"lazy"},null,8,K)])])]),t("div",M,c(i),1)]),_:2},1032,["to"]))),256))])]))),256)),O]),n(S)])])])])}}};export{Z as default};