---
sidebar_label: 레퍼런스
pagination_label: 레퍼런스 (Reference)
description: nachocode SDK의 `apple` 네임스페이스는 Apple 소셜 로그인과 사용자 정보 조회 기능을 제공하여 iOS 네이티브 기능과의 통합을 지원합니다.
keywords:
  [
    애플 소셜 로그인,
    애플 네이티브 로그인,
    애플 웹뷰 로그인,
    apple 소셜 로그인,
    apple 네이티브 로그인,
    apple 웹뷰 로그인,
    apple social login,
    apple native login,
    apple webview login,
  ]
image: /img/docs/thumbnails/SDK/apple.svg
---

# 애플 (`apple`) - 레퍼런스

import { BadgeWithVersion } from '@site/src/components/svg/badge-with-version';
import { ThumbnailImage } from '@site/src/components/common/image/thumbnail-image';

<ThumbnailImage src='/img/docs/thumbnails/SDK/apple.svg'/>

> 🚀 **추가된 버전 :** <BadgeWithVersion type="SDK" version="v1.4.0" link="/docs/releases/v1/sdk/release-v-1-4-0" /> <BadgeWithVersion type="iOS" version="v1.4.0" link="/docs/releases/v1/app-source/ios/release-v-1-4-0" />  
> 🔔 **최신화 일자:** 2025-09-30

