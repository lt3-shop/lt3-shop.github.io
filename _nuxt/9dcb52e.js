(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{144:function(t,e,n){"use strict";n(199),n(18),n(33),n(22),n(59);e.a={methods:{formatPrice:function(t){return(t/1).toFixed(0).replace(".",",").toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")},sanitizeTitle:function(title){if(!title)return null;return title.toLowerCase().replace(/e|é|è|ẽ|ẻ|ẹ|ê|ế|ề|ễ|ể|ệ/gi,"e").replace(/a|á|à|ã|ả|ạ|ă|ắ|ằ|ẵ|ẳ|ặ|â|ấ|ầ|ẫ|ẩ|ậ/gi,"a").replace(/o|ó|ò|õ|ỏ|ọ|ô|ố|ồ|ỗ|ổ|ộ|ơ|ớ|ờ|ỡ|ở|ợ/gi,"o").replace(/u|ú|ù|ũ|ủ|ụ|ư|ứ|ừ|ữ|ử|ự/gi,"u").replace(/đ/gi,"d").replace(/\s*$/g,"").replace(/\s+/g,"-")}}}},165:function(t,e,n){var content=n(333);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("7388ab72",content,!0,{sourceMap:!1})},168:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(34),o=n(46),c=function(){function t(){Object(r.a)(this,t)}return Object(o.a)(t,null,[{key:"getItem",value:function(t,e){return localStorage.getItem(t)?JSON.parse(localStorage.getItem(t)):e?(localStorage.setItem(t,JSON.stringify(e)),e):void 0}},{key:"setItem",value:function(t,e){localStorage.setItem(t,JSON.stringify(e))}},{key:"removeItem",value:function(t){localStorage.removeItem(t)}}]),t}()},180:function(t,e,n){"use strict";n.r(e);n(52);var r={mixins:[n(144).a],computed:{products:function(){return this.$store.state.cart.products},totalAmount:function(){var t=0;return this.$store.state.cart.products.map((function(e){t+=e.price*e.quantity})),t},totalProduct:function(){return this.$store.state.cart.products.length}},mounted:function(){this.$store.commit("cart/loadCart")}},o=n(27),c=n(31),l=n.n(c),v=n(128),d=n(203),m=n(51),f=n(130),h=n(175),_=n(457),x=n(464),V=n(465),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.totalProduct>0?n("v-card",[n("v-card-text",[n("v-simple-table",{attrs:{dense:""},scopedSlots:t._u([{key:"default",fn:function(){return[n("thead",{staticClass:"font-weight-bold"},[n("tr",[n("th",{staticClass:"text-left text-subtitle-2 font-weight-black font-weight-bold"},[t._v("Tên Sản Phẩm")]),t._v(" "),n("th",{staticClass:"text-left text-subtitle-2 font-weight-black font-weight-bold"},[t._v("Số Lượng")]),t._v(" "),n("th",{staticClass:"text-left text-subtitle-2 font-weight-black font-weight-bold"},[t._v("Dơn Vị")]),t._v(" "),n("th",{staticClass:"text-left text-subtitle-2 font-weight-black font-weight-bold"},[t._v("Đơn Giá")]),t._v(" "),n("th",{staticClass:"text-left text-subtitle-2 font-weight-black font-weight-bold"},[t._v("Thành Tiền")]),t._v(" "),n("th",{staticClass:"text-left"})])]),t._v(" "),n("tbody",[t._l(t.products,(function(e){return n("tr",{key:e.path},[n("td",[t._v(t._s(e.title))]),t._v(" "),n("td",[n("v-tooltip",{attrs:{left:"",color:"grey"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[n("v-icon",t._g(t._b({attrs:{small:""},on:{click:function(t){}}},"v-icon",o,!1),r),[t._v("mdi-minus\n              ")])]}}],null,!0)},[t._v(" "),n("span",[t._v("Giảm số lượng")])]),t._v(" "),n("v-btn",{attrs:{small:"",text:"",fab:""}},[t._v(" "+t._s(e.quantity))]),t._v(" "),n("v-tooltip",{attrs:{right:"",color:"grey"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[n("v-icon",t._g(t._b({attrs:{small:""},on:{click:function(t){}}},"v-icon",o,!1),r),[t._v("mdi-plus\n              ")])]}}],null,!0)},[t._v(" "),n("span",[t._v("Mua Thêm")])])],1),t._v(" "),n("td",[t._v(t._s(e.unit))]),t._v(" "),n("td",[t._v(t._s(t.formatPrice(e.price)))]),t._v(" "),n("td",[n("strong",[t._v(t._s(t.formatPrice(e.price*e.quantity)))])]),t._v(" "),n("td",[n("v-tooltip",{attrs:{left:"",top:"",color:"grey"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[n("v-icon",t._g(t._b({on:{click:function(t){}}},"v-icon",o,!1),r),[t._v("mdi-minus\n              ")])]}}],null,!0)},[t._v(" "),n("span",[t._v("Để mua sau")])])],1)])})),t._v(" "),n("tr",[n("td"),t._v(" "),n("td",{staticClass:"text-right font-weight-bold text-subtitle-1",attrs:{colspan:"3"}},[t._v("Tổng tiền")]),t._v(" "),n("td",[n("strong",[t._v(t._s(t.formatPrice(t.totalAmount)))])])])],2)]},proxy:!0}],null,!1,1428862399)})],1),t._v(" "),n("v-card-actions",[t._t("action",[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{small:"",color:"secondary"}},[n("v-icon",{attrs:{left:""}},[t._v("mdi-cart-plus")]),t._v("\n\n        Đặt Mua\n      ")],1)])],2)],1):n("v-card",[n("v-card-text",{staticClass:"text-center"},[n("h2",{staticClass:"mb-2"},[t._v("Chưa có sản phẩm nào cả!")]),t._v(" "),n("v-img",{staticClass:"mx-auto",attrs:{src:"/cart-empty.png","max-width":"250px"}}),t._v(" "),n("v-btn",{staticClass:"custom-transform-class text-none",attrs:{"x-large":"",text:"",color:"secondary",to:"/san-pham"}},[t._v("Mua Hàng Thôi "),n("v-icon",[t._v("mdi-arrow-right")])],1)],1)],1)}),[],!1,null,"da45d874",null);e.default=component.exports;l()(component,{VBtn:v.a,VCard:d.a,VCardActions:m.a,VCardText:m.c,VIcon:f.a,VImg:h.a,VSimpleTable:_.a,VSpacer:x.a,VTooltip:V.a})},209:function(t,e,n){"use strict";n.r(e);var r={props:{items:Array}},o=n(27),c=n(31),l=n.n(c),v=n(130),d=n(205),m=n(206),f=n(131),h=n(207),_=n(23),x=n(110),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-list",t._l(t.items,(function(e,i){return e.child?n("v-list-group",{attrs:{value:"true","prepend-icon":e.icon},scopedSlots:t._u([{key:"activator",fn:function(){return[n("v-list-item-content",{on:{click:function(n){e.to&&t.$router.push(e.to)}}},[n("v-list-item-title",{domProps:{textContent:t._s(e.title)}})],1)]},proxy:!0}])},[t._v(" "),t._l(e.child,(function(e,r){return n("v-list-item",{key:r,attrs:{to:e.to,router:"",exact:""}},[n("v-list-item-action"),t._v(" "),n("v-list-item-content",[n("v-list-item-title",{domProps:{textContent:t._s(e.title)}})],1),t._v(" "),n("v-list-item-icon",[n("v-icon",[t._v(t._s(e.icon))])],1)],1)}))],2):n("v-list-item",{key:i,attrs:{to:e.to,router:"",exact:""}},[n("v-list-item-action",[n("v-icon",[t._v(t._s(e.icon))])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",{domProps:{textContent:t._s(e.title)}})],1)],1)})),1)}),[],!1,null,"fcffabbc",null);e.default=component.exports;l()(component,{VIcon:v.a,VList:d.a,VListGroup:m.a,VListItem:f.a,VListItemAction:h.a,VListItemContent:_.a,VListItemIcon:x.a,VListItemTitle:_.c})},213:function(t,e,n){"use strict";var r=n(2),o=n(290);r.a.use(o.a.Plugin)},282:function(t,e,n){"use strict";n.r(e);var r={name:"left-nav",components:{NavItems:n(209).default},data:function(){return{items:[{icon:"mdi-apps",title:"Cửa Hàng",to:"/"},{icon:"mdi-chart-bubble",title:"Sản Phẩm",to:"/san-pham",child:[{icon:"mdi-apps",title:"Các Loại Hoa",to:"/san-pham/cac-loai-hoa"},{icon:"mdi-apps",title:"Rau Củ Quả",to:"/san-pham/cac-loai-rau"},{icon:"mdi-apps",title:"Các Loại Củ Quả",to:"/san-pham/cac-loai-cu-qua"}]},{icon:"mdi-chart-bubble",title:"Góc Dinh Dưỡng",to:"/goc-dinh-duong/"},{icon:"mdi-chart-bubble",title:"Về Cửa Hàng",to:"/ve-cua-hang-lt3"}],admin:[{icon:"mdi-folder-lock",title:"Quản trị",roles:["admin"],child:[{icon:"mdi-cart-plus",title:"Đơn hàng",to:"/admin/orders"},{icon:"mdi-pencil",title:"Bải viết",to:"/admin/articles"},{icon:"mdi-pencil",title:"Sản phẩm",to:"/admin/products"}]}]}},computed:{isAuthenticated:function(){return this.$store.state.auth.isAuthenticated},isAdmin:function(){return this.$store.getters["auth/isAdmin"]}}},o=n(27),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("nav-items",{attrs:{items:this.items}}),this._v(" "),this.isAdmin?e("nav-items",{attrs:{items:this.admin}}):this._e()],1)}),[],!1,null,"7f5f4dd7",null);e.default=component.exports;installComponents(component,{NavItems:n(209).default})},283:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{}}},o=n(27),c=n(31),l=n.n(c),v=n(128),d=n(205),m=n(131),f=n(23),h=n(455),_=n(173),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-toolbar-items",[n("v-btn",{attrs:{text:"",color:"secondary",to:"/"}},[t._v("CỬa Hàng LT3")]),t._v(" "),n("v-menu",{staticClass:"rounded-0",attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[n("v-btn",t._g(t._b({attrs:{text:"","active-class":"primary"}},"v-btn",o,!1),r),[t._v("\n        Sản Phẩm\n      ")])]}}])},[t._v(" "),n("v-list",{staticClass:"rounded-0"},[n("v-list-item",{attrs:{"two-line":"","active-class":"secondary text-white",to:"/san-pham/cac-loai-hoa"}},[n("v-list-item-content",[n("v-list-item-title",[t._v("Các Loại Hoa")]),t._v(" "),n("v-list-item-subtitle",[t._v("Các loại hoa được trồng tại vườn nhà LT3")])],1)],1),t._v(" "),n("v-list-item",{attrs:{"two-line":"","active-class":"secondary text-white",to:"/san-pham/cac-loai-rau"}},[n("v-list-item-content",[n("v-list-item-title",[t._v("Các Loại Rau")]),t._v(" "),n("v-list-item-subtitle",[t._v("Các loại Rau được trồng tại vườn nhà LT3")])],1)],1),t._v(" "),n("v-list-item",{attrs:{"two-line":"","active-class":"secondary text-white",to:"/san-pham/cac-loai-cu-qua"}},[n("v-list-item-content",[n("v-list-item-title",[t._v("Các Loại Củ Quả")]),t._v(" "),n("v-list-item-subtitle",[t._v("Các loại Củ Quả được trồng tại vườn nhà LT3")])],1)],1)],1)],1),t._v(" "),n("v-btn",{attrs:{text:"",to:"/goc-dinh-duong","active-class":"secondary"}},[t._v("Góc Dinh Dưỡng")]),t._v(" "),n("v-btn",{attrs:{text:"",to:"/ve-cua-hang-lt3","active-class":"secondary"}},[t._v("Về LT3")])],1)}),[],!1,null,"d5e32342",null);e.default=component.exports;l()(component,{VBtn:v.a,VList:d.a,VListItem:m.a,VListItemContent:f.a,VListItemSubtitle:f.b,VListItemTitle:f.c,VMenu:h.a,VToolbarItems:_.a})},284:function(t,e,n){"use strict";var r=n(144),o={components:{Cart:n(180).default},mixins:[r.a],computed:{products:function(){return this.$store.state.cart.products},totalProduct:function(){return this.$store.state.cart.products.length}},mounted:function(){this.$store.commit("cart/loadCart")}},c=n(27),l=n(31),v=n.n(l),d=n(466),m=n(128),f=n(130),h=n(455),_=n(464),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-menu",{attrs:{"offset-y":"","close-on-content-click":!1},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[n("v-badge",{attrs:{color:"error",bordered:"",overlap:""},scopedSlots:t._u([{key:"badge",fn:function(){return[t._v("\n        "+t._s(t.totalProduct)+"\n      ")]},proxy:!0}],null,!0)},[t._v(" "),n("v-btn",t._g(t._b({staticClass:"mx-2",attrs:{dark:"",small:"",color:"secondary"}},"v-btn",o,!1),r),[n("v-icon",[t._v("mdi-cart-plus")])],1)],1)]}}])},[t._v(" "),n("cart",[n("template",{slot:"action"},[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{small:"",color:"secondary",to:"/dat-hang"}},[n("v-icon",{attrs:{left:""}},[t._v("mdi-cart-plus")]),t._v("\n\n        Đặt Mua\n      ")],1)],1)],2)],1)}),[],!1,null,"5a608dae",null);e.a=component.exports;v()(component,{Cart:n(180).default}),v()(component,{VBadge:d.a,VBtn:m.a,VIcon:f.a,VMenu:h.a,VSpacer:_.a})},292:function(t,e,n){"use strict";var r={components:{Lt3Cart:n(284).a},data:function(){return{clipped:!0,drawer:!0,fixed:!0,miniVariant:!1,title:"Cửa Hàng LT3"}},methods:{changeNavState:function(){this.drawer=!this.drawer}}},o=n(27),c=n(31),l=n.n(c),v=n(463),d=n(473),m=n(469),f=n(470),h=n(471),_=n(472),x=n(464),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{light:""}},[n("v-navigation-drawer",{attrs:{"mini-variant":t.miniVariant,clipped:t.clipped,fixed:"",app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("left-nav")],1),t._v(" "),n("v-app-bar",{attrs:{"clipped-left":t.clipped,fixed:"",app:""}},[n("v-app-bar-nav-icon",{on:{click:function(e){return e.stopPropagation(),t.changeNavState(e)}}}),t._v(" "),n("top-nav",{staticClass:"d-none d-md-flex"}),t._v(" "),n("v-spacer"),t._v(" "),n("auth-items"),t._v(" "),n("lt3-cart")],1),t._v(" "),n("v-main",[n("nuxt")],1),t._v(" "),n("v-footer",{attrs:{absolute:!t.fixed,app:""}},[n("span",[t._v("© LT3 "+t._s((new Date).getFullYear()))])])],1)}),[],!1,null,null,null);e.a=component.exports;l()(component,{LeftNav:n(282).default,TopNav:n(283).default,AuthItems:n(447).default}),l()(component,{VApp:v.a,VAppBar:d.a,VAppBarNavIcon:m.a,VFooter:f.a,VMain:h.a,VNavigationDrawer:_.a,VSpacer:x.a})},293:function(t,e,n){"use strict";var r={data:function(){return{clipped:!0,drawer:!1,fixed:!0,items:[{icon:"mdi-apps",title:"Cửa Hàng",to:"/"},{icon:"mdi-chart-bubble",title:"Tất Cả Sản Phẩm",to:"/san-pham"}],miniVariant:!1,title:"Cửa Hàng LT3"}},methods:{changeNavState:function(){this.drawer=!this.drawer}}},o=n(27),c=n(31),l=n.n(c),v=n(463),d=n(473),m=n(469),f=n(470),h=n(471),_=n(472),x=n(464),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{light:""}},[n("v-navigation-drawer",{attrs:{"mini-variant":t.miniVariant,clipped:t.clipped,fixed:"",app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("left-nav")],1),t._v(" "),n("v-app-bar",{attrs:{"clipped-left":t.clipped,fixed:"",app:""}},[n("v-app-bar-nav-icon",{on:{click:function(e){return e.stopPropagation(),t.changeNavState(e)}}}),t._v(" "),n("top-nav"),t._v(" "),n("v-spacer")],1),t._v(" "),n("v-main",[n("nuxt")],1),t._v(" "),n("v-footer",{attrs:{absolute:!t.fixed,app:""}},[n("span",[t._v("© LT3 "+t._s((new Date).getFullYear()))])])],1)}),[],!1,null,null,null);e.a=component.exports;l()(component,{LeftNav:n(282).default,TopNav:n(283).default}),l()(component,{VApp:v.a,VAppBar:d.a,VAppBarNavIcon:m.a,VFooter:f.a,VMain:h.a,VNavigationDrawer:_.a,VSpacer:x.a})},294:function(t,e,n){"use strict";var r={data:function(){return{clipped:!1,drawer:!1,fixed:!1,items:[{icon:"mdi-apps",title:"Welcome",to:"/"},{icon:"mdi-chart-bubble",title:"Inspire",to:"/inspire"}],miniVariant:!1,right:!0,rightDrawer:!1,title:"Vuetify.js"}}},o=n(27),c=n(31),l=n.n(c),v=n(463),d=n(473),m=n(469),f=n(128),h=n(474),_=n(470),x=n(130),V=n(205),y=n(131),w=n(207),C=n(23),k=n(471),S=n(472),I=n(464),O=n(173),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-navigation-drawer",{attrs:{"mini-variant":t.miniVariant,clipped:t.clipped,fixed:"",app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-list",t._l(t.items,(function(e,i){return n("v-list-item",{key:i,attrs:{to:e.to,router:"",exact:""}},[n("v-list-item-action",[n("v-icon",[t._v(t._s(e.icon))])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",{domProps:{textContent:t._s(e.title)}})],1)],1)})),1)],1),t._v(" "),n("v-app-bar",{attrs:{"clipped-left":t.clipped,fixed:"",app:""}},[n("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),t._v(" "),n("v-btn",{attrs:{icon:""},on:{click:function(e){e.stopPropagation(),t.miniVariant=!t.miniVariant}}},[n("v-icon",[t._v("mdi-"+t._s("chevron-"+(t.miniVariant?"right":"left")))])],1),t._v(" "),n("v-btn",{attrs:{icon:""},on:{click:function(e){e.stopPropagation(),t.clipped=!t.clipped}}},[n("v-icon",[t._v("mdi-application")])],1),t._v(" "),n("v-btn",{attrs:{icon:""},on:{click:function(e){e.stopPropagation(),t.fixed=!t.fixed}}},[n("v-icon",[t._v("mdi-minus")])],1),t._v(" "),n("v-toolbar-title",{domProps:{textContent:t._s(t.title)}}),t._v(" "),n("v-spacer"),t._v(" "),n("v-btn",{attrs:{icon:""},on:{click:function(e){e.stopPropagation(),t.rightDrawer=!t.rightDrawer}}},[n("v-icon",[t._v("mdi-menu")])],1)],1),t._v(" "),n("v-main",[n("v-container",[n("nuxt")],1)],1),t._v(" "),n("v-navigation-drawer",{attrs:{right:t.right,temporary:"",fixed:""},model:{value:t.rightDrawer,callback:function(e){t.rightDrawer=e},expression:"rightDrawer"}},[n("v-list",[n("v-list-item",{nativeOn:{click:function(e){t.right=!t.right}}},[n("v-list-item-action",[n("v-icon",{attrs:{light:""}},[t._v("\n            mdi-repeat\n          ")])],1),t._v(" "),n("v-list-item-title",[t._v("Switch drawer (click me)")])],1)],1)],1),t._v(" "),n("v-footer",{attrs:{absolute:!t.fixed,app:""}},[n("span",[t._v("© "+t._s((new Date).getFullYear()))])])],1)}),[],!1,null,null,null);e.a=component.exports;l()(component,{VApp:v.a,VAppBar:d.a,VAppBarNavIcon:m.a,VBtn:f.a,VContainer:h.a,VFooter:_.a,VIcon:x.a,VList:V.a,VListItem:y.a,VListItemAction:w.a,VListItemContent:C.a,VListItemTitle:C.c,VMain:k.a,VNavigationDrawer:S.a,VSpacer:I.a,VToolbarTitle:O.b})},310:function(t,e,n){n(311),t.exports=n(312)},332:function(t,e,n){"use strict";var r=n(165);n.n(r).a},333:function(t,e,n){(e=n(15)(!1)).push([t.i,"h1[data-v-bfedb7fe]{font-size:20px}",""]),t.exports=e},420:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return r})),n.d(e,"mutations",(function(){return o})),n.d(e,"getters",(function(){return c}));var r=function(){return{displayName:"",email:"",phoneNumber:"",role:null,isAuthenticated:!1,isAdmin:!1}},o={login:function(t,e){t.displayName=e.displayName,t.email=e.email,t.phoneNumber=e.phoneNumber,t.isAuthenticated=!0,t.role=e.role},logout:function(t){t.isAuthenticated=!1,t.displayName="",t.phoneNumber="",t.email="",t.role=null}},c={isAdmin:function(t){return t.isAuthenticated&&"admin"===t.role}}},421:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return r})),n.d(e,"mutations",(function(){return o}));var r=function(){return{defaultBuyer:{}}},o={storeBuyer:function(t,e){localStorage.setItem("buyerDefault",JSON.stringify(e))},load:function(t){var e=localStorage.getItem("buyerDefault");e&&(t.defaultBuyer=JSON.parse(e))}}},422:function(t,e,n){"use strict";n.r(e),n.d(e,"CartStatus",(function(){return o})),n.d(e,"state",(function(){return c})),n.d(e,"mutations",(function(){return l}));n(7),n(93),n(178);var r=n(168),o={pending:"pending",submitted:"submitted"},c=function(){return{products:[],status:o.pending}},l={add:function(t,e){0===t.products.filter((function(t){if(t.path===e.path)return t.quantity+=e.minUnit,!0})).length&&t.products.push({quantity:e.minUnit,minUnit:e.minUnit,price:e.price,title:e.title,unit:e.unit,path:e.path,photo:e.photo}),localStorage.setItem("cart",JSON.stringify({products:t.products}))},remove:function(t,e){var n=e.product;t.products.splice(t.products.indexOf(n),1),localStorage.setItem("cart",t.products)},loadCart:function(t){var e=localStorage.getItem("cart");e&&(t.products=JSON.parse(e).products)},reset:function(t){r.a.removeItem("cart"),t.products=[]},moveToMyOrders:function(t,e){var n=r.a.getItem("orders",[]);n.push(e),r.a.setItem("orders",n)}}},447:function(t,e,n){"use strict";n.r(e);n(8),n(7),n(6),n(12),n(13),n(10),n(9);var r=n(1);function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var l={data:function(){return{loginDialog:!1,logoutDialog:!1,username:"",password:"",error:{}}},computed:{isAuthenticated:function(){return this.$store.state.auth.isAuthenticated}},mounted:function(){var t=this;this.$fireAuth.onAuthStateChanged((function(e){e&&t.$fireStore.collection("users").doc(e.uid).get().then((function(n){console.log("authenticated user profile",n.data()),t.$store.commit("auth/login",c(c({},e),{},{role:n.data().role}))}))}))},methods:{login:function(){var t=this;this.$fireAuth.signInWithEmailAndPassword(this.username,this.password).then((function(e){t.loginDialog=!1})).catch((function(e){t.error=e}))},logout:function(){var t=this;this.$fireAuth.signOut().then((function(e){t.logoutDialog=!1,t.$store.commit("auth/logout")}))}}},v=n(27),d=n(31),m=n.n(d),f=n(467),h=n(208),_=n(128),x=n(203),V=n(51),y=n(468),w=n(456),C=n(130),k=n(464),S=n(450),component=Object(v.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.isAuthenticated?t._e():n("v-btn",{staticClass:"mx-2",attrs:{small:"",color:"primary"},on:{click:function(e){t.loginDialog=!0}}},[n("v-icon",[t._v("mdi-account")]),t._v("\n    Đăng nhập\n  ")],1),t._v(" "),t.isAuthenticated?n("v-avatar",{attrs:{color:"indigo",size:"36"},on:{click:function(e){t.logoutDialog=!0}}},[n("img",{attrs:{src:"https://cdn.vuetifyjs.com/images/john.jpg",alt:"John"}})]):t._e(),t._v(" "),n("v-dialog",{attrs:{width:"500"},model:{value:t.loginDialog,callback:function(e){t.loginDialog=e},expression:"loginDialog"}},[n("v-card",[n("v-card-title",{staticClass:"headline grey lighten-2"},[t._v("\n        Đăng nhập\n      ")]),t._v(" "),t.error.message?n("v-alert",{staticClass:"rounded-0",attrs:{type:"error"}},[t._v(" "+t._s(t.error.message))]):t._e(),t._v(" "),n("v-card-text",[n("v-text-field",{attrs:{label:"Email","prepend-icon":"mdi-email"},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}}),t._v(" "),n("v-text-field",{attrs:{label:"Password",type:"password","prepend-icon":"mdi-account"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),t._v(" "),n("v-divider"),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{color:"primary"},on:{click:t.login}},[t._v("\n          Đăng nhập\n        ")])],1)],1)],1),t._v(" "),n("v-dialog",{attrs:{width:"500"},model:{value:t.logoutDialog,callback:function(e){t.logoutDialog=e},expression:"logoutDialog"}},[n("v-card",[n("v-card-title",{staticClass:"headline grey lighten-2"}),t._v(" "),n("v-card-text",{staticClass:"mt-5",attrs:{align:"center"}},[n("v-btn",{attrs:{color:"primary"},on:{click:t.logout}},[t._v("\n          Đăng Xuất\n        ")])],1)],1)],1)],1)}),[],!1,null,"2f8fb9ce",null);e.default=component.exports;m()(component,{VAlert:f.a,VAvatar:h.a,VBtn:_.a,VCard:x.a,VCardActions:V.a,VCardText:V.c,VCardTitle:V.d,VDialog:y.a,VDivider:w.a,VIcon:C.a,VSpacer:k.a,VTextField:S.a})},88:function(t,e,n){"use strict";var r={layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},o=(n(332),n(27)),c=n(31),l=n.n(c),v=n(463),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{dark:""}},[404===t.error.statusCode?n("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):n("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),n("NuxtLink",{attrs:{to:"/"}},[t._v("\n    Home page\n  ")])],1)}),[],!1,null,"bfedb7fe",null);e.a=component.exports;l()(component,{VApp:v.a})}},[[310,24,5,25]]]);