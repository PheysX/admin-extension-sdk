"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8035],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),p=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),g=a,m=d["".concat(l,".").concat(g)]||d[g]||u[g]||o;return n?i.createElement(m,r(r({ref:t},c),{},{components:n})):i.createElement(m,r({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var p=2;p<o;p++)r[p]=n[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1457:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var i=n(7462),a=(n(7294),n(3905));const o={sidebar_position:3},r="Usage",s={unversionedId:"guide/getting-started/usage",id:"guide/getting-started/usage",title:"Usage",description:"After installing the Admin Extension SDK successfully you can use it in your apps and plugins.",source:"@site/docs/guide/1_getting-started/usage.md",sourceDirName:"guide/1_getting-started",slug:"/guide/getting-started/usage",permalink:"/admin-extension-sdk/docs/guide/getting-started/usage",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"Guide",previous:{title:"Vue dev tools",permalink:"/admin-extension-sdk/docs/guide/getting-started/devTools"},next:{title:"Register CMS element",permalink:"/admin-extension-sdk/docs/guide/api-reference/cms/registerCmsElement"}},l={},p=[{value:"Adding functionality to new apps or plugins",id:"adding-functionality-to-new-apps-or-plugins",level:2},{value:"NPM example:",id:"npm-example",level:3},{value:"CDN example:",id:"cdn-example",level:3},{value:"Adding functionality to existing plugins",id:"adding-functionality-to-existing-plugins",level:2},{value:"Example:",id:"example",level:3}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"usage"},"Usage"),(0,a.kt)("p",null,"After ",(0,a.kt)("a",{parentName:"p",href:"./installation"},"installing")," the Admin Extension SDK successfully you can use it in your apps and plugins."),(0,a.kt)("h2",{id:"adding-functionality-to-new-apps-or-plugins"},"Adding functionality to new apps or plugins"),(0,a.kt)("p",null,"You can use the SDK features directly in your JS file. Just import the specific feature (NPM method) or use the method in the\n",(0,a.kt)("inlineCode",{parentName:"p"},"sw")," object (CDN method). You can find all features in the API reference documentation."),(0,a.kt)("h3",{id:"npm-example"},"NPM example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// import notification toolkit from the SDK\nimport { notification }  from '@shopware-ag/admin-extension-sdk';\n\n// dispatch a new notification\nnotification.dispatch({\n  title: 'My first notification',\n  message: 'This was really easy to do'\n})\n")),(0,a.kt)("h3",{id:"cdn-example"},"CDN example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// access the \"notification\" toolkit in the global \"sw\" object and dispatch a new notification\nsw.notification.dispatch({\n  title: 'My first notification',\n  message: 'This was really easy to do'\n})\n")),(0,a.kt)("h2",{id:"adding-functionality-to-existing-plugins"},"Adding functionality to existing plugins"),(0,a.kt)("p",null,"Shopware 6 has a rich plugin extension system for the Admin based on Twig and the concepts of component overriding and component extending. These\nconcepts are very powerful, but may also come with a steep learning curve. That's why you can migrate gradually to the new Admin Extension SDK, if you want.\nBoth approaches can work together. This way you can start by converting only parts of your plugins at first and then gradually converting more and more of your plugins as new features are added to the SDK.\nThis approach is also going to help with simplifying your plugins and preparing them for long term usage."),(0,a.kt)("h3",{id:"example"},"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// Use existing extension capabilties\nShopware.Component.override('sw-dashboard-index', {\n    methods: {\n        async createdComponent() {\n          // Can also use Admin Extension SDK features\n          await sw.notification.dispatch({\n            title: 'Hello from the plugin',\n            message: 'I am combining the existing approach with the new SDK approach',\n          })\n\n          this.$super('createdComponent');\n        }\n    }\n});\n")))}u.isMDXComponent=!0}}]);