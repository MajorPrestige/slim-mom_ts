"use strict";(self.webpackChunkslim_mom_ts=self.webpackChunkslim_mom_ts||[]).push([[471],{393:function(e,t,r){r.d(t,{Z:function(){return o}});var n="ErrorMessage_errorMessageBlock__6NGFY",a="ErrorMessage_errorMessageTitle__gIqHi",l="ErrorMessage_errorMessageText__TKpdd",s=r(9101),i=r(184),o=function(e){var t=e.status;return(0,i.jsxs)("div",{className:n,children:[(0,i.jsx)("div",{className:s.Z.boo,children:(0,i.jsx)("div",{className:s.Z.face,id:"face"})}),(0,i.jsx)("p",{className:a,children:"\u0429\u043e\u0441\u044c \u043f\u0456\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a..."}),(0,i.jsx)("p",{className:l,children:t})]})}},6891:function(e,t,r){r.d(t,{Z:function(){return s}});var n=r(2791),a={overlay:"Modal_overlay__b+zEz",overlayDairyPage:"Modal_overlayDairyPage__h20Vb",modalDairyPage:"Modal_modalDairyPage__wNlXX",modal:"Modal_modal__yEgVW",closeM:"Modal_closeM__mJ3AX",closeOther:"Modal_closeOther__8w+rp",mobileClose:"Modal_mobileClose__wiSFp"},l=r(184),s=function(e){var t=e.setModalOpen,r=e.overlayClass,s=void 0===r?"overlay":r,i=e.modalClass,o=void 0===i?"modal":i,d=e.children;function c(){document.querySelector("body").classList.remove("no-scroll")}(0,n.useEffect)((function(){var e=function(e){"Escape"===e.code&&(c(),t(!1))};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[t]);var u=function(){c(),t(!1)};return(0,l.jsx)("div",{className:a[s],onClick:function(e){e.target===e.currentTarget&&(c(),t(!1))},children:(0,l.jsxs)("div",{className:a[o],children:[(0,l.jsx)("div",{className:a.mobileClose,children:(0,l.jsx)("span",{onClick:u,className:a.closeM})}),(0,l.jsx)("span",{onClick:u,className:a.closeOther}),d]})})}},1373:function(e,t,r){r.d(t,{Z:function(){return l}});r(2791);var n={btn:"Button_btn__cIIwi",btnLight:"Button_btnLight__TSLTb",btnPlus:"Button_btnPlus__VRApt",btnDairyPage:"Button_btnDairyPage__2MLhY"},a=r(184),l=function(e){var t=e.text,r=void 0===t?"+":t,l=e.type,s=void 0===l?"submit":l,i=e.btnClass,o=void 0===i?"btnPlus":i,d=e.handleClick;return(0,a.jsx)("button",{className:n[o],onClick:d,type:s,children:r})}},7410:function(e,t,r){r.d(t,{Z:function(){return n.Z}});var n=r(1373)},8110:function(e,t,r){r.d(t,{E:function(){return n}});var n={username:{name:"username",type:"text",placeholder:"\u0406\u043c\u02bc\u044f*",title:"\u041d\u0430\u0437\u0432\u0430 \u043c\u0430\u0454 \u0441\u043a\u043b\u0430\u0434\u0430\u0442\u0438\u0441\u044f \u043d\u0435 \u043c\u0435\u043d\u0448\u0435, \u043d\u0456\u0436 \u0437 3 \u0441\u0438\u043c\u0432\u043e\u043b\u0456\u0432"},email:{name:"email",type:"text",placeholder:"\u0415\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u0430 \u043f\u043e\u0448\u0442\u0430*"},password:{name:"password",type:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c*",title:"\u041f\u0430\u0440\u043e\u043b\u044c \u043c\u0430\u0454 \u0431\u0443\u0442\u0438 \u043d\u0435 \u043c\u0435\u043d\u0448\u0435 8 \u0441\u0438\u043c\u0432\u043e\u043b\u0456\u0432"},height:{name:"height",type:"text",placeholder:"\u0417\u0440\u0456\u0441\u0442*",title:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0434\u0456\u0439\u0441\u043d\u0435 \u0446\u0456\u043b\u0435 \u0447\u0438\u0441\u043b\u043e \u0432\u0456\u0434 100 \u0434\u043e 250."},age:{name:"age",type:"text",placeholder:"\u0412\u0456\u043a*",title:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0434\u0456\u0439\u0441\u043d\u0435 \u0447\u0438\u0441\u043b\u043e \u0432\u0456\u0434 18 \u0434\u043e 100."},weight:{name:"weight",type:"text",placeholder:"\u041f\u043e\u0442\u043e\u0447\u043d\u0430 \u0432\u0430\u0433\u0430*",title:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0434\u0456\u0439\u0441\u043d\u0435 \u0446\u0456\u043b\u0435 \u0447\u0438\u0441\u043b\u043e \u0432\u0456\u0434 20 \u0434\u043e 250."},desiredWeight:{name:"desiredWeight",type:"text",placeholder:"\u0411\u0430\u0436\u0430\u043d\u0430 \u0432\u0430\u0433\u0430*",title:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0434\u0456\u0439\u0441\u043d\u0435 \u0446\u0456\u043b\u0435 \u0447\u0438\u0441\u043b\u043e \u0432\u0456\u0434 20 \u0434\u043e 500."},bloodType:{name:"blodtype",type:"text",placeholder:"\u0413\u0440\u0443\u043f\u0430 \u043a\u0440\u043e\u0432\u0456*",disabled:!0},filter:{type:"text",name:"filter",placeholder:"\u0424\u0456\u043b\u044c\u0442\u0440\u0443\u0432\u0430\u0442\u0438 \u0437\u0430 \u043d\u0430\u0437\u0432\u043e\u044e"}}},6472:function(e,t,r){r(2791);var n=r(184);t.Z=function(e){var t=e.type,r=e.name,a=e.value,l=e.handleChange,s=e.placeholder,i=e.required,o=e.pattern,d=e.title,c=e.disabled,u=e.children;return(0,n.jsxs)("label",{children:[(0,n.jsx)("input",{className:"tracking-[1px]transition-all leading-normal mb-10 inline-block h-12 w-full rounded-none border-b-[1px] border-solid  border-l-transparent border-r-transparent border-t-transparent border-b-border-color bg-transparent text-[14px] font-normal text-second-text-color shadow-none duration-200 placeholder:text-[14px]  placeholder:text-second-text-color focus:border-b-accent-color focus:bg-transparent focus:outline-w0 tablet:w-[240px]",type:t,name:r,value:a,onChange:l,placeholder:s,required:i,pattern:o,title:d,disabled:c,autoComplete:"off"}),u]})}},1571:function(e,t,r){r.d(t,{Z:function(){return x}});var n=r(1413),a=r(9439),l=r(2791),s=r(3063),i=r(9911),o=r(6382),d={container_sidebar:"SideBar_container_sidebar__YEww0",sum:"SideBar_sum__Jv1xj",title_sidebar:"SideBar_title_sidebar__7GDyI",item_sidebar:"SideBar_item_sidebar__lDXgx",text_sidebar_food:"SideBar_text_sidebar_food__Pg58D",menuGroupList:"SideBar_menuGroupList__Xvf-8",menuGroupItems:"SideBar_menuGroupItems__PYGmW"},c=r(6472),u=r(8110),m=r(3704),h=r(8232),_=r(3351),f=function(e){return e.dairyCalendar.date},v=r(184),x=function(){var e=(0,s.Z)(f),t=(0,s.Z)(h.U6),r=(0,s.Z)(m.M7),x=(0,s.Z)(m.SP),y=(0,s.Z)(m.vO),p=(0,s.Z)(m.TW),j=(0,s.Z)(m.jj),b=(0,s.Z)(m.Wm),g=(0,s.Z)(m.oj),N=(0,s.Z)(m.EI),D=(0,i.Z)(),w=(0,l.useState)([]),P=(0,a.Z)(w,2),Z=P[0],M=P[1];(0,l.useEffect)((function(){e&&D((0,_.Wd)({date:e}))}),[D,e,t]),(0,l.useEffect)((function(){t&&M(t)}),[t]);return(0,v.jsxs)("div",{className:d.container_sidebar,children:[(0,v.jsxs)("div",{className:d.sum,children:[(0,v.jsxs)("h3",{className:d.title_sidebar,children:["\u0420\u0435\u0437\u044e\u043c\u0435 \u0437\u0430 ",e]}),(0,v.jsxs)("ul",{className:"w-[280px]",children:[(0,v.jsxs)("li",{className:d.item_sidebar,children:[(0,v.jsx)("p",{className:d.text_sidebar_sum,children:"\u0417\u0430\u043b\u0438\u0448\u0438\u043b\u043e\u0441\u044f"}),(0,v.jsx)("span",{className:"desktop:mr-10",children:r?Math.floor(r)+" kcal":j?Math.floor(j)+" kcal":"000 kcal"})]}),(0,v.jsxs)("li",{className:d.item_sidebar,children:[(0,v.jsx)("p",{className:d.text_sidebar,children:"\u0421\u043f\u043e\u0436\u0438\u043b\u043e\u0441\u044f"}),(0,v.jsx)("span",{className:"desktop:mr-10",children:x?Math.floor(x)+" kcal":b?Math.floor(b)+" kcal":"000 kcal"})]}),(0,v.jsxs)("li",{className:d.item_sidebar,children:[(0,v.jsx)("p",{className:d.text_sidebar,children:"\u0414\u043e\u0431\u043e\u0432\u0430 \u043d\u043e\u0440\u043c\u0430"}),(0,v.jsx)("span",{className:"desktop:mr-10",children:y?Math.floor(y)+" kcal":g?Math.floor(g)+" kcal":"000 kcal"})]}),(0,v.jsxs)("li",{className:d.item_sidebar,children:[(0,v.jsx)("p",{className:d.text_sidebar,children:"% \u0432\u0456\u0434 \u043d\u043e\u0440\u043c\u0438"}),(0,v.jsx)("span",{className:"desktop:mr-10",children:p?Math.floor(p)+" %":N?Math.floor(N)+" %":"0 %"})]})]})]}),(0,v.jsxs)("div",{className:"w-[280px]",children:[(0,v.jsx)("h3",{className:d.title_sidebar,children:"\u041d\u0435 \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u043e\u0432\u0430\u043d\u0430 \u0457\u0436\u0430"}),(null===t||void 0===t?void 0:t.length)>0&&(0,v.jsx)(c.Z,(0,n.Z)({handleChange:function(e){var r=t.filter((function(t){return t.includes(e.target.value)}));M(r)}},u.E.filter)),(null===t||void 0===t?void 0:t.length)>0&&(0,v.jsx)(v.Fragment,{children:(0,v.jsx)("ol",{className:d.menuGroupList,children:Z.map((function(e){return(0,v.jsx)("li",{className:d.menuGroupItems,children:e},(0,o.x0)())}))})}),0===(null===t||void 0===t?void 0:t.length)&&(0,v.jsx)("p",{className:d.text_sidebar_food,children:"\u0422\u0443\u0442 \u0432\u0456\u0434\u043e\u0431\u0440\u0430\u0436\u0430\u0442\u0438\u043c\u0435\u0442\u044c\u0441\u044f \u0432\u0430\u0448 \u0440\u0430\u0446\u0456\u043e\u043d."})]})]})}},9471:function(e,t,r){r.r(t),r.d(t,{default:function(){return ke}});var n,a,l,s=r(9439),i=r(4805),o=r(2791),d=r(9434),c="DairyPage_wrapper__INA+u",u="DairyPage_overlay__EsMgn",m="DairyPage_btn__LEm1h",h=r(1571),_=r(7410),f=r(1134),v=r(5970),x=r(9911),y=r(3063),p="DiaryAddProductForm_form__72n0e",j="DiaryAddProductForm_btn__Z0Nm7",b="DiaryAddProductForm_errorOverlay__oJw8d",g="DiaryAddProductForm_errorMessage__qgNon",N=r(1373),D=r(6891),w=r(393),P=r(1413),Z="DiaryChooseProductList_overlay__5XlnC",M="DiaryChooseProductList_headTitle__LPGci",C="DiaryChooseProductList_list__ccqab",k="DiaryChooseProductList_item__IKqKE",O="DiaryChooseProductList_wrapper__FUGQF",L="DiaryChooseProductList_title__Fgj-Y",S="DiaryChooseProductList_weight__h+CuP",F="DiaryChooseProductList_kcal__eIhYW",E=r(643),I=r(184),W=function(){return(0,I.jsx)("div",{className:"flex, justify-center items-center h-[200px] bg-main-color",children:(0,I.jsx)(E.iT,{height:"50",width:"50",color:"#fc842d",secondaryColor:"transparent"})})},q=function(e){return e.product.items},G=function(e){return e.product.loading},B=function(e){return e.product.error},A=r(3351),R=function(e){var t=e.handleClickClose,r=e.setModalOpen,n=(0,x.Z)(),a=(0,i.useMediaQuery)({maxWidth:767}),l=(0,o.useState)(!1),d=(0,s.Z)(l,2),c=d[0],u=d[1],m=(0,y.Z)(q),h=(0,y.Z)((function(e){return e.dairyCalendar})),_=(0,y.Z)(G);return(0,I.jsx)(I.Fragment,{children:!0===_?(0,I.jsx)(W,{}):(0,I.jsx)(I.Fragment,{children:!c&&(0,I.jsxs)("div",{className:Z,children:[(0,I.jsx)("h2",{className:M,children:"\u0412\u0438\u0431\u0435\u0440\u0456\u0442\u044c \u043f\u0440\u043e\u0434\u0443\u043a\u0442:"}),(0,I.jsx)("ul",{className:C,children:null===m||void 0===m?void 0:m.map((function(e){var l=e._id,s=e.title,i=e.calories,o=e.weight;return(0,I.jsxs)("li",{className:k,onClick:function(){return e=l,n((0,A.sL)((0,P.Z)((0,P.Z)({},h),{},{productId:e}))),u(!1),t(!1),void(a&&(r(!1),document.querySelector("body").classList.remove("no-scroll")));var e},children:[(0,I.jsxs)("p",{className:L,children:[" ",s.ua]}),(0,I.jsxs)("div",{className:O,children:[(0,I.jsxs)("p",{className:S,children:[o," \u0433\u0440"]}),(0,I.jsxs)("p",{className:F,children:[i," \u043a\u043a\u0430\u043b"]})]})]},l)}))})]})})})},T=["title","titleId"];function Q(){return Q=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Q.apply(this,arguments)}function z(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function Y(e,t){var r=e.title,s=e.titleId,i=z(e,T);return o.createElement("svg",Q({width:12,height:12,fill:"#f84147",id:"icon-warning",viewBox:"0 0 32 32",ref:t,"aria-labelledby":s},i),r?o.createElement("title",{id:s},r):null,n||(n=o.createElement("path",{d:"M16 2.899l13.409 26.726h-26.819l13.409-26.726zM16 0c-0.69 0-1.379 0.465-1.903 1.395l-13.659 27.222c-1.046 1.86-0.156 3.383 1.978 3.383h27.166c2.134 0 3.025-1.522 1.978-3.383h0l-13.659-27.222c-0.523-0.93-1.213-1.395-1.903-1.395v0z"})),a||(a=o.createElement("path",{d:"M18 26c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"})),l||(l=o.createElement("path",{d:"M16 22c-1.105 0-2-0.895-2-2v-6c0-1.105 0.895-2 2-2s2 0.895 2 2v6c0 1.105-0.895 2-2 2z"})))}var X,J=o.forwardRef(Y),U=(r.p,r(6472)),V=r(7442),K=r(949),H=function(e){var t=e.setModalOpen,r=(0,x.Z)(),n=(0,o.useState)(!1),a=(0,s.Z)(n,2),l=a[0],d=a[1],c=(0,i.useMediaQuery)({maxWidth:767}),u=(0,i.useMediaQuery)({minWidth:768}),m=(0,y.Z)(B),h=(0,f.cI)({defaultValues:{query:"",weight:""}}),_=h.control,P=h.handleSubmit,Z=h.reset,M=h.formState.errors;return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsxs)("form",{className:p,onSubmit:P((function(e){if(r((0,V.A)(e.query)),r((0,K.nr)(Number(e.weight))),!0===l)return d(!1),d(!0),void Z();d(!l),Z()})),children:[(0,I.jsxs)("div",{className:"relative",children:[(0,I.jsx)(f.Qr,{control:_,name:"query",render:function(e){var t=e.field,r=t.onChange,n=t.value;return(0,I.jsx)(U.Z,{value:n,placeholder:"\u041d\u0430\u0437\u0432\u0430 \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u0443 (\u0420\u0438\u0441)",name:"query",control:_,handleChange:r})},rules:{required:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u043d\u0430\u0437\u0432\u0443 \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u0443"}}),(0,I.jsx)(v.B,{errors:M,name:"query",render:function(e){var t=e.message;return(0,I.jsxs)("div",{className:b,children:[(0,I.jsx)(J,{}),(0,I.jsx)("p",{className:g,children:t})]})}})]}),(0,I.jsxs)("div",{className:"relative",children:[(0,I.jsx)(f.Qr,{control:_,name:"weight",render:function(e){var t=e.field,r=t.onChange,n=t.value;return(0,I.jsx)(U.Z,{value:n,placeholder:"\u0412\u0430\u0433\u0430 (\u0433\u0440)",name:"weight",pattern:"[0-9]+",handleChange:r})},rules:{required:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0432\u0430\u0433\u0443 \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u0443"}}),(0,I.jsx)(v.B,{errors:M,name:"weight",render:function(e){var t=e.message;return(0,I.jsxs)("div",{className:b,children:[(0,I.jsx)(J,{}),(0,I.jsx)("p",{className:g,children:t})]})}})]}),(0,I.jsxs)("div",{className:j,children:[c&&(0,I.jsx)(N.Z,{text:"\u0414\u043e\u0434\u0430\u0442\u0438",btnClass:"btn"}),u&&(0,I.jsx)(N.Z,{text:"+",btnClass:"btnPlus"})]})]}),l&&m&&(0,I.jsx)(D.Z,{setModalOpen:d,children:(0,I.jsx)(w.Z,{status:m.data.message})}),l&&(0,I.jsx)(R,{setModalOpen:t,handleClickClose:function(e){d(e)}})]})},$=r(9513),ee=r.n($),te=r(2426),re=r.n(te),ne=r(5952),ae=(r(8639),"DiaryDate\u0421alendar_btnInput__d0154"),le="DiaryDate\u0421alendar_dateOverlay__0WzDh",se=function(){var e=(0,x.Z)(),t=(0,y.Z)((function(e){return e.dairyCalendar.date})),r=(0,o.useState)(!1),n=(0,s.Z)(r,2),a=n[0],l=n[1],i=(0,o.useState)(new Date),d=(0,s.Z)(i,2),c=d[0],u=d[1];(0,o.useEffect)((function(){e(t?(0,K.As)(t):(0,K.As)(re()(new Date).format("yyyy-MM-DD")))}),[]);return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)("button",{className:ae,onClick:function(e){e.preventDefault(),l(!a)},children:re()(t).format("DD-MM-yyyy")}),a&&(0,I.jsx)("div",{className:le,children:(0,I.jsx)(ee(),{selected:c,onChange:function(t){u(t),l(!a),e((0,K.As)(re()(t).format("yyyy-MM-DD"))),e((0,A.Wd)({date:re()(t).format("yyyy-MM-DD")}))},locale:ne.Z,maxDate:new Date,inline:!0})})]})},ie={list:"DiaryProductsList_list__Jc0Rv"},oe="DiaryProductsListItem_item__9H0W0",de="DiaryProductsListItem_wrapper__yx7FO",ce="DiaryProductsListItem_title__4RWxm",ue="DiaryProductsListItem_weight__PWfjZ",me="DiaryProductsListItem_kcal__L0c3T",he="DiaryProductsListItem_btnRemove__ZDqSi",_e=["title","titleId"];function fe(){return fe=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},fe.apply(this,arguments)}function ve(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function xe(e,t){var r=e.title,n=e.titleId,a=ve(e,_e);return o.createElement("svg",fe({width:14,height:14,fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":n},a),r?o.createElement("title",{id:n},r):null,X||(X=o.createElement("path",{d:"m1 1 12 12M1 13 13 1",stroke:"#9B9FAA",strokeWidth:2})))}var ye=o.forwardRef(xe),pe=(r.p,r(3704)),je=function(){var e=(0,x.Z)(),t=(0,y.Z)(pe.Ni);return(0,I.jsx)(I.Fragment,{children:t&&t.map((function(t){var r=t.id,n=t.title,a=t.weight,l=t.kcal;return(0,I.jsxs)("li",{className:oe,children:[(0,I.jsx)("p",{className:ce,children:n}),(0,I.jsxs)("div",{className:de,children:[(0,I.jsxs)("p",{className:ue,children:[a," \u0433\u0440"]}),(0,I.jsxs)("p",{className:me,children:[Math.round(l)," \u043a\u043a\u0430\u043b"]})]}),(0,I.jsx)("button",{className:he,type:"button",onClick:function(){return function(t){e((0,A.gr)(t))}(r)},children:(0,I.jsx)(ye,{})})]},r)}))})},be=function(){var e=(0,y.Z)(pe.Cp);return!0===(0,y.Z)(G)?null:(0,I.jsx)(I.Fragment,{children:!0===e?(0,I.jsx)(W,{}):(0,I.jsx)("div",{className:ie.overlay,children:(0,I.jsx)("ul",{className:ie.list,children:(0,I.jsx)(je,{})})})})},ge=r(1087),Ne="GreetingForm_wrapper__JQQab",De="GreetingForm_title__Kdygm",we="GreetingForm_text__xa0dR",Pe="GreetingForm_btn__IDzco",Ze="GreetingForm_btnGreeting__D3Zes",Me=r(8232),Ce=function(){var e=(0,y.Z)(Me.vW);return(0,I.jsxs)("div",{className:Ne,children:[(0,I.jsxs)("h1",{className:De,children:["\u0414\u043e\u0431\u0440\u0438\u0439 \u0434\u0435\u043d\u044c, ",e,"!"]}),(0,I.jsx)("p",{className:we,children:"\u041d\u0430\u0448 \u0434\u043e\u0434\u0430\u0442\u043e\u043a \u043f\u0440\u043e\u043f\u043e\u043d\u0443\u0454 \u0432\u0430\u043c \u0434\u043e\u0442\u0440\u0438\u043c\u0443\u0432\u0430\u0442\u0438\u0441\u044f \u0434\u0456\u0454\u0442\u0438 \u0442\u0430 \u0440\u043e\u0437\u0440\u0430\u0445\u0443\u0432\u0430\u0442\u0438 \u043a\u0430\u043b\u043e\u0440\u0456\u0457. \u041f\u0435\u0440\u0435\u0439\u0434\u0456\u0442\u044c \u0434\u043e \u0440\u043e\u0437\u0434\u0456\u043b\u0443 \u043a\u0430\u043b\u044c\u043a\u0443\u043b\u044f\u0442\u043e\u0440 \u0442\u0430 \u0440\u043e\u0437\u0440\u0430\u0445\u0443\u0439\u0442\u0435 \u0434\u0456\u0454\u0442\u0443."}),(0,I.jsx)("div",{className:Pe,children:(0,I.jsx)(ge.rU,{to:"/calculator-calories",className:Ze,children:"\u0420\u043e\u0437\u0440\u0430\u0445\u0443\u0432\u0430\u0442\u0438 \u0434\u0456\u0454\u0442\u0443"})})]})},ke=function(){var e=(0,i.useMediaQuery)({maxWidth:767}),t=(0,d.v9)(Me.U6),r=0===(null===t||void 0===t?void 0:t.length),n=(0,i.useMediaQuery)({minWidth:767}),a=(0,o.useState)(!1),l=(0,s.Z)(a,2),f=l[0],v=l[1];return(0,I.jsxs)("main",{className:c,children:[r&&(0,I.jsx)(Ce,{}),!r&&(0,I.jsxs)("div",{className:u,children:[(0,I.jsxs)("div",{children:[(0,I.jsx)(se,{}),n&&(0,I.jsx)(H,{}),(0,I.jsx)(be,{})]}),e&&(0,I.jsx)("div",{className:m,children:(0,I.jsx)(_.Z,{text:"+",btnClass:"btnPlus",type:"button",handleClick:function(){document.querySelector("body").classList.add("no-scroll"),v(!0)}})}),f&&(0,I.jsx)(D.Z,{setModalOpen:v,overlayClass:"overlayDairyPage",modalClass:"modalDairyPage",children:(0,I.jsx)(H,{setModalOpen:v})})]}),(0,I.jsx)(h.Z,{})]})}},3704:function(e,t,r){r.d(t,{Cp:function(){return a},EI:function(){return m},M7:function(){return l},Ni:function(){return n},SP:function(){return s},TW:function(){return o},Wm:function(){return c},jj:function(){return d},oj:function(){return u},vO:function(){return i}});var n=function(e){return e.dayProduct.eatenProducts},a=function(e){return e.dayProduct.loading},l=function(e){var t,r,n;return null===(t=e.dayProduct)||void 0===t||null===(r=t.aboutDay)||void 0===r||null===(n=r.daySummary)||void 0===n?void 0:n.kcalLeft},s=function(e){var t,r,n;return null===(t=e.dayProduct)||void 0===t||null===(r=t.aboutDay)||void 0===r||null===(n=r.daySummary)||void 0===n?void 0:n.kcalConsumed},i=function(e){var t,r,n;return null===(t=e.dayProduct)||void 0===t||null===(r=t.aboutDay)||void 0===r||null===(n=r.daySummary)||void 0===n?void 0:n.dailyRate},o=function(e){var t,r,n;return null===(t=e.dayProduct)||void 0===t||null===(r=t.aboutDay)||void 0===r||null===(n=r.daySummary)||void 0===n?void 0:n.percentsOfDailyRate},d=function(e){var t,r;return null===(t=e.dayProduct)||void 0===t||null===(r=t.aboutDay)||void 0===r?void 0:r.kcalLeft},c=function(e){var t,r;return null===(t=e.dayProduct)||void 0===t||null===(r=t.aboutDay)||void 0===r?void 0:r.kcalConsumed},u=function(e){var t,r;return null===(t=e.dayProduct)||void 0===t||null===(r=t.aboutDay)||void 0===r?void 0:r.dailyRate},m=function(e){var t,r;return null===(t=e.dayProduct)||void 0===t||null===(r=t.aboutDay)||void 0===r?void 0:r.percentsOfDailyRate}},9101:function(e,t){t.Z={container:"NotFound_container__19Mn0",title:"NotFound_title__6i5Ni",txt:"NotFound_txt__Y8VtC",booWrapper:"NotFound_booWrapper__XjjEl",boo:"NotFound_boo__4UQ+D",floating:"NotFound_floating__LYRSn",face:"NotFound_face__1yLkc",shadow:"NotFound_shadow__90Xe8",floatingShadow:"NotFound_floatingShadow__qkzY4"}}}]);
//# sourceMappingURL=471.0f0e0277.chunk.js.map