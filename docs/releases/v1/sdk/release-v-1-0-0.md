---
sidebar_label: 'ver.1.0.0 (24.03.14)'
description: nachocode Client SDK ver.1.0.0의 릴리즈노트입니다.
---

# Release: ver.1.0.0 (2024-03-14)

![sdk_detail](/img/docs/releases/release_note_sdk_detail.png)

> 🔔 **배포 일자:** 2024-03-14

nachocode Client SDK의 첫 번째 공식 버전입니다.

이번 버전에서는 **SDK 초기화**, **앱 환경 감지**, **디바이스 타입 감지**, **푸시 토큰 발급 및 등록** 기능이 제공됩니다.

## 주요 변경 사항 (ver.1.0.0)

### 추가된 기능 목록

- [SDK 초기화 기능 추가](#1-sdk-초기화-기능-추가)
- [앱 실행 환경 및 설정 확인 기능 추가](#2-앱-실행-환경-및-설정-확인-env-네임스페이스)
- [디바이스 타입 감지 기능 추가](#3-디바이스-타입-감지-기능-추가-device-네임스페이스)
- [푸시 토큰 관리 기능 추가](#4-푸시-토큰-관리-기능-추가-push-네임스페이스)

---

### 1. SDK 초기화 기능 추가

- nachocode SDK를 초기화할 수 있는 `init(apiKey: string, options?: InitializeOptions)` 메서드가 추가되었습니다.
- 초기화 후, `env.isInitialized()`로 초기화 완료 여부를 확인할 수 있습니다.

➡️ [`init` 함수 문서 확인하기](/docs/sdk/getting-started)

#### 사용 예제 (`init`)

```javascript
if (window.Nachocode) {
  Nachocode.init('your_api_key_here', { logger: true });
} else {
  console.error('Nachocode SDK not loaded');
}
```

---

### 2. 앱 실행 환경 및 설정 확인 (`env` 네임스페이스)

- 현재 실행 환경(Web / App) 확인: `env.isApp()`, `env.isWeb()`
- SDK 버전 및 소스 버전 확인: `env.getSDKVersion()`
- 현재 환경 상세 정보 조회: `env.getCurrentEnv()`

➡️ [`env` 네임스페이스 문서 확인하기](/docs/sdk/namespaces/env)

#### 추가된 메서드 (`env`)

| 메서드             | 설명                                    |
| ------------------ | --------------------------------------- |
| `getCurrentEnv()`  | 현재 앱의 환경 정보를 반환합니다.       |
| `getSDKVersion()`  | SDK 버전을 반환합니다.                  |
| `getRunningEnv()`  | 웹/앱 실행 환경을 반환합니다.           |
| `isApp()`          | 앱 환경 여부를 반환합니다.              |
| `isWeb()`          | 웹 환경 여부를 반환합니다.              |
| `isInitialized()`  | SDK가 초기화되었는지 여부를 반환합니다. |
| `isUsingSandbox()` | Sandbox 서버 사용 여부를 반환합니다.    |

#### 사용 예제 (`env`)

```javascript
if (Nachocode.env.isApp()) {
  console.log('앱 환경입니다.');
}

console.log(`현재 SDK 버전: ${Nachocode.env.getSDKVersion()}`);
```

---

### 3. 디바이스 타입 감지 기능 추가 (`device` 네임스페이스)

- 디바이스가 Android, iOS, Unknown 중 어느 타입인지 감지할 수 있습니다.

➡️ [`device` 네임스페이스 문서 확인하기](/docs/sdk/namespaces/device)

#### 추가된 메서드 (`device`)

| 메서드         | 설명                               |
| -------------- | ---------------------------------- |
| `detectType()` | 디바이스 타입을 감지합니다.        |
| `getType()`    | 저장된 디바이스 타입을 반환합니다. |
| `isAndroid()`  | Android 디바이스인지 확인합니다.   |
| `isIOS()`      | iOS 디바이스인지 확인합니다.       |

#### 사용 예제 (`device`)

```javascript
const deviceType = Nachocode.device.detectType();
console.log(`디바이스 타입: ${deviceType}`);

if (Nachocode.device.isAndroid()) {
  console.log('Android 디바이스입니다.');
}
```

---

### 4. 푸시 토큰 관리 기능 추가 (`push` 네임스페이스)

- 기기에서 푸시 토큰을 발급받고, 서버에 등록하거나 삭제할 수 있습니다.

➡️ [`push` 네임스페이스 문서 확인하기](/docs/sdk/namespaces/push)

#### 추가된 메서드 (`push`)

| 메서드                      | 설명                                    |
| --------------------------- | --------------------------------------- |
| `getPushToken()`            | 기기의 푸시 토큰을 발급받습니다.        |
| `registerPushToken(userId)` | 발급받은 푸시 토큰을 서버에 등록합니다. |
| `deletePushToken(userId)`   | 등록된 푸시 토큰을 서버에서 삭제합니다. |

#### 사용 예제 (`push`)

```javascript
async function registerPush() {
  const token = await Nachocode.push.getPushToken();
  await Nachocode.push.registerPushToken('your_user_id');
  console.log('푸시 토큰 등록 완료:', token);
}
```

---

### 업데이트 방법

nachocode JavaScript Client SDK **ver.1.0.0**를 사용하려면 아래의 스크립트를 추가 하십시오.

#### SDK CDN 주소

```html
<script src="https://cdn.nachocode.io/nachocode/client-sdk/@1.0.0/client-sdk.min.js"></script>
```
