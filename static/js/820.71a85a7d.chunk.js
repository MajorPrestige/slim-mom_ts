"use strict";(self.webpackChunkslim_mom_ts=self.webpackChunkslim_mom_ts||[]).push([[820],{393:function(e,a,n){n.d(a,{Z:function(){return s}});var t="ErrorMessage_errorMessageBlock__6NGFY",r="ErrorMessage_errorMessageTitle__gIqHi",l="ErrorMessage_errorMessageText__TKpdd",o=n(9101),i=n(184),s=function(e){var a=e.status;return(0,i.jsxs)("div",{className:t,children:[(0,i.jsx)("div",{className:o.Z.boo,children:(0,i.jsx)("div",{className:o.Z.face,id:"face"})}),(0,i.jsx)("p",{className:r,children:"\u0429\u043e\u0441\u044c \u043f\u0456\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a..."}),(0,i.jsx)("p",{className:l,children:a})]})}},6891:function(e,a,n){n.d(a,{Z:function(){return o}});var t=n(2791),r={overlay:"Modal_overlay__b+zEz",overlayDairyPage:"Modal_overlayDairyPage__h20Vb",modalDairyPage:"Modal_modalDairyPage__wNlXX",modal:"Modal_modal__yEgVW",closeM:"Modal_closeM__mJ3AX",closeOther:"Modal_closeOther__8w+rp",mobileClose:"Modal_mobileClose__wiSFp"},l=n(184),o=function(e){var a=e.setModalOpen,n=e.overlayClass,o=void 0===n?"overlay":n,i=e.modalClass,s=void 0===i?"modal":i,d=e.children;function c(){document.querySelector("body").classList.remove("no-scroll")}(0,t.useEffect)((function(){var e=function(e){"Escape"===e.code&&(c(),a(!1))};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[a]);var u=function(){c(),a(!1)};return(0,l.jsx)("div",{className:r[o],onClick:function(e){e.target===e.currentTarget&&(c(),a(!1))},children:(0,l.jsxs)("div",{className:r[s],children:[(0,l.jsx)("div",{className:r.mobileClose,children:(0,l.jsx)("span",{onClick:u,className:r.closeM})}),(0,l.jsx)("span",{onClick:u,className:r.closeOther}),d]})})}},1373:function(e,a,n){n.d(a,{Z:function(){return l}});var t={btn:"Button_btn__cIIwi",btnLight:"Button_btnLight__TSLTb Button_btn__cIIwi",btnPlus:"Button_btnPlus__VRApt",btnDairyPage:"Button_btnDairyPage__2MLhY"},r=n(184),l=function(e){var a=e.text,n=void 0===a?"+":a,l=e.type,o=void 0===l?"submit":l,i=e.btnClass,s=void 0===i?"btnPlus":i,d=e.handleClick;return(0,r.jsx)("button",{className:t[s],onClick:d,type:o,children:n})}},7410:function(e,a,n){n.d(a,{Z:function(){return t.Z}});var t=n(1373)},8670:function(e,a,n){n.d(a,{Z:function(){return r}});var t=n(184),r=function(e){var a=e.children;return(0,t.jsx)("div",{className:"container",children:a})}},2401:function(e,a,n){n.d(a,{Z:function(){return i}});n(2791);var t="TextField_label__kp4Pv",r="TextField_input__JDykO",l="TextField_span__qcPmc",o=n(184),i=function(e){var a=e.type,n=e.name,i=e.value,s=e.handleChange,d=e.placeholder,c=e.required,u=e.pattern,_=e.title;return(0,o.jsxs)("label",{className:t,children:[(0,o.jsx)("input",{className:r,type:a,name:n,value:i,onChange:s,required:c,pattern:u,title:_}),(0,o.jsx)("span",{className:l,children:d})]})}},8110:function(e,a,n){n.d(a,{E:function(){return t}});var t={name:{name:"name",type:"text",placeholder:"\u0406\u043c\u02bc\u044f*",title:"\u041d\u0430\u0437\u0432\u0430 \u043c\u0430\u0454 \u0441\u043a\u043b\u0430\u0434\u0430\u0442\u0438\u0441\u044f \u043d\u0435 \u043c\u0435\u043d\u0448\u0435, \u043d\u0456\u0436 \u0437 3 \u0441\u0438\u043c\u0432\u043e\u043b\u0456\u0432",required:!0},email:{name:"email",type:"text",placeholder:"\u0415\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u0430 \u043f\u043e\u0448\u0442\u0430*",required:!0},password:{name:"password",type:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c (\u0432\u0456\u0434 8 \u0441\u0438\u043c\u0432\u043e\u043b\u0456\u0432)*",required:!0,title:"\u041f\u0430\u0440\u043e\u043b\u044c \u043c\u0430\u0454 \u0431\u0443\u0442\u0438 \u043d\u0435 \u043c\u0435\u043d\u0448\u0435 8 \u0441\u0438\u043c\u0432\u043e\u043b\u0456\u0432"},height:{name:"height",type:"text",placeholder:"\u0417\u0440\u0456\u0441\u0442 (100-250)*",required:!0,title:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0434\u0456\u0439\u0441\u043d\u0435 \u0446\u0456\u043b\u0435 \u0447\u0438\u0441\u043b\u043e \u0432\u0456\u0434 100 \u0434\u043e 250."},age:{name:"age",type:"text",placeholder:"\u0412\u0456\u043a (18-100)*",required:!0,title:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0434\u0456\u0439\u0441\u043d\u0435 \u0447\u0438\u0441\u043b\u043e \u0432\u0456\u0434 18 \u0434\u043e 100."},weight:{name:"weight",type:"text",placeholder:"\u041f\u043e\u0442\u043e\u0447\u043d\u0430 \u0432\u0430\u0433\u0430 (20-250)*",required:!0,title:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0434\u0456\u0439\u0441\u043d\u0435 \u0446\u0456\u043b\u0435 \u0447\u0438\u0441\u043b\u043e \u0432\u0456\u0434 20 \u0434\u043e 250."},desiredWeight:{name:"desiredWeight",type:"text",placeholder:"\u0411\u0430\u0436\u0430\u043d\u0430 \u0432\u0430\u0433\u0430 (20-500)*",required:!0,title:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0434\u0456\u0439\u0441\u043d\u0435 \u0446\u0456\u043b\u0435 \u0447\u0438\u0441\u043b\u043e \u0432\u0456\u0434 20 \u0434\u043e 500."},bloodType:{name:"blodtype",type:"text",placeholder:"\u0413\u0440\u0443\u043f\u0430 \u043a\u0440\u043e\u0432\u0456*",disabled:!0},filter:{type:"text",name:"filter",placeholder:"\u0424\u0456\u043b\u044c\u0442\u0440\u0443\u0432\u0430\u0442\u0438 \u0437\u0430 \u043d\u0430\u0437\u0432\u043e\u044e"}}},5536:function(e,a,n){n.d(a,{Z:function(){return o}});n(2791);var t="TextFieldDefault_input__TN7oB",r=n(184),l=function(e){var a=e.type,n=e.name,l=e.value,o=e.handleChange,i=e.placeholder,s=e.required,d=e.pattern,c=e.title,u=e.disabled;return(0,r.jsx)("label",{children:(0,r.jsx)("input",{className:t,type:a,name:n,value:l,onChange:o,placeholder:i,required:s,pattern:d,title:c,disabled:u})})},o=l;l.defaultProps={type:"text",required:!1}},3820:function(e,a,n){n.r(a),n.d(a,{default:function(){return K}});var t=n(4805),r="Home_home__SCgQC",l="Home_imgDesktop__nsaId",o=n(3433),i=n(1413),s=n(9439),d=n(2791),c=n(9911),u=n(3063),_=n(1134),m="DailyCaloriesForm_form__9xqX8",h="DailyCaloriesForm_formParts__UpQOu",p="DailyCaloriesForm_formPart__FPN2f",x="DailyCaloriesForm_label__bwAYz",f="DailyCaloriesForm_title__xqHqd",g="DailyCaloriesForm_checkbox__AN5Rc",y="DailyCaloriesForm_fake__ZJhcp",v="DailyCaloriesForm_text__ah9N1",b="DailyCaloriesForm_radioBlock__W2s0x",j="DailyCaloriesForm_listRadio__Vmddm",N="DailyCaloriesForm_buttonPosition__pyVk2",C=n(8110),Z=n(1373),k=n(2401),D=n(6891),F=n(1087),w=n(6382),q="DailyCalorieIntake_modalTitle__-T+iE",T="DailyCalorieIntake_modalText__0denN",M="DailyCalorieIntake_textDescription__ybZqH",E="DailyCalorieIntake_menuGroup__pKbC+",P="DailyCalorieIntake_menuGroupTitle__anTRq",I="DailyCalorieIntake_menuGroupList__yi2OV",S="DailyCalorieIntake_menuGroupItems__WF+od",L=["\u0421\u043e\u043b\u043e\u0434\u043a\u0456 \u043d\u0430\u043f\u043e\u0457","\u041c'\u044f\u0441\u043d\u0456 \u043d\u0430\u043f\u0456\u0432\u0444\u0430\u0431\u0440\u0438\u043a\u0430\u0442\u0438","\u0410\u043b\u043a\u043e\u0433\u043e\u043b\u044c","\u0428\u043e\u043a\u043e\u043b\u0430\u0434\u043d\u0456 \u0431\u0430\u0442\u043e\u043d\u0447\u0438\u043a\u0438","\u0427\u0435\u0440\u0432\u043e\u043d\u0435 \u043c'\u044f\u0441\u043e","\u041a\u043e\u043f\u0447\u0435\u043d\u043e\u0441\u0442\u0456","\u0411\u043e\u0440\u043e\u0448\u043d\u044f\u043d\u0456 \u0432\u0438\u0440\u043e\u0431\u0438"],W=n(7410),B=function(e){return e.dailyRate.error},O=function(e){return e.dailyRate.dailyRate},Q=function(e){return e.dailyRate.notAllowedProducts},R=n(184),V=function(){var e=(0,u.Z)(Q),a=Math.round((0,u.Z)(O)),n=[];if(0===e.length)n=L;else for(var t=0;t<5;t+=1)n[t]=e[t];return(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)("h2",{className:q,children:"\u0412\u0430\u0448\u0430 \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u043e\u0432\u0430\u043d\u0430 \u0434\u043e\u0431\u043e\u0432\u0430 \u043d\u043e\u0440\u043c\u0430 \u0441\u043f\u043e\u0436\u0438\u0432\u0430\u043d\u043d\u044f \u043a\u0430\u043b\u043e\u0440\u0456\u0439 \u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c:"}),(0,R.jsxs)("p",{className:T,children:[a,(0,R.jsx)("span",{className:M,children:" \u043a\u043a\u0430\u043b"})]}),(0,R.jsx)("div",{className:E,children:n.length>0&&(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)("p",{className:P,children:"\u041f\u0440\u043e\u0434\u0443\u043a\u0442\u0438, \u044f\u043a\u0456 \u043d\u0435 \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u043e\u0432\u0430\u043d\u0456 \u0434\u043e \u0432\u0436\u0438\u0432\u0430\u043d\u043d\u044f:"}),(0,R.jsx)("ul",{className:I,children:n.map((function(e){return(0,R.jsx)("li",{className:S,children:e},(0,w.x0)())}))})]})}),(0,R.jsx)(F.rU,{to:"/registration",children:(0,R.jsx)(W.Z,{text:"\u0421\u0445\u0443\u0434\u043d\u0443\u0442\u0438",type:"button",btnClass:"btn",handleClick:function(){document.querySelector("body").classList.remove("no-scroll")}})})]})},A=n(393),X=n(8670),Y=n(5536),G=n(5552),H=function(){var e=(0,c.Z)(),a=(0,d.useState)(!1),n=(0,s.Z)(a,2),t=n[0],r=n[1],l=(0,d.useState)(null),F=(0,s.Z)(l,2),w=F[0],q=F[1],T=(0,u.Z)(O),M=(0,u.Z)(B),E=(0,_.cI)({defaultValues:{weight:"",height:"",age:"",desiredWeight:"",bloodType:""}}),P=E.control,I=E.handleSubmit,S=E.reset,L=E.register;return(0,R.jsxs)(X.Z,{children:[(0,R.jsxs)("form",{onSubmit:I((function(a,n){var t={weight:Number(a.weight),height:Number(a.height),age:Number(a.age),desiredWeight:Number(a.desiredWeight),bloodType:Number(a.bloodType)};n.preventDefault(),e((0,G.F)(t)),q(null),document.querySelector("body").classList.add("no-scroll"),r(!0),S()})),className:m,children:[(0,R.jsx)("h1",{className:f,children:"\u0420\u043e\u0437\u0440\u0430\u0445\u0443\u0439\u0442\u0435 \u0441\u0432\u043e\u044e \u0434\u0435\u043d\u043d\u0443 \u043d\u043e\u0440\u043c\u0443 \u043a\u0430\u043b\u043e\u0440\u0456\u0439 \u043f\u0440\u044f\u043c\u043e \u0437\u0430\u0440\u0430\u0437"}),(0,R.jsxs)("div",{className:h,children:[(0,R.jsxs)("div",{className:p,children:[(0,R.jsx)(_.Qr,{control:P,name:"height",render:function(e){var a=e.field,n=a.onChange,t=a.value;return(0,R.jsx)(k.Z,(0,i.Z)({value:t,control:P,handleChange:n},C.E.height))}}),(0,R.jsx)(_.Qr,{control:P,name:"age",render:function(e){var a=e.field,n=a.onChange,t=a.value;return(0,R.jsx)(k.Z,(0,i.Z)({value:t,control:P,handleChange:n},C.E.age))}}),(0,R.jsx)(_.Qr,{control:P,name:"weight",render:function(e){var a=e.field,n=a.onChange,t=a.value;return(0,R.jsx)(k.Z,(0,i.Z)({value:t,control:P,handleChange:n},C.E.weight))}})]}),(0,R.jsxs)("div",{className:p,children:[(0,R.jsx)(_.Qr,{control:P,name:"desiredWeight",render:function(e){var a=e.field,n=a.onChange,t=a.value;return(0,R.jsx)(k.Z,(0,i.Z)({value:t,control:P,handleChange:n},C.E.desiredWeight))}}),(0,R.jsx)(_.Qr,{control:P,name:"bloodType",render:function(e){var a=e.field,n=a.onChange,t=a.value;return(0,R.jsx)(Y.Z,(0,i.Z)({value:t,control:P,handleChange:n},C.E.bloodType))}}),(0,R.jsx)("div",{className:b,children:(0,o.Z)(Array(4)).map((function(e,a){return(0,R.jsx)("div",{className:j,children:(0,R.jsxs)("label",{className:x,children:[(0,R.jsx)("input",(0,i.Z)((0,i.Z)({},L("bloodType",{required:!0})),{},{className:g,type:"radio",name:"bloodType",checked:a===w,onClick:function(){return q(a)},value:a+1,placeholder:"Blood type"})),(0,R.jsx)("span",{className:y}),(0,R.jsx)("span",{className:v,children:a+1})]})},a)}))})]})]}),(0,R.jsx)("div",{className:N,children:(0,R.jsx)(Z.Z,{text:"\u0421\u0445\u0443\u0434\u043d\u0443\u0442\u0438",type:"submit",btnClass:"btn"})})]}),t&&T&&(0,R.jsx)(D.Z,{setModalOpen:r,children:(0,R.jsx)(V,{})}),t&&M&&(0,R.jsx)(D.Z,{setModalOpen:r,children:(0,R.jsx)(A.Z,{status:M})})]})},z=n(9146),J=n(8010),U=function(){var e=(0,t.useMediaQuery)({query:"(min-resolution: 2dppx)"});return(0,R.jsxs)("section",{className:r,children:[(0,R.jsx)(H,{}),!e&&(0,R.jsx)("img",{className:l,src:z,alt:"background"}),e&&(0,R.jsx)("img",{className:l,src:J,alt:"background"})]})},K=function(){return(0,R.jsx)(R.Fragment,{children:(0,R.jsx)(U,{})})}},9101:function(e,a){a.Z={container:"NotFound_container__19Mn0",title:"NotFound_title__6i5Ni",txt:"NotFound_txt__Y8VtC",booWrapper:"NotFound_booWrapper__XjjEl",boo:"NotFound_boo__4UQ+D",floating:"NotFound_floating__LYRSn",face:"NotFound_face__1yLkc",shadow:"NotFound_shadow__90Xe8",floatingShadow:"NotFound_floatingShadow__qkzY4"}},9146:function(e,a,n){e.exports=n.p+"static/media/bcgD.1552e853040f00d7f357.png"},8010:function(e,a,n){e.exports=n.p+"static/media/bcgD@2x.e6504f9f888e1e15acf0.png"}}]);
//# sourceMappingURL=820.71a85a7d.chunk.js.map