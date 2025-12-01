---
sidebar_label: 'ver.1.4.0 (25.02.06)'
description: nachocode Client SDK ver.1.4.0의 릴리즈노트입니다.
image: /img/docs/releases/release_note_sdk_detail.png
---

# Release: ver.1.4.0 (2025-02-06)

import { ThumbnailImage } from '@site/src/components/common/image/thumbnail-image';

<ThumbnailImage src='/img/docs/releases/release_note_sdk_detail.png'/>

> 🔔 **배포 일자:** 2025-02-06

이번 업데이트에서는 **QR 코드 스캔 지원**, **소셜 로그인 지원 (Apple, Facebook)**, **클립보드 기능 지원**, **첫 실행 여부 확인 기능** 등 다양한 기능이 추가되었습니다.

## 주요 변경 사항 (ver.1.4.0)

### 🚨 중요 안내: `refresh` 네임스페이스 사용 중단 예정 (Deprecated)

- nachocode SDK ver.1.4.0부터 더 이상 `refresh` 네임스페이스가 지원되지 않습니다.
- 이제 당겨서 새로고침 기능 제어는 `setting.setPullToRefresh` 메서드를 통해 이루어지며, 기존 `refresh.setPullToRefresh` 메서드를 사용하는 코드는 변경해야 합니다.

  ```javascript
  // 기존 코드 (v1.4.0 미만, 더 이상 지원되지 않음)
  Nachocode.refresh.setPullToRefresh(true); // (X)
  ```

  ```javascript
  // 새로운 코드 (v1.4.0부터)
  Nachocode.setting.setPullToRefresh(true); // (O)
  ```

- `refresh` 네임스페이스는 nachocode SDK **ver.1.5.0에서 완전히 제거될 예정**입니다.
- 아직 `refresh` 네임스페이스를 사용 중이라면, ver.1.4.0부터 즉시 `setting` 네임스페이스로 변경할 것을 권장합니다.

### 추가된 기능 목록

