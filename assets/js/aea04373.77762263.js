"use strict";(self.webpackChunknachocode_developer_hub=self.webpackChunknachocode_developer_hub||[]).push([[3791],{1687:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>t,contentTitle:()=>c,default:()=>a,frontMatter:()=>r,metadata:()=>l,toc:()=>o});const l=JSON.parse('{"id":"sdk/namespaces/apple","title":"\uc560\ud50c (apple)","description":"nachocode SDK\uc758 `apple` \ub124\uc784\uc2a4\ud398\uc774\uc2a4\ub294 Apple \uc18c\uc15c \ub85c\uadf8\uc778\uacfc \uc0ac\uc6a9\uc790 \uc815\ubcf4 \uc870\ud68c \uae30\ub2a5\uc744 \uc81c\uacf5\ud558\uc5ec iOS \ub124\uc774\ud2f0\ube0c \uae30\ub2a5\uacfc\uc758 \ud1b5\ud569\uc744 \uc9c0\uc6d0\ud569\ub2c8\ub2e4.","source":"@site/docs/sdk/namespaces/apple.md","sourceDirName":"sdk/namespaces","slug":"/sdk/namespaces/apple","permalink":"/docs/sdk/namespaces/apple","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2,"description":"nachocode SDK\uc758 `apple` \ub124\uc784\uc2a4\ud398\uc774\uc2a4\ub294 Apple \uc18c\uc15c \ub85c\uadf8\uc778\uacfc \uc0ac\uc6a9\uc790 \uc815\ubcf4 \uc870\ud68c \uae30\ub2a5\uc744 \uc81c\uacf5\ud558\uc5ec iOS \ub124\uc774\ud2f0\ube0c \uae30\ub2a5\uacfc\uc758 \ud1b5\ud569\uc744 \uc9c0\uc6d0\ud569\ub2c8\ub2e4."},"sidebar":"docs","previous":{"title":"\uc560\ud50c\ub9ac\ucf00\uc774\uc158 (app)","permalink":"/docs/sdk/namespaces/app"},"next":{"title":"\uc778\uc99d (authentication)","permalink":"/docs/sdk/namespaces/authentication"}}');var i=n(4848),d=n(8453);const r={sidebar_position:2,description:"nachocode SDK\uc758 `apple` \ub124\uc784\uc2a4\ud398\uc774\uc2a4\ub294 Apple \uc18c\uc15c \ub85c\uadf8\uc778\uacfc \uc0ac\uc6a9\uc790 \uc815\ubcf4 \uc870\ud68c \uae30\ub2a5\uc744 \uc81c\uacf5\ud558\uc5ec iOS \ub124\uc774\ud2f0\ube0c \uae30\ub2a5\uacfc\uc758 \ud1b5\ud569\uc744 \uc9c0\uc6d0\ud569\ub2c8\ub2e4."},c="\uc560\ud50c (apple)",t={},o=[{value:"<strong>\uac1c\uc694</strong>",id:"\uac1c\uc694",level:2},{value:"<strong>\ud0c0\uc785 \uc815\uc758</strong>",id:"\ud0c0\uc785-\uc815\uc758",level:2},{value:"<strong><code>AppleResult</code></strong>",id:"appleresult",level:3},{value:"<strong><code>ApplePermissionTypes</code></strong>",id:"applepermissiontypes",level:3},{value:"<strong><code>AppleUserData</code></strong>",id:"appleuserdata",level:3},{value:"<strong>\uba54\uc11c\ub4dc \ubaa9\ub85d</strong>",id:"\uba54\uc11c\ub4dc-\ubaa9\ub85d",level:2},{value:"<strong>\uba54\uc11c\ub4dc \uc0c1\uc138</strong>",id:"\uba54\uc11c\ub4dc-\uc0c1\uc138",level:2},{value:"<strong><code>login(permissions: ApplePermissions, callback: (result: AppleResult, userData?: AppleUserData) =&gt; any): void</code></strong>",id:"loginpermissions-applepermissions-callback-result-appleresult-userdata-appleuserdata--any-void",level:3},{value:"\uc124\uba85 (<code>login</code>)",id:"\uc124\uba85-login",level:4},{value:"\ub9e4\uac1c\ubcc0\uc218 (<code>login</code>)",id:"\ub9e4\uac1c\ubcc0\uc218-login",level:4},{value:"\ubc18\ud658 \uac12 (<code>login</code>)",id:"\ubc18\ud658-\uac12-login",level:4},{value:"\uc0ac\uc6a9 \uc608\uc81c (<code>login</code>)",id:"\uc0ac\uc6a9-\uc608\uc81c-login",level:4},{value:"<strong><code>isLoggedIn(identifier: string, callback: (result: AppleResult, isLoggedIn: boolean) =&gt; any): void</code></strong>",id:"isloggedinidentifier-string-callback-result-appleresult-isloggedin-boolean--any-void",level:3},{value:"\uc124\uba85 (<code>isLoggedIn</code>)",id:"\uc124\uba85-isloggedin",level:4},{value:"\ub9e4\uac1c\ubcc0\uc218 (<code>isLoggedIn</code>)",id:"\ub9e4\uac1c\ubcc0\uc218-isloggedin",level:4},{value:"\ubc18\ud658 \uac12 (<code>isLoggedIn</code>)",id:"\ubc18\ud658-\uac12-isloggedin",level:4},{value:"\uc0ac\uc6a9 \uc608\uc81c (<code>isLoggedIn</code>)",id:"\uc0ac\uc6a9-\uc608\uc81c-isloggedin",level:4},{value:"<strong><code>getUserIdentifier(callback: (result: AppleResult, userIdentifier?: string) =&gt; any): void</code></strong>",id:"getuseridentifiercallback-result-appleresult-useridentifier-string--any-void",level:3},{value:"\uc124\uba85 (<code>getUserIdentifier</code>)",id:"\uc124\uba85-getuseridentifier",level:4},{value:"\ub9e4\uac1c\ubcc0\uc218 (<code>getUserIdentifier</code>)",id:"\ub9e4\uac1c\ubcc0\uc218-getuseridentifier",level:4},{value:"\ubc18\ud658 \uac12 (<code>getUserIdentifier</code>)",id:"\ubc18\ud658-\uac12-getuseridentifier",level:4},{value:"\uc0ac\uc6a9 \uc608\uc81c (<code>getUserIdentifier</code>)",id:"\uc0ac\uc6a9-\uc608\uc81c-getuseridentifier",level:4},{value:"<strong>\ucd94\uac00 \uc815\ubcf4</strong>",id:"\ucd94\uac00-\uc815\ubcf4",level:2}];function h(e){const s={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.header,{children:(0,i.jsxs)(s.h1,{id:"\uc560\ud50c-apple",children:["\uc560\ud50c (",(0,i.jsx)(s.code,{children:"apple"}),")"]})}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsxs)(s.p,{children:["\ud83d\udd14 ",(0,i.jsx)(s.strong,{children:"\ucd5c\uc2e0\ud654 \uc77c\uc790:"})," 2025-02-10"]}),"\n"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.img,{src:"https://img.shields.io/badge/iOS_only-gray?logo=apple",alt:"Static Badge"})}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"\uac1c\uc694",children:(0,i.jsx)(s.strong,{children:"\uac1c\uc694"})}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"apple"})," \ub124\uc784\uc2a4\ud398\uc774\uc2a4\ub294 ",(0,i.jsx)(s.strong,{children:"\ub514\ubc14\uc774\uc2a4\uc758 Apple \ub124\uc774\ud2f0\ube0c \uae30\ub2a5"}),"\uc744 \ud65c\uc6a9\ud560 \uc218 \uc788\ub3c4\ub85d \uc9c0\uc6d0\ud569\ub2c8\ub2e4.",(0,i.jsx)(s.br,{}),"\n","\ud604\uc7ac\ub294 ",(0,i.jsx)(s.strong,{children:"Apple \ub85c\uadf8\uc778"})," \ubc0f ",(0,i.jsx)(s.strong,{children:"\uc0ac\uc6a9\uc790 \uc815\ubcf4 \uc870\ud68c"})," \uae30\ub2a5\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4."]}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsxs)(s.p,{children:["\u26a0\ufe0f ",(0,i.jsx)(s.strong,{children:"\uc774 \ub124\uc784\uc2a4\ud398\uc774\uc2a4\ub294 \ud604\uc7ac iOS\uc5d0\uc11c\ub9cc \uc9c0\uc6d0\ub429\ub2c8\ub2e4."})]}),"\n"]}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h2,{id:"\ud0c0\uc785-\uc815\uc758",children:(0,i.jsx)(s.strong,{children:"\ud0c0\uc785 \uc815\uc758"})}),"\n",(0,i.jsx)(s.h3,{id:"appleresult",children:(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"AppleResult"})})}),"\n",(0,i.jsx)(s.p,{children:"Apple \ub85c\uadf8\uc778 \uc694\uccad\uc758 \uacb0\uacfc \uc0c1\ud0dc\ub97c \ub098\ud0c0\ub0b4\ub294 \uac1d\uccb4 \ud0c0\uc785\uc785\ub2c8\ub2e4."}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"\ud544\ub4dc"}),(0,i.jsx)(s.th,{children:"\ud0c0\uc785"}),(0,i.jsx)(s.th,{children:"\uc124\uba85"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"status"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"string"})}),(0,i.jsxs)(s.td,{children:["\uc694\uccad \uacb0\uacfc \uc0c1\ud0dc (",(0,i.jsx)(s.code,{children:"success"})," / ",(0,i.jsx)(s.code,{children:"error"}),")"]})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsxs)(s.td,{children:[(0,i.jsx)(s.code,{children:"errorCode"})," (",(0,i.jsx)(s.em,{children:"optional"}),")"]}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"string"})}),(0,i.jsx)(s.td,{children:"\uc624\ub958 \ucf54\ub4dc (\uc120\ud0dd\uc801)"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsxs)(s.td,{children:[(0,i.jsx)(s.code,{children:"message"})," (",(0,i.jsx)(s.em,{children:"optional"}),")"]}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"string"})}),(0,i.jsx)(s.td,{children:"\uc624\ub958 \uba54\uc2dc\uc9c0 (\uc120\ud0dd\uc801)"})]})]})]}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h3,{id:"applepermissiontypes",children:(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"ApplePermissionTypes"})})}),"\n",(0,i.jsx)(s.p,{children:"Apple \ub85c\uadf8\uc778 \uc694\uccad \uc2dc \uc694\uad6c\ud560 \uc218 \uc788\ub294 \uad8c\ud55c \ubaa9\ub85d\uc785\ub2c8\ub2e4."}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"\uac12"}),(0,i.jsx)(s.th,{children:"\uc124\uba85"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"email"})}),(0,i.jsx)(s.td,{children:"\uc0ac\uc6a9\uc790 \uc774\uba54\uc77c \uc815\ubcf4"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"fullName"})}),(0,i.jsx)(s.td,{children:"\uc0ac\uc6a9\uc790 \uc804\uccb4 \uc774\ub984 \uc815\ubcf4"})]})]})]}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h3,{id:"appleuserdata",children:(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"AppleUserData"})})}),"\n",(0,i.jsx)(s.p,{children:"Apple \ub85c\uadf8\uc778 \uc131\uacf5 \uc2dc \ubc18\ud658\ub418\ub294 \uc0ac\uc6a9\uc790 \uc815\ubcf4 \uac1d\uccb4\uc785\ub2c8\ub2e4."}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"\ud544\ub4dc"}),(0,i.jsx)(s.th,{children:"\ud0c0\uc785"}),(0,i.jsx)(s.th,{children:"\uc124\uba85"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"identifier"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"string"})}),(0,i.jsx)(s.td,{children:"Apple \uc0ac\uc6a9\uc790 \uace0\uc720 \uc2dd\ubcc4\uc790"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"token"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"string"})}),(0,i.jsx)(s.td,{children:"\uc0ac\uc6a9\uc790 \ud1a0\ud070"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"authorizationCode"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"string"})}),(0,i.jsx)(s.td,{children:"Apple \uc778\uc99d \ucf54\ub4dc"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsxs)(s.td,{children:[(0,i.jsx)(s.code,{children:"email"})," (",(0,i.jsx)(s.em,{children:"optional"}),")"]}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"string"})}),(0,i.jsx)(s.td,{children:"\uc0ac\uc6a9\uc790 \uc774\uba54\uc77c (\uc120\ud0dd\uc801)"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsxs)(s.td,{children:[(0,i.jsx)(s.code,{children:"name.familyName"})," (",(0,i.jsx)(s.em,{children:"optional"}),")"]}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"string"})}),(0,i.jsx)(s.td,{children:"\uc0ac\uc6a9\uc790 \uc131"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsxs)(s.td,{children:[(0,i.jsx)(s.code,{children:"name.givenName"})," (",(0,i.jsx)(s.em,{children:"optional"}),")"]}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"string"})}),(0,i.jsx)(s.td,{children:"\uc0ac\uc6a9\uc790 \uc774\ub984"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"[fields: string]"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"any"})}),(0,i.jsx)(s.td,{children:"\uae30\ud0c0 \uc0ac\uc6a9\uc790 \ub370\uc774\ud130 (\uc120\ud0dd\uc801)"})]})]})]}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h2,{id:"\uba54\uc11c\ub4dc-\ubaa9\ub85d",children:(0,i.jsx)(s.strong,{children:"\uba54\uc11c\ub4dc \ubaa9\ub85d"})}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"\uba54\uc11c\ub4dc"}),(0,i.jsx)(s.th,{children:"\uc124\uba85"}),(0,i.jsx)(s.th,{children:"\ucd94\uac00\ub41c \ubc84\uc804"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"#loginpermissions-applepermissions-callback-result-appleresult-userdata-appleuserdata--any-void",children:(0,i.jsx)(s.code,{children:"login(permissions, callback)"})})}),(0,i.jsx)(s.td,{children:"Apple \ub124\uc774\ud2f0\ube0c \uc18c\uc15c \ub85c\uadf8\uc778\uc744 \uc218\ud589\ud569\ub2c8\ub2e4."}),(0,i.jsx)(s.td,{children:"ver.1.4.0"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"#isloggedinidentifier-string-callback-result-appleresult-isloggedin-boolean--any-void",children:(0,i.jsx)(s.code,{children:"isLoggedIn(identifier, callback)"})})}),(0,i.jsx)(s.td,{children:"Apple \ub85c\uadf8\uc778 \uc0c1\ud0dc\ub97c \ud655\uc778\ud569\ub2c8\ub2e4."}),(0,i.jsx)(s.td,{children:"ver.1.4.0"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"#getuseridentifiercallback-result-appleresult-useridentifier-string--any-void",children:(0,i.jsx)(s.code,{children:"getUserIdentifier(callback)"})})}),(0,i.jsx)(s.td,{children:"Apple \uc0ac\uc6a9\uc790 \uace0\uc720 \uc2dd\ubcc4\uc790\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4."}),(0,i.jsx)(s.td,{children:"ver.1.4.0"})]})]})]}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h2,{id:"\uba54\uc11c\ub4dc-\uc0c1\uc138",children:(0,i.jsx)(s.strong,{children:"\uba54\uc11c\ub4dc \uc0c1\uc138"})}),"\n",(0,i.jsx)(s.h3,{id:"loginpermissions-applepermissions-callback-result-appleresult-userdata-appleuserdata--any-void",children:(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"login(permissions: ApplePermissions, callback: (result: AppleResult, userData?: AppleUserData) => any): void"})})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.em,{children:"since ver.1.4.0"})}),"\n"]}),"\n",(0,i.jsxs)(s.h4,{id:"\uc124\uba85-login",children:["\uc124\uba85 (",(0,i.jsx)(s.code,{children:"login"}),")"]}),"\n",(0,i.jsx)(s.p,{children:"Apple \ub124\uc774\ud2f0\ube0c \uc18c\uc15c \ub85c\uadf8\uc778\uc744 \uc218\ud589\ud558\uace0 \uc0ac\uc6a9\uc790 \uc815\ubcf4\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4."}),"\n",(0,i.jsxs)(s.h4,{id:"\ub9e4\uac1c\ubcc0\uc218-login",children:["\ub9e4\uac1c\ubcc0\uc218 (",(0,i.jsx)(s.code,{children:"login"}),")"]}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"\uc774\ub984"}),(0,i.jsx)(s.th,{children:"\ud0c0\uc785"}),(0,i.jsx)(s.th,{children:"\ud544\uc218 \uc5ec\ubd80"}),(0,i.jsx)(s.th,{children:"\uc124\uba85"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"permissions"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"ApplePermissions"})}),(0,i.jsx)(s.td,{children:"\u2705"}),(0,i.jsx)(s.td,{children:"\ub85c\uadf8\uc778 \uc694\uccad \uc2dc \uc694\uad6c\ud560 \uad8c\ud55c \ubaa9\ub85d"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"callback"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"(result: AppleResult, userData?: AppleUserData) => any"})}),(0,i.jsx)(s.td,{children:"\u2705"}),(0,i.jsx)(s.td,{children:"\uc694\uccad \uacb0\uacfc\uc640 \uc0ac\uc6a9\uc790 \uc815\ubcf4\ub97c \ubc18\ud658\ud558\ub294 \ud568\uc218"})]})]})]}),"\n",(0,i.jsxs)(s.h4,{id:"\ubc18\ud658-\uac12-login",children:["\ubc18\ud658 \uac12 (",(0,i.jsx)(s.code,{children:"login"}),")"]}),"\n",(0,i.jsxs)(s.p,{children:["\ud574\ub2f9 \uba54\uc11c\ub4dc\ub294 \ubc18\ud658 \uac12\uc744 \uac00\uc9c0\uc9c0 \uc54a\uc73c\uba70, \uacb0\uacfc\ub294 ",(0,i.jsx)(s.code,{children:"callback"}),"\uc744 \ud1b5\ud574 \ube44\ub3d9\uae30\uc801\uc73c\ub85c \uc81c\uacf5\ub429\ub2c8\ub2e4."]}),"\n",(0,i.jsxs)(s.h4,{id:"\uc0ac\uc6a9-\uc608\uc81c-login",children:["\uc0ac\uc6a9 \uc608\uc81c (",(0,i.jsx)(s.code,{children:"login"}),")"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-javascript",children:"// Apple \ub85c\uadf8\uc778 \uc694\uccad\nNachocode.apple.login(['email', 'fullName'], (result, userData) => {\n  if (result.status === 'success') {\n    console.log('Apple \ub85c\uadf8\uc778 \uc131\uacf5:', userData);\n    console.log('\ud1a0\ud070:', userData.token);\n    console.log('\uc778\uac00\ucf54\ub4dc:', userData.authorizationCode);\n    console.log('\uc774\uba54\uc77c:', userData.email);\n    console.log('\uc131:', userData.name?.familyName);\n    console.log('\uc774\ub984:', userData.name?.givenName);\n  } else {\n    console.error(`Apple \ub85c\uadf8\uc778 \uc2e4\ud328: ${result.message}`);\n  }\n});\n"})}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h3,{id:"isloggedinidentifier-string-callback-result-appleresult-isloggedin-boolean--any-void",children:(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"isLoggedIn(identifier: string, callback: (result: AppleResult, isLoggedIn: boolean) => any): void"})})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.em,{children:"since ver.1.4.0"})}),"\n"]}),"\n",(0,i.jsxs)(s.h4,{id:"\uc124\uba85-isloggedin",children:["\uc124\uba85 (",(0,i.jsx)(s.code,{children:"isLoggedIn"}),")"]}),"\n",(0,i.jsxs)(s.p,{children:["Apple \uc0ac\uc6a9\uc790 \uace0\uc720 \uc2dd\ubcc4\uc790(",(0,i.jsx)(s.code,{children:"identifier"}),")\ub97c \uae30\ubc18\uc73c\ub85c \ud604\uc7ac \uc0ac\uc6a9\uc790\uac00 \ub85c\uadf8\uc778 \uc0c1\ud0dc\uc778\uc9c0 \ud655\uc778\ud569\ub2c8\ub2e4."]}),"\n",(0,i.jsxs)(s.h4,{id:"\ub9e4\uac1c\ubcc0\uc218-isloggedin",children:["\ub9e4\uac1c\ubcc0\uc218 (",(0,i.jsx)(s.code,{children:"isLoggedIn"}),")"]}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"\uc774\ub984"}),(0,i.jsx)(s.th,{children:"\ud0c0\uc785"}),(0,i.jsx)(s.th,{children:"\ud544\uc218 \uc5ec\ubd80"}),(0,i.jsx)(s.th,{children:"\uc124\uba85"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"identifier"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"string"})}),(0,i.jsx)(s.td,{children:"\u2705"}),(0,i.jsx)(s.td,{children:"Apple \uc0ac\uc6a9\uc790 \uace0\uc720 \uc2dd\ubcc4\uc790"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"callback"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"(result: AppleResult, isLoggedIn: boolean) => any"})}),(0,i.jsx)(s.td,{children:"\u2705"}),(0,i.jsx)(s.td,{children:"\ub85c\uadf8\uc778 \uc5ec\ubd80\ub97c \ubc18\ud658\ud558\ub294 \ud568\uc218"})]})]})]}),"\n",(0,i.jsxs)(s.h4,{id:"\ubc18\ud658-\uac12-isloggedin",children:["\ubc18\ud658 \uac12 (",(0,i.jsx)(s.code,{children:"isLoggedIn"}),")"]}),"\n",(0,i.jsxs)(s.p,{children:["\ud574\ub2f9 \uba54\uc11c\ub4dc\ub294 \ubc18\ud658 \uac12\uc744 \uac00\uc9c0\uc9c0 \uc54a\uc73c\uba70, \uacb0\uacfc\ub294 ",(0,i.jsx)(s.code,{children:"callback"}),"\uc744 \ud1b5\ud574 \ube44\ub3d9\uae30\uc801\uc73c\ub85c \uc81c\uacf5\ub429\ub2c8\ub2e4."]}),"\n",(0,i.jsxs)(s.h4,{id:"\uc0ac\uc6a9-\uc608\uc81c-isloggedin",children:["\uc0ac\uc6a9 \uc608\uc81c (",(0,i.jsx)(s.code,{children:"isLoggedIn"}),")"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-javascript",children:"// Apple \ub85c\uadf8\uc778 \uc0c1\ud0dc \ud655\uc778\nNachocode.apple.isLoggedIn('user_identifier_here', (result, isLoggedIn) => {\n  console.log('\uc870\ud68c \uc131\uacf5 \uc5ec\ubd80:', result.status);\n  if (isLoggedIn) {\n    console.log('\uc0ac\uc6a9\uc790\ub294 \ud604\uc7ac Apple\uc5d0 \ub85c\uadf8\uc778\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4.');\n  } else {\n    console.log('Apple \ub85c\uadf8\uc778\uc774 \ub418\uc5b4 \uc788\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.');\n  }\n});\n"})}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h3,{id:"getuseridentifiercallback-result-appleresult-useridentifier-string--any-void",children:(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"getUserIdentifier(callback: (result: AppleResult, userIdentifier?: string) => any): void"})})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.em,{children:"since ver.1.4.0"})}),"\n"]}),"\n",(0,i.jsxs)(s.h4,{id:"\uc124\uba85-getuseridentifier",children:["\uc124\uba85 (",(0,i.jsx)(s.code,{children:"getUserIdentifier"}),")"]}),"\n",(0,i.jsx)(s.p,{children:"Apple \uc0ac\uc6a9\uc790 \uace0\uc720 \uc2dd\ubcc4\uc790\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4."}),"\n",(0,i.jsxs)(s.h4,{id:"\ub9e4\uac1c\ubcc0\uc218-getuseridentifier",children:["\ub9e4\uac1c\ubcc0\uc218 (",(0,i.jsx)(s.code,{children:"getUserIdentifier"}),")"]}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"\uc774\ub984"}),(0,i.jsx)(s.th,{children:"\ud0c0\uc785"}),(0,i.jsx)(s.th,{children:"\ud544\uc218 \uc5ec\ubd80"}),(0,i.jsx)(s.th,{children:"\uc124\uba85"})]})}),(0,i.jsx)(s.tbody,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"callback"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"(result: AppleResult, userIdentifier?: string) => any"})}),(0,i.jsx)(s.td,{children:"\u2705"}),(0,i.jsx)(s.td,{children:"Apple \uc0ac\uc6a9\uc790 \uc2dd\ubcc4\uc790\ub97c \ubc18\ud658\ud558\ub294 \ud568\uc218"})]})})]}),"\n",(0,i.jsxs)(s.h4,{id:"\ubc18\ud658-\uac12-getuseridentifier",children:["\ubc18\ud658 \uac12 (",(0,i.jsx)(s.code,{children:"getUserIdentifier"}),")"]}),"\n",(0,i.jsxs)(s.p,{children:["\ud574\ub2f9 \uba54\uc11c\ub4dc\ub294 \ubc18\ud658 \uac12\uc744 \uac00\uc9c0\uc9c0 \uc54a\uc73c\uba70, \uacb0\uacfc\ub294 ",(0,i.jsx)(s.code,{children:"callback"}),"\uc744 \ud1b5\ud574 \ube44\ub3d9\uae30\uc801\uc73c\ub85c \uc81c\uacf5\ub429\ub2c8\ub2e4."]}),"\n",(0,i.jsxs)(s.h4,{id:"\uc0ac\uc6a9-\uc608\uc81c-getuseridentifier",children:["\uc0ac\uc6a9 \uc608\uc81c (",(0,i.jsx)(s.code,{children:"getUserIdentifier"}),")"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-javascript",children:"// Apple \uc0ac\uc6a9\uc790 \uace0\uc720 \uc2dd\ubcc4\uc790 \uc870\ud68c\nNachocode.apple.getUserIdentifier((result, userIdentifier) => {\n  if (result.status === 'success') {\n    console.log(`\uc0ac\uc6a9\uc790 \uc2dd\ubcc4\uc790: ${userIdentifier}`);\n  } else {\n    console.error(`\uc0ac\uc6a9\uc790 \uc2dd\ubcc4\uc790 \uc870\ud68c \uc2e4\ud328: ${result.message}`);\n  }\n});\n"})}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h2,{id:"\ucd94\uac00-\uc815\ubcf4",children:(0,i.jsx)(s.strong,{children:"\ucd94\uac00 \uc815\ubcf4"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Apple \ub124\uc784\uc2a4\ud398\uc774\uc2a4\ub294 ",(0,i.jsx)(s.strong,{children:"\ud604\uc7ac iOS\uc5d0\uc11c\ub9cc \ub3d9\uc791"}),"\ud569\ub2c8\ub2e4. Android \ubc0f \uae30\ud0c0 \ud658\uacbd\uc5d0\uc11c\ub294 \ucd94\ud6c4 \uc9c0\uc6d0\ub420 \uc608\uc815\uc785\ub2c8\ub2e4."]}),"\n",(0,i.jsx)(s.li,{children:"\uc0ac\uc6a9\uc790\uc758 \uc774\uba54\uc77c \ubc0f \uc774\ub984 \uc815\ubcf4\ub294 \ucd5c\ucd08 \ub85c\uadf8\uc778 \uc2dc\uc5d0\ub9cc \uc81c\uacf5\ub420 \uc218 \uc788\uc73c\uba70, \uc774\ud6c4 \uc7ac\ub85c\uadf8\uc778 \uc2dc \ubc18\ud658\ub418\uc9c0 \uc54a\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),"\n"]}),"\n",(0,i.jsx)(s.hr,{})]})}function a(e={}){const{wrapper:s}={...(0,d.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>r,x:()=>c});var l=n(6540);const i={},d=l.createContext(i);function r(e){const s=l.useContext(d);return l.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),l.createElement(d.Provider,{value:s},e.children)}}}]);