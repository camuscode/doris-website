"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[994136],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>f});var r=n(296540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=o,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},49838:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(58168),o=(n(296540),n(15680));const a={title:"convert_tz",language:"zh-CN"},i=void 0,l={unversionedId:"sql-manual/sql-functions/date-time-functions/convert_tz",id:"version-1.2/sql-manual/sql-functions/date-time-functions/convert_tz",title:"convert_tz",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/sql-manual/sql-functions/date-time-functions/convert_tz.md",sourceDirName:"sql-manual/sql-functions/date-time-functions",slug:"/sql-manual/sql-functions/date-time-functions/convert_tz",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/date-time-functions/convert_tz",draft:!1,tags:[],version:"1.2",frontMatter:{title:"convert_tz",language:"zh-CN"},sidebar:"docs",previous:{title:"element_at",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/array-functions/element_at"},next:{title:"curdate,current_date",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/date-time-functions/curdate"}},c={},s=[{value:"convert_tz",id:"convert_tz",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"Example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:s},p="wrapper";function d(e){let{components:t,...n}=e;return(0,o.yg)(p,(0,r.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"convert_tz"},"convert_tz"),(0,o.yg)("h3",{id:"description"},"description"),(0,o.yg)("h4",{id:"syntax"},"Syntax"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"DATETIME CONVERT_TZ(DATETIME dt, VARCHAR from_tz, VARCHAR to_tz)")),(0,o.yg)("p",null,"\u8f6c\u6362datetime\u503c\uff0c\u4ece from_tz \u7ed9\u5b9a\u65f6\u533a\u8f6c\u5230 to_tz \u7ed9\u5b9a\u65f6\u533a\uff0c\u5e76\u8fd4\u56de\u7ed3\u679c\u503c\u3002 \u5982\u679c\u53c2\u6570\u65e0\u6548\u8be5\u51fd\u6570\u8fd4\u56deNULL\u3002"),(0,o.yg)("h3",{id:"example"},"Example"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"mysql> select convert_tz('2019-08-01 13:21:03', 'Asia/Shanghai', 'America/Los_Angeles');\n+---------------------------------------------------------------------------+\n| convert_tz('2019-08-01 13:21:03', 'Asia/Shanghai', 'America/Los_Angeles') |\n+---------------------------------------------------------------------------+\n| 2019-07-31 22:21:03                                                       |\n+---------------------------------------------------------------------------+\n\nmysql> select convert_tz('2019-08-01 13:21:03', '+08:00', 'America/Los_Angeles');\n+--------------------------------------------------------------------+\n| convert_tz('2019-08-01 13:21:03', '+08:00', 'America/Los_Angeles') |\n+--------------------------------------------------------------------+\n| 2019-07-31 22:21:03                                                |\n+--------------------------------------------------------------------+\n")),(0,o.yg)("h3",{id:"keywords"},"keywords"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"CONVERT_TZ\n")))}d.isMDXComponent=!0}}]);