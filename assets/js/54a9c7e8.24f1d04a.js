"use strict";(self.webpackChunkignite_cookbook=self.webpackChunkignite_cookbook||[]).push([[8576],{1292:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>t,metadata:()=>s,toc:()=>a});var o=i(7624),r=i(4552);const t={title:"Prepping Ignite for EAS Build",description:"Setting up Ignite to build a custom Expo development client for use with Config Plugins",tags:["Expo","EAS","expo-dev-client"],last_update:{author:"Frank Calise"},publish_date:new Date("2023-12-04T00:00:00.000Z")},l="Prepping Ignite for EAS Build",s={id:"recipes/PrepForEASBuild",title:"Prepping Ignite for EAS Build",description:"Setting up Ignite to build a custom Expo development client for use with Config Plugins",source:"@site/docs/recipes/PrepForEASBuild.md",sourceDirName:"recipes",slug:"/recipes/PrepForEASBuild",permalink:"/docs/recipes/PrepForEASBuild",draft:!1,unlisted:!1,tags:[{label:"Expo",permalink:"/docs/tags/expo"},{label:"EAS",permalink:"/docs/tags/eas"},{label:"expo-dev-client",permalink:"/docs/tags/expo-dev-client"}],version:"current",lastUpdatedBy:"Frank Calise",lastUpdatedAt:1708554035,formattedLastUpdatedAt:"Feb 21, 2024",frontMatter:{title:"Prepping Ignite for EAS Build",description:"Setting up Ignite to build a custom Expo development client for use with Config Plugins",tags:["Expo","EAS","expo-dev-client"],last_update:{author:"Frank Calise"},publish_date:"2023-12-04T00:00:00.000Z"},sidebar:"mainSidebar",previous:{title:"Patching/Building Android .aar From Source",permalink:"/docs/recipes/PatchingBuildingAndroid"},next:{title:"React Native Vision Camera",permalink:"/docs/recipes/ReactNativeVisionCamera"}},d={},a=[{value:"Appetizer",id:"appetizer",level:2},{value:"Steps",id:"steps",level:2},{value:"1. Project Setup",id:"1-project-setup",level:3},{value:"2. Build Profile",id:"2-build-profile",level:3},{value:"3. Run the Build!",id:"3-run-the-build",level:3},{value:"4. Run the Development Client",id:"4-run-the-development-client",level:3}];function c(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.M)(),...e.components},{Details:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"prepping-ignite-for-eas-build",children:"Prepping Ignite for EAS Build"}),"\n",(0,o.jsxs)(n.p,{children:["This guide will teach you how to set up an ",(0,o.jsx)(n.a,{href:"https://docs.expo.dev/develop/development-builds/create-a-build/",children:"Expo development build"})," which prepares your project for native code via ",(0,o.jsx)(n.a,{href:"https://docs.expo.dev/guides/config-plugins/",children:"Config Plugins"}),", but keeps you in Expo's managed workflow."]}),"\n",(0,o.jsx)(n.h2,{id:"appetizer",children:"Appetizer"}),"\n",(0,o.jsxs)(n.p,{children:["Start with a fresh Ignite app, but choose the ",(0,o.jsx)(n.code,{children:"prebuild"})," workflow:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"npx ignite-cli@latest new PizzaApp --workflow=prebuild --yes\n"})}),"\n",(0,o.jsxs)(n.p,{children:["You'll also need ",(0,o.jsx)(n.code,{children:"eas-cli"})," globally installed and and an ",(0,o.jsx)(n.a,{href:"https://expo.dev/signup",children:"Expo account"})," if you don't already have one."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"npm install -g eas-cli\n"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.em,{children:"Optional"}),": You can use EAS builds for free, however there is a queue time to wait for your build. It is possible to ",(0,o.jsx)(n.a,{href:"https://docs.expo.dev/build-reference/local-builds/",children:"build locally"}),", you'll need a couple of other dependencies installed for proper iOS and Android builds (if you can already build iOS/Android natively, you're probably good to go!)"]}),"\n",(0,o.jsxs)(i,{children:[(0,o.jsx)("summary",{children:(0,o.jsx)("strong",{children:"iOS"})}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"brew install cocoapods fastlane\n"})})]}),"\n",(0,o.jsxs)(i,{children:[(0,o.jsx)("summary",{children:(0,o.jsx)("strong",{children:"Android"})}),(0,o.jsx)(n.p,{children:"SDK and NDK"})]}),"\n",(0,o.jsx)(n.h2,{id:"steps",children:"Steps"}),"\n",(0,o.jsx)(n.h3,{id:"1-project-setup",children:"1. Project Setup"}),"\n",(0,o.jsx)(n.p,{children:"From within your project directory, run the following:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"yarn add expo-dev-client\n"})}),"\n",(0,o.jsx)(n.p,{children:"Create or link an EAS project."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"eas init\n"})}),"\n",(0,o.jsx)(n.p,{children:"You'll be asked to select your EAS account if you're linked to multiple and if you'd like to create a new project. Afterwards, you'll see a warning like this:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'Warning: Your project uses dynamic app configuration, and the EAS project ID can\'t automatically be added to it.\nhttps://docs.expo.dev/workflow/configuration/#dynamic-configuration-with-appconfigjs\n\nTo complete the setup process, set "extra.eas.projectId" in your app.config.ts or app.json:\n\n{\n  "expo": {\n    "extra": {\n      "eas": {\n        "projectId": "...id here..."\n      }\n    }\n  }\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["Simply open ",(0,o.jsx)(n.code,{children:"app.json"})," and add the ",(0,o.jsx)(n.code,{children:"extra"})," key somewhere under the ",(0,o.jsx)(n.code,{children:"expo"})," key in that file."]}),"\n",(0,o.jsx)(n.p,{children:"Configure the project to support EAS Build."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"eas build:configure\n"})}),"\n",(0,o.jsx)(n.h3,{id:"2-build-profile",children:"2. Build Profile"}),"\n",(0,o.jsxs)(n.p,{children:["Ignite 9 comes with some build profiles already set up for you. You can view these in ",(0,o.jsx)(n.code,{children:"eas.json"})," to configure them further. Here's an example:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n  "cli": {\n    "version": ">= 0.60.0"\n  },\n  "build": {\n    "development": {\n      "developmentClient": true,\n      "distribution": "internal"\n    },\n    "preview": {\n      "developmentClient": true,\n      "ios": {\n        "simulator": true\n      }\n    },\n    "production": {}\n  },\n  "submit": {\n    "production": {}\n  }\n}\n'})}),"\n",(0,o.jsx)(n.h3,{id:"3-run-the-build",children:"3. Run the Build!"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Using EAS build servers"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"eas build --profile preview\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Once complete, you can download the Android ",(0,o.jsx)(n.code,{children:"apk"})," or iOS ",(0,o.jsx)(n.code,{children:"tar"})," file."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Build Locally"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"eas build --profile preview --local\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Your app will be saved in the root directory unless you specify the desired directory with the environment variable ",(0,o.jsx)(n.code,{children:"EAS_LOCAL_BUILD_ARTIFACTS_DIR"}),", for example:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"EAS_LOCAL_BUILD_ARTIFACTS_DIR=build eas build --profile preview --local\n"})}),"\n",(0,o.jsxs)(n.p,{children:["This will save your ",(0,o.jsx)(n.code,{children:"*.apk"})," or ",(0,o.jsx)(n.code,{children:"*.tar.gz"})," (containing the ",(0,o.jsx)(n.code,{children:".app"}),") in the ",(0,o.jsx)(n.code,{children:"[project-dir]/build/"})," directory."]}),"\n",(0,o.jsx)(n.h3,{id:"4-run-the-development-client",children:"4. Run the Development Client"}),"\n",(0,o.jsx)(n.p,{children:"With the builds complete, let's add them to your emulator or simulator."}),"\n",(0,o.jsxs)(i,{children:[(0,o.jsx)("summary",{children:(0,o.jsx)("strong",{children:"iOS"})}),(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"tar zxvf build/build-*.tar.gz -C build/"})," (adapt this command depending on where you saved it to)"]}),"\n",(0,o.jsxs)(n.li,{children:["Drag the ",(0,o.jsx)(n.code,{children:"PizzaApp.app"})," onto your iOS simulator"]}),"\n"]})]}),"\n",(0,o.jsxs)(i,{children:[(0,o.jsx)("summary",{children:(0,o.jsx)("strong",{children:"Android"})}),(0,o.jsx)(n.p,{children:'Drag the APK onto your emulator or install it on a device (making sure your settings are appropriate for "Install unknown apps")'})]}),"\n",(0,o.jsxs)(n.p,{children:["You can now develop locally like you normally would with Expo Go, with one last adjustment to the ",(0,o.jsx)(n.code,{children:"start"})," script."]}),"\n",(0,o.jsxs)(n.p,{children:["In ",(0,o.jsx)(n.code,{children:"package.json"})," modify the start script to use the ",(0,o.jsx)(n.code,{children:"expo-dev-client"})," package."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-diff",children:'--"start": "expo start"\n++"start": "expo start --dev-client"\n'})}),"\n",(0,o.jsxs)(n.p,{children:["Run ",(0,o.jsx)(n.code,{children:"yarn start"})," in your terminal so metro starts up. Follow the Expo CLI to boot up either the Android or iOS app. You'll notice Expo Go has not launched in this case, but something that looks very similar (you can still shake the device for developer menu, etc)."]})]})}function p(e={}){const{wrapper:n}={...(0,r.M)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},4552:(e,n,i)=>{i.d(n,{I:()=>s,M:()=>l});var o=i(1504);const r={},t=o.createContext(r);function l(e){const n=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),o.createElement(t.Provider,{value:n},e.children)}}}]);