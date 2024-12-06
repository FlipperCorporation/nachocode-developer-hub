"use strict";(self.webpackChunknachocode_developer_hub=self.webpackChunknachocode_developer_hub||[]).push([[193],{6412:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>v,frontMatter:()=>r,metadata:()=>d,toc:()=>i});const d=JSON.parse('{"id":"sdk/namespaces/backkey","title":"\ubc31 \ud0a4 (backkey)","description":"\ud83d\udd14 \ucd5c\uc2e0\ud654 \uc77c\uc790: 2024-11-27","source":"@site/docs/sdk/namespaces/backkey.md","sourceDirName":"sdk/namespaces","slug":"/sdk/namespaces/backkey","permalink":"/docs/sdk/namespaces/backkey","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"docs","previous":{"title":"\uc778\uc99d (authentication)","permalink":"/docs/sdk/namespaces/authentication"},"next":{"title":"\ube0c\ub77c\uc6b0\uc800 (browser)","permalink":"/docs/sdk/namespaces/browser"}}');var t=s(123),c=s(127);const r={sidebar_position:3},o="\ubc31 \ud0a4 (backkey)",a={},i=[{value:"\uc8fc\uc694 \uba54\uc11c\ub4dc",id:"\uc8fc\uc694-\uba54\uc11c\ub4dc",level:2},{value:"<code>addEvent(event: (eventId: string) =&gt; void, eventId?: string): string</code>",id:"addeventevent-eventid-string--void-eventid-string-string",level:3},{value:"<code>clearEvent(): void</code>",id:"clearevent-void",level:3},{value:"<code>getLastEvent(): string</code>",id:"getlastevent-string",level:3},{value:"<code>removeEvent(eventId?: string): string</code>",id:"removeeventeventid-string-string",level:3}];function l(e){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,c.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsxs)(n.h1,{id:"\ubc31-\ud0a4-backkey",children:["\ubc31 \ud0a4 (",(0,t.jsx)(n.code,{children:"backkey"}),")"]})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["\ud83d\udd14 ",(0,t.jsx)(n.strong,{children:"\ucd5c\uc2e0\ud654 \uc77c\uc790:"})," 2024-11-27"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://img.shields.io/badge/Android-Only?logo=android",alt:"Android-Only"})}),"\n",(0,t.jsx)(n.p,{children:"Android \ub124\uc774\ud2f0\ube0c \ubc31 \ud0a4\ub97c \uc81c\uc5b4\ud558\ub294 \ub124\uc784\uc2a4\ud398\uc774\uc2a4\uc785\ub2c8\ub2e4.\n\uae30\ubcf8 \ubc31 \ud0a4 \ub3d9\uc791\uc744 \uc624\ubc84\ub77c\uc774\ub4dc\ud558\uace0 \uc0ac\uc6a9\uc790 \uc9c0\uc815 \uc774\ubca4\ud2b8\ub97c \ub4f1\ub85d\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"\uc8fc\uc694-\uba54\uc11c\ub4dc",children:"\uc8fc\uc694 \uba54\uc11c\ub4dc"}),"\n",(0,t.jsx)(n.h3,{id:"addeventevent-eventid-string--void-eventid-string-string",children:(0,t.jsx)(n.code,{children:"addEvent(event: (eventId: string) => void, eventId?: string): string"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Android OS\uc758 \ub124\uc774\ud2f0\ube0c \ubc31 \ud0a4\uac00 \ub20c\ub838\uc744 \ub54c \ud638\ucd9c\ub420 \uc774\ubca4\ud2b8 \ub9ac\uc2a4\ub108\ub97c \ub4f1\ub85d\ud569\ub2c8\ub2e4."}),"\n",(0,t.jsx)(n.li,{children:"\uae30\ubcf8 \uc774\ubca4\ud2b8\uac00 \uc2e4\ud589\ub418\uae30 \uc804, \uba3c\uc800 \uccb4\ud06c\ub418\uba70 \ub4f1\ub85d\uc774 \ub418\uc5b4 \uc788\uc744 \uacbd\uc6b0 \uc6b0\uc120 \uc2e4\ud589\ub429\ub2c8\ub2e4."}),"\n",(0,t.jsx)(n.li,{children:"FILO (First In Last Out) \ubc29\uc2dd\uc73c\ub85c \ub098\uc911\uc5d0 \ub4f1\ub85d\ub41c \uc774\ubca4\ud2b8\uac00 \uba3c\uc800 \uc2e4\ud589 \ub429\ub2c8\ub2e4."}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"// \uc774\ubca4\ud2b8 ID\ub97c \ub530\ub85c \uc81c\uacf5\ud558\uc9c0 \uc54a\uc744 \uacbd\uc6b0 1\ubd80\ud130 \uc21c\uc11c\ub300\ub85c \uc544\uc774\ub514\ub97c \ubd80\uc5ec\ud569\ub2c8\ub2e4.\nNachocode.backkey.addEvent(eventId => {\n  console.log('Back key pressed.');\n  console.log(eventId); // 1\n});\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"// \uc6d0\ud558\ub294 \ud2b9\uc815 \uc774\ubca4\ud2b8 ID\ub97c \ubd80\uc5ec\ud560 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4.\nNachocode.backkey.addEvent(eventId => {\n  console.log('Back key pressed.');\n  console.log(eventId); // sample\n}, 'sample');\n"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"clearevent-void",children:(0,t.jsx)(n.code,{children:"clearEvent(): void"})}),"\n",(0,t.jsx)(n.p,{children:"\ub4f1\ub85d\ub41c \ubaa8\ub4e0 \ubc31\ud0a4 \uc774\ubca4\ud2b8 \ub9ac\uc2a4\ub108\ub97c \uc81c\uac70\ud569\ub2c8\ub2e4."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"// \ubc31\ud0a4\ub97c \uc81c\uc5b4\ud558\uae30 \uc704\ud574 \ub4f1\ub85d\ud55c \uc774\ubca4\ud2b8 \ub9ac\uc2a4\ub108\ub97c \uc804\ubd80 \uc81c\uac70\ud569\ub2c8\ub2e4.\nNachocode.backkey.clearEvent();\n"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"getlastevent-string",children:(0,t.jsx)(n.code,{children:"getLastEvent(): string"})}),"\n",(0,t.jsx)(n.p,{children:"\uc81c\uc77c \ub9c8\uc9c0\ub9c9\uc73c\ub85c \ub4f1\ub85d\ub41c \uc774\ubca4\ud2b8 \ub9ac\uc2a4\ub108\uc758 \uc774\ubca4\ud2b8 ID\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"// \uccab \ubc88\uc9f8 \ubc31\ud0a4 \uc774\ubca4\ud2b8 \ub9ac\uc2a4\ub108\ub97c \ub4f1\ub85d\ud569\ub2c8\ub2e4.\nNachocode.backkey.addEvent(eventId => {\n  console.log('Back key pressed.');\n  console.log(eventId); // sample1\n}, 'sample1');\n// \ub450 \ubc88\uc9f8 \ubc31\ud0a4 \uc774\ubca4\ud2b8 \ub9ac\uc2a4\ub108\ub97c \ub4f1\ub85d\ud569\ub2c8\ub2e4.\nNachocode.backkey.addEvent(eventId => {\n  console.log('Back key pressed.');\n  console.log(eventId); // sample2\n}, 'sample2');\n// \ub9c8\uc9c0\ub9c9 \ubc31\ud0a4 \uc774\ubca4\ud2b8 \ub9ac\uc2a4\ub108\uc758 \uc774\ubca4\ud2b8 ID\ub97c \uac00\uc838\uc635\ub2c8\ub2e4.\nconst eventId = Nachocode.backkey.getLastEvent(); // sample2\n"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"removeeventeventid-string-string",children:(0,t.jsx)(n.code,{children:"removeEvent(eventId?: string): string"})}),"\n",(0,t.jsxs)(n.p,{children:["\ub4f1\ub85d\ub41c \ubc31\ud0a4 \uc774\ubca4\ud2b8 \ub9ac\uc2a4\ub108\ub97c \uc81c\uac70\ud569\ub2c8\ub2e4. ",(0,t.jsx)(n.code,{children:"eventId"}),"\uac00 \uba85\uc2dc\ub418\uc9c0 \uc54a\uc744 \uacbd\uc6b0 \uae30\ubcf8\uc801\uc73c\ub85c \ub9c8\uc9c0\ub9c9\uc73c\ub85c \ub4f1\ub85d\ub41c \uc774\ubca4\ud2b8\ub97c \uc81c\uac70\ud569\ub2c8\ub2e4."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\ud65c\uc6a9 \uc608\uc2dc : modal\uc744 \ubc31\ud0a4\ub85c \ub04c \uc218 \uc788\ub3c4\ub85d close\ud568\uc218\ub97c \uc774\ubca4\ud2b8 \ub9ac\uc2a4\ub108 \ub4f1\ub85d\uc744 \ud574\ub450\uc5c8\ub294\ub370 \uc0ac\uc6a9\uc790\uac00 \ubc31 \ud0a4\uac00 \uc544\ub2cc x \ubc84\ud2bc\uc744 \ub20c\ub7ec \ub04c \uc218 \uc788\uc73c\ubbc0\ub85c, x \ubc84\ud2bc \ud074\ub9ad \uc2dc \ub4f1\ub85d\ub41c \ubc31\ud0a4 \uc774\ubca4\ud2b8 \ub9ac\uc2a4\ub108\ub97c \uc81c\uac70\ud574\uc57c\ud569\ub2c8\ub2e4."}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"// \ub9c8\uc9c0\ub9c9\uc73c\ub85c \ub4f1\ub85d\ub41c \uc774\ubca4\ud2b8\ub97c \uc81c\uac70\ud569\ub2c8\ub2e4.\nNachocode.backkey.removeEvent();\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"// \uc774\ubca4\ud2b8 ID\ub85c \ub4f1\ub85d\ub41c \ud2b9\uc815 \uc774\ubca4\ud2b8 \ub9ac\uc2a4\ub108\ub97c \uc81c\uac70\ud569\ub2c8\ub2e4.\nNachocode.backkey.removeEvent('sample');\n"})})]})}function v(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},127:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>o});var d=s(1467);const t={},c=d.createContext(t);function r(e){const n=d.useContext(c);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),d.createElement(c.Provider,{value:n},e.children)}}}]);