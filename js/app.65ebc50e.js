(function(t){function e(e){for(var s,i,o=e[0],l=e[1],c=e[2],d=0,f=[];d<o.length;d++)i=o[d],r[i]&&f.push(r[i][0]),r[i]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);u&&u(e);while(f.length)f.shift()();return n.push.apply(n,c||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],s=!0,o=1;o<a.length;o++){var l=a[o];0!==r[l]&&(s=!1)}s&&(n.splice(e--,1),t=i(i.s=a[0]))}return t}var s={},r={app:0},n=[];function i(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=s,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(a,s,function(e){return t[e]}.bind(null,s));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"2b41":function(t,e,a){"use strict";var s=a("f4cc"),r=a.n(s);r.a},5495:function(t,e,a){"use strict";var s=a("f19e"),r=a.n(s);r.a},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var s=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid",attrs:{id:"app"}},[a("h1",[t._v("Kaitai Struct CI")]),a("form",{attrs:{id:"search"}},[a("div",{staticClass:"form-row"},[a("div",{staticClass:"form-group col-md-4"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.filterTest,expression:"filterTest"}],staticClass:"form-control",attrs:{name:"filterTest",placeholder:"Search test..."},domProps:{value:t.filterTest},on:{input:function(e){e.target.composing||(t.filterTest=e.target.value)}}})]),a("div",{staticClass:"form-group col-md-4"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.filterTarget,expression:"filterTarget"}],staticClass:"form-control",attrs:{name:"filterTarget",placeholder:"Search target..."},domProps:{value:t.filterTarget},on:{input:function(e){e.target.composing||(t.filterTarget=e.target.value)}}})]),a("div",{staticClass:"form-check col-md-4"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.skipPassed,expression:"skipPassed"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"only-failures-checkbox"},domProps:{checked:Array.isArray(t.skipPassed)?t._i(t.skipPassed,null)>-1:t.skipPassed},on:{change:function(e){var a=t.skipPassed,s=e.target,r=!!s.checked;if(Array.isArray(a)){var n=null,i=t._i(a,n);s.checked?i<0&&(t.skipPassed=a.concat([n])):i>-1&&(t.skipPassed=a.slice(0,i).concat(a.slice(i+1)))}else t.skipPassed=r}}}),a("label",{staticClass:"form-check-label",attrs:{for:"only-failures-checkbox"}},[t._v("Only failures")])])])]),a("ci-grid",{attrs:{data:t.gridData,columns:t.gridColumns,meta:t.gridMeta,"filter-key":t.filterTest,"filter-columns-key":t.filterTarget,"skip-passed":t.skipPassed}})],1)},n=[],i=(a("55dd"),a("7f7f"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",{staticClass:"table"},[a("thead",[a("tr",[a("th",[t._v("Test \\ Target")]),t._l(t.filteredColumns,function(e){return a("th",{class:{active:t.sortKey==e},on:{click:function(a){return t.sortBy(e)}}},[t._v("\n        "+t._s(e.replace("/"," "))+"\n        "),a("span",{staticClass:"arrow",class:t.sortOrders[e]>0?"asc":"dsc"})])})],2),a("tr",[a("th",[t._v("Last update")]),t._l(t.filteredColumns,function(e){return a("th",[t._v("\n        "+t._s(t._f("humanTime")(t.meta[e].timestamp))+"\n        "),t.meta[e].ci?a("a",{staticClass:"ext-link",attrs:{href:t.meta[e].ci.url}},[t._v("Job")]):t._e(),a("a",{staticClass:"ext-link",attrs:{href:t.meta[e].artifactsUrl}},[t._v("Artifacts")])])})],2),a("tr",[a("th",[t._v("Rating")]),t._l(t.filteredColumns,function(e){return a("th",[t._v("\n        "+t._s(t.passRating[e])+"%\n      ")])})],2)]),a("tbody",t._l(t.filteredData,function(e){return a("tr",{key:e.name},[a("td",[t._v(t._s(e.name))]),t._l(t.filteredColumns,function(t){return a("ci-cell",{key:e.name+"/"+t,attrs:{data:e[t]||{}}})})],2)}),0),a("tfoot",[a("tr",[a("th",[t._v("KST adoption")]),t._l(t.filteredColumns,function(e){return a("th",{key:e},[t._v("\n        "+t._s(t.kstRating[e])+"%\n      ")])})],2)])])}),o=[],l=a("a4bb"),c=a.n(l),u=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("td",{class:t.cssClassObject,on:{click:function(e){t.details=!t.details}}},[t._v("\n  "+t._s(t.data.status||"unknown")+"\n  "),t.details&&t.data.failure?a("div",{staticClass:"add-info"},[a("p",[t._v("\n      Message: "+t._s(t.data.failure.message)+"\n    ")]),t.data.failure.trace?a("pre",[t._v("      "+t._s(t.data.failure.trace.join("\n"))+"\n    ")]):t._e()]):t._e()])},d=[],f={name:"CiCell",props:{data:Object},data:function(){return{details:!1}},computed:{cssClassObject:function(){return{"passed-kst":"passed"==this.data.status&&this.data.is_kst,passed:"passed"==this.data.status&&!this.data.is_kst,failed:"failed"==this.data.status,leak:"leak"==this.data.status,"no-spec":void 0===this.data.status}}}},p=f,m=(a("5495"),a("2877")),h=Object(m["a"])(p,u,d,!1,null,"53f29fea",null),v=h.exports,_={name:"CiGrid",components:{CiCell:v},props:{data:Array,columns:Array,meta:Object,filterKey:String,filterColumnsKey:String,skipPassed:Boolean},data:function(){var t={};return this.columns.forEach(function(e){t[e]=1}),{sortKey:"name",sortOrders:t}},computed:{filteredData:function(){var t=this.sortKey,e=this.filterKey&&this.filterKey.toLowerCase(),a=this.sortOrders[t]||1,s=this.data;if(e&&(s=s.filter(function(t){return c()(t).some(function(a){return String(t[a]).toLowerCase().indexOf(e)>-1})})),this.skipPassed){var r=this.filteredColumns;s=s.filter(function(t){return!r.every(function(e){return"name"==e||t[e]&&"passed"===t[e].status})})}return t&&(s=s.slice().sort(function(e,s){return e=e[t],s=s[t],(e===s?0:e>s?1:-1)*a})),s},filteredColumns:function(){if(this.filterColumnsKey&&""!=this.filterColumnsKey){var t=this.filterColumnsKey.toLowerCase();return this.columns.filter(function(e){return e.toLowerCase().indexOf(t)>-1})}return this.columns},passRating:function(){var t={};for(var e in this.meta)t[e]=Math.round(this.meta[e].passed/this.data.length*100*10)/10;return t},kstRating:function(){var t={};for(var e in this.meta)t[e]=Math.round(this.meta[e].kst/this.data.length*100*10)/10;return t}},filters:{capitalize:function(t){return t.charAt(0).toUpperCase()+t.slice(1)},humanTime:function(t){var e=(new Date-t)/1e3;return e<60?"just now":e<3600?Math.round(e/60)+"m ago":e<86400?Math.round(e/3600)+"h ago":Math.round(e/86400)+"d ago"}},methods:{sortBy:function(t){this.sortKey=t,this.sortOrders[t]=-1*this.sortOrders[t]}}},g=_,k=(a("2b41"),Object(m["a"])(g,i,o,!1,null,"0d993f46",null)),y=k.exports,C={name:"app",components:{CiGrid:y},data:function(){return{testData:{},filterTest:"",filterTarget:"",gridColumns:[],gridData:[],gridMeta:{},skipPassed:!1}},created:function(){var t=[["cpp_stl_98","gcc4.8_linux"],["cpp_stl_98","clang3.5_linux"],["cpp_stl_98","clang7.3_osx"],["cpp_stl_98","msvc141_windows_x64"],["cpp_stl_11","gcc4.8_linux"],["cpp_stl_11","clang3.5_linux"],["cpp_stl_11","clang7.3_osx"],["cpp_stl_11","msvc141_windows_x64"],["csharp","mono5.18.0"],["csharp","net45_windows"],["graphviz","2.36"],["go","1.10"],["java","openjdk7"],["java","oraclejdk8"],["javascript","nodejs4"],["javascript","nodejs7"],["lua","5.3"],["perl","5.24"],["php","7.1"],["python","2.7"],["python","3.6"],["ruby","1.9"],["ruby","2.3"]];for(var e in t)this.addOneJson(t[e][0],t[e][1])},methods:{addOneJson:function(t,e){var a=this,s=t+"/"+e;console.log("Querying data for",t,e,s),fetch("https://raw.githubusercontent.com/kaitai-io/ci_artifacts/"+s+"/test_out/"+t+"/ci.json").then(function(t){return t.json()}).then(function(e){var r=e.$meta;delete e["$meta"],console.log("Got answer for",s,", meta:",r);var n=0,i=0;for(var o in e){var l=a.testData[o]||{name:o};delete e[o]["name"],l[s]=e[o],"passed"===l[s].status&&n++,l[s].is_kst&&i++,a.testData[o]=l}for(var o in a.gridColumns.push(s),a.gridColumns=a.gridColumns.sort(),a.gridData=[],a.testData)a.gridData.push(a.testData[o]);r.passed=n,r.kst=i,r.timestamp=new Date(r.timestamp),r.artifactsUrl="https://github.com/kaitai-io/ci_artifacts/tree/"+s+"/test_out/"+t,a.gridMeta[s]=r})}}},b=C,w=Object(m["a"])(b,r,n,!1,null,null,null),j=w.exports;s["a"].config.productionTip=!1,new s["a"]({render:function(t){return t(j)}}).$mount("#app")},f19e:function(t,e,a){},f4cc:function(t,e,a){}});
//# sourceMappingURL=app.65ebc50e.js.map