---
description: nachocode SDK의 push 네임스페이스는 FCM 디바이스 푸시 토큰 관리, 로컬 푸시 알림 예약 및 취소 기능을 제공하여 앱 사용자와의 효과적인 소통을 돕습니다.
keywords:
  [
    푸시 알림,
    토픽 푸시,
    그룹 푸시,
    개인화 푸시,
    타겟 푸시,
    타겟 알림,
    사용자 맞춤 메시지,
    FCM 디바이스 토큰,
    push notification,
    topic push notification,
    group push notification,
    personal push notification,
    FCM Device Token,
  ]
image: /img/docs/thumbnails/SDK/push.svg
---

# 푸시 알림 (`push`)

import { BadgeWithVersion } from '@site/src/components/svg/badge-with-version';
import { ThumbnailImage } from '@site/src/components/common/image/thumbnail-image';

<ThumbnailImage src='/img/docs/thumbnails/SDK/push.svg'/>

> 🚀 **추가된 버전 :** <BadgeWithVersion type="SDK" version="v1.0.0" link="/docs/releases/v1/sdk/release-v-1-0-0" /> <BadgeWithVersion type="Android" version="v1.0.0" link="/docs/releases/v1/app-source/android/release-v-1-0-0" /> <BadgeWithVersion type="iOS" version="v1.0.0" link="/docs/releases/v1/app-source/ios/release-v-1-0-0" />  
> 🔔 **최신화 일자:** 2026-03-27

## **개요** {#overview}

`push` 네임스페이스는 **푸시 알림 관련 기능을 제공**합니다.

- **푸시 토큰을 nachocode 서버에 등록 및 삭제**
- **로컬 푸시 알림을 예약 및 취소**
- **푸시 토픽 구독 및 취소**
- **디바이스의 구독된 토픽 조회**
- **마케팅/야간 푸시 동의 관리**

**푸시 알림 사용법**을 더 자세히 알아보려면 아래 가이드를 참고해보세요.

:::info 푸시 알림 상세 가이드

[➡️ 푸시 토큰 가이드 보러가기](/docs/guide/push/push-token)

[➡️ 개인화 푸시 가이드 보러가기](/docs/guide/push/personal-push)

[➡️ 토픽 푸시 가이드 보러가기](/docs/guide/push/topic-push)

[➡️ 마케팅 푸시 가이드 보러가기](/docs/guide/push/marketing-push)

:::

---

### **필수 선행 작업** {#prerequisite}

