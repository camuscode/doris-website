"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[50843],{15680:(e,t,n)=>{n.d(t,{xA:()=>m,yg:()=>g});var a=n(296540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,g=u["".concat(i,".").concat(d)]||u[d]||c[d]||o;return n?a.createElement(g,l(l({ref:t},m),{},{components:n})):a.createElement(g,l({ref:t},m))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:r,l[1]=s;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},671068:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(58168),r=(n(296540),n(15680));const o={title:"SHOW-ROUTINE-LOAD",language:"en"},l=void 0,s={unversionedId:"sql-manual/sql-statements/Show-Statements/SHOW-ROUTINE-LOAD",id:"sql-manual/sql-statements/Show-Statements/SHOW-ROUTINE-LOAD",title:"SHOW-ROUTINE-LOAD",description:"\x3c!--",source:"@site/docs/sql-manual/sql-statements/Show-Statements/SHOW-ROUTINE-LOAD.md",sourceDirName:"sql-manual/sql-statements/Show-Statements",slug:"/sql-manual/sql-statements/Show-Statements/SHOW-ROUTINE-LOAD",permalink:"/docs/dev/sql-manual/sql-statements/Show-Statements/SHOW-ROUTINE-LOAD",draft:!1,tags:[],version:"current",frontMatter:{title:"SHOW-ROUTINE-LOAD",language:"en"},sidebar:"docs",previous:{title:"SHOW-SQL-BLOCK-RULE",permalink:"/docs/dev/sql-manual/sql-statements/Show-Statements/SHOW-SQL-BLOCK-RULE"},next:{title:"SHOW-SYNC-JOB",permalink:"/docs/dev/sql-manual/sql-statements/Show-Statements/SHOW-SYNC-JOB"}},i={},p=[{value:"SHOW-ROUTINE-LOAD",id:"show-routine-load",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],m={toc:p},u="wrapper";function c(e){let{components:t,...n}=e;return(0,r.yg)(u,(0,a.A)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"show-routine-load"},"SHOW-ROUTINE-LOAD"),(0,r.yg)("h3",{id:"name"},"Name"),(0,r.yg)("p",null,"SHOW ROUTINE LOAD"),(0,r.yg)("h3",{id:"description"},"Description"),(0,r.yg)("p",null,"This statement is used to display the running status of the Routine Load job"),(0,r.yg)("p",null,"grammar:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW [ALL] ROUTINE LOAD [FOR jobName];\n")),(0,r.yg)("p",null,"Result description:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'                  Id: job ID\n                Name: job name\n          CreateTime: job creation time\n           PauseTime: The last job pause time\n             EndTime: Job end time\n              DbName: corresponding database name\n           TableName: The name of the corresponding table (In the case of multiple tables, since it is a dynamic table, the specific table name is not displayed, and we uniformly display it as "multi-table").\n           IsMultiTbl: Indicates whether it is a multi-table\n               State: job running state\n      DataSourceType: Data source type: KAFKA\n      CurrentTaskNum: The current number of subtasks\n       JobProperties: Job configuration details\nDataSourceProperties: Data source configuration details\n    CustomProperties: custom configuration\n           Statistic: Job running status statistics\n            Progress: job running progress\n                 Lag: job delay status\nReasonOfStateChanged: The reason for the job state change\n        ErrorLogUrls: The viewing address of the filtered unqualified data\n            OtherMsg: other error messages\n')),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"State"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"There are the following 5 states:\n* NEED_SCHEDULE: The job is waiting to be scheduled\n* RUNNING: The job is running\n* PAUSED: The job is paused\n* STOPPED: The job has ended\n* CANCELLED: The job was canceled\n"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Progress"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},'For Kafka data sources, displays the currently consumed offset for each partition. For example, {"0":"2"} indicates that the consumption progress of Kafka partition 0 is 2.\n')))),(0,r.yg)("p",null,"*Lag"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'  For Kafka data sources, shows the consumption latency of each partition. For example, {"0":10} means that the consumption delay of Kafka partition 0 is 10.\n')),(0,r.yg)("h3",{id:"example"},"Example"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Show all routine import jobs named test1 (including stopped or canceled jobs). The result is one or more lines."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW ALL ROUTINE LOAD FOR test1;\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Show the currently running routine import job named test1"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW ROUTINE LOAD FOR test1;\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Display all routine import jobs (including stopped or canceled jobs) under example_db. The result is one or more lines."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"use example_db;\nSHOW ALL ROUTINE LOAD;\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Display all running routine import jobs under example_db"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"use example_db;\nSHOW ROUTINE LOAD;\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Display the currently running routine import job named test1 under example_db"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW ROUTINE LOAD FOR example_db.test1;\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Displays all routine import jobs named test1 under example_db (including stopped or canceled jobs). The result is one or more lines."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW ALL ROUTINE LOAD FOR example_db.test1;\n")))),(0,r.yg)("h3",{id:"keywords"},"Keywords"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"SHOW, ROUTINE, LOAD\n")),(0,r.yg)("h3",{id:"best-practice"},"Best Practice"))}c.isMDXComponent=!0}}]);