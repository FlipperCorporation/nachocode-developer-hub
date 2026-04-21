---
sidebar_position: 1
sidebar_label: 개요
pagination_label: 푸시 알림 (Push Notification) 개요
description: nachocode 푸시 알림 가이드는 다양한 푸시 알림 유형의 개념, 설정, 활용법까지 포괄적으로 안내합니다.
keywords:
  [
    푸시 알림,
    앱 푸시,
    Push Notification,
    FCM,
    APNS,
    Firebase Cloud Messaging,
    Apple Push Notification Service,
    전체 푸시,
    토픽 푸시,
    마케팅 푸시,
    로컬 푸시,
    개인화 푸시,
    타겟 푸시,
    그룹 푸시,
    푸시 토큰,
    나쵸코드 푸시,
    nachocode 푸시,
  ]
image: /img/docs/thumbnails/GUIDE/push.png
---

# 푸시 알림 개요 {#intro}

import { BadgeWithVersion } from '@site/src/components/svg/badge-with-version';
import { ThumbnailImage } from '@site/src/components/common/image/thumbnail-image';

<ThumbnailImage src='/img/docs/thumbnails/GUIDE/push.png'/>

> 🔔 **최신화 일자:** 2026-04-04

## 푸시 알림 이해하기 {#understand}

**푸시 알림** (**Push Notification**)은 **모바일 앱이 사용자의 스마트폰 화면에 직접 메시지를 전송**하여 정보를 알리는 기능입니다.  
푸시 알림은 **앱이 실행 중이지 않을 때도 사용자에게 알림을 보낼 수 있어**, 사용자와의 지속적인 소통과 재방문 유도에 매우 효과적입니다.

:::tip 예시
예를 들어, 전자상거래 앱에서 주문한 상품이 배송을 시작했을 때 푸시 알림을 보내면,  
**사용자가 앱을 실행하지 않아도 자동으로 알림을 받아** 배송 상태를 즉시 확인할 수 있습니다.
:::

푸시 알림을 도입하면 앱 사용자는 필요한 정보를 **더 빠르고 적은 단계로 접근**할 수 있어 편리하고, 개발자나 마케터는 **앱 사용률과 리텐션을 높일 수** 있습니다.

이 가이드에서는 nachocode 앱에서 지원하는 다양한 푸시 알림 방식들과 설정 방법, 그리고 푸시 알림을 효과적으로 활용하는 방법을 소개합니다.

:::info 푸시 알림을 더 깊이 이해하고 싶다면?
푸시 알림이 왜 중요한지, 언제 보내야 하는지, 어떻게 사용자 경험을 개선하는지 더 자세히 알고 싶다면  
➡️ **[푸시 알림 이해하기](./understanding)** 가이드를 확인하세요.
:::

---

## nachocode 푸시 알림 기능 {#nachocode-features}

nachocode 서비스는 **Firebase Cloud Messaging** (**FCM**)을 기반으로 강력하고 유연한 푸시 알림 시스템을 제공합니다.

### 주요 기능

- **전체 푸시 (All Push)** – 앱을 설치한 모든 사용자에게 푸시 알림을 발송합니다.
- **개인화 푸시 (Personal Push)** – 특정 사용자 ID를 지정하여 개별 사용자에게 맞춤형 푸시 알림을 발송합니다.
- **토픽 푸시 (Topic Push)** – 특정 주제(토픽)를 구독한 사용자 그룹에게만 푸시 알림을 발송합니다.
- **마케팅 푸시 (Marketing Push)** – 광고성 푸시 알림을 법적 요구사항(정보통신망법)을 준수하여 관리하고 발송합니다.
- **로컬 푸시 (Local Push)** – 서버 없이 기기 내에서 예약된 시간에 푸시 알림을 표시합니다.

---

### 푸시 알림 유형별 특징 {#types}

푸시 알림 유형별 주요 활용 사례와 필수 조건은 다음과 같습니다.

| 푸시 알림 유형  | 주요 활용 사례                                 | 필수 조건                     |
| --------------- | ---------------------------------------------- | ----------------------------- |
| **전체 푸시**   | 공지사항, 시스템 점검 안내, 긴급 알림          | -                             |
| **개인화 푸시** | 주문 배송 알림, 결제 완료, 개인 맞춤형 메시지  | 사용자 ID 등록 필요           |
| **토픽 푸시**   | 카테고리별 알림, 지역별 알림, 관심사 기반 알림 | 토픽 구독 필요                |
| **마케팅 푸시** | 할인 쿠폰, 이벤트 안내, 신상품 출시            | 사용자 사전 동의 필수         |
| **로컬 푸시**   | 리마인더, 일정 알림, 반복 알림                 | SDK 설정만으로 즉시 사용 가능 |

---

### 간편한 SDK 통합

nachocode SDK는 복잡한 푸시 알림 설정과 관리를 **단 몇 줄의 코드**로 간단하게 처리할 수 있도록 설계되었습니다.