- [QR 코드 스캐너 지원](#1-qr-코드-스캐너-기능-추가-scanner-네임스페이스) ([`scanner`](/docs/sdk/namespaces/scanner))
- [Apple 로그인 (iOS 전용)](#2-apple-소셜-로그인-지원-apple-네임스페이스-ios-전용) ([`apple`](/docs/sdk/integrations/apple/reference))
- [Facebook 로그인 지원](#3-facebook-소셜-로그인-지원-facebook-네임스페이스) ([`facebook`](/docs/sdk/integrations/facebook/reference))
- [클립보드 복사/붙여넣기](#4-클립보드-기능-추가-clipboard-네임스페이스) ([`clipboard`](/docs/sdk/namespaces/clipboard))
- [첫 실행 여부 확인](#5-앱-첫-실행-여부-확인-app-네임스페이스) ([`app`](/docs/sdk/namespaces/app))
- [디바이스 언어 확인](#6-디바이스-언어-확인-기능-추가-device-네임스페이스) ([`device`](/docs/sdk/namespaces/device))
- [네트워크 상태 변경 감지](#7-네트워크-상태-변경-감지-이벤트-추가-event-네임스페이스) ([`event`](/docs/sdk/namespaces/event))
- [당겨서 새로고침 설정 네임스페이스 변경](#8-설정-관련-기능-추가-setting-네임스페이스): [`refresh`](/docs/sdk/namespaces/refresh) → [`setting`](/docs/sdk/namespaces/setting)

---

### 1. QR 코드 스캐너 기능 추가 (`scanner` 네임스페이스)

- 앱에서 **QR 코드 스캐너**를 실행할 수 있는 `openQRCodeScanner` 메서드가 추가되었습니다.
- 이 메서드를 호출하면 기기의 카메라를 통해 QR 코드를 스캔하고 결과를 콜백으로 받을 수 있습니다.
- ➡️ [`scanner` 네임스페이스 문서](/docs/sdk/namespaces/scanner)에서 상세 정보를 확인할 수 있습니다.

#### 추가된 메서드 (`scanner`)

| 메서드                                                   | 설명                         |
| -------------------------------------------------------- | ---------------------------- |
| `Nachocode.scanner.openQRCodeScanner(option, callback?)` | QR 코드 스캐너를 실행합니다. |

#### 사용 예제 (QR 코드 스캐너)

```javascript
Nachocode.scanner.openQRCodeScanner({ openDirect: true }, (data, error) => {
  if (error) {
    console.error('QR 코드 스캔 실패:', error.message);
  } else {
    console.log('QR 코드 데이터:', data);
  }
});
```

---

### 2. Apple 소셜 로그인 지원 (`apple` 네임스페이스) _(iOS 전용)_

- ![iOS Only](https://img.shields.io/badge/iOS_only-gray?logo=apple) 현재 **iOS만 지원**.
- iOS 환경에서 **Apple 계정으로 로그인**을 지원합니다.
- `apple.login` 메서드로 Apple 로그인을 요청할 수 있으며, 원하는 권한(예: 이메일, 이름)을 지정할 수 있습니다.
- 로그인 후 콜백을 통해 인증 결과와 사용자 정보를 받아 처리할 수 있습니다.
- 이와 함께 `apple.isLoggedIn`, `apple.getUserIdentifier` 등의 메서드가 추가되었습니다.
- ➡️ [`apple` 네임스페이스 문서](/docs/sdk/integrations/apple/reference)에서 상세 정보를 확인할 수 있습니다.

#### 추가된 메서드 (`apple`)

| 메서드                                             | 설명                                     |
| -------------------------------------------------- | ---------------------------------------- |
| `Nachocode.apple.login(permissions, callback)`     | Apple 네이티브 소셜 로그인을 수행합니다. |
| `Nachocode.apple.isLoggedIn(identifier, callback)` | Apple 로그인 상태를 확인합니다.          |
| `Nachocode.apple.getUserIdentifier(callback)`      | Apple 사용자 고유 식별자를 반환합니다.   |

#### 사용 예제 (Apple 로그인)

```javascript
// Apple 로그인 요청
// 이메일과 이름 권한을 요구
Nachocode.apple.login(['email', 'fullName'], (result, userData) => {
  if (result.status === 'success') {
    console.log('Apple 로그인 성공:', userData);
  } else {
    console.error('Apple 로그인 실패:', result.errorCode, result.message);
  }
});
```

---

### 3. Facebook 소셜 로그인 지원 (`facebook` 네임스페이스)

- `facebook.login` 메서드로 네이티브 Facebook 로그인을 요청할 수 있으며 요구할 권한 범위를 지정할 수 있습니다.
- 인증 결과와 사용자 정보는 콜백으로 받을 수 있습니다.
- 이와 함께 `facebook.isLoggedIn`, `facebook.getUserData`, `facebook.logout` 등의 메서드가 추가되었습니다.
- ➡️ [`facebook` 네임스페이스 문서](/docs/sdk/integrations/facebook/reference)에서 상세 정보를 확인할 수 있습니다.

#### 추가된 메서드 (`facebook`)

| 메서드                                                  | 설명                                        |
| ------------------------------------------------------- | ------------------------------------------- |
| `Nachocode.facebook.login(permissions, callback)`       | Facebook 네이티브 소셜 로그인을 수행합니다. |
| `Nachocode.facebook.isLoggedIn(callback)`               | Facebook 로그인 상태를 확인합니다.          |
| `Nachocode.facebook.getUserData(permissions, callback)` | Facebook 사용자 데이터를 반환합니다.        |
| `Nachocode.facebook.logout()`                           | Facebook 네이티브 로그아웃을 수행합니다.    |

#### 사용 예제 (Facebook 로그인)

```javascript
// Facebook 로그인 요청
// 이메일과 유저 프로필 권한을 요구
Nachocode.facebook.login(
  ['email', 'public_profile'],
  (result, accessToken, userId, userData) => {
    if (result.status === 'success') {
      console.log('Facebook 로그인 성공:', userData);
    } else {
      console.error('Facebook 로그인 실패:', result.errorCode, result.message);
    }
  }
);
```

---

#### 4. 클립보드 기능 추가 (`clipboard` 네임스페이스)

- 클립보드에 텍스트를 **복사**하거나 **가져오는 기능**이 추가되었습니다.
- `clipboard.setText` 메서드로 텍스트를 클립보드에 복사할 수 있습니다.
- `clipboard.getText` 메서드로 클립보드의 텍스트를 가져올 수 있습니다.
- ➡️ [`clipboard` 네임스페이스 문서](/docs/sdk/namespaces/clipboard)에서 상세 정보를 확인할 수 있습니다.

#### 추가된 메서드 (`clipboard`)

| 메서드                                         | 설명                                            |
| ---------------------------------------------- | ----------------------------------------------- |
| `Nachocode.clipboard.getText(callback)`        | 네이티브 클립보드에 저장된 텍스트를 반환합니다. |
| `Nachocode.clipboard.setText(text, callback?)` | 텍스트를 네이티브 클립보드에 저장합니다.        |

#### 사용 예제 (클립보드)

```javascript
// 클립보드에 텍스트 저장
Nachocode.clipboard.setText('Nachocode is awesome!', (status, message) => {
  console.log(status === 'success' ? '복사 성공' : `오류 발생: ${message}`);
});
```

```javascript
// 클립보드에서 텍스트 가져오기
Nachocode.clipboard.getText(text => {
  console.log('클립보드 내용:', text);
});
```

---

### 5. 앱 첫 실행 여부 확인 (`app` 네임스페이스)

- 애플리케이션이 **처음 실행되었는지 여부**를 확인하는 `app.checkFirstLaunch` 메서드가 추가되었습니다.
- 이 메서드는 앱이 최초 실행인지 여부를 콜백으로 반환합니다.
- ➡️ [`app` 네임스페이스 문서](/docs/sdk/namespaces/app)에서 상세 정보를 확인할 수 있습니다.

#### 추가된 메서드 (`app`)

| 메서드                                     | 설명                                       |
| ------------------------------------------ | ------------------------------------------ |
| `Nachocode.app.checkFirstLaunch(callback)` | 앱이 최초 실행되었는 지 여부를 확인합니다. |

#### 사용 예제 (첫 실행 확인)

```javascript
// 앱이 처음으로 실행되었는지 여부 확인
Nachocode.app.checkFirstLaunch(isFirstLaunch => {
  if (isFirstLaunch) {
    console.log('앱이 처음 실행되었습니다.');
  } else {
    console.log('앱이 이미 실행된 적 있습니다.');
  }
});
```

---

### 6. 디바이스 언어 확인 기능 추가 (`device` 네임스페이스)

- 현재 디바이스의 언어를 가져올 수 있는 `device.getCurrentLanguage` 메서드가 추가되었습니다.
- 이 메서드는 콜백을 통해 기기의 언어 코드를 반환합니다.
- ➡️ [`device` 네임스페이스 문서](/docs/sdk/namespaces/device)에서 상세 정보를 확인할 수 있습니다.

#### 추가된 메서드 (`device`)

| 메서드                                          | 설명                                    |
| ----------------------------------------------- | --------------------------------------- |
| `Nachocode.device.getCurrentLanguage(callback)` | 디바이스의 현재 언어 코드를 반환합니다. |

#### 사용 예제 (디바이스 언어 확인)

```javascript
Nachocode.device.getCurrentLanguage(language => {
  console.log(`현재 디바이스 언어: ${language}`);
});
```

---

### 7. 네트워크 상태 변경 감지 이벤트 추가 (`event` 네임스페이스)

- 네트워크 상태 변화(예: Wi-Fi에서 셀룰러로 전환, 인터넷 연결 끊김 등)를 감지하는 `networkchanged` 이벤트가 추가되었습니다.
- 해당 이벤트를 통해 연결 상태 변화 시점에 자동으로 콜백이 실행됩니다.
- ➡️ [`event` 네임스페이스 문서](/docs/sdk/namespaces/event)에서 상세 정보를 확인할 수 있습니다.

#### 추가된 이벤트 (`event`)

| 이벤트           | 설명                                                               |
| ---------------- | ------------------------------------------------------------------ |
| `networkchanged` | 네트워크 상태(연결 여부, 연결 방식 등)가 변경될 때 호출되는 이벤트 |

#### 사용 예제 (네트워크 이벤트)

```javascript
Nachocode.event.on('networkchanged', status => {
  console.log(
    `네트워크 상태 변경: ${status.isConnected ? '연결됨' : '연결 끊김'}`
  );
  console.log(`연결 유형: ${status.connectionType}`);
});
```

---

### 8. 설정 관련 기능 추가 (`setting` 네임스페이스)

- `setPullToRefresh` 당겨서 새로고침(Pull to Refresh) 기능 제어 메서드가 기존 `refresh` 네임스페이스에서 `setting` 네임스페이스로 이동되었습니다.
- 앱에서 확대/축소(ZOOM) 허용 여부를 제어할 수 있는 `setSupportZoom` 메서드가 추가되었습니다.
- ➡️ [`setting` 네임스페이스 문서](/docs/sdk/namespaces/setting)에서 상세 정보를 확인할 수 있습니다.

#### 추가된 메서드 (`setting`)

| 메서드                                       | 설명                                               |
| -------------------------------------------- | -------------------------------------------------- |
| `Nachocode.setting.setPullToRefresh(enable)` | 당겨서 새로고침 기능을 활성화 또는 비활성화합니다. |
| `Nachocode.setting.setSupportZoom(enable)`   | 화면 확대 기능을 활성화 또는 비활성화합니다.       |

#### 사용 예제 (설정 제어)

```javascript
// 화면 확대 기능 활성화
Nachocode.setting.setSupportZoom(true);
```

```javascript
// 당겨서 새로고침 기능 활성화
Nachocode.setting.setPullToRefresh(true);
```

---

### 업데이트 방법

nachocode JavaScript Client SDK **ver.1.4.0**를 사용하려면 아래의 스크립트를 업데이트하십시오.

#### SDK CDN 주소

```html
<script src="https://cdn.nachocode.io/nachocode/client-sdk/@1.4.0/client-sdk.min.js"></script>
```
