---
sidebar_label: 레퍼런스
pagination_label: 레퍼런스 (Reference)
description: nachocode SDK의 `naver` 네임스페이스로 네이버 네이티브 로그인 연동 및 사용자 데이터 조회, 로그인 상태 확인, 로그아웃 등 네이버 인증 기능을 쉽게 구현할 수 있습니다.
keywords:
  [
    네이버 소셜 로그인,
    네이버 네이티브 로그인,
    네이버 웹뷰 로그인,
    naver 소셜 로그인,
    naver 네이티브 로그인,
    naver 웹뷰 로그인,
    naver social login,
    naver native login,
    naver webview login,
  ]
image: /img/docs/thumbnails/SDK/naver.png
---

# 네이버 (`naver`) - 레퍼런스

import { BadgeWithVersion } from '@site/src/components/svg/badge-with-version';
import { ThumbnailImage } from '@site/src/components/common/image/thumbnail-image';

<ThumbnailImage src='/img/docs/thumbnails/SDK/naver.png'/>

> 🚀 **추가된 버전 :** <BadgeWithVersion type="SDK" version="v1.9.0" link="/docs/releases/v1/sdk/release-v-1-9-0" /> <BadgeWithVersion type="Android" version="v1.9.0" link="/docs/releases/v1/app-source/android/release-v-1-8-0" /> <BadgeWithVersion type="iOS" version="v1.9.0" link="/docs/releases/v1/app-source/ios/release-v-1-8-0" />  
> 🔔 **최신화 일자:** 2026-01-16

:::warning 연동을 마치셨나요?
SDK 메서드를 사용하기 위해선 필수 선행 작업으로 [**연동하기**](./integrate)를 마쳐야합니다.
:::

## **개요** {#overview}

`naver` 네임스페이스는 **네이버 네이티브 로그인 기능을 제공**하며, 사용자는 **네이버 계정을 통해 인증**할 수 있습니다.  
이 네임스페이스를 사용하여 **로그인, 사용자 정보 조회, 로그아웃, 연결끊기**와 같은 기능을 수행할 수 있습니다.

---

## **타입 정의** {#types}

### **`NaverResult`** {#naver-result}

네이버 로그인 및 요청의 결과 상태를 나타내는 타입입니다.

```typescript
export declare type NaverSuccessResult = {
  status: 'success';
};
```

```typescript
export declare type NaverErrorResult = {
  status: 'error';
  errorCode: string;
  message: string;
};
```

```typescript
export declare type NaverResult = NaverSuccessResult | NaverErrorResult;
```

| 필드        | 타입                   | 설명                       |
| ----------- | ---------------------- | -------------------------- |
| `status`    | `'error' \| 'success'` | 요청 성공 또는 실패 상태   |
| `errorCode` | `string` _(optional)_  | 오류 코드 (실패 시 반환)   |
| `message`   | `string` _(optional)_  | 오류 메시지 (실패 시 반환) |

---

### **`NaverLoginData`** {#naver-login-data}

네이버 로그인 성공 시 반환되는 타입입니다.

```typescript
export declare type NaverLoginData = {
  expiresAt: string;
  accessToken: string;
  refreshToken: string;
};
```

---

### **`NaverUserData`** {#naver-user-data}

네이버 사용자 데이터를 나타내는 타입입니다. 유저 정보 조회 시 반환됩니다.

```typescript
export declare type NaverUserData = {
  id: string;
  gender?: 'F' | 'M';
  name?: string;
  nickName?: string;
  email?: string;
  mobile?: string;
  mobile_e164?: string;
  age?: string;
  birthyear?: string;
  birthday?: string;
  profile_image?: string;
};
```

| 필드            | 타입         | 설명                             | 예시                                                                                   |
| --------------- | ------------ | -------------------------------- | -------------------------------------------------------------------------------------- |
| `id`            | `number`     | 네이버 사용자 ID                 | ex. `"ABCDEF123456_GHIJKLMN12345_OPQERST1234567"`                                      |
| `gender`        | `'F' \| 'M'` | 사용자의 성별                    | ex. `"F"`                                                                              |
| `name`          | `string`     | 사용자의 전체 이름               | ex. `"김나쵸"`                                                                         |
| `nickName`      | `string`     | 사용자의 별명                    | ex. `"nachocode"`                                                                      |
| `email`         | `string`     | 사용자의 이메일                  | ex. `"nachocode@naver.com"`                                                            |
| `mobile`        | `string`     | 사용자의 핸드폰번호              | ex. `"010-1234-5678"`                                                                  |
| `mobile_e164`   | `string`     | 사용자의 핸드폰번호 (E.164 포맷) | ex. `"+821012345678"`                                                                  |
| `age`           | `string`     | 사용자의 연령대                  | ex. `"20-29"`                                                                          |
| `birthyear`     | `string`     | 사용자의 생년                    | ex. `"2000"`                                                                           |
| `birthday`      | `string`     | 사용자의 생일 (MM-DD 형식)       | ex. `"12-31"`                                                                          |
| `profile_image` | `string`     | 사용자의 프로필 이미지 주소      | ex. `"https://phinf.pstatic.net/contact/20241227_20/1735275960557XUHqT_PNG/image.png"` |

