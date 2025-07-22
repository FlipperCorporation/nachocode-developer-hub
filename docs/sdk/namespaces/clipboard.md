---
description: nachocode SDK의 `clipboard` 네임스페이스는 디바이스의 네이티브 클립보드와 데이터를 쉽게 주고받을 수 있는 기능을 제공합니다.
keywords:
  [
    클립보드,
    네이티브 클립보드,
    웹뷰 클립보드,
    웹뷰 복사하기,
    웹뷰 붙여넣기,
    WebView copy,
    WebView paste,
    clipboard,
    native clipboard,
  ]
---

# 클립보드 (`clipboard`)

import { BadgeWithVersion } from '@site/src/components/svg/badge-with-version';

> 🚀 **추가된 버전 :** <BadgeWithVersion type="SDK" version="v1.4.0" link="/docs/releases/v1/sdk/release-v-1-4-0" /> <BadgeWithVersion type="Android" version="v1.4.0" link="/docs/releases/v1/app-source/android/release-v-1-4-0" /> <BadgeWithVersion type="iOS" version="v1.4.0" link="/docs/releases/v1/app-source/ios/release-v-1-4-0" />  
> 🔔 **최신화 일자:** 2025-07-22

## **개요** {#overview}

`clipboard` 네임스페이스는 **디바이스의 네이티브 클립보드에 텍스트를 복사하거나, 현재 저장된 텍스트를 가져오는 기능**을 제공합니다.

이 기능을 사용하여 **사용자 인터페이스와 클립보드 간에 데이터를 효율적으로 공유**할 수 있습니다.

:::warning _주의_
_일부 디바이스 또는 특정 OS 버전에서는 클립보드 접근이 제한될 수 있습니다._
:::

클립보드 기능은 [**SDK ver.1.6.3**](/docs/releases/v1/sdk/release-v-1-6-3)부터 **웹, Android, iOS 플랫폼 모두에서 사용 가능**합니다.

---

## **메서드 목록** {#method-list}

