"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[944792],{15680:(e,t,a)=>{a.d(t,{xA:()=>u,yg:()=>d});var n=a(296540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(a),g=r,d=c["".concat(s,".").concat(g)]||c[g]||m[g]||l;return a?n.createElement(d,i(i({ref:t},u),{},{components:a})):n.createElement(d,i({ref:t},u))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=g;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},739289:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=a(58168),r=(a(296540),a(15680));const l={title:"Release 1.2.4",language:"en"},i=void 0,o={unversionedId:"releasenotes/v1.2/release-1.2.4",id:"version-2.1/releasenotes/v1.2/release-1.2.4",title:"Release 1.2.4",description:"\x3c!--",source:"@site/versioned_docs/version-2.1/releasenotes/v1.2/release-1.2.4.md",sourceDirName:"releasenotes/v1.2",slug:"/releasenotes/v1.2/release-1.2.4",permalink:"/docs/releasenotes/v1.2/release-1.2.4",draft:!1,tags:[],version:"2.1",frontMatter:{title:"Release 1.2.4",language:"en"},sidebar:"releasenotes",previous:{title:"Release 1.2.5",permalink:"/docs/releasenotes/v1.2/release-1.2.5"},next:{title:"Release 1.2.3",permalink:"/docs/releasenotes/v1.2/release-1.2.3"}},s={},p=[{value:"JDBC Catalog",id:"jdbc-catalog",level:3},{value:"Spark Load",id:"spark-load",level:3},{value:"Bug Fixes",id:"bug-fixes",level:2}],u={toc:p},c="wrapper";function m(e){let{components:t,...a}=e;return(0,r.yg)(c,(0,n.A)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"behavior-changed"},"Behavior Changed"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"For ",(0,r.yg)("inlineCode",{parentName:"p"},"DateV2"),"/",(0,r.yg)("inlineCode",{parentName:"p"},"DatetimeV2")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"DecimalV3")," type, in the results of ",(0,r.yg)("inlineCode",{parentName:"p"},"DESCRIBLE")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"SHOW CREATE TABLE")," statements, they will no longer be displayed as ",(0,r.yg)("inlineCode",{parentName:"p"},"DateV2"),"/",(0,r.yg)("inlineCode",{parentName:"p"},"DatetimeV2")," or ",(0,r.yg)("inlineCode",{parentName:"p"},"DecimalV3"),", but directly displayed as ",(0,r.yg)("inlineCode",{parentName:"p"},"Date"),"/",(0,r.yg)("inlineCode",{parentName:"p"},"Datetime")," or ",(0,r.yg)("inlineCode",{parentName:"p"},"Decimal"),"."),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"This change is for compatibility with some BI tools. If you want to see the actual type of the column, you can check it with the ",(0,r.yg)("inlineCode",{parentName:"li"},"DESCRIBE ALL")," statement."))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"When querying tables in the ",(0,r.yg)("inlineCode",{parentName:"p"},"information_schema")," database, the meta information(database, table, column, etc.) in the external catalog is no longer returned by default."),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"This change avoids the problem that the ",(0,r.yg)("inlineCode",{parentName:"li"},"information_schema")," database cannot be queried due to the connection problem of some external catalog, so as to solve the problem of using some BI tools with Doris. It can be controlled by the FE configuration  ",(0,r.yg)("inlineCode",{parentName:"li"},"infodb_support_ext_catalog"),", and the default value is ",(0,r.yg)("inlineCode",{parentName:"li"},"false"),", that is, the meta information of external catalog will not be returned.")))),(0,r.yg)("h1",{id:"improvement"},"Improvement"),(0,r.yg)("h3",{id:"jdbc-catalog"},"JDBC Catalog"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Supports connecting to Trino/Presto via JDBC Catalog")),(0,r.yg)("p",null,"\u200b        Refer to: ",(0,r.yg)("a",{parentName:"p",href:"https://doris.apache.org/docs/dev/lakehouse/multi-catalog/jdbc#trino"},"https://doris.apache.org/docs/dev/lakehouse/multi-catalog/jdbc#trino")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"JDBC Catalog connects to Clickhouse data source and supports Array type mapping")),(0,r.yg)("p",null,"\u200b        Refer to: ",(0,r.yg)("a",{parentName:"p",href:"https://doris.apache.org/docs/dev/lakehouse/multi-catalog/jdbc#clickhouse"},"https://doris.apache.org/docs/dev/lakehouse/multi-catalog/jdbc#clickhouse")),(0,r.yg)("h3",{id:"spark-load"},"Spark Load"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Spark Load supports Resource Manager HA related configuration")),(0,r.yg)("p",null,"\u200b        Refer to: ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/15000"},"https://github.com/apache/doris/pull/15000")),(0,r.yg)("h2",{id:"bug-fixes"},"Bug Fixes"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Fixed several connectivity issues with Hive Catalog.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Fixed ClassNotFound issues with Hudi Catalog.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Optimize the connection pool of JDBC Catalog to avoid too many connections.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Fix the problem that OOM will occur when importing data from another Doris cluster through JDBC Catalog.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Fixed serveral queries and imports planning issues.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Fixed several issues with Unique Key Merge-On-Write data model.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Fix several BDBJE issues and solve the problem of abnormal FE metadata in some cases.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Fix the problem that the ",(0,r.yg)("inlineCode",{parentName:"p"},"CREATE VIEW")," statement does not support Table Valued Function.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Fixed several memory statistics issues.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Fixed several issues reading Parquet/ORC format.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Fixed several issues with DecimalV3.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Fixed several issues with SHOW QUERY/LOAD PROFILE."))))}m.isMDXComponent=!0}}]);