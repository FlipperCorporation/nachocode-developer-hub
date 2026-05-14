---
sidebar_label: 레퍼런스
pagination_label: 레퍼런스 (Reference)
description: nachocode SDK의 `kakao` 네임스페이스로 카카오 네이티브 로그인 연동, 사용자 데이터 조회, 및 카카오톡 공유 기능을 쉽게 구현할 수 있습니다.
keywords:
  [
    카카오 소셜 로그인,
    카카오 네이티브 로그인,
    카카오 공유,
    카카오톡 공유,
    카카오톡 소셜 로그인,
    카카오톡 네이티브 로그인,
    kakao social login,
    kakao native login,
    kakao webview login,
    kakao share,
  ]
image: /img/docs/thumbnails/SDK/kakao.png
---

# 카카오 (`kakao`) - 레퍼런스

import { BadgeWithVersion } from '@site/src/components/svg/badge-with-version';
import { ThumbnailImage } from '@site/src/components/common/image/thumbnail-image';

<ThumbnailImage src='/img/docs/thumbnails/SDK/kakao.png'/>

> 🚀 **추가된 버전 :** <BadgeWithVersion type="SDK" version="v1.5.0" link="/docs/releases/v1/sdk/release-v-1-5-0" /> <BadgeWithVersion type="Android" version="v1.5.0" link="/docs/releases/v1/app-source/android/release-v-1-5-0" /> <BadgeWithVersion type="iOS" version="v1.5.0" link="/docs/releases/v1/app-source/ios/release-v-1-5-0" />  
> 🔔 **최신화 일자:** 2026-04-08

:::warning 연동을 마치셨나요?
SDK 메서드를 사용하기 위해선 필수 선행 작업으로 [**연동하기**](./integrate)를 마쳐야합니다.
:::

## **개요** {#overview}

`kakao` 네임스페이스는 **카카오 네이티브 로그인** 및 **카카오톡 공유 기능**을 제공합니다.

이 네임스페이스를 통해 **로그인, 사용자 정보 조회, 로그아웃, 연결 해제(unlink)** 를 수행하거나,  
**커스텀 템플릿 / URL 스크랩 기반** 카카오톡 공유 기능을 구현할 수 있습니다.

---

## **타입 정의** {#types}

### **`KakaoResult`** {#kakao-result}

- _since :_ <BadgeWithVersion type="SDK" version="v1.5.0" link="/docs/releases/v1/sdk/release-v-1-5-0" />

카카오 API 요청 결과를 나타내는 타입입니다.

```typescript
export declare type KakaoSuccessResult = {
  status: 'success';
  statusCode: number;
};
```

```typescript
export declare type KakaoErrorResult = {
  status: 'error';
  statusCode: number;
  message: string;
};
```

```typescript
export declare type KakaoResult = KakaoSuccessResult | KakaoErrorResult;
```

| 필드         | 타입                   | 설명                         |
| ------------ | ---------------------- | ---------------------------- |
| `status`     | `'error' \| 'success'` | 요청 성공 또는 실패 상태     |
| `statusCode` | `number`               | 요청 결과 코드 (성공 시 200) |
| `message`    | `string` _(optional)_  | 오류 메시지 (실패 시 반환)   |

---

### **`KakaoLoginData`** {#kakao-login-data}

- _since :_ <BadgeWithVersion type="SDK" version="v1.5.0" link="/docs/releases/v1/sdk/release-v-1-5-0" />

카카오 로그인 결과 데이터입니다.

| 필드                    | 타입     | 설명                              |
| ----------------------- | -------- | --------------------------------- |
| `accessToken`           | `string` | 액세스 토큰 _(optional)_          |
| `accessTokenExpiresAt`  | `Date`   | 액세스 토큰 만료일 _(optional)_   |
| `refreshToken`          | `string` | 리프레시 토큰 _(optional)_        |
| `refreshTokenExpiresAt` | `Date`   | 리프레시 토큰 만료일 _(optional)_ |
| `idToken`               | `string` | ID 토큰 _(optional)_              |

---

### **`KakaoUserData`** {#kakao-user-data}

- _since :_ <BadgeWithVersion type="SDK" version="v1.5.0" link="/docs/releases/v1/sdk/release-v-1-5-0" />

