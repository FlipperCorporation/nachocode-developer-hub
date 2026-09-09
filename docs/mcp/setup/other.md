---
sidebar_position: 4
sidebar_label: 기타 클라이언트
pagination_label: 기타 클라이언트에 nachocode MCP 연결하기
description: Claude.ai, Claude Desktop, ChatGPT, VS Code 등 원격 MCP 서버를 지원하는 클라이언트에 nachocode MCP 서버를 연결하는 공통 절차와 도구별 설정 위치를 안내합니다.
keywords:
  [
    Claude.ai 커넥터,
    Claude Desktop MCP,
    ChatGPT 커넥터,
    ChatGPT MCP,
    VS Code MCP,
    Copilot MCP,
    원격 MCP 서버,
    Streamable HTTP,
    나쵸코드 MCP,
    nachocode MCP,
    MCP,
  ]
image: /img/og-image.png
---

# 기타 클라이언트에 연결하기 {#other-clients}

> 🔔 **최신화 일자:** 2026-09-09

<!-- 2026-09-09 최초 생성 -->

nachocode MCP 서버는 **원격 MCP 서버(Streamable HTTP)** 를 지원하는 모든 클라이언트에서 사용할 수 있습니다.  
이 문서는 공통 절차와 함께 Claude.ai, Claude Desktop, ChatGPT, VS Code의 설정 위치를 안내합니다.

---

## 공통 절차 {#common-steps}

어떤 클라이언트든 방법은 같습니다.

1. **도구의 MCP 설정을 엽니다.** 설정 메뉴에서 **MCP**, **Integrations**, **Connectors**(커넥터) 등의 이름으로 제공됩니다.
2. **새 원격(HTTP) MCP 서버를 추가합니다.** 로컬 명령(stdio)이 아니라 **URL**을 입력하는 방식을 고릅니다.
3. **서버 URL을 붙여 넣습니다.** 이름은 `nachocode`를 권장합니다.

   ```text
   https://mcp.nachocode.io/mcp
   ```

4. **인증은 “없음”** 으로 둡니다. 현재 단계에서는 토큰이나 API 키를 넣을 필요가 없습니다.
5. 도구 목록에 nachocode 도구가 보이면 연결이 끝난 것입니다.

---

## Claude.ai · Claude Desktop {#claude-ai}

1. **설정** › **커넥터**(Connectors)로 이동합니다.
2. **커스텀 커넥터 추가**를 선택합니다.
3. URL에 `https://mcp.nachocode.io/mcp`를 입력하고 인증은 **없음**으로 둡니다.
4. 대화창의 도구 메뉴에서 nachocode 커넥터를 켜고 질문합니다.

:::info 플랜별 안내

- **Free · Pro · Max** 개인 계정은 위 절차대로 직접 추가할 수 있습니다.
- **Team · Enterprise** 계정은 조직 소유자(Owner)가 커넥터를 추가한 뒤 구성원이 사용합니다.
- Claude Desktop은 Claude.ai와 같은 커넥터 설정을 공유합니다.

:::

---

## ChatGPT {#chatgpt}

1. ChatGPT **설정** › **커넥터**에서 **개발자 모드**를 켭니다.
2. **커넥터 추가**(또는 **만들기**)를 선택하고 URL에 `https://mcp.nachocode.io/mcp`를 입력합니다.
3. 대화에서 nachocode 커넥터를 선택해 사용합니다.

:::note 딥 리서치
ChatGPT의 딥 리서치(Deep Research)는 MCP 서버의 `search`·`fetch` 두 도구만 사용합니다.  
nachocode MCP 서버는 이 두 도구를 함께 제공하므로 딥 리서치에서도 nachocode 문서를 검색·인용할 수 있습니다.
:::

---

## VS Code (GitHub Copilot) {#vscode}

프로젝트 루트의 `.vscode/mcp.json`에 아래 내용을 추가하면 해당 작업 영역에서 Copilot 에이전트가 nachocode 도구를 사용할 수 있습니다.

```json
{
  "servers": {
    "nachocode": {
      "type": "http",
      "url": "https://mcp.nachocode.io/mcp"
    }
  }
}
```

명령 팔레트에서 **MCP: List Servers**를 실행해 `nachocode`가 실행 중인지 확인합니다. 사용자 전역으로 등록하려면 **MCP: Add Server** 명령에서 **HTTP** 유형을 고르고 URL을 입력합니다.

---

## 그 밖의 도구 {#others}

- **원격(HTTP) 서버를 지원하는 도구**: [공통 절차](#common-steps)대로 URL만 추가하면 됩니다.
- **로컬 명령(stdio) 서버만 지원하는 도구**: 원격 서버를 로컬 명령으로 감싸 주는 브리지(ex. `mcp-remote`)를 사용할 수 있습니다. 도구의 MCP 설정에서 명령으로 `npx -y mcp-remote https://mcp.nachocode.io/mcp`를 등록합니다. 브리지는 nachocode가 제공하는 것이 아니므로 사용 전 해당 도구와 브리지의 문서를 확인하세요.

:::tip 연결 후 할 수 있는 일
➡️ [제공 기능](../features)에서 도구·리소스·프롬프트 전체 목록을 확인할 수 있습니다.
:::

---

## 문제 해결 {#troubleshooting}

| 증상                               | 확인할 것                                                                                              |
| ---------------------------------- | ------------------------------------------------------------------------------------------------------ |
| 서버 추가 화면에 URL 입력란이 없음 | 로컬 명령(stdio) 전용 화면일 수 있습니다. 원격/HTTP/URL 방식의 추가 메뉴를 찾거나 브리지를 사용합니다. |
| 인증 오류가 표시됨                 | 인증 방식을 **없음**으로 두었는지 확인합니다. 토큰이나 키를 입력하지 마세요.                           |
| 도구 목록이 비어 있음              | URL이 정확히 `https://mcp.nachocode.io/mcp`인지 확인하고 도구를 다시 시작합니다.                       |

문제가 계속되면 [support@nachocode.io](mailto:support@nachocode.io)로 사용 중인 도구 이름과 오류 메시지를 보내주세요.
