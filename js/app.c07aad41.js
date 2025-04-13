(function(){"use strict";var t={9603:function(t,e,a){var s=a(3751),n=a(641);const r={id:"app",class:"container-fluid"},i={id:"search"},l={class:"row g-3"},u={class:"col-md-4"},o={class:"col-md-4"},c={class:"col-md-4 options-column"},d={class:"form-check form-check-inline"},p={class:"form-check form-check-inline"};function f(t,e,a,f,h,m){const g=(0,n.g2)("ci-grid");return(0,n.uX)(),(0,n.CE)("div",r,[e[6]||(e[6]=(0,n.Lk)("h1",null,"Kaitai Struct CI",-1)),(0,n.Lk)("form",i,[(0,n.Lk)("div",l,[(0,n.Lk)("div",u,[(0,n.bo)((0,n.Lk)("input",{name:"filterTest",class:"form-control","onUpdate:modelValue":e[0]||(e[0]=e=>t.filterTest=e),placeholder:"Search test..."},null,512),[[s.Jo,t.filterTest]])]),(0,n.Lk)("div",o,[(0,n.bo)((0,n.Lk)("input",{name:"filterTarget",class:"form-control","onUpdate:modelValue":e[1]||(e[1]=e=>t.filterTarget=e),placeholder:"Search target..."},null,512),[[s.Jo,t.filterTarget]])]),(0,n.Lk)("div",c,[(0,n.Lk)("div",d,[(0,n.bo)((0,n.Lk)("input",{type:"checkbox",class:"form-check-input","onUpdate:modelValue":e[2]||(e[2]=e=>t.skipPassed=e),id:"only-failures-checkbox"},null,512),[[s.lH,t.skipPassed]]),e[4]||(e[4]=(0,n.Lk)("label",{class:"form-check-label",for:"only-failures-checkbox"}," Only failures ",-1))]),(0,n.Lk)("div",p,[(0,n.bo)((0,n.Lk)("input",{type:"checkbox",class:"form-check-input","onUpdate:modelValue":e[3]||(e[3]=e=>t.groupByLang=e),id:"group-by-lang"},null,512),[[s.lH,t.groupByLang]]),e[5]||(e[5]=(0,n.Lk)("label",{class:"form-check-label",for:"group-by-lang"}," Group columns by language ",-1))])])])]),(0,n.bF)(g,{data:m.groupedGridData,columns:m.groupedGridColumns,meta:m.groupedGridMeta,"filter-key":t.filterTest,"filter-columns-key":t.filterTarget,"skip-passed":t.skipPassed,"group-by-lang":t.groupByLang},null,8,["data","columns","meta","filter-key","filter-columns-key","skip-passed","group-by-lang"])])}a(4114),a(7642),a(8004),a(3853),a(5876),a(2475),a(5024),a(1698),a(8992),a(2577),a(3949),a(1454);var h=a(33);const m={class:"table"},g={class:"sticky-top bg-white"},k=["href"],_=["href"];function x(t,e,a,s,r,i){const l=(0,n.g2)("ci-cell");return(0,n.uX)(),(0,n.CE)("table",m,[(0,n.Lk)("thead",null,[(0,n.Lk)("tr",g,[e[0]||(e[0]=(0,n.Lk)("th",null,"Test \\ Target",-1)),((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(i.filteredColumns,((t,e)=>((0,n.uX)(),(0,n.CE)("th",{key:e},(0,h.v_)(t.replace("/"," ")),1)))),128))]),(0,n.Lk)("tr",null,[e[1]||(e[1]=(0,n.Lk)("th",null,"Last update",-1)),((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(i.filteredColumns,((t,e)=>((0,n.uX)(),(0,n.CE)("th",{key:e},[(0,n.eW)((0,h.v_)(i.humanTime(a.meta[t].timestamp))+" ",1),a.meta[t].ci?((0,n.uX)(),(0,n.CE)("a",{key:0,class:"ext-link",href:a.meta[t].ci.url},"Job",8,k)):(0,n.Q3)("",!0),(0,n.Lk)("a",{class:"ext-link",href:a.meta[t].artifactsUrl},"Artifacts",8,_)])))),128))]),(0,n.Lk)("tr",null,[e[2]||(e[2]=(0,n.Lk)("th",null,"Rating",-1)),((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(i.filteredColumns,((t,e)=>((0,n.uX)(),(0,n.CE)("th",{key:e},(0,h.v_)(i.passRating[t])+"% ",1)))),128))])]),(0,n.Lk)("tbody",null,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(i.filteredData,(t=>((0,n.uX)(),(0,n.CE)("tr",{key:t.name},[(0,n.Lk)("td",null,(0,h.v_)(t.name),1),((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(i.filteredColumns,(e=>((0,n.uX)(),(0,n.Wv)(l,{key:t.name+"/"+e,data:t.value[e]||{}},null,8,["data"])))),128))])))),128))]),(0,n.Lk)("tfoot",null,[(0,n.Lk)("tr",null,[e[3]||(e[3]=(0,n.Lk)("th",null,"KST adoption",-1)),((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(i.filteredColumns,(t=>((0,n.uX)(),(0,n.CE)("th",{key:t},(0,h.v_)(i.kstRating[t])+"% ",1)))),128))])])])}a(3215),a(4520);const v={key:0},y={key:0,class:"failure-info"};function C(t,e,a,r,i,l){return(0,n.uX)(),(0,n.CE)("td",{class:(0,h.C4)(l.cssClassObject),style:(0,h.Tr)(l.mixedBgGradientStyle),onClick:e[1]||(e[1]=e=>t.details=!t.details)},[(0,n.eW)((0,h.v_)(a.data.status||"unknown")+" ",1),t.details&&l.hasDetails?((0,n.uX)(),(0,n.CE)("div",{key:0,class:"add-info position-absolute bg-white border",onClick:e[0]||(e[0]=(0,s.D$)((()=>{}),["stop"]))},[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(l.results,((t,s)=>((0,n.uX)(),(0,n.CE)("div",{class:"result",key:s},[(0,n.Lk)("h4",{class:(0,h.C4)([l.getCssClassByStatus(t.status,a.data.is_kst)])},[t.variant_names?((0,n.uX)(),(0,n.CE)("span",v,(0,h.v_)(t.variant_names.join(", "))+": ",1)):(0,n.Q3)("",!0),(0,n.Lk)("strong",null,(0,h.v_)(t.status),1)],2),t.failure?((0,n.uX)(),(0,n.CE)("div",y,[t.failure.message?((0,n.uX)(),(0,n.CE)(n.FK,{key:0},[e[2]||(e[2]=(0,n.eW)(" Message: ")),(0,n.Lk)("pre",null,(0,h.v_)(t.failure.message),1)],64)):(0,n.Q3)("",!0),t.failure.trace?((0,n.uX)(),(0,n.CE)(n.FK,{key:1},[e[3]||(e[3]=(0,n.eW)(" Stack trace: ")),(0,n.Lk)("pre",null,(0,h.v_)(t.failure.trace),1)],64)):(0,n.Q3)("",!0)])):(0,n.Q3)("",!0)])))),128))])):(0,n.Q3)("",!0)],6)}const b=Object.freeze({passed:"#aea","passed-kst":"#7d7",skipped:"#cef",failed:"#edd",leak:"#ecc","format-build-failed":"#fd9","spec-build-failed":"#fd9","no-spec":"#ebb"});var L={name:"CiCell",props:{data:Object},data:function(){return{details:!1}},computed:{results:function(){return this.data.agg_results||[this.data]},hasDetails:function(){return!!this.data.failure||"mixed"===this.data.status},mixedBgGradientStyle:function(){if("mixed"!==this.data.status)return{};const t=10,e=Array.from(new Set(this.data.agg_results.map((t=>t.status))),((e,a)=>{const s=this.getStatusColorByCssClass(this.getCssClassByStatus(e,this.data.is_kst));return[s+" "+(a*t).toFixed(0)+"px",s+" "+((a+1)*t).toFixed(0)+"px"]})).flat();return{backgroundImage:"repeating-linear-gradient(135deg, "+e.join(", ")+")"}},cssClassObject:function(){const t={"has-details":this.hasDetails},e=this.getCssClassByStatus(this.data.status,this.data.is_kst);return e&&(t[e]=!0),t}},methods:{getCssClassByStatus:function(t,e){switch(t){case"passed":return e?"passed-kst":t;case"failed":case"leak":case"skipped":return t;case"format_build_failed":return"format-build-failed";case"spec_build_failed":return"spec-build-failed";case"unknown":case void 0:return"no-spec"}},getStatusColorByCssClass:function(t){return Object.prototype.hasOwnProperty.call(b,t)?b[t]:"transparent"}}},w=a(6262);const j=(0,w.A)(L,[["render",C],["__scopeId","data-v-5afd4e8e"]]);var O=j,E={name:"CiGrid",components:{CiCell:O},props:{data:Array,columns:Array,meta:Object,filterKey:String,filterColumnsKey:String,skipPassed:Boolean},computed:{filteredData:function(){var t=this.filterKey&&this.filterKey.toLowerCase(),e=this.data;if(t&&(e=e.filter((e=>this.strContainsCaseInsensitive(e.name,t)))),this.skipPassed){var a=this.filteredColumns;e=e.filter((function(t){return!a.every((function(e){return t.value[e]&&"passed"===t.value[e].status}))}))}return e=e.slice().sort((function(t,e){return t=t.name,e=e.name,t===e?0:t>e?1:-1})),e},filteredColumns:function(){if(this.filterColumnsKey&&""!==this.filterColumnsKey){var t=this.filterColumnsKey.toLowerCase();return this.columns.filter((e=>e.toLowerCase().indexOf(t)>-1))}return this.columns},passRating:function(){var t={};for(var e in this.meta)t[e]=Math.round(this.meta[e].passed/this.data.length*100*10)/10;return t},kstRating:function(){var t={};for(var e in this.meta)t[e]=Math.round(this.meta[e].kst/this.data.length*100*10)/10;return t}},methods:{strContainsCaseInsensitive:(t,e)=>t.toLowerCase().indexOf(e)>-1,humanTime:function(t){var e=(new Date-t)/1e3;return e<60?"just now":e<3600?Math.round(e/60)+"m ago":e<86400?Math.round(e/3600)+"h ago":Math.round(e/86400)+"d ago"}}};const X=(0,w.A)(E,[["render",x],["__scopeId","data-v-14e1b8c9"]]);var T=X;const D=[["cpp_stl_98","clang3.4-linux-x86_64"],["cpp_stl_98","clang18-linux-x86_64"],["cpp_stl_98","gcc4.8-linux-x86_64"],["cpp_stl_98","gcc13-linux-x86_64"],["cpp_stl_98","clang15-macos-x86_64"],["cpp_stl_98","msvc141-windows-x64"],["cpp_stl_11","clang3.4-linux-x86_64"],["cpp_stl_11","clang18-linux-x86_64"],["cpp_stl_11","gcc4.8-linux-x86_64"],["cpp_stl_11","gcc13-linux-x86_64"],["cpp_stl_11","clang15-macos-x86_64"],["cpp_stl_11","msvc141-windows-x64"],["csharp","net48-windows-x64"],["csharp","net6.0-linux-x86_64"],["csharp","net9.0-linux-x86_64"],["graphviz","12-linux-x86_64"],["go","1.24-linux-x86_64"],["java","zulu7-linux-x86_64"],["java","temurin8-linux-x86_64"],["java","temurin11-linux-x86_64"],["java","temurin17-linux-x86_64"],["java","temurin21-linux-x86_64"],["javascript","nodejs10-linux-x86_64"],["javascript","nodejs12-linux-x86_64"],["javascript","nodejs18-linux-x86_64"],["javascript","nodejs22-linux-x86_64"],["lua","5.3-linux-x86_64"],["lua","5.4-linux-x86_64"],["nim","1.6.20-linux-x86_64"],["nim","2.2.0-linux-x86_64"],["perl","5.30-linux-x86_64"],["perl","5.40-linux-x86_64"],["php","7.1-linux-x86_64"],["php","8.4-linux-x86_64"],["python","2.7-linux-x86_64"],["python","3.4-linux-x86_64"],["python","3.13-linux-x86_64"],["construct","python3.6-linux-x86_64"],["construct","python3.13-linux-x86_64"],["ruby","1.9-linux-x86_64"],["ruby","2.3-linux-x86_64"],["ruby","3.4-linux-x86_64"],["rust","1.85-linux-x86_64"]];D.forEach((t=>Object.freeze(t))),Object.freeze(D);var K=D,S={name:"app",components:{CiGrid:T},data:function(){return{testData:{},filterTest:"",filterTarget:"",gridColumns:[],gridMeta:{},skipPassed:!1,groupByLang:!0}},created:function(){const t=this.getPairCompareFunc(K);K.forEach((e=>this.addOneJson(e[0],e[1],t)))},computed:{groupedGridColumns:function(){return this.groupByLang?Array.from(new Set(this.gridColumns.map((t=>t.split("/")[0])))):this.gridColumns},groupedGridData:function(){if(!this.groupByLang)return Object.entries(this.testData).map((([t,e])=>({name:t,value:e})));const t=[];for(const e in this.testData){const a=this.testData[e],s={};t.push({name:e,value:s}),this.gridColumns.forEach((t=>{let e=a[t];e||(e={}),e.status||(e.status="unknown");const n=t.split("/");n.length<2&&console.error('target key "'+t+'" is invalid (does not have the format "{lang}/{variant}")');const r=n[0],i=n[1];Object.prototype.hasOwnProperty.call(s,r)||(s[r]={status:e.status,is_kst:!0,failure:!1,agg_results:[]});const l=s[r];e.status!==l.status&&(l.status="mixed"),"unknown"===e.status||e.is_kst||(l.is_kst=!1),e.failure&&(l.failure=!0);let u=l.agg_results.find((t=>t.status===e.status&&(!t.failure&&!e.failure||!(!t.failure||!e.failure)&&(t.failure.message===e.failure.message&&t.failure.trace===e.failure.trace))));u||(u={status:e.status,variant_names:[]},e.failure&&(u.failure=e.failure),l.agg_results.push(u)),u.variant_names.push(i)}))}return t},groupedGridMeta:function(){if(!this.groupByLang)return this.gridMeta;const t={};return Object.entries(this.gridMeta).forEach((([e,a])=>{const s=e.split("/")[0];if(!Object.prototype.hasOwnProperty.call(t,s))return void(t[s]={lang:a.lang,timestamp:a.timestamp,ci:{},kst:0,passed:0});const n=t[s];a.timestamp>n.timestamp&&(n.timestamp=a.timestamp)})),this.groupedGridData.forEach((e=>{Object.entries(e.value).forEach((([e,a])=>{Object.prototype.hasOwnProperty.call(t,e)&&("passed"===a.status&&t[e].passed++,a.is_kst&&t[e].kst++)}))})),t}},methods:{addOneJson:function(t,e,a){var s=t+"/"+e;console.log("Querying data for",s),fetch("https://raw.githubusercontent.com/kaitai-io/ci_artifacts/"+s+"/test_out/"+t+"/ci.json").then((t=>{if(!t.ok)throw new Error("HTTP error, status code: "+t.status);return t.json()})).then((e=>{var n=e.$meta;delete e.$meta,console.log("Got answer for "+s+", meta:",n);var r=0,i=0;for(const t in e){Object.prototype.hasOwnProperty.call(this.testData,t)||(this.testData[t]={});var l=this.testData[t];delete e[t]["name"],l[s]=e[t],"passed"===l[s].status&&r++,l[s].is_kst&&i++}this.gridColumns.push(s),this.gridColumns=this.gridColumns.sort(a),n.passed=r,n.kst=i,n.timestamp=new Date(n.timestamp),n.artifactsUrl="https://github.com/kaitai-io/ci_artifacts/tree/"+s+"/test_out/"+t,this.gridMeta[s]=n})).catch((t=>{console.warn("Cannot fetch data for "+s+". "+t)}))},getPairCompareFunc:function(t){const e=e=>t.findIndex((t=>t.join("/")===e));return(t,a)=>e(t)-e(a)}}};const B=(0,w.A)(S,[["render",f]]);var P=B;const F=(0,s.Ef)(P);F.mount("#app")}},e={};function a(s){var n=e[s];if(void 0!==n)return n.exports;var r=e[s]={exports:{}};return t[s].call(r.exports,r,r.exports,a),r.exports}a.m=t,function(){var t=[];a.O=function(e,s,n,r){if(!s){var i=1/0;for(c=0;c<t.length;c++){s=t[c][0],n=t[c][1],r=t[c][2];for(var l=!0,u=0;u<s.length;u++)(!1&r||i>=r)&&Object.keys(a.O).every((function(t){return a.O[t](s[u])}))?s.splice(u--,1):(l=!1,r<i&&(i=r));if(l){t.splice(c--,1);var o=n();void 0!==o&&(e=o)}}return e}r=r||0;for(var c=t.length;c>0&&t[c-1][2]>r;c--)t[c]=t[c-1];t[c]=[s,n,r]}}(),function(){a.d=function(t,e){for(var s in e)a.o(e,s)&&!a.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={524:0};a.O.j=function(e){return 0===t[e]};var e=function(e,s){var n,r,i=s[0],l=s[1],u=s[2],o=0;if(i.some((function(e){return 0!==t[e]}))){for(n in l)a.o(l,n)&&(a.m[n]=l[n]);if(u)var c=u(a)}for(e&&e(s);o<i.length;o++)r=i[o],a.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return a.O(c)},s=self["webpackChunkkaitai_ci_ui"]=self["webpackChunkkaitai_ci_ui"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=a.O(void 0,[504],(function(){return a(9603)}));s=a.O(s)})();
//# sourceMappingURL=app.c07aad41.js.map