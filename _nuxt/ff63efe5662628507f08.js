(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{294:function(t,e,n){var content=n(453);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(27).default)("b0d10ce6",content,!0,{sourceMap:!1})},451:function(t,e,n){t.exports=n.p+"img/55e140e.svg"},452:function(t,e,n){"use strict";var c=n(294);n.n(c).a},453:function(t,e,n){(e=n(26)(!1)).push([t.i,".contact-smartphone-launcher .v-card[data-v-49c3f61e]{overflow:hidden}.parent[data-v-49c3f61e]{position:relative}.child-1[data-v-49c3f61e]{position:relative;z-index:1}.child-1[data-v-49c3f61e],.child-2[data-v-49c3f61e]{width:100%;height:100%}.child-2[data-v-49c3f61e]{position:absolute;z-index:2;top:0;left:0}.launcher[data-v-49c3f61e]{position:relative}",""]),t.exports=e},462:function(t,e,n){"use strict";n.r(e);n(29),n(12),n(9),n(5),n(21);var c=n(8),r=(n(41),n(15)),o=n(144),l=n(451),d=n.n(l);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h={name:"contact-smartphone-launcher",components:{SocialButtons:o.a},filters:{nameInitials:function(t){return t.split(" ").map((function(t){return t[0].toUpperCase()})).join("")}},computed:f(f({},Object(r.b)({user:"getUser"})),{},{img_style:function(){if(this.$vuetify.breakpoint.smAndDown)return{transform:"scale(1.3)"}}}),data:function(){return{background_contact_hand:d.a}}},m=(n(452),n(4)),component=Object(m.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"contact-smartphone-launcher parent"},[n("v-card",{staticClass:"child-1 fill-height d-flex align-center justify-center",attrs:{outlined:"",flat:""}},[n("v-img",{style:t.img_style,attrs:{"aspect-ratio":1,src:t.background_contact_hand}})],1),t._v(" "),n("v-card",{staticClass:"child-2 fill-height d-flex align-center justify-center",attrs:{outlined:"",color:"transparent"}},[n("v-card",{attrs:{outlined:"",flat:"",color:"transparent",width:"200"}},[n("v-card-text",{staticClass:"d-flex flex-column justify-center align-center"},[n("div",{staticClass:"text-center"},[n("v-avatar",{attrs:{color:"secondary mt-5"}},[n("div",{staticClass:"headline"},[t._v(t._s(t._f("nameInitials")(t.user.full_name)))])]),t._v(" "),n("div",{staticClass:"title mt-2"},[t._v(t._s(t.user.full_name))]),t._v(" "),n("div",{staticClass:"body-2 mt-n1"},[t._v(t._s(t.$t("pages.contact.cellphone.label")))])],1),t._v(" "),n("div",{staticClass:"launcher"},[n("SocialButtons",[n("v-btn",{attrs:{icon:"",disabled:""}},[n("v-icon",[t._v("mdi-atom")])],1),t._v(" "),n("v-btn",{attrs:{icon:"",disabled:""}},[n("v-icon",[t._v("mdi-music")])],1),t._v(" "),n("v-btn",{attrs:{icon:"",disabled:""}},[n("v-icon",[t._v("mdi-brain")])],1),t._v(" "),n("v-btn",{attrs:{icon:"",disabled:""}},[n("v-icon",[t._v("mdi-brush")])],1),t._v(" "),n("v-btn",{attrs:{icon:"",disabled:""}},[n("v-icon",[t._v("mdi-cat")])],1),t._v(" "),n("v-btn",{attrs:{icon:"",disabled:""}},[n("v-icon",[t._v("mdi-code-tags")])],1),t._v(" "),n("v-btn",{attrs:{icon:"",disabled:""}},[n("v-icon",[t._v("mdi-coffee")])],1)],1)],1)])],1)],1)],1)}),[],!1,null,"49c3f61e",null);e.default=component.exports}}]);