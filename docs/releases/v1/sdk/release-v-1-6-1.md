---
sidebar_label: 'ver.1.6.1 (25.06.20)'
description: nachocode Client SDK ver.1.6.1의 릴리즈노트입니다.
---

# Release: ver.1.6.1 (2025-06-20)

![sdk_detail](/img/docs/releases/release_note_sdk_detail.png)

> 🔔 **배포 일자:** 2025-06-20

이번 업데이트 **v1.6.1**에서는 **푸시 토픽 메서드 반환값 변경**, **clipboard 버그 수정**, **타입 명세 보완** 등의 개선이 포함되었습니다.

## 주요 변경 사항 (ver.1.6.1)

- **`push` 네임스페이스**의 `subscribePushTopic`, `unsubscribePushTopic` 메서드 **반환 방식 Promise로 변경**
- `clipboard.getText`의 **iOS 오동작 버그 수정**
- `Nachocode.d.ts` 내 타입 정의 소폭 개선 (주석, 명확성 향상 등)

---

### 1. 푸시 알림 토픽 메서드 반환값 변경 (`push` 네임스페이스)

- `subscribePushTopic(topic)`: `Promise<PushTopicResult>` 형태로 변경
- `unsubscribePushTopic(topic)`: `Promise<PushTopicResult>` 형태로 변경

➡️ [`push` 네임스페이스 문서](../../namespaces/push#subscribe-push-topic)에서 상세 내용을 확인할 수 있습니다.

#### 변경된 메서드 (`push`)

| 메서드                        | 기존 반환값     | 변경된 반환값              |
| ----------------------------- | --------------- | -------------------------- |
| `subscribePushTopic(topic)`   | `callback` 기반 | `Promise<PushTopicResult>` |
| `unsubscribePushTopic(topic)` | `callback` 기반 | `Promise<PushTopicResult>` |

#### 사용 예제

```javascript
// ✅ Promise 기반 구독
const result = await Nachocode.push.subscribePushTopic('event-news');
if (result.status === 'success') {
  console.log('토픽 구독 성공');
}
```

```javascript
// ✅ Promise 기반 구독 해지
Nachocode.push.unsubscribePushTopic('event-news').then(result => {
  if (result.status === 'success') {
    console.log('토픽 구독 해지 완료');
  }
});
```

---

### 2. 클립보드 복사 iOS 버그 수정 (`clipboard` 네임스페이스)

- iOS 앱에서 `clipboard.getText()`가 **정상적으로 동작하지 않던 문제**가 해결되었습니다.
- 이제 Android, iOS 모두에서 일관된 방식으로 텍스트 클립보드를 읽을 수 있습니다.

➡️ [`clipboard` 네임스페이스 문서](../../namespaces/clipboard)를 참고하세요.

---

### 3. `Nachocode.d.ts` 타입 명세 업데이트

- 각 네임스페이스 내 메서드 설명 주석, 반환 타입 명확성 등이 소폭 개선되었습니다.
- 예시: `GoogleResult`, `PushTopicResult` 등에 주석 보강 및 타입 정제

➡️ [`Nachocode.d.ts`](https://github.com/FlipperCorporation/nachocode-client-sdk-js/blob/main/releases/Nachocode.d.ts)에서 최신 정의를 확인하세요.

---

### 업데이트 방법

nachocode JavaScript Client SDK **ver.1.6.1**를 사용하려면 아래의 스크립트를 업데이트하십시오.

#### SDK CDN 주소

```html
<script src="https://cdn.nachocode.io/nachocode/client-sdk/@1.6.1/client-sdk.min.js"></script>
```
