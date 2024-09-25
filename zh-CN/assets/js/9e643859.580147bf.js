"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[291684],{15680:(e,n,t)=>{t.d(n,{xA:()=>y,yg:()=>m});var l=t(296540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,l,r=function(e,n){if(null==e)return{};var t,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)t=a[l],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)t=a[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=l.createContext({}),s=function(e){var n=l.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},y=function(e){var n=s(e.components);return l.createElement(i.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},c=l.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,y=u(e,["components","mdxType","originalType","parentName"]),p=s(t),c=r,m=p["".concat(i,".").concat(c)]||p[c]||d[c]||a;return t?l.createElement(m,o(o({ref:n},y),{},{components:t})):l.createElement(m,o({ref:n},y))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=c;var u={};for(var i in n)hasOwnProperty.call(n,i)&&(u[i]=n[i]);u.originalType=e,u[p]="string"==typeof e?e:r,o[1]=u;for(var s=2;s<a;s++)o[s]=t[s];return l.createElement.apply(null,o)}return l.createElement.apply(null,t)}c.displayName="MDXCreateElement"},668368:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>u,toc:()=>s});var l=t(58168),r=(t(296540),t(15680));const a={title:"date_format",language:"zh-CN"},o=void 0,u={unversionedId:"sql-manual/sql-functions/date-time-functions/date_format",id:"version-1.2/sql-manual/sql-functions/date-time-functions/date_format",title:"date_format",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/sql-manual/sql-functions/date-time-functions/date_format.md",sourceDirName:"sql-manual/sql-functions/date-time-functions",slug:"/sql-manual/sql-functions/date-time-functions/date_format",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/date-time-functions/date_format",draft:!1,tags:[],version:"1.2",frontMatter:{title:"date_format",language:"zh-CN"},sidebar:"docs",previous:{title:"date_trunc",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/date-time-functions/date_trunc"},next:{title:"datediff",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/date-time-functions/datediff"}},i={},s=[{value:"date_format",id:"date_format",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],y={toc:s},p="wrapper";function d(e){let{components:n,...t}=e;return(0,r.yg)(p,(0,l.A)({},y,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"date_format"},"date_format"),(0,r.yg)("h3",{id:"description"},"description"),(0,r.yg)("h4",{id:"syntax"},"Syntax"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"VARCHAR DATE_FORMAT(DATETIME date, VARCHAR format)")),(0,r.yg)("p",null,"\u5c06\u65e5\u671f\u7c7b\u578b\u6309\u7167format\u7684\u7c7b\u578b\u8f6c\u5316\u4e3a\u5b57\u7b26\u4e32\uff0c\n\u5f53\u524d\u652f\u6301\u6700\u5927128\u5b57\u8282\u7684\u5b57\u7b26\u4e32\uff0c\u5982\u679c\u8fd4\u56de\u503c\u957f\u5ea6\u8d85\u8fc7128\uff0c\u5219\u8fd4\u56deNULL"),(0,r.yg)("p",null,"date \u53c2\u6570\u662f\u5408\u6cd5\u7684\u65e5\u671f\u3002format \u89c4\u5b9a\u65e5\u671f/\u65f6\u95f4\u7684\u8f93\u51fa\u683c\u5f0f\u3002"),(0,r.yg)("p",null,"\u53ef\u4ee5\u4f7f\u7528\u7684\u683c\u5f0f\u6709\uff1a"),(0,r.yg)("p",null,"%a | \u7f29\u5199\u661f\u671f\u540d     "),(0,r.yg)("p",null,"%b | \u7f29\u5199\u6708\u540d   "),(0,r.yg)("p",null,"%c | \u6708\uff0c\u6570\u503c "),(0,r.yg)("p",null,"%D | \u5e26\u6709\u82f1\u6587\u524d\u7f00\u7684\u6708\u4e2d\u7684\u5929       "),(0,r.yg)("p",null,"%d | \u6708\u7684\u5929\uff0c\u6570\u503c(00-31)"),(0,r.yg)("p",null,"%e | \u6708\u7684\u5929\uff0c\u6570\u503c(0-31)"),(0,r.yg)("p",null,"%f | \u5fae\u79d2"),(0,r.yg)("p",null,"%H | \u5c0f\u65f6 (00-23)"),(0,r.yg)("p",null,"%h | \u5c0f\u65f6 (01-12)"),(0,r.yg)("p",null,"%I | \u5c0f\u65f6 (01-12)"),(0,r.yg)("p",null,"%i | \u5206\u949f\uff0c\u6570\u503c(00-59)"),(0,r.yg)("p",null,"%j | \u5e74\u7684\u5929 (001-366)"),(0,r.yg)("p",null,"%k | \u5c0f\u65f6 (0-23)"),(0,r.yg)("p",null,"%l | \u5c0f\u65f6 (1-12)"),(0,r.yg)("p",null,"%M | \u6708\u540d"),(0,r.yg)("p",null,"%m | \u6708\uff0c\u6570\u503c(00-12)"),(0,r.yg)("p",null,"%p | AM \u6216 PM"),(0,r.yg)("p",null,"%r | \u65f6\u95f4\uff0c12-\u5c0f\u65f6\uff08hh:mm:ss AM \u6216 PM\uff09"),(0,r.yg)("p",null,"%S | \u79d2(00-59)"),(0,r.yg)("p",null,"%s | \u79d2(00-59)"),(0,r.yg)("p",null,"%T | \u65f6\u95f4, 24-\u5c0f\u65f6 (hh:mm:ss)"),(0,r.yg)("p",null,"%U | \u5468 (00-53) \u661f\u671f\u65e5\u662f\u4e00\u5468\u7684\u7b2c\u4e00\u5929"),(0,r.yg)("p",null,"%u | \u5468 (00-53) \u661f\u671f\u4e00\u662f\u4e00\u5468\u7684\u7b2c\u4e00\u5929"),(0,r.yg)("p",null,"%V | \u5468 (01-53) \u661f\u671f\u65e5\u662f\u4e00\u5468\u7684\u7b2c\u4e00\u5929\uff0c\u4e0e %X \u4f7f\u7528"),(0,r.yg)("p",null,"%v | \u5468 (01-53) \u661f\u671f\u4e00\u662f\u4e00\u5468\u7684\u7b2c\u4e00\u5929\uff0c\u4e0e %x \u4f7f\u7528"),(0,r.yg)("p",null,"%W | \u661f\u671f\u540d"),(0,r.yg)("p",null,"%w | \u5468\u7684\u5929 \uff080=\u661f\u671f\u65e5, 6=\u661f\u671f\u516d\uff09"),(0,r.yg)("p",null,"%X | \u5e74\uff0c\u5176\u4e2d\u7684\u661f\u671f\u65e5\u662f\u5468\u7684\u7b2c\u4e00\u5929\uff0c4 \u4f4d\uff0c\u4e0e %V \u4f7f\u7528"),(0,r.yg)("p",null,"%x | \u5e74\uff0c\u5176\u4e2d\u7684\u661f\u671f\u4e00\u662f\u5468\u7684\u7b2c\u4e00\u5929\uff0c4 \u4f4d\uff0c\u4e0e %v \u4f7f\u7528"),(0,r.yg)("p",null,"%Y | \u5e74\uff0c4 \u4f4d          "),(0,r.yg)("p",null,"%y | \u5e74\uff0c2 \u4f4d"),(0,r.yg)("p",null,"%% | \u7528\u4e8e\u8868\u793a %"),(0,r.yg)("p",null,"\u8fd8\u53ef\u4ee5\u4f7f\u7528\u4e09\u79cd\u7279\u6b8a\u683c\u5f0f\uff1a"),(0,r.yg)("p",null,"yyyyMMdd"),(0,r.yg)("p",null,"yyyy-MM-dd"),(0,r.yg)("p",null,"yyyy-MM-dd HH:mm:ss"),(0,r.yg)("h3",{id:"example"},"example"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"mysql> select date_format('2009-10-04 22:23:00', '%W %M %Y');\n+------------------------------------------------+\n| date_format('2009-10-04 22:23:00', '%W %M %Y') |\n+------------------------------------------------+\n| Sunday October 2009                            |\n+------------------------------------------------+\n\nmysql> select date_format('2007-10-04 22:23:00', '%H:%i:%s');\n+------------------------------------------------+\n| date_format('2007-10-04 22:23:00', '%H:%i:%s') |\n+------------------------------------------------+\n| 22:23:00                                       |\n+------------------------------------------------+\n\nmysql> select date_format('1900-10-04 22:23:00', '%D %y %a %d %m %b %j');\n+------------------------------------------------------------+\n| date_format('1900-10-04 22:23:00', '%D %y %a %d %m %b %j') |\n+------------------------------------------------------------+\n| 4th 00 Thu 04 10 Oct 277                                   |\n+------------------------------------------------------------+\n\nmysql> select date_format('1997-10-04 22:23:00', '%H %k %I %r %T %S %w');\n+------------------------------------------------------------+\n| date_format('1997-10-04 22:23:00', '%H %k %I %r %T %S %w') |\n+------------------------------------------------------------+\n| 22 22 10 10:23:00 PM 22:23:00 00 6                         |\n+------------------------------------------------------------+\n\nmysql> select date_format('1999-01-01 00:00:00', '%X %V'); \n+---------------------------------------------+\n| date_format('1999-01-01 00:00:00', '%X %V') |\n+---------------------------------------------+\n| 1998 52                                     |\n+---------------------------------------------+\n\nmysql> select date_format('2006-06-01', '%d');\n+------------------------------------------+\n| date_format('2006-06-01 00:00:00', '%d') |\n+------------------------------------------+\n| 01                                       |\n+------------------------------------------+\n\nmysql> select date_format('2006-06-01', '%%%d');\n+--------------------------------------------+\n| date_format('2006-06-01 00:00:00', '%%%d') |\n+--------------------------------------------+\n| %01                                        |\n+--------------------------------------------+\n")),(0,r.yg)("h3",{id:"keywords"},"keywords"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"DATE_FORMAT,DATE,FORMAT\n")))}d.isMDXComponent=!0}}]);