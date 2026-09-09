---
sidebar_position: 1
sidebar_label: 개요
pagination_label: nachocode MCP 개요
description: nachocode MCP 서버는 Claude, ChatGPT, Cursor, Codex 같은 AI 에이전트를 nachocode에 연결합니다. 개발자 문서·SDK·Open API 지식부터 앱 운영 작업까지, MCP의 개념과 서버 정보, 지원 클라이언트, 제공 범위를 안내합니다.
keywords:
  [
    MCP,
    Model Context Protocol,
    나쵸코드 MCP,
    nachocode MCP,
    MCP 서버,
    MCP Server,
    AI 에이전트,
    AI Agent,
    Claude,
    ChatGPT,
    Cursor,
    Codex,
    커넥터,
    Connector,
    나쵸코드,
    nachocode,
  ]
image: /img/og-image.png
---

# nachocode MCP 개요 {#mcp-intro}

> 🔔 **최신화 일자:** 2026-09-10

<!-- 2026-09-09 최초 생성 (MCP 서버 출시 전 초안) -->

:::caution 준비 중
nachocode MCP 서버는 현재 준비 중입니다. 연결 방법과 기능 목록은 서버 출시 시점에 최종 확정됩니다.
:::

**nachocode MCP**는 Claude, ChatGPT, Cursor, Codex 같은 AI 에이전트를 **nachocode에 연결하는 MCP 서버**입니다.  
연결된 AI 에이전트는 nachocode 개발자 문서·SDK 레퍼런스·Open API 명세와 기능 정보를 직접 읽고 정확하게 답합니다.

지식 제공으로 시작하여 앞으로는 푸시 발송이나 앱 설정 확인 같은 **실제 작업**까지 nachocode 계정 권한 안에서 AI 에이전트에게 맡길 수 있도록 도구가 순차적으로 추가됩니다.

---

## MCP 이해하기 {#what-is-mcp}

**MCP**(**Model Context Protocol**)는 AI 에이전트가 외부 서비스의 **지식과 도구를 표준화된 방식으로 사용**할 수 있게 하는 개방형 프로토콜입니다. 서비스 제공자가 MCP 서버를 한 번 만들어 두면, 이를 지원하는 모든 AI 클라이언트가 같은 방법으로 연결할 수 있습니다. USB 규격이 정해져 있어 어떤 기기든 같은 케이블로 연결되는 것과 비슷합니다.

nachocode MCP 서버는 **개발자와 앱 운영자 모두**를 위해 만들어졌습니다.

- **개발자**는 AI 코딩 도구 안에서 SDK 레퍼런스, Open API 명세, 코드 템플릿, 릴리즈 노트를 바로 찾아 쓰고, SDK·앱소스 버전 호환 여부를 확인한 뒤 코드를 제안받습니다.
- **앱 운영자**는 요금·플랜, 기능 설정 방법, 출시 체크리스트, 대시보드 메뉴 위치 같은 내용을 개발 지식 없이도 대화로 물어볼 수 있고, 이후에는 대시보드에서 하던 운영 작업도 대화로 처리할 수 있게 됩니다.

:::tip 비유하자면?
MCP 서버는 AI 에이전트를 위한 **nachocode 창구**입니다.  
지금은 이 창구에서 필요한 문서와 정보를 바로 찾아 주고, 앞으로는 업무 처리까지 맡길 수 있게 됩니다.
:::

---

## 서버 정보 {#server}

| 항목      | 값                                    |
| --------- | ------------------------------------- |
| 서버 URL  | `https://mcp.nachocode.io/mcp`        |
| 전송 방식 | Streamable HTTP (원격 MCP 서버)       |
| 인증      | 현재 없음 — [인증과 권한](#auth) 참고 |
| 비용      | 무료                                  |
| 대상      | 개발자, 앱 운영자                     |

---

## 지원 클라이언트 {#clients}

원격 MCP 서버(Streamable HTTP)를 지원하는 클라이언트라면 설정에서 서버 URL만 추가하면 됩니다.  
자주 쓰는 도구별 연결 방법은 아래 문서에서 단계별로 안내합니다.

| 클라이언트                              | 연결 방법                                        | 안내 문서                                   |
| --------------------------------------- | ------------------------------------------------ | ------------------------------------------- |
| **Claude Code**                         | 터미널 명령 한 줄 또는 `.mcp.json`               | [Claude Code 연결하기](./setup/claude-code) |
| **Codex** (OpenAI Codex CLI · IDE 확장) | `codex mcp add` 명령 또는 `config.toml`          | [Codex 연결하기](./setup/codex)             |
| **Cursor**                              | 원클릭 설치 버튼 또는 `mcp.json`                 | [Cursor 연결하기](./setup/cursor)           |
| **VS Code** (GitHub Copilot)            | `.vscode/mcp.json` 또는 **MCP: Add Server** 명령 | [VS Code 연결하기](./setup/vscode)          |
| **Claude.ai · Claude Desktop**          | 설정 › 커넥터에서 커스텀 커넥터 추가             | [Claude.ai 연결하기](./setup/claude-ai)     |
| **ChatGPT**                             | 개발자 모드에서 커넥터 추가                      | [ChatGPT 연결하기](./setup/chatgpt)         |
| **그 밖의 도구**                        | 각 도구의 MCP 설정에서 URL 추가                  | [기타 클라이언트 연결하기](./setup/other)   |

---

## 인증과 권한 {#auth}

현재 단계에서 nachocode MCP 서버는 **로그인 없이** 사용할 수 있으며, 문서 검색·조회, SDK·API 레퍼런스, 기능 정보처럼 공개된 지식을 제공합니다. 여러분의 앱 데이터나 API 키에는 접근하지 않습니다.

이후 **OAuth 2.1** 기반의 nachocode 계정 로그인이 추가되면, 로그인한 계정 권한 안에서 **푸시 발송**이나 **대시보드 작업**(ex. 앱 설정 확인, 푸시 내역 조회) 같은 실제 작업을 AI 에이전트에게 맡길 수 있게 됩니다. 이때도 API Key·Secret Key는 AI 클라이언트에 노출되지 않고 nachocode 서버 안에서만 사용됩니다.

---

## 무엇을 할 수 있나요? {#capabilities}

출시 시점에는 **도구 17개, 리소스 10개, 프롬프트 8개**로 시작하며, 이후 업데이트로 도구가 계속 추가됩니다.

:::info 전체 목록
➡️ [제공 기능](./features)에서 도구·리소스·프롬프트의 전체 이름과 설명을 확인할 수 있습니다.
:::

AI 에이전트에게 이렇게 물어볼 수 있습니다.

- “푸시가 안 와. 뭐부터 확인해야 해?”
- “마케팅 수신 동의 팝업은 대시보드 어디서 켜?”
- “유니버설 링크 설정 순서를 단계별로 알려 줘”

지식 제공에서 시작해, 업데이트를 통해 AI 에이전트가 로그인한 계정 권한 안에서 **앱과 대시보드를 직접 다루는 방향으로 확장**됩니다.

---

:::tip 지원팀 문의하기
MCP 서버 연결이나 답변 품질에 대한 피드백은 언제든지 [support@nachocode.io](mailto:support@nachocode.io)로 보내주세요.
:::
