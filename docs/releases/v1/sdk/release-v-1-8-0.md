---
sidebar_label: 'ver.1.8.0 (25.10.29)'
description: nachocode Client SDK ver.1.8.0의 릴리즈노트입니다.
image: /img/docs/releases/release_note_sdk_detail.png
---

# Release: ver.1.8.0 (2025-10-29)

import { ThumbnailImage } from '@site/src/components/common/image/thumbnail-image';

<ThumbnailImage src='/img/docs/releases/release_note_sdk_detail.png'/>

> 🔔 **배포 일자:** 2025-10-29

이번 업데이트 **v1.8.0**에서는 **네비게이션 제어 기능**, **로딩 인디케이터 제어**, **안전 영역 (Safe Area) 조회**, **내부 브라우저 설정** 등 다양한 신규 기능이 추가되었습니다.

또한 **AppsFlyer 메서드 네이밍 개선**과 **앱 종료 기능** 추가를 통해 더욱 향상된 개발 경험을 제공합니다.

## 주요 변경 사항 (ver.1.8.0)

### 새로운 기능 {#new-features}

- **`app` 네임스페이스**: 앱 종료 기능 추가

  - 앱을 프로그래밍 방식으로 종료할 수 있는 기능이 추가되었습니다.
  - ➡️ [**`app` 네임스페이스 문서 바로가기**](/docs/sdk/namespaces/app)

- **`browser` 네임스페이스**: 내부 브라우저 옵션 설정 기능 추가

  - 내부 브라우저에서 **URL 바 표시 여부**를 제어할 수 있습니다.
  - 사용자 경험에 맞게 브라우저 UI를 커스터마이징할 수 있습니다.
  - ➡️ [**`browser` 네임스페이스 문서 바로가기**](/docs/sdk/namespaces/browser)

- **`device` 네임스페이스**: 안전 영역(Safe Area) 조회 기능 추가

  - iOS 기기의 **Safe Area Insets** 정보를 조회할 수 있습니다.
  - 노치가 있는 기기에서 화면 레이아웃을 정확히 구성할 수 있습니다.
  - 하단 홈 인디케이터 영역을 확인하여 웹에서 구현된 탭바에 정확한 `padding`을 부여할 수 있습니다.
  - ➡️ [**`device` 네임스페이스 문서 바로가기**](/docs/sdk/namespaces/device)

- **`loading` 네임스페이스**: 로딩 인디케이터 제어 기능 추가

  - 네이티브 로딩 인디케이터를 숨기는 기능을 제공합니다.
  - 앱 시작 시 표시되는 로딩 화면을 JavaScript에서 직접 제어할 수 있습니다.
  - ➡️ [**`loading` 네임스페이스 문서 바로가기**](/docs/sdk/namespaces/loading)

- **`navigation` 네임스페이스**: 네비게이션 제어 기능 추가

  - 앱의 **네비게이션 스택 제어**, **스와이프 제스처 설정**, **루트로 리셋** 등의 기능을 제공합니다.
  - 플랫폼별 특화 기능을 지원하여 더욱 세밀한 제어가 가능합니다.
  - ➡️ [**`navigation` 네임스페이스 문서 바로가기**](/docs/sdk/namespaces/navigation)

- **`vibration` 네임스페이스**: 플랫폼별 햅틱 피드백 기능 추가
  - **iOS 전용 햅틱 피드백**: Impact, Notification, Selection 피드백을 제공합니다.
  - **Android 전용 햅틱 효과**: 시스템 정의 VibrationEffect를 사용할 수 있습니다.
  - 기존 `HAPTICS_TYPES`가 `LIGHT`, `MEDIUM`, `HEAVY`로 개선되었습니다.
  - ➡️ [**`vibration` 네임스페이스 문서 바로가기**](/docs/sdk/namespaces/vibration)

---

### 앱 종료 기능 (`app` 네임스페이스)

앱을 프로그래밍 방식으로 종료할 수 있는 기능이 추가되었습니다.

#### 추가된 메서드 (`app`)

| 메서드      | 설명      | 지원 플랫폼  |
| ----------- | --------- | ------------ |
| `exitApp()` | 앱을 종료 | Android, iOS |

#### 사용 예제 (`exitApp`)

```javascript
// 사용자가 로그아웃 후 앱 종료
function logout() {
  // 로그아웃 로직 수행
  clearUserData();

  // 앱 종료
  Nachocode.app.exitApp();
}
```

---

### 내부 브라우저 옵션 설정 (`browser` 네임스페이스)

