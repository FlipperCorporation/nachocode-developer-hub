---
sidebar_position: 4
sidebar_label: VS Code
pagination_label: VS Code에 nachocode MCP 연결하기
description: 'VS Code(GitHub Copilot)에 nachocode MCP 서버를 연결하는 방법을 안내합니다. .vscode/mcp.json에 서버 URL을 추가하거나 MCP: Add Server 명령으로 등록하고, Agent 모드에서 사용합니다.'
keywords:
  [
    VS Code MCP,
    Visual Studio Code MCP,
    GitHub Copilot MCP,
    Copilot Agent 모드,
    mcp.json,
    나쵸코드 MCP,
    nachocode MCP,
    MCP 서버 연결,
    AI 코딩 도구,
    MCP,
  ]
image: /img/og-image.png
---

# VS Code에 연결하기 {#vscode}

> 🔔 **최신화 일자:** 2026-09-11

<!-- 2026-09-10 최초 생성 (기타 클라이언트 문서에서 분리) -->

이 문서는 **VS Code**(GitHub Copilot)에 nachocode MCP 서버를 연결하는 방법을 안내합니다.  
프로젝트 설정 파일에 URL 한 줄을 추가하거나, 명령 팔레트에서 등록할 수 있습니다.

:::info 사전 준비
VS Code와 GitHub Copilot 확장이 설치되어 있어야 하며, MCP 도구는 Copilot Chat의 **Agent 모드**에서 사용합니다.  
자세한 내용은 [VS Code 공식 문서](https://code.visualstudio.com/docs/copilot/chat/mcp-servers)를 참고하세요.
:::

---

## 1. 서버 URL 확인 {#step-server-url}

nachocode MCP 서버 URL은 아래와 같습니다.

```text
https://mcp.nachocode.io/mcp
```

---

## 2. 프로젝트에 추가하기 {#step-workspace}

프로젝트 루트의 `.vscode/mcp.json`에 아래 내용을 추가합니다. 이 파일을 커밋하면 저장소를 여는 팀원도 같은 서버를 사용합니다.

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

이미 다른 서버가 등록되어 있다면 `servers` 객체 안에 `nachocode` 항목만 추가합니다.

---

## 3. 전역으로 추가하기 (선택) {#step-user}

모든 프로젝트에서 쓰려면 명령 팔레트(`Ctrl+Shift+P` / `Cmd+Shift+P`)에서 등록합니다.

1. **MCP: Add Server**를 실행합니다.
2. 서버 유형에서 **HTTP**를 고릅니다.
3. URL에 `https://mcp.nachocode.io/mcp`, 이름에 `nachocode`를 입력합니다.
4. 저장 위치로 **User Settings**를 선택합니다.

---

## 4. 연결 확인 {#step-verify}

1. 명령 팔레트에서 **MCP: List Servers**를 실행합니다.
2. 목록에서 `nachocode`를 선택하고 상태가 **Running**인지 확인합니다. 멈춰 있으면 **Start**를 선택합니다.
3. Copilot Chat의 도구 아이콘을 누르면 nachocode 도구 목록이 보입니다.

---

## 5. 사용하기 {#step-use}

Copilot Chat에서 **Agent** 모드를 선택하고 평소처럼 질문하면 필요할 때 nachocode 도구를 자동으로 호출합니다.  
도구 실행 전에 확인 창이 뜨면 **Continue**를 선택하세요.

- ex. “앱소스 1.10.0에서 `user` 네임스페이스를 쓸 수 있어?”

:::tip 도구 전체 목록
➡️ [제공 기능](../features)에서 사용할 수 있는 도구 7개를 확인할 수 있습니다.
:::

---

## 문제 해결 {#troubleshooting}

| 증상                           | 확인할 것                                                                                         |
| ------------------------------ | ------------------------------------------------------------------------------------------------- |
| **MCP: …** 명령이 보이지 않음  | VS Code와 GitHub Copilot 확장을 최신 버전으로 업데이트합니다.                                     |
| 서버 상태가 **Error**로 표시됨 | `.vscode/mcp.json`의 `"type": "http"`와 URL이 맞는지, JSON 문법(쉼표·따옴표)이 맞는지 확인합니다. |
| 채팅에서 도구가 호출되지 않음  | Chat 모드가 **Agent**인지, 도구 목록에서 nachocode 도구가 켜져 있는지 확인합니다.                 |

문제가 계속되면 [support@nachocode.io](mailto:support@nachocode.io)로 설정 파일 내용과 오류 메시지를 보내주세요.
