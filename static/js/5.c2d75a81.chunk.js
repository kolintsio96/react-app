(this["webpackJsonpreact-app-1"]=this["webpackJsonpreact-app-1"]||[]).push([[5],{240:function(e,a,t){e.exports={login:"login_login__3y0Rp",login__title:"login_login__title__19EJN",login__form:"login_login__form__1naEW",login__field:"login_login__field__3Uo7X",login__button:"login_login__button__1zaL_",login__checkbox:"login_login__checkbox__1ejbp",login__label:"login_login__label__3Hran",checkbox:"login_checkbox__hEgcb","form-controller":"login_form-controller__2azLV"}},241:function(e,a,t){e.exports={"form-controller":"formController_form-controller__2gPlU","has-error":"formController_has-error__1MHl1","form-controller__error":"formController_form-controller__error__3TjBH","form-summary-error":"formController_form-summary-error__1Bm3n"}},242:function(e,a,t){"use strict";t.d(a,"c",(function(){return u})),t.d(a,"b",(function(){return g})),t.d(a,"a",(function(){return d})),t.d(a,"e",(function(){return f})),t.d(a,"d",(function(){return p}));var n=t(66),s=t(0),r=t.n(s),o=t(240),l=t.n(o),_=t(241),i=t.n(_),c=t(125),m=function(e){e.input;var a=e.meta,t=a.touched,n=a.error,s=e.children,o=t&&n,l=o?"".concat(i.a["form-controller"]," ").concat(i.a["has-error"]):"".concat(i.a["form-controller"]);return r.a.createElement("div",{className:l},s,o&&r.a.createElement("span",{className:i.a["form-controller__error"]},n))},u=function(e){var a=e.input,t=(e.meta,e.child,Object(n.a)(e,["input","meta","child"]));return r.a.createElement(m,e,r.a.createElement("textarea",Object.assign({},t,a)))},g=function(e){var a=e.input,t=(e.meta,e.child,Object(n.a)(e,["input","meta","child"]));return r.a.createElement(m,e,r.a.createElement("input",Object.assign({},t,a)))},d=function(e){var a=e.input,t=(e.meta,e.child,Object(n.a)(e,["input","meta","child"]));return r.a.createElement(m,e,r.a.createElement("input",Object.assign({},t,a)),r.a.createElement("span",null))},f=function(e,a,t,n){var s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{};return r.a.createElement("div",{className:l.a.login__label},r.a.createElement(c.a,Object.assign({className:l.a.login__field,name:e,component:a,validate:t,placeholder:n},s)))},p=function(e,a,t,n){var s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return r.a.createElement("label",{className:l.a.login__label+" "+l.a.checkbox},r.a.createElement(c.a,Object.assign({className:l.a.login__checkbox,name:e,component:a},s)),r.a.createElement("span",null,o))}},244:function(e,a,t){"use strict";t.d(a,"b",(function(){return n})),t.d(a,"a",(function(){return s}));var n=function(e){if(!e||0===e.length)return"Field is required"},s=function(e){return function(a){if(!(a&&a.length<e))return"Max length is ".concat(e," symbols")}}},311:function(e,a,t){e.exports={messages:"messages_messages__3E_ZK",messages__title:"messages_messages__title__2Q16F",messages__wrap:"messages_messages__wrap__3coLF",messages__users:"messages_messages__users__3VhTE",messages__dialogs:"messages_messages__dialogs__ALMAL",messages__chat:"messages_messages__chat__OFSai"}},312:function(e,a,t){e.exports={dialog:"dialogUser_dialog__3aDU-",dialog__user:"dialogUser_dialog__user__2FJMV",dialog__user_active:"dialogUser_dialog__user_active__3TxEN"}},313:function(e,a,t){e.exports={dialog:"message_dialog__1y9od",dialog__message:"message_dialog__message__2LtoD"}},314:function(e,a,t){e.exports={"post-form":"messageForm_post-form__3qcvK","post-form__field":"messageForm_post-form__field__3eLtP","post-form__btn":"messageForm_post-form__btn__6LBKO"}},316:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),r=t(311),o=t.n(r),l=t(312),_=t.n(l),i=t(15),c=function(e){return s.a.createElement("div",{className:_.a.dialog},s.a.createElement(i.b,{to:"/messages/".concat(e.id),activeClassName:_.a.dialog__user_active,className:_.a.dialog__user},e.name))},m=t(313),u=t.n(m),g=function(e){return s.a.createElement("div",{className:u.a.dialog},s.a.createElement("p",{className:u.a.dialog__message},e.message))},d=t(314),f=t.n(d),p=t(125),b=t(126),h=t(242),E=t(244),v=Object(E.a)(50),j=Object(b.a)({form:"messageForm"})((function(e){return s.a.createElement("form",{onSubmit:e.handleSubmit,className:f.a["post-form"]},s.a.createElement(p.a,{className:f.a["post-form__field"],validate:[E.b,v],component:h.c,name:"newMessageText",placeholder:"your message"}),s.a.createElement("button",{className:f.a["post-form__btn"]},"Send"))})),O=t(22),N=function(e){var a=e.dialogs.map((function(e){return s.a.createElement(c,{name:e.name,id:e.id,key:e.id})})),t=e.messages.map((function(e){return s.a.createElement(g,{message:e.message,id:e.id,key:e.id})}));return e.isAuth?s.a.createElement("div",{className:o.a.messages},s.a.createElement("h2",{className:o.a.messages__title},"Dialogs"),s.a.createElement("div",{className:o.a.messages__wrap},s.a.createElement("div",{className:o.a.messages__users},a),s.a.createElement("div",{className:o.a.messages__chat},t,s.a.createElement(j,{onSubmit:e.addMessage})))):s.a.createElement(O.a,{to:"/login"})},x=t(82),k=t(18),y=t(27),F=t(28),L=t(30),M=t(29),w=t(31),A=function(e){return{isAuth:e.auth.isAuth}},C=function(e){var a=function(a){function t(){return Object(y.a)(this,t),Object(L.a)(this,Object(M.a)(t).apply(this,arguments))}return Object(w.a)(t,a),Object(F.a)(t,[{key:"render",value:function(){return this.props.isAuth?s.a.createElement(e,this.props):s.a.createElement(O.a,{to:"/login"})}}]),t}(s.a.Component);return Object(k.b)(A)(a)},U=t(7),S=t(39),T=function(e){return e.messagesPage.messages},J=function(e){return e.messagesPage.dialogs};a.default=Object(U.d)(C,Object(k.b)((function(e){return{dialogs:J(e),messages:T(e),isAuth:Object(S.b)(e)}}),(function(e){return{addMessage:function(a){var t=Object(x.a)(a.newMessageText);e(t)}}})))(N)}}]);
//# sourceMappingURL=5.c2d75a81.chunk.js.map