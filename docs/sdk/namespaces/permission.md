---
description: nachocode SDK의 permission 네임스페이스는 앱의 필수 권한(카메라, 위치, 마이크, 푸시 알림 등)의 허용 여부를 조회하고 사용자에게 권한을 요청하는 기능을 제공합니다.
keywords:
  [
    앱 카메라 권한,
    앱 위치 권한,
    앱 마이크 권한,
    앱 푸시 알림 권한,
    앱 푸시 권한,
    앱 권한 관리,
    app permission,
    Android permission,
    iOS permission,
  ]
image: /img/docs/thumbnails/SDK/permission.svg
---

# 권한 (`permission`)

import { BadgeWithVersion } from '@site/src/components/svg/badge-with-version';
import { ThumbnailImage } from '@site/src/components/common/image/thumbnail-image';

<ThumbnailImage src='/img/docs/thumbnails/SDK/permission.svg'/>

> 🚀 **추가된 버전 :** <BadgeWithVersion type="SDK" version="v1.2.0" link="/docs/releases/v1/sdk/release-v-1-2-0" /> <BadgeWithVersion type="Android" version="v1.2.0" link="/docs/releases/v1/app-source/android/release-v-1-2-0" /> <BadgeWithVersion type="iOS" version="v1.2.0" link="/docs/releases/v1/app-source/ios/release-v-1-2-0" />  
> 🛠️ **개선된 버전 :** <BadgeWithVersion type="Android" version="v1.9.1" link="/docs/releases/v1/app-source/android/release-v-1-9-1" /> <BadgeWithVersion type="iOS" version="v1.9.1" link="/docs/releases/v1/app-source/ios/release-v-1-9-1" />  
> 🔔 **최신화 일자:** 2026-01-18

## **개요** {#overview}

`permission` 네임스페이스는 **디바이스의 주요 권한(카메라, 위치, 마이크, 푸시 알림 등)의 상태를 확인하고 요청하는 기능**을 제공합니다.  
앱이 특정 권한을 필요로 할 경우, **해당 권한이 허용되었는지 확인하고, 필요 시 사용자에게 권한 요청을 수행**할 수 있습니다.

---

### **필수 선행 작업** {#prerequisite}

#### (선택사항) `microphone` 권한 사용 {#prerequisite-microphone}

