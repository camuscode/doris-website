"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[276365],{15680:(e,t,a)=>{a.d(t,{xA:()=>u,yg:()=>m});var n=a(296540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},y="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),y=p(a),g=r,m=y["".concat(s,".").concat(g)]||y[g]||c[g]||o;return a?n.createElement(m,i(i({ref:t},u),{},{components:a})):n.createElement(m,i({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[y]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},272220:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=a(58168),r=(a(296540),a(15680));const o={title:"CREATE-STORAGE-VAULT",language:"en",toc_min_heading_level:2,toc_max_heading_level:4},i=void 0,l={unversionedId:"sql-manual/sql-statements/Data-Definition-Statements/Create/CREATE-STORAGE-VAULT",id:"sql-manual/sql-statements/Data-Definition-Statements/Create/CREATE-STORAGE-VAULT",title:"CREATE-STORAGE-VAULT",description:"\x3c!--",source:"@site/docs/sql-manual/sql-statements/Data-Definition-Statements/Create/CREATE-STORAGE-VAULT.md",sourceDirName:"sql-manual/sql-statements/Data-Definition-Statements/Create",slug:"/sql-manual/sql-statements/Data-Definition-Statements/Create/CREATE-STORAGE-VAULT",permalink:"/docs/dev/sql-manual/sql-statements/Data-Definition-Statements/Create/CREATE-STORAGE-VAULT",draft:!1,tags:[],version:"current",frontMatter:{title:"CREATE-STORAGE-VAULT",language:"en",toc_min_heading_level:2,toc_max_heading_level:4},sidebar:"docs",previous:{title:"CREATE-SQL-BLOCK-RULE",permalink:"/docs/dev/sql-manual/sql-statements/Data-Definition-Statements/Create/CREATE-SQL-BLOCK-RULE"},next:{title:"CREATE-ASYNC-MATERIALIZED-VIEW",permalink:"/docs/dev/sql-manual/sql-statements/Data-Definition-Statements/Create/CREATE-ASYNC-MATERIALIZED-VIEW"}},s={},p=[{value:"CREATE-STORAGE-VAULT",id:"create-storage-vault",level:2},{value:"Description",id:"description",level:3},{value:"properties",id:"properties",level:4},{value:"S3 Vault",id:"s3-vault",level:5},{value:"HDFS Vault",id:"hdfs-vault",level:5},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3}],u={toc:p},y="wrapper";function c(e){let{components:t,...a}=e;return(0,r.yg)(y,(0,n.A)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"create-storage-vault"},"CREATE-STORAGE-VAULT"),(0,r.yg)("h3",{id:"description"},"Description"),(0,r.yg)("p",null,"This command is used to create a storage vault. The subject of this document describes the syntax for creating Doris self-maintained storage vault."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE STORAGE VAULT [IF NOT EXISTS] vault\n[properties]\n")),(0,r.yg)("h4",{id:"properties"},"properties"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"type")),(0,r.yg)("p",{parentName:"li"}," Only two types of vaults are allowed: S3 and HDFS. -- Required"))),(0,r.yg)("h5",{id:"s3-vault"},"S3 Vault"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"s3.endpoint")),(0,r.yg)("p",{parentName:"li"}," The endpoint used for object storage. ",(0,r.yg)("strong",{parentName:"p"},"Notice"),", please don't provide the endpoint with any ",(0,r.yg)("inlineCode",{parentName:"p"},"http://")," or ",(0,r.yg)("inlineCode",{parentName:"p"},"https://"),". And for Azure Blob Storage, the endpoint should be like ",(0,r.yg)("inlineCode",{parentName:"p"},"${ak}.blob.core.windows.net/"),". -- Required")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"s3.region")),(0,r.yg)("p",{parentName:"li"}," The region of your bucket.(Not required when you'r using GCP or AZURE). -- Required")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"s3.root.path")),(0,r.yg)("p",{parentName:"li"}," The path where the data would be stored. -- Required")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"s3.bucket")),(0,r.yg)("p",{parentName:"li"},"  The bucket of your object storage account. (StorageAccount if you're using Azure). -- Required")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"s3.access_key")),(0,r.yg)("p",{parentName:"li"}," The access key of your object storage account. (AccountName if you're using Azure). -- Required")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"s3.secret_key")),(0,r.yg)("p",{parentName:"li"}," The secret key of your object storage account. (AccountKey if you're using Azure). -- Required")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"provider")),(0,r.yg)("p",{parentName:"li"}," The cloud vendor which provides the object storage service. -- Required "))),(0,r.yg)("h5",{id:"hdfs-vault"},"HDFS Vault"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"fs.defaultFS")),(0,r.yg)("p",{parentName:"li"}," Hadoop configuration property that specifies the default file system to use. -- Required")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"path_prefix")),(0,r.yg)("p",{parentName:"li"}," The path prefix to where the data would be stored. -- optional. It would be the root_path of your Hadoop user if you don't provide any prefix.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"hadoop.username")),(0,r.yg)("p",{parentName:"li"}," Hadoop configuration property that specifies the user accessing the file system. -- optional. It would be the user starting Hadoop process if you don't provide any user.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"hadoop.security.authentication")),(0,r.yg)("p",{parentName:"li"}," The authentication way used for hadoop. -- optional. If you'd like to use kerberos you can provide with ",(0,r.yg)("inlineCode",{parentName:"p"},"kerboros"),".")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"hadoop.kerberos.principal")),(0,r.yg)("p",{parentName:"li"}," The path to your kerberos principal. -- optional")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"hadoop.kerberos.keytab")),(0,r.yg)("p",{parentName:"li"}," The path to your kerberos keytab. -- optional"))),(0,r.yg)("h3",{id:"example"},"Example"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"create a HDFS storage vault."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE STORAGE VAULT IF NOT EXISTS hdfs_vault\n    PROPERTIES (\n    "type"="hdfs",\n    "fs.defaultFS"="hdfs://127.0.0.1:8020"\n    );\n'))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"create a S3 storage vault using azure."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE STORAGE VAULT IF NOT EXISTS s3_vault\n    PROPERTIES (\n    "type"="S3",\n    "s3.endpoint"="ak.blob.core.windows.net/",\n    "s3.access_key" = "ak",\n    "s3.secret_key" = "sk",\n    "s3.root.path" = "ssb_sf1_p2_s3",\n    "s3.bucket" = "doris-build-1308700295",\n    "provider" = "AZURE"\n    );\n'))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"create a S3 storage vault using OSS."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE STORAGE VAULT IF NOT EXISTS s3_vault\n    PROPERTIES (\n    "type"="S3",\n    "s3.endpoint"="oss.aliyuncs.com",\n    "s3.access_key" = "ak",\n    "s3.secret_key" = "sk",\n    "s3.region" = "cn-hangzhou",\n    "s3.root.path" = "ssb_sf1_p2_s3",\n    "s3.bucket" = "doris-build-1308700295",\n    "provider" = "OSS"\n    );\n'))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"create a S3 storage vault using COS."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE STORAGE VAULT IF NOT EXISTS s3_vault\n    PROPERTIES (\n    "type"="S3",\n    "s3.endpoint"="cos.ap-guangzhou.myqcloud.com",\n    "s3.access_key" = "ak",\n    "s3.secret_key" = "sk",\n    "s3.region" = "ap-guangzhou",\n    "s3.root.path" = "ssb_sf1_p2_s3",\n    "s3.bucket" = "doris-build-1308700295",\n    "provider" = "COS"\n    );\n'))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"create a S3 storage vault using OBS."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE STORAGE VAULT IF NOT EXISTS s3_vault\n    PROPERTIES (\n    "type"="S3",\n    "s3.endpoint"="obs.cn-north-4.myhuaweicloud.com",\n    "s3.access_key" = "ak",\n    "s3.secret_key" = "sk",\n    "s3.region" = "cn-north-4",\n    "s3.root.path" = "ssb_sf1_p2_s3",\n    "s3.bucket" = "doris-build-1308700295",\n    "provider" = "OBS"\n    );\n'))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"create a S3 storage vault using AWS."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE STORAGE VAULT IF NOT EXISTS s3_vault\n    PROPERTIES (\n    "type"="S3",\n    "s3.endpoint"="s3.us-east-1.amazonaws.com",\n    "s3.access_key" = "ak",\n    "s3.secret_key" = "sk",\n    "s3.region" = "us-east-1",\n    "s3.root.path" = "ssb_sf1_p2_s3",\n    "s3.bucket" = "doris-build-1308700295",\n    "provider" = "S3"\n    );\n')))),(0,r.yg)("h3",{id:"keywords"},"Keywords"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"CREATE, STORAGE VAULT\n")))}c.isMDXComponent=!0}}]);