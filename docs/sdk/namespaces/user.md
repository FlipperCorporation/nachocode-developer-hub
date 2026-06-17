---
description: nachocode SDK의 `user` 네임스페이스를 사용하여 네이티브 레이어에서 사용자 고유 ID를 설정, 조회, 삭제할 수 있습니다. 사용자 추적 및 분석에 활용할 수 있습니다.
keywords:
  [
    앱 사용자 ID 관리,
    앱 사용자 식별,
    앱 사용자 추적,
    app user ID management,
    app user identification,
    app user tracking,
  ]
image: /img/docs/thumbnails/SDK/user.png
---

# 사용자 (`user`)

import { BadgeWithVersion } from '@site/src/components/svg/badge-with-version';
import { ThumbnailImage } from '@site/src/components/common/image/thumbnail-image';

<ThumbnailImage src='/img/docs/thumbnails/SDK/user.png'/>

> 🚀 **추가된 버전 :** <BadgeWithVersion type="SDK" version="v1.10.0" link="/docs/releases/v1/sdk/release-v-1-10-0" /> <BadgeWithVersion type="Android" version="v1.10.1" link="/docs/releases/v1/app-source/android/release-v-1-10-1" /> <BadgeWithVersion type="iOS" version="v1.10.1" link="/docs/releases/v1/app-source/ios/release-v-1-10-1" />  
> 🔔 **최신화 일자:** 2026-06-17

## **개요** {#overview}

`user` 네임스페이스는 **사용자 고유 ID를 네이티브 레이어에서 관리하는 기능**을 제공합니다.

- **사용자 ID를 네이티브 레이어에 저장**
- **저장된 사용자 ID를 조회**
- **저장된 사용자 ID를 제거**
- **사용자 데이터 전체 초기화**

:::tip 정보
**사용자 ID를 설정**하면 사용자 추적, 분석, 개인화 푸시 알림 등의 기능에서 일관된 사용자 식별이 가능합니다.

**마케팅 푸시에 관련하여** 사용자 ID 설정 여부에 따라 **게스트(비로그인) 동의**와 **유저(로그인) 동의**가 구분되어 관리됩니다.  
자세한 내용은 [마케팅 푸시 가이드](/docs/guide/push/marketing-push)를 참고하세요.
:::

:::info 공지

