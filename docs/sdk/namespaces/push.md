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
---

# 푸시 알림 (`push`)

> 🔔 **최신화 일자:** 2025-06-12

## **개요**

`push` 네임스페이스는 **푸시 알림 관련 기능을 제공**합니다.

- **푸시 토큰을 nachocode 서버에 등록 및 삭제**
- **로컬 푸시 알림을 예약 및 취소**
- **푸시 토픽 구독 및 취소**
- **디바이스의 구독된 토픽 조회**

그 외에도 다양한 기능을 수행 할 수 있습니다.

---

### **필수 선행 작업**

nachocode SDK로 **푸시 알림 기능**을 사용하기 위해서는 [nachocode 대시보드](https://nachocode.io/?utm_source=docs&utm_medium=documentation&utm_campaign=devguide)에서  
**푸시 알림 설정이 모두 완료된 후 빌드된 경우에만** 작동합니다.

아래 유저 가이드를 따라 nachocode 푸시 알림 설정을 완료하세요.

➡️ [푸시 알림 유저 가이드](https://docs.nachocode.io/ko/articles/%ED%91%B8%EC%8B%9C-%EC%95%8C%EB%A6%BC%EA%B0%9C%EC%9D%B8%ED%99%94-0eb97bdb)

---

## **타입 정의**

### **`PushTopicResult`**

- _since ver.1.6.0_

```typescript
export declare type PushTopicResult = {
  status: 'success' | 'error';
  /**
   * 푸시 토픽 구독 결과 상태 코드
   * - `200` : 성공
   * - `201` : 이미 토픽 구독 중
   * - `202` : 이미 구독 취소된 토픽
   * - `401` : 구독 실패
   * - `402` : 구독 취소 실패
   */
  statusCode: 200 | 201 | 202 | 401 | 402;
  errorCode?: string;
  message: string;
};
```

| 속성명       | 타입                   | 필수 여부 | 설명                                       |
| ------------ | ---------------------- | --------- | ------------------------------------------ |
| `status`     | `'success' \| 'error'` | ✅        | 푸시 토픽 구독 요청 성공 여부              |
| `statusCode` | `number`               | ✅        | 푸시 토픽 구독 결과 상태 코드              |
| `errorCode`  | `string`               | ❌        | **(_optional_)** 오류 코드 (에러 발생 시)  |
| `message`    | `string`               | ✅        | 결과 상세 메시지. (에러 발생 시 사유 반환) |

---

### **`LocalPushPayload`**

- _since ver.1.4.1_

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
| `content`       | `string`  | ❌        | **(_optional_)** 푸시 알림의 본문 메시지 (지정하지 않으면 제목만 노출)      |
| `link`          | `string`  | ❌        | **(_optional_)** 클릭 시 이동할 URL (지정하지 않으면 앱 열기)               |
| `usingAppIcon`  | `boolean` | ❌        | **(_optional_)** 앱 아이콘을 푸시 아이콘으로 사용할지 여부 (기본값: `true`) |
| `scheduledTime` | `Date`    | ❌        | **(_optional_)** 예약된 발송 시각 (지정하지 않으면 즉시 발송됨)             |
| `id`            | `number`  | ❌        | **(_optional_)** 예약된 푸시를 식별할 ID (지정하지 않으면 자동 생성)        |

---

### **`LocalPushResult`**

- _since ver.1.4.1_

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
| `statusCode` | `string`               | ❌        | **(_optional_)** 오류 발생 시 반환되는 코드                  |
| `message`    | `string`               | ❌        | **(_optional_)** 오류 발생 시 반환되는 메시지                |
| `id`         | `number`               | ❌        | **(_optional_)** 예약된 푸시 알림의 ID (취소할 때 사용 가능) |

---

## **메서드 목록**

| 메서드                                                                | 설명                                                       | 추가된 버전 |
| --------------------------------------------------------------------- | ---------------------------------------------------------- | ----------- |
| [`subscribePushTopic(topic, callback?)`](#subscribe-push-topic)       | **푸시 토픽을 구독**합니다.                                | ver.1.6.0   |
| [`unsubscribePushTopic(topic, callback?)`](#unsubscribe-push-topic)   | **푸시 토픽 구독을 취소**합니다.                           | ver.1.6.0   |
| [`getSubscriptionList(callback)`](#get-subscription-list)             | 디바이스의 현재 **구독 중인 푸시 토픽 목록을 조회**합니다. | ver.1.6.0   |
| [`sendLocalPush(payload, callback?)`](#sendlocalpushpayload-callback) | **로컬 푸시 알림을 예약**합니다.                           | ver.1.4.1   |
| [`cancelLocalPush(id)`](#cancellocalpushid-number)                    | 예약된 로컬 푸시 알림을 취소합니다.                        | ver.1.4.1   |
| [`registerPushToken(userID)`](#register-push-token)                   | nachocode 서버에 푸시 토큰을 등록합니다.                   | ver.1.0.0   |
| [`deletePushToken(userID)`](#deletepushtokenuserid-string-promiseany) | nachocode 서버에서 푸시 토큰을 삭제합니다.                 | ver.1.0.0   |

---

## **메서드 상세**

### **`subscribePushTopic(topic, callback?)`** {#subscribe-push-topic}

- _since ver.1.6.0_

#### 설명 (`subscribePushTopic`)

지정한 푸시 토픽을 구독합니다.  
구독이 성공하면 **nachocode 서버 API**를 통해서 혹은  
**FCM에서 해당 토픽으로 직접적으로 발송**한 메시지를 수신할 수 있습니다.

#### 매개변수 (`subscribePushTopic`)

| 이름       | 타입                                | 필수 여부 | 설명                           |
| ---------- | ----------------------------------- | --------- | ------------------------------ |
| `topic`    | `string`                            | ✅        | 구독할 토픽 이름               |
| `callback` | `(result: PushTopicResult) => void` | ❌        | 구독 성공 여부를 콜백으로 수신 |

#### 반환 값 (`subscribePushTopic`)

해당 메서드는 반환 값을 가지지 않습니다.  
결과는 콜백으로 전달됩니다.

#### 사용 예제 (`subscribePushTopic`)

```javascript
Nachocode.push.subscribePushTopic('event-promotion', result => {
  if (result.status === 'success') {
    console.log('토픽 구독 성공');
  } else {
    console.error('토픽 구독 실패:', result.message);
  }
});
```

---

### **`unsubscribePushTopic(topic, callback?)`** {#unsubscribe-push-topic}

- _since ver.1.6.0_

#### 설명 (`unsubscribePushTopic`)

지정한 푸시 토픽 구독을 해지합니다.  
이후 해당 토픽으로 발송된 메시지를 더 이상 수신하지 않게 됩니다.

#### 매개변수 (`unsubscribePushTopic`)

| 이름       | 타입                                | 필수 여부 | 설명                                |
| ---------- | ----------------------------------- | --------- | ----------------------------------- |
| `topic`    | `string`                            | ✅        | 해지할 토픽 이름                    |
| `callback` | `(result: PushTopicResult) => void` | ❌        | 구독 해지 성공 여부를 콜백으로 수신 |

#### 사용 예제 (`unsubscribePushTopic`)

```javascript
Nachocode.push.unsubscribePushTopic('event-promotion', result => {
  if (result.status === 'success') {
    console.log('토픽 구독 해지 완료');
  } else {
    console.error('토픽 해지 실패:', result.message);
  }
});
```

---

### **`getSubscriptionList(callback)`** {#get-subscription-list}

- _since ver.1.6.0_

#### 설명 (`getSubscriptionList`)

현재 디바이스에서 구독 중인 **푸시 토픽 목록을 조회**합니다.

#### 매개변수 (`getSubscriptionList`)

| 이름       | 타입                                   | 필수 여부 | 설명                                  |
| ---------- | -------------------------------------- | --------- | ------------------------------------- |
| `callback` | `(subscriptionList: string[]) => void` | ✅        | 구독된 토픽 이름 목록을 콜백으로 수신 |

#### 사용 예제 (`getSubscriptionList`)

```javascript
Nachocode.push.getSubscriptionList(list => {
  console.log('현재 구독 중인 토픽 목록:', list);
});
```

---

### **`sendLocalPush(payload, callback?)`**

- _since ver.1.4.1_

#### 설명 (`sendLocalPush`)

로컬 푸시 알림을 예약하고, 특정 시각(`scheduledTime`)에 디바이스에서 푸시 알림을 표시할 수 있습니다.  
즉시 발송하거나 예약 발송이 가능하며, 예약된 알림은 `id` 값을 사용해 취소할 수도 있습니다.

#### 매개변수 (`sendLocalPush`)

| 이름       | 타입                                                    | 필수 여부 | 설명                           |
| ---------- | ------------------------------------------------------- | --------- | ------------------------------ |
| `payload`  | [`LocalPushPayload`](#localpushpayload)                 | ✅        | 예약할 로컬 푸시 데이터        |
| `callback` | [`(result: LocalPushResult) => void`](#localpushresult) | ❌        | 예약 성공 여부를 반환하는 콜백 |

#### 반환 값 (`sendLocalPush`)

해당 메서드는 반환 값을 가지지 않으며, 결과는 `callback`을 통해 비동기적으로 제공됩니다.

#### 사용 예제 (`sendLocalPush`)

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

### **`cancelLocalPush(id: number)`**

- _since ver.1.4.1_

#### 설명 (`cancelLocalPush`)

예약된 로컬 푸시 알림을 취소합니다.  
취소하려는 푸시 알림의 `id` 값을 전달해야 합니다.

[`sendLocalPush`](#sendlocalpushpayload-callback)에서 반환된 `id`를 사용합니다.

#### 매개변수 (`cancelLocalPush`)

| 이름 | 타입     | 필수 여부 | 설명                         |
| ---- | -------- | --------- | ---------------------------- |
| `id` | `number` | ✅        | 취소할 예약된 푸시 알림의 ID |

#### 반환 값 (`cancelLocalPush`)

해당 메서드는 반환 값을 가지지 않습니다.

#### 사용 예제 (`cancelLocalPush`)

```javascript
// 예약된 푸시 알림 취소
Nachocode.push.cancelLocalPush(101);
console.log('푸시 알림이 취소되었습니다.');
```

---

### **`registerPushToken(userID: string): Promise<any>`** {#register-push-token}

- _since ver.1.0.0_
- 📢 _[필수 선행 작업](#필수-선행-작업)이 완료되어야 사용할 수 있습니다._

#### 설명 (`registerPushToken`)

nachocode 서버에 **현재 디바이스의 푸시 토큰을 등록**합니다.  
이때, 특정 사용자(`userID`)를 식별자로 사용하여 **푸시 알림을 해당 사용자에게 전송할 수 있도록 설정**합니다.

#### 매개변수 (`registerPushToken`)

| 이름     | 타입     | 필수 여부 | 설명                         |
| -------- | -------- | --------- | ---------------------------- |
| `userID` | `string` | ✅        | 푸시 토큰을 연결할 사용자 ID |

#### 반환 값 (`registerPushToken`)

| 타입           | 설명                  |
| -------------- | --------------------- |
| `Promise<any>` | 등록 요청의 처리 결과 |

#### 사용 예제 (`registerPushToken`)

```javascript
// ex. 유저의 로그인 성공 시 호출되는 콜백함수
function onLoginSuccess(userID) {
  // ex. userID : "nacho123"
  // "nacho123" 사용자 식별자로 nachocode 서버에 등록합니다.
  Nachocode.push.registerPushToken(userID).then(() => {
    console.log('푸시 토큰이 성공적으로 등록되었습니다.');
  });
}
```

---

### **`deletePushToken(userID: string): Promise<any>`**

- _since ver.1.0.0_
- 📢 _[필수 선행 작업](#필수-선행-작업)이 완료되어야 사용할 수 있습니다._

#### 설명 (`deletePushToken`)

nachocode 서버에서 **해당 사용자(`userID`)와 연결된 푸시 토큰을 삭제**합니다.  
사용자가 로그아웃하거나 푸시 알림을 더 이상 사용하지 않도록 설정할 경우 이 메서드를 호출해야 합니다.

#### 매개변수 (`deletePushToken`)

| 이름     | 타입     | 필수 여부 | 설명                                |
| -------- | -------- | --------- | ----------------------------------- |
| `userID` | `string` | ✅        | 삭제할 푸시 토큰이 연결된 사용자 ID |

#### 반환 값 (`deletePushToken`)

| 타입           | 설명                  |
| -------------- | --------------------- |
| `Promise<any>` | 삭제 요청의 처리 결과 |

#### 사용 예제 (`deletePushToken`)

```javascript
// ex. 유저의 로그아웃 시 호출되는 콜백함수
function onLogout(userID) {
  // ex. userID : "nacho123"
  // "nacho123" 사용자 식별자에 해당하는 푸시 토큰을 삭제합니다.
  Nachocode.push.deletePushToken(userID).then(() => {
    console.log('푸시 토큰이 성공적으로 삭제되었습니다.');
  });
}
```

---
