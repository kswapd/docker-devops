webpackJsonp([17],{RC2V:function(e,t){},V2ja:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=l("Dd8w"),r=l.n(a),o=l("NYxO"),i=l("ZlkZ"),n={data:function(){return{handleTitle:"",handleVisible:!1,delVisible:!1,tableLoading:!0,currentPage:1,totalCount:10,pageSize:10,defaultProps:{children:"children",label:"text"},roleTreeData:[],roleForm:{role_name:"",remark:"",menu_ids:[]}}},computed:r()({},Object(o.d)({roleMenuTree:function(e){return e.authority.roleMenuTree},roleDataList:function(e){return e.authority.roleDataList}})),mounted:function(){this.getData(),this.getRoleMenuTree(this)},methods:r()({},Object(o.b)("authority",["getRoleList","getRoleMenuTree","addRole","editRole","removeRole"]),{resetForm:function(){this.roleForm={role_name:"",remark:"",menu_ids:[]}},getData:function(){this.getRoleList(this)},handleSizeChange:function(e){this.pageSize=e,this.getData()},handleCurrentChange:function(e){this.currentPage=e,this.getData()},handleAdd:function(){this.resetForm(),this.handleTitle="添加角色",this.handleVisible=!0},handleEdit:function(e){var t=this,l=this;l.roleForm={role_id:e.role_id,role_name:e.role_name,remark:e.remark,menu_ids:e.menu_ids},l.handleTitle="修改角色";var a=i.a.getRoleMenu.replace("{roleId}",e.role_id);l.$axios({method:"get",url:a}).then(function(e){var a=[];e.data.forEach(function(e){if(-1!==e){var t=e+"";a.push(t)}}),t.roleTreeData=a,l.handleVisible=!0})},handleDelete:function(e){this.roleForm.role_id=e.role_id,this.delVisible=!0},handleConfirm:function(){var e=this;""!==e.roleForm.role_name?(e.roleForm.menu_ids=this.$refs.menuTree.getCheckedKeys().concat(this.$refs.menuTree.getHalfCheckedKeys()).map(Number),"添加角色"===e.handleTitle&&e.addRole(e),"修改角色"===e.handleTitle&&e.editRole(e),e.handleVisible=!1):e.$message({type:"warning",message:"角色名不为空"})},deleteRow:function(){this.removeRole(this),this.delVisible=!1}})},s={render:function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"role-manage"},[l("div",{staticClass:"button-group"},[l("span",{staticClass:"route-name"},[e._v(e._s(e.$route.meta.title))]),e._v(" "),l("el-button",{attrs:{type:"warning",size:"small",icon:"el-icon-plus"},on:{click:e.handleAdd}},[e._v("添加")])],1),e._v(" "),l("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.tableLoading,expression:"tableLoading"}],staticStyle:{width:"100%"},attrs:{data:e.roleDataList,stripe:""}},[l("el-table-column",{attrs:{prop:"role_id",label:"序号",width:"70"}}),e._v(" "),l("el-table-column",{attrs:{prop:"role_name",label:"角色名"}}),e._v(" "),l("el-table-column",{attrs:{prop:"remark",label:"备注"}}),e._v(" "),l("el-table-column",{attrs:{label:"操作",align:"center",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-button",{attrs:{size:"mini",type:"text",icon:"el-icon-edit"},on:{click:function(l){e.handleEdit(t.row)}}},[e._v("编辑")]),e._v(" "),l("el-button",{attrs:{size:"mini",type:"text",icon:"el-icon-delete"},on:{click:function(l){e.handleDelete(t.row)}}},[e._v("删除")])]}}])})],1),e._v(" "),l("el-pagination",{attrs:{background:"","current-page":e.currentPage,"page-size":10,layout:"total, prev, pager, next, jumper",total:e.totalCount},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}}),e._v(" "),l("el-dialog",{attrs:{title:e.handleTitle,visible:e.handleVisible,width:"30%",center:""},on:{"update:visible":function(t){e.handleVisible=t}}},[l("el-form",{ref:"roleForm",attrs:{model:e.roleForm,"status-icon":"","label-width":"90px",size:"small"}},[l("el-form-item",{attrs:{label:"角色名"}},[l("el-row",[l("el-col",{attrs:{span:24}},[l("el-input",{attrs:{maxlength:"50",type:"text"},model:{value:e.roleForm.role_name,callback:function(t){e.$set(e.roleForm,"role_name","string"==typeof t?t.trim():t)},expression:"roleForm.role_name"}})],1)],1)],1),e._v(" "),l("el-form-item",{attrs:{label:"备注"}},[l("el-row",[l("el-col",{attrs:{span:24}},[l("el-input",{attrs:{maxlength:"100",type:"text"},model:{value:e.roleForm.remark,callback:function(t){e.$set(e.roleForm,"remark","string"==typeof t?t.trim():t)},expression:"roleForm.remark"}})],1)],1)],1),e._v(" "),l("el-form-item",{attrs:{label:"菜单权限"}},[l("el-row",[l("el-col",{attrs:{span:24}},[e.handleVisible?l("div",{key:"roleTreeForm",staticClass:"tree-container"},[l("el-tree",{ref:"menuTree",staticClass:"tree-body",attrs:{"show-checkbox":"","default-expand-all":!0,data:e.roleMenuTree,"node-key":"id","default-checked-keys":e.roleTreeData,props:e.defaultProps}})],1):e._e()])],1)],1)],1),e._v(" "),l("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[l("el-button",{attrs:{size:"small",type:"primary"},on:{click:e.handleConfirm}},[e._v("确 定")]),e._v(" "),l("el-button",{attrs:{size:"small"},on:{click:function(t){e.handleVisible=!1}}},[e._v("取 消")])],1)],1),e._v(" "),l("el-dialog",{attrs:{title:"删除角色",visible:e.delVisible,width:"260px",center:""},on:{"update:visible":function(t){e.delVisible=t}}},[l("div",{staticClass:"del-dialog-cnt"},[e._v("删除不可恢复，是否确定删除？")]),e._v(" "),l("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[l("el-button",{attrs:{size:"small",type:"danger"},on:{click:e.deleteRow}},[e._v("确 定")]),e._v(" "),l("el-button",{attrs:{size:"small"},on:{click:function(t){e.delVisible=!1}}},[e._v("取 消")])],1)])],1)},staticRenderFns:[]};var d=l("VU/8")(n,s,!1,function(e){l("RC2V")},"data-v-a42626f0",null);t.default=d.exports}});
//# sourceMappingURL=17.6de81dd6440f8f542a77.js.map