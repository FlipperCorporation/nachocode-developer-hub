---
sidebar_position: 1
sidebar_label: User Agent란
description: nachocode 앱의 User Agent 설정 및 정책을 안내합니다. 본 가이드는 User Agent 정의부터 nachocode가 설정하는 방식, 예외 처리 정책까지 포함하며 외부 연동 시 유용한 정보를 제공합니다.
keywords:
  [
    User Agent,
    유저 에이전트,
    nachocode 유저에이전트,
    앱 유저에이전트,
    웹뷰 User Agent,
    안드로이드 User Agent,
    iOS User Agent,
    커스텀 User Agent,
    외부 서비스 호환성,
  ]
---

# User Agent란

> 🔔 **최신화 일자:** 2025-05-28

User Agent는 클라이언트(웹 브라우저, 앱 등)가 서버에 요청을 보낼 때, 해당 클라이언트의 운영체제, 브라우저, 디바이스 등의 정보를 담아 전달하는 문자열입니다. 본 가이드는 User Agent의 기본 구조와 역할, 그리고 이를 기반으로 어떤 방식으로 사용자 환경을 식별하거나 대응할 수 있는지에 대해 설명합니다.
nachocode 앱의 User Agent 설정 방식은 [Custom User Agent 설정 문서](./custom-user-agent-configuration)를 참고해주세요.

---

## 1. User Agent 정의

User Agent는 HTTP 요청 시 클라이언트(웹 브라우저, 모바일 앱 등)의 정보가 담긴 문자열입니다.  
서버는 이를 통해 요청을 보낸 플랫폼(OS), 브라우저 종류, 렌더링 엔진, 디바이스 유형 등을 식별할 수 있으며, 사용자 경험 최적화, 보안 정책 적용, 플랫폼별 기능 분기 등에 활용됩니다.

nachocode는 자체 앱 빌더를 통해 생성된 앱(WebView 포함)에 명시적인 커스텀 User Agent(`nachocode_ios` / `nachocode_android`)를 삽입하여, nachocode 기반의 요청인지 여부를 서버 또는 클라이언트에서 식별할 수 있도록 설계되어 있습니다.

---

## 2. User Agent 형식

User Agent는 일반적으로 다음과 같은 구성 요소를 포함합니다:

```
{운영체제 및 디바이스 정보} {렌더링 엔진} {브라우저 정보} {기타 정보}
```

예시:

```
Mozilla/5.0 (Linux; Android 13; Pixel 7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Mobile Safari/537.36
```

- **운영체제 및 디바이스 정보**: `(Linux; Android 13; Pixel 7)`
- **렌더링 엔진**: `AppleWebKit/537.36`
- **브라우저 정보**: `Chrome/111.0.0.0 Mobile Safari/537.36`

nachocode는 여기에 추가로 앱 식별을 위한 **커스텀 문자열(Custom User Agent)** 을 덧붙입니다.  
Custom User Agent 대한 자세한 내용은 [Custom User Agent 설정](./custom-user-agent-configuration) 문서를 참고해주세요.

---
