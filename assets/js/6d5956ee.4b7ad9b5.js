"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[46328],{15680:(e,n,a)=>{a.d(n,{xA:()=>g,yg:()=>u});var r=a(296540);function i(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function t(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?t(Object(a),!0).forEach((function(n){i(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):t(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function o(e,n){if(null==e)return{};var a,r,i=function(e,n){if(null==e)return{};var a,r,i={},t=Object.keys(e);for(r=0;r<t.length;r++)a=t[r],n.indexOf(a)>=0||(i[a]=e[a]);return i}(e,n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(r=0;r<t.length;r++)a=t[r],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var p=r.createContext({}),s=function(e){var n=r.useContext(p),a=n;return e&&(a="function"==typeof e?e(n):l(l({},n),e)),a},g=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var a=e.components,i=e.mdxType,t=e.originalType,p=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),d=s(a),c=i,u=d["".concat(p,".").concat(c)]||d[c]||m[c]||t;return a?r.createElement(u,l(l({ref:n},g),{},{components:a})):r.createElement(u,l({ref:n},g))}));function u(e,n){var a=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var t=a.length,l=new Array(t);l[0]=c;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[d]="string"==typeof e?e:i,l[1]=o;for(var s=2;s<t;s++)l[s]=a[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},41477:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>t,metadata:()=>o,toc:()=>s});var r=a(58168),i=(a(296540),a(15680));const t={title:"Integration with Apache Ranger",language:"en"},l=void 0,o={unversionedId:"admin-manual/auth/ranger",id:"admin-manual/auth/ranger",title:"Integration with Apache Ranger",description:"\x3c!--",source:"@site/docs/admin-manual/auth/ranger.md",sourceDirName:"admin-manual/auth",slug:"/admin-manual/auth/ranger",permalink:"/docs/dev/admin-manual/auth/ranger",draft:!1,tags:[],version:"current",frontMatter:{title:"Integration with Apache Ranger",language:"en"},sidebar:"docs",previous:{title:"LDAP",permalink:"/docs/dev/admin-manual/auth/ldap"},next:{title:"MySQL Client Certificate",permalink:"/docs/dev/admin-manual/auth/certificate"}},p={},s=[{value:"Installation",id:"installation",level:2},{value:"Install Doris Ranger plug-in",id:"install-doris-ranger-plug-in",level:3},{value:"Configure the Doris Ranger plug-in",id:"configure-the-doris-ranger-plug-in",level:3},{value:"Configure Doris cluster",id:"configure-doris-cluster",level:3},{value:"Resources and permissions",id:"resources-and-permissions",level:2},{value:"Best Practices",id:"best-practices",level:2},{value:"Configuring Permissions",id:"configuring-permissions",level:3},{value:"Row Policy Example",id:"row-policy-example",level:3},{value:"Data Mask Example",id:"data-mask-example",level:3}],g={toc:s},d="wrapper";function m(e){let{components:n,...t}=e;return(0,i.yg)(d,(0,r.A)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"Apache Ranger is a security framework used to monitor, enable services, and manage all-round data security access on the Hadoop platform."),(0,i.yg)("p",null,"In version 2.1.0, Doris supports unified permission management by integrating Apache Ranger."),(0,i.yg)("blockquote",null,(0,i.yg)("p",{parentName:"blockquote"},"Note: "),(0,i.yg)("ul",{parentName:"blockquote"},(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"This feature is currently experimental, and the resource objects and permissions configurable in Ranger may change in subsequent versions.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Apache Ranger version needs to be above 2.4.0.")))),(0,i.yg)("h2",{id:"installation"},"Installation"),(0,i.yg)("h3",{id:"install-doris-ranger-plug-in"},"Install Doris Ranger plug-in"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Download the following files"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://selectdb-doris-1308700295.cos.ap-beijing.myqcloud.com/ranger/ranger-doris-plugin-3.0.0-SNAPSHOT.jar"},"ranger-doris-plugin-3.0.0-SNAPSHOT.jar")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://selectdb-doris-1308700295.cos.ap-beijing.myqcloud.com/release/jdbc_driver/mysql-connector-java-8.0.25.jar"},"mysql-connector-java-8.0.25.jar")))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Place the downloaded file in the ",(0,i.yg)("inlineCode",{parentName:"p"},"ranger-plugins/doris")," directory of the Ranger service, such as:"),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre"},"/usr/local/service/ranger/ews/webapp/WEB-INF/classes/ranger-plugins/doris/ranger-doris-plugin-3.0.0-SNAPSHOT.jar\n/usr/local/service/ranger/ews/webapp/WEB-INF/classes/ranger-plugins/doris/mysql-connector-java-8.0.25.jar\n"))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Restart the Ranger service.")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Download ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/morningman/ranger/blob/doris-plugin/agents-common/src/main/resources/service-defs/ranger-servicedef-doris.json"},"ranger-servicedef-doris.json"))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Execute the following command to upload the definition file to the Ranger service:"),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre"},'curl -u user:password -X POST \\\n    -H "Accept: application/json" \\\n    -H "Content-Type: application/json" \\\n    http://172.21.0.32:6080/service/plugins/definitions \\\n    -d@ranger-servicedef-doris.json\n')),(0,i.yg)("p",{parentName:"li"},"The username and password are the username and password used to log in to Ranger WebUI."),(0,i.yg)("p",{parentName:"li"},"The service address port can be viewed in the ",(0,i.yg)("inlineCode",{parentName:"p"},"ranger.service.http.port")," configuration item of the ",(0,i.yg)("inlineCode",{parentName:"p"},"ranger-admin-site.xml")," configuration file."),(0,i.yg)("p",{parentName:"li"},"If the execution is successful, the service definition in Json format will be returned, such as:"),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre"},'{\n  "id": 207,\n  "guid": "d3ff9e41-f9dd-4217-bb5f-3fa9996454b6",\n  "isEnabled": true,\n  "createdBy": "Admin",\n  "updatedBy": "Admin",\n  "createTime": 1705817398112,\n  "updateTime": 1705817398112,\n  "version": 1,\n  "name": "doris",\n  "displayName": "Apache Doris",\n  "implClass": "org.apache.ranger.services.doris.RangerServiceDoris",\n  "label": "Doris",\n  "description": "Apache Doris",\n  "options": {\n    "enableDenyAndExceptionsInPolicies": "true"\n  },\n  ...\n}\n')),(0,i.yg)("p",{parentName:"li"},"If you want to recreate it, you can use the following command to delete the service definition and then upload it again:"),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre"},"curl -v -u user:password -X DELETE \\\nhttp://172.21.0.32:6080/service/plugins/definitions/207\n")),(0,i.yg)("p",{parentName:"li"},"Where ",(0,i.yg)("inlineCode",{parentName:"p"},"207")," is the id returned when created. Before deletion, you need to delete the created Doris service in the Ranger WebUI."),(0,i.yg)("p",{parentName:"li"},"You can also use the following command to list the currently added service definitions in order to obtain the id:"),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre"},"curl -v -u user:password -X GET \\\nhttp://172.21.0.32:6080/service/plugins/definitions/\n")))),(0,i.yg)("h3",{id:"configure-the-doris-ranger-plug-in"},"Configure the Doris Ranger plug-in"),(0,i.yg)("p",null,"After the installation is complete, open the Ranger WebUI and you can see the Apache Doris plug-in in the Service Manger interface:"),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"ranger1",src:a(473838).A,width:"3978",height:"1492"})),(0,i.yg)("p",null,"Click the ",(0,i.yg)("inlineCode",{parentName:"p"},"+")," button next to the plugin to add a Doris service:"),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"ranger2",src:a(701669).A,width:"1844",height:"1810"})),(0,i.yg)("p",null,"The meaning of some parameters of Config Properties is as follows:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"Username"),"/",(0,i.yg)("inlineCode",{parentName:"li"},"Password"),": the username and password of the Doris cluster. It is recommended to use the Admin user here."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"jdbc.driver_class"),": Connect to the JDBC driver used by Doris. ",(0,i.yg)("inlineCode",{parentName:"li"},"com.mysql.cj.jdbc.Driver")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"jdbc.url"),": JDBC url connection string of Doris cluster. ",(0,i.yg)("inlineCode",{parentName:"li"},"jdbc:mysql://172.21.0.101:9030?useSSL=false")),(0,i.yg)("li",{parentName:"ul"},"Additional parameters:",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"resource.lookup.timeout.value.in.ms"),": timeout for obtaining meta-information. It is recommended to fill in ",(0,i.yg)("inlineCode",{parentName:"li"},"10000"),", which is 10 seconds.")))),(0,i.yg)("p",null,"You can click ",(0,i.yg)("inlineCode",{parentName:"p"},"Test Connection")," to check whether the connection can be made."),(0,i.yg)("p",null,"Then click ",(0,i.yg)("inlineCode",{parentName:"p"},"Add")," to add the service."),(0,i.yg)("p",null,"Afterwards, you can see the created service in the Apache Doris plug-in on the Service Manger page. Click on the service to start configuring Ranger."),(0,i.yg)("h3",{id:"configure-doris-cluster"},"Configure Doris cluster"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Create a ",(0,i.yg)("inlineCode",{parentName:"p"},"ranger-doris-security.xml")," file in the conf directory of all FEs with the following content:"),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre"},'<?xml version="1.0" encoding="UTF-8"?>\n<?xml-stylesheet type="text/xsl" href="configuration.xsl"?>\n<configuration>\n    <property>\n        <name>ranger.plugin.doris.policy.cache.dir</name>\n        <value>/path/to/ranger/cache/</value>\n    </property>\n    <property>\n        <name>ranger.plugin.doris.policy.pollIntervalMs</name>\n        <value>30000</value>\n    </property>\n    <property>\n        <name>ranger.plugin.doris.policy.rest.client.connection.timeoutMs</name>\n        <value>60000</value>\n    </property>\n    <property>\n        <name>ranger.plugin.doris.policy.rest.client.read.timeoutMs</name>\n        <value>60000</value>\n    </property>\n    <property>\n        <name>ranger.plugin.doris.policy.rest.url</name>\n        <value>http://172.21.0.32:6080</value>\n    </property>\n    <property>\n        <name>ranger.plugin.doris.policy.source.impl</name>\n        <value>org.apache.ranger.admin.client.RangerAdminRESTClient</value>\n    </property>\n    <property>\n        <name>ranger.plugin.doris.service.name</name>\n        <value>doris</value>\n    </property>\n</configuration>\n')),(0,i.yg)("p",{parentName:"li"},"You need to change ",(0,i.yg)("inlineCode",{parentName:"p"},"ranger.plugin.doris.policy.cache.dir")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"ranger.plugin.doris.policy.rest.url")," to actual values.")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Create a ",(0,i.yg)("inlineCode",{parentName:"p"},"ranger-doris-audit.xml")," file in the conf directory of all FEs with the following content:"),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre"},'<?xml version="1.0" encoding="UTF-8"?>\n<?xml-stylesheet type="text/xsl" href="configuration.xsl"?>\n<configuration>\n</configuration>\n'))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Create a ",(0,i.yg)("inlineCode",{parentName:"p"},"log4j.properties")," file in the conf directory of all FEs with the following content:"),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre"},"log4j.rootLogger = debug,stdout,D\n\nlog4j.appender.stdout = org.apache.log4j.ConsoleAppender\nlog4j.appender.stdout.Target = System.out\nlog4j.appender.stdout.layout = org.apache.log4j.PatternLayout\nlog4j.appender.stdout.layout.ConversionPattern = [%-5p] %d{yyyy-MM-dd HH:mm:ss,SSS} method:%l%n%m%n\n\nlog4j.appender.D = org.apache.log4j.DailyRollingFileAppender\nlog4j.appender.D.File = /path/to/fe/log/ranger.log\nlog4j.appender.D.Append = true\nlog4j.appender.D.Threshold = INFO\nlog4j.appender.D.layout = org.apache.log4j.PatternLayout\nlog4j.appender.D.layout.ConversionPattern = %-d{yyyy-MM-dd HH:mm:ss}  [ %t:%r ] - [ %p ]  %m%n\n")),(0,i.yg)("p",{parentName:"li"},"You need to change ",(0,i.yg)("inlineCode",{parentName:"p"},"log4j.appender.D.File")," to the actual value, which is used to store the log of the Ranger plug-in.")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Add configuration in fe.conf of all FEs:"),(0,i.yg)("p",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"p"},"access_controller_type=ranger-doris"))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Restart all FE nodes."))),(0,i.yg)("h2",{id:"resources-and-permissions"},"Resources and permissions"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Doris resources currently supported in Ranger include:"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"Catalog")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"Database")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"Table")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"Column")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"Resource")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"Workload Group")))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Doris permissions currently supported in Ranger include:"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"SHOW")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"SHOW_VIEW")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"SHOW_RESOURCES")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"SHOW_WORKLOAD_GROUP")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"LOAD")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"ALTER")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"CREATE")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"ALTER_CREATE")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"ALTER_CREATE_DROP")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"DROP")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"SELECT")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"USAGE"))))),(0,i.yg)("h2",{id:"best-practices"},"Best Practices"),(0,i.yg)("h3",{id:"configuring-permissions"},"Configuring Permissions"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Create ",(0,i.yg)("inlineCode",{parentName:"p"},"user1")," in Doris.")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Using the ",(0,i.yg)("inlineCode",{parentName:"p"},"admin")," user in Doris, create a Catalog named ",(0,i.yg)("inlineCode",{parentName:"p"},"hive"),".")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Create ",(0,i.yg)("inlineCode",{parentName:"p"},"user1")," in Ranger.")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Add a Policy in Ranger named ",(0,i.yg)("inlineCode",{parentName:"p"},"show_hive_catalog")),(0,i.yg)("p",{parentName:"li"},(0,i.yg)("img",{alt:"ranger3",src:a(465756).A,width:"1928",height:"1698"}))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Log in to Doris as ",(0,i.yg)("inlineCode",{parentName:"p"},"user1")," and execute ",(0,i.yg)("inlineCode",{parentName:"p"},"show catalogs"),"; only the ",(0,i.yg)("inlineCode",{parentName:"p"},"hive")," catalog should be visible.")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Add a Policy in Ranger named ",(0,i.yg)("inlineCode",{parentName:"p"},"select_hive_catalog")),(0,i.yg)("p",{parentName:"li"},"!4ranger3](/images/ranger/ranger4.png)")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Log in to Doris as ",(0,i.yg)("inlineCode",{parentName:"p"},"user1"),". This user can now view or query all tables under any database starting with ",(0,i.yg)("inlineCode",{parentName:"p"},"tpch")," in the ",(0,i.yg)("inlineCode",{parentName:"p"},"hive")," catalog."))),(0,i.yg)("h3",{id:"row-policy-example"},"Row Policy Example"),(0,i.yg)("blockquote",null,(0,i.yg)("p",{parentName:"blockquote"},"Supported in version 2.1.3")),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Refer to Configuring Permissions to assign select permissions for the table internal.db1.user to user1.")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Add a Row Level Filter policy in Ranger"),(0,i.yg)("p",{parentName:"li"},(0,i.yg)("img",{alt:"Row Policy Example",src:a(73166).A,width:"1280",height:"703"}))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Log in to Doris as user1. Execute ",(0,i.yg)("inlineCode",{parentName:"p"},"select * from internal.db1.user")," and only see data that satisfies ",(0,i.yg)("inlineCode",{parentName:"p"},"id > 3")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"age = 2"),"."))),(0,i.yg)("h3",{id:"data-mask-example"},"Data Mask Example"),(0,i.yg)("blockquote",null,(0,i.yg)("p",{parentName:"blockquote"},"Supported in version 2.1.3")),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Refer to Configuring Permissions to assign select permissions for the table internal.db1.user to user1.")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Add a Masking policy in Ranger"),(0,i.yg)("p",{parentName:"li"},(0,i.yg)("img",{alt:"Data Mask Example",src:a(637061).A,width:"1280",height:"702"}))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Log in to Doris as user1. Execute ",(0,i.yg)("inlineCode",{parentName:"p"},"select * from internal.db1.user")," and observe that the phone numbers are masked according to the specified rules."))))}m.isMDXComponent=!0},637061:(e,n,a)=>{a.d(n,{A:()=>r});const r=a.p+"assets/images/ranger-data-mask-b6a744951ab66b50d2eab58507a71e58.png"},73166:(e,n,a)=>{a.d(n,{A:()=>r});const r=a.p+"assets/images/ranger-row-policy-1ff51f26011c8534e95ba9a308d952a2.jpeg"},473838:(e,n,a)=>{a.d(n,{A:()=>r});const r=a.p+"assets/images/ranger1-f3bf6121740cc89e025f6a1b2ae9a0f2.png"},701669:(e,n,a)=>{a.d(n,{A:()=>r});const r=a.p+"assets/images/ranger2-e4453db1ebcf2d34cb964bcf67999dd7.png"},465756:(e,n,a)=>{a.d(n,{A:()=>r});const r=a.p+"assets/images/ranger3-ec16fbd18f4839b786f30d3a886b74b9.png"}}]);