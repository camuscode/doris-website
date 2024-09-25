"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[496904],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>g});var o=t(296540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=o.createContext({}),c=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return o.createElement(l.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(t),m=a,g=u["".concat(l,".").concat(m)]||u[m]||d[m]||r;return t?o.createElement(g,i(i({ref:n},p),{},{components:t})):o.createElement(g,i({ref:n},p))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<r;c++)i[c]=t[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},915188:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var o=t(58168),a=(t(296540),t(15680));const r={title:"Config and install MS",language:"en"},i=void 0,s={unversionedId:"install/cluster-deployment/k8s-deploy/compute-storage-decoupled/install-metaservice/config-ms",id:"install/cluster-deployment/k8s-deploy/compute-storage-decoupled/install-metaservice/config-ms",title:"Config and install MS",description:"\x3c!--",source:"@site/docs/install/cluster-deployment/k8s-deploy/compute-storage-decoupled/install-metaservice/config-ms.md",sourceDirName:"install/cluster-deployment/k8s-deploy/compute-storage-decoupled/install-metaservice",slug:"/install/cluster-deployment/k8s-deploy/compute-storage-decoupled/install-metaservice/config-ms",permalink:"/docs/dev/install/cluster-deployment/k8s-deploy/compute-storage-decoupled/install-metaservice/config-ms",draft:!1,tags:[],version:"current",frontMatter:{title:"Config and install MS",language:"en"},sidebar:"docs",previous:{title:"Config and install FDB",permalink:"/docs/dev/install/cluster-deployment/k8s-deploy/compute-storage-decoupled/install-metaservice/config-fdb"},next:{title:"Config and install Recycler",permalink:"/docs/dev/install/cluster-deployment/k8s-deploy/compute-storage-decoupled/install-metaservice/config-recycler"}},l={},c=[{value:"Simplest configuration",id:"simplest-configuration",level:2},{value:"Configure resources",id:"configure-resources",level:2},{value:"Customized configuration file",id:"customized-configuration-file",level:2}],p={toc:c},u="wrapper";function d(e){let{components:n,...t}=e;return(0,a.yg)(u,(0,o.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"MS is the abbreviation of Meta Service, the Compute-storage decoupled component of Doris, which provides metadata management and query services. The configuration field in ",(0,a.yg)("inlineCode",{parentName:"p"},"DorisDisaggregatedMetaService")," is MS."),(0,a.yg)("h2",{id:"simplest-configuration"},"Simplest configuration"),(0,a.yg)("p",null,"MS service is a stateless service and is usually deployed in active-standby mode. The simplest configuration is as follows:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  ms:\n    image: {msImage}\n    replicas: 2\n")),(0,a.yg)("p",null,"Among them, ",(0,a.yg)("inlineCode",{parentName:"p"},"{msImage}")," is the version of the MS service you want to deploy."),(0,a.yg)("h2",{id:"configure-resources"},"Configure resources"),(0,a.yg)("p",null,"Add resource usage restrictions for the MS service. Take the 4c 4Gi configuration as an example:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  ms:\n    image: {msImage}\n    replicas: 2\n    requests:\n      cpu: 4\n      memory: 4Gi\n    limits:\n      cpu: 4\n      memory: 4Gi\n")),(0,a.yg)("p",null,"Update the modified configuration to the ","[metadata management resources]","(/docs/dev/install/cluster-deployment/k8s-deploy/compute-storage-decoupled/install-quickstart#Install DorisDisaggregatedMetaService). for Compute-storage decoupled that need to be deployed."),(0,a.yg)("h2",{id:"customized-configuration-file"},"Customized configuration file"),(0,a.yg)("p",null,"Configuration files are mounted on K8s through ConfigMap. Doris-Operator automates the configuration of mutual perception between Compute-storage decoupled components. When deploying MS services using customized configuration files, please do not configure ",(0,a.yg)("a",{parentName:"p",href:"../../../../../compute-storage-decoupled/compilation-and-deployment#deploy-meta-service"},"FDB related configuration"),"."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"ConfigMap"),":"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\ndata:\n  doris_cloud.conf: |\n    # // meta_service\n    brpc_listen_port = 5000\n    brpc_num_threads = -1\n    brpc_idle_timeout_sec = 30\n    http_token = greedisgood9999\n\n    # // doris txn config\n    label_keep_max_second = 259200\n    expired_txn_scan_key_nums = 1000\n\n    # // logging\n    log_dir = ./log/\n    # info warn error\n    log_level = info\n    log_size_mb = 1024\n    log_filenum_quota = 10\n    log_immediate_flush = false\n    # log_verbose_modules = *\n\n    # //max stage num\n    max_num_stages = 40\nkind: ConfigMap\nmetadata:\n  name: doris-metaservice\n  namespace: default\n")),(0,a.yg)("p",null,"The MS configuration using the above ConfigMap is as follows:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  ms:\n    image: {msImage}\n    configMaps:\n    - name: doris-metaservice\n      mountPath: /etc/doris\n")),(0,a.yg)("p",null,"In actual deployment, configure the name and namespace of ConfigMap as needed, and configure the configuration information in the ","[Compute-storage decoupled metadata management resource]","(/docs/dev/install/cluster-deployment/k8s-deploy/compute-storage-decoupled/install-quickstart#Install DorisDisaggregatedMetaService) to be deployed according to the above sample format. The startup configuration file used by the MS service is named ",(0,a.yg)("inlineCode",{parentName:"p"},"doris_cloud.conf"),", so the key of the ConfigMap for mounting the startup configuration must also be ",(0,a.yg)("inlineCode",{parentName:"p"},"doris_cloud.conf"),". The startup configuration must be mounted to the ",(0,a.yg)("inlineCode",{parentName:"p"},"/etc/doris")," directory, that is, the mountPath is ",(0,a.yg)("inlineCode",{parentName:"p"},"/etc/doris"),"."),(0,a.yg)("admonition",{title:"Tip",type:"tip"},(0,a.yg)("p",{parentName:"admonition"},"MS service needs to use FDB as the backend metadata storage, and the FDB service must be deployed when deploying MS service.")))}d.isMDXComponent=!0}}]);