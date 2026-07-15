---
sidebar_label: 'ver.1.11.0 (26.07.15)'
description: nachocode Client SDK ver.1.11.0의 릴리즈노트입니다.
image: /img/docs/releases/release_note_sdk_detail.png
---

# Release: ver.1.11.0 (2026-07-15)

import { ThumbnailImage } from '@site/src/components/common/image/thumbnail-image';

<ThumbnailImage src='/img/docs/releases/release_note_sdk_detail.png'/>

> 🔔 **배포 일자:** 2026-07-15

이번 업데이트 **v1.11.0**에서는 **Firebase Analytics 연동 기능**과 **스토어 국가 코드 조회 기능**이 새롭게 추가되었습니다.

새로운 **`firebase` 네임스페이스**를 통해 Firebase Analytics 이벤트 로깅 및 사용자 속성 관리를 네이티브 레이어에서 직접 수행할 수 있으며, **`store` 네임스페이스**에 추가된 `getStoreCountryCode()` 메서드로 디바이스의 앱 스토어 국가 코드를 조회할 수 있습니다.

## 주요 변경 사항 (ver.1.11.0)

### 새로운 기능 {#new-features}

- **`firebase` 네임스페이스**: Firebase Analytics 연동 기능 추가

  - 네이티브 레이어에서 **Firebase Analytics 이벤트를 로깅**할 수 있습니다.
  - **사용자 속성(User Property)을 설정 및 삭제**하여 사용자 세그먼트를 관리할 수 있습니다.
  - ➡️ [**`firebase` 네임스페이스 문서 바로가기**](/docs/sdk/integrations/firebase/reference)

- **`store` 네임스페이스**: 스토어 국가 코드 조회 기능 추가
  - 디바이스의 **앱 스토어 국가 코드를 조회**할 수 있습니다.
  - 국가별 맞춤 콘텐츠 제공이나 지역 기반 기능 구현에 활용할 수 있습니다.
  - ➡️ [**`store` 네임스페이스 문서 바로가기**](/docs/sdk/namespaces/store)

---

### Firebase Analytics 연동 기능 (`firebase` 네임스페이스)

Firebase Analytics와의 연동을 통해 앱 내 사용자 행동을 추적하고 분석할 수 있는 기능이 추가되었습니다.

#### 추가된 메서드 (`firebase`)

| 메서드                                 | 설명                                |
| -------------------------------------- | ----------------------------------- |
| `logEvent(eventName, parameters)`      | Firebase Analytics 이벤트 로깅      |
| `setUserProperty(propertyName, value)` | Firebase Analytics 사용자 속성 설정 |
| `deleteUserProperty(propertyName)`     | Firebase Analytics 사용자 속성 삭제 |

#### 새로운 타입 정의

**`FirebaseResult`**

```typescript
export declare type FirebaseResult = {
  /**
   * 성공 또는 오류 상태
   */
  status: 'success' | 'error';
  /**
   * 상태 코드 (성공 시 200)
   */
  statusCode: number;
  /**
   * 메시지 (오류 시 포함)
   */
  message?: string;
};
```

#### 사용 예제 {#firebase-examples}

##### **이벤트 로깅**

```javascript
// 사용자 구매 이벤트 로깅
const result = await Nachocode.firebase.logEvent('purchase', {
  item_id: 'SKU_12345',
  item_name: 'Premium Subscription',
  currency: 'USD',
  value: 9.99,
});

if (result.status === 'success') {
  console.log('이벤트가 성공적으로 로깅되었습니다.');
} else {
  console.error('이벤트 로깅 실패:', result.message);
}
```

##### **사용자 속성 설정**

```javascript
// 사용자의 선호 언어 설정
const result = await Nachocode.firebase.setUserProperty(
  'preferred_language',
  'ko'
);

if (result.status === 'success') {
  console.log('사용자 속성이 설정되었습니다.');
} else {
  console.error('사용자 속성 설정 실패:', result.message);
}
```

##### **사용자 속성 삭제**

```javascript
// 사용자 속성 삭제
const result =
  await Nachocode.firebase.deleteUserProperty('preferred_language');

if (result.status === 'success') {
  console.log('사용자 속성이 삭제되었습니다.');
} else {
  console.error('사용자 속성 삭제 실패:', result.message);
}
```

