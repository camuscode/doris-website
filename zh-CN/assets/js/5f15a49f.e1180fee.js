"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[863342],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>y});var r=t(296540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=p(t),c=o,y=d["".concat(s,".").concat(c)]||d[c]||m[c]||i;return t?r.createElement(y,l(l({ref:n},u),{},{components:t})):r.createElement(y,l({ref:n},u))}));function y(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,l=new Array(i);l[0]=c;var a={};for(var s in n)hasOwnProperty.call(n,s)&&(a[s]=n[s]);a.originalType=e,a[d]="string"==typeof e?e:o,l[1]=a;for(var p=2;p<i;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},23773:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>a,toc:()=>p});var r=t(58168),o=(t(296540),t(15680));const i={title:"TOPN \u67e5\u8be2\u4f18\u5316",language:"zh-CN"},l=void 0,a={unversionedId:"query/topn-query",id:"version-2.1/query/topn-query",title:"TOPN \u67e5\u8be2\u4f18\u5316",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/query/topn-query.md",sourceDirName:"query",slug:"/query/topn-query",permalink:"/zh-CN/docs/query/topn-query",draft:!1,tags:[],version:"2.1",frontMatter:{title:"TOPN \u67e5\u8be2\u4f18\u5316",language:"zh-CN"},sidebar:"docs",previous:{title:"\u9ad8\u5e76\u53d1\u70b9\u67e5",permalink:"/zh-CN/docs/query/high-concurrent-point-query"},next:{title:"\u83b7\u53d6 Profile",permalink:"/zh-CN/docs/query/query-analysis/get-profile"}},s={},p=[{value:"TOPN \u67e5\u8be2\u4f18\u5316\u7684\u4f18\u5316\u70b9",id:"topn-\u67e5\u8be2\u4f18\u5316\u7684\u4f18\u5316\u70b9",level:2},{value:"TOPN \u67e5\u8be2\u4f18\u5316\u7684\u9650\u5236",id:"topn-\u67e5\u8be2\u4f18\u5316\u7684\u9650\u5236",level:2},{value:"\u914d\u7f6e\u53c2\u6570\u548c\u67e5\u8be2\u5206\u6790",id:"\u914d\u7f6e\u53c2\u6570\u548c\u67e5\u8be2\u5206\u6790",level:2},{value:"\u68c0\u67e5 TOPN \u67e5\u8be2\u4f18\u5316\u662f\u5426\u542f\u7528",id:"\u68c0\u67e5-topn-\u67e5\u8be2\u4f18\u5316\u662f\u5426\u542f\u7528",level:3},{value:"\u68c0\u67e5 TOPN \u67e5\u8be2\u4f18\u5316\u6267\u884c\u65f6\u662f\u5426\u6709\u6548\u679c",id:"\u68c0\u67e5-topn-\u67e5\u8be2\u4f18\u5316\u6267\u884c\u65f6\u662f\u5426\u6709\u6548\u679c",level:3}],u={toc:p},d="wrapper";function m(e){let{components:n,...t}=e;return(0,o.yg)(d,(0,r.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"TOPN \u67e5\u8be2\u662f\u6307\u4e0b\u9762\u8fd9\u79cd ORDER BY LIMIT \u67e5\u8be2\uff0c\u5728\u65e5\u5fd7\u68c0\u7d22\u7b49\u660e\u7ec6\u67e5\u8be2\u573a\u666f\u4e2d\u5f88\u5e38\u89c1\uff0cDoris \u4f1a\u81ea\u52a8\u5bf9\u8fd9\u79cd\u7c7b\u578b\u7684\u67e5\u8be2\u8fdb\u884c\u4f18\u5316\u3002"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"SELECT * FROM tablex WHERE xxx ORDER BY c1,c2 ... LIMIT n\n")),(0,o.yg)("h2",{id:"topn-\u67e5\u8be2\u4f18\u5316\u7684\u4f18\u5316\u70b9"},"TOPN \u67e5\u8be2\u4f18\u5316\u7684\u4f18\u5316\u70b9"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"\u6267\u884c\u8fc7\u7a0b\u4e2d\u52a8\u6001\u5bf9\u6392\u5e8f\u5217\u6784\u5efa\u8303\u56f4\u8fc7\u6ee4\u6761\u4ef6\uff08\u6bd4\u5982 c1 >= 10000\uff09\uff0c\u8bfb\u6570\u636e\u65f6\u81ea\u52a8\u5e26\u4e0a\u524d\u9762\u7684\u6761\u4ef6\uff0c\u5229\u7528 zonemap \u7d22\u5f15\u8fc7\u6ee4\u5230\u4e00\u4e9b\u6570\u636e\u751a\u81f3\u6587\u4ef6\u3002"),(0,o.yg)("li",{parentName:"ol"},"\u5982\u679c\u6392\u5e8f\u5b57\u6bb5c1,c2 \u6b63\u597d\u662ftable key\u7684\u524d\u7f00\uff0c\u5219\u66f4\u8fdb\u4e00\u6b65\u4f18\u5316\uff0c\u8bfb\u6570\u636e\u7684\u65f6\u5019\u53ea\u7528\u8bfb\u6570\u636e\u6587\u4ef6\u7684\u5934\u90e8\u6216\u8005\u5c3e\u90e8n\u884c\u3002"),(0,o.yg)("li",{parentName:"ol"},"SELECT * \u5ef6\u8fdf\u7269\u5316\uff0c\u8bfb\u6570\u636e\u548c\u6392\u5e8f\u8fc7\u7a0b\u4e2d\u53ea\u8bfb\u6392\u5e8f\u5217\u4e0d\u8bfb\u5176\u5b83\u5217\uff0c\u5f97\u5230\u7b26\u5408\u6761\u4ef6\u7684\u884c\u53f7\u540e\uff0c\u518d\u53bb\u8bfb\u90a3n\u884c\u9700\u8981\u7684\u5168\u90e8\u5217\u6570\u636e\uff0c\u5927\u5e45\u51cf\u5c11\u8bfb\u53d6\u548c\u6392\u5e8f\u7684\u5217\u3002")),(0,o.yg)("h2",{id:"topn-\u67e5\u8be2\u4f18\u5316\u7684\u9650\u5236"},"TOPN \u67e5\u8be2\u4f18\u5316\u7684\u9650\u5236"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"\u53ea\u80fd\u7528\u4e8e duplicate \u8868\u548c unique mow \u8868\uff0c\u56e0\u4e3a mor \u8868\u7528\u8fd9\u4e2a\u4f18\u5316\u53ef\u80fd\u6709\u7ed3\u679c\u9519\u8bef\u3002"),(0,o.yg)("li",{parentName:"ol"},"\u5bf9\u4e8e\u8fc7\u5927\u7684n\uff0c\u4f18\u5316\u5185\u5b58\u6d88\u8017\u4f1a\u5f88\u5927\uff0c\u6240\u4ee5\u8d85\u8fc7 topn_opt_limit_threshold session \u53d8\u91cf\u7684n \u4e0d\u4f1a\u4f7f\u7528\u4f18\u5316\u3002")),(0,o.yg)("h2",{id:"\u914d\u7f6e\u53c2\u6570\u548c\u67e5\u8be2\u5206\u6790"},"\u914d\u7f6e\u53c2\u6570\u548c\u67e5\u8be2\u5206\u6790"),(0,o.yg)("p",null,"\u4e0b\u9762\u4e24\u4e2a\u53c2\u6570\u90fd\u662f session variable\uff0c\u53ef\u4ee5\u9488\u5bf9\u67d0\u4e2a SQL \u6216\u8005\u5168\u5c40\u8bbe\u7f6e\u3002"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"topn_opt_limit_threshold\uff0cLIMIT n \u5c0f\u4e8e\u8fd9\u4e2a\u503c\u624d\u4f1a\u6709\u4f18\u5316\uff0c\u9ed8\u8ba4\u503c1024\uff0c\u5c06\u5b83\u8bbe\u7f6e\u4e3a 0 \u53ef\u4ee5\u5173\u95ed TOPN \u67e5\u8be2\u4f18\u5316\u3002"),(0,o.yg)("li",{parentName:"ol"},"enable_two_phase_read_opt\uff0c\u662f\u5426\u5f00\u542f\u4f18\u53163\uff0c\u9ed8\u8ba4\u4e3a true\uff0c\u53ef\u4ee5\u8c03\u4e3a false \u5173\u95ed\u8fd9\u4e2a\u4f18\u5316\u3002")),(0,o.yg)("h3",{id:"\u68c0\u67e5-topn-\u67e5\u8be2\u4f18\u5316\u662f\u5426\u542f\u7528"},"\u68c0\u67e5 TOPN \u67e5\u8be2\u4f18\u5316\u662f\u5426\u542f\u7528"),(0,o.yg)("p",null,"explain SQL \u62ff\u5230 query plan \u53ef\u4ee5\u786e\u8ba4\u8fd9\u4e2asql\u662f\u5426\u542f\u7528 TOPN \u67e5\u8be2\u4f18\u5316\uff0c\u4ee5\u4e0b\u9762\u7684\u4e3a\u4f8b\uff1a"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"TOPN OPT \u4ee3\u8868\u6709\u4f18\u53161"),(0,o.yg)("li",{parentName:"ul"},"VOlapScanNode \u4e0b\u9762\u6709 SORT LIMIT \u4ee3\u8868\u6709\u4f18\u53162"),(0,o.yg)("li",{parentName:"ul"},"OPT TWO PHRASE \u4ee3\u8868\u6709\u4f18\u53163")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"  1:VTOP-N(137)\n  |  order by: @timestamp18 DESC\n  |  TOPN OPT\n  |  OPT TWO PHASE\n  |  offset: 0\n  |  limit: 10\n  |  distribute expr lists: applicationName5\n  |  \n  0:VOlapScanNode(106)\n     TABLE: log_db.log_core_all_no_index(log_core_all_no_index), PREAGGREGATION: ON\n     SORT INFO:\n          @timestamp18\n     SORT LIMIT: 10\n     TOPN OPT:1\n     PREDICATES: ZYCFC-TRACE-ID4 like '%flowId-1720055220933%'\n     partitions=1/8 (p20240704), tablets=250/250, tabletList=1727094,1727096,1727098 ...\n     cardinality=345472780, avgRowSize=0.0, numNodes=1\n     pushAggOp=NONE\n")),(0,o.yg)("h3",{id:"\u68c0\u67e5-topn-\u67e5\u8be2\u4f18\u5316\u6267\u884c\u65f6\u662f\u5426\u6709\u6548\u679c"},"\u68c0\u67e5 TOPN \u67e5\u8be2\u4f18\u5316\u6267\u884c\u65f6\u662f\u5426\u6709\u6548\u679c"),(0,o.yg)("p",null,"\u9996\u5148\uff0c\u53ef\u4ee5\u5c06 topn_opt_limit_threshold \u8bbe\u7f6e\u4e3a 0 \u5173\u95ed TOPN \u67e5\u8be2\u4f18\u5316\uff0c\u5bf9\u6bd4\u5f00\u542f\u548c\u5173\u95ed\u4f18\u5316\u7684 SQL \u6267\u884c\u65f6\u95f4\u3002"),(0,o.yg)("p",null,"\u5f00\u542f TOPN\u67e5\u8be2\u4f18\u5316\u540e\uff0c\u5728 query profile \u4e2d\u641c\u7d22 RuntimePredicate\uff0c\u5173\u6ce8\u4e0b\u9762\u51e0\u4e2a\u6307\u6807\uff1a"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"RowsZonemapRuntimePredicateFiltered \u8fd9\u4e2a\u4ee3\u8868\u8fc7\u6ee4\u6389\u7684\u884c\u6570\uff0c\u8d8a\u5927\u8d8a\u597d"),(0,o.yg)("li",{parentName:"ul"},"NumSegmentFiltered \u8fd9\u4e2a\u4ee3\u8868\u8fc7\u6ee4\u6389\u7684\u6570\u636e\u6587\u4ef6\u4e2a\u6570\uff0c\u8d8a\u5927\u8d8a\u597d"),(0,o.yg)("li",{parentName:"ul"},"BlockConditionsFilteredZonemapRuntimePredicateTime \u4ee3\u8868\u8fc7\u6ee4\u6570\u636e\u7684\u8017\u65f6\uff0c\u8d8a\u5c0f\u8d8a\u597d")),(0,o.yg)("p",null,"2.0.3 \u4e4b\u524d\u7684\u7248\u672cRuntimePredicate\u7684\u6307\u6807\u6ca1\u6709\u72ec\u7acb\u51fa\u6765\uff0c\u53ef\u4ee5\u901a\u8fc7Zonamap\u6307\u6807\u5927\u81f4\u89c2\u5bdf\u3002"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"    SegmentIterator:\n          -  BitmapIndexFilterTimer:  46.54us\n          -  BlockConditionsFilteredBloomFilterTime:  10.352us\n          -  BlockConditionsFilteredDictTime:  7.299us\n          -  BlockConditionsFilteredTime:  202.23ms\n          -  BlockConditionsFilteredZonemapRuntimePredicateTime:  0ns\n          -  BlockConditionsFilteredZonemapTime:  402.917ms\n          -  BlockInitSeekCount:  399\n          -  BlockInitSeekTime:  11.309ms\n          -  BlockInitTime:  215.59ms\n          -  BlockLoadTime:  7s567ms\n          -  BlocksLoad:  392.97K  (392970)\n          -  CachedPagesNum:  0\n          -  CollectIteratorMergeTime:  0ns\n          -  CollectIteratorNormalTime:  0ns\n          -  CompressedBytesRead:  29.76  MB\n          -  DecompressorTimer:  427.713ms\n          -  ExprFilterEvalTime:  3s930ms\n          -  FirstReadSeekCount:  392.921K  (392921)\n          -  FirstReadSeekTime:  528.287ms\n          -  FirstReadTime:  1s134ms\n          -  IOTimer:  51.286ms\n          -  InvertedIndexFilterTime:  49.457us\n          -  InvertedIndexQueryBitmapCopyTime:  0ns\n          -  InvertedIndexQueryBitmapOpTime:  0ns\n          -  InvertedIndexQueryCacheHit:  0\n          -  InvertedIndexQueryCacheMiss:  0\n          -  InvertedIndexQueryTime:  0ns\n          -  InvertedIndexSearcherOpenTime:  0ns\n          -  InvertedIndexSearcherSearchTime:  0ns\n          -  LazyReadSeekCount:  0\n          -  LazyReadSeekTime:  0ns\n          -  LazyReadTime:  106.952us\n          -  NumSegmentFiltered:  0\n          -  NumSegmentTotal:  50\n          -  OutputColumnTime:  61.987ms\n          -  OutputIndexResultColumnTimer:  12.345ms\n          -  RawRowsRead:  3.929151M  (3929151)\n          -  RowsBitmapIndexFiltered:  0\n          -  RowsBloomFilterFiltered:  0\n          -  RowsConditionsFiltered:  6.38976M  (6389760)\n          -  RowsDictFiltered:  0\n          -  RowsInvertedIndexFiltered:  0\n          -  RowsKeyRangeFiltered:  0\n          -  RowsShortCircuitPredFiltered:  0\n          -  RowsShortCircuitPredInput:  0\n          -  RowsStatsFiltered:  6.38976M  (6389760)\n          -  RowsVectorPredFiltered:  0\n          -  RowsVectorPredInput:  0\n          -  RowsZonemapRuntimePredicateFiltered:  6.38976M  (6389760)\n          -  SecondReadTime:  0ns\n          -  ShortPredEvalTime:  0ns\n          -  TotalPagesNum:  2.301K  (2301)\n          -  UncompressedBytesRead:  137.99  MB\n          -  VectorPredEvalTime:  0ns\n")))}m.isMDXComponent=!0}}]);