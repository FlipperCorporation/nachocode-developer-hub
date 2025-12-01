---
description: nachocode SDK의 setting 네임스페이스로 OS 설정 화면 접근, Pull to Refresh 기능 설정, 화면 확대(Zoom) 지원 활성화 등 앱의 사용자 환경을 효율적으로 제어하세요.
keywords:
  [
    당겨서 새로고침,
    앱 당겨서 새로고침,
    앱 줌 설정 제어,
    앱 설정 열기,
    앱 설정 제어,
    Pull to Refresh,
    WebView Zoom Support,
    Open app settings,
    Control app settings,
  ]
image: /img/docs/thumbnails/SDK/setting.svg
---

# 설정 (`setting`)

import { BadgeWithVersion } from '@site/src/components/svg/badge-with-version';
import { ThumbnailImage } from '@site/src/components/common/image/thumbnail-image';

<ThumbnailImage src='/img/docs/thumbnails/SDK/setting.svg'/>

> 🚀 **추가된 버전 :** <BadgeWithVersion type="SDK" version="v1.4.0" link="/docs/releases/v1/sdk/release-v-1-4-0" /> <BadgeWithVersion type="Android" version="v1.4.0" link="/docs/releases/v1/app-source/android/release-v-1-4-0" /> <BadgeWithVersion type="iOS" version="v1.4.0" link="/docs/releases/v1/app-source/ios/release-v-1-4-0" />  
> 🔔 **최신화 일자:** 2025-07-18

## **개요** {#overview}

`setting` 네임스페이스는 **앱의 주요 설정 기능을 제어**하는 기능을 제공합니다.

이 네임스페이스에서는 **OS 설정 화면을 열거나**, **당겨서 새로고침(`Pull to Refresh`)** 및  
**화면 확대 지원(`Zoom Support`)** 과 같은 기능을 활성화하거나 비활성화할 수 있습니다.

:::info
`setting` 네임스페이스는 **v1.4.0**에서 추가되었으며, **기존 `refresh` 네임스페이스의 일부 기능**이 이동되었습니다.
:::

---

## **메서드 목록** {#method-list}

| 메서드                                             | 설명                                               | 추가된 버전                                                                                   |
| -------------------------------------------------- | -------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| [`openSetting()`](#open-setting)                   | OS 앱 설정 화면으로 이동합니다.                    | <BadgeWithVersion type="SDK" version="v1.4.2" link="/docs/releases/v1/sdk/release-v-1-4-2" /> |
| [`setPullToRefresh(enable)`](#set-pull-to-refresh) | 당겨서 새로고침 기능을 활성화 또는 비활성화합니다. | <BadgeWithVersion type="SDK" version="v1.4.0" link="/docs/releases/v1/sdk/release-v-1-4-0" /> |
| [`setSupportZoom(enable)`](#set-support-zoom)      | 화면 확대 기능을 활성화 또는 비활성화합니다.       | <BadgeWithVersion type="SDK" version="v1.4.0" link="/docs/releases/v1/sdk/release-v-1-4-0" /> |

---

## **메서드 상세** {#method-details}

### **`openSetting(): void`** {#open-setting}

- _since :_ <BadgeWithVersion type="SDK" version="v1.4.2" link="/docs/releases/v1/sdk/release-v-1-4-2" />

#### 설명 {#open-setting-summary}

OS 앱 설정 화면을 엽니다.  
이 메서드를 호출하면 **앱의 설정 화면**이 열리며, 사용자는 **푸시 알림 설정, 위치 권한, 네트워크 설정** 등 다양한 옵션을 변경할 수 있습니다.

:::tip 언제 활용할 수 있나요?
앱에서 직접 접근할 수 없는 설정을 변경해야 할 때 **OS 설정 화면을 열어 사용자에게 안내**할 수 있습니다.
:::

#### 반환 값 {#open-setting-returns}

해당 메서드는 반환 값을 가지지 않습니다.

#### 사용 예제 {#open-setting-examples}

```javascript
// OS 앱 설정 화면 열기
Nachocode.setting.openSetting();
```

---

### **`setPullToRefresh(enable: boolean): void`** {#set-pull-to-refresh}

- _since :_ <BadgeWithVersion type="SDK" version="v1.4.0" link="/docs/releases/v1/sdk/release-v-1-4-0" />

#### 설명 {#set-pull-to-refresh-summary}

사용자의 편의를 위해 **화면을 아래로 당겨 새로고침하는 제스처**(`Pull to Refresh`)를 허용하거나 제한합니다.  
기존에 `refresh` 네임스페이스의 `setPullToRefresh()` 메서드가 이곳으로 이동되었습니다.

:::warning 주의
현재 안드로이드 앱에서 **Pull-To-Refresh** 기능을 활성화 할 경우,  
**메인 스크롤이 최상단에 있을 때 내부 요소의 스크롤을 내리면 Pull-To-Refresh가 일어나는 현상**이 있습니다.  
추 후, nachocode의 업데이트 패치 전까지 사용에 유의하시길 바랍니다.
:::

:::info 참고
이 기능은 **SDK v1.4.0**부터 기존 `refresh` 네임스페이스에서 `setting` 네임스페이스로 통합되었으며,  
`refresh` 네임스페이스는 더 이상 사용되지 않습니다.
:::

#### 매개변수 {#set-pull-to-refresh-parameters}

| 이름     | 타입      | 필수 여부 | 설명                                |
| -------- | --------- | --------- | ----------------------------------- |
| `enable` | `boolean` | ✅        | `true` - 활성화, `false` - 비활성화 |

#### 반환 값 {#set-pull-to-refresh-returns}

해당 메서드는 반환 값을 가지지 않습니다.

#### 사용 예제 {#set-pull-to-refresh-examples}

```javascript
// 당겨서 새로고침 기능 활성화
Nachocode.setting.setPullToRefresh(true);

// 당겨서 새로고침 기능 비활성화
Nachocode.setting.setPullToRefresh(false);
```

---

### **`setSupportZoom(enable: boolean): void`** {#set-support-zoom}

- _since :_ <BadgeWithVersion type="SDK" version="v1.4.0" link="/docs/releases/v1/sdk/release-v-1-4-0" />

#### 설명 {#set-support-zoom-summary}

앱 화면에서 **화면 확대(Zoom) 기능 지원 여부**를 설정합니다.  
이 메서드를 사용하여 사용자가 **두 손가락으로 화면을 확대할 수 있도록 허용하거나 제한**할 수 있습니다.

:::tip 언제 활용하는 것이 좋나요?
**문서 및 콘텐츠의 세부 정보를 확대**할 필요가 있는 페이지에서는 이 기능을 활성화하는 것이 좋습니다.
:::

#### 매개변수 {#set-support-zoom-parameters}

| 이름     | 타입      | 필수 여부 | 설명                                                    |
| -------- | --------- | --------- | ------------------------------------------------------- |
| `enable` | `boolean` | ✅        | `true` - 확대 기능 활성화, `false` - 확대 기능 비활성화 |

#### 반환 값 {#set-support-zoom-returns}

해당 메서드는 반환 값을 가지지 않습니다.

#### 사용 예제 {#set-support-zoom-examples}

```javascript
// 화면 확대 기능 활성화
Nachocode.setting.setSupportZoom(true);

// 화면 확대 기능 비활성화
Nachocode.setting.setSupportZoom(false);
```
