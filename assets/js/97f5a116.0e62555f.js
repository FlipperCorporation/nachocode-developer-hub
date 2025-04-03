"use strict";(self.webpackChunknachocode_developer_hub=self.webpackChunknachocode_developer_hub||[]).push([[8227],{2431:(e,d,n)=>{n.r(d),n.d(d,{assets:()=>l,contentTitle:()=>c,default:()=>o,frontMatter:()=>a,metadata:()=>s,toc:()=>i});const s=JSON.parse('{"id":"sdk/namespaces/preference","title":"\ub0b4\ubd80 \uc800\uc7a5\uc18c (preference)","description":"nachocode SDK\uc758 preference \ub124\uc784\uc2a4\ud398\uc774\uc2a4\ub97c \uc0ac\uc6a9\ud574 \uc571\uc758 \ub124\uc774\ud2f0\ube0c \ub0b4\ubd80 \uc800\uc7a5\uc18c\uc5d0 \ub370\uc774\ud130\ub97c \uc800\uc7a5, \uc870\ud68c \ubc0f \uc0ad\uc81c\ud558\uc5ec \uc571 \uc124\uc815\uc774\ub098 \uc0ac\uc6a9\uc790 \ub370\uc774\ud130\ub97c \uac04\ud3b8\ud558\uac8c \uad00\ub9ac\ud558\uc138\uc694.","source":"@site/docs/sdk/namespaces/preference.md","sourceDirName":"sdk/namespaces","slug":"/sdk/namespaces/preference","permalink":"/docs/sdk/namespaces/preference","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":13,"frontMatter":{"sidebar_position":13,"description":"nachocode SDK\uc758 preference \ub124\uc784\uc2a4\ud398\uc774\uc2a4\ub97c \uc0ac\uc6a9\ud574 \uc571\uc758 \ub124\uc774\ud2f0\ube0c \ub0b4\ubd80 \uc800\uc7a5\uc18c\uc5d0 \ub370\uc774\ud130\ub97c \uc800\uc7a5, \uc870\ud68c \ubc0f \uc0ad\uc81c\ud558\uc5ec \uc571 \uc124\uc815\uc774\ub098 \uc0ac\uc6a9\uc790 \ub370\uc774\ud130\ub97c \uac04\ud3b8\ud558\uac8c \uad00\ub9ac\ud558\uc138\uc694."},"sidebar":"docs","previous":{"title":"\uad8c\ud55c (permission)","permalink":"/docs/sdk/namespaces/permission"},"next":{"title":"\ud478\uc2dc \uc54c\ub9bc (push)","permalink":"/docs/sdk/namespaces/push"}}');var t=n(4848),r=n(8453);const a={sidebar_position:13,description:"nachocode SDK\uc758 preference \ub124\uc784\uc2a4\ud398\uc774\uc2a4\ub97c \uc0ac\uc6a9\ud574 \uc571\uc758 \ub124\uc774\ud2f0\ube0c \ub0b4\ubd80 \uc800\uc7a5\uc18c\uc5d0 \ub370\uc774\ud130\ub97c \uc800\uc7a5, \uc870\ud68c \ubc0f \uc0ad\uc81c\ud558\uc5ec \uc571 \uc124\uc815\uc774\ub098 \uc0ac\uc6a9\uc790 \ub370\uc774\ud130\ub97c \uac04\ud3b8\ud558\uac8c \uad00\ub9ac\ud558\uc138\uc694."},c="\ub0b4\ubd80 \uc800\uc7a5\uc18c (preference)",l={},i=[{value:"<strong>\uac1c\uc694</strong>",id:"\uac1c\uc694",level:2},{value:"<strong>\uba54\uc11c\ub4dc \ubaa9\ub85d</strong>",id:"\uba54\uc11c\ub4dc-\ubaa9\ub85d",level:2},{value:"<strong>\uba54\uc11c\ub4dc \uc0c1\uc138</strong>",id:"\uba54\uc11c\ub4dc-\uc0c1\uc138",level:2},{value:"<strong><code>setData(key: string, data: string): void</code></strong>",id:"setdatakey-string-data-string-void",level:3},{value:"\uc124\uba85 (<code>setData</code>)",id:"\uc124\uba85-setdata",level:4},{value:"\ub9e4\uac1c\ubcc0\uc218 (<code>setData</code>)",id:"\ub9e4\uac1c\ubcc0\uc218-setdata",level:4},{value:"\ubc18\ud658 \uac12 (<code>setData</code>)",id:"\ubc18\ud658-\uac12-setdata",level:4},{value:"\uc0ac\uc6a9 \uc608\uc81c (<code>setData</code>)",id:"\uc0ac\uc6a9-\uc608\uc81c-setdata",level:4},{value:"<strong><code>getData(key: string, callback: (data: string) =&gt; any): void</code></strong>",id:"getdatakey-string-callback-data-string--any-void",level:3},{value:"\uc124\uba85 (<code>getData</code>)",id:"\uc124\uba85-getdata",level:4},{value:"\ub9e4\uac1c\ubcc0\uc218 (<code>getData</code>)",id:"\ub9e4\uac1c\ubcc0\uc218-getdata",level:4},{value:"\ubc18\ud658 \uac12 (<code>getData</code>)",id:"\ubc18\ud658-\uac12-getdata",level:4},{value:"\uc0ac\uc6a9 \uc608\uc81c (<code>getData</code>)",id:"\uc0ac\uc6a9-\uc608\uc81c-getdata",level:4},{value:"<strong><code>deleteData(key: string): void</code></strong>",id:"deletedatakey-string-void",level:3},{value:"\uc124\uba85 (<code>deleteData</code>)",id:"\uc124\uba85-deletedata",level:4},{value:"\ub9e4\uac1c\ubcc0\uc218 (<code>deleteData</code>)",id:"\ub9e4\uac1c\ubcc0\uc218-deletedata",level:4},{value:"\ubc18\ud658 \uac12 (<code>deleteData</code>)",id:"\ubc18\ud658-\uac12-deletedata",level:4},{value:"\uc0ac\uc6a9 \uc608\uc81c (<code>deleteData</code>)",id:"\uc0ac\uc6a9-\uc608\uc81c-deletedata",level:4},{value:"<strong>\uc0ac\uc6a9 \uc608\uc81c</strong>",id:"\uc0ac\uc6a9-\uc608\uc81c",level:2},{value:"<strong>\uc608\uc81c 1: \ub370\uc774\ud130 \uc800\uc7a5 \ubc0f \uc870\ud68c</strong>",id:"\uc608\uc81c-1-\ub370\uc774\ud130-\uc800\uc7a5-\ubc0f-\uc870\ud68c",level:3},{value:"<strong>\uc608\uc81c 2: \ub370\uc774\ud130 \uc0ad\uc81c \ud6c4 \uc870\ud68c</strong>",id:"\uc608\uc81c-2-\ub370\uc774\ud130-\uc0ad\uc81c-\ud6c4-\uc870\ud68c",level:3}];function h(e){const d={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(d.header,{children:(0,t.jsxs)(d.h1,{id:"\ub0b4\ubd80-\uc800\uc7a5\uc18c-preference",children:["\ub0b4\ubd80 \uc800\uc7a5\uc18c (",(0,t.jsx)(d.code,{children:"preference"}),")"]})}),"\n",(0,t.jsxs)(d.blockquote,{children:["\n",(0,t.jsxs)(d.p,{children:["\ud83d\udd14 ",(0,t.jsx)(d.strong,{children:"\ucd5c\uc2e0\ud654 \uc77c\uc790:"})," 2025-02-07"]}),"\n"]}),"\n",(0,t.jsx)(d.h2,{id:"\uac1c\uc694",children:(0,t.jsx)(d.strong,{children:"\uac1c\uc694"})}),"\n",(0,t.jsxs)(d.p,{children:[(0,t.jsx)(d.code,{children:"preference"})," \ub124\uc784\uc2a4\ud398\uc774\uc2a4\ub294 ",(0,t.jsx)(d.strong,{children:"\ub124\uc774\ud2f0\ube0c \ud658\uacbd\uc758 \ub0b4\ubd80 \uc800\uc7a5\uc18c\ub97c \ud65c\uc6a9\ud558\uc5ec \uc571 \ub0b4 \ub370\uc774\ud130\ub97c \uc800\uc7a5, \uc870\ud68c \ubc0f \uc0ad\uc81c\ud558\ub294 \uae30\ub2a5"}),"\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4.",(0,t.jsx)(d.br,{}),"\n","\uc774\ub97c \ud1b5\ud574 ",(0,t.jsx)(d.strong,{children:"\uc571 \ub0b4\ubd80 \uc124\uc815, \uc0ac\uc6a9\uc790 \uc815\ubcf4, \uc784\uc2dc \ub370\uc774\ud130 \ub4f1"}),"\uc744 \uc800\uc7a5\ud558\uace0 \uc720\uc9c0\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,t.jsx)(d.hr,{}),"\n",(0,t.jsx)(d.h2,{id:"\uba54\uc11c\ub4dc-\ubaa9\ub85d",children:(0,t.jsx)(d.strong,{children:"\uba54\uc11c\ub4dc \ubaa9\ub85d"})}),"\n",(0,t.jsxs)(d.table,{children:[(0,t.jsx)(d.thead,{children:(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.th,{children:"\uba54\uc11c\ub4dc"}),(0,t.jsx)(d.th,{children:"\uc124\uba85"}),(0,t.jsx)(d.th,{children:"\ucd94\uac00\ub41c \ubc84\uc804"})]})}),(0,t.jsxs)(d.tbody,{children:[(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:(0,t.jsx)(d.a,{href:"#setdatakey-string-data-string-void",children:(0,t.jsx)(d.code,{children:"setData(key, data)"})})}),(0,t.jsx)(d.td,{children:"\uc9c0\uc815\ud55c \ud0a4\ub85c \ub370\uc774\ud130\ub97c \uc800\uc7a5\ud569\ub2c8\ub2e4."}),(0,t.jsx)(d.td,{children:"ver.1.2.0"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:(0,t.jsx)(d.a,{href:"#getdatakey-string-callback-data-string--any-void",children:(0,t.jsx)(d.code,{children:"getData(key, callback)"})})}),(0,t.jsx)(d.td,{children:"\uc9c0\uc815\ud55c \ud0a4\uc758 \ub370\uc774\ud130\ub97c \ubd88\ub7ec\uc635\ub2c8\ub2e4."}),(0,t.jsx)(d.td,{children:"ver.1.2.0"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:(0,t.jsx)(d.a,{href:"#deletedatakey-string-void",children:(0,t.jsx)(d.code,{children:"deleteData(key)"})})}),(0,t.jsx)(d.td,{children:"\uc9c0\uc815\ud55c \ud0a4\uc758 \ub370\uc774\ud130\ub97c \uc0ad\uc81c\ud569\ub2c8\ub2e4."}),(0,t.jsx)(d.td,{children:"ver.1.3.0"})]})]})]}),"\n",(0,t.jsx)(d.hr,{}),"\n",(0,t.jsx)(d.h2,{id:"\uba54\uc11c\ub4dc-\uc0c1\uc138",children:(0,t.jsx)(d.strong,{children:"\uba54\uc11c\ub4dc \uc0c1\uc138"})}),"\n",(0,t.jsx)(d.h3,{id:"setdatakey-string-data-string-void",children:(0,t.jsx)(d.strong,{children:(0,t.jsx)(d.code,{children:"setData(key: string, data: string): void"})})}),"\n",(0,t.jsxs)(d.ul,{children:["\n",(0,t.jsx)(d.li,{children:(0,t.jsx)(d.em,{children:"since ver.1.2.0"})}),"\n"]}),"\n",(0,t.jsxs)(d.h4,{id:"\uc124\uba85-setdata",children:["\uc124\uba85 (",(0,t.jsx)(d.code,{children:"setData"}),")"]}),"\n",(0,t.jsxs)(d.p,{children:["\uc571 \ub0b4\ubd80 \uc800\uc7a5\uc18c\uc5d0 ",(0,t.jsxs)(d.strong,{children:["\uc9c0\uc815\ud55c \ud0a4(",(0,t.jsx)(d.code,{children:"key"}),")\ub85c \ub370\uc774\ud130\ub97c \uc800\uc7a5"]}),"\ud569\ub2c8\ub2e4.",(0,t.jsx)(d.br,{}),"\n","\uc800\uc7a5\ub41c \ub370\uc774\ud130\ub294 \uc571\uc774 \uc885\ub8cc\ub418\ub354\ub77c\ub3c4 \uc720\uc9c0\ub429\ub2c8\ub2e4."]}),"\n",(0,t.jsxs)(d.h4,{id:"\ub9e4\uac1c\ubcc0\uc218-setdata",children:["\ub9e4\uac1c\ubcc0\uc218 (",(0,t.jsx)(d.code,{children:"setData"}),")"]}),"\n",(0,t.jsxs)(d.table,{children:[(0,t.jsx)(d.thead,{children:(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.th,{children:"\uc774\ub984"}),(0,t.jsx)(d.th,{children:"\ud0c0\uc785"}),(0,t.jsx)(d.th,{children:"\ud544\uc218 \uc5ec\ubd80"}),(0,t.jsx)(d.th,{children:"\uc124\uba85"})]})}),(0,t.jsxs)(d.tbody,{children:[(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"key"})}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"string"})}),(0,t.jsx)(d.td,{children:"\u2705"}),(0,t.jsx)(d.td,{children:"\uc800\uc7a5\ud560 \ub370\uc774\ud130\uc758 \ud0a4 \uac12"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"data"})}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"string"})}),(0,t.jsx)(d.td,{children:"\u2705"}),(0,t.jsx)(d.td,{children:"\uc800\uc7a5\ud560 \ub370\uc774\ud130 \uac12"})]})]})]}),"\n",(0,t.jsxs)(d.h4,{id:"\ubc18\ud658-\uac12-setdata",children:["\ubc18\ud658 \uac12 (",(0,t.jsx)(d.code,{children:"setData"}),")"]}),"\n",(0,t.jsx)(d.p,{children:"\ud574\ub2f9 \uba54\uc11c\ub4dc\ub294 \ubc18\ud658 \uac12\uc744 \uac00\uc9c0\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."}),"\n",(0,t.jsxs)(d.h4,{id:"\uc0ac\uc6a9-\uc608\uc81c-setdata",children:["\uc0ac\uc6a9 \uc608\uc81c (",(0,t.jsx)(d.code,{children:"setData"}),")"]}),"\n",(0,t.jsx)(d.pre,{children:(0,t.jsx)(d.code,{className:"language-javascript",children:"// ex. 'sample'\uc744 \ud0a4\ub85c \uc571 \ub0b4\ubd80 \uc800\uc7a5\uc18c\uc5d0 \ub370\uc774\ud130\ub97c \uc800\uc7a5\ud569\ub2c8\ub2e4.\nNachocode.preference.setData('sample', 'sample data');\n\n// ex. 'sample'\uc744 \ud0a4\ub85c \uc571 \ub0b4\ubd80 \uc800\uc7a5\uc18c\uc758 \ub370\uc774\ud130\ub97c \uc870\ud68c\ud569\ub2c8\ub2e4.\nNachocode.preference.setData('sample', data => {\n  if (data) {\n    alert(data); // sample data\n  } else {\n    alert('No received data!');\n  }\n});\n"})}),"\n",(0,t.jsx)(d.hr,{}),"\n",(0,t.jsx)(d.h3,{id:"getdatakey-string-callback-data-string--any-void",children:(0,t.jsx)(d.strong,{children:(0,t.jsx)(d.code,{children:"getData(key: string, callback: (data: string) => any): void"})})}),"\n",(0,t.jsxs)(d.ul,{children:["\n",(0,t.jsx)(d.li,{children:(0,t.jsx)(d.em,{children:"since ver.1.2.0"})}),"\n"]}),"\n",(0,t.jsxs)(d.h4,{id:"\uc124\uba85-getdata",children:["\uc124\uba85 (",(0,t.jsx)(d.code,{children:"getData"}),")"]}),"\n",(0,t.jsxs)(d.p,{children:["\uc571 \ub0b4\ubd80 \uc800\uc7a5\uc18c\uc5d0\uc11c ",(0,t.jsxs)(d.strong,{children:["\uc9c0\uc815\ud55c \ud0a4(",(0,t.jsx)(d.code,{children:"key"}),")\uc758 \ub370\uc774\ud130\ub97c \uc870\ud68c"]}),"\ud569\ub2c8\ub2e4.",(0,t.jsx)(d.br,{}),"\n","\ub370\uc774\ud130\uac00 \uc874\uc7ac\ud558\ub294 \uacbd\uc6b0, \ucf5c\ubc31 \ud568\uc218\ub85c \ud574\ub2f9 \ub370\uc774\ud130\ub97c \uc804\ub2ec\ud569\ub2c8\ub2e4."]}),"\n",(0,t.jsxs)(d.h4,{id:"\ub9e4\uac1c\ubcc0\uc218-getdata",children:["\ub9e4\uac1c\ubcc0\uc218 (",(0,t.jsx)(d.code,{children:"getData"}),")"]}),"\n",(0,t.jsxs)(d.table,{children:[(0,t.jsx)(d.thead,{children:(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.th,{children:"\uc774\ub984"}),(0,t.jsx)(d.th,{children:"\ud0c0\uc785"}),(0,t.jsx)(d.th,{children:"\ud544\uc218 \uc5ec\ubd80"}),(0,t.jsx)(d.th,{children:"\uc124\uba85"})]})}),(0,t.jsxs)(d.tbody,{children:[(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"key"})}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"string"})}),(0,t.jsx)(d.td,{children:"\u2705"}),(0,t.jsx)(d.td,{children:"\uc870\ud68c\ud560 \ub370\uc774\ud130\uc758 \ud0a4 \uac12"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"callback"})}),(0,t.jsxs)(d.td,{children:[(0,t.jsx)(d.code,{children:"(data: string) => any"})," ",(0,t.jsx)(d.em,{children:"(\uc635\uc158)"})]}),(0,t.jsx)(d.td,{children:"\u2705"}),(0,t.jsx)(d.td,{children:"\uc870\ud68c\ud55c \ub370\uc774\ud130\ub97c \uc804\ub2ec\ud558\ub294 \ud568\uc218"})]})]})]}),"\n",(0,t.jsxs)(d.h4,{id:"\ubc18\ud658-\uac12-getdata",children:["\ubc18\ud658 \uac12 (",(0,t.jsx)(d.code,{children:"getData"}),")"]}),"\n",(0,t.jsxs)(d.p,{children:["\ud574\ub2f9 \uba54\uc11c\ub4dc\ub294 \ubc18\ud658 \uac12\uc744 \uac00\uc9c0\uc9c0 \uc54a\uc73c\uba70, \uacb0\uacfc\ub294 ",(0,t.jsx)(d.code,{children:"callback"}),"\uc744 \ud1b5\ud574 \ube44\ub3d9\uae30\uc801\uc73c\ub85c \uc81c\uacf5\ub429\ub2c8\ub2e4."]}),"\n",(0,t.jsxs)(d.h4,{id:"\uc0ac\uc6a9-\uc608\uc81c-getdata",children:["\uc0ac\uc6a9 \uc608\uc81c (",(0,t.jsx)(d.code,{children:"getData"}),")"]}),"\n",(0,t.jsx)(d.pre,{children:(0,t.jsx)(d.code,{className:"language-javascript",children:"// ex. 'sample'\uc744 \ud0a4\ub85c \uc571 \ub0b4\ubd80 \uc800\uc7a5\uc18c\uc758 \ub370\uc774\ud130\ub97c \uc870\ud68c\ud569\ub2c8\ub2e4.\nNachocode.preference.getData('sample', data => {\n  if (data) {\n    alert('Received Data : ' + data);\n  } else {\n    alert('No received data!');\n  }\n});\n"})}),"\n",(0,t.jsx)(d.hr,{}),"\n",(0,t.jsx)(d.h3,{id:"deletedatakey-string-void",children:(0,t.jsx)(d.strong,{children:(0,t.jsx)(d.code,{children:"deleteData(key: string): void"})})}),"\n",(0,t.jsxs)(d.ul,{children:["\n",(0,t.jsx)(d.li,{children:(0,t.jsx)(d.em,{children:"since ver.1.3.0"})}),"\n"]}),"\n",(0,t.jsxs)(d.h4,{id:"\uc124\uba85-deletedata",children:["\uc124\uba85 (",(0,t.jsx)(d.code,{children:"deleteData"}),")"]}),"\n",(0,t.jsxs)(d.p,{children:["\uc571 \ub0b4\ubd80 \uc800\uc7a5\uc18c\uc5d0\uc11c ",(0,t.jsxs)(d.strong,{children:["\uc9c0\uc815\ud55c \ud0a4(",(0,t.jsx)(d.code,{children:"key"}),")\uc758 \ub370\uc774\ud130\ub97c \uc0ad\uc81c"]}),"\ud569\ub2c8\ub2e4."]}),"\n",(0,t.jsxs)(d.h4,{id:"\ub9e4\uac1c\ubcc0\uc218-deletedata",children:["\ub9e4\uac1c\ubcc0\uc218 (",(0,t.jsx)(d.code,{children:"deleteData"}),")"]}),"\n",(0,t.jsxs)(d.table,{children:[(0,t.jsx)(d.thead,{children:(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.th,{children:"\uc774\ub984"}),(0,t.jsx)(d.th,{children:"\ud0c0\uc785"}),(0,t.jsx)(d.th,{children:"\ud544\uc218 \uc5ec\ubd80"}),(0,t.jsx)(d.th,{children:"\uc124\uba85"})]})}),(0,t.jsx)(d.tbody,{children:(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"key"})}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"string"})}),(0,t.jsx)(d.td,{children:"\u2705"}),(0,t.jsx)(d.td,{children:"\uc0ad\uc81c\ud560 \ub370\uc774\ud130\uc758 \ud0a4 \uac12"})]})})]}),"\n",(0,t.jsxs)(d.h4,{id:"\ubc18\ud658-\uac12-deletedata",children:["\ubc18\ud658 \uac12 (",(0,t.jsx)(d.code,{children:"deleteData"}),")"]}),"\n",(0,t.jsx)(d.p,{children:"\ud574\ub2f9 \uba54\uc11c\ub4dc\ub294 \ubc18\ud658 \uac12\uc744 \uac00\uc9c0\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."}),"\n",(0,t.jsxs)(d.h4,{id:"\uc0ac\uc6a9-\uc608\uc81c-deletedata",children:["\uc0ac\uc6a9 \uc608\uc81c (",(0,t.jsx)(d.code,{children:"deleteData"}),")"]}),"\n",(0,t.jsx)(d.pre,{children:(0,t.jsx)(d.code,{className:"language-javascript",children:"// ex. 'sample'\uc744 \ud0a4\ub85c \uc571 \ub0b4\ubd80 \uc800\uc7a5\uc18c\uc758 \ub370\uc774\ud130\ub97c \uc0ad\uc81c\ud569\ub2c8\ub2e4.\nNachocode.preference.deleteData('sample');\n"})}),"\n",(0,t.jsx)(d.hr,{}),"\n",(0,t.jsx)(d.h2,{id:"\uc0ac\uc6a9-\uc608\uc81c",children:(0,t.jsx)(d.strong,{children:"\uc0ac\uc6a9 \uc608\uc81c"})}),"\n",(0,t.jsx)(d.h3,{id:"\uc608\uc81c-1-\ub370\uc774\ud130-\uc800\uc7a5-\ubc0f-\uc870\ud68c",children:(0,t.jsx)(d.strong,{children:"\uc608\uc81c 1: \ub370\uc774\ud130 \uc800\uc7a5 \ubc0f \uc870\ud68c"})}),"\n",(0,t.jsx)(d.pre,{children:(0,t.jsx)(d.code,{className:"language-javascript",children:"// 'userPreferences' \ud0a4\ub85c \uc0ac\uc6a9\uc790 \uc124\uc815\uc744 \uc800\uc7a5\ud569\ub2c8\ub2e4.\nNachocode.preference.setData(\n  'userPreferences',\n  JSON.stringify({ theme: 'dark', language: 'ko' })\n);\n\n// \uc800\uc7a5\ub41c \ub370\uc774\ud130\ub97c \ubd88\ub7ec\uc635\ub2c8\ub2e4.\nNachocode.preference.getData('userPreferences', data => {\n  if (data) {\n    const preferences = JSON.parse(data);\n    console.log(`\ud14c\ub9c8: ${preferences.theme}, \uc5b8\uc5b4: ${preferences.language}`);\n  } else {\n    console.log('\uc800\uc7a5\ub41c \uc124\uc815\uc774 \uc5c6\uc2b5\ub2c8\ub2e4.');\n  }\n});\n"})}),"\n",(0,t.jsx)(d.hr,{}),"\n",(0,t.jsx)(d.h3,{id:"\uc608\uc81c-2-\ub370\uc774\ud130-\uc0ad\uc81c-\ud6c4-\uc870\ud68c",children:(0,t.jsx)(d.strong,{children:"\uc608\uc81c 2: \ub370\uc774\ud130 \uc0ad\uc81c \ud6c4 \uc870\ud68c"})}),"\n",(0,t.jsx)(d.pre,{children:(0,t.jsx)(d.code,{className:"language-javascript",children:"// 'cacheData' \ud0a4\ub85c \uc800\uc7a5\ub41c \ub370\uc774\ud130\ub97c \uc0ad\uc81c\ud569\ub2c8\ub2e4.\nNachocode.preference.deleteData('cacheData');\n\n// \ub370\uc774\ud130 \uc0ad\uc81c \ud6c4 \ub2e4\uc2dc \uc870\ud68c\ud558\uba74 \uac12\uc774 \uc874\uc7ac\ud558\uc9c0 \uc54a\uc74c.\nNachocode.preference.getData('cacheData', data => {\n  if (data) {\n    console.log(`\ub370\uc774\ud130 \uc874\uc7ac: ${data}`);\n  } else {\n    console.log('\uc0ad\uc81c\ub41c \ub370\uc774\ud130\uc785\ub2c8\ub2e4.');\n  }\n});\n"})}),"\n",(0,t.jsx)(d.hr,{})]})}function o(e={}){const{wrapper:d}={...(0,r.R)(),...e.components};return d?(0,t.jsx)(d,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},8453:(e,d,n)=>{n.d(d,{R:()=>a,x:()=>c});var s=n(6540);const t={},r=s.createContext(t);function a(e){const d=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(d):{...d,...e}}),[d,e])}function c(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),s.createElement(r.Provider,{value:d},e.children)}}}]);