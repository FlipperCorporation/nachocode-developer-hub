---
sidebar_position: 5
sidebar_label: Claude.ai
pagination_label: Claude.ai에 nachocode MCP 연결하기
description: Claude.ai와 Claude Desktop에 nachocode MCP 서버를 커스텀 커넥터로 연결하는 방법을 안내합니다. 설정에서 커넥터를 추가하고 대화창에서 켜서 사용합니다.
keywords:
  [
    Claude.ai 커넥터,
    Claude 커스텀 커넥터,
    Claude Desktop MCP,
    Claude Connectors,
    나쵸코드 MCP,
    nachocode MCP,
    MCP 서버 연결,
    AI 에이전트,
    MCP,
  ]
image: /img/og-image.png
---

# Claude.ai에 연결하기 {#claude-ai}

> 🔔 **최신화 일자:** 2026-09-10

<!-- 2026-09-10 최초 생성 (기타 클라이언트 문서에서 분리) -->

이 문서는 **Claude.ai**(웹)와 **Claude Desktop** 앱에 nachocode MCP 서버를 연결하는 방법을 안내합니다.  
코드나 설정 파일 없이 설정 화면에서 커넥터를 추가하면 됩니다. 두 앱은 같은 커넥터 설정을 공유합니다.

:::info 플랜별 안내

- **Free · Pro · Max** 개인 계정은 아래 절차대로 직접 추가할 수 있습니다.
- **Team · Enterprise** 계정은 조직 소유자(Owner)가 커넥터를 추가한 뒤 구성원이 사용합니다.

:::

---

## 1. 서버 URL 확인 {#step-server-url}

nachocode MCP 서버 URL은 아래와 같습니다.

```text
https://mcp.nachocode.io/mcp
```

---

## 2. 커넥터 추가 {#step-add-connector}

1. Claude.ai에서 **설정** › **커넥터**(Connectors)로 이동합니다.
2. **커스텀 커넥터 추가**를 선택합니다.
3. 이름에 `nachocode`, URL에 `https://mcp.nachocode.io/mcp`를 입력합니다.
4. 인증은 **없음**으로 두고 **추가**를 누릅니다.

---

## 3. 대화에서 켜기 {#step-enable}

1. 새 대화를 열고 입력창의 **도구**(＋) 메뉴를 누릅니다.
2. **커넥터** 목록에서 `nachocode`를 켭니다.
3. 커넥터 목록에 nachocode 도구가 보이면 연결이 끝난 것입니다.

---

## 4. 사용하기 {#step-use}

평소처럼 질문하면 Claude가 필요할 때 nachocode 도구를 자동으로 호출합니다.  
도구 실행 전에 확인 창이 뜨면 **허용**을 선택하세요.

- ex. “마케팅 수신 동의 팝업은 대시보드 어디서 켜?”

:::tip 도구 전체 목록
➡️ [제공 기능](../features)에서 사용할 수 있는 도구 17개를 확인할 수 있습니다.
:::

---

## 문제 해결 {#troubleshooting}

| 증상                               | 확인할 것                                                                                                  |
| ---------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| **커스텀 커넥터 추가** 메뉴가 없음 | Team · Enterprise 계정은 조직 소유자가 추가해야 합니다. 개인 계정이라면 앱을 최신 버전으로 업데이트합니다. |
| 커넥터 추가 시 오류가 표시됨       | URL이 `https://mcp.nachocode.io/mcp`인지, 인증이 **없음**인지 확인합니다.                                  |
| 대화에서 도구가 호출되지 않음      | 도구 메뉴에서 `nachocode` 커넥터가 켜져 있는지 확인합니다. 대화마다 켜야 할 수 있습니다.                   |

문제가 계속되면 [support@nachocode.io](mailto:support@nachocode.io)로 사용 중인 플랜과 오류 메시지를 보내주세요.
