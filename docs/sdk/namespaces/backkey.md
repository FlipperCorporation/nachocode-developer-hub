---
sidebar_position: 4
description: nachocode SDK의 `backkey` 네임스페이스는 Android 환경에서 네이티브 백 키 이벤트를 사용자 정의하고 관리할 수 있는 기능을 제공합니다.
---

# 백 키 (`backkey`)

> 🔔 **최신화 일자:** 2025-02-10

![Android-Only](https://img.shields.io/badge/Android_only-gray?logo=android)

## **개요**

`backkey` 네임스페이스는 **Android 네이티브 백 키를 제어**하는 기능을 제공합니다.  
**기본 백 키 동작을 오버라이드**하고, **사용자 지정 이벤트를 등록**할 수 있으며, **백 키 이벤트 스택을 관리**할 수 있습니다.

> **📢 참고:**  
> 백 키 이벤트는 **FILO(First In Last Out) 방식**으로 처리됩니다.  
> 즉, **가장 최근에 추가된 이벤트가 가장 먼저 실행**됩니다.  
> ⚠️ **이 네임스페이스는 Android에서만 지원됩니다.**

---

## **메서드 목록**

| 메서드                                                                                   | 설명                                             | 추가된 버전 |
| ---------------------------------------------------------------------------------------- | ------------------------------------------------ | ----------- |
| [`addEvent(event, eventId?)`](#addeventevent-eventid-string--void-eventid-string-string) | Android 백 키 이벤트 리스너를 등록합니다.        | ver.1.2.0   |
| [`clearEvent()`](#clearevent-void)                                                       | 모든 백 키 이벤트 리스너를 제거합니다.           | ver.1.2.0   |
| [`getLastEvent()`](#getlastevent-string)                                                 | 가장 최근에 등록된 백 키 이벤트 ID를 반환합니다. | ver.1.2.0   |
| [`removeEvent(eventId?)`](#removeeventeventid-string-string)                             | 특정 이벤트 ID 또는 마지막 이벤트를 제거합니다.  | ver.1.2.0   |

---

## 메서드 상세

### **`addEvent(event: (eventId: string) => void, eventId?: string): string`**

- _since ver.1.2.0_

#### 설명 (`addEvent`)

Android의 **네이티브 백 키가 눌렸을 때 호출될 이벤트 리스너를 등록**합니다.  
이벤트는 기본적으로 **FILO(First In Last Out) 방식**으로 처리되며, 가장 최근에 추가된 이벤트가 먼저 실행됩니다.

#### 매개변수 (`addEvent`)

| 이름      | 타입                        | 필수 여부 | 설명                                                    |
| --------- | --------------------------- | --------- | ------------------------------------------------------- |
| `event`   | `(eventId: string) => void` | ✅        | 백 키 이벤트가 발생했을 때 실행할 콜백 함수             |
| `eventId` | `string` (_optional_)       | ❌        | 특정 이벤트를 식별하기 위한 고유 ID (기본값: 자동 할당) |

#### 반환 값 (`addEvent`)

| 타입     | 설명                                    |
| -------- | --------------------------------------- |
| `string` | 등록된 이벤트의 `eventId`를 반환합니다. |

#### 사용 예제 (`addEvent`)

```javascript
// 이벤트 ID를 따로 제공하지 않을 경우 1부터 순서대로 아이디를 부여합니다.
Nachocode.backkey.addEvent(eventId => {
  console.log('Back key pressed.');
  console.log(`이벤트 ID: ${eventId}`); // 예: "1"
});
```

```javascript
// 특정 이벤트 ID를 부여하여 이벤트 리스너를 등록할 수도 있습니다.
Nachocode.backkey.addEvent(eventId => {
  console.log('Back key pressed.');
  console.log(`이벤트 ID: ${eventId}`); // "sample"
}, 'sample');
```

---

### **`clearEvent(): void`**

- _since ver.1.2.0_

#### 설명 (`clearEvent`)

모든 백 키 이벤트 리스너를 제거합니다.  
이 함수를 호출하면 **이전에 등록된 모든 이벤트가 초기화**됩니다.

#### 반환 값 (`clearEvent`)

해당 메서드는 반환 값을 가지지 않습니다.

#### 사용 예제 (`clearEvent`)

```javascript
// 백키를 제어하기 위해 등록한 이벤트 리스너를 전부 제거합니다.
Nachocode.backkey.clearEvent();
```

---

### **`getLastEvent(): string`**

#### 설명 (`getLastEvent`)

가장 최근에 등록된 **백 키 이벤트의 ID를 반환**합니다.

#### 반환 값 (`getLastEvent`)

| 타입     | 설명                                        |
| -------- | ------------------------------------------- |
| `string` | 가장 최근에 추가된 백 키 이벤트의 `eventId` |

#### 사용 예제 (`getLastEvent`)

```javascript
// 첫 번째 백키 이벤트 리스너를 등록합니다.
Nachocode.backkey.addEvent(eventId => {
  console.log('Back key pressed.');
  console.log(eventId); // sample1
}, 'sample1');
// 두 번째 백키 이벤트 리스너를 등록합니다.
Nachocode.backkey.addEvent(eventId => {
  console.log('Back key pressed.');
  console.log(eventId); // sample2
}, 'sample2');
// 가장 마지막으로 등록된 이벤트 ID를 확인합니다.
const lastEventId = Nachocode.backkey.getLastEvent();
console.log(`마지막 이벤트 ID: ${lastEventId}`); // "sample2"
```

---

### **`removeEvent(eventId?: string): string`**

- _since ver.1.2.0_

#### 설명 (`removeEvent`)

특정 백 키 이벤트를 제거합니다.

- `eventId`가 명시되지 않은 경우, **가장 최근에 추가된 이벤트를 제거**합니다.
- 특정 `eventId`를 제공하면 **해당 이벤트만 제거**합니다.

- 활용 예시 : modal을 백키로 끌 수 있도록 close함수를 이벤트 리스너 등록을 해두었는데 사용자가 백 키가 아닌 x 버튼을 눌러 끌 수 있으므로, x 버튼 클릭 시 등록된 백키 이벤트 리스너를 제거해야합니다.

#### 매개변수 (`removeEvent`)

| 이름      | 타입                  | 필수 여부 | 설명                                                 |
| --------- | --------------------- | --------- | ---------------------------------------------------- |
| `eventId` | `string` (_optional_) | ❌        | 제거할 이벤트의 ID (기본값: 가장 최근 등록된 이벤트) |

#### 반환 값 (`removeEvent`)

| 타입     | 설명                                    |
| -------- | --------------------------------------- |
| `string` | 제거된 이벤트의 `eventId`를 반환합니다. |

#### 사용 예제 (`removeEvent`)

```javascript
// 이벤트를 여러 개 추가한 경우, 가장 최근 이벤트부터 삭제됩니다.
Nachocode.backkey.addEvent(eventId => {
  console.log('Back key pressed.');
}, 'event1');

Nachocode.backkey.addEvent(eventId => {
  console.log('Back key pressed.');
}, 'event2');

// 가장 최근에 추가된 이벤트("event2")를 제거합니다.
const removedEvent = Nachocode.backkey.removeEvent();
console.log(`제거된 이벤트 ID: ${removedEvent}`); // "event2"
```

```javascript
// 특정 이벤트 ID를 사용하여 등록
Nachocode.backkey.addEvent(eventId => {
  console.log('Back key pressed.');
}, 'sample');

// 이벤트 ID로 등록된 특정 이벤트 리스너를 제거합니다.
Nachocode.backkey.removeEvent('sample');
```
