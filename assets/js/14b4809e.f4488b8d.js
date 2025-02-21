"use strict";(self.webpackChunknachocode_developer_hub=self.webpackChunknachocode_developer_hub||[]).push([[448],{5593:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>o,contentTitle:()=>r,default:()=>a,frontMatter:()=>l,metadata:()=>s,toc:()=>t});const s=JSON.parse('{"id":"sdk/getting-started","title":"\uc2dc\uc791\ud558\uae30","description":"\ud83d\udd14 \ucd5c\uc2e0\ud654 \uc77c\uc790: 2025-02-20","source":"@site/docs/sdk/getting-started.md","sourceDirName":"sdk","slug":"/sdk/getting-started","permalink":"/docs/sdk/getting-started","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"docs","previous":{"title":"\uac1c\uc694","permalink":"/docs/sdk/intro"},"next":{"title":"\uc560\ud50c\ub9ac\ucf00\uc774\uc158 (app)","permalink":"/docs/sdk/namespaces/app"}}');var c=i(4848),d=i(8453);const l={sidebar_position:2},r="\uc2dc\uc791\ud558\uae30",o={},t=[{value:"1. SDK \uc124\uce58",id:"1-sdk-\uc124\uce58",level:2},{value:"\ucd5c\uc2e0 \ubc84\uc804 \ubd88\ub7ec\uc624\uae30",id:"\ucd5c\uc2e0-\ubc84\uc804-\ubd88\ub7ec\uc624\uae30",level:3},{value:"\ud2b9\uc815 \ubc84\uc804 \uc0ac\uc6a9",id:"\ud2b9\uc815-\ubc84\uc804-\uc0ac\uc6a9",level:3},{value:"2. SDK \ucd08\uae30\ud654",id:"2-sdk-\ucd08\uae30\ud654",level:2},{value:"\uac1c\uc694",id:"\uac1c\uc694",level:3},{value:"<code>init</code> \ud568\uc218 \uc815\uc758",id:"init-\ud568\uc218-\uc815\uc758",level:3},{value:"<code>InitializeOptions</code>",id:"initializeoptions",level:4},{value:"<code>init(apiKey: string, options?: InitializeOptions): void</code>",id:"initapikey-string-options-initializeoptions-void",level:4},{value:"<strong>\ucd08\uae30\ud654 \uc635\uc158 \uc124\uba85</strong>",id:"\ucd08\uae30\ud654-\uc635\uc158-\uc124\uba85",level:4},{value:"\uc608\uc81c",id:"\uc608\uc81c",level:3},{value:"3. \uc8fc\uc694 \uae30\ub2a5 \uc0ac\uc6a9",id:"3-\uc8fc\uc694-\uae30\ub2a5-\uc0ac\uc6a9",level:2}];function h(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.R)(),...n.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(e.header,{children:(0,c.jsx)(e.h1,{id:"\uc2dc\uc791\ud558\uae30",children:"\uc2dc\uc791\ud558\uae30"})}),"\n",(0,c.jsxs)(e.blockquote,{children:["\n",(0,c.jsxs)(e.p,{children:["\ud83d\udd14 ",(0,c.jsx)(e.strong,{children:"\ucd5c\uc2e0\ud654 \uc77c\uc790:"})," 2025-02-20"]}),"\n"]}),"\n",(0,c.jsx)(e.p,{children:"nachocode JavaScript Client SDK\ub97c \ud504\ub85c\uc81d\ud2b8\uc5d0 \ud1b5\ud569\ud558\uace0 \uae30\ubcf8\uc801\uc73c\ub85c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub3c4\ub85d \uc124\uc815\ud558\ub294 \ubc29\ubc95\uc744 \uc548\ub0b4\ud569\ub2c8\ub2e4."}),"\n",(0,c.jsxs)(e.p,{children:["nachocode SDK\ub294 \uc6f9 \ud074\ub77c\uc774\uc5b8\ud2b8\uc5d0\uc11c ",(0,c.jsx)(e.strong,{children:"\ub124\uc774\ud2f0\ube0c \uc571\uc758 \uae30\ub2a5"}),"\uc744 \uc190\uc27d\uac8c \ud65c\uc6a9\ud560 \uc218 \uc788\ub3c4\ub85d \uc9c0\uc6d0\ud569\ub2c8\ub2e4.",(0,c.jsx)(e.br,{}),"\n","\uc774 \uac00\uc774\ub4dc\ub294 SDK \uc124\uce58\ubd80\ud130 \ucd08\uae30\ud654, \uc8fc\uc694 \uae30\ub2a5 \uc0ac\uc6a9\uae4c\uc9c0 \ub2e8\uacc4\ubcc4\ub85c \uc124\uba85\ud569\ub2c8\ub2e4."]}),"\n",(0,c.jsx)(e.hr,{}),"\n",(0,c.jsx)(e.h2,{id:"1-sdk-\uc124\uce58",children:"1. SDK \uc124\uce58"}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsxs)(e.p,{children:["nachocode SDK\ub294 ",(0,c.jsx)(e.strong,{children:"CDN\uc744 \ud1b5\ud574 \uac04\ud3b8\ud558\uac8c \uc124\uce58"}),"\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n"]}),"\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsxs)(e.p,{children:["\uc6f9 \ud398\uc774\uc9c0\uc758 ",(0,c.jsx)(e.code,{children:"<body>"})," \ud0dc\uadf8 \uc548\uc5d0 \ub2e4\uc74c\uacfc \uac19\uc740 \uc2a4\ud06c\ub9bd\ud2b8 \ud0dc\uadf8\ub97c \ucd94\uac00\ud569\ub2c8\ub2e4. \uc774 \uc2a4\ud06c\ub9bd\ud2b8\ub294 ",(0,c.jsx)(e.strong,{children:"nachocode SDK"}),"\ub97c \uc6f9 \ud398\uc774\uc9c0\uc5d0 \ub85c\ub4dc\ud569\ub2c8\ub2e4."]}),"\n",(0,c.jsx)(e.h3,{id:"\ucd5c\uc2e0-\ubc84\uc804-\ubd88\ub7ec\uc624\uae30",children:"\ucd5c\uc2e0 \ubc84\uc804 \ubd88\ub7ec\uc624\uae30"}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsx)(e.p,{children:"\ud604\uc7ac \ucd5c\uc2e0 \ubc84\uc804 v1.4.0"}),"\n"]}),"\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsx)(e.p,{children:"\ucd5c\uc2e0 \ubc84\uc804\uc758 SDK\ub97c \ud56d\uc0c1 \uc720\uc9c0\ud558\ub824\uba74 \uc544\ub798 \ucf54\ub4dc\ub97c \uc0ac\uc6a9\ud558\uc138\uc694"}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-html",children:'<script src="https://cdn.nachocode.io/nachocode/client-sdk/@latest/client-sdk.min.js"><\/script>\n'})}),"\n",(0,c.jsx)(e.h3,{id:"\ud2b9\uc815-\ubc84\uc804-\uc0ac\uc6a9",children:"\ud2b9\uc815 \ubc84\uc804 \uc0ac\uc6a9"}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsx)(e.li,{children:"\ud2b9\uc815 \ubc84\uc804\uc73c\ub85c \uace0\uc815\ud558\ub824\uba74 \ub2e4\uc74c\uacfc \uac19\uc774 \uc0ac\uc6a9\ud569\ub2c8\ub2e4"}),"\n"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-html",children:'<script src="https://cdn.nachocode.io/nachocode/client-sdk/@1.4.0/client-sdk.min.js"><\/script>\n'})}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(e.blockquote,{children:["\n",(0,c.jsxs)(e.p,{children:["\ud83d\udce2 ",(0,c.jsx)(e.strong,{children:"\ucd5c\uc2e0 \ubc84\uc804\uc744 \uc0ac\uc6a9\ud558\ub294 \uac83\uc774 \uad8c\uc7a5\ub418\uba70, \ud2b9\uc815 \ubc84\uc804 \uace0\uc815\uc740 \ud638\ud658\uc131 \uc720\uc9c0\uac00 \ud544\uc694\ud55c \uacbd\uc6b0\uc5d0 \uc0ac\uc6a9\ud558\uc138\uc694."})]}),"\n"]}),"\n",(0,c.jsx)(e.hr,{}),"\n",(0,c.jsx)(e.h2,{id:"2-sdk-\ucd08\uae30\ud654",children:"2. SDK \ucd08\uae30\ud654"}),"\n",(0,c.jsx)(e.h3,{id:"\uac1c\uc694",children:"\uac1c\uc694"}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:["\uc6f9 \ud398\uc774\uc9c0 \ub85c\ub529\uc774 \uc644\ub8cc\ub418\uba74, ",(0,c.jsx)(e.strong,{children:"nachocode SDK\ub97c \ubc18\ub4dc\uc2dc \ucd08\uae30\ud654"}),"\ud574\uc57c \ud569\ub2c8\ub2e4."]}),"\n",(0,c.jsxs)(e.li,{children:["\ucd08\uae30\ud654\ub294 ",(0,c.jsx)(e.strong,{children:"API \ud0a4"}),"\ub97c \uc0ac\uc6a9\ud558\uba70, \ud544\uc694\uc5d0 \ub530\ub77c \ub514\ubc84\uae45 \ub85c\uae45 \uae30\ub2a5\uc744 \ud65c\uc131\ud654\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n"]}),"\n",(0,c.jsxs)(e.h3,{id:"init-\ud568\uc218-\uc815\uc758",children:[(0,c.jsx)(e.code,{children:"init"})," \ud568\uc218 \uc815\uc758"]}),"\n",(0,c.jsx)(e.h4,{id:"initializeoptions",children:(0,c.jsx)(e.code,{children:"InitializeOptions"})}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.code,{children:"sandbox?: boolean"}),": \uc0cc\ub4dc\ubc15\uc2a4 \uc11c\ubc84 \uc0ac\uc6a9 \uc5ec\ubd80\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4."]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.code,{children:"logger?: boolean"}),": \ub85c\uac70 \uc0ac\uc6a9 \uc5ec\ubd80\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4."]}),"\n"]}),"\n",(0,c.jsx)(e.h4,{id:"initapikey-string-options-initializeoptions-void",children:(0,c.jsx)(e.code,{children:"init(apiKey: string, options?: InitializeOptions): void"})}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.strong,{children:"nachocode SDK"}),"\ub97c \ucd08\uae30\ud654\ud569\ub2c8\ub2e4. \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc774 \uc2dc\uc791\ud560 \ub54c \ud638\ucd9c\ud574\uc57c \ud569\ub2c8\ub2e4."]}),"\n"]}),"\n",(0,c.jsx)(e.h4,{id:"\ucd08\uae30\ud654-\uc635\uc158-\uc124\uba85",children:(0,c.jsx)(e.strong,{children:"\ucd08\uae30\ud654 \uc635\uc158 \uc124\uba85"})}),"\n",(0,c.jsxs)(e.table,{children:[(0,c.jsx)(e.thead,{children:(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.th,{children:"\uc635\uc158"}),(0,c.jsx)(e.th,{children:"\ud0c0\uc785"}),(0,c.jsx)(e.th,{children:"\uc124\uba85"})]})}),(0,c.jsxs)(e.tbody,{children:[(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:(0,c.jsx)(e.code,{children:"apiKey"})}),(0,c.jsx)(e.td,{children:(0,c.jsx)(e.code,{children:"string"})}),(0,c.jsxs)(e.td,{children:["nachocode SDK \uc11c\ube44\uc2a4 \uc811\uadfc\uc744 \uc704\ud55c API \ud0a4. ",(0,c.jsx)(e.a,{href:"https://nachocode.io",children:"nachocode \ub300\uc2dc\ubcf4\ub4dc"}),"\uc5d0\uc11c \ubc1c\uae09\ubc1b\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]})]}),(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:(0,c.jsx)(e.code,{children:"logger"})}),(0,c.jsx)(e.td,{children:(0,c.jsx)(e.code,{children:"boolean"})}),(0,c.jsxs)(e.td,{children:[(0,c.jsx)(e.code,{children:"true"}),"\ub85c \uc124\uc815\ud558\uba74 \uac1c\ubc1c \uc911 \ub514\ubc84\uae45\uc744 \uc704\ud55c ",(0,c.jsx)(e.strong,{children:"\ub85c\uadf8 \ucd9c\ub825"}),"\uc774 \ud65c\uc131\ud654\ub429\ub2c8\ub2e4."]})]})]})]}),"\n",(0,c.jsx)(e.h3,{id:"\uc608\uc81c",children:"\uc608\uc81c"}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsx)(e.li,{children:"\ub2e4\uc74c \uc608\uc81c \ucf54\ub4dc\ub294 SDK\ub97c \ucd08\uae30\ud654\ud558\ub294 \ubc29\ubc95\uc744 \ubcf4\uc5ec\uc90d\ub2c8\ub2e4."}),"\n",(0,c.jsxs)(e.li,{children:["\uc774 \ucf54\ub4dc\ub294 \ubcf4\ud1b5 ",(0,c.jsx)(e.code,{children:"<script>"})," \ud0dc\uadf8 \uc548\uc5d0 \ub123\uac70\ub098, \ubcc4\ub3c4\uc758 JavaScript \ud30c\uc77c\uc5d0 \uc791\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-html",children:"<script>\n  // SDK\uac00 \ub85c\ub4dc\ub418\uc5c8\ub294\uc9c0 \ud655\uc778\ud55c \ud6c4 \ucd08\uae30\ud654\ub97c \uc2dc\ub3c4\ud569\ub2c8\ub2e4.\n  if (window.Nachocode) {\n    // SDK \ucd08\uae30\ud654 \ud6c4 \ub3d9\uc791\ud560 \uc774\ubca4\ud2b8\ub97c \ub4f1\ub85d \ud569\ub2c8\ub2e4.\n    Nachocode.event.on('init', () => {\n      if (Nachocode.env.isApp()) {\n        // \uc571 \ud658\uacbd\uc5d0\uc11c\ub9cc \ub3d9\uc791 \ud560 \ub85c\uc9c1\uc744 \uc791\uc131\ud569\ub2c8\ub2e4.\n      }\n    });\n\n    // nachocode SDK\ub97c \ucd08\uae30\ud654 \ud569\ub2c8\ub2e4.\n    Nachocode.init('your_api_key_here', { logger: true });\n  } else {\n    console.error('nachocode SDK\uac00 \ub85c\ub4dc\ub418\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4.');\n  }\n<\/script>\n"})}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-html",children:"<script>\n  if (window.Nachocode) {\n    // InitializeOptions \uc5c6\uc774\ub3c4 \ucd08\uae30\ud654\ub97c \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n    // sandbox \uc640 logger\ub294 false \uac12\uc744 \uac00\uc9c0\uac8c \ub429\ub2c8\ub2e4.\n    Nachocode.init('your_api_key_here');\n  }\n<\/script>\n"})}),"\n",(0,c.jsx)(e.hr,{}),"\n",(0,c.jsx)(e.h2,{id:"3-\uc8fc\uc694-\uae30\ub2a5-\uc0ac\uc6a9",children:"3. \uc8fc\uc694 \uae30\ub2a5 \uc0ac\uc6a9"}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsxs)(e.p,{children:["nachocode SDK\uac00 \ucd08\uae30\ud654\uac00 \uc644\ub8cc\ub418\uba74, ",(0,c.jsx)(e.code,{children:"Nachocode"})," \ub124\uc784\uc2a4\ud398\uc774\uc2a4 \uc544\ub798\uc5d0 \uc815\uc758\ub41c \ub2e4\uc591\ud55c \ub124\uc774\ud2f0\ube0c \uae30\ub2a5\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n"]}),"\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsx)(e.p,{children:"\uc544\ub798 \uc608\uc2dc\ub294 SDK\uc758 \uc77c\ubd80 \uae30\ub2a5\uc744 \uc0ac\uc6a9\ud558\ub294 \ubc29\ubc95\uc744 \ubcf4\uc5ec\uc90d\ub2c8\ub2e4."}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsx)(e.li,{children:(0,c.jsx)(e.strong,{children:"\uc571 \uc815\ubcf4 \uac00\uc838\uc624\uae30"})}),"\n"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-javascript",children:'const appName = Nachocode.app.getAppName();\nconsole.log(`\uc571 \uc774\ub984: ${appName}`); // ex. "nachocode Developer"\n'})}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsx)(e.li,{children:(0,c.jsx)(e.strong,{children:"\ub514\ubc14\uc774\uc2a4 \uc815\ubcf4 \ud655\uc778"})}),"\n"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-javascript",children:"Nachocode.device.getDeviceModel(model => {\n  console.log(`\ub514\ubc14\uc774\uc2a4 \ubaa8\ub378: ${model}`);\n});\n"})}),"\n"]}),"\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsx)(e.p,{children:"\ub300\ubd80\ubd84\uc758 \uae30\ub2a5\uc740 \uc6f9 \uc2e4\ud589\ud658\uacbd\uc5d0\uc120 \ubb34\uc2dc\ub418\uace0, \uc571 \uc2e4\ud589\ud658\uacbd\uc5d0\uc11c \uc815\uc0c1 \uc791\ub3d9\ud569\ub2c8\ub2e4."}),"\n"]}),"\n"]})]})}function a(n={}){const{wrapper:e}={...(0,d.R)(),...n.components};return e?(0,c.jsx)(e,{...n,children:(0,c.jsx)(h,{...n})}):h(n)}},8453:(n,e,i)=>{i.d(e,{R:()=>l,x:()=>r});var s=i(6540);const c={},d=s.createContext(c);function l(n){const e=s.useContext(d);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(c):n.components||c:l(n.components),s.createElement(d.Provider,{value:e},n.children)}}}]);