webpackJsonp([20],{CfbG:function(t,e){},syx4:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("Xxa5"),i=a.n(n),l=a("exGp"),r=a.n(l),o=a("Dd8w"),d=a.n(o),s=a("NYxO"),p={data:function(){return{tableLoading:!0,handleTitle:"",handleVisible:!1,delVisible:!1,columns:[{text:"编号",dataIndex:"id",width:70},{text:"部门名称",dataIndex:"text"},{text:"排序",dataIndex:"order_num"},{text:"状态",dataIndex:"del_flag",type:"status"}],treeHandel:{text:"系统操作",width:160},deptForm:{parent_name:"",parent_id:"",name:"",order_num:"",del_flag:"0"}}},computed:d()({},Object(s.d)({deptDataList:function(t){return t.authority.deptDataList}})),mounted:function(){this.getData()},methods:d()({},Object(s.b)("authority",["getDeptList","addNewDept","editDept","removeDept","deptListById"]),{getData:function(){this.getDeptList(this)},resetForm:function(){this.deptForm={parent_name:"总部门",parent_id:0,name:"",order_num:"",del_flag:"0"}},handleAdd:function(t){this.resetForm(),this.handleTitle="添加新部门",this.handleVisible=!0,t&&(this.deptForm.parent_name=t.text,this.deptForm.parent_id=t.id)},handleEdit:function(t){var e=this;return r()(i.a.mark(function a(){var n,l;return i.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if((n=e).handleTitle="修改部门",n.handleVisible=!0,l="",!t.hasParent){a.next=11;break}return n.deptForm.deptById=t.parentId,a.next=8,n.deptListById(n);case 8:l=a.sent,a.next=12;break;case 11:l="无";case 12:n.deptForm={dept_id:t.attributes.id,parent_name:l,parent_id:t.parentId,name:t.attributes.text,order_num:t.attributes.order_num,del_flag:t.attributes.del_flag.toString()};case 13:case"end":return a.stop()}},a,e)}))()},handleDelete:function(t){this.delVisible=!0,this.deptForm.dept_id=t.attributes.id},handleConfirm:function(){var t=this;""!==t.deptForm.name?("添加新部门"===t.handleTitle&&t.addNewDept(t),"修改部门"===t.handleTitle&&t.editDept(t),t.handleVisible=!1):t.$message({type:"warning",message:"部门名称不为空"})},deleteRow:function(){this.removeDept(this),this.delVisible=!1}})},c={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"part-manage"},[a("div",{staticClass:"button-group"},[a("span",{staticClass:"route-name"},[t._v(t._s(t.$route.meta.title))]),t._v(" "),a("el-button",{attrs:{type:"warning",size:"small",icon:"el-icon-plus"},on:{click:function(e){t.handleAdd()}}},[t._v("添加")])],1),t._v(" "),a("tree-table",{directives:[{name:"loading",rawName:"v-loading",value:t.tableLoading,expression:"tableLoading"}],attrs:{columns:t.columns,"data-source":t.deptDataList,"tree-handel":t.treeHandel,"expand-place":1},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-dropdown",{attrs:{trigger:"click",placement:"bottom"}},[a("el-button",{attrs:{type:"text",size:"mini"}},[t._v("\n          操作\n          "),a("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),t._v(" "),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",[a("el-button",{attrs:{size:"mini",type:"text",icon:"el-icon-edit"},on:{click:function(a){t.handleEdit(e.row)}}},[t._v("编辑")])],1),t._v(" "),a("el-dropdown-item",[a("el-button",{attrs:{size:"mini",type:"text",icon:"el-icon-circle-plus-outline"},on:{click:function(a){t.handleAdd(e.row)}}},[t._v("添加下级")])],1),t._v(" "),a("el-dropdown-item",{attrs:{divided:""}},[a("el-button",{staticClass:"btn-text-red",attrs:{size:"mini",type:"text",icon:"el-icon-delete"},on:{click:function(a){t.handleDelete(e.row)}}},[t._v("删除")])],1)],1)],1)]}}])}),t._v(" "),a("el-dialog",{attrs:{title:t.handleTitle,visible:t.handleVisible,width:"30%",center:""},on:{"update:visible":function(e){t.handleVisible=e}}},[a("el-form",{ref:"deptForm",attrs:{model:t.deptForm,"status-icon":"","label-width":"90px",size:"small"}},[a("el-form-item",{attrs:{label:"上级部门"}},[a("el-row",[a("el-col",{attrs:{span:24}},[a("el-input",{attrs:{type:"text",disabled:""},model:{value:t.deptForm.parent_name,callback:function(e){t.$set(t.deptForm,"parent_name",e)},expression:"deptForm.parent_name"}})],1)],1)],1),t._v(" "),a("el-form-item",{attrs:{label:"部门名称"}},[a("el-row",[a("el-col",{attrs:{span:24}},[a("el-input",{attrs:{type:"text"},model:{value:t.deptForm.name,callback:function(e){t.$set(t.deptForm,"name","string"==typeof e?e.trim():e)},expression:"deptForm.name"}})],1)],1)],1),t._v(" "),a("el-form-item",{attrs:{label:"排序"}},[a("el-row",[a("el-col",{attrs:{span:24}},[a("el-input",{attrs:{type:"text"},model:{value:t.deptForm.order_num,callback:function(e){t.$set(t.deptForm,"order_num","string"==typeof e?e.trim():e)},expression:"deptForm.order_num"}})],1)],1)],1),t._v(" "),a("el-form-item",{attrs:{label:"状态"}},[a("el-row",[a("el-col",{attrs:{span:24}},[a("el-radio",{attrs:{label:"0"},model:{value:t.deptForm.del_flag,callback:function(e){t.$set(t.deptForm,"del_flag","string"==typeof e?e.trim():e)},expression:"deptForm.del_flag"}},[t._v("正常")]),t._v(" "),a("el-radio",{attrs:{label:"1"},model:{value:t.deptForm.del_flag,callback:function(e){t.$set(t.deptForm,"del_flag","string"==typeof e?e.trim():e)},expression:"deptForm.del_flag"}},[t._v("禁用")])],1)],1)],1)],1),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{size:"small",type:"primary"},on:{click:t.handleConfirm}},[t._v("确 定")]),t._v(" "),a("el-button",{attrs:{size:"small"},on:{click:function(e){t.handleVisible=!1}}},[t._v("取 消")])],1)],1),t._v(" "),a("el-dialog",{attrs:{title:"删除部门",visible:t.delVisible,width:"260px",center:""},on:{"update:visible":function(e){t.delVisible=e}}},[a("div",{staticClass:"del-dialog-cnt"},[t._v("删除不可恢复，是否确定删除？")]),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{size:"small",type:"danger"},on:{click:t.deleteRow}},[t._v("确 定")]),t._v(" "),a("el-button",{attrs:{size:"small"},on:{click:function(e){t.delVisible=!1}}},[t._v("取 消")])],1)])],1)},staticRenderFns:[]};var m=a("VU/8")(p,c,!1,function(t){a("CfbG")},"data-v-93642da4",null);e.default=m.exports}});
//# sourceMappingURL=20.f1b76967ca577b1e4a44.js.map