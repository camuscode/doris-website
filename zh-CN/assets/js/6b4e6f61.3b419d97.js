"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[319741],{15680:(n,e,r)=>{r.d(e,{xA:()=>c,yg:()=>b});var t=r(296540);function a(n,e,r){return e in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n}function o(n,e){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.push.apply(r,t)}return r}function l(n){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(n,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(r,e))}))}return n}function u(n,e){if(null==n)return{};var r,t,a=function(n,e){if(null==n)return{};var r,t,a={},o=Object.keys(n);for(t=0;t<o.length;t++)r=o[t],e.indexOf(r)>=0||(a[r]=n[r]);return a}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(t=0;t<o.length;t++)r=o[t],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(n,r)&&(a[r]=n[r])}return a}var i=t.createContext({}),s=function(n){var e=t.useContext(i),r=e;return n&&(r="function"==typeof n?n(e):l(l({},e),n)),r},c=function(n){var e=s(n.components);return t.createElement(i.Provider,{value:e},n.children)},d="mdxType",m={inlineCode:"code",wrapper:function(n){var e=n.children;return t.createElement(t.Fragment,{},e)}},p=t.forwardRef((function(n,e){var r=n.components,a=n.mdxType,o=n.originalType,i=n.parentName,c=u(n,["components","mdxType","originalType","parentName"]),d=s(r),p=a,b=d["".concat(i,".").concat(p)]||d[p]||m[p]||o;return r?t.createElement(b,l(l({ref:e},c),{},{components:r})):t.createElement(b,l({ref:e},c))}));function b(n,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var o=r.length,l=new Array(o);l[0]=p;var u={};for(var i in e)hasOwnProperty.call(e,i)&&(u[i]=e[i]);u.originalType=n,u[d]="string"==typeof n?n:a,l[1]=u;for(var s=2;s<o;s++)l[s]=r[s];return t.createElement.apply(null,l)}return t.createElement.apply(null,r)}p.displayName="MDXCreateElement"},609528:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>u,toc:()=>s});var t=r(58168),a=(r(296540),r(15680));const o={title:"ROUND_BANKERS",language:"zh-CN"},l=void 0,u={unversionedId:"sql-manual/sql-functions/numeric-functions/round-bankers",id:"version-3.0/sql-manual/sql-functions/numeric-functions/round-bankers",title:"ROUND_BANKERS",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-functions/numeric-functions/round-bankers.md",sourceDirName:"sql-manual/sql-functions/numeric-functions",slug:"/sql-manual/sql-functions/numeric-functions/round-bankers",permalink:"/zh-CN/docs/3.0/sql-manual/sql-functions/numeric-functions/round-bankers",draft:!1,tags:[],version:"3.0",frontMatter:{title:"ROUND_BANKERS",language:"zh-CN"},sidebar:"docs",previous:{title:"ROUND",permalink:"/zh-CN/docs/3.0/sql-manual/sql-functions/numeric-functions/round"},next:{title:"XOR",permalink:"/zh-CN/docs/3.0/sql-manual/sql-functions/numeric-functions/xor"}},i={},s=[{value:"round_bankers",id:"round_bankers",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:s},d="wrapper";function m(n){let{components:e,...r}=n;return(0,a.yg)(d,(0,t.A)({},c,r,{components:e,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"round_bankers"},"round_bankers"),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"T round_bankers(T x[, d])"),"\n\u5c06",(0,a.yg)("inlineCode",{parentName:"p"},"x"),"\u4f7f\u7528\u94f6\u884c\u5bb6\u820d\u5165\u6cd5\u540e\uff0c\u4fdd\u7559d\u4f4d\u5c0f\u6570\uff0c",(0,a.yg)("inlineCode",{parentName:"p"},"d"),"\u9ed8\u8ba4\u4e3a0\u3002\u5982\u679c",(0,a.yg)("inlineCode",{parentName:"p"},"d"),"\u4e3a\u8d1f\u6570\uff0c\u5219\u5c0f\u6570\u70b9\u5de6\u8fb9",(0,a.yg)("inlineCode",{parentName:"p"},"d"),"\u4f4d\u4e3a0\u3002\u5982\u679c",(0,a.yg)("inlineCode",{parentName:"p"},"x"),"\u6216",(0,a.yg)("inlineCode",{parentName:"p"},"d"),"\u4e3anull\uff0c\u8fd4\u56denull\u3002"),(0,a.yg)("p",null,"\u5982\u679c d \u4e3a\u4e00\u4e2a\u5217\uff0c\u5e76\u4e14\u7b2c\u4e00\u4e2a\u53c2\u6570\u4e3a Decimal \u7c7b\u578b\uff0c\u90a3\u4e48\u7ed3\u679c Decimal \u4f1a\u8ddf\u5165\u53c2 Decimal \u5177\u6709\u76f8\u540c\u7684\u5c0f\u6570\u90e8\u5206\u957f\u5ea6\u3002"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u5982\u679c\u820d\u5165\u6570\u4ecb\u4e8e\u4e24\u4e2a\u6570\u5b57\u4e4b\u95f4\uff0c\u5219\u8be5\u51fd\u6570\u4f7f\u7528\u94f6\u884c\u5bb6\u7684\u820d\u5165"),(0,a.yg)("li",{parentName:"ul"},"\u5728\u5176\u4ed6\u60c5\u51b5\u4e0b\uff0c\u8be5\u51fd\u6570\u5c06\u6570\u5b57\u56db\u820d\u4e94\u5165\u5230\u6700\u63a5\u8fd1\u7684\u6574\u6570\u3002")),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"mysql> select round_bankers(0.4);\n+--------------------+\n| round_bankers(0.4) |\n+--------------------+\n|                  0 |\n+--------------------+\nmysql> select round_bankers(-3.5);\n+---------------------+\n| round_bankers(-3.5) |\n+---------------------+\n|                  -4 |\n+---------------------+\nmysql> select round_bankers(-3.4);\n+---------------------+\n| round_bankers(-3.4) |\n+---------------------+\n|                  -3 |\n+---------------------+\nmysql> select round_bankers(10.755, 2);\n+--------------------------+\n| round_bankers(10.755, 2) |\n+--------------------------+\n|                    10.76 |\n+--------------------------+\nmysql> select round_bankers(1667.2725, 2);\n+-----------------------------+\n| round_bankers(1667.2725, 2) |\n+-----------------------------+\n|                     1667.27 |\n+-----------------------------+\nmysql> select round_bankers(1667.2725, -2);\n+------------------------------+\n| round_bankers(1667.2725, -2) |\n+------------------------------+\n|                         1700 |\n+------------------------------+\nmysql> SELECT number\n    -> , round_bankers(number * 2.5, number - 1) AS rb_decimal_column\n    -> , round_bankers(number * 2.5, 0) AS rb_decimal_literal\n    -> , round_bankers(cast(number * 2.5 AS DOUBLE), number - 1) AS rb_double_column\n    -> , round_bankers(cast(number * 2.5 AS DOUBLE), 0) AS rb_double_literal\n    -> FROM test_enhanced_round\n    -> WHERE rid = 1;\n+--------+-------------------+--------------------+------------------+-------------------+\n| number | rb_decimal_column | rb_decimal_literal | rb_double_column | rb_double_literal |\n+--------+-------------------+--------------------+------------------+-------------------+\n|      1 |               2.0 |                  2 |                2 |                 2 |\n+--------+-------------------+--------------------+------------------+-------------------+\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"round_bankers\n")))}m.isMDXComponent=!0}}]);