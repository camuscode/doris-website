"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[426959],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>y});var r=t(296540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function u(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?u(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},u=Object.keys(e);for(r=0;r<u.length;r++)t=u[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)t=u[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var a=r.createContext({}),s=function(e){var n=r.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(a.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,u=e.originalType,a=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(t),f=i,y=p["".concat(a,".").concat(f)]||p[f]||d[f]||u;return t?r.createElement(y,o(o({ref:n},c),{},{components:t})):r.createElement(y,o({ref:n},c))}));function y(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var u=t.length,o=new Array(u);o[0]=f;var l={};for(var a in n)hasOwnProperty.call(n,a)&&(l[a]=n[a]);l.originalType=e,l[p]="string"==typeof e?e:i,o[1]=l;for(var s=2;s<u;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},450287:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>d,frontMatter:()=>u,metadata:()=>l,toc:()=>s});var r=t(58168),i=(t(296540),t(15680));const u={title:"UUID",language:"zh-CN"},o=void 0,l={unversionedId:"sql-manual/sql-functions/string-functions/uuid",id:"sql-manual/sql-functions/string-functions/uuid",title:"UUID",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/string-functions/uuid.md",sourceDirName:"sql-manual/sql-functions/string-functions",slug:"/sql-manual/sql-functions/string-functions/uuid",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/string-functions/uuid",draft:!1,tags:[],version:"current",frontMatter:{title:"UUID",language:"zh-CN"},sidebar:"docs",previous:{title:"EXTRACT_URL_PARAMETER",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/string-functions/extract-url-parameter"},next:{title:"SPACE",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/string-functions/space"}},a={},s=[{value:"uuid",id:"uuid",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:s},p="wrapper";function d(e){let{components:n,...t}=e;return(0,i.yg)(p,(0,r.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"uuid"},"uuid"),(0,i.yg)("p",null,"uuid"),(0,i.yg)("h3",{id:"description"},"description"),(0,i.yg)("h4",{id:"syntax"},"Syntax"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"VARCHAR uuid()")),(0,i.yg)("p",null,"\u8fd4\u56de\u4e00\u4e2a\u968f\u673a\u7684 uuid \u5b57\u7b26\u4e32"),(0,i.yg)("h3",{id:"example"},"example"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"mysql> select uuid();\n+--------------------------------------+\n| uuid()                               |\n+--------------------------------------+\n| 29077778-fc5e-4603-8368-6b5f8fd55c24 |\n+--------------------------------------+\n\n")),(0,i.yg)("h3",{id:"keywords"},"keywords"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"UUID\n")))}d.isMDXComponent=!0}}]);