"use strict";(self.webpackChunksclab_docs=self.webpackChunksclab_docs||[]).push([[6168],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>g});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=c(r),m=a,g=p["".concat(u,".").concat(m)]||p[m]||d[m]||i;return r?n.createElement(g,o(o({ref:t},s),{},{components:r})):n.createElement(g,o({ref:t},s))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4532:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const i={title:"IoT \uc22b\uc790 \ucc28\ud2b8",tags:["Visualizations","IoT"]},o=void 0,l={unversionedId:"guide/Creating visualizations/IoT number chart",id:"guide/Creating visualizations/IoT number chart",title:"IoT \uc22b\uc790 \ucc28\ud2b8",description:"IoT Number Chart",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/guide/04-Creating visualizations/04-IoT number chart.md",sourceDirName:"guide/04-Creating visualizations",slug:"/guide/Creating visualizations/IoT number chart",permalink:"/ko/docs/guide/Creating visualizations/IoT number chart",draft:!1,editUrl:"https://github.com/sclab-io/sclab-io.github.io/tree/main/i18n/ko/docusaurus-plugin-content-docs/current/guide/04-Creating visualizations/04-IoT number chart.md",tags:[{label:"Visualizations",permalink:"/ko/docs/tags/visualizations"},{label:"IoT",permalink:"/ko/docs/tags/io-t"}],version:"current",sidebarPosition:4,frontMatter:{title:"IoT \uc22b\uc790 \ucc28\ud2b8",tags:["Visualizations","IoT"]},sidebar:"guide",previous:{title:"IoT \ucc28\ud2b8 \ub9cc\ub4e4\uae30",permalink:"/ko/docs/guide/Creating visualizations/Create IoT chart"},next:{title:"API \ucc28\ud2b8 \ub9cc\ub4e4\uae30",permalink:"/ko/docs/guide/Creating visualizations/Create API chart"}},u={},c=[],s={toc:c},p="wrapper";function d(e){let{components:t,...i}=e;return(0,a.kt)(p,(0,n.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"IoT Number Chart",src:r(8331).Z,width:"1203",height:"598"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ucc28\ud2b8 \uc885\ub958\uc5d0\uc11c Number Chart\ub97c \uc120\ud0dd\ud558\uace0 \ub2e4\uc74c \ub2e8\uacc4\ub97c \ud074\ub9ad\ud55c\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\ub179\uc0c9 \uc120\ud0dd \ubc84\ud2bc\uc744 \ud074\ub9ad\ud558\uc5ec \ucc28\ud2b8\uc5d0 \ud45c\uc2dc\ub420 \ub370\uc774\ud130\ub97c \uc120\ud0dd\ud55c\ub2e4. \uc5ec\uae30\uc11c \uc544\ub798 \uadf8\ub9bc\ucc98\ub7fc \ub9c8\uc9c0\ub9c9 \uc22b\uc790 14\ub97c \uc120\ud0dd\ud558\uba74 \ud56d\uc0c1 \ub9c8\uc9c0\ub9c9 \uc22b\uc790\uac00 \uc22b\uc790 \ucc28\ud2b8\uc5d0 \ud45c\uc2dc\ub41c\ub2e4. \uccab\ubc88\uc9f8 \uc22b\uc790 73\uc744 \uc120\ud0dd\ud558\uba74 \ud56d\uc0c1 \uccab\ubc88\uc9f8 \uc22b\uc790\uac00 \ud45c\uc2dc\ub41c\ub2e4.",(0,a.kt)("br",null),(0,a.kt)("br",null))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Create a Number chart",src:r(6079).Z,width:"1203",height:"585"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ub370\uc774\ud130\uc758 \uceec\ub7ec, \ud0c0\uc774\ud2c0\uc758 \uc774\ub984\uacfc \uceec\ub7ec\ub97c \uc120\ud0dd\ud558\uace0 \uc0c1\ub2e8\uc5d0 \uc22b\uc790 \ucc28\ud2b8 \ud06c\uae30\ub97c \uc870\uc808\ud55c\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\ub2e4\uc74c\uc73c\ub85c \uc22b\uc790 \ucc28\ud2b8\uc758 \uc774\ub984\uc744 \uc785\ub825\ud558\uace0 \ucc28\ud2b8 \ud655\uc778 \ud6c4 \uc800\uc7a5 \ubc84\ud2bc\uc744 \ud074\ub9ad\ud55c\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\uc55e\uc11c \ub9cc\ub4e0 \ucc28\ud2b8 \uc544\uc774\ucf58 \uc544\ub798 \ucd94\uac00\ub85c \uc22b\uc790 \ucc28\ud2b8 \uc544\uc774\ucf58\uc774 \uc0dd\uae34 \uac83\uc744 \uc54c \uc218 \uc788\ub2e4.\n",(0,a.kt)("img",{alt:"Create Number chart hexagon",src:r(499).Z,width:"2358",height:"838"}),(0,a.kt)("br",null),(0,a.kt)("br",null))))}d.isMDXComponent=!0},8331:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/33-a1cb37acfc98d091f2ad1795e860bbff.png"},6079:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/36-c2c23600437e7e9cd6313509193a7fac.png"},499:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/37-a4db453a5a837596f0e6869e489f73e3.png"}}]);