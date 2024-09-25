"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[70294],{15680:(e,t,n)=>{n.d(t,{xA:()=>m,yg:()=>A});var a=n(296540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),c=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=c(n),u=r,A=p["".concat(o,".").concat(u)]||p[u]||d[u]||i;return n?a.createElement(A,l(l({ref:t},m),{},{components:n})):a.createElement(A,l({ref:t},m))}));function A(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[p]="string"==typeof e?e:r,l[1]=s;for(var c=2;c<i;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},164417:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(58168),r=(n(296540),n(15680));const i={title:"ADMIN-CANCEL-REBALANCE-DISK",language:"en"},l=void 0,s={unversionedId:"sql-manual/sql-statements/Database-Administration-Statements/ADMIN-CANCEL-REBALANCE-DISK",id:"version-3.0/sql-manual/sql-statements/Database-Administration-Statements/ADMIN-CANCEL-REBALANCE-DISK",title:"ADMIN-CANCEL-REBALANCE-DISK",description:"\x3c!--",source:"@site/versioned_docs/version-3.0/sql-manual/sql-statements/Database-Administration-Statements/ADMIN-CANCEL-REBALANCE-DISK.md",sourceDirName:"sql-manual/sql-statements/Database-Administration-Statements",slug:"/sql-manual/sql-statements/Database-Administration-Statements/ADMIN-CANCEL-REBALANCE-DISK",permalink:"/docs/3.0/sql-manual/sql-statements/Database-Administration-Statements/ADMIN-CANCEL-REBALANCE-DISK",draft:!1,tags:[],version:"3.0",frontMatter:{title:"ADMIN-CANCEL-REBALANCE-DISK",language:"en"},sidebar:"docs",previous:{title:"ADMIN-REBALANCE-DISK",permalink:"/docs/3.0/sql-manual/sql-statements/Database-Administration-Statements/ADMIN-REBALANCE-DISK"},next:{title:"UNSET-VARIABLE",permalink:"/docs/3.0/sql-manual/sql-statements/Database-Administration-Statements/UNSET-VARIABLE"}},o={},c=[{value:"ADMIN-CANCEL-REBALANCE-DISK",id:"admin-cancel-rebalance-disk",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],m={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,r.yg)(p,(0,a.A)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"admin-cancel-rebalance-disk"},"ADMIN-CANCEL-REBALANCE-DISK"),(0,r.yg)("h3",{id:"name"},"Name"),(0,r.yg)("p",null,"ADMIN CANCEL REBALANCE DISK"),(0,r.yg)("h3",{id:"description"},"Description"),(0,r.yg)("p",null,"This statement is used to cancel rebalancing disks of specified backends with high priority"),(0,r.yg)("p",null,"Grammar:"),(0,r.yg)("p",null,"ADMIN CANCEL REBALANCE DISK ",'[ON ("BackendHost1:BackendHeartBeatPort1", "BackendHost2:BackendHeartBeatPort2", ...)]',";"),(0,r.yg)("p",null,"Explain:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"This statement only indicates that the system no longer rebalance disks of specified backends with high priority. The system will still rebalance disks by default scheduling.")),(0,r.yg)("h3",{id:"example"},"Example"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Cancel High Priority Disk Rebalance of all of backends of the cluster")),(0,r.yg)("p",null,"ADMIN CANCEL REBALANCE DISK;"),(0,r.yg)("ol",{start:2},(0,r.yg)("li",{parentName:"ol"},"Cancel High Priority Disk Rebalance of specified backends")),(0,r.yg)("p",null,'ADMIN CANCEL REBALANCE DISK ON ("192.168.1.1:1234", "192.168.1.2:1234");'),(0,r.yg)("h3",{id:"keywords"},"Keywords"),(0,r.yg)("p",null,"ADMIN,CANCEL,REBALANCE DISK"),(0,r.yg)("h3",{id:"best-practice"},"Best Practice"))}d.isMDXComponent=!0}}]);