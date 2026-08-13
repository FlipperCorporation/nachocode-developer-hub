---
description: nachocode SDK의 `locale` 네임스페이스를 사용하여 앱에 설정된 국가 목록을 조회하고, 현재 앱 국가를 조회하거나 변경할 수 있습니다. 다국가 지원 앱 구현에 활용할 수 있습니다.
keywords:
  [
    앱 국가 설정,
    앱 국가 코드,
    다국가 앱,
    국가별 URL,
    앱 국제화,
    앱 지역화,
    다국어 앱,
    app country code,
    app locale,
    multi country app,
    multi region app,
    multi language app,
  ]
image: /img/docs/thumbnails/SDK/location.png
---

# 로케일 (`locale`)

import { BadgeWithVersion } from '@site/src/components/svg/badge-with-version';
import { ThumbnailImage } from '@site/src/components/common/image/thumbnail-image';

<ThumbnailImage src='/img/docs/thumbnails/SDK/location.png'/>

> 🚀 **추가된 버전 :** <BadgeWithVersion type="SDK" version="v1.11.3" link="/docs/releases/v1/sdk/release-v-1-11-3" />  
> 🔔 **최신화 일자:** 2026-08-13

## **개요** {#overview}

`locale` 네임스페이스는 **앱에 설정된 국가 정보를 관리하는 기능**을 제공합니다.

- **앱에서 지원하는 국가 목록을 조회**
- **현재 앱에 설정된 국가 코드를 조회**
- **앱의 국가 코드를 변경**

하나의 앱에서 **국가별로 서로 다른 웹사이트 URL을 제공**하는 등 다국가 지원 앱을 구현할 때 활용할 수 있습니다.  
각 국가에는 **ISO 3166-1 alpha-3 형식의 국가 코드**(ex. `KOR`)와 해당 국가에 대응하는 **웹사이트 URL**이 매핑되어 있습니다.

:::warning 공지

앱 국가 설정 기능은 앱 빌드 시 **국가별 URL 설정이 완료된 앱**에서 사용 가능합니다.  
설정이 필요한 경우 nachocode 문의를 통해 안내받으실 수 있습니다.

