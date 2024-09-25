"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[21324],{15680:(e,t,n)=>{n.d(t,{xA:()=>m,yg:()=>d});var a=n(296540);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=p(n),y=l,d=u["".concat(s,".").concat(y)]||u[y]||c[y]||i;return n?a.createElement(d,r(r({ref:t},m),{},{components:n})):a.createElement(d,r({ref:t},m))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,r=new Array(i);r[0]=y;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:l,r[1]=o;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},48138:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(58168),l=(n(296540),n(15680));const i={title:"SHOW-BACKUP",language:"en"},r=void 0,o={unversionedId:"sql-manual/sql-statements/Show-Statements/SHOW-BACKUP",id:"version-2.1/sql-manual/sql-statements/Show-Statements/SHOW-BACKUP",title:"SHOW-BACKUP",description:"\x3c!--",source:"@site/versioned_docs/version-2.1/sql-manual/sql-statements/Show-Statements/SHOW-BACKUP.md",sourceDirName:"sql-manual/sql-statements/Show-Statements",slug:"/sql-manual/sql-statements/Show-Statements/SHOW-BACKUP",permalink:"/docs/sql-manual/sql-statements/Show-Statements/SHOW-BACKUP",draft:!1,tags:[],version:"2.1",frontMatter:{title:"SHOW-BACKUP",language:"en"},sidebar:"docs",previous:{title:"SHOW-ANALYZE",permalink:"/docs/sql-manual/sql-statements/Show-Statements/SHOW-ANALYZE"},next:{title:"SHOW-BACKENDS",permalink:"/docs/sql-manual/sql-statements/Show-Statements/SHOW-BACKENDS"}},s={},p=[{value:"SHOW-BACKUP",id:"show-backup",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],m={toc:p},u="wrapper";function c(e){let{components:t,...n}=e;return(0,l.yg)(u,(0,a.A)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("h2",{id:"show-backup"},"SHOW-BACKUP"),(0,l.yg)("h3",{id:"name"},"Name"),(0,l.yg)("p",null,"SHOW BACKUP"),(0,l.yg)("h3",{id:"description"},"Description"),(0,l.yg)("p",null,"This statement is used to view BACKUP tasks"),(0,l.yg)("p",null,"grammar:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"}," SHOW BACKUP [FROM db_name]\n    [WHERE SnapshotName ( LIKE | = ) 'snapshot name']\n")),(0,l.yg)("p",null,"illustrate:"),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},"Only the most recent BACKUP task is saved in Doris."),(0,l.yg)("li",{parentName:"ol"},"The meaning of each column is as follows:",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"JobId"),": Unique job id"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"SnapshotName"),": The name of the backup"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"DbName"),": belongs to the database"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"State"),": current stage",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"PENDING"),": The initial state after submitting the job"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"SNAPSHOTING"),": Executing snapshot"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"UPLOAD_SNAPSHOT"),": Snapshot completed, ready to upload"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"UPLOADING"),": Snapshot uploading"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"SAVE_META"),": Save job meta information to a local file"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"UPLOAD_INFO"),": Upload job meta information"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"FINISHED"),": The job was successful"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"CANCELLED"),": Job failed"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"BackupObjs"),": Backed up tables and partitions"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"CreateTime"),": task submission time"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"SnapshotFinishedTime"),": Snapshot completion time"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"UploadFinishedTime"),": Snapshot upload completion time"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"FinishedTime"),": Job finish time"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"UnfinishedTasks"),": Displays unfinished subtask ids during SNAPSHOTING and UPLOADING stages"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"Status"),": If the job fails, display the failure message"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"Timeout"),": Job timeout, in seconds")))),(0,l.yg)("h3",{id:"example"},"Example"),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"View the last BACKUP task under example_db."),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-sql"}," SHOW BACKUP FROM example_db;\n")))),(0,l.yg)("h3",{id:"keywords"},"Keywords"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"SHOW, BACKUP\n")),(0,l.yg)("h3",{id:"best-practice"},"Best Practice"))}c.isMDXComponent=!0}}]);