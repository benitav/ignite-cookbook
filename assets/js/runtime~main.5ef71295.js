(()=>{"use strict";var e,f,a,t,r,b={},c={};function o(e){var f=c[e];if(void 0!==f)return f.exports;var a=c[e]={id:e,loaded:!1,exports:{}};return b[e].call(a.exports,a,a.exports,o),a.loaded=!0,a.exports}o.m=b,o.c=c,e=[],o.O=(f,a,t,r)=>{if(!a){var b=1/0;for(i=0;i<e.length;i++){a=e[i][0],t=e[i][1],r=e[i][2];for(var c=!0,d=0;d<a.length;d++)(!1&r||b>=r)&&Object.keys(o.O).every((e=>o.O[e](a[d])))?a.splice(d--,1):(c=!1,r<b&&(b=r));if(c){e.splice(i--,1);var n=t();void 0!==n&&(f=n)}}return f}r=r||0;for(var i=e.length;i>0&&e[i-1][2]>r;i--)e[i]=e[i-1];e[i]=[a,t,r]},o.n=e=>{var f=e&&e.__esModule?()=>e.default:()=>e;return o.d(f,{a:f}),f},a=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,o.t=function(e,t){if(1&t&&(e=this(e)),8&t)return e;if("object"==typeof e&&e){if(4&t&&e.__esModule)return e;if(16&t&&"function"==typeof e.then)return e}var r=Object.create(null);o.r(r);var b={};f=f||[null,a({}),a([]),a(a)];for(var c=2&t&&e;"object"==typeof c&&!~f.indexOf(c);c=a(c))Object.getOwnPropertyNames(c).forEach((f=>b[f]=()=>e[f]));return b.default=()=>e,o.d(r,b),r},o.d=(e,f)=>{for(var a in f)o.o(f,a)&&!o.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:f[a]})},o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce(((f,a)=>(o.f[a](e,f),f)),[])),o.u=e=>"assets/js/"+({53:"935f2afb",327:"e7928ab4",420:"1c9ea255",977:"80bd4e79",1065:"e438b990",1317:"33a056c1",1710:"bb1cb858",1833:"7b45617e",2058:"a8bdcc5c",2181:"9ff7e1f8",2182:"da9277bc",3135:"c3e2f4d4",3187:"0f42a469",3188:"145425bc",3237:"1df93b7f",3366:"528b3b92",3441:"63181745",3672:"c00eb378",3679:"df133c56",3751:"3720c009",4011:"861d4b97",4121:"55960ee5",4290:"77e7f813",4349:"5495e4e6",4477:"25fd1ec3",4529:"e00a2ebd",4885:"cf5dd7b6",5257:"ecd5222c",5396:"6f833997",5893:"657027a7",6039:"3a6f3352",6275:"03224537",6568:"d3d48d33",6605:"d6ab422f",6649:"f523b160",6862:"d0e08e4a",6880:"683834f0",6952:"4b09591e",7111:"c5eafab1",7664:"35774863",7748:"17277f8c",7918:"17896441",7941:"2de6cbb6",7978:"440b2465",8101:"ba5172a7",8117:"afac209b",8154:"4e09609f",9340:"fe9b09bf",9470:"afef677e",9514:"1be78505",9671:"0e384e19",9853:"3192f89a",9924:"df203c0f"}[e]||e)+"."+{53:"73195f27",327:"24e9e98d",420:"44a7c714",977:"987dcb3f",1065:"6dd58306",1317:"31729361",1710:"2147b0a3",1833:"c3b2c7ee",2058:"fe10b48e",2181:"348c8b9f",2182:"322ec7a6",3135:"9333f909",3187:"f1bb702c",3188:"6231c1a0",3237:"1f4ad567",3366:"5eeb681d",3441:"54cc9b34",3672:"191b7608",3679:"b850f1c7",3751:"0ab034e9",4011:"a7d143e7",4121:"84ab0014",4290:"8ed10595",4349:"c7c6708d",4477:"4f1f0307",4529:"ac12d813",4885:"9b0e4bcb",4972:"094b6656",5257:"d6599849",5396:"92eefb19",5893:"2b6bcf05",6039:"a7d0348d",6275:"1aa127f3",6568:"4ff6ea80",6605:"ca2a41c7",6649:"e0b48560",6862:"95583b07",6880:"07e8734c",6952:"af5698cd",7111:"bf0df76d",7664:"a1b77e29",7748:"7b2bae3b",7918:"2b21bbcb",7941:"cb526196",7978:"659b47e3",8101:"088cd395",8117:"aa2181d3",8154:"01b9418e",9340:"681c7fe9",9470:"cefe6e6c",9514:"f2640715",9671:"765f4e17",9853:"9c0f9198",9924:"d798c19f"}[e]+".js",o.miniCssF=e=>{},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,f)=>Object.prototype.hasOwnProperty.call(e,f),t={},r="ignite-cookbook:",o.l=(e,f,a,b)=>{if(t[e])t[e].push(f);else{var c,d;if(void 0!==a)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var u=n[i];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==r+a){c=u;break}}c||(d=!0,(c=document.createElement("script")).charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.setAttribute("data-webpack",r+a),c.src=e),t[e]=[f];var l=(f,a)=>{c.onerror=c.onload=null,clearTimeout(s);var r=t[e];if(delete t[e],c.parentNode&&c.parentNode.removeChild(c),r&&r.forEach((e=>e(a))),f)return f(a)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=l.bind(null,c.onerror),c.onload=l.bind(null,c.onload),d&&document.head.appendChild(c)}},o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.p="/ignite-cookbook/",o.gca=function(e){return e={17896441:"7918",35774863:"7664",63181745:"3441","935f2afb":"53",e7928ab4:"327","1c9ea255":"420","80bd4e79":"977",e438b990:"1065","33a056c1":"1317",bb1cb858:"1710","7b45617e":"1833",a8bdcc5c:"2058","9ff7e1f8":"2181",da9277bc:"2182",c3e2f4d4:"3135","0f42a469":"3187","145425bc":"3188","1df93b7f":"3237","528b3b92":"3366",c00eb378:"3672",df133c56:"3679","3720c009":"3751","861d4b97":"4011","55960ee5":"4121","77e7f813":"4290","5495e4e6":"4349","25fd1ec3":"4477",e00a2ebd:"4529",cf5dd7b6:"4885",ecd5222c:"5257","6f833997":"5396","657027a7":"5893","3a6f3352":"6039","03224537":"6275",d3d48d33:"6568",d6ab422f:"6605",f523b160:"6649",d0e08e4a:"6862","683834f0":"6880","4b09591e":"6952",c5eafab1:"7111","17277f8c":"7748","2de6cbb6":"7941","440b2465":"7978",ba5172a7:"8101",afac209b:"8117","4e09609f":"8154",fe9b09bf:"9340",afef677e:"9470","1be78505":"9514","0e384e19":"9671","3192f89a":"9853",df203c0f:"9924"}[e]||e,o.p+o.u(e)},(()=>{var e={1303:0,532:0};o.f.j=(f,a)=>{var t=o.o(e,f)?e[f]:void 0;if(0!==t)if(t)a.push(t[2]);else if(/^(1303|532)$/.test(f))e[f]=0;else{var r=new Promise(((a,r)=>t=e[f]=[a,r]));a.push(t[2]=r);var b=o.p+o.u(f),c=new Error;o.l(b,(a=>{if(o.o(e,f)&&(0!==(t=e[f])&&(e[f]=void 0),t)){var r=a&&("load"===a.type?"missing":a.type),b=a&&a.target&&a.target.src;c.message="Loading chunk "+f+" failed.\n("+r+": "+b+")",c.name="ChunkLoadError",c.type=r,c.request=b,t[1](c)}}),"chunk-"+f,f)}},o.O.j=f=>0===e[f];var f=(f,a)=>{var t,r,b=a[0],c=a[1],d=a[2],n=0;if(b.some((f=>0!==e[f]))){for(t in c)o.o(c,t)&&(o.m[t]=c[t]);if(d)var i=d(o)}for(f&&f(a);n<b.length;n++)r=b[n],o.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return o.O(i)},a=self.webpackChunkignite_cookbook=self.webpackChunkignite_cookbook||[];a.forEach(f.bind(null,0)),a.push=f.bind(null,a.push.bind(a))})()})();