내부 브라우저의 UI 옵션을 설정할 수 있는 기능이 추가되었습니다.

#### 추가된 메서드 (`browser`)

| 메서드                       | 설명                    | 지원 플랫폼  |
| ---------------------------- | ----------------------- | ------------ |
| `setInternalBrowser(option)` | 내부 브라우저 옵션 설정 | Android, iOS |

#### 사용 예제 (`setInternalBrowser`)

```javascript
// URL 바를 표시하지 않는 내부 브라우저 설정
Nachocode.browser.setInternalBrowser({
  usingUrl: false,
});

// URL 바를 표시하는 내부 브라우저 설정
Nachocode.browser.setInternalBrowser({
  usingUrl: true,
});
```

---

### 안전 영역 (Safe Area) 조회 기능 (`device` 네임스페이스)

iOS 기기의 Safe Area Insets 정보를 조회하여 노치나 Dynamic Island가 있는 기기에서 정확한 레이아웃을 구성할 수 있습니다.

#### 추가된 메서드 (`device`)

| 메서드                | 설명                                         | 지원 플랫폼         |
| --------------------- | -------------------------------------------- | ------------------- |
| `getSafeAreaInsets()` | 기기의 Safe Area Insets 정보를 비동기로 조회 | iOS (iPhone X 이상) |

#### 사용 예제 (`getSafeAreaInsets`)

```javascript
// Safe Area Insets 조회
const safeArea = await Nachocode.device.getSafeAreaInsets();

if (!safeArea.isError) {
  console.log(`Top: ${safeArea.top}pt`);
  console.log(`Bottom: ${safeArea.bottom}pt`);
  console.log(`Left: ${safeArea.left}pt`);
  console.log(`Right: ${safeArea.right}pt`);

  // CSS 변수로 설정하여 레이아웃에 활용
  document.documentElement.style.setProperty(
    '--safe-area-top',
    `${safeArea.top}pt`
  );
  document.documentElement.style.setProperty(
    '--safe-area-bottom',
    `${safeArea.bottom}pt`
  );
} else {
  console.error(`Error retrieving safe area: ${safeArea.errorMessage}`);
}
```

#### 반환 타입 (`getSafeAreaInsets`)

**성공 시** (`GetSafeAreaInsetsSuccessResult`)

```typescript
{
  isError: false;
  top: number; // 상단 여백 (pt)
  bottom: number; // 하단 여백 (pt)
  left: number; // 좌측 여백 (pt)
  right: number; // 우측 여백 (pt)
}
```

**실패 시** (`GetSafeAreaInsetsErrorResult`)

```typescript
{
  isError: true;
  errorMessage: string;
}
```

---

### 로딩 인디케이터 제어 (`loading` 네임스페이스)

네이티브 로딩 인디케이터를 JavaScript에서 제어할 수 있는 기능이 추가되었습니다.

#### 추가된 메서드 (`loading`)

| 메서드            | 설명                            |
| ----------------- | ------------------------------- |
| `hideIndicator()` | 네이티브 로딩 인디케이터를 숨김 |

#### 사용 예제 (`loading`)

```javascript
// 앱 초기화 완료 후 로딩 인디케이터 숨기기
await Nachocode.initAsync('your_api_key');

// 데이터 로딩 완료
await loadUserData();

// 로딩 인디케이터 숨기기
Nachocode.loading.hideIndicator();
```

---

### 네비게이션 제어 기능 (`navigation` 네임스페이스)

앱의 네비게이션 동작을 세밀하게 제어할 수 있는 새로운 네임스페이스 `navigation`이 추가되었습니다.

#### 추가된 메서드 (`navigation`)

| 메서드                     | 설명                                                     | 지원 플랫폼  |
| -------------------------- | -------------------------------------------------------- | ------------ |
| `clearHistory()`           | 네비게이션 히스토리 스택을 초기화하여 루트 뷰만 남김     | Android      |
| `setSwipeGesture(enabled)` | 이전 화면으로 돌아가는 스와이프 제스처 활성화/비활성화   | iOS          |
| `resetToRoot(url?)`        | 네비게이션 스택을 루트 뷰로 리셋하고 선택적으로 URL 로드 | Android, iOS |

#### 사용 예제 (`navigation`)

##### **네비게이션 히스토리 초기화** (Android 전용)

```javascript
// Android에서 네비게이션 스택을 루트만 남기고 모두 삭제
Nachocode.navigation.clearHistory();
```

##### **스와이프 제스처 제어** (iOS 전용)

