(this["webpackJsonpppl-finder"]=this["webpackJsonpppl-finder"]||[]).push([[0],{112:function(e,n,t){"use strict";t.r(n);var i,c,a,r,o,s,l,u,d,j,b,f,v,O,x,p,h,g,m=t(0),y=t.n(m),S=t(26),C=t.n(S),E=t(28),k=t(10),w=t(114),U=t(8),R=t(9),z=R.a.div(i||(i=Object(U.a)(["\n  font-size: ",";\n  font-weight: ",";\n"])),(function(e){return e.size}),(function(e){return e.bold?"700":"400"})),A=t(2),I=function(e){var n=e.size,t=void 0===n?"14px":n,i=e.children,c=e.bold;return Object(A.jsx)(w.a,{children:Object(A.jsx)(z,{size:t,bold:c,children:i})})},D=t(13),M=t(141),B=function(e){var n=e.size,t=e.color,i=e.thickness,c=e.variant;return Object(A.jsx)(M.a,{size:n,color:t,thickness:i,variant:c})},F=t(148),J=t(142),L=R.a.div(c||(c=Object(U.a)([""]))),_=function(e){var n=e.isChecked,t=e.onChange,i=e.label,c=e.value;return Object(A.jsx)(L,{children:Object(A.jsx)(J.a,{control:Object(A.jsx)(F.a,{checked:n,onChange:function(){t&&t(c)},color:"primary"}),label:i})})},N=t(143),V=t(72),G=t.n(V),P=function(){var e,n=null!==(e=localStorage.getItem("favoriteUsers"))&&void 0!==e?e:"{}";return n=JSON.parse(n)}(),q="ADD_USER",H="REMOVE_USER",T=function(e,n){switch(n.type){case q:return K(e,n.payload);case H:return Q(e,n.payload);default:return e}},K=function(e,n){var t=n.userId,i=n.user;return e[t]=i,localStorage.setItem("favoriteUsers",JSON.stringify(e)),e},Q=function(e,n){return delete e[n.userId],localStorage.setItem("favoriteUsers",JSON.stringify(e)),e},W=Object(m.createContext)(),X=function(e){var n=e.children,t=Object(m.useReducer)(T,P),i=Object(D.a)(t,2),c=i[0],a=i[1];return Object(A.jsx)(W.Provider,{value:{state:c,dispatch:a},children:n})},Y=R.a.div(a||(a=Object(U.a)(["\n  display: flex;\n  flex-direction: column;\n"]))),Z=R.a.div(r||(r=Object(U.a)(["\n  display: flex;\n  flex-direction: column;\n  gap: 35px;\n  width: 500px;\n  height: calc(100vh - 270px);\n  margin-block-start: 30px;\n  overflow-y: auto;\n"]))),$=R.a.div(o||(o=Object(U.a)(["\n  display: flex;\n  justify-content: center;\n  gap: 16px;\n"]))),ee=R.a.div(s||(s=Object(U.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: 100%;\n  max-height: 128px;\n  gap: 2px;\n  overflow: hidden;\n"]))),ne=R.a.img(l||(l=Object(U.a)(["\n  border-radius: 45%;\n"]))),te=R.a.div(u||(u=Object(U.a)(["\n  display: flex;\n  justify-content: center;\n"]))),ie=R.a.div(d||(d=Object(U.a)(["\n  display: flex;\n  flex-direction: column;\n  opacity: ",";\n  transition: opacity 0.2s ease-in-out;\n"])),(function(e){return e.isVisible?1:0})),ce=R.a.div(j||(j=Object(U.a)(["\n  display: flex;\n  justify-content: center;\n  & > * {\n    margin-inline-end: 8px;\n  }\n"]))),ae={BR:"Brazil",AU:"Australia",CA:"Canada",DE:"Germany",ES:"Spain"},re=y.a.forwardRef((function(e,n){var t=e.users,i=e.isLoading,c=e.toggleFavoriteUser,a=e.setUsersRef,r=Object(m.useContext)(W),o=r.state,s=(r.dispatch,Object(m.useState)()),l=Object(D.a)(s,2),u=l[0],d=l[1],j=Object(m.useState)([]),b=Object(D.a)(j,2),f=b[0],v=b[1],O=Object(m.useState)({BR:!1,AU:!1,CA:!1,DE:!1,ES:!1}),x=Object(D.a)(O,2),p=x[0],h=x[1],g=function(){d()},y=Object(m.useCallback)((function(e){S(e),k()?v(t):C()})),S=function(e){p[e]=!p[e],h(p)},C=function(){var e=E(),n=t.filter((function(n){return e.includes(null===n||void 0===n?void 0:n.location.country)}));v(n)},E=function(){return Object.keys(p).map((function(e){if(p[e])return ae[e]}))},k=function(){return Object.values(p).every((function(e){return!1===e}))};return Object(m.useEffect)((function(){k()&&v(t)}),[t]),Object(m.useEffect)((function(){a&&a(n)}),[null===n||void 0===n?void 0:n.current]),Object(A.jsxs)(Y,{children:[Object(A.jsxs)(ce,{children:[Object(A.jsx)(_,{value:"ES",label:"Spain",onChange:y,isChecked:p.ES}),Object(A.jsx)(_,{value:"BR",label:"Brazil",onChange:y,isChecked:p.BR}),Object(A.jsx)(_,{value:"AU",label:"Australia",onChange:y,isChecked:p.AU}),Object(A.jsx)(_,{value:"CA",label:"Canada",onChange:y,isChecked:p.CA}),Object(A.jsx)(_,{value:"DE",label:"Germany",onChange:y,isChecked:p.DE})]}),Object(A.jsxs)(Z,{children:[f.map((function(e,i){var a,r,s,l,j,b,f,v,O,x;return Object(A.jsxs)($,{onMouseEnter:function(){return function(e){d(e)}(i)},onMouseLeave:g,ref:i+1===(null===t||void 0===t?void 0:t.length)?n:null,children:[Object(A.jsx)(ne,{src:null===e||void 0===e||null===(a=e.picture)||void 0===a?void 0:a.large,alt:""}),Object(A.jsxs)(ee,{children:[Object(A.jsxs)(I,{size:"22px",bold:!0,children:[null===e||void 0===e||null===(r=e.name)||void 0===r?void 0:r.title," ",null===e||void 0===e||null===(s=e.name)||void 0===s?void 0:s.first," ",null===e||void 0===e||null===(l=e.name)||void 0===l?void 0:l.last]}),Object(A.jsx)(I,{size:"14px",children:null===e||void 0===e?void 0:e.email}),Object(A.jsxs)(I,{size:"14px",children:[null===e||void 0===e||null===(j=e.location)||void 0===j||null===(b=j.street)||void 0===b?void 0:b.number," ",null===e||void 0===e||null===(f=e.location)||void 0===f||null===(v=f.street)||void 0===v?void 0:v.name]}),Object(A.jsxs)(I,{size:"14px",children:[null===e||void 0===e||null===(O=e.location)||void 0===O?void 0:O.city," ",null===e||void 0===e||null===(x=e.location)||void 0===x?void 0:x.country]})]}),Object(A.jsx)(ie,{isVisible:i===u||o&&o[null===e||void 0===e?void 0:e.email],children:Object(A.jsx)("div",{onClick:function(){return c(e)},children:Object(A.jsx)(N.a,{children:Object(A.jsx)(G.a,{color:"error"})})})})]},i)})),i&&Object(A.jsx)(te,{children:Object(A.jsx)(B,{color:"primary",size:"45px",thickness:6,variant:"indeterminate"})})]})]})})),oe=t(51),se=t(35),le=t.n(se),ue=t(48),de=t(73),je=t.n(de),be=R.a.div(b||(b=Object(U.a)(["\n  display: flex;\n  height: 100vh;\n  align-items: center;\n  justify-content: center;\n  box-sizing: border-box;\n"]))),fe=R.a.div(f||(f=Object(U.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  padding-block-start: 100px;\n"]))),ve=R.a.div(v||(v=Object(U.a)(["\n  display: flex;\n"]))),Oe=(R.a.div(O||(O=Object(U.a)(["\n  display: flex;\n  flex-direction: column;\n  gap: 25px;\n  max-width: 400px;\n  width: 100%;\n"]))),function(){var e=function(){var e=Object(m.useState)([]),n=Object(D.a)(e,2),t=n[0],i=n[1],c=Object(m.useState)(1),a=Object(D.a)(c,2),r=a[0],o=a[1],s=Object(m.useState)(!1),l=Object(D.a)(s,2),u=l[0],d=l[1],j=new IntersectionObserver(function(){var e=Object(ue.a)(le.a.mark((function e(n){return le.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n[0].isIntersecting){e.next=4;break}return o(r+1),e.next=4,b();case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}());function b(){return f.apply(this,arguments)}function f(){return(f=Object(ue.a)(le.a.mark((function e(){var n,c;return le.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d(!0),e.next=3,je.a.get("https://randomuser.me/api/?results=25&page=".concat(r));case 3:n=e.sent,d(!1),c=[].concat(Object(oe.a)(t),Object(oe.a)(n.data.results)),i(c);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(m.useEffect)((function(){b()}),[]),{users:t,isLoading:u,observer:j}}(),n=e.users,t=e.isLoading,i=e.observer,c=Object(m.useContext)(W),a=c.state,r=c.dispatch,o=Object(m.useRef)();return Object(A.jsx)(be,{children:Object(A.jsxs)(fe,{children:[Object(A.jsx)(ve,{children:Object(A.jsx)(I,{size:"64px",bold:!0,children:"PplFinder"})}),Object(A.jsx)(re,{users:n,isLoading:t,toggleFavoriteUser:function(e){var n=null===e||void 0===e?void 0:e.email;a[n]?r({type:"REMOVE_USER",payload:{userId:n}}):r({type:"ADD_USER",payload:{userId:n,user:e}})},setUsersRef:function(e){if(i){var n=e.current;n&&i.observe(n)}},ref:o})]})})}),xe=t(74),pe=function(e){Object(xe.a)(e);var n=Object(m.useState)([]),t=Object(D.a)(n,2),i=t[0],c=t[1],a=Object(m.useState)(!1),r=Object(D.a)(a,2),o=r[0],s=r[1],l=Object(m.useState)(!0),u=Object(D.a)(l,2),d=u[0],j=u[1],b=Object(m.useContext)(W),f=b.state,v=b.dispatch;return Object(m.useEffect)((function(){c(Object.values(f))}),[d]),Object(m.useEffect)((function(){s(!0),function(){var e,n=null!==(e=localStorage.getItem("favoriteUsers"))&&void 0!==e?e:"{}";n=JSON.parse(n),c(Object.values(n))}(),s(!1)}),[]),Object(A.jsx)(re,{users:i,isLoading:o,toggleFavoriteUser:function(e){var n=null===e||void 0===e?void 0:e.email;f[n]?v({type:"REMOVE_USER",payload:{userId:n}}):v({type:"ADD_USER",payload:{userId:n,user:e}}),j(!d)}})},he=R.a.div(x||(x=Object(U.a)(["\n  display: flex;\n  height: 100vh;\n  align-items: center;\n  justify-content: center;\n  box-sizing: border-box;\n"]))),ge=R.a.div(p||(p=Object(U.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  padding-block-start: 100px;\n"]))),me=R.a.div(h||(h=Object(U.a)(["\n  display: flex;\n"]))),ye=(R.a.div(g||(g=Object(U.a)(["\n  display: flex;\n  flex-direction: column;\n  gap: 25px;\n  max-width: 400px;\n  width: 100%;\n"]))),function(){return Object(A.jsx)(he,{children:Object(A.jsxs)(ge,{children:[Object(A.jsx)(me,{children:Object(A.jsx)(I,{size:"64px",bold:!0,children:"Favorites"})}),Object(A.jsx)(pe,{})]})})}),Se=t(75),Ce=t(144),Ee=t(145),ke=function(e){var n=e.children,t={MuiTab:{root:{backgroundColor:"#303030"}}},i=y.a.useMemo((function(){return Object(Se.a)({overrides:t,palette:{type:"dark",primary:{main:"#84ffff"},error:{main:"#f06292"}}})}),[]);return Object(A.jsxs)(Ce.a,{theme:i,children:[Object(A.jsx)(Ee.a,{}),n]})},we=t(149),Ue=t(147),Re=t(146),ze=["/","/favorites"],Ae=function(){var e=Object(m.useState)((function(){var e=Object(k.f)().pathname;return ze.indexOf(e)})),n=Object(D.a)(e,2),t=n[0],i=n[1];return Object(A.jsx)(we.a,{position:"static",color:"transparent",style:{position:"fixed",top:0},children:Object(A.jsxs)(Ue.a,{value:t,onChange:function(e,n){i(n)},"aria-label":"Navigation",indicatorColor:"primary",textColor:"primary",children:[Object(A.jsx)(Re.a,{label:"Home",index:0,component:E.b,to:ze[0]}),Object(A.jsx)(Re.a,{label:"Favorites",index:1,component:E.b,to:ze[1]})]})})},Ie=function(){return Object(A.jsx)(ke,{children:Object(A.jsx)(E.a,{children:Object(A.jsxs)(X,{children:[Object(A.jsx)(Ae,{}),Object(A.jsxs)(k.c,{children:[Object(A.jsx)(k.a,{exact:!0,path:"/",component:Oe}),Object(A.jsx)(k.a,{path:"/favorites",component:ye})]})]})})})};C.a.render(Object(A.jsx)(Ie,{}),document.querySelector("#root"))}},[[112,1,2]]]);
//# sourceMappingURL=main.277dae6f.chunk.js.map