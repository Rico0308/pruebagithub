(this.webpackJsonppruebagithub=this.webpackJsonppruebagithub||[]).push([[0],{266:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(9),c=n.n(i),l=n(23),o=n(43),s=n(294),d=n(295),j=n(306),b=n(297),u=n(268),h=n(298),m=n(299),O=n(300),x=n(305),g=n(301),p=n(5),f=n(73),v=n(126),y=n.n(v),C=n(127),_=n.n(C),w=n(125),k=n.n(w),E=n(308),R=n(296),S=n(307),N=n(3),q=Object(p.a)((function(e){return{head:{backgroundColor:"#B3E283",color:e.palette.common.black,fontWeight:"bold"},body:{fontSize:14}}}))(s.a),D=Object(p.a)((function(e){return{root:{"&:nth-of-type(odd)":{backgroundColor:e.palette.action.hover}}}}))(d.a),F=Object(R.a)((function(e){return{modal:{position:"absolute",width:1e3,backgroundColor:"white",border:"1px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3,4),top:"50%",left:"50%",transform:"translate(-50%, -50%)"}}})),I=function(){var e=new f.a,t=Object(o.c)((function(e){return e.info})).info,n=Object(r.useState)(1),a=Object(l.a)(n,2),i=a[0],c=a[1],s=Math.ceil(t.length/5),p=Object(r.useState)(!1),v=Object(l.a)(p,2),C=v[0],w=v[1],R=F(),I=Object(r.useState)([]),G=Object(l.a)(I,2),L=G[0],B=G[1],U=[];U=t.length>5?t.slice(5*(i-1),5*i):t;var z=Object(N.jsxs)("div",{className:R.modal,children:[Object(N.jsx)("h2",{id:"simple-modal-title",align:"center",children:"5 Resultados m\xe1s cercanos a la b\xfasqueda de Repositorio"}),Object(N.jsx)(j.a,{m:2,children:Object(N.jsx)(b.a,{component:u.a,children:Object(N.jsxs)(h.a,{mt:"2","aria-label":"customized table",children:[Object(N.jsx)(m.a,{children:Object(N.jsxs)(d.a,{children:[Object(N.jsx)(q,{align:"center",children:"Nombre Repositorio"}),Object(N.jsx)(q,{align:"center",children:"Lenguaje"}),Object(N.jsx)(q,{align:"center",children:"Branch por Defecto"}),Object(N.jsx)(q,{align:"center",children:"URL Git"}),Object(N.jsx)(q,{align:"center",children:"Descripci\xf3n"})]})}),Object(N.jsx)(O.a,{children:L.length>0?L.map((function(e){return Object(N.jsxs)(D,{children:[Object(N.jsx)(q,{align:"center",component:"th",scope:"row",children:e.name}),Object(N.jsx)(q,{align:"center",children:e.language}),Object(N.jsx)(q,{align:"center",children:e.default_branch}),Object(N.jsx)(q,{align:"center",children:Object(N.jsx)("a",{href:e.html_url,target:"_blank",rel:"noreferrer",style:{textDecoration:"none"},children:e.html_url})}),Object(N.jsx)(q,{align:"center",children:e.description})]},e.id)})):Object(N.jsx)(D,{align:"center",children:Object(N.jsx)(q,{children:Object(N.jsx)(S.a,{severity:"error",children:"No hay resultados"})})})})]})})})]});return Object(N.jsxs)("div",{children:[Object(N.jsxs)("h2",{children:["Informaci\xf3n del usuario de GitHub:",e.get("usuario_git")]}),Object(N.jsx)(x.a,{id:"search",placeholder:"Buscar Repositorio",disabled:!(U.length>0)}),Object(N.jsx)(g.a,{disabled:!(U.length>0),onClick:function(e){var t=document.getElementById("search").value,n=[];t.length>0?(U.filter((function(e){return e.name.substr(0,3).includes(t[2])})).map((function(e){return n.push(e)})),B(n)):B([]),w(!0)},children:Object(N.jsx)(k.a,{})}),Object(N.jsxs)(j.a,{m:2,children:[Object(N.jsx)(b.a,{component:u.a,children:Object(N.jsxs)(h.a,{mt:"2","aria-label":"customized table",children:[Object(N.jsx)(m.a,{children:Object(N.jsxs)(d.a,{children:[Object(N.jsx)(q,{align:"center",children:"Nombre Repositorio"}),Object(N.jsx)(q,{align:"center",children:"Lenguaje"}),Object(N.jsx)(q,{align:"center",children:"Branch por Defecto"}),Object(N.jsx)(q,{align:"center",children:"URL Git"}),Object(N.jsx)(q,{align:"center",children:"Descripci\xf3n"})]})}),Object(N.jsx)(O.a,{children:U.map((function(e){return Object(N.jsxs)(D,{children:[Object(N.jsx)(q,{align:"center",component:"th",scope:"row",children:e.name}),Object(N.jsx)(q,{align:"center",children:e.language}),Object(N.jsx)(q,{align:"center",children:e.default_branch}),Object(N.jsx)(q,{align:"center",children:Object(N.jsx)("a",{href:e.html_url,target:"_blank",rel:"noreferrer",style:{textDecoration:"none"},children:e.html_url})}),Object(N.jsx)(q,{align:"center",children:e.description})]},e.id)}))})]})}),Object(N.jsxs)(j.a,{m:2,children:[Object(N.jsx)(y.a,{style:{cursor:"pointer"},onClick:function(){i>1&&c(i-1)}}),Object(N.jsx)(_.a,{style:{cursor:"pointer"},onClick:function(){i<s&&c(i+1)}})]}),Object(N.jsx)(j.a,{children:Object(N.jsxs)("p",{children:["P\xe1gina: ",0===t.length?0:i,"/",s]})})]}),Object(N.jsx)(E.a,{open:C,onClose:function(){w(!1)},"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",children:z})]})},G=n(302),L=n(303),B=n(136),U=n(37),z=n(89),A=n.n(z),M=n(133),P="[Git] Load Info",H=n(134),J=n.n(H),T=function(e){return{type:P,payload:e}},V=function(){var e=Object(o.b)(),t=Object(B.a)({initialValues:{name:"",idcard:"",email:"",date:"",usergit:""},validationSchema:U.a({name:U.b().required("Nombre Requerido"),idcard:U.b().required("C\xe9dula Requerida"),email:U.b().email("Email Inv\xe1lido").required("Email Requerido"),date:U.b().required("Fecha Nacimiento Requerida"),usergit:U.b().required("Usuario de GitHub Requerido")}),onSubmit:function(n){var r,a=new f.a;a.set("nombre",n.name,{path:"/"}),a.set("cedula",n.idcard,{path:"/"}),a.set("email",n.email,{path:"/"}),a.set("fecha_nacimiento",n.date,{path:"/"}),a.set("usuario_git",n.usergit,{path:"/"}),e((r=n.usergit,function(){var e=Object(M.a)(A.a.mark((function e(t){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch("https://api.github.com/users/".concat(r,"/repos")).then((function(e){return e.json()})).then((function(e){0===e.length||"Not Found"===e.message?(J.a.fire({icon:"error",title:"Oops...",text:"El usuario ".concat(r," no existe o no tiene repositorios")}),t(T([]))):t(T(e))}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())),t.handleReset()}});return Object(N.jsxs)(G.a,{item:!0,xs:6,align:"center",children:[Object(N.jsx)("h2",{children:"Form User"}),Object(N.jsx)("form",{onSubmit:t.handleSubmit,children:Object(N.jsxs)(L.a,{children:[Object(N.jsx)(x.a,{id:"name",name:"name",label:"Nombre y Apellido",variant:"outlined",margin:"normal",autoComplete:"off",value:t.values.name,onChange:t.handleChange}),t.errors.name?Object(N.jsx)(S.a,{severity:"error",children:t.errors.name}):null,Object(N.jsx)(x.a,{id:"idcard",name:"idcard",type:"number",label:"Cedula",variant:"outlined",margin:"normal",autoComplete:"off",value:t.values.idcard,onChange:t.handleChange}),t.errors.idcard?Object(N.jsx)(S.a,{severity:"error",children:t.errors.idcard}):null,Object(N.jsx)(x.a,{id:"email",name:"email",label:"Correo",variant:"outlined",margin:"normal",autoComplete:"off",value:t.values.email,onChange:t.handleChange}),t.errors.email?Object(N.jsx)(S.a,{severity:"error",children:t.errors.email}):null,Object(N.jsx)(x.a,{id:"date",name:"date",label:"Fecha de Nacimiento",type:"date",InputLabelProps:{shrink:!0},variant:"outlined",margin:"normal",value:t.values.date,onChange:t.handleChange}),t.errors.date?Object(N.jsx)(S.a,{severity:"error",children:t.errors.date}):null,Object(N.jsx)(x.a,{id:"usergit",name:"usergit",label:"Usuario de Github",variant:"outlined",margin:"normal",autoComplete:"off",value:t.values.usergit,onChange:t.handleChange}),t.errors.usergit?Object(N.jsx)(S.a,{margin:"normal",severity:"error",children:t.errors.usergit}):null,Object(N.jsx)(j.a,{m:2,children:Object(N.jsx)(g.a,{type:"submit",variant:"contained",color:"primary",children:"Enviar"})})]})})]})},X=n(304),W=n(55),K=n(135),Q=n(15),Y=n(90),Z={info:[],active:null},$="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||W.c,ee=Object(W.b)({info:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case P:return Object(Y.a)(Object(Y.a)({},e),{},{info:Object(Q.a)(t.payload)});default:return e}}}),te=Object(W.d)(ee,$(Object(W.a)(K.a)));var ne=function(){return Object(N.jsx)(o.a,{store:te,children:Object(N.jsx)("div",{className:"App",children:Object(N.jsxs)(G.a,{container:!0,spacing:3,children:[Object(N.jsx)(G.a,{item:!0,xs:12,align:"center",children:Object(N.jsx)("h1",{children:"GitInnova"})}),Object(N.jsx)(G.a,{item:!0,xs:8,align:"center",children:Object(N.jsx)(X.a,{style:{backgroundColor:"#FEFFDE"},children:Object(N.jsx)(I,{})})}),Object(N.jsx)(G.a,{item:!0,xs:4,align:"center",children:Object(N.jsx)(X.a,{style:{backgroundColor:"#FFF5DA"},children:Object(N.jsx)(V,{})})})]})})})};c.a.render(Object(N.jsx)(a.a.StrictMode,{children:Object(N.jsx)(ne,{})}),document.getElementById("root"))}},[[266,1,2]]]);
//# sourceMappingURL=main.46d89f96.chunk.js.map