```javascript
// iOS에서 뒤로가기 스와이프 제스처 비활성화
Nachocode.navigation.setSwipeGesture(false);

// 다시 활성화
Nachocode.navigation.setSwipeGesture(true);
```

##### **루트로 리셋**

```javascript
// 기본 루트 URL로 리셋
Nachocode.navigation.resetToRoot();

// 특정 URL로 루트 리셋
Nachocode.navigation.resetToRoot('https://developer.nachocode.io');
```

---

### 플랫폼별 햅틱 피드백 기능 (`vibration` 네임스페이스)

기존 햅틱 피드백 기능이 개선되고, **iOS와 Android 플랫폼별 전용 햅틱 피드백** 기능이 추가되었습니다.

#### 개선된 타입 (`vibration`)

기존 `HAPTICS_TYPES`의 값이 더 직관적으로 변경되었습니다.

| 기존 (1.7.0 이하) | 새 버전 (1.8.0) | 설명                  |
| ----------------- | --------------- | --------------------- |
| `SUCCESS (0)`     | `LIGHT (0)`     | 가벼운 햅틱 피드백    |
| `ERROR (1)`       | `MEDIUM (1)`    | 중간 강도 햅틱 피드백 |
| -                 | `HEAVY (2)`     | 무거운 햅틱 피드백    |

#### 추가된 메서드 (`vibration`)

| 메서드                       | 설명                                       | 지원 플랫폼 |
| ---------------------------- | ------------------------------------------ | ----------- |
| `hapticsImpact(type?)`       | iOS 햅틱 Impact 피드백 트리거              | iOS         |
| `hapticsNotification(type?)` | iOS 햅틱 Notification 피드백 트리거        | iOS         |
| `hapticsSelection()`         | iOS 햅틱 Selection 피드백 트리거           | iOS         |
| `hapticsEffect(type?)`       | Android 햅틱 VibrationEffect 피드백 트리거 | Android     |

#### 사용 예제 (`vibration`)

##### **iOS 전용 햅틱 피드백**

```javascript
// Impact 피드백 - 물리적 충격을 시뮬레이션
if (Nachocode.device.isIOS()) {
  // 가벼운 Impact
  Nachocode.vibration.hapticsImpact(0); // LIGHT

  // 중간 Impact
  Nachocode.vibration.hapticsImpact(1); // MEDIUM

  // 무거운 Impact
  Nachocode.vibration.hapticsImpact(2); // HEAVY

  // 부드러운 Impact (iOS 13.0+)
  Nachocode.vibration.hapticsImpact(3); // SOFT

  // 견고한 Impact (iOS 13.0+)
  Nachocode.vibration.hapticsImpact(4); // RIGID
}

// Notification 피드백 - 작업 성공/경고/실패 알림
if (Nachocode.device.isIOS()) {
  // 성공 알림
  Nachocode.vibration.hapticsNotification(0); // SUCCESS

  // 경고 알림
  Nachocode.vibration.hapticsNotification(1); // WARNING

  // 오류 알림
  Nachocode.vibration.hapticsNotification(2); // ERROR
}

// Selection 피드백 - 선택 항목 변경 시
if (Nachocode.device.isIOS()) {
  Nachocode.vibration.hapticsSelection();
}
```

##### **Android 전용 햅틱 효과**

```javascript
// Android VibrationEffect 사용
if (Nachocode.device.isAndroid()) {
  // 클릭 효과
  Nachocode.vibration.hapticsEffect(0); // EFFECT_CLICK

  // 더블 클릭 효과
  Nachocode.vibration.hapticsEffect(1); // EFFECT_DOUBLE_CLICK

  // 틱 효과
  Nachocode.vibration.hapticsEffect(2); // EFFECT_TICK

  // 무거운 클릭 효과
  Nachocode.vibration.hapticsEffect(5); // EFFECT_HEAVY_CLICK
}
```

##### **개선된 기본 햅틱 피드백**

```javascript
// 기본 햅틱 피드백 (Android, iOS 모두 지원)
Nachocode.vibration.haptics(0); // LIGHT (기본값)
Nachocode.vibration.haptics(1); // MEDIUM
Nachocode.vibration.haptics(2); // HEAVY
```

#### 새로운 타입 정의 (`vibration`)

