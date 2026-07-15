---
sidebar_label: 레퍼런스
pagination_label: 레퍼런스 (Reference)
description: nachocode SDK의 `firebase` 네임스페이스로 Firebase Analytics 이벤트 로깅, 사용자 속성 설정 및 삭제 기능을 쉽게 구현할 수 있습니다.
keywords:
  [
    Firebase Analytics,
    파이어베이스 애널리틱스,
    Firebase 연동,
    Firebase 이벤트,
    Firebase 사용자 속성,
    firebase analytics,
    firebase integration,
    firebase event logging,
    firebase user properties,
  ]
image: /img/docs/thumbnails/SDK/firebase.png
---

# 파이어베이스 (`firebase`) - 레퍼런스

import { BadgeWithVersion } from '@site/src/components/svg/badge-with-version';
import { ThumbnailImage } from '@site/src/components/common/image/thumbnail-image';

<!-- <ThumbnailImage src='/img/docs/thumbnails/SDK/firebase.png'/> -->

> 🚀 **추가된 버전 :** <BadgeWithVersion type="SDK" version="v1.11.0" link="/docs/releases/v1/sdk/release-v-1-11-0" />  
> 🔔 **최신화 일자:** 2026-07-15

:::warning 연동을 마치셨나요?
SDK 메서드를 사용하기 위해선 필수 선행 작업으로 [**연동하기**](./integrate)를 마쳐야합니다.
:::

## **개요** {#overview}

`firebase` 네임스페이스는 **Firebase Analytics 기능을 제공**하며, 사용자는 **앱 내 이벤트 로깅 및 사용자 속성 관리**를 수행할 수 있습니다.

이 네임스페이스를 사용하여 **사용자 행동 추적, 맞춤 이벤트 로깅, 사용자 세그먼트 관리**와 같은 분석 기능을 수행할 수 있습니다.

:::tip **활용 팁**

- **사용자 행동 분석**: 주요 이벤트를 로깅하여 사용자가 앱을 어떻게 사용하는지 파악
- **전환율 추적**: 구매, 가입 등 중요한 전환 이벤트를 로깅하여 마케팅 효과 측정
- **사용자 세그멘테이션**: 사용자 속성을 설정하여 특정 그룹별 분석 및 타겟팅
- **A/B 테스트**: 사용자 속성과 이벤트를 활용한 실험 및 최적화

:::

---

## **타입 정의** {#types}

### **`FirebaseResult`** {#firebase-result}

Firebase Analytics 요청의 결과 상태를 나타내는 타입입니다.

- _since :_ <BadgeWithVersion type="SDK" version="v1.11.0" link="/docs/releases/v1/sdk/release-v-1-11-0" />

```typescript
export declare type FirebaseResult = {
  /**
   * 성공 또는 오류 상태
   */
  status: 'success' | 'error';
  /**
   * Firebase 기능 결과 상태 코드. 성공 시 200.
   */
  statusCode: number;
  /**
   * 네이티브 레이어로부터의 결과 메시지
   */
  message?: string;
};
```

| 필드         | 타입                   | 설명                     |
| ------------ | ---------------------- | ------------------------ |
| `status`     | `'error' \| 'success'` | 요청 성공 또는 실패 상태 |
| `statusCode` | `number`               | 상태 코드 (성공 시 200)  |
| `message`    | `string` _(optional)_  | 결과 메시지              |

---

## **메서드 목록** {#method-list}

