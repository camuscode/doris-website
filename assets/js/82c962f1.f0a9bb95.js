"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[85294],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>f});var r=n(296540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=s(n),d=i,f=p["".concat(c,".").concat(d)]||p[d]||m[d]||a;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[p]="string"==typeof e?e:i,l[1]=o;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},351179:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>o,toc:()=>s});var r=n(58168),i=(n(296540),n(15680));const a={title:"minute_ceil",language:"en"},l=void 0,o={unversionedId:"sql-manual/sql-functions/date-time-functions/minute-ceil",id:"version-3.0/sql-manual/sql-functions/date-time-functions/minute-ceil",title:"minute_ceil",description:"\x3c!--",source:"@site/versioned_docs/version-3.0/sql-manual/sql-functions/date-time-functions/minute-ceil.md",sourceDirName:"sql-manual/sql-functions/date-time-functions",slug:"/sql-manual/sql-functions/date-time-functions/minute-ceil",permalink:"/docs/3.0/sql-manual/sql-functions/date-time-functions/minute-ceil",draft:!1,tags:[],version:"3.0",frontMatter:{title:"minute_ceil",language:"en"},sidebar:"docs",previous:{title:"second_ceil",permalink:"/docs/3.0/sql-manual/sql-functions/date-time-functions/second-ceil"},next:{title:"hour_ceil",permalink:"/docs/3.0/sql-manual/sql-functions/date-time-functions/hour-ceil"}},c={},s=[{value:"minute_ceil",id:"minute_ceil",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],u={toc:s},p="wrapper";function m(e){let{components:t,...n}=e;return(0,i.yg)(p,(0,r.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"minute_ceil"},"minute_ceil"),(0,i.yg)("h3",{id:"description"},"description"),(0,i.yg)("h4",{id:"syntax"},"Syntax"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"DATETIME MINUTE_CEIL(DATETIME datetime)\nDATETIME MINUTE_CEIL(DATETIME datetime, DATETIME origin)\nDATETIME MINUTE_CEIL(DATETIME datetime, INT period)\nDATETIME MINUTE_CEIL(DATETIME datetime, INT period, DATETIME origin)\n")),(0,i.yg)("p",null,"Convert the date to the nearest rounding up time of the specified time interval period."),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"datetime: a valid date expression."),(0,i.yg)("li",{parentName:"ul"},"period: specifies how many minutes each cycle consists of."),(0,i.yg)("li",{parentName:"ul"},"origin: starting from 0001-01-01T00:00:00.")),(0,i.yg)("h3",{id:"example"},"example"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"mysql> select minute_ceil(\"2023-07-13 22:28:18\", 5);\n+--------------------------------------------------------------+\n| minute_ceil(cast('2023-07-13 22:28:18' as DATETIMEV2(0)), 5) |\n+--------------------------------------------------------------+\n| 2023-07-13 22:30:00                                          |\n+--------------------------------------------------------------+\n1 row in set (0.21 sec)\n")),(0,i.yg)("h3",{id:"keywords"},"keywords"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"MINUTE_CEIL, MINUTE, CEIL\n")),(0,i.yg)("h3",{id:"best-practice"},"Best Practice"),(0,i.yg)("p",null,"See also ",(0,i.yg)("a",{parentName:"p",href:"./date_ceil"},"date_ceil")))}m.isMDXComponent=!0}}]);