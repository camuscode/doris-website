"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[907784],{15680:(e,t,r)=>{r.d(t,{xA:()=>d,yg:()=>p});var a=r(296540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=a.createContext({}),l=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=l(e.components);return a.createElement(u.Provider,{value:t},e.children)},c="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,u=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=l(r),m=n,p=c["".concat(u,".").concat(m)]||c[m]||y[m]||s;return r?a.createElement(p,o(o({ref:t},d),{},{components:r})):a.createElement(p,o({ref:t},d))}));function p(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,o=new Array(s);o[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[c]="string"==typeof e?e:n,o[1]=i;for(var l=2;l<s;l++)o[l]=r[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},558776:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>y,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var a=r(58168),n=(r(296540),r(15680));const s={title:"Workload Analysis",language:"en"},o=void 0,i={unversionedId:"admin-manual/resource-admin/workload-analysis",id:"admin-manual/resource-admin/workload-analysis",title:"Workload Analysis",description:"\x3c!--",source:"@site/docs/admin-manual/resource-admin/workload-analysis.md",sourceDirName:"admin-manual/resource-admin",slug:"/admin-manual/resource-admin/workload-analysis",permalink:"/docs/dev/admin-manual/resource-admin/workload-analysis",draft:!1,tags:[],version:"current",frontMatter:{title:"Workload Analysis",language:"en"},sidebar:"docs",previous:{title:"Workload Policy",permalink:"/docs/dev/admin-manual/resource-admin/workload-policy"},next:{title:"Resource Group",permalink:"/docs/dev/admin-manual/resource-admin/multi-tenant"}},u={},l=[{value:"Workload Table",id:"workload-table",level:2},{value:"active_queries",id:"active_queries",level:3},{value:"backend_active_tasks",id:"backend_active_tasks",level:3},{value:"workload_group_resource_usage",id:"workload_group_resource_usage",level:3},{value:"Workload Analysis and Handling Methods",id:"workload-analysis-and-handling-methods",level:2},{value:"Commonly Used SQL",id:"commonly-used-sql",level:2}],d={toc:l},c="wrapper";function y(e){let{components:t,...r}=e;return(0,n.yg)(c,(0,a.A)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"Doris supports analyzing workloads in the cluster through the Workload system tables, addressing the following issues:"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"It helps users understand the resource utilization of each Workload Group, allowing for reasonable setting of resource limits to avoid waste."),(0,n.yg)("li",{parentName:"ol"},"When cluster availability decreases due to insufficient resources, the system tables can be used to quickly identify the current resource usage distribution, enabling the formulation of appropriate resource management decisions to restore cluster availability.")),(0,n.yg)("h2",{id:"workload-table"},"Workload Table"),(0,n.yg)("p",null,"All tables are in the database",(0,n.yg)("inlineCode",{parentName:"p"},"information_schema"),"."),(0,n.yg)("h3",{id:"active_queries"},"active_queries"),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"active_queries")," records quereis in FE:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"query_id, query's id"),(0,n.yg)("li",{parentName:"ul"},"query_start_time, the time when the query starts executing; if the query was queued, it represents the time when execution begins after the queuing ends."),(0,n.yg)("li",{parentName:"ul"},"query_time_ms, the duration of the query, measured in milliseconds."),(0,n.yg)("li",{parentName:"ul"},"workload_group_id, the ID of the workload group used by the query."),(0,n.yg)("li",{parentName:"ul"},"database, the database used by the SQL query."),(0,n.yg)("li",{parentName:"ul"},"frontend_instance, the node name of the FE where the query is located."),(0,n.yg)("li",{parentName:"ul"},"queue_start_time, if the query enters the queuing logic upon arrival, it represents the time point when the query started queuing."),(0,n.yg)("li",{parentName:"ul"},"queue_end_time, if the query enters the queuing logic upon arrival, it represents the time point when the query finishes queuing."),(0,n.yg)("li",{parentName:"ul"},"query_status, the current status of the query, which mainly has two values: RUNNING and QUEUED. RUNNING indicates that the query is currently running, while QUEUED means that the query is currently in the queue."),(0,n.yg)("li",{parentName:"ul"},"sql, sql content.")),(0,n.yg)("h3",{id:"backend_active_tasks"},"backend_active_tasks"),(0,n.yg)("p",null,"A query is typically divided into multiple fragments and executed on multiple BEs. The backend_active_tasks represents the total amount of CPU and memory resources used by a query on a single BE. If the query has multiple concurrent fragments on a single BE, the data will be aggregated into a single row.\nDetailed information about the fields is as follows:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"be_id, backend id."),(0,n.yg)("li",{parentName:"ul"},"fe_host, Represents which FE the query was submitted from."),(0,n.yg)("li",{parentName:"ul"},"query_id, query's id."),(0,n.yg)("li",{parentName:"ul"},"task_time_ms, query running time in BE, measured in milliseconds."),(0,n.yg)("li",{parentName:"ul"},"task_cpu_time_ms, CPU time of the query while executing on the BE, measured in milliseconds."),(0,n.yg)("li",{parentName:"ul"},"scan_rows, the number of rows scanned by the query on the current BE. If multiple tables are scanned, this value is the sum of rows scanned across all those tables."),(0,n.yg)("li",{parentName:"ul"},"scan_bytes, the number of bytes scanned by the query on the current BE. If multiple tables are scanned, this value is the sum of bytes scanned across all those tables."),(0,n.yg)("li",{parentName:"ul"},"be_peak_memory_bytes, the peak memory usage of the query on the current BE, measured in bytes."),(0,n.yg)("li",{parentName:"ul"},"current_used_memory_bytes, the amount of memory currently used by the query on the current BE, measured in bytes."),(0,n.yg)("li",{parentName:"ul"},"shuffle_send_bytes, the number of bytes sent by the query as a shuffle client on the current node."),(0,n.yg)("li",{parentName:"ul"},"shuffle_send_rows, the number of rows sent by the query as a shuffle client on the current node.")),(0,n.yg)("h3",{id:"workload_group_resource_usage"},"workload_group_resource_usage"),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"workload_group_resource_usage"),"table provides real-time information on the current resource usage of Workload Groups.\nThe field descriptions are as follows: "),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"be_id, backend's i."),(0,n.yg)("li",{parentName:"ul"},"workload_group_id, workload group's id."),(0,n.yg)("li",{parentName:"ul"},"memory_usage_bytes, workload group's memory usage."),(0,n.yg)("li",{parentName:"ul"},"cpu_usage_percent, the percentage of CPU usage by the Workload Group, calculated as the total CPU active time of the Workload Group in 1 second divided by the total available CPU time in 1 second. This value is the average over the last 10 seconds."),(0,n.yg)("li",{parentName:"ul"},"local_scan_bytes_per_second, the number of bytes read per second by the Workload Group from local files. Note that due to Doris's Page Cache and operating system cache, this value is typically higher than what is monitored using system tools like pidstat. If multiple directories are configured, this value is the sum of I/O reads from all directories. For per-directory read I/O throughput, detailed data can be found in BE's bvar monitoring."),(0,n.yg)("li",{parentName:"ul"},"remote_scan_bytes_per_second, the number of bytes read per second by the Workload Group from remote data.")),(0,n.yg)("h2",{id:"workload-analysis-and-handling-methods"},"Workload Analysis and Handling Methods"),(0,n.yg)("p",null,"When monitoring indicates a decrease in cluster availability, you can follow these steps to address the issue:"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"Identify the Bottleneck: First, use monitoring to roughly determine the current bottleneck in the cluster, such as high memory usage, high CPU usage, or high I/O. If all are high, prioritize resolving memory issues."),(0,n.yg)("li",{parentName:"ol"},"Examine Resource Usage: After identifying the cluster bottleneck, use the workload_group_resource_usage table to identify the Workload Groups with the highest resource usage. For example, if memory is the bottleneck, find the top N groups with the highest memory usage."),(0,n.yg)("li",{parentName:"ol"},"Reduce Query Concurrency: Once you have identified the groups with the highest resource usage, try reducing the query concurrency for these groups. Since cluster resources are already tight, avoid allowing new queries to exhaust the cluster's resources."),(0,n.yg)("li",{parentName:"ol"},"Degrade Queries: Apply degradation to the queries in the current group based on the type of bottleneck:")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"For CPU Bottleneck: Set the group's CPU to a hard limit and adjust cpu_hard_limit to a lower value to proactively release CPU resources."),(0,n.yg)("li",{parentName:"ul"},"For I/O Bottleneck: Limit the group's maximum I/O using the read_bytes_per_second parameter."),(0,n.yg)("li",{parentName:"ul"},"For Memory Bottleneck: Set the group's memory to a hard limit and reduce the memory_limit value to free up some memory. Be aware that this may cause many queries in the group to fail.")),(0,n.yg)("ol",{start:5},(0,n.yg)("li",{parentName:"ol"},"Further Analysis: After completing the above steps, the cluster\u2019s availability should improve. Conduct further analysis to determine whether the increase in resource usage is due to higher overall query concurrency in the group or specific large queries. If specific large queries are causing the issue, quickly killing these large queries can help recover the system."),(0,n.yg)("li",{parentName:"ol"},"Kill Abnormal Queries: Use backend_active_tasks in conjunction with active_queries to identify SQL queries with abnormal resource usage in the cluster. Then, use the KILL statement to terminate these queries and free up resources.")),(0,n.yg)("h2",{id:"commonly-used-sql"},"Commonly Used SQL"),(0,n.yg)("admonition",{type:"tip"},(0,n.yg)("p",{parentName:"admonition"},"Note that the active_queries table records queries running on the FE, while the backend_active_tasks table records queries running on the BE. Not all queries are registered with the FE during execution; for example, stream loads are not registered with the FE. Therefore, it is normal to get no matching results when performing a LEFT JOIN between backend_active_tasks and active_queries."),(0,n.yg)("p",{parentName:"admonition"},"When a query is a SELECT query, the queryId recorded in both active_queries and backend_active_tasks is the same. When a query is a stream load, the queryId in the active_queries table is empty, while the queryId in backend_active_tasks is the ID of the stream load.")),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"View all current Workload Groups and display them in descending order of memory/CPU/I/O usage.")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"select be_id,workload_group_id,memory_usage_bytes,cpu_usage_percent,local_scan_bytes_per_second \n   from workload_group_resource_usage\norder by  memory_usage_bytes,cpu_usage_percent,local_scan_bytes_per_second desc\n")),(0,n.yg)("ol",{start:2},(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Cpu usage TopN Sql."),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre"},"select \n        t1.query_id as be_query_id,\n        t1.query_type,\n        t2.query_id,\n        t2.workload_group_id,\n        t2.`database`,\n        t1.cpu_time,\n        t2.`sql`\nfrom\n(select query_id, query_type,sum(task_cpu_time_ms) as cpu_time from backend_active_tasks group by query_id, query_type) \n        t1 left join active_queries t2\non t1.query_id = t2.query_id\norder by cpu_time desc limit 10;\n"))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Memory usage TopN Sql."),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre"},"select \n        t1.query_id as be_query_id,\n        t1.query_type,\n        t2.query_id,\n        t2.workload_group_id,\n        t1.mem_used\nfrom\n(select query_id, query_type, sum(current_used_memory_bytes) as mem_used from backend_active_tasks group by query_id, query_type) \n        t1 left join active_queries t2\non t1.query_id = t2.query_id \norder by mem_used desc limit 10;\n"))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Scan bytes/rows TopN Sql."),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre"},"select \n        t1.query_id as be_query_id,\n        t1.query_type,\n        t2.query_id,\n        t2.workload_group_id,\n        t1.scan_rows,\n        t1.scan_bytes\nfrom\n(select query_id, query_type, sum(scan_rows) as scan_rows,sum(scan_bytes) as scan_bytes from backend_active_tasks group by query_id,query_type) \n        t1 left join active_queries t2\non t1.query_id = t2.query_id \norder by scan_rows desc,scan_bytes desc limit 10;\n"))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Show workload group's scan rows/bytes."),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre"},"select \n        t2.workload_group_id,\n        sum(t1.scan_rows) as wg_scan_rows,\n        sum(t1.scan_bytes) as wg_scan_bytes\nfrom\n(select query_id, sum(scan_rows) as scan_rows,sum(scan_bytes) as scan_bytes from backend_active_tasks group by query_id) \n        t1 left join active_queries t2\non t1.query_id = t2.query_id \ngroup by t2.workload_group_id\norder by wg_scan_rows desc,wg_scan_bytes desc\n"))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Show workload group's query queue details."),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre"},"select \n         workload_group_id,\n         query_id,\n         query_status,\n         now() - queue_start_time as queued_time\nfrom \n     active_queries\nwhere query_status='queued'\norder by workload_group_id\n")))))}y.isMDXComponent=!0}}]);