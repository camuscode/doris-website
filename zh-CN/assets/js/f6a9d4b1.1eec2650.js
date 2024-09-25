"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[815374],{15680:(e,n,t)=>{t.d(n,{xA:()=>d,yg:()=>m});var r=t(296540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),i=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=i(e.components);return r.createElement(c.Provider,{value:n},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=i(t),u=a,m=p["".concat(c,".").concat(u)]||p[u]||f[u]||o;return t?r.createElement(m,s(s({ref:n},d),{},{components:t})):r.createElement(m,s({ref:n},d))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=u;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[p]="string"==typeof e?e:a,s[1]=l;for(var i=2;i<o;i++)s[i]=t[i];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},364220:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>i});var r=t(58168),a=(t(296540),t(15680));const o={title:"\u7cfb\u7edf\u8868",language:"zh-CN"},s=void 0,l={unversionedId:"admin-manual/rowsets",id:"version-3.0/admin-manual/rowsets",title:"\u7cfb\u7edf\u8868",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/admin-manual/rowsets.md",sourceDirName:"admin-manual",slug:"/admin-manual/rowsets",permalink:"/zh-CN/docs/3.0/admin-manual/rowsets",draft:!1,tags:[],version:"3.0",frontMatter:{title:"\u7cfb\u7edf\u8868",language:"zh-CN"},sidebar:"docs",previous:{title:"Compaction \u4f18\u5316",permalink:"/zh-CN/docs/3.0/admin-manual/compaction"},next:{title:"\u6570\u636e\u7c7b\u578b\u6982\u89c8",permalink:"/zh-CN/docs/3.0/sql-manual/sql-data-types/data-type-overview"}},c={},i=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:2},{value:"Example",id:"example",level:2},{value:"KeyWords",id:"keywords",level:2}],d={toc:i},p="wrapper";function f(e){let{components:n,...t}=e;return(0,a.yg)(p,(0,r.A)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("admonition",{type:"note"},(0,a.yg)("p",{parentName:"admonition"},"\u81ea Doris 1.2 \u7248\u672c\u8d77\u652f\u6301 ",(0,a.yg)("inlineCode",{parentName:"p"},"rowset")," ")),(0,a.yg)("h2",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"rowsets")," \u662f Doris \u5185\u7f6e\u7684\u4e00\u5f20\u7cfb\u7edf\u8868\uff0c\u5b58\u653e\u5728",(0,a.yg)("inlineCode",{parentName:"p"},"information_schema"),"\u6570\u636e\u5e93\u4e0b\u3002\u901a\u8fc7 ",(0,a.yg)("inlineCode",{parentName:"p"},"rowsets")," \u7cfb\u7edf\u8868\u53ef\u4ee5\u67e5\u770b\u5404\u4e2a",(0,a.yg)("inlineCode",{parentName:"p"},"BE")," \u5f53\u524d rowsets \u60c5\u51b5\u3002"),(0,a.yg)("p",null,"rowsets \u8868\u7ed3\u6784\u4e3a\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"MySQL [(none)]> desc information_schema.rowsets;\n+------------------------+------------+------+-------+---------+-------+\n| Field                  | Type       | Null | Key   | Default | Extra |\n+------------------------+------------+------+-------+---------+-------+\n| BACKEND_ID             | BIGINT     | Yes  | false | NULL    |       |\n| ROWSET_ID              | VARCHAR(*) | Yes  | false | NULL    |       |\n| TABLET_ID              | BIGINT     | Yes  | false | NULL    |       |\n| ROWSET_NUM_ROWS        | BIGINT     | Yes  | false | NULL    |       |\n| TXN_ID                 | BIGINT     | Yes  | false | NULL    |       |\n| NUM_SEGMENTS           | BIGINT     | Yes  | false | NULL    |       |\n| START_VERSION          | BIGINT     | Yes  | false | NULL    |       |\n| END_VERSION            | BIGINT     | Yes  | false | NULL    |       |\n| INDEX_DISK_SIZE        | BIGINT     | Yes  | false | NULL    |       |\n| DATA_DISK_SIZE         | BIGINT     | Yes  | false | NULL    |       |\n| CREATION_TIME          | BIGINT     | Yes  | false | NULL    |       |\n| NEWEST_WRITE_TIMESTAMP | BIGINT     | Yes  | false | NULL    |       |\n+------------------------+------------+------+-------+---------+-------+\n")),(0,a.yg)("h2",{id:"example"},"Example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"select * from information_schema.rowsets where BACKEND_ID = 10004 limit 10;\n+------------+--------------------------------------------------+-----------+-----------------+--------+--------------+---------------+-------------+-----------------+----------------+---------------+------------------------+------------------------+\n| BACKEND_ID | ROWSET_ID                                        | TABLET_ID | ROWSET_NUM_ROWS | TXN_ID | NUM_SEGMENTS | START_VERSION | END_VERSION | INDEX_DISK_SIZE | DATA_DISK_SIZE | CREATION_TIME | OLDEST_WRITE_TIMESTAMP | NEWEST_WRITE_TIMESTAMP |\n+------------+--------------------------------------------------+-----------+-----------------+--------+--------------+---------------+-------------+-----------------+----------------+---------------+------------------------+------------------------+\n|      10004 | 02000000000000994847fbd41a42297d7c7a57d3bcb46f8c |     10771 |           66850 |      6 |            1 |             3 |           3 |            2894 |         688855 |    1659964582 |             1659964581 |             1659964581 |\n|      10004 | 020000000000008d4847fbd41a42297d7c7a57d3bcb46f8c |     10771 |           66850 |      2 |            1 |             2 |           2 |            2894 |         688855 |    1659964575 |             1659964574 |             1659964574 |\n|      10004 | 02000000000000894847fbd41a42297d7c7a57d3bcb46f8c |     10771 |               0 |      0 |            0 |             0 |           1 |               0 |              0 |    1659964567 |             1659964567 |             1659964567 |\n|      10004 | 020000000000009a4847fbd41a42297d7c7a57d3bcb46f8c |     10773 |           66639 |      6 |            1 |             3 |           3 |            2897 |         686828 |    1659964582 |             1659964581 |             1659964581 |\n|      10004 | 020000000000008e4847fbd41a42297d7c7a57d3bcb46f8c |     10773 |           66639 |      2 |            1 |             2 |           2 |            2897 |         686828 |    1659964575 |             1659964574 |             1659964574 |\n|      10004 | 02000000000000884847fbd41a42297d7c7a57d3bcb46f8c |     10773 |               0 |      0 |            0 |             0 |           1 |               0 |              0 |    1659964567 |             1659964567 |             1659964567 |\n|      10004 | 02000000000000984847fbd41a42297d7c7a57d3bcb46f8c |     10757 |           66413 |      6 |            1 |             3 |           3 |            2893 |         685381 |    1659964582 |             1659964581 |             1659964581 |\n|      10004 | 020000000000008c4847fbd41a42297d7c7a57d3bcb46f8c |     10757 |           66413 |      2 |            1 |             2 |           2 |            2893 |         685381 |    1659964575 |             1659964574 |             1659964574 |\n|      10004 | 02000000000000874847fbd41a42297d7c7a57d3bcb46f8c |     10757 |               0 |      0 |            0 |             0 |           1 |               0 |              0 |    1659964567 |             1659964567 |             1659964567 |\n|      10004 | 020000000000009c4847fbd41a42297d7c7a57d3bcb46f8c |     10739 |            1698 |      8 |            1 |             3 |           3 |             454 |          86126 |    1659964582 |             1659964582 |             1659964582 |\n+------------+--------------------------------------------------+-----------+-----------------+--------+--------------+---------------+-------------+-----------------+----------------+---------------+------------------------+------------------------+\n")),(0,a.yg)("h2",{id:"keywords"},"KeyWords"),(0,a.yg)("p",null,"rowsets, information_schema"))}f.isMDXComponent=!0}}]);