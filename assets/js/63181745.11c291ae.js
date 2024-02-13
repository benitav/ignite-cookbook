"use strict";(self.webpackChunkignite_cookbook=self.webpackChunkignite_cookbook||[]).push([[3441],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(a),h=i,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||r;return a?n.createElement(m,o(o({ref:t},p),{},{components:a})):n.createElement(m,o({ref:t},p))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},9202:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var n=a(7462),i=(a(7294),a(3905));const r={title:"Using Screen Readers",description:"Learn how to use a screen reader to improve accesibility!",tags:["Accessibility","iOS","Android"],last_update:{author:"Lizzi Lindboe"},publish_date:new Date("2022-10-09T00:00:00.000Z")},o="Using Screen Readers",s={unversionedId:"recipes/UsingScreenReaders",id:"recipes/UsingScreenReaders",title:"Using Screen Readers",description:"Learn how to use a screen reader to improve accesibility!",source:"@site/docs/recipes/UsingScreenReaders.md",sourceDirName:"recipes",slug:"/recipes/UsingScreenReaders",permalink:"/docs/recipes/UsingScreenReaders",draft:!1,tags:[{label:"Accessibility",permalink:"/docs/tags/accessibility"},{label:"iOS",permalink:"/docs/tags/i-os"},{label:"Android",permalink:"/docs/tags/android"}],version:"current",lastUpdatedBy:"Lizzi Lindboe",lastUpdatedAt:1674164388,formattedLastUpdatedAt:"Jan 19, 2023",frontMatter:{title:"Using Screen Readers",description:"Learn how to use a screen reader to improve accesibility!",tags:["Accessibility","iOS","Android"],last_update:{author:"Lizzi Lindboe"},publish_date:"2022-10-09T00:00:00.000Z"},sidebar:"mainSidebar",previous:{title:"Updating Dependencies with Yarn Audit, Outdated and Upgrade",permalink:"/docs/recipes/UpdatingDependencies"},next:{title:"Zustand",permalink:"/docs/recipes/Zustand"}},l={},c=[{value:"iOS",id:"ios",level:2},{value:"On a simulator",id:"on-a-simulator",level:3},{value:"On a device",id:"on-a-device",level:3},{value:"Android",id:"android",level:2},{value:"Devices with TalkBack installed",id:"devices-with-talkback-installed",level:3},{value:"Devices with Voice Assistant and not TalkBack",id:"devices-with-voice-assistant-and-not-talkback",level:3}],p={toc:c};function u(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"using-screen-readers"},"Using Screen Readers"),(0,i.kt)("h2",{id:"ios"},"iOS"),(0,i.kt)("h3",{id:"on-a-simulator"},"On a simulator"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Setting it up"),"\nSimulators don't have VoiceOver, so you'll have to use the Accessibility Inspector."),(0,i.kt)("p",null,"From XCode, go to Xcode menu > Developer Tools > Accessibility Inspector, and make sure to change the laptop icon in the top left of the inspector window to the simulator instead."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Operation"),"\nFor operation, the WWDC video on the inspector is more helpful than the documentation: ",(0,i.kt)("a",{parentName:"p",href:"https://developer.apple.com/videos/play/wwdc2019/257/"},"https://developer.apple.com/videos/play/wwdc2019/257/"),"."),(0,i.kt)("h3",{id:"on-a-device"},"On a device"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Setting it up"),"\nGo to Settings > Accessibility > VoiceOver and toggle VoiceOver on.\nYou can also toggle VoiceOver a few other ways:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://support.apple.com/guide/iphone/aside/summon_siri/15.0/ios/15.0"},"Activate Siri"),' and ssay "Turn on VoiceOver" or "Turn off VoiceOver."'),(0,i.kt)("li",{parentName:"ul"},"Set up an accessibility shortcut to open VoiceOver when you:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://support.apple.com/guide/iphone/accessibility-shortcuts-iph3e2e31a5/15.0/ios/15.0#iph3ce566f26"},"Triple-click the side button")," (on an iPhone with Face ID)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://support.apple.com/guide/iphone/accessibility-shortcuts-iph3e2e31a5/15.0/ios/15.0#iphe66e6ee36"},"Triple-click the Home button")," (on an iPhone with a Home button).")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Operation"),"\nBasic navigation for beginners:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Tap items on the screen to hear them read aloud or interact with them"),(0,i.kt)("li",{parentName:"ul"},"To activate items you have selected, double tap quickly anywhere on the screen"),(0,i.kt)("li",{parentName:"ul"},"To scroll, select an item within the scrollable area and use a three-finger swipe")),(0,i.kt)("p",null,"Other useful navigation tips:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"To hear the screen read aloud from the beginning, swipe upward with two fingers"),(0,i.kt)("li",{parentName:"ul"},'If you hear "Actions Available," you can access extra actions using the Rotor.',(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},'Make sure the rotor is set to "Actions" by rotating two fingers in a circle, as if turning a dial'),(0,i.kt)("li",{parentName:"ul"},"To navigate through the list of actions, single-finger swipe up or down, and double-tap to use"))),(0,i.kt)("li",{parentName:"ul"},"Gestures documented here:\n",(0,i.kt)("a",{parentName:"li",href:"https://support.apple.com/guide/iphone/learn-voiceover-gestures-iph3e2e2281/ios"},"https://support.apple.com/guide/iphone/learn-voiceover-gestures-iph3e2e2281/ios")," - Helpful cheatsheet:\n",(0,i.kt)("a",{parentName:"li",href:"https://dequeuniversity.com/screenreaders/voiceover-ios-shortcuts"},"https://dequeuniversity.com/screenreaders/voiceover-ios-shortcuts"))),(0,i.kt)("h2",{id:"android"},"Android"),(0,i.kt)("h3",{id:"devices-with-talkback-installed"},"Devices with TalkBack installed"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Setup"),"\nGo to Settings > Accessibility > TalkBack and toggle it on."),(0,i.kt)("p",null,"You can also:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://support.google.com/accessibility/android/answer/7650693"},"Set up a shortcut")," to toggle TalkBack by pressing both volume keys for 3 seconds"),(0,i.kt)("li",{parentName:"ul"},"Configure through adb:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# enable\nadb shell settings put secure enabled_accessibility_services \\\ncom.google.android.marvin.talkback/com.google.android.marvin.talkback.TalkBackService\n# disable\nadb shell settings put secure enabled_accessibility_services \\\ncom.android.talkback/com.google.android.marvin.talkback.TalkBackService\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Operation"),"\nBasic navigation:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'TalkBack follows a "drag your finger to explore the screen" paradigm. As you drag your finger around, you\'ll hear items read out. Pause over items you want to hear.'),(0,i.kt)("li",{parentName:"ul"},"You can also swipe left and right with one finger to explore items linearly."),(0,i.kt)("li",{parentName:"ul"},"Double-tap to activate an element."),(0,i.kt)("li",{parentName:"ul"},"Use two-finger swipes to scroll or pull down the notification shade."),(0,i.kt)("li",{parentName:"ul"},'Typing: By default, TalkBack tries to follow the "drag your finger to explore the screen" pattern on the keyboard too. Drag your finger over the keys. Whichever you hovered on last and then lifted is typed.',(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},'This does not appear to always work with the default Samsung keyboard. You can install "GBoard" from the Google Play store and use that instead.')))),(0,i.kt)("p",null,"The rest:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The TalkBack UI can vary depending on the device you're on. Reference these articles as you're learning:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Using the TalkBack menu and reading controls:\n",(0,i.kt)("a",{parentName:"li",href:"https://support.google.com/accessibility/android/answer/6007066?hl=en&ref_topic=10601570"},"https://support.google.com/accessibility/android/answer/6007066?hl=en&ref_topic=10601570")),(0,i.kt)("li",{parentName:"ul"},"Gestures:\n",(0,i.kt)("a",{parentName:"li",href:"https://support.google.com/accessibility/android/answer/6151827"},"https://support.google.com/accessibility/android/answer/6151827")))),(0,i.kt)("li",{parentName:"ul"},"Access custom actions by opening the TalkBack menu (depending on the device, either a three-finger tap, or, in one motion, swipe down then right).")),(0,i.kt)("h3",{id:"devices-with-voice-assistant-and-not-talkback"},"Devices with Voice Assistant and not TalkBack"),(0,i.kt)("p",null,"(e.g., Galaxy S models less than 20)"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Setup"),"\nTODO: Voice Assistant instructions"),(0,i.kt)("p",null,'You can also probably install TalkBack on your device. Install "Android Accessibility Suite" from the Play store, and then enable it from Settings > Accessibility > Installed Accessibility Services. Note that if you have multiple profiles on this device, this service must be installed on the primary (personal) profile.'),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Operation"),"\nCheatsheet:\n",(0,i.kt)("a",{parentName:"p",href:"https://dequeuniversity.com/screenreaders/talkback-shortcuts"},"https://dequeuniversity.com/screenreaders/talkback-shortcuts")))}u.isMDXComponent=!0}}]);