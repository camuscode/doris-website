"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[991099],{15680:(e,t,a)=>{a.d(t,{xA:()=>m,yg:()=>y});var l=a(296540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},r=Object.keys(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=l.createContext({}),p=function(e){var t=l.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=p(e.components);return l.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},g=l.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=p(a),g=n,y=u["".concat(s,".").concat(g)]||u[g]||c[g]||r;return a?l.createElement(y,o(o({ref:t},m),{},{components:a})):l.createElement(y,o({ref:t},m))}));function y(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=g;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:n,o[1]=i;for(var p=2;p<r;p++)o[p]=a[p];return l.createElement.apply(null,o)}return l.createElement.apply(null,a)}g.displayName="MDXCreateElement"},150458:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var l=a(58168),n=(a(296540),a(15680));const r={title:"ALTER-TABLE-ROLLUP",language:"en"},o=void 0,i={unversionedId:"sql-manual/sql-statements/Data-Definition-Statements/Alter/ALTER-TABLE-ROLLUP",id:"version-3.0/sql-manual/sql-statements/Data-Definition-Statements/Alter/ALTER-TABLE-ROLLUP",title:"ALTER-TABLE-ROLLUP",description:"\x3c!--",source:"@site/versioned_docs/version-3.0/sql-manual/sql-statements/Data-Definition-Statements/Alter/ALTER-TABLE-ROLLUP.md",sourceDirName:"sql-manual/sql-statements/Data-Definition-Statements/Alter",slug:"/sql-manual/sql-statements/Data-Definition-Statements/Alter/ALTER-TABLE-ROLLUP",permalink:"/docs/3.0/sql-manual/sql-statements/Data-Definition-Statements/Alter/ALTER-TABLE-ROLLUP",draft:!1,tags:[],version:"3.0",frontMatter:{title:"ALTER-TABLE-ROLLUP",language:"en"},sidebar:"docs",previous:{title:"ALTER-TABLE-PARTITION",permalink:"/docs/3.0/sql-manual/sql-statements/Data-Definition-Statements/Alter/ALTER-TABLE-PARTITION"},next:{title:"ALTER-TABLE-RENAME",permalink:"/docs/3.0/sql-manual/sql-statements/Data-Definition-Statements/Alter/ALTER-TABLE-RENAME"}},s={},p=[{value:"ALTER-TABLE-ROLLUP",id:"alter-table-rollup",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Best Practice",id:"best-practice",level:3}],m={toc:p},u="wrapper";function c(e){let{components:t,...a}=e;return(0,n.yg)(u,(0,l.A)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h2",{id:"alter-table-rollup"},"ALTER-TABLE-ROLLUP"),(0,n.yg)("h3",{id:"name"},"Name"),(0,n.yg)("p",null,"ALTER TABLE ROLLUP"),(0,n.yg)("h3",{id:"description"},"Description"),(0,n.yg)("p",null,"This statement is used to perform a rollup modification operation on an existing table. The rollup is an asynchronous operation, and the task is returned when the task is submitted successfully. After that, you can use the ",(0,n.yg)("a",{parentName:"p",href:"/docs/3.0/sql-manual/sql-statements/Show-Statements/SHOW-ALTER"},"SHOW ALTER")," command to view the progress."),(0,n.yg)("p",null,"grammar:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE [database.]table alter_clause;\n")),(0,n.yg)("p",null,"The alter_clause of rollup supports the following creation methods"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"Create a rollup index")),(0,n.yg)("p",null,"grammar:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},'ADD ROLLUP rollup_name (column_name1, column_name2, ...)\n[FROM from_index_name]\n[PROPERTIES ("key"="value", ...)]\n')),(0,n.yg)("p",null,"properties: Support setting timeout time, the default timeout time is 1 day."),(0,n.yg)("ol",{start:2},(0,n.yg)("li",{parentName:"ol"},"Create rollup indexes in batches")),(0,n.yg)("p",null,"grammar:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},'ADD ROLLUP [rollup_name (column_name1, column_name2, ...)\n                    [FROM from_index_name]\n                    [PROPERTIES ("key"="value", ...)],...]\n')),(0,n.yg)("p",null,"Notice:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"If from_index_name is not specified, it will be created from base index by default"),(0,n.yg)("li",{parentName:"ul"},"Columns in rollup table must be columns already in from_index"),(0,n.yg)("li",{parentName:"ul"},"In properties, the storage format can be specified. For details, see ",(0,n.yg)("a",{parentName:"li",href:"/docs/3.0/sql-manual/sql-statements/Data-Definition-Statements/Create/CREATE-TABLE"},"CREATE TABLE"))),(0,n.yg)("ol",{start:3},(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Delete rollup index"),(0,n.yg)("p",{parentName:"li"},"grammar:"))),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},'DROP ROLLUP rollup_name [PROPERTIES ("key"="value", ...)]\n')),(0,n.yg)("ol",{start:4},(0,n.yg)("li",{parentName:"ol"},"Batch delete rollup index")),(0,n.yg)("p",null,"grammar:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},'DROP ROLLUP [rollup_name [PROPERTIES ("key"="value", ...)],...]\n')),(0,n.yg)("p",null,"Notice:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"cannot delete base index")),(0,n.yg)("h3",{id:"example"},"Example"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"Create index: example_rollup_index, based on base index (k1,k2,k3,v1,v2). Columnar storage.")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE example_db.my_table\nADD ROLLUP example_rollup_index(k1, k3, v1, v2);\n")),(0,n.yg)("ol",{start:2},(0,n.yg)("li",{parentName:"ol"},"Create index: example_rollup_index2, based on example_rollup_index (k1,k3,v1,v2)")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE example_db.my_table\nADD ROLLUP example_rollup_index2 (k1, v1)\nFROM example_rollup_index;\n")),(0,n.yg)("ol",{start:3},(0,n.yg)("li",{parentName:"ol"},"Create index: example_rollup_index3, based on base index (k1,k2,k3,v1), with a custom rollup timeout of one hour.")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE example_db.my_table\nADD ROLLUP example_rollup_index(k1, k3, v1)\nPROPERTIES("timeout" = "3600");\n')),(0,n.yg)("ol",{start:4},(0,n.yg)("li",{parentName:"ol"},"Delete index: example_rollup_index2")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE example_db.my_table\nDROP ROLLUP example_rollup_index2;\n")),(0,n.yg)("ol",{start:5},(0,n.yg)("li",{parentName:"ol"},"Batch Delete rollup index")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE example_db.my_table\nDROP ROLLUP example_rollup_index2,example_rollup_index3;\n")),(0,n.yg)("h3",{id:""}),(0,n.yg)("ol",{start:4},(0,n.yg)("li",{parentName:"ol"},"Keywords")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-text"},"ALTER, TABLE, ROLLUP, ALTER TABLE\n")),(0,n.yg)("h3",{id:"best-practice"},"Best Practice"))}c.isMDXComponent=!0}}]);