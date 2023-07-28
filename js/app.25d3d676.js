(function(){"use strict";var t={5632:function(t,e,s){var a=s(9963),n=s(6252);const r={id:"app",class:"container-fluid"},i=(0,n._)("h1",null,"Kaitai Struct CI",-1),o={id:"search"},l={class:"form-row"},u={class:"form-group col-md-4"},c={class:"form-group col-md-4"},d={class:"col-md-4 options-column"},p={class:"checkbox-inline",for:"only-failures-checkbox"},f={class:"checkbox-inline",for:"group-by-lang"};function h(t,e,s,h,g,m){const _=(0,n.up)("ci-grid");return(0,n.wg)(),(0,n.iD)("div",r,[i,(0,n._)("form",o,[(0,n._)("div",l,[(0,n._)("div",u,[(0,n.wy)((0,n._)("input",{name:"filterTest",class:"form-control","onUpdate:modelValue":e[0]||(e[0]=e=>t.filterTest=e),placeholder:"Search test..."},null,512),[[a.nr,t.filterTest]])]),(0,n._)("div",c,[(0,n.wy)((0,n._)("input",{name:"filterTarget",class:"form-control","onUpdate:modelValue":e[1]||(e[1]=e=>t.filterTarget=e),placeholder:"Search target..."},null,512),[[a.nr,t.filterTarget]])]),(0,n._)("div",d,[(0,n._)("label",p,[(0,n.wy)((0,n._)("input",{type:"checkbox","onUpdate:modelValue":e[2]||(e[2]=e=>t.skipPassed=e),id:"only-failures-checkbox"},null,512),[[a.e8,t.skipPassed]]),(0,n.Uk)(" Only failures ")]),(0,n._)("label",f,[(0,n.wy)((0,n._)("input",{type:"checkbox","onUpdate:modelValue":e[3]||(e[3]=e=>t.groupByLang=e),id:"group-by-lang"},null,512),[[a.e8,t.groupByLang]]),(0,n.Uk)(" Group columns by language ")])])])]),(0,n.Wm)(_,{data:m.groupedGridData,columns:m.groupedGridColumns,meta:m.groupedGridMeta,"filter-key":t.filterTest,"filter-columns-key":t.filterTarget,"skip-passed":t.skipPassed,"group-by-lang":t.groupByLang},null,8,["data","columns","meta","filter-key","filter-columns-key","skip-passed","group-by-lang"])])}s(7658);var g=s(3577);const m=t=>((0,n.dD)("data-v-f610cec8"),t=t(),(0,n.Cn)(),t),_={class:"table table-fixed"},x={class:"row-sticky-top"},y=m((()=>(0,n._)("th",null,"Test \\ Target",-1))),k=["onClick"],v=m((()=>(0,n._)("th",null,"Last update",-1))),w=["href"],C=["href"],b=m((()=>(0,n._)("th",null,"Rating",-1))),D=m((()=>(0,n._)("th",null,"KST adoption",-1)));function j(t,e,s,a,r,i){const o=(0,n.up)("ci-cell");return(0,n.wg)(),(0,n.iD)("table",_,[(0,n._)("thead",null,[(0,n._)("tr",x,[y,((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(i.filteredColumns,((e,s)=>((0,n.wg)(),(0,n.iD)("th",{key:s,onClick:t=>i.sortBy(e),class:(0,g.C_)({active:t.sortKey===e})},[(0,n.Uk)((0,g.zw)(e.replace("/"," "))+" ",1),(0,n._)("span",{class:(0,g.C_)(["arrow",t.sortOrders[e]>0?"asc":"dsc"])},null,2)],10,k)))),128))]),(0,n._)("tr",null,[v,((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(i.filteredColumns,((t,e)=>((0,n.wg)(),(0,n.iD)("th",{key:e},[(0,n.Uk)((0,g.zw)(i.humanTime(s.meta[t].timestamp))+" ",1),s.meta[t].ci?((0,n.wg)(),(0,n.iD)("a",{key:0,class:"ext-link",href:s.meta[t].ci.url},"Job",8,w)):(0,n.kq)("",!0),(0,n._)("a",{class:"ext-link",href:s.meta[t].artifactsUrl},"Artifacts",8,C)])))),128))]),(0,n._)("tr",null,[b,((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(i.filteredColumns,((t,e)=>((0,n.wg)(),(0,n.iD)("th",{key:e},(0,g.zw)(i.passRating[t])+"% ",1)))),128))])]),(0,n._)("tbody",null,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(i.filteredData,(t=>((0,n.wg)(),(0,n.iD)("tr",{key:t.name},[(0,n._)("td",null,(0,g.zw)(t.name),1),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(i.filteredColumns,(e=>((0,n.wg)(),(0,n.j4)(o,{key:t.name+"/"+e,data:t[e]||{}},null,8,["data"])))),128))])))),128))]),(0,n._)("tfoot",null,[(0,n._)("tr",null,[D,((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(i.filteredColumns,(t=>((0,n.wg)(),(0,n.iD)("th",{key:t},(0,g.zw)(i.kstRating[t])+"% ",1)))),128))])])])}const O={key:0},K={key:0,class:"failure-info"};function T(t,e,s,r,i,o){return(0,n.wg)(),(0,n.iD)("td",{class:(0,g.C_)(o.cssClassObject),style:(0,g.j5)(o.mixedBgGradientStyle),onClick:e[1]||(e[1]=e=>t.details=!t.details)},[(0,n.Uk)((0,g.zw)(s.data.status||"unknown")+" ",1),t.details&&o.hasDetails?((0,n.wg)(),(0,n.iD)("div",{key:0,class:"add-info",onClick:e[0]||(e[0]=(0,a.iM)((()=>{}),["stop"]))},[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(o.results,((t,e)=>((0,n.wg)(),(0,n.iD)("div",{class:"result",key:e},[(0,n._)("h4",{class:(0,g.C_)([o.getCssClassByStatus(t.status,s.data.is_kst)])},[t.variant_names?((0,n.wg)(),(0,n.iD)("span",O,(0,g.zw)(t.variant_names.join(", "))+": ",1)):(0,n.kq)("",!0),(0,n._)("strong",null,(0,g.zw)(t.status),1)],2),t.failure?((0,n.wg)(),(0,n.iD)("div",K,[t.failure.message?((0,n.wg)(),(0,n.iD)(n.HY,{key:0},[(0,n.Uk)(" Message: "),(0,n._)("pre",null,(0,g.zw)(t.failure.message),1)],64)):(0,n.kq)("",!0),t.failure.trace?((0,n.wg)(),(0,n.iD)(n.HY,{key:1},[(0,n.Uk)(" Stack trace: "),(0,n._)("pre",null,(0,g.zw)(t.failure.trace),1)],64)):(0,n.kq)("",!0)])):(0,n.kq)("",!0)])))),128))])):(0,n.kq)("",!0)],6)}const B=Object.freeze({passed:"#dff0d8","passed-kst":"#82dc75",skipped:"#b9cfbb",failed:"#f2dede",leak:"#f2cece","no-spec":"#f2bebe"});var S={name:"CiCell",props:{data:Object},data:function(){return{details:!1}},computed:{results:function(){return this.data.agg_results||[this.data]},hasDetails:function(){return!!this.data.failure||"mixed"===this.data.status},mixedBgGradientStyle:function(){if("mixed"!==this.data.status)return{};const t=10,e=Array.from(this.data.agg_status_set,((e,s)=>{const a=this.getStatusColorByCssClass(this.getCssClassByStatus(e,this.data.is_kst));return[a+" "+(s*t).toFixed(0)+"px",a+" "+((s+1)*t).toFixed(0)+"px"]})).flat();return{backgroundImage:"repeating-linear-gradient(135deg, "+e.join(", ")+")"}},cssClassObject:function(){const t={"has-details":this.hasDetails},e=this.getCssClassByStatus(this.data.status,this.data.is_kst);return e&&(t[e]=!0),t}},methods:{getCssClassByStatus:function(t,e){return"passed"===t&&e?"passed-kst":["passed","failed","leak"].indexOf(t)>-1?t:void 0===t?"no-spec":void 0},getStatusColorByCssClass:function(t){return Object.prototype.hasOwnProperty.call(B,t)?B[t]:"transparent"}}},P=s(3744);const z=(0,P.Z)(S,[["render",T],["__scopeId","data-v-b5c690f0"]]);var G=z,M={name:"CiGrid",components:{CiCell:G},props:{data:Array,columns:Array,meta:Object,filterKey:String,filterColumnsKey:String,skipPassed:Boolean},data:function(){var t={};return this.columns.forEach((function(e){t[e]=1})),{sortKey:"name",sortOrders:t}},computed:{filteredData:function(){var t=this.sortKey,e=this.filterKey&&this.filterKey.toLowerCase(),s=this.sortOrders[t]||1,a=this.data;if(e&&(a=a.filter((t=>this.strContainsCaseInsensitive(String(t.name),e)))),this.skipPassed){var n=this.filteredColumns;a=a.filter((function(t){return!n.every((function(e){return"name"===e||t[e]&&"passed"===t[e].status}))}))}return t&&(a=a.slice().sort((function(e,a){return e=e[t],a=a[t],(e===a?0:e>a?1:-1)*s}))),a},filteredColumns:function(){if(this.filterColumnsKey&&""!==this.filterColumnsKey){var t=this.filterColumnsKey.toLowerCase();return this.columns.filter((e=>e.toLowerCase().indexOf(t)>-1))}return this.columns},passRating:function(){var t={};for(var e in this.meta)t[e]=Math.round(this.meta[e].passed/this.data.length*100*10)/10;return t},kstRating:function(){var t={};for(var e in this.meta)t[e]=Math.round(this.meta[e].kst/this.data.length*100*10)/10;return t}},methods:{sortBy:function(t){this.sortKey=t,this.sortOrders[t]=-1*this.sortOrders[t]},strContainsCaseInsensitive:(t,e)=>t.toLowerCase().indexOf(e)>-1,humanTime:function(t){var e=(new Date-t)/1e3;return e<60?"just now":e<3600?Math.round(e/60)+"m ago":e<86400?Math.round(e/3600)+"h ago":Math.round(e/86400)+"d ago"}}};const U=(0,P.Z)(M,[["render",j],["__scopeId","data-v-f610cec8"]]);var L=U;const H=[["cpp_stl_98","clang3.4-linux-x86_64"],["cpp_stl_98","clang11-linux-x86_64"],["cpp_stl_98","gcc4.8-linux-x86_64"],["cpp_stl_98","gcc11-linux-x86_64"],["cpp_stl_98","clang14-macos-x86_64"],["cpp_stl_98","msvc141-windows-x64"],["cpp_stl_11","clang3.4-linux-x86_64"],["cpp_stl_11","clang11-linux-x86_64"],["cpp_stl_11","gcc4.8-linux-x86_64"],["cpp_stl_11","clang14-macos-x86_64"],["cpp_stl_11","msvc141-windows-x64"],["csharp","net48-windows-x64"],["csharp","netcore2.2.103-linux-x86_64"],["csharp","netcore3.0.100-linux-x86_64"],["csharp","netcore6.0-linux-x86_64"],["graphviz","8-linux-x86_64"],["go","1.19-linux-x86_64"],["java","zulu7-linux-x86_64"],["java","temurin8-linux-x86_64"],["java","temurin11-linux-x86_64"],["java","temurin17-linux-x86_64"],["javascript","nodejs4-linux-x86_64"],["javascript","nodejs8-linux-x86_64"],["javascript","nodejs10-linux-x86_64"],["javascript","nodejs12-linux-x86_64"],["javascript","nodejs18-linux-x86_64"],["lua","5.3-linux-x86_64"],["nim","1.6.0-linux-x86_64"],["perl","5.24-linux-x86_64"],["perl","5.38-linux-x86_64"],["php","7.1-linux-x86_64"],["php","8.2-linux-x86_64"],["python","2.7-linux-x86_64"],["python","3.4-linux-x86_64"],["python","3.11-linux-x86_64"],["construct","python2.7-linux-x86_64"],["construct","python3.4-linux-x86_64"],["construct","python3.11-linux-x86_64"],["ruby","1.9-linux-x86_64"],["ruby","2.3-linux-x86_64"],["ruby","3.2-linux-x86_64"]];H.forEach((t=>Object.freeze(t))),Object.freeze(H);var E={name:"app",components:{CiGrid:L},data:function(){return{testData:{},filterTest:"",filterTarget:"",gridColumns:[],gridData:[],gridMeta:{},skipPassed:!1,groupByLang:!0}},created:function(){const t=this.getPairCompareFunc(H);H.forEach((e=>this.addOneJson(e[0],e[1],t)))},computed:{groupedGridColumns:function(){return this.groupByLang?Array.from(new Set(this.gridColumns.map((t=>t.split("/")[0])))):this.gridColumns},groupedGridData:function(){if(!this.groupByLang)return this.gridData;const t=this.getPairCompareFunc(H);return this.gridData.map((e=>{const s={},a=Object.keys(e).sort(t);return a.forEach((t=>{const a=e[t];if("name"===t)return void(s[t]=a);const n=t.split("/",2);n.length<2&&console.error('target key "'+t+'" is invalid (does not have the format "{lang}/{variant}")');const r=n[0],i=n[1];Object.prototype.hasOwnProperty.call(s,r)||(s[r]={status:a.status,is_kst:a.is_kst,failure:!1,agg_status_set:new Set,agg_results:[]});const o=s[r];"mixed"!==o.status&&a.status!==o.status&&(o.status="mixed"),a.is_kst!==o.is_kst&&(o.is_kst=!1),a.failure&&!o.failure&&(o.failure=!0);const l=o.agg_results.find((t=>t.status===a.status&&(!t.failure&&!a.failure||!(!t.failure||!a.failure)&&(t.failure.message===a.failure.message&&t.failure.trace===a.failure.trace))));if(l)l.variant_names.push(i);else{const t={status:a.status,variant_names:[i]};a.failure&&(t.failure=a.failure),o.agg_results.push(t)}o.agg_status_set.add(a.status)})),s}))},groupedGridMeta:function(){if(!this.groupByLang)return this.gridMeta;const t={};return Object.entries(this.gridMeta).forEach((([e,s])=>{const a=e.split("/")[0];if(!Object.prototype.hasOwnProperty.call(t,a))return void(t[a]={lang:s.lang,timestamp:s.timestamp,ci:{},kst:0,passed:0});const n=t[a];s.timestamp>n.timestamp&&(n.timestamp=s.timestamp)})),this.groupedGridData.forEach((e=>{Object.entries(e).forEach((([e,s])=>{"name"!==e&&Object.prototype.hasOwnProperty.call(t,e)&&("passed"===s.status&&t[e].passed++,s.is_kst&&t[e].kst++)}))})),t}},methods:{addOneJson:function(t,e,s){var a=t+"/"+e;console.log("Querying data for",a),fetch("https://raw.githubusercontent.com/kaitai-io/ci_artifacts/"+a+"/test_out/"+t+"/ci.json").then((t=>{if(!t.ok)throw new Error("HTTP error, status code: "+t.status);return t.json()})).then((e=>{var n=e.$meta;delete e.$meta,console.log("Got answer for "+a+", meta:",n);var r=0,i=0;for(const t in e){Object.prototype.hasOwnProperty.call(this.testData,t)||(this.testData[t]={name:t});var o=this.testData[t];delete e[t]["name"],o[a]=e[t],"passed"===o[a].status&&r++,o[a].is_kst&&i++}this.gridColumns.push(a),this.gridColumns=this.gridColumns.sort(s),this.gridData=[];for(const t in this.testData)this.gridData.push(this.testData[t]);n.passed=r,n.kst=i,n.timestamp=new Date(n.timestamp),n.artifactsUrl="https://github.com/kaitai-io/ci_artifacts/tree/"+a+"/test_out/"+t,this.gridMeta[a]=n})).catch((t=>{console.warn("Cannot fetch data for "+a+". "+t)}))},getPairCompareFunc:function(t){return(e,s)=>{const a=e=>t.findIndex((t=>t.join("/")===e));return a(e)-a(s)}}}};const Y=(0,P.Z)(E,[["render",h]]);var I=Y;const q=(0,a.ri)(I);q.mount("#app")}},e={};function s(a){var n=e[a];if(void 0!==n)return n.exports;var r=e[a]={exports:{}};return t[a].call(r.exports,r,r.exports,s),r.exports}s.m=t,function(){var t=[];s.O=function(e,a,n,r){if(!a){var i=1/0;for(c=0;c<t.length;c++){a=t[c][0],n=t[c][1],r=t[c][2];for(var o=!0,l=0;l<a.length;l++)(!1&r||i>=r)&&Object.keys(s.O).every((function(t){return s.O[t](a[l])}))?a.splice(l--,1):(o=!1,r<i&&(i=r));if(o){t.splice(c--,1);var u=n();void 0!==u&&(e=u)}}return e}r=r||0;for(var c=t.length;c>0&&t[c-1][2]>r;c--)t[c]=t[c-1];t[c]=[a,n,r]}}(),function(){s.d=function(t,e){for(var a in e)s.o(e,a)&&!s.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};s.O.j=function(e){return 0===t[e]};var e=function(e,a){var n,r,i=a[0],o=a[1],l=a[2],u=0;if(i.some((function(e){return 0!==t[e]}))){for(n in o)s.o(o,n)&&(s.m[n]=o[n]);if(l)var c=l(s)}for(e&&e(a);u<i.length;u++)r=i[u],s.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return s.O(c)},a=self["webpackChunkkaitai_ci_ui"]=self["webpackChunkkaitai_ci_ui"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=s.O(void 0,[998],(function(){return s(5632)}));a=s.O(a)})();
//# sourceMappingURL=app.25d3d676.js.map