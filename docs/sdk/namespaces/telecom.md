---
description: nachocode SDK의 `telecom` 네임스페이스를 사용하여 통신사 관련 사용자 토큰을 관리할 수 있습니다. 통신사 연동 서비스 구현에 활용할 수 있습니다.
keywords:
  [
    통신사 연동,
    통신사 토큰 관리,
    통신사 인증,
    telecom integration,
    telecom token management,
    telecom authentication,
  ]
image: /img/docs/thumbnails/SDK/telecom.png
---

# 통신사 (`telecom`)

import { BadgeWithVersion } from '@site/src/components/svg/badge-with-version';
import { ThumbnailImage } from '@site/src/components/common/image/thumbnail-image';

<ThumbnailImage src='/img/docs/thumbnails/SDK/device.png'/>

> 🚀 **추가된 버전 :** <BadgeWithVersion type="SDK" version="v1.11.1" link="/docs/releases/v1/sdk/release-v-1-11-1" />  
> 🔔 **최신화 일자:** 2026-07-28

## **개요** {#overview}

`telecom` 네임스페이스는 **통신사 관련 사용자 토큰을 네이티브 레이어에서 관리하는 기능**을 제공합니다.

- **사용자 토큰을 네이티브 레이어에 저장**
- **저장된 사용자 토큰을 삭제**
- **사용자 토큰의 존재 여부를 확인**

:::info 공지

통신사 연동 SDK는 통신사 앱들만 사용 가능한 namespace로 nachocode 문의를 통해 기능 활성화가 가능합니다.

