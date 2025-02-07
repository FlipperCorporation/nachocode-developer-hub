---
sidebar_position: 5
---

# 디바이스 (`device`)

> 🔔 **최신화 일자:** 2025-02-07

## **개요**

`device` 네임스페이스는 **디바이스의 주요 정보 및 상태를 조회하는 기능**을 제공합니다.  
디바이스의 **모델명, OS 버전, 네트워크 연결 상태, 배터리 정보** 등을 확인할 수 있으며, **현재 디바이스가 Android인지 iOS인지 판별**할 수도 있습니다.

---

## **타입 정의**

### **`DeviceType`**

디바이스 유형을 나타내는 열거형(enum)입니다.

| 값        | 설명                        |
| --------- | --------------------------- |
| `Android` | 안드로이드 디바이스         |
| `iOS`     | iOS 디바이스                |
| `Unknown` | 알 수 없는 디바이스 또는 PC |

---

### **`NetworkConnectionType`**

네트워크 연결 유형을 나타내는 열거형(enum)입니다.

| 값                       | 설명                                 |
| ------------------------ | ------------------------------------ |
| `Wi-Fi`                  | Wi-Fi 네트워크                       |
| `Cellular`               | 셀룰러(모바일) 네트워크              |
| `Ethernet`               | 유선 네트워크(Ethernet)              |
| `No Internet Connection` | 인터넷 연결이 끊어짐 또는 알 수 없음 |

---

## **메서드 목록**