nachocode SDK로 **푸시 알림 기능**을 사용하기 위해서는 [nachocode 대시보드](https://nachocode.io/?utm_source=docs&utm_medium=documentation&utm_campaign=devguide)의  
**[ 앱 기능 > 푸시 알림 > 설정 ]** 탭에서
**푸시 알림 설정이 모두 완료된 후 빌드된 경우에만** 작동합니다.

:::tip **푸시 알림 설정하기**

➡️ [**유저 가이드**](https://docs.nachocode.io/ko/articles/%ED%91%B8%EC%8B%9C-%EC%95%8C%EB%A6%BC%EA%B0%9C%EC%9D%B8%ED%99%94-0eb97bdb)를 따라 nachocode 푸시 알림 설정을 완료하세요.

:::

---

## **타입 정의** {#types}

### **`PushTokenResult`** {#push-token-result}

- _since :_ <BadgeWithVersion type="SDK" version="v1.6.3" link="/docs/releases/v1/sdk/release-v-1-6-3" />

```typescript
export declare type PushTokenResult =
  | {
      status: 'success';
      statusCode: 201;
      message: string;
    }
  | {
      status: 'error';
      statusCode: number;
      message: string;
      desc: string;
      code: string;
    };
```

| 속성명       | 타입                   | 필수 여부 | 설명                                           |
| ------------ | ---------------------- | --------- | ---------------------------------------------- |
| `status`     | `'success' \| 'error'` | ✅        | 푸시 토큰 요청 성공 여부                       |
| `statusCode` | `number`               | ✅        | 푸시 토큰 결과 상태 코드                       |
| `message`    | `string`               | ✅        | 결과 상세 메시지. (에러 발생 시 사유 반환)     |
| `desc`       | `string`               | ❌        | **_(optional)_** 오류 상세 내용 (에러 발생 시) |
| `code`       | `string`               | ❌        | **_(optional)_** 오류 코드 (에러 발생 시)      |

---

### **`PushTopicResult`** {#push-topic-result}

- _since :_ <BadgeWithVersion type="SDK" version="v1.6.0" link="/docs/releases/v1/sdk/release-v-1-6-0" />
- _lastupdated :_ <BadgeWithVersion type="SDK" version="v1.6.1" link="/docs/releases/v1/sdk/release-v-1-6-1" />

```typescript
export declare type PushTopicResult =
  | {
      status: 'success';
      /**
       * 푸시 토픽 구독 결과 상태 코드
       * - `200` : 성공
       * - `201` : 이미 토픽 구독 중
       * - `202` : 이미 구독 취소된 토픽
       * - `203` : FCM 구독 성공, nachocode 서버 저장 실패
       */
      statusCode: 200 | 201 | 202 | 203;
      message: string;
    }
  | {
      status: 'error';
      /**
       * 푸시 토픽 구독 결과 상태 코드
       * - `400` : 잘못된 요청
       * - `401` : 구독 실패
       * - `402` : 구독 취소 실패
       * - `500` : 내부 오류
       */
      statusCode: 400 | 401 | 402 | 500;
      errorCode: string; // 실패 시 에러 반환
      message: string; // 실패 시 에러 상세 사유 반환
    };
```

| 속성명       | 타입                   | 필수 여부 | 설명                                       |
| ------------ | ---------------------- | --------- | ------------------------------------------ |
| `status`     | `'success' \| 'error'` | ✅        | 푸시 토픽 구독 요청 성공 여부              |
| `statusCode` | `number`               | ✅        | 푸시 토픽 구독 결과 상태 코드              |
| `errorCode`  | `string`               | ❌        | **_(optional)_** 오류 코드 (에러 발생 시)  |
| `message`    | `string`               | ✅        | 결과 상세 메시지. (에러 발생 시 사유 반환) |

---

### **`LocalPushPayload`** {#local-push-payload}

- _since :_ <BadgeWithVersion type="SDK" version="v1.4.1" link="/docs/releases/v1/sdk/release-v-1-4-1" />

```typescript
export declare type LocalPushPayload = {
  title: string;
  content?: string;
  link?: string; // link willing to move when clicked
  usingAppIcon?: boolean; // default : true
  scheduledTime?: Date; // sends instantly if not set
  id?: number; // generates if not set
};
```

| 속성명          | 타입      | 필수 여부 | 설명                                                                        |
| --------------- | --------- | --------- | --------------------------------------------------------------------------- |
| `title`         | `string`  | ✅        | 푸시 알림의 제목                                                            |
| `content`       | `string`  | ❌        | **_(optional)_** 푸시 알림의 본문 메시지 (지정하지 않으면 제목만 노출)      |
| `link`          | `string`  | ❌        | **_(optional)_** 클릭 시 이동할 URL (지정하지 않으면 앱 열기)               |
| `usingAppIcon`  | `boolean` | ❌        | **_(optional)_** 앱 아이콘을 푸시 아이콘으로 사용할지 여부 (기본값: `true`) |
| `scheduledTime` | `Date`    | ❌        | **_(optional)_** 예약된 발송 시각 (지정하지 않으면 즉시 발송됨)             |
| `id`            | `number`  | ❌        | **_(optional)_** 예약된 푸시를 식별할 ID (지정하지 않으면 자동 생성)        |

---

### **`LocalPushResult`** {#local-push-result}

- _since :_ <BadgeWithVersion type="SDK" version="v1.4.1" link="/docs/releases/v1/sdk/release-v-1-4-1" />

```typescript
export declare type LocalPushResult = {
  status: 'success' | 'error';
  statusCode?: string; // error code when failed
  message?: string; // error message when failed
  id?: number; // push notification id
};
```

| 속성명       | 타입                   | 필수 여부 | 설명                                                         |
| ------------ | ---------------------- | --------- | ------------------------------------------------------------ |
| `status`     | `'success' \| 'error'` | ✅        | 푸시 알림 예약 성공 여부                                     |
| `statusCode` | `string`               | ❌        | **_(optional)_** 오류 발생 시 반환되는 코드                  |
| `message`    | `string`               | ❌        | **_(optional)_** 오류 발생 시 반환되는 메시지                |
| `id`         | `number`               | ❌        | **_(optional)_** 예약된 푸시 알림의 ID (취소할 때 사용 가능) |

---

### **`GetMarketingAllowedResult`** {#get-marketing-allowed-result}

- _since :_ <BadgeWithVersion type="SDK" version="v1.10.0" link="/docs/releases/v1/sdk/release-v-1-10-0" />
- _lastupdated :_ <BadgeWithVersion type="SDK" version="v1.10.1" link="/docs/releases/v1/sdk/release-v-1-10-1" /> - _타입명 변경_

```typescript
export declare type GetMarketingAllowedResult = {
  guest: boolean | null;
  user: boolean | null;
};
```

| 속성명  | 타입              | 필수 여부 | 설명                                                        |
| ------- | ----------------- | --------- | ----------------------------------------------------------- |
| `guest` | `boolean \| null` | ✅        | 게스트 사용자의 마케팅 푸시 동의 여부 (`null`: 미선택 상태) |
| `user`  | `boolean \| null` | ✅        | 로그인 사용자의 마케팅 푸시 동의 여부 (`null`: 미선택 상태) |

:::info 타입명 변경
v1.10.1부터 `MarketingAllowedResult`에서 `GetMarketingAllowedResult`로 타입명이 변경되었습니다.
:::

---

### **`SetMarketingAllowedResult`** {#set-marketing-allowed-result}

- _since :_ <BadgeWithVersion type="SDK" version="v1.10.1" link="/docs/releases/v1/sdk/release-v-1-10-1" />

```typescript
export declare type SetMarketingAllowedResult = {
  status: 'success' | 'error';
  statusCode: number;
  message?: string;
};
```

| 속성명       | 타입                   | 필수 여부 | 설명                                      |
| ------------ | ---------------------- | --------- | ----------------------------------------- |
| `status`     | `'success' \| 'error'` | ✅        | 마케팅 푸시 동의 설정 성공 여부           |
| `statusCode` | `number`               | ✅        | 결과 상태 코드                            |
| `message`    | `string`               | ❌        | **_(optional)_** 에러 발생 시 상세 메시지 |

---

### **`GetMarketingPreferenceResult`** {#get-marketing-preference-result}

- _since :_ <BadgeWithVersion type="SDK" version="v1.10.2" link="/docs/releases/v1/sdk/release-v-1-10-2" />

```typescript
export declare type GetMarketingPreferenceResult = {
  guest: {
    marketingAllowed: boolean | null;
    nightAllowed: boolean | null;
  };
  user: {
    marketingAllowed: boolean | null;
    nightAllowed: boolean | null;
  };
};
```

| 속성명                   | 타입              | 필수 여부 | 설명                                                          |
| ------------------------ | ----------------- | --------- | ------------------------------------------------------------- |
| `guest.marketingAllowed` | `boolean \| null` | ✅        | 게스트 사용자의 마케팅 푸시 동의 여부 _(`null`: 미선택 상태)_ |
| `guest.nightAllowed`     | `boolean \| null` | ✅        | 게스트 사용자의 야간 푸시 동의 여부 _(`null`: 미선택 상태)_   |
| `user.marketingAllowed`  | `boolean \| null` | ✅        | 로그인 사용자의 마케팅 푸시 동의 여부 _(`null`: 미선택 상태)_ |
| `user.nightAllowed`      | `boolean \| null` | ✅        | 로그인 사용자의 야간 푸시 동의 여부 _(`null`: 미선택 상태)_   |

---

## **메서드 목록** {#method-list}

| 메서드                                                      | 설명                                                       | 추가된 버전                                                                                     |
| ----------------------------------------------------------- | ---------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| [`registerPushToken(userId)`](#register-push-token)         | nachocode 서버에 **푸시 토큰을 등록**합니다.               | <BadgeWithVersion type="SDK" version="v1.0.0" link="/docs/releases/v1/sdk/release-v-1-0-0" />   |
| [`deletePushToken(userId?)`](#delete-push-token)            | nachocode 서버에서 **푸시 토큰을 삭제**합니다.             | <BadgeWithVersion type="SDK" version="v1.0.0" link="/docs/releases/v1/sdk/release-v-1-0-0" />   |
| [`sendLocalPush(payload, callback?)`](#send-local-push)     | **로컬 푸시 알림을 예약**합니다.                           | <BadgeWithVersion type="SDK" version="v1.4.1" link="/docs/releases/v1/sdk/release-v-1-4-1" />   |
| [`cancelLocalPush(id)`](#cancel-local-push)                 | **예약된 로컬 푸시 알림을 취소**합니다.                    | <BadgeWithVersion type="SDK" version="v1.4.1" link="/docs/releases/v1/sdk/release-v-1-4-1" />   |
| [`subscribePushTopic(topic)`](#subscribe-push-topic)        | **푸시 토픽을 구독**합니다.                                | <BadgeWithVersion type="SDK" version="v1.6.0" link="/docs/releases/v1/sdk/release-v-1-6-0" />   |
| [`unsubscribePushTopic(topic)`](#unsubscribe-push-topic)    | **푸시 토픽 구독을 취소**합니다.                           | <BadgeWithVersion type="SDK" version="v1.6.0" link="/docs/releases/v1/sdk/release-v-1-6-0" />   |
| [`getSubscriptionList(callback)`](#get-subscription-list)   | 디바이스의 현재 **구독 중인 푸시 토픽 목록을 조회**합니다. | <BadgeWithVersion type="SDK" version="v1.6.0" link="/docs/releases/v1/sdk/release-v-1-6-0" />   |
| [`setMarketingAllowed(allowed)`](#set-marketing-allowed)    | **마케팅 푸시 동의 여부를 설정**합니다.                    | <BadgeWithVersion type="SDK" version="v1.10.0" link="/docs/releases/v1/sdk/release-v-1-10-0" /> |
| [`getMarketingAllowed()`](#get-marketing-allowed)           | **마케팅 푸시 동의 상태를 조회**합니다.                    | <BadgeWithVersion type="SDK" version="v1.10.0" link="/docs/releases/v1/sdk/release-v-1-10-0" /> |
| [`setNightAllowed(allowed)`](#set-night-allowed)            | **야간 푸시 동의 여부를 설정**합니다.                      | <BadgeWithVersion type="SDK" version="v1.10.0" link="/docs/releases/v1/sdk/release-v-1-10-0" /> |
| [`getNightAllowed()`](#get-night-allowed)                   | **야간 푸시 동의 상태를 조회**합니다.                      | <BadgeWithVersion type="SDK" version="v1.10.0" link="/docs/releases/v1/sdk/release-v-1-10-0" /> |
| [`setMarketingPreference(data)`](#set-marketing-preference) | **마케팅 수신 동의를 일괄 설정**합니다.                    | <BadgeWithVersion type="SDK" version="v1.10.2" link="/docs/releases/v1/sdk/release-v-1-10-2" /> |
| [`getMarketingPreference()`](#get-marketing-preference)     | **마케팅 수신 동의를 일괄 조회**합니다.                    | <BadgeWithVersion type="SDK" version="v1.10.2" link="/docs/releases/v1/sdk/release-v-1-10-2" /> |

---

## **메서드 상세** {#method-details}

### **`registerPushToken(userId)`** {#register-push-token}

- _since :_ <BadgeWithVersion type="SDK" version="v1.0.0" link="/docs/releases/v1/sdk/release-v-1-0-0" />
- _updated :_ <BadgeWithVersion type="SDK" version="v1.6.3" link="/docs/releases/v1/sdk/release-v-1-6-3" /> - _반환 형식 변경, 내부 로직 최적화_

:::warning 주의
_[필수 선행 작업](#prerequisite)이 완료되어야 사용할 수 있습니다._
:::

#### 타입 정의 {#register-push-token-types}

```typescript
function registerPushToken(userId: string): Promise<PushTokenResult>;
```

#### 설명 {#register-push-token-summary}

nachocode 서버에 **현재 디바이스의 푸시 토큰을 등록**합니다.
이때, 특정 사용자(`userId`)를 식별자로 사용하여 **푸시 알림을 해당 사용자에게 전송할 수 있도록 설정**합니다.

:::info **토큰 등록에 대한 상세 정보**

##### **재등록 시 덮어쓰기 동작** {#register-push-token-reregister}

- **같은 디바이스**에서 `registerPushToken`을 다시 호출하면 **가장 마지막으로 전달된 `userId`로 매핑이 덮어씌워집니다**
- 로그아웃 후 다른 계정으로 재로그인 시 호출한다면, 새로운 `userId`로 자동 업데이트됩니다

##### **userId 매개변수의 유연성** {#register-push-token-flexible}

- **서비스 서버의 실제 사용자 ID가 아니어도 상관없습니다**
- **구별 가능한 고유한 식별자**라면 어떤 값이든 사용할 수 있습니다 (ex. 이메일, 닉네임, 커스텀 ID, UUID 등)

##### **디바이스별 관리가 필요한 경우** {#register-push-token-each-device}

- 한 사용자가 **여러 디바이스를 사용**하는 환경에서 디바이스별로 푸시를 관리하고 싶은 경우
  1. **UUID로** 유니크한 식별자를 생성 후 사용자와 매칭하여 저장 ( 1:N )
  2. **서비스 서버의 `userId` + 고유한 디바이스 ID**를 조합하여 유니크한 식별자를 생성 ( 1:N )
     - ex. `"user123_device_abc"`, `"user123_ios_main"` 등의 형태로 전달

:::

:::tip 푸시 토큰이란?
[푸시 토큰 가이드](../../guide/push/push-token)에서 상세 설명을 확인해보세요.
:::

#### 매개변수 {#register-push-token-parameters}

| 이름     | 타입     | 필수 여부 | 설명                         |
| -------- | -------- | --------- | ---------------------------- |
| `userId` | `string` | ✅        | 푸시 토큰을 연결할 사용자 ID |

#### 반환 값 {#register-push-token-returns}

| 타입                                             | 설명                            |
| ------------------------------------------------ | ------------------------------- |
| [`Promise<PushTokenResult>`](#push-token-result) | 푸시 토큰 등록 요청의 처리 결과 |

#### 사용 예제 {#register-push-token-examples}

```javascript
// ex. 유저의 로그인 성공 시 호출되는 콜백함수
function onLoginSuccess(userId) {
  // ex. userId : "nacho123"
  // "nacho123" 사용자 식별자로 푸시 토큰을 nachocode 서버에 등록합니다.
  Nachocode.push.registerPushToken(userId).then(result => {
    if (result.status === 'success') {
      console.log('푸시 토큰이 성공적으로 등록되었습니다.');
    } else {
      console.error(`푸시 토큰 등록 실패: ${result.message}`);
    }
  });
}
```

---

### **`deletePushToken(userId?)`** {#delete-push-token}

- _since :_ <BadgeWithVersion type="SDK" version="v1.0.0" link="/docs/releases/v1/sdk/release-v-1-0-0" />
- _updated : 반환 형식 변경, 내부 로직 최적화_ <BadgeWithVersion type="SDK" version="v1.6.3" link="/docs/releases/v1/sdk/release-v-1-6-3" />

:::warning 주의
_[필수 선행 작업](#prerequisite)이 완료되어야 사용할 수 있습니다._
:::

#### 타입 정의 {#delete-push-token-types}

```typescript
function deletePushToken(userId?: string): Promise<PushTokenResult>;
```

#### 설명 {#delete-push-token-summary}

nachocode 서버에서 **해당 사용자(`userId`)와 연결된 푸시 토큰을 삭제**합니다.

:::info **토큰 삭제 시점에 대한 고려사항**

##### **삭제하지 않는 경우** {#delete-push-token-when-to-delete}

- **로그아웃된 유저에게도 시스템 알림, 이벤트 알림 등 개인화된 푸시 알림을 전송**해야 하는 UX인 경우
- `registerPushToken` 함수는 같은 디바이스에서 다시 호출될 때 **가장 마지막 `userId`로 매핑을 덮어씌우므로**, 로그아웃 후 다른 계정으로 재로그인 시 자동으로 새로운 계정으로 매핑됩니다.

##### **삭제하는 경우** {#delete-push-token-when-not-to-delete}

- **푸시 알림 수신 거부** 설정 시 토큰 매핑을 삭제하여 알림을 완전히 차단
- **로그아웃된 유저에게 개인화 푸시 알림을 보내지 않는** UX이거나 보내면 안 되는 경우 매핑을 삭제하여 실수로 발송되는 것을 방지
- **앱 탈퇴나 계정 삭제** 시 개인정보 보호를 위한 토큰 매핑 제거

:::

**대부분의 경우 로그아웃 시마다 토큰을 삭제할 필요는 없으며**, 앱의 UX 정책에 따라 선택적으로 사용하세요.

:::tip 푸시 토큰이란?
[푸시 토큰 가이드](../../guide/push/push-token)에서 상세 설명을 확인해보세요.
:::

#### 매개변수 {#delete-push-token-parameters}

| 이름     | 타입     | 필수 여부 | 설명                                |
| -------- | -------- | --------- | ----------------------------------- |
| `userId` | `string` | ❌        | 삭제할 푸시 토큰이 연결된 사용자 ID |

#### 반환 값 {#delete-push-token-returns}

| 타입                                             | 설명                            |
| ------------------------------------------------ | ------------------------------- |
| [`Promise<PushTokenResult>`](#push-token-result) | 푸시 토큰 삭제 요청의 처리 결과 |

#### 사용 예제 {#delete-push-token-examples}

```javascript
// 현재 디바이스 토큰 삭제 (userId 생략 가능)
Nachocode.push.deletePushToken().then(result => {
  if (result.status === 'success') {
    console.log('현재 디바이스의 푸시 토큰이 삭제되었습니다.');
  } else {
    console.error(`푸시 토큰 삭제 실패: ${result.message}`);
  }
});
```

```javascript
// ex. 유저의 로그아웃 시 호출되는 콜백함수
function onLogout(userId) {
  // ex. userId : "nacho123"
  // "nacho123" 사용자 식별자에 해당하는 푸시 토큰을 삭제합니다.
  Nachocode.push.deletePushToken(userId).then(() => {
    if (result.status === 'success') {
      console.log('유저 푸시 토큰이 성공적으로 삭제되었습니다.');
    } else {
      console.error(`푸시 토큰 삭제 실패: ${result.message}`);
    }
  });
}
```

---

### **`sendLocalPush(payload, callback?)`** {#send-local-push}

- _since :_ <BadgeWithVersion type="SDK" version="v1.4.1" link="/docs/releases/v1/sdk/release-v-1-4-1" />

#### 타입 정의 {#send-local-push-types}

```typescript
function sendLocalPush(
  payload: LocalPushPayload,
  callback?: (result: LocalPushResult) => void
): void;
```

#### 설명 {#send-local-push-summary}

로컬 푸시 알림을 예약하고, 특정 시각(`scheduledTime`)에 디바이스에서 푸시 알림을 표시할 수 있습니다.
즉시 발송하거나 예약 발송이 가능하며, 예약된 알림은 `id` 값을 사용해 취소할 수도 있습니다.

#### 매개변수 {#send-local-push-parameters}

| 이름       | 타입                                                      | 필수 여부 | 설명                           |
| ---------- | --------------------------------------------------------- | --------- | ------------------------------ |
| `payload`  | [`LocalPushPayload`](#local-push-payload)                 | ✅        | 예약할 로컬 푸시 데이터        |
| `callback` | [`(result: LocalPushResult) => void`](#local-push-result) | ❌        | 예약 성공 여부를 반환하는 콜백 |

#### 반환 값 {#send-local-push-returns}

해당 메서드는 반환 값을 가지지 않으며, 결과는 `callback`을 통해 비동기적으로 제공됩니다.

#### 사용 예제 {#send-local-push-examples}

```javascript
// 1. 즉시 발송 (예약 시간 없이)
// `scheduledTime`을 지정하지 않으면 즉시 발송됩니다.
Nachocode.push.sendLocalPush(
  {
    title: '깜짝 쿠폰 발송!',
    content: '지금 바로 앱에서 확인해보세요!.',
    link: 'https://nachocode.io/pricing',
  },
  result => {
    if (result.status === 'success') {
      console.log(`푸시 알림이 즉시 발송되었습니다.`);
    } else {
      console.error(`푸시 알림 발송 실패: ${result.message}`);
    }
  }
);
```

```javascript
// 2. 예약 발송
// `scheduledTime`을 지정하면 해당 시각에 알림이 표시됩니다.
Nachocode.push.sendLocalPush(
  {
    title: '미팅 알림',
    content: '회의 시작 10분 전입니다.',
    scheduledTime: new Date('2025-03-01T10:00:00Z'),
    id: 101,
  },
  result => {
    if (result.status === 'success') {
      console.log(`푸시 알림이 예약되었습니다. (ID: ${result.id})`);
    } else {
      console.error(`푸시 예약 실패: ${result.message}`);
    }
  }
);
```

---

### **`cancelLocalPush(id)`** {#cancel-local-push}

- _since :_ <BadgeWithVersion type="SDK" version="v1.4.1" link="/docs/releases/v1/sdk/release-v-1-4-1" />

#### 타입 정의 {#cancel-local-push-types}

```typescript
function cancelLocalPush(id: number): void;
```

#### 설명 {#cancel-local-push-summary}

예약된 로컬 푸시 알림을 취소합니다.
취소하려는 푸시 알림의 `id` 값을 전달해야 합니다.

[`sendLocalPush`](#send-local-push)에서 반환된 `id`를 사용합니다.

#### 매개변수 {#cancel-local-push-parameters}

| 이름 | 타입     | 필수 여부 | 설명                         |
| ---- | -------- | --------- | ---------------------------- |
| `id` | `number` | ✅        | 취소할 예약된 푸시 알림의 ID |

#### 반환 값 {#cancel-local-push-returns}

해당 메서드는 반환 값을 가지지 않습니다.

#### 사용 예제 {#cancel-local-push-examples}

```javascript
// 예약된 푸시 알림 취소
Nachocode.push.cancelLocalPush(101);
console.log('푸시 알림이 취소되었습니다.');
```

---

### **`subscribePushTopic(topic)`** {#subscribe-push-topic}

- _since :_ <BadgeWithVersion type="SDK" version="v1.6.0" link="/docs/releases/v1/sdk/release-v-1-6-0" />
- _lastupdated :_ <BadgeWithVersion type="SDK" version="v1.6.1" link="/docs/releases/v1/sdk/release-v-1-6-1" />

:::warning 주의
_[필수 선행 작업](#prerequisite)이 완료되어야 사용할 수 있습니다._
:::

#### 타입 정의 {#subscribe-push-topic-types}

```typescript
function subscribePushTopic(topic: string): Promise<PushTopicResult>;
```

#### 설명 {#subscribe-push-topic-summary}

지정한 푸시 토픽을 구독합니다.
구독이 성공하면 [**nachocode 서버 API**](../../api/push/topic-push.endpoints#post-v2-topic)를 통해서 발송하거나
**FCM에서 해당 토픽으로 직접 발송**한 메시지를 수신할 수 있습니다.

#### 매개변수 {#subscribe-push-topic-parameters}

| 이름    | 타입     | 필수 여부 | 설명             |
| ------- | -------- | --------- | ---------------- |
| `topic` | `string` | ✅        | 구독할 토픽 이름 |

#### 반환 값 {#subscribe-push-topic-returns}

| 타입                       | 설명                              |
| -------------------------- | --------------------------------- |
| `Promise<PushTopicResult>` | 구독 성공 또는 실패 정보를 포함함 |

#### 사용 예제 {#subscribe-push-topic-examples}

```javascript
try {
  const result = await Nachocode.push.subscribePushTopic('event-promotion');
  if (result.status === 'success') {
    console.log('토픽 구독 성공');
  } else {
    console.error('토픽 구독 실패: ', result.message);
  }
} catch (err) {
  console.error('토픽 구독 중 오류 발생:', err);
}
```

---

### **`unsubscribePushTopic(topic)`** {#unsubscribe-push-topic}

- _since :_ <BadgeWithVersion type="SDK" version="v1.6.0" link="/docs/releases/v1/sdk/release-v-1-6-0" />
- _lastupdated :_ <BadgeWithVersion type="SDK" version="v1.6.1" link="/docs/releases/v1/sdk/release-v-1-6-1" />

:::warning 주의
_[필수 선행 작업](#prerequisite)이 완료되어야 사용할 수 있습니다._
:::

#### 타입 정의 {#unsubscribe-push-topic-types}

```typescript
function unsubscribePushTopic(topic: string): Promise<PushTopicResult>;
```

#### 설명 {#unsubscribe-push-topic-summary}

지정한 푸시 토픽 구독을 해지합니다.
이후 해당 토픽으로 발송된 메시지를 더 이상 수신하지 않게 됩니다.

#### 매개변수 {#unsubscribe-push-topic-parameters}

| 이름    | 타입     | 필수 여부 | 설명             |
| ------- | -------- | --------- | ---------------- |
| `topic` | `string` | ✅        | 해지할 토픽 이름 |

#### 반환 값 {#unsubscribe-push-topic-returns}

| 타입                       | 설명                                 |
| -------------------------- | ------------------------------------ |
| `Promise<PushTopicResult>` | 구독 해지 성공 또는 실패 정보를 포함 |

#### 사용 예제 {#unsubscribe-push-topic-examples}

```javascript
try {
  const result = await Nachocode.push.unsubscribePushTopic('event-promotion');
  if (result.status === 'success') {
    console.log('토픽 구독 해지 성공');
  } else {
    console.error('토픽 구독 해지 실패: ', result.message);
  }
} catch (err) {
  console.error('토픽 구독 해지 중 오류 발생:', err);
}
```

---

### **`getSubscriptionList(callback)`** {#get-subscription-list}

- _since :_ <BadgeWithVersion type="SDK" version="v1.6.0" link="/docs/releases/v1/sdk/release-v-1-6-0" />

:::warning 주의
_[필수 선행 작업](#prerequisite)이 완료되어야 사용할 수 있습니다._
:::

#### 타입 정의 {#get-subscription-list-types}

```typescript
function getSubscriptionList(
  callback: (subscriptionList: Array<string>) => void
): void;
```

#### 설명 {#get-subscription-list-summary}

현재 디바이스에서 구독 중인 **푸시 토픽 목록을 조회**합니다.

#### 매개변수 {#get-subscription-list-parameters}

| 이름       | 타입                                   | 필수 여부 | 설명                                  |
| ---------- | -------------------------------------- | --------- | ------------------------------------- |
| `callback` | `(subscriptionList: string[]) => void` | ✅        | 구독된 토픽 이름 목록을 콜백으로 수신 |

#### 사용 예제 {#get-subscription-list-examples}

```javascript
Nachocode.push.getSubscriptionList(list => {
  console.log('현재 구독 중인 토픽 목록:', list);
});
```

---

### **`setMarketingAllowed(allowed)`** {#set-marketing-allowed}

- _since :_ <BadgeWithVersion type="SDK" version="v1.10.0" link="/docs/releases/v1/sdk/release-v-1-10-0" />
- _lastupdated :_ <BadgeWithVersion type="SDK" version="v1.10.1" link="/docs/releases/v1/sdk/release-v-1-10-1" /> - _반환 형식 변경_

:::warning 주의
_[필수 선행 작업](#prerequisite)이 완료되어야 사용할 수 있습니다._
:::

#### 타입 정의 {#set-marketing-allowed-types}

```typescript
function setMarketingAllowed(
  allowed: boolean
): Promise<SetMarketingAllowedResult>;
```

#### 설명 {#set-marketing-allowed-summary}

디바이스 사용자의 **광고성 푸시 알림 수신 동의 여부를 설정**합니다.  
로그인 (`guest`, `user`) 상태에 따라 **게스트(비로그인) 동의**와 **유저(로그인) 동의**가 별도로 관리됩니다.

- **비로그인 상태**: 게스트 동의가 저장됩니다.
- **로그인 상태**: 유저 동의가 저장됩니다.
- **로그인 상태로의 전환**은 [`Nachocode.user.setUserId(userId)`](/docs/sdk/namespaces/user#set-user-id)를 호출하여 처리합니다.
- **비로그인 상태로의 전환**은 [`Nachocode.user.deleteUserId()`](/docs/sdk/namespaces/user#delete-user-id)를 호출하여 처리합니다.

앱 유저의 로그인 상태에서 마케팅 수신 동의 여부 변경 시,  
**nachocode 측 서버에서 해당 `userId`에 해당하는 모든 디바이스를 찾아 동의 여부를 동기화**합니다.

:::info 정보통신망법 준수
광고성 정보 알림 전송은 [**정보통신망 이용촉진 및 정보보호 등에 관한 법률 제50조**](https://www.law.go.kr/LSW/lsLawLinkInfo.do?chrClsCd=010202&lsJoLnkSeq=1000688185&lsId=000030)에 따라 사용자의 **사전 동의**가 반드시 필요합니다.
:::

:::tip 마케팅 푸시 상세 가이드
게스트/유저 동의 관리 및 법적 준수 사항에 대한 자세한 내용은 [마케팅 푸시 가이드](/docs/guide/push/marketing-push)를 참고하세요.
:::

#### 매개변수 {#set-marketing-allowed-parameters}

| 이름      | 타입      | 필수 여부 | 설명                                                   |
| --------- | --------- | --------- | ------------------------------------------------------ |
| `allowed` | `boolean` | ✅        | 마케팅 푸시 수신 동의 여부 (`true` 동의, `false` 거부) |

#### 반환 값 {#set-marketing-allowed-returns}

| 타입                                                                  | 설명                            |
| --------------------------------------------------------------------- | ------------------------------- |
| [`Promise<SetMarketingAllowedResult>`](#set-marketing-allowed-result) | 마케팅 푸시 동의 설정 처리 결과 |

#### 사용 예제 {#set-marketing-allowed-examples}

```javascript
// 마케팅 푸시 수신 동의
const result = await Nachocode.push.setMarketingAllowed(true);
if (result.status === 'success') {
  console.log('마케팅 푸시 수신에 동의하였습니다.');
} else {
  console.error('마케팅 푸시 동의 설정 실패: ', result.message);
}

// 마케팅 푸시 수신 거부
const result = await Nachocode.push.setMarketingAllowed(false);
if (result.status === 'success') {
  console.log('마케팅 푸시 수신을 거부하였습니다.');
} else {
  console.error('마케팅 푸시 거부 설정 실패: ', result.message);
}
```

---

### **`getMarketingAllowed()`** {#get-marketing-allowed}

- _since :_ <BadgeWithVersion type="SDK" version="v1.10.0" link="/docs/releases/v1/sdk/release-v-1-10-0" />

:::warning 주의
_[필수 선행 작업](#prerequisite)이 완료되어야 사용할 수 있습니다._
:::

#### 타입 정의 {#get-marketing-allowed-types}

```typescript
function getMarketingAllowed(): Promise<GetMarketingAllowedResult>;
```

#### 설명 {#get-marketing-allowed-summary}

디바이스 사용자의 **광고성 푸시 알림 수신 동의 상태를 조회**합니다.  
**게스트(비로그인) 사용자**와 **유저(로그인) 사용자**의 동의 상태를 별도로 반환합니다.

- `guest`: 비로그인 상태에서 설정한 마케팅 동의 여부
- `user`: 로그인 상태에서 설정한 마케팅 동의 여부
- 각 값은 `true`(동의), `false`(거부), `null`(미선택) 중 하나입니다

#### 반환 값 {#get-marketing-allowed-returns}

| 타입                                                                  | 설명                       |
| --------------------------------------------------------------------- | -------------------------- |
| [`Promise<GetMarketingAllowedResult>`](#get-marketing-allowed-result) | 마케팅 푸시 동의 상태 정보 |

#### 사용 예제 {#get-marketing-allowed-examples}

```javascript
// 마케팅 푸시 동의 상태 조회
// { guest: boolean | null, user: boolean | null } 형태로 반환
const marketingAllowed = await Nachocode.push.getMarketingAllowed();

console.log('게스트 사용자 동의 상태: ', marketingAllowed.guest);
console.log('로그인 사용자 동의 상태: ', marketingAllowed.user);

// 동의 상태에 따른 로직 작성
if (marketingAllowed.user === true) {
  // true: 마케팅 수신 동의한 상태
  // ...
} else if (marketingAllowed.user === false) {
  // false: 마케팅 수신 거부한 상태
  // ...
} else {
  // null: 아직 선택하지 않은 상태
  // ...
}
```

---

### **`setNightAllowed(allowed)`** {#set-night-allowed}

- _since :_ <BadgeWithVersion type="SDK" version="v1.10.0" link="/docs/releases/v1/sdk/release-v-1-10-0" />
- _lastupdated :_ <BadgeWithVersion type="SDK" version="v1.10.1" link="/docs/releases/v1/sdk/release-v-1-10-1" /> - _반환 형식 변경_

:::warning 주의
_[필수 선행 작업](#prerequisite)이 완료되어야 사용할 수 있습니다._
:::

#### 타입 정의 {#set-night-allowed-types}

```typescript
function setNightAllowed(allowed: boolean): Promise<SetMarketingAllowedResult>;
```

#### 설명 {#set-night-allowed-summary}

디바이스 사용자의 **야간(21:00 ~ 08:00) 푸시 알림 수신 동의 여부를 설정**합니다.

앱 유저의 로그인 상태에서 야간 마케팅 수신 동의 여부 변경 시,  
**nachocode 측 서버에서 해당 `userId`에 해당하는 모든 디바이스를 찾아 동의 여부를 동기화**합니다.

:::info 정보통신망법 준수
야간 시간대(21:00 ~ 08:00) 광고성 정보 전송은 [**정보통신망 이용촉진 및 정보보호 등에 관한 법률 제50조 3항**](https://www.law.go.kr/LSW/lsLawLinkInfo.do?chrClsCd=010202&lsJoLnkSeq=1000688185&lsId=000030)에 따라 수신자의 **별도 사전 동의**가 반드시 필요합니다.
:::

#### 매개변수 {#set-night-allowed-parameters}

| 이름      | 타입      | 필수 여부 | 설명                                                 |
| --------- | --------- | --------- | ---------------------------------------------------- |
| `allowed` | `boolean` | ✅        | 야간 푸시 수신 동의 여부 (`true` 동의, `false` 거부) |

#### 반환 값 {#set-night-allowed-returns}

| 타입                                                                  | 설명                          |
| --------------------------------------------------------------------- | ----------------------------- |
| [`Promise<SetMarketingAllowedResult>`](#set-marketing-allowed-result) | 야간 푸시 동의 설정 처리 결과 |

#### 사용 예제 {#set-night-allowed-examples}

```javascript
// 야간 푸시 수신 동의
const result = await Nachocode.push.setNightAllowed(true);
if (result.status === 'success') {
  console.log('야간 푸시 수신에 동의하였습니다.');
} else {
  console.error('야간 푸시 동의 설정 실패: ', result.message);
}

// 야간 푸시 수신 거부
const result = await Nachocode.push.setNightAllowed(false);
if (result.status === 'success') {
  console.log('야간 푸시 수신을 거부하였습니다.');
} else {
  console.error('야간 푸시 거부 설정 실패: ', result.message);
}
```

---

### **`getNightAllowed()`** {#get-night-allowed}

- _since :_ <BadgeWithVersion type="SDK" version="v1.10.0" link="/docs/releases/v1/sdk/release-v-1-10-0" />
- _lastupdated :_ <BadgeWithVersion type="SDK" version="v1.10.2" link="/docs/releases/v1/sdk/release-v-1-10-2" /> - _반환 타입 변경_

:::warning 주의
_[필수 선행 작업](#prerequisite)이 완료되어야 사용할 수 있습니다._
:::

#### 타입 정의 {#get-night-allowed-types}

```typescript
function getNightAllowed(): Promise<GetMarketingAllowedResult>;
```

#### 설명 {#get-night-allowed-summary}

디바이스 사용자의 **야간 푸시 알림 수신 동의 상태를 조회**합니다.  
**게스트(비로그인) 사용자**와 **유저(로그인) 사용자**의 동의 상태를 별도로 반환합니다.

- **`guest`**: 비로그인 상태에서 설정한 야간 푸시 동의 여부
- **`user`**: 로그인 상태에서 설정한 야간 푸시 동의 여부
- 각 값은 **`true`(동의)**, **`false`(거부)**, **`null`(미선택)** 중 하나입니다

#### 반환 값 {#get-night-allowed-returns}

| 타입                                                                  | 설명                     |
| --------------------------------------------------------------------- | ------------------------ |
| [`Promise<GetMarketingAllowedResult>`](#get-marketing-allowed-result) | 야간 푸시 동의 상태 정보 |

#### 사용 예제 {#get-night-allowed-examples}

```javascript
// 야간 푸시 동의 상태 조회
// { guest: boolean | null, user: boolean | null } 형태로 반환
const nightAllowed = await Nachocode.push.getNightAllowed();

console.log('게스트 사용자 야간 동의 상태: ', nightAllowed.guest);
console.log('로그인 사용자 야간 동의 상태: ', nightAllowed.user);

// 동의 상태에 따른 로직 작성
if (nightAllowed.user === true) {
  // true: 야간 수신 동의한 상태
  // ...
} else if (nightAllowed.user === false) {
  // false: 야간 수신 거부한 상태
  // ...
} else {
  // null: 아직 선택하지 않은 상태
  // ...
}
```

---

### **`setMarketingPreference(data)`** {#set-marketing-preference}

- _since :_ <BadgeWithVersion type="SDK" version="v1.10.2" link="/docs/releases/v1/sdk/release-v-1-10-2" />

:::warning 주의
_[필수 선행 작업](#prerequisite)이 완료되어야 사용할 수 있습니다._
:::

#### 타입 정의 {#set-marketing-preference-types}

```typescript
function setMarketingPreference(data: {
  marketingAllowed: boolean;
  nightAllowed: boolean;
}): Promise<SetMarketingAllowedResult>;
```

#### 설명 {#set-marketing-preference-summary}

디바이스 사용자의 **마케팅 푸시 동의**와 **야간 푸시 동의**를 **한 번에 설정**합니다.  
개별 메서드(`setMarketingAllowed`, `setNightAllowed`)를 두 번 호출하는 대신,  
한 번의 호출로 두 가지 동의를 동시에 처리할 수 있습니다.

로그인 (`guest`, `user`) 상태에 따라 **게스트(비로그인) 동의**와 **유저(로그인) 동의**가 별도로 관리됩니다.

- **비로그인 상태**: 게스트 동의가 저장됩니다.
- **로그인 상태**: 유저 동의가 저장됩니다.
- **로그인 상태로의 전환**은 [`Nachocode.user.setUserId(userId)`](/docs/sdk/namespaces/user#set-user-id)를 호출하여 처리합니다.
- **비로그인 상태로의 전환**은 [`Nachocode.user.deleteUserId()`](/docs/sdk/namespaces/user#delete-user-id)를 호출하여 처리합니다.

앱 유저의 로그인 상태에서 마케팅 수신 동의 변경 시,  
**nachocode 측 서버에서 해당 `userId`에 해당하는 모든 디바이스를 찾아 동의 여부를 동기화**합니다.

:::tip 마케팅 푸시 상세 가이드
게스트/유저 동의 관리 및 법적 준수 사항에 대한 자세한 내용은 [마케팅 푸시 가이드](/docs/guide/push/marketing-push)를 참고하세요.
:::

#### 매개변수 {#set-marketing-preference-parameters}

| 이름                    | 타입      | 필수 여부 | 설명                                                   |
| ----------------------- | --------- | --------- | ------------------------------------------------------ |
| `data`                  | `object`  | ✅        | 마케팅 수신 동의 설정 데이터                           |
| `data.marketingAllowed` | `boolean` | ✅        | 마케팅 푸시 수신 동의 여부 (`true` 동의, `false` 거부) |
| `data.nightAllowed`     | `boolean` | ✅        | 야간 푸시 수신 동의 여부 (`true` 동의, `false` 거부)   |

#### 반환 값 {#set-marketing-preference-returns}

| 타입                                                                  | 설명                            |
| --------------------------------------------------------------------- | ------------------------------- |
| [`Promise<SetMarketingAllowedResult>`](#set-marketing-allowed-result) | 마케팅 수신 동의 설정 처리 결과 |

#### 사용 예제 {#set-marketing-preference-examples}

```javascript
// 마케팅 푸시와 야간 푸시를 모두 동의
const result = await Nachocode.push.setMarketingPreference({
  marketingAllowed: true,
  nightAllowed: true,
});

if (result.status === 'success') {
  console.log('마케팅 수신 동의가 설정되었습니다.');
} else {
  console.error('마케팅 수신 동의 설정 실패:', result.message);
}

// 마케팅 푸시만 동의하고 야간 푸시는 거부
const result2 = await Nachocode.push.setMarketingPreference({
  marketingAllowed: true,
  nightAllowed: false,
});

if (result2.status === 'success') {
  console.log('마케팅 푸시 동의, 야간 푸시 거부로 설정되었습니다.');
}
```

---

### **`getMarketingPreference()`** {#get-marketing-preference}

- _since :_ <BadgeWithVersion type="SDK" version="v1.10.2" link="/docs/releases/v1/sdk/release-v-1-10-2" />

:::warning 주의
_[필수 선행 작업](#prerequisite)이 완료되어야 사용할 수 있습니다._
:::

#### 타입 정의 {#get-marketing-preference-types}

```typescript
function getMarketingPreference(): Promise<GetMarketingPreferenceResult>;
```

#### 설명 {#get-marketing-preference-summary}

디바이스 사용자의 **마케팅 푸시 동의**와 **야간 푸시 동의 상태를 한 번에 조회**합니다.  
**게스트(비로그인) 사용자**와 **유저(로그인) 사용자**의 동의 상태를 별도로 반환합니다.

- **`guest.marketingAllowed`**: 비로그인 상태의 마케팅 푸시 동의 여부
- **`guest.nightAllowed`**: 비로그인 상태의 야간 푸시 동의 여부
- **`user.marketingAllowed`**: 로그인 상태의 마케팅 푸시 동의 여부
- **`user.nightAllowed`**: 로그인 상태의 야간 푸시 동의 여부
- 각 값은 **`true`(동의)**, **`false`(거부)**, **`null`(미선택)** 중 하나입니다

#### 반환 값 {#get-marketing-preference-returns}

| 타입                                                                        | 설명                       |
| --------------------------------------------------------------------------- | -------------------------- |
| [`Promise<GetMarketingPreferenceResult>`](#get-marketing-preference-result) | 마케팅 수신 동의 상태 정보 |

#### 사용 예제 {#get-marketing-preference-examples}

```javascript
// 마케팅 수신 동의 조회
const preference = await Nachocode.push.getMarketingPreference();

console.log('게스트 마케팅 동의:', preference.guest.marketingAllowed);
console.log('게스트 야간 동의:', preference.guest.nightAllowed);
console.log('회원 마케팅 동의:', preference.user.marketingAllowed);
console.log('회원 야간 동의:', preference.user.nightAllowed);

// 동의 상태에 따른 로직 작성
if (preference.user.marketingAllowed === true) {
  if (preference.user.nightAllowed === true) {
    console.log('마케팅 푸시 수신 동의 (야간 포함)');
    // ...
  } else {
    console.log('마케팅 푸시 수신 동의 (야간 제외)');
    // ...
  }
} else if (preference.user.marketingAllowed === false) {
  console.log('마케팅 푸시 수신 거부');
  // ...
} else {
  console.log('아직 선택하지 않음');
  // ...
}
```

---