| 메서드                                                               | 설명                           | 추가된 버전                                                                                     |
| -------------------------------------------------------------------- | ------------------------------ | ----------------------------------------------------------------------------------------------- |
| [`logEvent(eventName, parameters)`](#log-event)                      | Firebase Analytics 이벤트 로깅 | <BadgeWithVersion type="SDK" version="v1.11.0" link="/docs/releases/v1/sdk/release-v-1-11-0" /> |
| [`setUserProperty(propertyName, propertyValue)`](#set-user-property) | Firebase 사용자 속성 설정      | <BadgeWithVersion type="SDK" version="v1.11.0" link="/docs/releases/v1/sdk/release-v-1-11-0" /> |
| [`deleteUserProperty(propertyName)`](#delete-user-property)          | Firebase 사용자 속성 삭제      | <BadgeWithVersion type="SDK" version="v1.11.0" link="/docs/releases/v1/sdk/release-v-1-11-0" /> |

---

## **메서드 상세** {#method-details}

### **`logEvent(eventName, parameters)`** {#log-event}

- _since :_ <BadgeWithVersion type="SDK" version="v1.11.0" link="/docs/releases/v1/sdk/release-v-1-11-0" />

:::warning 주의
_[연동하기](./integrate#prerequisite)가 완료되어야 사용할 수 있습니다._
:::

#### 타입 정의 {#log-event-types}

```typescript
function logEvent(
  eventName: string,
  parameters?: Record<string, string | number>
): Promise<FirebaseResult>;
```

#### 설명 {#log-event-summary}

Firebase Analytics에 **커스텀 이벤트를 로깅**합니다.
이벤트 이름과 함께 매개변수를 선택적으로 전달하여 이벤트에 대한 추가 정보를 기록할 수 있습니다.

#### 지원 플랫폼 {#log-event-supported-platforms}

`logEvent` 메서드는 **Android 및 iOS** 네이티브 앱 환경에 대응하며, Web에서는 동작하지 않습니다.

| 플랫폼                                                             | 지원 여부 | 비고                           |
| ------------------------------------------------------------------ | --------- | ------------------------------ |
| ![Android](https://img.shields.io/badge/Android-gray?logo=android) | ✅        | Firebase Analytics 이벤트 로깅 |
| ![iOS](https://img.shields.io/badge/iOS-gray?logo=apple)           | ✅        | Firebase Analytics 이벤트 로깅 |
| ![Web](/img/docs/chrome-badge.svg)                                 | ❌        | 지원하지 않습니다.             |

#### 매개변수 {#log-event-parameters}

| 이름         | 타입                               | 필수 여부 | 설명                                    |
| ------------ | ---------------------------------- | --------- | --------------------------------------- |
| `eventName`  | `string`                           | ✅        | Firebase Analytics에 로깅할 이벤트 이름 |
| `parameters` | `Record<string, string \| number>` | ❌        | 이벤트와 함께 로깅할 매개변수 객체      |

#### 반환 값 {#log-event-returns}

`Promise<FirebaseResult>`를 반환합니다.

- **성공 시**: `status: 'success'`, `statusCode: 200`
- **실패 시**: `status: 'error'`와 함께 오류 메시지 반환

#### 사용 예제 {#log-event-examples}

##### **기본 이벤트 로깅**

```javascript
// 매개변수 없이 이벤트 로깅
const result = await Nachocode.firebase.logEvent('app_open');

if (result.status === 'success') {
  console.log('이벤트가 성공적으로 로깅되었습니다.');
} else {
  console.error('이벤트 로깅 실패:', result.message);
}
```

##### **매개변수와 함께 이벤트 로깅**

```javascript
// 구매 이벤트 로깅
const result = await Nachocode.firebase.logEvent('purchase', {
  item_id: 'SKU_12345',
  item_name: 'Premium Subscription',
  currency: 'USD',
  value: 9.99,
  quantity: 1,
});

if (result.status === 'success') {
  console.log('구매 이벤트가 성공적으로 로깅되었습니다.');
}
```

##### **사용자 액션 추적**

```javascript
// 버튼 클릭 이벤트 로깅
document.getElementById('signup-button').addEventListener('click', async () => {
  const result = await Nachocode.firebase.logEvent('button_click', {
    button_name: 'signup',
    screen_name: 'home',
  });
});
```

##### **화면 조회 이벤트**

```javascript
// 화면 조회 이벤트 로깅
const result = await Nachocode.firebase.logEvent('screen_view', {
  screen_name: 'product_detail',
  screen_class: 'ProductDetailScreen',
});
```

:::tip Firebase 권장 이벤트
Firebase는 많은 [**권장 이벤트 이름**](https://firebase.google.com/docs/analytics/ios/events?platform=android&hl=ko)을 제공합니다.
가능한 경우 권장 이벤트 이름을 사용하면 Firebase 콘솔에서 더 나은 자동 분석 리포트를 받을 수 있습니다.

ex. `login`, `sign_up`, `purchase`, `add_to_cart`, `screen_view` 등
:::

---

### **`setUserProperty(propertyName, propertyValue)`** {#set-user-property}

- _since :_ <BadgeWithVersion type="SDK" version="v1.11.0" link="/docs/releases/v1/sdk/release-v-1-11-0" />

:::warning 주의
_[연동하기](./integrate#prerequisite)가 완료되어야 사용할 수 있습니다._
:::

#### 타입 정의 {#set-user-property-types}

```typescript
function setUserProperty(
  propertyName: string,
  propertyValue: string
): Promise<FirebaseResult>;
```

#### 설명 {#set-user-property-summary}

Firebase Analytics에 **사용자 속성(User Property)을 설정**합니다.
사용자 속성을 통해 사용자를 세그먼트하고 특정 그룹별로 분석할 수 있습니다.

#### 지원 플랫폼 {#set-user-property-supported-platforms}

`setUserProperty` 메서드는 **Android 및 iOS** 네이티브 앱 환경에 대응하며, Web에서는 동작하지 않습니다.

| 플랫폼                                                             | 지원 여부 | 비고                      |
| ------------------------------------------------------------------ | --------- | ------------------------- |
| ![Android](https://img.shields.io/badge/Android-gray?logo=android) | ✅        | Firebase 사용자 속성 설정 |
| ![iOS](https://img.shields.io/badge/iOS-gray?logo=apple)           | ✅        | Firebase 사용자 속성 설정 |
| ![Web](/img/docs/chrome-badge.svg)                                 | ❌        | 지원하지 않습니다.        |

#### 매개변수 {#set-user-property-parameters}

| 이름            | 타입     | 필수 여부 | 설명                               |
| --------------- | -------- | --------- | ---------------------------------- |
| `propertyName`  | `string` | ✅        | Firebase에 설정할 사용자 속성 이름 |
| `propertyValue` | `string` | ✅        | Firebase에 설정할 사용자 속성 값   |

#### 반환 값 {#set-user-property-returns}

`Promise<FirebaseResult>`를 반환합니다.

- **성공 시**: `status: 'success'`, `statusCode: 200`
- **실패 시**: `status: 'error'`와 함께 오류 메시지 포함

#### 사용 예제 {#set-user-property-examples}

##### **사용자 선호 언어 설정**

```javascript
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

:::info 사용자 속성 제한사항

- 사용자 속성 이름은 최대 24자까지 가능합니다.
- 사용자 속성 값은 최대 36자까지 가능합니다.
- 프로젝트당 최대 25개의 사용자 속성을 설정할 수 있습니다.
- 일부 속성 이름은 Firebase에서 예약되어 있습니다. 자세한 내용은 [**Firebase 문서**](https://firebase.google.com/docs/analytics/ios/user-properties?hl=ko)를 참고하세요.
  :::

---

### **`deleteUserProperty(propertyName)`** {#delete-user-property}

- _since :_ <BadgeWithVersion type="SDK" version="v1.11.0" link="/docs/releases/v1/sdk/release-v-1-11-0" />

:::warning 주의
_[연동하기](./integrate#prerequisite)가 완료되어야 사용할 수 있습니다._
:::

#### 타입 정의 {#delete-user-property-types}

```typescript
function deleteUserProperty(propertyName: string): Promise<FirebaseResult>;
```

#### 설명 {#delete-user-property-summary}

Firebase Analytics에 설정된 **사용자 속성을 삭제**합니다.
더 이상 필요하지 않은 사용자 속성을 제거할 때 사용합니다.

#### 지원 플랫폼 {#delete-user-property-supported-platforms}

`deleteUserProperty` 메서드는 **Android 및 iOS** 네이티브 앱 환경에 대응하며, Web에서는 동작하지 않습니다.

| 플랫폼                                                             | 지원 여부 | 비고                      |
| ------------------------------------------------------------------ | --------- | ------------------------- |
| ![Android](https://img.shields.io/badge/Android-gray?logo=android) | ✅        | Firebase 사용자 속성 삭제 |
| ![iOS](https://img.shields.io/badge/iOS-gray?logo=apple)           | ✅        | Firebase 사용자 속성 삭제 |
| ![Web](/img/docs/chrome-badge.svg)                                 | ❌        | 지원하지 않습니다.        |

#### 매개변수 {#delete-user-property-parameters}

| 이름           | 타입     | 필수 여부 | 설명                                 |
| -------------- | -------- | --------- | ------------------------------------ |
| `propertyName` | `string` | ✅        | Firebase에서 삭제할 사용자 속성 이름 |

#### 반환 값 {#delete-user-property-returns}

`Promise<FirebaseResult>`를 반환합니다.

- **성공 시**: `status: 'success'`, `statusCode: 200`
- **실패 시**: `status: 'error'`와 함께 오류 메시지 반환

#### 사용 예제 {#delete-user-property-examples}

##### **사용자 속성 삭제**

```javascript
const result =
  await Nachocode.firebase.deleteUserProperty('preferred_language');

if (result.status === 'success') {
  console.log('사용자 속성이 삭제되었습니다.');
} else {
  console.error('사용자 속성 삭제 실패:', result.message);
}
```

---

:::tip **Firebase 콘솔 활용**
로깅된 이벤트와 사용자 속성은 [**Firebase 콘솔**](https://console.firebase.google.com/)의 Analytics 섹션에서 확인할 수 있습니다.

- **실시간 데이터**: DebugView에서 실시간으로 이벤트 확인
- **이벤트 분석**: Events 탭에서 이벤트별 통계 확인
- **사용자 속성**: Audiences 탭에서 사용자 세그먼트 생성
- **전환 추적**: Conversions 탭에서 주요 전환 이벤트 추적

:::

---