[nachocode 대시보드](https://nachocode.io/?utm_source=docs&utm_medium=documentation&utm_campaign=devguide)의 [ **앱 빌드** > **안드로이드 앱** > **빌드** > **고급 기능** ]에서 [ **마이크** ] 토글을 활성화하여 앱 설정 완료

#### (선택사항) `location` 권한 사용 {#prerequisite-location}

[nachocode 대시보드](https://nachocode.io/?utm_source=docs&utm_medium=documentation&utm_campaign=devguide)의 [ **앱 빌드** > **안드로이드 앱** > **빌드** > **고급 기능** ]에서 [ **위치/지도** ] 토글을 활성화하여 앱 설정 완료

![nachocode_advanced_android_setting](/img/docs/android/nachocode_build_android_advanced.png)

<br/>

---

## **타입 정의** {#types}

### **`PermissionType`** {#permission-type}

nachocode SDK에서 지원하는 디바이스의 앱 권한 유형입니다.

```typescript
const PERMISSION_TYPES = {
  /**
   * Camera usage permission
   * @since 1.2.0
   */
  CAMERA: 'camera',
  /**
   * Location access permission
   * @since 1.2.0
   */
  LOCATION: 'location',
  /**
   * Microphone usage permission
   * @since 1.2.0
   */
  MICROPHONE: 'microphone',
  /**
   * Photo usage permission
   * @since 1.5.0
   */
  PHOTO: 'photo',
  /**
   * Push notification permission
   * @since 1.2.0
   */
  PUSH: 'push',
} as const;
```

| 값           | 설명                | 추가된 버전                                                                                   |
| ------------ | ------------------- | --------------------------------------------------------------------------------------------- |
| `camera`     | 카메라 사용 권한    | <BadgeWithVersion type="SDK" version="v1.2.0" link="/docs/releases/v1/sdk/release-v-1-2-0" /> |
| `location`   | 위치 정보 접근 권한 | <BadgeWithVersion type="SDK" version="v1.2.0" link="/docs/releases/v1/sdk/release-v-1-2-0" /> |
| `microphone` | 마이크 사용 권한    | <BadgeWithVersion type="SDK" version="v1.2.0" link="/docs/releases/v1/sdk/release-v-1-2-0" /> |
| `photo`      | 사진 사용 권한      | <BadgeWithVersion type="SDK" version="v1.5.0" link="/docs/releases/v1/sdk/release-v-1-5-0" /> |
| `push`       | 푸시 알림 권한      | <BadgeWithVersion type="SDK" version="v1.2.0" link="/docs/releases/v1/sdk/release-v-1-2-0" /> |

---

## **메서드 목록** {#method-list}

| 메서드                                                   | 설명                                                               | 추가된 버전                                                                                   |
| -------------------------------------------------------- | ------------------------------------------------------------------ | --------------------------------------------------------------------------------------------- |
| [`checkPermission(option, callback)`](#check-permission) | 특정 권한이 허용되었는지 확인하고, 필요 시 권한 요청을 수행합니다. | <BadgeWithVersion type="SDK" version="v1.2.0" link="/docs/releases/v1/sdk/release-v-1-2-0" /> |

---

## **메서드 상세** {#method-details}

### **`checkPermission(option: { type: PermissionType, ask?: boolean }, callback?: (granted: boolean) => void): void`** {#check-permission}

- _since :_ <BadgeWithVersion type="SDK" version="v1.2.0" link="/docs/releases/v1/sdk/release-v-1-2-0" />
- _updated :_ <BadgeWithVersion type="Android" version="v1.9.1" link="/docs/releases/v1/app-source/android/release-v-1-9-1" /> <BadgeWithVersion type="iOS" version="v1.9.1" link="/docs/releases/v1/app-source/ios/release-v-1-9-1" />

:::warning
_`microphone`과 `location` 권한은 [필수 선행 작업](#prerequisite)이 완료되어야 사용할 수 있습니다._
:::

#### 설명 {#check-permission-summary}

지정된 권한(`type`)이 **이미 허용되었는지 여부를 확인**합니다.  
콜백 함수의 매개 변수(`granted`)로 허용 여부를 전달합니다.

:::info 정보
**26년 01월 27일 배포된 앱소스 v.1.9.1 버전 이전과 이후의 동작이 다릅니다.**

- **이전** : `ask` 옵션이 `false`여도 최초 권한 요청이었다면 기본 OS 권한 요청 팝업이 노출되었습니다.
- **이후** : `ask` 옵션이 `false`일 경우 최초 여부와 상관 없이 기본 OS 권한 요청 팝업이 노출되지 않습니다.

:::

`ask` 옵션이 `true`일 경우, **사용자가 권한을 허용하지 않았다면 권한 요청 팝업을 표시**합니다.

#### 매개변수 {#check-permission-parameters}

| 이름       | 타입                                      | 필수 여부 | 설명                                                 |
| ---------- | ----------------------------------------- | --------- | ---------------------------------------------------- |
| `option`   | `{ type: PermissionType, ask?: boolean }` | ✅        | 확인할 권한 유형 및 권한 요청 여부 (`ask`) 포함 객체 |
| `callback` | `(granted: boolean) => void` _(optional)_ | ❌        | 권한이 허용되었는지 여부를 전달받는 콜백 함수        |

- `type`: 확인할 권한 유형 (`camera`, `location`, `microphone`, `photo`, `push`)
- `ask`: `true`인 경우, 권한이 허용되지 않았을 때 요청 팝업을 표시 (`default: false`)

#### 반환 값 {#check-permission-returns}

해당 메서드는 반환 값을 가지지 않으며, 결과는 `callback`을 통해 비동기적으로 제공됩니다.  
콜백 함수는 권한이 **허용되었을 경우 `true`**, **거부되었을 경우 `false`** 값을 전달받습니다.

#### 사용 예제 {#check-permission-examples}

```javascript
// ex. 푸시 알림 권한 허용 여부를 확인합니다.
// 권한이 허용되지 않은 경우, 자동으로 OS 팝업을 통해 권한을 요청합니다.
Nachocode.permission.checkPermission({ type: 'push', ask: true }, granted => {
  // 앱 유저의 권한 허용 여부가 매개 변수 granted에 전달 됩니다.
  if (granted) {
    alert('푸시 권한 허용됨.');
  } else {
    alert('푸시 권한 거부됨.');
  }
});
```

---

:::warning **주의 사항**

1. `ask` 옵션이 `false`일 경우, 사용자가 권한을 거부했더라도 팝업을 띄우지 않고 **현재 권한 상태만 반환**합니다.
2. `ask` 옵션이 `true`일 경우, 사용자가 이전에 "권한을 요청하지 않음"을 선택한 경우 **OS 팝업으로 다시 요청할 수 없습니다.**
3. nachocode 앱에서는 **OS 팝업으로 다시 요청할 수 없을 때**, 기본적으로 **권한 설정 페이지로 이동하도록** 구현이 되어있습니다.
4. 특정 OS 버전에서는 권한 요청이 거부되었을 때, 앱 유저가 **설정에서 직접 변경해야만 권한을 활성화할 수 있습니다.**

:::

---
