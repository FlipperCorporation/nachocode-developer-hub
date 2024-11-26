---
sidebar_position: 8
---

# 권한 (`permission`)

> 카메라, 위치, 마이크 등의 디바이스 권한을 확인하고 요청할 수 있는 네임스페이스입니다.

---

## 타입 정의

### PermissionType

디바이스의 앱 권한 타입

- `camera`: 카메라 권한
- `location`: 위치 권한
- `microphone`: 마이크 권한
- `push`: 푸시 권한

---

## 주요 메서드

### `checkPermission(option: {type: PermissionType, ask?: boolean}, callback?: (granted: boolean) => any): void`

앱 유저가 앱의 해당 권한을 허용하였는지 확인합니다. `ask` 옵션이 `true`일 경우, 허용이 되어있지 않으면 권한을 요청합니다. 콜백 함수의 매개 변수로 허용 여부를 전달합니다.

```javascript
// ex. 푸시 알림 권한 허용 여부를 확인합니다.
// 권한을 허용하지 않았을 경우 OS 팝업을 통해 권한을 요청합니다.
Nachocode.permission.checkPermission({ type: 'push', ask: true }, granted => {
  // 앱 유저가 권한을 허용여부가 매개 변수 granted에 전달 됩니다.
  if (granted) {
    alert('푸시 권한 허용됨.');
  } else {
    alert('푸시 권한 거부됨.');
  }
});
```

---
