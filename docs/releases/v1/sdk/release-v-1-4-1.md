---
sidebar_label: 'ver.1.4.1 (25.02.12)'
description: nachocode Client SDK ver.1.4.1의 릴리즈노트입니다.
---

# Release: ver.1.4.1 (2025-02-12)

![sdk_detail](/img/docs/releases/release_note_sdk_detail.png)

> 🔔 **배포 일자:** 2025-02-12

이번 업데이트에서는 **로컬 푸시 알림(Local Push Notification)** 기능이 추가되었습니다.

## 주요 변경 사항 (ver.1.4.1)

### 로컬 푸시 알림 기능 추가 (`push` 네임스페이스)

- 사용자가 특정 시간에 알림을 예약하여 보낼 수 있는 **로컬 푸시(Local Push)** 기능이 추가되었습니다.
- `sendLocalPush()` 메서드를 사용하여 즉시 또는 예약된 푸시 알림을 보낼 수 있습니다.
- `cancelLocalPush()` 메서드를 통해 예약된 알림을 취소할 수 있습니다.
- ➡️ [`push` 네임스페이스 문서](/docs/sdk/namespaces/push)에서 상세 정보를 확인할 수 있습니다.

#### 추가된 메서드

| 메서드                                             | 설명                                       |
| -------------------------------------------------- | ------------------------------------------ |
| `Nachocode.push.sendLocalPush(payload, callback?)` | 로컬 푸시 알림을 예약하거나 즉시 보냅니다. |
| `Nachocode.push.cancelLocalPush(id)`               | 예약된 로컬 푸시 알림을 취소합니다.        |

#### 사용 예제 (로컬 푸시 알림)

```javascript
// 로컬 푸시 예약
Nachocode.push.sendLocalPush(
  {
    title: '할인 이벤트!',
    content: '지금 바로 앱에서 확인하세요!',
    link: 'https://nachocode.io/pricing',
    usingAppIcon: true,
    scheduledTime: new Date('2025-02-15T10:30:00Z'), // 예약 발송
  },
  result => {
    if (result.status === 'success') {
      console.log(`푸시 알림이 등록되었습니다. ID: ${result.id}`);
    } else {
      console.error('푸시 알림 등록 실패:', result.message);
    }
  }
);
```

> **주의:**
>
> - `callback` 함수를 지정하지 않으면 예약된 푸시 알림을 취소할 수 없습니다.
> - `scheduledTime` 없이 `Nachocode.push.sendLocalPush()`를 호출하면 푸시 알림을 즉시 발송합니다.

```javascript
// 예약된 푸시 ID를 사용하여 취소
Nachocode.push.cancelLocalPush(1);
```

---

### 업데이트 방법

nachocode JavaScript Client SDK **ver.1.4.1**를 사용하려면 아래의 스크립트를 업데이트하십시오.

#### SDK CDN 주소

```html
<script src="https://cdn.nachocode.io/nachocode/client-sdk/@1.4.1/client-sdk.min.js"></script>
```
