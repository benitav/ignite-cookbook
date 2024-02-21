"use strict";(self.webpackChunkignite_cookbook=self.webpackChunkignite_cookbook||[]).push([[8636],{1080:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var t=r(7624),i=r(4552);const o={title:"TypeScript baseUrl Configuration",description:"How to configure TypeScript's baseUrl module for rewriting relative imports",tags:["TypeScript","Babel"],last_update:{author:"Frank Calise"},publish_date:new Date("2022-10-24T00:00:00.000Z")},s="TypeScript baseUrl Configuration",a={id:"recipes/TypeScriptBaseURL",title:"TypeScript baseUrl Configuration",description:"How to configure TypeScript's baseUrl module for rewriting relative imports",source:"@site/docs/recipes/TypeScriptBaseURL.md",sourceDirName:"recipes",slug:"/recipes/TypeScriptBaseURL",permalink:"/docs/recipes/TypeScriptBaseURL",draft:!1,unlisted:!1,tags:[{label:"TypeScript",permalink:"/docs/tags/type-script"},{label:"Babel",permalink:"/docs/tags/babel"}],version:"current",lastUpdatedBy:"Frank Calise",lastUpdatedAt:1678110251,formattedLastUpdatedAt:"Mar 6, 2023",frontMatter:{title:"TypeScript baseUrl Configuration",description:"How to configure TypeScript's baseUrl module for rewriting relative imports",tags:["TypeScript","Babel"],last_update:{author:"Frank Calise"},publish_date:"2022-10-24T00:00:00.000Z"},sidebar:"mainSidebar",previous:{title:"Switch Between Expo Go and Expo CNG",permalink:"/docs/recipes/SwitchBetweenExpoGoCNG"},next:{title:"Scrolling to a location that hasn't been rendered using FlatList or SectionList",permalink:"/docs/recipes/UnrenderedItemInScrollView"}},c={},l=[{value:"Overview",id:"overview",level:2},{value:"Project Dependencies",id:"project-dependencies",level:2},{value:"TypeScript Configuration Changes",id:"typescript-configuration-changes",level:2},{value:"Babel Configuration Changes",id:"babel-configuration-changes",level:2},{value:"Taste Test in a Component!",id:"taste-test-in-a-component",level:2},{value:"Resources",id:"resources",level:2}];function p(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"typescript-baseurl-configuration",children:"TypeScript baseUrl Configuration"}),"\n",(0,t.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,t.jsx)(n.p,{children:"Depending on your project structure, sometimes you'll end up with longer relative imports like this:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:'import { Thing } from "../../../../../components/thing";\n'})}),"\n",(0,t.jsxs)(n.p,{children:["We can utilize TypeScript's ",(0,t.jsx)(n.code,{children:"baseUrl"})," module to help resolve non-absolute module names. Doing so will allow us to change the above to:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:'import { Thing } from "~/components/thing";\n'})}),"\n",(0,t.jsx)(n.h2,{id:"project-dependencies",children:"Project Dependencies"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"yarn add -D babel-plugin-root-import\n"})}),"\n",(0,t.jsx)(n.h2,{id:"typescript-configuration-changes",children:"TypeScript Configuration Changes"}),"\n",(0,t.jsxs)(n.p,{children:["Open ",(0,t.jsx)(n.code,{children:"tsconfig.json"})," and add the ",(0,t.jsx)(n.code,{children:"baseUrl"})," and ",(0,t.jsx)(n.code,{children:"path"})," properties:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  // ...\n  "baseUrl": "./",\n  // the following assumes Ignite\'s app/ structure, however yours may differ\n  "paths": { "~/*": ["app/*"] }\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"babel-configuration-changes",children:"Babel Configuration Changes"}),"\n",(0,t.jsxs)(n.p,{children:["Open ",(0,t.jsx)(n.code,{children:"babel.config.js"})," and add the following plugin array object:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:'[\n  "babel-plugin-root-import",\n  {\n    root: __dirname,\n    rootPathPrefix: "~/",\n    // mapping ~/ to the ./app directory (again, your app structure may differ here)\n    rootPathSuffix: "app",\n  },\n],\n'})}),"\n",(0,t.jsx)(n.h2,{id:"taste-test-in-a-component",children:"Taste Test in a Component!"}),"\n",(0,t.jsxs)(n.p,{children:["Open up ",(0,t.jsx)(n.code,{children:"./app/screens/DemoShowroomScreen.tsx"})," and let's update the relative imports from:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:'import { ListItem, Screen, Text } from "../../components";\nimport { isRTL } from "../../i18n";\nimport { DemoTabScreenProps } from "../../navigators/DemoNavigator";\nimport { colors, spacing } from "../../theme";\n'})}),"\n",(0,t.jsx)(n.p,{children:"to"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:'import { ListItem, Screen, Text } from "~/components";\nimport { isRTL } from "~/i18n";\nimport { DemoTabScreenProps } from "~/navigators/DemoNavigator";\nimport { colors, spacing } from "~/theme";\n'})}),"\n",(0,t.jsx)(n.p,{children:"Fire up the app and make sure everything still works!"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"yarn expo:start\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"Note: if you receive an error about not being able to resolve the components, you may have to clear your bundler cache via"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"yarn expo:start --clear\n"})}),"\n",(0,t.jsx)(n.h2,{id:"resources",children:"Resources"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.typescriptlang.org/tsconfig#baseUrl",children:"TypeScript baseUrl Documentation"})}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,i.M)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},4552:(e,n,r)=>{r.d(n,{I:()=>a,M:()=>s});var t=r(1504);const i={},o=t.createContext(i);function s(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);