---
sidebar_position: 6
sidebar_label: ChatGPT
pagination_label: ChatGPT에 nachocode MCP 연결하기
description: ChatGPT에 nachocode MCP 서버를 커넥터로 연결하는 방법을 안내합니다. 개발자 모드를 켜고 커넥터를 추가한 뒤 대화와 딥 리서치에서 사용합니다.
keywords:
  [
    ChatGPT 커넥터,
    ChatGPT MCP,
    ChatGPT 개발자 모드,
    딥 리서치,
    Deep Research,
    나쵸코드 MCP,
    nachocode MCP,
    MCP 서버 연결,
    AI 에이전트,
    MCP,
  ]
image: /img/og-image.png
---

# ChatGPT에 연결하기 {#chatgpt}

import { ThumbnailImage } from '@site/src/components/common/image/thumbnail-image';

<ThumbnailImage src='/img/docs/thumbnails/SDK/intro.png'/>

> 🔔 **최신화 일자:** 2026-09-11

<!-- 2026-09-10 최초 생성 (기타 클라이언트 문서에서 분리) -->
<!-- 2026-09-11 도구 개수 갱신 -->

이 문서는 **ChatGPT**에 nachocode MCP 서버를 커넥터로 연결하는 방법을 안내합니다.  
설정에서 개발자 모드를 켠 뒤 커넥터를 추가하면 대화와 딥 리서치에서 nachocode 문서를 검색·인용할 수 있습니다.

:::info 개발자 모드
커넥터를 직접 추가하려면 **개발자 모드**가 필요합니다.  
제공 여부는 ChatGPT 플랜과 워크스페이스 설정에 따라 다르므로, 메뉴가 보이지 않으면 플랜을 확인하거나 관리자에게 문의하세요.
:::

---

## 1. 서버 URL 확인 {#step-server-url}

nachocode MCP 서버 URL은 아래와 같습니다.

```text
https://mcp.nachocode.io/mcp
```

---

## 2. 개발자 모드 켜기 {#step-developer-mode}

1. ChatGPT **설정** › **커넥터**로 이동합니다.
2. **고급 설정**에서 **개발자 모드**를 켭니다.

---

## 3. 커넥터 추가 {#step-add-connector}

1. **커넥터** 화면에서 **만들기**(또는 **커넥터 추가**)를 선택합니다.
2. 이름에 `nachocode`, URL에 `https://mcp.nachocode.io/mcp`를 입력합니다.
3. 인증은 **없음**으로 두고 만들기를 누릅니다.
4. 커넥터 상세 화면에 nachocode 도구 목록이 보이면 연결이 끝난 것입니다.

---

## 4. 사용하기 {#step-use}

1. 새 대화에서 입력창의 **＋** 메뉴를 열고 `nachocode` 커넥터를 선택합니다.
2. 평소처럼 질문하면 필요할 때 nachocode 도구를 자동으로 호출합니다.

- ex. “유니버설 링크 설정 순서를 단계별로 알려 줘”

:::note 딥 리서치
ChatGPT의 딥 리서치(Deep Research)는 MCP 서버의 `search`·`fetch` 두 도구만 사용합니다.  
nachocode MCP 서버는 이 두 도구를 함께 제공하므로 딥 리서치에서도 nachocode 문서를 검색·인용할 수 있습니다.
:::

:::tip 도구 전체 목록
➡️ [제공 기능](../features)에서 사용할 수 있는 도구 7개와 ChatGPT 규격 도구 2개를 확인할 수 있습니다.
:::

---

## 문제 해결 {#troubleshooting}

| 증상                               | 확인할 것                                                                                          |
| ---------------------------------- | -------------------------------------------------------------------------------------------------- |
| **개발자 모드** 메뉴가 보이지 않음 | 플랜에서 제공되는지 확인하고, Business · Enterprise 워크스페이스라면 관리자에게 허용을 요청합니다. |
| 커넥터를 만들 때 오류가 표시됨     | URL이 `https://mcp.nachocode.io/mcp`인지, 인증이 **없음**인지 확인합니다.                          |
| 대화에서 도구가 호출되지 않음      | 대화의 **＋** 메뉴에서 `nachocode` 커넥터를 선택했는지 확인합니다.                                 |

문제가 계속되면 [support@nachocode.io](mailto:support@nachocode.io)로 사용 중인 플랜과 오류 메시지를 보내주세요.
