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

> 🔔 **최신화 일자:** 2025-06-12

## **개요**

`store` 네임스페이스는 앱스토어 및 플레이스토어 인터랙션 기능을 제공합니다.

- **앱 스토어 페이지 열기**
- **스토어 내 리뷰 요청 페이지 이동**
- **네이티브 인앱 리뷰 팝업 호출**

모바일 앱 또는 모바일 웹 환경에서 **앱 인게이지먼트 향상**에 유용합니다.

---

## **타입 정의**

### **`StoreInfo`**

- _since ver.1.6.0_

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

| 속성명         | 타입     | 필수 여부        | 설명                                                    |
| -------------- | -------- | ---------------- | ------------------------------------------------------- |
| `androidAppId` | `string` | 조건부 (Android) | Android 앱 ID (패키지 이름)                             |
| `iOSAppId`     | `string` | 조건부 (iOS)     | iOS 앱스토어의 앱 ID (Apple App Store Connect에서 확인) |

---

## **메서드 목록**

| 메서드                                                  | 설명                                               | 추가된 버전 |
| ------------------------------------------------------- | -------------------------------------------------- | ----------- |
| [`openStore(storeInfo)`](#open-store)                   | OS에 맞는 앱 스토어 설치/다운로드 페이지를 엽니다. | ver.1.6.0   |
| [`openReviewInStore(storeInfo)`](#open-review-in-store) | 앱 스토어 내 리뷰 작성 화면으로 이동합니다.        | ver.1.6.0   |
| [`requestReview()`](#request-review)                    | 네이티브 인앱 리뷰 팝업을 호출합니다.              | ver.1.6.0   |

---

## **메서드 상세**

### **`openStore(storeInfo: StoreInfo): void`** {#open-store}

- _since ver.1.6.0_

#### 설명 (`openStore`)

> ⚠️ **주의** - 스토어 출시가 완료된 후 이용하세요.

현재 플랫폼에 따라 **Google Play 또는 Apple App Store의 앱 상세 페이지**를 엽니다.  
Web 환경에서는 OS에 따라 각각 적절한 스토어 페이지로 이동합니다.

#### 지원 플랫폼 (`openStore`)

`openStore` 메서드는 **App, Web 모든 환경을 지원**합니다.

- ✅ Android
- ✅ iOS
- ✅ Web (모바일/PC)

#### 매개변수 (`openStore`)

| 이름                     | 타입     | 필수 여부        | 설명                                                    |
| ------------------------ | -------- | ---------------- | ------------------------------------------------------- |
| `storeInfo.androidAppId` | `string` | 조건부 (Android) | Android 앱의 패키지 이름                                |
| `storeInfo.iOSAppId`     | `string` | 조건부 (iOS)     | iOS 앱스토어의 앱 ID (Apple App Store Connect에서 확인) |

> ⚠️ **주의**  
> Android에서는 `androidAppId`,  
> iOS에서는 `iOSAppId`가 활용되기에  
> 최소한 하나의 **App ID**를 포함해야 합니다.

#### 예제 (`openStore`)

예제에서는 출시된 **nachocode developer** 앱의 정보를 활용하였습니다.

- Android App ID : `com.nachocode.developer`
- iOS App ID : `6514317160`

실사용시에는 적절한 값으로 수정이 필요합니다.

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

- _since ver.1.6.0_

#### 설명 (`openReviewInStore`)

> ⚠️ **주의** - 스토어 출시가 완료된 후 이용하세요.

사용자를 **스토어 내 리뷰 작성 페이지**로 직접 연결합니다.

**Android의 경우 직접적으로 리뷰 작성 페이지**로 연결할 수는 없습니다.  
스토어 내 앱 상세 페이지로 유도해 간접적으로 리뷰 작성을 요청할 수 있습니다.

아래와 같이 플랫폼에 따라 다르게 동작합니다.

- **iOS** : 앱스토어 리뷰 화면을 연동합니다.
- **Android, Web** : 스토어 내 앱 상세 페이지를 엽니다.

#### 지원 플랫폼 (`openReviewInStore`)

`openReviewInStore` 메서드는 **App, Web 모든 환경을 지원**합니다.

- ✅ Android
- ✅ iOS
- ✅ Web (모바일/PC)

#### 매개변수 (`openReviewInStore`)

| 이름                     | 타입     | 필수 여부        | 설명                                      |
| ------------------------ | -------- | ---------------- | ----------------------------------------- |
| `storeInfo.androidAppId` | `string` | 조건부 (Android) | Android 앱의 패키지 명                    |
| `storeInfo.iOSAppId`     | `string` | 조건부 (iOS)     | 리뷰 화면으로 이동할 iOS 앱스토어의 앱 ID |

> ⚠️ **주의**  
> Android에서는 `androidAppId`,  
> iOS에서는 `iOSAppId`가 활용되기에  
> 최소한 하나의 **App ID**를 포함해야 합니다.

#### 예제 (`openReviewInStore`)

예제에서는 출시된 **nachocode developer** 앱의 정보를 활용하였습니다.

- Android App ID : `com.nachocode.developer`
- iOS App ID : `6514317160`

실사용시에는 적절한 값으로 수정이 필요합니다.

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

- _since ver.1.6.0_

#### 설명 (`requestReview`)

> ⚠️ **주의**  
> 인앱 리뷰 요청은 운영체제(OS) 정책에 따라 제한될 수 있습니다.  
> 자세한 내용은 공식 문서를 참고해 주세요.
>
> - [App Store](https://developer.apple.com/app-store/ratings-and-reviews/)
> - [Google Play](https://developer.android.com/guide/playcore/in-app-review?hl=ko#when-to-request)

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

#### 지원 플랫폼 (`requestReview`)

`requestReview` 메서드는 **Android 및 iOS** 네이티브 앱 환경에 대응하며, Web에서는 동작하지 않습니다.

- ✅ Android
- ✅ iOS
- ❌ Web - _지원하지 않음_

#### 반환 값 (`requestReview`)

해당 메서드는 반환 값을 가지지 않습니다.

사용자의 리뷰 팝업에서의 상호작용 결과를 알 수 있는 방법은 없습니다.

#### 예제 (`requestReview`)

```javascript
// 네이티브 인앱 리뷰 창 호출
Nachocode.store.requestReview();
```

---

## **활용 팁**

- **사용자 피드백 유도**: 중요한 작업 완료 직후 `requestReview()` 호출로 자연스럽게 리뷰 요청 가능
- **앱 설치 유도**: 웹페이지에서 `openStore()` 호출로 바로 다운로드 페이지로 이동
- **리뷰 리마인더**: 앱을 일정 기간 사용한 사용자 대상으로 재방문 시 `openReviewInStore()` 호출
