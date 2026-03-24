---
sidebar_label: 레퍼런스
pagination_label: 레퍼런스 (Reference)
description: nachocode SDK의 `facebook` 네임스페이스로 페이스북 네이티브 로그인 연동 및 사용자 데이터 조회, 로그인 상태 확인, 로그아웃 등 페이스북 인증 기능을 쉽게 구현할 수 있습니다.
keywords:
  [
    페이스북 소셜 로그인,
    페이스북 네이티브 로그인,
    페이스북 웹뷰 로그인,
    facebook 소셜 로그인,
    facebook 네이티브 로그인,
    facebook 웹뷰 로그인,
    facebook social login,
    facebook native login,
    facebook webview login,
  ]
image: /img/docs/thumbnails/SDK/facebook.png
---

# 페이스북 (`facebook`) - 레퍼런스

import { BadgeWithVersion } from '@site/src/components/svg/badge-with-version';
import { ThumbnailImage } from '@site/src/components/common/image/thumbnail-image';

<ThumbnailImage src='/img/docs/thumbnails/SDK/facebook.png'/>

> 🚀 **추가된 버전 :** <BadgeWithVersion type="SDK" version="v1.4.0" link="/docs/releases/v1/sdk/release-v-1-4-0" /> <BadgeWithVersion type="Android" version="v1.4.0" link="/docs/releases/v1/app-source/android/release-v-1-4-0" /> <BadgeWithVersion type="iOS" version="v1.4.0" link="/docs/releases/v1/app-source/ios/release-v-1-4-0" />  
> 🔔 **최신화 일자:** 2026-01-19

:::warning 연동을 마치셨나요?
SDK 메서드를 사용하기 위해선 필수 선행 작업으로 [**연동하기**](./integrate)를 마쳐야합니다.
:::

## **개요** {#overview}

`facebook` 네임스페이스는 **페이스북 네이티브 로그인 기능을 제공**하며, 사용자는 **페이스북 계정을 통해 인증**할 수 있습니다.

