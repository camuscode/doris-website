"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[187115],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>m});var r=n(296540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=s(n),d=o,m=p["".concat(u,".").concat(d)]||p[d]||f[d]||l;return n?r.createElement(m,a(a({ref:t},c),{},{components:n})):r.createElement(m,a({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,a=new Array(l);a[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[p]="string"==typeof e?e:o,a[1]=i;for(var s=2;s<l;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},291439:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>f,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var r=n(58168),o=(n(296540),n(15680));const l={title:"hour_floor",language:"zh-CN"},a=void 0,i={unversionedId:"sql-manual/sql-functions/date-time-functions/hour_floor",id:"version-1.2/sql-manual/sql-functions/date-time-functions/hour_floor",title:"hour_floor",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/sql-manual/sql-functions/date-time-functions/hour_floor.md",sourceDirName:"sql-manual/sql-functions/date-time-functions",slug:"/sql-manual/sql-functions/date-time-functions/hour_floor",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/date-time-functions/hour_floor",draft:!1,tags:[],version:"1.2",frontMatter:{title:"hour_floor",language:"zh-CN"},sidebar:"docs",previous:{title:"minute_floor",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/date-time-functions/minute_floor"},next:{title:"day_floor",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/date-time-functions/day_floor"}},u={},s=[{value:"hour_floor",id:"hour_floor",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:s},p="wrapper";function f(e){let{components:t,...n}=e;return(0,o.yg)(p,(0,r.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"hour_floor"},"hour_floor"),(0,o.yg)("h3",{id:"description"},"description"),(0,o.yg)("h4",{id:"syntax"},"Syntax"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sql"},"DATETIME HOUR_FLOOR(DATETIME datetime)\nDATETIME HOUR_FLOOR(DATETIME datetime, DATETIME origin)\nDATETIME HOUR_FLOOR(DATETIME datetime, INT period)\nDATETIME HOUR_FLOOR(DATETIME datetime, INT period, DATETIME origin)\n")),(0,o.yg)("p",null,"\u5c06\u65e5\u671f\u8f6c\u5316\u4e3a\u6307\u5b9a\u7684\u65f6\u95f4\u95f4\u9694\u5468\u671f\u7684\u6700\u8fd1\u4e0b\u53d6\u6574\u65f6\u523b\u3002"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"datetime\uff1a\u53c2\u6570\u662f\u5408\u6cd5\u7684\u65e5\u671f\u8868\u8fbe\u5f0f\u3002"),(0,o.yg)("li",{parentName:"ul"},"period\uff1a\u53c2\u6570\u662f\u6307\u5b9a\u6bcf\u4e2a\u5468\u671f\u6709\u591a\u5c11\u5929\u7ec4\u6210\u3002"),(0,o.yg)("li",{parentName:"ul"},"origin\uff1a\u5f00\u59cb\u7684\u65f6\u95f4\u8d77\u70b9\uff0c\u5982\u679c\u4e0d\u586b\uff0c\u9ed8\u8ba4\u662f 0001-01-01T00:00:00\u3002")),(0,o.yg)("h3",{id:"example"},"example"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"mysql> select hour_floor(\"2023-07-13 22:28:18\", 5);\n+-------------------------------------------------------------+\n| hour_floor(cast('2023-07-13 22:28:18' as DATETIMEV2(0)), 5) |\n+-------------------------------------------------------------+\n| 2023-07-13 21:00:00                                         |\n+-------------------------------------------------------------+\n1 row in set (0.23 sec)\n")),(0,o.yg)("h3",{id:"keywords"},"keywords"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"HOUR_FLOOR, HOUR, FLOOR\n")))}f.isMDXComponent=!0}}]);