---
sidebar_label: 레퍼런스
pagination_label: 레퍼런스 (Reference)
description: nachocode SDK의 `appsflyer` 네임스페이스는 AppsFlyer 마케팅 어트리뷰션 및 사용자 트래킹, 커스텀 이벤트 로깅, 유저 ID 관리 등 AppsFlyer 연동 기능을 쉽게 구현할 수 있습니다.
keywords:
  [
    앱 마케팅,
    앱스플라이어 어트리뷰션,
    앱스플라이어 사용자 추적,
    앱스플라이어 이벤트 로깅,
    앱스플라이어 고객 사용자 아이디,
    AppsFlyer 마케팅 어트리뷰션,
    AppsFlyer 연동,
    앱스플라이어 연동,
    앱스플라이어 Dev Key,
    앱스플라이어 원링크,
    앱스플라이어 인게이지,
    AppsFlyer Marketing Attribution,
    AppsFlyer Attribution,
    AppsFlyer User Tracking,
    AppsFlyer Event Logging,
    AppsFlyer Custom User ID,
    AppsFlyer Dev Key,
    AppsFlyer OneLink,
    AppsFlyer Engage,
    AppsFlyer Integration,
  ]
image: /img/docs/thumbnails/SDK/appsflyer.png
---

# 앱스플라이어 (`appsflyer`) - 레퍼런스

import { BadgeWithVersion } from '@site/src/components/svg/badge-with-version';
import { ThumbnailImage } from '@site/src/components/common/image/thumbnail-image';

<ThumbnailImage src='/img/docs/thumbnails/SDK/appsflyer.png'/>

> 🚀 **추가된 버전 :** <BadgeWithVersion type="SDK" version="v1.7.0" link="/docs/releases/v1/sdk/release-v-1-7-0" /> <BadgeWithVersion type="Android" version="v1.7.0" link="/docs/releases/v1/app-source/android/release-v-1-7-0" /> <BadgeWithVersion type="iOS" version="v1.7.0" link="/docs/releases/v1/app-source/ios/release-v-1-7-0" />  
> 🔔 **최신화 일자:** 2025-10-22

:::warning 연동을 마치셨나요?
SDK 메서드를 사용하기 위해선 필수 선행 작업으로 [**연동하기**](./integrate)를 마쳐야합니다.
:::

## **개요** {#overview}

`appsflyer` 네임스페이스는 **AppsFlyer 마케팅 어트리뷰션 및 사용자 트래킹 기능을 제공**하며, 사용자는 **AppsFlyer를 통해 마케팅 성과를 추적**할 수 있습니다.

이 네임스페이스를 사용하여 **고객 유저 ID 관리, 어트리뷰션 데이터 조회, 커스텀 이벤트 로깅**과 같은 기능을 수행할 수 있습니다.

:::warning 주의
`customerUserId`, `logEvent`의 `values`와 같은 Raw Data는 **AppsFlyer의 Welcome 플랜**에서는 사용할 수 없습니다.