| 메서드                                  | 설명                                            | 추가된 버전                                                                                   | 수정된 버전                                                                                   |
| --------------------------------------- | ----------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| [`getText(callback)`](#get-text)        | 네이티브 클립보드에 저장된 텍스트를 반환합니다. | <BadgeWithVersion type="SDK" version="v1.4.0" link="/docs/releases/v1/sdk/release-v-1-4-0" /> | <BadgeWithVersion type="SDK" version="v1.6.3" link="/docs/releases/v1/sdk/release-v-1-6-3" /> |
| [`setText(text, callback?)`](#set-text) | 텍스트를 네이티브 클립보드에 저장합니다.        | <BadgeWithVersion type="SDK" version="v1.4.0" link="/docs/releases/v1/sdk/release-v-1-4-0" /> | <BadgeWithVersion type="SDK" version="v1.6.3" link="/docs/releases/v1/sdk/release-v-1-6-3" /> |

---

## **메서드 상세** {#method-details}

### **`getText(callback: (text: string) => void): void`** {#get-text}

- _since :_ <BadgeWithVersion type="SDK" version="v1.4.0" link="/docs/releases/v1/sdk/release-v-1-4-0" />
- _lastupdated :_ <BadgeWithVersion type="SDK" version="v1.6.3" link="/docs/releases/v1/sdk/release-v-1-6-3" />

#### 설명 {#get-text-summary}

디바이스의 **네이티브 클립보드에 저장된 텍스트**를 가져옵니다.  
해당 메서드는 **콜백 함수로 복사한 텍스트 값을 전달**합니다.

`getText` 메서드는 [**SDK ver.1.6.3**](/docs/releases/v1/sdk/release-v-1-6-3)부터 **웹, Android, iOS 플랫폼 모두에서 사용 가능**합니다.

:::tip 참고
[MDN - Clipboard: readText( ) method](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard/readText)
:::

#### 지원 플랫폼 {#get-text-supported-platforms}

`getText` 메서드는 **App과 Web 모든 환경을 지원**합니다.

| 플랫폼                                                             | 지원 여부 | 비고                    |
| ------------------------------------------------------------------ | --------- | ----------------------- |
| ![Android](https://img.shields.io/badge/Android-gray?logo=android) | ✅        | 네이티브 Clipboard 사용 |
| ![iOS](https://img.shields.io/badge/iOS-gray?logo=apple)           | ✅        | 네이티브 Clipboard 사용 |
| ![Web](/img/docs/chrome-badge.svg)                                 | ✅        | Web Clipboard API 사용  |

#### 매개변수 {#get-text-parameters}

| 이름       | 타입                     | 필수 여부 | 설명                               |
| ---------- | ------------------------ | --------- | ---------------------------------- |
| `callback` | `(text: string) => void` | ✅        | 클립보드에 저장된 텍스트 반환 함수 |

#### 반환 값 {#get-text-returns}

해당 메서드는 반환 값을 가지지 않으며, 텍스트는 `callback`을 통해 비동기적으로 제공됩니다.

#### 사용 예제 {#get-text-examples}

```javascript
// 네이티브 클립보드에서 텍스트를 가져옵니다.
Nachocode.clipboard.getText(text => {
  console.log('클립보드 내용:', text);
  alert(`클립보드에서 가져온 텍스트: ${text}`);
});
```

---

### **`setText(text: string, callback?: (status: 'success' | 'error', message: string) => void): void`** {#set-text}

- _since :_ <BadgeWithVersion type="SDK" version="v1.4.0" link="/docs/releases/v1/sdk/release-v-1-4-0" />
- _lastupdated :_ <BadgeWithVersion type="SDK" version="v1.6.3" link="/docs/releases/v1/sdk/release-v-1-6-3" />

#### 설명 {#set-text-summary}

입력된 **텍스트를 네이티브 클립보드에 저장**합니다.  
선택적으로 **콜백 함수**를 통해 복사 성공 여부와 메시지를 전달받을 수 있습니다.

`setText` 메서드는 [**SDK ver.1.6.3**](/docs/releases/v1/sdk/release-v-1-6-3)부터 **웹, Android, iOS 플랫폼 모두에서 사용 가능**합니다.

:::tip 참고
[MDN - Clipboard: writeText( ) method](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard/writeText)
:::

#### 지원 플랫폼 {#set-text-supported-platforms}

`setText` 메서드는 **App과 Web 모든 환경을 지원**합니다.

| 플랫폼                                                             | 지원 여부 | 비고                    |
| ------------------------------------------------------------------ | --------- | ----------------------- |
| ![Android](https://img.shields.io/badge/Android-gray?logo=android) | ✅        | 네이티브 Clipboard 사용 |
| ![iOS](https://img.shields.io/badge/iOS-gray?logo=apple)           | ✅        | 네이티브 Clipboard 사용 |
| ![Web](/img/docs/chrome-badge.svg)                                 | ✅        | Web Clipboard API 사용  |

#### 매개변수 {#set-text-parameters}

| 이름       | 타입                                                      | 필수 여부 | 설명                                |
| ---------- | --------------------------------------------------------- | --------- | ----------------------------------- |
| `text`     | `string`                                                  | ✅        | 클립보드에 저장할 텍스트            |
| `callback` | `(status: 'success' \| 'error', message: string) => void` | ❌        | 복사 결과 및 메시지를 반환하는 함수 |

- `status`: 복사 성공 여부 (`success` 또는 `error`)
- `message`: 복사 성공 또는 오류 메시지

#### 반환 값 {#set-text-returns}

해당 메서드는 반환 값을 가지지 않으며, 결과는 `callback`을 통해 비동기적으로 제공됩니다.

#### 사용 예제 {#set-text-examples}

```javascript
// 네이티브 클립보드에 텍스트를 저장합니다.
Nachocode.clipboard.setText('Hello nachocode!', (status, message) => {
  if (status === 'success') {
    console.log('클립보드에 텍스트가 성공적으로 복사되었습니다.');
  } else {
    console.error('클립보드에 복사 실패:', message);
  }
});
```

---
