(this["webpackJsonpmovie-route"]=this["webpackJsonpmovie-route"]||[]).push([[0],[,,,,,,,,,function(e,t,c){},,,,,,,function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(0),i=c.n(n),r=c(10),s=c.n(r),a=(c(16),function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,24)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),n(e),i(e),r(e),s(e)}))}),o=c(5),j=c(4),l=(c(17),c(2)),u=(c(9),c(1));var b=function(){var e=Object(n.useState)([]),t=Object(j.a)(e,2),c=t[0],i=t[1];return Object(n.useEffect)((function(){fetch("https://yts.mx/api/v2/list_movies.json?sort_by=download_count").then((function(e){return e.json()})).then((function(e){var t=e.data.movies;i(t)}))}),[]),Object(u.jsx)("div",{className:"home-cards",children:c.map((function(e,t){return Object(u.jsxs)("div",{className:"home-card",children:[Object(u.jsx)("img",{src:e.medium_cover_image,alt:""}),Object(u.jsx)("p",{children:e.title})]})}))})};var d=function(){return Object(u.jsx)("h1",{children:"ABOUT PAGE"})},m=c(8),h=c(11),O=(c(19),["to","children"]);var v=function(){var e=Object(l.g)(),t=Object(n.useState)([]),c=Object(j.a)(t,2),i=c[0],r=c[1],s=Object(o.d)(),a=Object(j.a)(s,2),b=a[0],d=a[1],v=function(e){return e.isActive?{color:"orangered"}:{color:""}};Object(n.useEffect)((function(){fetch("https://yts.mx/api/v2/list_movies.json?sort_by=download_count").then((function(e){return e.json()})).then((function(e){var t=e.data.movies;r(t)}))}),[]);var x=function(e){var t=e.to,c=e.children,n=Object(h.a)(e,O),i=Object(l.e)();return console.log(i),Object(u.jsx)(o.c,Object(m.a)(Object(m.a)({to:t+i.search},n),{},{children:c}))},f=i.filter((function(e){var t=b.get("filter");return!t||e.title.toLowerCase().includes(t.toLowerCase())})),p=f[e.movieId];return Object(u.jsxs)("div",{className:"movies",children:[Object(u.jsx)("div",{className:"movie-search1",children:Object(u.jsx)("input",{className:"filter-movie",placeholder:"Search movie...",value:b.get("filter")||"",onChange:function(e){var t=e.target.value;d(t?{filter:t}:{})}})}),p?Object(u.jsxs)("div",{className:"movie-container",children:[Object(u.jsx)("h1",{children:p.title}),Object(u.jsx)("img",{src:p.medium_cover_image,alt:""}),Object(u.jsx)("p",{children:Object(u.jsx)("b",{children:p.genres.join(" / ")})}),Object(u.jsx)("span",{children:p.summary})]}):Object(u.jsx)("h1",{children:"MOVIE PAGE"}),f.map((function(e,t){return Object(u.jsx)(x,{to:"/movies/".concat(t),className:"movie-item",style:v,children:e.title},t)}))]})};var x=function(){return Object(u.jsx)("h1",{children:"NOT FOUND PAGE!"})};c(20);var f=function(e){var t=e.menus;return Object(u.jsx)(u.Fragment,{children:t.map((function(e,t){return Object(u.jsx)(o.b,{to:e.url,className:"menu-item",children:e.name},t)}))})};c(21);function p(e){var t=e.children,c=e.size,n=e.color,i=e.width,r=e.handleClick,s=e.disabled;return Object(u.jsx)("button",{className:"Button ".concat(c," ").concat(n," ").concat(i),onClick:r,disabled:s,children:t})}var g=p;p.defaultProps={size:"medium",color:"tomato",disabled:!1};c(22);var N=function(e){var t=e.open,c=e.children;return Object(u.jsx)("div",{className:"sidebar ".concat(t?"open":""),children:Object(u.jsx)("div",{className:"sidebar-menus",children:c})})};var _=function(){var e=Object(n.useState)(!1),t=Object(j.a)(e,2),c=t[0],i=t[1];return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(g,{handleClick:function(){i(!c)},children:"Menu"}),Object(u.jsx)(N,{open:c,children:Object(u.jsx)(f,{menus:[{url:"/",name:"Home"},{url:"/about",name:"About"},{url:"/movies",name:"Movie"}]})}),Object(u.jsxs)(l.c,{children:[Object(u.jsx)(l.a,{exact:!0,path:"/",element:Object(u.jsx)(b,{})}),Object(u.jsx)(l.a,{exact:!0,path:"/about",element:Object(u.jsx)(d,{})}),Object(u.jsx)(l.a,{path:"/movies",element:Object(u.jsx)(v,{}),children:Object(u.jsx)(l.a,{path:":movieId",element:Object(u.jsx)(v,{})})}),Object(u.jsx)(l.a,{exact:!0,path:"*",element:Object(u.jsx)(x,{})})]})]})};var C=function(){return Object(u.jsx)(o.a,{children:Object(u.jsx)(_,{})})};s.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(C,{})}),document.getElementById("root")),a()}],[[23,1,2]]]);
//# sourceMappingURL=main.d037794f.chunk.js.map