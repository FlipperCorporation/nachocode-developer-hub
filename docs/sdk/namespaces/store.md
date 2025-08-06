---
description: nachocode SDK의 store 네임스페이스는 앱스토어 및 플레이스토어 인터랙션 기능을 제공하여 앱 설치나 리뷰 요청을 유도할 수 있도록 지원합니다.
keywords:
  [
    리뷰 팝업,
    앱 리뷰 요청,
    인앱 리뷰 요청,
    인앱 리뷰 팝업,
    앱 스토어 열기,
    플레이 스토어 열기,
    request in-app review,
    in-app review popup,
    App Store,
    Google Play Store,
    store link,
  ]
---

# 스토어 (`store`)

import { BadgeWithVersion } from '@site/src/components/svg/badge-with-version';

> 🚀 **추가된 버전 :** <BadgeWithVersion type="SDK" version="v1.6.0" link="/docs/releases/v1/sdk/release-v-1-6-0" /> <BadgeWithVersion type="Android" version="v1.6.0" link="/docs/releases/v1/app-source/android/release-v-1-6-0" /> <BadgeWithVersion type="iOS" version="v1.6.0" link="/docs/releases/v1/app-source/ios/release-v-1-6-0" />  
> 🔔 **최신화 일자:** 2025-08-05

## **개요** {#overview}

`store` 네임스페이스는 앱스토어 및 플레이스토어 인터랙션 기능을 제공합니다.

- **앱 스토어 페이지 열기**
- **스토어 내 리뷰 요청 페이지 이동**
- **네이티브 인앱 리뷰 팝업 호출**

모바일 앱 또는 모바일 웹 환경에서 **앱 인게이지먼트 향상**에 유용합니다.

---

## **타입 정의** {#types}

### **`StoreInfo`** {#store-info}

- _since :_ <BadgeWithVersion type="SDK" version="v1.6.0" link="/docs/releases/v1/sdk/release-v-1-6-0" />

```typescript
export declare type StoreInfo =
  | {
      androidAppId: string;
      iOSAppId?: string;
    }
  | {
      androidAppId?: string;
      iOSAppId: string;
    };
```

