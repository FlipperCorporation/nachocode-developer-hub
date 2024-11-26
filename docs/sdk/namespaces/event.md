---
sidebar_position: 7
---

# 이벤트 (`event`)

> SDK에서 제공하는 기본 이벤트 관리 네임스페이스입니다.
> 초기화, 백그라운드 및 포그라운드 전환 시점에 발생하는 이벤트에 대한 리스너를 등록하거나 해제할 수 있습니다.

---

## 타입 정의

### EventType

Nachocode에서 제공되는 기본 event 입니다.

- `init`: SDK 초기화 시점에 호출되는 이벤트입니다.
- `background`: 앱이 백그라운드로 넘어 갔을 때 호출되는 이벤트입니다.
- `foreground`: 앱이 백그라운드에서 다시 포그라운드로 전환 될 때 호출되는 이벤트입니다.

---

## 주요 메서드

### `on(eventName: EventType, callback: function): void`

Nachocode에서 제공되는 기본 이벤트에 콜백 함수를 바인드합니다.

```javascript
// SDK 초기화 후 동작할 이벤트를 등록 합니다.
Nachocode.event.on('init', () => {
  if (Nachocode.env.isApp() && Nachocode.device.isIOS()) {
    // iOS 디바이스에서만 동작할 로직을 작성합니다.
  }
});

// Nachocode SDK를 초기화 합니다.
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

---

### `off(eventName: string): void`

특정 이벤트명으로 바인드 된 콜백 함수를 제거합니다.

```javascript
// 'init' 이벤트명으로 바인드 된 event를 제거합니다.
Nachocode.event.off('init');
```

---
