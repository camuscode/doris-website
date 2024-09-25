"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[121036],{15680:(n,e,r)=>{r.d(e,{xA:()=>u,yg:()=>d});var t=r(296540);function a(n,e,r){return e in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n}function o(n,e){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.push.apply(r,t)}return r}function s(n){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(n,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(r,e))}))}return n}function l(n,e){if(null==n)return{};var r,t,a=function(n,e){if(null==n)return{};var r,t,a={},o=Object.keys(n);for(t=0;t<o.length;t++)r=o[t],e.indexOf(r)>=0||(a[r]=n[r]);return a}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(t=0;t<o.length;t++)r=o[t],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(n,r)&&(a[r]=n[r])}return a}var i=t.createContext({}),c=function(n){var e=t.useContext(i),r=e;return n&&(r="function"==typeof n?n(e):s(s({},e),n)),r},u=function(n){var e=c(n.components);return t.createElement(i.Provider,{value:e},n.children)},y="mdxType",p={inlineCode:"code",wrapper:function(n){var e=n.children;return t.createElement(t.Fragment,{},e)}},f=t.forwardRef((function(n,e){var r=n.components,a=n.mdxType,o=n.originalType,i=n.parentName,u=l(n,["components","mdxType","originalType","parentName"]),y=c(r),f=a,d=y["".concat(i,".").concat(f)]||y[f]||p[f]||o;return r?t.createElement(d,s(s({ref:e},u),{},{components:r})):t.createElement(d,s({ref:e},u))}));function d(n,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var o=r.length,s=new Array(o);s[0]=f;var l={};for(var i in e)hasOwnProperty.call(e,i)&&(l[i]=e[i]);l.originalType=n,l[y]="string"==typeof n?n:a,s[1]=l;for(var c=2;c<o;c++)s[c]=r[c];return t.createElement.apply(null,s)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"},582549:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var t=r(58168),a=(r(296540),r(15680));const o={title:"JSON_ARRAY",language:"en"},s=void 0,l={unversionedId:"sql-manual/sql-functions/json-functions/json-array",id:"version-2.1/sql-manual/sql-functions/json-functions/json-array",title:"JSON_ARRAY",description:"\x3c!--",source:"@site/versioned_docs/version-2.1/sql-manual/sql-functions/json-functions/json-array.md",sourceDirName:"sql-manual/sql-functions/json-functions",slug:"/sql-manual/sql-functions/json-functions/json-array",permalink:"/docs/sql-manual/sql-functions/json-functions/json-array",draft:!1,tags:[],version:"2.1",frontMatter:{title:"JSON_ARRAY",language:"en"},sidebar:"docs",previous:{title:"JSON_TYPE",permalink:"/docs/sql-manual/sql-functions/json-functions/json-type"},next:{title:"JSON_OBJECT",permalink:"/docs/sql-manual/sql-functions/json-functions/json-object"}},i={},c=[{value:"json_array",id:"json_array",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},y="wrapper";function p(n){let{components:e,...r}=n;return(0,a.yg)(y,(0,t.A)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"json_array"},"json_array"),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"VARCHAR json_array(VARCHAR,...)")),(0,a.yg)("p",null,"Generate a json array containing the specified values, return empty if no values"),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'MySQL> select json_array();\n+--------------+\n| json_array() |\n+--------------+\n| []           |\n+--------------+\n\nMySQL> select json_array(null);\n+--------------------+\n| json_array(\'NULL\') |\n+--------------------+\n| [NULL]             |\n+--------------------+\n\n\nMySQL> SELECT json_array(1, "abc", NULL, TRUE, CURTIME());\n+-----------------------------------------------+\n| json_array(1, \'abc\', \'NULL\', TRUE, curtime()) |\n+-----------------------------------------------+\n| [1, "abc", NULL, TRUE, "10:41:15"]            |\n+-----------------------------------------------+\n\n\nMySQL> select json_array("a", null, "c");\n+------------------------------+\n| json_array(\'a\', \'NULL\', \'c\') |\n+------------------------------+\n| ["a", NULL, "c"]             |\n+------------------------------+\n')),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("p",null,"json,array,json_array"))}p.isMDXComponent=!0}}]);