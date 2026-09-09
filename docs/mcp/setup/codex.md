---
sidebar_position: 3
sidebar_label: Codex
pagination_label: Codex에 nachocode MCP 연결하기
description: OpenAI Codex CLI와 Codex IDE 확장에 nachocode MCP 서버를 연결하는 방법을 안내합니다. codex mcp add 명령 또는 config.toml로 등록하고 codex mcp list로 확인합니다.
keywords:
  [
    Codex MCP,
    OpenAI Codex,
    Codex CLI,
    codex mcp add,
    config.toml,
    나쵸코드 MCP,
    nachocode MCP,
    MCP 서버 연결,
    AI 코딩 도구,
    MCP,
  ]
image: /img/og-image.png
---

# Codex에 연결하기 {#codex}

> 🔔 **최신화 일자:** 2026-09-09

<!-- 2026-09-09 최초 생성 -->

이 문서는 **OpenAI Codex**(Codex CLI와 IDE 확장)에 nachocode MCP 서버를 연결하는 방법을 안내합니다.  
CLI와 IDE 확장은 같은 설정 파일(`~/.codex/config.toml`)을 공유하므로 한 번만 등록하면 됩니다.

:::info 사전 준비
Codex CLI가 설치되어 있어야 합니다. 설치 방법과 MCP 설정 상세는 [Codex 공식 문서](https://developers.openai.com/codex/mcp)를 참고하세요.
:::

---

## 1. 서버 URL 확인 {#step-server-url}

nachocode MCP 서버 URL은 아래와 같습니다.

```text
https://mcp.nachocode.io/mcp
```

---

## 2. 터미널에서 서버 등록 {#step-register}

터미널에서 아래 명령을 실행합니다. `--url`은 원격(Streamable HTTP) 서버를 뜻합니다.

```bash
codex mcp add nachocode --url https://mcp.nachocode.io/mcp
```

현재 단계에서는 인증이 없으므로 `codex mcp login` 단계가 필요하지 않습니다. nachocode 계정 로그인이 추가되면 이 문서에서 안내합니다.

---

## 3. 설정 파일로 등록하기 (선택) {#step-config}

명령 대신 `~/.codex/config.toml`에 직접 적을 수도 있습니다. 파일이 없으면 새로 만듭니다.

```toml
[mcp_servers.nachocode]
url = "https://mcp.nachocode.io/mcp"
```

이미 다른 서버가 있다면 `[mcp_servers.nachocode]` 블록만 추가합니다.

---

## 4. 연결 확인 {#step-verify}

등록된 서버 목록에 `nachocode`가 보이면 완료입니다.

```bash
codex mcp list
```

Codex를 실행한 뒤 `/mcp`를 입력해도 연결된 서버와 도구 목록을 확인할 수 있습니다.

---

## 5. 사용하기 {#step-use}

Codex를 실행하고 평소처럼 질문하면 필요할 때 nachocode 도구를 자동으로 호출합니다. IDE 확장에서도 같은 설정이 적용됩니다.

```bash
codex
```

- ex. “nachocode SDK로 인앱 결제 구현하는 순서 알려 줘”

:::tip 도구 전체 목록
➡️ [제공 기능](../features)에서 사용할 수 있는 도구 17개를 확인할 수 있습니다.
:::

---

## 문제 해결 {#troubleshooting}

| 증상                               | 확인할 것                                                                             |
| ---------------------------------- | ------------------------------------------------------------------------------------- |
| `codex mcp` 명령을 찾을 수 없음    | Codex CLI 버전이 오래되었을 수 있습니다. 최신 버전으로 업데이트한 뒤 다시 시도합니다. |
| 목록에 `nachocode`가 없음          | `~/.codex/config.toml`에 `[mcp_servers.nachocode]` 블록과 `url`이 있는지 확인합니다.  |
| 연결은 되지만 도구가 호출되지 않음 | Codex를 다시 실행합니다. 설정 파일 변경은 새 세션부터 적용됩니다.                     |

문제가 계속되면 [support@nachocode.io](mailto:support@nachocode.io)로 실행한 명령과 오류 메시지를 보내주세요.
