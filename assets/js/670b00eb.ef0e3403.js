"use strict";(self.webpackChunkignite_cookbook=self.webpackChunkignite_cookbook||[]).push([[444],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),g=p(n),h=i,u=g["".concat(l,".").concat(h)]||g[h]||d[h]||o;return n?a.createElement(u,r(r({ref:t},c),{},{components:n})):a.createElement(u,r({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},8113:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(7462),i=(n(7294),n(3905));const o={title:"Migrating to FlashList",description:"How to migrate over to Shopify's FlashList in an Ignite project",tags:["Shopify","FlashList"],last_update:{author:"Frank Calise"}},r="Migrating to FlashList",s={unversionedId:"MigratingToFlashList",id:"MigratingToFlashList",title:"Migrating to FlashList",description:"How to migrate over to Shopify's FlashList in an Ignite project",source:"@site/docs/MigratingToFlashList.md",sourceDirName:".",slug:"/MigratingToFlashList",permalink:"/ignite-cookbook/docs/MigratingToFlashList",draft:!1,tags:[{label:"Shopify",permalink:"/ignite-cookbook/docs/tags/shopify"},{label:"FlashList",permalink:"/ignite-cookbook/docs/tags/flash-list"}],version:"current",lastUpdatedBy:"Frank Calise",lastUpdatedAt:1665673262,formattedLastUpdatedAt:"Oct 13, 2022",frontMatter:{title:"Migrating to FlashList",description:"How to migrate over to Shopify's FlashList in an Ignite project",tags:["Shopify","FlashList"],last_update:{author:"Frank Calise"}},sidebar:"tutorialSidebar",previous:{title:"Add component tests to component generator",permalink:"/ignite-cookbook/docs/GeneratorComponentTests"},next:{title:"Patching/Building Android .aar From Source",permalink:"/ignite-cookbook/docs/PatchingBuildingAndroid"}},l={},p=[{value:"Overview",id:"overview",level:2},{value:"Project Dependencies",id:"project-dependencies",level:2},{value:"Code Changes",id:"code-changes",level:2}],c={toc:p};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"migrating-to-flashlist"},"Migrating to FlashList"),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://shopify.github.io/flash-list/"},"Shopify's FlashList")," provides a drop-in replacement for React Native's FlatList component. It's an easy refactor and your lists will perform better within your app!"),(0,i.kt)("p",null,"We'll start with the demo project provided by Ignite, so if you need a new one fire away with:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-nodejs"},"npx ignite-cli new PizzaApp --yes\n")),(0,i.kt)("h2",{id:"project-dependencies"},"Project Dependencies"),(0,i.kt)("p",null,"Whether you're sticking with Expo or running with bare React Native workflow, our install steps are the same:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-nodejs"},"npx expo install @shopify/flash-list\n")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Note: No ",(0,i.kt)("inlineCode",{parentName:"em"},"pod install")," was run here because the scripts set up in an Ignite project take care of that for you!")),(0,i.kt)("h2",{id:"code-changes"},"Code Changes"),(0,i.kt)("p",null,"Open ",(0,i.kt)("inlineCode",{parentName:"p"},"DemoPodcastListScreen.tsx")," and add the new import:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'import { FlashList } from "@shopify/flash-list"\n')),(0,i.kt)("p",null,"Find the ",(0,i.kt)("inlineCode",{parentName:"p"},"FlatList")," being used in the returned JSX and swap it out for ",(0,i.kt)("inlineCode",{parentName:"p"},"FlashList")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},'return (\n  <Screen\n    preset="fixed"\n    safeAreaEdges={["top"]}\n    contentContainerStyle={$screenContentContainer}\n  >\n    // highlight-next-line\n    <FlashList<Episode>\n      data={episodeStore.episodesForList}\n      extraData={episodeStore.favorites.length + episodeStore.episodes.length}\n      contentContainerStyle={$flatListContentContainer}\n      refreshing={refreshing}\n      onRefresh={manualRefresh}\n      // ...\n    />    \n    // ...\n  </Screen>\n)\n')),(0,i.kt)("p",null,"Run the app in the iOS simulator to test the changes, either ",(0,i.kt)("inlineCode",{parentName:"p"},"yarn expo:ios")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"yarn ios"),". Navigate to the Podcast List screen:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},'Press "Tap to sign in!"'),(0,i.kt)("li",{parentName:"ol"},'Press "Let\'s go!"'),(0,i.kt)("li",{parentName:"ol"},'Tap on the "Podcast"')),(0,i.kt)("p",null,"You'll get a warning out in the terminal, something similar to:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"}," WARN  estimatedItemSize FlashList prop is not defined - based on current configuration you can set\n it to 184 to optimize list performance. Refer to FlashList documentation for more details.\n")),(0,i.kt)("p",null," Simply add that prop to the ",(0,i.kt)("inlineCode",{parentName:"p"},"FlashList")," component with the suggested values:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"<FlashList<Episode>\n data={episodeStore.episodesForList}\n // highlight-next-line\n estimatedItemSize={184}\n // ...\n/>\n")),(0,i.kt)("p",null,"Reload the app and take note that the warning message has changed this time:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"}," WARN  FlashList will ignore horizontal padding in case of vertical lists and vertical padding \n if the list is horizontal. If you need to have it apply relevant padding to your items instead.\n")),(0,i.kt)("p",null," This happens to be style related for the case of the demo screen, but let's solve it since you'll likely encounter something in your actual application. Update the styles near the bottom of the file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"const $flatListContentContainer: ViewStyle = {\n // highlight-next-line\n // removed paddingHoriztonal here\n paddingTop: spacing.large + spacing.extraLarge,\n paddingBottom: spacing.large,\n}\n\n// ...\n\nconst $item: ViewStyle = {\n padding: spacing.medium,\n marginTop: spacing.medium,\n minHeight: 120,\n // updated style for our item as the library suggested\n marginHorizontal: spacing.large, \n}\n")),(0,i.kt)("p",null,"Now everything looks like it did before, while also gaining all of the performance boosts from FlashList! It's a pretty straight forward approach and Shopify has done a good job helping the developer along with the useful console warnings as a guide."))}d.isMDXComponent=!0}}]);