"use strict";(self.webpackChunksclab_docs=self.webpackChunksclab_docs||[]).push([[6469],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),f=a,d=u["".concat(s,".").concat(f)]||u[f]||m[f]||o;return n?r.createElement(d,i(i({ref:t},l),{},{components:n})):r.createElement(d,i({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},2371:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={title:"How to create custom chart",tags:["Iframe","Custom chart"]},i=void 0,c={unversionedId:"api/Iframe/02-",id:"api/Iframe/02-",title:"How to create custom chart",description:"You can make custom chart using iframe.",source:"@site/docs/api/02-Iframe/02-.md",sourceDirName:"api/02-Iframe",slug:"/api/Iframe/02-",permalink:"/docs/api/Iframe/02-",draft:!1,editUrl:"https://github.com/sclab-io/sclab-io.github.io/tree/main/docs/api/02-Iframe/02-.md",tags:[{label:"Iframe",permalink:"/docs/tags/iframe"},{label:"Custom chart",permalink:"/docs/tags/custom-chart"}],version:"current",frontMatter:{title:"How to create custom chart",tags:["Iframe","Custom chart"]},sidebar:"api",previous:{title:"API Action - Client",permalink:"/docs/api/Iframe/api-action-client"},next:{title:"Authentication",permalink:"/docs/api/REST API/authentication"}},s={},p=[],l={toc:p},u="wrapper";function m(e){let{components:t,...o}=e;return(0,a.kt)(u,(0,r.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"You can make custom chart using iframe.\nYou have to select data before using this feature."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Iframe popup screen shot",src:n(4058).Z,width:"650",height:"457"})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<div id=\'container\'>\n  Loading...\n</div>\n<script defer>\n  function render(data){\n    document.getElementById(\'container\').innerHTML = data.rows[0].toString();\n  }\n  (function(){\n    window.addEventListener("message", (event)=>{\n      if(event.data && event.data.type === "IFRAME_DATA_RES"){\n        render(event.data);\n      }\n    });\n    \n    //window.parent.postMessage("IFRAME_DATA_REQ,D7sRjaQRr2yo3zvoL");\n    window.parent.postMessage("IFRAME_DATA_REQ,__IFRAME_ID_HERE__");\n  })();\n<\/script>\n')),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"change ID to your iframe id")))}m.isMDXComponent=!0},4058:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/iframe_popup-53db848eed071e79b00dbe6b1b8f91e5.png"}}]);