![iOS-Only](https://img.shields.io/badge/iOS_only-gray?logo=apple)

:::info 참고
**이 네임스페이스는 현재 iOS에서만 지원됩니다.**
:::

:::warning 연동을 마치셨나요?
SDK 메서드를 사용하기 위해선 필수 선행 작업으로 [**연동하기**](./integrate)를 마쳐야합니다.
:::

## **개요** {#overview}

`apple` 네임스페이스는 **Apple 로그인** 및 **사용자 정보 조회** 등 **디바이스의 Apple 네이티브 기능**을 활용할 수 있도록 지원합니다.

---

## **타입 정의** {#types}

### **`AppleResult`** {#apple-result}

Apple 로그인 요청의 결과 상태를 나타내는 객체 타입입니다.

```typescript
export declare type AppleSuccessResult = {
  status: 'success';
};
```

```typescript
export declare type AppleErrorResult = {
  status: 'error';
  errorCode: string;
  message: string;
};
```

```typescript
export declare type AppleResult = AppleSuccessResult | AppleErrorResult;
```

| 필드                     | 타입     | 설명                                 |
| ------------------------ | -------- | ------------------------------------ |
| `status`                 | `string` | 요청 결과 상태 (`success` / `error`) |
| `errorCode` _(optional)_ | `string` | 오류 코드                            |
| `message` _(optional)_   | `string` | 오류 메시지                          |

---

### **`ApplePermissionTypes`** {#apple-permission-type}

Apple 로그인 요청 시 요구할 수 있는 권한 목록입니다.

```typescript
export declare type ApplePermissionTypes = ['email', 'fullName'];
```

```typescript
export declare type ApplePermissions = (typeof ApplePermissionTypes)[string][];
```

| 값         | 설명                  |
| ---------- | --------------------- |
| `email`    | 사용자 이메일 정보    |
| `fullName` | 사용자 전체 이름 정보 |

---

### **`AppleUserData`** {#apple-user-data}

Apple 로그인 성공 시 반환되는 사용자 정보 객체입니다.

:::warning 주의
사용자의 이메일 및 이름 정보는 **최초 로그인 시에만 제공될 수 있으며, 이후 재로그인 시 반환되지 않을 수 있습니다.** 또한, 사용자가 제공하는 것을 거부하거나 요청할 때 권한에서 누락된다면 반환 데이터에서도 생략되게 되니 사용에 주의하시기 바랍니다.
:::

```typescript
export declare type AppleUserData = {
  identifier: string;
  token: string;
  authorizationCode: string;
  email?: string;
  name?: {
    givenName: string;
    familyName: string;
  };
  [fields: string]: any;
};
```

| 필드                           | 타입     | 설명                     |
| ------------------------------ | -------- | ------------------------ |
| `identifier`                   | `string` | Apple 사용자 고유 식별자 |
| `token`                        | `string` | 사용자 토큰              |
| `authorizationCode`            | `string` | Apple 인증 코드          |
| `email` _(optional)_           | `string` | 사용자 이메일            |
| `name.familyName` _(optional)_ | `string` | 사용자 성                |
| `name.givenName` _(optional)_  | `string` | 사용자 이름              |
| `[fields: string]`             | `any`    | 기타 사용자 데이터       |

---

## **메서드 목록** {#method-list}

| 메서드                                                | 설명                                     | 추가된 버전                                                                                                                                                                                                 |
| ----------------------------------------------------- | ---------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`login(permissions, callback)`](#login)              | Apple 네이티브 소셜 로그인을 수행합니다. | <BadgeWithVersion type="SDK" version="v1.4.0" link="/docs/releases/v1/sdk/release-v-1-4-0" /><br/> <BadgeWithVersion type="iOS" version="v1.4.0" link="/docs/releases/v1/app-source/ios/release-v-1-4-0" /> |
| [`isLoggedIn(identifier, callback)`](#is-logged-in)   | Apple 로그인 상태를 확인합니다.          | <BadgeWithVersion type="SDK" version="v1.4.0" link="/docs/releases/v1/sdk/release-v-1-4-0" /><br/> <BadgeWithVersion type="iOS" version="v1.4.0" link="/docs/releases/v1/app-source/ios/release-v-1-4-0" /> |
| [`getUserIdentifier(callback)`](#get-user-identifier) | Apple 사용자 고유 식별자를 반환합니다.   | <BadgeWithVersion type="SDK" version="v1.4.0" link="/docs/releases/v1/sdk/release-v-1-4-0" /><br/> <BadgeWithVersion type="iOS" version="v1.4.0" link="/docs/releases/v1/app-source/ios/release-v-1-4-0" /> |

---

## **메서드 상세** {#method-details}

### **`login(permissions: ApplePermissions, callback: (result: AppleResult, userData?: AppleUserData) => void): void`** {#login}

- _since :_ <BadgeWithVersion type="SDK" version="v1.4.0" link="/docs/releases/v1/sdk/release-v-1-4-0" /> <BadgeWithVersion type="iOS" version="v1.4.0" link="/docs/releases/v1/app-source/ios/release-v-1-4-0" />

:::warning 주의
_[연동하기](./integrate#prerequisite)가 완료되어야 사용할 수 있습니다._
:::

#### 설명 {#login-summary}

Apple 네이티브 소셜 로그인을 수행하고 사용자 정보를 반환합니다.

#### 주의사항 {#login-warning}

사용자의 이메일 및 이름 정보는 **최초 로그인 시에만 제공될 수 있으며, 이후 재로그인 시 반환되지 않을 수 있습니다.** 또한, 사용자가 제공하는 것을 거부하거나 요청할 때 권한에서 누락된다면 반환 데이터에서도 생략되게 되니 사용에 주의하시기 바랍니다.

#### 매개변수 {#login-parameters}

| 이름          | 타입                                                      | 필수 여부 | 설명                                    |
| ------------- | --------------------------------------------------------- | --------- | --------------------------------------- |
| `permissions` | [`ApplePermissions`](#apple-permission-type)              | ✅        | 로그인 요청 시 요구할 권한 목록         |
| `callback`    | `(result: AppleResult, userData?: AppleUserData) => void` | ✅        | 요청 결과와 사용자 정보를 반환하는 함수 |

#### 반환 값 {#login-returns}

해당 메서드는 반환 값을 가지지 않으며, 결과는 `callback`을 통해 비동기적으로 제공됩니다.

#### 사용 예제 {#login-examples}

```javascript
// Apple 로그인 요청
Nachocode.apple.login(['email', 'fullName'], (result, userData) => {
  if (result.status === 'success') {
    console.log('Apple 로그인 성공:', userData);
    console.log('토큰:', userData.token);
    console.log('인가코드:', userData.authorizationCode);
    console.log('이메일:', userData.email);
    console.log('성:', userData.name?.familyName);
    console.log('이름:', userData.name?.givenName);
  } else {
    console.error(`Apple 로그인 실패: ${result.message}`);
  }
});
```

---

### **`isLoggedIn(identifier: string, callback: (result: AppleResult, isLoggedIn: boolean) => void): void`** {#is-logged-in}

- _since :_ <BadgeWithVersion type="SDK" version="v1.4.0" link="/docs/releases/v1/sdk/release-v-1-4-0" /> <BadgeWithVersion type="iOS" version="v1.4.0" link="/docs/releases/v1/app-source/ios/release-v-1-4-0" />

:::warning 주의
_[연동하기](./integrate#prerequisite)가 완료되어야 사용할 수 있습니다._
:::

#### 설명 {#is-logged-in-summary}

Apple 사용자 고유 식별자(`identifier`)를 기반으로 현재 사용자가 로그인 상태인지 확인합니다.

#### 매개변수 {#is-logged-in-parameters}

| 이름         | 타입                                                 | 필수 여부 | 설명                        |
| ------------ | ---------------------------------------------------- | --------- | --------------------------- |
| `identifier` | `string`                                             | ✅        | Apple 사용자 고유 식별자    |
| `callback`   | `(result: AppleResult, isLoggedIn: boolean) => void` | ✅        | 로그인 여부를 반환하는 함수 |

#### 반환 값 {#is-logged-in-returns}

해당 메서드는 반환 값을 가지지 않으며, 결과는 `callback`을 통해 비동기적으로 제공됩니다.

#### 사용 예제 {#is-logged-in-examples}

```javascript
// Apple 로그인 상태 확인
Nachocode.apple.isLoggedIn('user_identifier_here', (result, isLoggedIn) => {
  console.log('조회 성공 여부:', result.status);
  if (isLoggedIn) {
    console.log('사용자는 현재 Apple에 로그인되어 있습니다.');
  } else {
    console.log('Apple 로그인이 되어 있지 않습니다.');
  }
});
```

---

### **`getUserIdentifier(callback: (result: AppleResult, userIdentifier?: string) => void): void`** {#get-user-identifier}

- _since :_ <BadgeWithVersion type="SDK" version="v1.4.0" link="/docs/releases/v1/sdk/release-v-1-4-0" /> <BadgeWithVersion type="iOS" version="v1.4.0" link="/docs/releases/v1/app-source/ios/release-v-1-4-0" />

:::warning 주의
_[연동하기](./integrate#prerequisite)가 완료되어야 사용할 수 있습니다._
:::

#### 설명 {#get-user-identifier-summary}

Apple 사용자 고유 식별자를 반환합니다.

#### 매개변수 {#get-user-identifier-parameters}

| 이름       | 타입                                                     | 필수 여부 | 설명                                |
| ---------- | -------------------------------------------------------- | --------- | ----------------------------------- |
| `callback` | `(result: AppleResult, userIdentifier?: string) => void` | ✅        | Apple 사용자 식별자를 반환하는 함수 |

#### 반환 값 {#get-user-identifier-returns}

해당 메서드는 반환 값을 가지지 않으며, 결과는 `callback`을 통해 비동기적으로 제공됩니다.

#### 사용 예제 {#get-user-identifier-examples}

```javascript
// Apple 사용자 고유 식별자 조회
Nachocode.apple.getUserIdentifier((result, userIdentifier) => {
  if (result.status === 'success') {
    console.log(`사용자 식별자: ${userIdentifier}`);
  } else {
    console.error(`사용자 식별자 조회 실패: ${result.message}`);
  }
});
```

---

:::info **추가 정보**

- Apple 네임스페이스는 **현재 iOS에서만 동작**합니다. Android 및 기타 환경에서는 추후 지원될 예정입니다.
- 사용자의 이메일 및 이름 정보는 최초 로그인 시에만 제공될 수 있으며, 이후 재로그인 시 반환되지 않을 수 있습니다.

:::
