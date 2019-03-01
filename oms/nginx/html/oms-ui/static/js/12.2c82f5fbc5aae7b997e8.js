webpackJsonp([12],{fI2v:function(e,t){},fTof:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=o("mvHQ"),r=o.n(a),s=o("woOf"),l=o.n(s),i=o("Dd8w"),n=o.n(i),c=o("ZlkZ"),u=o("NYxO"),p={name:"wholeRouter",data:function(){return{currentPage:1,totalPage:0,loading:!1,inputRules:{zkClusterId:[{required:!0,message:"请输入集群名称",trigger:"blur"}],type:[{required:!0,message:"请输入类型",trigger:"blur"}],condition:[{required:!0,message:"请输入条件",trigger:"blur"}]},serviceForm:{},dataBox:[],routintList:[],popBox:!1,popForm:{}}},computed:n()({},Object(u.d)({clusterOption:function(e){return e.service.clusterOption}})),activated:function(){if(this.clusterOption.length<=0){this.initializeData({vm:this})}},methods:n()({},Object(u.b)("service",["initializeData"]),{handleCurrentChange:function(e){this.currentPage=e,this.routintList=this.dataBox[e-1]},search:function(){var e=this,t=l()({},this.serviceForm).zkClusterId;if(!t)return this.$message({message:"值不能为空",type:"warning"}),!1;this.loading=!0,this.$axios({method:"get",url:c.a.serviceSFRouter,params:{zkClusterId:t}}).then(function(t){t.data.forEach(function(t){t.zkClusterId||(t.zkClusterIdBackup=e.serviceForm.zkClusterId)});var o=JSON.parse(r()(t.data));e.totalPage=o.length,e.dataBox=e.conmmonMethods.arrayHandle(o),e.routintList=e.dataBox[e.currentPage-1],e.loading=!1}).catch(function(t){e.loading=!1,e.totalPage=0,e.dataBox=[],e.currentPage=1,e.routintList=[],e.$message.error(t.data.message||t.message||t)})},routingAdd:function(){this.popForm={},this.popBox=!0},popOk:function(){var e=this,t=l()({},this.popForm),o=t.zkClusterId,a=t.type,r=t.condition;o&&a&&r?(this.loading=!0,this.$axios({method:"post",url:c.a.serviceSFAdd,params:{zkClusterId:o},data:{type:a,condition:r}}).then(function(o){e.popBox=!1,e.$message({message:"新增成功",type:"success"}),e.serviceForm.zkClusterId=t.zkClusterId,e.search()}).catch(function(t){e.loading=!1,e.$message.error(t.data.message||t.message||t)})):this.$message({showClose:!0,message:"带*不能为空",type:"warning"})},cancel:function(){this.$refs.popForm.resetFields(),this.popBox=!1},routingDelete:function(e){var t=this,o=l()({},e.row);o.zkClusterId||(o.zkClusterId=e.row.zkClusterIdBackup);var a={type:o.type,condition:o.condition};this.conmmonMethods.makePopBox(this,"删除").then(function(){t.loading=!0,t.$axios({method:"post",url:c.a.serviceSFDelete,params:{zkClusterId:o.zkClusterId},data:a}).then(function(e){t.$message({message:"删除成功",type:"success"}),t.search()}).catch(function(e){t.loading=!1,t.$message.error(e.data.message||e.message||e)})})}})},d={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"wholeRouter"},[o("div",{staticClass:"button-group"},[o("span",{staticClass:"route-name"},[e._v(e._s(e.$route.meta.title))]),e._v(" "),o("el-button",{attrs:{icon:"el-icon-plus",size:"small",type:"warning"},on:{click:function(t){e.routingAdd()}}},[e._v(e._s(e.$t("common.add")))])],1),e._v(" "),o("el-form",{ref:"serviceForm",attrs:{model:e.serviceForm,"label-width":"94px","label-position":"right",size:"small",rules:e.inputRules}},[o("el-row",{staticClass:"label-first",attrs:{gutter:20}},[o("el-col",{attrs:{xl:4,lg:6}},[o("el-form-item",{attrs:{label:e.$t("redis.redisCluster.clusterName")+"：",prop:"zkClusterId"}},[o("el-select",{staticStyle:{width:"100%"},attrs:{clearable:"",placeholder:e.$t("common.pleaseChoose")},model:{value:e.serviceForm.zkClusterId,callback:function(t){e.$set(e.serviceForm,"zkClusterId",t)},expression:"serviceForm.zkClusterId"}},e._l(e.clusterOption,function(e){return o("el-option",{key:e.id,attrs:{label:e.pkDesc,value:e.pkValue}})}))],1)],1),e._v(" "),o("el-col",{attrs:{xl:4,lg:6}},[o("el-button",{attrs:{size:"small",type:"primary",icon:"el-icon-search"},on:{click:function(t){e.search()}}},[e._v(e._s(e.$t("common.search")))])],1)],1)],1),e._v(" "),o("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"multipleTable",staticStyle:{width:"100%"},attrs:{stripe:"",data:e.routintList}},[o("el-table-column",{attrs:{align:"center",prop:"type",label:e.$t("common.type")}}),e._v(" "),o("el-table-column",{attrs:{align:"center",prop:"condition",label:e.$t("common.condition")}}),e._v(" "),o("el-table-column",{attrs:{width:"80",label:e.$t("common.operation"),fixed:"right",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("el-button",{attrs:{type:"text",size:"mini",icon:"fa fa-pencil-square-o"},on:{click:function(o){e.routingDelete(t)}}},[e._v("删除")])]}}])})],1),e._v(" "),o("div",{staticClass:"block"},[o("el-pagination",{attrs:{"current-page":e.currentPage,"page-size":10,layout:"total, prev, pager, next, jumper",background:"",total:e.totalPage},on:{"current-change":e.handleCurrentChange}})],1),e._v(" "),o("el-dialog",{attrs:{title:"添加全局路由",visible:e.popBox,width:"40%",center:""},on:{close:function(t){e.cancel()},"update:visible":function(t){e.popBox=t}}},[o("el-form",{ref:"popForm",attrs:{model:e.popForm,"label-width":"120px",size:"small","status-icon":"",rules:e.inputRules}},[o("el-row",[o("el-col",{attrs:{span:24}},[o("el-form-item",{attrs:{label:e.$t("redis.redisCluster.clusterName")+"：",prop:"zkClusterId"}},[o("el-select",{staticStyle:{width:"100%"},attrs:{clearable:"",placeholder:e.$t("common.pleaseChoose")},model:{value:e.popForm.zkClusterId,callback:function(t){e.$set(e.popForm,"zkClusterId",t)},expression:"popForm.zkClusterId"}},e._l(e.clusterOption,function(e){return o("el-option",{key:e.id,attrs:{label:e.pkDesc,value:e.pkValue}})}))],1)],1)],1),e._v(" "),o("el-row",[o("el-col",{attrs:{span:24}},[o("el-form-item",{attrs:{label:e.$t("common.type")+"：",prop:"type"}},[o("el-input",{attrs:{type:"text",placeholder:"请输入1-50位字符",maxlength:"50",clearable:""},model:{value:e.popForm.type,callback:function(t){e.$set(e.popForm,"type","string"==typeof t?t.trim():t)},expression:"popForm.type"}})],1)],1)],1),e._v(" "),o("el-row",[o("el-col",{attrs:{span:24}},[o("el-form-item",{attrs:{label:e.$t("common.condition")+"：",prop:"condition"}},[o("el-input",{attrs:{type:"text",placeholder:"请输入1-50位字符",maxlength:"50",clearable:""},model:{value:e.popForm.condition,callback:function(t){e.$set(e.popForm,"condition","string"==typeof t?t.trim():t)},expression:"popForm.condition"}})],1)],1)],1)],1),e._v(" "),o("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{attrs:{loading:e.loading,type:"primary",size:"small"},on:{click:function(t){e.popOk()}}},[e._v(e._s(e.$t("common.ok")))]),e._v(" "),o("el-button",{attrs:{size:"small"},on:{click:function(t){e.cancel()}}},[e._v(e._s(e.$t("common.cancel")))])],1)],1)],1)},staticRenderFns:[]};var m=o("VU/8")(p,d,!1,function(e){o("fI2v")},"data-v-e1fdab32",null);t.default=m.exports}});
//# sourceMappingURL=12.2c82f5fbc5aae7b997e8.js.map