(this["webpackJsonpreact-shop"]=this["webpackJsonpreact-shop"]||[]).push([[0],{13:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var n=c(1),i=c.n(n),a=c(7),s=c.n(a),r=(c(13),c(0));function o(){return Object(r.jsx)("nav",{className:"purple darken-4",children:Object(r.jsxs)("div",{className:"nav-wrapper",children:[Object(r.jsx)("a",{href:"/",className:"brand-logo",children:"React Shop"}),Object(r.jsx)("ul",{id:"nav-mobile",className:"right hide-on-med-and-down",children:Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:"https://github.com/Nazar4i/react-movies",children:"Repo"})})})]})})}function d(){return Object(r.jsx)("footer",{className:"blue-grey darken-4",children:Object(r.jsxs)("div",{className:"footer-copyright",children:["\xa9 ",(new Date).getFullYear()," Copyright Text",Object(r.jsx)("a",{className:"grey-text text-lighten-4 right",href:"https://github.com/Nazar4i",children:"Repo"})]})})}var j=c(8),l=c(2),u=c(3);function b(){return Object(r.jsx)("div",{className:"progress",children:Object(r.jsx)("div",{className:"indeterminate"})})}function h(e){var t=e.id,c=e.name,n=e.description,i=e.price,a=e.full_background,s=e.addToBasket,o=void 0===s?Function.prototype:s,d={id:t,name:c,price:i};return Object(r.jsxs)("div",{className:"goods-item card",children:[Object(r.jsx)("div",{className:"card-image",children:Object(r.jsx)("img",{src:a,alt:c})}),Object(r.jsxs)("div",{className:"card-content",children:[Object(r.jsx)("span",{className:"card-title",children:c}),Object(r.jsx)("p",{children:n})]}),Object(r.jsxs)("div",{className:"card-action",children:[Object(r.jsx)("button",{className:"btn",onClick:function(){return o(d)},children:"\u041a\u0443\u043f\u0438\u0442\u0438"}),Object(r.jsxs)("span",{className:"right",style:{fontSize:"1.8rem"},children:[i," $"]})]})]})}function O(e){var t=e.goods,c=void 0===t?[]:t,n=e.addToBasket,i=void 0===n?Function.prototype:n;return Object(r.jsx)("div",{children:Object(r.jsx)("div",{className:"goods-list",children:c.length?c.map((function(e){return Object(r.jsx)(h,Object(l.a)(Object(l.a)({},e),{},{addToBasket:i}),e.id)})):Object(r.jsx)("h4",{children:"\u0422\u043e\u0432\u0430\u0440\u0456\u0432 \u043d\u0435 \u0437\u043d\u0430\u0439\u0434\u0435\u043d\u043e..."})})})}function m(e){var t=e.quantity,c=void 0===t?0:t,n=e.handleBasketShow,i=void 0===n?Function.prototype:n;return Object(r.jsxs)("div",{className:"cart blue darken-4 white-text",onClick:i,children:[Object(r.jsx)("i",{className:"material-icons",children:"shopping_cart"}),c?Object(r.jsx)("span",{className:"cart-quantity",children:c}):null]})}function x(e){var t=e.id,c=e.name,n=e.price,i=e.index,a=e.quantity,s=e.removeFromBasket,o=void 0===s?Function.prototype:s,d=e.incQuantity,j=void 0===d?Function.prototype:d,l=e.decQuantity,u=void 0===l?Function.prototype:l;return Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:c}),Object(r.jsx)("td",{children:a}),Object(r.jsx)("td",{children:Object(r.jsxs)("span",{className:"count-wrap",children:[Object(r.jsx)("i",{className:"material-icons",onClick:function(){return u(t,i)},children:"indeterminate_check_box"}),n*a," $",Object(r.jsx)("i",{className:"material-icons",onClick:function(){return j(t)},children:"add_box"})]})}),Object(r.jsx)("td",{children:Object(r.jsx)("i",{className:"material-icons basket-delete",onClick:function(){return o(t)},children:"close"})})]})}function p(e){var t=e.order,c=e.handleBasketShow,i=void 0===c?Function.prototype:c,a=e.removeFromBasket,s=void 0===a?Function.prototype:a,o=e.incQuantity,d=void 0===o?Function.prototype:o,j=e.decQuantity,u=void 0===j?Function.prototype:j,b=t.reduce((function(e,t){return e+t.price*t.quantity}),0);return Object(r.jsxs)("ul",{className:"collection basket-list",children:[Object(r.jsxs)("li",{className:"collection-item active",children:["\u041a\u043e\u0440\u0437\u0438\u043d\u0430",Object(r.jsx)("span",{className:"secondary-content",children:Object(r.jsx)("i",{className:"material-icons basket-close",onClick:i,children:"close"})})]}),t.length?Object(r.jsx)("div",{style:{padding:"0 20px"},children:Object(r.jsxs)("table",{className:"highlight centered",children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"\u041d\u0430\u0437\u0432\u0430 \u0442\u043e\u0432\u0430\u0440\u0443"}),Object(r.jsx)("th",{children:"\u041a\u0456\u043b\u044c\u043a\u0456\u0441\u0442\u044c"}),Object(r.jsx)("th",{children:"\u0426\u0456\u043d\u0430"}),Object(r.jsx)("th",{children:"\u0414\u0456\u0457"})]})}),Object(r.jsx)("tbody",{children:t.map((function(e,t){return Object(n.createElement)(x,Object(l.a)(Object(l.a)({},e),{},{key:e.id,index:t,removeFromBasket:s,incQuantity:d,decQuantity:u}))}))})]})}):Object(r.jsx)("li",{className:"collection-item",children:"\u041a\u043e\u0440\u0437\u0438\u043d\u0430 \u043f\u0443\u0441\u0442\u0430 "}),Object(r.jsxs)("li",{className:"collection-item active",children:["\u0417\u0430\u0433\u0430\u043b\u044c\u043d\u0430 \u0432\u0430\u0440\u0442\u0456\u0441\u0442\u044c: ",b," $"]}),Object(r.jsx)("li",{className:"collection-item right",children:Object(r.jsx)("button",{className:"btn-small",children:"\u041e\u0444\u043e\u0440\u043c\u0438\u0442\u0438"})})]})}function v(e){var t=e.name,c=void 0===t?"":t,i=e.closeAlert,a=void 0===i?Function.prototype:i;return Object(n.useEffect)((function(){var e=setTimeout(a,3e3);return function(){clearTimeout(e)}}),[c]),Object(r.jsx)("div",{id:"toast-container",children:Object(r.jsxs)("div",{className:"toast",children:[c," \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0443"]})})}function f(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),c=t[0],i=t[1],a=Object(n.useState)(!0),s=Object(u.a)(a,2),o=s[0],d=s[1],h=Object(n.useState)([]),x=Object(u.a)(h,2),f=x[0],y=x[1],N=Object(n.useState)(!1),g=Object(u.a)(N,2),k=g[0],F=g[1],q=Object(n.useState)(""),B=Object(u.a)(q,2),S=B[0],w=B[1],Q=function(){F(!k)},C=function(e){var t=f.filter((function(t){return t.id!==e}));y(t)};return Object(n.useEffect)((function(){fetch("https://fortniteapi.io/v1/shop?lang=en",{headers:{Authorization:"daa9dc35-ef57e11c-12a9bb55-33ca1470"}}).then((function(e){return e.json()})).then((function(e){e.featured&&i(e.featured),d(!1)}))}),[]),Object(r.jsxs)("main",{className:"container content",children:[Object(r.jsx)(m,{quantity:f.length,handleBasketShow:Q}),o?Object(r.jsx)(b,{}):Object(r.jsx)(O,{goods:c,addToBasket:function(e){var t=f.findIndex((function(t){return t.id===e.id}));if(t<0){var c=Object(l.a)(Object(l.a)({},e),{},{quantity:1});y([].concat(Object(j.a)(f),[c]))}else{var n=f.map((function(e,c){return c===t?Object(l.a)(Object(l.a)({},e),{},{quantity:e.quantity+1}):e}));y(n)}w(e.name)}}),k&&Object(r.jsx)(p,{order:f,handleBasketShow:Q,removeFromBasket:C,incQuantity:function(e){var t=f.map((function(t){return t.id===e?Object(l.a)(Object(l.a)({},t),{},{quantity:t.quantity+1}):t}));y(t)},decQuantity:function(e,t){var c=f.map((function(t){return t.id===e?Object(l.a)(Object(l.a)({},t),{},{quantity:t.quantity-1}):t}));0===c[t].quantity?C(e):y(c)}}),S&&Object(r.jsx)(v,{name:S,closeAlert:function(){w("")}})]})}var y=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(o,{}),Object(r.jsx)(f,{}),Object(r.jsx)(d,{})]})};s.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(y,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.d0ce8785.chunk.js.map