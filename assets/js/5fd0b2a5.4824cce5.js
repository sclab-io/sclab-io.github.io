"use strict";(self.webpackChunksclab_docs=self.webpackChunksclab_docs||[]).push([[243],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>g});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(a),b=r,g=d["".concat(s,".").concat(b)]||d[b]||p[b]||l;return a?n.createElement(g,i(i({ref:t},u),{},{components:a})):n.createElement(g,i({ref:t},u))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=b;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}b.displayName="MDXCreateElement"},7628:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const l={title:"Create Data Table",tags:["Visualizations","API","Data Table"]},i=void 0,o={unversionedId:"guide/Creating visualizations/Create Data Table",id:"guide/Creating visualizations/Create Data Table",title:"Create Data Table",description:"Create Data Table",source:"@site/docs/guide/04-Creating visualizations/06-Create Data Table.md",sourceDirName:"guide/04-Creating visualizations",slug:"/guide/Creating visualizations/Create Data Table",permalink:"/docs/guide/Creating visualizations/Create Data Table",draft:!1,editUrl:"https://github.com/sclab-io/sclab-io.github.io/tree/main/docs/guide/04-Creating visualizations/06-Create Data Table.md",tags:[{label:"Visualizations",permalink:"/docs/tags/visualizations"},{label:"API",permalink:"/docs/tags/api"},{label:"Data Table",permalink:"/docs/tags/data-table"}],version:"current",sidebarPosition:6,frontMatter:{title:"Create Data Table",tags:["Visualizations","API","Data Table"]},sidebar:"guide",previous:{title:"Create API chart",permalink:"/docs/guide/Creating visualizations/Create API chart"},next:{title:"Using multiple axes",permalink:"/docs/guide/Creating visualizations/Using multiple axes"}},s={},c=[],u={toc:c},d="wrapper";function p(e){let{components:t,...l}=e;return(0,r.kt)(d,(0,n.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Create Data Table",src:a(4376).Z,width:"1420",height:"832"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Import API, IoT, and CSV files."),(0,r.kt)("li",{parentName:"ul"},"Let's create a data table by clicking the table icon at the hexagon's top.",(0,r.kt)("br",null),(0,r.kt)("br",null))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Create Data Table popup",src:a(6595).Z,width:"3358",height:"1866"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Set column selection, table header, row, hangover effect, table-border, paging, and threshold to visualize API, IoT, and CSV data in a table format.",(0,r.kt)("br",null),(0,r.kt)("br",null))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Data Table setting 1",src:a(6729).Z,width:"3354",height:"1864"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Search: Set whether to expose the function of the search button for the data in the data table and the location of the search exposure."),(0,r.kt)("li",{parentName:"ul"},"Column selection: Tables are created from left to right according to the selection order."),(0,r.kt)("li",{parentName:"ul"},"Table header settings: Set the background color, height, spacing, line thickness and color, and font size, style, and color of the table header."),(0,r.kt)("li",{parentName:"ul"},"Row settings: Set the background color, height, spacing, line thickness, and color, font size, style, and color of even and odd rows."),(0,r.kt)("li",{parentName:"ul"},"Set the hangover effect: Set the row color, border thickness, and color when the mouse is over.",(0,r.kt)("br",null),(0,r.kt)("br",null))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Data Table setting 2",src:a(9097).Z,width:"3352",height:"1864"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Table border setting: Set the table border thickness and color."),(0,r.kt)("li",{parentName:"ul"},"Paging: You can set the page to scroll and to page and select and set the paging at the bottom from the 5, 7, and 10 buttons."),(0,r.kt)("li",{parentName:"ul"},"Threshold setting: Threshold setting is the same as other charts, and alarms and actions can be applied.",(0,r.kt)("br",null),(0,r.kt)("br",null))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Data Table preview",src:a(7210).Z,width:"3360",height:"1870"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The number of data rows displayed in a table varies depending on the layout."),(0,r.kt)("li",{parentName:"ul"},"After checking the preview of the set data table, enter the table name and save.",(0,r.kt)("br",null),(0,r.kt)("br",null))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Data Table Hexagon",src:a(4142).Z,width:"3356",height:"1864"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You can see that a chart icon is created to the right of the hexagon icon.")),(0,r.kt)("br",null),(0,r.kt)("br",null))}p.isMDXComponent=!0},4376:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/04_01-4aaec4cbe824697619d9dde2081932cf.png"},6595:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/04_02-99e6a23636658a0cbb679a668f91466c.png"},6729:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/04_03-cab4920d47beaa7c444ddb34bbbf3c00.png"},9097:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/04_04-e9df200f34bc5f32589eb5bd7a7a8699.png"},7210:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/04_05-6bf99bad7e773e2308e4b10ca242e9c9.png"},4142:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/04_06-f26ec4839decfa8c2817431dc2e0a4d4.png"}}]);