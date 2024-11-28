---
sidebar_position: 5
---

# 디바이스 (`device`)

> 🔔 **최신화 일자:** 2024-11-27

디바이스 정보와 상태를 확인할 수 있는 네임스페이스입니다. 배터리 상태, 네트워크 연결 정보 등을 불러올 수 있습니다.

---

## 타입 정의

### DeviceType

디바이스 유형을 나타내는 열거형입니다.

- `Android`: 안드로이드 디바이스를 나타냅니다.
- `iOS`: iOS 디바이스를 나타냅니다.
- `Unknown`: 알 수 없는 디바이스 유형입니다.

---

### NetworkConnectionType

네트워크 연결 유형을 나타내는 열거형입니다.

- `Wi-Fi`: Wi-Fi 네트워크를 나타냅니다.
- `Cellular`: 셀룰러 네트워크를 나타냅니다.
- `Ethernet`: 이더넷 네트워크를 나타냅니다.
- `No Internet Connection`: 알 수 없는 네트워크이거나 연결이 끊겼음을 나타냅니다.

---

## 주요 메서드

### `getBatteryLevel(callback: (status: { batteryLevel: number, isCharging: boolean }) => any): void`

디바이스의 배터리 상태를 반환합니다. 배터리 레벨과 충전 상태를 콜백 함수의 매개변수로 전달합니다.

- `batterLevel: number` : 배터리의 현재 충전 비율 (`0` ~ `100`)
- `isCharging: boolean` : 디바이스가 충전 중인지 여부 (`true`/`false`)

```javascript
// 디바이스의 배터리 상태를 불러옵니다.
Nachocode.device.getBatteryLevel(status => {
  const message =
    `충전 여부: ${status.isCharging ? '충전 중' : '충전 중 아님'}\n` +
    `현재 배터리: ${status.batteryLevel ?? '알 수 없음'}`;

  alert(message);
});
```

---

### `getDeviceModel(): string`

디바이스 모델명을 반환합니다.

- [구글 공식 문서](https://storage.googleapis.com/play_public/supported_devices.html)에서 Android 지원되는 모델 목록을 확인할 수 있습니다.
- Nachocode에서는 자주 쓰이는 디바이스 모델명을 정리하여 json 형태로 제공하고 있습니다.
  - iOS : [https://cdn.nachocode.io/nachocode/client-sdk/assets/device-ios-model.json](https://cdn.nachocode.io/nachocode/client-sdk/assets/device-ios-model.json)
  - Android : [https://cdn.nachocode.io/nachocode/client-sdk/assets/device-android-samsung-model.json](https://cdn.nachocode.io/nachocode/client-sdk/assets/device-android-samsung-model.json)

```javascript
// 디바이스의 모델명을 불러옵니다.
const deviceModel = Nachocode.device.getDeviceModel();
console.log(deviceModel); // ex. SM-S928N
```

---

### `getDeviceOS(): { os: DeviceType, version: string }`

디바이스의 OS (Android/iOS) 유형과 버전 정보를 포함한 객체를 반환합니다.

```javascript
// 디바이스의 OS 정보를 불러옵니다.
const deviceOS = Nachocode.device.getDeviceOS();
console.log(deviceOS); // ex. { os: 'Android', version: '34(14)' }
```

---

### `getNetworkStatus(callback: (status: { isConnected: boolean, connectionType: NetworkConnectionType }) => any): void`

디바이스의 네트워크 연결 상태를 반환합니다. 연결 여부와 연결 유형을 콜백으로 전달합니다.

- `isConnected`: 네트워크 연결 여부 (`true`/`false`).
- `connectionType`: 연결 유형 (Wi-Fi, Cellular, Ethernet 등).

```javascript
Nachocode.device.getNetworkStatus(status => {
  const connectionInfo = `네트워크 상태: ${status.isConnected ? '연결됨' : '연결되지 않음'}\n연결 유형: ${status.connectionType}`;
  alert(connectionInfo);
});
```

---

### `getType(): DeviceType`

사용자 에이전트를 활용하여 디바이스의 유형을 탐지 및 반환합니다.

```javascript
const deviceType = Nachocode.device.getType(); // 'Android' | 'iOS' | 'Unknown'

// 유저 디바이스 별로 로직을 다르게 처리하는 예시입니다.
switch (deviceType) {
  case 'Android': // Android 디바이스를 의미합니다.
    // Android 디바이스에서만 동작할 로직을 작성합니다.
    break;
  case 'iOS': // iPad, iPhone 등 iOS 디바이스를 의미합니다.
    // iOS 디바이스에서만 동작할 로직을 작성합니다.
    break;
  case 'Unknown': // PC 및 기타 장치를 의미합니다.
  default:
    // 모바일이 아닌 PC 및 기타 환경에서 동작할 로직을 작성합니다.
    break;
}
```

---

### `isAndroid(): boolean`

현재 디바이스가 Android인지 여부를 반환합니다.

```javascript
if (Nachocode.device.isAndroid()) {
  // Android 디바이스에서만 동작할 로직을 작성합니다.
}
```

---

### `isIOS(): boolean`

현재 디바이스가 iOS인지 여부를 반환합니다.

```javascript
if (Nachocode.device.isIOS()) {
  // iOS 디바이스에서만 동작할 로직을 작성합니다.
}
```

---
