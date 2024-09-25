"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[349144],{15680:(e,n,r)=>{r.d(n,{xA:()=>c,yg:()=>d});var t=r(296540);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=t.createContext({}),p=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},c=function(e){var n=p(e.components);return t.createElement(s.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},y=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(r),y=a,d=u["".concat(s,".").concat(y)]||u[y]||m[y]||l;return r?t.createElement(d,i(i({ref:n},c),{},{components:r})):t.createElement(d,i({ref:n},c))}));function d(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=y;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=r[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}y.displayName="MDXCreateElement"},287384:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var t=r(58168),a=(r(296540),r(15680));const l={title:"SHOW-TRANSACTION",language:"zh-CN"},i=void 0,o={unversionedId:"sql-manual/sql-reference/Show-Statements/SHOW-TRANSACTION",id:"version-1.2/sql-manual/sql-reference/Show-Statements/SHOW-TRANSACTION",title:"SHOW-TRANSACTION",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/sql-manual/sql-reference/Show-Statements/SHOW-TRANSACTION.md",sourceDirName:"sql-manual/sql-reference/Show-Statements",slug:"/sql-manual/sql-reference/Show-Statements/SHOW-TRANSACTION",permalink:"/zh-CN/docs/1.2/sql-manual/sql-reference/Show-Statements/SHOW-TRANSACTION",draft:!1,tags:[],version:"1.2",frontMatter:{title:"SHOW-TRANSACTION",language:"zh-CN"},sidebar:"docs",previous:{title:"SHOW-VIEW",permalink:"/zh-CN/docs/1.2/sql-manual/sql-reference/Show-Statements/SHOW-VIEW"},next:{title:"SHOW-STREAM-LOAD",permalink:"/zh-CN/docs/1.2/sql-manual/sql-reference/Show-Statements/SHOW-STREAM-LOAD"}},s={},p=[{value:"SHOW-TRANSACTION",id:"show-transaction",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],c={toc:p},u="wrapper";function m(e){let{components:n,...r}=e;return(0,a.yg)(u,(0,t.A)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"show-transaction"},"SHOW-TRANSACTION"),(0,a.yg)("h3",{id:"name"},"Name"),(0,a.yg)("p",null,"SHOW TRANSACTION"),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("p",null,"\u8be5\u8bed\u6cd5\u7528\u4e8e\u67e5\u770b\u6307\u5b9a transaction id \u6216 label \u7684\u4e8b\u52a1\u8be6\u60c5\u3002"),(0,a.yg)("p",null,"\u8bed\u6cd5\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW TRANSACTION\n[FROM db_name]\nWHERE\n[id = transaction_id]\n[label = label_name];\n")),(0,a.yg)("p",null,"\u8fd4\u56de\u7ed3\u679c\u793a\u4f8b\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"     TransactionId: 4005\n             Label: insert_8d807d5d-bcdd-46eb-be6d-3fa87aa4952d\n       Coordinator: FE: 10.74.167.16\n TransactionStatus: VISIBLE\n LoadJobSourceType: INSERT_STREAMING\n       PrepareTime: 2020-01-09 14:59:07\n        CommitTime: 2020-01-09 14:59:09\n        FinishTime: 2020-01-09 14:59:09\n            Reason:\nErrorReplicasCount: 0\n        ListenerId: -1\n         TimeoutMs: 300000\n")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"TransactionId\uff1a\u4e8b\u52a1id"),(0,a.yg)("li",{parentName:"ul"},"Label\uff1a\u5bfc\u5165\u4efb\u52a1\u5bf9\u5e94\u7684 label"),(0,a.yg)("li",{parentName:"ul"},"Coordinator\uff1a\u8d1f\u8d23\u4e8b\u52a1\u534f\u8c03\u7684\u8282\u70b9"),(0,a.yg)("li",{parentName:"ul"},"TransactionStatus\uff1a\u4e8b\u52a1\u72b6\u6001",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"PREPARE\uff1a\u51c6\u5907\u9636\u6bb5"),(0,a.yg)("li",{parentName:"ul"},"COMMITTED\uff1a\u4e8b\u52a1\u6210\u529f\uff0c\u4f46\u6570\u636e\u4e0d\u53ef\u89c1"),(0,a.yg)("li",{parentName:"ul"},"VISIBLE\uff1a\u4e8b\u52a1\u6210\u529f\u4e14\u6570\u636e\u53ef\u89c1"),(0,a.yg)("li",{parentName:"ul"},"ABORTED\uff1a\u4e8b\u52a1\u5931\u8d25"))),(0,a.yg)("li",{parentName:"ul"},"LoadJobSourceType\uff1a\u5bfc\u5165\u4efb\u52a1\u7684\u7c7b\u578b\u3002"),(0,a.yg)("li",{parentName:"ul"},"PrepareTime\uff1a\u4e8b\u52a1\u5f00\u59cb\u65f6\u95f4"),(0,a.yg)("li",{parentName:"ul"},"CommitTime\uff1a\u4e8b\u52a1\u63d0\u4ea4\u6210\u529f\u7684\u65f6\u95f4"),(0,a.yg)("li",{parentName:"ul"},"FinishTime\uff1a\u6570\u636e\u53ef\u89c1\u7684\u65f6\u95f4"),(0,a.yg)("li",{parentName:"ul"},"Reason\uff1a\u9519\u8bef\u4fe1\u606f"),(0,a.yg)("li",{parentName:"ul"},"ErrorReplicasCount\uff1a\u6709\u9519\u8bef\u7684\u526f\u672c\u6570"),(0,a.yg)("li",{parentName:"ul"},"ListenerId\uff1a\u76f8\u5173\u7684\u5bfc\u5165\u4f5c\u4e1a\u7684id"),(0,a.yg)("li",{parentName:"ul"},"TimeoutMs\uff1a\u4e8b\u52a1\u8d85\u65f6\u65f6\u95f4\uff0c\u5355\u4f4d\u6beb\u79d2")),(0,a.yg)("h3",{id:"example"},"Example"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u67e5\u770b id \u4e3a 4005 \u7684\u4e8b\u52a1\uff1a"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW TRANSACTION WHERE ID=4005;\n"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u6307\u5b9a db \u4e2d\uff0c\u67e5\u770b id \u4e3a 4005 \u7684\u4e8b\u52a1\uff1a"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW TRANSACTION FROM db WHERE ID=4005;\n"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u67e5\u770b label \u4e3a label_name\u7684\u4e8b\u52a1\uff1a"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW TRANSACTION WHERE LABEL = 'label_name';\n")))),(0,a.yg)("h3",{id:"keywords"},"Keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"SHOW, TRANSACTION\n")),(0,a.yg)("h3",{id:"best-practice"},"Best Practice"))}m.isMDXComponent=!0}}]);