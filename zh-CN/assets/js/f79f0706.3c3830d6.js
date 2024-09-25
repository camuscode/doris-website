"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[428646],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>m});var r=t(296540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(t),f=o,m=p["".concat(l,".").concat(f)]||p[f]||d[f]||i;return t?r.createElement(m,a(a({ref:n},u),{},{components:t})):r.createElement(m,a({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=f;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[p]="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},626459:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=t(58168),o=(t(296540),t(15680));const i={title:"WINDOW_FUNCTION_CUME_DIST",language:"zh-CN"},a=void 0,s={unversionedId:"sql-manual/sql-functions/window-functions/window-function-cume-dist",id:"version-2.1/sql-manual/sql-functions/window-functions/window-function-cume-dist",title:"WINDOW_FUNCTION_CUME_DIST",description:'\x3c!--  Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements.  See the NOTICE file distributed with this work for additional information regarding copyright ownership.  The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.  You may obtain a copy of the License at',source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-functions/window-functions/window-function-cume-dist.md",sourceDirName:"sql-manual/sql-functions/window-functions",slug:"/sql-manual/sql-functions/window-functions/window-function-cume-dist",permalink:"/zh-CN/docs/sql-manual/sql-functions/window-functions/window-function-cume-dist",draft:!1,tags:[],version:"2.1",frontMatter:{title:"WINDOW_FUNCTION_CUME_DIST",language:"zh-CN"},sidebar:"docs",previous:{title:"WINDOW_FUNCTION_PERCENT_RANK",permalink:"/zh-CN/docs/sql-manual/sql-functions/window-functions/window-function-percent-rank"},next:{title:"WINDOW_FUNCTION_FIRST_VALUE",permalink:"/zh-CN/docs/sql-manual/sql-functions/window-functions/window-function-first-value"}},l={},c=[{value:"WINDOW FUNCTION CUME_DIST",id:"window-function-cume_dist",level:2},{value:"description",id:"description",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},p="wrapper";function d(e){let{components:n,...t}=e;return(0,o.yg)(p,(0,r.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"window-function-cume_dist"},"WINDOW FUNCTION CUME_DIST"),(0,o.yg)("h3",{id:"description"},"description"),(0,o.yg)("p",null,"CUME_DIST (Cumulative Distribution) \u662f\u4e00\u79cd\u7a97\u53e3\u51fd\u6570\uff0c\u5b83\u5e38\u7528\u4e8e\u8ba1\u7b97\u5f53\u524d\u884c\u503c\u5728\u6392\u5e8f\u540e\u7ed3\u679c\u96c6\u4e2d\u7684\u76f8\u5bf9\u6392\u540d\u3002\u5b83\u8fd4\u56de\u7684\u662f\u5f53\u524d\u884c\u503c\u5728\u7ed3\u679c\u96c6\u4e2d\u7684\u767e\u5206\u6bd4\u6392\u540d\uff0c\u5373\u5728\u6392\u5e8f\u540e\u7684\u7ed3\u679c\u4e2d\u5c0f\u4e8e\u6216\u7b49\u4e8e\u5f53\u524d\u884c\u503c\u7684\u884c\u6570\u4e0e\u7ed3\u679c\u96c6\u603b\u884c\u6570\u7684\u6bd4\u4f8b\u3002"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sql"},"CUME_DIST() OVER(partition_by_clause order_by_clause)\n")),(0,o.yg)("h3",{id:"example"},"example"),(0,o.yg)("p",null,"\u5047\u8bbe\u6709\u4e00\u4e2a\u8868\u683c sales \u5305\u542b\u9500\u552e\u6570\u636e\uff0c\u5176\u4e2d\u5305\u62ec\u9500\u552e\u5458\u59d3\u540d (sales_person)\u3001\u9500\u552e\u989d (sales_amount) \u548c\u9500\u552e\u65e5\u671f (sales_date)\u3002\u6211\u4eec\u60f3\u8981\u8ba1\u7b97\u6bcf\u4e2a\u9500\u552e\u5458\u5728\u6bcf\u4e2a\u9500\u552e\u65e5\u671f\u7684\u9500\u552e\u989d\u5360\u5f53\u65e5\u603b\u9500\u552e\u989d\u7684\u7d2f\u79ef\u767e\u5206\u6bd4\u3002"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT \n    sales_person,\n    sales_date,\n    sales_amount,\n    CUME_DIST() OVER (PARTITION BY sales_date ORDER BY sales_amount ASC) AS cumulative_sales_percentage\nFROM \n    sales;\n")),(0,o.yg)("p",null,"\u5047\u8bbe\u8868\u683c sales \u4e2d\u7684\u6570\u636e\u5982\u4e0b\uff1a"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sql"},"+------+--------------+------------+--------------+\n| id   | sales_person | sales_date | sales_amount |\n+------+--------------+------------+--------------+\n|    1 | Alice        | 2024-02-01 |         2000 |\n|    2 | Bob          | 2024-02-01 |         1500 |\n|    3 | Alice        | 2024-02-02 |         1800 |\n|    4 | Bob          | 2024-02-02 |         1200 |\n|    5 | Alice        | 2024-02-03 |         2200 |\n|    6 | Bob          | 2024-02-03 |         1900 |\n|    7 | Tom          | 2024-02-03 |         2000 |\n|    8 | Jerry        | 2024-02-03 |         2000 |\n+------+--------------+------------+--------------+\n")),(0,o.yg)("p",null,"\u6267\u884c\u4e0a\u8ff0 SQL \u67e5\u8be2\u540e\uff0c\u7ed3\u679c\u5c06\u663e\u793a\u6bcf\u4e2a\u9500\u552e\u5458\u5728\u6bcf\u4e2a\u9500\u552e\u65e5\u671f\u7684\u9500\u552e\u989d\u4ee5\u53ca\u5176\u5728\u8be5\u9500\u552e\u65e5\u671f\u7684\u7d2f\u79ef\u767e\u5206\u6bd4\u6392\u540d\u3002"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sql"},"+--------------+------------+--------------+-----------------------------+\n| sales_person | sales_date | sales_amount | cumulative_sales_percentage |\n+--------------+------------+--------------+-----------------------------+\n| Bob          | 2024-02-01 |         1500 |                         0.5 |\n| Alice        | 2024-02-01 |         2000 |                           1 |\n| Bob          | 2024-02-02 |         1200 |                         0.5 |\n| Alice        | 2024-02-02 |         1800 |                           1 |\n| Bob          | 2024-02-03 |         1900 |                        0.25 |\n| Tom          | 2024-02-03 |         2000 |                        0.75 |\n| Jerry        | 2024-02-03 |         2000 |                        0.75 |\n| Alice        | 2024-02-03 |         2200 |                           1 |\n+--------------+------------+--------------+-----------------------------+\n")),(0,o.yg)("p",null,"\u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff0cCUME_DIST() \u51fd\u6570\u6839\u636e\u6bcf\u4e2a\u9500\u552e\u65e5\u671f\u5bf9\u9500\u552e\u989d\u8fdb\u884c\u6392\u5e8f\uff0c\u7136\u540e\u8ba1\u7b97\u6bcf\u4e2a\u9500\u552e\u5458\u5728\u8be5\u9500\u552e\u65e5\u671f\u7684\u9500\u552e\u989d\u5360\u5f53\u65e5\u603b\u9500\u552e\u989d\u7684\u7d2f\u79ef\u767e\u5206\u6bd4\u3002\u7531\u4e8e\u6211\u4eec\u4f7f\u7528\u4e86 PARTITION BY sales_date\uff0c\u6240\u4ee5\u8ba1\u7b97\u662f\u5728\u6bcf\u4e2a\u9500\u552e\u65e5\u671f\u5185\u8fdb\u884c\u7684\uff0c\u9500\u552e\u5458\u5728\u4e0d\u540c\u65e5\u671f\u7684\u9500\u552e\u989d\u88ab\u5206\u522b\u8ba1\u7b97\u3002"),(0,o.yg)("h3",{id:"keywords"},"keywords"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"WINDOW,FUNCTION,CUME_DIST\n")))}d.isMDXComponent=!0}}]);