"use strict";(self.webpackChunkArchcraft_Wiki=self.webpackChunkArchcraft_Wiki||[]).push([[5613],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return s}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function m(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=a.createContext({}),i=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},p=function(t){var e=i(t.components);return a.createElement(d.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,p=m(t,["components","mdxType","originalType","parentName"]),k=i(n),s=r,g=k["".concat(d,".").concat(s)]||k[s]||u[s]||l;return n?a.createElement(g,o(o({ref:e},p),{},{components:n})):a.createElement(g,o({ref:e},p))}));function s(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=k;var m={};for(var d in e)hasOwnProperty.call(e,d)&&(m[d]=e[d]);m.originalType=t,m.mdxType="string"==typeof t?t:r,o[1]=m;for(var i=2;i<l;i++)o[i]=n[i];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},8215:function(t,e,n){var a=n(7294);e.Z=function(t){var e=t.children,n=t.hidden,r=t.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},e)}},5064:function(t,e,n){n.d(e,{Z:function(){return i}});var a=n(7294),r=n(9443);var l=function(){var t=(0,a.useContext)(r.Z);if(null==t)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return t},o=n(6010),m="tabItem_1uMI",d="tabItemActive_2DSg";var i=function(t){var e,n=t.lazy,r=t.block,i=t.defaultValue,p=t.values,u=t.groupId,k=t.className,s=a.Children.toArray(t.children),g=null!=p?p:s.map((function(t){return{value:t.props.value,label:t.props.label}})),N=null!=i?i:null==(e=s.find((function(t){return t.props.default})))?void 0:e.props.value,c=l(),f=c.tabGroupChoices,b=c.setTabGroupChoices,y=(0,a.useState)(N),h=y[0],w=y[1],v=[];if(null!=u){var O=f[u];null!=O&&O!==h&&g.some((function(t){return t.value===O}))&&w(O)}var S=function(t){var e=t.currentTarget,n=v.indexOf(e),a=g[n].value;w(a),null!=u&&(b(u,a),setTimeout((function(){var t,n,a,r,l,o,m,i;(t=e.getBoundingClientRect(),n=t.top,a=t.left,r=t.bottom,l=t.right,o=window,m=o.innerHeight,i=o.innerWidth,n>=0&&l<=i&&r<=m&&a>=0)||(e.scrollIntoView({block:"center",behavior:"smooth"}),e.classList.add(d),setTimeout((function(){return e.classList.remove(d)}),2e3))}),150))},C=function(t){var e,n=null;switch(t.key){case"ArrowRight":var a=v.indexOf(t.target)+1;n=v[a]||v[0];break;case"ArrowLeft":var r=v.indexOf(t.target)-1;n=v[r]||v[v.length-1]}null==(e=n)||e.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},k)},g.map((function(t){var e=t.value,n=t.label;return a.createElement("li",{role:"tab",tabIndex:h===e?0:-1,"aria-selected":h===e,className:(0,o.Z)("tabs__item",m,{"tabs__item--active":h===e}),key:e,ref:function(t){return v.push(t)},onKeyDown:C,onFocus:S,onClick:S},null!=n?n:e)}))),n?(0,a.cloneElement)(s.filter((function(t){return t.props.value===h}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},s.map((function(t,e){return(0,a.cloneElement)(t,{key:e,hidden:t.props.value!==h})}))))}},9443:function(t,e,n){var a=(0,n(7294).createContext)(void 0);e.Z=a},5643:function(t,e,n){n.r(e),n.d(e,{Highlight:function(){return u},contentTitle:function(){return d},default:function(){return s},frontMatter:function(){return m},metadata:function(){return i},toc:function(){return p}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),o=(n(5064),n(8215),["components"]),m={sidebar_position:3},d="DWM",i={unversionedId:"window-managers/dwm",id:"window-managers/dwm",isDocsHomePage:!1,title:"DWM",description:"For Archcraft community members, Edit the page.",source:"@site/i18n/tr/docusaurus-plugin-content-docs/current/window-managers/dwm.mdx",sourceDirName:"window-managers",slug:"/window-managers/dwm",permalink:"/tr/docs/window-managers/dwm",editUrl:"https://github.com/archcraft-os/documentation/edit/main/i18n/tr/docusaurus-plugin-content-docs/current/window-managers/dwm.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Bspwm",permalink:"/tr/docs/window-managers/bspwm"},next:{title:"I3wm",permalink:"/tr/docs/window-managers/i3wm"}},p=[],u=function(t){var e=t.children,n=t.color;return(0,l.kt)("span",{style:{backgroundColor:n,borderRadius:"4px",color:"#fff",padding:"0 0.2rem 0 0.2rem"}},e)},k={toc:p,Highlight:u};function s(t){var e=t.components,n=(0,r.Z)(t,o);return(0,l.kt)("wrapper",(0,a.Z)({},k,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"dwm"},"DWM"),(0,l.kt)("p",null,"For Archcraft community members, Edit the page."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Note: the mod Key in Archcraft Dwm is the Super Key (Aka: Windows key)")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Keybinding"),(0,l.kt)("th",{parentName:"tr",align:null},"Function"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"mod+Return")),(0,l.kt)("td",{parentName:"tr",align:null},"Opens a terminal (st)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"mod+Shift+Return")),(0,l.kt)("td",{parentName:"tr",align:null},"Opens a terminal in floating mode")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"mod+Control+Return")),(0,l.kt)("td",{parentName:"tr",align:null},"Open a terminal (alacritty)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"mod+Shift+f")),(0,l.kt)("td",{parentName:"tr",align:null},"Opens file manager (thunar)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"mod+Shift+e")),(0,l.kt)("td",{parentName:"tr",align:null},"Opens a text editor GUI (geany)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"mod+Shift+w")),(0,l.kt)("td",{parentName:"tr",align:null},"Opens a web browser (firefox)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"alt+F1")),(0,l.kt)("td",{parentName:"tr",align:null},"Opens app launcher")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"mod+n")),(0,l.kt)("td",{parentName:"tr",align:null},"Opens network menu")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"mod+x")),(0,l.kt)("td",{parentName:"tr",align:null},"Opens a powermenu")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"mod+m")),(0,l.kt)("td",{parentName:"tr",align:null},"Opens the music menu")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"mod+i")),(0,l.kt)("td",{parentName:"tr",align:null},"Opens internet menu")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"mod+s")),(0,l.kt)("td",{parentName:"tr",align:null},"Opens screenshoting menu")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"mod+r")),(0,l.kt)("td",{parentName:"tr",align:null},"Runs apps as root")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"mod+w")),(0,l.kt)("td",{parentName:"tr",align:null},"Opens windows menu")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Print")),(0,l.kt)("td",{parentName:"tr",align:null},"Takes a screenshot")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"mod+Print")),(0,l.kt)("td",{parentName:"tr",align:null},"Takes a screenshot (5s delay)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Shift+Print")),(0,l.kt)("td",{parentName:"tr",align:null},"Takes a screenshot (10s delay)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Control+Print")),(0,l.kt)("td",{parentName:"tr",align:null},"Takes a screenshot of active window")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"mod+Control+Print")),(0,l.kt)("td",{parentName:"tr",align:null},"Takes a screenshot of an area")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"alt+Control+l")),(0,l.kt)("td",{parentName:"tr",align:null},"Launches the lockscreen")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"mod+p")),(0,l.kt)("td",{parentName:"tr",align:null},"Opens the color picker")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"mod+Control+q")),(0,l.kt)("td",{parentName:"tr",align:null},"Quit dwm")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"mod+Shift+r")),(0,l.kt)("td",{parentName:"tr",align:null},"Reload dwm")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"mod+Shift+equal")),(0,l.kt)("td",{parentName:"tr",align:null},"Increase Border size")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"mod+Shift+minus")),(0,l.kt)("td",{parentName:"tr",align:null},"Decrease Border size")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"mod+Shift+BackSpace")),(0,l.kt)("td",{parentName:"tr",align:null},"Reset borders")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"mod+Shift+BracketLeft")),(0,l.kt)("td",{parentName:"tr",align:null},"Increase gaps")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"mod+Shift+BracketRight")),(0,l.kt)("td",{parentName:"tr",align:null},"Decrease gaps")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"mod+Shift+backslah")),(0,l.kt)("td",{parentName:"tr",align:null},"Reset gaps")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"mod+Shift+g")),(0,l.kt)("td",{parentName:"tr",align:null},"Toggle gaps")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"mod+Shift+i")),(0,l.kt)("td",{parentName:"tr",align:null},"Increase inner gaps")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"mod+Control+Shift+i")),(0,l.kt)("td",{parentName:"tr",align:null},"Decrease inner gaps")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"mod+Shift+o")),(0,l.kt)("td",{parentName:"tr",align:null},"Increase inner gaps")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"mod+Control+Shift+o")),(0,l.kt)("td",{parentName:"tr",align:null},"Decrease inner gaps")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"mod+c")),(0,l.kt)("td",{parentName:"tr",align:null},"Murder a window")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"mod+escape")),(0,l.kt)("td",{parentName:"tr",align:null},"Murder but with xkill")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"mod+j/k(Or Left right arrow)")),(0,l.kt)("td",{parentName:"tr",align:null},"Cycle focus (back and forth")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"mod+shift+j/k(or left right arrow)")),(0,l.kt)("td",{parentName:"tr",align:null},"Switch master and slave")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"mod+i")),(0,l.kt)("td",{parentName:"tr",align:null},"Increase number of master windows")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"mod+u")),(0,l.kt)("td",{parentName:"tr",align:null},"Decrease number of master windows")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"mod+h(or Control+Left)")),(0,l.kt)("td",{parentName:"tr",align:null},"Shrink to the left")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"mod+l(or Control+Right)")),(0,l.kt)("td",{parentName:"tr",align:null},"Shrink to the right")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"mod+b")),(0,l.kt)("td",{parentName:"tr",align:null},"Toggle the bar")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"mod+Tab")),(0,l.kt)("td",{parentName:"tr",align:null},"Switch to master")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"alt+Tab")),(0,l.kt)("td",{parentName:"tr",align:null},"Switch to last tag")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"mod+d")),(0,l.kt)("td",{parentName:"tr",align:null},"Hide window (send it to the shadow realms)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"mod+Shift+d")),(0,l.kt)("td",{parentName:"tr",align:null},"Restore window (get it back from the shadow realms)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"mod+0")),(0,l.kt)("td",{parentName:"tr",align:null},"Reset the UI")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"mod+Shift+0")),(0,l.kt)("td",{parentName:"tr",align:null},"Reset the tag layout")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Alt+Control+Space")),(0,l.kt)("td",{parentName:"tr",align:null},"Open the layout menu")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Mod+Control+comma/period")),(0,l.kt)("td",{parentName:"tr",align:null},"Cycle through the layouts")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"mod+Shift+Space")),(0,l.kt)("td",{parentName:"tr",align:null},"Toggle floating mode")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"mod+f")),(0,l.kt)("td",{parentName:"tr",align:null},"Toggle fullscreen")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"mod+space")),(0,l.kt)("td",{parentName:"tr",align:null},"Enable tabbed layout")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"mod+t")),(0,l.kt)("td",{parentName:"tr",align:null},"Enable tiled layout")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"mod+g")),(0,l.kt)("td",{parentName:"tr",align:null},"Enable grid layout")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"mod+Shift+m")),(0,l.kt)("td",{parentName:"tr",align:null},"Enable Monocle layout")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"mod+Shift+s")),(0,l.kt)("td",{parentName:"tr",align:null},"Enable Spiral layout")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"mod+Shift+t")),(0,l.kt)("td",{parentName:"tr",align:null},"Enable Stack layout")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"mod+Shift+c")),(0,l.kt)("td",{parentName:"tr",align:null},"Enable Centered Master layout")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"mod+Shift+x")),(0,l.kt)("td",{parentName:"tr",align:null},"Enable Tatami layout")))),(0,l.kt)("hr",null),(0,l.kt)("p",null,"To install archcraft-dwm just run the following command ",(0,l.kt)("inlineCode",{parentName:"p"},"sudo pacman -S archcraft-dwm")),(0,l.kt)("p",null,"Made with \u2764\ufe0f by ",(0,l.kt)("a",{parentName:"p",href:"https://https://github.com/Archenagechan"},"Crystal")))}s.isMDXComponent=!0},6010:function(t,e,n){function a(t){var e,n,r="";if("string"==typeof t||"number"==typeof t)r+=t;else if("object"==typeof t)if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(n=a(t[e]))&&(r&&(r+=" "),r+=n);else for(e in t)t[e]&&(r&&(r+=" "),r+=e);return r}function r(){for(var t,e,n=0,r="";n<arguments.length;)(t=arguments[n++])&&(e=a(t))&&(r&&(r+=" "),r+=e);return r}n.d(e,{Z:function(){return r}})}}]);