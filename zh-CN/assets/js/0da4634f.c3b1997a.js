"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[847959],{15680:(e,a,t)=>{t.d(a,{xA:()=>y,yg:()=>d});var n=t(296540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var m=n.createContext({}),i=function(e){var a=n.useContext(m),t=a;return e&&(t="function"==typeof e?e(a):p(p({},a),e)),t},y=function(e){var a=i(e.components);return n.createElement(m.Provider,{value:a},e.children)},o="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},g=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,l=e.originalType,m=e.parentName,y=s(e,["components","mdxType","originalType","parentName"]),o=i(t),g=r,d=o["".concat(m,".").concat(g)]||o[g]||u[g]||l;return t?n.createElement(d,p(p({ref:a},y),{},{components:t})):n.createElement(d,p({ref:a},y))}));function d(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=t.length,p=new Array(l);p[0]=g;var s={};for(var m in a)hasOwnProperty.call(a,m)&&(s[m]=a[m]);s.originalType=e,s[o]="string"==typeof e?e:r,p[1]=s;for(var i=2;i<l;i++)p[i]=t[i];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},349968:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>m,contentTitle:()=>p,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>i});var n=t(58168),r=(t(296540),t(15680));const l={title:"\u6570\u636e\u7c7b\u578b\u6982\u89c8",language:"zh-CN"},p=void 0,s={unversionedId:"sql-manual/sql-data-types/data-type-overview",id:"sql-manual/sql-data-types/data-type-overview",title:"\u6570\u636e\u7c7b\u578b\u6982\u89c8",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-data-types/data-type-overview.md",sourceDirName:"sql-manual/sql-data-types",slug:"/sql-manual/sql-data-types/data-type-overview",permalink:"/zh-CN/docs/dev/sql-manual/sql-data-types/data-type-overview",draft:!1,tags:[],version:"current",frontMatter:{title:"\u6570\u636e\u7c7b\u578b\u6982\u89c8",language:"zh-CN"},sidebar:"docs",previous:{title:"\u7cfb\u7edf\u8868",permalink:"/zh-CN/docs/dev/admin-manual/rowsets"},next:{title:"BOOLEAN",permalink:"/zh-CN/docs/dev/sql-manual/sql-data-types/numeric/BOOLEAN"}},m={},i=[{value:"\u6570\u503c\u7c7b\u578b",id:"\u6570\u503c\u7c7b\u578b",level:2},{value:"\u65e5\u671f\u7c7b\u578b",id:"\u65e5\u671f\u7c7b\u578b",level:2},{value:"\u5b57\u7b26\u4e32\u7c7b\u578b",id:"\u5b57\u7b26\u4e32\u7c7b\u578b",level:2},{value:"\u534a\u7ed3\u6784\u5316\u7c7b\u578b",id:"\u534a\u7ed3\u6784\u5316\u7c7b\u578b",level:2},{value:"\u805a\u5408\u7c7b\u578b",id:"\u805a\u5408\u7c7b\u578b",level:2},{value:"IP \u7c7b\u578b",id:"ip-\u7c7b\u578b",level:2}],y={toc:i},o="wrapper";function u(e){let{components:a,...t}=e;return(0,r.yg)(o,(0,n.A)({},y,t,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"\u6570\u503c\u7c7b\u578b"},"\u6570\u503c\u7c7b\u578b"),(0,r.yg)("p",null,"\u5305\u62ec\u4ee5\u4e0b 4 \u79cd\uff1a"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"1. BOOLEAN \u7c7b\u578b\uff1a")," "),(0,r.yg)("p",null,"\u4e24\u79cd\u53d6\u503c\uff0c0 \u4ee3\u8868 false\uff0c1 \u4ee3\u8868 true\u3002\u66f4\u591a\u4fe1\u606f\u53c2\u8003 ",(0,r.yg)("a",{parentName:"p",href:"/zh-CN/docs/dev/sql-manual/sql-data-types/numeric/BOOLEAN"},"BOOLEAN \u6587\u6863"),"\u3002"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"2. \u6574\u6570\u7c7b\u578b\uff1a")," "),(0,r.yg)("p",null,"\u90fd\u662f\u6709\u7b26\u53f7\u6574\u6570\uff0cxxINT \u7684\u5dee\u5f02\u662f\u5360\u7528\u5b57\u8282\u6570\u548c\u8868\u793a\u8303\u56f4"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"TINYINT \u5360 1 \u5b57\u8282\uff0c\u8303\u56f4 ","[-128, 127]",", \u66f4\u591a\u4fe1\u606f\u53c2\u8003 ",(0,r.yg)("a",{parentName:"p",href:"/zh-CN/docs/dev/sql-manual/sql-data-types/numeric/TINYINT"},"TINYINT \u6587\u6863"),"\u3002")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"SMALLINT \u5360 2 \u5b57\u8282\uff0c\u8303\u56f4 ","[-32768, 32767]",", \u66f4\u591a\u4fe1\u606f\u53c2\u8003 ",(0,r.yg)("a",{parentName:"p",href:"/zh-CN/docs/dev/sql-manual/sql-data-types/numeric/SMALLINT"},"SMALLINT \u6587\u6863"),"\u3002")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"INT \u5360 4 \u5b57\u8282\uff0c\u8303\u56f4 ","[-2147483648, 2147483647]",", \u66f4\u591a\u4fe1\u606f\u53c2\u8003 ",(0,r.yg)("a",{parentName:"p",href:"/zh-CN/docs/dev/sql-manual/sql-data-types/numeric/INT"},"INT \u6587\u6863"),"\u3002")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"BIGINT \u5360 8 \u5b57\u8282\uff0c\u8303\u56f4 ","[-9223372036854775808, 9223372036854775807]",", \u66f4\u591a\u4fe1\u606f\u53c2\u8003 ",(0,r.yg)("a",{parentName:"p",href:"/zh-CN/docs/dev/sql-manual/sql-data-types/numeric/BIGINT"},"BIGINT \u6587\u6863"),"\u3002")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"LARGEINT \u5360 16 \u5b57\u8282\uff0c\u8303\u56f4 ","[-2^127, 2^127 - 1]",", \u66f4\u591a\u4fe1\u606f\u53c2\u8003 ",(0,r.yg)("a",{parentName:"p",href:"/zh-CN/docs/dev/sql-manual/sql-data-types/numeric/LARGEINT"},"LARGEINT \u6587\u6863"),"\u3002"))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"3. \u6d6e\u70b9\u6570\u7c7b\u578b\uff1a")," "),(0,r.yg)("p",null,"\u4e0d\u7cbe\u786e\u7684\u6d6e\u70b9\u6570\u7c7b\u578b FLOAT \u548c DOUBLE\uff0c\u548c\u5e38\u89c1\u7f16\u7a0b\u8bed\u8a00\u4e2d\u7684 float \u548c double \u5bf9\u5e94\u3002\u66f4\u591a\u4fe1\u606f\u53c2\u8003 ",(0,r.yg)("a",{parentName:"p",href:"/zh-CN/docs/dev/sql-manual/sql-data-types/numeric/FLOAT"},"FLOAT"),"\u3001",(0,r.yg)("a",{parentName:"p",href:"/zh-CN/docs/dev/sql-manual/sql-data-types/numeric/DOUBLE"},"DOUBLE")," \u6587\u6863\u3002"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"4. \u5b9a\u70b9\u6570\u7c7b\u578b\uff1a")," "),(0,r.yg)("p",null,"\u7cbe\u786e\u7684\u5b9a\u70b9\u6570\u7c7b\u578b DECIMAL\uff0c\u7528\u4e8e\u91d1\u878d\u7b49\u7cbe\u5ea6\u8981\u6c42\u4e25\u683c\u51c6\u786e\u7684\u573a\u666f\u3002\u66f4\u591a\u4fe1\u606f\u53c2\u8003 ",(0,r.yg)("a",{parentName:"p",href:"/zh-CN/docs/dev/sql-manual/sql-data-types/numeric/DECIMAL"},"DECIMAL")," \u6587\u6863\u3002"),(0,r.yg)("h2",{id:"\u65e5\u671f\u7c7b\u578b"},"\u65e5\u671f\u7c7b\u578b"),(0,r.yg)("p",null,"\u65e5\u671f\u7c7b\u578b\u5305\u62ec DATE\u3001TIME \u548c DATETIME\uff0cDATE \u7c7b\u578b\u53ea\u5b58\u50a8\u65e5\u671f\u7cbe\u786e\u5230\u5929\uff0cDATETIME \u7c7b\u578b\u5b58\u50a8\u65e5\u671f\u548c\u65f6\u95f4\uff0c\u53ef\u4ee5\u7cbe\u786e\u5230\u5fae\u79d2\u3002TIME \u7c7b\u578b\u53ea\u5b58\u50a8\u65f6\u95f4\uff0c\u4e14",(0,r.yg)("strong",{parentName:"p"},"\u6682\u65f6\u4e0d\u652f\u6301\u5efa\u8868\u5b58\u50a8\uff0c\u53ea\u80fd\u5728\u67e5\u8be2\u8fc7\u7a0b\u4e2d\u4f7f\u7528"),"\u3002"),(0,r.yg)("p",null,"\u5bf9\u65e5\u671f\u7c7b\u578b\u8fdb\u884c\u8ba1\u7b97\uff0c\u6216\u5c06\u5176\u8f6c\u6362\u4e3a\u6570\u5b57\uff0c\u8bf7\u4f7f\u7528\u7c7b\u4f3c ",(0,r.yg)("a",{parentName:"p",href:"../../sql-functions/date-time-functions/time-to-sec"},"TIME_TO_SEC"),", ",(0,r.yg)("a",{parentName:"p",href:"../../sql-functions/date-time-functions/datediff"},"DATE_DIFF"),", ",(0,r.yg)("a",{parentName:"p",href:"../../sql-functions/date-time-functions/unix-timestamp"},"UNIX_TIMESTAMP")," \u7b49\u51fd\u6570\uff0c\u76f4\u63a5\u5c06\u5176 CAST \u4e3a\u6570\u5b57\u7c7b\u578b\u7684\u7ed3\u679c\u4e0d\u53d7\u4fdd\u8bc1\u3002\u5728\u672a\u6765\u7684\u7248\u672c\u4e2d\uff0c\u6b64\u7c7b CAST \u884c\u4e3a\u5c06\u4f1a\u88ab\u7981\u6b62\u3002"),(0,r.yg)("p",null,"\u66f4\u591a\u4fe1\u606f\u53c2\u8003 ",(0,r.yg)("a",{parentName:"p",href:"../../sql-manual/sql-data-types/date-time/DATE"},"DATE"),"\u3001",(0,r.yg)("a",{parentName:"p",href:"../../sql-manual/sql-data-types/date-time/TIME"},"TIME")," \u548c ",(0,r.yg)("a",{parentName:"p",href:"../../sql-manual/sql-data-types/date-time/DATETIME"},"DATETIME")," \u6587\u6863\u3002"),(0,r.yg)("h2",{id:"\u5b57\u7b26\u4e32\u7c7b\u578b"},"\u5b57\u7b26\u4e32\u7c7b\u578b"),(0,r.yg)("p",null,"\u5b57\u7b26\u4e32\u7c7b\u578b\u652f\u6301\u5b9a\u957f\u548c\u4e0d\u5b9a\u957f\uff0c\u603b\u5171\u6709\u4ee5\u4e0b 3 \u79cd\uff1a"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("a",{parentName:"p",href:"../../sql-manual/sql-data-types/string/CHAR.md"},"CHAR(M)"),"\uff1a\u5b9a\u957f\u5b57\u7b26\u4e32\uff0c\u56fa\u5b9a\u957f\u5ea6 M \u5b57\u8282\uff0cM \u7684\u8303\u56f4\u662f ","[1, 255]","\u3002")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("a",{parentName:"p",href:"../../sql-manual/sql-data-types/string/VARCHAR.md"},"VARCHAR(M)"),"\uff1a\u4e0d\u5b9a\u957f\u5b57\u7b26\u4e32\uff0cM \u662f\u6700\u5927\u957f\u5ea6\uff0cM \u7684\u8303\u56f4\u662f ","[1, 65533]","\u3002")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("a",{parentName:"p",href:"../../sql-manual/sql-data-types/string/STRING.md"},"STRING"),"\uff1a\u4e0d\u5b9a\u957f\u5b57\u7b26\u4e32\uff0c\u9ed8\u8ba4\u6700\u957f 1048576 \u5b57\u8282\uff081MB\uff09\uff0c\u53ef\u8c03\u5927\u5230 2147483643 \u5b57\u8282\uff082GB\uff09\uff0cBE \u914d\u7f6e string_type_length_soft_limit_bytes\u3002"))),(0,r.yg)("h2",{id:"\u534a\u7ed3\u6784\u5316\u7c7b\u578b"},"\u534a\u7ed3\u6784\u5316\u7c7b\u578b"),(0,r.yg)("p",null,"\u9488\u5bf9 JSON \u534a\u7ed3\u6784\u5316\u6570\u636e\uff0c\u652f\u6301 3 \u7c7b\u4e0d\u540c\u573a\u666f\u7684\u534a\u7ed3\u6784\u5316\u6570\u636e\u7c7b\u578b\uff1a"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u652f\u6301\u5d4c\u5957\u7684\u56fa\u5b9a schema\uff0c\u9002\u5408\u5206\u6790\u7684\u6570\u636e\u7c7b\u578b ",(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("a",{parentName:"strong",href:"/zh-CN/docs/dev/sql-manual/sql-data-types/semi-structured/ARRAY"},"ARRAY"),"\u3001 ",(0,r.yg)("a",{parentName:"strong",href:"/zh-CN/docs/dev/sql-manual/sql-data-types/semi-structured/MAP"},"MAP")," ",(0,r.yg)("a",{parentName:"strong",href:"/zh-CN/docs/dev/sql-manual/sql-data-types/semi-structured/STRUCT"},"STRUCT")),"\uff1a\u5e38\u7528\u4e8e\u7528\u6237\u884c\u4e3a\u548c\u753b\u50cf\u5206\u6790\uff0c\u6e56\u4ed3\u4e00\u4f53\u67e5\u8be2\u6570\u636e\u6e56\u4e2d Parquet \u7b49\u683c\u5f0f\u7684\u6570\u636e\u7b49\u573a\u666f\u3002\u7531\u4e8e schema \u76f8\u5bf9\u56fa\u5b9a\uff0c\u6ca1\u6709\u52a8\u6001 schema \u63a8\u65ad\u7684\u5f00\u9500\uff0c\u5199\u5165\u548c\u5206\u6790\u6027\u80fd\u5f88\u9ad8\u3002")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u652f\u6301\u5d4c\u5957\u7684\u4e0d\u56fa\u5b9a schema\uff0c\u9002\u5408\u5206\u6790\u7684\u6570\u636e\u7c7b\u578b ",(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("a",{parentName:"strong",href:"/zh-CN/docs/dev/sql-manual/sql-data-types/semi-structured/VARIANT"},"VARIANT")),"\uff1a\u5e38\u7528\u4e8e Log, Trace, IoT \u7b49\u5206\u6790\u573a\u666f\uff0cschema \u7075\u6d3b\u53ef\u4ee5\u5199\u5165\u4efb\u4f55\u5408\u6cd5\u7684 JSON \u6570\u636e\uff0c\u5e76\u81ea\u52a8\u5c55\u5f00\u6210\u5b50\u5217\u91c7\u7528\u5217\u5f0f\u5b58\u50a8\uff0c\u5b58\u50a8\u538b\u7f29\u7387\u9ad8\uff0c\u805a\u5408 \u8fc7\u6ee4 \u6392\u5e8f\u7b49\u5206\u6790\u6027\u80fd\u5f88\u597d\u3002")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u652f\u6301\u5d4c\u5957\u7684\u4e0d\u56fa\u5b9a schema\uff0c\u9002\u5408\u70b9\u67e5\u7684\u6570\u636e\u7c7b\u578b ",(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("a",{parentName:"strong",href:"/zh-CN/docs/dev/sql-manual/sql-data-types/semi-structured/JSON"},"JSON")),"\uff1a\u5e38\u7528\u4e8e\u9ad8\u5e76\u53d1\u70b9\u67e5\u573a\u666f\uff0cschema \u7075\u6d3b\u53ef\u4ee5\u5199\u5165\u4efb\u4f55\u5408\u6cd5\u7684 JSON \u6570\u636e\uff0c\u91c7\u7528\u4e8c\u8fdb\u5236\u683c\u5f0f\u5b58\u50a8\uff0c\u63d0\u53d6\u5b57\u6bb5\u7684\u6027\u80fd\u6bd4\u666e\u901a JSON String \u5feb 2 \u500d\u4ee5\u4e0a\u3002"))),(0,r.yg)("h2",{id:"\u805a\u5408\u7c7b\u578b"},"\u805a\u5408\u7c7b\u578b"),(0,r.yg)("p",null,"\u805a\u5408\u7c7b\u578b\u5b58\u50a8\u805a\u5408\u7684\u7ed3\u679c\u6216\u8005\u4e2d\u95f4\u72b6\u6001\uff0c\u7528\u4e8e\u52a0\u901f\u805a\u5408\u67e5\u8be2\uff0c\u5305\u62ec\u4e0b\u9762\u51e0\u79cd\uff1a"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("a",{parentName:"p",href:"/zh-CN/docs/dev/sql-manual/sql-data-types/aggregate/BITMAP"},"BITMAP"),"\uff1a\u7528\u4e8e\u7cbe\u786e\u53bb\u91cd\uff0c\u5982 UV \u7edf\u8ba1\uff0c\u4eba\u7fa4\u5708\u9009\u7b49\u573a\u666f\u3002\u914d\u5408 bitmap_union\u3001bitmap_union_count\u3001bitmap_hash\u3001bitmap_hash64 \u7b49 BITMAP \u51fd\u6570\u4f7f\u7528\u3002")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("a",{parentName:"p",href:"/zh-CN/docs/dev/sql-manual/sql-data-types/aggregate/HLL"},"HLL"),"\uff1a\u7528\u4e8e\u8fd1\u4f3c\u53bb\u91cd\uff0c\u6027\u80fd\u4f18\u4e8e COUNT DISTINCT\u3002\u914d\u5408  hll_union_agg\u3001hll_raw_agg\u3001hll_cardinality\u3001hll_hash \u7b49 HLL \u51fd\u6570\u4f7f\u7528\u3002")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("a",{parentName:"p",href:"../../sql-manual/sql-data-types/aggregate/QUANTILE_STATE.md"},"QUANTILE_STATE"),"\uff1a\u7528\u4e8e\u5206\u4f4d\u6570\u8fd1\u4f3c\u8ba1\u7b97\uff0c\u6027\u80fd\u4f18\u4e8e PERCENTILE\u3002\u914d\u5408 QUANTILE_PERCENT\u3001QUANTILE_UNION\u3001TO_QUANTILE_STATE \u7b49\u51fd\u6570\u4f7f\u7528\u3002")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("a",{parentName:"p",href:"../../sql-manual/sql-data-types/aggregate/AGG_STATE.md"},"AGG_STATE"),"\uff1a\u7528\u4e8e\u805a\u5408\u8ba1\u7b97\u52a0\u901f\uff0c\u914d\u5408 state/merge/union \u805a\u5408\u51fd\u6570\u7ec4\u5408\u5668\u4f7f\u7528\u3002"))),(0,r.yg)("h2",{id:"ip-\u7c7b\u578b"},"IP \u7c7b\u578b"),(0,r.yg)("p",null,"IP \u7c7b\u578b\u4ee5\u4e8c\u8fdb\u5236\u5f62\u5f0f\u5b58\u50a8 IP \u5730\u5740\uff0c\u6bd4\u7528\u5b57\u7b26\u4e32\u5b58\u50a8\u66f4\u7701\u7a7a\u95f4\u67e5\u8be2\u901f\u5ea6\u66f4\u5feb\uff0c\u652f\u6301 2 \u79cd\u7c7b\u578b\uff1a"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("a",{parentName:"p",href:"/zh-CN/docs/dev/sql-manual/sql-data-types/ip/IPV4"},"IPv4"),"\uff1a\u4ee5 4 \u5b57\u8282\u4e8c\u8fdb\u5236\u5b58\u50a8 IPv4 \u5730\u5740\uff0c\u914d\u5408 ipv4_* \u7cfb\u5217\u51fd\u6570\u4f7f\u7528\u3002")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("a",{parentName:"p",href:"/zh-CN/docs/dev/sql-manual/sql-data-types/ip/IPV6"},"IPv6"),"\uff1a\u4ee5 16 \u5b57\u8282\u4e8c\u8fdb\u5236\u5b58\u50a8 IPv6 \u5730\u5740\uff0c\u914d\u5408 ipv6_* \u7cfb\u5217\u51fd\u6570\u4f7f\u7528\u3002"))))}u.isMDXComponent=!0}}]);