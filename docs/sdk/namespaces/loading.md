---
description: nachocode SDK의 `loading` 네임스페이스는 네이티브 로딩 인디케이터를 제어하는 기능을 제공합니다.
keywords:
  [
    로딩 인디케이터,
    로딩 화면,
    로딩 제어,
    프로그레스 바,
    프로그레스 제어,
    loading indicator,
    loading screen,
    loading control,
    progress bar,
    progress control,
  ]
image: /img/docs/thumbnails/SDK/loading.svg
---

# 로딩 (`loading`)

import { BadgeWithVersion } from '@site/src/components/svg/badge-with-version';
import { ThumbnailImage } from '@site/src/components/common/image/thumbnail-image';

<ThumbnailImage src='/img/docs/thumbnails/SDK/loading.svg'/>

> 🚀 **추가된 버전 :** <BadgeWithVersion type="SDK" version="v1.8.0" link="/docs/releases/v1/sdk/release-v-1-8-0" />  
> 🔔 **최신화 일자:** 2025-10-29

## **개요** {#overview}

`loading` 네임스페이스는 **네이티브 로딩 인디케이터를 제어하는 기능**을 제공합니다.

웹 로드 중 표시되는 로딩 인디케이터 UI를 JavaScript에서 직접 제어할 수 있어, **앱 초기화 완료 후 로딩 화면을 숨기거나** 할 수 있습니다.

---

## **메서드 목록** {#method-list}

| 메서드                               | 설명                                 | 추가된 버전                                                                                   |
| ------------------------------------ | ------------------------------------ | --------------------------------------------------------------------------------------------- |
| [`hideIndicator()`](#hide-indicator) | 네이티브 로딩 인디케이터를 숨깁니다. | <BadgeWithVersion type="SDK" version="v1.8.0" link="/docs/releases/v1/sdk/release-v-1-8-0" /> |

---

## **메서드 상세** {#method-details}

### **`hideIndicator(): void`** {#hide-indicator}

- _since :_ <BadgeWithVersion type="SDK" version="v1.8.0" link="/docs/releases/v1/sdk/release-v-1-8-0" />

#### 설명 {#hide-indicator-summary}

:::warning 주의
[nachocode 대시보드](https://nachocode.io/?utm_source=docs&utm_medium=documentation&utm_campaign=devguide)의 [ **앱 설정** > **고급 앱 설정** > **공통 고급 설정** ]에서 **로딩 인디케이터** 활성화가 된 상태로 빌드된 앱에서 사용 가능한 메서드입니다.

![nachocode_dashboard_common_setting_loading_indicator](/img/docs/settings/nachocode_dashboard_common_setting_loading_indicator.png)
:::

네이티브 **로딩 인디케이터를 숨깁니다**.

웹 로드 중 표시되는 로딩 인디케이터 UI를 JavaScript에서 제어할 수 있습니다.

아직 모든 콘텐츠가 로드되지 않았더라도 **처음으로 상호작용 가능한 콘텐츠가 준비되었을 때** 이 메서드를 호출하여 좀 더 빨리 로딩 인디케이터를 숨길 수 있습니다.

:::tip 사용 시점
이 메서드는 다음과 같은 시점에 호출하는 것이 좋습니다.

- SDK 초기화 완료 후
- 필수 데이터 로딩 완료 후
- 첫 화면 렌더링 준비 완료 후

:::

#### 지원 플랫폼 {#hide-indicator-supported-platforms}

| 플랫폼                                                             | 지원 여부 |
| ------------------------------------------------------------------ | --------- |
| ![Android](https://img.shields.io/badge/Android-gray?logo=android) | ✅        |
| ![iOS](https://img.shields.io/badge/iOS-gray?logo=apple)           | ✅        |
| ![Web](/img/docs/chrome-badge.svg)                                 | ❌        |

#### 반환 값 {#hide-indicator-returns}

해당 메서드는 반환 값을 가지지 않습니다.

#### 사용 예제 {#hide-indicator-examples}

:::tip 적절한 타이밍

- 로딩 화면을 숨기기 전에 첫 화면이 렌더링되었는지 확인
- 너무 늦게 숨기면 사용자 대기 시간 증가
- 콘텐츠가 실제로 준비되었을 때 숨기는 것이 중요

:::

##### SDK 초기화 후 로딩 숨기기 {#hide-indicator-example-basic}

```javascript
// SDK 초기화 완료 후 로딩 인디케이터 숨기기
async function initializeApp() {
  try {
    // nachocode SDK 초기화
    await Nachocode.initAsync('your_api_key');

    // 앱 초기화 완료
    console.log('App initialized successfully');

    // 로딩 인디케이터 숨기기
    Nachocode.loading.hideIndicator();
  } catch (error) {
    console.error('Initialization failed:', error);
  }
}

initializeApp();
```

##### 필수 데이터 로딩 후 숨기기 {#hide-indicator-example-data-loading}

```javascript
// 필수 데이터 로딩 완료 후 로딩 인디케이터 숨기기
async function initializeApp() {
  // SDK 초기화
  await Nachocode.initAsync('your_api_key');

  // 사용자 데이터 로딩
  const userData = await fetchUserData();

  // 초기 콘텐츠 로딩
  await loadInitialContent();

  // 모든 준비 완료 후 로딩 화면 숨기기
  Nachocode.loading.hideIndicator();

  console.log('App is ready!');
}
```

---
