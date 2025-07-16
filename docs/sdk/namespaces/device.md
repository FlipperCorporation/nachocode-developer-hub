---
description: nachocode SDK의 `device` 네임스페이스를 사용하여 디바이스의 모델, OS 버전, 언어, 배터리 상태, 네트워크 연결 정보 등을 조회하고, 디바이스 유형(Android/iOS)을 확인할 수 있습니다.
keywords:
  [
    디바이스 네트워크 연결 확인,
    디바이스 배터리 확인,
    디바이스 OS 확인,
    디바이스 언어 확인,
    디바이스 모델 확인,
    check device network,
    check device battery,
    check device OS,
    check device language,
    check device model,
  ]
---

# 디바이스 (`device`)

import { BadgeWithVersion } from '@site/src/components/svg/badge-with-version';

> 🚀 **추가된 버전 :** <BadgeWithVersion type="SDK" version="v1.0.0" link="/docs/releases/v1/sdk/release-v-1-0-0" /> <BadgeWithVersion type="Android" version="v1.0.0" link="/docs/releases/v1/app-source/android/release-v-1-0-0" /> <BadgeWithVersion type="iOS" version="v1.0.0" link="/docs/releases/v1/app-source/ios/release-v-1-0-0" />  
> 🔔 **최신화 일자:** 2025-07-16

## **개요** {#overview}

`device` 네임스페이스는 **디바이스의 주요 정보 및 상태를 조회하는 기능**을 제공합니다.

디바이스의 **모델명, OS 버전, 네트워크 연결 상태, 배터리 정보, 언어 정보** 등을 확인할 수 있으며,  
**현재 디바이스가 Android인지 iOS인지 판별**할 수도 있습니다.

---

## **타입 정의** {#types}

### **`DeviceType`** {#device-type}

- _since :_ <BadgeWithVersion type="SDK" version="v1.0.0" link="/docs/releases/v1/sdk/release-v-1-0-0" />

디바이스 유형을 나타내는 열거형(enum)입니다.

```typescript
export declare const DEVICE_TYPES = {
  ANDROID: 'Android',
  IOS: 'iOS',
  UNKNOWN: 'Unknown',
} as const;
```

```typescript
export declare type DeviceType =
  (typeof DEVICE_TYPES)[keyof typeof DEVICE_TYPES];
```

| 값        | 설명                        |
| --------- | --------------------------- |
| `Android` | 안드로이드 디바이스         |
| `iOS`     | iOS 디바이스                |
| `Unknown` | 알 수 없는 디바이스 또는 PC |

---

### **`NetworkConnectionType`** {#network-connection-type}

- _since :_ <BadgeWithVersion type="SDK" version="v1.3.0" link="/docs/releases/v1/sdk/release-v-1-3-0" />

네트워크 연결 유형을 나타내는 열거형(enum)입니다.

```typescript
export declare const NETWORK_CONNECTION_TYPES = {
  WIFI: 'Wi-Fi',
  CELLULAR: 'Cellular',
  ETHERNET: 'Ethernet',
  UNKNOWN: 'No Internet Connection',
} as const;
```

```typescript
export declare type NetworkConnectionType =
  (typeof NETWORK_CONNECTION_TYPES)[keyof typeof NETWORK_CONNECTION_TYPES];
```

| 값                       | 설명                                 |
| ------------------------ | ------------------------------------ |
| `Wi-Fi`                  | Wi-Fi 네트워크                       |
| `Cellular`               | 셀룰러(모바일) 네트워크              |
| `Ethernet`               | 유선 네트워크(Ethernet)              |
| `No Internet Connection` | 인터넷 연결이 끊어짐 또는 알 수 없음 |

---

## **메서드 목록** {#method-list}

