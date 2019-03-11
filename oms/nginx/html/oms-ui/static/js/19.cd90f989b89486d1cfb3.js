webpackJsonp([19],{"1jRt":function(e,t){},ak3E:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=o("fZjL"),r=o.n(a),l=o("Dd8w"),i=o.n(l),s=o("NYxO"),n=o("ZlkZ"),m={data:function(){return{current:1,pageSize:10,versionForm:{},versionTitle:"添加zk版本",addVisible:!1,modalForm:{method:"Local"},inputRules:{path:[{required:!0,message:"请输入",trigger:"blur"}],name:[{required:!0,message:"请输入版本名称",trigger:"blur"}],versionNo:[{required:!0,message:"请输入版本号",trigger:"blur"}]},radio:"",percentageNum:0,editVisible:!1,editForm:{},fileValue:""}},computed:i()({},Object(s.d)({versionInfo:function(e){return e.zookeeper.versionInfo}})),created:function(){this.getTableData()},methods:i()({},Object(s.b)("zookeeper",["getZkVersionList","versionOperation","zkDownLoad"]),{getTableData:function(){var e={pageNo:this.current,limit:this.pageSize,baseParam:{moType:"Zookeeper",versionNo:this.versionForm.versionNo}};this.getZkVersionList(e)},open:function(){this.modalForm={method:"Local"},this.radio="",this.fileValue="",this.percentageNum=0,this.addVisible=!0},close:function(){this.addVisible=!1,this.$refs.modalForm.clearValidate(),this.fileValue=""},editClose:function(){this.editVisible=!1,this.$refs.editForm.clearValidate()},edit:function(e){this.editForm=i()({},e),this.editVisible=!0},saveEdit:function(){var e=this;e.$refs.editForm.validate(function(t){t&&e.versionOperation({url:n.a.coreVersionUpdate,data:e.editForm,callback:function(){e.$message({type:"success",message:"修改成功"}),e.getTableData(),e.editClose()},callbackError:function(t){e.$message({type:"error",message:t.data&&t.data.message||"修改失败"})}})})},saveAdd:function(){var e=this;e.$refs.modalForm.validate(function(t){if(t){if(!e.radio&&"Local"===e.modalForm.method)return void e.$message({type:"warning",message:"请上传软件包"});if(!e.modalForm.path&&"Remote"===e.modalForm.method)return void e.$message({type:"warning",message:"请输入软件包路径"});var o=e.modalForm.method,a=e.modalForm;a.moType="Zookeeper",a.fileType="FULL",a.creator=localStorage.getItem("userName")||"admin";var l=new FormData;r()(a).forEach(function(e){a[e]&&l.append(e,a[e])}),e.$axios({method:"post",url:n.a.coreVersionAdd,params:{method:o},data:l,onUploadProgress:function(t){t.lengthComputable&&(e.percentageNum=Math.round(t.loaded/t.total*100))}}).then(function(t){"0000"===t.code&&(e.getTableData(),e.$message.success("添加成功"),e.close())}).catch(function(t){e.percentageNum=0,e.$message.error(t.data&&t.data.message||"添加失败")})}})},handleChange:function(e){var t=this.commonFunc.getSuffixName(e.target.files[0].name);console.log(t),[".zip",".gz",".tar"].includes(t)?(this.modalForm.sourceFile=e.target.files[0],this.radio=e.target.value):this.$message({type:"warning",message:"文件类型不正确,请重新选择文件类型(.tar / .tar.gz / .zip)"})},radioChange:function(e){var t=this;this.modalForm.method=e,this.$nextTick(function(){t.$refs.inputFileRemote&&t.$refs.inputFileRemote.resetField(),t.$refs.inputFileLocal&&t.$refs.inputFileLocal.resetField(),t.fileValue="",t.radio="",t.modalForm.sourceFile="",t.modalForm.path=""})},deleteVersion:function(e){console.log(e);var t=this;t.$confirm("是否确认删除版本"+e.name+"？","删除",{confirmButtonText:t.$t("common.ok"),cancelButtonText:t.$t("common.cancel"),type:"warning",center:!0}).then(function(){t.versionOperation({url:n.a.coreVersionDelete,data:{id:e.id},callback:function(){t.$message({type:"success",message:"删除成功"}),1===t.versionInfo.list.length&&(t.current=t.current-1),t.getTableData()},callbackError:function(e){t.$message({type:"error",message:e.data&&e.data.message||"删除失败"})}})}).catch(function(){})},download:function(e){var t=this;t.conmmonMethods.makePopBox(t,"下载").then(function(){t.downPath=e.path,t.zkDownLoad(t)})},handleCurrentChange:function(e){this.current=e,this.getTableData()}})},c={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"zk-main"},[o("div",{staticClass:"button-group"},[o("span",{staticClass:"route-name"},[e._v(e._s(e.$route.meta.title))]),e._v(" "),o("el-button",{attrs:{icon:"el-icon-plus",type:"warning",size:"small"},on:{click:function(t){e.open()}}},[e._v(e._s(e.$t("common.add")))])],1),e._v(" "),o("el-form",{attrs:{"label-width":"70px","label-position":"right",size:"small"}},[o("el-row",{staticClass:"label-first",attrs:{gutter:20}},[o("el-col",{attrs:{lg:6,xl:4}},[o("el-form-item",{attrs:{label:"版本号："}},[o("el-input",{model:{value:e.versionForm.versionNo,callback:function(t){e.$set(e.versionForm,"versionNo","string"==typeof t?t.trim():t)},expression:"versionForm.versionNo"}})],1)],1),e._v(" "),o("el-col",{attrs:{lg:6,xl:4}},[o("el-button",{attrs:{type:"primary",icon:"el-icon-search",size:"small"},on:{click:e.getTableData}},[e._v(e._s(e.$t("common.search"))+"\n        ")])],1)],1)],1),e._v(" "),o("el-table",{attrs:{data:e.versionInfo.list,stripe:""}},[o("el-table-column",{attrs:{prop:"name",align:"center",label:"版本名称",width:"150"}}),e._v(" "),o("el-table-column",{attrs:{prop:"versionNo",align:"center",label:"版本号",width:"150"}}),e._v(" "),o("el-table-column",{attrs:{prop:"path",align:"center",label:"保存路径",width:"300","show-overflow-tooltip":""}}),e._v(" "),o("el-table-column",{attrs:{prop:"createTime",align:"center",label:"创建日期",width:"150"}}),e._v(" "),o("el-table-column",{attrs:{prop:"remark",align:"center",label:"描述"}}),e._v(" "),o("el-table-column",{attrs:{width:"180",align:"center",label:e.$t("common.operation")},scopedSlots:e._u([{key:"default",fn:function(t){return[o("el-button",{attrs:{type:"text",size:"mini",icon:"el-icon-edit"},on:{click:function(o){e.edit(t.row)}}},[e._v(e._s(e.$t("common.modify")))]),e._v(" "),o("el-button",{attrs:{type:"text",size:"mini",icon:"el-icon-download"},on:{click:function(o){e.download(t.row)}}},[e._v("\n          "+e._s(e.$t("common.download"))+"\n        ")]),e._v(" "),o("el-button",{staticClass:"btn-text-red",attrs:{type:"text",size:"mini",icon:"el-icon-delete"},on:{click:function(o){e.deleteVersion(t.row)}}},[e._v("\n          "+e._s(e.$t("common.delete"))+"\n        ")])]}}])})],1),e._v(" "),o("el-pagination",{attrs:{background:"","current-page":e.current,"page-size":e.pageSize,layout:"total, prev, pager, next, jumper",total:e.versionInfo.total},on:{"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.current=t}}}),e._v(" "),o("el-dialog",{attrs:{title:e.versionTitle,visible:e.addVisible,width:"40%",center:""},on:{"update:visible":function(t){e.addVisible=t},close:e.close}},[o("el-form",{ref:"modalForm",attrs:{model:e.modalForm,rules:e.inputRules,"status-icon":"","label-width":"100px",size:"small"}},[o("el-row",{attrs:{gutter:10}},[o("el-col",{attrs:{span:24}},[o("el-form-item",{attrs:{label:"软件包来源",prop:"radio"}},[o("el-radio-group",{on:{change:e.radioChange},model:{value:e.modalForm.method,callback:function(t){e.$set(e.modalForm,"method",t)},expression:"modalForm.method"}},[o("el-radio",{attrs:{label:"Local"}},[e._v(e._s(e.$t("common.local")))]),e._v(" "),o("el-radio",{attrs:{label:"Remote"}},[e._v(e._s(e.$t("common.server")))])],1)],1)],1)],1),e._v(" "),o("el-row",{directives:[{name:"show",rawName:"v-show",value:"Local"===e.modalForm.method,expression:"modalForm.method === 'Local'"}],attrs:{gutter:10}},[o("el-col",{attrs:{span:19}},[o("el-form-item",{ref:"inputFileLocal",staticClass:"is-required",attrs:{label:"软件包路径",prop:"localPath"}},[o("el-input",{attrs:{placeholder:"请上传本地软件包"},model:{value:e.radio,callback:function(t){e.radio=t},expression:"radio"}})],1)],1),e._v(" "),o("el-col",{attrs:{span:4}},[o("input",{staticClass:"input-file",attrs:{type:"file",accept:".zip, .tar, .gz"},domProps:{value:e.fileValue},on:{change:function(t){e.handleChange(t)}}}),e._v(" "),o("el-button",{attrs:{type:"primary",size:"mini"}},[e._v(e._s(e.$t("common.viewFile")))])],1)],1),e._v(" "),o("el-row",{directives:[{name:"show",rawName:"v-show",value:"Remote"===e.modalForm.method,expression:"modalForm.method === 'Remote'"}],attrs:{gutter:10}},[o("el-col",{attrs:{span:23}},[o("el-form-item",{ref:"inputFileRemote",staticClass:"is-required",attrs:{label:"软件包路径",prop:"remotePath"}},[o("el-input",{attrs:{placeholder:"请输入路径(例 http://10.86.1.10:8080/zk/zk-1.0.tar"},model:{value:e.modalForm.path,callback:function(t){e.$set(e.modalForm,"path","string"==typeof t?t.trim():t)},expression:"modalForm.path"}})],1)],1)],1),e._v(" "),o("el-row",{attrs:{gutter:10}},[o("el-col",{attrs:{span:23}},[o("el-form-item",{attrs:{label:e.$t("coreApp.tableVersion.versionName"),prop:"name"}},[o("el-input",{attrs:{type:"text",maxlength:"50",placeholder:"请输入1-50位字符"},model:{value:e.modalForm.name,callback:function(t){e.$set(e.modalForm,"name","string"==typeof t?t.trim():t)},expression:"modalForm.name"}})],1)],1)],1),e._v(" "),o("el-row",{attrs:{gutter:10}},[o("el-col",{attrs:{span:23}},[o("el-form-item",{attrs:{label:e.$t("coreApp.tableVersion.versionNum"),prop:"versionNo"}},[o("el-input",{attrs:{type:"text",maxlength:"20",placeholder:"请输入1-20位字符"},model:{value:e.modalForm.versionNo,callback:function(t){e.$set(e.modalForm,"versionNo","string"==typeof t?t.trim():t)},expression:"modalForm.versionNo"}})],1)],1)],1),e._v(" "),o("el-row",{attrs:{gutter:10}},[o("el-col",{attrs:{span:23}},[o("el-form-item",{attrs:{label:"版本描述",prop:"remark"}},[o("el-input",{attrs:{type:"textarea",maxlength:"100",placeholder:"请输入1-100位字符"},model:{value:e.modalForm.remark,callback:function(t){e.$set(e.modalForm,"remark","string"==typeof t?t.trim():t)},expression:"modalForm.remark"}})],1)],1)],1),e._v(" "),o("el-row",{attrs:{gutter:10}},[o("el-col",{attrs:{span:23}},[o("el-form-item",[o("el-progress",{attrs:{"text-inside":!0,"stroke-width":18,percentage:e.percentageNum,status:"success"}})],1)],1)],1)],1),e._v(" "),o("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(t){e.saveAdd()}}},[e._v(e._s(e.$t("common.ok")))]),e._v(" "),o("el-button",{attrs:{size:"small"},on:{click:e.close}},[e._v(e._s(e.$t("common.cancel")))])],1)],1),e._v(" "),o("el-dialog",{attrs:{title:"修改zk版本",visible:e.editVisible,width:"40%",center:""},on:{"update:visible":function(t){e.editVisible=t},close:e.editClose}},[o("el-form",{ref:"editForm",attrs:{model:e.editForm,rules:e.inputRules,"label-width":"100px",size:"small"}},[o("el-form-item",{attrs:{label:e.$t("coreApp.tableVersion.versionName"),prop:"name"}},[o("el-row",{attrs:{gutter:10}},[o("el-col",{attrs:{span:23}},[o("el-input",{attrs:{maxlength:"50"},model:{value:e.editForm.name,callback:function(t){e.$set(e.editForm,"name","string"==typeof t?t.trim():t)},expression:"editForm.name"}})],1)],1)],1),e._v(" "),o("el-form-item",{attrs:{label:e.$t("coreApp.tableVersion.versionNum")}},[o("el-row",{attrs:{gutter:10}},[o("el-col",{attrs:{span:23}},[o("el-input",{attrs:{disabled:""},model:{value:e.editForm.versionNo,callback:function(t){e.$set(e.editForm,"versionNo","string"==typeof t?t.trim():t)},expression:"editForm.versionNo"}})],1)],1)],1),e._v(" "),o("el-form-item",{attrs:{label:e.$t("coreApp.tableVersion.type")}},[o("el-row",{attrs:{gutter:10}},[o("el-col",{attrs:{span:23}},[o("el-input",{attrs:{value:"FULL"===e.editForm.fileType?"全量":"增量",disabled:""}})],1)],1)],1),e._v(" "),o("el-form-item",{attrs:{label:e.$t("coreApp.tableVersion.createTime")}},[o("el-row",{attrs:{gutter:10}},[o("el-col",{attrs:{span:23}},[o("el-input",{attrs:{disabled:""},model:{value:e.editForm.createTime,callback:function(t){e.$set(e.editForm,"createTime","string"==typeof t?t.trim():t)},expression:"editForm.createTime"}})],1)],1)],1),e._v(" "),o("el-form-item",{attrs:{label:e.$t("coreApp.tableVersion.createPerson")}},[o("el-row",{attrs:{gutter:10}},[o("el-col",{attrs:{span:23}},[o("el-input",{attrs:{disabled:""},model:{value:e.editForm.creator,callback:function(t){e.$set(e.editForm,"creator","string"==typeof t?t.trim():t)},expression:"editForm.creator"}})],1)],1)],1),e._v(" "),o("el-form-item",{attrs:{label:e.$t("coreApp.tableVersion.path")}},[o("el-row",{attrs:{gutter:10}},[o("el-col",{attrs:{span:23}},[o("el-input",{attrs:{disabled:""},model:{value:e.editForm.path,callback:function(t){e.$set(e.editForm,"path","string"==typeof t?t.trim():t)},expression:"editForm.path"}})],1)],1)],1),e._v(" "),o("el-form-item",{attrs:{label:e.$t("coreApp.tableVersion.desc")}},[o("el-row",{attrs:{gutter:10}},[o("el-col",{attrs:{span:23}},[o("el-input",{attrs:{maxlength:"100",type:"textarea"},model:{value:e.editForm.remark,callback:function(t){e.$set(e.editForm,"remark","string"==typeof t?t.trim():t)},expression:"editForm.remark"}})],1)],1)],1)],1),e._v(" "),o("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(t){e.saveEdit()}}},[e._v(e._s(e.$t("common.ok")))]),e._v(" "),o("el-button",{attrs:{size:"small"},on:{click:e.editClose}},[e._v(e._s(e.$t("common.cancel")))])],1)],1)],1)},staticRenderFns:[]};var d=o("VU/8")(m,c,!1,function(e){o("1jRt")},"data-v-964a34de",null);t.default=d.exports}});
//# sourceMappingURL=19.cd90f989b89486d1cfb3.js.map