| 메서드                                                                                                                                | 설명                                    | 추가된 버전 |
| ------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------- | ----------- |
| [`getBatteryLevel(callback)`](#getbatterylevelcallback-status--batterylevel-number-ischarging-boolean---any-void)                     | 디바이스의 배터리 상태를 반환합니다.    | ver.1.3.0   |
| [`getDeviceModel()`](#getdevicemodel-string)                                                                                          | 디바이스의 모델명을 반환합니다.         | ver.1.3.0   |
| [`getDeviceOS()`](#getdeviceos--os-devicetype-version-string-)                                                                        | 디바이스의 OS 유형과 버전을 반환합니다. | ver.1.3.0   |
| [`getNetworkStatus(callback)`](#getnetworkstatuscallback-status--isconnected-boolean-connectiontype-networkconnectiontype---any-void) | 네트워크 연결 상태를 반환합니다.        | ver.1.3.0   |
| [`getType()`](#gettype-devicetype)                                                                                                    | 현재 디바이스의 유형을 반환합니다.      | ver.1.0.0   |
| [`isAndroid()`](#isandroid-boolean)                                                                                                   | 현재 디바이스가 Android인지 확인합니다. | ver.1.0.0   |
| [`isIOS()`](#isios-boolean)                                                                                                           | 현재 디바이스가 iOS인지 확인합니다.     | ver.1.0.0   |

---

## **메서드 상세**

### **`getBatteryLevel(callback: (status: { batteryLevel: number, isCharging: boolean }) => any): void`**

- _since ver.1.3.0_

#### 설명 (`getBatteryLevel`)

디바이스의 **배터리 잔량 및 충전 상태**를 조회합니다.  
콜백 함수로 `batteryLevel`(배터리 잔량)과 `isCharging`(충전 여부)을 전달합니다.

#### 매개변수 (`getBatteryLevel`)

| 이름       | 타입                                                             | 필수 여부 | 설명                                  |
| ---------- | ---------------------------------------------------------------- | --------- | ------------------------------------- |
| `callback` | `(status: { batteryLevel: number, isCharging: boolean }) => any` | ✅        | 배터리 상태 정보를 전달하는 콜백 함수 |

- `batterLevel: number` : 배터리의 현재 충전 비율 (`0` ~ `100`)
- `isCharging: boolean` : 디바이스가 충전 중인지 여부 (`true`/`false`)

#### 반환 값 (`getBatteryLevel`)

해당 메서드는 반환 값을 가지지 않으며, 결과는 `callback`을 통해 비동기적으로 제공됩니다.

#### 사용 예제 (`getBatteryLevel`)

```javascript
// 디바이스의 배터리 상태를 불러옵니다.
Nachocode.device.getBatteryLevel(status => {
  const message =
    `충전 여부: ${status.isCharging ? '충전 중' : '충전 중 아님'}\n` +
    `배터리 잔량: ${status.batteryLevel ?? '알 수 없음'}`;

  alert(message);
});
```

---

### **`getDeviceModel(): string`**

- _since ver.1.3.0_

#### 설명 (`getDeviceModel`)

현재 디바이스의 **모델명을 반환**합니다.  
Nachocode에서는 **자주 사용되는 디바이스 모델명을 JSON 형태**로 제공합니다.

✅ **[Android 삼성 기기 모델 리스트](https://cdn.nachocode.io/nachocode/client-sdk/assets/device-android-samsung-model.json)**  
✅ **[iOS 기기 모델 리스트](https://cdn.nachocode.io/nachocode/client-sdk/assets/device-ios-model.json)**

[구글 공식 문서](https://storage.googleapis.com/play_public/supported_devices.html)에서 Android 지원되는 전체 모델 목록을 확인할 수 있습니다.

#### 반환 값 (`getDeviceModel`)

| 타입     | 설명                          |
| -------- | ----------------------------- |
| `string` | 디바이스 모델명을 반환합니다. |

#### 사용 예제 (`getDeviceModel`)

```javascript
// 디바이스의 모델명을 불러옵니다.
const deviceModel = Nachocode.device.getDeviceModel();
console.log(`디바이스 모델명: ${deviceModel}`); // ex. 'SM-S928N'
```

---

### **`getDeviceOS(): { os: DeviceType, version: string }`**

- _since ver.1.3.0_

#### 설명 (`getDeviceOS`)

디바이스의 **운영체제(OS) (Android/iOS) 유형 및 버전** 정보를 포함한 객체를 반환합니다.

#### 반환 값 (`getDeviceOS`)

| 타입                                  | 설명                          |
| ------------------------------------- | ----------------------------- |
| `{ os: DeviceType, version: string }` | OS 유형 및 버전을 포함한 객체 |

#### 사용 예제 (`getDeviceOS`)

```javascript
// 디바이스의 OS 정보를 불러옵니다.
const deviceOS = Nachocode.device.getDeviceOS();
console.log(`OS: ${deviceOS.os}, 버전: ${deviceOS.version}`); // ex. { os: 'Android', version: '34(14)' }
```

---

### **`getNetworkStatus(callback: (status: { isConnected: boolean, connectionType: NetworkConnectionType }) => any): void`**

- _since ver.1.3.0_

#### 설명 (`getNetworkStatus`)

현재 디바이스의 **네트워크 연결 상태 및 연결 유형(Wi-Fi, 셀룰러 등)** 을 콜백 함수에 전달합니다.

#### 매개변수 (`getNetworkStatus`)

| 이름       | 타입                                                                               | 필수 여부 | 설명                                    |
| ---------- | ---------------------------------------------------------------------------------- | --------- | --------------------------------------- |
| `callback` | `(status: { isConnected: boolean, connectionType: NetworkConnectionType }) => any` | ✅        | 네트워크 상태 정보를 전달하는 콜백 함수 |

- `isConnected`: 네트워크 연결 여부 (`true`/`false`).
- `connectionType`: 연결 유형 (Wi-Fi, Cellular, Ethernet 등).

#### 반환 값 (`getNetworkStatus`)

해당 메서드는 반환 값을 가지지 않으며, 결과는 `callback`을 통해 비동기적으로 제공됩니다.

#### 사용 예제 (`getNetworkStatus`)

```javascript
Nachocode.device.getNetworkStatus(status => {
  const connectionInfo = `네트워크 상태: ${status.isConnected ? '연결됨' : '연결되지 않음'}\n연결 유형: ${status.connectionType}`;
  alert(connectionInfo);
});
```

---

### **`getType(): DeviceType`**

- _since ver.1.0.0_

#### 설명 (`getType`)

현재 디바이스의 **유형(Android, iOS, Unknown)** 을 탐지 및 반환합니다.

#### 반환 값 (`getType`)

| 타입         | 설명                        |
| ------------ | --------------------------- |
| `DeviceType` | 디바이스 유형을 반환합니다. |

#### 사용 예제 (`getType`)

```javascript
// 유저 디바이스 유형을 확인합니다.
const deviceType = Nachocode.device.getType();
console.log(`디바이스 유형: ${deviceType}`); // 'Android' | 'iOS' | 'Unknown'

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

### **`isAndroid(): boolean`**

- _since ver.1.0.0_

#### 설명 (`isAndroid`)

현재 디바이스가 **Android인지 여부**를 반환합니다.

#### 반환 값 (`isAndroid`)

| 타입      | 설명                                 |
| --------- | ------------------------------------ |
| `boolean` | Android 여부 반환 (`true` / `false`) |

#### 사용 예제 (`isAndroid`)

```javascript
if (Nachocode.device.isAndroid()) {
  console.log('현재 디바이스는 Android입니다.');
  // Android 디바이스에서만 동작할 로직을 작성합니다.
}
```

---

### **`isIOS(): boolean`**

- _since ver.1.0.0_

#### 설명 (`isIOS`)

현재 디바이스가 **iOS인지 여부**를 반환합니다.

#### 반환 값 (`isIOS`)

| 타입      | 설명                             |
| --------- | -------------------------------- |
| `boolean` | iOS 여부 반환 (`true` / `false`) |

#### 사용 예제 (`isIOS`)

```javascript
if (Nachocode.device.isIOS()) {
  console.log('현재 디바이스는 iOS입니다.');
  // iOS 디바이스에서만 동작할 로직을 작성합니다.
}
```

---