```typescript
// iOS Impact 타입
export declare const HAPTICS_IMPACT_TYPES = {
  LIGHT: 0,
  MEDIUM: 1,
  HEAVY: 2,
  SOFT: 3,
  RIGID: 4,
} as const;

// iOS Notification 타입
export declare const HAPTICS_NOTIFICATION_TYPES = {
  SUCCESS: 0,
  WARNING: 1,
  ERROR: 2,
} as const;

// Android Effect 타입
export declare const HAPTICS_EFFECT_TYPES = {
  EFFECT_CLICK: 0,
  EFFECT_DOUBLE_CLICK: 1,
  EFFECT_TICK: 2,
  EFFECT_HEAVY_CLICK: 5,
} as const;
```

---

### 개선 사항 {#improvements}

- **`appsflyer` 네임스페이스**: 메서드 네이밍 개선

  - ➡️ [**`appsflyer` 네임스페이스 문서 바로가기**](/docs/sdk/integrations/appsflyer/reference)
  - AppsFlyer 공식 문서와의 일관성을 위해 메서드 이름이 변경되었습니다.

  <br/>

  | 기존 메서드 (1.7.0)       | 새 메서드 (1.8.0)           |
  | ------------------------- | --------------------------- |
  | `setCustomUserId(userId)` | `setCustomerUserId(userId)` |
  | `getCustomUserId()`       | `getCustomerUserId()`       |
  | `deleteCustomUserId()`    | `deleteCustomerUserId()`    |

  ```javascript
  // 개선된 메서드 사용 (권장)
  const result = await Nachocode.appsflyer.setCustomerUserId('user123');
  ```

- **`vibration` 네임스페이스**: 햅틱 피드백 타입 개선

  - 기존 `HAPTICS_TYPES`의 값이 `SUCCESS/ERROR`에서 `LIGHT/MEDIUM/HEAVY`로 변경되었습니다.
  - iOS 전용 햅틱 타입 추가: `HapticsImpactType`, `HapticsNotificationType`
  - Android 전용 햅틱 타입 추가: `HapticsEffectType`
  - 플랫폼별 세밀한 햅틱 제어가 가능해졌습니다.

- **TypeScript 정의**(`Nachocode.d.ts`) **업데이트**
  - v.1.8.0 변경 사항을 반영하여 새로운 네임스페이스와 메서드의 타입 정의가 추가되었습니다.
  - `navigation`, `loading` 네임스페이스가 새롭게 추가되었습니다.
  - `vibration` 네임스페이스에 iOS/Android 전용 햅틱 타입과 메서드가 추가되었습니다.
  - `SafeAreaInsets`, `GetSafeAreaInsetsResult`, `SetInternalBrowserOption`, `HapticsImpactType`, `HapticsNotificationType`, `HapticsEffectType` 등의 새로운 타입이 정의되었습니다.
  - 개발자 경험 향상을 위해 주석과 설명이 추가되었습니다.

:::info
➡️ [`Nachocode.d.ts`](https://github.com/FlipperCorporation/nachocode-client-sdk-js/blob/main/releases/Nachocode.d.ts)에서 최신 정의를 확인하세요.
:::

---

### 활용 사례 {#use-cases}

이번 업데이트의 새로운 기능들을 활용하여 다음과 같은 개선을 할 수 있습니다.

1. **노치 대응 레이아웃**: Safe Area Insets를 활용하여 iPhone X 이상의 기기에서 UI가 노치나 홈 인디케이터에 가려지지 않도록 구성
2. **커스텀 로딩 경험**: 네이티브 로딩 인디케이터를 제어하여 브랜드에 맞는 커스텀 로딩 화면 구현
3. **네비게이션 최적화**: 특정 시나리오에서 네비게이션 스택을 초기화하여 사용자 경험 개선
4. **브라우저 커스터마이징**: 내부 브라우저의 URL 바 표시 여부를 조정하여 앱의 UI/UX에 맞게 최적화
5. **깔끔한 앱 종료**: 특정 상황에서 앱을 안전하게 종료하는 기능 구현
6. **고급 햅틱 피드백**: 플랫폼별 전용 햅틱 기능을 활용하여 더욱 세밀하고 정교한 촉각 피드백 구현

---

### 업데이트 방법

nachocode JavaScript Client SDK **ver.1.8.0**를 사용하려면 아래의 스크립트를 업데이트하십시오.

#### SDK CDN 주소

```html
<script src="https://cdn.nachocode.io/nachocode/client-sdk/@1.8.0/client-sdk.min.js"></script>
```

:::tip 문의하기
nachocode는 지속적으로 사용자의 개발 경험 향상을 위해 최선을 다하겠습니다.
추가적인 요청이나 문의사항은 언제든지 지원팀에게 [이메일](mailto:support@nachocode.io)을 보내주세요.
감사합니다.
:::
