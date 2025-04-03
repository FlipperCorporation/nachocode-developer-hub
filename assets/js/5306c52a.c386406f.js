"use strict";(self.webpackChunknachocode_developer_hub=self.webpackChunknachocode_developer_hub||[]).push([[8970],{128:(e,d,n)=>{n.r(d),n.d(d,{assets:()=>h,contentTitle:()=>t,default:()=>x,frontMatter:()=>i,metadata:()=>r,toc:()=>o});const r=JSON.parse('{"id":"guide/webhook/iap/purchase","title":"\uc778\uc571\uacb0\uc81c \uad6c\ub9e4 \uc774\ubca4\ud2b8","description":"nachocode \uc778\uc571\uacb0\uc81c \uad6c\ub9e4 \uc6f9\ud6c5 \uc774\ubca4\ud2b8\uc758 \uc694\uccad \ubcf8\ubb38 \uc608\uc2dc\uc640 \ub370\uc774\ud130 \uad6c\uc870\ub97c \uc124\uba85\ud569\ub2c8\ub2e4. \uc6f9\ud6c5\uc744 \ud1b5\ud574 \uc571 \uc0ac\uc6a9\uc790\uc758 \uad6c\ub9e4 \uc774\ubca4\ud2b8\ub97c \uc2e4\uc2dc\uac04\uc73c\ub85c \uc218\uc2e0 \ubc0f \ucc98\ub9ac\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.","source":"@site/docs/guide/webhook/iap/purchase.md","sourceDirName":"guide/webhook/iap","slug":"/guide/webhook/iap/purchase","permalink":"/docs/guide/webhook/iap/purchase","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1,"sidebar_label":"\uad6c\ub9e4 (purchase)","description":"nachocode \uc778\uc571\uacb0\uc81c \uad6c\ub9e4 \uc6f9\ud6c5 \uc774\ubca4\ud2b8\uc758 \uc694\uccad \ubcf8\ubb38 \uc608\uc2dc\uc640 \ub370\uc774\ud130 \uad6c\uc870\ub97c \uc124\uba85\ud569\ub2c8\ub2e4. \uc6f9\ud6c5\uc744 \ud1b5\ud574 \uc571 \uc0ac\uc6a9\uc790\uc758 \uad6c\ub9e4 \uc774\ubca4\ud2b8\ub97c \uc2e4\uc2dc\uac04\uc73c\ub85c \uc218\uc2e0 \ubc0f \ucc98\ub9ac\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."},"sidebar":"docs","previous":{"title":"\uac1c\uc694","permalink":"/docs/guide/webhook/overview"},"next":{"title":"\ud658\ubd88 (refund)","permalink":"/docs/guide/webhook/iap/refund"}}');var s=n(4848),c=n(8453);const i={sidebar_position:1,sidebar_label:"\uad6c\ub9e4 (purchase)",description:"nachocode \uc778\uc571\uacb0\uc81c \uad6c\ub9e4 \uc6f9\ud6c5 \uc774\ubca4\ud2b8\uc758 \uc694\uccad \ubcf8\ubb38 \uc608\uc2dc\uc640 \ub370\uc774\ud130 \uad6c\uc870\ub97c \uc124\uba85\ud569\ub2c8\ub2e4. \uc6f9\ud6c5\uc744 \ud1b5\ud574 \uc571 \uc0ac\uc6a9\uc790\uc758 \uad6c\ub9e4 \uc774\ubca4\ud2b8\ub97c \uc2e4\uc2dc\uac04\uc73c\ub85c \uc218\uc2e0 \ubc0f \ucc98\ub9ac\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."},t="\uc778\uc571\uacb0\uc81c \uad6c\ub9e4 \uc774\ubca4\ud2b8",h={},o=[{value:"<strong>\uad6c\ub9e4 \uc774\ubca4\ud2b8 \ud0c0\uc785 \uc815\uc758</strong>",id:"\uad6c\ub9e4-\uc774\ubca4\ud2b8-\ud0c0\uc785-\uc815\uc758",level:2},{value:"<strong><code>IapPurchaseEvent</code></strong>",id:"iappurchaseevent",level:3},{value:"<strong><code>PlayStorePurchaseData</code></strong>",id:"playstorepurchasedata",level:3},{value:"<strong><code>AppStorePurchaseData</code></strong>",id:"appstorepurchasedata",level:3},{value:"\uc694\uccad \ubcf8\ubb38 \uc608\uc2dc",id:"\uc694\uccad-\ubcf8\ubb38-\uc608\uc2dc",level:2}];function l(e){const d={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(d.header,{children:(0,s.jsx)(d.h1,{id:"\uc778\uc571\uacb0\uc81c-\uad6c\ub9e4-\uc774\ubca4\ud2b8",children:"\uc778\uc571\uacb0\uc81c \uad6c\ub9e4 \uc774\ubca4\ud2b8"})}),"\n",(0,s.jsxs)(d.blockquote,{children:["\n",(0,s.jsxs)(d.p,{children:["\ud83d\udd14 ",(0,s.jsx)(d.strong,{children:"\ucd5c\uc2e0\ud654 \uc77c\uc790:"})," 2025-02-21"]}),"\n"]}),"\n",(0,s.jsx)(d.h2,{id:"\uad6c\ub9e4-\uc774\ubca4\ud2b8-\ud0c0\uc785-\uc815\uc758",children:(0,s.jsx)(d.strong,{children:"\uad6c\ub9e4 \uc774\ubca4\ud2b8 \ud0c0\uc785 \uc815\uc758"})}),"\n",(0,s.jsx)(d.h3,{id:"iappurchaseevent",children:(0,s.jsx)(d.strong,{children:(0,s.jsx)(d.code,{children:"IapPurchaseEvent"})})}),"\n",(0,s.jsx)(d.pre,{children:(0,s.jsx)(d.code,{className:"language-typescript",children:"declare interface IapPurchaseEvent {\n  userId: string;\n  iapLogId: number;\n  nachoProductId: string;\n  os: 'android' | 'ios';\n  productId: string;\n  productType: 'consumable' | 'non-consumable';\n  quantity: number;\n  price: number;\n  environment: 'sandbox' | 'production';\n  data: PlayStorePurchaseData | AppStorePurchaseData;\n  requestedAt: string;\n  purchasedAt: string;\n  verifiedAt: string;\n}\n"})}),"\n",(0,s.jsxs)(d.table,{children:[(0,s.jsx)(d.thead,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.th,{children:(0,s.jsx)(d.strong,{children:"\uc18d\uc131\uba85"})}),(0,s.jsx)(d.th,{children:(0,s.jsx)(d.strong,{children:"\ud0c0\uc785"})}),(0,s.jsx)(d.th,{children:(0,s.jsx)(d.strong,{children:"\ud544\uc218 \uc5ec\ubd80"})}),(0,s.jsx)(d.th,{children:(0,s.jsx)(d.strong,{children:"\uc124\uba85"})})]})}),(0,s.jsxs)(d.tbody,{children:[(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"userId"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"string"})}),(0,s.jsx)(d.td,{children:"\u2705"}),(0,s.jsx)(d.td,{children:"\uc778\uc571\uacb0\uc81c\ub97c \uc218\ud589\ud55c \uc571 \uc0ac\uc6a9\uc790\uc758 \uace0\uc720 \uc2dd\ubcc4\uc790"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"iapLogId"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"number"})}),(0,s.jsx)(d.td,{children:"\u2705"}),(0,s.jsx)(d.td,{children:"\uc778\uc571\uacb0\uc81c \uc694\uccad\uc758 \uace0\uc720 \ub85c\uadf8 ID"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"nachoProductId"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"string"})}),(0,s.jsx)(d.td,{children:"\u2705"}),(0,s.jsx)(d.td,{children:"nachocode\uc5d0\uc11c \ubc1c\uae09\ubc1b\uc740 \uc778\uc571 \uc0c1\ud488\uc758 \uace0\uc720 \uc2dd\ubcc4\uc790"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"os"})}),(0,s.jsxs)(d.td,{children:[(0,s.jsx)(d.code,{children:"'android'"})," | ",(0,s.jsx)(d.code,{children:"'ios'"})]}),(0,s.jsx)(d.td,{children:"\u2705"}),(0,s.jsxs)(d.td,{children:["\uc778\uc571\uacb0\uc81c\uac00 \uc774\ub8e8\uc5b4\uc9c4 \uc6b4\uc601 \uccb4\uc81c (",(0,s.jsx)(d.code,{children:"android"}),", ",(0,s.jsx)(d.code,{children:"ios"}),")"]})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"productId"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"string"})}),(0,s.jsx)(d.td,{children:"\u2705"}),(0,s.jsx)(d.td,{children:"\uc2a4\ud1a0\uc5b4\uc5d0 \ub4f1\ub85d\ub41c \uc0c1\ud488\uc758 \uace0\uc720 \uc2dd\ubcc4\uc790"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"productType"})}),(0,s.jsxs)(d.td,{children:[(0,s.jsx)(d.code,{children:"'consumable'"})," | ",(0,s.jsx)(d.code,{children:"'non-consumable'"})]}),(0,s.jsx)(d.td,{children:"\u2705"}),(0,s.jsxs)(d.td,{children:["\uc0c1\ud488 \uc720\ud615 (",(0,s.jsx)(d.code,{children:"consumable"}),": \uc18c\ubaa8\uc131, ",(0,s.jsx)(d.code,{children:"non-consumable"}),": \ube44\uc18c\ubaa8\uc131)"]})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"quantity"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"number"})}),(0,s.jsx)(d.td,{children:"\u2705"}),(0,s.jsx)(d.td,{children:"\uad6c\ub9e4\ud55c \uc0c1\ud488 \uac1c\uc218"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"price"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"number"})}),(0,s.jsx)(d.td,{children:"\u2705"}),(0,s.jsx)(d.td,{children:"\uac1c\ub2f9 \uad6c\ub9e4 \uac00\uaca9"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"environment"})}),(0,s.jsxs)(d.td,{children:[(0,s.jsx)(d.code,{children:"'sandbox'"})," | ",(0,s.jsx)(d.code,{children:"'production'"})]}),(0,s.jsx)(d.td,{children:"\u2705"}),(0,s.jsxs)(d.td,{children:["\uad6c\ub9e4\uac00 \uc774\ub8e8\uc5b4\uc9c4 \ud658\uacbd (",(0,s.jsx)(d.code,{children:"sandbox"}),": \ud14c\uc2a4\ud2b8 \ud658\uacbd, ",(0,s.jsx)(d.code,{children:"production"}),": \uc6b4\uc601 \ud658\uacbd)"]})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"data"})}),(0,s.jsxs)(d.td,{children:[(0,s.jsx)(d.code,{children:"PlayStorePurchaseData"})," | ",(0,s.jsx)(d.code,{children:"AppStorePurchaseData"})]}),(0,s.jsx)(d.td,{children:"\u2705"}),(0,s.jsxs)(d.td,{children:["\uc778\uc571\uacb0\uc81c \ub370\uc774\ud130 \uc815\ubcf4. ",(0,s.jsx)(d.code,{children:"os"}),"\uac00 ",(0,s.jsx)(d.code,{children:"'android'"}),"\uc778 \uacbd\uc6b0 ",(0,s.jsx)(d.code,{children:"PlayStorePurchaseData"}),", ",(0,s.jsx)(d.code,{children:"os"}),"\uac00 ",(0,s.jsx)(d.code,{children:"'ios'"}),"\uc778 \uacbd\uc6b0 ",(0,s.jsx)(d.code,{children:"AppStorePurchaseData"})]})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"requestedAt"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"string (ISO 8601 format)"})}),(0,s.jsx)(d.td,{children:"\u2705"}),(0,s.jsxs)(d.td,{children:["\uacb0\uc81c \uc694\uccad\uc774 \ubc1c\uc0dd\ud55c \uc2dc\uac04 (",(0,s.jsx)(d.code,{children:"YYYY-MM-DD'T'HH:mm:ss.sss'Z'"}),")"]})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"purchasedAt"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"string (ISO 8601 format)"})}),(0,s.jsx)(d.td,{children:"\u2705"}),(0,s.jsxs)(d.td,{children:["\uacb0\uc81c\uac00 \uc644\ub8cc\ub41c \uc2dc\uac04 (",(0,s.jsx)(d.code,{children:"YYYY-MM-DD'T'HH:mm:ss.sss'Z'"}),")"]})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"verifiedAt"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"string (ISO 8601 format)"})}),(0,s.jsx)(d.td,{children:"\u2705"}),(0,s.jsxs)(d.td,{children:["\uacb0\uc81c \uac80\uc99d\uc774 \uc644\ub8cc\ub41c \uc2dc\uac04 (",(0,s.jsx)(d.code,{children:"YYYY-MM-DD'T'HH:mm:ss.sss'Z'"}),")"]})]})]})]}),"\n",(0,s.jsx)(d.hr,{}),"\n",(0,s.jsx)(d.h3,{id:"playstorepurchasedata",children:(0,s.jsx)(d.strong,{children:(0,s.jsx)(d.code,{children:"PlayStorePurchaseData"})})}),"\n",(0,s.jsx)(d.pre,{children:(0,s.jsx)(d.code,{className:"language-typescript",children:"declare type PlayStorePurchaseData = {\n  purchaseToken: string;\n  orderId: string;\n};\n"})}),"\n",(0,s.jsxs)(d.table,{children:[(0,s.jsx)(d.thead,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.th,{children:(0,s.jsx)(d.strong,{children:"\uc18d\uc131\uba85"})}),(0,s.jsx)(d.th,{children:(0,s.jsx)(d.strong,{children:"\ud0c0\uc785"})}),(0,s.jsx)(d.th,{children:(0,s.jsx)(d.strong,{children:"\ud544\uc218 \uc5ec\ubd80"})}),(0,s.jsx)(d.th,{children:(0,s.jsx)(d.strong,{children:"\uc124\uba85"})})]})}),(0,s.jsxs)(d.tbody,{children:[(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"purchaseToken"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"string"})}),(0,s.jsx)(d.td,{children:"\u2705"}),(0,s.jsx)(d.td,{children:"\uad6c\ub9e4\ub97c \uc2dd\ubcc4\ud558\uae30 \uc704\ud55c \uad6c\ub9e4 \ud1a0\ud070 ID (\uad6c\ub3c5\uc758 \uacbd\uc6b0 \ub3d9\uc77c ID \uc720\uc9c0)"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"orderId"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"string"})}),(0,s.jsx)(d.td,{children:"\u2705"}),(0,s.jsx)(d.td,{children:"\uad6c\ub9e4\uc640 \uc5f0\uacb0\ub41c \uc8fc\ubb38 ID"})]})]})]}),"\n",(0,s.jsxs)(d.p,{children:[(0,s.jsx)(d.strong,{children:"\uc18c\ubaa8\uc131"})," \ubc0f ",(0,s.jsx)(d.strong,{children:"\ube44\uc18c\ubaa8\uc131"})," \uc0c1\ud488\uc758 \uacbd\uc6b0 ",(0,s.jsx)(d.code,{children:"purchaseToken"}),"\uacfc ",(0,s.jsx)(d.code,{children:"orderId"})," \ubaa8\ub450 ",(0,s.jsx)(d.strong,{children:"unique"}),"\ud55c \uac12\uc784\uc774 \ubcf4\uc7a5\ub429\ub2c8\ub2e4.\n\ub530\ub77c\uc11c \uc720\uc800\uc758 \uad6c\ub9e4\ub97c \uc2dd\ubcc4\ud558\uae30 \uc704\ud55c ",(0,s.jsx)(d.strong,{children:"\uc2dd\ubcc4\uc790"}),"\ub85c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub610\ud55c ",(0,s.jsx)(d.strong,{children:"Google Play Console"}),"\uc5d0\uc11c \uad6c\ub9e4\ub0b4\uc5ed \uc2dd\ubcc4\uc2dc\uc5d0\ub3c4 \uc704 \ub370\uc774\ud130\uac00 \ud65c\uc6a9\ub429\ub2c8\ub2e4."]}),"\n",(0,s.jsx)(d.h3,{id:"appstorepurchasedata",children:(0,s.jsx)(d.strong,{children:(0,s.jsx)(d.code,{children:"AppStorePurchaseData"})})}),"\n",(0,s.jsx)(d.pre,{children:(0,s.jsx)(d.code,{className:"language-typescript",children:"declare type AppStorePurchaseData = {\n  originalTransactionId: string;\n  transactionId: string;\n};\n"})}),"\n",(0,s.jsxs)(d.table,{children:[(0,s.jsx)(d.thead,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.th,{children:(0,s.jsx)(d.strong,{children:"\uc18d\uc131\uba85"})}),(0,s.jsx)(d.th,{children:(0,s.jsx)(d.strong,{children:"\ud0c0\uc785"})}),(0,s.jsx)(d.th,{children:(0,s.jsx)(d.strong,{children:"\ud544\uc218 \uc5ec\ubd80"})}),(0,s.jsx)(d.th,{children:(0,s.jsx)(d.strong,{children:"\uc124\uba85"})})]})}),(0,s.jsxs)(d.tbody,{children:[(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"originalTransactionId"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"string"})}),(0,s.jsx)(d.td,{children:"\u2705"}),(0,s.jsx)(d.td,{children:"\ucd5c\ucd08 \uac70\ub798\uc758 \uace0\uc720 ID"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"transactionId"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"string"})}),(0,s.jsx)(d.td,{children:"\u2705"}),(0,s.jsx)(d.td,{children:"\ud604\uc7ac \uacb0\uc81c \uc694\uccad\uc758 \ud2b8\ub79c\uc7ad\uc158 ID"})]})]})]}),"\n",(0,s.jsxs)(d.p,{children:[(0,s.jsx)(d.strong,{children:"\uc18c\ubaa8\uc131"})," \ubc0f ",(0,s.jsx)(d.strong,{children:"\ube44\uc18c\ubaa8\uc131"})," \uc0c1\ud488\uc758 \uacbd\uc6b0 ",(0,s.jsx)(d.code,{children:"originalTransactionId"}),"\uc640 ",(0,s.jsx)(d.code,{children:"transactionId"})," \ubaa8\ub450 ",(0,s.jsx)(d.strong,{children:"unique"}),"\ud55c \uac12\uc784\uc774 \ubcf4\uc7a5\ub429\ub2c8\ub2e4.\n\ub530\ub77c\uc11c \uc720\uc800\uc758 \uad6c\ub9e4\ub97c \uc2dd\ubcc4\ud558\uae30 \uc704\ud55c \uc2dd\ubcc4\uc790\ub85c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,s.jsx)(d.h2,{id:"\uc694\uccad-\ubcf8\ubb38-\uc608\uc2dc",children:"\uc694\uccad \ubcf8\ubb38 \uc608\uc2dc"}),"\n",(0,s.jsx)(d.pre,{children:(0,s.jsx)(d.code,{className:"language-json",children:'{\n  "userId": "testUser",\n  "iapLogId": 1,\n  "nachoProductId": "NP-NXGLSTOEXK-0001",\n  "os": "ios",\n  "productId": "com.nachocode.example.consumable",\n  "productType": "consumable",\n  "quantity": 1,\n  "price": 1000,\n  "environment": "sandbox",\n  "data": {\n    "originalTransactionId": "2000000123456789",\n    "transactionId": "2000000123456789"\n  },\n  "requestedAt": "2025-02-19T02:00:31.280Z",\n  "purchasedAt": "2025-02-19T02:00:31.280Z",\n  "verifiedAt": "2025-02-19T02:00:31.280Z"\n}\n'})})]})}function x(e={}){const{wrapper:d}={...(0,c.R)(),...e.components};return d?(0,s.jsx)(d,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},8453:(e,d,n)=>{n.d(d,{R:()=>i,x:()=>t});var r=n(6540);const s={},c=r.createContext(s);function i(e){const d=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(d):{...d,...e}}),[d,e])}function t(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(c.Provider,{value:d},e.children)}}}]);