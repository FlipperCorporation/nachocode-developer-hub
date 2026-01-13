---
sidebar_position: 1
sidebar_label: 개요
pagination_label: nachocode API 개요
description: nachocode API를 통해 푸시 알림을 쉽고 빠르게 전송할 수 있습니다. API의 기본 사항과 인증 방법, 사용 방법을 안내합니다.
keywords:
  [
    개인화 푸시,
    토픽 푸시,
    나쵸코드 API,
    나쵸코드 사용법,
    나쵸코드 서비스,
    나쵸코드 연동,
    nachocode API,
    nachocode 서비스,
    nachocode 연동,
  ]
image: /img/docs/thumbnails/API/intro.svg
---

# nachocode API 개요

import { ThumbnailImage } from '@site/src/components/common/image/thumbnail-image';

<ThumbnailImage src='/img/docs/thumbnails/API/intro.svg'/>

> 🔔 **최신화 일자:** 2026-01-13

nachocode API는 nachocode 서비스의 기능을 활용할 수 있도록 다양한 API를 제공합니다.  
이 문서는 API의 개요, 주요 기능, 사용 방법 및 응답 구조를 안내합니다.

---

## 문서 구조

nachocode API 문서는 아래와 같은 구조로 구성되어 있습니다.

1. **개요**  
   nachocode API의 주요 기능과 개념을 설명합니다.

2. **푸시 알림**  
   nachocode 플랫폼에서 제공하는 푸시 알림 기능을 다룹니다.

3. **추가 예정 API**  
   향후 nachocode에서 제공할 다양한 API에 대한 문서가 포함될 예정입니다.

---

## 지원 기능

nachocode API는 아래와 같은 기능을 제공합니다.

### 푸시 알림

nachocode 플랫폼의 푸시 알림 서비스를 활용하여 특정 대상에게 특정 메세지를 실시간으로 전달하고, 토큰 또는 구독에 대한 제어가 가능합니다.

#### **개인화 푸시 알림 API**

- **유저 목록 형식 푸시 전송**: 유저 목록으로 동일한 메시지를 일괄 전송합니다.

  :::info 유저 목록 형식 푸시
  ➡️ [유저 목록 형식 푸시 알림 API](./push/personal-push.endpoints#post-v2-users) 바로가기
  :::

- **메세지 목록 형식 푸시 전송**: 각기 다른 유저에게 서로 다른 메시지를 전송합니다.
  :::info 메세지 목록 형식 푸시
  ➡️ [메세지 목록 형식 푸시 알림 API](./push/personal-push.endpoints#post-v2-messages) 바로가기
  :::

---

#### **토픽 푸시 알림 API**

- **토픽 푸시 전송**: 특정 토픽(집단)에 대해 동일한 메세지를 일괄 전송합니다.
  :::info 토픽 푸시
  ➡️ [토픽 푸시 알림 API](./push/topic-push.endpoints#post-v2-topic) 바로가기
  :::

- **토픽 구독 제어**: 유저 식별자를 통해 지정한 토픽을 구독, 또는 구독 해제시킵니다.
  :::info 구독/ 구독 해제
  ➡️ [토픽 구독 API](./push/topic-push.endpoints#post-v2-topic-subscription) 바로가기  
  ➡️ [토픽 구독 해제 API](./push/topic-push.endpoints#delete-v2-topic-subscription) 바로가기
  :::

---

#### **전체 푸시 알림 API**

- **전체 푸시 전송**: 앱을 설치한 모든 유저에 대해 동일한 메세지를 일괄 전송합니다.

  :::info 전체 푸시
  ➡️ [전체 푸시 알림 API](./push/all-push.endpoints#post-v2-all) 바로가기
  :::

---

#### **푸시 토큰 제어 API**

- **푸시 토큰 제거**: 유저 식별자를 통해 푸시 토큰을 등록 해제시킵니다.
  :::info 구독/ 구독 해제
  ➡️ [토픽 푸시 알림 API](./push/push-token.endpoints#delete-v2-token) 바로가기
  :::

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
**Secret Key** 유출이 의심될 경우, [nachocode 대시보드](https://nachocode.io/?utm_source=docs&utm_medium=documentation&utm_campaign=devguide)에서 반드시 재발급 받아야합니다.

:::

nachocode API는 모든 요청에서 인증 정보를 요구합니다.
다음 헤더를 반드시 포함해야 합니다.

| **Header**     | **Description**                                                                                                                   |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `x-api-key`    | [nachocode](https://nachocode.io/?utm_source=docs&utm_medium=documentation&utm_campaign=devguide) 대시보드에서 발급받은 API 키    |
| `x-secret-key` | [nachocode](https://nachocode.io/?utm_source=docs&utm_medium=documentation&utm_campaign=devguide) 대시보드에서 발급받은 Secret 키 |

요청 헤더에 `x-api-key`와 `x-secret-key`를 포함하므로 **클라이언트 사이드에서 호출 시 Secret Key가 노출**될 위험이 있습니다.

:::info
**API Key, Secret Key**는 안전하고 원활한 API 통신을 위해 필요한 정보로  
nachocode 대시보드 **[앱 설정]** > **[개발자 설정]** 탭에서 발급 가능합니다.

➡️ [개발자 설정 유저가이드 바로가기](https://docs.nachocode.io/ko/articles/app-developer)
:::

---

## API 사용 방법

### 요청 형식

nachocode API는 **JSON 형식**의 요청 및 응답을 사용합니다.  
HTTP 요청의 **Header**에는 인증 정보를 포함하며, **Body**에는 각 엔드포인트의 요구 사항에 맞는 데이터를 제공합니다.

#### 요청 예시

```bash
curl -X POST https://app.nachocode.io/api/push/TARGET_ENDPOINT \
  -H "Content-Type: application/json" \
  -H "x-api-key: YOUR_API_KEY" \
  -H "x-secret-key: YOUR_SECRET_KEY" \
  -d '{
    "title": "TITLE_DATA",
    "content": "CONTENT_DATA"
  }'
```

---

nachocode API를 활용하여 푸시 알림을 손쉽게 관리하고, 향후 추가될 다양한 기능을 기대하세요!  
궁금한 점이 있다면 [support@nachocode.io](mailto:support@nachocode.io)로 문의해주세요.

---
