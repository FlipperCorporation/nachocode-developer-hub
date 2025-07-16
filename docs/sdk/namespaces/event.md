---
description: nachocode SDK의 `event` 네임스페이스는 SDK 초기화, 앱 활성화 상태 변경, 네트워크 변화 등의 다양한 이벤트를 처리할 수 있도록 지원합니다.
keywords:
  [
    앱 상태 전환 감지,
    앱 키보드 감지,
    웹뷰 키보드 감지,
    앱 네트워크 상태 변경 감지,
    앱 활성화 감지,
    앱 백그라운드로 전환,
    app foreground,
    app background,
    app keyboard,
    app network change,
    WebView keyboard detect,
  ]
---

# 이벤트 (`event`)

import { BadgeWithVersion } from '@site/src/components/svg/badge-with-version';

> 🚀 **추가된 버전 :** <BadgeWithVersion type="SDK" version="v1.0.2" link="/docs/releases/v1/sdk/release-v-1-0-2" /> <BadgeWithVersion type="Android" version="v1.0.0" link="/docs/releases/v1/app-source/android/release-v-1-0-0" /> <BadgeWithVersion type="iOS" version="v1.0.0" link="/docs/releases/v1/app-source/ios/release-v-1-0-0" />  
> 🔔 **최신화 일자:** 2025-07-16

## **개요** {#overview}

`event` 네임스페이스는 **nachocode SDK의 이벤트 핸들링 기능**을 제공합니다.

- **SDK가 초기화**(`init`)될 때
- 앱이 **백그라운드로 전환**(`background`)될 때
- 앱이 **다시 활성화**(`foreground`)될 때
- **네트워크 상태가 변경**(`networkchanged`)될 때
- **키보드가 열리고**(`keyboardshown`) **닫힐 때**(`keyboardhidden`)

이벤트를 감지하고 이를 처리할 수 있습니다.

---

## **타입 정의** {#types}

### **`EventType`** {#event-type}

nachocode SDK에서 기본적으로 제공하는 예약된 이벤트 타입입니다.

```typescript
export declare const EVENT_TYPES = {
  INIT: 'init',
  BACKGROUND: 'background',
  FOREGROUND: 'foreground',
  NETWORK_CHANGED: 'networkchanged',
  KEYBOARD_SHOWN: 'keyboardshown',
  KEYBOARD_HIDDEN: 'keyboardhidden',
} as const;
```

```typescript
export declare type EventType = (typeof EVENT_TYPES)[keyof typeof EVENT_TYPES];
```

| 이벤트 타입      | 설명                                                               | 추가된 버전                                                                                   |
| ---------------- | ------------------------------------------------------------------ | --------------------------------------------------------------------------------------------- |
| `init`           | SDK가 초기화될 때 호출되는 이벤트                                  | <BadgeWithVersion type="SDK" version="v1.0.2" link="/docs/releases/v1/sdk/release-v-1-0-2" /> |
| `background`     | 앱이 백그라운드로 전환될 때 호출되는 이벤트                        | <BadgeWithVersion type="SDK" version="v1.2.0" link="/docs/releases/v1/sdk/release-v-1-2-0" /> |
| `foreground`     | 앱이 다시 활성화될 때 호출되는 이벤트                              | <BadgeWithVersion type="SDK" version="v1.2.0" link="/docs/releases/v1/sdk/release-v-1-2-0" /> |
| `networkchanged` | 네트워크 상태(연결 여부, 연결 방식 등)가 변경될 때 호출되는 이벤트 | <BadgeWithVersion type="SDK" version="v1.4.0" link="/docs/releases/v1/sdk/release-v-1-4-0" /> |
| `keyboardshown`  | 네이티브 키보드가 화면에 표시될 때 호출되는 이벤트                 | <BadgeWithVersion type="SDK" version="v1.4.2" link="/docs/releases/v1/sdk/release-v-1-4-2" /> |
| `keyboardhidden` | 네이티브 키보드가 화면에서 사라질 때 호출되는 이벤트               | <BadgeWithVersion type="SDK" version="v1.4.2" link="/docs/releases/v1/sdk/release-v-1-4-2" /> |

---

## **메서드 목록** {#method-list}

