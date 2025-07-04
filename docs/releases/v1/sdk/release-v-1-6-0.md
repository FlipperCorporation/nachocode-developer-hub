---
sidebar_label: 'ver.1.6.0 (25.06.12)'
description: nachocode Client SDK ver.1.6.0의 릴리즈노트입니다.
---

# Release: ver.1.6.0 (2025-06-12)

![sdk_detail](/img/docs/releases/release_note_sdk_detail.png)

> 🔔 **배포 일자:** 2025-06-12

이번 업데이트 **v1.6.0**에서는 **스토어 열기 및 리뷰 요청 기능** 추가, **푸시 알림 토픽 관리 기능** 추가, **공유 API 개선**이 포함되었습니다.

## 주요 변경 사항 (ver.1.6.0)

### 🚨 Deprecated 안내

- `share.openSharing(url: string)`의 단일 URL 매개변수 전달 방식은 아직 호환되지만 권장하지 않습니다.
- **새로운 `share.openSharing(shareData: { title, url, text })` 형태 사용**을 권장합니다.

---

### 추가되거나 개선된 기능 목록

- [스토어 관련 기능 추가](#1-스토어-관련-기능-추가-store-네임스페이스)
- [푸시 알림 토픽 관리 기능 추가](#2-푸시-알림-토픽-관리-기능-추가-push-네임스페이스)
- [공유 API 개선](#3-공유-api-개선-share-네임스페이스)

---

### 1. 스토어 관련 기능 추가 (`store` 네임스페이스)

- **앱스토어/플레이스토어 열기 기능**: `store.openStore(storeInfo)`
- **앱스토어 리뷰 페이지 열기 기능**: `store.openReviewInStore(storeInfo)`
- **네이티브 앱 환경 리뷰 팝업 호출**: `store.requestReview()`

➡️ [`store` 네임스페이스 문서](../../namespaces/store)에서 상세 정보를 확인할 수 있습니다.

#### 추가된 메서드 (`store`)

| 메서드                         | 설명                                                      |
| ------------------------------ | --------------------------------------------------------- |
| `openStore(storeInfo)`         | 플랫폼에 맞춰 앱스토어 또는 플레이스토어 열기             |
| `openReviewInStore(storeInfo)` | 플랫폼에 맞춰 리뷰 페이지 열기                            |
| `requestReview()`              | 네이티브 앱 환경에서 리뷰 요청 팝업 UI 호출 (iOS/Android) |

---

### 2. 푸시 알림 토픽 관리 기능 추가 (`push` 네임스페이스)

- **토픽 구독**: `push.subscribePushTopic(topic, callback)`
- **토픽 구독 취소**: `push.unsubscribePushTopic(topic, callback)`
- **구독 중인 토픽 목록 조회**: `push.getSubscriptionList(callback)`

➡️ [`push` 네임스페이스 문서](../../namespaces/push)에서 상세 정보를 확인할 수 있습니다.

#### 추가된 메서드 (`push`)

| 메서드                                   | 설명                            |
| ---------------------------------------- | ------------------------------- |
| `subscribePushTopic(topic, callback?)`   | 푸시 알림 토픽 구독             |
| `unsubscribePushTopic(topic, callback?)` | 푸시 알림 토픽 구독 취소        |
| `getSubscriptionList(callback)`          | 구독 중인 푸시 토픽 리스트 조회 |

---

### 3. 공유 API 개선 (`share` 네임스페이스)

- 기존의 단일 문자열 **`(url: string)`** 형태에서 **웹 공유 API와 동일한 형태**(`{ title, url, text }`)로 개선되었습니다.
- `title`, `url`, `text`를 조합해 공유할 수 있습니다.

➡️ [`share` 네임스페이스 문서](../../namespaces/share)에서 상세 정보를 확인할 수 있습니다.

#### 업데이트된 메서드 (`share`)

| 메서드                   | 설명                           |
| ------------------------ | ------------------------------ |
| `openSharing(shareData)` | 개선된 파라미터로 공유 UI 호출 |

#### 사용 예제 (공유 API 개선)

```javascript
// 단일 URL 공유 (기존 방식)
Nachocode.share.openSharing('https://developer.nachocode.io'); // ❌ Deprecated

// 개선된 형태로 공유
Nachocode.share.openSharing({
  title: '나쵸코드 최신 업데이트',
  url: 'https://developer.nachocode.io/docs/sdk/releases/v1/intro',
  text: '최신 SDK 업데이트 소식을 확인해보세요!',
}); // ✅ 권장 방식
```

---

### 업데이트 방법

nachocode JavaScript Client SDK **ver.1.6.0**를 사용하려면 아래의 스크립트를 업데이트하십시오.

#### SDK CDN 주소

```html
<script src="https://cdn.nachocode.io/nachocode/client-sdk/@1.6.0/client-sdk.min.js"></script>
```
