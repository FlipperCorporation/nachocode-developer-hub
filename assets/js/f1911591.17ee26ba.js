"use strict";(self.webpackChunknachocode_developer_hub=self.webpackChunknachocode_developer_hub||[]).push([[426],{5254:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>a});const s=JSON.parse('{"id":"sdk/namespaces/env","title":"\ud658\uacbd (env)","description":"\ud83d\udd14 \ucd5c\uc2e0\ud654 \uc77c\uc790: 2024-11-27","source":"@site/docs/sdk/namespaces/env.md","sourceDirName":"sdk/namespaces","slug":"/sdk/namespaces/env","permalink":"/docs/sdk/namespaces/env","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"sidebar_position":6},"sidebar":"docs","previous":{"title":"\ub514\ubc14\uc774\uc2a4 (device)","permalink":"/docs/sdk/namespaces/device"},"next":{"title":"\uc774\ubca4\ud2b8 (event)","permalink":"/docs/sdk/namespaces/event"}}');var r=i(123),c=i(127);const o={sidebar_position:6},d="\ud658\uacbd (env)",l={},a=[{value:"\ud0c0\uc785 \uc815\uc758",id:"\ud0c0\uc785-\uc815\uc758",level:2},{value:"RunningEnvironment",id:"runningenvironment",level:3},{value:"CurrentEnvironment",id:"currentenvironment",level:3},{value:"EnvironmentOptions",id:"environmentoptions",level:3},{value:"\uc8fc\uc694 \uba54\uc11c\ub4dc",id:"\uc8fc\uc694-\uba54\uc11c\ub4dc",level:2},{value:"<code>getAppSourceVersion(): string</code>",id:"getappsourceversion-string",level:3},{value:"<code>getCurrentEnv(): CurrentEnvironment</code>",id:"getcurrentenv-currentenvironment",level:3},{value:"<code>getRunningEnv(): RunningEnvironment</code>",id:"getrunningenv-runningenvironment",level:3},{value:"<code>getSDKVersion(): string</code>",id:"getsdkversion-string",level:3},{value:"<code>isApp(): boolean</code>",id:"isapp-boolean",level:3},{value:"<code>isInitialized(): boolean</code>",id:"isinitialized-boolean",level:3},{value:"<code>isUsingSandbox(): boolean</code>",id:"isusingsandbox-boolean",level:3},{value:"<code>isWeb(): boolean</code>",id:"isweb-boolean",level:3}];function t(n){const e={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,c.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.header,{children:(0,r.jsxs)(e.h1,{id:"\ud658\uacbd-env",children:["\ud658\uacbd (",(0,r.jsx)(e.code,{children:"env"}),")"]})}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsxs)(e.p,{children:["\ud83d\udd14 ",(0,r.jsx)(e.strong,{children:"\ucd5c\uc2e0\ud654 \uc77c\uc790:"})," 2024-11-27"]}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"SDK\uc758 \ud604\uc7ac \ud658\uacbd \ubc0f \uc124\uc815\uc744 \uad00\ub9ac\ud558\ub294 \ub124\uc784\uc2a4\ud398\uc774\uc2a4\uc785\ub2c8\ub2e4.\nSDK \ubc84\uc804, \uc2e4\ud589 \ud658\uacbd (Web/APP), \uc0cc\ub4dc\ubc15\uc2a4 \ubaa8\ub4dc \uc5ec\ubd80 \ub4f1\uc744 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,r.jsx)(e.hr,{}),"\n",(0,r.jsx)(e.h2,{id:"\ud0c0\uc785-\uc815\uc758",children:"\ud0c0\uc785 \uc815\uc758"}),"\n",(0,r.jsx)(e.h3,{id:"runningenvironment",children:"RunningEnvironment"}),"\n",(0,r.jsx)(e.p,{children:"\uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uc2e4\ud589 \ud658\uacbd\uc744 \ub098\ud0c0\ub0b4\ub294 \uc5f4\uac70\ud615\uc785\ub2c8\ub2e4."}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"web"}),": \uc6f9 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0\uc11c \uc2e4\ud589 \uc911\uc784\uc744 \ub098\ud0c0\ub0c5\ub2c8\ub2e4."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"app"}),": \ub124\uc774\ud2f0\ube0c \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0\uc11c \uc2e4\ud589 \uc911\uc784\uc744 \ub098\ud0c0\ub0c5\ub2c8\ub2e4."]}),"\n"]}),"\n",(0,r.jsx)(e.hr,{}),"\n",(0,r.jsx)(e.h3,{id:"currentenvironment",children:"CurrentEnvironment"}),"\n",(0,r.jsx)(e.p,{children:"\ud604\uc7ac \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \ud658\uacbd\uc744 \ub098\ud0c0\ub0b4\ub294 \ud0c0\uc785\uc785\ub2c8\ub2e4."}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"deviceType: Nachocode.device.DeviceType"}),": \ud604\uc7ac \ub514\ubc14\uc774\uc2a4 \uc720\ud615\uc785\ub2c8\ub2e4."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"logger: boolean"}),": \ub85c\uac70 \uc0ac\uc6a9 \uc5ec\ubd80\uc785\ub2c8\ub2e4."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"runningEnv: RunningEnvironment"}),": \ud604\uc7ac \uc2e4\ud589 \ud658\uacbd\uc785\ub2c8\ub2e4."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"sandbox: boolean"}),": \uc0cc\ub4dc\ubc15\uc2a4 \uc11c\ubc84 \uc0ac\uc6a9 \uc5ec\ubd80\uc785\ub2c8\ub2e4."]}),"\n"]}),"\n",(0,r.jsx)(e.hr,{}),"\n",(0,r.jsx)(e.h3,{id:"environmentoptions",children:"EnvironmentOptions"}),"\n",(0,r.jsx)(e.p,{children:"\uc560\ud50c\ub9ac\ucf00\uc774\uc158 \ud658\uacbd \uc635\uc158\uc744 \ub098\ud0c0\ub0b4\ub294 \ud0c0\uc785\uc785\ub2c8\ub2e4."}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"sandbox: boolean"}),": \uc0cc\ub4dc\ubc15\uc2a4 \uc11c\ubc84 \uc0ac\uc6a9 \uc5ec\ubd80\uc785\ub2c8\ub2e4."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"logger: boolean"}),": \ub85c\uac70 \uc0ac\uc6a9 \uc5ec\ubd80\uc785\ub2c8\ub2e4."]}),"\n"]}),"\n",(0,r.jsx)(e.hr,{}),"\n",(0,r.jsx)(e.h2,{id:"\uc8fc\uc694-\uba54\uc11c\ub4dc",children:"\uc8fc\uc694 \uba54\uc11c\ub4dc"}),"\n",(0,r.jsx)(e.h3,{id:"getappsourceversion-string",children:(0,r.jsx)(e.code,{children:"getAppSourceVersion(): string"})}),"\n",(0,r.jsx)(e.p,{children:"\ud604\uc7ac \uc571 \uc18c\uc2a4 \ubc84\uc804\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4."}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\uc571 \uc18c\uc2a4 \ubc84\uc804\uc774\ub780 Nachocode\uc5d0\uc11c \uc81c\uacf5\ud558\ub294 \uae30\ubcf8 \uc571 \uc18c\uc2a4\ucf54\ub4dc\uc758 \ubc84\uc804\uc744 \uc758\ubbf8\ud569\ub2c8\ub2e4."}),"\n",(0,r.jsx)(e.li,{children:"SDK \ubc84\uc83c\ubcf4\ub2e4 \uc571 \uc18c\uc2a4 \ubc84\uc83c\uc774 \ub0ae\uc744 \uacbd\uc6b0 SDK \uc77c\ubd80 \uae30\ub2a5 \uc0ac\uc6a9\uc774 \uc81c\ud55c\ub429\ub2c8\ub2e4."}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-javascript",children:"const currentVersion = Nachocode.env.getAppSourceVersion();\n\nconsole.log(currentVersion); // ex. 1.3.0\n"})}),"\n",(0,r.jsx)(e.hr,{}),"\n",(0,r.jsx)(e.h3,{id:"getcurrentenv-currentenvironment",children:(0,r.jsx)(e.code,{children:"getCurrentEnv(): CurrentEnvironment"})}),"\n",(0,r.jsx)(e.p,{children:"\ud604\uc7ac \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \ud658\uacbd\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4."}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-javascript",children:"const currentEnv = Nachocode.env.getCurrentEnv();\n\nconsole.log(currentEnv); // ex. { deviceType: 'iOS', logger: false, runningEnv: 'app', sandbox: false }\n"})}),"\n",(0,r.jsx)(e.hr,{}),"\n",(0,r.jsx)(e.h3,{id:"getrunningenv-runningenvironment",children:(0,r.jsx)(e.code,{children:"getRunningEnv(): RunningEnvironment"})}),"\n",(0,r.jsx)(e.p,{children:"\ud604\uc7ac \uc2e4\ud589 \uc911\uc778 \ud658\uacbd (\uc6f9 \ub610\ub294 \uc571)\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4."}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-javascript",children:"const runningEnv = Nachocode.env.getRunningEnv(); // 'web' | 'app'\n"})}),"\n",(0,r.jsx)(e.hr,{}),"\n",(0,r.jsx)(e.h3,{id:"getsdkversion-string",children:(0,r.jsx)(e.code,{children:"getSDKVersion(): string"})}),"\n",(0,r.jsx)(e.p,{children:"\ud604\uc7ac SDK \ubc84\uc804\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4."}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-javascript",children:"const sdkVersion = Nachocode.env.getSDKVersion(); // ex. '1.3.0'\n"})}),"\n",(0,r.jsx)(e.hr,{}),"\n",(0,r.jsx)(e.h3,{id:"isapp-boolean",children:(0,r.jsx)(e.code,{children:"isApp(): boolean"})}),"\n",(0,r.jsx)(e.p,{children:"\uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc774 \ub124\uc774\ud2f0\ube0c \uc571\uc5d0\uc11c \uc2e4\ud589 \uc911\uc778\uc9c0 \uc5ec\ubd80\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4."}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-javascript",children:"if (Nachocode.env.isApp()) {\n  // \uc571 \ud658\uacbd\uc5d0\uc11c\ub9cc \ub3d9\uc791\ud560 \ub85c\uc9c1\uc744 \uc791\uc131\ud569\ub2c8\ub2e4.\n}\n"})}),"\n",(0,r.jsx)(e.hr,{}),"\n",(0,r.jsx)(e.h3,{id:"isinitialized-boolean",children:(0,r.jsx)(e.code,{children:"isInitialized(): boolean"})}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"nachocode SDK"}),"\uac00 \ucd08\uae30\ud654\ub418\uc5c8\ub294\uc9c0 \uc5ec\ubd80\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4."]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-javascript",children:"if (Nachocode.env.isInitialized()) {\n  // nachocode SDK\uac00 \ucd08\uae30\ud654 \ub418\uc5c8\uc744 \ub54c\ub9cc \uc2e4\ud589 \ud560 \ub85c\uc9c1\uc744 \uc791\uc131\ud569\ub2c8\ub2e4.\n}\n"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-javascript",children:"// SDK\uac00 \ucd08\uae30\ud654 \ub418\uc9c0 \uc54a\uc558\ub2e4\uba74 \ucd08\uae30\ud654\ub97c \uc2dc\ub3c4\ud569\ub2c8\ub2e4.\nif (!Nachocode.env.isInitialized()) {\n  Nachocode.init('your_api_key_here');\n}\n"})}),"\n",(0,r.jsx)(e.hr,{}),"\n",(0,r.jsx)(e.h3,{id:"isusingsandbox-boolean",children:(0,r.jsx)(e.code,{children:"isUsingSandbox(): boolean"})}),"\n",(0,r.jsx)(e.p,{children:"\ud604\uc7ac \uc0cc\ub4dc\ubc15\uc2a4 \uc11c\ubc84\ub97c \uc0ac\uc6a9 \uc911\uc778\uc9c0 \uc5ec\ubd80\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4."}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-javascript",children:"console.log(Nachocode.env.isUsingSandbox()); // true | false\n"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-javascript",children:"if (Nachocode.env.isUsingSandbox()) {\n  // Sandbox \uc11c\ubc84\ub97c \uc0ac\uc6a9 \uc911\uc77c \ub54c\ub9cc \uc2e4\ud589\ud560 \ub85c\uc9c1\uc744 \uc791\uc131\ud569\ub2c8\ub2e4.\n}\n"})}),"\n",(0,r.jsx)(e.hr,{}),"\n",(0,r.jsx)(e.h3,{id:"isweb-boolean",children:(0,r.jsx)(e.code,{children:"isWeb(): boolean"})}),"\n",(0,r.jsx)(e.p,{children:"\uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc774 \uc6f9 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0\uc11c \uc2e4\ud589 \uc911\uc778\uc9c0 \uc5ec\ubd80\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4."}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-javascript",children:"if (Nachocode.env.isWeb()) {\n  // \uc6f9 \ud658\uacbd\uc5d0\uc11c\ub9cc \ub3d9\uc791\ud560 \ub85c\uc9c1\uc744 \uc791\uc131\ud569\ub2c8\ub2e4.\n}\n"})}),"\n",(0,r.jsx)(e.hr,{})]})}function h(n={}){const{wrapper:e}={...(0,c.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(t,{...n})}):t(n)}},127:(n,e,i)=>{i.d(e,{R:()=>o,x:()=>d});var s=i(1467);const r={},c=s.createContext(r);function o(n){const e=s.useContext(c);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:o(n.components),s.createElement(c.Provider,{value:e},n.children)}}}]);