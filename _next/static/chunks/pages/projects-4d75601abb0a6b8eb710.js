(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[327],{8237:function(e,t,n){"use strict";n.d(t,{Z:function(){return s},h:function(){return o}});var r=n(5893),a=n(6021),c=n.n(a);function s(e){var t=e.content;return(0,r.jsxs)("div",{className:c().about,children:[(0,r.jsx)("h3",{children:"About"}),(0,r.jsx)("p",{children:t})]})}function o(e){var t=e.title,n=e.icon;return(0,r.jsx)("div",{className:c().category,children:(0,r.jsxs)("h1",{children:[t," ",n&&(0,r.jsx)("i",{className:n})]})})}},6071:function(e,t,n){"use strict";var r=n(3038),a=n(862);t.default=void 0;var c=a(n(7294)),s=n(1689),o=n(2441),i=n(5749),l={};function u(e,t,n,r){if(e&&(0,s.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var a=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[t+"%"+n+(a?"%"+a:"")]=!0}}var f=function(e){var t=!1!==e.prefetch,n=(0,o.useRouter)(),a=n&&n.asPath||"/",f=c.default.useMemo((function(){var t=(0,s.resolveHref)(a,e.href,!0),n=r(t,2),c=n[0],o=n[1];return{href:c,as:e.as?(0,s.resolveHref)(a,e.as):o||c}}),[a,e.href,e.as]),h=f.href,d=f.as,p=e.children,v=e.replace,m=e.shallow,x=e.scroll,j=e.locale;"string"===typeof p&&(p=c.default.createElement("a",null,p));var _=c.Children.only(p),g=_&&"object"===typeof _&&_.ref,b=(0,i.useIntersection)({rootMargin:"200px"}),N=r(b,2),y=N[0],k=N[1],w=c.default.useCallback((function(e){y(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,y]);(0,c.useEffect)((function(){var e=k&&t&&(0,s.isLocalURL)(h),r="undefined"!==typeof j?j:n&&n.locale,a=l[h+"%"+d+(r?"%"+r:"")];e&&!a&&u(n,h,d,{locale:r})}),[d,h,k,j,t,n]);var E={ref:w,onClick:function(e){_.props&&"function"===typeof _.props.onClick&&_.props.onClick(e),e.defaultPrevented||function(e,t,n,r,a,c,o,i){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,s.isLocalURL)(n))&&(e.preventDefault(),null==o&&(o=r.indexOf("#")<0),t[a?"replace":"push"](n,r,{shallow:c,locale:i,scroll:o}))}(e,n,h,d,v,m,x,j)},onMouseEnter:function(e){(0,s.isLocalURL)(h)&&(_.props&&"function"===typeof _.props.onMouseEnter&&_.props.onMouseEnter(e),u(n,h,d,{priority:!0}))}};if(e.passHref||"a"===_.type&&!("href"in _.props)){var P="undefined"!==typeof j?j:n&&n.locale,C=n&&n.isLocaleDomain&&(0,s.getDomainLocale)(d,P,n&&n.locales,n&&n.domainLocales);E.href=C||(0,s.addBasePath)((0,s.addLocale)(d,P,n&&n.defaultLocale))}return c.default.cloneElement(_,E)};t.default=f},5749:function(e,t,n){"use strict";var r=n(3038);t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!s,i=(0,a.useRef)(),l=(0,a.useState)(!1),u=r(l,2),f=u[0],h=u[1],d=(0,a.useCallback)((function(e){i.current&&(i.current(),i.current=void 0),n||f||e&&e.tagName&&(i.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=o.get(t);if(n)return n;var r=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return o.set(t,n={id:t,observer:a,elements:r}),n}(n),a=r.id,c=r.observer,s=r.elements;return s.set(e,t),c.observe(e),function(){s.delete(e),c.unobserve(e),0===s.size&&(c.disconnect(),o.delete(a))}}(e,(function(e){return e&&h(e)}),{rootMargin:t}))}),[n,t,f]);return(0,a.useEffect)((function(){if(!s&&!f){var e=(0,c.requestIdleCallback)((function(){return h(!0)}));return function(){return(0,c.cancelIdleCallback)(e)}}}),[f]),[d,f]};var a=n(7294),c=n(8391),s="undefined"!==typeof IntersectionObserver;var o=new Map},5972:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var r=n(5893),a=n(9008),c=n(8735),s=n.n(c),o=n(1163),i=n(1664);function l(e){var t=e.title,n=e.href,a=e.icon;return(0,r.jsx)("li",{title:t,className:s().right,children:(0,r.jsx)("a",{href:n,className:a,target:"_blank"})})}function u(){var e=(0,o.useRouter)().pathname;return e=""===(e=e.substr(1))?"index":e,(0,r.jsxs)("div",{children:[(0,r.jsx)(a.default,{children:(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1, user-scalable=no"})}),(0,r.jsx)("style",{children:"            \n                    .".concat(s().topnav," #").concat(e," {\n                        background-color: var(--dark-orchid);\n                        color: white;\n                    }\n                    ")}),(0,r.jsx)("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"}),(0,r.jsx)("link",{rel:"stylesheet",href:"https://icons.coreui.io/css/all.min.04afe194583853dbc897278f1cd35603f76521c9272735b5c39cc8a10f3e6adf.css"}),(0,r.jsxs)("ul",{className:s().topnav,children:[(0,r.jsxs)("li",{id:"title",className:s().title,children:[(0,r.jsx)("img",{src:"https://i.ibb.co/kcw3rCd/icon-circle.png"}),(0,r.jsx)(i.default,{href:"/",children:"TheJayDuck"})]}),(0,r.jsx)("li",{id:"drawings",className:s().right,children:(0,r.jsx)(i.default,{href:"/drawings",children:"Drawings"})}),(0,r.jsx)("li",{id:"projects",className:s().right,children:(0,r.jsx)(i.default,{href:"/projects",children:"Projects"})}),(0,r.jsx)("li",{id:"index",className:s().right,children:(0,r.jsx)(i.default,{href:"/",children:"About"})}),(0,r.jsx)("li",{className:s().right,children:(0,r.jsxs)("ul",{className:s().social,children:[(0,r.jsx)(l,{title:"Itch.io Page",href:"https://thejayduck.itch.io/",icon:"fab fa-itch-io"}),(0,r.jsx)(l,{title:"Twitter Page",href:"https://twitter.com/thejayduck",icon:"fab fa-twitter"}),(0,r.jsx)(l,{title:"Toyhou.se Page",href:"https://toyhou.se/TheJayDuck",icon:"fas fa-home"}),(0,r.jsx)(l,{title:"Artfol.me Page",href:"https://artfol.me/thejayduck",icon:"fas fa-palette"}),(0,r.jsx)(l,{title:"DeviantArt Page",href:"https://deviantart.com/thejayduck",icon:"fab fa-deviantart"}),(0,r.jsx)(l,{title:"Github Page",href:"https://github.com/thejayduck",icon:"fab fa-github"}),(0,r.jsx)(l,{title:"Contact Mail",href:"mailto:ardafevzi.armutcu@gmail.com",icon:"fa fa-envelope"})]})})]})]})}},759:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return b},default:function(){return N}});var r=n(5893),a=n(9008),c=n(7618),s=n.n(c),o=n(5972),i=n(8237),l=n(2766),u=n.n(l);function f(e){var t=e.renderItem,n=e.data,a=e.header,c=e.icon;return(0,r.jsxs)("div",{children:[(0,r.jsx)(i.h,{title:a,icon:c}),(0,r.jsx)("ul",{className:u().contentParent,children:n.map((function(e){return e?t(e):(0,r.jsx)("li",{children:" Nothing to See Here "})}))})]})}var h=n(7757),d=n.n(h);function p(e,t,n,r,a,c,s){try{var o=e[c](s),i=o.value}catch(l){return void n(l)}o.done?t(i):Promise.resolve(i).then(r,a)}function v(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var c=e.apply(t,n);function s(e){p(c,r,a,s,o,"next",e)}function o(e){p(c,r,a,s,o,"throw",e)}s(void 0)}))}}var m=n(7294);function x(e){var t=e.repoName,n=e.image,a=(0,m.useState)(null),c=a[0],s=a[1],o=(0,m.useState)([]),l=o[0],f=o[1],h=(0,m.useState)([]),p=h[0],x=h[1];return(0,m.useEffect)(v(d().mark((function e(){var n,r;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.github.com/repos/".concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:r=e.sent,s({name:r.name,description:r.description,html_url:r.html_url,language:r.language,homepage:r.homepage});case 7:case"end":return e.stop()}}),e)}))),[]),(0,m.useEffect)(v(d().mark((function e(){var n,r;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.github.com/repos/".concat(t,"/languages"));case 2:return n=e.sent,e.next=5,n.json();case 5:r=e.sent,f(r);case 7:case"end":return e.stop()}}),e)}))),[]),(0,m.useEffect)(v(d().mark((function e(){var t,n,r,a;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!c||!l){e.next=10;break}return e.next=3,fetch("https://api.github.com/gists/564dd064f4eb8688051d55f61d3754ae");case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,r=JSON.parse(n.files["scriptColors.json"].content),a=Object.keys(l).map((function(e){return{color:r[e],ratio:l[e],language:e}})),x(a);case 10:case"end":return e.stop()}}),e)}))),[c,l]),(0,r.jsx)("li",{className:u().contentElement,children:c?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:u().repoLanguages,children:p.map((function(e){var t=e.color,n=e.ratio,a=e.language;return(0,r.jsx)("div",{title:a,className:u().colorData,style:{backgroundColor:t,flex:n}},a)}))}),(0,r.jsxs)("div",{className:u().repoContent,children:[n&&(0,r.jsx)("img",{className:u().repoAvatar,src:n}),(0,r.jsx)("h2",{children:(0,r.jsxs)("a",{className:u().repoTitle,target:"_blank",href:c.html_url,children:[c.name," ",(0,r.jsx)("i",{className:"fas fa-link"})]})})]}),(0,r.jsx)(i.Z,{content:c.description})]}):(0,r.jsx)("h2",{children:"loading..."})})}var j=n(7706),_=n.n(j);function g(e){var t=e.data;return(0,r.jsx)("li",{className:_().contentElement,children:(0,r.jsxs)("div",{styles:_().content,children:[(0,r.jsx)("img",{className:_().cover,src:t.cover_url}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h2",{children:(0,r.jsxs)("a",{className:_().repoTitle,target:"_blank",href:t.url,children:[t.title," ",(0,r.jsx)("i",{className:"fas fa-link"})]})}),(0,r.jsx)(i.Z,{content:t.short_text})]})]})})}var b=!0;function N(e){var t=e.data,n=e.games;return(0,r.jsxs)("div",{children:[(0,r.jsxs)(a.default,{children:[(0,r.jsx)("title",{children:"TheJayDuck - PROJECTS"}),(0,r.jsx)("meta",{property:"og:description",content:"Projects Page"})]}),(0,r.jsx)(o.default,{}),(0,r.jsxs)("div",{className:"".concat(s().pageContent," pageContent"),children:[(0,r.jsx)(f,{data:n,header:"Itch.io Projects",icon:"fab fa-itch-io",renderItem:function(e){return(0,r.jsx)(g,{data:e},e.id)}}),"                ",(0,r.jsx)("br",{}),(0,r.jsx)(f,{data:t.githubList,header:"Github Projects",icon:"fab fa-github",renderItem:function(e){return(0,r.jsx)(x,{repoName:e.title,image:e.image},e.title)}})]})]})}},8947:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects",function(){return n(759)}])},8735:function(e){e.exports={title:"Navbar_title__16ROT",social:"Navbar_social__1OulQ",topnav:"Navbar_topnav__2a8kW",right:"Navbar_right__2rJqJ",responsive:"Navbar_responsive__2N8Pb",icon:"Navbar_icon__IbgGj"}},7618:function(e){e.exports={pageContent:"Projects_pageContent__1Pg4T",contentElement:"Projects_contentElement__2yZFA"}},2766:function(e){e.exports={contentParent:"GithubData_contentParent__1ZWbt",contentElement:"GithubData_contentElement__3yZmv",repoLanguages:"GithubData_repoLanguages__3cZx0",colorData:"GithubData_colorData__wFu5A",repoAvatar:"GithubData_repoAvatar__1FECu",repoContent:"GithubData_repoContent__1yxqe"}},6021:function(e){e.exports={about:"Header_about__1OVZm",category:"Header_category__M-MAf"}},7706:function(e){e.exports={contentParent:"ItchioData_contentParent__3YbAN",contentElement:"ItchioData_contentElement__1JJZq",content:"ItchioData_content__1g_vY",cover:"ItchioData_cover__1C-TF"}},1664:function(e,t,n){e.exports=n(6071)},1163:function(e,t,n){e.exports=n(2441)}},function(e){e.O(0,[774,888,179],(function(){return t=8947,e(e.s=t);var t}));var t=e.O();_N_E=t}]);