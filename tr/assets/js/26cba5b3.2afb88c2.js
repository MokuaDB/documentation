"use strict";(self.webpackChunkArchcraft_Wiki=self.webpackChunkArchcraft_Wiki||[]).push([[4936],{3905:function(t,e,n){n.d(e,{Zo:function(){return m},kt:function(){return s}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var i=a.createContext({}),d=function(t){var e=a.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},m=function(t){var e=d(t.components);return a.createElement(i.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,i=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),k=d(n),s=r,g=k["".concat(i,".").concat(s)]||k[s]||u[s]||l;return n?a.createElement(g,o(o({ref:e},m),{},{components:n})):a.createElement(g,o({ref:e},m))}));function s(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=k;var p={};for(var i in e)hasOwnProperty.call(e,i)&&(p[i]=e[i]);p.originalType=t,p.mdxType="string"==typeof t?t:r,o[1]=p;for(var d=2;d<l;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},8215:function(t,e,n){var a=n(7294);e.Z=function(t){var e=t.children,n=t.hidden,r=t.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},e)}},5064:function(t,e,n){n.d(e,{Z:function(){return d}});var a=n(7294),r=n(9443);var l=function(){var t=(0,a.useContext)(r.Z);if(null==t)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return t},o=n(6010),p="tabItem_1uMI",i="tabItemActive_2DSg";var d=function(t){var e,n=t.lazy,r=t.block,d=t.defaultValue,m=t.values,u=t.groupId,k=t.className,s=a.Children.toArray(t.children),g=null!=m?m:s.map((function(t){return{value:t.props.value,label:t.props.label}})),N=null!=d?d:null==(e=s.find((function(t){return t.props.default})))?void 0:e.props.value,c=l(),b=c.tabGroupChoices,f=c.setTabGroupChoices,y=(0,a.useState)(N),h=y[0],w=y[1],v=[];if(null!=u){var O=b[u];null!=O&&O!==h&&g.some((function(t){return t.value===O}))&&w(O)}var x=function(t){var e=t.currentTarget,n=v.indexOf(e),a=g[n].value;w(a),null!=u&&(f(u,a),setTimeout((function(){var t,n,a,r,l,o,p,d;(t=e.getBoundingClientRect(),n=t.top,a=t.left,r=t.bottom,l=t.right,o=window,p=o.innerHeight,d=o.innerWidth,n>=0&&l<=d&&r<=p&&a>=0)||(e.scrollIntoView({block:"center",behavior:"smooth"}),e.classList.add(i),setTimeout((function(){return e.classList.remove(i)}),2e3))}),150))},C=function(t){var e,n=null;switch(t.key){case"ArrowRight":var a=v.indexOf(t.target)+1;n=v[a]||v[0];break;case"ArrowLeft":var r=v.indexOf(t.target)-1;n=v[r]||v[v.length-1]}null==(e=n)||e.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},k)},g.map((function(t){var e=t.value,n=t.label;return a.createElement("li",{role:"tab",tabIndex:h===e?0:-1,"aria-selected":h===e,className:(0,o.Z)("tabs__item",p,{"tabs__item--active":h===e}),key:e,ref:function(t){return v.push(t)},onKeyDown:C,onFocus:x,onClick:x},null!=n?n:e)}))),n?(0,a.cloneElement)(s.filter((function(t){return t.props.value===h}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},s.map((function(t,e){return(0,a.cloneElement)(t,{key:e,hidden:t.props.value!==h})}))))}},9443:function(t,e,n){var a=(0,n(7294).createContext)(void 0);e.Z=a},9750:function(t,e,n){n.r(e),n.d(e,{Highlight:function(){return u},contentTitle:function(){return i},default:function(){return s},frontMatter:function(){return p},metadata:function(){return d},toc:function(){return m}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),o=(n(5064),n(8215),["components"]),p={sidebar_position:1},i="Openbox",d={unversionedId:"window-managers/openbox",id:"window-managers/openbox",isDocsHomePage:!1,title:"Openbox",description:"For Archcraft community members, Edit the page.",source:"@site/i18n/tr/docusaurus-plugin-content-docs/current/window-managers/openbox.mdx",sourceDirName:"window-managers",slug:"/window-managers/openbox",permalink:"/tr/docs/window-managers/openbox",editUrl:"https://github.com/archcraft-os/documentation/edit/main/i18n/tr/docusaurus-plugin-content-docs/current/window-managers/openbox.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Y\xfckleme Sonras\u0131",permalink:"/tr/docs/install-archcraft/post-install"},next:{title:"Bspwm",permalink:"/tr/docs/window-managers/bspwm"}},m=[],u=function(t){var e=t.children,n=t.color;return(0,l.kt)("span",{style:{backgroundColor:n,borderRadius:"4px",color:"#fff",padding:"0 0.2rem 0 0.2rem"}},e)},k={toc:m,Highlight:u};function s(t){var e=t.components,n=(0,r.Z)(t,o);return(0,l.kt)("wrapper",(0,a.Z)({},k,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"openbox"},"Openbox"),(0,l.kt)("p",null,"For Archcraft community members, Edit the page."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Note: the mod Key in Archcraft Openbox is the Super Key (Aka: Windows key)")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Keybinding"),(0,l.kt)("th",{parentName:"tr",align:null},"Function"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"mod+Return")),(0,l.kt)("td",{parentName:"tr",align:null},"Open a terminal (alacritty)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"mod+f")),(0,l.kt)("td",{parentName:"tr",align:null},"Open a file manager (thunar)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"mod+w")),(0,l.kt)("td",{parentName:"tr",align:null},"Open a browser (firefox)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"mod+e")),(0,l.kt)("td",{parentName:"tr",align:null},"Open a text editor (geany)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"mod+(1-5)")),(0,l.kt)("td",{parentName:"tr",align:null},"Change Workspaces")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"mod+Shift+(1-5)")),(0,l.kt)("td",{parentName:"tr",align:null},"Move application to a specific Workspace")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"alt/mod+Tab")),(0,l.kt)("td",{parentName:"tr",align:null},"Switch applications (Microsoft windows style)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"mod+(Up/Down/Left/Right)")),(0,l.kt)("td",{parentName:"tr",align:null},"Snap window to corners")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"mod+k")),(0,l.kt)("td",{parentName:"tr",align:null},"Snap window to top right")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"mod+h")),(0,l.kt)("td",{parentName:"tr",align:null},"Snap window to top left")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"mod+j")),(0,l.kt)("td",{parentName:"tr",align:null},"Snap window to bottom left")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"mod+l")),(0,l.kt)("td",{parentName:"tr",align:null},"Snap window to bottom right")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"mod+alt+up")),(0,l.kt)("td",{parentName:"tr",align:null},"Move Window up")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"mod+alt+down")),(0,l.kt)("td",{parentName:"tr",align:null},"Move Window down")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"mod+alt+left")),(0,l.kt)("td",{parentName:"tr",align:null},"Move Window left")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"mod+alt+right")),(0,l.kt)("td",{parentName:"tr",align:null},"Move Window right")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"control+alt+right")),(0,l.kt)("td",{parentName:"tr",align:null},"Resize window to right")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"control+alt+left")),(0,l.kt)("td",{parentName:"tr",align:null},"Resize window to left")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"control+alt+down")),(0,l.kt)("td",{parentName:"tr",align:null},"Resize window to down")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"control+alt+up")),(0,l.kt)("td",{parentName:"tr",align:null},"Resize window to up")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"mod+Shift+Left/Right")),(0,l.kt)("td",{parentName:"tr",align:null},"Send Application to next/prev desktop")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"up+up+down+down+left+right+left+right+B+A")),(0,l.kt)("td",{parentName:"tr",align:null},"Get super powers")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"alt+F1")),(0,l.kt)("td",{parentName:"tr",align:null},"Opens app launcher")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"mod+n")),(0,l.kt)("td",{parentName:"tr",align:null},"Opens network menu")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"mod+x")),(0,l.kt)("td",{parentName:"tr",align:null},"Opens a powermenu")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"mod+m")),(0,l.kt)("td",{parentName:"tr",align:null},"Opens the music menu")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"mod+i")),(0,l.kt)("td",{parentName:"tr",align:null},"Opens internet menu")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"mod+s")),(0,l.kt)("td",{parentName:"tr",align:null},"Opens screenshoting menu")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"mod+r")),(0,l.kt)("td",{parentName:"tr",align:null},"Runs apps as root")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"mod+w")),(0,l.kt)("td",{parentName:"tr",align:null},"Opens windows menu")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"mod+p")),(0,l.kt)("td",{parentName:"tr",align:null},"Opens the color picker")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Print")),(0,l.kt)("td",{parentName:"tr",align:null},"Takes a screenshot")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"mod+Print")),(0,l.kt)("td",{parentName:"tr",align:null},"Takes a screenshot (5s delay)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Shift+Print")),(0,l.kt)("td",{parentName:"tr",align:null},"Takes a screenshot (10s delay)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Control+Print")),(0,l.kt)("td",{parentName:"tr",align:null},"Takes a screenshot of active window")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Control+Alt+Print")),(0,l.kt)("td",{parentName:"tr",align:null},"Takes a screenshot of an area")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"mod+v")),(0,l.kt)("td",{parentName:"tr",align:null},"Open tasks menu")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Control+Alt+t")),(0,l.kt)("td",{parentName:"tr",align:null},"Open xfce4-terminal")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Control+Alt+v")),(0,l.kt)("td",{parentName:"tr",align:null},"Open vim")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Control+Alt+n")),(0,l.kt)("td",{parentName:"tr",align:null},"Open neovim")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Control+Alt+r")),(0,l.kt)("td",{parentName:"tr",align:null},"Open ranger")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Control+Alt+h")),(0,l.kt)("td",{parentName:"tr",align:null},"Open htop")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Control+Alt+b")),(0,l.kt)("td",{parentName:"tr",align:null},"Open bashtop")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"alt+Control+l")),(0,l.kt)("td",{parentName:"tr",align:null},"Launches the lockscreen")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"control+shift+Escape")),(0,l.kt)("td",{parentName:"tr",align:null},"Exit openbox")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"control+Shift+BackSpace")),(0,l.kt)("td",{parentName:"tr",align:null},"Restart openbox")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"control+shift+R")),(0,l.kt)("td",{parentName:"tr",align:null},"Reconfigure openbox")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"mod+Escape")),(0,l.kt)("td",{parentName:"tr",align:null},"Select window and kill it (xkill)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"mod+c/q")),(0,l.kt)("td",{parentName:"tr",align:null},"Close focused window")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"alt+F5")),(0,l.kt)("td",{parentName:"tr",align:null},"Minimise window to taskbar")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"alt+F6")),(0,l.kt)("td",{parentName:"tr",align:null},"Toggle Maximize")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"alt+F7")),(0,l.kt)("td",{parentName:"tr",align:null},"ToggleDecorations")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"mod+d")),(0,l.kt)("td",{parentName:"tr",align:null},"Show desktop")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"alt+r")),(0,l.kt)("td",{parentName:"tr",align:null},"Resize window")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"alt+m")),(0,l.kt)("td",{parentName:"tr",align:null},"Move window")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"mod+Space")),(0,l.kt)("td",{parentName:"tr",align:null},"Show root menu")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"control+alt+space")),(0,l.kt)("td",{parentName:"tr",align:null},"Show app menu")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"alt+space")),(0,l.kt)("td",{parentName:"tr",align:null},"Show client Menu")))),(0,l.kt)("p",null,"Made with \u2764\ufe0f by ",(0,l.kt)("a",{parentName:"p",href:"https://https://github.com/Archenagechan"},"Crystal")))}s.isMDXComponent=!0},6010:function(t,e,n){function a(t){var e,n,r="";if("string"==typeof t||"number"==typeof t)r+=t;else if("object"==typeof t)if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(n=a(t[e]))&&(r&&(r+=" "),r+=n);else for(e in t)t[e]&&(r&&(r+=" "),r+=e);return r}function r(){for(var t,e,n=0,r="";n<arguments.length;)(t=arguments[n++])&&(e=a(t))&&(r&&(r+=" "),r+=e);return r}n.d(e,{Z:function(){return r}})}}]);