"use strict";(self.webpackChunknachocode_developer_hub=self.webpackChunknachocode_developer_hub||[]).push([[2473],{8453:(e,s,n)=>{n.d(s,{R:()=>i,x:()=>l});var r=n(6540);const d={},c=r.createContext(d);function i(e){const s=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),r.createElement(c.Provider,{value:s},e.children)}},9507:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>t,contentTitle:()=>l,default:()=>a,frontMatter:()=>i,metadata:()=>r,toc:()=>o});const r=JSON.parse('{"id":"sdk/namespaces/iap","title":"\uc778\uc571\uacb0\uc81c (iap)","description":"nachocode SDK\uc758 iap \ub124\uc784\uc2a4\ud398\uc774\uc2a4\ub97c \ud1b5\ud574 Android \ubc0f iOS \ud658\uacbd\uc5d0\uc11c \uc778\uc571\uacb0\uc81c\ub97c \uc190\uc27d\uac8c \ucc98\ub9ac\ud558\uace0, \uacb0\uc81c \uc131\uacf5, \uc2e4\ud328, \uc6f9\ud6c5(Webhook) \ucc98\ub9ac\uae4c\uc9c0 \ud6a8\uc728\uc801\uc73c\ub85c \uad00\ub9ac\ud558\uc138\uc694.","source":"@site/docs/sdk/namespaces/iap.md","sourceDirName":"sdk/namespaces","slug":"/sdk/namespaces/iap","permalink":"/docs/sdk/namespaces/iap","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":11,"frontMatter":{"sidebar_position":11,"description":"nachocode SDK\uc758 iap \ub124\uc784\uc2a4\ud398\uc774\uc2a4\ub97c \ud1b5\ud574 Android \ubc0f iOS \ud658\uacbd\uc5d0\uc11c \uc778\uc571\uacb0\uc81c\ub97c \uc190\uc27d\uac8c \ucc98\ub9ac\ud558\uace0, \uacb0\uc81c \uc131\uacf5, \uc2e4\ud328, \uc6f9\ud6c5(Webhook) \ucc98\ub9ac\uae4c\uc9c0 \ud6a8\uc728\uc801\uc73c\ub85c \uad00\ub9ac\ud558\uc138\uc694."},"sidebar":"docs","previous":{"title":"\ud398\uc774\uc2a4\ubd81 (facebook)","permalink":"/docs/sdk/namespaces/facebook"},"next":{"title":"\uad8c\ud55c (permission)","permalink":"/docs/sdk/namespaces/permission"}}');var d=n(4848),c=n(8453);const i={sidebar_position:11,description:"nachocode SDK\uc758 iap \ub124\uc784\uc2a4\ud398\uc774\uc2a4\ub97c \ud1b5\ud574 Android \ubc0f iOS \ud658\uacbd\uc5d0\uc11c \uc778\uc571\uacb0\uc81c\ub97c \uc190\uc27d\uac8c \ucc98\ub9ac\ud558\uace0, \uacb0\uc81c \uc131\uacf5, \uc2e4\ud328, \uc6f9\ud6c5(Webhook) \ucc98\ub9ac\uae4c\uc9c0 \ud6a8\uc728\uc801\uc73c\ub85c \uad00\ub9ac\ud558\uc138\uc694."},l="\uc778\uc571\uacb0\uc81c (iap)",t={},o=[{value:"<strong>\uac1c\uc694</strong>",id:"\uac1c\uc694",level:2},{value:"<strong>\ud0c0\uc785 \uc815\uc758</strong>",id:"\ud0c0\uc785-\uc815\uc758",level:2},{value:"<strong><code>IapPurchaseResult</code></strong>",id:"iappurchaseresult",level:3},{value:"\uc8fc\uc694 \uba54\uc11c\ub4dc",id:"\uc8fc\uc694-\uba54\uc11c\ub4dc",level:2},{value:"<code>purchase(productKey: string, userId: string, callback: (result: IapPurchaseResult) =&gt; any): Promise&lt;any&gt;</code>",id:"purchaseproductkey-string-userid-string-callback-result-iappurchaseresult--any-promiseany",level:3},{value:"\uc124\uba85 (<code>purchase</code>)",id:"\uc124\uba85-purchase",level:4},{value:"\uc5d0\ub7ec \ucf00\uc774\uc2a4 (<code>purchase</code>)",id:"\uc5d0\ub7ec-\ucf00\uc774\uc2a4-purchase",level:4},{value:"\uc0ac\uc6a9 \uc608\uc81c (<code>purchase</code>)",id:"\uc0ac\uc6a9-\uc608\uc81c-purchase",level:4},{value:"\uacb0\uc81c \uc0c1\ud0dc \uc815\uc758",id:"\uacb0\uc81c-\uc0c1\ud0dc-\uc815\uc758",level:2},{value:"\u2705 1. <strong>\uacb0\uc81c \uc131\uacf5</strong>",id:"-1-\uacb0\uc81c-\uc131\uacf5",level:3},{value:"\u274c 2. <strong>\uacb0\uc81c \uc2e4\ud328</strong>",id:"-2-\uacb0\uc81c-\uc2e4\ud328",level:3},{value:"\u26a0\ufe0f 3. <strong>\uacb0\uc81c \ud638\ucd9c \uc2e4\ud328</strong>",id:"\ufe0f-3-\uacb0\uc81c-\ud638\ucd9c-\uc2e4\ud328",level:3},{value:"<strong>\uc608\uc81c \uc751\ub2f5</strong>",id:"\uc608\uc81c-\uc751\ub2f5",level:3},{value:"\u2705 <strong>\uacb0\uc81c \uc131\uacf5 \uc2dc (<code>success = true</code>)</strong>",id:"-\uacb0\uc81c-\uc131\uacf5-\uc2dc-success--true",level:4},{value:"\u274c <strong>\uacb0\uc81c \uc2e4\ud328 \uc2dc (<code>success = false</code>)</strong>",id:"-\uacb0\uc81c-\uc2e4\ud328-\uc2dc-success--false",level:4},{value:"\u26a0\ufe0f <strong>\uacb0\uc81c \ud638\ucd9c \uc2e4\ud328 \uc2dc (<code>success = false</code>)</strong>",id:"\ufe0f-\uacb0\uc81c-\ud638\ucd9c-\uc2e4\ud328-\uc2dc-success--false",level:4}];function h(e){const s={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(s.header,{children:(0,d.jsxs)(s.h1,{id:"\uc778\uc571\uacb0\uc81c-iap",children:["\uc778\uc571\uacb0\uc81c (",(0,d.jsx)(s.code,{children:"iap"}),")"]})}),"\n",(0,d.jsxs)(s.blockquote,{children:["\n",(0,d.jsxs)(s.p,{children:["\ud83d\udd14 ",(0,d.jsx)(s.strong,{children:"\ucd5c\uc2e0\ud654 \uc77c\uc790:"})," 2025-02-21"]}),"\n"]}),"\n",(0,d.jsx)(s.h2,{id:"\uac1c\uc694",children:(0,d.jsx)(s.strong,{children:"\uac1c\uc694"})}),"\n",(0,d.jsxs)(s.p,{children:[(0,d.jsx)(s.code,{children:"iap"})," \ub124\uc784\uc2a4\ud398\uc774\uc2a4\ub294 ",(0,d.jsx)(s.strong,{children:"\ub124\uc774\ud2f0\ube0c \uc778\uc571\uacb0\uc81c \uae30\ub2a5"}),"\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4. nachocode SDK\ub97c \uc0ac\uc6a9\ud574 ",(0,d.jsx)(s.strong,{children:"Android \ubc0f iOS \ud658\uacbd\uc5d0\uc11c \uc778\uc571\uacb0\uc81c\ub97c \uc190\uc27d\uac8c \ucc98\ub9ac"}),"\ud560 \uc218 \uc788\uc73c\uba70, \ud14c\uc2a4\ud2b8 \ud658\uacbd(",(0,d.jsx)(s.code,{children:"sandbox"}),")\uacfc \uc6b4\uc601 \ud658\uacbd(",(0,d.jsx)(s.code,{children:"production"}),")\uc744 \ubaa8\ub450 \uc9c0\uc6d0\ud569\ub2c8\ub2e4.\nSDK \uc5f0\ub3d9 \uc804 ",(0,d.jsx)(s.strong,{children:"\uac00\uc774\ub4dc"}),"\ub97c \ucc38\uace0\ud574\ubcf4\uc138\uc694."]}),"\n",(0,d.jsxs)(s.p,{children:["\u27a1\ufe0f",(0,d.jsx)(s.a,{href:"../../guide/iap",children:"\uc778\uc571\uacb0\uc81c \uac00\uc774\ub4dc"})]}),"\n",(0,d.jsxs)(s.p,{children:["\u27a1\ufe0f",(0,d.jsx)(s.a,{href:"../../guide/webhook/overview",children:"\uc6f9\ud6c5 \uac00\uc774\ub4dc"})]}),"\n",(0,d.jsx)(s.hr,{}),"\n",(0,d.jsx)(s.h2,{id:"\ud0c0\uc785-\uc815\uc758",children:(0,d.jsx)(s.strong,{children:"\ud0c0\uc785 \uc815\uc758"})}),"\n",(0,d.jsx)(s.h3,{id:"iappurchaseresult",children:(0,d.jsx)(s.strong,{children:(0,d.jsx)(s.code,{children:"IapPurchaseResult"})})}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-typescript",children:"declare type IapPurchaseResult = {\n  purchaseEnv: 'sandbox' | 'production';\n  userId: string;\n  productId?: string;\n  nachoProductId: string;\n  purchaseId?: number;\n  os: 'android' | 'ios' | null;\n  status: {\n    success: boolean;\n    error?: {\n      code: string;\n      message: string;\n    };\n  };\n};\n"})}),"\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:(0,d.jsx)(s.strong,{children:"\uc18d\uc131\uba85"})}),(0,d.jsx)(s.th,{children:(0,d.jsx)(s.strong,{children:"\ud0c0\uc785"})}),(0,d.jsx)(s.th,{children:(0,d.jsx)(s.strong,{children:"\ud544\uc218 \uc5ec\ubd80"})}),(0,d.jsx)(s.th,{children:(0,d.jsx)(s.strong,{children:"\uc124\uba85"})})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"purchaseEnv"})}),(0,d.jsxs)(s.td,{children:[(0,d.jsx)(s.code,{children:"'sandbox'"})," | ",(0,d.jsx)(s.code,{children:"'production'"})]}),(0,d.jsx)(s.td,{children:"\u2705"}),(0,d.jsxs)(s.td,{children:["\uad6c\ub9e4\uac00 \uc774\ub8e8\uc5b4\uc9c4 \ud658\uacbd (",(0,d.jsx)(s.code,{children:"sandbox"}),": \ud14c\uc2a4\ud2b8 \ud658\uacbd, ",(0,d.jsx)(s.code,{children:"production"}),": \uc6b4\uc601 \ud658\uacbd)"]})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"userId"})}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"string"})}),(0,d.jsx)(s.td,{children:"\u2705"}),(0,d.jsx)(s.td,{children:"\uc778\uc571\uacb0\uc81c\ub97c \uc218\ud589\ud55c \uc571 \uc0ac\uc6a9\uc790\uc758 \uace0\uc720 \uc2dd\ubcc4\uc790"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"productId"})}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"string"})}),(0,d.jsx)(s.td,{children:"\u274c"}),(0,d.jsxs)(s.td,{children:[(0,d.jsxs)(s.strong,{children:["(",(0,d.jsx)(s.em,{children:"optional"}),")"]})," \uc0c1\ud488\ud0a4\ub85c \uc870\ud68c\ub41c \uc2a4\ud1a0\uc5b4\uc5d0 \ub4f1\ub85d\ub41c \uc0c1\ud488\uc758 \uace0\uc720 \uc2dd\ubcc4\uc790, Native \ud638\ucd9c\uc774 \uc2e4\ud328\ud55c \uacbd\uc6b0 ",(0,d.jsx)(s.strong,{children:"\uc5c6\uc74c"})]})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"nachoProductId"})}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"string"})}),(0,d.jsx)(s.td,{children:"\u2705"}),(0,d.jsx)(s.td,{children:"nachocode\uc5d0\uc11c \ubc1c\uae09\ubc1b\uc740 \uc778\uc571 \uc0c1\ud488\uc758 \uace0\uc720 \uc2dd\ubcc4\uc790"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"purchaseId"})}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"number"})}),(0,d.jsx)(s.td,{children:"\u274c"}),(0,d.jsxs)(s.td,{children:[(0,d.jsxs)(s.strong,{children:["(",(0,d.jsx)(s.em,{children:"optional"}),")"]})," \uc778\uc571\uacb0\uc81c \uad6c\ub9e4 \ub0b4\uc5ed ID, Native \ud638\ucd9c\uc774 \uc2e4\ud328\ud55c \uacbd\uc6b0 ",(0,d.jsx)(s.strong,{children:"\uc5c6\uc74c"})]})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"os"})}),(0,d.jsxs)(s.td,{children:[(0,d.jsx)(s.code,{children:"'android'"})," | ",(0,d.jsx)(s.code,{children:"'ios'"})," | ",(0,d.jsx)(s.code,{children:"null'"})]}),(0,d.jsx)(s.td,{children:"\u2705"}),(0,d.jsxs)(s.td,{children:["\uc778\uc571\uacb0\uc81c\uac00 \uc774\ub8e8\uc5b4\uc9c4 \uc6b4\uc601 \uccb4\uc81c (",(0,d.jsx)(s.code,{children:"android"}),", ",(0,d.jsx)(s.code,{children:"ios"}),", ",(0,d.jsx)(s.code,{children:"null"})," = OS \uc815\ubcf4 \uc5c6\uc74c)"]})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"status"})}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"object"})}),(0,d.jsx)(s.td,{children:"\u2705"}),(0,d.jsx)(s.td,{children:"\uc778\uc571\uacb0\uc81c \ud638\ucd9c \uc0c1\ud0dc \uc815\ubcf4"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"status.success"})}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"boolean"})}),(0,d.jsx)(s.td,{children:"\u2705"}),(0,d.jsxs)(s.td,{children:["\uc778\uc571\uacb0\uc81c \ucd5c\uc885 \uc131\uacf5 \uc5ec\ubd80 (",(0,d.jsx)(s.code,{children:"true"}),": \uc131\uacf5, ",(0,d.jsx)(s.code,{children:"false"}),": \uc2e4\ud328)"]})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"status.error"})}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"object"})}),(0,d.jsx)(s.td,{children:"\u274c"}),(0,d.jsxs)(s.td,{children:[(0,d.jsxs)(s.strong,{children:["(",(0,d.jsx)(s.em,{children:"optional"}),")"]})," \uc778\uc571\uacb0\uc81c \uc2e4\ud328 \uc2dc \ud3ec\ud568\ub418\ub294 \uc624\ub958 \uc815\ubcf4, ",(0,d.jsx)(s.code,{children:"success"})," = true\uc778 \uacbd\uc6b0 ",(0,d.jsx)(s.strong,{children:"\uc5c6\uc74c"})]})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"status.error.code"})}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"string"})}),(0,d.jsx)(s.td,{children:"\u274c"}),(0,d.jsxs)(s.td,{children:[(0,d.jsxs)(s.strong,{children:["(",(0,d.jsx)(s.em,{children:"optional"}),")"]})," \uc5d0\ub7ec \ubc1c\uc0dd \uc6d0\uc778\uc744 \ub098\ud0c0\ub0b4\ub294 \ucf54\ub4dc, Native \ud638\ucd9c\uc774 \uc2e4\ud328\ud55c \uacbd\uc6b0 ",(0,d.jsx)(s.strong,{children:"\uc5c6\uc74c"})]})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"status.error.message"})}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"string"})}),(0,d.jsx)(s.td,{children:"\u2705"}),(0,d.jsx)(s.td,{children:"\uc5d0\ub7ec \uba54\uc2dc\uc9c0"})]})]})]}),"\n",(0,d.jsx)(s.h2,{id:"\uc8fc\uc694-\uba54\uc11c\ub4dc",children:"\uc8fc\uc694 \uba54\uc11c\ub4dc"}),"\n",(0,d.jsx)(s.h3,{id:"purchaseproductkey-string-userid-string-callback-result-iappurchaseresult--any-promiseany",children:(0,d.jsx)(s.code,{children:"purchase(productKey: string, userId: string, callback: (result: IapPurchaseResult) => any): Promise<any>"})}),"\n",(0,d.jsxs)(s.ul,{children:["\n",(0,d.jsx)(s.li,{children:(0,d.jsx)(s.em,{children:"since ver.1.4.0"})}),"\n"]}),"\n",(0,d.jsxs)(s.h4,{id:"\uc124\uba85-purchase",children:["\uc124\uba85 (",(0,d.jsx)(s.code,{children:"purchase"}),")"]}),"\n",(0,d.jsxs)(s.p,{children:["nachocode\uc5d0\uc11c \uc0dd\uc131\ud55c ",(0,d.jsx)(s.strong,{children:"\uc778\uc571 \uc0c1\ud488\uc758 \uace0\uc720 \uc2dd\ubcc4\uc790"}),"(",(0,d.jsx)(s.code,{children:"productKey"}),")\uc640 ",(0,d.jsx)(s.strong,{children:"\uc0ac\uc6a9\uc790 ID"}),"(",(0,d.jsx)(s.code,{children:"userId"}),") \ub97c \uc804\ub2ec\ubc1b\uc544 \uc778\uc571\uacb0\uc81c\ub97c \uc2e4\ud589\ud569\ub2c8\ub2e4."]}),"\n",(0,d.jsxs)(s.p,{children:["\ucf5c\ubc31 \ud568\uc218\ub294 ",(0,d.jsx)(s.strong,{children:"\uacb0\uc81c \uacb0\uacfc\ub97c \ubc18\ud658"}),"\ud558\uba70, \uc131\uacf5 \ubc0f \uc2e4\ud328 \uc2dc \uac01\uac01\uc758 \ucc98\ub9ac\ub97c \uad6c\ud604\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,d.jsx)(s.hr,{}),"\n",(0,d.jsxs)(s.h4,{id:"\uc5d0\ub7ec-\ucf00\uc774\uc2a4-purchase",children:["\uc5d0\ub7ec \ucf00\uc774\uc2a4 (",(0,d.jsx)(s.code,{children:"purchase"}),")"]}),"\n",(0,d.jsxs)(s.p,{children:["SDK\uc5d0\uc11c \ubc1c\uc0dd\ud558\ub294 \uc5d0\ub7ec\ub294 ",(0,d.jsx)(s.strong,{children:"\uc548\ub4dc\ub85c\uc774\ub4dc"}),", ",(0,d.jsx)(s.strong,{children:"iOS"})," \ubaa8\ub450 \ub3d9\uc77c\ud55c \uc5d0\ub7ec \ud615\uc2dd\uc744 \uac00\uc9d1\ub2c8\ub2e4. SDK\uc5d0\uc11c \ubc1c\uc0dd\ud55c \uc5d0\ub7ec\uc758 \uacbd\uc6b0 \uc5d0\ub7ec \ucf54\ub4dc\ub97c \ubc18\ud658\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."]}),"\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:(0,d.jsx)(s.strong,{children:"\uba54\uc2dc\uc9c0"})}),(0,d.jsx)(s.th,{children:(0,d.jsx)(s.strong,{children:"\uc124\uba85"})})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"Cannot initiate a purchase transaction before SDK initialization."}),(0,d.jsx)(s.td,{children:"SDK\uac00 \ucd08\uae30\ud654 \ub418\uc9c0 \uc54a\uc740 \uacbd\uc6b0"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"Cannot detect device type."}),(0,d.jsx)(s.td,{children:"Device type\uc744 \uac10\uc9c0\ud558\uc9c0 \ubabb\ud55c \uacbd\uc6b0"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"In app purchase is only available in native app environment."}),(0,d.jsx)(s.td,{children:"\uc571 \ud658\uacbd\uc5d0\uc11c \uc778\uc571\uacb0\uc81c\ub97c \ud638\ucd9c\ud558\uc9c0 \uc54a\uc740 \uacbd\uc6b0"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"Required parameters missing."}),(0,d.jsx)(s.td,{children:"\uc778\uc571\uacb0\uc81c \ud638\ucd9c \ud30c\ub77c\ubbf8\ud130 \ubd80\uc7ac"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"In app purchase is still processing. Please try again later."}),(0,d.jsx)(s.td,{children:"\uc778\uc571\uacb0\uc81c\ub97c \uc911\ubcf5 \ud638\ucd9c\ud55c \uacbd\uc6b0"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"Failed to get in app product information."}),(0,d.jsx)(s.td,{children:"nachocode\ub85c \uc778\uc571 \uc0c1\ud488 \uc870\ud68c \uc694\uccad\uc774 \uc2e4\ud328\ud55c \uacbd\uc6b0"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"Product not found with provided productKey."}),(0,d.jsx)(s.td,{children:"\uc0c1\ud488\ud0a4\ub85c \uc870\ud68c\ub41c \uc0c1\ud488 \uc815\ubcf4\uac00 \uc62c\ubc14\ub974\uc9c0 \uc54a\uc740 \uacbd\uc6b0"})]})]})]}),"\n",(0,d.jsxs)(s.h4,{id:"\uc0ac\uc6a9-\uc608\uc81c-purchase",children:["\uc0ac\uc6a9 \uc608\uc81c (",(0,d.jsx)(s.code,{children:"purchase"}),")"]}),"\n",(0,d.jsx)(s.p,{children:"\uc544\ub798\ub294 \uc778\uc571\uacb0\uc81c \ud638\ucd9c \uacb0\uacfc\uc5d0 \ub530\ub77c \ub2e4\uc591\ud55c \ucf00\uc774\uc2a4\uc5d0 \ub300\uc751\ud558\ub294 \uc608\uc2dc \ucf54\ub4dc\uc785\ub2c8\ub2e4."}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-javascript",children:"// SDK\uac00 \ub85c\ub4dc\ub418\uc5c8\ub294\uc9c0 \ud655\uc778\ud55c \ud6c4 \ucd08\uae30\ud654\ub97c \uc2dc\ub3c4\ud569\ub2c8\ub2e4.\nif (window.Nachocode) {\n  // nachocode SDK\ub97c \ucd08\uae30\ud654 \ud560\ub54c \ud14c\uc2a4\ud2b8 \uc571\uc774\uba74 sandbox = true, \uc6b4\uc601\ud658\uacbd\uc77c \uacbd\uc6b0 false\ub85c \uc124\uc815\ud574\uc8fc\uc138\uc694.\n  Nachocode.init('your_api_key_here', { logger: true, sandbox: true });\n} else {\n  console.error('nachocode SDK is not loaded.');\n}\n\n// ex. \uc720\uc800\uac00 \uc0c1\ud488 \uad6c\ub9e4 \ubc84\ud2bc \ud074\ub9ad \uc2dc \ud638\ucd9c\ub418\ub294 \ucf5c\ubc31 \ud568\uc218\nfunction onPurchase(productKey, userId) {\n  // \uad6c\ub9e4\ud560 \uc0c1\ud488. ex) 'NP-TESTSAMPLE-001a'\n  // \uc0c1\ud488\uc744 \uad6c\ub9e4\ud558\ub294 \uc720\uc800\uc758 ID. ex) 'tester'\n\n  // \ud574\ub2f9 \uc0c1\ud488 \ud0a4\uc5d0 \uc800\uc7a5\ub41c \uc2a4\ud1a0\uc5b4\uc758 \uc0c1\ud488 ID\ub97c \ud1b5\ud574 Native\uc5d0\uc11c \uc778\uc571\uacb0\uc81c\ub97c \ud638\ucd9c\ud569\ub2c8\ub2e4.\n  Nachocode.iap.purchase(productKey, userId, async result => {\n    // \uad6c\ub9e4\ud560 \uc0c1\ud488. ex) 'NP-TESTSAMPLE-001a'\n    // \uc0c1\ud488\uc744 \uad6c\ub9e4\ud558\ub294 \uc720\uc800\uc758 ID. ex) 'tester'\n\n    // 1. \uacb0\uc81c \uc131\uacf5\n    if (result.status.success) {\n      // \ubc31\uc5d4\ub4dc\uc5d0\uc11c \uc6f9\ud6c5 \uc218\uc2e0\uc774 \uc815\uc0c1\uc801\uc73c\ub85c \uc774\ub8e8\uc5b4\uc84c\ub294\uc9c0 \ud655\uc778\ud569\ub2c8\ub2e4.\n      const response = await fetch(url);\n      const purchaseData = response.json();\n      if (purchaseData.success) {\n        alert('\uad6c\ub9e4\uac00 \uc131\uacf5\ud588\uc2b5\ub2c8\ub2e4.');\n      } else {\n        // Native Layer\uc5d0\uc11c \uc778\uc571\uacb0\uc81c\uac00 \uc131\uacf5\ud588\uc73c\ub098 \uc11c\ubc84\uc5d0\uc11c \uc0c1\ud488 \uc9c0\uae09\uc774 \uc774\ub8e8\uc5b4\uc9c0\uc9c0 \uc54a\uc558\ub2e4\uba74\n        // \uc6f9\ud6c5 \uc804\uc1a1\uc774 \uc2e4\ud328\ud588\uc744 \uac00\ub2a5\uc131\uc774 \uc788\uc2b5\ub2c8\ub2e4.\n        // \ub098\ucd78\ucf54\ub4dc \ub300\uc2dc\ubcf4\ub4dc\uc5d0\uc11c \uc6f9\ud6c5 \ub85c\uadf8\ub97c \ud655\uc778\ud574\uc11c \uc870\uce58\ud574\uc8fc\uc138\uc694.\n        alert('\uad6c\ub9e4 \ucc98\ub9ac \uc911\uc785\ub2c8\ub2e4.');\n      }\n    } else {\n      // 2. \uacb0\uc81c \uc2e4\ud328\n      if (result.purchaseId) {\n        // \uacb0\uc81c\uac00 \uc2e4\ud328\ud55c \uacbd\uc6b0 status.error \ud504\ub85c\ud37c\ud2f0\uc5d0 code\uc640 message \ud504\ub85c\ud37c\ud2f0\uac00 \ud3ec\ud568\ub418\uc5b4 \ubc18\ud658\ub429\ub2c8\ub2e4.\n        // SDK \ubb38\uc11c\uc5d0 \uba85\uc138\ub41c \uc5d0\ub7ec \ucf00\uc774\uc2a4\ub97c \ud1b5\ud574 \ucc98\ub9ac\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n\n        const errorCode = result.status.error.code;\n        // \uc720\uc800\uac00 \uacb0\uc81c\ub97c \uc774\ud0c8\ud55c \uacbd\uc6b0\n        if (errorCode === 'ERR-NNA-ILA-22') {\n          alert('\uc778\uc571\uacb0\uc81c\uac00 \ucde8\uc18c\ub410\uc2b5\ub2c8\ub2e4.');\n        } else {\n          alert('\uacb0\uc81c\uc5d0 \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4.');\n        }\n      } else {\n        // 3. \uacb0\uc81c \ud638\ucd9c \uc2e4\ud328\n        alert('\uc778\uc571\uacb0\uc81c\ub97c \uc2dc\uc791\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.');\n      }\n    }\n  });\n}\n"})}),"\n",(0,d.jsx)(s.h2,{id:"\uacb0\uc81c-\uc0c1\ud0dc-\uc815\uc758",children:"\uacb0\uc81c \uc0c1\ud0dc \uc815\uc758"}),"\n",(0,d.jsxs)(s.p,{children:["\uc778\uc571\uacb0\uc81c\uc758 \uc751\ub2f5 \ud615\ud0dc\ub294 ",(0,d.jsx)(s.strong,{children:"\uacb0\uc81c \uc131\uacf5"}),", ",(0,d.jsx)(s.strong,{children:"\uacb0\uc81c \uc2e4\ud328"}),", ",(0,d.jsx)(s.strong,{children:"\uacb0\uc81c \ud638\ucd9c \uc2e4\ud328"})," \ucd1d 3\uac00\uc9c0\ub85c \uc774\ub8e8\uc5b4\uc838\uc788\uc2b5\ub2c8\ub2e4.\n\uc0c1\ud0dc\uc5d0 \ub530\ub978 \uc751\ub2f5 \uc608\uc2dc\ub294 ",(0,d.jsx)(s.a,{href:"#%EC%98%88%EC%A0%9C-%EC%9D%91%EB%8B%B5",children:"\uc774\uacf3"}),"\uc744 \ud655\uc778\ud574\uc8fc\uc138\uc694."]}),"\n",(0,d.jsxs)(s.h3,{id:"-1-\uacb0\uc81c-\uc131\uacf5",children:["\u2705 1. ",(0,d.jsx)(s.strong,{children:"\uacb0\uc81c \uc131\uacf5"})]}),"\n",(0,d.jsxs)(s.ul,{children:["\n",(0,d.jsxs)(s.li,{children:["\uacb0\uc81c \uac80\uc99d\uc744 \ud3ec\ud568\ud55c \ubaa8\ub4e0 \uacfc\uc815\uc774 ",(0,d.jsx)(s.strong,{children:"\uc131\uacf5\uc801\uc73c\ub85c \uc644\ub8cc\ub41c \uc0c1\ud0dc"}),"\uc785\ub2c8\ub2e4."]}),"\n",(0,d.jsxs)(s.li,{children:["\ub2e8, ",(0,d.jsx)(s.strong,{children:"\uc6f9\ud6c5(Webhook) \uc804\uc1a1\uc740 \uc2e4\ud328\ud560 \uc218"})," \uc788\uc73c\ubbc0\ub85c nachocode \ub300\uc2dc\ubcf4\ub4dc\uc5d0\uc11c \ud655\uc778\ud558\uc138\uc694."]}),"\n"]}),"\n",(0,d.jsx)(s.hr,{}),"\n",(0,d.jsxs)(s.h3,{id:"-2-\uacb0\uc81c-\uc2e4\ud328",children:["\u274c 2. ",(0,d.jsx)(s.strong,{children:"\uacb0\uc81c \uc2e4\ud328"})]}),"\n",(0,d.jsxs)(s.ul,{children:["\n",(0,d.jsxs)(s.li,{children:[(0,d.jsx)(s.strong,{children:"Native Layer\uc5d0\uc11c \uc778\uc571\uacb0\uc81c \ud638\ucd9c\uc740 \uc131\uacf5\ud588\uc73c\ub098"}),", \ub2e4\uc74c\uacfc \uac19\uc740 \uc774\uc720\ub85c \uacb0\uc81c\uac00 \uc2e4\ud328\ud55c \uacbd\uc6b0\ub97c \uc758\ubbf8\ud569\ub2c8\ub2e4.","\n",(0,d.jsxs)(s.ul,{children:["\n",(0,d.jsx)(s.li,{children:"\uacb0\uc81c \uc2e4\ud328"}),"\n",(0,d.jsx)(s.li,{children:"\uacb0\uc81c \uac80\uc99d \uc2e4\ud328"}),"\n",(0,d.jsx)(s.li,{children:"\uc0ac\uc6a9\uc790\uac00 \uacb0\uc81c\ub97c \ucde8\uc18c"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(s.hr,{}),"\n",(0,d.jsxs)(s.h3,{id:"\ufe0f-3-\uacb0\uc81c-\ud638\ucd9c-\uc2e4\ud328",children:["\u26a0\ufe0f 3. ",(0,d.jsx)(s.strong,{children:"\uacb0\uc81c \ud638\ucd9c \uc2e4\ud328"})]}),"\n",(0,d.jsxs)(s.ul,{children:["\n",(0,d.jsxs)(s.li,{children:[(0,d.jsx)(s.strong,{children:"SDK \ucd08\uae30\ud654 \ubb38\uc81c, \uc778\uc218\uac12 \ubd80\uc7ac, nachocode \uc11c\ubc84\uc5d0 \uc0c1\ud488\uc774 \ub4f1\ub85d\ub418\uc9c0 \uc54a\uc74c"})," \ub4f1\uc758 \uc774\uc720\ub85c \uc778\ud574 ",(0,d.jsx)(s.strong,{children:"\uc778\uc571\uacb0\uc81c \ud638\ucd9c \uc790\uccb4\uac00 \uc2e4\ud328\ud55c \uacbd\uc6b0"}),"\ub97c \uc758\ubbf8\ud569\ub2c8\ub2e4."]}),"\n"]}),"\n",(0,d.jsx)(s.hr,{}),"\n",(0,d.jsx)(s.h3,{id:"\uc608\uc81c-\uc751\ub2f5",children:(0,d.jsx)(s.strong,{children:"\uc608\uc81c \uc751\ub2f5"})}),"\n",(0,d.jsxs)(s.h4,{id:"-\uacb0\uc81c-\uc131\uacf5-\uc2dc-success--true",children:["\u2705 ",(0,d.jsxs)(s.strong,{children:["\uacb0\uc81c \uc131\uacf5 \uc2dc (",(0,d.jsx)(s.code,{children:"success = true"}),")"]})]}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-json",children:'{\n  "purchaseEnv": "production",\n  "userId": "tester",\n  "productId": "com.nachocode.developer.product",\n  "nachoProductId": "NP-TESTSAMPLE-0001",\n  "purchaseId": 123456,\n  "os": "android",\n  "status": {\n    "success": true\n  }\n}\n'})}),"\n",(0,d.jsxs)(s.h4,{id:"-\uacb0\uc81c-\uc2e4\ud328-\uc2dc-success--false",children:["\u274c ",(0,d.jsxs)(s.strong,{children:["\uacb0\uc81c \uc2e4\ud328 \uc2dc (",(0,d.jsx)(s.code,{children:"success = false"}),")"]})]}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-json",children:'{\n  "purchaseEnv": "production",\n  "userId": "tester",\n  "productId": "com.nachocode.developer.product",\n  "nachoProductId": "NP-TESTSAMPLE-0001",\n  "purchaseId": 123456,\n  "os": "android",\n  "status": {\n    "success": false,\n    "error": {\n      "code": "ERR-NNA-ILA-22",\n      "message": "User canceled the purchase."\n    }\n  }\n}\n'})}),"\n",(0,d.jsxs)(s.h4,{id:"\ufe0f-\uacb0\uc81c-\ud638\ucd9c-\uc2e4\ud328-\uc2dc-success--false",children:["\u26a0\ufe0f ",(0,d.jsxs)(s.strong,{children:["\uacb0\uc81c \ud638\ucd9c \uc2e4\ud328 \uc2dc (",(0,d.jsx)(s.code,{children:"success = false"}),")"]})]}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-json",children:'{\n  "purchaseEnv": "production",\n  "userId": "tester",\n  "nachoProductId": "NP-TESTSAMPLE-0001",\n  "os": "android",\n  "status": {\n    "success": false,\n    "error": {\n      "message": "Required parameters missing."\n    }\n  }\n}\n'})}),"\n",(0,d.jsx)(s.hr,{})]})}function a(e={}){const{wrapper:s}={...(0,c.R)(),...e.components};return s?(0,d.jsx)(s,{...e,children:(0,d.jsx)(h,{...e})}):h(e)}}}]);