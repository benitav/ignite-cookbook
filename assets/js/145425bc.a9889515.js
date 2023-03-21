"use strict";(self.webpackChunkignite_cookbook=self.webpackChunkignite_cookbook||[]).push([[3188],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>f});var o=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,o,a=function(t,e){if(null==t)return{};var n,o,a={},i=Object.keys(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var l=o.createContext({}),c=function(t){var e=o.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):r(r({},e),t)),n},p=function(t){var e=c(t.components);return o.createElement(l.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},g=o.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,l=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),g=c(n),f=a,S=g["".concat(l,".").concat(f)]||g[f]||u[f]||i;return n?o.createElement(S,r(r({ref:e},p),{},{components:n})):o.createElement(S,r({ref:e},p))}));function f(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,r=new Array(i);r[0]=g;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:a,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}g.displayName="MDXCreateElement"},9556:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var o=n(7462),a=(n(7294),n(3905));const i={title:"Accessiblity Font Sizes",description:"Dealing With Accessibility Font Sizes in React Native",tags:["Accessibility"],last_update:{author:"Mark Rickert"},publish_date:new Date("2022-10-09T00:00:00.000Z")},r="Dealing With Accessibility Font Sizes in React Native",s={unversionedId:"recipes/AccessibilityFontSizes",id:"recipes/AccessibilityFontSizes",title:"Accessiblity Font Sizes",description:"Dealing With Accessibility Font Sizes in React Native",source:"@site/docs/recipes/AccessibilityFontSizes.md",sourceDirName:"recipes",slug:"/recipes/AccessibilityFontSizes",permalink:"/docs/recipes/AccessibilityFontSizes",draft:!1,tags:[{label:"Accessibility",permalink:"/docs/tags/accessibility"}],version:"current",lastUpdatedBy:"Mark Rickert",lastUpdatedAt:1679412301,formattedLastUpdatedAt:"Mar 21, 2023",frontMatter:{title:"Accessiblity Font Sizes",description:"Dealing With Accessibility Font Sizes in React Native",tags:["Accessibility"],last_update:{author:"Mark Rickert"},publish_date:"2022-10-09T00:00:00.000Z"},sidebar:"mainSidebar",previous:{title:"Intro to Recipes",permalink:"/docs/intro"},next:{title:"CircleCI CD Setup - React Native",permalink:"/docs/recipes/CircleCIRNSetup"}},l={},c=[],p={toc:c};function u(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"dealing-with-accessibility-font-sizes-in-react-native"},"Dealing With Accessibility Font Sizes in React Native"),(0,a.kt)("p",null,"Modern phones have a lot of accessibility options. Users can make the font size on Android GIGANTIC. This is a way you can allow users to scale their fonts larger and smaller, but only to a certain point. We wanted the accessibility but not the extreme ends of it, just to keep things readable without turning off font scaling completely."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'import * as React from "react";\nimport { View, TextProps, PixelRatio, AppState } from "react-native";\nimport { MaterialTopTabNavigationOptions } from "@react-navigation/material-top-tabs";\nimport { StackNavigationOptions } from "@react-navigation/stack";\nimport { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";\nimport { DrawerNavigationOptions } from "@react-navigation/drawer";\nimport { Text } from "./Text";\n\n// These constants determine how much bigger the font size should get based on the user\'s\n// accessibility settings. Even if they turn the dial all the way to 11, we will only ever\n// scale the fonts by these factors. This is to prevent the font size from getting too large\n// and completely breaking the layout.\nconst MAX_FONT_SCALE = 1.2;\nconst MIN_FONT_SCALE = 0.8;\n\n// Returns fontScaling props for Text and TextInput components\n// Usage:\n// const fontProps = useFontScaling();\n// return <Text {...fontProps}>Text Here</Text>;\nexport const useFontScaling = (): Partial<TextProps> => {\n  // You probably want to get this value from your user\'s preferences\n  const [allowFontScaling,] = React.useState(true);\n\n  const fontScaling: Partial<TextProps> = React.useMemo(() => {\n    return {\n      minimumFontScale: allowFontScaling ? MIN_FONT_SCALE : 1, // This prevents the font from getting too small.\n      maxFontSizeMultiplier: allowFontScaling ? MAX_FONT_SCALE : 1, // This prevents the font from getting too big.\n      allowFontScaling, // This allows the font to be scaled or not.\n    };\n  }, [allowFontScaling]);\n\n  return fontScaling;\n};\n\n// Returns fontScaling props for Navigator components\nexport const useNavigatorFontScalingScreenOptions =\n  (): Partial<StackNavigationOptions> => {\n    // You probably want to get this value from your user\'s preferences\n    const [allowFontScaling,] = React.useState(true);\n\n    const fontScaling: Partial<StackNavigationOptions> = React.useMemo(() => {\n      return {\n        headerBackAllowFontScaling: allowFontScaling,\n        headerTitleAllowFontScaling: allowFontScaling,\n      };\n    }, [allowFontScaling]);\n\n    return fontScaling;\n  };\n\n// Returns fontScaling props for Top Tab Navigator components\nexport const useTopTabNavigatorFontScalingScreenOptions =\n  (): Partial<MaterialTopTabNavigationOptions> => {\n    // You probably want to get this value from your user\'s preferences\n    const [allowFontScaling,] = React.useState(true);\n\n    const fontScaling: Partial<MaterialTopTabNavigationOptions> =\n      React.useMemo(() => {\n        return {\n          tabBarAllowFontScaling: allowFontScaling,\n        };\n      }, [allowFontScaling]);\n\n    return fontScaling;\n  };\n\n// Returns fontScaling props for Tab Navigator components\nexport const useTabNavigatorFontScalingScreenOptions =\n  (): Partial<BottomTabNavigationOptions> => {\n    // You probably want to get this value from your user\'s preferences\n    const [allowFontScaling,] = React.useState(true);\n\n    const fontScaling: Partial<BottomTabNavigationOptions> =\n      React.useMemo(() => {\n        return {\n          tabBarAllowFontScaling: fontScaling,\n          headerTitleAllowFontScaling: fontScaling,\n        };\n      }, [allowFontScaling]);\n\n    return fontScaling;\n  };\n\n// Returns fontScaling props for Tab Navigator components\nexport const useDrawerNavigatorFontScalingScreenOptions =\n  (): Partial<DrawerNavigationOptions> => {\n    const [allowFontScaling,] = React.useState(true);\n\n    const fontScaling: Partial<DrawerNavigationOptions> = React.useMemo(() => {\n      return {\n        drawerAllowFontScaling: allowFontScaling,\n        headerTitleAllowFontScaling: allowFontScaling,\n      };\n    }, [allowFontScaling]);\n\n    return fontScaling;\n  };\n\n// Use this handy __DEV__ mode only component to figure out what the font size is actually doing.\nexport const DevFontSize = () => {\n  const [allowFontScaling,] = React.useState(true);\n  const [appStateVisible, setAppStateVisible] = React.useState(\n    AppState.currentState\n  );\n\n  React.useEffect(() => {\n    const subscription = AppState.addEventListener("change", (nextAppState) => {\n      setAppStateVisible(nextAppState);\n    });\n\n    return () => subscription.remove();\n  }, []);\n\n  // This memo has to listen to appStateVisible even though it\'s not a direct dependency\n  // so that we can reload the font size when the app switches back from user settings.\n  const fontSize = React.useMemo(() => {\n    if (allowFontScaling) {\n      return Math.min(\n        Math.max(PixelRatio.getFontScale(), MIN_FONT_SCALE),\n        MAX_FONT_SCALE\n      );\n    } else {\n      return 1.0;\n    }\n  }, [allowFontScaling, appStateVisible]); // eslint-disable-line react-hooks/exhaustive-deps\n\n  return __DEV__ ? (\n    <View style={{\n      backgroundColor: \'#E58F83\',\n      padding: 10,\n      margin: 10,\n      borderRadius: 5,\n      borderColor: \'#000,\n      borderWidth: 1,\n    }}>\n      <Text>\n        User Font Setting: {Math.trunc(PixelRatio.getFontScale() * 100) / 100}\n      </Text>\n      <Text>\n        Currently limiting ratio to: {Math.trunc(fontSize * 100) / 100}\n      </Text>\n    </View>\n  ) : null;\n};\n')))}u.isMDXComponent=!0}}]);