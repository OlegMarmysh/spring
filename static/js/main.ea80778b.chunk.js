(this.webpackJsonpspring=this.webpackJsonpspring||[]).push([[0],{11:function(e,t,a){e.exports={menu:"Menu_menu__2hK9s",menuActive:"Menu_menuActive__2PyZZ",navArrow:"Menu_navArrow__4c6O7"}},12:function(e,t,a){e.exports={wrapperBlock:"Projects_wrapperBlock__3ZC7I",searchBlock:"Projects_searchBlock__vU10u",placeForSearch:"Projects_placeForSearch__1loZD",searchButton:"Projects_searchButton__2CdDl",springAtticProjects:"Projects_springAtticProjects__1oZCu",springProjects:"Projects_springProjects__smTQU"}},18:function(e,t,a){e.exports={wrapperBlock:"Header_wrapperBlock__2dhMt",headerBody:"Header_headerBody__2e9Ve",logo:"Header_logo__2419U",menuBurger:"Header_menuBurger__1hUDO",menuBurgerActive:"Header_menuBurgerActive__smpza"}},20:function(e,t,a){e.exports={wrapper:"Login_wrapper__oil-E",loginForm:"Login_loginForm__1IPrs",loginBtn:"Login_loginBtn__1Wf_W",registerLink:"Login_registerLink__15vfD"}},21:function(e,t,a){e.exports={wrapper:"Register_wrapper__1nSMt",loginForm:"Register_loginForm__19Jxf",loginBtn:"Register_loginBtn__2xb2U"}},23:function(e,t,a){e.exports={wrapperBlock:"Main_wrapperBlock__2N7t0",headpiece:"Main_headpiece__3qmKt",mainContent:"Main_mainContent__2eqQF"}},28:function(e,t,a){e.exports={wrapperBlock:"Footer_wrapperBlock__L1QZT",springFooter:"Footer_springFooter__3nXjw"}},29:function(e,t,a){e.exports={springFooterRight:"FooterRight_springFooterRight__2CBPU",sendingData:"FooterRight_sendingData__1CsvB"}},31:function(e,t,a){},42:function(e,t,a){e.exports=a.p+"static/media/logo.fc4350c5.svg"},47:function(e,t,a){e.exports=a.p+"static/media/pacman.c8a21978.svg"},48:function(e,t,a){e.exports={springProject:"SpringProject_springProject__1VQuq"}},49:function(e,t,a){e.exports={springFooterLeft:"FooterLeft_springFooterLeft__2vtGs"}},51:function(e,t,a){e.exports=a(80)},80:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(22),c=a.n(l);a(31),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var o=a(10),i=a(13),u=a(4),s=a(18),m=a.n(s),p=a(11),E=a.n(p),g=function(e){return r.a.createElement("div",{className:e.menu},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("div",null,r.a.createElement("span",null,"Why Spring"),r.a.createElement("div",{className:E.a.navArrow})),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"#"},"Overview")),r.a.createElement("li",null,r.a.createElement("a",{href:"#"},"Microservices")),r.a.createElement("li",null,r.a.createElement("a",{href:"#"},"Reactive")),r.a.createElement("li",null,r.a.createElement("a",{href:"#"},"Event Driven")),r.a.createElement("li",null,r.a.createElement("a",{href:"#"},"Cloud")))),r.a.createElement("li",null,r.a.createElement("div",null,r.a.createElement("span",null,"Learn"),r.a.createElement("div",{className:E.a.navArrow})),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"#"},"Overview")),r.a.createElement("li",null,r.a.createElement("a",{href:"#"},"Quickstart")),r.a.createElement("li",null,r.a.createElement("a",{href:"#"},"Guides")),r.a.createElement("li",null,r.a.createElement("a",{href:"#"},"Blog")))),r.a.createElement("li",null,r.a.createElement("div",null,r.a.createElement("span",null,"Projects"),r.a.createElement("div",{className:E.a.navArrow})),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"#"},"Overview")),r.a.createElement("li",null,r.a.createElement("a",{href:"#"},"Spring Boot")),r.a.createElement("li",null,r.a.createElement("a",{href:"#"},"Spring Framework")),r.a.createElement("li",null,r.a.createElement("a",{href:"#"},"Spring Cloud")),r.a.createElement("li",null,r.a.createElement("a",{href:"#"},"Spring Data")))),r.a.createElement("li",null,r.a.createElement("a",{href:"#"},r.a.createElement("span",null,"Training"))),r.a.createElement("li",null,r.a.createElement("a",{href:"#"},r.a.createElement("span",null,"Support"))),r.a.createElement("li",null,r.a.createElement("div",null,r.a.createElement("span",null,"Community"),r.a.createElement("div",{className:E.a.navArrow})),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"#"},"Overview")),r.a.createElement("li",null,r.a.createElement("a",{href:"#"},"Events")),r.a.createElement("li",null,r.a.createElement("a",{href:"#"},"Team")),r.a.createElement("li",null,r.a.createElement("a",{href:"#"},"Store"))))))},f=a(42),d=a.n(f),h=a(1),v=a(3),_=a.n(v),b=a(9),j=a(17),y="spring/loginPage/SET_USER_DATA",w="spring/loginPage/SET_ERROR_MESSAGE",O=function(e){return{type:y,payload:{login:e}}},S=function(e){return{type:w,payload:{errorMessage:e}}},k=a(45),P=a.n(k).a.create({baseURL:"https://banana-tart-40503.herokuapp.com/"}),N=function(){var e=localStorage.getItem("token");return e?{Authorization:"Bearer ".concat(e)}:{}},B=function(){return P.get("projects",{headers:N()})},x=function(e){return P.get("projects?value=".concat(e),{headers:N()})},R=function(e,t){return P.post("login",{login:e,password:t})},T=function(e,t,a,n,r){return P.post("register",{login:e,password:t,firstName:a,lastName:n,age:r})},A={login:null,errorMessage:""},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:case w:return Object(j.a)({},e,{},t.payload);default:return e}},F=function(){var e=Object(n.useState)(!1),t=Object(u.a)(e,2),a=t[0],l=t[1],c=Object(o.f)(),i=Object(h.b)(),s=a?m.a.menuBurgerActive:m.a.menuBurger,p=a?E.a.menuActive:E.a.menu;a?document.querySelector("body").classList.add("lock"):document.querySelector("body").classList.remove("lock");return r.a.createElement("header",null,r.a.createElement("div",{className:m.a.wrapperBlock},r.a.createElement("div",{className:m.a.headerBody},r.a.createElement("div",{className:m.a.logo},r.a.createElement("a",{href:"#"},r.a.createElement("img",{src:d.a,alt:"logo"}))),r.a.createElement("div",{className:s,onClick:function(){l(!a)}},r.a.createElement("span",null)),r.a.createElement(g,{menu:p})),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){i((function(e){e(O(null))})),localStorage.clear(),c.push("/spring")}},"Log out"))))},M=a(23),L=a.n(M),D=a(47),q=a.n(D),I=function(){return r.a.createElement("main",null,r.a.createElement("div",{className:L.a.wrapperBlock},r.a.createElement("img",{className:L.a.headpiece,src:q.a,alt:"pacman"}),r.a.createElement("div",{className:L.a.mainContent},r.a.createElement("h1",null,"Projects"),r.a.createElement("p",null,"From configuration to security, web apps to big data\u2014whatever the infrastructure needs of your application may be, there is a Spring Project to help you build it. Start small and use just what you need\u2014Spring is modular by design."))))},U=a(12),G=a.n(U),W=a(48),Q=a.n(W),Z=function(e){return r.a.createElement("div",{className:Q.a.springProject},r.a.createElement("div",null,r.a.createElement("img",{src:e.img,alt:"project_logo"})),r.a.createElement("div",null,r.a.createElement("h3",null,e.title),r.a.createElement("p",null,e.body)))},H="spring/projectsPage/SET_PROJECTS",J=function(e){return{type:H,payload:e}},K={springProjects:[],springAtticProjects:[]},V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case H:return Object(j.a)({},e,{},t.payload);default:return e}},X=function(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),a=t[0],l=t[1],c=Object(h.b)();Object(n.useEffect)((function(){c(function(){var e=Object(b.a)(_.a.mark((function e(t){var a;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,B();case 3:a=e.sent,t(J(a.data)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}())}),[]);var o=Object(h.c)((function(e){return e.projectPage.springProjects})),i=Object(h.c)((function(e){return e.projectPage.springAtticProjects})),s=o.length?o.map((function(e){return r.a.createElement(Z,{key:e.title,img:e.img,title:e.title,body:e.body})})):"No results",m=i.length?i.map((function(e){return r.a.createElement(Z,{key:e.title,img:e.img,title:e.title,body:e.body})})):"No results",p=function(e){c(function(e){return function(){var t=Object(b.a)(_.a.mark((function t(a){var n;return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,x(e);case 3:n=t.sent,a(J(n.data)),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}(a))};return r.a.createElement("section",null,r.a.createElement("div",{className:G.a.wrapperBlock},r.a.createElement("div",{className:G.a.searchBlock},r.a.createElement("input",{className:G.a.placeForSearch,value:a,onChange:function(e){l(e.currentTarget.value)},onKeyUp:p,type:"text",placeholder:"Search..."}),r.a.createElement("button",{className:G.a.searchButton,onClick:p})),r.a.createElement("div",{className:G.a.springProjects},s),r.a.createElement("div",{className:G.a.springAtticProjects},r.a.createElement("h3",null,"Projects in the Attic"),r.a.createElement("div",{className:G.a.springProjects},m))))},z=a(28),Y=a.n(z),$=a(49),ee=a.n($),te=function(){return r.a.createElement("div",{className:ee.a.springFooterLeft},r.a.createElement("div",null,r.a.createElement("p",null,r.a.createElement("a",{href:"#"},"Why spring")),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"#"},"Microservices")),r.a.createElement("li",null,r.a.createElement("a",{href:"#"},"Reactive")),r.a.createElement("li",null,r.a.createElement("a",{href:"#"},"Event Driven")),r.a.createElement("li",null,r.a.createElement("a",{href:"#"},"Cloud")),r.a.createElement("li",null,r.a.createElement("a",{href:"#"},"Web Applications")),r.a.createElement("li",null,r.a.createElement("a",{href:"#"},"Serverless")),r.a.createElement("li",null,r.a.createElement("a",{href:"#"},"Batch")))),r.a.createElement("div",null,r.a.createElement("p",null,r.a.createElement("a",{href:"#"},"Learn")),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"#"},"Quickstart")),r.a.createElement("li",null,r.a.createElement("a",{href:"#"},"Guides")),r.a.createElement("li",null,r.a.createElement("a",{href:"#"},"Blog")))),r.a.createElement("div",null,r.a.createElement("p",null,r.a.createElement("a",{href:"#"},"Community")),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"#"},"Events")),r.a.createElement("li",null,r.a.createElement("a",{href:"#"},"Team")),r.a.createElement("li",null,r.a.createElement("a",{href:"#"},"Store")))),r.a.createElement("div",null,r.a.createElement("p",null,r.a.createElement("a",{href:"#"},"Projects")),r.a.createElement("p",null,r.a.createElement("a",{href:"#"},"Training")),r.a.createElement("p",null,r.a.createElement("a",{href:"#"},"Support")),r.a.createElement("p",null,r.a.createElement("a",{href:"#"},"Thank you"))))},ae=a(29),ne=a.n(ae),re=function(){return r.a.createElement("div",{className:ne.a.springFooterRight},r.a.createElement("h3",null,"Get the Spring newsletter"),r.a.createElement("form",null,r.a.createElement("div",{className:ne.a.sendingData},r.a.createElement("input",{type:"text",placeholder:"Email Address"}),r.a.createElement("button",{type:"submit"},"Subscribe")),r.a.createElement("div",null,r.a.createElement("input",{id:"footer-checkbox",type:"checkbox"}),r.a.createElement("label",{htmlFor:"footer-checkbox"},"Yes, I would like to be contacted by The Spring Team and Pivotal for newsletters, promotions and events per the terms of Pivotal\u2019s"))))},le=function(){return r.a.createElement("div",{className:Y.a.wrapperBlock},r.a.createElement("div",{className:Y.a.springFooter},r.a.createElement(te,null),r.a.createElement(re,null)))},ce=a(20),oe=a.n(ce),ie=function(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(""),s=Object(u.a)(c,2),m=s[0],p=s[1],E=Object(h.b)(),g=Object(h.c)((function(e){return e.loginPage.errorMessage})),f=Object(o.f)();return r.a.createElement("div",{className:oe.a.wrapper},r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),E(function(e,t){return function(){var a=Object(b.a)(_.a.mark((function a(n){var r;return _.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,R(e,t);case 3:r=a.sent,localStorage.setItem("token",r.data.token),n(O(e)),n(S("")),a.next=13;break;case 9:a.prev=9,a.t0=a.catch(0),n(S(a.t0.response.data.error)),console.log(a.t0);case 13:case"end":return a.stop()}}),a,null,[[0,9]])})));return function(e){return a.apply(this,arguments)}}()}(a,m)).then((function(){localStorage.getItem("token")&&f.push("/spring")}))},className:oe.a.loginForm},r.a.createElement("h2",null,"Sign in"),r.a.createElement("input",{type:"text",placeholder:"login",value:a,onChange:function(e){l(e.currentTarget.value)}}),r.a.createElement("input",{type:"password",placeholder:"password",value:m,onChange:function(e){p(e.currentTarget.value)}}),r.a.createElement("div",null,r.a.createElement("span",null,g)),r.a.createElement("div",null,r.a.createElement("button",{className:oe.a.loginBtn},"Sign in"),r.a.createElement(i.b,{to:"/register",className:oe.a.registerLink,onClick:function(){E(S(""))}},"Registration"))))},ue=a(21),se=a.n(ue),me="spring/registerPage/SET_LOGIN_ERROR",pe="spring/registerPage/SET_PASS_ERROR",Ee="spring/registerPage/SET_FIRSTNAME_ERROR",ge="spring/registerPage/SET_LASTNAME_ERROR",fe="spring/registerPage/SET_AGE_ERROR",de=function(e){return{type:"spring/registerPage/SET_ERROR_MESSAGE",payload:{errorMessage:e}}},he=function(e){return{type:me,payload:{loginError:e}}},ve=function(e){return{type:pe,payload:{passError:e}}},_e=function(e){return{type:Ee,payload:{firstNameError:e}}},be=function(e){return{type:ge,payload:{lastNameError:e}}},je=function(e){return{type:fe,payload:{ageError:e}}},ye={errorMessage:"",loginError:{},passError:{},firstNameError:{},lastNameError:{},ageError:{}},we=function(){return function(e){e(de("")),e(he({})),e(ve({})),e(_e({})),e(be({})),e(je({}))}},Oe=function(e,t,a,n,r){return function(){var l=Object(b.a)(_.a.mark((function l(c){return _.a.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:return l.prev=0,l.next=3,T(e,t,a,n,r);case 3:c(we()),l.next=13;break;case 6:return l.prev=6,l.t0=l.catch(0),c(we()),c(de(l.t0.response.data.error)),l.t0.response.data.errors&&(c(he(l.t0.response.data.errors.find((function(e){return"login"===e.param}))||{msg:""})),c(ve(l.t0.response.data.errors.find((function(e){return"password"===e.param}))||{msg:""})),c(_e(l.t0.response.data.errors.find((function(e){return"firstName"===e.param}))||{msg:""})),c(be(l.t0.response.data.errors.find((function(e){return"lastName"===e.param}))||{msg:""})),c(je(l.t0.response.data.errors.find((function(e){return"age"===e.param}))||{msg:""}))),console.log(l.t0),l.abrupt("return",l.t0);case 13:case"end":return l.stop()}}),l,null,[[0,6]])})));return function(e){return l.apply(this,arguments)}}()},Se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ye,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"spring/registerPage/SET_ERROR_MESSAGE":case me:case pe:case Ee:case ge:case fe:return Object(j.a)({},e,{},t.payload);default:return e}},ke=function(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(""),s=Object(u.a)(c,2),m=s[0],p=s[1],E=Object(n.useState)(""),g=Object(u.a)(E,2),f=g[0],d=g[1],v=Object(n.useState)(""),j=Object(u.a)(v,2),y=j[0],w=j[1],O=Object(n.useState)(""),S=Object(u.a)(O,2),k=S[0],P=S[1],N=Object(n.useState)(""),B=Object(u.a)(N,2),x=B[0],R=B[1],T=Object(h.b)(),A=Object(o.f)(),C=Object(h.c)((function(e){return e.registerPage.errorMessage})),F=Object(h.c)((function(e){return e.registerPage.loginError})),M=Object(h.c)((function(e){return e.registerPage.passError})),L=Object(h.c)((function(e){return e.registerPage.firstNameError})),D=Object(h.c)((function(e){return e.registerPage.lastNameError})),q=Object(h.c)((function(e){return e.registerPage.ageError})),I=function(){var e=Object(b.a)(_.a.mark((function e(t){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,m===f){e.next=6;break}T(de("Passwords must match")),e.next=10;break;case 6:return e.next=8,T(Oe(a,m,y,k,x));case 8:e.sent||A.push("/login");case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:se.a.wrapper},r.a.createElement("form",{onSubmit:I,className:se.a.loginForm},r.a.createElement("h2",null,"Registration"),r.a.createElement("input",{type:"text",placeholder:"login",value:a,onChange:function(e){l(e.currentTarget.value)},required:!0}),r.a.createElement("div",null,r.a.createElement("span",null,F.msg)),r.a.createElement("input",{type:"password",placeholder:"password",value:m,onChange:function(e){p(e.currentTarget.value)},required:!0}),r.a.createElement("div",null,r.a.createElement("span",null,M.msg)),r.a.createElement("input",{type:"password",placeholder:"confirm password",value:f,onChange:function(e){d(e.currentTarget.value)},required:!0}),r.a.createElement("input",{type:"text",placeholder:"firstName",value:y,onChange:function(e){w(e.currentTarget.value)},required:!0}),r.a.createElement("div",null,r.a.createElement("span",null,L.msg)),r.a.createElement("input",{type:"text",placeholder:"lastName",value:k,onChange:function(e){P(e.currentTarget.value)},required:!0}),r.a.createElement("div",null,r.a.createElement("span",null,D.msg)),r.a.createElement("input",{type:"text",placeholder:"age",value:x,onChange:function(e){R(e.currentTarget.value)},required:!0}),r.a.createElement("div",null,r.a.createElement("span",null,q.msg)),r.a.createElement("div",null,r.a.createElement("span",null,C)),r.a.createElement("div",null,r.a.createElement("button",{className:se.a.loginBtn},"Registration"),r.a.createElement(i.b,{to:"/login"},r.a.createElement("button",{className:se.a.loginBtn,onClick:function(){T(we())}},"Cancel")))))},Pe=function(){return localStorage.getItem("token")?r.a.createElement(r.a.Fragment,null,r.a.createElement(F,null),r.a.createElement(I,null),r.a.createElement(X,null),r.a.createElement(le,null)):r.a.createElement(o.a,{to:"/login"})},Ne=function(){return r.a.createElement(i.a,null,r.a.createElement(o.a,{from:"/",to:"/spring"}),r.a.createElement(o.b,{path:"/spring",component:Pe}),r.a.createElement(o.b,{path:"/login",component:ie}),r.a.createElement(o.b,{path:"/register",component:ke}))},Be=a(14),xe=a(50),Re=Object(Be.c)({loginPage:C,projectPage:V,registerPage:Se}),Te=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Be.d,Ae=Object(Be.e)(Re,Te(Object(Be.a)(xe.a)));c.a.render(r.a.createElement(h.a,{store:Ae},r.a.createElement(Ne,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[51,1,2]]]);
//# sourceMappingURL=main.ea80778b.chunk.js.map