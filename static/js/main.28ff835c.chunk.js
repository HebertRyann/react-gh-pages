(this["webpackJsonpreact-gh-pages"]=this["webpackJsonpreact-gh-pages"]||[]).push([[0],{12:function(e,t,a){e.exports=a.p+"static/media/logo.62e865e1.svg"},30:function(e,t,a){e.exports=a.p+"static/media/heroes.1f4b5508.png"},32:function(e,t,a){e.exports=a(66)},37:function(e,t,a){},57:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(28),l=a.n(c),o=(a(37),a(9)),u=a(1),s=a(6),i=a.n(s),m=a(11),p=a(7),E=a(10),h=a(29),f=(a.n(h).a.create({baseURL:"http://localhost:3333"}),a(57),a(30)),d=a.n(f),b=a(12),g=a.n(b);function v(){var e=Object(n.useState)(""),t=Object(p.a)(e,2),a=t[0],c=t[1],l=Object(u.f)("");function s(){return(s=Object(m.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault();try{localStorage.setItem("ongId",a),localStorage.setItem("ongName","OngTest"),l.push("/profile")}catch(n){alert("Falha ao tentar o login, tente novamente")}case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return r.a.createElement("div",{className:"logon-container"},r.a.createElement("section",{className:"form"},r.a.createElement("img",{src:g.a,alt:"Be The Hero"}),r.a.createElement("form",{onSubmit:function(e){return s.apply(this,arguments)}},r.a.createElement("h1",null,"Fa\xe7a Seu logon"),r.a.createElement("input",{placeholder:"Sua ID",value:a,onChange:function(e){return c(e.target.value)}}),r.a.createElement("button",{className:"button",type:"submit"},"Entrar"),r.a.createElement(o.b,{className:"back-link",to:"/register"},r.a.createElement(E.b,{size:16,color:"#E02041"}),"N\xe3o Tenho Cadastro"))),r.a.createElement("img",{src:d.a,alt:"heroes"}))}a(63);function O(){var e=Object(n.useState)(""),t=Object(p.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(""),s=Object(p.a)(l,2),h=s[0],f=s[1],d=Object(n.useState)(""),b=Object(p.a)(d,2),v=b[0],O=b[1],C=Object(n.useState)(""),j=Object(p.a)(C,2),y=j[0],N=j[1],S=Object(n.useState)(""),k=Object(p.a)(S,2),w=k[0],I=k[1],D=Object(u.f)();function x(){return(x=Object(m.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),{name:a,email:h,whatsapp:v,city:y,uf:w};try{alert("Cadastro realizado com sucesso: ".concat(Math.floor(50*Math.random()))),D.push("/")}catch(n){alert("erro")}case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return r.a.createElement("div",{className:"register-container"},r.a.createElement("div",{className:"content"},r.a.createElement("section",null,r.a.createElement("img",{src:g.a,alt:"Be The Hero"}),r.a.createElement("h1",null,"Cadastro"),r.a.createElement("p",null,"Fa\xe7a seu Cadastro, Entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG."),r.a.createElement(o.b,{className:"back-link",to:"/"},r.a.createElement(E.a,{size:16,color:"#E02041"}),"N\xe3o Tenho Cadastro")),r.a.createElement("form",{onSubmit:function(e){return x.apply(this,arguments)}},r.a.createElement("input",{placeholder:"Nome Da ONG",value:a,onChange:function(e){return c(e.target.value)}}),r.a.createElement("input",{type:"email",placeholder:"E-mail",value:h,onChange:function(e){return f(e.target.value)}}),r.a.createElement("input",{placeholder:"Whatsapp",value:v,onChange:function(e){return O(e.target.value)}}),r.a.createElement("div",{className:"input-group"},r.a.createElement("input",{placeholder:"Cidade",value:y,onChange:function(e){return N(e.target.value)}}),r.a.createElement("input",{placeholder:"UF",style:{width:80},value:w,onChange:function(e){return I(e.target.value)}})),r.a.createElement("button",{className:"button",type:"submit"},"Cadastrar"))))}a(64);function C(){var e=[{id:1,title:"Adote um Cachorrinho",description:"Filhotes para ado\xe7\xe3o",value:50}],t=Object(u.f)(),a=localStorage.getItem("ongName");localStorage.getItem("ongId");function n(){return(n=Object(m.a)(i.a.mark((function t(a){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:try{e.filter((function(e){return e.id!==a}))}catch(n){alert("Error ao deletar")}case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return r.a.createElement("div",{className:"profile-container"},r.a.createElement("header",null,r.a.createElement("img",{src:g.a,alt:"Be The Hero"}),r.a.createElement("span",null,"Bem Vinda, ",a),r.a.createElement(o.b,{className:"button",to:"/incidents/new"},"Cadastra Novo Caso"),r.a.createElement("button",{onClick:function(){localStorage.clear(),t.push("/")},type:"button"},r.a.createElement(E.c,{size:18,color:"#E02041"}))),r.a.createElement("h1",null,"Casos Cadastrados"),r.a.createElement("ul",null,e.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("strong",null,"CASOS:"),r.a.createElement("p",null,e.title),r.a.createElement("strong",null,"DESCRI\xc7AO:"),r.a.createElement("p",null,e.description),r.a.createElement("strong",null,"VALOR:"),r.a.createElement("p",null,Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(e.value)),r.a.createElement("button",{onClick:function(){return function(e){return n.apply(this,arguments)}(e.id)},type:"button"},r.a.createElement(E.d,{size:20,color:"#a8a8b3"})))}))))}a(65);function j(){var e=Object(n.useState)(""),t=Object(p.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(""),s=Object(p.a)(l,2),h=s[0],f=s[1],d=Object(n.useState)(""),b=Object(p.a)(d,2),v=b[0],O=b[1],C=Object(u.f)();localStorage.getItem("ongId");function j(){return(j=Object(m.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),{title:a,description:h,value:v};try{C.push("/profile")}catch(n){alert("erro ao cadastrar caso")}case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return r.a.createElement("div",{className:"new-incident-container"},r.a.createElement("div",{className:"content"},r.a.createElement("section",null,r.a.createElement("img",{src:g.a,alt:"Be The Hero"}),r.a.createElement("h1",null,"Cadastra Novo Caso"),r.a.createElement("p",null,"Descreva o caso Detalhadamente para encontrar um heroi para resolver isso."),r.a.createElement(o.b,{className:"back-link",to:"/profile"},r.a.createElement(E.a,{size:16,color:"#E02041"}),"Voltar para Home")),r.a.createElement("form",{onSubmit:function(e){return j.apply(this,arguments)}},r.a.createElement("input",{placeholder:"Titulo Do Caso",value:a,onChange:function(e){return c(e.target.value)}}),r.a.createElement("textarea",{placeholder:"Descri\xe7ao",value:h,onChange:function(e){return f(e.target.value)}}),r.a.createElement("input",{placeholder:"Valor em Reais",value:v,onChange:function(e){return O(e.target.value)}}),r.a.createElement("button",{className:"button",type:"submit"},"Cadastrar"))))}function y(){return r.a.createElement(o.a,null,r.a.createElement(u.c,null,r.a.createElement(u.a,{path:"/",exact:!0,component:v}),r.a.createElement(u.a,{path:"/register",component:O}),r.a.createElement(u.a,{path:"/profile",component:C}),r.a.createElement(u.a,{path:"/incidents/new",component:j})))}var N=function(){return r.a.createElement(y,null)};l.a.render(r.a.createElement(N,null),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.28ff835c.chunk.js.map