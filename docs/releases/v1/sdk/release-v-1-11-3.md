---
sidebar_label: 'ver.1.11.3 (26.08.13)'
description: nachocode Client SDK ver.1.11.3의 릴리즈노트입니다.
image: /img/docs/releases/release_note_sdk_detail.png
---

# Release: ver.1.11.3 (2026-08-13)

import { ThumbnailImage } from '@site/src/components/common/image/thumbnail-image';

<ThumbnailImage src='/img/docs/releases/release_note_sdk_detail.png'/>

> 🔔 **배포 일자:** 2026-08-13

이번 업데이트 **v1.11.3**에서는 **앱 국가 설정을 관리하는 기능**이 새롭게 추가되었습니다.

새로운 **`locale` 네임스페이스**를 통해 앱에서 지원하는 국가 목록을 조회하고, 현재 앱에 설정된 국가를 조회하거나 변경할 수 있습니다.

## 주요 변경 사항 (ver.1.11.3)

### 새로운 기능 {#new-features}

- **`locale` 네임스페이스**: 앱 국가 설정 관리 기능 추가

  - 앱에서 **지원하는 국가 목록을 조회**할 수 있습니다.
  - 현재 앱에 설정된 **국가 코드를 조회 및 변경**할 수 있습니다.
  - ➡️ [**`locale` 네임스페이스 문서 바로가기**](/docs/sdk/namespaces/locale)

---

### 앱 국가 설정 기능 (`locale` 네임스페이스)

하나의 앱에서 **국가별로 서로 다른 웹사이트 URL을 제공**하는 다국가 지원 앱을 구현할 수 있는 기능이 추가되었습니다.

각 국가에는 **ISO 3166-1 alpha-3 형식의 국가 코드**(ex. `KOR`)와 해당 국가에 대응하는 **웹사이트 URL**이 매핑되어 있습니다.

#### 추가된 메서드 (`locale`)

| 메서드                           | 설명                            |
| -------------------------------- | ------------------------------- |
| `getAppCountryList()`            | 앱에서 지원하는 국가 목록 조회  |
| `getAppCountryCode()`            | 현재 앱에 설정된 국가 코드 조회 |
| `setAppCountryCode(countryCode)` | 앱의 국가 코드 설정             |

:::info `store.getStoreCountryCode()`와의 차이

- [`store.getStoreCountryCode()`](/docs/sdk/namespaces/store#get-store-country-code) : 디바이스의 **앱 스토어 계정 국가 코드**를 조회합니다.
- `locale.getAppCountryCode()` : **앱에 설정되어 있는 국가 코드**를 조회합니다.

:::

#### 새로운 타입 정의

**`AppCountryData`**

```typescript
export declare type AppCountryData = {
  /**
   * ISO 3166-1 alpha-3 형식의 국가 코드 (ex. "KOR")
   */
  countryCode: string;
  /**
   * 해당 국가에 대해 앱에 설정된 웹사이트 URL
   */
  url: string;
};
```

**`GetAppCountryListResult`**

```typescript
export declare type GetAppCountryListSuccessResult = {
  status: 'success';
  statusCode: 200;
  message: string;
  data: AppCountryData[];
};

export declare type GetAppCountryListErrorResult = {
  status: 'error';
  statusCode: 400 | 500;
  message: string;
};

export declare type GetAppCountryListResult =
  | GetAppCountryListSuccessResult
  | GetAppCountryListErrorResult;
```

**`GetAppCountryCodeResult`**

```typescript
export declare type GetCountryCodeSuccessResult = {
  status: 'success';
  statusCode: 200;
  message: string;
  /**
   * 현재 앱에 설정된 국가 코드 (alpha-3 형식, ex. "KOR")
   */
  data: string;
};

export declare type GetCountryCodeErrorResult = {
  status: 'error';
  statusCode: 400 | 500;
  message: string;
};

export declare type GetAppCountryCodeResult =
  | GetCountryCodeSuccessResult
  | GetCountryCodeErrorResult;
```

**`SetAppCountryCodeResult`**

```typescript
export declare type SetAppCountryCodeResult = {
  status: 'success' | 'error';
  statusCode: number;
  message?: string;
};
```

#### 사용 예제 {#locale-examples}

##### **앱 국가 목록 조회**

```javascript
// 앱에서 지원하는 국가 목록 조회
const result = await Nachocode.locale.getAppCountryList();

if (result.status === 'success') {
  result.data.forEach(country => {
    console.log(country.countryCode, country.url);
    // ex. "KOR", "https://nachocode.io"
  });
} else {
  console.error('국가 목록 조회 실패:', result.message);
}
```

##### **현재 앱 국가 코드 조회**

```javascript
// 현재 앱에 설정된 국가 코드 조회
const result = await Nachocode.locale.getAppCountryCode();

if (result.status === 'success') {
  console.log('현재 앱 국가 코드:', result.data); // ex. "KOR"
} else {
  console.error('국가 코드 조회 실패:', result.message);
}
```

##### **앱 국가 코드 설정**

```javascript
// 앱 국가 코드 설정
const result = await Nachocode.locale.setAppCountryCode('KOR');

if (result.status === 'success') {
  console.log('앱 국가 코드가 설정되었습니다.');
} else {
  console.error('앱 국가 코드 설정 실패:', result.message);
}
```

:::warning 주의사항
`setAppCountryCode()` 호출 시 `getAppCountryList()`로 조회한 **국가 목록에 포함된 국가 코드**를 전달해야 합니다.  
지원하지 않는 국가 코드를 전달할 경우 에러가 반환됩니다.
:::

---

### 기타 개선 사항 {#etc-improvements}

- **TypeScript 정의**(`Nachocode.d.ts`) **업데이트**
  - v.1.11.3 변경 사항을 반영하여 새로운 네임스페이스와 메서드의 타입 정의가 추가되었습니다.
  - `locale` 네임스페이스가 새롭게 추가되었습니다.
  - `AppCountryData`, `GetAppCountryListResult`, `GetAppCountryCodeResult`, `SetAppCountryCodeResult` 타입이 정의되었습니다.

:::info
➡️ [`Nachocode.d.ts`](https://github.com/FlipperCorporation/nachocode-client-sdk-js/blob/main/releases/Nachocode.d.ts)에서 최신 정의를 확인하세요.
:::

---

### 업데이트 방법

nachocode JavaScript Client SDK **ver.1.11.3**를 사용하려면 아래의 스크립트를 업데이트하십시오.

#### SDK CDN 주소

```html
<script src="https://cdn.nachocode.io/nachocode/client-sdk/@1.11.3/client-sdk.min.js"></script>
```

---

:::tip 문의하기

nachocode는 지속적으로 사용자의 개발 경험
향상을 위해 최선을 다하겠습니다.  
추가적인 요청이나 문의사항은 언제든지
지원팀에게 [이메일](mailto:support@nachocode.io)을 보내주세요. 감사합니다.

:::
