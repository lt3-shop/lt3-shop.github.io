(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{493:function(e,t,n){"use strict";n.r(t);n(94);var r={props:{items:{type:Array}},data:function(){return{open:[1,2],search:null,selection:[],caseSensitive:!1}},computed:{filter:function(){return this.caseSensitive?function(e,t,n){return e[n].indexOf(t)>-1}:void 0}}},c=n(27),o=n(30),l=n.n(o),d=n(203),f=n(51),v=n(576),h=n(130),m=n(49),y=n(460),O=n(573),component=Object(c.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",{staticClass:"mx-auto",attrs:{"max-width":"500"}},[n("v-sheet",{staticClass:"pa-4 primary lighten-2"},[n("v-text-field",{attrs:{label:"Search Company Directory",dark:"",flat:"","solo-inverted":"","hide-details":"",clearable:"","clear-icon":"mdi-close-circle-outline"},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}}),e._v(" "),n("v-checkbox",{attrs:{dark:"","hide-details":"",label:"Case sensitive search"},model:{value:e.caseSensitive,callback:function(t){e.caseSensitive=t},expression:"caseSensitive"}})],1),e._v(" "),n("v-card-text",[n("v-treeview",{attrs:{"return-object":"",hoverable:"",activatable:"",items:e.items,search:e.search,filter:e.filter,open:e.open},on:{"update:open":function(t){e.open=t}},scopedSlots:e._u([{key:"prepend",fn:function(t){var r=t.item;return[r.children?n("v-icon",{domProps:{textContent:e._s("mdi-"+(1===r.id?"home-variant":"folder-network"))}}):e._e()]}},{key:"append",fn:function(t){var n=t.item;return[e._t("leafAction",null,{item:n})]}},{key:"label",fn:function(t){var n=t.item;return[e._v("\n         "+e._s(n.name)+"\n      ")]}}],null,!0),model:{value:e.selection,callback:function(t){e.selection=t},expression:"selection"}})],1)],1)}),[],!1,null,"d2590dbc",null);t.default=component.exports;l()(component,{VCard:d.a,VCardText:f.c,VCheckbox:v.a,VIcon:h.a,VSheet:m.a,VTextField:y.a,VTreeview:O.a})},565:function(e,t,n){"use strict";n.r(t);n(8),n(7),n(6),n(31),n(12),n(13),n(10),n(9);var r=n(1),c=(n(92),n(26)),o=n(493),l=n(286),d=n(181),f=n(535),v=n.n(f),h=n(536),m=n.n(h);function y(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}var O={components:{Cart:d.default,Lt3Cart:l.a,Directory:o.default},asyncData:function(e){return Object(c.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.$content;case 1:case"end":return t.stop()}}),t)})))()},data:function(){return{config:{tools:{header:{class:v.a,config:{placeholder:"Enter a header",levels:[2,3,4],defaultLevel:3}},image:{class:m.a,config:{uploader:{uploadByFile:this.uploadFileForEditor}}}}},articles:[],directory:[{id:1,name:"Tất cả bài viết",children:[]}],article:{},editor:null}},mounted:function(){var e=this;this.$fireStore.collection("articles").get().then((function(t){t.forEach((function(t){e.articles.push(t.data()),e.directory[0].children.push(function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?y(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):y(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({id:t.id},t.data()))}))}))},methods:{onInitialized:function(e){this.editor=e},loadArticleEditing:function(article){this.article=article,this.config.data=article.jsData},saveArticle:function(){var e=this;this.editor.save().then((function(data){e.$fireStore.collection("articles").doc(e.article.id).update({name:e.article.name,jsData:data})}))},uploadFileForEditor:function(e){var t=this,n="images/".concat(e.name);return this.$fireStorage.ref(n).put(e,{contentType:e.type}).then((function(e){return console.log(e),t.$fireStorage.ref(n).getDownloadURL()})).then((function(e){return{success:1,file:{url:e}}}))}}},x=n(27),w=n(30),k=n.n(w),j=n(203),_=n(51),C=n(486),S=n(478),V=n(130),D=n(487),E=n(460),component=Object(x.a)(O,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"3"}},[n("directory",{attrs:{items:e.directory},scopedSlots:e._u([{key:"leafAction",fn:function(t){var r=t.item;return[r.children?e._e():n("v-icon",{attrs:{color:"primary"},domProps:{textContent:e._s("mdi-pencil")},on:{click:function(t){return e.loadArticleEditing(r)}}})]}}])})],1),e._v(" "),n("v-col",[e.article.id?n("v-card",[n("v-card-title",[n("v-text-field",{attrs:{label:"Name Of Article","append-icon":"mdi-content-save"},on:{"click:append":e.saveArticle},model:{value:e.article.name,callback:function(t){e.$set(e.article,"name",t)},expression:"article.name"}})],1),e._v(" "),n("v-card-text",[n("editor",{ref:"editor",attrs:{config:e.config,initialized:e.onInitialized}})],1)],1):e._e()],1)],1)],1)}),[],!1,null,"be8bcf60",null);t.default=component.exports;k()(component,{Directory:n(493).default}),k()(component,{VCard:j.a,VCardText:_.c,VCardTitle:_.d,VCol:C.a,VContainer:S.a,VIcon:V.a,VRow:D.a,VTextField:E.a})}}]);