"use strict";(self.webpackChunksclab_docs=self.webpackChunksclab_docs||[]).push([[8450],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>f});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),c=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=c(e.components);return n.createElement(d.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(a),m=r,f=u["".concat(d,".").concat(m)]||u[m]||p[m]||o;return a?n.createElement(f,i(i({ref:t},s),{},{components:a})):n.createElement(f,i({ref:t},s))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},1440:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const o={title:"API",tags:["DATA","API"]},i=void 0,l={unversionedId:"guide/Load Data/API",id:"guide/Load Data/API",title:"API",description:"Get API data",source:"@site/docs/guide/03-Load Data/03-API.md",sourceDirName:"guide/03-Load Data",slug:"/guide/Load Data/API",permalink:"/docs/guide/Load Data/API",draft:!1,editUrl:"https://github.com/sclab-io/sclab-io.github.io/tree/main/docs/guide/03-Load Data/03-API.md",tags:[{label:"DATA",permalink:"/docs/tags/data"},{label:"API",permalink:"/docs/tags/api"}],version:"current",sidebarPosition:3,frontMatter:{title:"API",tags:["DATA","API"]},sidebar:"guide",previous:{title:"IoT",permalink:"/docs/guide/Load Data/IoT"},next:{title:"Kafka",permalink:"/docs/guide/Load Data/Kafka"}},d={},c=[{value:"API Data Flow",id:"api-data-flow",level:2}],s={toc:c},u="wrapper";function p(e){let{components:t,...o}=e;return(0,r.kt)(u,(0,n.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Get API data",src:a(3558).Z,width:"1203",height:"586"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If you drag and drop the API icon, a pop-up window will appear as shown above."),(0,r.kt)("li",{parentName:"ul"},"Enter the API name, enter the API address next to GET, and click Send."),(0,r.kt)("li",{parentName:"ul"},"Detailed data appears on the Pretty side below."),(0,r.kt)("li",{parentName:"ul"},"If the desired data type does not appear on the right, find the Root and Path of the desired data under Pretty, enter it, and click the A-shaped button. Click the arrow button next to the left number under Pretty and find the root name of the upper level containing the desired data. And find the necessary detailed data in which part under the upper root name. Enter 'Root name' and 'path name' corresponding to the right Root path column and click the A-shaped button. You can see that additional data paths and labels are entered."),(0,r.kt)("li",{parentName:"ul"},"You can select the polling cycle in minutes. No polling means fetching data only once."),(0,r.kt)("li",{parentName:"ul"},"If you enter the API name and press SAVE, you can see that API data is generated and one more turquoise hexagon is created."),(0,r.kt)("li",{parentName:"ul"},"The FIXED-type parameters are only used when sending a request and cannot be accessed by the client-side, so you don't need to worry about the exposure of key values or any other concerns.",(0,r.kt)("br",null),(0,r.kt)("br",null))),(0,r.kt)("iframe",{width:"100%",height:"640",src:"https://www.youtube.com/embed/39EXX0toy4s",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"api-data-flow"},"API Data Flow"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"API Data flow",src:a(4593).Z,width:"1166",height:"1985"})))}p.isMDXComponent=!0},3558:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/21-3718431d97634207aee4e8c8a57c4d23.png"},4593:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/API-951976aba6543f4ef570e7738b946218.png"}}]);