카카오 사용자 정보 데이터입니다.

| 필드      | 타입      | 설명                          |
| --------- | --------- | ----------------------------- |
| `id`      | `number`  | 카카오 사용자 고유 ID         |
| `email`   | `string`  | 대표 이메일 _(optional)_      |
| `name`    | `string`  | 이름 _(optional)_             |
| `profile` | `string`  | 프로필 정보 _(optional)_      |
| 기타 필드 | `unknown` | 추가 사용자 속성 _(optional)_ |

<details>
  <summary>전체 보기</summary>

| 필드                            | 타입      | 설명                                           |
| ------------------------------- | --------- | ---------------------------------------------- |
| `id`                            | `number`  | 카카오 사용자 고유 ID                          |
| `connectedAt`                   | `Date`    | 연결 시각 _(optional)_                         |
| `profileNeedsAgreement`         | `boolean` | 프로필 제공 동의 필요 여부 _(optional)_        |
| `profileNicknameNeedsAgreement` | `boolean` | 닉네임 제공 동의 필요 여부 _(optional)_        |
| `profileImageNeedsAgreement`    | `boolean` | 프로필 이미지 제공 동의 필요 여부 _(optional)_ |
| `profile`                       | `string`  | 프로필 정보 _(optional)_                       |
| `nameNeedsAgreement`            | `boolean` | 이름 제공 동의 필요 여부 _(optional)_          |
| `name`                          | `string`  | 이름 _(optional)_                              |
| `emailNeedsAgreement`           | `boolean` | 이메일 제공 동의 필요 여부 _(optional)_        |
| `isEmailValid`                  | `boolean` | 이메일 유효성 여부 _(optional)_                |
| `isEmailVerified`               | `boolean` | 이메일 인증 여부 _(optional)_                  |
| `email`                         | `string`  | 대표 이메일 _(optional)_                       |
| `ageRangeNeedsAgreement`        | `boolean` | 연령대 제공 동의 필요 여부 _(optional)_        |
| `ageRange`                      | `unknown` | 연령대 _(optional)_                            |
| `birthyearNeedsAgreement`       | `boolean` | 출생 연도 제공 동의 필요 여부 _(optional)_     |
| `birthyear`                     | `string`  | 출생 연도 (`YYYY`) _(optional)_                |
| `birthdayNeedsAgreement`        | `boolean` | 생일 제공 동의 필요 여부 _(optional)_          |
| `birthday`                      | `string`  | 생일 (`MMDD`) _(optional)_                     |
| `birthdayType`                  | `unknown` | 생일 타입 _(optional)_                         |
| `genderNeedsAgreement`          | `boolean` | 성별 제공 동의 필요 여부 _(optional)_          |
| `gender`                        | `string`  | 성별 _(optional)_                              |
| `legalName`                     | `string`  | 법적 이름 _(optional)_                         |
| `legalGenderNeedsAgreement`     | `boolean` | 법적 성별 제공 동의 필요 여부 _(optional)_     |
| `legalGender`                   | `string`  | 법적 성별 _(optional)_                         |
| `legalBirthDateNeedsAgreement`  | `boolean` | 법적 생년월일 제공 동의 필요 여부 _(optional)_ |
| `legalBirthDate`                | `string`  | 법적 생년월일 (`yyyyMMdd`) _(optional)_        |
| `phoneNumberNeedsAgreement`     | `boolean` | 전화번호 제공 동의 필요 여부 _(optional)_      |
| `phoneNumber`                   | `string`  | 전화번호 _(optional)_                          |
| `isKoreanNeedsAgreement`        | `boolean` | 한국인 여부 제공 동의 필요 여부 _(optional)_   |
| `isKorean`                      | `boolean` | 한국인 여부 _(optional)_                       |

</details>

---

### **`KakaoShareType`** {#kakao-share-type}

- _since :_ <BadgeWithVersion type="SDK" version="v1.5.0" link="/docs/releases/v1/sdk/release-v-1-5-0" />

카카오톡 공유 유형을 나타내는 타입(type)입입니다.

```typescript
type KakaoShareType = 'custom' | 'scrap';
```

| 값       | 설명                                               |
| -------- | -------------------------------------------------- |
| `custom` | 미리 등록된 커스텀 템플릿을 사용하여 카카오톡 공유 |
| `scrap`  | URL을 기반으로 카카오톡 스크랩 공유                |

