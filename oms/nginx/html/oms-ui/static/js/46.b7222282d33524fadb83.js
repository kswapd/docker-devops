webpackJsonp([46],{IRab:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=r("//Fk"),i=r.n(s),o=r("woOf"),a=r.n(o),n=r("Dd8w"),l=r.n(n),c=r("NYxO"),u={name:"provider",data:function(){return{loading:!1,currentPage:1,inputRules:{zkClusterId:[{required:!0,message:"请输入集群名称",trigger:"blur"}],demotion:[{required:!0,message:"请选择降级",trigger:"blur"}]},serviceForm:{zkClusterId:"",appName:"",ip:"",serName:""},tableVal:[],serviceActive:"",popBox:!1,popIndex:"",popForm:{demotion:""},modalData:null}},computed:l()({},Object(c.d)({consumerList:function(e){return e.service.consumerList},consumerTotal:function(e){return e.service.consumerTotal},classify:function(e){return e.service.classify},clusterOption:function(e){return e.service.clusterOption}})),activated:function(){var e=this;this.clusterOption.length<=0&&this.initializeData({vm:e});var t=e.$route.params.zkClusterId;t&&(e.serviceForm=a()({},{zkClusterId:t,serName:e.$route.params.name}),e.search())},methods:l()({},Object(c.b)("service",["initializeData","serviceFind","findConsumer","serviceChangeOne","consumerStatus","serviceDemotion","reDemotion"]),{handleCurrentChange:function(e){this.currentPage=e},search:function(){this.serviceForm.zkClusterId?(this.loading=!0,this.findConsumer([this,this.serviceForm])):this.$message({message:"集群名称不能为空！",type:"warning"})},chooseBox:function(e){this.tableVal=e},stopBtn:function(e){var t=this;if(e){var r={serviceName:e.serName,zkClusterId:this.serviceForm.zkClusterId,consumerHost:e.ip};this.makeTrue("禁用").then(function(){t.consumerStatus([t,r,"disable"])})}else if(!e){var s={serviceName:[],consumerHost:[],zkClusterId:this.serviceForm.zkClusterId};this.tableVal.forEach(function(e){s.serviceName.push(e.serName),s.consumerHost.push(e.ip)}),s.serviceName=s.serviceName.toString(),s.consumerHost=s.consumerHost.toString(),this.makeTrue("禁用").then(function(){t.consumerStatus([t,s,"disable"])})}},startBtn:function(e){var t=this;if(e){var r={serviceName:e.serName,zkClusterId:this.serviceForm.zkClusterId,consumerHost:e.ip};this.makeTrue("启用").then(function(){t.consumerStatus([t,r,"enable"])})}if(!e){var s={serviceName:[],consumerHost:[],zkClusterId:this.serviceForm.zkClusterId};this.tableVal.forEach(function(e){s.serviceName.push(e.serName),s.consumerHost.push(e.ip)}),s.serviceName=s.serviceName.toString(),s.consumerHost=s.consumerHost.toString(),this.makeTrue("启动").then(function(){t.consumerStatus([t,s,"enable"])})}},demotionBtn:function(e){this.popForm.demotion="",this.popBox=!0,e&&(this.serviceActive="single",this.modalData=l()({},e.row),this.popIndex=e.$index),e||(this.popForm.demotion="",this.serviceActive="more")},demotionRecover:function(e){var t=this;if(e){var r={serName:e.row.serName,ip:e.row.ip,zkClusterId:this.serviceForm.zkClusterId};this.makeTrue("恢复降级").then(function(){t.reDemotion([t,r])})}else{var s={zkClusterId:this.serviceForm.zkClusterId,mock:this.popForm.demotion,serName:[],ip:[]};this.tableVal.forEach(function(e){s.serName.push(e.serName),s.ip.push(e.ip)}),s.serName=s.serName.toString(),s.ip=s.ip.toString(),this.makeTrue("恢复降级").then(function(){t.reDemotion([t,s])})}},serviceOk:function(){var e=this;this.$refs.popForm.validate(function(t){if(t){if("single"===e.serviceActive){var r={zkClusterId:e.serviceForm.zkClusterId,serName:e.modalData.serName,ip:e.modalData.ip,mock:e.popForm.demotion};e.serviceDemotion([e,r])}if("more"===e.serviceActive){var s={zkClusterId:e.serviceForm.zkClusterId,mock:e.popForm.demotion,serName:[],ip:[]};e.tableVal.forEach(function(e){s.serName.push(e.serName),s.ip.push(e.ip)}),s.serName=s.serName.toString(),s.ip=s.ip.toString(),e.serviceDemotion([e,s])}}})},serviceCancel:function(){this.$refs.popForm.resetFields(),this.popBox=!1},makeTrue:function(e){var t=this;return new i.a(function(r,s){t.$confirm("是否"+e,"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){r()}).catch(function(){t.$message({type:"info",message:"已取消该操作"})})})}})},m={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"consumer"},[r("div",{staticClass:"button-group"},[r("span",{staticClass:"route-name"},[e._v(e._s(e.$route.meta.title))]),e._v(" "),0!==e.tableVal.length?r("div",{staticClass:"inline-block ml-10"},[r("el-button",{attrs:{type:"danger",size:"small"},on:{click:function(t){e.stopBtn()}}},[e._v("禁用")]),e._v(" "),r("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(t){e.startBtn()}}},[e._v("启用")]),e._v(" "),r("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(t){e.demotionBtn()}}},[e._v("降级")]),e._v(" "),r("el-button",{attrs:{type:"warning",size:"small"},on:{click:function(t){e.demotionRecover()}}},[e._v("降级恢复")])],1):e._e()]),e._v(" "),r("el-form",{ref:"serviceForm",attrs:{model:e.serviceForm,rules:e.inputRules,"label-width":"92px","label-position":"right",size:"small"}},[r("el-row",{staticClass:"label-first",attrs:{gutter:20}},[r("el-col",{attrs:{xl:4,lg:6}},[r("el-form-item",{attrs:{label:e.$t("redis.redisCluster.clusterName")+"：",prop:"zkClusterId"}},[r("el-select",{staticStyle:{width:"100%"},attrs:{clearable:"",placeholder:e.$t("common.pleaseChoose")},model:{value:e.serviceForm.zkClusterId,callback:function(t){e.$set(e.serviceForm,"zkClusterId",t)},expression:"serviceForm.zkClusterId"}},e._l(e.clusterOption,function(e){return r("el-option",{key:e.id,attrs:{label:e.pkDesc,value:e.pkValue}})}))],1)],1),e._v(" "),r("el-col",{attrs:{xl:4,lg:6}},[r("el-form-item",{attrs:{label:e.$t("service.serviceList.serviceName")+"：","label-width":"68px"}},[r("el-input",{attrs:{type:"text",clearable:""},model:{value:e.serviceForm.serName,callback:function(t){e.$set(e.serviceForm,"serName","string"==typeof t?t.trim():t)},expression:"serviceForm.serName"}})],1)],1),e._v(" "),r("el-col",{attrs:{xl:4,lg:6}},[r("el-form-item",{attrs:{label:e.$t("service.serviceList.applyName")+"：","label-width":"68px"}},[r("el-input",{attrs:{type:"text",clearable:""},model:{value:e.serviceForm.appName,callback:function(t){e.$set(e.serviceForm,"appName","string"==typeof t?t.trim():t)},expression:"serviceForm.appName"}})],1)],1),e._v(" "),r("el-col",{attrs:{xl:4,lg:6}},[r("el-form-item",{attrs:{label:e.$t("service.provider.ip")+"：","label-width":"40px"}},[r("el-input",{attrs:{type:"text",clearable:""},model:{value:e.serviceForm.ip,callback:function(t){e.$set(e.serviceForm,"ip","string"==typeof t?t.trim():t)},expression:"serviceForm.ip"}})],1)],1)],1),e._v(" "),r("el-row",[r("el-col",{attrs:{span:24,align:"right"}},[r("el-form-item",{attrs:{"label-width":"0px"}},[r("el-button",{attrs:{size:"small",type:"primary",icon:"el-icon-search"},on:{click:function(t){e.search()}}},[e._v(e._s(e.$t("common.search")))])],1)],1)],1)],1),e._v(" "),r("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"multipleTable",staticStyle:{width:"100%"},attrs:{stripe:"",data:e.consumerList[e.currentPage-1]},on:{"selection-change":e.chooseBox}},[r("el-table-column",{attrs:{type:"selection",width:"55"}}),e._v(" "),r("el-table-column",{attrs:{align:"center",prop:"serName",width:"400",label:e.$t("service.serviceList.serviceName")}}),e._v(" "),r("el-table-column",{attrs:{align:"center",prop:"appName",label:e.$t("service.serviceList.applyName"),width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(e._f("filterEmpty")(t.row.appName))+"\n      ")]}}])}),e._v(" "),r("el-table-column",{attrs:{align:"center",prop:"ip",label:e.$t("service.provider.ip"),width:"150"}}),e._v(" "),r("el-table-column",{attrs:{align:"center",prop:"serStatus",label:e.$t("service.provider.status"),width:"90"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-tag",{attrs:{type:"true"===t.row.serStatus?"success":"danger"}},[e._v(e._s(e._f("serStatus")(t.row.serStatus)))])]}}])}),e._v(" "),r("el-table-column",{attrs:{align:"center",prop:"mockStatus",label:e.$t("service.provider.demotion"),width:"90"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(e._f("mockStatus")(t.row.mockStatus))+"\n      ")]}}])}),e._v(" "),r("el-table-column",{attrs:{align:"center",prop:"version",label:e.$t("redis.redisList.version"),width:"80"}}),e._v(" "),r("el-table-column",{attrs:{align:"center",prop:"serGrop",label:e.$t("service.provider.grouping"),width:"70"}}),e._v(" "),r("el-table-column",{attrs:{width:"140",label:e.$t("common.operation"),fixed:"right"},scopedSlots:e._u([{key:"default",fn:function(t){return["true"!==t.row.serStatus?r("el-button",{staticStyle:{color:"#67c23a"},attrs:{type:"text",size:"mini",icon:"fa fa-play"},on:{click:function(r){e.startBtn(t.row)}}},[e._v("启用")]):e._e(),e._v(" "),"true"===t.row.serStatus?r("el-button",{staticStyle:{color:"#FF0000"},attrs:{type:"text",size:"mini",icon:"fa fa-stop"},on:{click:function(r){e.stopBtn(t.row)}}},[e._v("禁用")]):e._e(),e._v(" "),"0"===t.row.mockStatus?r("el-button",{staticStyle:{color:"#8B7D7B"},attrs:{type:"text",size:"mini",icon:"fa fa-long-arrow-down"},on:{click:function(r){e.demotionBtn(t)}}},[e._v("降级")]):e._e(),e._v(" "),"0"!==t.row.mockStatus?r("el-button",{staticStyle:{color:"#67c23a"},attrs:{type:"text",size:"mini",icon:"fa fa-long-arrow-up"},on:{click:function(r){e.demotionRecover(t)}}},[e._v("降级恢复")]):e._e()]}}])})],1),e._v(" "),r("div",{staticClass:"block"},[r("el-pagination",{attrs:{background:"","current-page":e.currentPage,"page-size":10,layout:"total, prev, pager, next, jumper",total:e.consumerTotal},on:{"current-change":e.handleCurrentChange}})],1),e._v(" "),r("el-dialog",{attrs:{title:e.$t("service.provider.demotion"),visible:e.popBox,width:"23%",center:""},on:{close:function(t){e.serviceCancel()},"update:visible":function(t){e.popBox=t}}},[r("el-form",{ref:"popForm",attrs:{model:e.popForm,"label-width":"120px",size:"mini","status-icon":"",rules:e.inputRules}},[r("el-form-item",{attrs:{label:e.$t("service.provider.demotion")+"：",prop:"demotion"}},[r("el-select",{attrs:{clearable:"",placeholder:e.$t("common.pleaseChoose")},model:{value:e.popForm.demotion,callback:function(t){e.$set(e.popForm,"demotion",t)},expression:"popForm.demotion"}},e._l(e.classify.demotionGroup,function(e){return r("el-option",{key:e.id,attrs:{label:e.label,value:e.value}})}))],1)],1),e._v(" "),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(t){e.serviceOk()}}},[e._v(e._s(e.$t("common.ok")))]),e._v(" "),r("el-button",{attrs:{size:"small"},on:{click:function(t){e.serviceCancel()}}},[e._v(e._s(e.$t("common.cancel")))])],1)],1)],1)},staticRenderFns:[]};var p=r("VU/8")(u,m,!1,function(e){r("e/OL")},"data-v-109c1a8f",null);t.default=p.exports},"e/OL":function(e,t){}});
//# sourceMappingURL=46.b7222282d33524fadb83.js.map