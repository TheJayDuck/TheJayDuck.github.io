(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{6071:function(e,t,n){"use strict";var a=n(3038),r=n(862);t.default=void 0;var i=r(n(7294)),s=n(1689),c=n(2441),o=n(5749),l={};function u(e,t,n,a){if(e&&(0,s.isLocalURL)(t)){e.prefetch(t,n,a).catch((function(e){0}));var r=a&&"undefined"!==typeof a.locale?a.locale:e&&e.locale;l[t+"%"+n+(r?"%"+r:"")]=!0}}var f=function(e){var t=!1!==e.prefetch,n=(0,c.useRouter)(),r=n&&n.asPath||"/",f=i.default.useMemo((function(){var t=(0,s.resolveHref)(r,e.href,!0),n=a(t,2),i=n[0],c=n[1];return{href:i,as:e.as?(0,s.resolveHref)(r,e.as):c||i}}),[r,e.href,e.as]),d=f.href,h=f.as,p=e.children,j=e.replace,x=e.shallow,v=e.scroll,m=e.locale;"string"===typeof p&&(p=i.default.createElement("a",null,p));var _=i.Children.only(p),g=_&&"object"===typeof _&&_.ref,b=(0,o.useIntersection)({rootMargin:"200px"}),N=a(b,2),y=N[0],w=N[1],k=i.default.useCallback((function(e){y(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,y]);(0,i.useEffect)((function(){var e=w&&t&&(0,s.isLocalURL)(d),a="undefined"!==typeof m?m:n&&n.locale,r=l[d+"%"+h+(a?"%"+a:"")];e&&!r&&u(n,d,h,{locale:a})}),[h,d,w,m,t,n]);var C={ref:k,onClick:function(e){_.props&&"function"===typeof _.props.onClick&&_.props.onClick(e),e.defaultPrevented||function(e,t,n,a,r,i,c,o){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,s.isLocalURL)(n))&&(e.preventDefault(),null==c&&(c=a.indexOf("#")<0),t[r?"replace":"push"](n,a,{shallow:i,locale:o,scroll:c}))}(e,n,d,h,j,x,v,m)},onMouseEnter:function(e){(0,s.isLocalURL)(d)&&(_.props&&"function"===typeof _.props.onMouseEnter&&_.props.onMouseEnter(e),u(n,d,h,{priority:!0}))}};if(e.passHref||"a"===_.type&&!("href"in _.props)){var P="undefined"!==typeof m?m:n&&n.locale,L=n&&n.isLocaleDomain&&(0,s.getDomainLocale)(h,P,n&&n.locales,n&&n.domainLocales);C.href=L||(0,s.addBasePath)((0,s.addLocale)(h,P,n&&n.defaultLocale))}return i.default.cloneElement(_,C)};t.default=f},5749:function(e,t,n){"use strict";var a=n(3038);t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!s,o=(0,r.useRef)(),l=(0,r.useState)(!1),u=a(l,2),f=u[0],d=u[1],h=(0,r.useCallback)((function(e){o.current&&(o.current(),o.current=void 0),n||f||e&&e.tagName&&(o.current=function(e,t,n){var a=function(e){var t=e.rootMargin||"",n=c.get(t);if(n)return n;var a=new Map,r=new IntersectionObserver((function(e){e.forEach((function(e){var t=a.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return c.set(t,n={id:t,observer:r,elements:a}),n}(n),r=a.id,i=a.observer,s=a.elements;return s.set(e,t),i.observe(e),function(){s.delete(e),i.unobserve(e),0===s.size&&(i.disconnect(),c.delete(r))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,f]);return(0,r.useEffect)((function(){if(!s&&!f){var e=(0,i.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,i.cancelIdleCallback)(e)}}}),[f]),[h,f]};var r=n(7294),i=n(8391),s="undefined"!==typeof IntersectionObserver;var c=new Map},9481:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return f},default:function(){return d}});var a=n(5893),r=n(9008),i=n(4759),s=n.n(i);function c(e){var t=e.data;return(0,a.jsxs)("div",{children:[(0,a.jsx)("h1",{children:"FAQ"}),(0,a.jsx)("section",{children:(0,a.jsx)("div",{className:s().container,children:(0,a.jsx)("ul",{className:s().accordion,children:t.map((function(e,t){return(0,a.jsxs)("li",{className:s().accordionItem,id:"question".concat(t),children:[(0,a.jsxs)("a",{className:s().accordionLink,href:"#question".concat(t),children:["Q: ",e.question,(0,a.jsx)("i",{className:"".concat(s().icon," fas fa-plus ").concat(s().faPlus)}),(0,a.jsx)("i",{className:"".concat(s().icon," fas fa-minus ").concat(s().faMinus)})]}),(0,a.jsx)("div",{className:s().answer,children:(0,a.jsx)("p",{children:e.answer})})]},t)}))})})})]})}var o=n(5323),l=n.n(o),u=n(5972),f=!0;function d(e){var t=e.data;return(0,a.jsxs)("div",{children:[(0,a.jsxs)(r.default,{children:[(0,a.jsx)("title",{children:"TheJayDuck - ABOUT"}),(0,a.jsx)("meta",{property:"og:description",content:"About Page"})]}),(0,a.jsx)(u.default,{}),(0,a.jsx)("div",{}),(0,a.jsxs)("div",{className:"".concat(l().pageContent," pageContent"),children:[(0,a.jsx)("h1",{children:"I am Arda!"}),(0,a.jsxs)("h3",{children:["And I'm a programmer, an artist, and a university student. In my free time, I draw original characters and create games/apps.",(0,a.jsx)("br",{}),"You can scroll down further to read FAQ."]}),(0,a.jsxs)("div",{className:l().toolContainer,children:[(0,a.jsxs)("div",{className:l().tool,children:[(0,a.jsx)("h3",{children:"Programming Languages"}),(0,a.jsx)("p",{children:"C#, PHP, Rust*, JavaScript"})]}),(0,a.jsxs)("div",{className:l().tool,children:[(0,a.jsx)("h3",{children:"Software"}),(0,a.jsxs)("p",{children:["Visual Studio Code",(0,a.jsx)("br",{}),"MediBang Paint Pro (PC)",(0,a.jsx)("br",{}),"Infinite Painter (Android)",(0,a.jsx)("br",{}),"Unity Engine",(0,a.jsx)("br",{})]})]}),(0,a.jsxs)("div",{className:l().tool,children:[(0,a.jsx)("h3",{children:"Hardware"}),(0,a.jsxs)("p",{children:["Custom Built Desktop",(0,a.jsx)("br",{}),"Acer Swift 3 SF314-58G",(0,a.jsx)("br",{}),"Wacom Intuos Draw CTL-490",(0,a.jsx)("br",{}),"Samsung Galaxy Tab S6 Lite"]})]}),(0,a.jsx)("hr",{}),(0,a.jsx)("footer",{children:"* is put for software/language I am still learning"})]}),(0,a.jsx)("br",{}),(0,a.jsx)(c,{data:t.faq})]})]})}},5972:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var a=n(5893),r=n(9008),i=n(8735),s=n.n(i),c=n(1163),o=n(1664);function l(e){var t=e.title,n=e.href,r=e.icon;return(0,a.jsx)("li",{title:t,className:s().right,children:(0,a.jsx)("a",{href:n,className:r,target:"_blank"})})}function u(){var e=(0,c.useRouter)().pathname;return e=""===(e=e.substr(1))?"index":e,(0,a.jsxs)("div",{children:[(0,a.jsx)(r.default,{children:(0,a.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1, user-scalable=no"})}),(0,a.jsx)("style",{children:"            \n                    .".concat(s().topnav," #").concat(e," {\n                        background-color: var(--dark-orchid);\n                        color: white;\n                    }\n                    ")}),(0,a.jsx)("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"}),(0,a.jsx)("link",{rel:"stylesheet",href:"https://icons.coreui.io/css/all.min.04afe194583853dbc897278f1cd35603f76521c9272735b5c39cc8a10f3e6adf.css"}),(0,a.jsxs)("ul",{className:s().topnav,children:[(0,a.jsxs)("li",{id:"title",className:s().title,children:[(0,a.jsx)("img",{src:"https://i.ibb.co/kcw3rCd/icon-circle.png"}),(0,a.jsx)(o.default,{href:"/",children:"TheJayDuck"})]}),(0,a.jsx)("li",{id:"drawings",className:s().right,children:(0,a.jsx)(o.default,{href:"/drawings",children:"Drawings"})}),(0,a.jsx)("li",{id:"projects",className:s().right,children:(0,a.jsx)(o.default,{href:"/projects",children:"Projects"})}),(0,a.jsx)("li",{id:"index",className:s().right,children:(0,a.jsx)(o.default,{href:"/",children:"About"})}),(0,a.jsx)("li",{className:s().right,children:(0,a.jsxs)("ul",{className:s().social,children:[(0,a.jsx)(l,{title:"Itch.io Page",href:"https://thejayduck.itch.io/",icon:"fab fa-itch-io"}),(0,a.jsx)(l,{title:"Twitter Page",href:"https://twitter.com/thejayduck",icon:"fab fa-twitter"}),(0,a.jsx)(l,{title:"Toyhou.se Page",href:"https://toyhou.se/TheJayDuck",icon:"fas fa-home"}),(0,a.jsx)(l,{title:"Artfol.me Page",href:"https://artfol.me/thejayduck",icon:"fas fa-palette"}),(0,a.jsx)(l,{title:"DeviantArt Page",href:"https://deviantart.com/thejayduck",icon:"fab fa-deviantart"}),(0,a.jsx)(l,{title:"Github Page",href:"https://github.com/thejayduck",icon:"fab fa-github"}),(0,a.jsx)(l,{title:"Contact Mail",href:"mailto:ardafevzi.armutcu@gmail.com",icon:"fa fa-envelope"})]})})]})]})}},8581:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(9481)}])},5323:function(e){e.exports={pageContent:"Home_pageContent__25_DN",toolContainer:"Home_toolContainer__2ViWm",tool:"Home_tool__spUpH"}},8735:function(e){e.exports={title:"Navbar_title__16ROT",social:"Navbar_social__1OulQ",topnav:"Navbar_topnav__2a8kW",right:"Navbar_right__2rJqJ",responsive:"Navbar_responsive__2N8Pb",icon:"Navbar_icon__IbgGj"}},4759:function(e){e.exports={container:"FAQ_container__303G4",accordion:"FAQ_accordion__1eHaZ",accordionItem:"FAQ_accordionItem__18LZd",accordionLink:"FAQ_accordionLink__mpHSy",answer:"FAQ_answer__1Ry4j",faMinus:"FAQ_faMinus__uNSx2",faPlus:"FAQ_faPlus__2NF0H"}},1664:function(e,t,n){e.exports=n(6071)},1163:function(e,t,n){e.exports=n(2441)}},function(e){e.O(0,[774,888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);