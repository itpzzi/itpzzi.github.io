(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{243:function(t,e,r){var content=r(256);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(27).default)("1d9fd07b",content,!0,{sourceMap:!1})},244:function(t,e,r){var content=r(258);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(27).default)("7af6f245",content,!0,{sourceMap:!1})},255:function(t,e,r){"use strict";var n=r(243);r.n(n).a},256:function(t,e,r){(e=r(26)(!1)).push([t.i,'.marquee[data-v-7b2cd867]{display:inline-block;white-space:nowrap;position:relative}.marquee-animation[data-v-7b2cd867]:before{content:"";position:absolute;top:0;right:0;width:100%;height:100%;z-index:1}.marquee-animation[data-v-7b2cd867]{-webkit-animation:marquee-data-v-7b2cd867 10s linear 1 both;animation:marquee-data-v-7b2cd867 10s linear 1 both;overflow-x:hidden}@-webkit-keyframes marquee-data-v-7b2cd867{0%{transform:translateX(20%);width:200%}50%{transform:translateX(-20%);width:200%}to{transform:translateX(0);width:100%}}@keyframes marquee-data-v-7b2cd867{0%{transform:translateX(20%);width:200%}50%{transform:translateX(-20%);width:200%}to{transform:translateX(0);width:100%}}',""]),t.exports=e},257:function(t,e,r){"use strict";var n=r(244);r.n(n).a},258:function(t,e,r){(e=r(26)(!1)).push([t.i,".v-card__title[data-v-275691c0]{word-break:break-word}",""]),t.exports=e},259:function(t,e,r){"use strict";r(28);var n=r(3),o=r(271),l=r(111),c=r.n(l),d={name:"marquee",mounted:function(){this.tagsMarquee()},beforeDestroy:function(){window.removeEventListener("resize",this.tagsMarquee)},methods:{tagsMarquee:function(){window.addEventListener("resize",this.tagsMarquee),this.$parent.$el.offsetWidth<this.$el.offsetWidth&&(this.$el.firstChild.classList.add("marquee-animation"),this.$el.parentNode.style.overflowX="hidden")}}},v=(r(255),r(4)),m={name:"project-attributes",components:{Marquee:Object(v.a)(d,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"marquee"},[e("div",{staticClass:"marquee-content"},[this._t("default")],2)])}),[],!1,null,"7b2cd867",null).exports},props:{attributes:{type:Object,required:!0}},computed:{text_color:function(){return this.$vuetify.theme.isDark?this.colors.dark_muted:this.colors.vibrant},background_color:function(){return this.$vuetify.theme.isDark?this.colors.dark_vibrant:this.colors.light_vibrant},classes:function(){this.$vuetify.theme.isDark;return{"d-flex":!0,"flex-column":!0,"fill-height":!0}}},created:function(){this.getPaletteFromThumbnail()},data:function(){return{colors:{vibrant:null,light_vibrant:null,dark_muted:null,dark_vibrant:null,muted:null,light_muted:null},background_projects:c.a}},methods:{getPaletteFromThumbnail:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.from(t.attributes.thumbnail).getPalette();case 2:r=e.sent,t.colors.vibrant=r.Vibrant.getHex(),t.colors.light_vibrant=r.LightVibrant.getHex(),t.colors.dark_muted=r.DarkMuted.getHex(),t.colors.dark_vibrant=r.DarkVibrant.getHex(),t.colors.muted=r.Muted.getHex(),t.colors.light_muted=r.LightMuted.getHex();case 9:case"end":return e.stop()}}),e)})))()}}},h=(r(257),Object(v.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"project-attributes"},[r("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var n=e.hover;return[r("v-card",{attrs:{outlined:"",color:t.background_color}},[r("v-card-actions",[t.attributes.date?r("v-chip",{attrs:{outlined:""}},[t._v(t._s(t.$d(new Date(t.attributes.date))))]):t._e(),t._v(" "),r("v-spacer"),t._v(" "),r("v-btn",{attrs:{text:"",title:t.$t("pages.projects.project_resume.details.title",{title:t.attributes.title}),to:{path:"/"+t.attributes.slug},exact:""}},[t._v(t._s(t.$t("pages.projects.project_resume.details.label")))]),t._v(" "),t.attributes.live_demo?r("v-btn",{attrs:{text:"",href:t.attributes.live_demo,target:"_blank",title:t.$t("pages.projects.project_resume.live_demo.title")}},[t._v(t._s(t.$t("pages.projects.project_resume.live_demo.label")))]):t._e()],1),t._v(" "),r("v-img",{attrs:{"aspect-ratio":1,src:t.attributes.thumbnail||"",gradient:"to top, "+t.background_color+" "+(n?100:0)+"%, transparent 100%"}},[r("div",{class:t.classes},[r("v-spacer"),t._v(" "),t.attributes.title?r("v-card-title",{staticClass:"headline font-weight-bold"},[t._v(t._s(t.attributes.title))]):t._e(),t._v(" "),t.attributes.resume&&n?r("v-card-text",[t._v(t._s(t.attributes.resume))]):t._e()],1)]),t._v(" "),r("v-card-actions",[r("Marquee",t._l(t.attributes.tags,(function(e,n){return r("v-chip",{key:n,staticClass:"mr-2",attrs:{"x-small":"",outlined:""}},[t._v(t._s(e))])})),1)],1)],1)]}}])})],1)}),[],!1,null,"275691c0",null));e.a=h.exports},296:function(t,e,r){"use strict";var n=r(110),o=r(259),l={name:"publication",components:{SectionHeading:n.a,ProjectAttributes:o.a},props:{heading:{type:String,required:!0},items:{type:Array,required:!0},emptyMessage:{type:String,required:!0}}},c=r(4),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"publication margin-from-top"},[r("SectionHeading",{attrs:{value:t.heading}}),t._v(" "),t.items.length?[r("v-container",[r("v-row",[t._l(t.items,(function(t,e){return r("v-col",{key:e,attrs:{cols:"12",md:"4"}},[r("ProjectAttributes",{attrs:{attributes:t}})],1)})),t._v(" "),r("CustomDivider")],2)],1)]:[r("v-card",{attrs:{outlined:""}},[r("v-card-text",[r("div",{staticClass:"display-1"},[t._v(t._s(t.emptyMessage))])])],1)]],2)}),[],!1,null,null,null);e.a=component.exports},463:function(t,e,r){"use strict";r.r(e);r(28);var n=r(3),o={name:"blog-page",components:{Publications:r(296).a},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o,l,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.app,n=t.error,o=r.i18n,l=r.$loadDataMarkdownIndex,e.next=4,l("blog",o.locale,"pt",n);case 4:return c=e.sent,e.abrupt("return",c);case 6:case"end":return e.stop()}}),e)})))()},head:function(){return{title:this.$t("app.nav.links.blog.title")}}},l=r(4),component=Object(l.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"blog-page"},[e("Publications",{attrs:{heading:this.$t("pages.blog.name"),items:this.items,"empty-message":this.$t("pages.blog.empty")}})],1)}),[],!1,null,null,null);e.default=component.exports}}]);