---
sidebar_position: 3
---

# 백 키 (`backkey`)

> 🔔 **최신화 일자:** 2024-11-27

![Android-Only](https://img.shields.io/badge/Android-Only?logo=android)

Android 네이티브 백 키를 제어하는 네임스페이스입니다.
기본 백 키 동작을 오버라이드하고 사용자 지정 이벤트를 등록할 수 있습니다.

---

## 주요 메서드

### `addEvent(event: (eventId: string) => void, eventId?: string): string`

- Android OS의 네이티브 백 키가 눌렸을 때 호출될 이벤트 리스너를 등록합니다.
- 기본 이벤트가 실행되기 전, 먼저 체크되며 등록이 되어 있을 경우 우선 실행됩니다.
- FILO (First In Last Out) 방식으로 나중에 등록된 이벤트가 먼저 실행 됩니다.

```javascript
// 이벤트 ID를 따로 제공하지 않을 경우 1부터 순서대로 아이디를 부여합니다.
Nachocode.backkey.addEvent(eventId => {
  console.log('Back key pressed.');
  console.log(eventId); // 1
});
```

```javascript
// 원하는 특정 이벤트 ID를 부여할 수도 있습니다.
Nachocode.backkey.addEvent(eventId => {
  console.log('Back key pressed.');
  console.log(eventId); // sample
}, 'sample');
```

---

### `clearEvent(): void`

등록된 모든 백키 이벤트 리스너를 제거합니다.

```javascript
// 백키를 제어하기 위해 등록한 이벤트 리스너를 전부 제거합니다.
Nachocode.backkey.clearEvent();
```

---

### `getLastEvent(): string`

제일 마지막으로 등록된 이벤트 리스너의 이벤트 ID를 반환합니다.

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
// 마지막 백키 이벤트 리스너의 이벤트 ID를 가져옵니다.
const eventId = Nachocode.backkey.getLastEvent(); // sample2
```

---

### `removeEvent(eventId?: string): string`

등록된 백키 이벤트 리스너를 제거합니다. `eventId`가 명시되지 않을 경우 기본적으로 마지막으로 등록된 이벤트를 제거합니다.

- 활용 예시 : modal을 백키로 끌 수 있도록 close함수를 이벤트 리스너 등록을 해두었는데 사용자가 백 키가 아닌 x 버튼을 눌러 끌 수 있으므로, x 버튼 클릭 시 등록된 백키 이벤트 리스너를 제거해야합니다.

```javascript
// 마지막으로 등록된 이벤트를 제거합니다.
Nachocode.backkey.removeEvent();
```

```javascript
// 이벤트 ID로 등록된 특정 이벤트 리스너를 제거합니다.
Nachocode.backkey.removeEvent('sample');
```
