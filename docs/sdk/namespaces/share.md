---
description: nachocode SDK의 share 네임스페이스는 네이티브 공유 UI로 콘텐츠 공유 기능을 손쉽게 제공합니다.
keywords:
  [
    웹뷰 네이티브 공유,
    웹뷰 공유하기,
    네이티브 공유,
    콘텐츠 공유,
    WebView native share,
    WebView share,
    native share,
    contents share,
    Web Share API,
  ]
image: /img/docs/thumbnails/SDK/share.svg
---

# 공유 (`share`)

import { BadgeWithVersion } from '@site/src/components/svg/badge-with-version';
import { ThumbnailImage } from '@site/src/components/common/image/thumbnail-image';

<ThumbnailImage src='/img/docs/thumbnails/SDK/share.svg'/>

> 🚀 **추가된 버전 :** <BadgeWithVersion type="SDK" version="v1.1.0" link="/docs/releases/v1/sdk/release-v-1-1-0" /> <BadgeWithVersion type="Android" version="v1.1.0" link="/docs/releases/v1/app-source/android/release-v-1-1-0" /> <BadgeWithVersion type="iOS" version="v1.1.0" link="/docs/releases/v1/app-source/ios/release-v-1-1-0" />  
> 🔔 **최신화 일자:** 2025-07-22

## **개요** {#overview}

`share` 네임스페이스는 **네이티브 공유 UI를 통해 콘텐츠를 공유하는 기능**을 제공합니다.

공유하기 기능은 **SDK ver.1.6.0**부터 **웹, Android, iOS 플랫폼 모두에서 사용 가능**합니다.

:::info **공지**  
카카오톡 공유 관련 기능은 **nachocode SDK v1.5.0**부터 `kakao` 네임스페이스로 이동되었습니다.  
따라서 `share.sendKakao`, `share.KakaoShareType` 등은 더 이상 사용을 권장하지 않습니다.  
➡️ [kakao 네임스페이스로 이동된 공유 기능 문서 보기](../integrations/kakao/reference#share)

:::

---

## **메서드 목록** {#method-list}

| 메서드                                    | 설명                                         | 추가된 버전                                                                                   | 변경된 버전                                                                                   |
| ----------------------------------------- | -------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| [`openSharing(shareData)`](#open-sharing) | 네이티브 공유 UI를 열어 콘텐츠를 공유합니다. | <BadgeWithVersion type="SDK" version="v1.1.0" link="/docs/releases/v1/sdk/release-v-1-1-0" /> | <BadgeWithVersion type="SDK" version="v1.6.0" link="/docs/releases/v1/sdk/release-v-1-6-0" /> |

---

## **메서드 상세** {#method-details}

### **`openSharing(shareData: { title?: string; url: string; text?: string } | { title?: string; url?: string; text: string }): void`** {#open-sharing}

- _since :_ <BadgeWithVersion type="SDK" version="v1.1.0" link="/docs/releases/v1/sdk/release-v-1-1-0" />
- _lastupdated :_ <BadgeWithVersion type="SDK" version="v1.6.0" link="/docs/releases/v1/sdk/release-v-1-6-0" />

#### 설명 {#open-sharing-summary}

공유할 데이터를 받아 **네이티브 공유 API**를 호출합니다.

네이티브 공유 UI는 **기본적으로 사용자의 디바이스에 설치된 공유 가능한 앱 목록**을 표시합니다.

**웹 공유 API와 동일한 구조**의 `{ title, url, text }` 형식을 지원합니다.  
공유하기 기능은 [**SDK ver.1.6.0**](/docs/releases/v1/sdk/release-v-1-6-0)부터 **웹, Android, iOS 플랫폼 모두에서 사용 가능**합니다.

:::tip 참고
[MDN - Navigator: share( ) method](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/share)
:::

#### 지원 플랫폼 {#open-sharing-supported-platforms}

`openSharing` 메서드는 **App과 Web 모든 환경을 지원**합니다.

| 플랫폼                                                             | 지원 여부 | 비고                     |
| ------------------------------------------------------------------ | --------- | ------------------------ |
| ![Android](https://img.shields.io/badge/Android-gray?logo=android) | ✅        | 네이티브 Share 사용      |
| ![iOS](https://img.shields.io/badge/iOS-gray?logo=apple)           | ✅        | Navigator share API 사용 |
| ![Web](/img/docs/chrome-badge.svg)                                 | ✅        | Navigator share API 사용 |

#### 매개변수 {#open-sharing-parameters}

:::warning **주의**

**nachocode SDK v1.6.0**부터는 **object 형식**(`title`, `url`, `text`를 조합)으로 매개변수가 변경되었으며,  
기존 단일 `url` 전달 방식은 _Deprecated_ 되었습니다.

`shareData`는 반드시 `url` 또는 `text` 중 **최소 1개 이상을 포함**해야 합니다.

:::

| 이름              | 타입     | 필수 여부 | 설명               |
| ----------------- | -------- | --------- | ------------------ |
| `shareData.title` | `string` | ❌        | 공유할 대상 제목   |
| `shareData.url`   | `string` | 조건부    | 공유할 대상 URL    |
| `shareData.text`  | `string` | 조건부    | 공유할 대상 텍스트 |

#### 반환 값 {#open-sharing-returns}

해당 메서드는 반환 값을 가지지 않습니다.

#### 사용 예제 {#open-sharing-examples}

```javascript
// URL 공유 - 공유할 URL을 지정하여 네이티브 공유 UI를 엽니다.
Nachocode.share.openSharing({
  url: 'https://developer.nachocode.io/docs/releases/v1/sdk/intro',
});
```

```javascript
// 텍스트 공유 - 공유할 텍스트를 지정하여 네이티브 공유 UI를 엽니다.
Nachocode.share.openSharing({
  text: '최신 SDK 업데이트 소식을 확인해보세요!',
});
```

```javascript
// `title`, `url`, `text` 전부 활용 예시
Nachocode.share.openSharing({
  title: '나쵸코드 최신 업데이트',
  url: 'https://developer.nachocode.io/docs/releases/v1/sdk/intro',
  text: '최신 SDK 업데이트 소식을 확인해보세요!',
});
```

---

### **추가 정보** {#share-additional-info}

- `share` 네임스페이스는 **일반 콘텐츠 공유(openSharing)** 전용으로 유지됩니다.
- **카카오톡 공유 기능은 앞으로 [`kakao`](/docs/sdk/integrations/kakao/reference) 네임스페이스를 통해 사용해야 합니다.**

---
