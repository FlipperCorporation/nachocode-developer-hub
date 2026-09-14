---
sidebar_position: 1
sidebar_label: Claude Code
pagination_label: Claude Code에 nachocode MCP 연결하기
description: Claude Code에 nachocode MCP 서버를 연결하는 방법을 단계별로 안내합니다. 터미널 명령 한 줄로 등록하거나 .mcp.json으로 프로젝트에 공유하고, /mcp 메뉴에서 연결을 확인합니다.
keywords:
  [
    Claude Code MCP,
    Claude Code 설정,
    claude mcp add,
    .mcp.json,
    나쵸코드 MCP,
    nachocode MCP,
    MCP 서버 연결,
    Anthropic Claude,
    AI 코딩 도구,
    MCP,
  ]
image: /img/og-image.png
---

# Claude Code에 연결하기 {#claude-code}

import { ThumbnailImage } from '@site/src/components/common/image/thumbnail-image';

<ThumbnailImage src='/img/docs/thumbnails/SDK/intro.png'/>

> 🔔 **최신화 일자:** 2026-09-14

<!-- 2026-09-09 최초 생성 -->

이 문서는 **Claude Code**(Anthropic의 터미널 AI 코딩 도구)에 nachocode MCP 서버를 연결하는 방법을 안내합니다.  
설정은 명령 한 줄이면 끝나고, 현재 단계에서는 API 키나 로그인 없이 바로 사용할 수 있습니다.

:::info 사전 준비
Claude Code가 설치되어 있어야 합니다.  
자세한 설정 방법은 [Claude Code 공식 문서](https://code.claude.com/docs/ko/mcp)를 참고하세요.
:::

---

## 1. 서버 URL 확인 {#step-server-url}

nachocode MCP 서버 URL은 아래와 같습니다.

```text
https://mcp.nachocode.io/mcp
```

---

## 2. 터미널에서 서버 등록 {#step-register}

터미널을 열고 아래 명령을 실행합니다. `--transport http`는 원격(Streamable HTTP) 서버임을 뜻합니다.

```bash
claude mcp add --transport http nachocode https://mcp.nachocode.io/mcp
```

- 기본 범위는 **현재 프로젝트**(local)입니다. 어떤 프로젝트에서든 쓰려면 `--scope user`를 붙입니다.

  ```bash
  claude mcp add --scope user --transport http nachocode https://mcp.nachocode.io/mcp
  ```

- 등록된 서버는 아래 명령으로 확인하거나 제거할 수 있습니다.

  - 등록된 MCP 서버 목록 조회

  ```bash
  claude mcp list
  ```

  - nachocode MCP 서버 상세

  ```bash
  claude mcp get nachocode
  ```

  - nachocode MCP 서버 제거

  ```bash
  claude mcp remove nachocode
  ```

---

## 3. 프로젝트에 공유하기 (선택) {#step-project}

팀원과 같은 설정을 공유하려면 저장소 루트의 `.mcp.json`에 아래 내용을 추가합니다.  
이 파일을 커밋하면 저장소를 여는 모든 Claude Code가 같은 서버를 사용합니다.

```json
{
  "mcpServers": {
    "nachocode": {
      "type": "http",
      "url": "https://mcp.nachocode.io/mcp"
    }
  }
}
```

---

## 4. 연결 확인 {#step-verify}

Claude Code를 실행한 뒤 `/mcp`를 입력하면 등록된 MCP 서버 목록이 열립니다.  
`nachocode`가 **connected** 상태인지 확인하세요.

```bash
claude
```

```text
> /mcp
```

서버 목록에서 `nachocode`를 선택하면 제공되는 도구·프롬프트·리소스 목록을 볼 수 있습니다.

---

## 5. 사용하기 {#step-use}

연결이 끝나면 별도 설정 없이 바로 질문할 수 있습니다.

| 구분         | 사용 방법                                                                                                |
| ------------ | -------------------------------------------------------------------------------------------------------- |
| **도구**     | 대화 중 Claude가 필요할 때 자동으로 호출합니다. ex. “SDK 1.11.3에서 `setUserId` 동작이 어떻게 바뀌었어?” |
| **프롬프트** | `/mcp__nachocode__<prompt>` 형태의 슬래시 명령으로 실행합니다. ex. `/mcp__nachocode__integrate_sdk`      |
| **리소스**   | `@nachocode:` 접두어로 원본 자료를 대화에 첨부합니다. ex. `@nachocode:nachocode://sdk/push.d.ts`         |

:::tip 프롬프트·리소스 전체 목록
➡️ [제공 기능](../features)에서 사용할 수 있는 도구 7개, 리소스 6개, 프롬프트 5개를 확인할 수 있습니다.
:::

---

## 문제 해결 {#troubleshooting}

| 증상                                        | 확인할 것                                                                                           |
| ------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `/mcp` 목록에 `nachocode`가 없음            | 등록한 범위(local·user)와 현재 작업 디렉터리가 맞는지 `claude mcp list`로 확인합니다.               |
| 상태가 **failed** 로 표시됨                 | URL이 정확히 `https://mcp.nachocode.io/mcp`인지, 네트워크에서 해당 주소에 접근 가능한지 확인합니다. |
| `.mcp.json`으로 등록했는데 연결되지 않음    | `"type": "http"`가 있는지 확인합니다. 없으면 stdio 서버로 해석됩니다.                               |
| 프로젝트를 열 때 `.mcp.json` 승인 질문이 뜸 | 프로젝트 범위 서버는 최초 1회 승인이 필요합니다. 승인하면 이후 자동으로 연결됩니다.                 |

문제가 계속되면 [support@nachocode.io](mailto:support@nachocode.io)로 실행한 명령과 오류 메시지를 보내주세요.
