webpackJsonp([3],{K4R9:function(e,t,a){a("NA/8"),e.exports=a("FeBl").Number.isNaN},MICi:function(e,t,a){e.exports={default:a("K4R9"),__esModule:!0}},"NA/8":function(e,t,a){var i=a("kM2E");i(i.S,"Number",{isNaN:function(e){return e!=e}})},ZpJy:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("mvHQ"),n=a.n(i),r=a("fZjL"),l=a.n(r),s=a("MICi"),o=a.n(s),c=a("woOf"),u=a.n(c),m=a("TQvf"),p=a.n(m),d=a("4ru3"),f=a("4CZg"),g=a("kt4z"),k=a("ZlkZ"),v={name:"findZipkin",data:function(){return{that:this,loading:!1,inputRules:{lookback:[{required:!0,message:"请选择时间期限",trigger:"blur"}],startTs:[{required:!0,message:"请选择开始日期",trigger:"blur"}],endTs:[{required:!0,message:"请选择结束日期",trigger:"blur"}],limit:[{required:!0,message:"请输入数量",trigger:"blur"},{pattern:/^\+?[1-9][0-9]*$/,message:"数量必须为数字值"}],minDuration:[{required:!1,message:"请输入",trigger:"change"},{pattern:/^\+?[1-9][0-9]*$/,message:"数量必须为数字值"}]},zipkinForm:{serviceName:"all",spanName:"all",lookback:"custom",minDuration:"",limit:10,sort:"Newest-First",startTs:(new Date).getTime()-864e5,endTs:(new Date).getTime(),annotationQuery:"",seqNo:""},classify:{serviceName:[],spanName:[],sort:[{value:"Service-Percentage:Longest-First",label:"最大百分比优先"},{value:"Service-Percentage:Shortest-First",label:"最小百分比优先"},{value:"Longest-First",label:"耗时最长"},{value:"Shortest-First",label:"耗时最短"},{value:"Newest-First",label:"时间顺序"},{value:"Oldest-First",label:"时间倒序"}]},searchTrace:"",zipkinData:[],zipkinTable:[],zipkinService:"",dialogVisible:!1}},computed:{ApiQuery:function(){var e=u()({},this.zipkinForm);return e.startTs=new Date(e.startTs).getTime(),e.endTs=new Date(e.endTs).getTime(),"custom"!==e.lookback&&(delete e.startTs,delete e.endTs),e.startTs&&(e.endTs>e.startTs&&(e.lookback=String(e.endTs-e.startTs)),delete e.startTs),"custom"===e.lookback&&delete e.lookback,"all"===e.serviceName&&delete e.serviceName,"all"===e.spanName&&delete e.spanName,e.minDuration&&!o()(Number(e.minDuration))?e.minDuration=1e3*Number(e.minDuration):delete e.minDuration,""!==e.annotationQuery&&(e.annotationQuery="SOURCE_TYPE="+e.annotationQuery),""!==e.seqNo&&(e.seqNo="SEQ_NO="+e.seqNo),e.annotationQuery.length>12&&e.seqNo.length>7?e.annotationQuery=e.annotationQuery+" and "+e.seqNo:e.annotationQuery=e.annotationQuery+e.seqNo,delete e.seqNo,l()(e).forEach(function(t){""===e[t]&&delete e[t]}),delete e.sort,e},stringZip:function(){return n()(this.zipkinData)}},watch:{"zipkinForm.serviceName":function(e,t){this.classify.spanName=this.getData(k.a.zipkinSpans,{serviceName:this.zipkinForm.serviceName})},"zipkinForm.sort":function(e){this.sortHandle(this.zipkinTable,e)}},mounted:function(){this.classify.serviceName=this.getData(k.a.zipkinServices,{}),this.classify.spanName=this.getData(k.a.zipkinSpans,{serviceName:this.zipkinForm.serviceName})},methods:{getData:function(e,t){var a=[{value:"all",label:"all"}];return this.$axios.get(e,{params:t}).then(function(e){try{e.forEach(function(e){a.push({value:e,label:e})})}catch(e){console.log(e)}}),a},searchHandle:function(){var e=this;e.$refs.zipkinForm.validate(function(t){t?e.searchAxios(e.ApiQuery,e.zipkinForm.serviceName):e.$message({message:"格式不正确！",type:"warning"})})},searchAxios:function(e,t){var a=this;this.loading=!0,this.$axios.get(k.a.zipkintraces,{params:e}).then(function(e){if(!e.length>0||void 0===e||null===e)return a.zipkinData=[],a.zipkinTable=[],a.loading=!1,a.$message({type:"info",message:"暂无数据"}),!1;var i=e;a.zipkinData=JSON.parse(n()(i));var r=i.map(function(e){var t=e.map(d.a.convert),a=d.a.mergeById(t),i=f.a.correctForClockSkew(a);return Object(g.g)(i,["SEQ_NO","SOURCE_TYPE"])});a.zipkinService=t,a.zipkinTable=Object(g.f)(t,r),a.sortHandle(a.zipkinTable,a.zipkinForm.sort),a.loading=!1}).catch(function(e){a.zipkinData=[],a.zipkinTable=[],a.loading=!1,a.$message.error(e.data.message||e.message||e)})},sortHandle:function(e,t){var a={"Service-Percentage:Longest-First":function(e,t){return t.percentage-e.percentage},"Service-Percentage:Shortest-First":function(e,t){return e.percentage-t.percentage},"Longest-First":function(e,t){return t.duration-e.duration},"Shortest-First":function(e,t){return e.duration-t.duration},"Newest-First":function(e,t){return t.timestamp-e.timestamp},"Oldest-First":function(e,t){return e.timestamp-t.timestamp}};a.hasOwnProperty(t)&&e.sort(a[t])},checkHandle:function(e){if(!e.length>0||void 0===e||null===e)return this.$message({type:"warning",message:"不能为空"}),!1;this.$router.push({name:"detailZipkin",query:{traceId:e},params:{id:e}})},handleJson:function(){this.dialogVisible=!0},copy:function(){var e=this,t=new p.a(".tag-read");t.on("success",function(a){e.$message({type:"success",message:"复制成功"}),t.destroy()}),t.on("error",function(a){e.$message({type:"warning",message:"浏览器不支持复制"}),t.destroy()})}},filters:{traceParameter:function(e,t){if(e)return e[t]?e[t]:""},zipkinTimeFilter:function(e,t){return t.$moment(e).fromNow()},combine:function(e){return e.name+" x"+e.count+" "+e.max+"ms"},zipkinNameFilter:function(e){if(e&&e.length>0){var t=e.lastIndexOf(".");return-1!==t?e.slice(0,t):e}return e}}},b={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"findZipkin"},[a("div",{staticClass:"button-group"},[a("span",{staticClass:"route-name"},[e._v(e._s(e.$route.meta.title))])]),e._v(" "),a("el-form",{ref:"zipkinForm",attrs:{model:e.zipkinForm,"label-width":"110px","label-position":"right",size:"small",rules:e.inputRules}},[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{xl:4,lg:6}},[a("el-form-item",{attrs:{label:e.$t("zipkin.spanName")+"：","label-width":"68px"}},[a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:e.$t("common.pleaseChoose")},model:{value:e.zipkinForm.serviceName,callback:function(t){e.$set(e.zipkinForm,"serviceName",t)},expression:"zipkinForm.serviceName"}},e._l(e.classify.serviceName,function(e){return a("el-option",{key:e.id,attrs:{label:e.label,value:e.value}})}))],1)],1),e._v(" "),a("el-col",{attrs:{xl:4,lg:6}},[a("el-form-item",{attrs:{label:"方法名：","label-width":"68px"}},[a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:e.$t("common.pleaseChoose")},model:{value:e.zipkinForm.spanName,callback:function(t){e.$set(e.zipkinForm,"spanName",t)},expression:"zipkinForm.spanName"}},e._l(e.classify.spanName,function(e){return a("el-option",{key:e.id,attrs:{label:e.label,value:e.value}})}))],1)],1),e._v(" "),a("el-col",{attrs:{xl:4,lg:6}},[a("el-form-item",{attrs:{label:e.$t("common.startDate")+"：","label-width":"92px",prop:"startTs"}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"datetime",placeholder:e.$t("common.selectDate")},model:{value:e.zipkinForm.startTs,callback:function(t){e.$set(e.zipkinForm,"startTs",t)},expression:"zipkinForm.startTs"}})],1)],1),e._v(" "),a("el-col",{attrs:{xl:4,lg:6}},[a("el-form-item",{attrs:{label:e.$t("common.endDate")+"：","label-width":"92px",prop:"endTs"}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"datetime"},model:{value:e.zipkinForm.endTs,callback:function(t){e.$set(e.zipkinForm,"endTs",t)},expression:"zipkinForm.endTs"}})],1)],1),e._v(" "),a("el-col",{attrs:{xl:4,lg:6}},[a("el-form-item",{attrs:{label:e.$t("zipkin.limit")+"：","label-width":"92px",prop:"limit"}},[a("el-input",{attrs:{type:"text",clearable:"",maxlength:"25"},model:{value:e.zipkinForm.limit,callback:function(t){e.$set(e.zipkinForm,"limit","string"==typeof t?t.trim():t)},expression:"zipkinForm.limit"}})],1)],1),e._v(" "),a("el-col",{attrs:{xl:4,lg:6}},[a("el-form-item",{attrs:{label:e.$t("zipkin.duration")+"(ms)：",prop:"minDuration"}},[a("el-input",{attrs:{type:"text",clearable:"",placeholder:"(ms)>=",maxlength:"25"},model:{value:e.zipkinForm.minDuration,callback:function(t){e.$set(e.zipkinForm,"minDuration","string"==typeof t?t.trim():t)},expression:"zipkinForm.minDuration"}})],1)],1),e._v(" "),a("el-col",{attrs:{xl:4,lg:6}},[a("el-form-item",{attrs:{label:"渠道号：","label-width":"82px"}},[a("el-input",{attrs:{type:"text",clearable:"",placeholder:"eg: MT",maxlength:"50"},model:{value:e.zipkinForm.annotationQuery,callback:function(t){e.$set(e.zipkinForm,"annotationQuery","string"==typeof t?t.trim():t)},expression:"zipkinForm.annotationQuery"}})],1)],1),e._v(" "),a("el-col",{attrs:{xl:4,lg:6}},[a("el-form-item",{attrs:{label:"交易流水号：","label-width":"98px"}},[a("el-input",{attrs:{type:"text",clearable:"",placeholder:"eg: 2",maxlength:"50"},model:{value:e.zipkinForm.seqNo,callback:function(t){e.$set(e.zipkinForm,"seqNo","string"==typeof t?t.trim():t)},expression:"zipkinForm.seqNo"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:24,align:"right"}},[a("el-form-item",{staticStyle:{"min-width":"176px"},attrs:{"label-width":"0px"}},[a("el-button",{attrs:{icon:"fa fa-eye",type:"primary",size:"small"},on:{click:e.handleJson}},[e._v("JSON")]),e._v(" "),a("el-button",{attrs:{icon:"el-icon-search",type:"primary",size:"small"},on:{click:function(t){e.searchHandle("search")}}},[e._v(e._s(e.$t("common.search")))])],1)],1)],1),e._v(" "),a("el-row",{staticClass:"label-first",attrs:{gutter:20}},[a("el-col",{attrs:{xl:4,lg:6}},[a("el-form-item",{attrs:{label:e.$t("zipkin.sort")+"：","label-width":"56px"}},[a("el-select",{staticStyle:{width:"100%"},model:{value:e.zipkinForm.sort,callback:function(t){e.$set(e.zipkinForm,"sort",t)},expression:"zipkinForm.sort"}},e._l(e.classify.sort,function(e){return a("el-option",{key:e.id,attrs:{label:e.label,value:e.value}})}))],1)],1),e._v(" "),a("el-col",{attrs:{xl:4,lg:6}},[a("el-form-item",{attrs:{label:"","label-width":"0px"}},[a("el-input",{staticClass:"input-with-select",attrs:{placeholder:"精准搜索 trace",clearable:"",maxlength:"25",size:"small"},model:{value:e.searchTrace,callback:function(t){e.searchTrace="string"==typeof t?t.trim():t},expression:"searchTrace"}},[a("el-button",{attrs:{slot:"append",icon:"el-icon-arrow-right"},on:{click:function(t){e.checkHandle(e.searchTrace)}},slot:"append"})],1)],1)],1)],1)],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"multipleTable",staticStyle:{width:"100%"},attrs:{stripe:"",data:e.zipkinTable,size:"small"}},[a("el-table-column",{attrs:{align:"center",width:"70",prop:"traceSeqNo",label:"渠道号"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n                   "+e._s(e._f("traceParameter")(t.row.traceSeqNo,"SOURCE_TYPE"))+"\n               ")]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",width:"100",prop:"traceSeqNo",label:"交易流水号"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n                   "+e._s(e._f("traceParameter")(t.row.traceSeqNo,"SEQ_NO"))+"\n               ")]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",width:"240","show-overflow-tooltip":"",prop:"name",label:"服务名"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n                   "+e._s(t.row.name)+"\n               ")]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",width:"80",prop:"durationStr",label:e.$t("zipkin.duration")}}),e._v(" "),a("el-table-column",{attrs:{align:"center",width:"80",label:e.$t("zipkin.number")},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n                   "+e._s(t.row.totalSpans+" spans")+"\n               ")]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",width:"100",label:e.$t("zipkin.servicePercentage")},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n                   "+e._s(e.zipkinService+" "+t.row.servicePercentage+" %")+"\n               ")]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center","min-width":"150",label:e.$t("zipkin.serviceDurations")},scopedSlots:e._u([{key:"default",fn:function(t){return e._l(t.row.serviceDurations,function(t){return a("el-tag",{key:t.id,staticClass:"zipList"},[e._v(e._s(e._f("combine")(t)))])})}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center","min-width":"90",label:"状态"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-tag",{attrs:{type:t.row.traceSeqNo.isTraceStatus?"success":"danger"}},[e._v(e._s(t.row.traceSeqNo.isTraceStatus?"成功":"失败"))])]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",width:"140",label:e.$t("zipkin.lookback")},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e._f("zipkinTimeFilter")(t.row.startTs,e.that)))])]}}])}),e._v(" "),a("el-table-column",{attrs:{width:"70",align:"center",label:e.$t("common.operation"),fixed:"right"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text",size:"mini",icon:"fa fa-sign-in"},on:{click:function(a){e.checkHandle(t.row.traceId)}}},[e._v(e._s(e.$t("common.view")))])]}}])})],1),e._v(" "),a("el-dialog",{attrs:{visible:e.dialogVisible,width:"60%"},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("span",{staticClass:"dialog-title",attrs:{slot:"title"},slot:"title"},[a("span",[e._v(e._s(e.$t("zipkin.searchResults")))])]),e._v(" "),a("el-button",{staticClass:"tag-read",attrs:{type:"primary",size:"small","data-clipboard-text":e.stringZip},on:{click:e.copy}},[e._v("复制")]),e._v(" "),a("pre",{staticClass:"log-box",domProps:{innerHTML:e._s(e.zipkinData)}})],1)],1)},staticRenderFns:[]};var h=a("VU/8")(v,b,!1,function(e){a("xWwm")},"data-v-35d48844",null);t.default=h.exports},xWwm:function(e,t){}});
//# sourceMappingURL=3.aed109acbe858cc62c83.js.map