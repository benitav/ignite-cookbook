"use strict";(self.webpackChunkignite_cookbook=self.webpackChunkignite_cookbook||[]).push([[7940],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),h=o,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||i;return n?a.createElement(m,r(r({ref:t},c),{},{components:n})):a.createElement(m,r({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9437:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(7462),o=(n(7294),n(3905));const i={title:"Maestro Setup",description:"Setting up e2e testing with Maestro in Ignite",tags:["Maestro","testing"],last_update:{author:"Dan Edwards"},publish_date:new Date("2023-02-01T00:00:00.000Z")},r="Setting Up Maestro in Ignite",s={unversionedId:"recipes/MaestroSetup",id:"recipes/MaestroSetup",title:"Maestro Setup",description:"Setting up e2e testing with Maestro in Ignite",source:"@site/docs/recipes/MaestroSetup.md",sourceDirName:"recipes",slug:"/recipes/MaestroSetup",permalink:"/docs/recipes/MaestroSetup",draft:!1,tags:[{label:"Maestro",permalink:"/docs/tags/maestro"},{label:"testing",permalink:"/docs/tags/testing"}],version:"current",lastUpdatedBy:"Dan Edwards",lastUpdatedAt:1679412301,formattedLastUpdatedAt:"Mar 21, 2023",frontMatter:{title:"Maestro Setup",description:"Setting up e2e testing with Maestro in Ignite",tags:["Maestro","testing"],last_update:{author:"Dan Edwards"},publish_date:"2023-02-01T00:00:00.000Z"},sidebar:"mainSidebar",previous:{title:"Generator for Component Tests",permalink:"/docs/recipes/GeneratorComponentTests"},next:{title:"Migrating to FlashList",permalink:"/docs/recipes/MigratingToFlashList"}},l={},p=[{value:"Overview",id:"overview",level:2},{value:"Maestro Installation",id:"maestro-installation",level:2},{value:"Creating our first Maestro Flow",id:"creating-our-first-maestro-flow",level:2},{value:"Let&#39;s see what else Maestro can do",id:"lets-see-what-else-maestro-can-do",level:2},{value:"Conclusion",id:"conclusion",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"setting-up-maestro-in-ignite"},"Setting Up Maestro in Ignite"),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"End-to-end (e2e) testing is a critical part of any application but it can be difficult to set up and maintain. ",(0,o.kt)("a",{parentName:"p",href:"https://maestro.mobile.dev/"},"Maestro")," is a tool that promises to be easy to set up and maintain e2e tests. This recipe will walk you through setting up Maestro in your Ignite project."),(0,o.kt)("h2",{id:"maestro-installation"},"Maestro Installation"),(0,o.kt)("p",null,"We're going to start by installing Maestro via the terminal. To do this, we'll need to run the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'    curl -Ls "https://get.maestro.mobile.dev" | bash\n')),(0,o.kt)("p",null,"If you run into any issues, check out the ",(0,o.kt)("a",{parentName:"p",href:"https://maestro.mobile.dev/getting-started/installing-maestro#installing-the-cli"},"Maestro cli installation guide")," for more information."),(0,o.kt)("p",null,"Once the installation is complete, you'll be ready to create your first Maestro flow!"),(0,o.kt)("h2",{id:"creating-our-first-maestro-flow"},"Creating our first Maestro Flow"),(0,o.kt)("p",null,"To start out, we're going to create a folder to hold our Maestro flows. Let's do this by adding a folder in the root of our Ignite project called ",(0,o.kt)("inlineCode",{parentName:"p"},".maestro"),". Once that's done we can create our first flow in a file called ",(0,o.kt)("inlineCode",{parentName:"p"},"Login.yaml")),(0,o.kt)("p",null,"With this flow we want to open up our app and then login with the default credentials. We can do this by adding the following to our ",(0,o.kt)("inlineCode",{parentName:"p"},"Login.yaml")," file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'#flow: Login\n#intent:\n# Open up our app and use the default credentials to login\n# and navigate to the demo screen\n\nappId: com.maestroapp # the app id of the app we want to test\n# You can find the appId of an Ignite app in the `app.json` file\n# as the "package" under the "android" section and "bundleIdentifier" under the "ios" section\n---\n- clearState # clears the state of our app (navigation and authentication)\n- launchApp # launches the app\n- assertVisible: "Sign In"\n- tapOn:\n    text: "Tap to sign in!"\n- assertVisible: "Your app, almost ready for launch!"\n- tapOn:\n    text: "Let\'s go!"\n- assertVisible: "Components to jump start your project!"\n')),(0,o.kt)("p",null,"We're using a few different actions and assertions in this flow. Let's take a look at what they do:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"clearState")," - This action clears the state of our app. This is useful if we want to start from a clean slate.\n",(0,o.kt)("inlineCode",{parentName:"p"},"launchApp")," - This action launches our app specified with the ",(0,o.kt)("inlineCode",{parentName:"p"},"appId")," in our flow.\n",(0,o.kt)("inlineCode",{parentName:"p"},"assertVisible")," - This assertion checks to see if the text we pass in is visible on the screen.\n",(0,o.kt)("inlineCode",{parentName:"p"},"tapOn")," - This action taps on the specified element. In our case, we're tapping on the text we pass in."),(0,o.kt)("p",null,"To run our flow, first make sure the app is loaded on the simulator (or running via metro through ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn ios"),", for example). Then execute maestro from its test directory with the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd .maestro\nmaestro test Login.yaml\n")),(0,o.kt)("p",null,"And that's it! We've successfully created our first Maestro flow and ran it. You should see something like this in your terminal after running the test:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'    \u2551  > Flow\n        Running on iPhone 11 - iOS 16.2 - 5A269AA1-2704-429B-BF30-D6965060E03E\n    \u2551    \u2705  Clear state of com.maestroapp\n    \u2551    \u2705  Launch app "com.maestroapp"\n    \u2551    \u2705  Assert that "Sign In" is visible\n    \u2551    \u2705  Tap on "Tap to sign in!"\n    \u2551    \u2705  Assert that "Your app, almost ready for launch!" is visible\n    \u2551    \u2705  Tap on "Let\'s go!"\n    \u2551    \u2705  Assert that "Components to jump start your project!" is visible\n')),(0,o.kt)("p",null,"Let's add another flow to see what else we can do with Maestro!"),(0,o.kt)("h2",{id:"lets-see-what-else-maestro-can-do"},"Let's see what else Maestro can do"),(0,o.kt)("p",null,"Let's create a more advanded flow that spans across multiple screens, we'll want to accomplish the following:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Use environment variables"),(0,o.kt)("li",{parentName:"ol"},"Run the login flow"),(0,o.kt)("li",{parentName:"ol"},"Navigate to the demo podcast list screen"),(0,o.kt)("li",{parentName:"ol"},"Favorite a podcast"),(0,o.kt)("li",{parentName:"ol"},"Switch the list to only be favorites"),(0,o.kt)("li",{parentName:"ol"},"Use accessibility labels to find elements")),(0,o.kt)("p",null,"Go ahead and create a flow called ",(0,o.kt)("inlineCode",{parentName:"p"},"FavoritePodcast.yaml")," and add the following to it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'# flow: run the login flow and then navigate to the demo podcast list screen, favorite a podcast, and then switch the list to only be favorites.\n\nappId: com.maestroapp\nenv:\n  TITLE: "RNR 257 - META RESPONDS! How can we improve React Native, part 2"\n  FAVORITES_TEXT: "Switch on to only show favorites"\n\n---\n- runFlow: Login.yaml\n- tapOn: "Podcast, tab, 3 of 4"\n- assertVisible: "React Native Radio episodes"\n- tapOn:\n    text: ${FAVORITES_TEXT}\n- assertVisible: "This looks a bit empty"\n- tapOn:\n    text: ${FAVORITES_TEXT}\n- scrollUntilVisible:\n    element:\n      text: ${TITLE}\n    direction: DOWN\n    timeout: 50000\n    speed: 40\n    visibilityPercentage: 100\n- longPressOn: ${TITLE}\n- scrollUntilVisible:\n    element:\n      text: ${FAVORITES_TEXT}\n    direction: UP\n    timeout: 50000\n    speed: 40\n    visibilityPercentage: 100\n- tapOn:\n    text: ${FAVORITES_TEXT}\n- assertVisible: ${TITLE}\n')),(0,o.kt)("p",null,"We did a few things new here. Let's take a look at what they are:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"We added an ",(0,o.kt)("inlineCode",{parentName:"li"},"env")," section to our flow. This allows us to set environment variables that we can use in our flow. In this case, we're setting the title of the podcast we want to favorite and the favorites toggle label text."),(0,o.kt)("li",{parentName:"ol"},"We added a ",(0,o.kt)("inlineCode",{parentName:"li"},"runFlow")," action. This action allows us to run another flow from within our flow. In this case, we're running the ",(0,o.kt)("inlineCode",{parentName:"li"},"Login.yaml")," flow before we run the rest of our flow."),(0,o.kt)("li",{parentName:"ol"},"We added a ",(0,o.kt)("inlineCode",{parentName:"li"},"scrollUntilVisible")," action. This will help us find the episode we are looking for because it won't always be available in the first visible content as new episodes are released. This action is also used to scroll back up to toggle the ",(0,o.kt)("inlineCode",{parentName:"li"},"Only Show Favorites")," switch."),(0,o.kt)("li",{parentName:"ol"},"We added a ",(0,o.kt)("inlineCode",{parentName:"li"},"longPressOn")," action. This action allows us to long press on an element. In this case, we're long pressing on the podcast we want to favorite, we're able to do this because of the accessability action that's associated with the Podcast Card."),(0,o.kt)("li",{parentName:"ol"},'The text "Switch on to only show favorites" (or env var ',(0,o.kt)("inlineCode",{parentName:"li"},"${FAVOREITES_TEXT}"),") is the accessibility label passed to the Toggle component. Maestro identifies accessibility labels as text as long as that element does not have any text children.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"If you're running these tests on an iOS simulator, you may need to add ",(0,o.kt)("inlineCode",{parentName:"p"},"accessibilityLabel: episode.title,")," to line 180 of ",(0,o.kt)("inlineCode",{parentName:"p"},"DemoPodcastListScreen.tsx")," in your Ignite project.")),(0,o.kt)("h2",{id:"conclusion"},"Conclusion"),(0,o.kt)("p",null,"Maestro is a great tool for e2e testing. It's easy to set up and maintain. It's also easy to add to your Ignite project. If you want to check out how to use their other features, like Maestro cloud & Maestro Studio, check out their ",(0,o.kt)("a",{parentName:"p",href:"https://maestro.mobile.dev/"},"documentation"),"."),(0,o.kt)("blockquote",null,(0,o.kt)("h2",{parentName:"blockquote",id:"notes"},"Notes"),(0,o.kt)("p",{parentName:"blockquote"},"Detox is the default e2e testing tool in Ignite. Should you choose to use Maestro, remove Detox from your project.")))}u.isMDXComponent=!0}}]);