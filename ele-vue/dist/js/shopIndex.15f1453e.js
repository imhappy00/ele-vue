(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["shopIndex"],{"034e":function(t,e,s){"use strict";var a=s("8f44"),r=s.n(a);r.a},"070d":function(t,e,s){"use strict";var a=s("a3b3"),r=s.n(a);r.a},"2f19":function(t,e,s){"use strict";var a=s("e85d"),r=s.n(a);r.a},3793:function(t,e,s){},"3ab0":function(t,e,s){},6436:function(t,e,s){"use strict";var a=s("3ab0"),r=s.n(a);r.a},"8f44":function(t,e,s){},a3b3:function(t,e,s){},cae5:function(t,e,s){"use strict";var a=s("e0c3"),r=s.n(a);r.a},d941:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"shop-detail"},[s("i",{staticClass:"go-back-icon iconfont",on:{click:t.goBack}},[t._v("")]),s("Header",{attrs:{"merchant-detail":t.merchantDetail}}),s("div",{staticClass:"tab-wrapper"},[s("tab",{attrs:{tabs:t.tabs}})],1)],1)},r=[],i=(s("5ab2"),s("6d57"),s("e10e"),s("9d37")),n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"header"},[s("div",{staticClass:"contain-wrapper flex"},[s("div",{staticClass:"avatar"},[s("img",{attrs:{width:"64",height:"64",src:t.IMAGESDOMAIN+t.merchantDetail.shop_avatar}})]),s("div",{staticClass:"content flex flex_column justify_between elli"},[s("div",{staticClass:"name"},[t._v(t._s(t.merchantDetail.name))]),s("div",{staticClass:"description"},[t._v(t._s(t.merchantDetail.description)+"/"+t._s(t.merchantDetail.need_time)+"分钟送达")]),s("div",{staticClass:"support"},[t._v("在线支付满"+t._s(t.merchantDetail.top_up)+"减"+t._s(t.merchantDetail.minus))])]),t._m(0)]),s("div",{staticClass:"bulletin-wrapper",on:{click:t.showDetail}},[s("span",{staticClass:"bulletin-title"}),s("span",{staticClass:"bulletin-text elli"},[t._v(t._s(t.merchantDetail.synopsis))]),s("i",{staticClass:"iconfont icon"},[t._v("")])]),s("div",{staticClass:"background"},[s("img",{attrs:{src:t.IMAGESDOMAIN+t.merchantDetail.shop_avatar,width:"100%",height:"100%"}})])])},o=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"support-count flex align_center"},[s("span",{staticClass:"count"},[t._v("3个")]),s("i",{staticClass:"iconfont"},[t._v("")])])}],c={props:{seller:{type:Object,default:function(){return{image:"http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg"}}},merchantDetail:{type:Object,default:function(){}}},methods:{showDetail:function(){this.headerDetailComp=this.headerDetailComp||this.$createHeaderDetail({$props:{merchantDetail:"merchantDetail"}}),this.headerDetailComp.show()}}},l=c,p=(s("2f19"),s("5511")),d=Object(p["a"])(l,n,o,!1,null,"6be0c328",null),u=d.exports,h=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"goods-wrapper"},[s("div",{staticClass:"scroll-nav-wrapper"},[t.goods.length?s("cube-scroll-nav",{attrs:{side:!0,data:t.goods,options:t.scrollOptions}},t._l(t.goods,(function(e){return s("cube-scroll-nav-panel",{key:e.name,attrs:{label:e.name,title:e.name}},[s("ul",t._l(e.foods,(function(e){return s("li",{key:e.id,staticClass:"food-item",on:{click:function(s){return t.selectFood(e)}}},[s("div",{staticClass:"icon"},[s("img",{attrs:{width:"57",height:"57",src:t.IMAGESDOMAIN+e.image}})]),s("div",{staticClass:"content"},[s("h2",{staticClass:"name"},[t._v(t._s(e.name))]),s("p",{staticClass:"desc"},[t._v(t._s(e.introduce))]),s("div",{staticClass:"extra"},[s("span",{staticClass:"count"},[t._v("月售"+t._s(e.mon_sale)+"份")]),s("span",[t._v("好评率"+t._s(e.rate)+"%")])]),s("div",{staticClass:"price"},[s("span",{staticClass:"now"},[t._v("￥"+t._s(e.price))])]),s("div",{staticClass:"cart-control-wrapper"},[s("cart-control",{attrs:{food:e},on:{add:t.onAdd}})],1)])])})),0)])})),1):t._e()],1),s("div",{staticClass:"shop-cart-wrapper"},[s("shop-cart",{ref:"shopCart",attrs:{"select-foods":t.selectFoods,"delivery-price":t.merchantDetail.deliveryPrice,"min-price":t.merchantDetail.top_up}})],1)])},f=[],v=(s("d25a"),s("952f")),m=s("7a00"),b=s("2268"),_=s("365c"),C=s("08c1");function g(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,a)}return s}function y(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?g(Object(s),!0).forEach((function(e){Object(i["a"])(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):g(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var O={name:"Goods",components:{ShopCart:m["a"],CartControl:b["a"]},props:{data:{type:Object,default:function(){return{}}}},data:function(){return{merchantId:this.$route.query.merchantId,goods:[],selectedFood:{},scrollOptions:{click:!1,directionLockThreshold:0}}},computed:{merchantDetail:function(){return this.getMerchantDetail()},selectFoods:function(){var t=[];return this.goods.forEach((function(e){e.foods.forEach((function(e){e.count&&t.push(e)}))})),t},barTxts:function(){var t=[];return this.goods.forEach((function(e){var s=e.type,a=e.name,r=e.foods,i=0;r.forEach((function(t){i+=t.count||0})),t.push({type:s,name:a,count:i})})),t}},created:function(){this._getFoodByMerId()},methods:y({},Object(C["b"])("shopDetail",["getMerchantDetail"]),{_getFoodByMerId:function(){var t=this,e={id:this.merchantId};_["d"].getFoodByMerId(e).then((function(e){t.goods=e.data}))},fetch:function(){},selectFood:function(t){this.selectedFood=t,this._showFood(),this._showShopCartSticky()},onAdd:function(t){this.$refs.shopCart.drop(t)},_showFood:function(){var t=this;this.foodComp=this.foodComp||this.$createFood({$props:{food:"selectedFood"},$events:{add:function(e){t.shopCartStickyComp.drop(e)},leave:function(){t._hideShopCartSticky()}}}),this.foodComp.show()},_showShopCartSticky:function(){this.shopCartStickyComp=this.shopCartStickyComp||this.$createShopCartSticky({$props:{selectFoods:"selectFoods",deliveryPrice:this.merchantDetail.deliveryPrice,minPrice:this.merchantDetail.top_up,fold:!0}}),this.shopCartStickyComp.show()},_hideShopCartSticky:function(){this.shopCartStickyComp.hide()}})},j=O,w=(s("cae5"),Object(p["a"])(j,h,f,!1,null,"9620a39a",null)),D=w.exports,x=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("cube-scroll",{ref:"scroll",staticClass:"ratings",attrs:{options:t.scrollOptions}},[s("div",{staticClass:"ratings-content"},[s("div",{staticClass:"overview"},[s("div",{staticClass:"overview-left"},[s("h1",{staticClass:"score"},[t._v(t._s(t.seller.score))]),s("div",{staticClass:"title"},[t._v("综合评分")]),s("div",{staticClass:"rank"},[t._v("高于周边商家98%")])]),s("div",{staticClass:"overview-right"},[s("div",{staticClass:"score-wrapper"},[s("span",{staticClass:"title"},[t._v("服务态度")]),s("star",{attrs:{size:48,score:t.seller.score}}),s("span",{staticClass:"score"},[t._v(t._s(t.seller.score))])],1),s("div",{staticClass:"score-wrapper"},[s("span",{staticClass:"title"},[t._v("商品评分")]),s("star",{attrs:{size:48,score:t.seller.score}}),s("span",{staticClass:"score"},[t._v(t._s(t.seller.score))])],1),s("div",{staticClass:"delivery-wrapper"},[s("span",{staticClass:"title"},[t._v("送达时间")]),s("span",{staticClass:"delivery"},[t._v(t._s(t.seller.need_time)+"分钟")])])])]),s("rating-select",{attrs:{"select-type":t.selectType,"only-content":t.onlyContent,ratings:t.ratings},on:{select:t.onSelect,toggle:t.onToggle}}),s("div",{staticClass:"rating-wrapper"},[s("ul",t._l(t.computedRatings,(function(e,a){return s("li",{key:a,staticClass:"rating-item border-bottom-1px"},[s("div",{staticClass:"avatar"},[s("img",{attrs:{width:"28",height:"28",src:e.avatar}})]),s("div",{staticClass:"content"},[s("h1",{staticClass:"name"},[t._v(t._s(e.username))]),s("div",{staticClass:"star-wrapper"},[s("star",{attrs:{size:24,score:e.score}}),s("span",{directives:[{name:"show",rawName:"v-show",value:e.deliveryTime,expression:"rating.deliveryTime"}],staticClass:"delivery"},[t._v(t._s(e.deliveryTime))])],1),s("p",{staticClass:"text"},[t._v(t._s(e.text))]),s("div",{directives:[{name:"show",rawName:"v-show",value:e.recommend&&e.recommend.length,expression:"rating.recommend && rating.recommend.length"}],staticClass:"recommend"},[s("span",{staticClass:"icon-thumb_up"}),t._l(e.recommend,(function(e,a){return s("span",{key:a,staticClass:"item"},[t._v("\n                "+t._s(e)+"\n              ")])}))],2),s("div",{staticClass:"time"},[t._v("\n              "+t._s(t.format(e.rateTime))+"\n            ")])])])})),0)])],1)])},k=[],S=s("987a"),P=s("4bcb"),T=s("6ac2"),I=s("6bf2"),E=s.n(I);function M(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,a)}return s}function $(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?M(Object(s),!0).forEach((function(e){Object(i["a"])(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):M(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var F={name:"Ratings",mixins:[T["a"]],components:{Star:S["a"],RatingSelect:P["a"]},props:{data:{type:Object,default:function(){}}},data:function(){return{ratings:[{username:"3******c",rateTime:1469281964e3,rateType:0,text:"很喜欢的粥",avatar:"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{username:"3******c",rateTime:1469281964e3,rateType:1,text:"很喜欢的粥",avatar:"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{username:"3******c",rateTime:1469281964e3,rateType:2,text:"很喜欢的粥",avatar:"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{username:"t******b",rateTime:1469181964e3,deliveryTime:"",score:3,rateType:1,text:"",avatar:"http://static.galileo.xiaojukeji.com/static/tms/default_header.png",recommend:[]}],scrollOptions:{click:!1,directionLockThreshold:0}}},computed:{seller:function(){return this.getMerchantDetail()||{}}},methods:$({},Object(C["b"])("shopDetail",["getMerchantDetail"]),{fetch:function(){this.fetched||(this.fetched=!0)},format:function(t){return E()(t).format("YYYY-MM-DD hh:mm")}}),watch:{selectType:function(){var t=this;this.$nextTick((function(){t.$refs.scroll.refresh()}))}}},A=F,B=(s("ec38"),Object(p["a"])(A,x,k,!1,null,"60150d68",null)),L=B.exports,N=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("cube-scroll",{staticClass:"seller",attrs:{options:t.sellerScrollOptions}},[s("div",{staticClass:"seller-content"},[s("div",{staticClass:"overview"},[s("h1",{staticClass:"title"},[t._v(t._s(t.seller.name))]),s("div",{staticClass:"desc border-bottom-1px"},[s("star",{attrs:{size:48,score:t.seller.score}}),s("span",{staticClass:"text"},[t._v("(4)")]),s("span",{staticClass:"text"},[t._v("月售"+t._s(t.seller.mon_sale)+"单")])],1),s("ul",{staticClass:"remark"},[s("li",{staticClass:"block"},[s("h2",[t._v("起送")]),s("div",{staticClass:"content"},[s("span",{staticClass:"stress"},[t._v(t._s(t.seller.send_price))]),t._v("元\n          ")])]),s("li",{staticClass:"block"},[s("h2",[t._v("商家配送")]),s("div",{staticClass:"content"},[s("span",{staticClass:"stress"},[t._v(t._s(t.seller.top_up))]),t._v("元\n          ")])]),s("li",{staticClass:"block"},[s("h2",[t._v("平均配送时间")]),s("div",{staticClass:"content"},[s("span",{staticClass:"stress"},[t._v(t._s(t.seller.need_time))]),t._v("分钟\n          ")])])]),s("div",{staticClass:"favorite",on:{click:t.toggleFavorite}},[s("span",{staticClass:"icon-favorite iconfont",class:{active:t.favorite}},[t._v("")]),s("span",{staticClass:"text"},[t._v(t._s(t.favoriteText))])])]),s("div",{staticClass:"bulletin"},[s("h1",{staticClass:"title"},[t._v("公告与活动")]),s("div",{staticClass:"content-wrapper border-bottom-1px"},[s("p",{staticClass:"content"},[t._v(t._s(t.seller.synopsis))])]),t.seller.supports?s("ul",{staticClass:"supports"},t._l(t.seller.supports,(function(e,a){return s("li",{key:a,staticClass:"support-item border-bottom-1px"},[s("support-ico",{attrs:{size:4,type:t.seller.supports[a].type}}),s("span",{staticClass:"text"},[t._v(t._s(t.seller.supports[a].description))])],1)})),0):t._e()]),s("div",{staticClass:"pics"},[s("h1",{staticClass:"title"},[t._v("商家实景")]),s("cube-scroll",{staticClass:"pic-wrapper",attrs:{options:t.picScrollOptions}},[s("ul",{staticClass:"pic-list"},t._l(3,(function(e,a){return s("li",{key:a,staticClass:"pic-item"},[s("img",{attrs:{src:t.IMAGESDOMAIN+t.seller.shop_environment,width:"120",height:"90"}})])})),0)])],1),s("div",{staticClass:"info"},[s("h1",{staticClass:"title border-bottom-1px"},[t._v("商家信息")]),s("ul",[s("li",{staticClass:"info-item border-bottom-1px"},[t._v("该商家支持发票,请下单写好发票抬头")]),t._l(t.infos,(function(e,a){return s("li",{key:a,staticClass:"info-item border-bottom-1px"},[t._v("\n          "+t._s(e)+"\n        ")])}))],2)])])])},G=[];function R(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,a)}return s}function z(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?R(Object(s),!0).forEach((function(e){Object(i["a"])(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):R(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var H={name:"Seller",components:{SupportIco:v["a"],Star:S["a"]},props:{data:{type:Object,default:function(){return{}}}},data:function(){return{favorite:!1,sellerScrollOptions:{directionLockThreshold:0,click:!1},picScrollOptions:{scrollX:!0,stopPropagation:!0,directionLockThreshold:0}}},computed:{seller:function(){return this.getMerchantDetail()||{}},infos:function(){var t=[],e="",s=this.getMerchantDetail()||{categorys:[]};return s.categorys&&(e=s.categorys.reduce((function(t,e){return"".concat(t,",").concat(e)}))),t.push("种类：".concat(e)),t.push(s.address),t.push("营业时间：".concat(s.start_time,"-").concat(s.end_time)),t},favoriteText:function(){return this.favorite?"已收藏":"收藏"}},methods:z({},Object(C["b"])("shopDetail",["getMerchantDetail"]),{toggleFavorite:function(){this.favorite=!this.favorite}})},Y=H,q=(s("6436"),Object(p["a"])(Y,N,G,!1,null,"3d33a6de",null)),J=q.exports,W=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"tab"},[s("cube-tab-bar",{ref:"tabBar",staticClass:"border-bottom-1px",attrs:{"use-transition":!1,"show-slider":!0,data:t.tabs},model:{value:t.selectedLabel,callback:function(e){t.selectedLabel=e},expression:"selectedLabel"}}),s("div",{staticClass:"slide-wrapper"},[s("cube-slide",{ref:"slide",attrs:{loop:!1,"auto-play":!1,"show-dots":!1,"initial-index":t.index,options:t.slideOptions},on:{scroll:t.onScroll,change:t.onChange}},t._l(t.tabs,(function(t,e){return s("cube-slide-item",{key:e},[s(t.component,{ref:"component",refInFor:!0,tag:"component"})],1)})),1)],1)],1)},X=[],K=(s("e204"),s("163d"),{name:"Tab",props:{tabs:{type:Array,default:function(){return[]}},initialIndex:{type:Number,default:0}},data:function(){return{index:this.initialIndex,slideOptions:{listenScroll:!0,probeType:3,directionLockThreshold:0}}},computed:{selectedLabel:{get:function(){return this.tabs[this.index].label},set:function(t){this.index=this.tabs.findIndex((function(e){return e.label===t}))}}},mounted:function(){this.onChange(this.index)},methods:{onScroll:function(t){var e=this.$refs.tabBar.$el.clientWidth,s=this.$refs.slide.slide.scrollerWidth,a=-t.x/s*e;this.$refs.tabBar.setSliderTransform(a)},onChange:function(t){this.index=t;var e=this.$refs.component[t];e&&e.fetch&&e.fetch()}}}),Q=K,U=(s("070d"),Object(p["a"])(Q,W,X,!1,null,"fb8feff0",null)),V=U.exports;function Z(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,a)}return s}function tt(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?Z(Object(s),!0).forEach((function(e){Object(i["a"])(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):Z(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var et={name:"ShopDetail",data:function(){return{merchantId:this.$route.query.merchantId,merchantDetail:{},foods:[],tabs:[{label:"商品",component:D},{label:"评论",component:L},{label:"商家",component:J}]}},components:{Header:u,Goods:D,Ratings:L,Seller:J,Tab:V},created:function(){this._getMerchantsById()},methods:tt({},Object(C["c"])("shopDetail",["MERCHANTDETAIL"]),{goBack:function(){this.$router.go(-1)},_getMerchantsById:function(){var t=this,e={id:this.merchantId};_["d"].getMerchantsById(e).then((function(e){t.merchantDetail=e.data,t.MERCHANTDETAIL(t.merchantDetail)}))}})},st=et,at=(s("034e"),Object(p["a"])(st,a,r,!1,null,"2921ba53",null));e["default"]=at.exports},e0c3:function(t,e,s){},e85d:function(t,e,s){},ec38:function(t,e,s){"use strict";var a=s("3793"),r=s.n(a);r.a}}]);