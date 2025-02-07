---
sidebar_position: 7
---

# 이벤트 (`event`)

> 🔔 **최신화 일자:** 2025-02-07

## **개요**

`event` 네임스페이스는 **Nachocode SDK의 이벤트 핸들링 기능**을 제공합니다.  
**SDK가 초기화**될 때(`init`), 앱이 **백그라운드로 전환**(`background`)되거나 **다시 활성화**(`foreground`)될 때, **네트워크 상태가 변경**(`networkchanged`)될 때 등의 이벤트를 감지하고 이를 처리할 수 있습니다.

---

## **타입 정의**

### **`EventType`**

Nachocode SDK에서 기본적으로 제공하는 예약된 이벤트 타입입니다.

| 값               | 설명                                                               |
| ---------------- | ------------------------------------------------------------------ |
| `init`           | SDK가 초기화될 때 호출되는 이벤트                                  |
| `background`     | 앱이 백그라운드로 전환될 때 호출되는 이벤트                        |
| `foreground`     | 앱이 다시 활성화될 때 호출되는 이벤트                              |
| `networkchanged` | 네트워크 상태(연결 여부, 연결 방식 등)가 변경될 때 호출되는 이벤트 |

---

## **메서드 목록**

| 메서드                                                                            | 설명                                             | 추가된 버전 |
| --------------------------------------------------------------------------------- | ------------------------------------------------ | ----------- |
| [`on(eventName, callback)`](#oneventname-eventtype-callback-params-any--any-void) | 특정 이벤트를 감지하고 실행할 함수를 등록합니다. | ver.1.0.2   |
| [`off(eventName)`](#offeventname-eventtype-void)                                  | 특정 이벤트 리스너를 해제합니다.                 | ver.1.0.3   |

---

## **메서드 상세**

### **`on(eventName: EventType, callback: (params?: any) => any): void`**

- _since ver.1.0.2_

#### 설명 (`on`)

지정된 `eventName` 이벤트가 발생했을 때 실행할 **콜백 함수**를 등록합니다.

#### 매개변수 (`on`)

| 이름        | 타입                    | 필수 여부 | 설명                       |
| ----------- | ----------------------- | --------- | -------------------------- |
| `eventName` | `EventType`             | ✅        | 등록할 이벤트 유형         |
| `callback`  | `(params?: any) => any` | ✅        | 이벤트 발생 시 실행될 함수 |

#### 반환 값 (`on`)

해당 메서드는 반환 값을 가지지 않으며, 이벤트가 발생할 때마다 등록된 `callback`이 실행됩니다.

#### 사용 예제 (`on`)

```javascript
// SDK 초기화 완료 이벤트 리스너를 등록 합니다.
Nachocode.event.on('init', () => {
  if (Nachocode.env.isApp() && Nachocode.device.isIOS()) {
    // iOS 디바이스에서만 동작할 로직을 작성합니다.
  }
});

// nachocode SDK를 초기화 합니다.
Nachocode.init('your_api_key_here');
```

```javascript
// 앱이 백그라운드로 전환될 때 동작할 이벤트를 등록합니다.
Nachocode.event.on('background', () => {
  // 앱이 백그라운드로 전환될 때 동작할 로직을 작성합니다.
});
```

```javascript
// 앱이 백그라운드에서 다시 포그라운드로 전환될 때 동작할 이벤트를 등록합니다.
Nachocode.event.on('foreground', () => {
  // 앱이 포그라운드로 전환될 때 동작할 로직을 작성합니다.
  // ex. 페이지 새로고침, 데이터 불러오기 등
});
```

```javascript
// 네트워크 변경 감지 이벤트 리스너 등록
Nachocode.event.on('networkchanged', status => {
  console.log(
    `네트워크 상태 변경: ${status.isConnected ? '연결됨' : '연결 끊김'}`
  );
  console.log(`연결 유형: ${status.connectionType}`);
});
```

---

### **`off(eventName: EventType): void`**

- _since ver.1.0.3_

#### 설명 (`off`)

지정된 `eventName`에 등록된 **이벤트 리스너를 제거**합니다.  
이 메서드를 사용하면 특정 이벤트가 더 이상 감지되지 않습니다.

#### 매개변수 (`off`)

| 이름        | 타입        | 필수 여부 | 설명               |
| ----------- | ----------- | --------- | ------------------ |
| `eventName` | `EventType` | ✅        | 제거할 이벤트 유형 |

#### 반환 값 (`off`)

해당 메서드는 반환 값을 가지지 않으며, 해당 이벤트의 모든 리스너를 제거합니다.

#### 사용 예제 (`off`)

```javascript
// 'init' 이벤트명으로 바인드 된 event를 제거합니다.
Nachocode.event.off('init');
```

```javascript
// 네트워크 변경 감지 이벤트 리스너 제거
Nachocode.event.off('networkchanged');
```

---

## **이벤트 예제 코드**

아래는 `event` 네임스페이스를 활용한 **예시**입니다.

### **예제 1: SDK 초기화 이벤트 감지**

```javascript
Nachocode.event.on('init', () => {
  console.log('Nachocode SDK가 정상적으로 초기화되었습니다.');
});
```

---

### **예제 2: 네트워크 상태 변경 이벤트 감지**

```javascript
Nachocode.event.on('networkchanged', status => {
  if (status.isConnected) {
    console.log('인터넷 연결이 복구되었습니다.');
  } else {
    console.log('인터넷 연결이 끊어졌습니다.');
  }
});
```

---

### **예제 3: 앱 백그라운드 전환 감지**

```javascript
Nachocode.event.on('background', () => {
  console.log('애플리케이션이 백그라운드로 이동했습니다.');
});
```

---

### **예제 4: 앱 포그라운드 복귀 감지**

```javascript
Nachocode.event.on('foreground', () => {
  console.log('애플리케이션이 활성화되었습니다.');
});
```

---
