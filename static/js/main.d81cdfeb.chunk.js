(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{11:function(e,t,a){e.exports={form:"ContactForm_form__1fuOn",input:"ContactForm_input__gm87B"}},15:function(e,t,a){e.exports={list:"ContactList_list__2T7aG",text:"ContactList_text__2dM24"}},18:function(e,t,a){e.exports={filter:"Filter_filter__1E5tH",input:"Filter_input__2DoVp"}},26:function(e){e.exports=JSON.parse('[{"id":"id-1","name":"Rosie Simpson","number":"+440(67)459-12-56"},{"id":"id-2","name":"Hermione Kline","number":"+380(50)443-89-12"},{"id":"id-3","name":"Eden Clements","number":"+330(42)645-17-79"},{"id":"id-4","name":"Annie Copeland","number":"+110(32)227-91-26"}]')},35:function(e,t,a){},36:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(13),i=a.n(r),s=(a(35),a(36),a(3)),o=a(4),l=a(11),b=a.n(l),u=a(48),d=a(49),j=(a(19),a(5)),m=a(6),O=Object(m.b)("contact/add"),p=Object(m.b)("contact/delete"),f=Object(m.b)("filter/value"),h=function(e){return e.contacts},x=function(e){return e.filter},v=function(e){var t=h(e),a=x(e).toLowerCase();return t.filter((function(e){return e.name.toLowerCase().includes(a)}))},C=a(1),_=Object(u.a)(),g=Object(u.a)();var N=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(""),i=Object(o.a)(r,2),l=i[0],m=i[1],p=Object(j.c)(h),f=Object(j.b)(),x=function(e){var t=e.target,a=t.name,n=t.value;switch(a){case"name":c(n);break;case"number":m(n)}};return Object(C.jsxs)("form",{className:b.a.form,onSubmit:function(e){e.preventDefault();var t,n={id:Object(u.a)(),name:a,number:l};t=n,p.map((function(e){return e.name})).includes(t.name)?alert("".concat(t.name," is already in contacts!")):f(O(Object(s.a)({},t),t.id)),c(""),m("")},children:[Object(C.jsx)("label",{className:b.a.label,htmlFor:_,children:"Name"}),Object(C.jsx)("input",{id:_,onChange:x,className:b.a.input,type:"text",name:"name",value:a,placeholder:"Enter name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0}),Object(C.jsx)("label",{className:b.a.label,htmlFor:g,children:"Number"}),Object(C.jsx)("input",{id:g,onChange:x,className:b.a.input,type:"tel",name:"number",value:l,placeholder:"Enter number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0}),Object(C.jsx)(d.a,{type:"submit",variant:"secondary",children:"Add contacts"})]})},A=a(15),y=a.n(A),k=function(){var e=Object(j.c)(v),t=Object(j.b)();return Object(C.jsx)("ul",{className:y.a.list,children:e.map((function(e){var a=e.id,n=e.name,c=e.number;return Object(C.jsxs)("li",{className:y.a.item,children:[Object(C.jsx)("p",{className:y.a.text,children:n+" : "+c}),Object(C.jsx)(d.a,{id:a,variant:"outline-secondary",onClick:function(){return t(p(a))},children:"Delete"})]},a)}))})},z=a(18),w=a.n(z),F=Object(u.a)(),E=function(){var e=Object(j.c)(x),t=Object(j.b)(),a=Object(n.useCallback)((function(e){t(f(e.target.value))}),[t]);return Object(C.jsxs)("label",{htmlFor:F,value:e,className:w.a.filter,children:["Find contact by name",Object(C.jsx)("input",{id:F,onChange:a,className:w.a.input,type:"text",name:"filter",value:e.value,placeholder:"Enter contact name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]})};var S,Z=function(){return Object(C.jsxs)("div",{className:"App",children:[Object(C.jsx)("h1",{className:"title",children:"Phonebook"}),Object(C.jsx)(N,{}),Object(C.jsx)("h2",{className:"title",children:"Contacts"}),Object(C.jsx)(E,{}),Object(C.jsx)(k,{})]})},J=a(28),L=a(23),B=a(14),M=a(2),q=a(24),D=a.n(q),H=a(7),T=a(25),$=a.n(T),G=a(10),I=a(26),K=Object(m.c)(I,(S={},Object(G.a)(S,O,(function(e,t){var a=t.payload;return[].concat(Object(B.a)(e),[a])})),Object(G.a)(S,p,(function(e,t){var a=t.payload;return e.filter((function(e){return e.id!==a}))})),S)),P=Object(m.c)("",Object(G.a)({},f,(function(e,t){return t.payload}))),R={key:"contacts",storage:$.a,blacklist:["filter"]},V=Object(M.b)({contacts:K,filter:P}),Q=Object(H.g)(R,V),U=[].concat(Object(B.a)(Object(m.d)({serializableCheck:{ignoredActions:[H.a,H.f,H.b,H.c,H.d,H.e]}})),[D.a]),W=Object(m.a)({reducer:Q,middleware:U,devTools:!1}),X={store:W,persistor:Object(H.h)(W)};i.a.render(Object(C.jsx)(c.a.StrictMode,{children:Object(C.jsx)(j.a,{store:X.store,children:Object(C.jsx)(L.a,{loading:"Loading...",persistor:X.persistor,children:Object(C.jsx)(J.a,{children:Object(C.jsx)(Z,{})})})})}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.d81cdfeb.chunk.js.map