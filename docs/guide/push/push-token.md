---
sidebar_position: 1
sidebar_label: 푸시 토큰
pagination_label: 푸시 토큰 가이드
description: nachocode 푸시 토큰 가이드는 SDK 및 API를 활용한 개인 맞춤형 푸시 알림을 전송하기 위한 FCM 디바이스 토큰 등록부터 전송, 결과 분석 방법을 안내합니다.
keywords:
  [
    FCM 디바이스 토큰,
    FCM Device Token,
    푸시 토큰,
    푸시 토큰 등록해재,
    푸시 토큰 관리,
    푸시 토큰 제어,
    푸시 토픽 API,
    푸시 알림,
    개인화 푸시,
    타겟 푸시,
    타겟 알림,
    마케팅 푸시,
    고객 마케팅,
    사용자 맞춤 메시지,
    나쵸코드 푸시,
    nachocode 푸시,
    푸시 API,
  ]
image: /img/docs/thumbnails/GUIDE/push.png
---

# 푸시 토큰

import { ThumbnailImage } from '@site/src/components/common/image/thumbnail-image';

<ThumbnailImage src='/img/docs/thumbnails/GUIDE/push.png'/>

> 🔔 **최신화 일자:** 2026-01-13

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

### 푸시 토큰 생명 주기 {#token-lifecycle}

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

## nachocode 푸시 토큰 관리 시스템 {#nachocode-token-management}

### 토큰 등록 메커니즘 {#token-registration}

nachocode에서는 SDK를 통해 **푸시 토큰과 사용자 식별자를 매핑**하여 관리합니다.

:::info **토큰 등록 프로세스**

1. **디바이스에서 FCM 토큰 자동 생성**
2. **SDK를 통해 사용자 ID와 FCM 토큰을 nachocode 서버에 등록**
3. **nachocode 서버에서 userId-token 매핑 정보 저장**
4. **API를 통해 특정 사용자에게 푸시 알림 전송 가능**

:::

#### 유저 - 토큰 관계 및 활용