| 메서드                                                  | 설명                                    | 추가된 버전                                                                                   |
| ------------------------------------------------------- | --------------------------------------- | --------------------------------------------------------------------------------------------- |
| [`getCurrentLanguage(callback)`](#get-current-language) | 디바이스의 현재 언어 코드를 반환합니다. | <BadgeWithVersion type="SDK" version="v1.4.0" link="/docs/releases/v1/sdk/release-v-1-4-0" /> |
| [`getBatteryLevel(callback)`](#get-battery-level)       | 디바이스의 배터리 상태를 반환합니다.    | <BadgeWithVersion type="SDK" version="v1.3.0" link="/docs/releases/v1/sdk/release-v-1-3-0" /> |
| [`getDeviceModel()`](#get-device-model)                 | 디바이스의 모델명을 반환합니다.         | <BadgeWithVersion type="SDK" version="v1.3.0" link="/docs/releases/v1/sdk/release-v-1-3-0" /> |
| [`getDeviceOS()`](#get-device-os)                       | 디바이스의 OS 유형과 버전을 반환합니다. | <BadgeWithVersion type="SDK" version="v1.3.0" link="/docs/releases/v1/sdk/release-v-1-3-0" /> |
| [`getNetworkStatus(callback)`](#get-network-status)     | 네트워크 연결 상태를 반환합니다.        | <BadgeWithVersion type="SDK" version="v1.3.0" link="/docs/releases/v1/sdk/release-v-1-3-0" /> |
| [`getType()`](#get-type)                                | 현재 디바이스의 유형을 반환합니다.      | <BadgeWithVersion type="SDK" version="v1.0.0" link="/docs/releases/v1/sdk/release-v-1-0-0" /> |
| [`isAndroid()`](#is-android)                            | 현재 디바이스가 Android인지 확인합니다. | <BadgeWithVersion type="SDK" version="v1.0.0" link="/docs/releases/v1/sdk/release-v-1-0-0" /> |
| [`isIOS()`](#is-ios)                                    | 현재 디바이스가 iOS인지 확인합니다.     | <BadgeWithVersion type="SDK" version="v1.0.0" link="/docs/releases/v1/sdk/release-v-1-0-0" /> |

---

## **메서드 상세** {#method-details}

### **`getCurrentLanguage(callback: (language: string) => void): void`** {#get-current-language}

- _since :_ <BadgeWithVersion type="SDK" version="v1.4.0" link="/docs/releases/v1/sdk/release-v-1-4-0" />

#### 설명 {#get-current-language-summary}

디바이스의 **현재 언어 코드** 를 **BCP 47 규격** (`en-US`, `ko-KR`, `ja-JP` 등)으로 반환합니다.  
콜백 함수로 언어 코드 값이 전달됩니다.

#### 매개변수 {#get-current-language-parameters}

| 이름       | 타입                         | 필수 여부 | 설명                |
| ---------- | ---------------------------- | --------- | ------------------- |
| `callback` | `(language: string) => void` | ✅        | 언어 코드 반환 함수 |

#### 반환 값 {#get-current-language-returns}

해당 메서드는 반환 값을 가지지 않으며, 언어 코드는 `callback`을 통해 비동기적으로 제공됩니다.

#### 사용 예제 {#get-current-language-examples}

```javascript
// 디바이스의 현재 언어 코드를 불러옵니다.
Nachocode.device.getCurrentLanguage(language => {
  const message = `현재 디바이스 언어: ${language}`;
  alert(message); // ex. 'ko-KR'
});
```

---

### **`getBatteryLevel(callback: (status: { batteryLevel: number, isCharging: boolean }) => void): void`** {#get-battery-level}

- _since :_ <BadgeWithVersion type="SDK" version="v1.3.0" link="/docs/releases/v1/sdk/release-v-1-3-0" />

#### 설명 {#get-battery-level-summary}

디바이스의 **배터리 잔량 및 충전 상태**를 조회합니다.  
콜백 함수로 `batteryLevel`(배터리 잔량)과 `isCharging`(충전 여부)을 전달합니다.

#### 매개변수 {#get-battery-level-parameters}

| 이름       | 타입                                                              | 필수 여부 | 설명                                  |
| ---------- | ----------------------------------------------------------------- | --------- | ------------------------------------- |
| `callback` | `(status: { batteryLevel: number, isCharging: boolean }) => void` | ✅        | 배터리 상태 정보를 전달하는 콜백 함수 |

- `batterLevel: number` : 배터리의 현재 충전 비율 (`0` ~ `100`)
- `isCharging: boolean` : 디바이스가 충전 중인지 여부 (`true`/`false`)

#### 반환 값 {#get-battery-level-returns}

해당 메서드는 반환 값을 가지지 않으며, 결과는 `callback`을 통해 비동기적으로 제공됩니다.

#### 사용 예제 {#get-battery-level-examples}

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

### **`getDeviceModel(): string`** {#get-device-model}

- _since :_ <BadgeWithVersion type="SDK" version="v1.3.0" link="/docs/releases/v1/sdk/release-v-1-3-0" />

#### 설명 {#get-device-model-summary}

현재 디바이스의 **모델명을 반환**합니다.  
nachocode에서는 **자주 사용되는 디바이스 모델명을 JSON 형태**로 제공합니다.

:::info 자주 사용되는 디바이스 모델명 리스트
➡️ **[Android 삼성 기기 모델 리스트](https://cdn.nachocode.io/nachocode/client-sdk/assets/device-android-samsung-model.json)**  
➡️ **[iOS 기기 모델 리스트](https://cdn.nachocode.io/nachocode/client-sdk/assets/device-ios-model.json)**
:::

:::tip 지원되는 전체 모델 확인
➡️ [**구글 공식 문서**](https://storage.googleapis.com/play_public/supported_devices.html)에서 Android에서 지원되는 전체 모델 목록을 확인할 수 있습니다.
:::

#### 반환 값 {#get-device-model-returns}

| 타입     | 설명                          |
| -------- | ----------------------------- |
| `string` | 디바이스 모델명을 반환합니다. |

#### 사용 예제 {#get-device-model-examples}

```javascript
// 디바이스의 모델명을 불러옵니다.
const deviceModel = Nachocode.device.getDeviceModel();
console.log(`디바이스 모델명: ${deviceModel}`); // ex. 'SM-S928N'
```

---

### **`getDeviceOS(): { os: DeviceType, version: string }`** {#get-device-os}

- _since :_ <BadgeWithVersion type="SDK" version="v1.3.0" link="/docs/releases/v1/sdk/release-v-1-3-0" />

#### 설명 {#get-device-os-summary}

디바이스의 **운영체제(OS) (Android/iOS) 유형 및 버전** 정보를 포함한 객체를 반환합니다.

#### 반환 값 {#get-device-os-returns}

| 타입                                  | 설명                          |
| ------------------------------------- | ----------------------------- |
| `{ os: DeviceType, version: string }` | OS 유형 및 버전을 포함한 객체 |

#### 사용 예제 {#get-device-os-examples}

```javascript
// 디바이스의 OS 정보를 불러옵니다.
const deviceOS = Nachocode.device.getDeviceOS();
console.log(`OS: ${deviceOS.os}, 버전: ${deviceOS.version}`); // ex. { os: 'Android', version: '34(14)' }
```

---

### **`getNetworkStatus(callback: (status: { isConnected: boolean, connectionType: NetworkConnectionType }) => void): void`** {#get-network-status}

- _since :_ <BadgeWithVersion type="SDK" version="v1.3.0" link="/docs/releases/v1/sdk/release-v-1-3-0" />

#### 설명 {#get-network-status-summary}

현재 디바이스의 **네트워크 연결 상태 및 연결 유형(Wi-Fi, 셀룰러 등)** 을 콜백 함수에 전달합니다.

#### 매개변수 {#get-network-status-parameters}

| 이름       | 타입                                                                                | 필수 여부 | 설명                                    |
| ---------- | ----------------------------------------------------------------------------------- | --------- | --------------------------------------- |
| `callback` | `(status: { isConnected: boolean, connectionType: NetworkConnectionType }) => void` | ✅        | 네트워크 상태 정보를 전달하는 콜백 함수 |

- `isConnected`: 네트워크 연결 여부 (`true`/`false`).
- `connectionType`: 연결 유형 (Wi-Fi, Cellular, Ethernet 등).

#### 반환 값 {#get-network-status-returns}

해당 메서드는 반환 값을 가지지 않으며, 결과는 `callback`을 통해 비동기적으로 제공됩니다.

#### 사용 예제 {#get-network-status-examples}

```javascript
Nachocode.device.getNetworkStatus(status => {
  const connectionInfo = `네트워크 상태: ${status.isConnected ? '연결됨' : '연결되지 않음'}\n연결 유형: ${status.connectionType}`;
  alert(connectionInfo);
});
```

---

### **`getType(): DeviceType`** {#get-type}

- _since :_ <BadgeWithVersion type="SDK" version="v1.0.0" link="/docs/releases/v1/sdk/release-v-1-0-0" />

#### 설명 {#get-type}

현재 디바이스의 **유형(Android, iOS, Unknown)** 을 탐지 및 반환합니다.

#### 반환 값 {#get-type}

| 타입         | 설명                        |
| ------------ | --------------------------- |
| `DeviceType` | 디바이스 유형을 반환합니다. |

#### 사용 예제 {#get-type}

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

### **`isAndroid(): boolean`** {#is-android}

- _since :_ <BadgeWithVersion type="SDK" version="v1.0.0" link="/docs/releases/v1/sdk/release-v-1-0-0" />

#### 설명 {#is-android-summary}

현재 디바이스가 **Android인지 여부**를 반환합니다.

#### 반환 값 {#is-android-returns}

| 타입      | 설명                                 |
| --------- | ------------------------------------ |
| `boolean` | Android 여부 반환 (`true` / `false`) |

#### 사용 예제 {#is-android-examples}

```javascript
if (Nachocode.device.isAndroid()) {
  console.log('현재 디바이스는 Android입니다.');
  // Android 디바이스에서만 동작할 로직을 작성합니다.
}
```

---

### **`isIOS(): boolean`** {#is-ios}

- _since :_ <BadgeWithVersion type="SDK" version="v1.0.0" link="/docs/releases/v1/sdk/release-v-1-0-0" />

#### 설명 {#is-ios-summary}

현재 디바이스가 **iOS인지 여부**를 반환합니다.

#### 반환 값 {#is-ios-returns}

| 타입      | 설명                             |
| --------- | -------------------------------- |
| `boolean` | iOS 여부 반환 (`true` / `false`) |

#### 사용 예제 {#is-ios-examples}

```javascript
if (Nachocode.device.isIOS()) {
  console.log('현재 디바이스는 iOS입니다.');
  // iOS 디바이스에서만 동작할 로직을 작성합니다.
}
```

---
