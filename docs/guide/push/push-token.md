---
sidebar_position: 1
sidebar_label: 푸시 토큰
description: nachocode 푸시 토큰 가이드는 SDK 및 API를 활용한 개인 맞춤형 푸시 알림을 전송하기 위한 FCM 디바이스 토큰 등록부터 전송, 결과 분석 방법을 안내합니다.
keywords:
  [
    FCM 디바이스 토큰,
    FCM Device Token,
    푸시 토큰,
    푸시 알림,
    개인화 푸시,
    타겟 푸시,
    타겟 알림,
    마케팅 푸시,
    개인화 메시지,
    사용자 맞춤 메시지,
    나쵸코드 푸시,
    nachocode 푸시,
  ]
---

# 푸시 토큰

> 🔔 **최신화 일자:** 2025-06-13

## 푸시 토큰 이해하기 {#push-token-summary}

nachocode에서 **푸시 토큰**이란 [Firebase Cloud Messaging(FCM)](https://firebase.google.com/docs/cloud-messaging?hl=ko) 기반의 [**FCM Device Token**](#fcm-device-token)을 지칭합니다.

:::tip 참고 링크

[Firebase Cloud Message 공식문서](https://firebase.google.com/docs/cloud-messaging?hl=ko)

[FCM 등록 토큰 관리를 위한 권장사항](https://firebase.google.com/docs/cloud-messaging/manage-tokens?hl=ko)

:::

푸시 토큰은 특정 디바이스를 식별하는 고유한 토큰으로,  
nachocode는 이를 활용해 **정확한 대상 디바이스에 푸시 알림을 전송**합니다.

---

### FCM Device Token이란? {#fcm-device-token}

- Firebase SDK를 통해 Firebase에서 발급하는 문자열입니다.
- 앱이 디바이스에서 실행될 때 자동으로 생성됩니다.
- 이 토큰은 해당 디바이스와 앱 인스턴스를 고유하게 식별합니다.
- nachocode 서버는 이 토큰을 이용해 푸시 알림을 대상 사용자 디바이스로 전송합니다.

---

### 푸시 토큰 생명 주기

1. **생성 시점**

   - 사용자가 앱을 처음 실행할 경우 토큰이 자동으로 발급됩니다.

2. **변경 시점**

   - 앱이 삭제되었다가 재설치된 경우
   - 앱의 데이터가 삭제된 경우
   - 새 기기에서 앱을 복원한 경우
   - 기존 토큰이 만료된 후 앱이 다시 활성화된 경우

3. **만료 조건**

   - FCM에 1개월 넘게 연결되지 않아 비활성되었을 경우
   - 토큰이 손실, 파손되거나, 스토리지 이전 등의 사유로 유실된 경우
   - 토큰 등록 후 270일 이상 경과했을 경우

---

## 유저 - 토큰 관계 및 활용

- 한 유저는 **여러 디바이스**에서 앱을 사용할 수 있으므로, **디바이스별 푸시 토큰이 각각 등록**됩니다.
- **유저 ID와 매칭 등록이 완료**된 후 아래 기능을 이용할 수 있습니다.
  - [**개인화 푸시 전송**](../../api/push/v2/endpoints#post-v2-users)
  - **유저 식별자로 토픽** [**구독**](../../api/push/v2/endpoints#post-v2-topic-subscription), [**취소**](../../api/push/v2/endpoints#delete-v2-topic-subscription)

---