:::info Firebase 연동 필요
Firebase Analytics 기능을 사용하려면 먼저 Firebase 프로젝트 설정 및 nachocode 앱과의 연동이 필요합니다.  
자세한 내용은 [**Firebase 연동 가이드**](/docs/sdk/integrations/firebase/integrate)를 참고하세요.
:::

---

### 스토어 국가 코드 조회 기능 (`store` 네임스페이스)

디바이스의 앱 스토어 국가 코드를 조회하여 지역 기반 기능을 구현할 수 있습니다.

#### 추가된 메서드 (`store`) {#store-methods}

| 메서드                  | 설명                     |
| ----------------------- | ------------------------ |
| `getStoreCountryCode()` | 앱 스토어 국가 코드 조회 |

#### 새로운 타입 정의 {#store-new-types}

**`GetStoreCountryCodeResult`**

```typescript
export declare type GetStoreCountryCodeSuccessResult = {
  status: 'success';
  statusCode: 200;
  message: string;
  /**
   * 국가 코드 (alpha-3 형식, 예: "KOR")
   */
  data: string;
};

export declare type GetStoreCountryCodeErrorResult = {
  status: 'error';
  statusCode: 400 | 500;
  message: string;
  errorCode?: string;
};

export declare type GetStoreCountryCodeResult =
  | GetStoreCountryCodeSuccessResult
  | GetStoreCountryCodeErrorResult;
```

#### 사용 예제 {#store-examples}

```javascript
// 스토어 국가 코드 조회
const result = await Nachocode.store.getStoreCountryCode();

if (result.status === 'success') {
  console.log('국가 코드:', result.data); // 예: "KOR", "USA", "JPN"

  // 국가별 맞춤 콘텐츠 제공
  if (result.data === 'KOR') {
    // 한국 사용자를 위한 콘텐츠
  } else if (result.data === 'USA') {
    // 미국 사용자를 위한 콘텐츠
  }
} else {
  console.error('국가 코드 조회 실패:', result.message);
}
```

---

### 개선 사항 {#improvements}

- **TypeScript 정의**(`Nachocode.d.ts`) **업데이트**
  - v.1.11.0 변경 사항을 반영하여 새로운 네임스페이스와 메서드의 타입 정의가 추가되었습니다.
  - `firebase` 네임스페이스가 새롭게 추가되었습니다.
  - `store` 네임스페이스에 `getStoreCountryCode()` 메서드가 추가되었습니다.
  - `FirebaseResult`, `GetStoreCountryCodeResult` 등의 새로운 타입이 정의되었습니다.

:::info
➡️ [`Nachocode.d.ts`](https://github.com/FlipperCorporation/nachocode-client-sdk-js/blob/main/releases/Nachocode.d.ts)에서 최신 정의를 확인하세요.
:::

---

### 활용 사례 {#use-cases}

이번 업데이트의 새로운 기능들을 활용하여 다음과 같은 개선을 할 수 있습니다.

1. **사용자 행동 분석**: Firebase Analytics를 통한 앱 내 사용자 행동 패턴 추적 및 분석
2. **맞춤형 사용자 경험**: 사용자 속성 설정을 통한 세그먼트별 맞춤 콘텐츠 제공
3. **지역화 전략**: 국가 코드 조회를 통한 지역별 맞춤 기능 및 콘텐츠 제공
4. **마케팅 캠페인 추적**: Firebase 이벤트 로깅을 통한 마케팅 효과 측정
5. **사용자 여정 분석**: 주요 이벤트 추적을 통한 사용자 전환율 개선
6. **A/B 테스트**: 사용자 속성과 이벤트를 활용한 기능 테스트 및 최적화

---

### 업데이트 방법

nachocode JavaScript Client SDK **ver.1.11.0**를 사용하려면 아래의 스크립트를 업데이트하십시오.

#### SDK CDN 주소

```html
<script src="https://cdn.nachocode.io/nachocode/client-sdk/@1.11.0/client-sdk.min.js"></script>
```

:::tip 문의하기
nachocode는 지속적으로 사용자의 개발 경험 향상을 위해 최선을 다하겠습니다.  
추가적인 요청이나 문의사항은 언제든지 지원팀에게 [이메일](mailto:support@nachocode.io)을 보내주세요.
감사합니다.
:::