| 속성명         | 타입     | 필수 여부        | 설명                                                                                                     |
| -------------- | -------- | ---------------- | -------------------------------------------------------------------------------------------------------- |
| `androidAppId` | `string` | 조건부 (Android) | **Google Play Store**의 앱 ID (패키지 이름)                                                              |
| `iOSAppId`     | `string` | 조건부 (iOS)     | **Apple App Store**의 앱 ID ([**Apple App Store Connect**](https://appstoreconnect.apple.com/)에서 확인) |

:::info 스토어 ID 확인법
구글 플레이스토어와 앱스토어에서의 앱 ID를 확인하기 어렵다면 아래 문서를 참고해보세요.

➡️ [**스토어 앱 ID 확인하기**](/docs/guide/check-store-id)
:::

---

## **메서드 목록** {#method-list}

| 메서드                                                  | 설명                                               | 추가된 버전                                                                                   |
| ------------------------------------------------------- | -------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| [`openStore(storeInfo)`](#open-store)                   | OS에 맞는 앱 스토어 설치/다운로드 페이지를 엽니다. | <BadgeWithVersion type="SDK" version="v1.6.0" link="/docs/releases/v1/sdk/release-v-1-6-0" /> |
| [`openReviewInStore(storeInfo)`](#open-review-in-store) | 앱 스토어 내 리뷰 작성 화면으로 이동합니다.        | <BadgeWithVersion type="SDK" version="v1.6.0" link="/docs/releases/v1/sdk/release-v-1-6-0" /> |
| [`requestReview()`](#request-review)                    | 네이티브 인앱 리뷰 팝업을 호출합니다.              | <BadgeWithVersion type="SDK" version="v1.6.0" link="/docs/releases/v1/sdk/release-v-1-6-0" /> |

---

## **메서드 상세** {#method-details}

### **`openStore(storeInfo: StoreInfo): void`** {#open-store}

- _since :_ <BadgeWithVersion type="SDK" version="v1.6.0" link="/docs/releases/v1/sdk/release-v-1-6-0" />

#### 설명 {#open-store-summary}

:::info
스토어 출시가 완료된 후 사용이 가능합니다.
:::

현재 플랫폼에 따라 **Google Play 또는 Apple App Store의 앱 상세 페이지**를 엽니다.  
Web 환경에서는 OS에 따라 각각 적절한 스토어 페이지로 이동합니다.

#### 지원 플랫폼 {#open-store-supported-platforms}

`openStore` 메서드는 **App과 Web 모든 환경을 지원**합니다.

| 플랫폼                                                             | 지원 여부 | 비고                                           |
| ------------------------------------------------------------------ | --------- | ---------------------------------------------- |
| ![Android](https://img.shields.io/badge/Android-gray?logo=android) | ✅        | 스토어 내 앱 상세 페이지로 이동                |
| ![iOS](https://img.shields.io/badge/iOS-gray?logo=apple)           | ✅        | 스토어 내 앱 상세 페이지로 이동                |
| ![Web](/img/docs/chrome-badge.svg)                                 | ✅        | 디바이스의 OS에 맞는 스토어 상세 페이지로 이동 |

#### 매개변수 {#open-store-parameters}

| 이름        | 타입                       | 필수 여부 | 설명                                                              |
| ----------- | -------------------------- | --------- | ----------------------------------------------------------------- |
| `storeInfo` | [`StoreInfo`](#store-info) | ✅        | Android 앱의 앱 ID, Apple 앱스토어의 앱 ID를 포함하는 스토어 정보 |

- `storeInfo.androidAppId`: **Google Play Store**의 앱 ID (앱의 패키지 이름)
- `storeInfo.iOSAppId`: **Apple App Store**의 앱 ID ([**Apple App Store Connect**](https://appstoreconnect.apple.com/)에서 확인 가능)

:::warning 주의
Android에서는 `androidAppId`,  
iOS에서는 `iOSAppId`가 활용되기에  
최소한 하나의 **App ID**를 포함해야 합니다.
:::

:::info 스토어 ID 확인법
구글 플레이스토어와 앱스토어에서의 앱 ID를 확인하기 어렵다면 아래 문서를 참고해보세요.

➡️ [**스토어 앱 ID 확인하기**](/docs/guide/check-store-id)
:::

#### 예제 {#open-store-examples}

:::note
예제에서는 출시된 **nachocode developer** 앱의 정보를 활용하였습니다.

- Android App ID : `com.nachocode.developer`
- iOS App ID : `6514317160`

실사용시에는 적절한 값으로 수정이 필요합니다.
:::

- **Android 앱만 출시되어 있을 경우**

```javascript
Nachocode.store.openStore({ androidAppId: 'com.nachocode.developer' });
```

- **iOS 앱만 출시되어 있을 경우**

```javascript
Nachocode.store.openStore({ iOSAppId: '6514317160' });
```

- **Android, iOS 앱 둘 다 출시되어 있을 경우**

```javascript
Nachocode.store.openStore({
  androidAppId: 'com.nachocode.developer', // Android 앱 패키지명
  iOSAppId: '6514317160', // iOS Apple 앱 ID
});
```

---

### **`openReviewInStore(storeInfo: StoreInfo): void`** {#open-review-in-store}

- _since :_ <BadgeWithVersion type="SDK" version="v1.6.0" link="/docs/releases/v1/sdk/release-v-1-6-0" />

#### 설명 {#open-review-in-store-summary}

:::info
스토어 출시가 완료된 후 사용이 가능합니다.
:::

사용자를 **스토어 내 리뷰 작성 페이지**로 직접 연결합니다.

**Android의 경우 직접적으로 리뷰 작성 페이지**로 연결할 수는 없습니다.  
스토어 내 앱 상세 페이지로 유도해 간접적으로 리뷰 작성을 요청할 수 있습니다.

아래와 같이 플랫폼에 따라 다르게 동작합니다.

- **iOS** : 앱스토어 리뷰 화면을 연동합니다.
- **Android, Web** : 스토어 내 앱 상세 페이지를 엽니다.

#### 지원 플랫폼 {#open-review-in-store-supported-platforms}

`openReviewInStore` 메서드는 **App, Web 모든 환경을 지원**합니다.

| 플랫폼                                                             | 지원 여부 | 비고                                           |
| ------------------------------------------------------------------ | --------- | ---------------------------------------------- |
| ![Android](https://img.shields.io/badge/Android-gray?logo=android) | ✅        | 스토어 내 앱 상세 페이지로 이동                |
| ![iOS](https://img.shields.io/badge/iOS-gray?logo=apple)           | ✅        | 앱스토어 리뷰 화면으로 이동                    |
| ![Web](/img/docs/chrome-badge.svg)                                 | ✅        | 디바이스의 OS에 맞는 스토어 상세 페이지로 이동 |

#### 매개변수 {#open-review-in-store-parameters}

| 이름        | 타입                       | 필수 여부 | 설명                                                              |
| ----------- | -------------------------- | --------- | ----------------------------------------------------------------- |
| `storeInfo` | [`StoreInfo`](#store-info) | ✅        | Android 앱의 앱 ID, Apple 앱스토어의 앱 ID를 포함하는 스토어 정보 |

- `storeInfo.androidAppId`: **Google Play Store**의 앱 ID (앱의 패키지 이름)
- `storeInfo.iOSAppId`: **Apple App Store**의 앱 ID ([**Apple App Store Connect**](https://appstoreconnect.apple.com/)에서 확인 가능)

:::warning 주의
Android에서는 `androidAppId`,  
iOS에서는 `iOSAppId`가 활용되기에  
최소한 하나의 **App ID**를 포함해야 합니다.
:::

:::info 스토어 ID 확인법
구글 플레이스토어와 앱스토어에서의 앱 ID를 확인하기 어렵다면 아래 문서를 참고해보세요.

➡️ [**스토어 앱 ID 확인하기**](/docs/guide/check-store-id)
:::

#### 예제 {#open-review-in-store-examples}

:::note
예제에서는 출시된 **nachocode developer** 앱의 정보를 활용하였습니다.

- Android App ID : `com.nachocode.developer`
- iOS App ID : `6514317160`

실사용시에는 적절한 값으로 수정이 필요합니다.
:::

- **Android 앱만 출시되어 있을 경우**

```javascript
Nachocode.store.openReviewInStore({ androidAppId: 'com.nachocode.developer' });
```

- **iOS 앱만 출시되어 있을 경우**

```javascript
Nachocode.store.openReviewInStore({ iOSAppId: '6514317160' });
```

- **Android, iOS 앱 둘 다 출시되어 있을 경우**

```javascript
// Android 또는 Web에서는 스토어 내 앱 상세 페이지가 열림
Nachocode.store.openReviewInStore({
  androidAppId: 'com.nachocode.developer', // Android 앱 패키지명
  iOSAppId: '6514317160', // iOS Apple 앱 ID
});
```

---

### **`requestReview(): void`** {#request-review}

- _since :_ <BadgeWithVersion type="SDK" version="v1.6.0" link="/docs/releases/v1/sdk/release-v-1-6-0" />

#### 설명 {#request-review-summary}

:::warning 주의
**인앱 리뷰 요청은 운영체제(OS) 정책**에 따라 제한될 수 있습니다.  
자세한 내용은 **첨부된 공식 문서를 참고**해 주세요.

- [**Apple App Store**](https://developer.apple.com/app-store/ratings-and-reviews/)
- [**Google Play Store**](https://developer.android.com/guide/playcore/in-app-review?hl=ko#when-to-request)

:::

앱 내에서 **네이티브 리뷰 요청 팝업**(UI)을 호출합니다.  
리뷰 요청 다이얼로그는 항상 표시되지는 않으며 OS 내부 로직에 따라 노출됩니다.

- **최근에 리뷰 요청이 없었는가**
  - 스토어에서는 과도한 리뷰 요청을 막기위해 리뷰 대화상자를 표시할 수 있는 빈도에 관한 시간제한 할당량을 적용합니다.
  - 이 할당량으로 인해 짧은 기간(예: 1개월 미만) 메서드를 두 번 이상 호출할 경우 대화상자가 표시되지 않을 수도 있습니다.
- **사용자가 충분히 긴 사용 시간을 가졌는가**
  - 사용자가 앱을 충분히 사용해 유용한 의견을 제공할 수 있을 때 인앱 리뷰를 트리거합니다.
- **앱이 스토어에서 설치되었는가**
  - 스토어를 통해 설치된 앱에서만 해당 기능을 사용할 수 있습니다.
  - 테스트 트랙이거나 TestFlight에서는 리뷰 팝업이 노출되지 않습니다.

#### 지원 플랫폼 {#request-review-supported-platforms}

`requestReview` 메서드는 **Android 및 iOS** 네이티브 앱 환경에 대응하며, Web에서는 동작하지 않습니다.

| 플랫폼                                                             | 지원 여부 | 비고                                             |
| ------------------------------------------------------------------ | --------- | ------------------------------------------------ |
| ![Android](https://img.shields.io/badge/Android-gray?logo=android) | ✅        | OS 내부 로직에 따라 인앱 리뷰 요청을 노출합니다. |
| ![iOS](https://img.shields.io/badge/iOS-gray?logo=apple)           | ✅        | OS 내부 로직에 따라 인앱 리뷰 요청을 노출합니다. |
| ![Web](/img/docs/chrome-badge.svg)                                 | ❌        | 지원하지 않습니다.                               |

#### 반환 값 {#request-review-returns}

해당 메서드는 반환 값을 가지지 않습니다.  
**사용자의 리뷰 팝업에서의 상호작용 결과는 OS 정책 상 알 수 없습니다.**

#### 예제 {#request-review-examples}

```javascript
// 네이티브 인앱 리뷰 창 호출
Nachocode.store.requestReview();
```

---

:::tip **활용 팁**

- **사용자 피드백 유도**: 중요한 작업 완료 직후 `requestReview()` 호출로 자연스럽게 리뷰 요청 가능
- **앱 설치 유도**: 웹페이지에서 `openStore()` 호출로 바로 다운로드 페이지로 이동
- **리뷰 리마인더**: 앱을 일정 기간 사용한 사용자 대상으로 재방문 시 `openReviewInStore()` 호출

:::
