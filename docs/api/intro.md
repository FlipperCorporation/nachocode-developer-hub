---
sidebar_position: 1
sidebar_label: 개요
pagination_label: nachocode API 개요
description: nachocode API를 통해 푸시 알림을 쉽고 빠르게 전송할 수 있습니다. API의 기본 사항과 인증 방법, 사용 방법을 안내합니다.
keywords:
  [
    나쵸코드 API,
    나쵸코드 사용법,
    나쵸코드 서비스,
    나쵸코드 연동,
    nachocode API,
    nachocode 서비스,
    nachocode 연동,
  ]
---

# nachocode API 개요

> 🔔 **최신화 일자:** 2025-06-13

nachocode API는 nachocode 서비스의 기능을 활용할 수 있도록 강력한 API를 제공합니다.

이 문서는 API의 개요, 주요 기능, 사용 방법 및 응답 구조를 안내합니다.

---

## 문서 구조

nachocode API 문서는 아래와 같은 구조로 구성되어 있습니다:

1. **개요**  
   nachocode API의 주요 기능과 개념을 설명합니다.

2. **푸시 알림**  
   nachocode 플랫폼에서 제공하는 푸시 알림 기능을 다룹니다.

3. **추가 예정 API**  
   향후 nachocode에서 제공할 다양한 API에 대한 문서가 포함될 예정입니다.

---

## 지원 기능

nachocode API는 아래와 같은 기능을 제공합니다:

### **푸시 알림 API**

nachocode 플랫폼의 푸시 알림 서비스를 활용하여 특정 대상에게 특정 메세지를 실시간으로 전달할 수 있습니다.

- **개인화 푸시 전송**: 특정 유저 ID에 대해 개별 메시지를 전송합니다.

  ➡️ [개인화 푸시 알림 API](./push/v2/endpoints#post-v2-users)

- **토픽 푸시 전송**: 특정 토픽(집단)에 대해 메세지를 일괄 전송합니다.

  ➡️ [토픽 푸시 알림 API](./push/v2/endpoints#post-v2-topic)

---

## 기본 사항

### API 도메인

nachocode API의 기본 도메인은 다음과 같습니다.

- **도메인명**: `https://app.nachocode.io`
- **API 요청 주소의 형식**: `https://app.nachocode.io/{path명}`

---

### API 호출

:::warning **중요**

nachocode API는 **반드시 서버 사이드에서 호출**되어야 합니다.

:::

nachocode API는 모든 요청에서 인증 정보를 요구합니다.

다음 헤더를 반드시 포함해야 합니다.

| **Header**     | **Description**                                                                                                                   |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `x-api-key`    | [nachocode](https://nachocode.io/?utm_source=docs&utm_medium=documentation&utm_campaign=devguide) 대시보드에서 발급받은 API 키    |
| `x-secret-key` | [nachocode](https://nachocode.io/?utm_source=docs&utm_medium=documentation&utm_campaign=devguide) 대시보드에서 발급받은 Secret 키 |

---

요청 헤더에 `x-api-key`와 `x-secret-key`를 포함하므로  
**클라이언트 사이드에서 호출 시 Secret Key가 노출**될 위험이 있습니다.

**Secret Key** 유출이 의심될 경우,  
[nachocode](https://nachocode.io/?utm_source=docs&utm_medium=documentation&utm_campaign=devguide) 대시보드에서 반드시 재발급 받아야합니다.

---

## API 사용 방법

### 요청 형식

nachocode API는 **JSON 형식**의 요청 및 응답을 사용합니다.  
HTTP 요청의 **Header**에는 인증 정보를 포함하며, **Body**에는 각 엔드포인트의 요구 사항에 맞는 데이터를 제공합니다.

#### 요청 예시

```http
POST /api/push/v2/users HTTP/1.1
Host: app.nachocode.io
Content-Type: application/json
x-api-key: your_api_key
x-secret-key: your_secret_key

{
  "userIds": ["user1", "user2"],
  "title": "Welcome to nachocode!",
  "content": "Discover the new features of nachocode.",
  "linkURL": "https://nachocode.io"
}
```

---

nachocode API를 활용하여 푸시 알림을 손쉽게 관리하고, 향후 추가될 다양한 기능을 기대하세요!  
궁금한 점이 있다면 [support@nachocode.io](mailto:support@nachocode.io)로 문의해주세요.

---