- 이메일 문의: [support@nachocode.io](mailto:support@nachocode.io)
- 채팅 문의: [https://nachocode.channel.io](https://nachocode.channel.io/home)

:::

---

## **타입 정의** {#types}

### **`TelecomUserTokenResult`** {#telecom-user-token-result}

- _since :_ <BadgeWithVersion type="SDK" version="v1.11.1" link="/docs/releases/v1/sdk/release-v-1-11-1" />

```typescript
export declare type TelecomUserTokenResult = {
  status: 'success' | 'error';
  statusCode: number;
  message?: string;
};
```

| 속성명       | 타입                   | 필수 여부 | 설명                                      |
| ------------ | ---------------------- | --------- | ----------------------------------------- |
| `status`     | `'success' \| 'error'` | ✅        | 토큰 작업 성공 여부                       |
| `statusCode` | `number`               | ✅        | 결과 상태 코드                            |
| `message`    | `string`               | ❌        | **_(optional)_** 에러 발생 시 상세 메시지 |

### **`CheckTelecomUserTokenResult`** {#check-telecom-user-token-result}

- _since :_ <BadgeWithVersion type="SDK" version="v1.11.1" link="/docs/releases/v1/sdk/release-v-1-11-1" />

토큰 존재 여부 확인 결과 타입으로,  
성공 시 [`CheckTelecomUserTokenSuccessResult`](#check-telecom-user-token-success-result),  
실패 시 [`CheckTelecomUserTokenErrorResult`](#check-telecom-user-token-error-result)를 반환합니다.

```typescript
export declare type CheckTelecomUserTokenResult =
  | CheckTelecomUserTokenSuccessResult
  | CheckTelecomUserTokenErrorResult;
```

#### **`CheckTelecomUserTokenSuccessResult`** {#check-telecom-user-token-success-result}

```typescript
export declare type CheckTelecomUserTokenSuccessResult = {
  status: 'success';
  statusCode: 200;
  message: string;
  data: boolean;
};
```

| 속성명       | 타입        | 필수 여부 | 설명                                            |
| ------------ | ----------- | --------- | ----------------------------------------------- |
| `status`     | `'success'` | ✅        | 요청 성공 상태                                  |
| `statusCode` | `200`       | ✅        | 결과 상태 코드                                  |
| `message`    | `string`    | ✅        | 결과 메시지                                     |
| `data`       | `boolean`   | ✅        | 토큰이 존재하면 `true`, 존재하지 않으면 `false` |

#### **`CheckTelecomUserTokenErrorResult`** {#check-telecom-user-token-error-result}

```typescript
export declare type CheckTelecomUserTokenErrorResult = {
  status: 'error';
  statusCode: 400 | 500;
  message: string;
};
```

| 속성명       | 타입         | 필수 여부 | 설명           |
| ------------ | ------------ | --------- | -------------- |
| `status`     | `'error'`    | ✅        | 요청 실패 상태 |
| `statusCode` | `400 \| 500` | ✅        | 에러 상태 코드 |
| `message`    | `string`     | ✅        | 에러 메시지    |

---

## **메서드 목록** {#method-list}

| 메서드                                                   | 설명                                                           | 추가된 버전                                                                                     |
| -------------------------------------------------------- | -------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| [`setTelecomUserToken(token)`](#set-telecom-user-token)  | 네이티브 레이어에 사용자 토큰을 설정합니다.                    | <BadgeWithVersion type="SDK" version="v1.11.1" link="/docs/releases/v1/sdk/release-v-1-11-1" /> |
| [`deleteTelecomUserToken()`](#delete-telecom-user-token) | 네이티브 레이어에 저장된 사용자 토큰을 삭제합니다.             | <BadgeWithVersion type="SDK" version="v1.11.1" link="/docs/releases/v1/sdk/release-v-1-11-1" /> |
| [`checkTelecomUserToken()`](#check-telecom-user-token)   | 네이티브 레이어에 저장된 사용자 토큰의 존재 여부를 확인합니다. | <BadgeWithVersion type="SDK" version="v1.11.1" link="/docs/releases/v1/sdk/release-v-1-11-1" /> |

---

## **메서드 상세** {#method-details}

### **`setTelecomUserToken(token)`** {#set-telecom-user-token}

- _since :_ <BadgeWithVersion type="SDK" version="v1.11.1" link="/docs/releases/v1/sdk/release-v-1-11-1" />

#### 타입 정의 {#set-telecom-user-token-types}

```typescript
function setTelecomUserToken(token: string): Promise<TelecomUserTokenResult>;
```

#### 설명 {#set-telecom-user-token-summary}

네이티브 레이어에 통신사 앱의 사용자 토큰을 설정합니다.  
인증 받은 토큰을 저장하여 연동 서비스에서 사용할 수 있도록 합니다.

#### 매개변수 {#set-telecom-user-token-parameters}

| 파라미터 | 타입     | 필수 여부 | 설명               |
| -------- | -------- | --------- | ------------------ |
| `token`  | `string` | ✅        | 사용자 토큰 문자열 |

#### 반환 값 {#set-telecom-user-token-returns}

| 타입                                                            | 설명                       |
| --------------------------------------------------------------- | -------------------------- |
| [`Promise<TelecomUserTokenResult>`](#telecom-user-token-result) | 사용자 토큰 설정 처리 결과 |

#### 사용 예제 {#set-telecom-user-token-examples}

```javascript
// 통신사 인증 후 토큰 설정
const result = await Nachocode.telecom.setTelecomUserToken(
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...'
);
if (result.status === 'success') {
  console.log('사용자 토큰이 성공적으로 설정되었습니다.');
} else {
  console.error('사용자 토큰 설정 실패: ', result.message);
}
```

---

### **`deleteTelecomUserToken()`** {#delete-telecom-user-token}

- _since :_ <BadgeWithVersion type="SDK" version="v1.11.1" link="/docs/releases/v1/sdk/release-v-1-11-1" />

#### 타입 정의 {#delete-telecom-user-token-types}

```typescript
function deleteTelecomUserToken(): Promise<TelecomUserTokenResult>;
```

#### 설명 {#delete-telecom-user-token-summary}

네이티브 레이어에 저장된 통신사 앱의 사용자 토큰을 삭제합니다.  
사용자 로그아웃, 회원 탈퇴, 토큰 만료 시 호출하여 저장된 토큰을 제거할 수 있습니다.

#### 반환 값 {#delete-telecom-user-token-returns}

| 타입                                                            | 설명                       |
| --------------------------------------------------------------- | -------------------------- |
| [`Promise<TelecomUserTokenResult>`](#telecom-user-token-result) | 사용자 토큰 삭제 처리 결과 |

#### 사용 예제 {#delete-telecom-user-token-examples}

```javascript
// 로그아웃 시 토큰 삭제
const result = await Nachocode.telecom.deleteTelecomUserToken();
if (result.status === 'success') {
  console.log('사용자 토큰이 성공적으로 삭제되었습니다.');
} else {
  console.error('사용자 토큰 삭제 실패: ', result.message);
}
```

---

### **`checkTelecomUserToken()`** {#check-telecom-user-token}

- _since :_ <BadgeWithVersion type="SDK" version="v1.11.1" link="/docs/releases/v1/sdk/release-v-1-11-1" />

#### 타입 정의 {#check-telecom-user-token-types}

```typescript
function checkTelecomUserToken(): Promise<CheckTelecomUserTokenResult>;
```

#### 설명 {#check-telecom-user-token-summary}

네이티브 앱 레이어에 통신사 앱의 사용자 토큰이 저장되어 있는지 존재 여부를 확인합니다.  
성공 시 `data` 값으로 토큰의 존재 여부(`true` / `false`)를 반환합니다.

:::tip 활용 방법
쿠키나 세션 방식으로 로그인을 관리하는 경우, **웹에서는 로그인이 되어 있으나 네이티브 레이어의 토큰이 비어있는 상황**이 발생할 수 있습니다. 이때 `checkTelecomUserToken()`으로 토큰 존재 여부를 확인하여, 토큰이 없는 경우 [`setTelecomUserToken()`](#set-telecom-user-token)을 호출해 토큰을 다시 저장하는 방식으로 활용할 수 있습니다.
:::

#### 반환 값 {#check-telecom-user-token-returns}

| 타입                                                                       | 설명                            |
| -------------------------------------------------------------------------- | ------------------------------- |
| [`Promise<CheckTelecomUserTokenResult>`](#check-telecom-user-token-result) | 사용자 토큰 존재 여부 확인 결과 |

#### 사용 예제 {#check-telecom-user-token-examples}

```javascript
// 토큰 존재 여부 확인 후 없으면 다시 저장
const result = await Nachocode.telecom.checkTelecomUserToken();

if (result.status === 'success') {
  if (result.data) {
    console.log('사용자 토큰이 저장되어 있습니다.');
  } else {
    console.log('사용자 토큰이 없습니다. 토큰을 다시 저장합니다.');
    // 웹 세션 등에서 토큰을 가져와 저장
    await Nachocode.telecom.setTelecomUserToken(token);
  }
} else {
  console.error('토큰 존재 여부 확인 실패: ', result.message);
}
```