참고 - [앱스플라이어 플랜 및 요율표](https://www.appsflyer.com/ko/pricing/)
:::

---

## **타입 정의** {#types}

### **`AppsflyerResult`** {#appsflyer-result}

AppsFlyer 요청의 결과 상태를 나타내는 타입입니다.

```typescript
export declare type AppsflyerSuccessResult = {
  status: 'success';
  statusCode: 200;
  message: string;
};
```

```typescript
export declare type AppsflyerErrorResult = {
  status: 'error';
  statusCode: number;
  errorCode: string;
  message: string;
};
```

```typescript
export declare type AppsflyerResult =
  | AppsflyerSuccessResult
  | AppsflyerErrorResult;
```

| 필드         | 타입                   | 설명                     |
| ------------ | ---------------------- | ------------------------ |
| `status`     | `'error' \| 'success'` | 요청 성공 또는 실패 상태 |
| `statusCode` | `number`               | 상태 코드 (성공 시 200)  |
| `message`    | `string`               | 응답 메시지              |
| `errorCode`  | `string` _(optional)_  | 오류 코드 (실패 시 반환) |

---

### **`GetCustomerUserIdResult`** {#get-custom-user-id-result}

고객 사용자 ID 조회 결과를 나타내는 타입입니다.

```typescript
interface GetCustomerUserIdSuccessResult extends AppsflyerSuccessResult {
  userId: string;
}

export declare type GetCustomerUserIdResult =
  | GetCustomerUserIdSuccessResult
  | AppsflyerErrorResult;
```

| 필드         | 타입                   | 설명                              |
| ------------ | ---------------------- | --------------------------------- |
| `status`     | `'error' \| 'success'` | 요청 성공 또는 실패 상태          |
| `statusCode` | `number`               | 상태 코드 (성공 시 200)           |
| `message`    | `string`               | 응답 메시지                       |
| `errorCode`  | `string` _(optional)_  | 오류 코드 (실패 시 반환)          |
| `userId`     | `string`               | 등록된 고객 사용자 ID (성공 시만) |

---

### **`ConversionData`** {#conversion-data}

AppsFlyer 전환 데이터를 나타내는 타입입니다.

```typescript
export declare interface ConversionData {
  timestamp: number;
  data_type: 'conversion_data';
  install_time: string;
  af_message: string;
  af_status: 'Organic' | 'Non-organic';
  is_first_launch: boolean;
}
```

| 필드              | 타입                         | 설명                                        |
| ----------------- | ---------------------------- | ------------------------------------------- |
| `timestamp`       | `number`                     | 전환 데이터 수신 시간 (Unix Epoch 밀리초)   |
| `data_type`       | `'conversion_data'`          | 데이터 타입 (전환 데이터)                   |
| `install_time`    | `string`                     | 앱 설치 시간                                |
| `af_message`      | `string`                     | AppsFlyer 메시지                            |
| `af_status`       | `'Organic' \| 'Non-organic'` | 설치 어트리뷰션 타입 (유기적/비유기적 설치) |
| `is_first_launch` | `boolean`                    | 첫 번째 실행 여부                           |

---

### **`DeepLinkData`** {#deep-link-data}

AppsFlyer 딥링크 데이터를 나타내는 타입입니다.

```typescript
export declare interface BaseDeepLinkData {
  timestamp: number;
  data_type: 'deeplink_data';
  link_type: 'app_link' | 'universal_link' | 'uri_scheme';
  scheme: string;
  host: string;
  path: string;
  link: string;
  is_deferred: false;
}

export declare type DeepLinkData = BaseDeepLinkData &
  Omit<Record<string, string>, keyof BaseDeepLinkData>;
```

| 필드                 | 타입                                             | 설명                                        |
| -------------------- | ------------------------------------------------ | ------------------------------------------- |
| `timestamp`          | `number`                                         | 딥링크 데이터 수신 시간 (Unix Epoch 밀리초) |
| `data_type`          | `'deeplink_data'`                                | 데이터 타입 (딥링크 데이터)                 |
| `link_type`          | `'app_link' \| 'universal_link' \| 'uri_scheme'` | 링크 타입                                   |
| `scheme`             | `string`                                         | 앱 스킴                                     |
| `host`               | `string`                                         | 호스트 이름                                 |
| `path`               | `string`                                         | URL 경로                                    |
| `link`               | `string`                                         | 전체 링크 URL                               |
| `is_deferred`        | `false`                                          | 디퍼드 딥링크 여부 (일반 딥링크는 false)    |
| 기타 커스텀 파라미터 | `string`                                         | 추가 커스텀 쿼리 파라미터들                 |

---

### **`DeferredDeepLinkData`** {#deferred-deep-link-data}

AppsFlyer 디퍼드 딥링크 데이터를 나타내는 타입입니다.

```typescript
export declare interface BaseDeferredDeepLinkData {
  timestamp: number;
  data_type: 'deeplink_data';
  link_type: 'deferred_link';
  is_deferred: true;
  match_type:
    | 'referrer' // Google Play referrer string
    | 'id_matching'
    | 'probabilistic'
    | 'srn'; // self-reporting network
  media_source: string;
  campaign: string;
  campaign_id: string;
  click_http_referrer: string;
  deep_link_value: string;
  af_sub1: string;
  af_sub2: string;
  af_sub3: string;
  af_sub4: string;
  af_sub5: string;
}

export declare type DeferredDeepLinkData = BaseDeferredDeepLinkData &
  Omit<Record<string, string>, keyof BaseDeepLinkData>;
```

| 필드                 | 타입                                                      | 설명                                        |
| -------------------- | --------------------------------------------------------- | ------------------------------------------- |
| `timestamp`          | `number`                                                  | 딥링크 데이터 수신 시간 (Unix Epoch 밀리초) |
| `data_type`          | `'deeplink_data'`                                         | 데이터 타입 (딥링크 데이터)                 |
| `link_type`          | `'deferred_link'`                                         | 링크 타입                                   |
| `is_deferred`        | `true`                                                    | 디퍼드 딥링크 여부 (디퍼드 딥링크는 true)   |
| `match_type`         | `'referrer' \| 'id_matching' \| 'probabilistic' \| 'srn'` | 어트리뷰션 매칭 방식                        |
| `media_source`       | `string`                                                  | 미디어 소스 (광고 플랫폼)                   |
| `campaign`           | `string` _(optional)_                                     | 캠페인 이름                                 |
| `campaign_id`        | `string` _(optional)_                                     | 캠페인 ID                                   |
| 기타 커스텀 파라미터 | `string`                                                  | 추가 커스텀 쿼리 파라미터들                 |

---

### **`AttributionData`** {#attribution-data}

AppsFlyer 어트리뷰션 데이터를 나타내는 유니온 타입입니다.

```typescript
export declare type AttributionData =
  | ConversionData
  | DeepLinkData
  | DeferredDeepLinkData;
```

어트리뷰션 데이터는 다음 중 하나의 타입을 가집니다.

- [`ConversionData`](#conversion-data): 전환 데이터 (설치, 실행 어트리뷰션 정보)
- [`DeepLinkData`](#deep-link-data): 딥링크 데이터 (링크 클릭을 통한 앱 실행 정보)
- [`DeferredDeepLinkData`](#deferred-deep-link-data): 디퍼드 딥링크 데이터 (설치 후 첫 실행 시 어트리뷰션 정보)

---

### **`GetAttributionDataResult`** {#get-attribution-data-result}

어트리뷰션 데이터 조회 결과를 나타내는 타입입니다.

```typescript
interface GetAttributionDataSuccessResult extends AppsflyerSuccessResult {
  data: AttributionData;
}

export declare type GetAttributionDataResult =
  | GetAttributionDataSuccessResult
  | AppsflyerErrorResult;
```

---

### **`GetAttributionListResult`** {#get-attribution-list-result}

어트리뷰션 데이터 목록 조회 결과를 나타내는 타입입니다.

```typescript
interface GetAttributionListSuccessResult extends AppsflyerSuccessResult {
  data: AttributionData[];
}

export declare type GetAttributionListResult =
  | GetAttributionListSuccessResult
  | AppsflyerErrorResult;
```

---

## **메서드 목록** {#method-list}

| 메서드                                                        | 설명                        | 추가된 버전                                                                                   | 업데이트된 버전                                                                               |
| ------------------------------------------------------------- | --------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| [`setCustomerUserId(userId)`](#set-customer-user-id)          | 고객 사용자 ID 설정         | <BadgeWithVersion type="SDK" version="v1.7.0" link="/docs/releases/v1/sdk/release-v-1-7-0" /> | <BadgeWithVersion type="SDK" version="v1.8.0" link="/docs/releases/v1/sdk/release-v-1-8-0" /> |
| [`getCustomerUserId()`](#get-customer-user-id)                | 고객 사용자 ID 조회         | <BadgeWithVersion type="SDK" version="v1.7.0" link="/docs/releases/v1/sdk/release-v-1-7-0" /> | <BadgeWithVersion type="SDK" version="v1.8.0" link="/docs/releases/v1/sdk/release-v-1-8-0" /> |
| [`deleteCustomerUserId()`](#delete-customer-user-id)          | 고객 사용자 ID 삭제         | <BadgeWithVersion type="SDK" version="v1.7.0" link="/docs/releases/v1/sdk/release-v-1-7-0" /> | <BadgeWithVersion type="SDK" version="v1.8.0" link="/docs/releases/v1/sdk/release-v-1-8-0" /> |
| [`getAttributionData()`](#get-attribution-data)               | 어트리뷰션 데이터 조회      | <BadgeWithVersion type="SDK" version="v1.7.0" link="/docs/releases/v1/sdk/release-v-1-7-0" /> |                                                                                               |
| [`clearAttributionData(timestamp?)`](#clear-attribution-data) | 어트리뷰션 데이터 삭제      | <BadgeWithVersion type="SDK" version="v1.7.0" link="/docs/releases/v1/sdk/release-v-1-7-0" /> |                                                                                               |
| [`getAttributionList()`](#get-attribution-list)               | 어트리뷰션 데이터 목록 조회 | <BadgeWithVersion type="SDK" version="v1.7.0" link="/docs/releases/v1/sdk/release-v-1-7-0" /> |                                                                                               |
| [`clearAttributionList()`](#clear-attribution-list)           | 어트리뷰션 데이터 목록 삭제 | <BadgeWithVersion type="SDK" version="v1.7.0" link="/docs/releases/v1/sdk/release-v-1-7-0" /> |                                                                                               |
| [`logEvent(eventName, values)`](#log-event)                   | 커스텀 이벤트 로깅          | <BadgeWithVersion type="SDK" version="v1.7.0" link="/docs/releases/v1/sdk/release-v-1-7-0" /> |                                                                                               |

---

## **메서드 상세** {#method-details}

### **`setCustomerUserId(userId)`** {#set-customer-user-id}

- _since :_ <BadgeWithVersion type="SDK" version="v1.7.0" link="/docs/releases/v1/sdk/release-v-1-7-0" />
- _lastupdated :_ <BadgeWithVersion type="SDK" version="v1.8.0" link="/docs/releases/v1/sdk/release-v-1-8-0" /> - 메서드명 변경

:::warning 주의
_[연동하기](./integrate#prerequisite)가 완료되어야 사용할 수 있습니다._
:::

#### 타입 정의 {#set-customer-user-id-types}

```typescript
function setCustomerUserId(customUserId: string): Promise<AppsflyerResult>;
```

#### 설명 {#set-customer-user-id-summary}

AppsFlyer에 **고객 사용자 ID를 설정**합니다.
이 ID는 사용자를 고유하게 식별하는 데 사용됩니다.

:::info 메서드 이름 변경
**v1.8.0**부터 AppsFlyer 공식 문서와의 일관성을 위해 메서드 이름이 변경되었습니다.

- **v1.7.0**: `setCustomUserId(userId)`
- **v1.8.0**: `setCustomerUserId(userId)` ← 현재 메서드명

기존 코드를 사용 중이라면 메서드 이름을 업데이트해 주세요.
:::

:::warning 주의
`customerUserId` 데이터는 **AppsFlyer의 커스텀 패키지**(**엔터프라이즈 플랜**)로의 업그레이드 후 사용할 수 있습니다.
무료 플랜의 앱스플라이어 대시보드에서는 집계 확인이 불가하오니 참고 바랍니다.

참고 - [앱스플라이어 플랜 및 요율표](https://www.appsflyer.com/ko/pricing/)
:::

#### 매개변수 {#set-customer-user-id-parameters}

| 이름     | 타입     | 필수 여부 | 설명               |
| -------- | -------- | --------- | ------------------ |
| `userId` | `string` | ✅        | 설정할 유저 식별자 |

#### 반환 값 {#set-customer-user-id-returns}

[`Promise<AppsflyerResult>`](#appsflyer-result) - 설정 결과를 포함하는 Promise

#### 사용 예제 {#set-customer-user-id-examples}

```javascript
// 고객 사용자 ID 설정
const result = await Nachocode.appsflyer.setCustomerUserId('user123');
if (result.status === 'success') {
  console.log('고객 사용자 ID 설정 성공:', result.message);
} else {
  console.error('고객 사용자 ID 설정 실패: ', result.errorCode, result.message);
}
```

---

### **`getCustomerUserId()`** {#get-customer-user-id}

- _since :_ <BadgeWithVersion type="SDK" version="v1.7.0" link="/docs/releases/v1/sdk/release-v-1-7-0" />
- _lastupdated :_ <BadgeWithVersion type="SDK" version="v1.8.0" link="/docs/releases/v1/sdk/release-v-1-8-0" /> - 메서드명 변경

:::warning 주의
_[연동하기](./integrate#prerequisite)가 완료되어야 사용할 수 있습니다._
:::

#### 타입 정의 {#get-customer-user-id-types}

```typescript
function getCustomerUserId(): Promise<GetCustomerUserIdResult>;
```

#### 설명 {#get-customer-user-id-summary}

AppsFlyer에서 **등록된 고객 사용자 ID를 조회**합니다.

:::info 메서드 이름 변경
**v1.8.0**부터 AppsFlyer 공식 문서와의 일관성을 위해 메서드 이름이 변경되었습니다.

- **v1.7.0**: `getCustomUserId()`
- **v1.8.0**: `getCustomerUserId()` ← 현재 메서드명

기존 코드를 사용 중이라면 메서드 이름을 업데이트해 주세요.
:::

:::warning 주의
`customerUserId` 데이터는 **AppsFlyer의 커스텀 패키지**(**엔터프라이즈 플랜**)로의 업그레이드 후 사용할 수 있습니다.
무료 플랜의 앱스플라이어 대시보드에서는 집계 확인이 불가하오니 참고 바랍니다.

참고 - [앱스플라이어 플랜 및 요율표](https://www.appsflyer.com/ko/pricing/)
:::

#### 반환 값 {#get-customer-user-id-returns}

[`Promise<GetCustomerUserIdResult>`](#get-custom-user-id-result) - 고객 사용자 ID와 결과를 포함하는 Promise

#### 사용 예제 {#get-customer-user-id-examples}

```javascript
// 고객 사용자 ID 조회
const result = await Nachocode.appsflyer.getCustomerUserId();
if (result.status === 'success') {
  console.log('고객 사용자 ID:', result.userId);
} else {
  console.error('고객 사용자 ID 조회 실패: ', result.errorCode, result.message);
}
```

---

### **`deleteCustomerUserId()`** {#delete-customer-user-id}

- _since :_ <BadgeWithVersion type="SDK" version="v1.7.0" link="/docs/releases/v1/sdk/release-v-1-7-0" />
- _lastupdated :_ <BadgeWithVersion type="SDK" version="v1.8.0" link="/docs/releases/v1/sdk/release-v-1-8-0" /> - 메서드명 변경

:::warning 주의
_[연동하기](./integrate#prerequisite)가 완료되어야 사용할 수 있습니다._
:::

#### 타입 정의 {#delete-customer-user-id-types}

```typescript
function deleteCustomerUserId(): Promise<AppsflyerResult>;
```

#### 설명 {#delete-customer-user-id-summary}

AppsFlyer에서 **등록된 고객 사용자 ID를 삭제**합니다.

:::info 메서드 이름 변경
**v1.8.0**부터 AppsFlyer 공식 문서와의 일관성을 위해 메서드 이름이 변경되었습니다.

- **v1.7.0**: `deleteCustomUserId()`
- **v1.8.0**: `deleteCustomerUserId()` ← 현재 메서드명

기존 코드를 사용 중이라면 메서드 이름을 업데이트해 주세요.
:::

:::warning 주의
`customerUserId` 데이터는 **AppsFlyer의 커스텀 패키지**(**엔터프라이즈 플랜**)로의 업그레이드 후 사용할 수 있습니다.
무료 플랜의 앱스플라이어 대시보드에서는 집계 확인이 불가하오니 참고 바랍니다.

참고 - [앱스플라이어 플랜 및 요율표](https://www.appsflyer.com/ko/pricing/)
:::

#### 반환 값 {#delete-customer-user-id-returns}

[`Promise<AppsflyerResult>`](#appsflyer-result) - 삭제 결과를 포함하는 Promise

#### 사용 예제 {#delete-customer-user-id-examples}

```javascript
// 고객 사용자 ID 삭제
const result = await Nachocode.appsflyer.deleteCustomerUserId();
if (result.status === 'success') {
  console.log('고객 사용자 ID 삭제 성공:', result.message);
} else {
  console.error('고객 사용자 ID 삭제 실패: ', result.errorCode, result.message);
}
```

---

### **`getAttributionData()`** {#get-attribution-data}

- _since :_ <BadgeWithVersion type="SDK" version="v1.7.0" link="/docs/releases/v1/sdk/release-v-1-7-0" />

:::warning 주의
_[연동하기](./integrate#prerequisite)가 완료되어야 사용할 수 있습니다._
:::

#### 타입 정의 {#get-attribution-data-types}

```typescript
function getAttributionData(): Promise<GetAttributionDataResult>;
```

#### 설명 {#get-attribution-data-summary}

AppsFlyer 어트리뷰션 데이터를 조회합니다.
사용자의 설치 경로 및 마케팅 캠페인 정보를 확인할 수 있습니다.

#### 반환 값 {#get-attribution-data-returns}

[`Promise<GetAttributionDataResult>`](#get-attribution-data-result) - 어트리뷰션 데이터를 포함하는 Promise

#### 사용 예제 {#get-attribution-data-examples}

```javascript
// 어트리뷰션 데이터 조회
const result = await Nachocode.appsflyer.getAttributionData();
if (result.status === 'success') {
  console.log('어트리뷰션 데이터:', result.data);

  // 데이터 타입에 따라 처리
  if (result.data.data_type === 'conversion_data') {
    // 전환 데이터인 경우
    console.log('설치 타입:', result.data.af_status);
    console.log('첫 실행 여부:', result.data.is_first_launch);
    console.log('설치 시간:', result.data.install_time);
  } else if (result.data.data_type === 'deeplink_data') {
    // 딥링크 데이터인 경우
    console.log('링크 타입:', result.data.link_type);
    console.log('스킴:', result.data.scheme);
    console.log('전체 링크:', result.data.link);

    // 디퍼드 딥링크인지 확인
    if (result.data.is_deferred) {
      // 디퍼드 딥링크 추가 정보
      console.log('매칭 방식:', result.data.match_type);
      console.log('미디어 소스:', result.data.media_source);
      console.log('클릭 시간:', result.data.click_time);
      console.log('설치 시간:', result.data.install_time);
      if (result.data.campaign) {
        console.log('캠페인:', result.data.campaign);
      }
    } else {
      console.log('일반 딥링크');
    }
  }
} else {
  console.error(
    '어트리뷰션 데이터 조회 실패: ',
    result.errorCode,
    result.message
  );
}
```

---

### **`clearAttributionData(timestamp?)`** {#clear-attribution-data}

- _since :_ <BadgeWithVersion type="SDK" version="v1.7.0" link="/docs/releases/v1/sdk/release-v-1-7-0" />

:::warning 주의
_[연동하기](./integrate#prerequisite)가 완료되어야 사용할 수 있습니다._
:::

#### 타입 정의 {#clear-attribution-data-types}

```typescript
function clearAttributionData(timestamp?: number): Promise<AppsflyerResult>;
```

#### 설명 {#clear-attribution-data-summary}

저장된 어트리뷰션 데이터를 삭제합니다.

#### 매개변수 {#clear-attribution-data-parameters}

| 이름        | 타입     | 필수 여부 | 설명                                                           |
| ----------- | -------- | --------- | -------------------------------------------------------------- |
| `timestamp` | `number` | ❌        | 특정 어트리뷰션 데이터를 지울 때 키로 활용 (Unix Epoch 밀리초) |

#### 반환 값 {#clear-attribution-data-returns}

[`Promise<AppsflyerResult>`](#appsflyer-result) - 삭제 결과를 포함하는 Promise

#### 사용 예제 {#clear-attribution-data-examples}

```javascript
// 어트리뷰션 데이터 삭제
const result = await Nachocode.appsflyer.clearAttributionData();
if (result.status === 'success') {
  console.log('어트리뷰션 데이터 삭제 성공:', result.message);
} else {
  console.error(
    '어트리뷰션 데이터 삭제 실패: ',
    result.errorCode,
    result.message
  );
}
```

---

### **`getAttributionList()`** {#get-attribution-list}

- _since :_ <BadgeWithVersion type="SDK" version="v1.7.0" link="/docs/releases/v1/sdk/release-v-1-7-0" />

:::warning 주의
_[연동하기](./integrate#prerequisite)가 완료되어야 사용할 수 있습니다._
:::

#### 타입 정의 {#get-attribution-list-types}

```typescript
function getAttributionList(): Promise<GetAttributionListResult>;
```

#### 설명 {#get-attribution-list-summary}

저장된 어트리뷰션 데이터 목록을 조회합니다.

#### 반환 값 {#get-attribution-list-returns}

[`Promise<GetAttributionListResult>`](#get-attribution-list-result) - 어트리뷰션 데이터 목록을 포함하는 Promise

#### 사용 예제 {#get-attribution-list-examples}

```javascript
// 어트리뷰션 데이터 목록 조회
const result = await Nachocode.appsflyer.getAttributionList();
if (result.status === 'success') {
  console.log('어트리뷰션 데이터 목록:', result.data);
  result.data.forEach((attribution, index) => {
    console.log(`${index + 1}. 데이터 타입: ${attribution.data_type}`);

    if (attribution.data_type === 'conversion_data') {
      console.log(`   설치 타입: ${attribution.af_status}`);
      console.log(`   첫 실행 여부: ${attribution.is_first_launch}`);
    } else if (attribution.data_type === 'deeplink_data') {
      console.log(`   링크 타입: ${attribution.link_type}`);
      console.log(`   링크: ${attribution.link}`);

      // 디퍼드 딥링크인지 확인
      if (attribution.is_deferred) {
        console.log(`   디퍼드 딥링크 - 매칭 방식: ${attribution.match_type}`);
        console.log(`   미디어 소스: ${attribution.media_source}`);
        if (attribution.campaign) {
          console.log(`   캠페인: ${attribution.campaign}`);
        }
      } else {
        console.log(`   일반 딥링크`);
      }
    }
  });
} else {
  console.error(
    '어트리뷰션 목록 조회 실패: ',
    result.errorCode,
    result.message
  );
}
```

---

### **`clearAttributionList()`** {#clear-attribution-list}

- _since :_ <BadgeWithVersion type="SDK" version="v1.7.0" link="/docs/releases/v1/sdk/release-v-1-7-0" />

:::warning 주의
_[연동하기](./integrate#prerequisite)가 완료되어야 사용할 수 있습니다._
:::

#### 타입 정의 {#clear-attribution-list-types}

```typescript
function clearAttributionList(): Promise<AppsflyerResult>;
```

#### 설명 {#clear-attribution-list-summary}

저장된 어트리뷰션 데이터 목록을 삭제합니다.

#### 반환 값 {#clear-attribution-list-returns}

[`Promise<AppsflyerResult>`](#appsflyer-result) - 삭제 결과를 포함하는 Promise

#### 사용 예제 {#clear-attribution-list-examples}

```javascript
// 어트리뷰션 데이터 목록 삭제
const result = await Nachocode.appsflyer.clearAttributionList();
if (result.status === 'success') {
  console.log('어트리뷰션 목록 삭제 성공:', result.message);
} else {
  console.error(
    '어트리뷰션 목록 삭제 실패: ',
    result.errorCode,
    result.message
  );
}
```

---

### **`logEvent(eventName, values)`** {#log-event}

- _since :_ <BadgeWithVersion type="SDK" version="v1.7.0" link="/docs/releases/v1/sdk/release-v-1-7-0" />

:::warning 주의
_[연동하기](./integrate#prerequisite)가 완료되어야 사용할 수 있습니다._
:::

#### 타입 정의 {#log-event-types}

```typescript
function logEvent(
  eventName: string,
  values: Record<string, any>
): Promise<AppsflyerResult>;
```

#### 설명 {#log-event-summary}

AppsFlyer에 커스텀 이벤트를 로깅합니다.
사용자의 행동이나 앱 내 활동을 추적하는 데 사용됩니다.

#### 매개변수 {#log-event-parameters}

| 이름        | 타입                  | 필수 여부 | 설명                    |
| ----------- | --------------------- | --------- | ----------------------- |
| `eventName` | `string`              | ✅        | 이벤트 이름             |
| `values`    | `Record<string, any>` | ✅        | 이벤트와 함께 전송할 값 |

:::warning 주의
이벤트와 함께 전송되는 `values`에 포함된 상세 Parameter는 **AppsFlyer의 Business 플랜** 이상부터 지원되고 있습니다.  
무료 플랜에서는 Raw Data Report 기능이 포함되어 있지 않아 `eventName`까지만 앱스플라이어 대시보드에서 집계 확인이 가능합니다.

참고 - [앱스플라이어 플랜 및 요율표](https://www.appsflyer.com/ko/pricing/)
:::

#### 반환 값 {#log-event-returns}

[`Promise<AppsflyerResult>`](#appsflyer-result) - 이벤트 로깅 결과를 포함하는 Promise

#### 사용 예제 {#log-event-examples}

```javascript
// 커스텀 이벤트 로깅
const result = await Nachocode.appsflyer.logEvent('purchase', {
  product_id: 'item_001',
  price: 9.99,
  currency: 'USD',
  category: 'electronics',
});

if (result.status === 'success') {
  console.log('이벤트 로깅 성공:', result.message);
} else {
  console.error('이벤트 로깅 실패: ', result.errorCode, result.message);
}
```

---

:::info **추가 정보**

- AppsFlyer 네임스페이스는 **마케팅 어트리뷰션 추적**에 특화된 기능을 제공합니다.
- 모든 메서드는 **Promise 기반**으로 동작하며, `async/await` 패턴을 사용할 수 있습니다.
- 커스텀 이벤트 로깅은 **마케팅 캠페인 성과 측정**에 중요한 데이터를 제공합니다.
- 어트리뷰션 데이터는 사용자의 **설치 경로 및 마케팅 채널 분석**에 활용할 수 있습니다.

:::
