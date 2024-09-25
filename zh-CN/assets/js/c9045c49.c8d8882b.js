"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[750782],{15680:(e,r,t)=>{t.d(r,{xA:()=>s,yg:()=>m});var n=t(296540);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=n.createContext({}),c=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},s=function(e){var r=c(e.components);return n.createElement(p.Provider,{value:r},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},g=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=c(t),g=a,m=d["".concat(p,".").concat(g)]||d[g]||u[g]||i;return t?n.createElement(m,l(l({ref:r},s),{},{components:t})):n.createElement(m,l({ref:r},s))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=g;var o={};for(var p in r)hasOwnProperty.call(r,p)&&(o[p]=r[p]);o.originalType=e,o[d]="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=t[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},318153:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=t(58168),a=(t(296540),t(15680));const i={title:"Doris Mac \u5f00\u53d1\u8c03\u8bd5\u51c6\u5907",language:"zh-CN"},l=void 0,o={unversionedId:"developer-guide/mac-dev/dev-prepare",id:"developer-guide/mac-dev/dev-prepare",title:"Doris Mac \u5f00\u53d1\u8c03\u8bd5\u51c6\u5907",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs-community/current/developer-guide/mac-dev/dev-prepare.md",sourceDirName:"developer-guide/mac-dev",slug:"/developer-guide/mac-dev/dev-prepare",permalink:"/zh-CN/community/developer-guide/mac-dev/dev-prepare",draft:!1,tags:[],version:"current",frontMatter:{title:"Doris Mac \u5f00\u53d1\u8c03\u8bd5\u51c6\u5907",language:"zh-CN"},sidebar:"community",previous:{title:"Doris BE \u5f00\u53d1\u8c03\u8bd5\u73af\u5883 -- clion",permalink:"/zh-CN/community/developer-guide/be-clion-dev"},next:{title:"Doris BE Mac \u5f00\u53d1\u73af\u5883\u642d\u5efa - CLion",permalink:"/zh-CN/community/developer-guide/mac-dev/be-clion-dev"}},p={},c=[{value:"\u5b89\u88c5\u73af\u5883\u4f9d\u8d56",id:"\u5b89\u88c5\u73af\u5883\u4f9d\u8d56",level:2},{value:"\u5b89\u88c5 thrift",id:"\u5b89\u88c5-thrift",level:2},{value:"\u62c9\u53d6\u81ea\u5df1\u7684\u4ee3\u7801",id:"\u62c9\u53d6\u81ea\u5df1\u7684\u4ee3\u7801",level:2},{value:"\u4e0b\u8f7d Doris \u7f16\u8bd1\u4f9d\u8d56",id:"\u4e0b\u8f7d-doris-\u7f16\u8bd1\u4f9d\u8d56",level:2},{value:"\u4fee\u6539\u7cfb\u7edf\u6700\u5927\u6587\u4ef6\u53e5\u67c4\u6570",id:"\u4fee\u6539\u7cfb\u7edf\u6700\u5927\u6587\u4ef6\u53e5\u67c4\u6570",level:2},{value:"\u7f16\u8bd1 Doris",id:"\u7f16\u8bd1-doris",level:2},{value:"\u7f16\u8bd1\u8fc7\u7a0b\u4e2d\u53ef\u80fd\u4f1a\u9047\u5230\u9ad8\u7248\u672c\u7684 Node.js \u5bfc\u81f4\u7684\u9519\u8bef",id:"\u7f16\u8bd1\u8fc7\u7a0b\u4e2d\u53ef\u80fd\u4f1a\u9047\u5230\u9ad8\u7248\u672c\u7684-nodejs-\u5bfc\u81f4\u7684\u9519\u8bef",level:2},{value:"\u914d\u7f6e Debug \u73af\u5883",id:"\u914d\u7f6e-debug-\u73af\u5883",level:2},{value:"\u5f00\u59cb\u7528 IDE \u8fdb\u884c Debug",id:"\u5f00\u59cb\u7528-ide-\u8fdb\u884c-debug",level:2}],s={toc:c},d="wrapper";function u(e){let{components:r,...t}=e;return(0,a.yg)(d,(0,n.A)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"\u5b89\u88c5\u73af\u5883\u4f9d\u8d56"},"\u5b89\u88c5\u73af\u5883\u4f9d\u8d56"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"brew install automake autoconf libtool pkg-config texinfo coreutils gnu-getopt \\\npython@3 cmake ninja ccache bison byacc gettext wget pcre maven llvm@16 openjdk@17 npm\n")),(0,a.yg)("p",null,(0,a.yg)("em",{parentName:"p"},"\u4f7f\u7528 brew \u5b89\u88c5\u7684 jdk \u7248\u672c\u4e3a 17\uff0c\u56e0\u4e3a\u5728 macOS \u4e0a\uff0carm64 \u7248\u672c\u7684 brew \u9ed8\u8ba4\u6ca1\u6709 8 \u7248\u672c\u7684 jdk"),"\n",(0,a.yg)("em",{parentName:"p"},"Doris \u76ee\u524d\u53ea\u652f\u6301 jdk8 \u548c jdk17 \u4e24\u4e2a\u7248\u672c")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"\u4f9d\u8d56\u8bf4\u660e\uff1a")),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"Java\u3001Maven \u7b49\u53ef\u4ee5\u5355\u72ec\u4e0b\u8f7d\uff0c\u65b9\u4fbf\u7ba1\u7406",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"Mac \u63a8\u8350 ",(0,a.yg)("a",{parentName:"li",href:"https://www.azul.com/downloads/?version=java-8-lts&os=macos&package=jdk#zulu"},"Zulu JDK8")),(0,a.yg)("li",{parentName:"ul"},"Maven \u4ece ",(0,a.yg)("a",{parentName:"li",href:"https://maven.apache.org/download.cgi"},"Maven \u5b98\u7f51\u4e0b\u8f7d"),"\u5373\u53ef"),(0,a.yg)("li",{parentName:"ul"},"\u81ea\u884c\u4e0b\u8f7d\u7684 Java \u4e0e Maven \u9700\u8981\u914d\u7f6e\u73af\u5883\u53d8\u91cf"))),(0,a.yg)("li",{parentName:"ol"},"\u5176\u4ed6\u4f9d\u8d56\u7684\u73af\u5883\u53d8\u91cf (\u793a\u4f8b\u4e3a Apple Silicon \u82af\u7247 Mac)",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"llvm: ",(0,a.yg)("inlineCode",{parentName:"li"},'export PATH="/opt/homebrew/opt/llvm/bin:$PATH"')),(0,a.yg)("li",{parentName:"ul"},"bison: ",(0,a.yg)("inlineCode",{parentName:"li"},'export PATH = "/opt/homebrew/opt/bison/bin:$PATH')),(0,a.yg)("li",{parentName:"ul"},"texinfo: ",(0,a.yg)("inlineCode",{parentName:"li"},'export PATH = "/opt/homebrew/opt/texinfo/bin:$PATH')),(0,a.yg)("li",{parentName:"ul"},"python: ",(0,a.yg)("inlineCode",{parentName:"li"},"ln -s -f /opt/homebrew/bin/python3 /opt/homebrew/bin/python"))))),(0,a.yg)("h2",{id:"\u5b89\u88c5-thrift"},"\u5b89\u88c5 thrift"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"\u6ce8\u610f\uff1a")," \u4ec5\u5728\u53ea\u8c03\u8bd5 FE \u7684\u60c5\u51b5\u4e0b\u9700\u8981\u5b89\u88c5 thrift\uff0c\u540c\u65f6\u8c03\u8bd5 BE \u548c FE \u65f6\uff0cBE \u7684\u4e09\u65b9\u5e93\u5305\u542b thrift"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"MacOS: \n    1. \u4e0b\u8f7d\uff1a`brew install thrift@0.16.0`\n    2. \u5efa\u7acb\u8f6f\u94fe\u63a5\uff1a \n        `mkdir -p ./thirdparty/installed/bin`\n        # Apple Silicon \u82af\u7247 macOS\n        `ln -s /opt/homebrew/Cellar/thrift@0.16.0/0.16.0/bin/thrift ./thirdparty/installed/bin/thrift`\n        # Intel \u82af\u7247 macOS\n        `ln -s /usr/local/Cellar/thrift@0.16.0/0.16.0/bin/thrift ./thirdparty/installed/bin/thrift`\n\n\u6ce8\uff1amacOS \u6267\u884c `brew install thrift@0.16.0` \u53ef\u80fd\u4f1a\u62a5\u627e\u4e0d\u5230\u7248\u672c\u7684\u9519\u8bef\uff0c\u89e3\u51b3\u65b9\u6cd5\u5982\u4e0b\uff0c\u5728\u7ec8\u7aef\u6267\u884c\uff1a\n    1. `brew tap homebrew/core --force`\n    2. `brew tap-new $USER/local-tap`\n    3. `brew extract --version='0.16.0' thrift $USER/local-tap`\n    4. `brew install thrift@0.16.0`\n\u53c2\u8003\u94fe\u63a5: `https://gist.github.com/tonydeng/02e571f273d6cce4230dc8d5f394493c`\n")),(0,a.yg)("h2",{id:"\u62c9\u53d6\u81ea\u5df1\u7684\u4ee3\u7801"},"\u62c9\u53d6\u81ea\u5df1\u7684\u4ee3\u7801"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u62c9\u53d6\u4ee3\u7801"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"cd ~\nmkdir DorisDev\ncd DorisDev\ngit clone https://github.com/GitHubID/doris.git\n"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u8bbe\u7f6e\u73af\u5883\u53d8\u91cf"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"export DORIS_HOME=~/DorisDev/doris\nexport PATH=$DORIS_HOME/bin:$PATH\n")))),(0,a.yg)("h2",{id:"\u4e0b\u8f7d-doris-\u7f16\u8bd1\u4f9d\u8d56"},"\u4e0b\u8f7d Doris \u7f16\u8bd1\u4f9d\u8d56"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("a",{parentName:"p",href:"https://github.com/apache/doris-thirdparty/releases/tag/automation"},"Apache Doris Third Party Prebuilt"),"\u9875\u9762\u6709\u6240\u6709\u7b2c\u4e09\u65b9\u5e93\u7684\u6e90\u7801\uff0c\u53ef\u4ee5\u76f4\u63a5\u4e0b\u8f7d",(0,a.yg)("a",{parentName:"p",href:"https://github.com/apache/doris-thirdparty/releases/download/automation/doris-thirdparty-source.tgz"},"doris-thirdparty-source.tgz"),"\u83b7\u5f97\u3002")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u53ef\u4ee5\u5728",(0,a.yg)("a",{parentName:"p",href:"https://github.com/apache/doris-thirdparty/releases/tag/automation"},"Apache Doris Third Party Prebuilt"),"\u9875\u9762\u76f4\u63a5\u4e0b\u8f7d\u9884\u7f16\u8bd1\u597d\u7684\u7b2c\u4e09\u65b9\u5e93\uff0c\u7701\u53bb\u7f16\u8bd1\u7b2c\u4e09\u65b9\u5e93\u7684\u8fc7\u7a0b\uff0c\u53c2\u8003\u4e0b\u9762\u7684\u547d\u4ee4\u3002"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"cd thirdparty\nrm -rf installed\n\n# Intel \u82af\u7247\ncurl -L https://github.com/apache/doris-thirdparty/releases/download/automation/doris-thirdparty-prebuilt-darwin-x86_64.tar.xz \\\n    -o - | tar -Jxf -\n\n# Apple Silicon \u82af\u7247\ncurl -L https://github.com/apache/doris-thirdparty/releases/download/automation/doris-thirdparty-prebuilt-darwin-arm64.tar.xz \\\n    -o - | tar -Jxf -\n\n# \u4fdd\u8bc1 protoc \u548c thrift \u80fd\u591f\u6b63\u5e38\u8fd0\u884c\ncd installed/bin\n\n./protoc --version\n./thrift --version\n"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u8fd0\u884c",(0,a.yg)("inlineCode",{parentName:"p"},"protoc"),"\u548c",(0,a.yg)("inlineCode",{parentName:"p"},"thrift"),"\u7684\u65f6\u5019\u53ef\u80fd\u4f1a\u9047\u5230",(0,a.yg)("strong",{parentName:"p"},"\u65e0\u6cd5\u6253\u5f00\uff0c\u56e0\u4e3a\u65e0\u6cd5\u9a8c\u8bc1\u5f00\u53d1\u8005"),"\u7684\u95ee\u9898\uff0c\u53ef\u4ee5\u5230\u524d\u5f80",(0,a.yg)("inlineCode",{parentName:"p"},"\u5b89\u5168\u6027\u4e0e\u9690\u79c1"),"\u3002\u70b9\u6309",(0,a.yg)("inlineCode",{parentName:"p"},"\u901a\u7528"),"\u9762\u677f\u4e2d\u7684",(0,a.yg)("inlineCode",{parentName:"p"},"\u4ecd\u8981\u6253\u5f00"),"\u6309\u94ae\uff0c\u4ee5\u786e\u8ba4\u6253\u7b97\u6253\u5f00\u8be5\u4e8c\u8fdb\u5236\u3002\u53c2\u8003",(0,a.yg)("a",{parentName:"p",href:"https://support.apple.com/zh-cn/HT202491"},"https://support.apple.com/zh-cn/HT202491"),"\u3002"))),(0,a.yg)("h2",{id:"\u4fee\u6539\u7cfb\u7edf\u6700\u5927\u6587\u4ef6\u53e5\u67c4\u6570"},"\u4fee\u6539\u7cfb\u7edf\u6700\u5927\u6587\u4ef6\u53e5\u67c4\u6570"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"# bash\necho 'ulimit -n 65536' >>~/.bashrc\n    \n# zsh\necho 'ulimit -n 65536' >>~/.zshrc\n")),(0,a.yg)("h2",{id:"\u7f16\u8bd1-doris"},"\u7f16\u8bd1 Doris"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"cd $DORIS_HOME\nsh build.sh\n")),(0,a.yg)("h2",{id:"\u7f16\u8bd1\u8fc7\u7a0b\u4e2d\u53ef\u80fd\u4f1a\u9047\u5230\u9ad8\u7248\u672c\u7684-nodejs-\u5bfc\u81f4\u7684\u9519\u8bef"},"\u7f16\u8bd1\u8fc7\u7a0b\u4e2d\u53ef\u80fd\u4f1a\u9047\u5230\u9ad8\u7248\u672c\u7684 Node.js \u5bfc\u81f4\u7684\u9519\u8bef"),(0,a.yg)("p",null,"opensslErrorStack: ","['error:03000086:digital envelope routines::initialization error']","\nlibrary: 'digital envelope routines'\nreason: 'unsupported'\ncode: 'ERR_OSSL_EVP_UNSUPPORTED'\n\u4ee5\u4e0b\u547d\u4ee4\u89e3\u51b3\u95ee\u9898\u3002\u53c2\u8003",(0,a.yg)("a",{parentName:"p",href:"https://stackoverflow.com/questions/74726224/opensslerrorstack-error03000086digital-envelope-routinesinitialization-e"},"https://stackoverflow.com/questions/74726224/opensslerrorstack-error03000086digital-envelope-routinesinitialization-e")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"#\u6307\u793aNode.js\u4f7f\u7528\u65e7\u7248\u7684OpenSSL\u63d0\u4f9b\u7a0b\u5e8f\nexport NODE_OPTIONS=--openssl-legacy-provider\n")),(0,a.yg)("h2",{id:"\u914d\u7f6e-debug-\u73af\u5883"},"\u914d\u7f6e Debug \u73af\u5883"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"# \u5c06\u7f16\u8bd1\u597d\u7684\u5305cp\u51fa\u6765\n    \ncp -r output ../doris-run\n    \n# \u914d\u7f6eFE/BE\u7684conf\n1\u3001IP\u3001\u76ee\u5f55\n2\u3001BE \u989d\u5916\u914d\u7f6e min_file_descriptor_number = 10000\n")),(0,a.yg)("h2",{id:"\u5f00\u59cb\u7528-ide-\u8fdb\u884c-debug"},"\u5f00\u59cb\u7528 IDE \u8fdb\u884c Debug"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/zh-CN/community/developer-guide/mac-dev/be-clion-dev"},"CLion Mac \u8c03\u8bd5 BE")),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/zh-CN/community/developer-guide/mac-dev/fe-idea-dev"},"IntelliJ IDEA Mac \u8c03\u8bd5 FE")))}u.isMDXComponent=!0}}]);