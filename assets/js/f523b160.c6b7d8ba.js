"use strict";(self.webpackChunkignite_cookbook=self.webpackChunkignite_cookbook||[]).push([[6649],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),m=o,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return r?n.createElement(h,i(i({ref:t},p),{},{components:r})):n.createElement(h,i({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},4488:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const a={title:"Creating a Good Experience for Screen Readers",description:"Learn how to improve the experience of screen readers using your app!",tags:["Accessibility","iOS","Android"],last_update:{author:"Lizzi Lindboe"}},i=void 0,s={unversionedId:"recipes/CreatingGreateExperienceForScreenReaders",id:"recipes/CreatingGreateExperienceForScreenReaders",title:"Creating a Good Experience for Screen Readers",description:"Learn how to improve the experience of screen readers using your app!",source:"@site/docs/recipes/CreatingGreateExperienceForScreenReaders.md",sourceDirName:"recipes",slug:"/recipes/CreatingGreateExperienceForScreenReaders",permalink:"/ignite-cookbook/docs/recipes/CreatingGreateExperienceForScreenReaders",draft:!1,tags:[{label:"Accessibility",permalink:"/ignite-cookbook/docs/tags/accessibility"},{label:"iOS",permalink:"/ignite-cookbook/docs/tags/i-os"},{label:"Android",permalink:"/ignite-cookbook/docs/tags/android"}],version:"current",lastUpdatedBy:"Lizzi Lindboe",lastUpdatedAt:1673381032,formattedLastUpdatedAt:"Jan 10, 2023",frontMatter:{title:"Creating a Good Experience for Screen Readers",description:"Learn how to improve the experience of screen readers using your app!",tags:["Accessibility","iOS","Android"],last_update:{author:"Lizzi Lindboe"}},sidebar:"mainSidebar",previous:{title:"CircleCI CD Setup - React Native",permalink:"/ignite-cookbook/docs/recipes/CircleCIRNSetup"},next:{title:"Detox Intro",permalink:"/ignite-cookbook/docs/recipes/DetoxIntro"}},l={},c=[{value:"UI Patterns",id:"ui-patterns",level:2},{value:"Screens",id:"screens",level:3},{value:"Common patterns that require more work to add good UX for screen readers",id:"common-patterns-that-require-more-work-to-add-good-ux-for-screen-readers",level:3},{value:"RN-specific issues",id:"rn-specific-issues",level:3},{value:"Labeling",id:"labeling",level:2}],p={toc:c};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"ui-patterns"},"UI Patterns"),(0,o.kt)("h3",{id:"screens"},"Screens"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Titles"),"\nAll screen should ideally have unique titles, to make it easier to know quickly which screen you're on ",(0,o.kt)("a",{parentName:"p",href:"https://www.a11yportal.com/guidelines/design/structure.html#unique-page-screen-titles"},"source"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Headings"),'\nApps should ideally mark headings to allow for quick "scanning" of the structure of screens (',(0,o.kt)("a",{parentName:"p",href:"https://www.a11yportal.com/guidelines/design/structure.html#headings"},"source"),'). In React Native, mark headings with the "header" accessibility role.'),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Try to group controls as much as possible"),"\n(",(0,o.kt)("a",{parentName:"p",href:"https://www.a11yportal.com/guidelines/design/structure.html#grouped-elements"},"source"),")"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"It is easier and quicker for people using a keyboard or screen reader to interact with content when not overwhelmed and confused by extraneous elements. Grouping elements into a single overall control makes things clearer, simplifies interactions, and can provide larger touch targets.\nFor example, a control such as a custom item selector may be made up of smaller interface elements, but will be easier to use if conveyed as a single control. Another common example is\xa0",(0,o.kt)("a",{parentName:"p",href:"https://www.a11yportal.com/guidelines/design/links.html#combining-repeated-links"},"grouping adjacent links"),"\xa0to the same resource.")),(0,o.kt)("h3",{id:"common-patterns-that-require-more-work-to-add-good-ux-for-screen-readers"},"Common patterns that require more work to add good UX for screen readers"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Infinite Scroll"),"\nInfinite scroll causes two main problems for screen readers: 1) there's no clear \"end\" to jump to, and 2) elements pop in, which need to be announced if there weren't there when the end was reached."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Toast, Dialog, or Modal"),'\nDepending on the implementation used, these elements may not "announce" when they pop in. Evaluate solution for this before going with a library.'),(0,o.kt)("h3",{id:"rn-specific-issues"},"RN-specific issues"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Test links nested in text with formatting"),"\nText links nested in other text elements aren't accessible. If you need to implement that design, there are a few options:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Wrap the parent text in a View and add custom ",(0,o.kt)("a",{parentName:"li",href:"https://reactnative.dev/docs/accessibility#accessibility-actions"},"accessibilityActions")," for opening the links",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Do not apply custom accessibilityActions to text, those will cause a crash on iOS"))),(0,o.kt)("li",{parentName:"ul"},"Re-structure the component based on whether a screen reader is turned on (as in this ",(0,o.kt)("a",{parentName:"li",href:"https://callstack.com/blog/react-native-android-accessibility-tips/"},"blog post"),")")),(0,o.kt)("h2",{id:"labeling"},"Labeling"),(0,o.kt)("p",null,"A good accessibility label for an element is concise, but also unique and makes sense even when the screen is not read linearly. This is because one way to navigate with a screen reader is to search for a label. Another is to jump between controls (e.g., links, buttons, form fields), so if a header preceding a link is the only way to understand the link, it won't make sense in this navigation method."),(0,o.kt)("p",null,"See this post for some great advice on when and how to use labels: ",(0,o.kt)("a",{parentName:"p",href:"https://mobilea11y.com/blog/when-to-use-accessibility-labels"},"https://mobilea11y.com/blog/when-to-use-accessibility-labels")))}d.isMDXComponent=!0}}]);