```javascript
// 푸시 토큰 등록
await Nachocode.push.registerToken('user123');

// 푸시 알림 토픽 구독
await Nachocode.push.subscribeTopic('promotion');

// 마케팅 푸시 동의 설정
await Nachocode.push.setMarketingAllowed(true);
```

---

## 푸시 알림이 수신되지 않는 경우 {#troubleshooting}

다음과 같은 상황에서 푸시 알림이 기기로 전송되지 않을 수 있습니다.

### 기기 공통

- 앱 설치 후 **한 번도 실행하지 않거나 로그인하지 않은 경우**
- 비행기 모드 등으로 인해 **백그라운드 데이터 및 동기화가 활성화되지 않은 경우**
- **Google 또는 Apple 푸시 서버에 문제가 발생한 경우**
- **FCM 토큰이 변경된 경우**
  - 앱이 삭제되었다가 재설치
  - 앱 데이터 삭제
  - 새 기기에서 앱 데이터 복원
  - 기존 토큰이 만료된 후 앱이 다시 활성화
- **FCM 토큰이 만료된 경우**
  - 해당 토큰으로 1개월 넘게 푸시 알림을 보내지 않음
  - 토큰이 등록되고 270일 이상 경과

### 안드로이드 기기

- **Google Play Services가 설치되지 않은 기기** _(중국에서 판매된 기기 또는 에뮬레이터 등)_
- **Google 계정에 로그인이 되지 않은 경우**
- **Google 계정 정보가 변경된 경우**
- 기기 자체를 **오래 사용하지 않다가 다시 사용한 경우** _(Google 계정 재로그인 필요)_
- 앱과 **오래 상호작용하지 않은 경우** _(앱이 최대 절전 모드 상태로 전환)_

:::info 앱 최대 절전 모드란?
➡️ [Android Developers - **앱 최대 절전 모드** 공식 문서 보러가기](https://developer.android.com/topic/performance/app-hibernation?hl=ko)
:::

### iOS 기기

- 반복적으로 비슷한 내용을 여러 차례 보내 **Apple 스팸 필터링이 적용된 경우**

---

## nachocode 플랫폼에서의 푸시 알림 설정 {#setting-push}

nachocode로 생성한 앱은 다양한 푸시 알림 방식을 지원하도록 설정할 수 있습니다.  
각 푸시 알림 방식마다 설정 방법이나 요구 조건이 다르므로, 아래 가이드를 참고하여 필요한 방식을 적용하세요.

### 푸시 토큰 (Push Token) {#setting-push-token}

nachocode **푸시 토큰 가이드**에서는 푸시 알림을 위한 FCM 토큰의 개념과 조회 방법, 그리고 토큰 관리 방법을 안내합니다.

:::info 푸시 토큰
➡️ [nachocode **푸시 토큰 가이드 보러가기**](./push-token)
:::

### 전체 푸시 (All Push) {#setting-all-push}

nachocode **전체 푸시 가이드**에서는 앱을 설치한 모든 사용자에게 푸시 알림을 발송하는 방법을 안내합니다.

:::info 전체 푸시
➡️ [nachocode **전체 푸시 가이드 보러가기**](./all-push)
:::

### 개인화 푸시 (Personal Push) {#setting-personal-push}

nachocode **개인 푸시 가이드**에서는 특정 사용자 ID를 지정하여 개별 사용자에게 맞춤형 푸시 알림을 발송하는 방법을 안내합니다.

:::info 개인화 푸시
➡️ [nachocode **개인화 푸시 가이드 보러가기**](./personal-push)
:::

### 토픽 푸시 (Topic Push) {#setting-topic-push}

nachocode **토픽 푸시 가이드**에서는 특정 토픽을 구독한 사용자 그룹에게 푸시 알림을 발송하는 방법과 토픽 구독 관리 방법을 안내합니다.

:::info 토픽 푸시
➡️ [nachocode **토픽 푸시 가이드 보러가기**](./topic-push)
:::

### 마케팅 푸시 (Marketing Push) {#setting-marketing-push}

nachocode **마케팅 푸시 가이드**에서는 광고성 푸시 알림의 법적 요구사항과 nachocode SDK를 활용한 마케팅 동의 관리 방법을 안내합니다.

:::info 마케팅 푸시
➡️ [nachocode **마케팅 푸시 가이드 보러가기**](./marketing-push)
:::

### 로컬 푸시 (Local Push) {#setting-local-push}

nachocode **로컬 푸시 가이드**에서는 서버 없이 기기 내에서 예약된 시간에 푸시 알림을 표시하는 방법을 안내합니다.

:::info 로컬 푸시
➡️ [nachocode **로컬 푸시 가이드 보러가기**](./local-push)
:::

---

:::tip 기술 지원
nachocode 팀은 여러분의 성공적인 프로젝트 구현을 위해 항상 도움을 준비하고 있습니다.  
기술적인 질문이나 피드백이 있다면 언제든지 [**support@nachocode.io**](mailto:support@nachocode.io)에 **이메일**을 보내주세요.
:::
