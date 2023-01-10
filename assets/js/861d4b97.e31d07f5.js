"use strict";(self.webpackChunkignite_cookbook=self.webpackChunkignite_cookbook||[]).push([[4011],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(n),m=o,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9014:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const i={title:"Pristine Expo Project",description:"How to remove native related code from a unified Ignite project",tags:["Expo"],last_update:{author:"Frank Calise"}},a="Pristine Expo Project",p={unversionedId:"recipes/PristineExpoProject",id:"recipes/PristineExpoProject",title:"Pristine Expo Project",description:"How to remove native related code from a unified Ignite project",source:"@site/docs/recipes/PristineExpoProject.md",sourceDirName:"recipes",slug:"/recipes/PristineExpoProject",permalink:"/ignite-cookbook/docs/recipes/PristineExpoProject",draft:!1,tags:[{label:"Expo",permalink:"/ignite-cookbook/docs/tags/expo"}],version:"current",lastUpdatedBy:"Frank Calise",lastUpdatedAt:1673381032,formattedLastUpdatedAt:"Jan 10, 2023",frontMatter:{title:"Pristine Expo Project",description:"How to remove native related code from a unified Ignite project",tags:["Expo"],last_update:{author:"Frank Calise"}},sidebar:"mainSidebar",previous:{title:"Patching/Building Android .aar From Source",permalink:"/ignite-cookbook/docs/recipes/PatchingBuildingAndroid"},next:{title:"Sample YAML for CircleCi for Ignite",permalink:"/ignite-cookbook/docs/recipes/SampleYAMLCircleCI"}},s={},l=[{value:"Notes",id:"notes",level:2},{value:"Steps",id:"steps",level:2},{value:"Project Initialization",id:"project-initialization",level:3},{value:"Filesystem Changes",id:"filesystem-changes",level:3},{value:"Package Changes",id:"package-changes",level:3},{value:"package.json Script Updates",id:"packagejson-script-updates",level:3}],c={toc:l};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"pristine-expo-project"},"Pristine Expo Project"),(0,o.kt)("p",null,"Ignite sets your project up ready to run both a bare React Native project or with Expo."),(0,o.kt)("p",null,"However, if you don't want to manage any of the native files going forward, you can follow these steps to get to an Expo only project structure."),(0,o.kt)("h2",{id:"notes"},"Notes"),(0,o.kt)("p",null,"Keep in mind you may have to adopt the following steps for a different package manager or OS. The following are compatible for the ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn")," package manager while running on MacOS."),(0,o.kt)("h2",{id:"steps"},"Steps"),(0,o.kt)("h3",{id:"project-initialization"},"Project Initialization"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"npx ignite-cli new PizzaApp --yes")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"cd PizzaApp"))),(0,o.kt)("h3",{id:"filesystem-changes"},"Filesystem Changes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"rm -rf android")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"rm -rf ios")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"rm index.js")," - Expo's entry point is App.js"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"rm metro.config.js")," - Expo will use the default")),(0,o.kt)("h3",{id:"package-changes"},"Package Changes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"yarn remove react-native-bootsplash")," - removes a native library pertaining to the splash screen (this will be handled via ",(0,o.kt)("inlineCode",{parentName:"li"},"expo-splash-screen"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"yarn remove expo-modules-core"))),(0,o.kt)("h3",{id:"packagejson-script-updates"},"package.json Script Updates"),(0,o.kt)("p",null,"These changes are optional as you can continue to use the prefixed ",(0,o.kt)("inlineCode",{parentName:"p"},"expo:")," commands, however you might just want a cleaned up ",(0,o.kt)("inlineCode",{parentName:"p"},"scripts")," section of your ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "ignite-eas",\n  "version": "0.0.1",\n  "private": true,\n  "main": "node_modules/expo/AppEntry.js",\n  "scripts": {\n    "compile": "tsc --noEmit -p . --pretty",\n    "format": "prettier --write \\"app/**/*.{js,jsx,json,md,ts,tsx}\\"",\n    "lint": "eslint App.js app test --fix --ext .js,.ts,.tsx && npm run format",\n    "patch": "patch-package",\n    "test": "jest",\n    "test:watch": "jest --watch",\n    "adb": "adb reverse tcp:9090 tcp:9090 && adb reverse tcp:3000 tcp:3000 && adb reverse tcp:9001 tcp:9001 && adb reverse tcp:8081 tcp:8081",\n    "postinstall": "node ./bin/postInstall",\n    "clean": "npx react-native-clean-project",\n    "clean-all": "npx react-native clean-project-auto",\n    "start": "expo start",\n    "android": "expo start --android",\n    "ios": "expo start --ios",\n    "web": "expo start --web",\n    "build:detox": "detox build -c ios.sim.expo",\n    "test:detox": "./bin/downloadExpoApp.sh && detox test --configuration ios.sim.expo"\n  },\n  // ... more config ...\n  "detox": {\n    "test-runner": "jest",\n    "runnerConfig": "./detox/config.json",\n    "specs": "detox",\n    "configurations": {\n      "ios.sim.expo": {\n        "binaryPath": "bin/Exponent.app",\n        "type": "ios.simulator",\n        "name": "iPhone 14"\n      }\n    }\n  }\n  // ... more config ...\n}\n')))}d.isMDXComponent=!0}}]);