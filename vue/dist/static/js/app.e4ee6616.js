(function(t){function e(e){for(var r,i,l=e[0],s=e[1],c=e[2],f=0,d=[];f<l.length;f++)i=l[f],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&d.push(a[i][0]),a[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);u&&u(e);while(d.length)d.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,l=1;l<n.length;l++){var s=n[l];0!==a[s]&&(r=!1)}r&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},a={app:0},o=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var u=s;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("85ec"),a=n.n(r);a.a},"4bfe":function(t,e,n){"use strict";var r=n("5eca"),a=n.n(r);a.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Header"),n("MapPane",{attrs:{ankens:t.ankens}}),t.ankens.length>0?n("AnkenList",{attrs:{ankens:t.ankens}}):t._e(),n("Footer")],1)},o=[],i=(n("d3b7"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header"},[n("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"dark"}},[n("b-navbar-brand",{attrs:{href:"/"}},[t._v("静岡県点群データマップ")]),n("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),n("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[n("b-navbar-nav",[n("b-nav-item",{attrs:{href:"https://pointcloud.pref.shizuoka.jp/"}},[t._v("Shizuoka Point Cloud DB")]),n("b-nav-item",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-about",modifiers:{"modal-about":!0}}],attrs:{href:"#"}},[t._v("about")]),n("b-modal",{attrs:{id:"modal-about",title:"about","hide-footer":""}},[n("p",{staticClass:"my-4"},[t._v(" このサイトは、静岡県が運営する"),n("a",{attrs:{href:"https://pointcloud.pref.shizuoka.jp/"}},[t._v("Shizuoka Point Cloud DB")]),t._v("で 公開されている貴重なデータを、より探しやすくする事を目的に開発されました。 ご意見・お問い合わせは"),n("a",{attrs:{href:"https://twitter.com/kanahiro_iguchi"}},[t._v("開発者のTwitterアカウント")]),t._v("までどうぞ。 ")])])],1)],1)],1)],1)}),l=[],s={name:"Header"},c=s,u=n("2877"),f=Object(u["a"])(c,i,l,!1,null,"2b3305f0",null),d=f.exports,p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mapPane"},[n("l-map",{attrs:{zoom:t.zoom,center:t.center,preferCanvas:!0}},[n("l-control-scale",{attrs:{position:"bottomleft",imperial:!1,metric:!0}}),n("l-tile-layer",{attrs:{name:t.tileProvider.name,visible:t.tileProvider.visible,url:t.tileProvider.url,attribution:t.tileProvider.attribution}}),n("Vue2LeafletMarkerCluster",{attrs:{options:t.clusterOptions}},t._l(t.ankens,(function(e){return n("LMarker",{key:e.no,attrs:{"lat-lng":t.makeLatLng(e)},on:{click:function(n){return t.onMarkerClick(e.no)}}},[n("LPopup",{attrs:{content:t.makeMarkerContent(e)}})],1)})),1)],1)],1)},b=[],m=(n("b0c0"),n("a9e3"),n("e11e")),v=n("2699"),h=n("a40a"),k=n("d371"),_=n("4e2b"),g=n("f60f"),y=n("ca9f"),C=n.n(y),j={name:"MapPane",components:{LMap:v["a"],LTileLayer:h["a"],LControlScale:k["a"],LMarker:_["a"],LPopup:g["a"],Vue2LeafletMarkerCluster:C.a},data:function(){return{center:[34.976564,138.383789],zoom:10,tileProvider:{name:"OpenStreetMap",visible:!0,url:"https://tile.openstreetmap.jp/{z}/{x}/{y}.png",attribution:"map data © OpenStreetMap contributors"},clusterOptions:{disableClusteringAtZoom:15},markerContent:{date:"",firm:"",links:[]}}},props:{ankens:Array},methods:{makeLatLng:function(t){return Object(m["latLng"])(t.lat,t.lon)},makeMarkerContent:function(t){var e=this.markerContent.date,n=this.markerContent.firm,r="<a href='https://pointcloud.pref.shizuoka.jp/lasmap/ankendetail?ankenno="+t.no+"'>"+t.name+"</a>",a="";for(var o in this.markerContent.links){var i=this.markerContent.links[o];a=a+"<li><a href='"+i+"'>"+t.no+"-"+String(Number(o)+1)+".las</a></lin>"}var l="<h6>"+r+"</h6><b-table-simple><tr><td>データ取得日</td><td>"+e+"</td></tr><tr><td>請負業者</td><td>"+n+"</td></tr></b-table-simple><div><span>データ一覧</span>"+a+"</div>";return l},onMarkerClick:function(t){var e=this;e.markerContent={date:"",firm:"",links:[]},fetch("/ankenDetail/"+t).then((function(t){return t.json()})).then((function(t){e.markerContent.date=t.date,e.markerContent.firm=t.firm,e.markerContent.links=t.links})).catch((function(t){console.log(t),alert("エラーが発生しました。")}))}}},O=j,L=(n("5a6b"),Object(u["a"])(O,p,b,!1,null,"35a45b30",null)),P=L.exports,w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ankenList"},[n("b-table-simple",{attrs:{hover:"",small:""}},[n("b-thead",[n("b-tr",[n("b-th",[t._v("データ年度")]),n("b-th",[t._v("工事名")])],1)],1),n("b-tbody",t._l(t.ankens,(function(e){return n("b-tr",{key:e.no},[n("b-th",[t._v(t._s(e.year))]),n("b-th",[n("a",{attrs:{href:t.makeUrl(e.no)}},[t._v(t._s(e.name))])])],1)})),1)],1)],1)},M=[],x={name:"AnkensList",data:function(){return{filterd:[]}},props:{ankens:Array},methods:{makeUrl:function(t){return"https://pointcloud.pref.shizuoka.jp/lasmap/ankendetail?ankenno="+t},convertYYtoYYYY:function(t){var e=1988;switch(t){case"01":e=2019;break;default:e+=int(t);break}return e}}},S=x,z=Object(u["a"])(S,w,M,!1,null,"6e8b0b32",null),Y=z.exports,D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer"},[t._v(" © "+t._s(t.thisYear)+" Kanahiro Iguchi. "),n("a",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-license",modifiers:{"modal-license":!0}}],attrs:{href:"#"}},[t._v("license")]),n("b-modal",{attrs:{id:"modal-license",title:"license","hide-footer":""}},[n("div",{staticClass:"my-4"},[n("div",[n("p",[t._v(" 【出典：静岡県ポイントクラウドデータベース "),n("a",{attrs:{href:"https://creativecommons.org/licenses/by/4.0/legalcode.ja"}},[t._v("CCライセンス 表示 4.0 国際")])])])])])],1)},A=[],U={name:"Header",data:function(){return{}},created:function(){},methods:{},computed:{thisYear:function(){var t=new Date(Date.now());return String(t.getFullYear())}}},$=U,E=(n("4bfe"),Object(u["a"])($,D,A,!1,null,"630e7b5a",null)),T=E.exports,H={name:"app",components:{Header:d,MapPane:P,AnkenList:Y,Footer:T},data:function(){return{ankens:[]}},created:function(){var t=this;fetch("/markers").then((function(t){return t.json()})).then((function(e){t.ankens=e.ankenList.sort((function(t,e){return t.no<e.no?1:t.no>e.no?-1:0})).sort((function(t,e){return t.year<e.year?1:t.year>e.year?-1:0}))})).catch((function(t){console.log(t),alert("エラーが発生しました。")}))}},I=H,F=(n("034f"),Object(u["a"])(I,a,o,!1,null,null,null)),N=F.exports,B=(n("6cc5"),n("5f5b"));n("f9e3"),n("2dd8");delete m["Icon"].Default.prototype._getIconUrl,r["default"].use(B["a"]),m["Icon"].Default.mergeOptions({iconRetinaUrl:n("584d"),iconUrl:n("6397"),shadowUrl:n("e2b9")}),r["default"].config.productionTip=!1,new r["default"]({render:function(t){return t(N)}}).$mount("#app")},"595b":function(t,e,n){},"5a6b":function(t,e,n){"use strict";var r=n("595b"),a=n.n(r);a.a},"5eca":function(t,e,n){},"85ec":function(t,e,n){}});
//# sourceMappingURL=app.e4ee6616.js.map