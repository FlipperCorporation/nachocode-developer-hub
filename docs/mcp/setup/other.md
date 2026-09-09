---
sidebar_position: 7
sidebar_label: 기타 클라이언트
pagination_label: 기타 클라이언트에 nachocode MCP 연결하기
description: 원격 MCP 서버(Streamable HTTP)를 지원하는 모든 클라이언트에 nachocode MCP 서버를 연결하는 공통 절차와, 로컬 명령(stdio)만 지원하는 도구에서 브리지를 쓰는 방법을 안내합니다.
keywords:
  [
    MCP 클라이언트,
    원격 MCP 서버,
    Streamable HTTP,
    mcp-remote,
    Windsurf MCP,
    Gemini CLI MCP,
    나쵸코드 MCP,
    nachocode MCP,
    MCP 서버 연결,
    MCP,
  ]
image: /img/og-image.png
---

# 기타 클라이언트에 연결하기 {#other-clients}

> 🔔 **최신화 일자:** 2026-09-10

<!-- 2026-09-09 최초 생성 -->
<!-- 2026-09-10 VS Code·Claude.ai·ChatGPT를 별도 문서로 분리 -->

nachocode MCP 서버는 **원격 MCP 서버(Streamable HTTP)** 를 지원하는 모든 클라이언트에서 사용할 수 있습니다.  
별도 문서가 없는 도구는 아래 공통 절차대로 서버 URL만 추가하면 됩니다.

:::info 도구별 안내 문서
[Claude Code](./claude-code) · [Codex](./codex) · [Cursor](./cursor) · [VS Code](./vscode) · [Claude.ai](./claude-ai) · [ChatGPT](./chatgpt)
:::

---

## 공통 절차 {#common-steps}

1. **도구의 MCP 설정을 엽니다.** 설정 메뉴에서 **MCP**, **Integrations**, **Connectors**(커넥터) 등의 이름으로 제공됩니다.
2. **새 원격(HTTP) MCP 서버를 추가합니다.** 로컬 명령(stdio)이 아니라 **URL**을 입력하는 방식을 고릅니다.
3. **서버 URL을 붙여 넣습니다.** 이름은 `nachocode`를 권장합니다.

   ```text
   https://mcp.nachocode.io/mcp
   ```

4. **인증은 “없음”** 으로 둡니다. 현재 단계에서는 토큰이나 API 키를 넣을 필요가 없습니다.
5. 도구 목록에 nachocode 도구가 보이면 연결이 끝난 것입니다.

---

## 로컬 명령만 지원하는 도구 {#stdio-bridge}

원격(HTTP) 서버를 직접 지원하지 않고 **로컬 명령(stdio)** 서버만 등록할 수 있는 도구라면, 원격 서버를 로컬 명령으로 감싸 주는 브리지(ex. `mcp-remote`)를 사용할 수 있습니다.

도구의 MCP 설정에서 명령으로 아래를 등록합니다.

```bash
npx -y mcp-remote https://mcp.nachocode.io/mcp
```

브리지는 nachocode가 제공하는 것이 아니므로 사용 전 해당 도구와 브리지의 문서를 확인하세요.

:::tip 연결 후 할 수 있는 일
➡️ [제공 기능](../features)에서 도구·리소스·프롬프트 전체 목록을 확인할 수 있습니다.
:::

---

## 문제 해결 {#troubleshooting}

| 증상                               | 확인할 것                                                                                              |
| ---------------------------------- | ------------------------------------------------------------------------------------------------------ |
| 서버 추가 화면에 URL 입력란이 없음 | 로컬 명령(stdio) 전용 화면일 수 있습니다. 원격/HTTP/URL 방식의 추가 메뉴를 찾거나 브리지를 사용합니다. |
| 인증 오류가 표시됨                 | 인증 방식을 **없음**으로 두었는지 확인합니다. 토큰이나 키를 입력하지 마세요.                           |
| 도구 목록이 비어 있음              | URL이 `https://mcp.nachocode.io/mcp`인지 확인하고 도구를 다시 시작합니다.                              |

문제가 계속되면 [support@nachocode.io](mailto:support@nachocode.io)로 사용 중인 도구 이름과 오류 메시지를 보내주세요.
