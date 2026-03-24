---
description: nachocode SDK의 vibration 네임스페이스를 사용하여 디바이스 진동 및 햅틱 피드백 기능을 간단히 구현하고, 사용자 환경에 따라 활성화 또는 비활성화할 수 있습니다.
keywords:
  [
    웹뷰 진동 구현,
    모바일 진동 구현,
    웹앱 진동 구현,
    햅틱 피드백 구현,
    디바이스 진동 구현,
    햅틱,
    진동,
    haptics feedback,
    device vibration,
    vibration,
    haptics,
  ]
image: /img/docs/thumbnails/SDK/vibration.svg
---

# 진동 (`vibration`)

import { BadgeWithVersion } from '@site/src/components/svg/badge-with-version';
import { ThumbnailImage } from '@site/src/components/common/image/thumbnail-image';

<ThumbnailImage src='/img/docs/thumbnails/SDK/vibration.svg'/>

> 🚀 **추가된 버전 :** <BadgeWithVersion type="SDK" version="v1.1.0" link="/docs/releases/v1/sdk/release-v-1-1-0" /> <BadgeWithVersion type="Android" version="v1.1.0" link="/docs/releases/v1/app-source/android/release-v-1-1-0" /> <BadgeWithVersion type="iOS" version="v1.1.0" link="/docs/releases/v1/app-source/ios/release-v-1-1-0" />  
> 🔔 **최신화 일자:** 2026-03-25

## **개요** {#overview}

`vibration` 네임스페이스는 **디바이스 진동 및 햅틱 피드백을 제어하는 기능**을 제공합니다.

이를 통해 **햅틱 피드백(Light, Medium, Heavy 등)과 짧은 진동 패턴**을 트리거하거나,
**사용자 설정에 따라 진동 기능을 활성화 또는 비활성화**할 수 있습니다.

햅틱 기술을 활용하면 사람들의 촉각을 자극하고 물리적 세계에 대한 친숙함을 앱에 접목할 수 있습니다.

:::info
[SDK Version 1.8.0](/docs/releases/v1/sdk/release-v-1-8-0)부터 **iOS 전용 햅틱 피드백**(Impact, Notification, Selection)과 **Android 전용 햅틱 효과**가 추가되어 플랫폼별 세밀한 햅틱 제어가 가능합니다.
:::

---

## **타입 정의** {#types}

### **`HapticsType`** {#haptics-type}

- _since :_ <BadgeWithVersion type="SDK" version="v1.1.0" link="/docs/releases/v1/sdk/release-v-1-1-0" />
- _last updated :_ <BadgeWithVersion type="SDK" version="v1.8.0" link="/docs/releases/v1/sdk/release-v-1-8-0" />

기본 햅틱 피드백 유형을 나타내는 열거형(enum)입니다.

```typescript
export declare const HAPTICS_TYPES = {
  LIGHT: 0,
  MEDIUM: 1,
  HEAVY: 2,
} as const;
```

```typescript
export declare type HapticsType =
  (typeof HAPTICS_TYPES)[keyof typeof HAPTICS_TYPES];
```

| 값  | 타입     | 설명                  |
| --- | -------- | --------------------- |
| `0` | `LIGHT`  | 가벼운 햅틱 피드백    |
| `1` | `MEDIUM` | 중간 강도 햅틱 피드백 |
| `2` | `HEAVY`  | 무거운 햅틱 피드백    |

---

### **`HapticsImpactType`** {#haptics-impact-type}

