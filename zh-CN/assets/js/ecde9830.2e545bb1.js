"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[480916],{15680:(e,n,r)=>{r.d(n,{xA:()=>g,yg:()=>d});var a=r(296540);function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,a,t=function(e,n){if(null==e)return{};var r,a,t={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var p=a.createContext({}),c=function(e){var n=a.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},g=function(e){var n=c(e.components);return a.createElement(p.Provider,{value:n},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,i=e.originalType,p=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),u=c(r),m=t,d=u["".concat(p,".").concat(m)]||u[m]||s[m]||i;return r?a.createElement(d,o(o({ref:n},g),{},{components:r})):a.createElement(d,o({ref:n},g))}));function d(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[u]="string"==typeof e?e:t,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},480594:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=r(58168),t=(r(296540),r(15680));const i={title:"GROUPING",language:"zh-CN"},o=void 0,l={unversionedId:"sql-manual/sql-functions/aggregate-functions/grouping",id:"version-2.1/sql-manual/sql-functions/aggregate-functions/grouping",title:"GROUPING",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-functions/aggregate-functions/grouping.md",sourceDirName:"sql-manual/sql-functions/aggregate-functions",slug:"/sql-manual/sql-functions/aggregate-functions/grouping",permalink:"/zh-CN/docs/sql-manual/sql-functions/aggregate-functions/grouping",draft:!1,tags:[],version:"2.1",frontMatter:{title:"GROUPING",language:"zh-CN"},sidebar:"docs",previous:{title:"HLL_UNION_AGG",permalink:"/zh-CN/docs/sql-manual/sql-functions/aggregate-functions/hll-union-agg"},next:{title:"GROUPING_ID",permalink:"/zh-CN/docs/sql-manual/sql-functions/aggregate-functions/grouping-id"}},p={},c=[{value:"GROUPING",id:"grouping",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],g={toc:c},u="wrapper";function s(e){let{components:n,...r}=e;return(0,t.yg)(u,(0,a.A)({},g,r,{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h2",{id:"grouping"},"GROUPING"),(0,t.yg)("h3",{id:"name"},"Name"),(0,t.yg)("p",null,"GROUPING"),(0,t.yg)("h3",{id:"description"},"Description"),(0,t.yg)("p",null,"\u7528\u5728\u542b\u6709 CUBE\u3001ROLLUP \u6216 GROUPING SETS \u7684 SQL \u8bed\u53e5\u4e2d\uff0c\u7528\u4e8e\u8868\u793a\u8fdb\u884c CUBE\u3001ROLLUP \u6216 GROUPING SETS \u64cd\u4f5c\u7684\u5217\u662f\u5426\u6c47\u603b\u3002\u5f53\u7ed3\u679c\u96c6\u4e2d\u7684\u6570\u636e\u884c\u662f CUBE\u3001ROLLUP \u6216 GROUPING SETS \u64cd\u4f5c\u4ea7\u751f\u7684\u6c47\u603b\u7ed3\u679c\u65f6\uff0c\u8be5\u51fd\u6570\u8fd4\u56de 1\uff0c\u5426\u5219\u8fd4\u56de 0\u3002GROUPING \u51fd\u6570\u53ef\u4ee5\u5728 ",(0,t.yg)("inlineCode",{parentName:"p"},"SELECT"),"\u3001",(0,t.yg)("inlineCode",{parentName:"p"},"HAVING")," \u548c ",(0,t.yg)("inlineCode",{parentName:"p"},"ORDER BY")," \u5b50\u53e5\u5f53\u4e2d\u4f7f\u7528\u3002"),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"ROLLUP"),"\u3001",(0,t.yg)("inlineCode",{parentName:"p"},"CUBE")," \u6216 ",(0,t.yg)("inlineCode",{parentName:"p"},"GROUPING SETS")," \u64cd\u4f5c\u8fd4\u56de\u7684\u6c47\u603b\u7ed3\u679c\uff0c\u4f1a\u7528 NULL \u5145\u5f53\u88ab\u5206\u7ec4\u7684\u5b57\u6bb5\u7684\u503c\u3002\u56e0\u6b64\uff0c",(0,t.yg)("inlineCode",{parentName:"p"},"GROUPING")," \u901a\u5e38\u7528\u4e8e\u533a\u5206 ",(0,t.yg)("inlineCode",{parentName:"p"},"ROLLUP"),"\u3001",(0,t.yg)("inlineCode",{parentName:"p"},"CUBE")," \u6216 ",(0,t.yg)("inlineCode",{parentName:"p"},"GROUPING SETS")," \u8fd4\u56de\u7684\u7a7a\u503c\u4e0e\u8868\u4e2d\u7684\u7a7a\u503c\u3002"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"GROUPING( <column_expression> )\n")),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"<column_expression>"),"\n\u662f\u5728 ",(0,t.yg)("inlineCode",{parentName:"p"},"GROUP BY")," \u5b50\u53e5\u4e2d\u5305\u542b\u7684\u5217\u6216\u8868\u8fbe\u5f0f\u3002"),(0,t.yg)("p",null,"\u8fd4\u56de\u503c\uff1aBIGINT"),(0,t.yg)("h3",{id:"example"},"Example"),(0,t.yg)("p",null,"\u4e0b\u9762\u7684\u4f8b\u5b50\u4f7f\u7528 ",(0,t.yg)("inlineCode",{parentName:"p"},"camp")," \u5217\u8fdb\u884c\u5206\u7ec4\u64cd\u4f5c\uff0c\u5e76\u5bf9 ",(0,t.yg)("inlineCode",{parentName:"p"},"occupation")," \u7684\u6570\u91cf\u8fdb\u884c\u6c47\u603b\uff0c",(0,t.yg)("inlineCode",{parentName:"p"},"GROUPING")," \u51fd\u6570\u4f5c\u7528\u4e8e ",(0,t.yg)("inlineCode",{parentName:"p"},"camp")," \u5217\u3002"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE `roles` (\n  role_id       INT,\n  occupation    VARCHAR(32),\n  camp          VARCHAR(32),\n  register_time DATE\n)\nUNIQUE KEY(role_id)\nDISTRIBUTED BY HASH(role_id) BUCKETS 1\nPROPERTIES (\n  \"replication_allocation\" = \"tag.location.default: 1\"\n);\n\nINSERT INTO `roles` VALUES\n(0, 'who am I', NULL, NULL),\n(1, 'mage', 'alliance', '2018-12-03 16:11:28'),\n(2, 'paladin', 'alliance', '2018-11-30 16:11:28'),\n(3, 'rogue', 'horde', '2018-12-01 16:11:28'),\n(4, 'priest', 'alliance', '2018-12-02 16:11:28'),\n(5, 'shaman', 'horde', NULL),\n(6, 'warrior', 'alliance', NULL),\n(7, 'warlock', 'horde', '2018-12-04 16:11:28'),\n(8, 'hunter', 'horde', NULL);\n\nSELECT \n  camp, \n  COUNT(occupation) AS 'occ_cnt',\n  GROUPING(camp)    AS 'grouping'\nFROM\n   `roles`\nGROUP BY\n  ROLLUP(camp); -- CUBE(camp) \u548c GROUPING SETS((camp)) \u540c\u6837\u4e5f\u6709\u6548;\n")),(0,t.yg)("p",null,"\u7ed3\u679c\u96c6\u5728 ",(0,t.yg)("inlineCode",{parentName:"p"},"camp")," \u5217\u4e0b\u6709\u4e24\u4e2a NULL \u503c\uff0c\u7b2c\u4e00\u4e2a NULL \u503c\u8868\u793a ",(0,t.yg)("inlineCode",{parentName:"p"},"ROLLUP")," \u64cd\u4f5c\u7684\u5217\u7684\u6c47\u603b\u7ed3\u679c\uff0c\u8fd9\u4e00\u884c\u7684 ",(0,t.yg)("inlineCode",{parentName:"p"},"occ_cnt")," \u5217\u8868\u793a\u6240\u6709 ",(0,t.yg)("inlineCode",{parentName:"p"},"camp")," \u7684 ",(0,t.yg)("inlineCode",{parentName:"p"},"occupation")," \u7684\u8ba1\u6570\u7ed3\u679c\uff0c\u5728 ",(0,t.yg)("inlineCode",{parentName:"p"},"grouping")," \u51fd\u6570\u4e2d\u8fd4\u56de 1\u3002\u7b2c\u4e8c\u4e2a NULL \u8868\u793a ",(0,t.yg)("inlineCode",{parentName:"p"},"camp")," \u5217\u4e2d\u672c\u6765\u5c31\u5b58\u5728\u7684 NULL \u503c\u3002"),(0,t.yg)("p",null,"\u7ed3\u679c\u96c6\u5982\u4e0b\uff1a"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-log"},"+----------+---------+----------+\n| camp     | occ_cnt | grouping |\n+----------+---------+----------+\n| NULL     |       9 |        1 |\n| NULL     |       1 |        0 |\n| alliance |       4 |        0 |\n| horde    |       4 |        0 |\n+----------+---------+----------+\n4 rows in set (0.01 sec)\n")),(0,t.yg)("h3",{id:"keywords"},"Keywords"),(0,t.yg)("p",null,"GROUPING"),(0,t.yg)("h3",{id:"best-practice"},"Best Practice"),(0,t.yg)("p",null,"\u8fd8\u53ef\u53c2\u9605 ",(0,t.yg)("a",{parentName:"p",href:"./grouping_id.md"},"GROUPING_ID")))}s.isMDXComponent=!0}}]);