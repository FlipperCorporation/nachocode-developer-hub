---
sidebar_label: 'ver.1.3.0 (24.11.20)'
description: nachocode Client SDK ver.1.3.0의 릴리즈노트입니다.
image: /img/docs/releases/release_note_sdk_detail.png
---

# Release: ver.1.3.0 (2024-11-20)

import { ThumbnailImage } from '@site/src/components/common/image/thumbnail-image';

<ThumbnailImage src='/img/docs/releases/release_note_sdk_detail.png'/>

> 🔔 **배포 일자:** 2024-11-20

이번 업데이트에서는 **생체 인증**, **배터리 상태 확인**, **디바이스 모델 및 OS 확인**, **네트워크 상태 확인** 등 다양한 기능이 추가되었습니다.

## 주요 변경 사항 (ver.1.3.0)

### 추가된 기능 목록

- [생체 인증 지원](#1-생체-인증-기능-추가-authentication-네임스페이스) ([`authentication`](/docs/sdk/namespaces/authentication))
- [디바이스 기능 추가](#2-디바이스-기능-추가-device-네임스페이스) ([`device`](/docs/sdk/namespaces/device))

---

### 1. 생체 인증 기능 추가 (`authentication` 네임스페이스)

- 디바이스의 네이티브 **생체 인증**을 활용할 수 있도록 기능이 추가되었습니다.
- `canUseBiometrics` 메서드로 현재 기기에서 생체 인증을 사용할 수 있는지 여부를 확인할 수 있습니다.
- `useBiometrics` 메서드로 네이티브 생체 인증 팝업을 띄워 사용자 인증을 진행할 수 있습니다.
- ➡️ [`authentication` 네임스페이스 문서](/docs/sdk/namespaces/authentication)에서 상세 정보를 확인할 수 있습니다.

#### 추가된 메서드 (`authentication`)

| 메서드                       | 설명                                   |
| ---------------------------- | -------------------------------------- |
| `canUseBiometrics(callback)` | 생체 인증 사용 가능 여부를 확인합니다. |
| `useBiometrics(callback)`    | 생체 인증을 수행합니다.                |

#### 사용 예제 (생체 인증)

```javascript
// 디바이스의 생체 인증 사용 가능 여부 확인
Nachocode.authentication.canUseBiometrics((available, error) => {
  if (available) {
    console.log('생체 인증 사용 가능');
  } else {
    // 사용이 불가할 경우, error.message에 사유 전달
    console.log(`생체 인증 사용 불가: ${error?.message || '알 수 없는 오류'}`);
  }
});
```

```javascript
// 네이티브 생체 인증 기능 호출
Nachocode.authentication.useBiometrics(result => {
  const message =
    `인증 여부 : ${result.authenticated ? '인증됨' : '인증안됨'}\n` +
    `상태 코드 : ${result.error?.code ?? '없음'}\n` +
    `에러 메시지 : ${result.error?.message ?? '없음'}`;

  alert(message);
});
```

---

### 2. 디바이스 기능 추가 (`device` 네임스페이스)

- 기기의 배터리 상태를 확인할 수 있는 `getBatteryLevel` 메서드가 추가되었습니다.
- 이 메서드는 배터리 잔량 및 충전 상태를 반환하며, 콜백 함수에서 이를 활용할 수 있습니다.
- `getDeviceModel` 메서드를 통해 디바이스의 모델명을 확인할 수 있습니다.
- `getDeviceOS` 메서드를 통해 디바이스의 운영체제(OS)와 버전을 반환합니다.
- `getNetworkStatus` 메서드를 통해 네트워크 연결 상태 및 연결 유형(Wi-Fi, Cellular 등)을 확인할 수 있습니다.
- ➡️ [`device` 네임스페이스 문서](/docs/sdk/namespaces/device)에서 상세 정보를 확인할 수 있습니다.

#### 추가된 메서드 (`device`)

| 메서드                       | 설명                                  |
| ---------------------------- | ------------------------------------- |
| `getBatteryLevel(callback)`  | 배터리 잔량과 충전 상태를 확인합니다. |
| `getNetworkStatus(callback)` | 네트워크 연결 상태를 확인합니다.      |
| `getDeviceModel()`           | 디바이스 모델명을 반환합니다.         |
| `getDeviceOS()`              | 디바이스 운영체제 정보를 반환합니다.  |

#### 사용 예제 (디바이스 기능)

- 배터리 상태 확인

```javascript
Nachocode.device.getBatteryLevel(status => {
  console.log(`배터리 잔량: ${status.batteryLevel}%`);
  console.log(`충전 중 여부: ${status.isCharging}`);
});
```

- 디바이스 모델 및 OS 확인

```javascript
const deviceModel = Nachocode.device.getDeviceModel();
console.log(deviceModel); // // ex. SM-S928N

const deviceOS = Nachocode.device.getDeviceOS();
console.log(deviceOS); // ex. { os: 'Android', version: '34(14)' }
```

- 네트워크 상태 확인

```javascript
Nachocode.device.getNetworkStatus(status => {
  console.log(`연결 상태: ${status.isConnected}`);
  console.log(`연결 유형: ${status.connectionType}`);
});
```

---

### 3. 당겨서 새로고침 기능 추가 (`refresh` 네임스페이스)

- 당겨서 새로고침 (Pull-to-Refresh) 기능을 활성화하거나 비활성화할 수 있는 `setPullToRefresh` 메서드가 추가되었습니다.
- 사용자 인터페이스에서 새로고침 동작을 앱의 설정에 따라 제어할 수 있습니다.
- ➡️ [`refresh` 네임스페이스 문서](/docs/sdk/namespaces/refresh)

#### 추가된 메서드 (`refresh`)

| 메서드                     | 설명                                               |
| -------------------------- | -------------------------------------------------- |
| `setPullToRefresh(enable)` | 당겨서 새로고침 기능을 활성화 또는 비활성화합니다. |

#### 사용 예제 (당겨서 새로고침 설정)

```javascript
// 당겨서 새로고침 기능을 활성화합니다.
Nachocode.refresh.setPullToRefresh(true);
```

---

### 업데이트 방법

nachocode JavaScript Client SDK **ver.1.3.0**를 사용하려면 아래의 스크립트를 업데이트하십시오.

#### SDK CDN 주소

```html
<script src="https://cdn.nachocode.io/nachocode/client-sdk/@1.3.0/client-sdk.min.js"></script>
```
