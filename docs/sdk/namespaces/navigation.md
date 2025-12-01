---
description: nachocode SDK의 `navigation` 네임스페이스는 앱의 네비게이션 스택을 제어하고, 스와이프 제스처 설정, 루트로 리셋하는 기능을 제공합니다.
keywords:
  [
    네비게이션 제어,
    네비게이션 스택,
    뒤로가기 제스처,
    스와이프 제스처,
    루트로 리셋,
    히스토리 초기화,
    navigation control,
    navigation stack,
    swipe gesture,
    back gesture,
    reset to root,
    clear history,
  ]
image: /img/docs/thumbnails/SDK/navigation.svg
---

# 네비게이션 (`navigation`)

import { BadgeWithVersion } from '@site/src/components/svg/badge-with-version';
import { ThumbnailImage } from '@site/src/components/common/image/thumbnail-image';

<ThumbnailImage src='/img/docs/thumbnails/SDK/navigation.svg'/>

> 🚀 **추가된 버전 :** <BadgeWithVersion type="SDK" version="v1.8.0" link="/docs/releases/v1/sdk/release-v-1-8-0" />  
> 🔔 **최신화 일자:** 2025-10-29

## **개요** {#overview}

`navigation` 네임스페이스는 **앱의 네비게이션 동작을 제어하는 기능**을 제공합니다.

Android에서 **네비게이션 스택을 초기화**하거나, iOS의 **스와이프 제스처를 제어**하거나, **루트 화면으로 리셋**하는 등의 작업을 수행할 수 있습니다.

:::warning 플랫폼별 기능
일부 메서드는 특정 플랫폼에서만 동작합니다. 각 메서드의 지원 플랫폼을 확인해주세요.
:::

---

## **메서드 목록** {#method-list}

