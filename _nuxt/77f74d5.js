(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{572:function(t,e,n){"use strict";n.r(e);n(9),n(56),n(84),n(166),n(26),n(16);var o=n(17),r=(n(83),n(25)),c={asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,o,r,c,l,d,h;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.params,o=t.$content,r=t.$fireStore,e.next=3,o("san-pham/".concat(n.category),n.slug).fetch();case 3:return(c=e.sent).albums||(c.albums=[]),e.next=7,o("san-pham/".concat(n.category,"/index")).fetch();case 7:return l=e.sent,e.next=10,r.collection("products").doc(n.slug).get();case 10:return d=e.sent.data(),h={info:{title:"Thông tin",body:""},source:{title:"Nguồn gốc",body:"Vườn nhà Shop LT3"}},d&&(c.albums=d.albums,d.infoSections&&(h=d.infoSections,c.infoSections=h)),!0,e.abrupt("return",{isNotEditing:!0,product:c,category:l,infoSections:h});case 15:case"end":return e.stop()}}),e)})))()},components:{"editor-js":function(){return Promise.all([n.e(4),n.e(5)]).then(n.bind(null,576))},"t3-line":function(){return n.e(2).then(n.bind(null,575))},"md-product":function(){return n.e(30).then(n.bind(null,563))},"c-header":function(){return n.e(33).then(n.bind(null,577))},"c-paragraph":function(){return n.e(35).then(n.bind(null,578))},"c-image":function(){return n.e(34).then(n.bind(null,579))}},head:function(){return{title:this.product.title,meta:[{hid:"description",name:"description",content:this.product.description},{hid:"keyword",name:"keyword",content:this.product.keyword}]}},mixins:[n(132).a],data:function(){return{model:null,dialog:!1,photo:"",info:null,newPhoto:null}},methods:{showBig:function(t){this.dialog=!0,this.photo=t},showEditor:function(t){"object"===Object(o.a)(t.body)&&(this.isEditing=!0)},addToCart:function(){this.$store.commit("cart/add",this.product)},saveToFirebase:function(){var t=this.product,title=t.title,e=t.photo,n=t.price,o=t.rate,r=t.slug,c=t.unit,l=t.keyword,d=t.categories,h=t.albums;this.$fireStore.collection("products").doc(this.$route.params.slug).set({title:title,price:n,rate:null!=o?o:0,slug:r,unit:c,keyword:l,categories:d,photo:e,albums:h,infoSections:JSON.parse(JSON.stringify(this.product.infoSections))})},uploadToStorage:function(){var t=this,e="images/".concat(this.newPhoto.name);return this.$fireStorage.ref(e).put(this.newPhoto,{contentType:this.newPhoto.type}).then((function(n){return t.newPhoto=null,t.$fireStorage.ref(e).getDownloadURL()})).then((function(e){t.product.albums.push(e)}))},removePhoto:function(t){this.product.albums.splice(this.product.albums.indexOf(t),1)},onInitialized:function(t){this.editor=t},onEditorChanged:function(){var t=this;this.editor.save().then((function(data){t.product.infoSections.info.body=data}))},saveContent:function(content){var t=this;this.editor.save().then((function(data){data,t.isEditing=!1}))}},computed:{isEditing:{get:function(){return!this.isNotEditing},set:function(t){this.isNotEditing=!t}},isAuthenticated:function(){return this.$store.state.auth.isAuthenticated},isAdmin:function(){return this.$store.getters["auth/isAdmin"]}},created:function(){},mounted:function(){}},l=n(34),d=n(40),h=n.n(d),v=n(203),f=n(193),m=n(106),y=n(458),_=n(441),k=n(465),w=n(452),x=n(551),C=n(552),S=n(123),V=n(163),T=n(192),E=n(459),P=n(433),j=n(553),$=n(554),A=n(580),N=n(526),I=n(461),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("md-product",{attrs:{product:t.product,category:t.category}},[n("t3-line"),t._v(" "),t.isAdmin?n("v-btn",{staticClass:"rounded-0 float-right",attrs:{color:"primary"},on:{click:t.saveToFirebase}},[t._v("Lưu")]):t._e(),t._v(" "),n("h1",{staticClass:"text-blue"},[t._v(t._s(t.product.title))]),t._v(" "),n("div",{staticClass:"headline"},[t._v(t._s(t.formatPrice(t.product.price))+" / "+t._s(t.product.unit))]),t._v(" "),t.product.albums?n("v-card",{attrs:{flat:""}},[n("v-row",[t._l(t.product.albums,(function(e,o){return n("v-col",{key:o,attrs:{lg:"1",md:"2",sm:"3",cols:"4"}},[n("v-hover",{scopedSlots:t._u([{key:"default",fn:function(o){var r=o.hover;return[n("v-card",{class:{"on-hover":r},attrs:{elevation:r?12:2}},[n("v-img",{attrs:{src:e,"lazy-src":e,height:"70px"},on:{click:function(n){return t.showBig(e)}},scopedSlots:t._u([{key:"placeholder",fn:function(){return[n("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[n("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5"}})],1)]},proxy:!0}],null,!0)},[t.isAdmin?n("v-btn",{staticClass:"float-right",attrs:{fab:"","x-small":""},on:{click:[function(t){t.stopPropagation()},function(n){return t.removePhoto(e)}]}},[n("v-icon",{attrs:{dark:"","x-small":""}},[t._v("\n                    mdi-delete\n                  ")])],1):t._e()],1)],1)]}}],null,!0)})],1)})),t._v(" "),t.isAdmin?n("v-col",{attrs:{lg:"1",md:"2",sm:"3",cols:"4"}},[n("v-file-input",{attrs:{"hide-input":"",accept:"image/png, image/jpeg, image/bmp","prepend-icon":"mdi-camera"},on:{change:t.uploadToStorage},model:{value:t.newPhoto,callback:function(e){t.newPhoto=e},expression:"newPhoto"}})],1):t._e()],2)],1):t._e(),t._v(" "),n("v-dialog",{staticClass:"rounded-0",attrs:{scrollable:"",transition:"",fullscreen:""},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",{staticClass:"rounded-0",attrs:{dark:""}},[n("v-card-title",{staticClass:"headline text-right"}),t._v(" "),n("v-card-text",[n("v-btn",{staticClass:"float-right",attrs:{color:"darken-1",icon:""},on:{click:function(e){t.dialog=!1}}},[n("v-icon",[t._v("mdi-close")])],1),t._v(" "),n("v-container",[n("v-row",{attrs:{align:"start",justify:"start"}},[n("v-col",{attrs:{xs:"12",md:"1",lg:"1"}},[n("v-row",{attrs:{align:"center",justify:"center"}},t._l(t.product.albums,(function(img,e){return n("v-col",{key:e,staticClass:"pa-1 pa-md-4",attrs:{xs:"2",sm:"2",lg:"12"}},[n("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var o=e.hover;return[n("v-card",{class:{"on-hover":o},attrs:{elevation:o?12:2,"max-width":"50px"}},[n("v-img",{attrs:{src:img,"lazy-src":img},on:{click:function(e){return t.showBig(img)}},scopedSlots:t._u([{key:"placeholder",fn:function(){return[n("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[n("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5"}})],1)]},proxy:!0}],null,!0)})],1)]}}],null,!0)})],1)})),1)],1),t._v(" "),n("v-col",{attrs:{xs:"12",md:"11",lg:"11"}},[n("v-img",{attrs:{src:t.photo,contain:"","lazy-src":"https://picsum.photos/10/6?image=15",width:"100%","max-height":"80vh"},scopedSlots:t._u([{key:"placeholder",fn:function(){return[n("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[n("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5"}})],1)]},proxy:!0}])})],1)],1)],1)],1),t._v(" "),n("v-card-actions",[n("v-spacer")],1)],1)],1),t._v(" "),n("v-btn",{staticClass:"rounded-0",attrs:{color:"secondary"},on:{click:t.addToCart}},[n("v-icon",{attrs:{left:""}},[t._v("mdi-cart-plus")]),t._v("\n      Mua Sản Phẩm Này\n    ")],1),t._v(" "),n("v-container",[n("v-row",[n("v-col",[n("v-tabs",{model:{value:t.info,callback:function(e){t.info=e},expression:"info"}},t._l([t.product.infoSections.info,t.product.infoSections.source],(function(e,i){return n("v-tab",{key:e.title,class:0===i?"pl-0":""},[t._v("\n              "+t._s(e.title)+"\n            ")])})),1),t._v(" "),n("v-tabs-items",{model:{value:t.info,callback:function(e){t.info=e},expression:"info"}},t._l([t.product.infoSections.info,t.product.infoSections.source],(function(e){return n("v-tab-item",{key:e.title},[n("v-card",{staticClass:"mt-5",attrs:{flat:""},on:{click:function(n){return t.showEditor(e)}}},[e.body?n("v-card-text",t._l(e.body.blocks,(function(o,r){return e.body.blocks?n("fragment",{key:r},["header"===o.type?n("c-header",{attrs:{block:o.data}}):t._e(),t._v(" "),"paragraph"===o.type?n("c-paragraph",{attrs:{block:o.data}}):t._e(),t._v(" "),"image"===o.type?n("c-image",{attrs:{block:o.data}}):t._e()],1):t._e()})),1):t._e()],1),t._v(" "),t.isNotEditing?t._e():n("v-dialog",{attrs:{width:"750"},model:{value:t.isEditing,callback:function(e){t.isEditing=e},expression:"isEditing"}},[n("v-card",[n("v-card-title",{staticClass:"headline grey lighten-2"},[n("v-text-field",{model:{value:t.product.title,callback:function(e){t.$set(t.product,"title",e)},expression:"product.title"}})],1),t._v(" "),n("v-card-text",[n("editor-js",{attrs:{content:"object"==typeof e.body?e.body:{}},on:{initialized:t.onInitialized,"content-changed":t.onEditorChanged}})],1),t._v(" "),n("v-divider"),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{color:"primary",text:""},on:{click:function(n){return t.saveContent(e)}}},[t._v("\n                      Lưu\n                    ")])],1)],1)],1)],1)})),1)],1)],1)],1)],1)],1)}),[],!1,null,"c06207a8",null);e.default=component.exports;h()(component,{VBtn:v.a,VCard:f.a,VCardActions:m.a,VCardText:m.c,VCardTitle:m.d,VCol:y.a,VContainer:_.a,VDialog:k.a,VDivider:w.a,VFileInput:x.a,VHover:C.a,VIcon:S.a,VImg:V.a,VProgressCircular:T.a,VRow:E.a,VSpacer:P.a,VTab:j.a,VTabItem:$.a,VTabs:A.a,VTabsItems:N.a,VTextField:I.a})}}]);