---

### **`KakaoShareCustom`** {#kakao-share-custom}

- _since :_ <BadgeWithVersion type="SDK" version="v1.5.0" link="/docs/releases/v1/sdk/release-v-1-5-0" />

카카오톡 커스텀 템플릿 공유 시 사용할 데이터 타입입니다.

```typescript
declare type KakaoShareCustom = {
  templateId: number;
  templateArgs?: {
    [key: string]: string;
  };
  serverCallbackArgs?: {
    [key: string]: string;
  };
};
```

| 필드                 | 타입                                     | 설명                                            |
| -------------------- | ---------------------------------------- | ----------------------------------------------- |
| `templateId`         | `number`                                 | 카카오 개발자 센터에서 등록한 템플릿 ID         |
| `templateArgs`       | `{ [key: string]: string }` _(optional)_ | 템플릿에 전달할 가변적인 값                     |
| `serverCallbackArgs` | `{ [key: string]: string }` _(optional)_ | 공유 결과를 서버에서 처리할 경우 함께 전달할 값 |

---

### **`KakaoShareScrap`** {#kakao-share-scrap}

- _since :_ <BadgeWithVersion type="SDK" version="v1.5.0" link="/docs/releases/v1/sdk/release-v-1-5-0" />

카카오톡 URL 스크랩 공유 시 사용할 데이터 타입입니다.

```typescript
declare type KakaoShareScrap = {
  requestUrl: string;
  templateId?: number;
  templateArgs?: {
    [key: string]: string;
  };
  serverCallbackArgs?: {
    [key: string]: string;
  };
};
```

| 필드                 | 타입                                     | 설명                                            |
| -------------------- | ---------------------------------------- | ----------------------------------------------- |
| `requestUrl`         | `string`                                 | 스크랩할 대상 URL                               |
| `templateId`         | `number` _(optional)_                    | 카카오 개발자 센터에서 등록한 템플릿 ID         |
| `templateArgs`       | `{ [key: string]: string }` _(optional)_ | 템플릿에 전달할 가변적인 값                     |
| `serverCallbackArgs` | `{ [key: string]: string }` _(optional)_ | 공유 결과를 서버에서 처리할 경우 함께 전달할 값 |

---

### **`KAKAO_SHARE_STATUS_CODES`** {#kakao-share-status-codes}

- _since :_ <BadgeWithVersion type="SDK" version="v1.5.0" link="/docs/releases/v1/sdk/release-v-1-5-0" />

카카오 공유 요청의 상태 코드 목록입니다.

```typescript
const KAKAO_SHARE_STATUS_CODES = {
  ERROR_JSON_FAILED: 102,
  ERROR_JSON_FAILED_TO_MODEL: 103,
  ERROR_JSON_FAILED_TO_KAKAO_MODEL: 104,
  ERROR_JSON_WRONG_SHARE_TYPE: 105,
  ERROR_JSON_EMPTY_REQUEST_URL: 106,
  ERROR_JSON_EMPTY_TEMPLATE_ID: 108,
  ERROR_KAKAO_FAILED: 199,
  SUCCESS_KAKAO: 200,
  SUCCESS_SAFARI: 201,
} as const;
```

| 값    | 설명                                                 |
| ----- | ---------------------------------------------------- |
| `102` | JSON 변환 실패                                       |
| `103` | JSON을 모델로 변환하는 과정에서 오류 발생            |
| `104` | JSON을 카카오 모델로 변환하는 과정에서 오류 발생     |
| `105` | 잘못된 공유 타입 지정 (`custom` 또는 `scrap`이 아님) |
| `106` | `scrap` 공유 타입에서 `requestUrl`이 비어 있음       |
| `108` | `custom` 공유 타입에서 `templateId`가 비어 있음      |
| `199` | 카카오 공유 요청 실패                                |
| `200` | 성공 (카카오톡 공유 성공)                            |
| `201` | 성공 (외부 브라우저를 통한 공유 성공)                |

---

### **`KakaoShareStatusCode`** {#kakao-share-status-code}

- _since :_ <BadgeWithVersion type="SDK" version="v1.5.0" link="/docs/releases/v1/sdk/release-v-1-5-0" />

