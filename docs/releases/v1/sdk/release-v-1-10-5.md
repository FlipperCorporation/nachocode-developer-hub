---
sidebar_label: 'ver.1.10.5 (26.06.26)'
description: nachocode Client SDK ver.1.10.5의 릴리즈노트입니다.
image: /img/docs/releases/release_note_sdk_detail.png
---

# Release: ver.1.10.5 (2026-06-26)

import { ThumbnailImage } from '@site/src/components/common/image/thumbnail-image';

<ThumbnailImage src='/img/docs/releases/release_note_sdk_detail.png'/>

> 🔔 **배포 일자:** 2026-06-26

이번 업데이트 **v1.10.5**에서는 **Android 디바이스에서 Safe Area Insets 조회 기능**이 추가되었습니다.

기존에 iOS에서만 지원되던 [`getSafeAreaInsets()`](/docs/sdk/namespaces/device#get-safe-area-insets) 메서드가
**Android 디바이스에서도 정상 동작**하도록 확장되어, 양 플랫폼에서 일관된 방식으로 디바이스의 안전 영역 정보를 조회할 수 있습니다.

## 주요 변경 사항 (ver.1.10.5)

### 개선 사항 {#improvements}

#### `device` 네임스페이스 - Android Safe Area Insets 지원

기존에 iOS에서만 지원되던 Safe Area Insets 조회 기능이 **Android 디바이스에서도 지원**됩니다.

- **업데이트된 메서드**

  | 메서드                                                                    | 설명                                                 |
  | ------------------------------------------------------------------------- | ---------------------------------------------------- |
  | [`getSafeAreaInsets()`](/docs/sdk/namespaces/device#get-safe-area-insets) | 디바이스의 안전 영역 크기를 반환 (Android 지원 추가) |

- **타입 정의**

  ```typescript
  /**
   * Asynchronously calculates the safe area insets of the device from native layer.
   * @example
   * const safeArea = await Nachocode.device.getSafeAreaInsets();
   * if (!safeArea.isError) {
   *   console.log(`Top: ${safeArea.top}`);
   *   console.log(`Bottom: ${safeArea.bottom}`);
   *   console.log(`Left: ${safeArea.left}`);
   *   console.log(`Right: ${safeArea.right}`);
   * } else {
   *   console.error(`Error retrieving safe area: ${safeArea.errorMessage}`);
   * }
   * @since 1.8.0
   * @lastupdated 1.10.5 - Android safe area insets calculation added
   */
  function getSafeAreaInsets(): Promise<GetSafeAreaInsetsResult>;
  ```

- **지원 플랫폼**

  | 플랫폼                                                             | 지원 여부 | 비고          |
  | ------------------------------------------------------------------ | --------- | ------------- |
  | ![Android](https://img.shields.io/badge/Android-gray?logo=android) | ✅        | 정상 동작     |
  | ![iOS](https://img.shields.io/badge/iOS-gray?logo=apple)           | ✅        | 정상 동작     |
  | ![Web](/img/docs/chrome-badge.svg)                                 | ❌        | 지원하지 않음 |

- **사용 예제**

  ```javascript
  // Android 및 iOS 모두에서 Safe Area Insets 조회
  const safeAreaInsets = await Nachocode.device.getSafeAreaInsets();

  if (!safeAreaInsets.isError) {
    console.log(`Top: ${safeAreaInsets.top}pt`);
    console.log(`Bottom: ${safeAreaInsets.bottom}pt`);
    console.log(`Left: ${safeAreaInsets.left}pt`);
    console.log(`Right: ${safeAreaInsets.right}pt`);
  } else {
    console.error(`Safe Area Insets 조회 실패: ${safeAreaInsets.errorMessage}`);
  }
  ```

  ```javascript
  // 플랫폼 상관없이 Safe Area 적용
  async function applySafeAreaToLayout() {
    if (Nachocode.env.isApp()) {
      const safeAreaInsets = await Nachocode.device.getSafeAreaInsets();

      if (!safeAreaInsets.isError) {
        const root = document.documentElement;
        root.style.setProperty(
          '--safe-area-inset-top',
          `${safeAreaInsets.top}pt`
        );
        root.style.setProperty(
          '--safe-area-inset-bottom',
          `${safeAreaInsets.bottom}pt`
        );
        root.style.setProperty(
          '--safe-area-inset-left',
          `${safeAreaInsets.left}pt`
        );
        root.style.setProperty(
          '--safe-area-inset-right',
          `${safeAreaInsets.right}pt`
        );
      }
    }
  }
  ```

:::info Android와 iOS에서의 Safe Area

- **iOS**: 노치, 다이나믹 아일랜드, 홈 인디케이터 등으로 인한 안전 영역
- **Android**: 시스템 바, 노치, 펀치홀 등으로 인한 안전 영역
  :::

---

### 업데이트 방법

nachocode JavaScript Client SDK **ver.1.10.5**를 사용하려면 아래의 스크립트를 업데이트하십시오.

#### SDK CDN 주소

```html
<script src="https://cdn.nachocode.io/nachocode/client-sdk/@1.10.5/client-sdk.min.js"></script>
```

:::tip 문의하기
nachocode는 지속적으로 사용자의 개발 경험 향상을 위해 최선을 다하겠습니다.  
추가적인 요청이나 문의사항은 언제든지 지원팀에게 [이메일](mailto:support@nachocode.io)을 보내주세요.
감사합니다.
:::
