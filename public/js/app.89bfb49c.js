(function(t){function e(e){for(var s,a,o=e[0],c=e[1],l=e[2],d=0,h=[];d<o.length;d++)a=o[d],r[a]&&h.push(r[a][0]),r[a]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);u&&u(e);while(h.length)h.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],s=!0,o=1;o<n.length;o++){var c=n[o];0!==r[c]&&(s=!1)}s&&(i.splice(e--,1),t=a(a.s=n[0]))}return t}var s={},r={1:0},i=[];function a(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=s,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)a.d(n,s,function(e){return t[e]}.bind(null,s));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;i.push([10,0]),n()})({"1/63":function(t,e,n){},10:function(t,e,n){t.exports=n("Vtdi")},"1yDk":function(t,e,n){"use strict";var s=n("DeHy"),r=n.n(s);r.a},"6uXG":function(t,e,n){},"7Z+H":function(t,e,n){"use strict";var s=n("mM0g"),r=n.n(s);r.a},AaKg:function(t,e,n){},BkKr:function(t,e,n){"use strict";var s=n("l8/C"),r=n.n(s);r.a},CFFu:function(t,e,n){},CjGE:function(t,e,n){"use strict";var s=n("nz6+"),r=n.n(s);r.a},DeHy:function(t,e,n){},EDI0:function(t,e,n){},OwbV:function(t,e,n){t.exports=n.p+"img/logo-curling-bandits.e80e8bf4.png"},Vtdi:function(t,e,n){"use strict";n.r(e);n("VRzm");var s=n("Kw5r"),r=n("jE9Z"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[t._m(0),n("nav",[n("router-link",{staticClass:"nav",attrs:{to:"/",id:"home"}},[t._v("Home")]),n("router-link",{staticClass:"nav",attrs:{to:"/about"}},[t._v("About Us")]),n("router-link",{staticClass:"nav",attrs:{to:"/browse"}},[t._v("Browse")]),n("router-link",{staticClass:"nav",attrs:{to:"/user"}},[t._v("User Page")]),n("router-link",{staticClass:"nav",attrs:{to:"/community"}},[t._v("Community")]),n("router-link",{staticClass:"nav",attrs:{to:"/news"}},[t._v("News")]),t.user?n("a",{on:{click:function(e){return e.preventDefault(),t.handleLogout(e)}}},[t._v("Logout")]):n("router-link",{staticClass:"nav",attrs:{to:"/login"}},[t._v("Sign In")])],1),n("router-view",{attrs:{"on-user":t.handleUser,user:t.user}})],1)},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h1",{staticClass:"musicbox"},[t._v("Music"),n("span",[t._v("Box")])])}],o={data:function(){return{user:null}},created:function(){var t=localStorage.user;if(t)try{this.user=JSON.parse(t)}catch(t){localStorage.removeItem("user")}},methods:{handleUser:function(t){this.user=t,localStorage.user=JSON.stringify(t)},handleLogout:function(){localStorage.removeItem("user"),this.user=null}}},c=o,l=(n("ZL7j"),n("KHd+")),u=Object(l["a"])(c,i,a,!1,null,null,null),d=u.exports,h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._m(0),n("section",[t._m(1),n("p",{staticClass:"intro-description"},[n("router-link",{staticClass:"nav",attrs:{to:"/login"}},[n("strong",[t._v("Sign up")])]),t._v(" to save your favorites into your own  profile page which you can edit anytime.\n    As an added bonus, you will be able to see other people's profiles and listen to their favorites.\n  ")],1),n("p",{staticClass:"intro-description"},[t._v("We also included a "),n("router-link",{staticClass:"nav",attrs:{to:"/news"}},[n("strong",[t._v("News")])]),t._v("\n    tab to get you 'in the know' of the happennings in the music world.\n  ")],1),n("p",{staticClass:"intro-description"},[t._v("Click "),n("router-link",{staticClass:"nav",attrs:{to:"/browse"}},[n("strong",[t._v("HERE")])]),t._v("\n    to get started!\n  ")],1)])])},p=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h1",[t._v("Music"),n("span",[t._v("Box")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"intro-description"},[t._v("Welcome to "),n("strong",[t._v("MusicBox!")]),t._v(" This site allows you to search and listen to your\n    favorite music.\n  ")])}],v={},m=v,f=(n("CjGE"),Object(l["a"])(m,h,p,!1,null,"d70986b8",null)),g=f.exports,_=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},b=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"team-div"},[s("h1",[t._v("About Us")]),s("section",{staticClass:"bio-body"},[s("img",{attrs:{src:"https://avatars0.githubusercontent.com/u/35393465?s=400&u=e9efbc50f09f7bfe576b1d947ea9864badb5d344&v=4",alt:"profile picture"}}),s("section",{staticClass:"bio-column"},[s("h3",[t._v("Mariah Adams")]),s("p",[t._v("As a member of the Curling Bandits, Mariah wipes the curling sheet with the competition.\n        She can guide the stone into the house center with her eyes closed. Outside of her life's work, which is\n        curling, she enjoys video games, watching movies, and golfing.\n      ")])])]),s("section",{staticClass:"bio-body"},[s("img",{attrs:{src:"https://media.licdn.com/dms/image/C5603AQHOr-IN5NcObA/profile-displayphoto-shrink_800_800/0?e=1534982400&v=beta&t=ggLQRjaxvtyePoyeJf-rlgbHBLzwQWMuMuH25jG4lNY",alt:"profile picture"}}),s("section",{staticClass:"bio-column"},[s("h3",[t._v("Chris Golden")]),s("p",[t._v("A literal chessmaster on the ice, Chris uses his extreme skills with the curling broom to\n        sweep away all competition. When not engaging in the love of his life, which is curling, he\n        enjoys climbing, biking, and video games.\n      ")])])]),s("section",{staticClass:"bio-body"},[s("img",{attrs:{src:"https://avatars2.githubusercontent.com/u/38193198?s=400&v=4",alt:"profile picture"}}),s("section",{staticClass:"bio-column"},[s("h3",[t._v("Carmen Ramos")]),s("p",[t._v("Carmen is responsible for taking the Curlng Bandits from good to great. Whether she's throwing a guard, draw, or\n        takeout, she always hits her mark. When she's not playing \"the Roaring Game\", which is curling, she can be \n        found cooking, programming, and drying fruit.\n      ")])])]),s("section",{staticClass:"bio-body"},[s("img",{attrs:{src:"https://media.licdn.com/dms/image/C4E03AQGcC2fKtU6TLQ/profile-displayphoto-shrink_800_800/0?e=1534982400&v=beta&t=4QLOU0ShZ7nb4zg4V26m_5DGCrvfG0Y6H0iaYfvFn4o",alt:"profile picture"}}),s("section",{staticClass:"bio-column"},[s("h3",[t._v("Injoong Yoon")]),s("p",[t._v("For Injoong, curling isn't just a game; it's a way of life. He lives, breathes, and eats curling,\n        every single day, and still can't get enough of it. When not reveling in the greatest sport in the world,\n        which is curling, he enjoys cooking, writing, and playing games.\n      ")])])]),s("div",{staticClass:"logo"},[s("img",{attrs:{src:n("OwbV"),alt:"curling bandits logo"}}),s("p",[t._v("Copyright © 2018. "),s("a",{attrs:{target:"_blank",href:"https://github.com/team-curling-bandits"}},[t._v("GitHub")]),t._v(" ·\n      "),s("a",{attrs:{target:"_blank",href:"https://github.com/team-curling-bandits/musicbox-app/blob/master/LICENSE.md"}},[t._v("License")])])])])}],w={},y=w,k=(n("7Z+H"),Object(l["a"])(y,_,b,!1,null,"5a40a74a",null)),C=k.exports,S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("Search for songs:")]),n("form",{staticClass:"search",on:{submit:function(e){return e.preventDefault(),t.handleSubmit(e)}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.song,expression:"song"}],attrs:{type:"text",placeholder:"search for songs, albums, or artists"},domProps:{value:t.song},on:{input:function(e){e.target.composing||(t.song=e.target.value)}}}),n("button",{attrs:{type:"submit"}},[t._v("search")])]),n("div",{staticClass:"music-player"},[t.track?n("div",{staticClass:"music-info"},[n("div",{staticClass:"info-list"},[n("h3",[t._v("Now Playing: ")]),n("p",[n("b",[t._v("Title:")]),t._v(" "+t._s(t.track.name))]),n("p",[n("b",[t._v("Artist:")]),t._v(" "+t._s(t.track.artistName))]),n("p",[n("b",[t._v("Album:")]),t._v(" "+t._s(t.track.albumName))])])]):t._e(),t.track?n("div",[n("audio",{attrs:{controls:"",src:t.track.previewURL}}),t.user?n("button",{attrs:{disabled:t.isDisabled},on:{click:t.handleAdd}},[t._v("Add to profile")]):t._e()]):t._e()]),t.musicList?n("h2",[t._v("Results:")]):t._e(),t.musicList?n("section",[n("ul",{staticClass:"results"},t._l(t.musicList,function(e){return n("li",{key:e.id,on:{click:function(n){t.track=e,t.isDisabled=!1}}},[n("strong",[t._v(t._s(e.name))]),t._v("\n        by "+t._s(e.artistName)+" \n      ")])}))]):t._e()])},x=[],j=(n("f3/d"),n("OG14"),"/api"),O="https://api.napster.com/v2.2/search?query=",N="https://newsapi.org/v2/everything?sources=mtv-news&q=music&sortBy=publishedAt&pageSize=50&apiKey=9fa47f32b7bd438a93898938d10d85ad",E=("".concat(j,"/musicbox"),"".concat(j,"/users")),A="".concat(j,"/savedsongs"),$="".concat(j,"/auth");function L(t){return t.ok?t.json():t.json().then(function(t){throw t.message})}function P(t){var e={};t&&(e["Content-Type"]="application/json");var n=localStorage.user;if(n)try{e["Authorization"]=JSON.parse(n).id}catch(t){localStorage.removeItem("user")}return e}function T(t){var e=O+encodeURIComponent(t)+"&type=track&apikey=ZWQwYzkzOTctNzY5Ni00ZjkwLTkyODMtMDc3YTQwMDFmN2Y5";return fetch(e).then(L)}function D(){return fetch(N).then(L)}function U(){return fetch(E,{headers:{"Content-Type":"application/json"}}).then(L)}function M(t){return fetch("".concat(j,"/users/").concat(t),{headers:{"Content-Type":"application/json"}}).then(L)}function I(t){return fetch("".concat(A,"/").concat(t),{headers:{"Content-Type":"application/json"}}).then(L)}function z(t){return fetch("".concat(A,"/").concat(t),{method:"DELETE",headers:{"Content-Type":"application/json"}}).then(L)}function F(t){return fetch(A,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then(L)}function H(t){return fetch("".concat($,"/signup"),{method:"POST",headers:P(!0),body:JSON.stringify(t)}).then(L)}function B(t){return fetch("".concat($,"/signin"),{method:"POST",headers:P(!0),body:JSON.stringify(t)}).then(L)}var G={data:function(){return{musicList:null,song:"",track:"",isDisabled:!1}},props:["user"],methods:{handleSubmit:function(){var t=this;T(this.song).then(function(e){t.musicList=e.search.data.tracks})},handleAdd:function(t){return t.userId=this.user.id,t.id=this.track.id,t.artist=this.track.artistName,t.title=this.track.name,t.url=this.track.previewURL,F(t).then(alert(this.track.name+" Saved!",this.isDisabled=!0))}}},Q=G,W=(n("fmXW"),Object(l["a"])(Q,S,x,!1,null,null,null)),Z=W.exports,J=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.user?n("div",{staticClass:"user"},[n("h2",[t._v("Saved by "+t._s(t.user.name))]),n("div",{staticClass:"music-player"},[t.track?n("div",{staticClass:"music-info"},[n("h3",[t._v("Now Playing: ")]),n("ul",{staticClass:"info-list"},[n("li",[n("b",[t._v("Title:")]),t._v(" "+t._s(t.track.title))]),n("li",[n("b",[t._v("Artist:")]),t._v(" "+t._s(t.track.artist))])])]):t._e(),t.track?n("audio",{attrs:{controls:"",src:t.track.url}}):t._e(),t.track?n("button",{on:{click:t.handleDelete}},[t._v("Delete Song from list")]):t._e()]),t.savedSongs?n("div",{staticClass:"saved-songs"},[t._l(t.savedSongs,function(e){return n("li",{key:e.id,on:{click:function(n){t.track=e}}},[n("strong",[t._v(t._s(e.title))]),t._v(" by "+t._s(e.artist)+"\n    ")])}),0===t.savedSongs.length||null===t.savedSongs?n("h3",{attrs:{id:"conditional-prompt"}},[t._v("Add some songs!")]):t._e()],2):t._e()]):n("div",{staticClass:"user"},[n("p",[t._v("Please "),n("router-link",{attrs:{to:"/login"}},[t._v("sign in")]),t._v(" to view your profile")],1)])},R=[],K={data:function(){return{savedSongs:null,track:""}},props:["user"],created:function(){var t=this;this.user&&I(this.user.id).then(function(e){t.savedSongs=e})},methods:{handleDelete:function(){var t=this;confirm("Are you sure you want to delete?")&&z(this.track.id).then(function(e){e.removed&&(t.track="",I(t.user.id).then(function(e){t.savedSongs=e}))}).catch(function(e){t.error=e})}}},X=K,Y=(n("eXfx"),Object(l["a"])(X,J,R,!1,null,"2a394a80",null)),V=Y.exports,q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",[t._v("MusicBox Community")]),n("section",[t.users?n("ul",{staticClass:"user-tile-area"},t._l(t.users,function(e){return n("li",{key:e.id},[n("router-link",{staticClass:"user-tile",attrs:{to:"/community/"+e.id}},[t._v("\n        "+t._s(e.name)+"\n        ")])],1)})):t._e()]),n("router-view",[t._v('\n    :users="users"\n  ')])],1)},tt=[],et={data:function(){return{users:null}},created:function(){var t=this;U().then(function(e){t.users=e}).catch(function(e){t.error=e})}},nt=et,st=(n("lccC"),Object(l["a"])(nt,q,tt,!1,null,null,null)),rt=st.exports,it=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.user?n("h3",[t._v("Songs saved by "+t._s(t.user.name))]):t._e(),n("div",{staticClass:"player"},[t.track?n("div",{staticClass:"music-info"},[n("h3",[t._v("Now Playing: ")]),n("ul",{staticClass:"info-list"},[n("li",[n("b",[t._v("Title:")]),t._v(" "+t._s(t.track.title))]),n("li",[n("b",[t._v("Artist:")]),t._v(" "+t._s(t.track.artist))])])]):t._e(),t.track?n("audio",{attrs:{controls:"",src:t.track.url}}):t._e()]),n("section",{staticClass:"community-page"},[n("ul",{staticClass:"community-list"},t._l(t.savedSongs,function(e){return n("li",{key:e.id,on:{click:function(n){t.track=e}}},[n("strong",[t._v(t._s(e.title))]),t._v(" by "+t._s(e.artist)+"\n        ")])}))])])},at=[],ot={data:function(){return{savedSongs:null,track:"",user:null}},created:function(){var t=this;M(this.$route.params.id).then(function(e){t.user=e}).catch(function(e){t.error=e}),I(this.$route.params.id).then(function(e){t.savedSongs=e}).catch(function(e){t.error=e})}},ct=ot,lt=(n("grLd"),Object(l["a"])(ct,it,at,!1,null,null,null)),ut=lt.exports,dt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",[t._v("Muzak Nues")]),n("hr"),n("div",{staticClass:"news-area"},t._l(t.newsList,function(e){return n("div",{key:e.url,staticClass:"news-tile"},[n("img",{attrs:{src:e.urlToImage}}),n("a",{attrs:{target:"_blank",href:e.url}},[t._v(t._s(e.title))])])})),t._m(0)])},ht=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("Powered by "),n("a",{attrs:{target:"_blank",href:"https://newsapi.org"}},[t._v("NewsAPI.org")])])}],pt={data:function(){return{newsList:null}},methods:{handleNews:function(){var t=this;D().then(function(e){t.newsList=e.articles})}},created:function(){this.handleNews()}},vt=pt,mt=(n("1yDk"),Object(l["a"])(vt,dt,ht,!1,null,"034331e7",null)),ft=mt.exports,gt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"auth"},[n("h2",[t._v(t._s(t.label))]),n("form",{on:{submit:function(e){return e.preventDefault(),t.handleSubmit(e)}}},[n("p",{staticClass:"signup"},[n("a",{attrs:{href:""},on:{click:function(e){e.preventDefault(),t.type=t.isSignUp?"signIn":"signUp"}}},[t._v("\n      "+t._s(t.isSignUp?"Already a user? Click here to sign in":"New? Click here to sign up!")+"\n    ")])]),t.isSignUp?n("FormControl",{attrs:{label:"Name"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.credentials.name,expression:"credentials.name"}],attrs:{required:""},domProps:{value:t.credentials.name},on:{input:function(e){e.target.composing||t.$set(t.credentials,"name",e.target.value)}}})]):t._e(),n("FormControl",{attrs:{label:"Email:"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.credentials.email,expression:"credentials.email"}],attrs:{required:""},domProps:{value:t.credentials.email},on:{input:function(e){e.target.composing||t.$set(t.credentials,"email",e.target.value)}}})]),n("FormControl",{attrs:{label:"Password:"}},["checkbox"===(t.show?"text":"password")?n("input",{directives:[{name:"model",rawName:"v-model",value:t.credentials.password,expression:"credentials.password"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.credentials.password)?t._i(t.credentials.password,null)>-1:t.credentials.password},on:{change:function(e){var n=t.credentials.password,s=e.target,r=!!s.checked;if(Array.isArray(n)){var i=null,a=t._i(n,i);s.checked?a<0&&t.$set(t.credentials,"password",n.concat([i])):a>-1&&t.$set(t.credentials,"password",n.slice(0,a).concat(n.slice(a+1)))}else t.$set(t.credentials,"password",r)}}}):"radio"===(t.show?"text":"password")?n("input",{directives:[{name:"model",rawName:"v-model",value:t.credentials.password,expression:"credentials.password"}],attrs:{type:"radio"},domProps:{checked:t._q(t.credentials.password,null)},on:{change:function(e){t.$set(t.credentials,"password",null)}}}):n("input",{directives:[{name:"model",rawName:"v-model",value:t.credentials.password,expression:"credentials.password"}],attrs:{type:t.show?"text":"password"},domProps:{value:t.credentials.password},on:{input:function(e){e.target.composing||t.$set(t.credentials,"password",e.target.value)}}}),n("button",{staticClass:"show-btn",attrs:{type:"button"},on:{click:function(e){t.show=!t.show}}},[t._v("\n        "+t._s(t.show?"Hide":"Show")+"\n      ")])]),n("FormControl",[n("button",{staticClass:"submit-btn",attrs:{type:"submit"}},[t._v("\n          "+t._s(t.label)+"\n        ")])]),n("pre",{directives:[{name:"show",rawName:"v-show",value:t.error,expression:"error"}],staticClass:"error"},[t._v(t._s(t.error))])],1)])},_t=[],bt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"form-control"},[n("label",[t._v("\n    "+t._s(t.label)+"\n  ")]),n("div",[t._t("default")],2)])},wt=[],yt={props:{label:String}},kt=yt,Ct=(n("XQTF"),Object(l["a"])(kt,bt,wt,!1,null,null,null)),St=Ct.exports,xt=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,jt={components:{FormControl:St},data:function(){return{credentials:{email:"",password:"",name:""},show:!1,type:"signIn",error:null}},props:["onUser"],computed:{isSignUp:function(){return"signUp"===this.type},label:function(){return this.isSignUp?"Sign Up":"Sign In"}},methods:{handleSubmit:function(){var t=this;if(xt.test(this.credentials.email)){this.error=null;var e=this.isSignUp?H:B;e(this.credentials).then(function(e){t.onUser(e),t.$router.push("/user")}).catch(function(e){return t.error=e})}else this.error="email not valid"}}},Ot=jt,Nt=(n("BkKr"),Object(l["a"])(Ot,gt,_t,!1,null,null,null)),Et=Nt.exports,At=new r["a"]({routes:[{path:"/",component:g},{path:"/about",component:C},{path:"/browse",component:Z},{path:"/user",component:V},{path:"/community",component:rt},{path:"/community/:id",component:ut},{path:"/news",component:ft},{path:"/login",component:Et},{path:"*",redirect:"/"}]});s["a"].config.productionTip=!1,s["a"].use(r["a"]),new s["a"]({router:At,render:function(t){return t(d)}}).$mount("#app")},XQTF:function(t,e,n){"use strict";var s=n("AaKg"),r=n.n(s);r.a},ZL7j:function(t,e,n){"use strict";var s=n("EDI0"),r=n.n(s);r.a},eXfx:function(t,e,n){"use strict";var s=n("zMEB"),r=n.n(s);r.a},fmXW:function(t,e,n){"use strict";var s=n("CFFu"),r=n.n(s);r.a},grLd:function(t,e,n){"use strict";var s=n("6uXG"),r=n.n(s);r.a},"l8/C":function(t,e,n){},lccC:function(t,e,n){"use strict";var s=n("1/63"),r=n.n(s);r.a},mM0g:function(t,e,n){},"nz6+":function(t,e,n){},zMEB:function(t,e,n){}});
//# sourceMappingURL=app.89bfb49c.js.map