- 한 유저는 **여러 디바이스**에서 앱을 사용할 수 있으므로, **디바이스별 푸시 토큰이 각각 등록**됩니다.
- **유저 ID와 매칭 등록이 완료**된 후 아래 기능을 이용할 수 있습니다.
  - [**개인화 푸시 전송**](../../api/push/personal-push.endpoints#post-v2-users)
  - **유저 식별자로 토픽** [**구독**](../../api/push/topic-push.endpoints#post-v2-topic-subscription), [**취소**](../../api/push/topic-push.endpoints#delete-v2-topic-subscription)

---

#### 토큰 덮어쓰기 동작

```javascript
// 첫 번째 등록: user123과 디바이스 A의 토큰 매핑
Nachocode.push.registerPushToken('user123');

// 같은 디바이스에서 다른 사용자로 로그인
// 기존 매핑이 새로운 사용자로 덮어씌워짐
Nachocode.push.registerPushToken('user456');
```

**같은 디바이스**에서 `registerPushToken`을 다시 호출하면 **가장 마지막 userId로 매핑이 업데이트**됩니다.

---

### 유연한 식별자 활용 {#flexible-identifier}

#### 다양한 식별자 타입 지원

nachocode의 `userId` 매개변수는 **서비스의 실제 사용자 ID**에 국한되지 않습니다.

```javascript
// 서비스 사용자 ID
Nachocode.push.registerPushToken('john_123');

// 이메일 주소
Nachocode.push.registerPushToken('john_123@example.com');

// 커스텀 식별자
Nachocode.push.registerPushToken('premium_user_abc123');

// 닉네임 기반
Nachocode.push.registerPushToken('nickname_john');
```

**구별 가능한 고유한 문자열**이라면 어떤 형태든 사용할 수 있습니다.

---

#### 디바이스별 관리 전략

**한 사용자가 여러 디바이스를 사용**하는 환경에서 디바이스별로 푸시를 세밀하게 관리하고 싶다면 고유한 디바이스 ID를 생성하여 유저 ID와 매핑하여 서비스 서버를 통해 저장 후 활용 가능합니다.

```javascript
// 패턴 1: userId + 디바이스 타입
Nachocode.push.registerPushToken('user123_ios');
Nachocode.push.registerPushToken('user123_android');

// 패턴 2: userId + 고유 디바이스 ID
const deviceId = getUniqueDeviceId(); // 앱에서 생성한 고유 ID
Nachocode.push.registerPushToken(`user123_device_${deviceId}`);

// 패턴 3: UUID 기반 매핑
const deviceUUID = generateUUID();
Nachocode.push.registerPushToken(deviceUUID);

// 서비스 서버에서 user123 ↔ 디바이스 ID와 매핑하여 관리
```

---

### 토큰 매핑 삭제 전략 {#token-deletion-strategy}

#### 삭제가 필요한 시나리오

:::warning **삭제를 권장하는 상황**

- **푸시 알림 수신 거부** 설정 시
- **앱 탈퇴나 계정 삭제** 시 개인정보 보호
- **로그아웃된 유저에게 개인화 푸시를 보내면 안 되는** 정책인 경우

:::

#### 삭제하지 않아도 되는 경우

:::tip **삭제하지 않아도 되는 상황**

- **로그아웃된 유저에게도 시스템 알림이나 이벤트 알림을 보내는** UX인 경우
- **재로그인 시 자동으로 새로운 userId로 매핑이 덮어씌워지는** 특성을 활용하는 경우
- **마케팅이나 공지사항 등 비개인화 알림을 지속적으로 보내야** 하는 경우

:::

#### 실제 삭제 구현

- **API**

  - 유저가 보유한 모든 디바이스 토큰 매핑 삭제 ➡️[API](../../api/push/push-token.endpoints.md#delete-v2-token) 바로가기

- **SDK**

  - 단일 디바이스의 토큰 매핑 삭제

  ```javascript
  // 사용자 푸시 수신 거부 시
  function onPushNotificationDisabled() {
    Nachocode.push.deletePushToken().then(result => {
      if (result.status === 'success') {
        console.log('푸시 수신이 완전히 비활성화되었습니다.');
      }
    });
  }

  // 계정 탈퇴 시
  function onAccountDeletion(userId) {
    Nachocode.push.deletePushToken(userId).then(result => {
      if (result.status === 'success') {
        console.log('계정과 연관된 푸시 토큰이 삭제되었습니다.');
      }
    });
  }
  ```

---

## 토큰 관리 모범 사례 {#token-management-best-practices}

### 등록 시점 최적화 (권한 확인 우선) {#token-management-best-practice-1}

```javascript
// 로그인 성공 후 권한 확인 및 토큰 등록
async function onLoginSuccess(userId) {
  try {
    // 1. Nachocode SDK 로드 여부 확인
    if (!window.Nachocode) {
      console.error('Nachocode SDK가 로드되지 않았습니다.');
      return;
    }

    // 2. SDK 초기화
    await Nachocode.initAsync('your_api_key_here');

    // 3. 앱 환경 여부 확인
    if (!Nachocode.env.isApp()) {
      console.warn('앱 환경이 아닙니다. 푸시 토큰 등록을 건너뜁니다.');
      return;
    }

    // 4. 푸시 권한 확인 (권한이 없다면 요청)
    Nachocode.permission.checkPermission(
      { type: 'push', ask: true },
      async granted => {
        if (granted) {
          console.log('푸시 권한 허용됨');

          // 5. 권한이 있을 때만 토큰 등록
          const result = await Nachocode.push.registerPushToken(userId);

          if (result.status === 'success') {
            console.log('푸시 토큰 등록 성공');
          } else {
            console.error('푸시 토큰 등록 실패: ', result.message);
          }
        } else {
          console.warn('푸시 권한 거부됨. 토큰 등록 건너뜀.');
          // 필요시 사용자에게 푸시 권한의 중요성 안내
        }
      }
    );
  } catch (error) {
    console.error('푸시 설정 중 오류:', error);
  }
}
```

---

## **관련 문서**

:::info 기술 명세는 아래 문서를 참고하세요

[➡️ SDK 푸시 토큰 등록 메서드 보기](/docs/sdk/namespaces/push#register-push-token)

[➡️ SDK 푸시 토큰 삭제 메서드 보기](/docs/sdk/namespaces/push#delete-push-token)

[➡️ API 푸시 토큰 삭제 엔드포인트 보기](../../api/push/push-token.endpoints.md#delete-v2-token)

:::
