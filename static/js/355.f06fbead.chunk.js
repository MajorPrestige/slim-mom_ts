"use strict";(self.webpackChunkslim_mom_ts=self.webpackChunkslim_mom_ts||[]).push([[355],{393:function(e,t,n){n.d(t,{Z:function(){return i}});var r="ErrorMessage_errorMessageBlock__6NGFY",a="ErrorMessage_errorMessageTitle__gIqHi",o="ErrorMessage_errorMessageText__TKpdd",l=n(9101),s=n(184),i=function(e){var t=e.status;return(0,s.jsxs)("div",{className:r,children:[(0,s.jsx)("div",{className:l.Z.boo,children:(0,s.jsx)("div",{className:l.Z.face,id:"face"})}),(0,s.jsx)("p",{className:a,children:"\u0429\u043e\u0441\u044c \u043f\u0456\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a..."}),(0,s.jsx)("p",{className:o,children:t})]})}},6891:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(2791),a={overlay:"Modal_overlay__b+zEz",overlayDairyPage:"Modal_overlayDairyPage__h20Vb",modalDairyPage:"Modal_modalDairyPage__wNlXX",modal:"Modal_modal__yEgVW",closeM:"Modal_closeM__mJ3AX",closeOther:"Modal_closeOther__8w+rp",mobileClose:"Modal_mobileClose__wiSFp"},o=n(184),l=function(e){var t=e.setModalOpen,n=e.overlayClass,l=void 0===n?"overlay":n,s=e.modalClass,i=void 0===s?"modal":s,d=e.children;function c(){document.querySelector("body").classList.remove("no-scroll")}(0,r.useEffect)((function(){var e=function(e){"Escape"===e.code&&(c(),t(!1))};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[t]);var u=function(){c(),t(!1)};return(0,o.jsx)("div",{className:a[l],onClick:function(e){e.target===e.currentTarget&&(c(),t(!1))},children:(0,o.jsxs)("div",{className:a[i],children:[(0,o.jsx)("div",{className:a.mobileClose,children:(0,o.jsx)("span",{onClick:u,className:a.closeM})}),(0,o.jsx)("span",{onClick:u,className:a.closeOther}),d]})})}},1373:function(e,t,n){n.d(t,{Z:function(){return o}});n(2791);var r={btn:"Button_btn__cIIwi",btnLight:"Button_btnLight__TSLTb",btnPlus:"Button_btnPlus__VRApt",btnDairyPage:"Button_btnDairyPage__2MLhY"},a=n(184),o=function(e){var t=e.text,n=void 0===t?"+":t,o=e.type,l=void 0===o?"submit":o,s=e.btnClass,i=void 0===s?"btnPlus":s,d=e.handleClick;return(0,a.jsx)("button",{className:r[i],onClick:d,type:l,children:n})}},7410:function(e,t,n){n.d(t,{Z:function(){return r.Z}});var r=n(1373)},8670:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(184),a=function(e){var t=e.children;return(0,r.jsx)("div",{className:"mx-auto pr-5 pl-5 mobile:w-[480px] tablet:w-[768px] tablet:px-8 desktop:w-[1280px] desktop:px-4 ",children:t})}},5387:function(e,t,n){n(2791);var r=n(184);t.Z=function(e){var t=e.type,n=e.name,a=e.value,o=e.handleChange,l=e.placeholder,s=e.required,i=e.pattern,d=e.title;return(0,r.jsxs)("label",{className:"group relative mb-10 inline-block h-12",children:[(0,r.jsx)("input",{className:"peer absolute top-0 left-0 mb-10 inline-block h-12 w-full rounded-none border-b-[1px] border-solid border-l-transparent border-r-transparent border-t-transparent border-b-border-color bg-transparent text-[14px] font-normal leading-normal tracking-[1px]  text-second-text-color shadow-none transition-all duration-200 focus:border-b-accent-color focus:bg-transparent focus:outline-w0 tablet:w-[240px]",type:t,name:n,value:a,onChange:o,required:s,pattern:i,title:d,autoComplete:"off"}),(0,r.jsx)("span",{className:"pointer-events-none absolute top-[1px] left-[1px] mt-[17px] inline-block text-[14px] text-second-text-color duration-300 peer-valid:translate-x-[-10px] peer-valid:translate-y-[-32px] peer-focus:translate-x-[-10px] peer-focus:translate-y-[-32px]",children:l})]})}},8110:function(e,t,n){n.d(t,{E:function(){return r}});var r={name:{name:"name",type:"text",placeholder:"\u0406\u043c\u02bc\u044f*",title:"\u041d\u0430\u0437\u0432\u0430 \u043c\u0430\u0454 \u0441\u043a\u043b\u0430\u0434\u0430\u0442\u0438\u0441\u044f \u043d\u0435 \u043c\u0435\u043d\u0448\u0435, \u043d\u0456\u0436 \u0437 3 \u0441\u0438\u043c\u0432\u043e\u043b\u0456\u0432",required:!0},email:{name:"email",type:"text",placeholder:"\u0415\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u0430 \u043f\u043e\u0448\u0442\u0430*",required:!0},password:{name:"password",type:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c (\u0432\u0456\u0434 8 \u0441\u0438\u043c\u0432\u043e\u043b\u0456\u0432)*",required:!0,title:"\u041f\u0430\u0440\u043e\u043b\u044c \u043c\u0430\u0454 \u0431\u0443\u0442\u0438 \u043d\u0435 \u043c\u0435\u043d\u0448\u0435 8 \u0441\u0438\u043c\u0432\u043e\u043b\u0456\u0432"},height:{name:"height",type:"text",placeholder:"\u0417\u0440\u0456\u0441\u0442 (100-250)*",required:!0,title:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0434\u0456\u0439\u0441\u043d\u0435 \u0446\u0456\u043b\u0435 \u0447\u0438\u0441\u043b\u043e \u0432\u0456\u0434 100 \u0434\u043e 250."},age:{name:"age",type:"text",placeholder:"\u0412\u0456\u043a (18-100)*",required:!0,title:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0434\u0456\u0439\u0441\u043d\u0435 \u0447\u0438\u0441\u043b\u043e \u0432\u0456\u0434 18 \u0434\u043e 100."},weight:{name:"weight",type:"text",placeholder:"\u041f\u043e\u0442\u043e\u0447\u043d\u0430 \u0432\u0430\u0433\u0430 (20-250)*",required:!0,title:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0434\u0456\u0439\u0441\u043d\u0435 \u0446\u0456\u043b\u0435 \u0447\u0438\u0441\u043b\u043e \u0432\u0456\u0434 20 \u0434\u043e 250."},desiredWeight:{name:"desiredWeight",type:"text",placeholder:"\u0411\u0430\u0436\u0430\u043d\u0430 \u0432\u0430\u0433\u0430 (20-500)*",required:!0,title:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0434\u0456\u0439\u0441\u043d\u0435 \u0446\u0456\u043b\u0435 \u0447\u0438\u0441\u043b\u043e \u0432\u0456\u0434 20 \u0434\u043e 500."},bloodType:{name:"blodtype",type:"text",placeholder:"\u0413\u0440\u0443\u043f\u0430 \u043a\u0440\u043e\u0432\u0456*",disabled:!0},filter:{type:"text",name:"filter",placeholder:"\u0424\u0456\u043b\u044c\u0442\u0440\u0443\u0432\u0430\u0442\u0438 \u0437\u0430 \u043d\u0430\u0437\u0432\u043e\u044e"}}},7266:function(e,t,n){n.d(t,{Z:function(){return r.Z}});var r=n(5387)},4355:function(e,t,n){n.r(t),n.d(t,{default:function(){return M}});var r=n(1413),a=n(9439),o=n(2791),l=n(1134),s=n(4805),i=n(3063),d=n(9911),c="Login_login__yplOB",u="Login_imgDesktop__x7s8O",p="Login_title__3JYIy",_="Login_form__g0qS6",m="Login_wrap__i5y-C",x=n(8670),f=n(7266),h=n(8110),b=n(7410),g=n(393),v=n(6891),y=n(9146),N=n(8010),j=n(8232),w=n(2871),k=n(6264),C=n(184),Z=function(){var e=(0,s.useMediaQuery)({query:"(min-resolution: 2dppx)"}),t=(0,d.Z)(),n=(0,o.useState)(!1),Z=(0,a.Z)(n,2),M=Z[0],q=Z[1],L=(0,i.Z)(j.NH),E=(0,l.cI)({defaultValues:{email:"",password:""}}),F=E.control,D=E.handleSubmit,S=E.reset;(0,o.useEffect)((function(){t((0,w.B)())}),[]);return(0,C.jsx)("section",{className:c,children:(0,C.jsxs)(x.Z,{children:[(0,C.jsx)("h2",{className:p,children:"\u0412\u0445\u0456\u0434"}),(0,C.jsxs)("form",{className:_,onSubmit:D((function(e,n){t((0,k.x4)(e)),q(!0),S()})),children:[(0,C.jsx)(l.Qr,{control:F,name:"email",rules:{required:!0},render:function(e){var t=e.field,n=t.onChange,a=t.value;return(0,C.jsx)(f.Z,(0,r.Z)({value:a,control:F,handleChange:n},h.E.email))}}),(0,C.jsx)(l.Qr,{control:F,name:"password",rules:{required:!0,minLength:8,maxLength:30},render:function(e){var t=e.field,n=t.onChange,a=t.value;return(0,C.jsx)(f.Z,(0,r.Z)({value:a,control:F,handleChange:n},h.E.password))}}),(0,C.jsx)("div",{className:m,children:(0,C.jsx)(b.Z,{text:"\u0412\u0432\u0456\u0439\u0442\u0438",btnClass:"btn"})})]}),!e&&(0,C.jsx)("img",{className:u,src:y,alt:"background"}),e&&(0,C.jsx)("img",{className:u,src:N,alt:"background"}),M&&L&&(0,C.jsx)(v.Z,{setModalOpen:q,children:(0,C.jsx)(g.Z,{status:L})})]})})},M=function(){return(0,C.jsx)(C.Fragment,{children:(0,C.jsx)(Z,{})})}},9101:function(e,t){t.Z={container:"NotFound_container__19Mn0",title:"NotFound_title__6i5Ni",txt:"NotFound_txt__Y8VtC",booWrapper:"NotFound_booWrapper__XjjEl",boo:"NotFound_boo__4UQ+D",floating:"NotFound_floating__LYRSn",face:"NotFound_face__1yLkc",shadow:"NotFound_shadow__90Xe8",floatingShadow:"NotFound_floatingShadow__qkzY4"}},9146:function(e,t,n){e.exports=n.p+"static/media/bcgD.1552e853040f00d7f357.png"},8010:function(e,t,n){e.exports=n.p+"static/media/bcgD@2x.e6504f9f888e1e15acf0.png"}}]);
//# sourceMappingURL=355.f06fbead.chunk.js.map