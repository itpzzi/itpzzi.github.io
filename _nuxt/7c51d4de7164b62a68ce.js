(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{244:function(t,e,r){var content=r(257);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(29).default)("1d9fd07b",content,!0,{sourceMap:!1})},245:function(t,e,r){var content=r(259);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(29).default)("7af6f245",content,!0,{sourceMap:!1})},256:function(t,e,r){"use strict";var n=r(244);r.n(n).a},257:function(t,e,r){(e=r(28)(!1)).push([t.i,'.marquee[data-v-7b2cd867]{display:inline-block;white-space:nowrap;position:relative}.marquee-animation[data-v-7b2cd867]:before{content:"";position:absolute;top:0;right:0;width:100%;height:100%;z-index:1}.marquee-animation[data-v-7b2cd867]{-webkit-animation:marquee-data-v-7b2cd867 10s linear 1 both;animation:marquee-data-v-7b2cd867 10s linear 1 both;overflow-x:hidden}@-webkit-keyframes marquee-data-v-7b2cd867{0%{transform:translateX(20%);width:200%}50%{transform:translateX(-20%);width:200%}to{transform:translateX(0);width:100%}}@keyframes marquee-data-v-7b2cd867{0%{transform:translateX(20%);width:200%}50%{transform:translateX(-20%);width:200%}to{transform:translateX(0);width:100%}}',""]),t.exports=e},258:function(t,e,r){"use strict";var n=r(245);r.n(n).a},259:function(t,e,r){(e=r(28)(!1)).push([t.i,".v-card__title[data-v-275691c0]{word-break:break-word}",""]),t.exports=e},260:function(t,e,r){"use strict";r(24);var n=r(3),o=r(272),c=r(111),l=r.n(c),d={name:"marquee",mounted:function(){this.tagsMarquee()},beforeDestroy:function(){window.removeEventListener("resize",this.tagsMarquee)},methods:{tagsMarquee:function(){window.addEventListener("resize",this.tagsMarquee),this.$parent.$el.offsetWidth<this.$el.offsetWidth&&(this.$el.firstChild.classList.add("marquee-animation"),this.$el.parentNode.style.overflowX="hidden")}}},v=(r(256),r(4)),h={name:"project-attributes",components:{Marquee:Object(v.a)(d,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"marquee"},[e("div",{staticClass:"marquee-content"},[this._t("default")],2)])}),[],!1,null,"7b2cd867",null).exports},props:{attributes:{type:Object,required:!0}},computed:{text_color:function(){return this.$vuetify.theme.isDark?this.colors.dark_muted:this.colors.vibrant},background_color:function(){return this.$vuetify.theme.isDark?this.colors.dark_vibrant:this.colors.light_vibrant},classes:function(){this.$vuetify.theme.isDark;return{"d-flex":!0,"flex-column":!0,"fill-height":!0}}},created:function(){this.getPaletteFromThumbnail()},data:function(){return{colors:{vibrant:null,light_vibrant:null,dark_muted:null,dark_vibrant:null,muted:null,light_muted:null},background_projects:l.a}},methods:{getPaletteFromThumbnail:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.from(t.attributes.thumbnail).getPalette();case 2:r=e.sent,t.colors.vibrant=r.Vibrant.getHex(),t.colors.light_vibrant=r.LightVibrant.getHex(),t.colors.dark_muted=r.DarkMuted.getHex(),t.colors.dark_vibrant=r.DarkVibrant.getHex(),t.colors.muted=r.Muted.getHex(),t.colors.light_muted=r.LightMuted.getHex();case 9:case"end":return e.stop()}}),e)})))()}}},f=(r(258),Object(v.a)(h,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"project-attributes"},[r("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var n=e.hover;return[r("v-card",{attrs:{outlined:"",color:t.background_color}},[r("v-card-actions",[t.attributes.date?r("v-chip",{attrs:{outlined:""}},[t._v(t._s(t.$d(new Date(t.attributes.date))))]):t._e(),t._v(" "),r("v-spacer"),t._v(" "),r("v-btn",{attrs:{text:"",title:t.$t("pages.projects.project_resume.details.title",{title:t.attributes.title}),to:{path:"/"+t.attributes.slug},exact:""}},[t._v(t._s(t.$t("pages.projects.project_resume.details.label")))]),t._v(" "),t.attributes.live_demo?r("v-btn",{attrs:{text:"",href:t.attributes.live_demo,target:"_blank",title:t.$t("pages.projects.project_resume.live_demo.title")}},[t._v(t._s(t.$t("pages.projects.project_resume.live_demo.label")))]):t._e()],1),t._v(" "),r("v-img",{attrs:{"aspect-ratio":1,src:t.attributes.thumbnail||"",gradient:"to top, "+t.background_color+" "+(n?100:0)+"%, transparent 100%"}},[r("div",{class:t.classes},[r("v-spacer"),t._v(" "),t.attributes.title?r("v-card-title",{staticClass:"headline font-weight-bold"},[t._v(t._s(t.attributes.title))]):t._e(),t._v(" "),t.attributes.resume&&n?r("v-card-text",[t._v(t._s(t.attributes.resume))]):t._e()],1)]),t._v(" "),r("v-card-actions",[r("Marquee",t._l(t.attributes.tags,(function(e,n){return r("v-chip",{key:n,staticClass:"mr-2",attrs:{"x-small":"",outlined:""}},[t._v(t._s(e))])})),1)],1)],1)]}}])})],1)}),[],!1,null,"275691c0",null));e.a=f.exports},289:function(t,e,r){var content=r(448);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(29).default)("266709f8",content,!0,{sourceMap:!1})},290:function(t,e,r){var content=r(450);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(29).default)("4c8807d4",content,!0,{sourceMap:!1})},447:function(t,e,r){"use strict";var n=r(289);r.n(n).a},448:function(t,e,r){(e=r(28)(!1)).push([t.i,".user-card[data-v-2936ab41]{position:relative;z-index:1}",""]),t.exports=e},449:function(t,e,r){"use strict";var n=r(290);r.n(n).a},450:function(t,e,r){(e=r(28)(!1)).push([t.i,"section[data-v-79938b66]{min-height:100vh}",""]),t.exports=e},454:function(t,e,r){"use strict";r.r(e);r(25),r(10),r(9),r(5),r(18),r(24);var n=r(3),o=r(7),c=r(110),l=r(154),d={name:"recent-projects",components:{ProjectAttributes:r(260).a},props:{projects:{type:Array,required:!0}}},v=r(4),h=Object(v.a)(d,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"recent-projects"},[this._t("title"),this._v(" "),e("v-container",[e("v-row",this._l(this.projects,(function(t,r){return e("v-col",{key:r,attrs:{cols:"12",md:"4"}},[e("ProjectAttributes",{attrs:{attributes:t}})],1)})),1)],1)],2)}),[],!1,null,null,null).exports;r(41);function f(t,e){for(var i=0;i<e.length;i++){var r=e[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var m=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.el=e,this.chars="!<>-_\\/[]{}—=+*^?#________",this.update=this.update.bind(this)}var e,r,n;return e=t,(r=[{key:"setText",value:function(t){var e=this,r=this.el.innerText,n=Math.max(r.length,t.length),o=new Promise((function(t){return e.resolve=t}));this.queue=[];for(var i=0;i<n;i++){var c=r[i]||"",l=t[i]||"",d=Math.floor(40*Math.random()),v=d+Math.floor(40*Math.random());this.queue.push({from:c,to:l,start:d,end:v})}return cancelAnimationFrame(this.frameRequest),this.frame=0,this.update(),o}},{key:"update",value:function(){for(var output="",t=0,i=0,e=this.queue.length;i<e;i++){var r=this.queue[i],n=r.from,o=r.to,c=r.start,l=r.end,d=r.char;this.frame>=l?(t++,output+=o):this.frame>=c?((!d||Math.random()<.28)&&(d=this.randomChar(),this.queue[i].char=d),output+='<span class="dud">'.concat(d,"</span>")):output+=n}this.el.innerHTML=output,t===this.queue.length?this.resolve():(this.frameRequest=requestAnimationFrame(this.update),this.frame++)}},{key:"randomChar",value:function(){return this.chars[Math.floor(Math.random()*this.chars.length)]}}])&&f(e.prototype,r),n&&f(e,n),t}(),_={name:"user-quote",mounted:function(){this.typing()},methods:{typing:function(){var t=this.$refs.user_quote;if(t){var e=t.textContent.split(/\.|\,/),r=new m(t),n=0;!function t(){r.setText(e[n]).then((function(){setTimeout(t,4e3)})),n=(n+1)%e.length}()}}}},x=Object(v.a)(_,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"user-quote"},[e("h1",{ref:"user_quote",staticClass:"display-1 font-weight-bold",domProps:{innerHTML:this._s(this.$t("pages.index.user_presentation.bio"))}})])}),[],!1,null,null,null).exports,j={name:"user-card",props:{user:{type:Object,required:!1}}},w=(r(447),Object(v.a)(j,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"user-card"},[r("v-card",{attrs:{outlined:""}},[r("v-list-item",{attrs:{"two-line":""}},[r("v-list-item-avatar",[r("v-avatar",[r("v-img",{attrs:{src:t.user.profile_img}})],1)],1),t._v(" "),r("v-list-item-content",[r("v-list-item-title",{staticClass:"title"},[t._v(t._s(t.user.full_name))]),t._v(" "),r("v-list-item-subtitle",{staticClass:"body-2",domProps:{innerHTML:t._s(t.$t("pages.index.user_presentation.professions.web_developer"))}})],1)],1),t._v(" "),r("v-card-text",[t._t("default")],2),t._v(" "),r("v-card-actions",[r("v-btn",{attrs:{text:"",to:t.localePath("about")}},[t._v(t._s(t.$t("pages.index.user_presentation.actions.about")))]),t._v(" "),r("v-spacer"),t._v(" "),r("v-btn",{attrs:{text:"",to:t.localePath("contact")}},[t._v(t._s(t.$t("pages.index.user_presentation.actions.contact")))])],1)],1)],1)}),[],!1,null,"2936ab41",null).exports),y=r(15),k=r(164),O=r.n(k);function $(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var M={name:"index-page",components:{RecentProjects:h,CustomDivider:l.a,SectionHeading:c.a,UserQuote:x,UserCard:w},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?$(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):$(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(y.b)({user:"getUser"})),data:function(){return{background_home:O.a}},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o,c,l,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.app,t.params,n=t.error,o=r.i18n,c=r.$loadDataMarkdownIndex,e.next=4,c("projects",o.locale,"pt",n,3);case 4:return l=e.sent,e.next=7,c("blog",o.locale,"pt",n,3);case 7:return d=e.sent,e.abrupt("return",{projects:l.items,blog:d.items});case 9:case"end":return e.stop()}}),e)})))()},head:function(){return{}}},P=(r(449),Object(v.a)(M,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"index-page"},[r("v-container",[r("v-row",[r("v-col",{attrs:{cols:"12",lg:"4"}},[r("UserCard",{style:{marginTop:t.$vuetify.breakpoint.lgAndUp?"-40vh":0},attrs:{user:t.user}},[r("v-responsive",{staticClass:"text-left d-flex align-center",attrs:{height:"120"}},[r("UserQuote")],1)],1)],1)],1)],1),t._v(" "),r("section",[r("RecentProjects",{attrs:{projects:t.projects}},[r("SectionHeading",{attrs:{slot:"title",value:"Recent Projects"},slot:"title"})],1),t._v(" "),r("v-row",[r("v-col",{staticClass:"text-center my-5"},[r("v-btn",{attrs:{"x-large":"",text:"",rounded:"",to:t.localePath("projects")}},[r("span",[t._v("See more")]),t._v(" "),r("v-icon",{attrs:{right:""}},[t._v("mdi-arrow-right")])],1)],1)],1)],1),t._v(" "),r("section",[r("RecentProjects",{attrs:{projects:t.blog}},[r("SectionHeading",{attrs:{slot:"title",value:"Recent blog"},slot:"title"})],1),t._v(" "),r("v-row",[r("v-col",{staticClass:"text-center my-5"},[r("v-btn",{attrs:{"x-large":"",text:"",rounded:"",to:t.localePath("projects")}},[r("span",[t._v("See more")]),t._v(" "),r("v-icon",{attrs:{right:""}},[t._v("mdi-arrow-right")])],1)],1)],1)],1)],1)}),[],!1,null,"79938b66",null));e.default=P.exports}}]);