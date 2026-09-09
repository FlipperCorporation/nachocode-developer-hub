---
sidebar_label: 'ver.1.0.2 (24.04.09)'
description: nachocode Client SDK ver.1.0.2의 릴리즈노트입니다.
keywords:
  [
    SDK 릴리즈노트,
    nachocode Client SDK,
    Client SDK 업데이트,
    SDK 변경 사항,
    SDK Release Note,
    ver.1.0.2,
    v1.0.2,
    SDK 초기화 완료 이벤트 추가,
  ]
image: /img/docs/releases/release_note_sdk_detail.png
---

# Release: ver.1.0.2 (2024-04-09)

import { ThumbnailImage } from '@site/src/components/common/image/thumbnail-image';

<ThumbnailImage src='/img/docs/releases/release_note_sdk_detail.png'/>

> 🔔 **배포 일자:** 2024-04-09

nachocode Client SDK **v1.0.2**에서는 **SDK 초기화 완료 이벤트** 감지 기능이 추가되었습니다.

## 주요 변경 사항 (ver.1.0.2)

### 추가된 기능 목록

- [SDK 초기화 완료 이벤트 추가](#1-sdk-초기화-완료-이벤트-추가-event-네임스페이스)

---

### 1. SDK 초기화 완료 이벤트 추가 (`event` 네임스페이스)

- SDK가 초기화 완료되었을 때 `init` 이벤트를 수신할 수 있는 기능이 추가되었습니다.
- `Nachocode.event.on('init', callback)` 형태로 사용합니다.

➡️ [`event` 네임스페이스 문서 확인하기](/docs/sdk/namespaces/event)

#### 추가된 메서드 (`event`)

| 메서드                    | 설명                                 |
| ------------------------- | ------------------------------------ |
| `on(eventName, callback)` | 지정한 이벤트명에 콜백을 등록합니다. |

#### 추가된 이벤트 타입 (`event`)

| 이벤트명 | 설명                                   |
| -------- | -------------------------------------- |
| `init`   | SDK가 초기화 완료되었을 때 호출됩니다. |

#### 사용 예제 (`event`)

```javascript
Nachocode.event.on('init', () => {
  console.log('Nachocode SDK 초기화 완료');
});

// 초기화 호출
Nachocode.init('your_api_key_here', { logger: true });
```

---

### 업데이트 방법

nachocode JavaScript Client SDK **ver.1.0.2**를 사용하려면 아래의 스크립트를 업데이트하십시오.

#### SDK CDN 주소

```html
<script src="https://cdn.nachocode.io/nachocode/client-sdk/@1.0.2/client-sdk.min.js"></script>
```
