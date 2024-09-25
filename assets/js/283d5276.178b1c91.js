"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[435182],{15680:(e,t,a)=>{a.d(t,{xA:()=>m,yg:()=>g});var n=a(296540);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=c(a),p=o,g=d["".concat(s,".").concat(p)]||d[p]||u[p]||r;return a?n.createElement(g,i(i({ref:t},m),{},{components:a})):n.createElement(g,i({ref:t},m))}));function g(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},18259:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>d,default:()=>v,frontMatter:()=>m,metadata:()=>u,toc:()=>g});var n=a(58168),o=a(296540),r=a(15680);function i(){const[e,t]=(0,o.useState)("");return(0,o.useEffect)((()=>{if("undefined"!=typeof window){const e=location.pathname.includes("zh-CN/docs")?location.pathname.split("/")[3]:location.pathname.split("/")[2];location.pathname.includes("docs")&&["dev","2.1","2.0","1.2"].includes(e)?t(e):t("")}}),["undefined"!=typeof window&&location.pathname]),o.createElement(o.Fragment,null,o.createElement("div",{className:"home-page-hero"},o.createElement("div",{className:"home-page-hero-right"},o.createElement("a",{className:"latest-button",href:`/docs${""===e?"":`/${e}`}/gettingStarted/tutorials/doris-hudi`},o.createElement("div",{className:"home-page-hero-button-label"},o.createElement("div",null,"Tutorials")),o.createElement("div",{className:"latest-button-title"},o.createElement("div",{style:{marginBottom:10}},"Building lakehouse using Doris and Hudi")),o.createElement("div",{style:{fontSize:12,marginBottom:20}},"How to quickly set up a test & demo environment for Apache Doris and Hudi and how to use.")),o.createElement("a",{className:"latest-button",href:`/docs${""===e?"":`/${e}`}/gettingStarted/tutorials/doris-paimon`},o.createElement("div",{className:"latest-button-title"},o.createElement("div",{className:"home-page-hero-button-label"},o.createElement("div",null,"Tutorials")),o.createElement("div",{style:{marginBottom:10}},"Building lakehouse using Doris and Paimon")),o.createElement("div",{style:{fontSize:12,marginBottom:20}},"How to quickly set up a test & demo environment for Apache Doris and Paimon and how to use.")))))}function l(){const[e,t]=(0,o.useState)("");return(0,o.useEffect)((()=>{if("undefined"!=typeof window){const e=location.pathname.includes("zh-CN/docs")?location.pathname.split("/")[3]:location.pathname.split("/")[2];location.pathname.includes("docs")&&["dev","2.1","2.0","1.2"].includes(e)?t(e):t("")}}),["undefined"!=typeof window&&location.pathname]),o.createElement(o.Fragment,null,o.createElement("div",{className:"home-page-hero"},o.createElement("div",{className:"home-page-hero-right"},o.createElement("a",{className:"latest-button",href:`/docs${""===e?"":`/${e}`}/gettingStarted/tutorials/log-storage-analysis`},o.createElement("div",{className:"home-page-hero-button-label"},o.createElement("div",null,"Tutorials")),o.createElement("div",{className:"latest-button-title"},o.createElement("div",{style:{marginBottom:10}},"Building log analysis platform")),o.createElement("div",{style:{fontSize:12,marginBottom:20}},"To build an open, high-performance, cost-effective and unified log storage and analysis platform.")),o.createElement("a",{className:"latest-button",href:`/docs${""===e?"":`/${e}`}/lakehouse/datalake-analytics/hive`},o.createElement("div",{className:"latest-button-title"},o.createElement("div",{className:"home-page-hero-button-label"},o.createElement("div",null,"Lakehouse")),o.createElement("div",{style:{marginBottom:10}},"Hive Catalog")),o.createElement("div",{style:{fontSize:12,marginBottom:20}},"Doris can automatically obtain table info and query data by connecting to or compatible with Hive Metastore.")))))}function s(){const[e,t]=(0,o.useState)("");return(0,o.useEffect)((()=>{if("undefined"!=typeof window){const e=location.pathname.includes("zh-CN/docs")?location.pathname.split("/")[3]:location.pathname.split("/")[2];location.pathname.includes("docs")&&["dev","2.1","2.0","1.2"].includes(e)?t(e):t("")}}),["undefined"!=typeof window&&location.pathname]),o.createElement(o.Fragment,null,o.createElement("div",{className:"home-page-hero"},o.createElement("div",{className:"home-page-hero-right"},o.createElement("a",{className:"latest-button",href:`/docs${""===e?"":`/${e}`}/query/nereids/nereids-new`},o.createElement("div",{className:"home-page-hero-button-label"},o.createElement("div",null,"Data Query")),o.createElement("div",{className:"latest-button-title"},o.createElement("div",{style:{marginBottom:10}},"Cost-Based Optimizer ")),o.createElement("div",{style:{fontSize:12,marginBottom:20}},"To build an open, high-performance, cost-effective and unified log storage and analysis platform.")),o.createElement("a",{className:"latest-button",href:`/docs${""===e?"":`/${e}`}/table-design/index/inverted-index`},o.createElement("div",{className:"latest-button-title"},o.createElement("div",{className:"home-page-hero-button-label"},o.createElement("div",null,"Data Table Design")),o.createElement("div",{style:{marginBottom:10}},"Inverted Index")),o.createElement("div",{style:{fontSize:12,marginBottom:20}},"Imporving performance in query process and reduce latency to avoid delays in accessing object storage.")))))}function c(){const[e,t]=(0,o.useState)("");return(0,o.useEffect)((()=>{if("undefined"!=typeof window){const e=location.pathname.includes("zh-CN/docs")?location.pathname.split("/")[3]:location.pathname.split("/")[2];location.pathname.includes("docs")&&["dev","2.1","2.0","1.2"].includes(e)?t(e):t("")}}),["undefined"!=typeof window&&location.pathname]),o.createElement(o.Fragment,null,o.createElement("div",{className:"home-page-hero"},o.createElement("div",{className:"home-page-hero-right"},o.createElement("a",{className:"latest-button",href:"https://github.com/apache/doris/discussions"},o.createElement("div",{className:"home-page-hero-button-label"},o.createElement("div",null,"Event")),o.createElement("div",{className:"latest-button-title"},o.createElement("div",{style:{marginBottom:10}},"Join Doris Discussion")),o.createElement("div",{style:{fontSize:12,marginBottom:20}},"A platform to fostering connects within the community for addressing technical inquiries and providing support."),o.createElement("div",{style:{fontSize:14,marginBottom:10}},"Learn more")),o.createElement("a",{className:"latest-button",href:`/docs${""===e?"":`/${e}`}/releasenotes/v2.1/release-2.1.6`},o.createElement("div",{className:"home-page-hero-button-label"},o.createElement("div",null,"Release")),o.createElement("div",{className:"latest-button-title"},o.createElement("div",{style:{marginBottom:10}},"Apache Doris 2.1.6 just released")),o.createElement("div",{style:{fontSize:12,marginBottom:20}},"This version brings continuous upgrades and improvements to the Lakehouse, Async Materialized Views and etc."),o.createElement("div",{style:{fontSize:14,marginBottom:10}},"Learn more")))))}const m={title:"What's New",language:"en"},d=void 0,u={unversionedId:"gettingStarted/what-is-new",id:"version-2.1/gettingStarted/what-is-new",title:"What's New",description:"Recent update",source:"@site/versioned_docs/version-2.1/gettingStarted/what-is-new.mdx",sourceDirName:"gettingStarted",slug:"/gettingStarted/what-is-new",permalink:"/docs/gettingStarted/what-is-new",draft:!1,tags:[],version:"2.1",frontMatter:{title:"What's New",language:"en"},sidebar:"get-starting",next:{title:"What's Apache Doris",permalink:"/docs/gettingStarted/what-is-apache-doris"}},p={},g=[{value:"Recent update",id:"recent-update",level:3}],h={toc:g},f="wrapper";function v(e){let{components:t,...a}=e;return(0,r.yg)(f,(0,n.A)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)(c,{mdxType:"Latest"}),(0,r.yg)("h3",{id:"recent-update"},"Recent update"),(0,r.yg)(i,{mdxType:"PageHero"}),(0,r.yg)(l,{mdxType:"PageHero1"}),(0,r.yg)(s,{mdxType:"PageHero2"}))}v.isMDXComponent=!0}}]);