(function(t){function e(e){for(var r,i,o=e[0],c=e[1],u=e[2],d=0,h=[];d<o.length;d++)i=o[d],s[i]&&h.push(s[i][0]),s[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);l&&l(e);while(h.length)h.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,o=1;o<n.length;o++){var c=n[o];0!==s[c]&&(r=!1)}r&&(a.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},s={1:0},a=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var l=c;a.push([10,0]),n()})({"1/63":function(t,e,n){},10:function(t,e,n){t.exports=n("Vtdi")},"1Gzm":function(t,e,n){"use strict";var r=n("NGCh"),s=n.n(r);s.a},"6uXG":function(t,e,n){},AaKg:function(t,e,n){},BkKr:function(t,e,n){"use strict";var r=n("l8/C"),s=n.n(r);s.a},EDI0:function(t,e,n){},Es6G:function(t,e,n){},JkkD:function(t,e,n){"use strict";var r=n("tBPg"),s=n.n(r);s.a},NGCh:function(t,e,n){},OwbV:function(t,e,n){t.exports=n.p+"img/logo-curling-bandits.e80e8bf4.png"},Vtdi:function(t,e,n){"use strict";n.r(e);n("VRzm");var r=n("Kw5r"),s=n("jE9Z"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("nav",[n("router-link",{staticClass:"nav",attrs:{to:"/",id:"home"}},[t._v("Home")]),n("router-link",{staticClass:"nav",attrs:{to:"/about"}},[t._v("About Us")]),n("router-link",{staticClass:"nav",attrs:{to:"/public"}},[t._v("Public Page")]),n("router-link",{staticClass:"nav",attrs:{to:"/user"}},[t._v("Users Page")]),n("router-link",{staticClass:"nav",attrs:{to:"/community"}},[t._v("Community")]),n("router-link",{staticClass:"nav",attrs:{to:"/news"}},[t._v("News")]),t.user?n("a",{on:{click:function(e){return e.preventDefault(),t.handleLogout(e)}}},[t._v("Logout")]):n("router-link",{staticClass:"nav",attrs:{to:"/login"}},[t._v("Sign In")])],1),t._m(0),n("router-view",{attrs:{"on-user":t.handleUser,user:t.user}})],1)},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h1",{staticClass:"musicbox"},[t._v("Music"),n("span",[t._v("Box")])])}],o={data:function(){return{backgroundImage:"../images/bg-musicbox.jpg",user:null}},created:function(){var t=localStorage.user;if(t)try{this.user=JSON.parse(t)}catch(t){localStorage.removeItem("user")}},methods:{handleUser:function(t){this.user=t,localStorage.user=JSON.stringify(t)},handleLogout:function(){localStorage.removeItem("user"),this.user=null}}},c=o,u=(n("ZL7j"),n("KHd+")),l=Object(u["a"])(c,a,i,!1,null,null,null),d=l.exports,h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._m(0),n("p",[t._v("Welcome to MusicBox! Please excuse our pixie dust...")]),n("p",[t._v("Click "),n("router-link",{attrs:{to:"/public"}},[t._v("here")]),t._v(" to get started!")],1)])},p=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h1",[t._v("Music"),n("span",[t._v("Box")])])}],f={},m=f,v=(n("1Gzm"),Object(u["a"])(m,h,p,!1,null,"67336931",null)),g=v.exports,_=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},b=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"team-div"},[r("h1",[t._v("About Us")]),r("div",{staticClass:"team-cb"},[r("img",{attrs:{src:"https://avatars0.githubusercontent.com/u/35393465?s=400&u=e9efbc50f09f7bfe576b1d947ea9864badb5d344&v=4",alt:"profile picture"}}),r("h3",[t._v("Mariah Adams")]),r("p",[t._v("As a member of the Curling Bandits, Mariah wipes the curling sheet with the competition.\n      She can guide the stone into the house center with her eyes closed. Outside of her life's work, which is\n      curling, she enjoys video games, watching movies, and golfing.\n    ")])]),r("div",{staticClass:"team-cb"},[r("img",{attrs:{src:"https://media.licdn.com/dms/image/C5603AQHOr-IN5NcObA/profile-displayphoto-shrink_800_800/0?e=1534982400&v=beta&t=ggLQRjaxvtyePoyeJf-rlgbHBLzwQWMuMuH25jG4lNY",alt:"profile picture"}}),r("h3",[t._v("Chris Golden")]),r("p",[t._v("A literal chessmaster on the ice, Chris uses his extreme skills with the curling broom to\n      sweep away all competition. When not engaging in the love of his life, which is curling, he\n      enjoys climbing, biking, and video games.\n    ")])]),r("div",{staticClass:"team-cb"},[r("img",{attrs:{src:"https://avatars2.githubusercontent.com/u/38193198?s=400&v=4",alt:"profile picture"}}),r("h3",[t._v("Carmen Ramos")]),r("p",[t._v("Carmen is responsible for taking the Curlng Bandits from good to great. Whether she's throwing a guard, draw, or\n      takeout, she always hits her mark. When she's not playing \"the Roaring Game\", which is curling, she can be \n      found walking, programming, and drying fruit.\n    ")])]),r("div",{staticClass:"team-cb"},[r("img",{attrs:{src:"https://media.licdn.com/dms/image/C4E03AQGcC2fKtU6TLQ/profile-displayphoto-shrink_800_800/0?e=1534982400&v=beta&t=4QLOU0ShZ7nb4zg4V26m_5DGCrvfG0Y6H0iaYfvFn4o",alt:"profile picture"}}),r("h3",[t._v("Injoong Yoon")]),r("p",[t._v("For Injoong, curling isn't just a game; it's a way of life. He lives, breathes, and eats curling,\n      every single day, and still can't get enough of it. When not reveling in the greatest sport in the world,\n      which is curling, he enjoys cooking, writing, and playing games.\n    ")])]),r("div",{staticClass:"logo"},[r("img",{attrs:{src:n("OwbV"),alt:"curling bandits logo"}})])])}],w={},k=w,y=(n("XApS"),Object(u["a"])(k,_,b,!1,null,null,null)),C=y.exports,S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("Search for songs:")]),n("form",{staticClass:"search",on:{submit:function(e){return e.preventDefault(),t.handleSubmit(e)}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.song,expression:"song"}],attrs:{type:"text",placeholder:"search for songs, albums, or artists"},domProps:{value:t.song},on:{input:function(e){e.target.composing||(t.song=e.target.value)}}}),n("button",{attrs:{type:"submit"}},[t._v("search")])]),n("div",{staticClass:"music-player"},[n("h2",[t._v(t._s(t.track.name))]),n("h3",[t._v(t._s(t.track.artistName))]),n("h5",[t._v(t._s(t.track.albumName))]),t.track?n("audio",{attrs:{controls:"",src:t.track.previewURL}}):t._e(),t.track?n("button",{on:{click:t.handleAdd}},[t._v("Add to profile")]):t._e()]),n("h2",[t._v("Results:")]),n("ul",t._l(t.musicList,function(e){return n("li",{key:e.id,on:{click:function(n){t.track=e}}},[n("strong",[t._v(t._s(e.name))]),t._v("\n      "+t._s(e.artistName)+"\n    ")])}))])},j=[],x=(n("f3/d"),n("OG14"),"http://localhost:3000/api"),O="https://api.napster.com/v2.2/search?query=",N="https://newsapi.org/v2/everything?sources=entertainment-weekly&q=music&sortBy=publishedAt&pageSize=10&apiKey=9fa47f32b7bd438a93898938d10d85ad",P=("".concat(x,"/musicbox"),"".concat(x,"/users")),A="".concat(x,"/savedsongs"),$="".concat(x,"/auth");function E(t){return t.ok?t.json():t.json().then(function(t){throw t.message})}function L(t){var e={};t&&(e["Content-Type"]="application/json");var n=localStorage.user;if(n)try{e["Authorization"]=JSON.parse(n).id}catch(t){localStorage.removeItem("user")}return e}function U(t){var e=O+encodeURIComponent(t)+"&type=track&apikey=ZWQwYzkzOTctNzY5Ni00ZjkwLTkyODMtMDc3YTQwMDFmN2Y5";return fetch(e).then(E)}function T(){return fetch(N).then(E)}function I(){return fetch(P,{headers:{"Content-Type":"application/json"}}).then(E)}function D(t){return fetch("".concat(x,"/users/").concat(t),{headers:{"Content-Type":"application/json"}}).then(E)}function M(t){return fetch("".concat(A,"/").concat(t),{headers:{"Content-Type":"application/json"}}).then(E)}function z(t){return fetch("".concat(A,"/").concat(t),{method:"DELETE",headers:{"Content-Type":"application/json"}}).then(E)}function G(t){return fetch(A,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then(E)}function B(t){return fetch("".concat($,"/signup"),{method:"POST",headers:L(!0),body:JSON.stringify(t)}).then(E)}function J(t){return fetch("".concat($,"/signin"),{method:"POST",headers:L(!0),body:JSON.stringify(t)}).then(E)}var F={data:function(){return{musicList:null,song:"",track:"",selected:null}},props:["user"],methods:{handleSubmit:function(){var t=this;U(this.song).then(function(e){t.musicList=e.search.data.tracks})},handleAdd:function(t){return t.userId=this.user.id,t.id=this.track.id,t.artist=this.track.artistName,t.title=this.track.name,t.url=this.track.previewURL,G(t).then(alert(this.track.name+" Saved!"))}}},Q=F,Z=(n("ZSi3"),Object(u["a"])(Q,S,j,!1,null,null,null)),H=Z.exports,K=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.user?n("div",{staticClass:"user"},[n("h2",[t._v("Saved by "+t._s(t.user.name))]),n("div",{staticClass:"music-player"},[n("h3",[t._v(t._s(t.track.title))]),n("h3",[t._v(t._s(t.track.artist))]),t.track?n("audio",{attrs:{controls:"",src:t.track.url}}):t._e(),t.track?n("button",{on:{click:t.handleDelete}},[t._v("Delete Song from list")]):t._e()]),n("ul",t._l(t.savedSongs,function(e){return n("li",{key:e.id,on:{click:function(n){t.track=e}}},[n("strong",[t._v(t._s(e.title))]),t._v(" by "+t._s(e.artist)+"\n    ")])}))]):n("div",{staticClass:"user"},[n("p",[t._v("Please "),n("router-link",{attrs:{to:"/login"}},[t._v("sign in")]),t._v(" to view your profile")],1)])},R=[],Y={data:function(){return{savedSongs:null,track:""}},props:["user"],created:function(){var t=this;M(this.user.id).then(function(e){t.savedSongs=e})},methods:{handleDelete:function(){var t=this;confirm("Are you sure you want to delete?")&&z(this.track.id).then(function(e){e.removed&&(t.track="",M(t.user.id).then(function(e){t.savedSongs=e}))}).catch(function(e){t.error=e})}}},W=Y,V=(n("jC6N"),Object(u["a"])(W,K,R,!1,null,"769b45f7",null)),X=V.exports,q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",[t._v("MusicBox Community")]),t.users?n("ul",t._l(t.users,function(e){return n("li",{key:e.id},[n("router-link",{attrs:{to:"/community/"+e.id}},[t._v("\n      "+t._s(e.name)+"\n      ")])],1)})):t._e(),n("router-view",[t._v('\n    :users="users"\n  ')])],1)},tt=[],et={data:function(){return{users:null}},created:function(){var t=this;I().then(function(e){t.users=e}).catch(function(e){t.error=e})}},nt=et,rt=(n("lccC"),Object(u["a"])(nt,q,tt,!1,null,null,null)),st=rt.exports,at=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",[t._v("Community Page Component")]),t.user?n("h3",[t._v("Songs saved by "+t._s(t.user.name))]):t._e(),n("div",[n("h3",[t._v(t._s(t.track.title))]),n("h3",[t._v(t._s(t.track.artist))]),t.track?n("audio",{attrs:{controls:"",src:t.track.url}}):t._e()]),n("ul",t._l(t.savedSongs,function(e){return n("li",{key:e.id,on:{click:function(n){t.track=e}}},[n("strong",[t._v(t._s(e.title))]),t._v(" by "+t._s(e.artist)+"\n      ")])}))])},it=[],ot={data:function(){return{savedSongs:null,track:"",user:null}},created:function(){var t=this;D(this.$route.params.id).then(function(e){t.user=e}).catch(function(e){t.error=e}),M(this.$route.params.id).then(function(e){t.savedSongs=e}).catch(function(e){t.error=e})}},ct=ot,ut=(n("grLd"),Object(u["a"])(ct,at,it,!1,null,null,null)),lt=ut.exports,dt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",[t._v("Muzak Nues")]),n("hr"),n("ul",t._l(t.newsList,function(e){return n("li",{key:e.url},[n("a",{attrs:{target:"_blank",href:e.url}},[t._v(t._s(e.title))]),n("img",{attrs:{src:e.urlToImage}})])})),t._m(0)])},ht=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("Powered by "),n("a",{attrs:{target:"_blank",href:"https://newsapi.org"}},[t._v("NewsAPI.org")])])}],pt={data:function(){return{newsList:null}},methods:{handleNews:function(){var t=this;T().then(function(e){t.newsList=e.articles})},handleNewsLink:function(){}},created:function(){this.handleNews()}},ft=pt,mt=(n("JkkD"),Object(u["a"])(ft,dt,ht,!1,null,"1a0e0108",null)),vt=mt.exports,gt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"auth"},[n("h2",[t._v(t._s(t.label))]),n("p",[n("a",{attrs:{href:""},on:{click:function(e){e.preventDefault(),t.type=t.isSignUp?"signIn":"signUp"}}},[t._v("\n      "+t._s(t.isSignUp?"Already a user? Click here to sign in":"New? Click here to sign up!")+"\n    ")])]),n("form",{on:{submit:function(e){return e.preventDefault(),t.handleSubmit(e)}}},[t.isSignUp?n("FormControl",{attrs:{label:"Name"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.credentials.name,expression:"credentials.name"}],attrs:{required:""},domProps:{value:t.credentials.name},on:{input:function(e){e.target.composing||t.$set(t.credentials,"name",e.target.value)}}})]):t._e(),n("FormControl",{attrs:{label:"Email"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.credentials.email,expression:"credentials.email"}],attrs:{required:""},domProps:{value:t.credentials.email},on:{input:function(e){e.target.composing||t.$set(t.credentials,"email",e.target.value)}}})]),n("FormControl",{attrs:{label:"Password"}},["checkbox"===(t.show?"text":"password")?n("input",{directives:[{name:"model",rawName:"v-model",value:t.credentials.password,expression:"credentials.password"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.credentials.password)?t._i(t.credentials.password,null)>-1:t.credentials.password},on:{change:function(e){var n=t.credentials.password,r=e.target,s=!!r.checked;if(Array.isArray(n)){var a=null,i=t._i(n,a);r.checked?i<0&&t.$set(t.credentials,"password",n.concat([a])):i>-1&&t.$set(t.credentials,"password",n.slice(0,i).concat(n.slice(i+1)))}else t.$set(t.credentials,"password",s)}}}):"radio"===(t.show?"text":"password")?n("input",{directives:[{name:"model",rawName:"v-model",value:t.credentials.password,expression:"credentials.password"}],attrs:{type:"radio"},domProps:{checked:t._q(t.credentials.password,null)},on:{change:function(e){t.$set(t.credentials,"password",null)}}}):n("input",{directives:[{name:"model",rawName:"v-model",value:t.credentials.password,expression:"credentials.password"}],attrs:{type:t.show?"text":"password"},domProps:{value:t.credentials.password},on:{input:function(e){e.target.composing||t.$set(t.credentials,"password",e.target.value)}}}),n("button",{attrs:{type:"button"},on:{click:function(e){t.show=!t.show}}},[t._v("\n        "+t._s(t.show?"Hide":"Show")+"\n      ")])]),n("FormControl",[n("button",{attrs:{type:"submit"}},[t._v("\n          "+t._s(t.label)+"\n        ")])])],1),n("pre",{directives:[{name:"show",rawName:"v-show",value:t.error,expression:"error"}],staticClass:"error"},[t._v(t._s(t.error))])])},_t=[],bt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"form-control"},[n("label",[t._v("\n    "+t._s(t.label)+"\n  ")]),n("div",[t._t("default")],2)])},wt=[],kt={props:{label:String}},yt=kt,Ct=(n("XQTF"),Object(u["a"])(yt,bt,wt,!1,null,null,null)),St=Ct.exports,jt=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,xt={components:{FormControl:St},data:function(){return{credentials:{email:"",password:"",name:""},show:!1,type:"signIn",error:null}},props:["onUser"],computed:{isSignUp:function(){return"signUp"===this.type},label:function(){return this.isSignUp?"Sign Up":"Sign In"}},methods:{handleSubmit:function(){var t=this;if(jt.test(this.credentials.email)){this.error=null;var e=this.isSignUp?B:J;e(this.credentials).then(function(e){t.onUser(e),t.$router.push("/user")}).catch(function(e){return t.error=e})}else this.error="email not valid"}}},Ot=xt,Nt=(n("BkKr"),Object(u["a"])(Ot,gt,_t,!1,null,null,null)),Pt=Nt.exports,At=new s["a"]({routes:[{path:"/",component:g},{path:"/about",component:C},{path:"/public",component:H},{path:"/user",component:X},{path:"/community",component:st},{path:"/community/:id",component:lt},{path:"/news",component:vt},{path:"/login",component:Pt},{path:"*",redirect:"/"}]});r["a"].config.productionTip=!1,r["a"].use(s["a"]),new r["a"]({router:At,render:function(t){return t(d)}}).$mount("#app")},XApS:function(t,e,n){"use strict";var r=n("ume9"),s=n.n(r);s.a},XQTF:function(t,e,n){"use strict";var r=n("AaKg"),s=n.n(r);s.a},ZL7j:function(t,e,n){"use strict";var r=n("EDI0"),s=n.n(r);s.a},ZSi3:function(t,e,n){"use strict";var r=n("Es6G"),s=n.n(r);s.a},grLd:function(t,e,n){"use strict";var r=n("6uXG"),s=n.n(r);s.a},jC6N:function(t,e,n){"use strict";var r=n("nOz2"),s=n.n(r);s.a},"l8/C":function(t,e,n){},lccC:function(t,e,n){"use strict";var r=n("1/63"),s=n.n(r);s.a},nOz2:function(t,e,n){},tBPg:function(t,e,n){},ume9:function(t,e,n){}});
//# sourceMappingURL=app.b747e2cc.js.map