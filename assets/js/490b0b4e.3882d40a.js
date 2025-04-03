"use strict";(self.webpackChunknachocode_developer_hub=self.webpackChunknachocode_developer_hub||[]).push([[3747],{8410:(e,n,d)=>{d.r(n),d.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>a,frontMatter:()=>o,metadata:()=>s,toc:()=>t});const s=JSON.parse('{"id":"sdk/namespaces/event","title":"\uc774\ubca4\ud2b8 (event)","description":"nachocode SDK\uc758 `event` \ub124\uc784\uc2a4\ud398\uc774\uc2a4\ub294 SDK \ucd08\uae30\ud654, \uc571 \ud65c\uc131\ud654 \uc0c1\ud0dc \ubcc0\uacbd, \ub124\ud2b8\uc6cc\ud06c \ubcc0\ud654 \ub4f1\uc758 \ub2e4\uc591\ud55c \uc774\ubca4\ud2b8\ub97c \ucc98\ub9ac\ud560 \uc218 \uc788\ub3c4\ub85d \uc9c0\uc6d0\ud569\ub2c8\ub2e4.","source":"@site/docs/sdk/namespaces/event.md","sourceDirName":"sdk/namespaces","slug":"/sdk/namespaces/event","permalink":"/docs/sdk/namespaces/event","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":9,"frontMatter":{"sidebar_position":9,"description":"nachocode SDK\uc758 `event` \ub124\uc784\uc2a4\ud398\uc774\uc2a4\ub294 SDK \ucd08\uae30\ud654, \uc571 \ud65c\uc131\ud654 \uc0c1\ud0dc \ubcc0\uacbd, \ub124\ud2b8\uc6cc\ud06c \ubcc0\ud654 \ub4f1\uc758 \ub2e4\uc591\ud55c \uc774\ubca4\ud2b8\ub97c \ucc98\ub9ac\ud560 \uc218 \uc788\ub3c4\ub85d \uc9c0\uc6d0\ud569\ub2c8\ub2e4."},"sidebar":"docs","previous":{"title":"\ud658\uacbd (env)","permalink":"/docs/sdk/namespaces/env"},"next":{"title":"\ud398\uc774\uc2a4\ubd81 (facebook)","permalink":"/docs/sdk/namespaces/facebook"}}');var c=d(4848),r=d(8453);const o={sidebar_position:9,description:"nachocode SDK\uc758 `event` \ub124\uc784\uc2a4\ud398\uc774\uc2a4\ub294 SDK \ucd08\uae30\ud654, \uc571 \ud65c\uc131\ud654 \uc0c1\ud0dc \ubcc0\uacbd, \ub124\ud2b8\uc6cc\ud06c \ubcc0\ud654 \ub4f1\uc758 \ub2e4\uc591\ud55c \uc774\ubca4\ud2b8\ub97c \ucc98\ub9ac\ud560 \uc218 \uc788\ub3c4\ub85d \uc9c0\uc6d0\ud569\ub2c8\ub2e4."},l="\uc774\ubca4\ud2b8 (event)",i={},t=[{value:"<strong>\uac1c\uc694</strong>",id:"\uac1c\uc694",level:2},{value:"<strong>\ud0c0\uc785 \uc815\uc758</strong>",id:"\ud0c0\uc785-\uc815\uc758",level:2},{value:"<strong><code>EventType</code></strong>",id:"eventtype",level:3},{value:"<strong>\uba54\uc11c\ub4dc \ubaa9\ub85d</strong>",id:"\uba54\uc11c\ub4dc-\ubaa9\ub85d",level:2},{value:"<strong>\uba54\uc11c\ub4dc \uc0c1\uc138</strong>",id:"\uba54\uc11c\ub4dc-\uc0c1\uc138",level:2},{value:"<strong><code>on(eventName: EventType, callback: (params?: any) =&gt; any): void</code></strong>",id:"oneventname-eventtype-callback-params-any--any-void",level:3},{value:"\uc124\uba85 (<code>on</code>)",id:"\uc124\uba85-on",level:4},{value:"\ub9e4\uac1c\ubcc0\uc218 (<code>on</code>)",id:"\ub9e4\uac1c\ubcc0\uc218-on",level:4},{value:"\ubc18\ud658 \uac12 (<code>on</code>)",id:"\ubc18\ud658-\uac12-on",level:4},{value:"\uc0ac\uc6a9 \uc608\uc81c (<code>on</code>)",id:"\uc0ac\uc6a9-\uc608\uc81c-on",level:4},{value:"<strong><code>off(eventName: EventType): void</code></strong>",id:"offeventname-eventtype-void",level:3},{value:"\uc124\uba85 (<code>off</code>)",id:"\uc124\uba85-off",level:4},{value:"\ub9e4\uac1c\ubcc0\uc218 (<code>off</code>)",id:"\ub9e4\uac1c\ubcc0\uc218-off",level:4},{value:"\ubc18\ud658 \uac12 (<code>off</code>)",id:"\ubc18\ud658-\uac12-off",level:4},{value:"\uc0ac\uc6a9 \uc608\uc81c (<code>off</code>)",id:"\uc0ac\uc6a9-\uc608\uc81c-off",level:4},{value:"<strong>\uc774\ubca4\ud2b8 \uc608\uc81c \ucf54\ub4dc</strong>",id:"\uc774\ubca4\ud2b8-\uc608\uc81c-\ucf54\ub4dc",level:2},{value:"<strong>\uc608\uc81c 1: SDK \ucd08\uae30\ud654 \uc774\ubca4\ud2b8 \uac10\uc9c0</strong>",id:"\uc608\uc81c-1-sdk-\ucd08\uae30\ud654-\uc774\ubca4\ud2b8-\uac10\uc9c0",level:3},{value:"<strong>\uc608\uc81c 2: \ub124\ud2b8\uc6cc\ud06c \uc0c1\ud0dc \ubcc0\uacbd \uc774\ubca4\ud2b8 \uac10\uc9c0</strong>",id:"\uc608\uc81c-2-\ub124\ud2b8\uc6cc\ud06c-\uc0c1\ud0dc-\ubcc0\uacbd-\uc774\ubca4\ud2b8-\uac10\uc9c0",level:3},{value:"<strong>\uc608\uc81c 3: \uc571 \ubc31\uadf8\ub77c\uc6b4\ub4dc \uc804\ud658 \uac10\uc9c0</strong>",id:"\uc608\uc81c-3-\uc571-\ubc31\uadf8\ub77c\uc6b4\ub4dc-\uc804\ud658-\uac10\uc9c0",level:3},{value:"<strong>\uc608\uc81c 4: \uc571 \ud3ec\uadf8\ub77c\uc6b4\ub4dc \ubcf5\uadc0 \uac10\uc9c0</strong>",id:"\uc608\uc81c-4-\uc571-\ud3ec\uadf8\ub77c\uc6b4\ub4dc-\ubcf5\uadc0-\uac10\uc9c0",level:3},{value:"<strong>\uc608\uc81c 5: \ub124\uc774\ud2f0\ube0c \ud0a4\ubcf4\ub4dc \uc0c1\ud0dc \uac10\uc9c0</strong>",id:"\uc608\uc81c-5-\ub124\uc774\ud2f0\ube0c-\ud0a4\ubcf4\ub4dc-\uc0c1\ud0dc-\uac10\uc9c0",level:3}];function h(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.header,{children:(0,c.jsxs)(n.h1,{id:"\uc774\ubca4\ud2b8-event",children:["\uc774\ubca4\ud2b8 (",(0,c.jsx)(n.code,{children:"event"}),")"]})}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsxs)(n.p,{children:["\ud83d\udd14 ",(0,c.jsx)(n.strong,{children:"\ucd5c\uc2e0\ud654 \uc77c\uc790:"})," 2025-02-21"]}),"\n"]}),"\n",(0,c.jsx)(n.h2,{id:"\uac1c\uc694",children:(0,c.jsx)(n.strong,{children:"\uac1c\uc694"})}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"event"})," \ub124\uc784\uc2a4\ud398\uc774\uc2a4\ub294 ",(0,c.jsx)(n.strong,{children:"nachocode SDK\uc758 \uc774\ubca4\ud2b8 \ud578\ub4e4\ub9c1 \uae30\ub2a5"}),"\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4.",(0,c.jsx)(n.br,{}),"\n",(0,c.jsx)(n.strong,{children:"SDK\uac00 \ucd08\uae30\ud654"}),"\ub420 \ub54c(",(0,c.jsx)(n.code,{children:"init"}),"), \uc571\uc774 ",(0,c.jsx)(n.strong,{children:"\ubc31\uadf8\ub77c\uc6b4\ub4dc\ub85c \uc804\ud658"}),"(",(0,c.jsx)(n.code,{children:"background"}),")\ub418\uac70\ub098 ",(0,c.jsx)(n.strong,{children:"\ub2e4\uc2dc \ud65c\uc131\ud654"}),"(",(0,c.jsx)(n.code,{children:"foreground"}),")\ub420 \ub54c, ",(0,c.jsx)(n.strong,{children:"\ub124\ud2b8\uc6cc\ud06c \uc0c1\ud0dc\uac00 \ubcc0\uacbd"}),"(",(0,c.jsx)(n.code,{children:"networkchanged"}),")\ub420 \ub54c, ",(0,c.jsx)(n.strong,{children:"\ud0a4\ubcf4\ub4dc\uac00 \uc5f4\ub9ac\uace0"}),"(",(0,c.jsx)(n.code,{children:"keyboardshown"}),") ",(0,c.jsx)(n.strong,{children:"\ub2eb\ud790 \ub54c"}),"(",(0,c.jsx)(n.code,{children:"keyboardhidden"}),") \ub4f1\uc758 \uc774\ubca4\ud2b8\ub97c \uac10\uc9c0\ud558\uace0 \uc774\ub97c \ucc98\ub9ac\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,c.jsx)(n.hr,{}),"\n",(0,c.jsx)(n.h2,{id:"\ud0c0\uc785-\uc815\uc758",children:(0,c.jsx)(n.strong,{children:"\ud0c0\uc785 \uc815\uc758"})}),"\n",(0,c.jsx)(n.h3,{id:"eventtype",children:(0,c.jsx)(n.strong,{children:(0,c.jsx)(n.code,{children:"EventType"})})}),"\n",(0,c.jsx)(n.p,{children:"nachocode SDK\uc5d0\uc11c \uae30\ubcf8\uc801\uc73c\ub85c \uc81c\uacf5\ud558\ub294 \uc608\uc57d\ub41c \uc774\ubca4\ud2b8 \ud0c0\uc785\uc785\ub2c8\ub2e4."}),"\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:"\uc774\ubca4\ud2b8 \ud0c0\uc785"}),(0,c.jsx)(n.th,{children:"\uc124\uba85"}),(0,c.jsx)(n.th,{children:"\ucd94\uac00\ub41c \ubc84\uc804"})]})}),(0,c.jsxs)(n.tbody,{children:[(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"init"})}),(0,c.jsx)(n.td,{children:"SDK\uac00 \ucd08\uae30\ud654\ub420 \ub54c \ud638\ucd9c\ub418\ub294 \uc774\ubca4\ud2b8"}),(0,c.jsx)(n.td,{children:"ver.1.0.2"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"background"})}),(0,c.jsx)(n.td,{children:"\uc571\uc774 \ubc31\uadf8\ub77c\uc6b4\ub4dc\ub85c \uc804\ud658\ub420 \ub54c \ud638\ucd9c\ub418\ub294 \uc774\ubca4\ud2b8"}),(0,c.jsx)(n.td,{children:"ver.1.2.0"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"foreground"})}),(0,c.jsx)(n.td,{children:"\uc571\uc774 \ub2e4\uc2dc \ud65c\uc131\ud654\ub420 \ub54c \ud638\ucd9c\ub418\ub294 \uc774\ubca4\ud2b8"}),(0,c.jsx)(n.td,{children:"ver.1.2.0"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"networkchanged"})}),(0,c.jsx)(n.td,{children:"\ub124\ud2b8\uc6cc\ud06c \uc0c1\ud0dc(\uc5f0\uacb0 \uc5ec\ubd80, \uc5f0\uacb0 \ubc29\uc2dd \ub4f1)\uac00 \ubcc0\uacbd\ub420 \ub54c \ud638\ucd9c\ub418\ub294 \uc774\ubca4\ud2b8"}),(0,c.jsx)(n.td,{children:"ver.1.4.0"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"keyboardshown"})}),(0,c.jsx)(n.td,{children:"\ub124\uc774\ud2f0\ube0c \ud0a4\ubcf4\ub4dc\uac00 \ud654\uba74\uc5d0 \ud45c\uc2dc\ub420 \ub54c \ud638\ucd9c\ub418\ub294 \uc774\ubca4\ud2b8"}),(0,c.jsx)(n.td,{children:"ver.1.4.2"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"keyboardhidden"})}),(0,c.jsx)(n.td,{children:"\ub124\uc774\ud2f0\ube0c \ud0a4\ubcf4\ub4dc\uac00 \ud654\uba74\uc5d0\uc11c \uc0ac\ub77c\uc9c8 \ub54c \ud638\ucd9c\ub418\ub294 \uc774\ubca4\ud2b8"}),(0,c.jsx)(n.td,{children:"ver.1.4.2"})]})]})]}),"\n",(0,c.jsx)(n.hr,{}),"\n",(0,c.jsx)(n.h2,{id:"\uba54\uc11c\ub4dc-\ubaa9\ub85d",children:(0,c.jsx)(n.strong,{children:"\uba54\uc11c\ub4dc \ubaa9\ub85d"})}),"\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:"\uba54\uc11c\ub4dc"}),(0,c.jsx)(n.th,{children:"\uc124\uba85"}),(0,c.jsx)(n.th,{children:"\ucd94\uac00\ub41c \ubc84\uc804"})]})}),(0,c.jsxs)(n.tbody,{children:[(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"#oneventname-eventtype-callback-params-any--any-void",children:(0,c.jsx)(n.code,{children:"on(eventName, callback)"})})}),(0,c.jsx)(n.td,{children:"\ud2b9\uc815 \uc774\ubca4\ud2b8\ub97c \uac10\uc9c0\ud558\uace0 \uc2e4\ud589\ud560 \ud568\uc218\ub97c \ub4f1\ub85d\ud569\ub2c8\ub2e4."}),(0,c.jsx)(n.td,{children:"ver.1.0.2"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"#offeventname-eventtype-void",children:(0,c.jsx)(n.code,{children:"off(eventName)"})})}),(0,c.jsx)(n.td,{children:"\ud2b9\uc815 \uc774\ubca4\ud2b8 \ub9ac\uc2a4\ub108\ub97c \ud574\uc81c\ud569\ub2c8\ub2e4."}),(0,c.jsx)(n.td,{children:"ver.1.0.3"})]})]})]}),"\n",(0,c.jsx)(n.hr,{}),"\n",(0,c.jsx)(n.h2,{id:"\uba54\uc11c\ub4dc-\uc0c1\uc138",children:(0,c.jsx)(n.strong,{children:"\uba54\uc11c\ub4dc \uc0c1\uc138"})}),"\n",(0,c.jsx)(n.h3,{id:"oneventname-eventtype-callback-params-any--any-void",children:(0,c.jsx)(n.strong,{children:(0,c.jsx)(n.code,{children:"on(eventName: EventType, callback: (params?: any) => any): void"})})}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.em,{children:"since ver.1.0.2"})}),"\n"]}),"\n",(0,c.jsxs)(n.h4,{id:"\uc124\uba85-on",children:["\uc124\uba85 (",(0,c.jsx)(n.code,{children:"on"}),")"]}),"\n",(0,c.jsxs)(n.p,{children:["\uc9c0\uc815\ub41c ",(0,c.jsx)(n.code,{children:"eventName"})," \uc774\ubca4\ud2b8\uac00 \ubc1c\uc0dd\ud588\uc744 \ub54c \uc2e4\ud589\ud560 ",(0,c.jsx)(n.strong,{children:"\ucf5c\ubc31 \ud568\uc218"}),"\ub97c \ub4f1\ub85d\ud569\ub2c8\ub2e4."]}),"\n",(0,c.jsxs)(n.h4,{id:"\ub9e4\uac1c\ubcc0\uc218-on",children:["\ub9e4\uac1c\ubcc0\uc218 (",(0,c.jsx)(n.code,{children:"on"}),")"]}),"\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:"\uc774\ub984"}),(0,c.jsx)(n.th,{children:"\ud0c0\uc785"}),(0,c.jsx)(n.th,{children:"\ud544\uc218 \uc5ec\ubd80"}),(0,c.jsx)(n.th,{children:"\uc124\uba85"})]})}),(0,c.jsxs)(n.tbody,{children:[(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"eventName"})}),(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"EventType"})}),(0,c.jsx)(n.td,{children:"\u2705"}),(0,c.jsx)(n.td,{children:"\ub4f1\ub85d\ud560 \uc774\ubca4\ud2b8 \uc720\ud615"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"callback"})}),(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"(params?: any) => any"})}),(0,c.jsx)(n.td,{children:"\u2705"}),(0,c.jsx)(n.td,{children:"\uc774\ubca4\ud2b8 \ubc1c\uc0dd \uc2dc \uc2e4\ud589\ub420 \ud568\uc218"})]})]})]}),"\n",(0,c.jsxs)(n.h4,{id:"\ubc18\ud658-\uac12-on",children:["\ubc18\ud658 \uac12 (",(0,c.jsx)(n.code,{children:"on"}),")"]}),"\n",(0,c.jsxs)(n.p,{children:["\ud574\ub2f9 \uba54\uc11c\ub4dc\ub294 \ubc18\ud658 \uac12\uc744 \uac00\uc9c0\uc9c0 \uc54a\uc73c\uba70, \uc774\ubca4\ud2b8\uac00 \ubc1c\uc0dd\ud560 \ub54c\ub9c8\ub2e4 \ub4f1\ub85d\ub41c ",(0,c.jsx)(n.code,{children:"callback"}),"\uc774 \uc2e4\ud589\ub429\ub2c8\ub2e4."]}),"\n",(0,c.jsxs)(n.h4,{id:"\uc0ac\uc6a9-\uc608\uc81c-on",children:["\uc0ac\uc6a9 \uc608\uc81c (",(0,c.jsx)(n.code,{children:"on"}),")"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-javascript",children:"// SDK \ucd08\uae30\ud654 \uc644\ub8cc \uc774\ubca4\ud2b8 \ub9ac\uc2a4\ub108\ub97c \ub4f1\ub85d \ud569\ub2c8\ub2e4.\nNachocode.event.on('init', () => {\n  if (Nachocode.env.isApp() && Nachocode.device.isIOS()) {\n    // iOS \ub514\ubc14\uc774\uc2a4\uc5d0\uc11c\ub9cc \ub3d9\uc791\ud560 \ub85c\uc9c1\uc744 \uc791\uc131\ud569\ub2c8\ub2e4.\n  }\n});\n\n// nachocode SDK\ub97c \ucd08\uae30\ud654 \ud569\ub2c8\ub2e4.\nNachocode.init('your_api_key_here');\n"})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-javascript",children:"// \uc571\uc774 \ubc31\uadf8\ub77c\uc6b4\ub4dc\ub85c \uc804\ud658\ub420 \ub54c \ub3d9\uc791\ud560 \uc774\ubca4\ud2b8\ub97c \ub4f1\ub85d\ud569\ub2c8\ub2e4.\nNachocode.event.on('background', () => {\n  // \uc571\uc774 \ubc31\uadf8\ub77c\uc6b4\ub4dc\ub85c \uc804\ud658\ub420 \ub54c \ub3d9\uc791\ud560 \ub85c\uc9c1\uc744 \uc791\uc131\ud569\ub2c8\ub2e4.\n});\n"})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-javascript",children:"// \uc571\uc774 \ubc31\uadf8\ub77c\uc6b4\ub4dc\uc5d0\uc11c \ub2e4\uc2dc \ud3ec\uadf8\ub77c\uc6b4\ub4dc\ub85c \uc804\ud658\ub420 \ub54c \ub3d9\uc791\ud560 \uc774\ubca4\ud2b8\ub97c \ub4f1\ub85d\ud569\ub2c8\ub2e4.\nNachocode.event.on('foreground', () => {\n  // \uc571\uc774 \ud3ec\uadf8\ub77c\uc6b4\ub4dc\ub85c \uc804\ud658\ub420 \ub54c \ub3d9\uc791\ud560 \ub85c\uc9c1\uc744 \uc791\uc131\ud569\ub2c8\ub2e4.\n  // ex. \ud398\uc774\uc9c0 \uc0c8\ub85c\uace0\uce68, \ub370\uc774\ud130 \ubd88\ub7ec\uc624\uae30 \ub4f1\n});\n"})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-javascript",children:"// \ub124\ud2b8\uc6cc\ud06c \ubcc0\uacbd \uac10\uc9c0 \uc774\ubca4\ud2b8 \ub9ac\uc2a4\ub108 \ub4f1\ub85d\nNachocode.event.on('networkchanged', status => {\n  console.log(\n    `\ub124\ud2b8\uc6cc\ud06c \uc0c1\ud0dc \ubcc0\uacbd: ${status.isConnected ? '\uc5f0\uacb0\ub428' : '\uc5f0\uacb0 \ub04a\uae40'}`\n  );\n  console.log(`\uc5f0\uacb0 \uc720\ud615: ${status.connectionType}`);\n});\n"})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-javascript",children:"// \ub124\uc774\ud2f0\ube0c \ud0a4\ubcf4\ub4dc\uac00 \ud654\uba74\uc5d0 \ub098\ud0c0\ub0a0 \ub54c \uc2e4\ud589\ub418\ub294 \uc774\ubca4\ud2b8\nNachocode.event.on('keyboardshown', () => {\n  console.log('\ub124\uc774\ud2f0\ube0c \ud0a4\ubcf4\ub4dc\uac00 \ud45c\uc2dc\ub418\uc5c8\uc2b5\ub2c8\ub2e4.');\n});\n"})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-javascript",children:"// \ub124\uc774\ud2f0\ube0c \ud0a4\ubcf4\ub4dc\uac00 \ud654\uba74\uc5d0\uc11c \uc0ac\ub77c\uc9c8 \ub54c \uc2e4\ud589\ub418\ub294 \uc774\ubca4\ud2b8\nNachocode.event.on('keyboardhidden', () => {\n  console.log('\ub124\uc774\ud2f0\ube0c \ud0a4\ubcf4\ub4dc\uac00 \uc0ac\ub77c\uc84c\uc2b5\ub2c8\ub2e4.');\n});\n"})}),"\n",(0,c.jsx)(n.hr,{}),"\n",(0,c.jsx)(n.h3,{id:"offeventname-eventtype-void",children:(0,c.jsx)(n.strong,{children:(0,c.jsx)(n.code,{children:"off(eventName: EventType): void"})})}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.em,{children:"since ver.1.0.3"})}),"\n"]}),"\n",(0,c.jsxs)(n.h4,{id:"\uc124\uba85-off",children:["\uc124\uba85 (",(0,c.jsx)(n.code,{children:"off"}),")"]}),"\n",(0,c.jsxs)(n.p,{children:["\uc9c0\uc815\ub41c ",(0,c.jsx)(n.code,{children:"eventName"}),"\uc5d0 \ub4f1\ub85d\ub41c ",(0,c.jsx)(n.strong,{children:"\uc774\ubca4\ud2b8 \ub9ac\uc2a4\ub108\ub97c \uc81c\uac70"}),"\ud569\ub2c8\ub2e4.",(0,c.jsx)(n.br,{}),"\n","\uc774 \uba54\uc11c\ub4dc\ub97c \uc0ac\uc6a9\ud558\uba74 \ud2b9\uc815 \uc774\ubca4\ud2b8\uac00 \ub354 \uc774\uc0c1 \uac10\uc9c0\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."]}),"\n",(0,c.jsxs)(n.h4,{id:"\ub9e4\uac1c\ubcc0\uc218-off",children:["\ub9e4\uac1c\ubcc0\uc218 (",(0,c.jsx)(n.code,{children:"off"}),")"]}),"\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:"\uc774\ub984"}),(0,c.jsx)(n.th,{children:"\ud0c0\uc785"}),(0,c.jsx)(n.th,{children:"\ud544\uc218 \uc5ec\ubd80"}),(0,c.jsx)(n.th,{children:"\uc124\uba85"})]})}),(0,c.jsx)(n.tbody,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"eventName"})}),(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"EventType"})}),(0,c.jsx)(n.td,{children:"\u2705"}),(0,c.jsx)(n.td,{children:"\uc81c\uac70\ud560 \uc774\ubca4\ud2b8 \uc720\ud615"})]})})]}),"\n",(0,c.jsxs)(n.h4,{id:"\ubc18\ud658-\uac12-off",children:["\ubc18\ud658 \uac12 (",(0,c.jsx)(n.code,{children:"off"}),")"]}),"\n",(0,c.jsx)(n.p,{children:"\ud574\ub2f9 \uba54\uc11c\ub4dc\ub294 \ubc18\ud658 \uac12\uc744 \uac00\uc9c0\uc9c0 \uc54a\uc73c\uba70, \ud574\ub2f9 \uc774\ubca4\ud2b8\uc758 \ubaa8\ub4e0 \ub9ac\uc2a4\ub108\ub97c \uc81c\uac70\ud569\ub2c8\ub2e4."}),"\n",(0,c.jsxs)(n.h4,{id:"\uc0ac\uc6a9-\uc608\uc81c-off",children:["\uc0ac\uc6a9 \uc608\uc81c (",(0,c.jsx)(n.code,{children:"off"}),")"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-javascript",children:"// 'init' \uc774\ubca4\ud2b8\uba85\uc73c\ub85c \ubc14\uc778\ub4dc \ub41c event\ub97c \uc81c\uac70\ud569\ub2c8\ub2e4.\nNachocode.event.off('init');\n"})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-javascript",children:"// \ub124\ud2b8\uc6cc\ud06c \ubcc0\uacbd \uac10\uc9c0 \uc774\ubca4\ud2b8 \ub9ac\uc2a4\ub108 \uc81c\uac70\nNachocode.event.off('networkchanged');\n"})}),"\n",(0,c.jsx)(n.hr,{}),"\n",(0,c.jsx)(n.h2,{id:"\uc774\ubca4\ud2b8-\uc608\uc81c-\ucf54\ub4dc",children:(0,c.jsx)(n.strong,{children:"\uc774\ubca4\ud2b8 \uc608\uc81c \ucf54\ub4dc"})}),"\n",(0,c.jsxs)(n.p,{children:["\uc544\ub798\ub294 ",(0,c.jsx)(n.code,{children:"event"})," \ub124\uc784\uc2a4\ud398\uc774\uc2a4\ub97c \ud65c\uc6a9\ud55c ",(0,c.jsx)(n.strong,{children:"\uc608\uc2dc"}),"\uc785\ub2c8\ub2e4."]}),"\n",(0,c.jsx)(n.h3,{id:"\uc608\uc81c-1-sdk-\ucd08\uae30\ud654-\uc774\ubca4\ud2b8-\uac10\uc9c0",children:(0,c.jsx)(n.strong,{children:"\uc608\uc81c 1: SDK \ucd08\uae30\ud654 \uc774\ubca4\ud2b8 \uac10\uc9c0"})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-javascript",children:"Nachocode.event.on('init', () => {\n  console.log('nachocode SDK\uac00 \uc815\uc0c1\uc801\uc73c\ub85c \ucd08\uae30\ud654\ub418\uc5c8\uc2b5\ub2c8\ub2e4.');\n});\n"})}),"\n",(0,c.jsx)(n.hr,{}),"\n",(0,c.jsx)(n.h3,{id:"\uc608\uc81c-2-\ub124\ud2b8\uc6cc\ud06c-\uc0c1\ud0dc-\ubcc0\uacbd-\uc774\ubca4\ud2b8-\uac10\uc9c0",children:(0,c.jsx)(n.strong,{children:"\uc608\uc81c 2: \ub124\ud2b8\uc6cc\ud06c \uc0c1\ud0dc \ubcc0\uacbd \uc774\ubca4\ud2b8 \uac10\uc9c0"})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-javascript",children:"Nachocode.event.on('networkchanged', status => {\n  if (status.isConnected) {\n    console.log('\uc778\ud130\ub137 \uc5f0\uacb0\uc774 \ubcf5\uad6c\ub418\uc5c8\uc2b5\ub2c8\ub2e4.');\n  } else {\n    console.log('\uc778\ud130\ub137 \uc5f0\uacb0\uc774 \ub04a\uc5b4\uc84c\uc2b5\ub2c8\ub2e4.');\n  }\n});\n"})}),"\n",(0,c.jsx)(n.hr,{}),"\n",(0,c.jsx)(n.h3,{id:"\uc608\uc81c-3-\uc571-\ubc31\uadf8\ub77c\uc6b4\ub4dc-\uc804\ud658-\uac10\uc9c0",children:(0,c.jsx)(n.strong,{children:"\uc608\uc81c 3: \uc571 \ubc31\uadf8\ub77c\uc6b4\ub4dc \uc804\ud658 \uac10\uc9c0"})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-javascript",children:"Nachocode.event.on('background', () => {\n  console.log('\uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc774 \ubc31\uadf8\ub77c\uc6b4\ub4dc\ub85c \uc774\ub3d9\ud588\uc2b5\ub2c8\ub2e4.');\n});\n"})}),"\n",(0,c.jsx)(n.hr,{}),"\n",(0,c.jsx)(n.h3,{id:"\uc608\uc81c-4-\uc571-\ud3ec\uadf8\ub77c\uc6b4\ub4dc-\ubcf5\uadc0-\uac10\uc9c0",children:(0,c.jsx)(n.strong,{children:"\uc608\uc81c 4: \uc571 \ud3ec\uadf8\ub77c\uc6b4\ub4dc \ubcf5\uadc0 \uac10\uc9c0"})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-javascript",children:"Nachocode.event.on('foreground', () => {\n  console.log('\uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc774 \ud65c\uc131\ud654\ub418\uc5c8\uc2b5\ub2c8\ub2e4.');\n});\n"})}),"\n",(0,c.jsx)(n.hr,{}),"\n",(0,c.jsx)(n.h3,{id:"\uc608\uc81c-5-\ub124\uc774\ud2f0\ube0c-\ud0a4\ubcf4\ub4dc-\uc0c1\ud0dc-\uac10\uc9c0",children:(0,c.jsx)(n.strong,{children:"\uc608\uc81c 5: \ub124\uc774\ud2f0\ube0c \ud0a4\ubcf4\ub4dc \uc0c1\ud0dc \uac10\uc9c0"})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-javascript",children:"// \ud0a4\ubcf4\ub4dc\uac00 \ub098\ud0c0\ub0a0 \ub54c\nNachocode.event.on('keyboardshown', () => {\n  console.log('\ub124\uc774\ud2f0\ube0c \ud0a4\ubcf4\ub4dc\uac00 \ud45c\uc2dc\ub418\uc5c8\uc2b5\ub2c8\ub2e4.');\n});\n\n// \ud0a4\ubcf4\ub4dc\uac00 \uc0ac\ub77c\uc9c8 \ub54c\nNachocode.event.on('keyboardhidden', () => {\n  console.log('\ub124\uc774\ud2f0\ube0c \ud0a4\ubcf4\ub4dc\uac00 \uc0ac\ub77c\uc84c\uc2b5\ub2c8\ub2e4.');\n});\n"})}),"\n",(0,c.jsx)(n.hr,{})]})}function a(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(h,{...e})}):h(e)}},8453:(e,n,d)=>{d.d(n,{R:()=>o,x:()=>l});var s=d(6540);const c={},r=s.createContext(c);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);