(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[327],{6071:function(e,t,n){"use strict";var a=n(3038),r=n(862);t.default=void 0;var o=r(n(7294)),c=n(1689),s=n(2441),i=n(5749),l={};function u(e,t,n,a){if(e&&(0,c.isLocalURL)(t)){e.prefetch(t,n,a).catch((function(e){0}));var r=a&&"undefined"!==typeof a.locale?a.locale:e&&e.locale;l[t+"%"+n+(r?"%"+r:"")]=!0}}var f=function(e){var t=!1!==e.prefetch,n=(0,s.useRouter)(),r=n&&n.asPath||"/",f=o.default.useMemo((function(){var t=(0,c.resolveHref)(r,e.href,!0),n=a(t,2),o=n[0],s=n[1];return{href:o,as:e.as?(0,c.resolveHref)(r,e.as):s||o}}),[r,e.href,e.as]),h=f.href,d=f.as,p=e.children,v=e.replace,m=e.shallow,x=e.scroll,j=e.locale;"string"===typeof p&&(p=o.default.createElement("a",null,p));var _=o.Children.only(p),g=_&&"object"===typeof _&&_.ref,b=(0,i.useIntersection)({rootMargin:"200px"}),N=a(b,2),y=N[0],k=N[1],w=o.default.useCallback((function(e){y(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,y]);(0,o.useEffect)((function(){var e=k&&t&&(0,c.isLocalURL)(h),a="undefined"!==typeof j?j:n&&n.locale,r=l[h+"%"+d+(a?"%"+a:"")];e&&!r&&u(n,h,d,{locale:a})}),[d,h,k,j,t,n]);var C={ref:w,onClick:function(e){_.props&&"function"===typeof _.props.onClick&&_.props.onClick(e),e.defaultPrevented||function(e,t,n,a,r,o,s,i){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,c.isLocalURL)(n))&&(e.preventDefault(),null==s&&(s=a.indexOf("#")<0),t[r?"replace":"push"](n,a,{shallow:o,locale:i,scroll:s}))}(e,n,h,d,v,m,x,j)},onMouseEnter:function(e){(0,c.isLocalURL)(h)&&(_.props&&"function"===typeof _.props.onMouseEnter&&_.props.onMouseEnter(e),u(n,h,d,{priority:!0}))}};if(e.passHref||"a"===_.type&&!("href"in _.props)){var P="undefined"!==typeof j?j:n&&n.locale,E=n&&n.isLocaleDomain&&(0,c.getDomainLocale)(d,P,n&&n.locales,n&&n.domainLocales);C.href=E||(0,c.addBasePath)((0,c.addLocale)(d,P,n&&n.defaultLocale))}return o.default.cloneElement(_,C)};t.default=f},5749:function(e,t,n){"use strict";var a=n(3038);t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!c,i=(0,r.useRef)(),l=(0,r.useState)(!1),u=a(l,2),f=u[0],h=u[1],d=(0,r.useCallback)((function(e){i.current&&(i.current(),i.current=void 0),n||f||e&&e.tagName&&(i.current=function(e,t,n){var a=function(e){var t=e.rootMargin||"",n=s.get(t);if(n)return n;var a=new Map,r=new IntersectionObserver((function(e){e.forEach((function(e){var t=a.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return s.set(t,n={id:t,observer:r,elements:a}),n}(n),r=a.id,o=a.observer,c=a.elements;return c.set(e,t),o.observe(e),function(){c.delete(e),o.unobserve(e),0===c.size&&(o.disconnect(),s.delete(r))}}(e,(function(e){return e&&h(e)}),{rootMargin:t}))}),[n,t,f]);return(0,r.useEffect)((function(){if(!c&&!f){var e=(0,o.requestIdleCallback)((function(){return h(!0)}));return function(){return(0,o.cancelIdleCallback)(e)}}}),[f]),[d,f]};var r=n(7294),o=n(8391),c="undefined"!==typeof IntersectionObserver;var s=new Map},5972:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var a=n(5893),r=n(9008),o=n(8735),c=n.n(o),s=n(1163),i=n(1664);function l(e){var t=e.title,n=e.href,r=e.icon;return(0,a.jsx)("li",{title:t,className:c().right,children:(0,a.jsx)("a",{href:n,className:r,target:"_blank"})})}function u(){var e=(0,s.useRouter)().pathname;return e=""===(e=e.substr(1))?"index":e,(0,a.jsxs)("div",{children:[(0,a.jsx)(r.default,{children:(0,a.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1, user-scalable=no"})}),(0,a.jsx)("style",{children:"            \n                    .".concat(c().topnav," #").concat(e," {\n                        background-color: var(--dark-orchid);\n                        color: white;\n                    }\n                    ")}),(0,a.jsx)("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"}),(0,a.jsx)("link",{rel:"stylesheet",href:"https://icons.coreui.io/css/all.min.04afe194583853dbc897278f1cd35603f76521c9272735b5c39cc8a10f3e6adf.css"}),(0,a.jsxs)("ul",{className:c().topnav,children:[(0,a.jsxs)("li",{id:"title",className:c().title,children:[(0,a.jsx)("img",{src:"https://i.ibb.co/kcw3rCd/icon-circle.png"}),(0,a.jsx)(i.default,{href:"/",children:"TheJayDuck"})]}),(0,a.jsx)("li",{id:"drawings",className:c().right,children:(0,a.jsx)(i.default,{href:"/drawings",children:"Drawings"})}),(0,a.jsx)("li",{id:"projects",className:c().right,children:(0,a.jsx)(i.default,{href:"/projects",children:"Projects"})}),(0,a.jsx)("li",{id:"index",className:c().right,children:(0,a.jsx)(i.default,{href:"/",children:"About"})}),(0,a.jsx)("li",{className:c().right,children:(0,a.jsxs)("ul",{className:c().social,children:[(0,a.jsx)(l,{title:"Itch.io Page",href:"https://thejayduck.itch.io/",icon:"fab fa-itch-io"}),(0,a.jsx)(l,{title:"Twitter Page",href:"https://twitter.com/thejayduck",icon:"fab fa-twitter"}),(0,a.jsx)(l,{title:"Toyhou.se Page",href:"https://toyhou.se/TheJayDuck",icon:"fas fa-home"}),(0,a.jsx)(l,{title:"Artfol.me Page",href:"https://artfol.me/thejayduck",icon:"fas fa-palette"}),(0,a.jsx)(l,{title:"DeviantArt Page",href:"https://deviantart.com/thejayduck",icon:"fab fa-deviantart"}),(0,a.jsx)(l,{title:"Github Page",href:"https://github.com/thejayduck",icon:"fab fa-github"}),(0,a.jsx)(l,{title:"Contact Mail",href:"mailto:ardafevzi.armutcu@gmail.com",icon:"fa fa-envelope"})]})})]})]})}},5311:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return k},default:function(){return w}});var a=n(5893),r=n(9008),o=n(4992),c=n.n(o),s=n(9090),i=n.n(s);function l(e){var t=e.content;return(0,a.jsxs)("div",{className:i().about,children:[(0,a.jsx)("h3",{children:"About"}),(0,a.jsx)("p",{children:t})]})}function u(e){var t=e.title,n=e.icon;return(0,a.jsx)("div",{className:i().category,children:(0,a.jsxs)("h1",{children:[t," ",(0,a.jsx)("i",{className:n})]})})}function f(e){var t=e.data;return(0,a.jsxs)("div",{children:[(0,a.jsx)(u,{title:"Itch.io Projects",icon:"fab fa-itch-io"}),(0,a.jsx)("ul",{className:c().contentParent,children:t.map((function(e){return e?(0,a.jsxs)("li",{className:c().contentElement,children:[(0,a.jsx)("iframe",{frameBorder:"0",src:"https://itch.io/embed/".concat(e.id,"?bg_color=0a090c&fg_color=ffffff&link_color=a217d9&border_color=43383b")}),(0,a.jsxs)("div",{className:c().aboutCover,children:[(0,a.jsx)("h2",{children:(0,a.jsxs)("a",{target:"_blank",href:e.url,children:[e.title," ",(0,a.jsx)("i",{className:"fas fa-link"})]})}),(0,a.jsx)(l,{content:e.about}),(0,a.jsx)("div",{className:c().gameGenre,children:e.genre})]})]},e.title):(0,a.jsx)("li",{children:" Nothing to See Here "})}))})]})}var h=n(2766),d=n.n(h),p=n(7757),v=n.n(p);function m(e,t,n,a,r,o,c){try{var s=e[o](c),i=s.value}catch(l){return void n(l)}s.done?t(i):Promise.resolve(i).then(a,r)}function x(e){return function(){var t=this,n=arguments;return new Promise((function(a,r){var o=e.apply(t,n);function c(e){m(o,a,r,c,s,"next",e)}function s(e){m(o,a,r,c,s,"throw",e)}c(void 0)}))}}var j=n(7294);function _(e){var t=e.data,n=e.image,r=(0,j.useState)(null),o=r[0],c=r[1],s=(0,j.useState)([]),i=s[0],u=s[1],f=(0,j.useState)([]),h=f[0],p=f[1];return(0,j.useEffect)(x(v().mark((function e(){var n,a;return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.github.com/repos/".concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:a=e.sent,c({name:a.name,description:a.description,html_url:a.html_url,language:a.language,homepage:a.homepage});case 7:case"end":return e.stop()}}),e)}))),[]),(0,j.useEffect)(x(v().mark((function e(){var n,a;return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.github.com/repos/".concat(t,"/languages"));case 2:return n=e.sent,e.next=5,n.json();case 5:a=e.sent,u(a);case 7:case"end":return e.stop()}}),e)}))),[]),(0,j.useEffect)(x(v().mark((function e(){var t,n,a,r;return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!o||!i){e.next=10;break}return e.next=3,fetch("https://api.github.com/gists/564dd064f4eb8688051d55f61d3754ae");case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,a=JSON.parse(n.files["scriptColors.json"].content),r=Object.keys(i).map((function(e){return{color:a[e],ratio:i[e],language:e}})),p(r);case 10:case"end":return e.stop()}}),e)}))),[o,i]),(0,a.jsx)("li",{className:d().contentElement,children:o?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:d().repoLanguages,children:h.map((function(e){var t=e.color,n=e.ratio,r=e.language;return(0,a.jsx)("div",{title:r,className:d().colorData,style:{backgroundColor:t,flex:n}},r)}))}),(0,a.jsxs)("div",{className:d().repoContent,children:[n&&(0,a.jsx)("img",{className:d().repoCover,src:n}),(0,a.jsx)("h2",{children:(0,a.jsxs)("a",{className:d().repoTitle,target:"_blank",href:o.html_url,children:[o.name," ",(0,a.jsx)("i",{className:"fas fa-link"})]})})]}),(0,a.jsx)(l,{content:o.description})]}):(0,a.jsx)("h2",{children:"loading..."})})}function g(e){var t=e.data;return(0,a.jsxs)("div",{children:[(0,a.jsx)(u,{title:"Github Projects",icon:"fab fa-github"}),(0,a.jsx)("div",{className:d().contentParent,children:t.map((function(e){return e?(0,a.jsx)(_,{data:e.title,image:e.image},e.title):(0,a.jsx)("p",{children:" Nothing to See Here "})}))})]})}var b=n(7618),N=n.n(b),y=n(5972),k=!0;function w(e){var t=e.data;return(0,a.jsxs)("div",{children:[(0,a.jsxs)(r.default,{children:[(0,a.jsx)("title",{children:"TheJayDuck - PROJECTS"}),(0,a.jsx)("meta",{property:"og:description",content:"Projects Page"})]}),(0,a.jsx)(y.default,{}),(0,a.jsxs)("div",{className:"".concat(N().pageContent," pageContent"),children:[(0,a.jsx)(f,{data:t.gameList}),(0,a.jsx)("br",{}),(0,a.jsx)(g,{data:t.githubList})]})]})}},8947:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects",function(){return n(5311)}])},8735:function(e){e.exports={title:"Navbar_title__16ROT",social:"Navbar_social__1OulQ",topnav:"Navbar_topnav__2a8kW",right:"Navbar_right__2rJqJ",responsive:"Navbar_responsive__2N8Pb",icon:"Navbar_icon__IbgGj"}},7618:function(e){e.exports={pageContent:"Projects_pageContent__1Pg4T",contentElement:"Projects_contentElement__2yZFA"}},9090:function(e){e.exports={about:"About_about__2lXsQ",category:"About_category__141fY"}},4992:function(e){e.exports={contentParent:"GameData_contentParent__2DTes",contentElement:"GameData_contentElement__2TcdY",aboutCover:"GameData_aboutCover__2lDNB",gameGenre:"GameData_gameGenre__N3Uew"}},2766:function(e){e.exports={contentParent:"GithubData_contentParent__1ZWbt",contentElement:"GithubData_contentElement__3yZmv",repoLanguages:"GithubData_repoLanguages__3cZx0",colorData:"GithubData_colorData__wFu5A",aboutCover:"GithubData_aboutCover__3DUU5",repoCover:"GithubData_repoCover__2Z-SA",repoContent:"GithubData_repoContent__1yxqe",repoHomepage:"GithubData_repoHomepage__3nLoR"}},1664:function(e,t,n){e.exports=n(6071)},1163:function(e,t,n){e.exports=n(2441)}},function(e){e.O(0,[774,888,179],(function(){return t=8947,e(e.s=t);var t}));var t=e.O();_N_E=t}]);