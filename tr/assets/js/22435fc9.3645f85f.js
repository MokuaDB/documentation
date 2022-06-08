"use strict";(self.webpackChunkArchcraft_Wiki=self.webpackChunkArchcraft_Wiki||[]).push([[2032],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return s}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=c(n),s=a,f=d["".concat(l,".").concat(s)]||d[s]||m[s]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2054:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return s},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return m}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],p={slug:"01-post-mpd",title:"mpd'de kendi m\xfczi\u011fini ekleme",authors:"adi1090x",tags:["howto","mpd","ncmpcpp","polybar"]},l=void 0,c={permalink:"/tr/blog/01-post-mpd",editUrl:"https://github.com/archcraft-os/documentation/edit/main/i18n/tr/docusaurus-plugin-content-blog/2021/07-20-post-mpd.md",source:"@site/i18n/tr/docusaurus-plugin-content-blog/2021/07-20-post-mpd.md",title:"mpd'de kendi m\xfczi\u011fini ekleme",description:"mpd'de kendi m\xfczi\u011finizi eklemek i\xe7in (m\xfczik dosyalar\u0131n\u0131z\u0131n ~/Music klas\xf6r\xfcnde oldu\u011funu varsay\u0131yoruz) a\u015fa\u011f\u0131daki ad\u0131mlar\u0131 takip edin :",date:"2021-07-20T00:00:00.000Z",formattedDate:"July 20, 2021",tags:[{label:"howto",permalink:"/tr/blog/tags/howto"},{label:"mpd",permalink:"/tr/blog/tags/mpd"},{label:"ncmpcpp",permalink:"/tr/blog/tags/ncmpcpp"},{label:"polybar",permalink:"/tr/blog/tags/polybar"}],readingTime:.285,truncated:!0,authors:[{name:"Aditya Shakya",title:"Developer of Archcraft",url:"https://github.com/adi1090x",imageURL:"https://github.com/adi1090x.png",key:"adi1090x"}],prevItem:{title:"bspwm'de tema ve ikonlar\u0131 de\u011fi\u015ftirme",permalink:"/tr/blog/02-post-bspwm"}},u={authorsImageUrls:[void 0]},m=[],d={toc:m};function s(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"mpd"),"'de kendi m\xfczi\u011finizi eklemek i\xe7in (",(0,o.kt)("em",{parentName:"p"},"m\xfczik dosyalar\u0131n\u0131z\u0131n ",(0,o.kt)("inlineCode",{parentName:"em"},"~/Music")," klas\xf6r\xfcnde oldu\u011funu varsay\u0131yoruz"),") a\u015fa\u011f\u0131daki ad\u0131mlar\u0131 takip edin :"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Komut sat\u0131r\u0131n\u0131 a\xe7\u0131n ve ",(0,o.kt)("strong",{parentName:"li"},"ncmpcpp")," komutunu \xe7al\u0131\u015ft\u0131r\u0131n.")))}s.isMDXComponent=!0}}]);