카카오 공유 요청의 상태 코드 타입(type)입니다.

```typescript
type KakaoShareStatusCode = 102 | 103 | 104 | 105 | 106 | 108 | 199 | 200 | 201;
```

---

## **메서드 목록** {#method-list}

| 메서드                                    | 설명                                    | 추가된 버전                                                                                   |
| ----------------------------------------- | --------------------------------------- | --------------------------------------------------------------------------------------------- |
| [`login(callback)`](#login)               | 카카오 네이티브 로그인                  | <BadgeWithVersion type="SDK" version="v1.5.0" link="/docs/releases/v1/sdk/release-v-1-5-0" /> |
| [`isLoggedIn(callback)`](#is-logged-in)   | 로그인 상태 확인                        | <BadgeWithVersion type="SDK" version="v1.5.0" link="/docs/releases/v1/sdk/release-v-1-5-0" /> |
| [`getUserData(callback)`](#get-user-data) | 사용자 데이터 요청                      | <BadgeWithVersion type="SDK" version="v1.5.0" link="/docs/releases/v1/sdk/release-v-1-5-0" /> |
| [`logout(callback)`](#logout)             | 카카오 네이티브 로그아웃                | <BadgeWithVersion type="SDK" version="v1.5.0" link="/docs/releases/v1/sdk/release-v-1-5-0" /> |
| [`unlink(callback)`](#unlink)             | 앱과 카카오 계정 연결 해제              | <BadgeWithVersion type="SDK" version="v1.5.0" link="/docs/releases/v1/sdk/release-v-1-5-0" /> |
| [`share(type, data, callback?)`](#share)  | 카카오톡 커스텀 템플릿/스크랩 공유 기능 | <BadgeWithVersion type="SDK" version="v1.5.0" link="/docs/releases/v1/sdk/release-v-1-5-0" /> |

---

## **메서드 상세** {#method-details}

### **`login(callback)`** {#login}

- _since :_ <BadgeWithVersion type="SDK" version="v1.5.0" link="/docs/releases/v1/sdk/release-v-1-5-0" />

:::warning 주의
_[연동하기](./integrate#prerequisite)가 완료되어야 사용할 수 있습니다._
:::

#### 타입 정의 {#login-types}

```typescript
function login(
  callback: (result: KakaoResult, loginData?: KakaoLoginData) => void
): void;
```

#### 설명 {#login-summary}

카카오 네이티브 로그인을 수행합니다.  
성공 시 `loginData`를 콜백을 통해 반환합니다.

#### 매개변수 {#login-parameters}

| 이름       | 타입                                                        | 필수 여부 | 설명                        |
| ---------- | ----------------------------------------------------------- | --------- | --------------------------- |
| `callback` | `(result: KakaoResult, loginData?: KakaoLoginData) => void` | ✅        | 로그인 결과를 반환하는 함수 |

#### 반환 값 {#login-returns}

해당 메서드는 반환 값을 가지지 않으며, 결과는 `callback`을 통해 비동기적으로 제공됩니다.

#### 사용 예제 {#login-examples}

```javascript
Nachocode.kakao.login((result, loginData) => {
  if (result.status === 'success') {
    console.log('카카오 로그인 성공', loginData);
  } else {
    console.error('카카오 로그인 실패', result.message);
  }
});
```

---

### **`isLoggedIn(callback)`** {#is-logged-in}

- _since :_ <BadgeWithVersion type="SDK" version="v1.5.0" link="/docs/releases/v1/sdk/release-v-1-5-0" />

:::warning 주의
_[연동하기](./integrate#prerequisite)가 완료되어야 사용할 수 있습니다._
:::

#### 타입 정의 {#is-logged-in-types}

```typescript
function isLoggedIn(
  callback: (
    result: KakaoResult,
    isLoggedIn: boolean,
    loginData?: KakaoLoginData
  ) => void
): void;
```

#### 설명 {#is-logged-in-summary}

현재 사용자의 카카오 로그인 상태를 확인합니다.

#### 매개변수 {#is-logged-in-parameters}

| 이름       | 타입                                                                            | 필수 여부 | 설명                        |
| ---------- | ------------------------------------------------------------------------------- | --------- | --------------------------- |
| `callback` | `(result: KakaoResult, isLoggedIn: boolean,loginData?: KakaoLoginData) => void` | ✅        | 로그인 상태를 반환하는 함수 |

#### 반환 값 {#is-logged-in-returns}

해당 메서드는 반환 값을 가지지 않으며, 결과는 `callback`을 통해 비동기적으로 제공됩니다.

#### 사용 예제 {#is-logged-in-examples}

```javascript
Nachocode.kakao.isLoggedIn((result, isLoggedIn, loginData) => {
  if (isLoggedIn) {
    console.log('카카오 로그인 상태', loginData);
  } else {
    console.log('카카오 로그인되어 있지 않음');
  }
});
```

---

### **`getUserData(callback)`** {#get-user-data}

- _since :_ <BadgeWithVersion type="SDK" version="v1.5.0" link="/docs/releases/v1/sdk/release-v-1-5-0" />

:::warning 주의
_[연동하기](./integrate#prerequisite)가 완료되어야 사용할 수 있습니다._
:::

#### 타입 정의 {#get-user-data-types}

```typescript
function getUserData(
  callback: (result: KakaoResult, userData?: KakaoUserData) => void
): void;
```

#### 설명 {#get-user-data-summary}

로그인된 사용자의 카카오 정보를 가져옵니다.

#### 매개변수 {#get-user-data-parameters}

| 이름       | 타입                                                      | 필수 여부 | 설명                          |
| ---------- | --------------------------------------------------------- | --------- | ----------------------------- |
| `callback` | `(result: KakaoResult, userData?: KakaoUserData) => void` | ✅        | 사용자 데이터를 반환하는 함수 |

#### 반환 값 {#get-user-data-returns}

해당 메서드는 반환 값을 가지지 않으며, 결과는 `callback`을 통해 비동기적으로 제공됩니다.

#### 사용 예제 {#get-user-data-examples}

```javascript
Nachocode.kakao.getUserData((result, userData) => {
  if (result.status === 'success') {
    console.log('카카오 사용자 정보', userData);
  } else {
    console.error('사용자 정보 가져오기 실패', result.message);
  }
});
```

---

### **`logout(callback)`** {#logout}

- _since :_ <BadgeWithVersion type="SDK" version="v1.5.0" link="/docs/releases/v1/sdk/release-v-1-5-0" />

:::warning 주의
_[연동하기](./integrate#prerequisite)가 완료되어야 사용할 수 있습니다._
:::

#### 타입 정의 {#logout-types}

```typescript
function logout(callback?: (result: KakaoResult) => void): void;
```

#### 설명 {#logout-summary}

카카오 네이티브 로그인 세션을 로그아웃합니다.

다시 로그인 시도 시 자동으로 이전에 연결된 카카오 계정으로 다시 인가 과정을 수행합니다.

#### 매개변수 {#logout-parameters}

| 이름       | 타입                            | 필수 여부 | 설명               |
| ---------- | ------------------------------- | --------- | ------------------ |
| `callback` | `(result: KakaoResult) => void` | ✅        | 로그아웃 결과 콜백 |

#### 반환 값 {#logout-returns}

해당 메서드는 반환 값을 가지지 않으며, 결과는 `callback`을 통해 비동기적으로 제공됩니다.

#### 사용 예제 {#logout-examples}

```javascript
Nachocode.kakao.logout(result => {
  if (result.status === 'success') {
    console.log('카카오 로그아웃 성공');
  } else {
    console.error('카카오 로그아웃 실패', result.message);
  }
});
```

---

### **`unlink(callback)`** {#unlink}

- _since :_ <BadgeWithVersion type="SDK" version="v1.5.0" link="/docs/releases/v1/sdk/release-v-1-5-0" />

:::warning 주의
_[연동하기](./integrate#prerequisite)가 완료되어야 사용할 수 있습니다._
:::

#### 타입 정의 {#unlink-types}

```typescript
function unlink(callback?: (result: KakaoResult) => void): void;
```

#### 설명 {#unlink-summary}

앱과 카카오 계정 간의 연결을 해제(unlink)합니다.

다시 로그인 시도 시 카카오에서 처음부터 다시 인가 과정을 수행합니다.

#### 매개변수 {#unlink-parameters}

| 이름       | 타입                            | 필수 여부 | 설명               |
| ---------- | ------------------------------- | --------- | ------------------ |
| `callback` | `(result: KakaoResult) => void` | ✅        | 로그아웃 결과 콜백 |

#### 반환 값 {#unlink-returns}

해당 메서드는 반환 값을 가지지 않으며, 결과는 `callback`을 통해 비동기적으로 제공됩니다.

#### 사용 예제 {#unlink-examples}

```javascript
Nachocode.kakao.unlink(result => {
  if (result.status === 'success') {
    console.log('카카오 연결 해제 성공');
  } else {
    console.error('카카오 연결 해제 실패', result.message);
  }
});
```

---

### **`share(type, data, callback?)`** {#share}

- _since :_ <BadgeWithVersion type="SDK" version="v1.5.0" link="/docs/releases/v1/sdk/release-v-1-5-0" />

:::warning 주의
_[연동하기](./integrate#prerequisite)가 완료되어야 사용할 수 있습니다._
:::

#### 타입 정의 {#share-types}

```typescript
function share(
  type: KakaoShareType,
  data: KakaoShareCustom | KakaoShareScrap,
  callback?: (result: KakaoShareResult) => void
): void;
```

#### 설명 {#share-summary}

카카오톡 공유 기능을 수행합니다.  
[커스텀 템플릿](https://developers.kakao.com/docs/latest/ko/message-template/common#configuration-method-type)(`custom`) 또는 URL [스크랩](https://developers.kakao.com/docs/latest/ko/message-template/common#scrap)(`scrap`) 방식을 사용하여 공유할 수 있습니다.  
공유 결과는 선택적으로 `callback` 함수를 통해 전달받을 수 있습니다.

:::tip 카카오 공식 문서
[Kakao Developers - 메시지 템플릿 이해하기](https://developers.kakao.com/docs/latest/ko/message-template/common)
:::

#### 매개변수 {#share-parameters}

| 이름       | 타입                                                                                 | 필수 여부 | 설명                                    |
| ---------- | ------------------------------------------------------------------------------------ | --------- | --------------------------------------- |
| `type`     | [`KakaoShareType`](#kakao-share-type)                                                | ✅        | `custom` 또는 `scrap` 공유 방식 선택    |
| `data`     | [`KakaoShareCustom`](#kakao-share-custom) \| [`KakaoShareScrap`](#kakao-share-scrap) | ✅        | 공유할 데이터 (템플릿 ID 또는 URL 필요) |
| `callback` | `(result: KakaoResult) => void` _(optional)_                                         | ❌        | 공유 결과를 처리할 콜백 함수            |

#### 사용 예제 (커스텀 템플릿) {#share-examples-custom}

```javascript
// 커스텀 템플릿을 활용한 카카오톡 공유
Nachocode.kakao.share(
  'custom',
  {
    templateId: 12345,
    templateArgs: { name: 'Nachocode' },
  },
  result => {
    if (result.status === 'success') {
      console.log('카카오톡 공유 성공');
    } else {
      console.error('카카오톡 공유 실패', result.message);
    }
  }
);
```

#### 사용 예제 (URL 스크랩) {#share-examples-scrap}

```javascript
// URL을 활용한 카카오톡 공유
Nachocode.kakao.share(
  'scrap',
  {
    requestUrl: 'https://nachocode.io',
  },
  result => {
    if (result.status === 'success') {
      console.log('카카오톡 공유 성공');
    } else {
      console.error('카카오톡 공유 실패', result.message);
    }
  }
);
```

---

:::info **추가 정보**

- 카카오 공유를 위해서는 **카카오 개발자 센터**에서 앱 키 설정이 선행되어야 합니다.
- `custom` 공유 방식의 경우, **카카오 개발자 센터에서 사전 등록된 템플릿 ID**가 필요합니다.
- `scrap` 방식은 카카오 서버가 스크랩 API를 통해 대상 URL의 메타데이터를 가져와 미리보기를 생성합니다.
- 실패할 경우, [`KakaoResult`](#kakao-result)의 `status` 값이 `'error'`로 설정되며 `message` 필드에 오류 원인이 포함됩니다.
- 카카오 설정 시 어려움이 있으시면 언제든지 [support@nachocode.io](mailto:support@nachocode.io)로 문의해 주세요.

:::
