(function(t){function e(e){for(var i,s,r=e[0],c=e[1],l=e[2],f=0,p=[];f<r.length;f++)s=r[f],a[s]&&p.push(a[s][0]),a[s]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);u&&u(e);while(p.length)p.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],i=!0,r=1;r<n.length;r++){var c=n[r];0!==a[c]&&(i=!1)}i&&(o.splice(e--,1),t=s(s.s=n[0]))}return t}var i={},a={app:0},o=[];function s(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=i,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(n,i,function(e){return t[e]}.bind(null,i));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=c;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"122b":function(t,e,n){"use strict";var i=n("c8a7"),a=n.n(i);a.a},"126b":function(t,e,n){},"150b":function(t,e,n){},1925:function(t,e,n){"use strict";var i=n("e0d4"),a=n.n(i);a.a},"1b75":function(t,e,n){},"2a86":function(t,e,n){},"2da2":function(t,e,n){},"34df":function(t,e,n){"use strict";var i=n("4953"),a=n.n(i);a.a},"3a12":function(t,e,n){"use strict";var i=n("adce"),a=n.n(i);a.a},"3c8e":function(t,e,n){},4953:function(t,e,n){},"501e":function(t,e,n){"use strict";var i=n("c306"),a=n.n(i);a.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var i=n("3a00"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{class:1==t.navBarFixed?"isFixed":"",attrs:{id:"nav"}},[n("logo",{class:1==t.navBarColorFixed?"colorFixed":""}),n("navigation",{class:1==t.navBarColorFixed?"colorFixed":""})],1),n("section-header"),n("section-wrap"),n("section-footer")],1)},o=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("a",{staticClass:"logo-item",attrs:{href:t.link}},[t._v(t._s(t.message))])])},r=[],c={components:{},props:{},data:function(){return{link:"#",message:"Miya Carnival"}},watch:{},computed:{},methods:{},created:function(){},mounted:function(){}},l=c,u=(n("a0e5"),n("2877")),f=Object(u["a"])(l,s,r,!1,null,"77ce832c",null);f.options.__file="logo.vue";var p=f.exports,d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"navigation"},[n("ul",t._l(t.list,function(e){return n("li",{key:e.index},[n("a",{staticClass:"nav-items",attrs:{href:e.link}},[t._v(t._s(e.value))])])}),0)])},m=[],v={components:{},data:function(){return{list:[{link:"#wrap",value:"简介"},{link:"#project",value:"作品"},{link:"#about",value:"关于"},{link:"#",value:"施工中"}]}}},h=v,_=(n("d299"),Object(u["a"])(h,d,m,!1,null,"44ca28ed",null));_.options.__file="navigation.vue";var g=_.exports,b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header-title"},[n("h1",{staticClass:"text"},[t._v(t._s(t.title))]),n("p",{staticClass:"text"},[t._v(t._s(t.text))])])},x=[],k={components:{},props:{},data:function(){return{title:"Miya Carnival",text:"路过的熟悉，如同有你，已无转身的距离"}},watch:{},computed:{},methods:{},created:function(){},mounted:function(){}},y=k,C=(n("34df"),Object(u["a"])(y,b,x,!1,null,"9848bb36",null));C.options.__file="header.vue";var w=C.exports,j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"wrap"}},[n("simple-text",{staticClass:"wrap-title",attrs:{message:t.wrapTitle}}),n("div",{staticClass:"advantage"},t._l(t.advantageList,function(t){return n("advantage",{key:t.index,attrs:{icon:t.icon,title:t.title,text:t.text}})}),1),n("div",{staticClass:"project"},[n("simple-title",{staticClass:"content-title",attrs:{message:t.projectTitle}}),n("section",{staticClass:"project-items"},t._l(t.projectList,function(t){return n("project",{key:t.index,attrs:{href:t.link,src:t.src,title:t.title,text:t.text}})}),1)],1),n("div",{staticClass:"github"},[n("simple-title",{staticClass:"content-title",attrs:{message:t.githubPrimanyTitle}}),n("section",{staticClass:"github-items"},[n("section",{staticClass:"github-propagate prop"},[n("propagate",{attrs:{title:t.githubSecondTitle,text:t.githubText}})],1),n("section",{staticClass:"promise"},[n("promise")],1)])],1),n("div",{staticClass:"about-us"},[n("simple-title",{attrs:{message:t.aboutList.title}}),n("simple-text",{staticClass:"about-text",attrs:{message:t.aboutList.text}})],1)],1)},O=[],E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("p",[t._v(t._s(t.message))])])},M=[],T={components:{},props:["message"],data:function(){return{}},watch:{},computed:{},methods:{},created:function(){},mounted:function(){}},$=T,B=(n("68c9"),Object(u["a"])($,E,M,!1,null,"496ac039",null));B.options.__file="ty-simple-text.vue";var F=B.exports,L=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",[t._v(t._s(t.message))])])},S=[],P={components:{},props:["message"],data:function(){return{}},watch:{},computed:{},methods:{},created:function(){},mounted:function(){}},Y=P,N=(n("7f22"),Object(u["a"])(Y,L,S,!1,null,"2962185a",null));N.options.__file="ty-simple-title.vue";var J=N.exports,R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",{staticClass:"advantage-item"},[n("i",{staticClass:"fa fa-4x",class:t.icon}),n("h3",[t._v(t._s(t.title))]),n("p",[t._v(t._s(t.text))])])},A=[],H={components:{},props:["icon","title","text"],data:function(){return{}},watch:{},computed:{},methods:{},created:function(){},mounted:function(){}},V=H,q=(n("1925"),Object(u["a"])(V,R,A,!1,null,"4ca5abee",null));q.options.__file="ty-3-svg-text.vue";var D=q.exports,G=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"project-item",attrs:{href:t.href}},[n("img",{attrs:{src:t.src,alt:t.title}}),n("h3",[t._v(t._s(t.title))]),n("p",[t._v(t._s(t.text))])])},z=[],I={components:{},props:["href","src","title","text"],data:function(){return{}},watch:{},computed:{},methods:{},created:function(){},mounted:function(){}},K=I,Q=(n("f310"),Object(u["a"])(K,G,z,!1,null,"ffdd777c",null));Q.options.__file="ty-3-img-text.vue";var U=Q.exports,W=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"prop"},[n("i",{staticClass:"fa fa-github fa-large"}),n("h3",[t._v(t._s(t.title))]),n("p",[t._v(t._s(t.text))]),n("section",{staticClass:"button"},[n("Big-button",{attrs:{links:t.bigButton.links,message:t.bigButton.message}}),t._l(t.list,function(t){return n("Normal-button",{key:t.index,attrs:{icon:t.icon,links:t.links,message:t.message}})})],2)])},X=[],Z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("a",{attrs:{href:t.links,target:"_blank"}},[n("button",[t._v(t._s(t.message))])])])},tt=[],et={components:{},props:["links","message"],data:function(){return{}},watch:{},computed:{},methods:{},created:function(){},mounted:function(){}},nt=et,it=(n("fa00"),Object(u["a"])(nt,Z,tt,!1,null,"722b2aa9",null));it.options.__file="ty-big-button.vue";var at=it.exports,ot=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("a",{attrs:{href:t.links,target:"_blank"}},[n("button",[n("i",{staticClass:"fa",class:t.icon},[t._v(" "+t._s(t.message))])])])])},st=[],rt={components:{},props:["links","icon","message"],data:function(){return{}},watch:{},computed:{},methods:{},created:function(){},mounted:function(){}},ct=rt,lt=(n("122b"),Object(u["a"])(ct,ot,st,!1,null,"eef1303c",null));lt.options.__file="ty-normal-button.vue";var ut=lt.exports,ft={components:{"Big-button":at,"Normal-button":ut},props:["title","text"],data:function(){return{bigButton:{links:"https://github.com/Miya-Yukarin",message:"View Demo On GitHub"},list:[{links:"https://github.com/Miya-Yukarin/Miya-Carnival",icon:"fa-star",message:"Star"},{links:"https://github.com/Miya-Yukarin/Miya-Carnival",icon:"fa-code-fork",message:"Fork"}]}},watch:{},computed:{},methods:{},created:function(){},mounted:function(){}},pt=ft,dt=(n("a53e"),Object(u["a"])(pt,W,X,!1,null,"7c9cd95e",null));dt.options.__file="propagate.vue";var mt=dt.exports,vt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("h3",[t._v(t._s(t.message1))]),n("ul",t._l(t.list,function(e){return n("li",{key:e.index},[n("i",{staticClass:"fa fa-check"}),n("p",[t._v(t._s(e))])])}),0)])},ht=[],_t={components:{},props:["message"],data:function(){return{message1:"使用该模板您将得到",list:["6种不同的模板可自由组合","可快速部署于您的服务器","可自定义的组件列表","60个以上的组件","承诺不断更新"]}},watch:{},computed:{},methods:{},created:function(){},mounted:function(){}},gt=_t,bt=(n("3a12"),Object(u["a"])(gt,vt,ht,!1,null,"3963a0a2",null));bt.options.__file="promise.vue";var xt=bt.exports,kt={components:{"simple-text":F,"simple-title":J,advantage:D,project:U,propagate:mt,promise:xt},props:[],data:function(){return{wrapTitle:"Miya Carnival 是一套基于 Vue 的模板,只为内容渲染",advantageList:[{icon:"fa-flag",title:"可选的组件化工程",text:"组件化的配置使得部署一个站点变得非常简单,只需要选择想要的组件,再设置喜欢的颜色样式即可完成"},{icon:"fa-home",title:"多用途页面配置",text:"简单配置一个页面,无论企业网站还是博客网站,亦或是定价展示等,在这里都可以实现"},{icon:"fa-map",title:"示例页面和站点",text:"如果只是为了产品或内容的展示或寻找合适的idea,您完全可以根据我们提供的示例页面来设置操作"}],projectTitle:"近期作品",projectList:[{link:"https://Miya-Yukarin.github.io/JS-Nekomimi/",src:n("dfe7"),title:"Nekomimi-多功能导航页",text:"Nekomimi是一个简洁的导航页,可用于博客起始页面或固定内容落地页"},{link:"https://Miya-Yukarin.github.io/LandingPage/",src:n("6601"),title:"LandingPage-简洁起始页",text:"LandingPage是一个导航单页,仅输出标题与导航,无任何其他功能,回归简洁"},{link:"https://Miya-Yukarin.github.io/HTML-MinResume/",src:n("583e"),title:"Resume-个人简历项目",text:"Resume是基于Bootstrap的个人简历项目,纯粹为展示内容而生"}],githubPrimanyTitle:"关于本项目",githubSecondTitle:"免费且开源的模板",githubText:"本页面为开源模板,您可以随意修改并发布为您自己的网站页面",aboutList:{title:"关于我们",text:"具体的名字其实还没想好\n                        我们是一个新成立的社团\n                        虽然来自不同的领域\n                        但是由于共同的爱好走到了一起\n                        我们刚刚起步,请多指教"}}},watch:{},computed:{},methods:{},created:function(){},mounted:function(){}},yt=kt,Ct=(n("f5d6"),Object(u["a"])(yt,j,O,!1,null,"b41ecb06",null));Ct.options.__file="wrap.vue";var wt=Ct.exports,jt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",[n("logo",{staticClass:"footer colorFixed"}),n("navigation",{staticClass:"footer colorFixed"}),n("section",{staticClass:"social-items"},t._l(t.list,function(t){return n("social-button",{key:t.index,attrs:{links:t.links,icons:t.icons}})}),1)],1)},Ot=[],Et=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"social-icon"},[n("a",{attrs:{href:t.links}},[n("span",{staticClass:"fa",class:t.icons})])])},Mt=[],Tt={components:{},props:["links","icons"],data:function(){return{}},watch:{},computed:{},methods:{},created:function(){},mounted:function(){}},$t=Tt,Bt=(n("c013"),Object(u["a"])($t,Et,Mt,!1,null,"3b49049a",null));Bt.options.__file="social-button.vue";var Ft=Bt.exports,Lt={components:{logo:p,navigation:g,"social-button":Ft},props:[],data:function(){return{list:[{links:"#",icons:"fa-twitter"},{links:"#",icons:"fa-telegram"},{links:"#",icons:"fa-facebook"},{links:"#",icons:"fa-gitlab"},{links:"#",icons:"fa-linode"}]}},watch:{},computed:{},methods:{},created:function(){},mounted:function(){}},St=Lt,Pt=(n("501e"),Object(u["a"])(St,jt,Ot,!1,null,"bb581c74",null));Pt.options.__file="footer.vue";var Yt=Pt.exports,Nt={name:"App",components:{logo:p,navigation:g,"section-header":w,"section-wrap":wt,"section-footer":Yt},data:function(){return{navBarFixed:!1,navBarColorFixed:!1}},mounted:function(){window.addEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(){var t=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop,e=document.querySelector("#app").offsetTop;t>e?(this.navBarFixed=!0,this.navBarColorFixed=!0):(this.navBarFixed=!1,this.navBarColorFixed=!1)}},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)}},Jt=Nt,Rt=(n("7c55"),Object(u["a"])(Jt,a,o,!1,null,null,null));Rt.options.__file="App.vue";var At=Rt.exports;n("02ac"),n("150b");i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(At)}}).$mount("#app")},"583e":function(t,e,n){t.exports=n.p+"img/project3.58e723e0.png"},"5add":function(t,e,n){},6601:function(t,e,n){t.exports=n.p+"img/project2.637f11c4.png"},"68c9":function(t,e,n){"use strict";var i=n("5add"),a=n.n(i);a.a},"7ade":function(t,e,n){},"7c55":function(t,e,n){"use strict";var i=n("1b75"),a=n.n(i);a.a},"7da4":function(t,e,n){},"7f22":function(t,e,n){"use strict";var i=n("7ade"),a=n.n(i);a.a},a0e5:function(t,e,n){"use strict";var i=n("7da4"),a=n.n(i);a.a},a53e:function(t,e,n){"use strict";var i=n("2a86"),a=n.n(i);a.a},adce:function(t,e,n){},c013:function(t,e,n){"use strict";var i=n("fd76"),a=n.n(i);a.a},c306:function(t,e,n){},c8a7:function(t,e,n){},d299:function(t,e,n){"use strict";var i=n("f75d"),a=n.n(i);a.a},dfe7:function(t,e,n){t.exports=n.p+"img/project1.abb1316a.png"},e0d4:function(t,e,n){},f310:function(t,e,n){"use strict";var i=n("3c8e"),a=n.n(i);a.a},f5d6:function(t,e,n){"use strict";var i=n("2da2"),a=n.n(i);a.a},f75d:function(t,e,n){},fa00:function(t,e,n){"use strict";var i=n("126b"),a=n.n(i);a.a},fd76:function(t,e,n){}});
//# sourceMappingURL=app.5c88e49b.js.map