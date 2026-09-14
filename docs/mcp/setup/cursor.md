---
sidebar_position: 3
sidebar_label: Cursor
pagination_label: Cursor에 nachocode MCP 연결하기
description: Cursor에 nachocode MCP 서버를 연결하는 방법을 안내합니다. 원클릭 설치 버튼을 누르거나 mcp.json에 서버 URL을 추가하고, MCP 설정에서 연결 상태를 확인합니다.
keywords:
  [
    Cursor MCP,
    Cursor 설정,
    mcp.json,
    Add to Cursor,
    나쵸코드 MCP,
    nachocode MCP,
    MCP 서버 연결,
    AI 코딩 도구,
    AI 에디터,
    MCP,
  ]
image: /img/og-image.png
---

# Cursor에 연결하기 {#cursor}

import { ThumbnailImage } from '@site/src/components/common/image/thumbnail-image';

<ThumbnailImage src='/img/docs/thumbnails/SDK/intro.png'/>

> 🔔 **최신화 일자:** 2026-09-14

<!-- 2026-09-09 최초 생성 -->

이 문서는 **Cursor**(AI 코드 에디터)에 nachocode MCP 서버를 연결하는 방법을 안내합니다.  
버튼 한 번으로 추가하거나, 설정 파일에 서버 URL을 직접 적을 수 있습니다.

---

## 1. 서버 URL 확인 {#step-server-url}

nachocode MCP 서버 URL은 아래와 같습니다.

```text
https://mcp.nachocode.io/mcp
```

---

## 2. 원클릭으로 추가하기 {#step-one-click}

Cursor가 설치된 환경에서 아래 버튼을 누르면 서버 추가 화면이 열립니다. **Install**을 선택하면 등록이 끝납니다.

<a href="cursor://anysphere.cursor-deeplink/mcp/install?name=nachocode&config=eyJ1cmwiOiJodHRwczovL21jcC5uYWNob2NvZGUuaW8vbWNwIn0=">
  <img src="https://cursor.com/deeplink/mcp-install-dark.svg" alt="Add nachocode MCP server to Cursor" height="32" />
</a>

---

## 3. 설정 파일로 추가하기 {#step-manual}

버튼 대신 설정 파일을 직접 편집할 수도 있습니다. 파일 위치에 따라 적용 범위가 다릅니다.

| 파일                          | 적용 범위                             |
| ----------------------------- | ------------------------------------- |
| `~/.cursor/mcp.json`          | 모든 프로젝트 (전역)                  |
| `<프로젝트>/.cursor/mcp.json` | 해당 프로젝트만 (팀과 공유할 때 유용) |

```json
{
  "mcpServers": {
    "nachocode": {
      "url": "https://mcp.nachocode.io/mcp"
    }
  }
}
```

이미 다른 서버가 등록되어 있다면 `mcpServers` 객체 안에 `nachocode` 항목만 추가합니다.

---

## 4. 연결 확인 {#step-verify}

1. Cursor **Settings**를 열고 **MCP**(또는 **Tools & MCP**) 항목으로 이동합니다.
2. 목록에서 `nachocode`가 켜져 있고 상태 표시가 녹색인지 확인합니다.
3. 항목을 펼치면 제공되는 도구 목록이 보입니다. 목록이 비어 있으면 서버 URL을 다시 확인하세요.

---

## 5. 사용하기 {#step-use}

채팅(Agent 모드)에서 평소처럼 질문하면 Cursor가 필요할 때 nachocode 도구를 자동으로 호출합니다.  
도구 호출 전에 확인 창이 뜨면 **Run**을 선택하세요.

- ex. “로그인할 때 푸시 토큰 등록하려면 어떻게 해야 해?”

:::tip 도구 전체 목록
➡️ [제공 기능](../features)에서 사용할 수 있는 도구 7개를 확인할 수 있습니다.
:::

---

## 문제 해결 {#troubleshooting}

| 증상                                          | 확인할 것                                                                                                            |
| --------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| 버튼을 눌러도 아무 일도 일어나지 않음         | Cursor가 설치되어 있고 브라우저가 `cursor://` 링크 열기를 허용했는지 확인합니다. 설정 파일 방식으로 추가해도 됩니다. |
| 상태 표시가 빨간색 또는 도구 목록이 비어 있음 | URL이 정확히 `https://mcp.nachocode.io/mcp`인지, JSON 문법(쉼표·따옴표)이 맞는지 확인합니다.                         |
| 프로젝트 설정이 적용되지 않음                 | `.cursor/mcp.json`이 프로젝트 루트에 있는지, Cursor를 다시 열었는지 확인합니다.                                      |

문제가 계속되면 [support@nachocode.io](mailto:support@nachocode.io)로 설정 파일 내용과 오류 메시지를 보내주세요.
