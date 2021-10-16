"use strict";(self.webpackChunkArchcraft_Wiki=self.webpackChunkArchcraft_Wiki||[]).push([[2586],{3905:function(t,e,r){r.d(e,{Zo:function(){return s},kt:function(){return d}});var n=r(7294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var u=n.createContext({}),c=function(t){var e=n.useContext(u),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},s=function(t){var e=c(t.components);return n.createElement(u.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,o=t.mdxType,a=t.originalType,u=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),m=c(r),d=o,f=m["".concat(u,".").concat(d)]||m[d]||p[d]||a;return r?n.createElement(f,i(i({ref:e},s),{},{components:r})):n.createElement(f,i({ref:e},s))}));function d(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var u in e)hasOwnProperty.call(e,u)&&(l[u]=e[u]);l.originalType=t,l.mdxType="string"==typeof t?t:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6699:function(t,e,r){r.r(e),r.d(e,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return s},default:function(){return m}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],l={sidebar_position:2},u="Write Tutorials",c={unversionedId:"contrib/contrib-blog",id:"contrib/contrib-blog",isDocsHomePage:!1,title:"Write Tutorials",description:"Follow this guide if you want to write tutorials for Archcraft...",source:"@site/docs/contrib/contrib-blog.mdx",sourceDirName:"contrib",slug:"/contrib/contrib-blog",permalink:"/docs/contrib/contrib-blog",editUrl:"https://github.com/archcraft-os/documentation/edit/main/docs/contrib/contrib-blog.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Setup System",permalink:"/docs/contrib/setup-env"},next:{title:"Improve Wiki",permalink:"/docs/contrib/contrib-wiki"}},s=[{value:"Prerequisite",id:"prerequisite",children:[]},{value:"Files and format",id:"files-and-format",children:[]},{value:"Title and tags",id:"title-and-tags",children:[]},{value:"Author",id:"author",children:[]}],p={toc:s};function m(t){var e=t.components,r=(0,o.Z)(t,i);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"write-tutorials"},"Write Tutorials"),(0,a.kt)("p",null,"Follow this guide if you want to write tutorials for Archcraft..."),(0,a.kt)("h2",{id:"prerequisite"},"Prerequisite"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/contrib/setup-env"},"Setup")," the local development environment, If you want to work locally. "),(0,a.kt)("li",{parentName:"ul"},"You should have the basic understanding of the syntax of ",(0,a.kt)("a",{parentName:"li",href:"https://www.markdownguide.org/cheat-sheet"},"Markdown")," and ",(0,a.kt)("a",{parentName:"li",href:"https://mdxjs.com"},"MDX"),". See ",(0,a.kt)("a",{parentName:"li",href:"https://docusaurus.io/docs/markdown-features"},"Docusaurus Markdown Features"),"."),(0,a.kt)("li",{parentName:"ul"},"You, at least know how to ",(0,a.kt)("em",{parentName:"li"},"fork"),", ",(0,a.kt)("em",{parentName:"li"},"clone")," a repository and create a ",(0,a.kt)("em",{parentName:"li"},"pull request"),".")),(0,a.kt)("h2",{id:"files-and-format"},"Files and format"),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"blog")," directory contains all the ",(0,a.kt)("inlineCode",{parentName:"p"},".md")," and ",(0,a.kt)("inlineCode",{parentName:"p"},".mdx")," files for tutorials."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"To add a new tutorial, just create a new file with the correct format."),(0,a.kt)("li",{parentName:"ul"},"The Format is important here, The format structure is :")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"YEAR    # Directory\n\u251c\u2500\u2500 month-date-post-NAME.mdx    # .md or .mdx file\n\u2514\u2500\u2500 month-date                  # Directory\n   \u251c\u2500\u2500 Images                   # Directory\n   \u2514\u2500\u2500 post-NAME.mdx            # .md or .mdx file\n")),(0,a.kt)("h2",{id:"title-and-tags"},"Title and tags"),(0,a.kt)("p",null,"Add appropriate slug, title and tags in the ",(0,a.kt)("inlineCode",{parentName:"p"},"front matter")," of the file you create."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},"---\nslug: NUM-post-NAME\ntitle: TITLE FOR THE POST\nauthors: ID\ntags: [TAG1, TAG2]\n---\n")),(0,a.kt)("h2",{id:"author"},"Author"),(0,a.kt)("p",null,"Add your details in the file ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"authors.yml"))," and add your ID in the ",(0,a.kt)("inlineCode",{parentName:"p"},"front matter")," of the file you created."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"authors.yml")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},"...\nID:\n  name: YOUR_NAME\n  title: ABOUT_YOU\n  url: https://github.com/USERNAME\n  image_url: https://github.com/USERNAME.png\n...\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Front matter")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml",metastring:"{3}","{3}":!0},"slug: NUM-post-NAME\ntitle: TITLE FOR THE POST\nauthors: ID\ntags: [TAG1, TAG2]\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"For more info, visit ",(0,a.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/blog"},"Docusaurus:Blog"))))}m.isMDXComponent=!0}}]);