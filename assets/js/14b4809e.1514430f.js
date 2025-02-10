"use strict";(self.webpackChunknachocode_developer_hub=self.webpackChunknachocode_developer_hub||[]).push([[448],{5593:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>t,contentTitle:()=>i,default:()=>a,frontMatter:()=>l,metadata:()=>c,toc:()=>o});const c=JSON.parse('{"id":"sdk/getting-started","title":"\uc2dc\uc791\ud558\uae30","description":"\ud83d\udd14 \ucd5c\uc2e0\ud654 \uc77c\uc790: 2025-02-10","source":"@site/docs/sdk/getting-started.md","sourceDirName":"sdk","slug":"/sdk/getting-started","permalink":"/docs/sdk/getting-started","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"docs","previous":{"title":"\uac1c\uc694","permalink":"/docs/sdk/intro"},"next":{"title":"\uc560\ud50c\ub9ac\ucf00\uc774\uc158 (app)","permalink":"/docs/sdk/namespaces/app"}}');var d=s(4848),r=s(8453);const l={sidebar_position:2},i="\uc2dc\uc791\ud558\uae30",t={},o=[{value:"1. SDK \uc124\uce58",id:"1-sdk-\uc124\uce58",level:2},{value:"\ucd5c\uc2e0 \ubc84\uc804 \ubd88\ub7ec\uc624\uae30",id:"\ucd5c\uc2e0-\ubc84\uc804-\ubd88\ub7ec\uc624\uae30",level:3},{value:"\ud2b9\uc815 \ubc84\uc804 \uc0ac\uc6a9",id:"\ud2b9\uc815-\ubc84\uc804-\uc0ac\uc6a9",level:3},{value:"2. SDK \ucd08\uae30\ud654",id:"2-sdk-\ucd08\uae30\ud654",level:2},{value:"<strong>\ucd08\uae30\ud654 \uc635\uc158 \uc124\uba85</strong>",id:"\ucd08\uae30\ud654-\uc635\uc158-\uc124\uba85",level:3},{value:"3. \uc8fc\uc694 \uae30\ub2a5 \uc0ac\uc6a9",id:"3-\uc8fc\uc694-\uae30\ub2a5-\uc0ac\uc6a9",level:2}];function h(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.header,{children:(0,d.jsx)(n.h1,{id:"\uc2dc\uc791\ud558\uae30",children:"\uc2dc\uc791\ud558\uae30"})}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsxs)(n.p,{children:["\ud83d\udd14 ",(0,d.jsx)(n.strong,{children:"\ucd5c\uc2e0\ud654 \uc77c\uc790:"})," 2025-02-10"]}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"Nachocode JavaScript Client SDK\ub97c \ud504\ub85c\uc81d\ud2b8\uc5d0 \ud1b5\ud569\ud558\uace0 \uae30\ubcf8\uc801\uc73c\ub85c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub3c4\ub85d \uc124\uc815\ud558\ub294 \ubc29\ubc95\uc744 \uc548\ub0b4\ud569\ub2c8\ub2e4."}),"\n",(0,d.jsxs)(n.p,{children:["Nachocode SDK\ub294 \uc6f9 \ud074\ub77c\uc774\uc5b8\ud2b8\uc5d0\uc11c ",(0,d.jsx)(n.strong,{children:"\ub124\uc774\ud2f0\ube0c \uc571\uc758 \uae30\ub2a5"}),"\uc744 \uc190\uc27d\uac8c \ud65c\uc6a9\ud560 \uc218 \uc788\ub3c4\ub85d \uc9c0\uc6d0\ud569\ub2c8\ub2e4.",(0,d.jsx)(n.br,{}),"\n","\uc774 \uac00\uc774\ub4dc\ub294 SDK \uc124\uce58\ubd80\ud130 \ucd08\uae30\ud654, \uc8fc\uc694 \uae30\ub2a5 \uc0ac\uc6a9\uae4c\uc9c0 \ub2e8\uacc4\ubcc4\ub85c \uc124\uba85\ud569\ub2c8\ub2e4."]}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h2,{id:"1-sdk-\uc124\uce58",children:"1. SDK \uc124\uce58"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:["Nachocode SDK\ub294 ",(0,d.jsx)(n.strong,{children:"CDN\uc744 \ud1b5\ud574 \uac04\ud3b8\ud558\uac8c \uc124\uce58"}),"\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:["\uc6f9 \ud398\uc774\uc9c0\uc758 ",(0,d.jsx)(n.code,{children:"<body>"})," \ud0dc\uadf8 \uc548\uc5d0 \ub2e4\uc74c\uacfc \uac19\uc740 \uc2a4\ud06c\ub9bd\ud2b8 \ud0dc\uadf8\ub97c \ucd94\uac00\ud569\ub2c8\ub2e4. \uc774 \uc2a4\ud06c\ub9bd\ud2b8\ub294 ",(0,d.jsx)(n.strong,{children:"Nachocode SDK"}),"\ub97c \uc6f9 \ud398\uc774\uc9c0\uc5d0 \ub85c\ub4dc\ud569\ub2c8\ub2e4."]}),"\n",(0,d.jsx)(n.h3,{id:"\ucd5c\uc2e0-\ubc84\uc804-\ubd88\ub7ec\uc624\uae30",children:"\ucd5c\uc2e0 \ubc84\uc804 \ubd88\ub7ec\uc624\uae30"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"\ud604\uc7ac \ucd5c\uc2e0 \ubc84\uc804 v1.4.0"}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"\ucd5c\uc2e0 \ubc84\uc804\uc758 SDK\ub97c \ud56d\uc0c1 \uc720\uc9c0\ud558\ub824\uba74 \uc544\ub798 \ucf54\ub4dc\ub97c \uc0ac\uc6a9\ud558\uc138\uc694"}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-html",children:'<script src="https://cdn.nachocode.io/nachocode/client-sdk/@latest/client-sdk.min.js"><\/script>\n'})}),"\n",(0,d.jsx)(n.h3,{id:"\ud2b9\uc815-\ubc84\uc804-\uc0ac\uc6a9",children:"\ud2b9\uc815 \ubc84\uc804 \uc0ac\uc6a9"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"\ud2b9\uc815 \ubc84\uc804\uc73c\ub85c \uace0\uc815\ud558\ub824\uba74 \ub2e4\uc74c\uacfc \uac19\uc774 \uc0ac\uc6a9\ud569\ub2c8\ub2e4"}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-html",children:'<script src="https://cdn.nachocode.io/nachocode/client-sdk/@1.4.0/client-sdk.min.js"><\/script>\n'})}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsxs)(n.p,{children:["\ud83d\udce2 ",(0,d.jsx)(n.strong,{children:"\ucd5c\uc2e0 \ubc84\uc804\uc744 \uc0ac\uc6a9\ud558\ub294 \uac83\uc774 \uad8c\uc7a5\ub418\uba70, \ud2b9\uc815 \ubc84\uc804 \uace0\uc815\uc740 \ud638\ud658\uc131 \uc720\uc9c0\uac00 \ud544\uc694\ud55c \uacbd\uc6b0\uc5d0 \uc0ac\uc6a9\ud558\uc138\uc694."})]}),"\n"]}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h2,{id:"2-sdk-\ucd08\uae30\ud654",children:"2. SDK \ucd08\uae30\ud654"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\uc6f9 \ud398\uc774\uc9c0 \ub85c\ub529\uc774 \uc644\ub8cc\ub418\uba74, ",(0,d.jsx)(n.strong,{children:"Nachocode SDK\ub97c \ubc18\ub4dc\uc2dc \ucd08\uae30\ud654"}),"\ud574\uc57c \ud569\ub2c8\ub2e4."]}),"\n",(0,d.jsxs)(n.li,{children:["\ucd08\uae30\ud654\ub294 ",(0,d.jsx)(n.strong,{children:"API \ud0a4"}),"\ub97c \uc0ac\uc6a9\ud558\uba70, \ud544\uc694\uc5d0 \ub530\ub77c \ub514\ubc84\uae45 \ub85c\uae45 \uae30\ub2a5\uc744 \ud65c\uc131\ud654\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,d.jsx)(n.li,{children:"\ub2e4\uc74c \uc608\uc81c \ucf54\ub4dc\ub294 SDK\ub97c \ucd08\uae30\ud654\ud558\ub294 \ubc29\ubc95\uc744 \ubcf4\uc5ec\uc90d\ub2c8\ub2e4."}),"\n",(0,d.jsxs)(n.li,{children:["\uc774 \ucf54\ub4dc\ub294 \ubcf4\ud1b5 ",(0,d.jsx)(n.code,{children:"<script>"})," \ud0dc\uadf8 \uc548\uc5d0 \ub123\uac70\ub098, \ubcc4\ub3c4\uc758 JavaScript \ud30c\uc77c\uc5d0 \uc791\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-html",children:"<script>\n  document.addEventListener('DOMContentLoaded', () => {\n    // SDK\uac00 \ub85c\ub4dc\ub418\uc5c8\ub294\uc9c0 \ud655\uc778\ud55c \ud6c4 \ucd08\uae30\ud654\ub97c \uc2dc\ub3c4\ud569\ub2c8\ub2e4.\n    if (window.Nachocode) {\n      // Nachocode SDK \ucd08\uae30\ud654\n      Nachocode.init('your_api_key_here', { logger: true });\n    } else {\n      console.error('Nachocode SDK\uac00 \ub85c\ub4dc\ub418\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4.');\n    }\n  });\n<\/script>\n"})}),"\n",(0,d.jsx)(n.h3,{id:"\ucd08\uae30\ud654-\uc635\uc158-\uc124\uba85",children:(0,d.jsx)(n.strong,{children:"\ucd08\uae30\ud654 \uc635\uc158 \uc124\uba85"})}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"\uc635\uc158"}),(0,d.jsx)(n.th,{children:"\ud0c0\uc785"}),(0,d.jsx)(n.th,{children:"\uc124\uba85"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"your_api_key_here"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"string"})}),(0,d.jsxs)(n.td,{children:["Nachocode SDK \uc11c\ube44\uc2a4 \uc811\uadfc\uc744 \uc704\ud55c API \ud0a4. ",(0,d.jsx)(n.a,{href:"https://nachocode.io",children:"Nachocode \ub300\uc2dc\ubcf4\ub4dc"}),"\uc5d0\uc11c \ubc1c\uae09\ubc1b\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"logger"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"boolean"})}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.code,{children:"true"}),"\ub85c \uc124\uc815\ud558\uba74 \uac1c\ubc1c \uc911 \ub514\ubc84\uae45\uc744 \uc704\ud55c ",(0,d.jsx)(n.strong,{children:"\ub85c\uadf8 \ucd9c\ub825"}),"\uc774 \ud65c\uc131\ud654\ub429\ub2c8\ub2e4."]})]})]})]}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h2,{id:"3-\uc8fc\uc694-\uae30\ub2a5-\uc0ac\uc6a9",children:"3. \uc8fc\uc694 \uae30\ub2a5 \uc0ac\uc6a9"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:["Nachocode SDK\uac00 \ucd08\uae30\ud654\uac00 \uc644\ub8cc\ub418\uba74, ",(0,d.jsx)(n.code,{children:"Nachocode"})," \ub124\uc784\uc2a4\ud398\uc774\uc2a4 \uc544\ub798\uc5d0 \uc815\uc758\ub41c \ub2e4\uc591\ud55c \ub124\uc774\ud2f0\ube0c \uae30\ub2a5\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"\uc544\ub798 \uc608\uc2dc\ub294 SDK\uc758 \uc77c\ubd80 \uae30\ub2a5\uc744 \uc0ac\uc6a9\ud558\ub294 \ubc29\ubc95\uc744 \ubcf4\uc5ec\uc90d\ub2c8\ub2e4."}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.strong,{children:"\uc571 \uc815\ubcf4 \uac00\uc838\uc624\uae30"})}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-javascript",children:'const appName = Nachocode.app.getAppName();\nconsole.log(`\uc571 \uc774\ub984: ${appName}`); // ex. "Nachocode Developer"\n'})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.strong,{children:"\ub514\ubc14\uc774\uc2a4 \uc815\ubcf4 \ud655\uc778"})}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-javascript",children:"Nachocode.device.getDeviceModel(model => {\n  console.log(`\ub514\ubc14\uc774\uc2a4 \ubaa8\ub378: ${model}`);\n});\n"})}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"\ub300\ubd80\ubd84\uc758 \uae30\ub2a5\uc740 \uc6f9 \uc2e4\ud589\ud658\uacbd\uc5d0\uc120 \ubb34\uc2dc\ub418\uace0, \uc571 \uc2e4\ud589\ud658\uacbd\uc5d0\uc11c \uc815\uc0c1 \uc791\ub3d9\ud569\ub2c8\ub2e4."}),"\n"]}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(h,{...e})}):h(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>i});var c=s(6540);const d={},r=c.createContext(d);function l(e){const n=c.useContext(r);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:l(e.components),c.createElement(r.Provider,{value:n},e.children)}}}]);