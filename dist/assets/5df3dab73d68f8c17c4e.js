(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{197:function(t,e,n){"use strict";n.r(e);var l={data:function(){return{articles:[]}},methods:{getArticles:function(){var t=this;this.$axios.get("articles.json").then((function(e){if(!e.status)return!1;t.articles=e.data}))}},mounted:function(){this.getArticles()}},r=n(10),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w-full md:w-1/2 p-4 mx-auto min-h-screen"},[n("h1",{staticClass:"text-5xl font-bold"},[t._v("Articles")]),t._v(" "),n("div",{staticClass:"mt-5"},t._l(t.articles,(function(article){return n("div",[n("nuxt-link",{attrs:{to:article.link}},[n("h1",{staticClass:"text-3xl font-light"},[t._v(t._s(article.title))])]),t._v(" "),n("h4",{staticClass:"text-gray-500 text-sm"},[t._v(t._s(article.date))]),t._v(" "),n("p",{staticClass:"mt-4"},[t._v(t._s(article.description))]),t._v(" "),n("div",{staticClass:"mt-8"},[n("nuxt-link",{staticClass:"rounded-full px-5 p-2 bg-red-500 block md:inline-block text-center hover:bg-red-700",attrs:{to:article.link}},[t._v("Read Article")])],1),t._v(" "),n("hr",{staticClass:"my-5 border-gray-700"})],1)})),0)])}),[],!1,null,null,null);e.default=component.exports}}]);