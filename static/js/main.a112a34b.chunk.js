(this.webpackJsonpspring=this.webpackJsonpspring||[]).push([[0],{10:function(e,t,a){e.exports={menu:"Menu_menu__2hK9s",menuActive:"Menu_menuActive__2PyZZ",navArrow:"Menu_navArrow__4c6O7"}},11:function(e,t,a){e.exports={wrapperBlock:"Projects_wrapperBlock__3ZC7I",searchBlock:"Projects_searchBlock__vU10u",placeForSearch:"Projects_placeForSearch__1loZD",searchButton:"Projects_searchButton__2CdDl",springAtticProjects:"Projects_springAtticProjects__1oZCu",springProjects:"Projects_springProjects__smTQU"}},18:function(e,t,a){e.exports={wrapperBlock:"Header_wrapperBlock__2dhMt",headerBody:"Header_headerBody__2e9Ve",logo:"Header_logo__2419U",menuBurger:"Header_menuBurger__1hUDO",menuBurgerActive:"Header_menuBurgerActive__smpza"}},20:function(e,t,a){e.exports={wrapper:"Login_wrapper__oil-E",loginForm:"Login_loginForm__1IPrs",loginBtn:"Login_loginBtn__1Wf_W",registerLink:"Login_registerLink__15vfD"}},21:function(e,t,a){e.exports={wrapper:"Register_wrapper__1nSMt",loginForm:"Register_loginForm__19Jxf",loginBtn:"Register_loginBtn__2xb2U"}},23:function(e,t,a){e.exports={wrapperBlock:"Main_wrapperBlock__2N7t0",headpiece:"Main_headpiece__3qmKt",mainContent:"Main_mainContent__2eqQF"}},28:function(e,t,a){e.exports={wrapperBlock:"Footer_wrapperBlock__L1QZT",springFooter:"Footer_springFooter__3nXjw"}},29:function(e,t,a){e.exports={springFooterRight:"FooterRight_springFooterRight__2CBPU",sendingData:"FooterRight_sendingData__1CsvB"}},31:function(e,t,a){},42:function(e,t,a){e.exports=a.p+"static/media/logo.fc4350c5.svg"},47:function(e,t,a){e.exports=a.p+"static/media/pacman.c8a21978.svg"},48:function(e,t,a){e.exports={springProject:"SpringProject_springProject__1VQuq"}},49:function(e,t,a){e.exports={springFooterLeft:"FooterLeft_springFooterLeft__2vtGs"}},51:function(e,t,a){e.exports=a(80)},80:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(22),c=a.n(l);a(31),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var o=a(9),i=a(12),u=a(7),s=a(18),m=a.n(s),p=a(10),E=a.n(p),g=function(e){return r.a.createElement("div",{className:e.menu},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("div",null,r.a.createElement("span",null,"Why Spring"),r.a.createElement("div",{className:E.a.navArrow})),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"#"},"Overview")),r.a.createElement("li",null,r.a.createElement("a",{href:"#"},"Microservices")),r.a.createElement("li",null,r.a.createElement("a",{href:"#"},"Reactive")),r.a.createElement("li",null,r.a.createElement("a",{href:"#"},"Event Driven")),r.a.createElement("li",null,r.a.createElement("a",{href:"#"},"Cloud")))),r.a.createElement("li",null,r.a.createElement("div",null,r.a.createElement("span",null,"Learn"),r.a.createElement("div",{className:E.a.navArrow})),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"#"},"Overview")),r.a.createElement("li",null,r.a.createElement("a",{href:"#"},"Quickstart")),r.a.createElement("li",null,r.a.createElement("a",{href:"#"},"Guides")),r.a.createElement("li",null,r.a.createElement("a",{href:"#"},"Blog")))),r.a.createElement("li",null,r.a.createElement("div",null,r.a.createElement("span",null,"Projects"),r.a.createElement("div",{className:E.a.navArrow})),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"#"},"Overview")),r.a.createElement("li",null,r.a.createElement("a",{href:"#"},"Spring Boot")),r.a.createElement("li",null,r.a.createElement("a",{href:"#"},"Spring Framework")),r.a.createElement("li",null,r.a.createElement("a",{href:"#"},"Spring Cloud")),r.a.createElement("li",null,r.a.createElement("a",{href:"#"},"Spring Data")))),r.a.createElement("li",null,r.a.createElement("a",{href:"#"},r.a.createElement("span",null,"Training"))),r.a.createElement("li",null,r.a.createElement("a",{href:"#"},r.a.createElement("span",null,"Support"))),r.a.createElement("li",null,r.a.createElement("div",null,r.a.createElement("span",null,"Community"),r.a.createElement("div",{className:E.a.navArrow})),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"#"},"Overview")),r.a.createElement("li",null,r.a.createElement("a",{href:"#"},"Events")),r.a.createElement("li",null,r.a.createElement("a",{href:"#"},"Team")),r.a.createElement("li",null,r.a.createElement("a",{href:"#"},"Store"))))))},f=a(42),h=a.n(f),d=a(2),v=a(6),_=a.n(v),b=a(13),j=a(17),w="spring/loginPage/SET_USER_DATA",y="spring/loginPage/SET_SOME_STATUS",k=function(e){return{type:w,payload:{login:e}}},S=function(e){return{type:y,payload:{errorMessage:e}}},O=a(45),P=a.n(O).a.create({baseURL:"https://banana-tart-40503.herokuapp.com/"}),B=function(){var e=localStorage.getItem("token");return e?{Authorization:"Bearer ".concat(e)}:{}},N=function(){return P.get("projects",{headers:B()})},x=function(e){return P.get("projects?value=".concat(e),{headers:B()})},F=function(e,t){return P.post("login",{login:e,password:t})},C=function(e,t){return P.post("register",{login:e,password:t})},T={login:null,errorMessage:""},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:case y:return Object(j.a)({},e,{},t.payload);default:return e}},R=Object(o.f)((function(e){var t=Object(n.useState)(!1),a=Object(u.a)(t,2),l=a[0],c=a[1],o=Object(d.b)(),i=l?m.a.menuBurgerActive:m.a.menuBurger,s=l?E.a.menuActive:E.a.menu;l?document.querySelector("body").classList.add("lock"):document.querySelector("body").classList.remove("lock");return r.a.createElement("header",null,r.a.createElement("div",{className:m.a.wrapperBlock},r.a.createElement("div",{className:m.a.headerBody},r.a.createElement("div",{className:m.a.logo},r.a.createElement("a",{href:"#"},r.a.createElement("img",{src:h.a,alt:"logo"}))),r.a.createElement("div",{className:i,onClick:function(){c(!l)}},r.a.createElement("span",null)),r.a.createElement(g,{menu:s})),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){o((function(e){e(k(null))})),localStorage.clear(),e.history.push("/spring")}},"Log out"))))})),L=a(23),D=a.n(L),M=a(47),U=a.n(M),I=function(){return r.a.createElement("main",null,r.a.createElement("div",{className:D.a.wrapperBlock},r.a.createElement("img",{className:D.a.headpiece,src:U.a,alt:"pacman"}),r.a.createElement("div",{className:D.a.mainContent},r.a.createElement("h1",null,"Projects"),r.a.createElement("p",null,"From configuration to security, web apps to big data\u2014whatever the infrastructure needs of your application may be, there is a Spring Project to help you build it. Start small and use just what you need\u2014Spring is modular by design."))))},W=a(11),Q=a.n(W),Z=a(48),q=a.n(Z),G=function(e){return r.a.createElement("div",{className:q.a.springProject},r.a.createElement("div",null,r.a.createElement("img",{src:e.img,alt:"project_logo"})),r.a.createElement("div",null,r.a.createElement("h3",null,e.title),r.a.createElement("p",null,e.body)))},H="spring/projectsPage/SET_PROJECTS",J=function(e){return{type:H,payload:e}},K={springProjects:[],springAtticProjects:[]},V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case H:return Object(j.a)({},e,{},t.payload);default:return e}},X=function(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),a=t[0],l=t[1],c=Object(d.b)();Object(n.useEffect)((function(){c(function(){var e=Object(b.a)(_.a.mark((function e(t){var a;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N();case 3:a=e.sent,t(J(a.data)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}())}),[]);var o=Object(d.c)((function(e){return e.projectPage.springProjects})),i=Object(d.c)((function(e){return e.projectPage.springAtticProjects})),s=o.length?o.map((function(e){return r.a.createElement(G,{key:e.title,img:e.img,title:e.title,body:e.body})})):"No results",m=i.length?i.map((function(e){return r.a.createElement(G,{key:e.title,img:e.img,title:e.title,body:e.body})})):"No results",p=function(e){c(function(e){return function(){var t=Object(b.a)(_.a.mark((function t(a){var n;return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,x(e);case 3:n=t.sent,a(J(n.data)),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}(a))};return r.a.createElement("section",null,r.a.createElement("div",{className:Q.a.wrapperBlock},r.a.createElement("div",{className:Q.a.searchBlock},r.a.createElement("input",{className:Q.a.placeForSearch,value:a,onChange:function(e){l(e.currentTarget.value)},onKeyUp:p,type:"text",placeholder:"Search..."}),r.a.createElement("button",{className:Q.a.searchButton,onClick:p})),r.a.createElement("div",{className:Q.a.springProjects},s),r.a.createElement("div",{className:Q.a.springAtticProjects},r.a.createElement("h3",null,"Projects in the Attic"),r.a.createElement("div",{className:Q.a.springProjects},m))))},z=a(28),Y=a.n(z),$=a(49),ee=a.n($),te=function(){return r.a.createElement("div",{className:ee.a.springFooterLeft},r.a.createElement("div",null,r.a.createElement("p",null,r.a.createElement("a",{href:"#"},"Why spring")),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"#"},"Microservices")),r.a.createElement("li",null,r.a.createElement("a",{href:"#"},"Reactive")),r.a.createElement("li",null,r.a.createElement("a",{href:"#"},"Event Driven")),r.a.createElement("li",null,r.a.createElement("a",{href:"#"},"Cloud")),r.a.createElement("li",null,r.a.createElement("a",{href:"#"},"Web Applications")),r.a.createElement("li",null,r.a.createElement("a",{href:"#"},"Serverless")),r.a.createElement("li",null,r.a.createElement("a",{href:"#"},"Batch")))),r.a.createElement("div",null,r.a.createElement("p",null,r.a.createElement("a",{href:"#"},"Learn")),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"#"},"Quickstart")),r.a.createElement("li",null,r.a.createElement("a",{href:"#"},"Guides")),r.a.createElement("li",null,r.a.createElement("a",{href:"#"},"Blog")))),r.a.createElement("div",null,r.a.createElement("p",null,r.a.createElement("a",{href:"#"},"Community")),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"#"},"Events")),r.a.createElement("li",null,r.a.createElement("a",{href:"#"},"Team")),r.a.createElement("li",null,r.a.createElement("a",{href:"#"},"Store")))),r.a.createElement("div",null,r.a.createElement("p",null,r.a.createElement("a",{href:"#"},"Projects")),r.a.createElement("p",null,r.a.createElement("a",{href:"#"},"Training")),r.a.createElement("p",null,r.a.createElement("a",{href:"#"},"Support")),r.a.createElement("p",null,r.a.createElement("a",{href:"#"},"Thank you"))))},ae=a(29),ne=a.n(ae),re=function(){return r.a.createElement("div",{className:ne.a.springFooterRight},r.a.createElement("h3",null,"Get the Spring newsletter"),r.a.createElement("form",null,r.a.createElement("div",{className:ne.a.sendingData},r.a.createElement("input",{type:"text",placeholder:"Email Address"}),r.a.createElement("button",{type:"submit"},"Subscribe")),r.a.createElement("div",null,r.a.createElement("input",{id:"footer-checkbox",type:"checkbox"}),r.a.createElement("label",{htmlFor:"footer-checkbox"},"Yes, I would like to be contacted by The Spring Team and Pivotal for newsletters, promotions and events per the terms of Pivotal\u2019s"))))},le=function(){return r.a.createElement("div",{className:Y.a.wrapperBlock},r.a.createElement("div",{className:Y.a.springFooter},r.a.createElement(te,null),r.a.createElement(re,null)))},ce=a(20),oe=a.n(ce),ie="spring/registerPage/SET_IS_REGISTERED",ue=function(e){return{type:ie,payload:{isRegistered:e}}},se=Object(o.f)((function(e){var t=Object(n.useState)(""),a=Object(u.a)(t,2),l=a[0],c=a[1],o=Object(n.useState)(""),s=Object(u.a)(o,2),m=s[0],p=s[1],E=Object(d.b)(),g=Object(d.c)((function(e){return e.loginPage.errorMessage}));return r.a.createElement("div",{className:oe.a.wrapper},r.a.createElement("form",{className:oe.a.loginForm},r.a.createElement("h2",null,"Sign in"),r.a.createElement("input",{type:"text",placeholder:"login",value:l,onChange:function(e){c(e.currentTarget.value)}}),r.a.createElement("input",{type:"password",placeholder:"password",value:m,onChange:function(e){p(e.currentTarget.value)}}),r.a.createElement("div",null,r.a.createElement("span",null,g)),r.a.createElement("div",null,r.a.createElement("button",{className:oe.a.loginBtn,onClick:function(t){t.preventDefault(),E(function(e,t){return function(){var a=Object(b.a)(_.a.mark((function a(n){var r;return _.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,F(e,t);case 3:r=a.sent,localStorage.setItem("token",r.data.token),n(k(e)),n(S("")),a.next=13;break;case 9:a.prev=9,a.t0=a.catch(0),n(S(a.t0.response.data.error)),console.log(a.t0);case 13:case"end":return a.stop()}}),a,null,[[0,9]])})));return function(e){return a.apply(this,arguments)}}()}(l,m)).then((function(){e.history.push("/spring")}))}},"Sign in"),r.a.createElement(i.b,{to:"/register",className:oe.a.registerLink,onClick:function(){E(ue(!1)),E(S(""))}},"Registration"))))})),me=a(21),pe=a.n(me),Ee={isRegistered:!1},ge=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ie:return Object(j.a)({},e,{},t.payload);default:return e}},fe=function(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(""),s=Object(u.a)(c,2),m=s[0],p=s[1],E=Object(d.b)();if(Object(d.c)((function(e){return e.registerPage.isRegistered})))return r.a.createElement(o.a,{to:"/login"});return r.a.createElement("div",{className:pe.a.wrapper},r.a.createElement("form",{className:pe.a.loginForm},r.a.createElement("h2",null,"Registration"),r.a.createElement("input",{type:"text",placeholder:"login",value:a,onChange:function(e){l(e.currentTarget.value)}}),r.a.createElement("input",{type:"password",placeholder:"password",value:m,onChange:function(e){p(e.currentTarget.value)}}),r.a.createElement("div",null,r.a.createElement("button",{className:pe.a.loginBtn,onClick:function(e){e.preventDefault(),E(function(e,t){return function(){var a=Object(b.a)(_.a.mark((function a(n){return _.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,C(e,t);case 3:n(ue(!0)),a.next=9;break;case 6:a.prev=6,a.t0=a.catch(0),console.log(a.t0);case 9:case"end":return a.stop()}}),a,null,[[0,6]])})));return function(e){return a.apply(this,arguments)}}()}(a,m))}},"Registration"),r.a.createElement(i.b,{to:"/login"},r.a.createElement("button",{className:pe.a.loginBtn},"Cancel")))))},he=function(){return localStorage.getItem("token")?r.a.createElement(r.a.Fragment,null,r.a.createElement(R,null),r.a.createElement(I,null),r.a.createElement(X,null),r.a.createElement(le,null)):r.a.createElement(o.a,{to:"/login"})},de=function(){return r.a.createElement(i.a,null,r.a.createElement(o.a,{from:"/",to:"/spring"}),r.a.createElement(o.b,{path:"/spring",component:he}),r.a.createElement(o.b,{path:"/login",component:se}),r.a.createElement(o.b,{path:"/register",component:fe}))},ve=a(14),_e=a(50),be=Object(ve.c)({loginPage:A,projectPage:V,registerPage:ge}),je=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ve.d,we=Object(ve.e)(be,je(Object(ve.a)(_e.a)));c.a.render(r.a.createElement(d.a,{store:we},r.a.createElement(de,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[51,1,2]]]);
//# sourceMappingURL=main.a112a34b.chunk.js.map