앱 사용자 관리 SDK는 [**비즈니스 멤버십 이상**](https://nachocode.io/pricing?utm_source=docs&utm_medium=documentation&utm_campaign=devguide)부터 사용 가능한 namespace로 nachocode 문의를 통해 기능 활성화가 가능합니다.

- 이메일 문의: [support@nachocode.io](mailto:support@nachocode.io)
- 채팅 문의: [https://nachocode.channel.io](https://nachocode.channel.io/home)

:::

---

## **타입 정의** {#types}

### **`UserOperationResult`** {#user-operation-result}

- _since :_ <BadgeWithVersion type="SDK" version="v1.10.1" link="/docs/releases/v1/sdk/release-v-1-10-1" />

```typescript
export declare type UserOperationResult = {
  status: 'success' | 'error';
  statusCode: number;
  message?: string;
};
```

| 속성명       | 타입                   | 필수 여부 | 설명                                      |
| ------------ | ---------------------- | --------- | ----------------------------------------- |
| `status`     | `'success' \| 'error'` | ✅        | 사용자 ID 작업 성공 여부                  |
| `statusCode` | `number`               | ✅        | 결과 상태 코드                            |
| `message`    | `string`               | ❌        | **_(optional)_** 에러 발생 시 상세 메시지 |

---

## **메서드 목록** {#method-list}

| 메서드                              | 설명                                                             | 추가된 버전                                                                                     |
| ----------------------------------- | ---------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| [`setUserId(userId)`](#set-user-id) | 네이티브 레이어에 사용자 ID를 설정합니다.                        | <BadgeWithVersion type="SDK" version="v1.10.0" link="/docs/releases/v1/sdk/release-v-1-10-0" /> |
| [`getUserId()`](#get-user-id)       | 네이티브 레이어에 저장된 사용자 ID를 조회합니다.                 | <BadgeWithVersion type="SDK" version="v1.10.0" link="/docs/releases/v1/sdk/release-v-1-10-0" /> |
| [`deleteUserId()`](#delete-user-id) | 네이티브 레이어에 저장된 사용자 ID를 제거합니다.                 | <BadgeWithVersion type="SDK" version="v1.10.0" link="/docs/releases/v1/sdk/release-v-1-10-0" /> |
| [`withdrawUser()`](#withdraw-user)  | 네이티브 레이어에 저장된 사용자 관련 데이터를 전부 초기화합니다. | <BadgeWithVersion type="SDK" version="v1.10.4" link="/docs/releases/v1/sdk/release-v-1-10-4" /> |

---

## **메서드 상세** {#method-details}

### **`setUserId(userId)`** {#set-user-id}

- _since :_ <BadgeWithVersion type="SDK" version="v1.10.0" link="/docs/releases/v1/sdk/release-v-1-10-0" />
- _lastupdated :_ <BadgeWithVersion type="SDK" version="v1.10.1" link="/docs/releases/v1/sdk/release-v-1-10-1" /> - _반환 형식 변경_

#### 타입 정의 {#set-user-id-types}

```typescript
function setUserId(userId: string): Promise<UserOperationResult>;
```

#### 설명 {#set-user-id-summary}

네이티브 레이어에 사용자 ID를 설정합니다.
사용자가 로그인할 때 호출하여 사용자를 식별할 수 있도록 합니다.

:::info 마케팅 푸시 관련
`setUserId` 호출 시 앱이 **로그인 상태로 전환**되며, 이후 [`Nachocode.push.setMarketingAllowed`](/docs/sdk/namespaces/push#set-marketing-allowed)를 호출하면 **유저(로그인) 마케팅 동의**가 저장됩니다. 자세한 내용은 [마케팅 푸시 가이드](/docs/guide/push/marketing-push)를 참고하세요.
:::

:::tip 푸시 토큰 관련
`setUserId`를 호출하는 방식으로 로직 작성 시, [`Nachocode.push.registerPushToken`](/docs/sdk/namespaces/push#register-push-token)을 중복해서 호출하지 않는 것을 권장 드립니다. `setUserId` 메서드는 기존 `registerPushToken`이 수행하던 모든 작업을 수행하며, 추가로 유저 정보 동기화도 수행합니다.
:::

#### 매개변수 {#set-user-id-parameters}

| 파라미터 | 타입     | 필수 여부 | 설명                     |
| -------- | -------- | --------- | ------------------------ |
| `userId` | `string` | ✅        | 클라이언트 사용자 식별자 |

#### 반환 값 {#set-user-id-returns}

| 타입                                                     | 설명                     |
| -------------------------------------------------------- | ------------------------ |
| [`Promise<UserOperationResult>`](#user-operation-result) | 사용자 ID 설정 처리 결과 |

#### 사용 예제 {#set-user-id-examples}

```javascript
// 사용자 로그인 시 사용자 ID 설정
const result = await Nachocode.user.setUserId('user_12345');
if (result.status === 'success') {
  console.log('사용자 ID가 성공적으로 설정되었습니다.');
} else {
  console.error('사용자 ID 설정 실패: ', result.message);
}
```

```javascript
// 로그인 핸들러에서 사용
async function handleLogin(userId) {
  // 로그인 성공 후 사용자 ID 설정
  const result = await Nachocode.user.setUserId(userId);

  if (result.status === 'success') {
    console.log('사용자 ID가 설정되었습니다:', userId);
  } else {
    console.error('사용자 ID 설정 실패: ', result.message);
  }
}
```

---

### **`getUserId()`** {#get-user-id}

- _since :_ <BadgeWithVersion type="SDK" version="v1.10.0" link="/docs/releases/v1/sdk/release-v-1-10-0" />

#### 타입 정의 {#get-user-id-types}

```typescript
function getUserId(): Promise<string | null>;
```

#### 설명 {#get-user-id-summary}

네이티브 레이어에 저장된 사용자 ID를 비동기로 조회합니다.  
저장된 사용자 ID가 없거나 조회할 수 없는 경우 `null`을 반환합니다.

#### 반환값 {#get-user-id-types}

| 타입                      | 설명                            |
| ------------------------- | ------------------------------- |
| `Promise<string \| null>` | 저장된 사용자 ID, 없으면 `null` |

#### 사용 예제 {#get-user-id-examples}

```javascript
// 저장된 사용자 ID 조회
const userId = await Nachocode.user.getUserId();

if (userId) {
  console.log('저장된 사용자 ID:', userId);
} else {
  console.log('저장된 사용자 ID가 없습니다.');
}
```

---

### **`deleteUserId()`** {#delete-user-id}

- _since :_ <BadgeWithVersion type="SDK" version="v1.10.0" link="/docs/releases/v1/sdk/release-v-1-10-0" />
- _lastupdated :_ <BadgeWithVersion type="SDK" version="v1.10.1" link="/docs/releases/v1/sdk/release-v-1-10-1" /> - _반환 형식 변경_

#### 타입 정의 {#delete-user-id-types}

```typescript
function deleteUserId(): Promise<UserOperationResult>;
```

#### 설명 {#delete-user-id-summary}

네이티브 레이어에 저장된 사용자 ID를 삭제합니다.
사용자가 로그아웃할 때 호출하여 사용자 정보를 제거할 수 있습니다.

:::warning 주의사항
명시적으로 사용자가 로그아웃 할 때뿐 아니라, **토큰, 세션 만료 등으로 인한 유저 로그아웃 시에도 반드시 `deleteUserId()`를 호출해서 유저 상태를 관리**해주세요.

네이티브 레이어와 nachocode 측 서버에서는 해당 메서드를 호출하지 않을 경우 유저의 현재 로그인 상태를 자체적으로 알 수 없습니다.
:::

:::info 마케팅 푸시 관련
`deleteUserId()` 호출 시 앱이 **비로그인 상태(게스트)로 전환**되며, 이후 [`Nachocode.push.setMarketingAllowed()`](/docs/sdk/namespaces/push#set-marketing-allowed)를 호출하면 **게스트(비로그인) 마케팅 동의**가 저장됩니다.
자세한 내용은 [마케팅 푸시 가이드](/docs/guide/push/marketing-push)를 참고하세요.
:::

#### 반환 값 {#delete-user-id-returns}

| 타입                                                     | 설명                     |
| -------------------------------------------------------- | ------------------------ |
| [`Promise<UserOperationResult>`](#user-operation-result) | 사용자 ID 삭제 처리 결과 |

#### 사용 예제 {#delete-user-id-examples}

```javascript
// 사용자 로그아웃 시 저장된 사용자 ID 삭제
const result = await Nachocode.user.deleteUserId();
if (result.status === 'success') {
  console.log('사용자 ID가 성공적으로 삭제되었습니다.');
} else {
  console.error('사용자 ID 삭제 실패: ', result.message);
}
```

---

### **`withdrawUser()`** {#withdraw-user}

- _since :_ <BadgeWithVersion type="SDK" version="v1.10.4" link="/docs/releases/v1/sdk/release-v-1-10-4" />

#### 타입 정의 {#withdraw-user-types}

```typescript
function withdrawUser(): Promise<UserOperationResult>;
```

#### 설명 {#withdraw-user-summary}

네이티브 레이어에 저장된 현재 사용자와 관련된 모든 데이터를 초기화합니다.  
사용자 탈퇴 기능을 구현할 때 호출하여 개인정보를 완전히 제거할 수 있습니다.

:::tip GDPR 및 개인정보 보호 준수
`withdrawUser()` 메서드는 GDPR(일반 데이터 보호 규정) 및 개인정보 보호법에서 요구하는 **사용자 데이터 삭제 권리**를 준수하는 데 사용할 수 있습니다.
:::

:::warning 주의사항
**`withdrawUser()`는 복구할 수 없는 작업입니다.**

이 메서드를 호출하면 다음 데이터가 **영구적으로 삭제**됩니다.

- 사용자 ID
- 마케팅 수신 동의 정보 (게스트 및 유저)
- 야간 푸시 수신 동의 정보 (게스트 및 유저)
- 기타 사용자 관련 모든 설정 및 데이터

실행 전에 사용자에게 명확한 확인 절차를 제공하는 것을 강력히 권장합니다.
:::

:::info 마케팅 푸시 관련
`withdrawUser()` 호출 시 앱이 **비로그인 상태(게스트)로 전환**되며, 저장되어있던 **기기(비로그인), 유저 마케팅 동의** 여부가 모두 `null`로 초기화됩니다.
자세한 내용은 [마케팅 푸시 가이드](/docs/guide/push/marketing-push)를 참고하세요.
:::

#### 반환 값 {#withdraw-user-returns}

| 타입                                                     | 설명                  |
| -------------------------------------------------------- | --------------------- |
| [`Promise<UserOperationResult>`](#user-operation-result) | 사용자 탈퇴 처리 결과 |

#### 사용 예제 {#withdraw-user-examples}

```javascript
// 사용자 탈퇴 처리
const result = await Nachocode.user.withdrawUser();

if (result.status === 'success') {
  console.log('사용자 탈퇴가 완료되었습니다.');
  // 탈퇴 완료 후 처리 (ex. 로그인 페이지로 이동)
  window.location.href = '/login';
} else {
  console.error('사용자 탈퇴 실패: ', result.message);
}
```

---
