"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[982174],{15680:(e,a,t)=>{t.d(a,{xA:()=>o,yg:()=>c});var p=t(296540);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function h(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);a&&(p=p.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,p)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?h(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):h(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,p,l=function(e,a){if(null==e)return{};var t,p,l={},h=Object.keys(e);for(p=0;p<h.length;p++)t=h[p],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var h=Object.getOwnPropertySymbols(e);for(p=0;p<h.length;p++)t=h[p],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var u=p.createContext({}),g=function(e){var a=p.useContext(u),t=a;return e&&(t="function"==typeof e?e(a):r(r({},a),e)),t},o=function(e){var a=g(e.components);return p.createElement(u.Provider,{value:a},e.children)},n="mdxType",s={inlineCode:"code",wrapper:function(e){var a=e.children;return p.createElement(p.Fragment,{},a)}},m=p.forwardRef((function(e,a){var t=e.components,l=e.mdxType,h=e.originalType,u=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),n=g(t),m=l,c=n["".concat(u,".").concat(m)]||n[m]||s[m]||h;return t?p.createElement(c,r(r({ref:a},o),{},{components:t})):p.createElement(c,r({ref:a},o))}));function c(e,a){var t=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var h=t.length,r=new Array(h);r[0]=m;var i={};for(var u in a)hasOwnProperty.call(a,u)&&(i[u]=a[u]);i.originalType=e,i[n]="string"==typeof e?e:l,r[1]=i;for(var g=2;g<h;g++)r[g]=t[g];return p.createElement.apply(null,r)}return p.createElement.apply(null,t)}m.displayName="MDXCreateElement"},195973:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>u,contentTitle:()=>r,default:()=>s,frontMatter:()=>h,metadata:()=>i,toc:()=>g});var p=t(58168),l=(t(296540),t(15680));const h={title:"Release 2.0.2",language:"zh-CN"},r=void 0,i={unversionedId:"releasenotes/v2.0/release-2.0.2",id:"version-2.0/releasenotes/v2.0/release-2.0.2",title:"Release 2.0.2",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/releasenotes/v2.0/release-2.0.2.md",sourceDirName:"releasenotes/v2.0",slug:"/releasenotes/v2.0/release-2.0.2",permalink:"/zh-CN/docs/2.0/releasenotes/v2.0/release-2.0.2",draft:!1,tags:[],version:"2.0",frontMatter:{title:"Release 2.0.2",language:"zh-CN"},sidebar:"releasenotes",previous:{title:"Release 2.0.3",permalink:"/zh-CN/docs/2.0/releasenotes/v2.0/release-2.0.3"},next:{title:"Release 2.0.1",permalink:"/zh-CN/docs/2.0/releasenotes/v2.0/release-2.0.1"}},u={},g=[{value:"Behavior Changes",id:"behavior-changes",level:2},{value:"\u529f\u80fd\u4f18\u5316",id:"\u529f\u80fd\u4f18\u5316",level:2},{value:"\u6613\u7528\u6027\u63d0\u5347",id:"\u6613\u7528\u6027\u63d0\u5347",level:3},{value:"\u6539\u8fdb\u67e5\u8be2\u4f18\u5316\u5668 Nereids \u7edf\u8ba1\u4fe1\u606f\u6536\u96c6",id:"\u6539\u8fdb\u67e5\u8be2\u4f18\u5316\u5668-nereids-\u7edf\u8ba1\u4fe1\u606f\u6536\u96c6",level:3},{value:"Multi-Catalog \u529f\u80fd\u4f18\u5316",id:"multi-catalog-\u529f\u80fd\u4f18\u5316",level:3},{value:"\u5012\u6392\u7d22\u5f15\u6027\u80fd\u4f18\u5316",id:"\u5012\u6392\u7d22\u5f15\u6027\u80fd\u4f18\u5316",level:3},{value:"Array \u51fd\u6570\u4f18\u5316",id:"array-\u51fd\u6570\u4f18\u5316",level:3},{value:"Bug \u4fee\u590d",id:"bug-\u4fee\u590d",level:2},{value:"\u81f4\u8c22",id:"\u81f4\u8c22",level:2}],o={toc:g},n="wrapper";function s(e){let{components:a,...t}=e;return(0,l.yg)(n,(0,p.A)({},o,t,{components:a,mdxType:"MDXLayout"}),(0,l.yg)("p",null,"\u4eb2\u7231\u7684\u793e\u533a\u5c0f\u4f19\u4f34\u4eec\uff0cApache Doris 2.0.2  \u7248\u672c\u5df2\u4e8e 2023 \u5e74 10 \u6708 6 \u65e5\u6b63\u5f0f\u53d1\u5e03\uff0c\u8be5\u7248\u672c\u5bf9\u591a\u4e2a\u529f\u80fd\u8fdb\u884c\u4e86\u66f4\u65b0\u4f18\u5316\uff0c\u65e8\u5728\u66f4\u597d\u5730\u6ee1\u8db3\u7528\u6237\u7684\u9700\u6c42\u3002\u6709 92 \u4f4d\u8d21\u732e\u8005\u4e3a Apache Doris 2.0.2 \u7248\u672c\u63d0\u4ea4\u4e86\u529f\u80fd\u4f18\u5316\u9879\u4ee5\u53ca\u95ee\u9898\u4fee\u590d\uff0c\u8fdb\u4e00\u6b65\u63d0\u5347\u4e86\u7cfb\u7edf\u7684\u7a33\u5b9a\u6027\u548c\u6027\u80fd\uff0c\u6b22\u8fce\u5927\u5bb6\u4e0b\u8f7d\u4f53\u9a8c\u3002"),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"GitHub \u4e0b\u8f7d"),"\uff1a",(0,l.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/releases/tag/2.0.2-rc05"},"https://github.com/apache/doris/releases/tag/2.0.2-rc05")),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"\u5b98\u7f51\u4e0b\u8f7d\u9875"),"\uff1a",(0,l.yg)("a",{parentName:"p",href:"https://doris.apache.org/download/"},"https://doris.apache.org/download/")),(0,l.yg)("h2",{id:"behavior-changes"},"Behavior Changes"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/24679"},"https://github.com/apache/doris/pull/24679")," "),(0,l.yg)("p",{parentName:"li"},"\u5220\u9664\u4e0e lambda \u51fd\u6570\u8bed\u6cd5\u51b2\u7a81\u7684  json\u201c->\u201d\u8fd0\u7b97\u7b26\uff0c\u53ef\u4ee5\u4f7f\u7528\u51fd\u6570 json_extract \u4ee3\u66ff\u3002")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/24308"},"https://github.com/apache/doris/pull/24308")," "))),(0,l.yg)("p",null,"\u5c06 ",(0,l.yg)("inlineCode",{parentName:"p"},"metadata_failure_recovery")," \u4ece fe.conf \u79fb\u52a8\u5230 start_fe.sh \u53c2\u6570\uff0c\u4ee5\u907f\u514d\u5f02\u5e38\u64cd\u4f5c\u3002"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/24207"},"https://github.com/apache/doris/pull/24207")," ")),(0,l.yg)("p",null,"\u5bf9\u4e8e\u666e\u901a\u7c7b\u578b\u4e2d\u7684 null \u503c\u4f7f\u7528 ",(0,l.yg)("inlineCode",{parentName:"p"},"\\n")," \u6765\u8868\u793a\uff0c\u5bf9\u4e8e\u590d\u6742\u7c7b\u578b\u6216\u5d4c\u5957\u7c7b\u578b\u7684 null \u503c\uff0c\u8ddf JSON \u7c7b\u578b\u4fdd\u6301\u4e00\u81f4\u3001\u91c7\u53d6 null \u6765\u8868\u793a\u3002"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/23795"},"https://github.com/apache/doris/pull/23795")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/23784"},"https://github.com/apache/doris/pull/23784")," ")),(0,l.yg)("p",null,"\u4f18\u5316 BE \u8282\u70b9 priority_network \u914d\u7f6e\u9879\u7684\u7ed1\u5b9a\u7b56\u7565\uff0c\u5982\u679c\u7528\u6237\u914d\u7f6e\u4e86\u9519\u8bef\u7684 priority_network \u5219\u76f4\u63a5\u542f\u52a8\u5931\u8d25\uff0c\u4ee5\u907f\u514d\u7528\u6237\u9519\u8bef\u5730\u8ba4\u4e3a\u914d\u7f6e\u662f\u6b63\u786e\u7684\u3002\u5982\u679c\u7528\u6237\u6ca1\u6709\u914d\u7f6e priority_network\uff0c\u5219\u4ec5\u4ece IPv4 \u5217\u8868\u4e2d\u9009\u62e9\u7b2c\u4e00\u4e2a IP\uff0c\u800c\u4e0d\u662f\u4ece\u6240\u6709 IP \u4e2d\u9009\u62e9\uff0c\u4ee5\u907f\u514d\u7528\u6237\u7684\u670d\u52a1\u5668\u4e0d\u652f\u6301 IPv4\u3002"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/17730"},"https://github.com/apache/doris/pull/17730")," ")),(0,l.yg)("p",null,"\u652f\u6301\u53d6\u6d88\u6b63\u5728\u91cd\u8bd5\u7684\u5bfc\u5165\u4efb\u52a1\uff0c\u4fee\u590d\u53d6\u6d88\u52a0\u8f7d\u5931\u8d25\u7684\u95ee\u9898\u3002"),(0,l.yg)("h2",{id:"\u529f\u80fd\u4f18\u5316"},"\u529f\u80fd\u4f18\u5316"),(0,l.yg)("h3",{id:"\u6613\u7528\u6027\u63d0\u5347"},"\u6613\u7528\u6027\u63d0\u5347"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/23887"},"https://github.com/apache/doris/pull/23887")," ")),(0,l.yg)("p",null,"\u67d0\u4e9b\u573a\u666f\u4e0b\uff0c\u7528\u6237\u9700\u8981\u5411\u96c6\u7fa4\u4e2d\u6dfb\u52a0\u4e00\u4e9b\u81ea\u5b9a\u4e49\u7684\u5e93\uff0c\u5982 lzo.jar\u3001orai18n.jar \u7b49\u3002\u5728\u8fc7\u53bb\u7684\u7248\u672c\u4e2d\uff0c\u8fd9\u4e9b lib \u6587\u4ef6\u4f4d\u4e8e fe/lib \u6216 be/lib \u4e2d\uff0c\u4f46\u5728\u5347\u7ea7\u96c6\u7fa4\u65f6\uff0clib \u5e93\u5c06\u88ab\u65b0\u7684 lib \u5e93\u66ff\u6362\uff0c\u5bfc\u81f4\u6240\u6709\u81ea\u5b9a\u4e49\u7684 lib \u5e93\u90fd\u4f1a\u4e22\u5931\u3002"),(0,l.yg)("p",null,"\u5728\u65b0\u7248\u672c\u4e2d\uff0c\u4e3a FE \u548c BE \u6dfb\u52a0\u4e86\u65b0\u7684\u81ea\u5b9a\u4e49\u76ee\u5f55 custom_lib\uff0c\u7528\u6237\u53ef\u4ee5\u5728\u5176\u4e2d\u653e\u7f6e\u81ea\u5b9a\u4e49 lib \u6587\u4ef6\u3002"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/23022"},"https://github.com/apache/doris/pull/23022")," ")),(0,l.yg)("p",null,"\u652f\u6301\u57fa\u4e8e\u7528\u6237\u89d2\u8272\u7684\u6743\u9650\u8bbf\u95ee\u63a7\u5236\uff0c\u5b9e\u73b0\u4e86\u884c\u7ea7\u7ec6\u7c92\u5ea6\u7684\u6743\u9650\u63a7\u5236\u7b56\u7565\u3002"),(0,l.yg)("h3",{id:"\u6539\u8fdb\u67e5\u8be2\u4f18\u5316\u5668-nereids-\u7edf\u8ba1\u4fe1\u606f\u6536\u96c6"},"\u6539\u8fdb\u67e5\u8be2\u4f18\u5316\u5668 Nereids \u7edf\u8ba1\u4fe1\u606f\u6536\u96c6"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/23663"},"https://github.com/apache/doris/pull/23663"))),(0,l.yg)("p",null,"\u5728\u8fd0\u884c Analysis \u4efb\u52a1\u65f6\u7981\u7528 File Cache\uff0cAnalysis \u4efb\u52a1\u662f\u540e\u53f0\u4efb\u52a1\uff0c\u4e0d\u5e94\u5f71\u54cd\u7528\u6237\u672c\u5730 File Cache \u6570\u636e\u3002"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/23703"},"https://github.com/apache/doris/pull/23703"))),(0,l.yg)("p",null,"\u5728\u8fc7\u53bb\u7248\u672c\u4e2d\uff0c\u67e5\u770b\u5217\u7684\u7edf\u8ba1\u4fe1\u606f\u65f6\u5c06\u5ffd\u7565\u51fa\u73b0\u9519\u8bef\u7684\u5217\u3002"),(0,l.yg)("p",null,"\u5728\u65b0\u7248\u672c\u4e2d\uff0c\u5f53 min \u6216 max \u503c\u672a\u80fd\u53cd\u5e8f\u5217\u5316\u65f6\uff0c\u67e5\u770b\u5217\u7684\u7edf\u8ba1\u4fe1\u606f\u65f6\u5c06\u4f7f\u7528 N/A \u4f5c\u4e3a min \u6216 max \u7684\u503c\u5e76\u4ecd\u663e\u793a\u5176\u4f59\u7684\u7edf\u8ba1\u4fe1\u606f\uff0c\u5305\u62ec count\u3001null_count\u3001ndv \u7b49\u3002"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/23965"},"https://github.com/apache/doris/pull/23965"))),(0,l.yg)("p",null,"\u652f\u6301 JDBC \u5916\u90e8\u8868\u7684\u7edf\u8ba1\u4fe1\u606f\u6536\u96c6\u3002"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/24625"},"https://github.com/apache/doris/pull/24625"))),(0,l.yg)("p",null,"\u8df3\u8fc7 ",(0,l.yg)("inlineCode",{parentName:"p"},"__internal_schema")," \u548c ",(0,l.yg)("inlineCode",{parentName:"p"},"information_schema")," \u4e0a\u672a\u77e5\u5217\u7684\u7edf\u8ba1\u4fe1\u606f\u68c0\u67e5\u3002"),(0,l.yg)("h3",{id:"multi-catalog-\u529f\u80fd\u4f18\u5316"},"Multi-Catalog \u529f\u80fd\u4f18\u5316"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/24168"},"https://github.com/apache/doris/pull/24168"))),(0,l.yg)("p",null,"\u652f\u6301 Hadoop viewfs\uff1b"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/22369"},"https://github.com/apache/doris/pull/22369")," ")),(0,l.yg)("p",null,"\u4f18\u5316 JDBC Catalog Checksum Replay \u548c Range \u76f8\u5173\u95ee\u9898\uff1b"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/23868"},"https://github.com/apache/doris/pull/23868")," ")),(0,l.yg)("p",null,"\u4f18\u5316\u4e86 JDBC Catalog \u7684 Property \u68c0\u67e5\u548c\u9519\u8bef\u6d88\u606f\u63d0\u793a\u3002"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/24242"},"https://github.com/apache/doris/pull/24242")," ")),(0,l.yg)("p",null,"\u4fee\u590d\u4e86 MaxCompute Catalog Decimal \u7c7b\u578b\u89e3\u6790\u95ee\u9898\u4ee5\u53ca\u4f7f\u7528\u5bf9\u8c61\u5b58\u50a8\u5730\u5740\u9519\u8bef\u7684\u95ee\u9898\u3002"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/23391"},"https://github.com/apache/doris/pull/23391")," ")),(0,l.yg)("p",null,"\u652f\u6301 Hive Metastore Catalog \u7684 SQL Cache\u3002"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/22869"},"https://github.com/apache/doris/pull/22869")," ")),(0,l.yg)("p",null,"\u63d0\u9ad8\u4e86 Hive Metastore Catalog \u7684\u5143\u6570\u636e\u540c\u6b65\u6027\u80fd\u3002"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/22702"},"https://github.com/apache/doris/pull/22702")," ")),(0,l.yg)("p",null,"\u6dfb\u52a0 metadata_name_ids \u4ee5\u5feb\u901f\u83b7\u53d6 Catalogs\u3001DB\u3001Table\uff0c\u5728\u521b\u5efa\u6216\u5220\u9664 Catalog \u548c Table \u65f6\u65e0\u9700 Refresh Catalog\uff0c\u5e76\u6dfb\u52a0 Profiling \u8868\u4ece\u800c\u4e0e MySQL \u517c\u5bb9\u3002"),(0,l.yg)("h3",{id:"\u5012\u6392\u7d22\u5f15\u6027\u80fd\u4f18\u5316"},"\u5012\u6392\u7d22\u5f15\u6027\u80fd\u4f18\u5316"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/23952"},"https://github.com/apache/doris/pull/23952"))),(0,l.yg)("p",null,"\u589e\u52a0 bkd \u7d22\u5f15\u7684\u67e5\u8be2\u7f13\u5b58\uff0c\u901a\u8fc7\u7f13\u5b58\u53ef\u4ee5\u52a0\u901f\u5728\u547d\u4e2d bkd \u7d22\u5f15\u65f6\u7684\u67e5\u8be2\u6027\u80fd\uff0c\u5728\u9ad8\u5e76\u53d1\u573a\u666f\u4e2d\u6548\u679c\u66f4\u4e3a\u660e\u663e\uff1b"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/24678"},"https://github.com/apache/doris/pull/24678"))),(0,l.yg)("p",null,"\u63d0\u5347\u5012\u6392\u7d22\u5f15\u5728 Count \u7b97\u5b50\u4e0a\u7684\u67e5\u8be2\u6027\u80fd\uff1b"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/24751"},"https://github.com/apache/doris/pull/24751"))),(0,l.yg)("p",null,"\u63d0\u5347\u4e86 Match \u7b97\u5b50\u5728\u672a\u547d\u4e2d\u7d22\u5f15\u65f6\u7684\u6548\u7387\uff0c\u5728\u6d4b\u8bd5\u8868\u73b0\u4e2d\u6027\u80fd\u6700\u9ad8\u63d0\u5347 60 \u500d\uff1b "),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/23871"},"https://github.com/apache/doris/pull/23871")," "),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/24389"},"https://github.com/apache/doris/pull/24389")," ")),(0,l.yg)("p",null,"\u63d0\u5347\u4e86 MATCH \u548c MATCH_ALL \u5728\u5012\u6392\u7d22\u5f15\u4e0a\u7684\u67e5\u8be2\u6027\u80fd\uff1b"),(0,l.yg)("h3",{id:"array-\u51fd\u6570\u4f18\u5316"},"Array \u51fd\u6570\u4f18\u5316"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/23630"},"https://github.com/apache/doris/pull/23630"))),(0,l.yg)("p",null,"\u4f18\u5316\u4e86\u8001\u7248\u672c\u67e5\u8be2\u4f18\u5316\u5668 Array \u51fd\u6570\u65e0\u6cd5\u5904\u7406 Decimal \u7c7b\u578b\u7684\u95ee\u9898\uff1b"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/24327"},"https://github.com/apache/doris/pull/24327"))),(0,l.yg)("p",null,"\u4f18\u5316\u4e86 ",(0,l.yg)("inlineCode",{parentName:"p"},"array_union")," \u6570\u7ec4\u51fd\u6570\u5bf9\u591a\u4e2a\u53c2\u6570\u7684\u652f\u6301\uff1b"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/24455"},"https://github.com/apache/doris/pull/24455"))),(0,l.yg)("p",null,"\u652f\u6301\u901a\u8fc7 explode \u51fd\u6570\u6765\u5904\u7406\u6570\u7ec4\u5d4c\u5957\u590d\u6742\u7c7b\u578b\uff1b"),(0,l.yg)("h2",{id:"bug-\u4fee\u590d"},"Bug \u4fee\u590d"),(0,l.yg)("p",null," \u4fee\u590d\u4e86\u4e4b\u524d\u7248\u672c\u5b58\u5728\u7684\u90e8\u5206 Bug\uff0c\u4f7f\u7cfb\u7edf\u6574\u4f53\u7a33\u5b9a\u6027\u8868\u73b0\u5f97\u5230\u5927\u5e45\u63d0\u5347\uff0c\u5b8c\u6574 BugFix \u5217\u8868\u8bf7\u53c2\u8003 GitHub Commits \u8bb0\u5f55\uff1b"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/23601"},"https://github.com/apache/doris/pull/23601")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/23630"},"https://github.com/apache/doris/pull/23630")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/23555"},"https://github.com/apache/doris/pull/23555")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/17644"},"https://github.com/apache/doris/pull/17644")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/23779"},"https://github.com/apache/doris/pull/23779")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/23940"},"https://github.com/apache/doris/pull/23940")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/23860"},"https://github.com/apache/doris/pull/23860")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/23973"},"https://github.com/apache/doris/pull/23973")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/24020"},"https://github.com/apache/doris/pull/24020")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/24039"},"https://github.com/apache/doris/pull/24039")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/23958"},"https://github.com/apache/doris/pull/23958")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/24104"},"https://github.com/apache/doris/pull/24104")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/24097"},"https://github.com/apache/doris/pull/24097")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/23852"},"https://github.com/apache/doris/pull/23852")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/24139"},"https://github.com/apache/doris/pull/24139")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/24165"},"https://github.com/apache/doris/pull/24165")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/24164"},"https://github.com/apache/doris/pull/24164")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/24369"},"https://github.com/apache/doris/pull/24369")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/24372"},"https://github.com/apache/doris/pull/24372")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/24381"},"https://github.com/apache/doris/pull/24381")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/24385"},"https://github.com/apache/doris/pull/24385")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/24290"},"https://github.com/apache/doris/pull/24290")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/24207"},"https://github.com/apache/doris/pull/24207")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/24521"},"https://github.com/apache/doris/pull/24521")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/24460"},"https://github.com/apache/doris/pull/24460")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/24568"},"https://github.com/apache/doris/pull/24568")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/24610"},"https://github.com/apache/doris/pull/24610")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/24595"},"https://github.com/apache/doris/pull/24595")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/24616"},"https://github.com/apache/doris/pull/24616")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/24635"},"https://github.com/apache/doris/pull/24635")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/24625"},"https://github.com/apache/doris/pull/24625")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/24572"},"https://github.com/apache/doris/pull/24572")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/24578"},"https://github.com/apache/doris/pull/24578")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/23943"},"https://github.com/apache/doris/pull/23943")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/24697"},"https://github.com/apache/doris/pull/24697")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/24681"},"https://github.com/apache/doris/pull/24681")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/24617"},"https://github.com/apache/doris/pull/24617")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/24692"},"https://github.com/apache/doris/pull/24692")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/24700"},"https://github.com/apache/doris/pull/24700")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/24389"},"https://github.com/apache/doris/pull/24389")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/24698"},"https://github.com/apache/doris/pull/24698")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/24778"},"https://github.com/apache/doris/pull/24778")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/24782"},"https://github.com/apache/doris/pull/24782")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/24800"},"https://github.com/apache/doris/pull/24800")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/24808"},"https://github.com/apache/doris/pull/24808")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/24636"},"https://github.com/apache/doris/pull/24636")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/24981"},"https://github.com/apache/doris/pull/24981")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/24949"},"https://github.com/apache/doris/pull/24949"))),(0,l.yg)("h2",{id:"\u81f4\u8c22"},"\u81f4\u8c22"),(0,l.yg)("p",null,"\u611f\u8c22\u6240\u6709\u5728 2.0.2 \u7248\u672c\u4e2d\u53c2\u4e0e\u529f\u80fd\u5f00\u53d1\u4e0e\u4f18\u5316\u4ee5\u53ca\u95ee\u9898\u4fee\u590d\u7684\u6240\u6709\u8d21\u732e\u8005\uff0c\u4ed6\u4eec\u5206\u522b\u662f\uff1a"),(0,l.yg)("p",null,(0,l.yg)("a",{parentName:"p",href:"https://github.com/adonis0147"},"@adonis0147")," ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/airborne12"},"@airborne12")," ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/amorynan"},"@amorynan")," ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/AshinGau"},"@AshinGau")," ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/BePPPower"},"@BePPPower")," ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/BiteTheDDDDt"},"@BiteTheDDDDt")," ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/bobhan1"},"@bobhan1")," ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/ByteYue"},"@ByteYue")," ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/caiconghui"},"@caiconghui")," ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/CalvinKirs"},"@CalvinKirs")," ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/cambyzju"},"@cambyzju")," ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/ChengDaqi2023"},"@ChengDaqi2023")," ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/ChinaYiGuan"},"@ChinaYiGuan")," ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/CodeCooker17"},"@CodeCooker17")," ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/csun5285"},"@csun5285")," ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/dataroaring"},"@dataroaring")," ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/deadlinefen"},"@deadlinefen")," ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/DongLiang-0"},"@DongLiang-0")," ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/Doris-Extras"},"@Doris-Extras")," ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/dutyu"},"@dutyu")," ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/eldenmoon"},"@eldenmoon")," ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/englefly"},"@englefly")," ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/freemandealer"},"@freemandealer")," ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/Gabriel39"},"@Gabriel39")," ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/gnehil"},"@gnehil")," ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/GoGoWen"},"@GoGoWen")," ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/gohalo"},"@gohalo")," ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/HappenLee"},"@HappenLee")," ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/hello-stephen"},"@hello-stephen")," ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/HHoflittlefish777"},"@HHoflittlefish777")," ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/hubgeter"},"@hubgeter")," ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/hust-hhb"},"@hust-hhb")," ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/ixzc"},"@ixzc")," ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/JackDrogon"},"@JackDrogon")," ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/jacktengg"},"@jacktengg")," ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/jackwener"},"@jackwener")," ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/Jibing-Li"},"@Jibing-Li")," ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/JNSimba"},"@JNSimba")," ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/kaijchen"},"@kaijchen")," ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/kaka11chen"},"@kaka11chen")," ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/Kikyou1997"},"@Kikyou1997")," ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/Lchangliang"},"@Lchangliang")," ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/LemonLiTree"},"@LemonLiTree")," ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/liaoxin01"},"@liaoxin01")," ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/LiBinfeng-01"},"@LiBinfeng-01")," ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/liugddx"},"@liugddx")," ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/luwei16"},"@luwei16")," ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/mongo360"},"@mongo360")," ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/morningman"},"@morningman")," ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/morrySnow"},"@morrySnow")," @mrhhsg @Mryange @mymeiyi @neuyilan @pingchunzhang @platoneko @qidaye @realize096 @RYH61 @shuke987 @sohardforaname @starocean999 @SWJTU-ZhangLei @TangSiyang2001 @Tech-Circle-48 @w41ter @wangbo @wsjz @wuwenchi @wyx123654 @xiaokang @XieJiann @xinyiZzz @XuJianxu @xutaoustc @xy720 @xyfsjq @xzj7019 @yiguolei @yujun777 @Yukang-Lian @Yulei-Yang @zclllyybb @zddr @zhangguoqiang666 @zhangstar333 @ZhangYu0123 @zhannngchen @zxealous @zy-kkk @zzzxl1993 @zzzzzzzs"))}s.isMDXComponent=!0}}]);