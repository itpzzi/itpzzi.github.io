(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{462:function(t,e,n){"use strict";n.r(e);var o={name:"small-menu",props:{title:{type:String,required:!1},color:{type:String,required:!1},closeOnNavigate:{type:Boolean,required:!1},showActionAtOpen:{type:Boolean,required:!1},showActionAtClose:{type:Boolean,required:!1,default:!0},buttonOpenIcon:{type:String,required:!1},buttonCloseIcon:{type:String,required:!1},buttonOpenText:{type:String,required:!1,default:"Open"},buttonCloseText:{type:String,required:!1,default:"Close"},buttonIcon:{type:Boolean,required:!1}},data:function(){return{value:!1}},watch:{"$route.path":function(t){this.closeOnNavigate&&(this.value=!1)}}},l=n(4),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"small-menu"},[n("v-expand-transition",{attrs:{mode:"out-in",appear:""}},[t.value?[n("div",[n("v-card",{attrs:{outlined:"",color:t.color}},[n("v-card-actions",[n("v-row",{attrs:{"no-gutters":""}},[n("v-col",{staticClass:"d-flex justify-left",attrs:{cols:"2"}},[n("v-btn",{attrs:{icon:t.buttonIcon,text:""},on:{click:function(e){t.value=!1}}},[t.buttonCloseIcon?n("v-icon",[t._v(t._s(t.buttonCloseIcon))]):t._e(),t._v(" "),n("span",{staticClass:"sr-only"},[t._v(t._s(t.buttonCloseText))])],1)],1),t._v(" "),n("v-col",{staticClass:"d-flex justify-end"},[t.showActionAtClose?n("div",{staticClass:"action"},[t._t("actions")],2):t._e()])],1)],1),t._v(" "),n("v-card-actions",{staticClass:"text-center d-flex flex-column"},[t._t("default")],2)],1)],1)]:[n("v-card",{attrs:{flat:"",color:"transparent"}},[n("v-card-actions",[n("v-row",{attrs:{"no-gutters":""}},[n("v-col",{staticClass:"d-flex justify-left",attrs:{cols:"2"}},[n("v-btn",{attrs:{icon:t.buttonIcon,text:"",outlined:""},on:{click:function(e){t.value=!0}}},[t.buttonOpenIcon?n("v-icon",[t._v(t._s(t.buttonOpenIcon))]):t._e(),t._v(" "),n("span",{staticClass:"sr-only"},[t._v(t._s(t.buttonOpenText))])],1)],1),t._v(" "),n("v-col",{staticClass:"d-flex justify-end"},[t.showActionAtOpen?n("div",{staticClass:"action"},[t._t("actions")],2):t._e()])],1)],1)],1)]],2)],1)}),[],!1,null,null,null);e.default=component.exports}}]);