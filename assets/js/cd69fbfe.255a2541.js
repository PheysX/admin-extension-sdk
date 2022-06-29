"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8993],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=d(n),g=r,u=c["".concat(s,".").concat(g)]||c[g]||m[g]||i;return n?a.createElement(u,l(l({ref:t},p),{},{components:n})):a.createElement(u,l({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1539:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const i={},l="Settings Item",o={unversionedId:"guide/api-reference/ui/settingsItem",id:"guide/api-reference/ui/settingsItem",title:"Settings Item",description:"Add settings item",source:"@site/docs/guide/2_api-reference/ui/settingsItem.md",sourceDirName:"guide/2_api-reference/ui",slug:"/guide/api-reference/ui/settingsItem",permalink:"/admin-extension-sdk/docs/guide/api-reference/ui/settingsItem",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"Guide",previous:{title:"Payment Overview Cards",permalink:"/admin-extension-sdk/docs/guide/api-reference/ui/module/paymentOverviewCard"},next:{title:"Tabs",permalink:"/admin-extension-sdk/docs/guide/api-reference/ui/tabs"}},s={},d=[{value:"Add settings item",id:"add-settings-item",level:3},{value:"Usage:",id:"usage",level:4},{value:"Parameters",id:"parameters",level:4},{value:"Getting the right icon",id:"getting-the-right-icon",level:3},{value:"Example",id:"example",level:4}],p={toc:d};function m(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"settings-item"},"Settings Item"),(0,r.kt)("h3",{id:"add-settings-item"},"Add settings item"),(0,r.kt)("p",null,"Add a new settings item to the Shopware settings. The content of the settings item module is determined by your ",(0,r.kt)("inlineCode",{parentName:"p"},"locationId"),".\nA specific view or a set of actions can be triggered based on the ",(0,r.kt)("inlineCode",{parentName:"p"},"locationId"),"."),(0,r.kt)("h4",{id:"usage"},"Usage:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"ui.settings.addSettingsItem({\n    label: 'App Settings',\n    locationId: 'settings-location-id',\n    icon: 'default-object-books',\n    displaySearchBar: true,\n    tab: 'plugins',\n});\n")),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"label")),(0,r.kt)("td",{parentName:"tr",align:"left"},"true"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"The label of the tab bar item")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"locationId")),(0,r.kt)("td",{parentName:"tr",align:"left"},"true"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"The id for the content of the settings item module")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"icon")),(0,r.kt)("td",{parentName:"tr",align:"left"},"true"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"The icon to display in your settings item")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"displaySearchBar")),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"true"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Toggles the sw-page search bar on/off")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"tab")),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"'plugins'"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Determines in which tab your settings item will be displayed")))),(0,r.kt)("h3",{id:"getting-the-right-icon"},"Getting the right icon"),(0,r.kt)("p",null,"Assuming that your editor supports TypeScript, you should get auto-completion for valid ",(0,r.kt)("inlineCode",{parentName:"p"},"icon")," values.\nIn case that doesn't work take a look at the list ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/shopware/admin-extension-sdk/blob/main/src/icons.ts"},"here"),"."),(0,r.kt)("h4",{id:"example"},"Example"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Settings item example",src:n(6898).Z,width:"1292",height:"980"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { location, ui } from '@shopware-ag/admin-extension-sdk';\n\n// General commands\nif (location.is(location.MAIN_HIDDEN)) {\n    // Add the settings item to the plugins tab\n    ui.settings.addSettingsItem({\n        label: 'App Settings',\n        locationId: 'settings-location-id',\n        icon: 'default-object-books',\n        displaySearchBar: true,\n        tab: 'plugins',\n    });\n}\n\n// Render your custom view\nif (location.is('settings-location-id')) {\n    document.body.innerHTML = '<h1 style=\"text-align: center\">Hello from your settings item</h1>';\n}\n")))}m.isMDXComponent=!0},6898:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/add-settings-item-example-49d1f84686010d731ac38e02c9be2c6c.png"}}]);