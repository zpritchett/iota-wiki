"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[28238],{51384:function(e,t,n){n.d(t,{Z:function(){return f}});var r=n(19756),a=n(67294),o=n(73727),i=n(6832),c=n(71699),l=n(19901),u=(0,a.createContext)({collectLink:function(){}}),s=n(51402),m=n(79861),d=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];var f=function(e){var t,n,f=e.isNavLink,h=e.to,v=e.href,b=e.activeClassName,g=e.isActive,E=e["data-noBrokenLinkCheck"],p=e.autoAddBaseUrl,k=void 0===p||p,w=(0,r.Z)(e,d),y=(0,i.Z)().siteConfig,C=y.trailingSlash,Z=y.baseUrl,S=(0,s.C)().withBaseUrl,_=(0,a.useContext)(u),N=h||v,L=(0,c.Z)(N),T=null==N?void 0:N.replace("pathname://",""),M=void 0!==T?(n=T,k&&function(e){return e.startsWith("/")}(n)?S(n):n):void 0;M&&L&&(M=(0,m.applyTrailingSlash)(M,{trailingSlash:C,baseUrl:Z}));var B,O=(0,a.useRef)(!1),P=f?o.OL:o.rU,U=l.Z.canUseIntersectionObserver;(0,a.useEffect)((function(){return!U&&L&&null!=M&&window.docusaurus.prefetch(M),function(){U&&B&&B.disconnect()}}),[M,U,L]);var D=null!==(t=null==M?void 0:M.startsWith("#"))&&void 0!==t&&t,A=!M||!L||D;return M&&L&&!D&&!E&&_.collectLink(M),A?a.createElement("a",Object.assign({href:M},N&&!L&&{target:"_blank",rel:"noopener noreferrer"},w)):a.createElement(P,Object.assign({},w,{onMouseEnter:function(){O.current||null==M||(window.docusaurus.preload(M),O.current=!0)},innerRef:function(e){var t,n;U&&e&&L&&(t=e,n=function(){null!=M&&window.docusaurus.prefetch(M)},(B=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(B.unobserve(t),B.disconnect(),n())}))}))).observe(t))},to:M||""},f&&{isActive:g,activeClassName:b}))}},71699:function(e,t,n){function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return a}})},51402:function(e,t,n){n.d(t,{C:function(){return o},Z:function(){return i}});var r=n(6832),a=n(71699);function o(){var e=(0,r.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var o=void 0===r?{}:r,i=o.forcePrependBaseUrl,c=void 0!==i&&i,l=o.absolute,u=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(c)return t+n;var s=n.startsWith(t)?n:t+n.replace(/^\//,"");return u?e+s:s}(o,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},78168:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(67294),a="iconExternalLink_3J9K",o=function(e){var t=e.width,n=void 0===t?13.5:t,o=e.height,i=void 0===o?13.5:o;return r.createElement("svg",{width:n,height:i,"aria-hidden":"true",viewBox:"0 0 24 24",className:a},r.createElement("path",{fill:"currentColor",d:"M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"}))}},4194:function(e,t,n){var r=n(22122),a=n(19756),o=n(67294),i=["width","height"];t.Z=function(e){var t=e.width,n=void 0===t?20:t,c=e.height,l=void 0===c?20:c,u=(0,a.Z)(e,i);return o.createElement("svg",(0,r.Z)({viewBox:"0 0 20 20",width:n,height:l,"aria-hidden":"true"},u),o.createElement("path",{fill:"currentColor",d:"M19.753 10.909c-.624-1.707-2.366-2.726-4.661-2.726-.09 0-.176.002-.262.006l-.016-2.063 3.525-.607c.115-.019.133-.119.109-.231-.023-.111-.167-.883-.188-.976-.027-.131-.102-.127-.207-.109-.104.018-3.25.461-3.25.461l-.013-2.078c-.001-.125-.069-.158-.194-.156l-1.025.016c-.105.002-.164.049-.162.148l.033 2.307s-3.061.527-3.144.543c-.084.014-.17.053-.151.143.019.09.19 1.094.208 1.172.018.08.072.129.188.107l2.924-.504.035 2.018c-1.077.281-1.801.824-2.256 1.303-.768.807-1.207 1.887-1.207 2.963 0 1.586.971 2.529 2.328 2.695 3.162.387 5.119-3.06 5.769-4.715 1.097 1.506.256 4.354-2.094 5.98-.043.029-.098.129-.033.207l.619.756c.08.096.206.059.256.023 2.51-1.73 3.661-4.515 2.869-6.683zm-7.386 3.188c-.966-.121-.944-.914-.944-1.453 0-.773.327-1.58.876-2.156a3.21 3.21 0 011.229-.799l.082 4.277a2.773 2.773 0 01-1.243.131zm2.427-.553l.046-4.109c.084-.004.166-.01.252-.01.773 0 1.494.145 1.885.361.391.217-1.023 2.713-2.183 3.758zm-8.95-7.668a.196.196 0 00-.196-.145h-1.95a.194.194 0 00-.194.144L.008 16.916c-.017.051-.011.076.062.076h1.733c.075 0 .099-.023.114-.072l1.008-3.318h3.496l1.008 3.318c.016.049.039.072.113.072h1.734c.072 0 .078-.025.062-.076-.014-.05-3.083-9.741-3.494-11.04zm-2.618 6.318l1.447-5.25 1.447 5.25H3.226z"}))}},36247:function(e,t,n){n.d(t,{Z:function(){return he}});var r=n(67294),a=n(86010),o=n(5977),i=n(54416),c=n(19257),l="skipToContent_1oUP";function u(e){e.setAttribute("tabindex","-1"),e.focus(),e.removeAttribute("tabindex")}var s=function(){var e=(0,r.useRef)(null),t=(0,o.k6)().action;return(0,c.SL)((function(n){var r=n.location;e.current&&!r.hash&&"PUSH"===t&&u(e.current)})),r.createElement("div",{ref:e},r.createElement("a",{href:"#",className:l,onClick:function(e){e.preventDefault();var t=document.querySelector("main:first-of-type")||document.querySelector(".main-wrapper");t&&u(t)}},r.createElement(i.Z,{id:"theme.common.skipToMainContent",description:"The skip to content label used for accessibility, allowing to rapidly navigate to main content with keyboard tab/enter navigation"},"Skip to main content")))},m=n(22122),d=n(19756),f=["width","height","className"];function h(e){var t=e.width,n=void 0===t?20:t,a=e.height,o=void 0===a?20:a,i=e.className,c=(0,d.Z)(e,f);return r.createElement("svg",(0,m.Z)({className:i,viewBox:"0 0 24 24",width:n,height:o,fill:"currentColor"},c),r.createElement("path",{d:"M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"}))}var v="announcementBar_3WsW",b="announcementBarPlaceholder_2m9F",g="announcementBarClose_38nx",E="announcementBarContent_3EUC";var p=function(){var e=(0,c.nT)(),t=e.isClosed,n=e.close,o=(0,c.LU)().announcementBar;if(!o)return null;var l=o.content,u=o.backgroundColor,s=o.textColor,m=o.isCloseable;return!l||m&&t?null:r.createElement("div",{className:v,style:{backgroundColor:u,color:s},role:"banner"},m&&r.createElement("div",{className:b}),r.createElement("div",{className:E,dangerouslySetInnerHTML:{__html:l}}),m?r.createElement("button",{type:"button",className:(0,a.Z)("clean-btn close",g),onClick:n,"aria-label":(0,i.I)({id:"theme.AnnouncementBar.closeButtonAriaLabel",message:"Close",description:"The ARIA label for close button of announcement bar"})},r.createElement(h,{width:14,height:14})):null)},k=n(42738),w=n(5086),y=n(26266),C=n(88002),Z=function(e){var t=(0,o.TH)(),n=(0,r.useState)(e),a=n[0],i=n[1],l=(0,r.useRef)(!1),u=(0,r.useState)(0),s=u[0],m=u[1],d=(0,r.useCallback)((function(e){null!==e&&m(e.getBoundingClientRect().height)}),[]);return(0,C.Z)((function(t,n){var r=t.scrollY,a=null==n?void 0:n.scrollY;if(e)if(r<s)i(!0);else{if(l.current)return l.current=!1,void i(!1);a&&0===r&&i(!0);var o=document.documentElement.scrollHeight-s,c=window.innerHeight;a&&r>=a?i(!1):r+c<o&&i(!0)}}),[s,l]),(0,c.SL)((function(t){e&&!t.location.hash&&i(!0)})),(0,r.useEffect)((function(){e&&t.hash&&(l.current=!0)}),[t.hash]),{navbarRef:d,isNavbarVisible:a}};var S=function(e){void 0===e&&(e=!0),(0,r.useEffect)((function(){return document.body.style.overflow=e?"hidden":"visible",function(){document.body.style.overflow="visible"}}),[e])},_=n(27213),N=n(57617),L=n(64090),T=n(90974),M=["width","height","className"],B=function(e){var t=e.width,n=void 0===t?30:t,a=e.height,o=void 0===a?30:a,i=e.className,c=(0,d.Z)(e,M);return r.createElement("svg",(0,m.Z)({className:i,width:n,height:o,viewBox:"0 0 30 30","aria-hidden":"true"},c),r.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))},O=["width","height","className"];function P(e){var t=e.width,n=void 0===t?20:t,a=e.height,o=void 0===a?20:a,i=e.className,c=(0,d.Z)(e,O);return r.createElement("svg",(0,m.Z)({className:i,viewBox:"0 0 413.348 413.348",width:n,height:o,fill:"currentColor"},c),r.createElement("path",{d:"m413.348 24.354-24.354-24.354-182.32 182.32-182.32-182.32-24.354 24.354 182.32 182.32-182.32 182.32 24.354 24.354 182.32-182.32 182.32 182.32 24.354-24.354-182.32-182.32z"}))}var U="toggle_3Zt9",D="navbarHideable_2qcr",A="navbarHidden_3yey",I="navbarSidebarToggle_wkoY",x="navbarSidebarCloseSvg_2XuS",R="right";function j(){return(0,c.LU)().navbar.items}function W(){var e=(0,c.LU)().colorMode.disableSwitch,t=(0,y.Z)(),n=t.isDarkTheme,a=t.setLightTheme,o=t.setDarkTheme;return{isDarkTheme:n,toggle:(0,r.useCallback)((function(e){return e.target.checked?o():a()}),[a,o]),disabled:e}}function z(e){var t=e.sidebarShown,n=e.toggleSidebar;S(t);var o=j(),l=W(),u=function(e){var t,n=e.sidebarShown,a=e.toggleSidebar,o=null==(t=(0,c.g8)())?void 0:t({toggleSidebar:a}),i=(0,c.D9)(o),l=(0,r.useState)((function(){return!1})),u=l[0],s=l[1];(0,r.useEffect)((function(){o&&!i&&s(!0)}),[o,i]);var m=!!o;return(0,r.useEffect)((function(){m?n||s(!0):s(!1)}),[n,m]),{shown:u,hide:(0,r.useCallback)((function(){s(!1)}),[]),content:o}}({sidebarShown:t,toggleSidebar:n});return r.createElement("div",{className:"navbar-sidebar"},r.createElement("div",{className:"navbar-sidebar__brand"},r.createElement(T.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title"}),!l.disabled&&r.createElement(w.Z,{className:I,checked:l.isDarkTheme,onChange:l.toggle}),r.createElement("button",{type:"button",className:"clean-btn navbar-sidebar__close",onClick:n},r.createElement(P,{width:20,height:20,className:x}))),r.createElement("div",{className:(0,a.Z)("navbar-sidebar__items",{"navbar-sidebar__items--show-secondary":u.shown})},r.createElement("div",{className:"navbar-sidebar__item menu"},r.createElement("ul",{className:"menu__list"},o.map((function(e,t){return r.createElement(L.Z,(0,m.Z)({mobile:!0},e,{onClick:n,key:t}))})))),r.createElement("div",{className:"navbar-sidebar__item menu"},o.length>0&&r.createElement("button",{type:"button",className:"clean-btn navbar-sidebar__back",onClick:u.hide},r.createElement(i.Z,{id:"theme.navbar.mobileSidebarSecondaryMenu.backButtonLabel",description:"The label of the back button to return to main menu, inside the mobile navbar sidebar secondary menu (notably used to display the docs sidebar)"},"\u2190 Back to main menu")),u.content)))}var H=function(){var e,t=(0,c.LU)().navbar,n=t.hideOnScroll,o=t.style,i=function(){var e=(0,_.Z)(),t="mobile"===e,n=(0,r.useState)(!1),a=n[0],o=n[1];(0,c.Rb)((function(){a&&o(!1)}));var i=(0,r.useCallback)((function(){o((function(e){return!e}))}),[]);return(0,r.useEffect)((function(){"desktop"===e&&o(!1)}),[e]),{shouldRender:t,toggle:i,shown:a}}(),l=W(),u=(0,N.useActivePlugin)(),s=Z(n),d=s.navbarRef,f=s.isNavbarVisible,h=j(),v=h.some((function(e){return"search"===e.type})),b=function(e){return{leftItems:e.filter((function(e){var t;return"left"===(null!=(t=e.position)?t:R)})),rightItems:e.filter((function(e){var t;return"right"===(null!=(t=e.position)?t:R)}))}}(h),g=b.leftItems,E=b.rightItems;return r.createElement("nav",{ref:d,className:(0,a.Z)("navbar","navbar--fixed-top",(e={"navbar--dark":"dark"===o,"navbar--primary":"primary"===o,"navbar-sidebar--show":i.shown},e[D]=n,e[A]=n&&!f,e))},r.createElement("div",{className:"navbar__inner"},r.createElement("div",{className:"navbar__items"},((null==h?void 0:h.length)>0||u)&&r.createElement("button",{"aria-label":"Navigation bar toggle",className:"navbar__toggle clean-btn",type:"button",tabIndex:0,onClick:i.toggle,onKeyDown:i.toggle},r.createElement(B,null)),r.createElement(T.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title"}),g.map((function(e,t){return r.createElement(L.Z,(0,m.Z)({},e,{key:t}))}))),r.createElement("div",{className:"navbar__items navbar__items--right"},E.map((function(e,t){return r.createElement(L.Z,(0,m.Z)({},e,{key:t}))})),!l.disabled&&r.createElement(w.Z,{className:U,checked:l.isDarkTheme,onChange:l.toggle}),!v&&r.createElement(k.Z,null))),r.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:i.toggle}),i.shouldRender&&r.createElement(z,{sidebarShown:i.shown,toggleSidebar:i.toggle}))},q=n(91148),K=n(19901),F=(0,c.WA)("theme"),V="light",Y="dark",G=function(e){return e===Y?Y:V},X=function(e){(0,c.WA)("theme").set(G(e))},Q=function(){var e=(0,c.LU)().colorMode,t=e.defaultMode,n=e.disableSwitch,a=e.respectPrefersColorScheme,o=(0,r.useState)(function(e){return K.Z.canUseDOM?G(document.documentElement.getAttribute("data-theme")):G(e)}(t)),i=o[0],l=o[1],u=(0,r.useCallback)((function(){l(V),X(V)}),[]),s=(0,r.useCallback)((function(){l(Y),X(Y)}),[]);return(0,r.useEffect)((function(){document.documentElement.setAttribute("data-theme",G(i))}),[i]),(0,r.useEffect)((function(){if(!n)try{var e=F.get();null!==e&&l(G(e))}catch(t){console.error(t)}}),[l]),(0,r.useEffect)((function(){n&&!a||window.matchMedia("(prefers-color-scheme: dark)").addListener((function(e){var t=e.matches;l(t?Y:V)}))}),[]),{isDarkTheme:i===Y,setLightTheme:u,setDarkTheme:s}},J=n(15502);var $=function(e){var t=Q(),n=t.isDarkTheme,a=t.setLightTheme,o=t.setDarkTheme;return r.createElement(J.Z.Provider,{value:{isDarkTheme:n,setLightTheme:a,setDarkTheme:o}},e.children)},ee="docusaurus.tab.",te=function(){var e=(0,r.useState)({}),t=e[0],n=e[1],a=(0,r.useCallback)((function(e,t){(0,c.WA)("docusaurus.tab."+e).set(t)}),[]);return(0,r.useEffect)((function(){try{var e={};(0,c._f)().forEach((function(t){if(t.startsWith(ee)){var n=t.substring(ee.length);e[n]=(0,c.WA)(t).get()}})),n(e)}catch(t){console.error(t)}}),[]),{tabGroupChoices:t,setTabGroupChoices:function(e,t){n((function(n){var r;return Object.assign({},n,((r={})[e]=t,r))})),a(e,t)}}},ne=n(54179);var re=function(e){var t=te(),n=t.tabGroupChoices,a=t.setTabGroupChoices;return r.createElement(ne.Z.Provider,{value:{tabGroupChoices:n,setTabGroupChoices:a}},e.children)};function ae(e){var t=e.children;return r.createElement($,null,r.createElement(c.pl,null,r.createElement(re,null,r.createElement(c.L5,null,r.createElement(c.Cn,null,t)))))}var oe=n(9932),ie=n(6832),ce=n(51402);function le(e){var t=e.locale,n=e.version,a=e.tag,o=t;return r.createElement(oe.Z,null,o&&r.createElement("meta",{name:"docsearch:language",content:o}),n&&r.createElement("meta",{name:"docsearch:version",content:n}),a&&r.createElement("meta",{name:"docsearch:docusaurus_tag",content:a}))}var ue=n(37027);function se(){var e=(0,ie.Z)().i18n,t=e.defaultLocale,n=e.locales,a=(0,c.l5)();return r.createElement(oe.Z,null,n.map((function(e){return r.createElement("link",{key:e,rel:"alternate",href:a.createUrl({locale:e,fullyQualified:!0}),hrefLang:e})})),r.createElement("link",{rel:"alternate",href:a.createUrl({locale:t,fullyQualified:!0}),hrefLang:"x-default"}))}function me(e){var t=e.permalink,n=(0,ie.Z)().siteConfig.url,a=function(){var e=(0,ie.Z)().siteConfig.url,t=(0,o.TH)().pathname;return e+(0,ce.Z)(t)}(),i=t?""+n+t:a;return r.createElement(oe.Z,null,r.createElement("meta",{property:"og:url",content:i}),r.createElement("link",{rel:"canonical",href:i}))}function de(e){var t=(0,ie.Z)(),n=t.siteConfig.favicon,a=t.i18n,o=a.currentLocale,i=a.localeConfigs,l=(0,c.LU)(),u=l.metadatas,s=l.image,d=e.title,f=e.description,h=e.image,v=e.keywords,b=e.searchMetadatas,g=(0,ce.Z)(n),E=(0,c.pe)(d),p=o,k=i[o].direction;return r.createElement(r.Fragment,null,r.createElement(oe.Z,null,r.createElement("html",{lang:p,dir:k}),n&&r.createElement("link",{rel:"shortcut icon",href:g}),r.createElement("title",null,E),r.createElement("meta",{property:"og:title",content:E}),r.createElement("meta",{name:"twitter:card",content:"summary_large_image"})),s&&r.createElement(ue.Z,{image:s}),h&&r.createElement(ue.Z,{image:h}),r.createElement(ue.Z,{description:f,keywords:v}),r.createElement(me,null),r.createElement(se,null),r.createElement(le,(0,m.Z)({tag:c.HX,locale:o},b)),r.createElement(oe.Z,null,u.map((function(e,t){return r.createElement("meta",(0,m.Z)({key:"metadata_"+t},e))}))))}var fe=function(){(0,r.useEffect)((function(){var e="navigation-with-keyboard";function t(t){"keydown"===t.type&&"Tab"===t.key&&document.body.classList.add(e),"mousedown"===t.type&&document.body.classList.remove(e)}return document.addEventListener("keydown",t),document.addEventListener("mousedown",t),function(){document.body.classList.remove(e),document.removeEventListener("keydown",t),document.removeEventListener("mousedown",t)}}),[])};var he=function(e){var t=e.children,n=e.noFooter,o=e.wrapperClassName,i=e.pageClassName;return fe(),r.createElement(ae,null,r.createElement(de,e),r.createElement(s,null),r.createElement(p,null),r.createElement(H,null),r.createElement("div",{className:(0,a.Z)(c.kM.wrapper.main,o,i)},t),!n&&r.createElement(q.Z,null))}},90974:function(e,t,n){var r=n(22122),a=n(19756),o=n(67294),i=n(51384),c=n(34455),l=n(51402),u=n(6832),s=n(19257),m=["imageClassName","titleClassName"];t.Z=function(e){var t=(0,u.Z)().siteConfig.title,n=(0,s.LU)().navbar,d=n.title,f=n.logo,h=void 0===f?{src:""}:f,v=e.imageClassName,b=e.titleClassName,g=(0,a.Z)(e,m),E=(0,l.Z)(h.href||"/"),p={light:(0,l.Z)(h.src),dark:(0,l.Z)(h.srcDark||h.src)};return o.createElement(i.Z,(0,r.Z)({to:E},g,h.target&&{target:h.target}),h.src&&o.createElement(c.Z,{className:v,sources:p,alt:h.alt||d||t}),null!=d&&o.createElement("b",{className:b},d))}},37027:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(67294),a=n(9932),o=n(19257),i=n(51402);function c(e){var t=e.title,n=e.description,c=e.keywords,l=e.image,u=e.children,s=(0,o.pe)(t),m=(0,i.C)().withBaseUrl,d=l?m(l,{absolute:!0}):void 0;return r.createElement(a.Z,null,t&&r.createElement("title",null,s),t&&r.createElement("meta",{property:"og:title",content:s}),n&&r.createElement("meta",{name:"description",content:n}),n&&r.createElement("meta",{property:"og:description",content:n}),c&&r.createElement("meta",{name:"keywords",content:Array.isArray(c)?c.join(","):c}),d&&r.createElement("meta",{property:"og:image",content:d}),d&&r.createElement("meta",{name:"twitter:image",content:d}),u)}},15502:function(e,t,n){var r=n(67294).createContext(void 0);t.Z=r},34455:function(e,t,n){n.d(t,{Z:function(){return m}});var r=n(22122),a=n(19756),o=n(67294),i=n(86010),c=n(5730),l=n(26266),u={themedImage:"themedImage_1VuW","themedImage--light":"themedImage--light_3UqQ","themedImage--dark":"themedImage--dark_hz6m"},s=["sources","className","alt"],m=function(e){var t=(0,c.Z)(),n=(0,l.Z)().isDarkTheme,m=e.sources,d=e.className,f=e.alt,h=void 0===f?"":f,v=(0,a.Z)(e,s),b=t?n?["dark"]:["light"]:["light","dark"];return o.createElement(o.Fragment,null,b.map((function(e){return o.createElement("img",(0,r.Z)({key:e,src:m[e],alt:h,className:(0,i.Z)(u.themedImage,u["themedImage--"+e],d)},v))})))}},54179:function(e,t,n){var r=(0,n(67294).createContext)(void 0);t.Z=r},88002:function(e,t,n){var r=n(67294),a=n(19901),o=function(){return a.Z.canUseDOM?{scrollX:window.pageXOffset,scrollY:window.pageYOffset}:null};t.Z=function(e,t){void 0===t&&(t=[]);var n=(0,r.useRef)(o()),a=function(){var t=o();e&&e(t,n.current),n.current=t};(0,r.useEffect)((function(){var e={passive:!0};return a(),window.addEventListener("scroll",a,e),function(){return window.removeEventListener("scroll",a,e)}}),t)}},26266:function(e,t,n){var r=n(67294),a=n(15502);t.Z=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useThemeContext" is used outside of "Layout" component. Please see https://docusaurus.io/docs/api/themes/configuration#usethemecontext.');return e}},27213:function(e,t,n){var r=n(67294),a=n(19901),o="desktop",i="mobile",c="ssr";function l(){return a.Z.canUseDOM?window.innerWidth>996?o:i:c}t.Z=function(){var e=(0,r.useState)((function(){return l()})),t=e[0],n=e[1];return(0,r.useEffect)((function(){function e(){n(l())}return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e),clearTimeout(undefined)}}),[]),t}},54357:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=t.trailingSlash,r=t.baseUrl;if(e.startsWith("#"))return e;if(void 0===n)return e;var a,o=e.split(/[#?]/)[0],i="/"===o||o===r?o:(a=o,n?function(e){return e.endsWith("/")?e:e+"/"}(a):function(e){return e.endsWith("/")?e.slice(0,-1):e}(a));return e.replace(o,i)}},79861:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var a=n(54357);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return r(a).default}});var o=n(45479);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return r(o).default}})},45479:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},42738:function(e,t,n){n.d(t,{Z:function(){return L}});var r=n(22122),a=n(19756),o=n(67294),i=n(73935),c=n(6832),l=n(5977),u=n(51402),s=n(51384),m=n(71895);function d(){return o.createElement("svg",{width:"15",height:"15",className:"DocSearch-Control-Key-Icon"},o.createElement("path",{d:"M4.505 4.496h2M5.505 5.496v5M8.216 4.496l.055 5.993M10 7.5c.333.333.5.667.5 1v2M12.326 4.5v5.996M8.384 4.496c1.674 0 2.116 0 2.116 1.5s-.442 1.5-2.116 1.5M3.205 9.303c-.09.448-.277 1.21-1.241 1.203C1 10.5.5 9.513.5 8V7c0-1.57.5-2.5 1.464-2.494.964.006 1.134.598 1.24 1.342M12.553 10.5h1.953",strokeWidth:"1.2",stroke:"currentColor",fill:"none",strokeLinecap:"square"}))}var f=n(36963);function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function v(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b="Ctrl";var g=o.forwardRef((function(e,t){var n=e.translations,r=void 0===n?{}:n,a=v(e,["translations"]),i=r.buttonText,c=void 0===i?"Search":i,l=r.buttonAriaLabel,u=void 0===l?"Search":l,s=(0,o.useMemo)((function(){return"undefined"!=typeof navigator?/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)?"\u2318":b:null}),[]);return o.createElement("button",h({type:"button",className:"DocSearch DocSearch-Button","aria-label":u},a,{ref:t}),o.createElement("span",{className:"DocSearch-Button-Container"},o.createElement(f.W,null),o.createElement("span",{className:"DocSearch-Button-Placeholder"},c)),o.createElement("span",{className:"DocSearch-Button-Keys"},null!==s&&o.createElement(o.Fragment,null,o.createElement("span",{className:"DocSearch-Button-Key"},s===b?o.createElement(d,null):s),o.createElement("span",{className:"DocSearch-Button-Key"},"K"))))})),E=n(57617),p=n(19257);function k(){var e,t=function(){var e=(0,c.Z)().i18n,t=(0,E.useAllDocsData)(),n=(0,E.useActivePluginAndVersion)(),r=(0,p.Oh)(),a=[p.HX].concat(Object.keys(t).map((function(e){var a,o,i=(null==n||null==(a=n.activePlugin)?void 0:a.pluginId)===e?n.activeVersion:void 0,c=r[e],l=t[e].versions.find((function(e){return e.isLast})),u=null!=(o=null!=i?i:c)?o:l;return(0,p.os)(e,u.name)})));return{locale:e.currentLocale,tags:a}}(),n=t.locale,r=t.tags,a="language:="+n;return r.length>0&&(e="docusaurus_tag:=["+r.join(",")+"]"),[a,e].filter((function(e){return e})).join(" && ")}var w=n(54416),y="searchBox_2HBr",C=["contextualSearch"],Z=null;function S(e){var t=e.hit,n=e.children;return o.createElement(s.Z,{to:t.url},n)}function _(e){var t=e.state,n=e.onClose,r=(0,m.Z)().generateSearchPageLink;return o.createElement(s.Z,{to:r(t.query),onClick:n},"See all ",t.context.nbHits," results")}function N(e){var t,s,m=e.contextualSearch,d=(0,a.Z)(e,C),f=((0,c.Z)().siteMetadata,k()),h=null!=(t=null==(s=d.searchParameters)?void 0:s.filter_by)?t:"",v=m?[f,h].filter((function(e){return e})).join(" && "):h,b=Object.assign({filter_by:v},d.typesenseSearchParameters),E=d.typesenseServerConfig,p=d.typesenseCollectionName,N=(0,u.C)().withBaseUrl,L=(0,l.k6)(),T=(0,o.useRef)(null),M=(0,o.useRef)(null),B=(0,o.useState)(!1),O=B[0],P=B[1],U=(0,o.useState)(null),D=U[0],A=U[1],I=(0,o.useCallback)((function(){return Z?Promise.resolve():Promise.all([Promise.all([n.e(87757),n.e(51133),n.e(52423),n.e(99964)]).then(n.bind(n,52423)),Promise.all([n.e(40532),n.e(22664)]).then(n.bind(n,22664)),Promise.all([n.e(40532),n.e(30186)]).then(n.bind(n,30186))]).then((function(e){var t=e[0].DocSearchModal;Z=t}))}),[]),x=(0,o.useCallback)((function(){I().then((function(){T.current=document.createElement("div"),document.body.insertBefore(T.current,document.body.firstChild),P(!0)}))}),[I,P]),R=(0,o.useCallback)((function(){P(!1),T.current.remove()}),[P]),j=(0,o.useCallback)((function(e){I().then((function(){P(!0),A(e.key)}))}),[I,P,A]),W=(0,o.useRef)({navigate:function(e){var t=e.itemUrl;L.push(t)}}).current,z=(0,o.useRef)((function(e){return e.map((function(e){var t=document.createElement("a");return t.href=e.url,Object.assign({},e,{url:N(""+t.pathname+t.hash)})}))})).current,H=(0,o.useMemo)((function(){return function(e){return o.createElement(_,(0,r.Z)({},e,{onClose:R}))}}),[R]);!function(e){var t=e.isOpen,n=e.onOpen,r=e.onClose,a=e.onInput,i=e.searchButtonRef;o.useEffect((function(){function e(e){(27===e.keyCode&&t||"k"===e.key&&(e.metaKey||e.ctrlKey)||!function(e){var t=e.target,n=t.tagName;return t.isContentEditable||"INPUT"===n||"SELECT"===n||"TEXTAREA"===n}(e)&&"/"===e.key&&!t)&&(e.preventDefault(),t?r():document.body.classList.contains("DocSearch--active")||document.body.classList.contains("DocSearch--active")||n()),i&&i.current===document.activeElement&&a&&/[a-zA-Z0-9]/.test(String.fromCharCode(e.keyCode))&&a(e)}return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[t,n,r,a,i])}({isOpen:O,onOpen:x,onClose:R,onInput:j,searchButtonRef:M});var q=(0,w.I)({id:"theme.SearchBar.label",message:"Search",description:"The ARIA label and placeholder for search button"});return o.createElement(o.Fragment,null,o.createElement("div",{className:y},o.createElement(g,{onTouchStart:I,onFocus:I,onMouseOver:I,onClick:x,ref:M,translations:{buttonText:q,buttonAriaLabel:q}})),O&&(0,i.createPortal)(o.createElement(Z,(0,r.Z)({onClose:R,initialScrollY:window.scrollY,initialQuery:D,navigator:W,transformItems:z,hitComponent:S,resultsFooterComponent:H},d,{typesenseSearchParameters:b,typesenseServerConfig:E,typesenseCollectionName:p})),T.current))}var L=function(){var e=(0,c.Z)().siteConfig;return o.createElement(N,e.themeConfig.typesense)}},71895:function(e,t,n){var r=n(5977),a=n(19901),o=n(6832);t.Z=function(){var e=(0,r.k6)(),t=(0,r.TH)(),n=(0,o.Z)().siteConfig,i=(n=void 0===n?{}:n).baseUrl;return{searchValue:a.Z.canUseDOM&&new URLSearchParams(t.search).get("q")||"",updateSearchPath:function(n){var r=new URLSearchParams(t.search);n?r.set("q",n):r.delete("q"),e.replace({search:r.toString()})},generateSearchPageLink:function(e){return i+"search?q="+encodeURIComponent(e)}}}},36963:function(e,t,n){n.d(t,{W:function(){return a}});var r=n(67294);function a(){return r.createElement("svg",{width:"20",height:"20",className:"DocSearch-Search-Icon",viewBox:"0 0 20 20"},r.createElement("path",{d:"M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z",stroke:"currentColor",fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round"}))}}}]);