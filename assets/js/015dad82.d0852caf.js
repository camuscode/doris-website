"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[635472],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>f});var r=t(296540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var a=r.createContext({}),u=function(e){var n=r.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(a.Provider,{value:n},e.children)},p="mdxType",_={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,a=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(t),d=i,f=p["".concat(a,".").concat(d)]||p[d]||_[d]||l;return t?r.createElement(f,o(o({ref:n},c),{},{components:t})):r.createElement(f,o({ref:n},c))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,o=new Array(l);o[0]=d;var s={};for(var a in n)hasOwnProperty.call(n,a)&&(s[a]=n[a]);s.originalType=e,s[p]="string"==typeof e?e:i,o[1]=s;for(var u=2;u<l;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},756151:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>_,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var r=t(58168),i=(t(296540),t(15680));const l={title:"IPV6_STRING_TO_NUM_OR_NULL",language:"en"},o=void 0,s={unversionedId:"sql-manual/sql-functions/ip-functions/ipv6-string-to-num-or-null",id:"sql-manual/sql-functions/ip-functions/ipv6-string-to-num-or-null",title:"IPV6_STRING_TO_NUM_OR_NULL",description:"\x3c!--",source:"@site/docs/sql-manual/sql-functions/ip-functions/ipv6-string-to-num-or-null.md",sourceDirName:"sql-manual/sql-functions/ip-functions",slug:"/sql-manual/sql-functions/ip-functions/ipv6-string-to-num-or-null",permalink:"/docs/dev/sql-manual/sql-functions/ip-functions/ipv6-string-to-num-or-null",draft:!1,tags:[],version:"current",frontMatter:{title:"IPV6_STRING_TO_NUM_OR_NULL",language:"en"},sidebar:"docs",previous:{title:"IPV6_STRING_TO_NUM_OR_DEFAULT",permalink:"/docs/dev/sql-manual/sql-functions/ip-functions/ipv6-string-to-num-or-default"},next:{title:"IS_IPV4_COMPAT",permalink:"/docs/dev/sql-manual/sql-functions/ip-functions/is-ipv4-compat"}},a={},u=[{value:"IPV6_STRING_TO_NUM_OR_NULL",id:"ipv6_string_to_num_or_null",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"Notice",id:"notice",level:4},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3}],c={toc:u},p="wrapper";function _(e){let{components:n,...t}=e;return(0,i.yg)(p,(0,r.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"ipv6_string_to_num_or_null"},"IPV6_STRING_TO_NUM_OR_NULL"),(0,i.yg)("p",null,"IPV6_STRING_TO_NUM_OR_NULL"),(0,i.yg)("h3",{id:"description"},"Description"),(0,i.yg)("h4",{id:"syntax"},"Syntax"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"VARCHAR IPV6_STRING_TO_NUM_OR_NULL(VARCHAR ipv6_string)")),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"VARCHAR INET6_ATON(VARCHAR ipv6_string)")),(0,i.yg)("p",null,"The reverse function of IPv6NumToString, it takes an IP address String and returns an IPv6 address in binary format.\nIf the input string contains a valid IPv4 address, returns its IPv6 equivalent."),(0,i.yg)("h4",{id:"notice"},"Notice"),(0,i.yg)("p",null,"If an illegal IP address is entered, ",(0,i.yg)("inlineCode",{parentName:"p"},"NULL")," is returned. This function has an alias ",(0,i.yg)("inlineCode",{parentName:"p"},"INET6_ATON"),"."),(0,i.yg)("h3",{id:"example"},"Example"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> select hex(ipv6_string_to_num_or_null('1111::ffff'));\n+-----------------------------------------------+\n| hex(ipv6_string_to_num_or_null('1111::ffff')) |\n+-----------------------------------------------+\n| 1111000000000000000000000000FFFF              |\n+-----------------------------------------------+\n1 row in set (0.01 sec)\n\nmysql> select hex(ipv6_string_to_num_or_null('192.168.0.1'));\n+------------------------------------------------+\n| hex(ipv6_string_to_num_or_null('192.168.0.1')) |\n+------------------------------------------------+\n| 00000000000000000000FFFFC0A80001               |\n+------------------------------------------------+\n1 row in set (0.02 sec)\n\nmysql> select hex(ipv6_string_to_num_or_null('notaaddress'));\n+------------------------------------------------+\n| hex(ipv6_string_to_num_or_null('notaaddress')) |\n+------------------------------------------------+\n| NULL                                           |\n+------------------------------------------------+\n1 row in set (0.02 sec)\n")),(0,i.yg)("h3",{id:"keywords"},"Keywords"),(0,i.yg)("p",null,"IPV6_STRING_TO_NUM_OR_NULL, INET6_ATON, IP"))}_.isMDXComponent=!0}}]);