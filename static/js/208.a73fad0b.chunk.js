"use strict";(self.webpackChunkslim_mom_ts=self.webpackChunkslim_mom_ts||[]).push([[208],{393:function(e,r,t){t.d(r,{Z:function(){return i}});var a="ErrorMessage_errorMessageBlock__6NGFY",n="ErrorMessage_errorMessageTitle__gIqHi",o="ErrorMessage_errorMessageText__TKpdd",l=t(9101),s=t(184),i=function(e){var r=e.status;return(0,s.jsxs)("div",{className:a,children:[(0,s.jsx)("div",{className:l.Z.boo,children:(0,s.jsx)("div",{className:l.Z.face,id:"face"})}),(0,s.jsx)("p",{className:n,children:"\u0429\u043e\u0441\u044c \u043f\u0456\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a..."}),(0,s.jsx)("p",{className:o,children:r})]})}},6891:function(e,r,t){t.d(r,{Z:function(){return l}});var a=t(2791),n={overlay:"Modal_overlay__b+zEz",overlayDairyPage:"Modal_overlayDairyPage__h20Vb",modalDairyPage:"Modal_modalDairyPage__wNlXX",modal:"Modal_modal__yEgVW",closeM:"Modal_closeM__mJ3AX",closeOther:"Modal_closeOther__8w+rp",mobileClose:"Modal_mobileClose__wiSFp"},o=t(184),l=function(e){var r=e.setModalOpen,t=e.overlayClass,l=void 0===t?"overlay":t,s=e.modalClass,i=void 0===s?"modal":s,d=e.children;function c(){document.querySelector("body").classList.remove("no-scroll")}(0,a.useEffect)((function(){var e=function(e){"Escape"===e.code&&(c(),r(!1))};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[r]);var u=function(){c(),r(!1)};return(0,o.jsx)("div",{className:n[l],onClick:function(e){e.target===e.currentTarget&&(c(),r(!1))},children:(0,o.jsxs)("div",{className:n[i],children:[(0,o.jsx)("div",{className:n.mobileClose,children:(0,o.jsx)("span",{onClick:u,className:n.closeM})}),(0,o.jsx)("span",{onClick:u,className:n.closeOther}),d]})})}},1373:function(e,r,t){t.d(r,{Z:function(){return o}});t(2791);var a={btn:"Button_btn__cIIwi",btnLight:"Button_btnLight__TSLTb",btnPlus:"Button_btnPlus__VRApt",btnDairyPage:"Button_btnDairyPage__2MLhY"},n=t(184),o=function(e){var r=e.text,t=void 0===r?"+":r,o=e.type,l=void 0===o?"submit":o,s=e.btnClass,i=void 0===s?"btnPlus":s,d=e.handleClick;return(0,n.jsx)("button",{className:a[i],onClick:d,type:l,children:t})}},7410:function(e,r,t){t.d(r,{Z:function(){return a.Z}});var a=t(1373)},8670:function(e,r,t){t.d(r,{Z:function(){return n}});var a=t(184),n=function(e){var r=e.children;return(0,a.jsx)("div",{className:"mx-auto pr-5 pl-5 mobile:w-[480px] tablet:w-[768px] tablet:px-8 desktop:w-[1280px] desktop:px-4 ",children:r})}},5387:function(e,r,t){t(2791);var a=t(184);r.Z=function(e){var r=e.type,t=e.name,n=e.value,o=e.handleChange,l=e.placeholder,s=e.required,i=e.pattern,d=e.title,c=e.children;return(0,a.jsxs)("label",{className:"group relative mb-10 inline-block h-12",children:[(0,a.jsx)("input",{className:"peer absolute top-0 left-0 inline-block h-12 w-full rounded-none border-b-[1px] border-solid border-l-transparent border-r-transparent border-t-transparent border-b-border-color bg-transparent text-[14px] font-normal leading-normal tracking-[1px]  text-second-text-color shadow-none transition-all duration-200 focus:border-b-accent-color focus:bg-transparent focus:outline-w0 tablet:w-[240px]",type:r,name:t,value:n,onChange:o,required:s,pattern:i,title:d,autoComplete:"off"}),(0,a.jsx)("span",{className:"pointer-events-none absolute top-[1px] left-[1px] mt-[17px] inline-block text-[14px] text-second-text-color duration-300 peer-valid:translate-x-[-10px] peer-valid:translate-y-[-32px] peer-focus:translate-x-[-10px] peer-focus:translate-y-[-32px]",children:l}),c]})}},8110:function(e,r,t){t.d(r,{E:function(){return a}});var a={name:{name:"name",type:"text",placeholder:"\u0406\u043c\u02bc\u044f*",title:"\u041d\u0430\u0437\u0432\u0430 \u043c\u0430\u0454 \u0441\u043a\u043b\u0430\u0434\u0430\u0442\u0438\u0441\u044f \u043d\u0435 \u043c\u0435\u043d\u0448\u0435, \u043d\u0456\u0436 \u0437 3 \u0441\u0438\u043c\u0432\u043e\u043b\u0456\u0432"},email:{name:"email",type:"text",placeholder:"\u0415\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u0430 \u043f\u043e\u0448\u0442\u0430*"},password:{name:"password",type:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c (\u0432\u0456\u0434 8 \u0441\u0438\u043c\u0432\u043e\u043b\u0456\u0432)*",title:"\u041f\u0430\u0440\u043e\u043b\u044c \u043c\u0430\u0454 \u0431\u0443\u0442\u0438 \u043d\u0435 \u043c\u0435\u043d\u0448\u0435 8 \u0441\u0438\u043c\u0432\u043e\u043b\u0456\u0432"},height:{name:"height",type:"text",placeholder:"\u0417\u0440\u0456\u0441\u0442 (100-250)*",title:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0434\u0456\u0439\u0441\u043d\u0435 \u0446\u0456\u043b\u0435 \u0447\u0438\u0441\u043b\u043e \u0432\u0456\u0434 100 \u0434\u043e 250."},age:{name:"age",type:"text",placeholder:"\u0412\u0456\u043a (18-100)*",title:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0434\u0456\u0439\u0441\u043d\u0435 \u0447\u0438\u0441\u043b\u043e \u0432\u0456\u0434 18 \u0434\u043e 100."},weight:{name:"weight",type:"text",placeholder:"\u041f\u043e\u0442\u043e\u0447\u043d\u0430 \u0432\u0430\u0433\u0430 (20-250)*",title:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0434\u0456\u0439\u0441\u043d\u0435 \u0446\u0456\u043b\u0435 \u0447\u0438\u0441\u043b\u043e \u0432\u0456\u0434 20 \u0434\u043e 250."},desiredWeight:{name:"desiredWeight",type:"text",placeholder:"\u0411\u0430\u0436\u0430\u043d\u0430 \u0432\u0430\u0433\u0430 (20-500)*",title:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0434\u0456\u0439\u0441\u043d\u0435 \u0446\u0456\u043b\u0435 \u0447\u0438\u0441\u043b\u043e \u0432\u0456\u0434 20 \u0434\u043e 500."},bloodType:{name:"blodtype",type:"text",placeholder:"\u0413\u0440\u0443\u043f\u0430 \u043a\u0440\u043e\u0432\u0456*",disabled:!0},filter:{type:"text",name:"filter",placeholder:"\u0424\u0456\u043b\u044c\u0442\u0440\u0443\u0432\u0430\u0442\u0438 \u0437\u0430 \u043d\u0430\u0437\u0432\u043e\u044e"}}},6472:function(e,r,t){t(2791);var a=t(184),n=function(e){var r=e.type,t=e.name,n=e.value,o=e.handleChange,l=e.placeholder,s=e.required,i=e.pattern,d=e.title,c=e.disabled,u=e.children;return(0,a.jsxs)("label",{children:[(0,a.jsx)("input",{className:"tracking-[1px]transition-all leading-normal mb-10 inline-block h-12 w-full rounded-none border-b-[1px] border-solid  border-l-transparent border-r-transparent border-t-transparent border-b-border-color bg-transparent text-[14px] font-normal text-second-text-color shadow-none duration-200 placeholder:text-[14px]  placeholder:text-second-text-color focus:border-b-accent-color focus:bg-transparent focus:outline-w0 tablet:w-[240px]",type:r,name:t,value:n,onChange:o,placeholder:l,required:s,pattern:i,title:d,disabled:c,autoComplete:"off"}),u]})};r.Z=n,n.defaultProps={type:"text",required:!1}},2208:function(e,r,t){t.r(r),t.d(r,{default:function(){return re}});var a=t(4805),n="Home_home__SCgQC",o="Home_imgDesktop__nsaId",l=t(3433),s=t(1413),i=t(9439),d=t(2791),c=t(9911),u=t(3063),h=t(1134),m=t(4695),p=t(6727),x="DailyCaloriesForm_form__9xqX8",_="DailyCaloriesForm_formParts__UpQOu",g="DailyCaloriesForm_formPart__FPN2f",b="DailyCaloriesForm_label__bwAYz",f="DailyCaloriesForm_title__xqHqd",y="DailyCaloriesForm_checkbox__AN5Rc",v="DailyCaloriesForm_fake__ZJhcp",j="DailyCaloriesForm_text__ah9N1",N="DailyCaloriesForm_radioBlock__W2s0x",C="DailyCaloriesForm_listRadio__Vmddm",Z="DailyCaloriesForm_buttonPosition__pyVk2",w=t(8110),k=t(1373),D=t(5387),F=t(6891),q=t(1087),M=t(6382),T="DailyCalorieIntake_modalTitle__-T+iE",E="DailyCalorieIntake_modalText__0denN",W="DailyCalorieIntake_textDescription__ybZqH",P="DailyCalorieIntake_menuGroup__pKbC+",R="DailyCalorieIntake_menuGroupTitle__anTRq",S="DailyCalorieIntake_menuGroupList__yi2OV",I="DailyCalorieIntake_menuGroupItems__WF+od",L=["\u0421\u043e\u043b\u043e\u0434\u043a\u0456 \u043d\u0430\u043f\u043e\u0457","\u041c'\u044f\u0441\u043d\u0456 \u043d\u0430\u043f\u0456\u0432\u0444\u0430\u0431\u0440\u0438\u043a\u0430\u0442\u0438","\u0410\u043b\u043a\u043e\u0433\u043e\u043b\u044c","\u0428\u043e\u043a\u043e\u043b\u0430\u0434\u043d\u0456 \u0431\u0430\u0442\u043e\u043d\u0447\u0438\u043a\u0438","\u0427\u0435\u0440\u0432\u043e\u043d\u0435 \u043c'\u044f\u0441\u043e","\u041a\u043e\u043f\u0447\u0435\u043d\u043e\u0441\u0442\u0456","\u0411\u043e\u0440\u043e\u0448\u043d\u044f\u043d\u0456 \u0432\u0438\u0440\u043e\u0431\u0438"],Q=t(7410),O=function(e){return e.dailyRate.error},V=function(e){return e.dailyRate.dailyRate},B=function(e){return e.dailyRate.notAllowedProducts},X=t(184),A=function(){var e=(0,u.Z)(B),r=Math.round((0,u.Z)(V)),t=[];if(0===e.length)t=L;else for(var a=0;a<5;a+=1)t[a]=e[a];return(0,X.jsxs)(X.Fragment,{children:[(0,X.jsx)("h2",{className:T,children:"\u0412\u0430\u0448\u0430 \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u043e\u0432\u0430\u043d\u0430 \u0434\u043e\u0431\u043e\u0432\u0430 \u043d\u043e\u0440\u043c\u0430 \u0441\u043f\u043e\u0436\u0438\u0432\u0430\u043d\u043d\u044f \u043a\u0430\u043b\u043e\u0440\u0456\u0439 \u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c:"}),(0,X.jsxs)("p",{className:E,children:[r,(0,X.jsx)("span",{className:W,children:" \u043a\u043a\u0430\u043b"})]}),(0,X.jsx)("div",{className:P,children:t.length>0&&(0,X.jsxs)(X.Fragment,{children:[(0,X.jsx)("p",{className:R,children:"\u041f\u0440\u043e\u0434\u0443\u043a\u0442\u0438, \u044f\u043a\u0456 \u043d\u0435 \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u043e\u0432\u0430\u043d\u0456 \u0434\u043e \u0432\u0436\u0438\u0432\u0430\u043d\u043d\u044f:"}),(0,X.jsx)("ul",{className:S,children:t.map((function(e){return(0,X.jsx)("li",{className:I,children:e},(0,M.x0)())}))})]})}),(0,X.jsx)(q.rU,{to:"/registration",children:(0,X.jsx)(Q.Z,{text:"\u0421\u0445\u0443\u0434\u043d\u0443\u0442\u0438",type:"button",btnClass:"btn",handleClick:function(){document.querySelector("body").classList.remove("no-scroll")}})})]})},Y=function(e){var r=e.error;return(0,X.jsx)("span",{className:"absolute text-xs text-red bottom-[-20px]",children:r})},G=t(393),H=t(8670),z=t(6472),U=t(5552),J=function(){var e=(0,c.Z)(),r=(0,d.useState)(!1),t=(0,i.Z)(r,2),a=t[0],n=t[1],o=(0,d.useState)(null),q=(0,i.Z)(o,2),M=q[0],T=q[1],E=(0,u.Z)(V),W=(0,u.Z)(O),P=p.Ry().shape({height:p.Rx().typeError("\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0447\u0438\u0441\u043b\u043e").required().min(100,"\u043d\u0435 \u043c\u0435\u043d\u0448\u0435 \u043d\u0456\u0436 100").max(250,"\u043d\u0435 \u0431\u0456\u043b\u044c\u0448\u0435 \u043d\u0456\u0436 250"),age:p.Rx().typeError("\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0447\u0438\u0441\u043b\u043e").required().min(18,"\u043d\u0435 \u043c\u0435\u043d\u0448\u0435 \u043d\u0456\u0436 18").max(100,"\u043d\u0435 \u0431\u0456\u043b\u044c\u0448\u0435 \u043d\u0456\u0436 100"),weight:p.Rx().typeError("\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0447\u0438\u0441\u043b\u043e").required().min(20,"\u043d\u0435 \u043c\u0435\u043d\u0448\u0435 \u043d\u0456\u0436 20").max(250,"\u043d\u0435 \u0431\u0456\u043b\u044c\u0448\u0435 \u043d\u0456\u0436 250"),desiredWeight:p.Rx().typeError("\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0447\u0438\u0441\u043b\u043e").required().min(20,"\u043d\u0435 \u043c\u0435\u043d\u0448\u0435 \u043d\u0456\u0436 20").max(250,"\u043d\u0435 \u0431\u0456\u043b\u044c\u0448\u0435 \u043d\u0456\u0436 250"),bloodType:p.Z_().required("\u041e\u0431\u0435\u0440\u0456\u0442\u044c \u0447\u0438\u0441\u043b\u043e").required("\u041e\u0431\u0435\u0440\u0456\u0442\u044c \u0447\u0438\u0441\u043b\u043e")}),R=(0,h.cI)({resolver:(0,m.X)(P),mode:"onChange",defaultValues:{weight:"",height:"",age:"",desiredWeight:"",bloodType:""}}),S=R.control,I=R.handleSubmit,L=R.reset,Q=R.register,B=R.formState.errors;return(0,X.jsxs)(H.Z,{children:[(0,X.jsxs)("form",{onSubmit:I((function(r,t){var a={weight:Number(r.weight),height:Number(r.height),age:Number(r.age),desiredWeight:Number(r.desiredWeight),bloodType:Number(r.bloodType)};t.preventDefault(),e((0,U.F)(a)),T(null),document.querySelector("body").classList.add("no-scroll"),n(!0),L()})),className:x,children:[(0,X.jsx)("h1",{className:f,children:"\u0420\u043e\u0437\u0440\u0430\u0445\u0443\u0439\u0442\u0435 \u0441\u0432\u043e\u044e \u0434\u0435\u043d\u043d\u0443 \u043d\u043e\u0440\u043c\u0443 \u043a\u0430\u043b\u043e\u0440\u0456\u0439 \u043f\u0440\u044f\u043c\u043e \u0437\u0430\u0440\u0430\u0437"}),(0,X.jsxs)("div",{className:_,children:[(0,X.jsxs)("div",{className:g,children:[(0,X.jsx)(h.Qr,{control:S,name:"height",render:function(e){var r=e.field,t=r.onChange,a=r.value;return(0,X.jsx)(D.Z,(0,s.Z)((0,s.Z)((0,s.Z)({value:a,control:S,handleChange:t},w.E.height),Q("height")),{},{children:B.height&&(0,X.jsx)(Y,{error:B.height.message})}))}}),(0,X.jsx)(h.Qr,{control:S,name:"age",render:function(e){var r=e.field,t=r.onChange,a=r.value;return(0,X.jsx)(D.Z,(0,s.Z)((0,s.Z)((0,s.Z)({value:a,control:S,handleChange:t},w.E.age),Q("age")),{},{children:B.age&&(0,X.jsx)(Y,{error:B.age.message})}))}}),(0,X.jsx)(h.Qr,{control:S,name:"weight",render:function(e){var r=e.field,t=r.onChange,a=r.value;return(0,X.jsx)(D.Z,(0,s.Z)((0,s.Z)((0,s.Z)({value:a,control:S,handleChange:t},w.E.weight),Q("weight")),{},{children:B.weight&&(0,X.jsx)(Y,{error:B.weight.message})}))}})]}),(0,X.jsxs)("div",{className:g,children:[(0,X.jsx)(h.Qr,{control:S,name:"desiredWeight",render:function(e){var r=e.field,t=r.onChange,a=r.value;return(0,X.jsx)(D.Z,(0,s.Z)((0,s.Z)((0,s.Z)({value:a,control:S,handleChange:t},w.E.desiredWeight),Q("desiredWeight")),{},{children:B.desiredWeight&&(0,X.jsx)(Y,{error:B.desiredWeight.message})}))}}),(0,X.jsx)(h.Qr,{control:S,name:"bloodType",render:function(e){var r=e.field,t=r.onChange,a=r.value;return(0,X.jsx)(z.Z,(0,s.Z)((0,s.Z)({value:a,control:S,handleChange:t},w.E.bloodType),Q("bloodType")))}}),(0,X.jsx)("div",{className:N,children:(0,l.Z)(Array(4)).map((function(e,r){return(0,X.jsx)("div",{className:C,children:(0,X.jsxs)("label",{className:b,children:[(0,X.jsx)("input",(0,s.Z)((0,s.Z)({},Q("bloodType",{required:!0})),{},{className:y,type:"radio",name:"bloodType",checked:r===M,onClick:function(){return T(r)},value:r+1,placeholder:"Blood type"})),(0,X.jsx)("span",{className:v}),(0,X.jsx)("span",{className:j,children:r+1})]})},r)}))}),B.bloodType&&(0,X.jsx)("p",{className:"mt-2 text-xs text-red",children:B.bloodType.message})]})]}),(0,X.jsx)("div",{className:Z,children:(0,X.jsx)(k.Z,{text:"\u0421\u0445\u0443\u0434\u043d\u0443\u0442\u0438",type:"submit",btnClass:"btn"})})]}),a&&E&&(0,X.jsx)(F.Z,{setModalOpen:n,children:(0,X.jsx)(A,{})}),a&&W&&(0,X.jsx)(F.Z,{setModalOpen:n,children:(0,X.jsx)(G.Z,{status:W})})]})},K=t(9146),$=t(8010),ee=function(){var e=(0,a.useMediaQuery)({query:"(min-resolution: 2dppx)"});return(0,X.jsxs)("section",{className:n,children:[(0,X.jsx)(J,{}),!e&&(0,X.jsx)("img",{className:o,src:K,alt:"background"}),e&&(0,X.jsx)("img",{className:o,src:$,alt:"background"})]})},re=function(){return(0,X.jsx)(X.Fragment,{children:(0,X.jsx)(ee,{})})}},9101:function(e,r){r.Z={container:"NotFound_container__19Mn0",title:"NotFound_title__6i5Ni",txt:"NotFound_txt__Y8VtC",booWrapper:"NotFound_booWrapper__XjjEl",boo:"NotFound_boo__4UQ+D",floating:"NotFound_floating__LYRSn",face:"NotFound_face__1yLkc",shadow:"NotFound_shadow__90Xe8",floatingShadow:"NotFound_floatingShadow__qkzY4"}},9146:function(e,r,t){e.exports=t.p+"static/media/bcgD.1552e853040f00d7f357.png"},8010:function(e,r,t){e.exports=t.p+"static/media/bcgD@2x.e6504f9f888e1e15acf0.png"}}]);
//# sourceMappingURL=208.a73fad0b.chunk.js.map