- ![iOS-Only](https://img.shields.io/badge/iOS_only-gray?logo=apple)
- _since :_ <BadgeWithVersion type="SDK" version="v1.8.0" link="/docs/releases/v1/sdk/release-v-1-8-0" />

iOS 전용 Impact 햅틱 피드백 유형을 나타내는 열거형입니다.

```typescript
export declare const HAPTICS_IMPACT_TYPES = {
  LIGHT: 0, // iOS 10.0+
  MEDIUM: 1, // iOS 10.0+
  HEAVY: 2, // iOS 10.0+
  SOFT: 3, // iOS 13.0+
  RIGID: 4, // iOS 13.0+
} as const;
```

```typescript
export declare type HapticsImpactType =
  (typeof HAPTICS_IMPACT_TYPES)[keyof typeof HAPTICS_IMPACT_TYPES];
```

| 값  | 타입     | 설명                            |
| --- | -------- | ------------------------------- |
| `0` | `LIGHT`  | 가벼운 Impact 피드백            |
| `1` | `MEDIUM` | 중간 강도 Impact 피드백         |
| `2` | `HEAVY`  | 무거운 Impact 피드백            |
| `3` | `SOFT`   | 부드러운 Impact 피드백          |
| `4` | `RIGID`  | 견고하고 날카로운 Impact 피드백 |

---

### **`HapticsNotificationType`** {#haptics-notification-type}

- ![iOS-Only](https://img.shields.io/badge/iOS_only-gray?logo=apple)
- _since :_ <BadgeWithVersion type="SDK" version="v1.8.0" link="/docs/releases/v1/sdk/release-v-1-8-0" />

iOS 전용 햅틱 알림(Notification) 피드백 유형을 나타내는 열거형입니다.

```typescript
export declare const HAPTICS_NOTIFICATION_TYPES = {
  SUCCESS: 0,
  WARNING: 1,
  ERROR: 2,
} as const;
```

```typescript
export declare type HapticsNotificationType =
  (typeof HAPTICS_NOTIFICATION_TYPES)[keyof typeof HAPTICS_NOTIFICATION_TYPES];
```

| 값  | 타입      | 설명                          |
| --- | --------- | ----------------------------- |
| `0` | `SUCCESS` | 성공 시 알림 피드백           |
| `1` | `WARNING` | 경고 시 알림 피드백           |
| `2` | `ERROR`   | 오류 또는 실패 시 알림 피드백 |

---

### **`HapticsEffectType`** {#haptics-effect-type}

- ![Android-Only](https://img.shields.io/badge/Android_only-gray?logo=android)
- _since :_ <BadgeWithVersion type="SDK" version="v1.8.0" link="/docs/releases/v1/sdk/release-v-1-8-0" />

Android 전용 햅틱 효과(VibrationEffect) 유형을 나타내는 열거형입니다.

```typescript
export declare const HAPTICS_EFFECT_TYPES = {
  EFFECT_CLICK: 0,
  EFFECT_DOUBLE_CLICK: 1,
  EFFECT_TICK: 2,
  EFFECT_HEAVY_CLICK: 5,
} as const;
```

```typescript
export declare type HapticsEffectType =
  (typeof HAPTICS_EFFECT_TYPES)[keyof typeof HAPTICS_EFFECT_TYPES];
```

| 값  | 타입                  | 설명                    |
| --- | --------------------- | ----------------------- |
| `0` | `EFFECT_CLICK`        | 클릭 효과 피드백        |
| `1` | `EFFECT_DOUBLE_CLICK` | 더블 클릭 효과 피드백   |
| `2` | `EFFECT_TICK`         | 틱(Tick) 효과 피드백    |
| `5` | `EFFECT_HEAVY_CLICK`  | 무거운 클릭 효과 피드백 |

---

## **메서드 목록** {#method-list}

### 설정 관련 {#settings-methods}

| 메서드                                     | 설명                                | 추가된 버전                                                                                   |
| ------------------------------------------ | ----------------------------------- | --------------------------------------------------------------------------------------------- |
| [`setVibration(enable)`](#set-vibration)   | 진동 사용 여부를 설정합니다.        | <BadgeWithVersion type="SDK" version="v1.1.0" link="/docs/releases/v1/sdk/release-v-1-1-0" /> |
| [`getVibration(callback)`](#get-vibration) | 진동 사용 여부를 반환합니다.        | <BadgeWithVersion type="SDK" version="v1.1.0" link="/docs/releases/v1/sdk/release-v-1-1-0" /> |
| [`setHaptics(enable)`](#set-haptics)       | 햅틱 피드백 사용 여부를 설정합니다. | <BadgeWithVersion type="SDK" version="v1.1.0" link="/docs/releases/v1/sdk/release-v-1-1-0" /> |
| [`getHaptics(callback)`](#get-haptics)     | 햅틱 피드백 사용 여부를 반환합니다. | <BadgeWithVersion type="SDK" version="v1.1.0" link="/docs/releases/v1/sdk/release-v-1-1-0" /> |

### 진동 {#vibration-methods}

| 메서드                  | 설명                           | 추가된 버전                                                                                   |
| ----------------------- | ------------------------------ | --------------------------------------------------------------------------------------------- |
| [`vibrate()`](#vibrate) | 짧은 진동 패턴을 트리거합니다. | <BadgeWithVersion type="SDK" version="v1.1.0" link="/docs/releases/v1/sdk/release-v-1-1-0" /> |

### 기본 햅틱 피드백 {#basic-haptics-methods}

| 메서드                              | 설명                        | 추가된 버전                                                                                   |
| ----------------------------------- | --------------------------- | --------------------------------------------------------------------------------------------- |
| [`haptics(hapticsType?)`](#haptics) | 햅틱 피드백을 트리거합니다. | <BadgeWithVersion type="SDK" version="v1.1.0" link="/docs/releases/v1/sdk/release-v-1-1-0" /> |

### iOS 전용 햅틱 피드백 {#ios-haptics-methods}

| 메서드                                                       | 설명                                         | 지원 플랫폼                                              | 추가된 버전                                                                                   |
| ------------------------------------------------------------ | -------------------------------------------- | -------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| [`hapticsImpact(hapticsType?)`](#haptics-impact)             | iOS 햅틱 Impact 피드백을 트리거합니다.       | ![iOS](https://img.shields.io/badge/iOS-gray?logo=apple) | <BadgeWithVersion type="SDK" version="v1.8.0" link="/docs/releases/v1/sdk/release-v-1-8-0" /> |
| [`hapticsNotification(hapticsType?)`](#haptics-notification) | iOS 햅틱 Notification 피드백을 트리거합니다. | ![iOS](https://img.shields.io/badge/iOS-gray?logo=apple) | <BadgeWithVersion type="SDK" version="v1.8.0" link="/docs/releases/v1/sdk/release-v-1-8-0" /> |
| [`hapticsSelection()`](#haptics-selection)                   | iOS 햅틱 Selection 피드백을 트리거합니다.    | ![iOS](https://img.shields.io/badge/iOS-gray?logo=apple) | <BadgeWithVersion type="SDK" version="v1.8.0" link="/docs/releases/v1/sdk/release-v-1-8-0" /> |

### Android 전용 햅틱 효과 {#android-haptics-methods}

| 메서드                                           | 설명                              | 지원 플랫폼                                                        | 추가된 버전                                                                                   |
| ------------------------------------------------ | --------------------------------- | ------------------------------------------------------------------ | --------------------------------------------------------------------------------------------- |
| [`hapticsEffect(hapticsType?)`](#haptics-effect) | Android 햅틱 효과를 트리거합니다. | ![Android](https://img.shields.io/badge/Android-gray?logo=android) | <BadgeWithVersion type="SDK" version="v1.8.0" link="/docs/releases/v1/sdk/release-v-1-8-0" /> |

---

## **메서드 상세** {#method-details}

### **`setVibration(enable)`** {#set-vibration}

- _since :_ <BadgeWithVersion type="SDK" version="v1.1.0" link="/docs/releases/v1/sdk/release-v-1-1-0" />

#### 타입 정의 {#set-vibration-types}

```typescript
function setVibration(enable: boolean): void;
```

#### 설명 {#set-vibration-summary}

앱 사용자의 진동 사용 여부를 설정합니다.  
**진동 사용 여부를 `false`로 설정할 경우 진동 트리거 메서드를 호출하여도 진동이 울리지 않게됩니다.**

:::info **스토어 정책**
스토어 정책에서는 진동 기능을 사용할 경우, **앱 사용자가 직접 진동을 비활성화할 수 있는 옵션을 제공**하는 것을 권장하고 있습니다.
:::

#### 지원 플랫폼 {#set-vibration-supported-platforms}

`setVibration` 메서드는 **Android, iOS 모든 App 환경을 지원**합니다.

| 플랫폼                                                             | 지원 여부 |
| ------------------------------------------------------------------ | --------- |
| ![Android](https://img.shields.io/badge/Android-gray?logo=android) | ✅        |
| ![iOS](https://img.shields.io/badge/iOS-gray?logo=apple)           | ✅        |
| ![Web](/img/docs/chrome-badge.svg)                                 | ❌        |

#### 매개변수 {#set-vibration-parameters}

| 이름     | 타입      | 필수 여부 | 설명                            |
| -------- | --------- | --------- | ------------------------------- |
| `enable` | `boolean` | ✅        | 진동 사용 여부 (`true`/`false`) |

#### 사용 예제 {#set-vibration-examples}

```javascript
// 앱이 진동을 사용하도록 설정합니다.
Nachocode.vibration.setVibration(true);
```

```javascript
// 사용자의 선택에 따라 진동 사용을 중지합니다.
Nachocode.vibration.setVibration(false);

// 메서드를 호출해도 진동이 울리지 않습니다.
Nachocode.vibration.vibrate(); // 진동 ❌
```

```javascript
// ex. 진동 토글 UI 변경 시 호출 될 함수
function onVibrationToggleChange(enable) {
  Nachocode.vibration.setVibration(enable);
}
```

---

### **`getVibration(callback)`** {#get-vibration}

- _since :_ <BadgeWithVersion type="SDK" version="v1.1.0" link="/docs/releases/v1/sdk/release-v-1-1-0" />

#### 타입 정의 {#get-vibration-types}

```typescript
function getVibration(callback: (enable: boolean) => void): void;
```

#### 설명 {#get-vibration-summary}

현재 앱 사용자의 **진동 사용 여부**를 반환합니다.  
콜백 함수로 `true` 또는 `false` 값을 전달받습니다.

#### 지원 플랫폼 {#get-vibration-supported-platforms}

`getVibration` 메서드는 **Android, iOS 모든 App 환경을 지원**합니다.

| 플랫폼                                                             | 지원 여부 |
| ------------------------------------------------------------------ | --------- |
| ![Android](https://img.shields.io/badge/Android-gray?logo=android) | ✅        |
| ![iOS](https://img.shields.io/badge/iOS-gray?logo=apple)           | ✅        |
| ![Web](/img/docs/chrome-badge.svg)                                 | ❌        |

#### 매개변수 {#get-vibration-parameters}

| 이름       | 타입                        | 필수 여부 | 설명                |
| ---------- | --------------------------- | --------- | ------------------- |
| `callback` | `(enable: boolean) => void` | ✅        | 진동 사용 여부 반환 |

#### 반환 값 {#get-vibration-returns}

해당 메서드는 반환 값을 가지지 않으며, 결과는 `callback`을 통해 비동기적으로 제공됩니다.

#### 사용 예제 {#get-vibration-examples}

```javascript
// ex. Native Layer에서 진동 사용유무를 받아와 input의 checked 값을 변경합니다.
Nachocode.vibration.getVibration(enable => {
  console.log(`진동 사용 여부: ${enable ? '사용 중' : '비활성화'}`);

  document.querySelector(`input[name="useVibration"]`).checked = enable;
});
```

---

### **`vibrate()`** {#vibrate}

- _since :_ <BadgeWithVersion type="SDK" version="v1.1.0" link="/docs/releases/v1/sdk/release-v-1-1-0" />

#### 타입 정의 {#vibrate-types}

```typescript
function vibrate(): void;
```

#### 설명 {#vibrate-summary}

짧은 **패턴의 진동**을 트리거합니다.

#### 지원 플랫폼 {#vibrate-supported-platforms}

`vibrate` 메서드는 **Android, iOS 모든 App 환경을 지원**합니다.

| 플랫폼                                                             | 지원 여부 |
| ------------------------------------------------------------------ | --------- |
| ![Android](https://img.shields.io/badge/Android-gray?logo=android) | ✅        |
| ![iOS](https://img.shields.io/badge/iOS-gray?logo=apple)           | ✅        |
| ![Web](/img/docs/chrome-badge.svg)                                 | ❌        |

#### 반환 값 {#vibrate-returns}

해당 메서드는 반환 값을 가지지 않습니다.

#### 사용 예제 {#vibrate-examples}

```javascript
// DOM 요소의 click 이벤트에 진동 트리거를 바인드 합니다.
document.getElementById('vibrateButton').addEventListener('click', function () {
  // 진동 호출
  Nachocode.vibration.vibrate();
});
```

---

### **`setHaptics(enable)`** {#set-haptics}

- _since :_ <BadgeWithVersion type="SDK" version="v1.1.0" link="/docs/releases/v1/sdk/release-v-1-1-0" />

#### 타입 정의 {#set-haptics-types}

```typescript
function setHaptics(enable: boolean): void;
```

#### 설명 {#set-haptics-summary}

앱 사용자의 햅틱 피드백 사용 여부를 설정합니다.  
**햅틱 피드백 사용 여부를 `false`로 설정할 경우 햅틱 피드백 트리거 메서드를 호출하여도 햅틱 피드백이 발생하지 않게됩니다.**

:::info **스토어 정책**
스토어 정책에서는 진동 기능을 사용할 경우, **앱 사용자가 직접 진동을 비활성화할 수 있는 옵션을 제공**하는 것을 권장하고 있습니다.
:::

#### 지원 플랫폼 {#set-haptics-supported-platforms}

`setHaptics` 메서드는 **Android, iOS 모든 App 환경을 지원**합니다.

| 플랫폼                                                             | 지원 여부 |
| ------------------------------------------------------------------ | --------- |
| ![Android](https://img.shields.io/badge/Android-gray?logo=android) | ✅        |
| ![iOS](https://img.shields.io/badge/iOS-gray?logo=apple)           | ✅        |
| ![Web](/img/docs/chrome-badge.svg)                                 | ❌        |

#### 매개변수 {#set-haptics-parameters}

| 이름     | 타입      | 필수 여부 | 설명                                                        |
| -------- | --------- | --------- | ----------------------------------------------------------- |
| `enable` | `boolean` | ✅        | 햅틱 피드백 사용 여부 (`true` = 사용, `false` = 사용 안 함) |

#### 반환 값 {#set-haptics-returns}

해당 메서드는 반환 값을 가지지 않습니다.

#### 사용 예제 {#set-haptics-examples}

```javascript
// 앱이 햅틱 피드백을 사용하도록 설정합니다.
Nachocode.vibration.setHaptics(true);
```

```javascript
// 사용자의 선택에 따라 햅틱 피드백 사용을 중지합니다.
Nachocode.vibration.setHaptics(false);

// 메서드를 호출해도 햅틱이 발생하지 않습니다.
Nachocode.vibration.haptics(); // 햅틱 피드백 ❌
```

```javascript
// ex. 햅틱 피드백 토글 UI 변경 시 호출 될 함수
function onHapticsToggleChange(enable) {
  Nachocode.vibration.setHaptics(enable);
}
```

---

### **`getHaptics(callback)`** {#get-haptics}

- _since :_ <BadgeWithVersion type="SDK" version="v1.1.0" link="/docs/releases/v1/sdk/release-v-1-1-0" />

#### 타입 정의 {#get-haptics-types}

```typescript
function getHaptics(callback: (enable: boolean) => void): void;
```

#### 설명 {#get-haptics-summary}

현재 앱 사용자의 **햅틱 피드백 사용 여부**를 반환합니다.  
콜백 함수로 `true` 또는 `false` 값을 전달받습니다.

#### 지원 플랫폼 {#get-haptics-supported-platforms}

`getHaptics` 메서드는 **Android, iOS 모든 App 환경을 지원**합니다.

| 플랫폼                                                             | 지원 여부 |
| ------------------------------------------------------------------ | --------- |
| ![Android](https://img.shields.io/badge/Android-gray?logo=android) | ✅        |
| ![iOS](https://img.shields.io/badge/iOS-gray?logo=apple)           | ✅        |
| ![Web](/img/docs/chrome-badge.svg)                                 | ❌        |

#### 매개변수 {#get-haptics-parameters}

| 이름       | 타입                        | 필수 여부 | 설명                       |
| ---------- | --------------------------- | --------- | -------------------------- |
| `callback` | `(enable: boolean) => void` | ✅        | 햅틱 피드백 사용 여부 반환 |

#### 반환 값 {#get-haptics-returns}

해당 메서드는 반환 값을 가지지 않으며, 결과는 `callback`을 통해 비동기적으로 제공됩니다.

#### 사용 예제 {#get-haptics-examples}

```javascript
// ex. Native Layer에서 햅틱 피드백 사용유무를 받아와 input의 checked 값을 변경합니다.
Nachocode.vibration.getHaptics(enable => {
  console.log(`햅틱 피드백 사용 여부: ${enable ? '사용 중' : '비활성화'}`);

  document.querySelector(`input[name="useHaptics"]`).checked = enable;
});
```

---

### **`haptics(hapticsType?)`** {#haptics}

- _since :_ <BadgeWithVersion type="SDK" version="v1.1.0" link="/docs/releases/v1/sdk/release-v-1-1-0" />
- _last updated :_ <BadgeWithVersion type="SDK" version="v1.8.0" link="/docs/releases/v1/sdk/release-v-1-8-0" /> - _햅틱 타입 변경_

#### 타입 정의 {#haptics-types}

```typescript
function haptics(hapticsType?: HapticsType): void;
```

#### 설명 {#haptics-summary}

햅틱 피드백을 트리거합니다.
`LIGHT = 0 | MEDIUM = 1 | HEAVY = 2` 중 하나를 선택할 수 있습니다.  
기본적으로 `LIGHT` 피드백을 사용하며, 선택적으로 다른 강도를 지정할 수 있습니다.

#### 지원 플랫폼 {#haptics-supported-platforms}

`haptics` 메서드는 **Android, iOS 모든 App 환경을 지원**합니다.

| 플랫폼                                                             | 지원 여부 |
| ------------------------------------------------------------------ | --------- |
| ![Android](https://img.shields.io/badge/Android-gray?logo=android) | ✅        |
| ![iOS](https://img.shields.io/badge/iOS-gray?logo=apple)           | ✅        |
| ![Web](/img/docs/chrome-badge.svg)                                 | ❌        |

#### 매개변수 {#haptics-parameters}

| 이름          | 타입                           | 필수 여부 | 설명                                            |
| ------------- | ------------------------------ | --------- | ----------------------------------------------- |
| `hapticsType` | [`HapticsType`](#haptics-type) | ❌        | 트리거할 햅틱 피드백 유형 (기본값: `0` - LIGHT) |

#### 사용 예제 {#haptics-examples}

```javascript
// 기본 햅틱 피드백 (LIGHT)
// DOM 요소의 touchstart 이벤트에 햅틱 피드백 트리거를 바인드 합니다.
document
  .getElementById('hapticsButton')
  .addEventListener('touchstart', function () {
    // 기본적으로 HapticsType.LIGHT(=0)를 옵션으로 가집니다.
    Nachocode.vibration.haptics();
  });

document
  .getElementById('hapticsButton2')
  .addEventListener('touchstart', function () {
    // 0은 HapticsType.LIGHT를 의미합니다.
    Nachocode.vibration.haptics(0);
  });
```

```javascript
// 중간 강도 햅틱 피드백 (MEDIUM)
document
  .getElementById('hapticsButton')
  .addEventListener('touchstart', function () {
    // 1은 HapticsType.MEDIUM을 의미합니다.
    Nachocode.vibration.haptics(1);
  });
```

```javascript
// 무거운 햅틱 피드백 (HEAVY)
document
  .getElementById('hapticsButton')
  .addEventListener('touchstart', function () {
    // 2는 HapticsType.HEAVY를 의미합니다.
    Nachocode.vibration.haptics(2);
  });
```

---

### **`hapticsImpact(hapticsType?)`** {#haptics-impact}

- ![iOS-Only](https://img.shields.io/badge/iOS_only-gray?logo=apple)
- _since :_ <BadgeWithVersion type="SDK" version="v1.8.0" link="/docs/releases/v1/sdk/release-v-1-8-0" />

#### 타입 정의 {#haptics-impact-types}

```typescript
function hapticsImpact(hapticsType?: HapticsImpactType): void;
```

#### 설명 {#haptics-impact-summary}

iOS 전용 **햅틱 Impact 피드백**을 트리거합니다.

물리적 Impact를 시뮬레이션하는 피드백으로, 충돌이나 무게감을 표현할 때 사용합니다.  
`LIGHT = 0 | MEDIUM = 1 | HEAVY = 2 | SOFT = 3 | RIGID = 4` 중 하나를 선택할 수 있습니다.

:::warning iOS 전용
이 메서드는 **iOS에서만 동작**합니다. Android에서는 동작하지 않습니다.
:::

#### 지원 플랫폼 {#haptics-impact-supported-platforms}

| 플랫폼                                                             | 지원 여부 |
| ------------------------------------------------------------------ | --------- |
| ![Android](https://img.shields.io/badge/Android-gray?logo=android) | ❌        |
| ![iOS](https://img.shields.io/badge/iOS-gray?logo=apple)           | ✅        |
| ![Web](/img/docs/chrome-badge.svg)                                 | ❌        |

#### 매개변수 {#haptics-impact-parameters}

| 이름          | 타입                                        | 필수 여부 | 설명                                            |
| ------------- | ------------------------------------------- | --------- | ----------------------------------------------- |
| `hapticsType` | [`HapticsImpactType`](#haptics-impact-type) | ❌        | 트리거할 햅틱 Impact 유형 (기본값: `0` - LIGHT) |

#### 반환 값 {#haptics-impact-returns}

해당 메서드는 반환 값을 가지지 않습니다.

#### 사용 예제 {#haptics-impact-examples}

##### 기본 Impact 피드백 (LIGHT) {#haptics-impact-example-light}

```javascript
// 가벼운 Impact 피드백 (기본값)
// iOS 10.0+ 디바이스에서만 지원됩니다.
document
  .getElementById('lightButton')
  .addEventListener('touchstart', function () {
    if (Nachocode.device.isIOS()) {
      Nachocode.vibration.hapticsImpact(); // 기본값 LIGHT
    }
  });
```

##### 강도별 Impact 피드백 {#haptics-impact-example-intensities}

```javascript
// 중간 강도 Impact 피드백
// iOS 10.0+ 디바이스에서만 지원됩니다.
document
  .getElementById('mediumButton')
  .addEventListener('touchstart', function () {
    if (Nachocode.device.isIOS()) {
      Nachocode.vibration.hapticsImpact(1); // MEDIUM
    }
  });

// 무거운 Impact 피드백
// iOS 10.0+ 디바이스에서만 지원됩니다.
document
  .getElementById('heavyButton')
  .addEventListener('touchstart', function () {
    if (Nachocode.device.isIOS()) {
      Nachocode.vibration.hapticsImpact(2); // HEAVY
    }
  });
```

##### 특수 Impact 피드백 {#haptics-impact-example-special}

```javascript
// 부드러운 Impact 피드백
// iOS 13.0+ 디바이스에서만 지원됩니다.
document
  .getElementById('softButton')
  .addEventListener('touchstart', function () {
    if (Nachocode.device.isIOS()) {
      Nachocode.vibration.hapticsImpact(3); // SOFT
    }
  });

// 견고한 Impact 피드백
// iOS 13.0+ 디바이스에서만 지원됩니다.
document
  .getElementById('rigidButton')
  .addEventListener('touchstart', function () {
    if (Nachocode.device.isIOS()) {
      Nachocode.vibration.hapticsImpact(4); // RIGID
    }
  });
```

---

### **`hapticsNotification(hapticsType?)`** {#haptics-notification}

- ![iOS-Only](https://img.shields.io/badge/iOS_only-gray?logo=apple)
- _since :_ <BadgeWithVersion type="SDK" version="v1.8.0" link="/docs/releases/v1/sdk/release-v-1-8-0" />

#### 타입 정의 {#haptics-notification-types}

```typescript
function hapticsNotification(hapticsType?: HapticsNotificationType): void;
```

#### 설명 {#haptics-notification-summary}

iOS 전용 **햅틱 Notification 피드백**을 트리거합니다.

작업의 성공, 경고, 실패를 알리는 피드백으로, 사용자에게 결과를 직관적으로 전달할 때 사용합니다.  
`SUCCESS = 0 | WARNING = 1 | ERROR = 2` 중 하나를 선택할 수 있습니다.

:::warning iOS 전용
이 메서드는 **iOS에서만 동작**합니다. Android에서는 동작하지 않습니다.
:::

#### 지원 플랫폼 {#haptics-notification-supported-platforms}

| 플랫폼                                                             | 지원 여부 |
| ------------------------------------------------------------------ | --------- |
| ![Android](https://img.shields.io/badge/Android-gray?logo=android) | ❌        |
| ![iOS](https://img.shields.io/badge/iOS-gray?logo=apple)           | ✅        |
| ![Web](/img/docs/chrome-badge.svg)                                 | ❌        |

#### 매개변수 {#haptics-notification-parameters}

| 이름          | 타입                                                    | 필수 여부 | 설명                                                    |
| ------------- | ------------------------------------------------------- | --------- | ------------------------------------------------------- |
| `hapticsType` | [`HapticsNotificationType`](#haptics-notification-type) | ❌        | 트리거할 햅틱 Notification 유형 (기본값: `0` - SUCCESS) |

#### 반환 값 {#haptics-notification-returns}

해당 메서드는 반환 값을 가지지 않습니다.

#### 사용 예제 {#haptics-notification-examples}

##### 성공 Notification {#haptics-notification-example-success}

```javascript
// 작업 성공 시 Notification 피드백
async function saveData() {
  try {
    await uploadData();

    if (Nachocode.device.isIOS()) {
      Nachocode.vibration.hapticsNotification(0); // SUCCESS
    }

    alert('저장되었습니다!');
  } catch (error) {
    console.error(error);
  }
}
```

##### 경고 Notification {#haptics-notification-example-warning}

```javascript
// 경고 상황에서 Notification 피드백
function validateForm() {
  const email = document.getElementById('email').value;

  if (!email.includes('@')) {
    if (Nachocode.device.isIOS()) {
      Nachocode.vibration.hapticsNotification(1); // WARNING
    }

    alert('올바른 이메일 형식이 아닙니다.');
    return false;
  }

  return true;
}
```

##### 오류 Notification {#haptics-notification-example-error}

```javascript
// 작업 실패 시 Notification 피드백
async function processPayment() {
  try {
    await submitPayment();
  } catch (error) {
    if (Nachocode.device.isIOS()) {
      Nachocode.vibration.hapticsNotification(2); // ERROR
    }

    alert('결제에 실패했습니다.');
  }
}
```

---

### **`hapticsSelection()`** {#haptics-selection}

- ![iOS-Only](https://img.shields.io/badge/iOS_only-gray?logo=apple)
- _since :_ <BadgeWithVersion type="SDK" version="v1.8.0" link="/docs/releases/v1/sdk/release-v-1-8-0" />

#### 타입 정의 {#haptics-selection-types}

```typescript
function hapticsSelection(): void;
```

#### 설명 {#haptics-selection-summary}

iOS 전용 **햅틱 Selection 피드백**을 트리거합니다.

선택 항목이 변경될 때 사용하는 가벼운 피드백으로, 피커(Picker), 스크롤 선택, 토글 스위치 등에 사용합니다.

:::warning iOS 전용
이 메서드는 **iOS에서만 동작**합니다. Android에서는 동작하지 않습니다.
:::

#### 지원 플랫폼 {#haptics-selection-supported-platforms}

| 플랫폼                                                             | 지원 여부 |
| ------------------------------------------------------------------ | --------- |
| ![Android](https://img.shields.io/badge/Android-gray?logo=android) | ❌        |
| ![iOS](https://img.shields.io/badge/iOS-gray?logo=apple)           | ✅        |
| ![Web](/img/docs/chrome-badge.svg)                                 | ❌        |

#### 반환 값 {#haptics-selection-returns}

해당 메서드는 반환 값을 가지지 않습니다.

#### 사용 예제 {#haptics-selection-examples}

##### 목록 선택 시 피드백 {#haptics-selection-example-list}

```javascript
// 목록 항목 선택 시 피드백
document.querySelectorAll('.list-item').forEach(item => {
  item.addEventListener('touchstart', function () {
    // 선택된 항목 표시
    document
      .querySelectorAll('.list-item')
      .forEach(i => i.classList.remove('selected'));
    this.classList.add('selected');

    // Selection 피드백
    if (Nachocode.device.isIOS()) {
      Nachocode.vibration.hapticsSelection();
    }
  });
});
```

##### 토글 스위치 변경 시 피드백 {#haptics-selection-example-toggle}

```javascript
// 토글 스위치 변경 시 피드백
document
  .getElementById('toggleSwitch')
  .addEventListener('change', function (e) {
    if (Nachocode.device.isIOS()) {
      Nachocode.vibration.hapticsSelection();
    }

    console.log('Toggle state:', e.target.checked);
  });
```

##### 스크롤 선택 시 피드백 {#haptics-selection-example-scroll}

```javascript
// 스크롤 가능한 피커에서 항목 변경 시 피드백
let currentIndex = 0;

function onScrollChange(newIndex) {
  if (newIndex !== currentIndex) {
    currentIndex = newIndex;

    if (Nachocode.device.isIOS()) {
      Nachocode.vibration.hapticsSelection();
    }
  }
}
```

---

### **`hapticsEffect(hapticsType?)`** {#haptics-effect}

- ![Android-Only](https://img.shields.io/badge/Android_only-gray?logo=android)
- _since :_ <BadgeWithVersion type="SDK" version="v1.8.0" link="/docs/releases/v1/sdk/release-v-1-8-0" />

#### 타입 정의 {#haptics-effect-types}

```typescript
function hapticsEffect(hapticsType?: HapticsEffectType): void;
```

#### 설명 {#haptics-effect-summary}

Android 전용 **햅틱 효과(VibrationEffect)를 트리거**합니다.

Android의 시스템 정의 햅틱 효과를 사용하여 클릭, 더블 클릭, 틱 등의 피드백을 제공합니다.  
`EFFECT_CLICK = 0 | EFFECT_DOUBLE_CLICK = 1 | EFFECT_TICK = 2 | EFFECT_HEAVY_CLICK = 5` 중 하나를 선택할 수 있습니다.

:::warning Android 전용
이 메서드는 **Android에서만 동작**합니다. iOS에서는 동작하지 않습니다.
:::

#### 지원 플랫폼 {#haptics-effect-supported-platforms}

| 플랫폼                                                             | 지원 여부 |
| ------------------------------------------------------------------ | --------- |
| ![Android](https://img.shields.io/badge/Android-gray?logo=android) | ✅        |
| ![iOS](https://img.shields.io/badge/iOS-gray?logo=apple)           | ❌        |
| ![Web](/img/docs/chrome-badge.svg)                                 | ❌        |

#### 매개변수 {#haptics-effect-parameters}

| 이름          | 타입                                        | 필수 여부 | 설명                                                 |
| ------------- | ------------------------------------------- | --------- | ---------------------------------------------------- |
| `hapticsType` | [`HapticsEffectType`](#haptics-effect-type) | ❌        | 트리거할 햅틱 효과 유형 (기본값: `0` - EFFECT_CLICK) |

#### 반환 값 {#haptics-effect-returns}

해당 메서드는 반환 값을 가지지 않습니다.

#### 사용 예제 {#haptics-effect-examples}

##### 클릭 효과 {#haptics-effect-example-click}

```javascript
// 기본 클릭 효과 (EFFECT_CLICK)
document
  .getElementById('clickButton')
  .addEventListener('touchstart', function () {
    if (Nachocode.device.isAndroid()) {
      Nachocode.vibration.hapticsEffect(); // 기본값 EFFECT_CLICK
    }
  });

// 또는 명시적으로 지정
document
  .getElementById('clickButton2')
  .addEventListener('touchstart', function () {
    if (Nachocode.device.isAndroid()) {
      Nachocode.vibration.hapticsEffect(0); // EFFECT_CLICK
    }
  });
```

##### 틱 효과 {#haptics-effect-example-tick}

```javascript
// 틱 효과 - 작은 단위 변경 시
document
  .getElementById('incrementButton')
  .addEventListener('click', function () {
    let count = parseInt(document.getElementById('counter').textContent);
    count++;
    document.getElementById('counter').textContent = count;

    if (Nachocode.device.isAndroid()) {
      Nachocode.vibration.hapticsEffect(2); // EFFECT_TICK
    }
  });
```

##### 무거운 클릭 효과 {#haptics-effect-example-heavy-click}

```javascript
// 무거운 클릭 효과 - 중요한 동작 시
document
  .getElementById('confirmButton')
  .addEventListener('touchstart', function () {
    if (Nachocode.device.isAndroid()) {
      Nachocode.vibration.hapticsEffect(5); // EFFECT_HEAVY_CLICK
    }

    // 중요한 작업 수행
    confirmAction();
  });
```

---
