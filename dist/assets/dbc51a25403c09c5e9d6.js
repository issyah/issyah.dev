(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{188:function(t,e,r){var map={"./free-hosting-for-your-personal-website.md":[181,9]};function n(t){if(!r.o(map,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=map[t],n=e[0];return r.e(e[1]).then((function(){return r.t(n,7)}))}n.keys=function(){return Object.keys(map)},n.id=188,t.exports=n},199:function(t,e,r){"use strict";r.r(e);r(39);var n,l=r(5),o={transition:"slide",asyncData:(n=Object(l.a)(regeneratorRuntime.mark((function t(e){var n,article;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.params,t.prev=1,t.next=4,r(188)("./".concat(n.slug,".md"));case 4:return article=t.sent,t.abrupt("return",{attributes:article.attributes,html:article.html});case 8:return t.prev=8,t.t0=t.catch(1),t.abrupt("return",!1);case 11:case"end":return t.stop()}}),t,null,[[1,8]])}))),function(t){return n.apply(this,arguments)}),data:function(){return{scroll:""}},computed:{parallex:function(){return"translateY(".concat(.4*this.scroll,"px)")}},methods:{handleScroll:function(){this.scroll=window.scrollY},parallexArticle:function(t){return"translateY(".concat(this.scroll*t,"px)")}},head:function(){return{title:this.attributes.title,meta:[{hid:"description",name:"description",content:this.attributes.description}]}},mounted:function(){window.addEventListener("scroll",this.handleScroll)}},c=r(10),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"relative"},[r("div",{staticClass:"bg-green-500"},[r("div",{ref:"jumbotron",staticClass:"w-full md:w-1/2 p-4 mx-auto"},[r("div",{style:{transform:t.parallexArticle(.4)}},[r("nuxt-link",{staticClass:"rounded-full px-5 p-2  text-white block md:inline-block text-center font-bold hover:underline",attrs:{to:"/articles"}},[t._v("Back to Articles")]),t._v(" "),r("img",{staticClass:"mt-5\n                10",attrs:{src:this.attributes.img,alt:"Article Image"}})],1),t._v(" "),r("h1",{staticClass:"text-6xl text-center font-normal",style:{transform:t.parallexArticle(.5)}},[t._v(t._s(this.attributes.title))])])]),t._v(" "),r("div",{staticClass:"bg-white relative text-gray-900"},[r("div",{staticClass:"article w-full md:w-1/2 p-4 mx-auto ",domProps:{innerHTML:t._s(this.html)}})])])}),[],!1,null,null,null);e.default=component.exports}}]);