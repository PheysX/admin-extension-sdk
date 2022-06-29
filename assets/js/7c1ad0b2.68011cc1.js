"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3084],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=d(n),m=r,u=f["".concat(p,".").concat(m)]||f[m]||s[m]||i;return n?a.createElement(u,o(o({ref:t},c),{},{components:n})):a.createElement(u,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},709:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const i={},o="Notification",l={unversionedId:"guide/api-reference/notification",id:"guide/api-reference/notification",title:"Notification",description:"Dispatch a notification",source:"@site/docs/guide/2_api-reference/notification.md",sourceDirName:"guide/2_api-reference",slug:"/guide/api-reference/notification",permalink:"/admin-extension-sdk/docs/guide/api-reference/notification",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"Guide",previous:{title:"Location",permalink:"/admin-extension-sdk/docs/guide/api-reference/location"},next:{title:"Action button",permalink:"/admin-extension-sdk/docs/guide/api-reference/ui/actionButton"}},p={},d=[{value:"Dispatch a notification",id:"dispatch-a-notification",level:3},{value:"Usage:",id:"usage",level:4},{value:"Parameters:",id:"parameters",level:4},{value:"Return value:",id:"return-value",level:4}],c={toc:d};function s(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"notification"},"Notification"),(0,r.kt)("h3",{id:"dispatch-a-notification"},"Dispatch a notification"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"notification example",src:n(6953).Z,width:"732",height:"514"})),(0,r.kt)("h4",{id:"usage"},"Usage:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"function alertYes() {\n  alert('Yes');\n}\n\nsw.notification.dispatch({\n    title: 'Your title',\n    message: 'Your message',\n    variant: 'success',\n    appearance: 'notification',\n    growl: true,\n    actions: [\n        {\n            label: 'Yes',\n            method: alertYes\n        },\n        {\n            label: 'No',\n            method: () => {\n                alert('No')\n            }\n        },\n        {\n            label: 'Cancel',\n            route: 'https://www.shopware.com',\n            disabled: false,\n        }\n    ]\n})\n")),(0,r.kt)("h4",{id:"parameters"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"title")),(0,r.kt)("td",{parentName:"tr",align:"left"},"true"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"Defines a notification's ",(0,r.kt)("strong",{parentName:"td"},"title"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"message")),(0,r.kt)("td",{parentName:"tr",align:"left"},"true"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"Defines a notification's main expression or message to the user.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"variant")),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"info")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Defines the notification type. Available ",(0,r.kt)("inlineCode",{parentName:"td"},"variant")," types are ",(0,r.kt)("inlineCode",{parentName:"td"},"success"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"info"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"warning")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"error"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"appearance")),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"notification")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Changes the style of a notification. Use ",(0,r.kt)("inlineCode",{parentName:"td"},"system")," for technical notifications thrown by the application. Otherwise keep the default value ",(0,r.kt)("inlineCode",{parentName:"td"},"notification"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"growl")),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Displays a notification that is overlaying any module. Use ",(0,r.kt)("inlineCode",{parentName:"td"},"false")," to display the notification in the notification center (bell symbol) only.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"actions")),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"[]")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Adds clickable buttons to the notification. Each button with a ",(0,r.kt)("inlineCode",{parentName:"td"},"label")," can trigger a ",(0,r.kt)("inlineCode",{parentName:"td"},"method")," or open a ",(0,r.kt)("inlineCode",{parentName:"td"},"route")," (internal route or external link). Buttons can also be disabled using the attribute ",(0,r.kt)("inlineCode",{parentName:"td"},"disabled"),".")))),(0,r.kt)("h4",{id:"return-value"},"Return value:"),(0,r.kt)("p",null,"Returns a promise without data."))}s.isMDXComponent=!0},6953:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/notification-example-d9ba618bc77008b8bb1b3e402a02252d.jpg"}}]);