| 메서드                                           | 설명                                                                  | 지원 플랫폼  | 추가된 버전                                                                                   |
| ------------------------------------------------ | --------------------------------------------------------------------- | ------------ | --------------------------------------------------------------------------------------------- |
| [`clearHistory()`](#clear-history)               | 네비게이션 히스토리 스택을 초기화하여 루트 뷰만 남깁니다.             | Android      | <BadgeWithVersion type="SDK" version="v1.8.0" link="/docs/releases/v1/sdk/release-v-1-8-0" /> |
| [`setSwipeGesture(enabled)`](#set-swipe-gesture) | 이전, 다음 화면으로 돌아가는 스와이프 제스처를 활성화/비활성화합니다. | iOS          | <BadgeWithVersion type="SDK" version="v1.8.0" link="/docs/releases/v1/sdk/release-v-1-8-0" /> |
| [`resetToRoot(url?)`](#reset-to-root)            | 네비게이션 스택을 루트 뷰로 리셋하고 선택적으로 URL을 로드합니다.     | Android, iOS | <BadgeWithVersion type="SDK" version="v1.8.0" link="/docs/releases/v1/sdk/release-v-1-8-0" /> |

---

## **메서드 상세** {#method-details}

### **`clearHistory(): void`** {#clear-history}

- ![Android-Only](https://img.shields.io/badge/Android_only-gray?logo=android)
- _since :_ <BadgeWithVersion type="SDK" version="v1.8.0" link="/docs/releases/v1/sdk/release-v-1-8-0" />

#### 설명 {#clear-history-summary}

네비게이션 **히스토리 스택을 초기화**하여 루트 뷰만 남깁니다.

이 메서드를 사용하면 사용자가 뒤로가기 버튼을 눌렀을 때 이전 화면으로 돌아갈 수 없게 됩니다.  
**로그인 후 로그인 화면으로 돌아가지 못하게 하거나**, **특정 플로우 완료 후 이전 단계로 돌아가지 못하게 할 때** 사용합니다.

:::warning 안드로이드 전용
이 메서드는 **Android에서만 동작**합니다.
:::

#### 지원 플랫폼 {#clear-history-supported-platforms}

| 플랫폼                                                             | 지원 여부 |
| ------------------------------------------------------------------ | --------- |
| ![Android](https://img.shields.io/badge/Android-gray?logo=android) | ✅        |
| ![iOS](https://img.shields.io/badge/iOS-gray?logo=apple)           | ❌        |
| ![Web](/img/docs/chrome-badge.svg)                                 | ❌        |

#### 반환 값 {#clear-history-returns}

해당 메서드는 반환 값을 가지지 않습니다.

#### 사용 예제 {#clear-history-examples}

##### 로그인 후 히스토리 초기화 {#clear-history-example-login}

```javascript
// 로그인 성공 후 이전 화면(로그인 화면)으로 돌아가지 못하게 설정
async function handleLoginSuccess() {
  // 로그인 처리
  await loginUser();

  // 네비게이션 히스토리 초기화 (로그인 화면으로 뒤로가기 방지)
  if (Nachocode.device.isAndroid()) {
    Nachocode.navigation.clearHistory();
  }
}
```

##### 온보딩 완료 후 히스토리 초기화 {#clear-history-example-onboarding}

```javascript
// 온보딩 완료 후 온보딩 화면으로 돌아가지 못하게 설정
function completeOnboarding() {
  // 온보딩 완료 플래그 설정
  localStorage.setItem('onboarding_completed', 'true');

  // 네비게이션 히스토리 초기화
  if (Nachocode.device.isAndroid()) {
    Nachocode.navigation.clearHistory();
  }
}
```

---

### **`setSwipeGesture(enabled: boolean): void`** {#set-swipe-gesture}

- ![iOS-Only](https://img.shields.io/badge/iOS_only-gray?logo=apple)
- _since :_ <BadgeWithVersion type="SDK" version="v1.8.0" link="/docs/releases/v1/sdk/release-v-1-8-0" />

#### 설명 {#set-swipe-gesture-summary}

이전 화면으로 돌아가는 **스와이프 제스처를 활성화 또는 비활성화**합니다.

iOS에서는 기본적으로 화면 왼쪽 가장자리에서 오른쪽으로 스와이프하면 이전 화면으로 돌아가고 오른쪽 가장자리에서 왼쪽으로 스와이프하면 다음 화면으로 이동합니다.

이 메서드를 사용하여 특정 상황에서 이 제스처를 비활성화할 수 있습니다.

:::warning iOS 전용
이 메서드는 **iOS에서만 동작**합니다.
:::

#### 지원 플랫폼 {#set-swipe-gesture-supported-platforms}

| 플랫폼                                                             | 지원 여부 |
| ------------------------------------------------------------------ | --------- |
| ![Android](https://img.shields.io/badge/Android-gray?logo=android) | ❌        |
| ![iOS](https://img.shields.io/badge/iOS-gray?logo=apple)           | ✅        |
| ![Web](/img/docs/chrome-badge.svg)                                 | ❌        |

#### 매개변수 {#set-swipe-gesture-parameters}

| 이름      | 타입      | 필수 여부 | 설명                                       |
| --------- | --------- | --------- | ------------------------------------------ |
| `enabled` | `boolean` | ✅        | `true`면 제스처 활성화, `false`면 비활성화 |

#### 반환 값 {#set-swipe-gesture-returns}

해당 메서드는 반환 값을 가지지 않습니다.

#### 사용 예제 {#set-swipe-gesture-examples}

##### 스와이프 제스처 비활성화 {#set-swipe-gesture-example-disable}

```javascript
// 특정 화면에서 스와이프로 뒤로가기를 방지
function disableSwipeGesture() {
  if (Nachocode.device.isIOS()) {
    Nachocode.navigation.setSwipeGesture(false);
  }
}

// 결제 화면 진입 시 스와이프 제스처 비활성화
function enterPaymentPage() {
  disableSwipeGesture();
  // 결제 화면 로직
}
```

##### 스와이프 제스처 다시 활성화 {#set-swipe-gesture-example-enable}

```javascript
// 결제 완료 후 스와이프 제스처 다시 활성화
function exitPaymentPage() {
  if (Nachocode.device.isIOS()) {
    Nachocode.navigation.setSwipeGesture(true);
  }
}
```

##### 조건부 제스처 제어 {#set-swipe-gesture-example-conditional}

```javascript
// 양식 작성 중일 때만 스와이프 제스처 비활성화
let isWriting = false;

function setupForm() {
  const formElements = document.querySelectorAll('input, textarea');

  formElements.forEach(element => {
    element.addEventListener('input', () => {
      isWriting = true;
      // 양식 작성 시작하면 스와이프 제스처 비활성화
      if (Nachocode.device.isIOS()) {
        Nachocode.navigation.setSwipeGesture(false);
      }
    });
  });
}

function submitForm() {
  // 양식 제출 후 다시 활성화
  isWriting = false;
  if (Nachocode.device.isIOS()) {
    Nachocode.navigation.setSwipeGesture(true);
  }
}
```

---

### **`resetToRoot(url?: string): void`** {#reset-to-root}

- _since :_ <BadgeWithVersion type="SDK" version="v1.8.0" link="/docs/releases/v1/sdk/release-v-1-8-0" />

#### 설명 {#reset-to-root-summary}

네비게이션 스택을 **루트 뷰로 리셋**하고 선택적으로 URL을 로드합니다.

이 메서드를 사용하면 모든 네비게이션 히스토리를 지우고 앱의 루트 화면으로 돌아갑니다.  
URL을 제공하지 않으면 기본 루트 URL로 이동하며, URL을 제공하면 해당 URL을 루트로 설정합니다.

#### 지원 플랫폼 {#reset-to-root-supported-platforms}

| 플랫폼                                                             | 지원 여부 |
| ------------------------------------------------------------------ | --------- |
| ![Android](https://img.shields.io/badge/Android-gray?logo=android) | ✅        |
| ![iOS](https://img.shields.io/badge/iOS-gray?logo=apple)           | ✅        |
| ![Web](/img/docs/chrome-badge.svg)                                 | ❌        |

#### 매개변수 {#reset-to-root-parameters}

| 이름  | 타입                  | 필수 여부 | 설명                                                  |
| ----- | --------------------- | --------- | ----------------------------------------------------- |
| `url` | `string` _(optional)_ | ❌        | 루트로 설정할 URL. 제공하지 않으면 기본 루트 URL 사용 |

#### 반환 값 {#reset-to-root-returns}

해당 메서드는 반환 값을 가지지 않습니다.

#### 사용 예제 {#reset-to-root-examples}

##### 기본 루트로 리셋 {#reset-to-root-example-default}

```javascript
// 기본 루트 화면으로 리셋
Nachocode.navigation.resetToRoot();
```

##### 특정 URL로 루트 리셋 {#reset-to-root-example-url}

```javascript
// 특정 URL을 루트로 설정하며 리셋
Nachocode.navigation.resetToRoot('https://developer.nachocode.io/');
```

##### 로그아웃 시 루트로 리셋 {#reset-to-root-example-logout}

```javascript
// 로그아웃 후 로그인 화면을 루트로 설정
async function logout() {
  // 로그아웃 처리
  await logoutUser();

  // 모든 히스토리를 지우고 로그인 화면을 루트로 설정
  Nachocode.navigation.resetToRoot('https://nachocode.io/login');
}
```

##### 오류 발생 시 홈으로 리셋 {#reset-to-root-example-error}

```javascript
// 치명적인 오류 발생 시 루트로 리셋
function handleCriticalError(error) {
  console.error('Critical error:', error);

  // 사용자에게 알림
  alert('오류가 발생했습니다. 홈 화면으로 이동합니다.');

  // 루트로 리셋
  Nachocode.navigation.resetToRoot();
}
```

---