이 네임스페이스를 사용하여 **로그인, 사용자 정보 조회, 로그아웃**과 같은 기능을 수행할 수 있습니다.  
지원되는 **권한(permissions)** 목록은 [페이스북 권한 공식 문서](https://developers.facebook.com/docs/permissions)에서 확인할 수 있습니다.

---

## **타입 정의** {#types}

### **`FacebookResult`** {#facebook-result}

페이스북 로그인 및 요청의 결과 상태를 나타내는 타입입니다.

```typescript
export declare type FacebookSuccessResult = {
  status: 'success';
};
```

```typescript
export declare type FacebookErrorResult = {
  status: 'error';
  errorCode: string;
  message: string;
};
```

```typescript
export declare type FacebookResult =
  | FacebookSuccessResult
  | FacebookErrorResult;
```

| 필드        | 타입                   | 설명                       |
| ----------- | ---------------------- | -------------------------- |
| `status`    | `'error' \| 'success'` | 요청 성공 또는 실패 상태   |
| `errorCode` | `string` _(optional)_  | 오류 코드 (실패 시 반환)   |
| `message`   | `string` _(optional)_  | 오류 메시지 (실패 시 반환) |

---

### **`FacebookPermissionTypes`** {#facebook-permission-types}

페이스북 로그인 시 요청할 권한 타입입니다.

:::tip 공식 문서

[Permissions Reference for Meta Technologies APIs](https://developers.facebook.com/docs/permissions)

:::

<details>
<summary>펼쳐 보기</summary>

```typescript
export declare type FacebookPermissionTypes = [
  'email',
  'public_profile',
  'user_friends',
  'user_birthday',
  'user_hometown',
  'user_location',
  'user_photos',
  'user_posts',
  'user_gender',
  'user_link',
  'user_likes',
  'user_events',
  'user_videos',
  'user_tagged_places',
  'user_age_range',
  'user_managed_groups',
  'user_work_history',
  'user_education_history',
  'user_relationships',
  'user_relationship_details',
  'user_friends_relationships',
  'user_pages',
];
```

```typescript
export declare type FacebookPermissions =
  (typeof FacebookPermissionTypes)[string][];
```

</details>

---

### **`FacebookUserData`** {#facebook-user-data}

페이스북 사용자 데이터를 나타내는 타입입니다.

```typescript
export declare type FacebookUserData = {
  email?: string;
  name?: string;
  id?: number;
  first_name?: string;
  last_name?: string;
  [fields: string]: any;
};
```

| 필드         | 타입     | 설명                  |
| ------------ | -------- | --------------------- |
| `email`      | `string` | 사용자의 이메일       |
| `name`       | `string` | 사용자의 전체 이름    |
| `id`         | `number` | 페이스북 사용자 ID    |
| `first_name` | `string` | 사용자의 이름         |
| `last_name`  | `string` | 사용자의 성           |
| 기타         | `any`    | 요청된 추가 필드 포함 |

---

## **메서드 목록** {#method-list}

| 메서드                                                 | 설명                       | 추가된 버전                                                                                   |
| ------------------------------------------------------ | -------------------------- | --------------------------------------------------------------------------------------------- |
| [`login(permissions, callback)`](#login)               | 페이스북 네이티브 로그인   | <BadgeWithVersion type="SDK" version="v1.4.0" link="/docs/releases/v1/sdk/release-v-1-4-0" /> |
| [`isLoggedIn(callback)`](#is-logged-in)                | 로그인 상태 확인           | <BadgeWithVersion type="SDK" version="v1.4.0" link="/docs/releases/v1/sdk/release-v-1-4-0" /> |
| [`getUserData(permissions, callback)`](#get-user-data) | 사용자 데이터 요청         | <BadgeWithVersion type="SDK" version="v1.4.0" link="/docs/releases/v1/sdk/release-v-1-4-0" /> |
| [`logout()`](#logout)                                  | 페이스북 네이티브 로그아웃 | <BadgeWithVersion type="SDK" version="v1.4.0" link="/docs/releases/v1/sdk/release-v-1-4-0" /> |
| [`logEvent(eventName, parameters?)`](#log-event)       | Meta 앱 이벤트 로깅        | <BadgeWithVersion type="SDK" version="v1.9.0" link="/docs/releases/v1/sdk/release-v-1-9-0" /> |

---

## **메서드 상세** {#method-details}

### **`login(permissions: FacebookPermissions, callback: (result: FacebookResult, accessToken?: string, userId?: string, userData?: FacebookUserData) => void): void`** {#login}

- _since :_ <BadgeWithVersion type="SDK" version="v1.4.0" link="/docs/releases/v1/sdk/release-v-1-4-0" />

:::warning 주의
_[연동하기](./integrate#prerequisite)가 완료되어야 사용할 수 있습니다._
:::

#### 설명 {#login-summary}

페이스북 네이티브 로그인 요청을 수행합니다.  
사용자가 지정한 **권한(permissions)** 목록에 따라 필요한 권한을 요청할 수 있습니다.  
로그인 성공 시 `accessToken`, `userId`, `userData`가 콜백 함수로 전달됩니다.

#### 매개변수 {#login-parameters}

| 이름          | 타입                                                                                                   | 필수 여부 | 설명                             |
| ------------- | ------------------------------------------------------------------------------------------------------ | --------- | -------------------------------- |
| `permissions` | [`FacebookPermissions`](#facebook-permission-types)                                                    | ✅        | 요청할 권한 목록                 |
| `callback`    | `(result: FacebookResult, accessToken?: string, userId?: string, userData?: FacebookUserData) => void` | ✅        | 로그인 결과를 반환하는 콜백 함수 |

#### 반환 값 {#login-returns}

해당 메서드는 반환 값을 가지지 않으며, 결과는 `callback`을 통해 비동기적으로 제공됩니다.

#### 사용 예제 {#login-examples}

```javascript
// 페이스북 로그인 요청
Nachocode.facebook.login(
  ['email', 'public_profile'],
  (result, accessToken, userId, userData) => {
    if (result.status === 'success') {
      console.log('페이스북 로그인 성공');
      console.log('Access Token:', accessToken);
      console.log('User ID:', userId);
      console.log('User Data:', userData);
    } else {
      console.error('페이스북 로그인 실패: ', result.errorCode, result.message);
    }
  }
);
```

---

### **`isLoggedIn(callback: (result: FacebookResult, isLoggedIn: boolean, accessToken?: string, userId?: string) => void): void`** {#is-logged-in}

- _since :_ <BadgeWithVersion type="SDK" version="v1.4.0" link="/docs/releases/v1/sdk/release-v-1-4-0" />

:::warning 주의
_[연동하기](./integrate#prerequisite)가 완료되어야 사용할 수 있습니다._
:::

#### 설명 {#is-logged-in-summary}

현재 사용자가 **페이스북 네이티브 로그인 상태인지 확인**합니다.  
로그인 여부(`isLoggedIn`), `accessToken`, `userId` 값을 반환합니다.

#### 매개변수 {#is-logged-in-parameters}

| 이름       | 타입                                                                                           | 필수 여부 | 설명                        |
| ---------- | ---------------------------------------------------------------------------------------------- | --------- | --------------------------- |
| `callback` | `(result: FacebookResult, isLoggedIn: boolean, accessToken?: string, userId?: string) => void` | ✅        | 로그인 상태를 반환하는 함수 |

#### 반환 값 {#is-logged-in-returns}

해당 메서드는 반환 값을 가지지 않으며, 결과는 `callback`을 통해 비동기적으로 제공됩니다.

#### 사용 예제 {#is-logged-in-examples}

```javascript
// 페이스북 로그인 상태 확인
Nachocode.facebook.isLoggedIn((result, isLoggedIn, accessToken, userId) => {
  if (isLoggedIn) {
    console.log('페이스북 로그인 상태입니다.');
    console.log('Access Token:', accessToken);
    console.log('User ID:', userId);
  } else {
    console.log('페이스북에 로그인되어 있지 않습니다.');
  }
});
```

---

### **`getUserData(permissions: FacebookPermissions, callback: (result: FacebookResult, userData?: FacebookUserData) => void): void`** {#get-user-data}

- _since :_ <BadgeWithVersion type="SDK" version="v1.4.0" link="/docs/releases/v1/sdk/release-v-1-4-0" />

:::warning 주의
_[연동하기](./integrate#prerequisite)가 완료되어야 사용할 수 있습니다._
:::

#### 설명 {#get-user-data-summary}

페이스북에서 **사용자 데이터를 요청**합니다.  
**요청한 권한(permissions)** 에 따라 **사용자 프로필, 이메일, 생일 등** 다양한 정보를 가져올 수 있습니다.

#### 매개변수 {#get-user-data-parameters}

| 이름          | 타입                                                            | 필수 여부 | 설명                           |
| ------------- | --------------------------------------------------------------- | --------- | ------------------------------ |
| `permissions` | [`FacebookPermissions`](#facebook-permission-types)             | ✅        | 요청할 사용자 데이터 권한 목록 |
| `callback`    | `(result: FacebookResult, userData?: FacebookUserData) => void` | ✅        | 사용자 데이터를 반환하는 함수  |

#### 반환 값 {#get-user-data-returns}

해당 메서드는 반환 값을 가지지 않으며, 결과는 `callback`을 통해 비동기적으로 제공됩니다.

#### 사용 예제 {#get-user-data-examples}

```javascript
// 사용자 데이터 요청
Nachocode.facebook.getUserData(
  ['email', 'public_profile'],
  (result, userData) => {
    if (result.status === 'success') {
      console.log('사용자 데이터:', userData);
    } else {
      console.error(
        '사용자 데이터 요청 실패: ',
        result.errorCode,
        result.message
      );
    }
  }
);
```

---

### **`logout(): void`** {#logout}

- _since :_ <BadgeWithVersion type="SDK" version="v1.4.0" link="/docs/releases/v1/sdk/release-v-1-4-0" />

:::warning 주의
_[연동하기](./integrate#prerequisite)가 완료되어야 사용할 수 있습니다._
:::

#### 설명 {#logout-summary}

페이스북 네이티브 로그인 세션을 **로그아웃**합니다.  
이 메서드는 반환 값을 가지지 않습니다.

#### 사용 예제 {#logout-examples}

```javascript
// 페이스북 로그아웃
Nachocode.facebook.logout();
console.log('페이스북에서 로그아웃되었습니다.');
```

---

### **`logEvent(eventName: string, parameters?: Record<string, string>): void`** {#log-event}

- _since :_ <BadgeWithVersion type="SDK" version="v1.9.0" link="/docs/releases/v1/sdk/release-v-1-9-0" />

:::warning 주의
_[연동하기](./integrate#prerequisite)가 완료되어야 사용할 수 있습니다._
:::

#### 설명 {#log-event-summary}

Facebook에 맞춤 앱 이벤트를 로깅합니다.
사용자의 행동이나 앱 내 활동을 추적하는 데 사용됩니다.

:::warning 주의
서로 다른 이벤트 이름을 최대 1,000개까지 사용할 수 있습니다.  
한도에 도달하면 새로운 이벤트 유형이 로깅되지 않으므로 더 이상 사용하지 않는 이벤트는 비활성화해야 합니다.
:::

:::tip
집계된 이벤트 로그는 [Meta 이벤트 관리자](https://eventsmanager.facebook.com/events_manager2/overview)에서 확인이 가능합니다.
:::

:::info Meta 앱 이벤트 공식 문서 보러가기
➡️[https://developers.facebook.com/docs/app-events/overview](https://developers.facebook.com/docs/app-events/overview)
:::

#### 매개변수 {#log-event-parameters}

| 이름         | 타입                     | 필수 여부 | 설명                                |
| ------------ | ------------------------ | --------- | ----------------------------------- |
| `eventName`  | `string`                 | ✅        | 이벤트 이름                         |
| `parameters` | `Record<string, string>` |           | 이벤트와 함께 전송할 값 (최대 25개) |

- 이벤트와 매개변수 이름은 2~40자의 영숫자로 구성되어야 합니다.
- 각 매개변수 값의 길이는 100자 이하여야 합니다.

#### 반환 값 {#log-event-returns}

해당 메서드는 반환 값을 가지지 않습니다.

#### 사용 예제 {#log-event-examples}

```javascript
// 커스텀 앱 이벤트 로깅
Nachocode.facebook.logEvent('purchase', {
  product_id: 'item_001',
  price: 9.99,
  currency: 'USD',
  category: 'electronics',
});
```

---

:::info **추가 정보**

- 요청한 권한(permissions)은 페이스북 개발자 센터에서 **승인된 권한만 사용 가능**합니다.
- 페이스북 사용자는 **로그인 및 사용자 데이터 제공 시 명시적으로 권한을 허용**해야 합니다.
- 권한 목록은 [Facebook Permissions 공식 문서](https://developers.facebook.com/docs/permissions)에서 확인할 수 있습니다.

:::

---
