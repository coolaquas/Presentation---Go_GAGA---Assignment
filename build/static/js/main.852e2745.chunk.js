(this["webpackJsonpweb-app-frontend"]=this["webpackJsonpweb-app-frontend"]||[]).push([[0],{104:function(e,t,a){},105:function(e,t,a){},126:function(e,t,a){"use strict";a.r(t);var n=a(16),c=a(0),r=a.n(c),s=a(20),o=a.n(s),i=(a(104),a(58)),l=a.n(i),p=a(73),u=a(48),d=(a(105),a(106),a(74)),j=a.n(d),h=a(130),b=a(36),f=a(131),m=a(129),O=h.a.Search;var v=function(e){var t=Object(c.useState)([]),a=Object(u.a)(t,2),s=a[0],o=a[1],i=Object(c.useState)(!0),d=Object(u.a)(i,2),h=d[0],v=d[1],x=r.a.useState(!1),g=Object(u.a)(x,2),_=g[0],w=g[1],N=Object(c.useState)(""),S=Object(u.a)(N,2),k=S[0],C=S[1],L=Object(c.useState)(""),y=Object(u.a)(L,2),P=y[0],I=y[1];Object(c.useEffect)((function(){T(),setTimeout((function(){v(!1)}),3e3)}),[]);var T=function(){var e=Object(p.a)(l.a.mark((function e(){var t,a,n=arguments;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:"",e.prev=1,a="".concat("localhost"===window.location.hostname?"http://localhost:8000/api/":"https://spangle-jasper-ocarina.glitch.me/api/").concat(t),console.log(a),e.next=6,j.a.get(a).then((function(e){o(e.data.reverse())}));case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),alert(e.t0.response.data.msg);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}(),B=function(){var e=Object(p.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t="localhost"===window.location.hostname?"http://localhost:8000/api/addInfo":"https://spangle-jasper-ocarina.glitch.me/api/addInfo",e.next=4,j.a.post(t,{Name:k,Location:P}).then((function(e){alert(e.data),T(),w(!1)}));case 4:e.next=11;break;case 6:e.prev=6,e.t0=e.catch(0),C(""),I(""),alert(e.t0.response.data.msg);case 11:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}();return Object(n.jsxs)("div",{className:"app",children:[Object(n.jsxs)("div",{className:"app__header",children:[Object(n.jsx)("h1",{children:"Samrat Mallick Web App"}),Object(n.jsx)("div",{className:"app__search",children:Object(n.jsx)(O,{style:{width:900,margin:10},placeholder:"Enter Name or Location",onSearch:function(e){T(e)},enterButton:!0,allowClear:!0})}),Object(n.jsxs)("div",{className:"app__upload",children:[Object(n.jsx)(b.a,{onClick:function(){w(!0)},children:"Upload Info"}),Object(n.jsx)(f.a,{title:"Upload Data",visible:_,onOk:function(){B()},okText:"Submit",onCancel:function(){C(""),I(""),w(!1)},children:Object(n.jsxs)("div",{className:"upload__container",children:[Object(n.jsxs)("div",{className:"upload__name",children:[Object(n.jsx)("span",{children:"Please enter Name"}),Object(n.jsx)("input",{placeholder:"Please enter Name",type:"text",value:k,onChange:function(e){return C(e.target.value)}})]}),Object(n.jsxs)("div",{className:"upload__Location",children:[Object(n.jsx)("span",{children:"Please enter Location"}),Object(n.jsx)("input",{placeholder:"Please enter Location",type:"text",value:P,onChange:function(e){return I(e.target.value)}})]})]})})]})]}),Object(n.jsx)("div",{className:"app__cardContainer",children:null===s||void 0===s?void 0:s.map((function(e,t){return Object(n.jsx)("div",{className:"app__card",children:Object(n.jsxs)(m.a,{size:"small",style:{width:300,marginTop:8,marginBottom:8},loading:h,children:[Object(n.jsxs)("p",{children:[" Name : ",e.Name]}),Object(n.jsxs)("p",{children:["Location : ",e.Location]})]})},t)}))})]})},x=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,132)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),r(e),s(e)}))};o.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(v,{})}),document.getElementById("root")),x()}},[[126,1,2]]]);
//# sourceMappingURL=main.852e2745.chunk.js.map