| 메서드                           | 설명                                             | 추가된 버전                                                                                   |
| -------------------------------- | ------------------------------------------------ | --------------------------------------------------------------------------------------------- |
| [`on(eventName, callback)`](#on) | 특정 이벤트를 감지하고 실행할 함수를 등록합니다. | <BadgeWithVersion type="SDK" version="v1.0.2" link="/docs/releases/v1/sdk/release-v-1-0-2" /> |
| [`off(eventName)`](#off)         | 특정 이벤트 리스너를 해제합니다.                 | <BadgeWithVersion type="SDK" version="v1.0.3" link="/docs/releases/v1/sdk/release-v-1-0-3" /> |

---

## **메서드 상세** {#method-details}

### **`on(eventName: EventType, callback: (params?: any) => void): void`** {#on}

- _since :_ <BadgeWithVersion type="SDK" version="v1.0.2" link="/docs/releases/v1/sdk/release-v-1-0-2" />

#### 설명 {#on-summary}

지정된 `eventName` 이벤트가 발생했을 때 실행할 **콜백 함수**를 등록합니다.

#### 매개변수 {#on-parameters}

| 이름        | 타입                       | 필수 여부 | 설명                       |
| ----------- | -------------------------- | --------- | -------------------------- |
| `eventName` | [`EventType`](#event-type) | ✅        | 등록할 이벤트 유형         |
| `callback`  | `(params?: any) => void`   | ✅        | 이벤트 발생 시 실행될 함수 |

#### 반환 값 {#on-returns}

해당 메서드는 반환 값을 가지지 않으며, 이벤트가 발생할 때마다 등록된 `callback`이 실행됩니다.

#### 사용 예제 {#on-examples}

```javascript
// SDK 초기화 완료 이벤트 리스너를 등록 합니다.
Nachocode.event.on('init', () => {
  // SDK 초기화가 완료 되었을 때 동작할 로직을 작성합니다.
  if (Nachocode.env.isApp()) {
    // Android, iOS 앱에서만 동작해야하고
    // 웹에서는 동작하면 안되는 로직을 작성합니다.
    // ex) 푸시 토큰 등록, 생체 인증 등
    if (Nachocode.device.isIOS()) {
      // iOS 앱에서만 동작할 로직을 작성합니다.
      // ex) 소셜 로그인 숨기기 등
    }
  }
});

// nachocode SDK를 초기화 합니다.
Nachocode.init('your_api_key_here');
```

```javascript
// 앱이 백그라운드로 전환될 때 동작할 이벤트를 등록합니다.
Nachocode.event.on('background', () => {
  // 앱이 백그라운드로 전환될 때 동작할 로직을 작성합니다.
  // ex) 유저 이탈 시점 기록하기 등
});
```

```javascript
// 앱이 백그라운드에서 다시 포그라운드로 전환될 때 동작할 이벤트를 등록합니다.
Nachocode.event.on('foreground', () => {
  // 앱이 포그라운드로 전환될 때 동작할 로직을 작성합니다.
  // ex) 페이지 새로고침, 데이터 불러오기 등
});
```

```javascript
// 네트워크 변경 감지 이벤트 리스너 등록
Nachocode.event.on('networkchanged', status => {
  if (status.isConnected) {
    console.log('인터넷 연결 복구');
    // 인터넷이 연결되었을 때 실행시킬 코드를 작성합니다.
    // ex) 재전송 기능 구현
  } else {
    console.warn('인터넷 연결 끊김');
    // 인터넷 연결이 끊어졌을 때 실행시킬 코드를 작성합니다.
    // ex) 사용자에게 오프라인 UI 띄우기 등
  }
  console.log(`연결 유형: ${status.connectionType}`);
});
```

```javascript
// 네이티브 키보드가 화면에 나타날 때 실행되는 이벤트
Nachocode.event.on('keyboardshown', () => {
  console.log('키보드가 화면에 표시되었습니다.');
  // 키보드가 표시될 때 실행시킬 로직을 작성합니다.
  // ex) 키보드에 가려지는 입력 필드 위치 조정 등
});
```

```javascript
// 네이티브 키보드가 화면에서 사라질 때 실행되는 이벤트
Nachocode.event.on('keyboardhidden', () => {
  console.log('키보드가 화면에서 사라졌습니다.');
  // 키보드가 사라질 때 실행시킬 로직을 작성합니다.
  // ex) 조정됐던 레이아웃 복원 등
});
```

---

### **`off(eventName: EventType): void`** {#off}

- _since :_ <BadgeWithVersion type="SDK" version="v1.0.3" link="/docs/releases/v1/sdk/release-v-1-0-3" />

#### 설명 {#off-summary}

지정된 `eventName`에 등록된 **이벤트 리스너를 제거**합니다.  
이 메서드를 사용하면 특정 이벤트가 더 이상 감지되지 않습니다.

#### 매개변수 {#off-parameters}

| 이름        | 타입        | 필수 여부 | 설명               |
| ----------- | ----------- | --------- | ------------------ |
| `eventName` | `EventType` | ✅        | 제거할 이벤트 유형 |

#### 반환 값 {#off-returns}

해당 메서드는 반환 값을 가지지 않으며, 해당 이벤트의 모든 리스너를 제거합니다.

#### 사용 예제 {#off-examples}

```javascript
// 네트워크 변경 감지 이벤트 리스너 제거
Nachocode.event.off('networkchanged');
```

```javascript
// 'keyboardshown' 이벤트명으로 바인드 된 event를 제거합니다.
Nachocode.event.off('keyboardshown');
```

---

## **이벤트 예제 코드** {#event-examples}

아래는 `event` 네임스페이스를 활용한 **예시**입니다.

### **1. SDK 초기화 이벤트 감지** (`init`) {#event-examples-init}

```javascript
Nachocode.event.on('init', () => {
  console.log('nachocode SDK가 정상적으로 초기화되었습니다.');
  // ex) 초기화 완료 후 푸시 토큰 등록
  Nachocode.push.registerPushToken(userId).then(() => {
    console.log('푸시 토큰이 성공적으로 등록되었습니다.');
  });
});
```

:::tip 언제 활용할까?

- SDK 로딩 및 초기화가 완료되는 시점에 종속 기능(푸시, 인증, 네이티브 호출 등)을 안전하게 실행
- SDK 초기화 전 호출 시 발생하는 오류 방지

:::

---

### **2. 네트워크 상태 변경 이벤트 감지** (`networkchanged`) {#event-examples-networkchanged}

```javascript
Nachocode.event.on('networkchanged', status => {
  if (status.isConnected) {
    console.log('인터넷 연결이 복구되었습니다.');
    // ex) 재전송 기능 구현
    retryPendingRequests();
  } else {
    console.log('인터넷 연결이 끊어졌습니다.');
    // ex) 사용자에게 오프라인 UI 띄우기
    showOfflineBanner();
  }
});
```

:::tip 언제 활용할까?

- 인터넷 연결이 복구될 때 이전에 실패한 전송 정보의 재전송 트리거
- 네트워크가 끊겼을 때 사용자 경고 및 오프라인 UI 보여주기

:::

---

### **3. 앱 백그라운드 전환 감지** (`background`) {#event-examples-background}

```javascript
Nachocode.event.on('background', () => {
  console.log('애플리케이션이 백그라운드로 이동했습니다.');
  // ex) 유저의 이탈 시점 기록
  logUserLeave();
});
```

:::tip 언제 활용할까?

- 유저가 앱을 떠났을 때 전환 시점 로그 기록
- 유저가 앱을 떠났을 때 리소스 낭비를 줄이기 위한 타이머 중단 또는 세션 클리어 등

:::

---

### **4. 앱 포그라운드 복귀 감지** (`foreground`) {#event-examples-foreground}

```javascript
Nachocode.event.on('foreground', () => {
  console.log('애플리케이션이 활성화되었습니다.');
  // ex) 데이터 새로고침, 배지 업데이트
  refreshContent();
  updateNotificationBadge();
});
```

:::tip 언제 활용할까?

- 유저 복귀 후 최신 상태로 UI 갱신
- 배지, 알림 현황을 다시 체크하여 반영

:::

---

### **5. 네이티브 키보드 상태 감지** (`keyboardshown`, `keyboardhidden`) {#event-examples-keyboard}

```javascript
// 키보드가 나타날 때
Nachocode.event.on('keyboardshown', () => {
  console.log('네이티브 키보드가 표시되었습니다.');
  // ex) 입력 필드 위치 조정
  adjustInputPosition(true);
});

// 키보드가 사라질 때
Nachocode.event.on('keyboardhidden', () => {
  console.log('네이티브 키보드가 사라졌습니다.');
  // ex) 레이아웃 복원
  adjustInputPosition(false);
});
```

:::tip 언제 활용할까?

- 화면 내에서 입력 필드가 키보드에 가려지지 않도록 레이아웃 조정
- 사용자 경험 향상을 위한 화면 이동/애니메이션 트리거

:::

---
