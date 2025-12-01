---
sidebar_label: 'ver.1.6.2 (25.07.09)'
description: nachocode Client SDK ver.1.6.2의 릴리즈노트입니다.
image: /img/docs/releases/release_note_sdk_detail.png
---

# Release: ver.1.6.2 (2025-07-09)

import { ThumbnailImage } from '@site/src/components/common/image/thumbnail-image';

<ThumbnailImage src='/img/docs/releases/release_note_sdk_detail.png'/>

> 🔔 **배포 일자:** 2025-07-09

이번 업데이트 **v1.6.2**에서는 **사용자 위치 요청 기능**이 새롭게 추가되었습니다.  
또한, 내부 타입 명세가 더욱 명확하게 정비되었습니다.

## 주요 변경 사항 (ver.1.6.2)

- **`location` 네임스페이스 추가**: 사용자의 현재 위치 요청 지원
- **`Nachocode.d.ts`에 위치 관련 타입 정의 추가**
- **`Nachocode.d.ts` 내 네이티브 소셜 기능 타입 정의 개선**

---

### 1. 현재 위치 요청 기능 추가 (`location` 네임스페이스)

- 새로운 `Nachocode.location.getCurrentPosition()` 메서드를 통해  
  사용자 위치를 요청할 수 있습니다.
- 위치 권한 요청은 자동으로 수행되며, 플랫폼 별 구현 방식은 다음과 같습니다.

| 플랫폼  | 구현 방식                |
| ------- | ------------------------ |
| Android | 네이티브 위치 API 사용   |
| iOS     | 네이티브 위치 API 사용   |
| Web     | Web Geolocation API 사용 |

➡️ [`location` 네임스페이스 문서](/docs/sdk/namespaces/location)에서 상세 내용을 확인할 수 있습니다.

#### 메서드 정보

| 메서드                 | 반환 타입                           |
| ---------------------- | ----------------------------------- |
| `getCurrentPosition()` | `Promise<GetCurrentPositionResult>` |

#### 사용 예제

```javascript
// Nachocode SDK를 통한 현재 위치 요청
const result = await Nachocode.location.getCurrentPosition();

if (result.status === 'success') {
  // 성공적으로 위치를 수신한 경우
  const { latitude, longitude } = result.data;
  console.log('현재 위치:', latitude, longitude);
  // 위치 정보를 활용한 로직 구현
} else {
  // 위치 요청 실패 시
  console.warn('⚠️ 위치 정보를 가져오지 못했습니다.');
  console.error('message:', result.message);
  console.error('errorCode:', result.errorCode);
}
```

---

### 2. `Nachocode.d.ts` 타입 명세 개선

#### `location` 네임스페이스

- `location` 네임스페이스 추가와 함께 다음 타입이 새롭게 정의되었습니다.

  - `LocationPosition`
  - `GetCurrentPositionSuccessResult`
  - `GetCurrentPositionErrorResult`
  - `GetCurrentPositionResult`

- 위치 요청 결과는 `success` 또는 `error`로 구분되며,
  각각의 상황에 맞는 필드를 제공합니다.

#### 네이티브 소셜 로그인

- 네이티브 소셜로그인 일부 기능의 타입 및 사용성이 소폭 개선되었습니다.

  - `Nachocode.google.logout`
  - `Nachocode.kakao.logout`
  - `Nachocode.kakao.unlink`

- 로그아웃 시, 더이상 콜백 함수를 필수로 요구하지 않습니다.

➡️ [`Nachocode.d.ts`](https://github.com/FlipperCorporation/nachocode-client-sdk-js/blob/main/releases/Nachocode.d.ts)에서 최신 정의를 확인하세요.

---

### 업데이트 방법

nachocode JavaScript Client SDK **ver.1.6.2**를 사용하려면 아래의 스크립트를 업데이트하십시오.

#### SDK CDN 주소

```html
<script src="https://cdn.nachocode.io/nachocode/client-sdk/@1.6.2/client-sdk.min.js"></script>
```