- 이메일 문의: [support@nachocode.io](mailto:support@nachocode.io)
- 채팅 문의: [https://nachocode.channel.io](https://nachocode.channel.io/home)

:::

---

## **타입 정의** {#types}

### **`AppCountryData`** {#app-country-data}

- _since :_ <BadgeWithVersion type="SDK" version="v1.11.3" link="/docs/releases/v1/sdk/release-v-1-11-3" />

```typescript
export declare type AppCountryData = {
  countryCode: string;
  url: string;
};
```

| 속성명        | 타입     | 필수 여부 | 설명                                              |
| ------------- | -------- | --------- | ------------------------------------------------- |
| `countryCode` | `string` | ✅        | ISO 3166-1 alpha-3 형식의 국가 코드 (ex. `"KOR"`) |
| `url`         | `string` | ✅        | 해당 국가에 대해 앱에 설정된 웹사이트 URL         |

---

### **`GetAppCountryListResult`** {#get-app-country-list-result}

- _since :_ <BadgeWithVersion type="SDK" version="v1.11.3" link="/docs/releases/v1/sdk/release-v-1-11-3" />

앱 국가 목록 조회 결과 타입으로, 성공 시 [`GetAppCountryListSuccessResult`](#get-app-country-list-success-result), 실패 시 [`GetAppCountryListErrorResult`](#get-app-country-list-error-result)를 반환합니다.

```typescript
export declare type GetAppCountryListResult =
  GetAppCountryListSuccessResult | GetAppCountryListErrorResult;
```

#### **`GetAppCountryListSuccessResult`** {#get-app-country-list-success-result}

```typescript
export declare type GetAppCountryListSuccessResult = {
  status: 'success';
  statusCode: 200;
  message: string;
  data: AppCountryData[];
};
```

| 속성명       | 타입                                    | 필수 여부 | 설명                      |
| ------------ | --------------------------------------- | --------- | ------------------------- |
| `status`     | `'success'`                             | ✅        | 요청 성공 상태            |
| `statusCode` | `200`                                   | ✅        | 결과 상태 코드            |
| `message`    | `string`                                | ✅        | 결과 메시지               |
| `data`       | [`AppCountryData[]`](#app-country-data) | ✅        | 앱에서 지원하는 국가 목록 |

#### **`GetAppCountryListErrorResult`** {#get-app-country-list-error-result}

```typescript
export declare type GetAppCountryListErrorResult = {
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

### **`GetAppCountryCodeResult`** {#get-app-country-code-result}

- _since :_ <BadgeWithVersion type="SDK" version="v1.11.3" link="/docs/releases/v1/sdk/release-v-1-11-3" />

현재 앱 국가 코드 조회 결과 타입으로, 성공 시 [`GetCountryCodeSuccessResult`](#get-country-code-success-result), 실패 시 [`GetCountryCodeErrorResult`](#get-country-code-error-result)를 반환합니다.

```typescript
export declare type GetAppCountryCodeResult =
  GetCountryCodeSuccessResult | GetCountryCodeErrorResult;
```

#### **`GetCountryCodeSuccessResult`** {#get-country-code-success-result}

```typescript
export declare type GetCountryCodeSuccessResult = {
  status: 'success';
  statusCode: 200;
  message: string;
  data: string;
};
```

| 속성명       | 타입        | 필수 여부 | 설명                                                   |
| ------------ | ----------- | --------- | ------------------------------------------------------ |
| `status`     | `'success'` | ✅        | 요청 성공 상태                                         |
| `statusCode` | `200`       | ✅        | 결과 상태 코드                                         |
| `message`    | `string`    | ✅        | 결과 메시지                                            |
| `data`       | `string`    | ✅        | 현재 앱에 설정된 국가 코드 (alpha-3 형식, ex. `"KOR"`) |

#### **`GetCountryCodeErrorResult`** {#get-country-code-error-result}

```typescript
export declare type GetCountryCodeErrorResult = {
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

### **`SetAppCountryCodeResult`** {#set-app-country-code-result}

- _since :_ <BadgeWithVersion type="SDK" version="v1.11.3" link="/docs/releases/v1/sdk/release-v-1-11-3" />

```typescript
export declare type SetAppCountryCodeResult = {
  status: 'success' | 'error';
  statusCode: number;
  message?: string;
};
```

| 속성명       | 타입                   | 필수 여부 | 설명                                      |
| ------------ | ---------------------- | --------- | ----------------------------------------- |
| `status`     | `'success' \| 'error'` | ✅        | 국가 코드 설정 성공 여부                  |
| `statusCode` | `number`               | ✅        | 결과 상태 코드                            |
| `message`    | `string`               | ❌        | **_(optional)_** 에러 발생 시 상세 메시지 |

---

## **메서드 목록** {#method-list}

| 메서드                                                    | 설명                                     | 추가된 버전                                                                                     |
| --------------------------------------------------------- | ---------------------------------------- | ----------------------------------------------------------------------------------------------- |
| [`getAppCountryList()`](#get-app-country-list)            | 앱에서 지원하는 국가 목록을 조회합니다.  | <BadgeWithVersion type="SDK" version="v1.11.3" link="/docs/releases/v1/sdk/release-v-1-11-3" /> |
| [`getAppCountryCode()`](#get-app-country-code)            | 현재 앱에 설정된 국가 코드를 조회합니다. | <BadgeWithVersion type="SDK" version="v1.11.3" link="/docs/releases/v1/sdk/release-v-1-11-3" /> |
| [`setAppCountryCode(countryCode)`](#set-app-country-code) | 앱의 국가 코드를 설정합니다.             | <BadgeWithVersion type="SDK" version="v1.11.3" link="/docs/releases/v1/sdk/release-v-1-11-3" /> |

---

## **메서드 상세** {#method-details}

### **`getAppCountryList()`** {#get-app-country-list}

- _since :_ <BadgeWithVersion type="SDK" version="v1.11.3" link="/docs/releases/v1/sdk/release-v-1-11-3" />

#### 타입 정의 {#get-app-country-list-types}

```typescript
function getAppCountryList(): Promise<GetAppCountryListResult>;
```

#### 설명 {#get-app-country-list-summary}

앱에서 지원하는 국가 목록을 조회합니다.  
각 항목은 **국가 코드**와 해당 국가에 설정된 **웹사이트 URL**로 구성됩니다.

국가 선택 화면을 구현할 때, 선택 가능한 국가 목록을 구성하는 용도로 활용할 수 있습니다.

#### 반환 값 {#get-app-country-list-returns}

| 타입                                                               | 설명                   |
| ------------------------------------------------------------------ | ---------------------- |
| [`Promise<GetAppCountryListResult>`](#get-app-country-list-result) | 앱 국가 목록 조회 결과 |

#### 사용 예제 {#get-app-country-list-examples}

```javascript
// 앱에서 지원하는 국가 목록 조회
const result = await Nachocode.locale.getAppCountryList();

if (result.status === 'success') {
  result.data.forEach(country => {
    console.log(country.countryCode, country.url);
    // ex. "KOR", "https://nachocode.io"
  });
} else {
  console.error('국가 목록 조회 실패: ', result.message);
}
```

---

### **`getAppCountryCode()`** {#get-app-country-code}

- _since :_ <BadgeWithVersion type="SDK" version="v1.11.3" link="/docs/releases/v1/sdk/release-v-1-11-3" />

#### 타입 정의 {#get-app-country-code-types}

```typescript
function getAppCountryCode(): Promise<GetAppCountryCodeResult>;
```

#### 설명 {#get-app-country-code-summary}

현재 앱에 설정되어 있는 국가 코드를 조회합니다.  
성공 시 `data` 값으로 **ISO 3166-1 alpha-3 형식의 국가 코드**(ex. `"KOR"`)를 반환합니다.

:::info `store.getStoreCountryCode()`와의 차이

- [`store.getStoreCountryCode()`](/docs/sdk/namespaces/store#get-store-country-code) : 디바이스의 **앱 스토어 계정 국가 코드**를 조회합니다.
- `locale.getAppCountryCode()` : **앱에 설정되어 있는 국가 코드**를 조회합니다.

:::

#### 반환 값 {#get-app-country-code-returns}

| 타입                                                               | 설명                   |
| ------------------------------------------------------------------ | ---------------------- |
| [`Promise<GetAppCountryCodeResult>`](#get-app-country-code-result) | 앱 국가 코드 조회 결과 |

#### 사용 예제 {#get-app-country-code-examples}

```javascript
// 현재 앱에 설정된 국가 코드 조회
const result = await Nachocode.locale.getAppCountryCode();

if (result.status === 'success') {
  console.log('현재 앱 국가 코드:', result.data); // ex. "KOR"
} else {
  console.error('국가 코드 조회 실패: ', result.message);
}
```

---

### **`setAppCountryCode(countryCode)`** {#set-app-country-code}

- _since :_ <BadgeWithVersion type="SDK" version="v1.11.3" link="/docs/releases/v1/sdk/release-v-1-11-3" />

#### 타입 정의 {#set-app-country-code-types}

```typescript
function setAppCountryCode(
  countryCode: string
): Promise<SetAppCountryCodeResult>;
```

#### 설명 {#set-app-country-code-summary}

앱의 국가 코드를 설정합니다.  
사용자가 국가를 직접 선택하는 화면 등에서 호출하여 앱의 국가를 변경할 수 있습니다.

:::warning 주의사항
[`getAppCountryList()`](#get-app-country-list)로 조회한 **국가 목록에 포함된 국가 코드**를 전달해야 합니다.  
지원하지 않는 국가 코드를 전달할 경우 에러가 반환됩니다.
:::

#### 매개변수 {#set-app-country-code-parameters}

| 파라미터      | 타입     | 필수 여부 | 설명                                         |
| ------------- | -------- | --------- | -------------------------------------------- |
| `countryCode` | `string` | ✅        | 설정할 국가 코드 (alpha-3 형식, ex. `"KOR"`) |

#### 반환 값 {#set-app-country-code-returns}

| 타입                                                               | 설명                   |
| ------------------------------------------------------------------ | ---------------------- |
| [`Promise<SetAppCountryCodeResult>`](#set-app-country-code-result) | 앱 국가 코드 설정 결과 |

#### 사용 예제 {#set-app-country-code-examples}

```javascript
// 앱 국가 코드 설정
const result = await Nachocode.locale.setAppCountryCode('KOR');

if (result.status === 'success') {
  console.log('앱 국가 코드가 설정되었습니다.');
} else {
  console.error('앱 국가 코드 설정 실패: ', result.message);
}
```

```javascript
// 국가 선택 화면 구현 예시
async function selectCountry() {
  // 1. 지원하는 국가 목록 조회
  const listResult = await Nachocode.locale.getAppCountryList();
  if (listResult.status !== 'success') {
    console.error('국가 목록 조회 실패: ', listResult.message);
    return;
  }

  // 2. 현재 설정된 국가 코드 조회
  const currentResult = await Nachocode.locale.getAppCountryCode();
  const currentCode =
    currentResult.status === 'success' ? currentResult.data : null;

  // 3. 사용자가 선택한 국가로 변경
  const selectedCode = 'USA'; // ex. 사용자가 선택한 국가 코드
  if (selectedCode !== currentCode) {
    const setResult = await Nachocode.locale.setAppCountryCode(selectedCode);

    if (setResult.status === 'success') {
      console.log('앱 국가가 변경되었습니다.');
    } else {
      console.error('앱 국가 변경 실패: ', setResult.message);
    }
  }
}
```

---
