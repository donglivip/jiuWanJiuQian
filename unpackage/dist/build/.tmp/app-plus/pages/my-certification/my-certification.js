(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my-certification/my-certification"],{"03a6":function(t,n,e){"use strict";e.r(n);var a=e("d035"),u=e("34d4");for(var i in u)"default"!==i&&function(t){e.d(n,t,function(){return u[t]})}(i);e("3a10");var o=e("2877"),c=Object(o["a"])(u["default"],a["a"],a["b"],!1,null,null,null);n["default"]=c.exports},"34d4":function(t,n,e){"use strict";e.r(n);var a=e("e064"),u=e.n(a);for(var i in a)"default"!==i&&function(t){e.d(n,t,function(){return a[t]})}(i);n["default"]=u.a},"3a10":function(t,n,e){"use strict";var a=e("820d"),u=e.n(a);u.a},"820d":function(t,n,e){},d035:function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement;t._self._c},u=[];e.d(n,"a",function(){return a}),e.d(n,"b",function(){return u})},e064:function(t,n,e){"use strict";(function(t,e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={data:function(){return{mydata:{},type:-1}},methods:{reset:function(){this.type=-1},myajax:function(){var n=this;t.showLoading({title:"加载中",mask:!0}),t.request({url:"https://www.example.com/request",data:{text:"uni.request"},success:function(t){console.log(e(t.data," at pages\\my-certification\\my-certification.vue:93")),n.mydata=t.data}}),setTimeout(function(){t.hideLoading()},1e3)},opennew:function(n){t.navigateTo({url:"../"+n+"/"+n})}},onShow:function(){this.myajax()}};n.default=a}).call(this,e("6e42")["default"],e("0de9")["default"])}},[["3e3c","common/runtime","common/vendor"]]]);