---

## **메서드 목록** {#method-list}

| 메서드                                    | 설명                   | 추가된 버전                                                                                   |
| ----------------------------------------- | ---------------------- | --------------------------------------------------------------------------------------------- |
| [`login(callback)`](#login)               | 네이버 네이티브 로그인 | <BadgeWithVersion type="SDK" version="v1.9.0" link="/docs/releases/v1/sdk/release-v-1-9-0" /> |
| [`isLoggedIn(callback)`](#is-logged-in)   | 로그인 상태 확인       | <BadgeWithVersion type="SDK" version="v1.9.0" link="/docs/releases/v1/sdk/release-v-1-9-0" /> |
| [`getUserData(callback)`](#get-user-data) | 사용자 데이터 요청     | <BadgeWithVersion type="SDK" version="v1.9.0" link="/docs/releases/v1/sdk/release-v-1-9-0" /> |
| [`logout(callback?)`](#logout)            | 네이버 사용자 로그아웃 | <BadgeWithVersion type="SDK" version="v1.9.0" link="/docs/releases/v1/sdk/release-v-1-9-0" /> |
| [`disconnect(callback?)`](#logout)        | 네이버 사용자 연결끊기 | <BadgeWithVersion type="SDK" version="v1.9.0" link="/docs/releases/v1/sdk/release-v-1-9-0" /> |

---

## **메서드 상세** {#method-details}

### **`login(callback: (result: NaverResult, loginData?: NaverLoginData) => void): void`** {#login}

- _since :_ <BadgeWithVersion type="SDK" version="v1.9.0" link="/docs/releases/v1/sdk/release-v-1-9-0" />

:::warning 주의
_[연동하기](./integrate#prerequisite)가 완료되어야 사용할 수 있습니다._
:::

#### 설명 {#login-summary}

네이버 네이티브 로그인 요청을 수행합니다.  
로그인 성공 시 `accessToken`, `refreshToken`, `expiresAt`이 콜백 함수로 전달됩니다.

#### 매개변수 {#login-parameters}

| 이름       | 타입                                                        | 필수 여부 | 설명                             |
| ---------- | ----------------------------------------------------------- | --------- | -------------------------------- |
| `callback` | `(result: NaverResult, loginData?: NaverLoginData) => void` | ✅        | 로그인 결과를 반환하는 콜백 함수 |

#### 반환 값 {#login-returns}

해당 메서드는 반환 값을 가지지 않으며, 결과는 `callback`을 통해 비동기적으로 제공됩니다.

#### 사용 예제 {#login-examples}

```javascript
// 네이버 로그인 요청
Nachocode.naver.login((result, loginData) => {
  if (result.status === 'success') {
    console.log('네이버 로그인 성공');
    console.log('Access Token:', loginData.accessToken);
    console.log('Refresh Token:', loginData.refreshToken);
    console.log('Expires At:', loginData.expiresAt);
  } else {
    console.error('네이버 로그인 실패:', result.errorCode, result.message);
  }
});
```

---

### **`isLoggedIn(callback: (result: NaverResult, isLoggedIn: boolean, accessToken?: string) => void): void`** {#is-logged-in}

- _since :_ <BadgeWithVersion type="SDK" version="v1.9.0" link="/docs/releases/v1/sdk/release-v-1-9-0" />

:::warning 주의
_[연동하기](./integrate#prerequisite)가 완료되어야 사용할 수 있습니다._
:::

#### 설명 {#is-logged-in-summary}

현재 사용자가 **네이버 네이티브 로그인 상태인지 확인**합니다.  
로그인 여부(`isLoggedIn`), `accessToken` 값을 반환합니다.

#### 매개변수 {#is-logged-in-parameters}

| 이름       | 타입                                                                       | 필수 여부 | 설명                        |
| ---------- | -------------------------------------------------------------------------- | --------- | --------------------------- |
| `callback` | `(result: NaverResult, isLoggedIn: boolean, accessToken?: string) => void` | ✅        | 로그인 상태를 반환하는 함수 |

#### 반환 값 {#is-logged-in-returns}

해당 메서드는 반환 값을 가지지 않으며, 결과는 `callback`을 통해 비동기적으로 제공됩니다.

#### 사용 예제 {#is-logged-in-examples}

```javascript
// 네이버 로그인 상태 확인
Nachocode.naver.isLoggedIn((result, isLoggedIn, accessToken) => {
  if (isLoggedIn) {
    console.log('네이버 로그인 상태입니다.');
    console.log('Access Token:', accessToken);
  } else {
    console.log('네이버에 로그인되어 있지 않습니다.');
  }
});
```

---

### **`getUserData(callback: (result: NaverResult, userData?: NaverUserData) => void): void`** {#get-user-data}

- _since :_ <BadgeWithVersion type="SDK" version="v1.9.0" link="/docs/releases/v1/sdk/release-v-1-9-0" />

:::warning 주의
_[연동하기](./integrate#prerequisite)가 완료되어야 사용할 수 있습니다._
:::

#### 설명 {#get-user-data-summary}

네이버에서 **사용자 데이터를 요청**합니다.  
**정보 제공에 동의한 회원**에 한하여 **회원 메일 주소, 별명, 프로필 사진, 생일, 연령대** 값을 조회 할 수 있습니다.

#### 매개변수 {#get-user-data-parameters}

| 이름       | 타입                                                      | 필수 여부 | 설명                          |
| ---------- | --------------------------------------------------------- | --------- | ----------------------------- |
| `callback` | `(result: NaverResult, userData?: NaverUserData) => void` | ✅        | 사용자 데이터를 반환하는 함수 |

#### 반환 값 {#get-user-data-returns}

해당 메서드는 반환 값을 가지지 않으며, 결과는 `callback`을 통해 비동기적으로 제공됩니다.

#### 사용 예제 {#get-user-data-examples}

```javascript
// 사용자 데이터 요청
Nachocode.naver.getUserData((result, userData) => {
  if (result.status === 'success') {
    console.log('사용자 데이터:', userData);
  } else {
    console.error('사용자 데이터 요청 실패:', result.errorCode, result.message);
  }
});
```

---

### **`logout(callback?: (result: NaverResult) => void): void`** {#logout}

- _since :_ <BadgeWithVersion type="SDK" version="v1.9.0" link="/docs/releases/v1/sdk/release-v-1-9-0" />

:::warning 주의
_[연동하기](./integrate#prerequisite)가 완료되어야 사용할 수 있습니다._
:::

#### 설명 {#logout-summary}

네이버 네이티브 로그인 세션을 **로그아웃**합니다.

#### 매개변수 {#logout-parameters}

| 이름       | 타입                            | 필수 여부 | 설명                          |
| ---------- | ------------------------------- | --------- | ----------------------------- |
| `callback` | `(result: NaverResult) => void` |           | 로그아웃 결과를 반환하는 함수 |

#### 반환 값 {#logout-returns}

해당 메서드는 반환 값을 가지지 않으며, 결과는 `callback`을 통해 비동기적으로 제공됩니다.

#### 사용 예제 {#logout-examples}

```javascript
// 네이버 로그아웃
Nachocode.naver.logout();
console.log('네이버에서 로그아웃되었습니다.');
```

---

### **`disconnect(callback?: (result: NaverResult) => void): void`** {#disconnect}

- _since :_ <BadgeWithVersion type="SDK" version="v1.9.0" link="/docs/releases/v1/sdk/release-v-1-9-0" />

:::warning 주의
_[연동하기](./integrate#prerequisite)가 완료되어야 사용할 수 있습니다._
:::

#### 설명 {#disconnect-summary}

네이버 네이티브 계정을 **연결 해제**합니다.

#### 매개변수 {#disconnect-parameters}

| 이름       | 타입                            | 필수 여부 | 설명                           |
| ---------- | ------------------------------- | --------- | ------------------------------ |
| `callback` | `(result: NaverResult) => void` |           | 연결 해제 결과를 반환하는 함수 |

#### 반환 값 {#disconnect-returns}

해당 메서드는 반환 값을 가지지 않으며, 결과는 `callback`을 통해 비동기적으로 제공됩니다.

#### 사용 예제 {#disconnect-examples}

```javascript
// 네이버 연결 해제
Nachocode.naver.disconnect();
console.log('네이버 계정 연결을 해제하였습니다.');
```

---

:::info **추가 정보**

- 유저 정보는 네이버 개발자 센터에서 **등록한 정보만 사용 가능**합니다.
- 네이버 사용자는 **로그인 및 사용자 데이터 제공 시 명시적으로 정보 제공에 동의**해야 합니다.

:::

---
